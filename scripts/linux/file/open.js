Interceptor.attach(Module.findExportByName(null , "open"), {
    onEnter: function(args) {
        send("open pathname=\"" +
	Memory.readUtf8String(args[0]) +
	"\"" +
	", flags=" + args[1] +
    ")");
    },
    onLeave:function(retval){
    
    }
});
