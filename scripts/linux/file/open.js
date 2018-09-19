Interceptor.attach(Module.findExportByName(null , "open"), {
    onEnter: function(args) {
        send("open pathname=\"" +
	Memory.readUtf8String(args[0]) +
	"\"" +
	", flags=" + args[1] +
    ")");

	this.pathname=Memory.readUtf8String(args[0])
    },
    onLeave:function(retval){
   	send("open retval=" + retval + " pathname=" + this.pathname); 
    }
});
