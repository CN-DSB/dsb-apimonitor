Interceptor.attach(Module.findExportByName(null , "read"), {
    onEnter: function(args) {
    send("read fd=" + args[0] + 
	    " buf=" + args[1] + 
	    " count=" + args[2]);
    },
    onLeave:function(retval){
    
    }
});
