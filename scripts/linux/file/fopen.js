Interceptor.attach(Module.findExportByName(null , "fopen"), {
    onEnter: function(args) {
        send("fopen pathname=" + Memory.readUtf8String(args[0]) +
		" mode=" + args[1]
	);
        this.filepath=Memory.readUtf8String(args[0]);
    },
    onLeave:function(retval){
    	send("fopen retval=" + retval + " filepath=" + this.filepath);
    }
});
