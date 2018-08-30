Interceptor.attach(Module.findExportByName(null , "sendmmsg"), {
    onEnter: function(args) {
    send("sendmmsg");
    },
    onLeave:function(retval){
    
    }
});
