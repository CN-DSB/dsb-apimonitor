Interceptor.attach(Module.findExportByName(null , "fclose"), {
    onEnter: function(args) {
        send("fclose");
    },
    onLeave:function(retval){
    
    }
});
