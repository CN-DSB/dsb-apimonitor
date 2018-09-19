//int inotify_add_watch(int fd, const char *pathname, uint32_t mask);
Interceptor.attach(Module.findExportByName(null , "inotify_add_watch"), {
    onEnter: function(args) {
        send("inotify_add_watch fd=" + args[0] +
	" pathname=" + Memory.readUtf8String(args[1]) +
	" mask=" + args[2]);
    },
    onLeave:function(retval){
    
    }
});
