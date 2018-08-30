Interceptor.attach(Module.findExportByName(null , "pwrite"), {
    onEnter: function(args) {
    send("pwrite");
    },
    onLeave:function(retval){
    
    }
});
