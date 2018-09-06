Interceptor.attach(Module.findExportByName(null , "fdopen"), {
    fd:0,
    onEnter: function(args) {
        send("fdopen fd=" + args[0] +
		" mode=" + args[1]
	);
        this.fd = args[0]
    },
    onLeave:function(retval){
    	send("fdopen retval=" + retval + " fd=" + this.fd);
    }
});
