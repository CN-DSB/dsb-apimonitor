Interceptor.attach(Module.findExportByName("libandroid_runtime.so" , "_ZN7android11AudioRecord4readEPvmb"), {
    onEnter: function(args) {
    send("_ZN7android11AudioRecord4readEPvmb");
    },
    onLeave:function(retval){
    
    }
});
