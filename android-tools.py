#!/usr/bin/python
#chmod +x android_tools.py

import os
import getopt
import sys

def help():
    print("-h --help\n-l --list\n-g --get packagename\n-m --manifest xxx.apk\n-c --current\n-H --hang package/activity\n-C --continue\n-s --server\n-p --p2p HostPort:ProcessPort, example 23946:23946\n-S --sign xxx.apk\n-u --user show all user\n");
    
import subprocess
import os
import zipfile

def get_installed_apps():
    """使用 adb 获取所有安装的应用包名"""
    result = subprocess.run(['adb', 'shell', 'pm', 'list', 'packages'], capture_output=True, text=True)
    if result.returncode != 0:
        print("Error retrieving installed packages.")
        return []
    
    # 提取包名（删除前缀 "package:"）
    packages = [line.split(":")[1].strip() for line in result.stdout.splitlines()]
    return packages

def get_apk_paths(package_name):
    """获取某个应用的 APK 路径"""
    result = subprocess.run(['adb', 'shell', 'pm', 'path', package_name], capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error retrieving APK paths for {package_name}")
        return []
    
    # 提取 APK 路径（删除前缀 "package:"）
    apk_paths = [line.split(":")[1].strip() for line in result.stdout.splitlines()]
    return apk_paths

def pull_apk(apk_path, output_dir):
    """拉取 APK 文件到本地"""
    print('pull ', apk_path)
    apk_name = os.path.basename(apk_path)
    local_path = os.path.join(output_dir, apk_name)
    subprocess.run(['adb', 'pull', apk_path, local_path])

def zip_apks(apk_paths, output_path):
    """将多个 APK 文件压缩为一个 .apks 文件"""
    with zipfile.ZipFile(output_path, 'w') as zipf:
        for apk in apk_paths:
            local_path = os.path.basename(apk)
            if os.path.exists(local_path):
                zipf.write(local_path, os.path.basename(local_path))

def backup_apps(package_name):
    print(f"Processing {package_name}...")
    output_dir='.'

    apk_paths = get_apk_paths(package_name)

    if not apk_paths:
        print(f"No APK paths found for {package_name}")
        return

    if len(apk_paths) > 1:
        # 有多个 split APK，打包为 .apks
        for apk_path in apk_paths:
            pull_apk(apk_path, output_dir)
        print('zip ', f"{package_name}.apks")
        zip_apks(apk_paths, os.path.join(output_dir, f"{package_name}.apks"))
        for apk_path in apk_paths:
            print('rm '+os.path.basename(apk_path))
            os.system("rm " + os.path.basename(apk_path))
        print(f"Compressed split APKs into {package_name}.apks")
    else:
        # 只有一个 base APK，直接保存为 .apk
        apk_path = apk_paths[0]
        pull_apk(apk_path, output_dir)
        os.rename(os.path.join(output_dir, os.path.basename(apk_path)),
                    os.path.join(output_dir, f"{package_name}.apk"))
        print(f"Pulled base APK for {package_name} as {package_name}.apk")


def main():
    if len(sys.argv) == 1:
        help()
        return
    try:
        options,args = getopt.getopt(sys.argv[1:],"hp:up:lp:g:m:cp:s:H:Cp:pp:S:", ["help", "user", "list", "get", "manifest","current","server","hang","continue", "p2p","sign"])
    except getopt.GetoptError:
        help()
        sys.exit()

    for name,value in options:
        if name in ("-h","--help"):
            help()
        if name in ("-l","--list"):
            str=os.popen("adb shell pm list package").read()
            print(str)
        if name in ("-g","--get"):
            # str=os.popen("adb shell pm path " + value).read()
            # print("adb pull " + str)
            # pname=str.split(':')[1];
            # os.system("adb pull " + pname)
            backup_apps(value)
        if name in ("-c","--current"):
            os.system("adb shell dumpsys activity |grep topActivity")
        if name in ("-m","--manifest"):
            cmd="unzip -d .tmp " + value
            os.popen(cmd).read()
            cmd="java -jar tools/AXMLPrinter2.jar .tmp/AndroidManifest.xml"
            #print(cmd)
            str=os.popen(cmd).read()
            print(str)
            os.system("rm -rf .tmp")
        if name in ("-H","--hang"):
            os.popen("adb shell am start -D -n " + value).read()
            pnm=value.split('/')[0]
            cmd = "adb shell ps |grep " + pnm + " | awk '{print $2}'"
            #print(cmd)
            pid=os.popen(cmd).read()
            cmd="adb forward tcp:8800 jdwp:" + pid
            print(cmd)
            os.popen(cmd).read()
            print("debug port 8800")
        if name in ("-C","--current"):
            os.system("jdb -attach 127.0.0.1:8800")
        if name in ("-s","--server"):
            fridaServer=os.path.basename(value)
            cmd = "adb shell ls /data/local/tmp/" + fridaServer + " |grep 'No such file'|wc -l"
            print(cmd)
            str=os.popen(cmd).read()
            print(str)
            if str.find('0') == -1:
                cmd="adb push " + value + " /data/local/tmp"
                print(cmd)
                os.popen(cmd).read()
            os.popen("adb root").read()
            os.popen("adb shell chmod +x /data/local/tmp/" + fridaServer).read()
            cmd="adb shell \"/data/local/tmp/" + fridaServer + " &\""
            print(cmd)
            os.system(cmd)
        if name in ("-p", "--p2p"):
            pp=value.split(":")
            cmd = "adb forward tcp:"+pp[0]+" tcp:"+pp[1]
            print(cmd)
            os.system(cmd)
        if name in ("-S", "--sign"):
            cmd = 'keytool -printcert -jarfile ' + value
            os.system(cmd)
        if name in ("-u", "--user"):
            str=os.popen("adb shell pm list users").read()
            print(str)
            
            

if __name__ == "__main__":
    main()


