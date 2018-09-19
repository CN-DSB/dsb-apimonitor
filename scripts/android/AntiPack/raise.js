//int raise(int sig);
Interceptor.attach(Module.findExportByName(null , "raise"), {
    onEnter: function(args) {
        send("raise sig=" + args[0]);
    },
    onLeave:function(retval){
    
    }
});
