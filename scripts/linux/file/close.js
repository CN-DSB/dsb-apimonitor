Interceptor.attach(Module.findExportByName(null , "close"), {
    onEnter: function(args) {
    send("close");
    },
    onLeave:function(retval){
    
    }
});
