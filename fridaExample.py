#archlinux install frida, pipx install frida-tools
import sys
sys.path.append('/home/wzl/.local/share/pipx/venvs/frida-tools/lib/python3.11/site-packages')

import frida
import time

def on_message(message, data):
    print(message)

def main():
    # 连接到目标进程
    pid = int(24020)
    #session = frida.attach("com.example.app")
    session = frida.get_usb_device().attach(pid)

    # 注入 Frida 脚本
    script = session.create_script("""
        console.log("[*] Starting script");

        // 获取要 hook 的 libc 函数
        var pFunc = Module.findExportByName("libandroid_runtime.so", "_ZN7android10AudioTrack5writeEPKvmb");
        console.log("[*] Native function: " + pFunc);

        Interceptor.attach(pFunc, {
            // 打印入参
            onEnter: function (args) {
                console.log("enter function");
            },
            // 打印返回值
            onLeave: function (returnValue) {
            }
        });
    """)

    # 将消息回调函数附加到脚本
    script.on('message', on_message)

    # 加载并运行脚本
    script.load()

    start = time.process_time()
    while True:
        end = time.process_time()
        if int(end - start) > 300:
            session.detach()
            break

if __name__ == "__main__":
    main()
