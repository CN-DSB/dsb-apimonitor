Interceptor.attach(Module.findExportByName(null , "sendto"), {
    onEnter: function(args) {
    send("sendto");
    },
    onLeave:function(retval){
    
    }
});
