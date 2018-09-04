Interceptor.attach(Module.findExportByName(null , "pread"), {
    onEnter: function(args) {
    send("pread fildes=" + args[0] + 
	    " buf=" + args[1] +
	    " nbyte=" + args[2] +
	    " offset=" + args[3]
    );
    },
    onLeave:function(retval){
    
    }
});
