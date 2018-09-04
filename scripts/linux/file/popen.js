Interceptor.attach(Module.findExportByName(null , "popen"), {
    onEnter: function(args) {
        send("popen command=" + args[0] +
		" type=" + args[1]
    );
    },
    onLeave:function(retval){
    
    }
});
