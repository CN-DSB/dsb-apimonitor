Interceptor.attach(Module.findExportByName(null , "read"), {
    onEnter: function(args) {
    send("read");
    },
    onLeave:function(retval){
    
    }
});
