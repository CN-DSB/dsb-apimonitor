#!/usr/bin/python
#chmod +x android_tools.py

import os
import getopt
import sys

def help():
    print("-h --help\n-l --list\n-g --get packagename\n-m --manifest xxx.apk\n");

def main():
    if len(sys.argv) == 1:
        help()
        return
    try:
        options,args = getopt.getopt(sys.argv[1:],"hp:lp:g:m:", ["help", "list", "get", "manifest"])
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
        if name in ("-m","--manifest"):
            cmd="unzip -d .tmp " + value
            os.popen(cmd).read()
            cmd="java -jar tools/AXMLPrinter2.jar .tmp/AndroidManifest.xml"
            #print(cmd)
            str=os.popen(cmd).read()
            print(str)
            os.system("rm -rf .tmp")

if __name__ == "__main__":
    main()


