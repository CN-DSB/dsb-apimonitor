Interceptor.attach(Module.findExportByName(null , "getaddrinfo"), {
    onEnter: function(args) {
    send("getaddrinfo");
    },
    onLeave:function(retval){
    
    }
});
