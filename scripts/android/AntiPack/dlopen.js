Interceptor.attach(Module.findExportByName(null , "dlopen"), {
    onEnter: function(args) {
        send("dlopen filename=" + Memory.readUtf8String(args[0]) +
		" flags=" + args[1]
    );
    },
    onLeave:function(retval){
    
    }
});
