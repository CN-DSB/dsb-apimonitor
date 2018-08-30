Interceptor.attach(Module.findExportByName(null , "fread"), {
    onEnter: function(args) {
    send("fread");
    },
    onLeave:function(retval){
    
    }
});
