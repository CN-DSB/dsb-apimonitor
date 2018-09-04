Interceptor.attach(Module.findExportByName(null , "fwrite"), {
    onEnter: function(args) {
    send("fwrite ptr=" + args[0] +
	    " size=" + args[1] +
	    " nmemb=" + args[2] +
	    " stream=" + args[3]
    );
    },
    onLeave:function(retval){
    
    }
});
