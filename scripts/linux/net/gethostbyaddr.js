Interceptor.attach(Module.findExportByName(null , "gethostbyaddr"), {
    onEnter: function(args) {
    send("gethostbyaddr");
    },
    onLeave:function(retval){
    
    }
});
