Interceptor.attach(Module.findExportByName(null , "close"), {
    onEnter: function(args) {
    send("close fd=" + args[0]);
    },
    onLeave:function(retval){
    
    }
});
