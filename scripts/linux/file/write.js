Interceptor.attach(Module.findExportByName(null , "write"), {
    onEnter: function(args) {
    send("write fd=" + args[0] +
	    " buf=" + args[1] +
	    " count=" + args[2]
    );
    },
    onLeave:function(retval){
    
    }
});
