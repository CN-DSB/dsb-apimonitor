Interceptor.attach(Module.findExportByName(null , "sendfile"), {
    onEnter: function(args) {
    send("sendfile");
    },
    onLeave:function(retval){
    
    }
});
