Interceptor.attach(Module.findExportByName(null , "gethostbyname2"), {
    onEnter: function(args) {
    send("gethostbyname2");
    },
    onLeave:function(retval){
    
    }
});
