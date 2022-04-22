Interceptor.attach(Module.findExportByName(null , "gethostbyname_r2"), {
    onEnter: function(args) {
    send("gethostbyname_r2");
    },
    onLeave:function(retval){
    
    }
});
