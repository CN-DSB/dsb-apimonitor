Interceptor.attach(Module.findExportByName(null , "fread"), {
    onEnter: function(args) {
    send("fread ptr=" + args[0] +
	    " size=" + args[1] +
	    " nmemb=" + args[2] +
	    " stream=" + args[3]
    );
    },
    onLeave:function(retval){
    
    }
});
