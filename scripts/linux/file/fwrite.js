Interceptor.attach(Module.findExportByName(null , "fwrite"), {
    onEnter: function(args) {
    send("fwrite");
    },
    onLeave:function(retval){
    
    }
});
