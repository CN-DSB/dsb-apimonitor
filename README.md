# apimonitor

修改https://github.com/uniking/AppMonitor，用来观察linux，android应用的调用逻辑


2018/8/30


编写一个android工具，用于获取已安装在手机上的apk信息，主要想获取包名和LAUNCHER Activity.
./android-tools.py -l 获取已安装程序列表
./android-tools.py -g com.android.bluetooth 从手机中下载apk
./android-tools.py -m ./Bluetooth.apk  查看AndroidManifest.xml
./android-tools.py -c 查看当前的Activity
./android-tools.py -H package/activity 启动apk并等待调试
./android-tools.py -s frida-server 启动frida-server
