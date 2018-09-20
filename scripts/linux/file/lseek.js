Interceptor.attach(Module.findExportByName(null , "lseek"), {
    onEnter: function(args) {
    send("lseek fd=" + args[0] +
    	" offset=" + args[1] + 
    	" whence" + args[2]);
    },
    onLeave:function(retval){
    
    }
});
