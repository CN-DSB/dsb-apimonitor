Interceptor.attach(Module.findExportByName(null , "rewind"), {
    onEnter: function(args) {
    send("rewind ");
    },
    onLeave:function(retval){
    
    }
});
