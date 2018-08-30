Interceptor.attach(Module.findExportByName(null , "gethostbyname_r"), {
    onEnter: function(args) {
    send("gethostbyname_r");
    },
    onLeave:function(retval){
    
    }
});
