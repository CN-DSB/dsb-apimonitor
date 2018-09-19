/*
status 防止被调试
wchan ptrace_stop
stat 检测挂起状态
tcp 调试端口
cmdline 防止被其他进程启动
task 检测线程数量
*/
Interceptor.attach(Module.findExportByName(null , "open"), {
    onEnter: function(args) {
	var pathname=Memory.readUtf8String(args[0]);

        if(pathname.indexOf("/proc/") != -1)
	{
		if( pathname.indexOf("status") != -1 || 
			pathname.indexOf("stat") != -1 ||
			pathname.indexOf("tcp") != -1 ||
			pathname.indexOf("cmdline") != -1 ||
			pathname.indexOf("wchan") != -1 ||
			pathname.indexOf("task") != -1
		)
			send("open pathname=" + pathname);
	}

	if(pathname.indexOf("/base.apk") != -1)
		send("open pathname=" + pathname);
    },
    onLeave:function(retval){
   	
    }
});
