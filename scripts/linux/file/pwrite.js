Interceptor.attach(Module.findExportByName(null , "pwrite"), {
    onEnter: function(args) {
    send("pwrite fildes=" + args[0] +
	    " buf=" + args[1] +
	    " nbyte=" + args[2] +
	    " offset=" + args[3]
    );
    },
    onLeave:function(retval){
    
    }
});
