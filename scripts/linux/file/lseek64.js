Interceptor.attach(Module.findExportByName(null , "lseek64"), {
    onEnter: function(args) {
    send("lseek64 fd=" + args[0] +
    	" off64_t=" + args[1] + 
    	" whence=" + args[2]);
    },
    onLeave:function(retval){
    
    }
});
