Interceptor.attach(Module.findExportByName(null , "send"), {
    onEnter: function(args) {
    send("send");
    },
    onLeave:function(retval){
    
    }
});
