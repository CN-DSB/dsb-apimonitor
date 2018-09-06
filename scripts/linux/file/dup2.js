Interceptor.attach(Module.findExportByName(null , "dup2"), {
    onEnter: function(args) {
        send("dup2 fd=" + args[0] +
	" fd2=" + args[1]
	);
    },
    onLeave:function(retval){
   	send("dup2 retval=" + retval); 
    }
});
