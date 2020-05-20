Interceptor.attach(Module.findExportByName("libart.so" , "_ZN3art3Dbg8GoActiveEv"), {
    onEnter: function(args) {
    send("_ZN3art3Dbg8GoActiveEv");
    },
    onLeave:function(retval){
    
    }
});
