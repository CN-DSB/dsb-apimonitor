Interceptor.attach(Module.findExportByName(null , "popen"), {
    onEnter: function(args) {
        send("popen command=" + Memory.readUtf8String(args[0]) +
		" type=" + Memory.readUtf8String(args[1])
    );
    },
    onLeave:function(retval){
    
    }
});
