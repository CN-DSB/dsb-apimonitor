#!/usr/bin/python
#chmod +x android_tools.py

import os
import getopt
import sys

def help():
    print("-h --help\n-l --list\n-g --get packagename\n-m --manifest xxx.apk\n-c --current\n-H --hang package/activity\n-C --continue\n-s --server\n-p --p2p HostPort:ProcessPort, example 23946:23946");

def main():
    if len(sys.argv) == 1:
        help()
        return
    try:
        options,args = getopt.getopt(sys.argv[1:],"hp:lp:g:m:cp:s:H:Cp:pp", ["help", "list", "get", "manifest","current","server","hang","continue", "p2p"])
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
            str=os.popen("adb shell pm path " + value).read()
            print("adb pull " + str)
            pname=str.split(':')[1];
            os.system("adb pull " + pname)
        if name in ("-c","--current"):
            os.system("adb shell dumpsys activity |grep Run")
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
            os.system("jdb -attach 8800")
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

if __name__ == "__main__":
    main()


