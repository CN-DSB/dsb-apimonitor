Interceptor.attach(Module.findExportByName(null , "fopen"), {
    onEnter: function(args) {
        send("fopen");
    },
    onLeave:function(retval){
    
    }
});
