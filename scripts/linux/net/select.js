Interceptor.attach(Module.findExportByName(null , "select"), {
    onEnter: function(args) {
    send("select");
    },
    onLeave:function(retval){
    
    }
});
