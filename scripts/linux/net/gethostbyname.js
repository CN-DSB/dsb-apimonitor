Interceptor.attach(Module.findExportByName(null , "gethostbyname"), {
    onEnter: function(args) {
    send("gethostbyname");
    },
    onLeave:function(retval){
    
    }
});
