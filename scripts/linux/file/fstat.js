Interceptor.attach(Module.findExportByName(null , "fstat"), {
    onEnter: function(args) {
    send("fstat fd=" + args[0]);
    },
    onLeave:function(retval){
    
    }
});
