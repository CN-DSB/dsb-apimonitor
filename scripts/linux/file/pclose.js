Interceptor.attach(Module.findExportByName(null , "pclose"), {
    onEnter: function(args) {
    send("pclose stream=" + args[0]);
    },
    onLeave:function(retval){
    
    }
});
