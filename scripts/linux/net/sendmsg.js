Interceptor.attach(Module.findExportByName(null , "sendmsg"), {
    onEnter: function(args) {
    send("sendmsg");
    },
    onLeave:function(retval){
    
    }
});
