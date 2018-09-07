Interceptor.attach(Module.findExportByName(null , "fgetpos"), {
    onEnter: function(args) {
    send("fgetpos FILE=" + args[0]);
    },
    onLeave:function(retval){
    
    }
});
