Interceptor.attach(Module.findExportByName(null , "fclose"), {
    onEnter: function(args) {
        send("fclose stream=" + args[0]);
    },
    onLeave:function(retval){
    
    }
});
