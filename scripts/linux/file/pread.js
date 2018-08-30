Interceptor.attach(Module.findExportByName(null , "pread"), {
    onEnter: function(args) {
    send("pread");
    },
    onLeave:function(retval){
    
    }
});
