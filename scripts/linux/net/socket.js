Interceptor.attach(Module.findExportByName(null , "socket"), {
    onEnter: function(args) {
    send("socket");
    },
    onLeave:function(retval){
    
    }
});
