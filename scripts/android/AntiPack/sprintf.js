//       int sprintf(char *str, const char *format, ...);
//       int snprintf(char *str, size_t size, const char *format, ...);
Interceptor.attach(Module.findExportByName(null , "sprintf"), {
    onEnter: function(args) {
	this.buff=args[0];
    },
    onLeave:function(retval){
    	send("sprintf retval=" + Memory.readUtf8String(this.buff));
    }
});

Interceptor.attach(Module.findExportByName(null , "snprintf"), {
    onEnter: function(args) {
	this.buff=args[0];
    },
    onLeave:function(retval){
    	send("snprintf retval=" + Memory.readUtf8String(this.buff));
    }
});
