Interceptor.attach(Module.findExportByName(null , "recv"), {
    onEnter: function(args) {
    send("recv");
    },
    onLeave:function(retval){
    
    }
});
