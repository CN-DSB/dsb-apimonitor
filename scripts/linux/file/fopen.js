Interceptor.attach(Module.findExportByName(null , "fopen"), {
    onEnter: function(args) {
        send("fopen pathname=" + Memory.readUtf8String(args[0]) +
		" mode=" + args[1]
	);
    },
    onLeave:function(retval){
    
    }
});
