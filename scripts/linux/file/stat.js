Interceptor.attach(Module.findExportByName(null , "stat"), {
    onEnter: function(args) {
    send("stat pathname=" + Memory.readUtf8String(args[0]));
    },
    onLeave:function(retval){
    
    }
});
