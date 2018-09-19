# apimonitor

注意：使用tail -f log.t， 等待日志输出停止后再观察，不然容易导致日志缺失。

修改https://github.com/uniking/AppMonitor，用来观察linux，android应用的调用逻辑


2018/8/30


编写一个android工具，用于获取已安装在手机上的apk信息，主要想获取包名和LAUNCHER Activity.
./android-tools.py -l 获取已安装程序列表
./android-tools.py -g com.android.bluetooth 从手机中下载apk
./android-tools.py -m ./Bluetooth.apk  查看AndroidManifest.xml
./android-tools.py -c 查看当前的Activity
./android-tools.py -H package/activity 启动apk并等待调试
./android-tools.py -s frida-server 启动frida-server
./android-tools.py -C 启动hang住的程序

AndroidManifest.xml中搜索android.intent.category.LAUNCHER可找到主Activity
