Interceptor.attach(Module.findExportByName(null , "fseek"), {
    onEnter: function(args) {
    send("fseek file=" + args[0] +
    	" offset=" + args[1] +
    	" whence=" + args[2]);
    },
    onLeave:function(retval){
    
    }
});
