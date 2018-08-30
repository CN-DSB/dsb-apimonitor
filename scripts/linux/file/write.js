Interceptor.attach(Module.findExportByName(null , "write"), {
    onEnter: function(args) {
    send("write");
    },
    onLeave:function(retval){
    
    }
});
