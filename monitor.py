import frida
import sys
import os
import time
import logging
import subprocess
import os
import getopt
from subprocess import call, PIPE, Popen

logging.basicConfig(level=logging.INFO,  
                    format = "%(asctime)s %(message)s",  
                    datefmt = '%Y-%m-%d %H:%M',
                    filename = "log.txt",  
                    filemode = "w")  

def build_monitor_script(dir, topdown = True):
    global excludes
    script = ""
    for root, dirs, files in os.walk(dir, topdown):
        for name in files:
            if name in excludes:
                print("exclude " + name)
            else:
                print("include " + name)
                script += open(os.path.join(root,name)).read()
    return script 


def on_message(message, data):
    if message['type'] == 'send':
        logging.info(message['payload'])
    elif message['type'] == 'error':
        logging.info(message['stack'])

def start_app(apkFile, packageName, launcherActivity):
    #install apk
    cmd = "adb install -r " + apkFile
    ret = subprocess.call(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if (ret == 1):
        print("[ERROR]: failed install apk")
        sys.exit(1)
    print("successfully installed apk")
    #launch app
    cmd = "adb shell am start -n " + packageName + "/" + launcherActivity
    ret = subprocess.call(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if (ret == 1):
        print("[ERROR]: failed to launch app")
        sys.exit(1)
    print("successfully launched app")
    #prepare for frida
    cmd = "adb forward tcp:27042 tcp:27042"
    ret = subprocess.call(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

def help():
    print("-h --help\n-c --class xxx\n-e --exclude api\n-t --type android,ios,linux,windows,mac\n-U --usb target is usb device\n-p --pid pid\n-n --name process name\n")

def error():
    print("error: -t, -p or -n must be specified\n")

excludes = []
classes = []

def main():
    try:
        options,args = getopt.getopt(sys.argv[1:],"hp:c:e:t:Up:p:n:", ["help", "class", "exclude", "type", "usb", "pid", "name"])
    except getopt.GetoptError:
        help()
        sys.exit()

    targes=["android","ios","linux","windows","mac"]
    mobiles=["android","ios"]
    global excludes
    global classes
    devtype=""
    pid = ""
    pname = ""
    for name,value in options:
        if name in ("-h","--help"):
            help()
        if name in ("-t","--type"):
            devtype = value
        if name in ("-U","--usb"):
            continue
        if name in ("-p","--pid"):
            pid=value
        if name in ("-n","--name"):
            pname=value
        if name in ("-e","--exclude"):
            excludes.append(value + ".js")
        if name in ("-c","--class"):
            classes.append(value)

    if len(devtype) == 0:
        error()
        return

    if devtype in targes:
        print(devtype)
    else:
        print("error: -t " + str(targes));
        return

    if len(pid) == 0 and len(pname) == 0:
        error()
        return

    tid = None
    if len(pid) == 0:
        tid=pname
    else:
        tid=int(pid)

    session = None
    try:
        if devtype in mobiles:
            session = frida.get_usb_device().attach(tid)
        else:
            session = frida.attach(tid)
    except Exception as e:
        print("[ERROR]: %s" % str(e))
        sys.exit(1)
    print("successfully attached to app")
    if len(classes) == 0:
        script_dir = os.path.join(".", "scripts/" + devtype)
    else:
        script_dir = os.path.join(".", "scripts/" + devtype + "/" + classes[0])
    script_content = build_monitor_script(script_dir)
    script = session.create_script(script_content)  
    script.on("message", on_message)
    script.load()

    #prevent the python script from terminating
    start = time.clock()
    while True:
        end = time.clock()
        if int(end - start) > 300:
            session.detach()
            break

if __name__ == "__main__":
    main()
