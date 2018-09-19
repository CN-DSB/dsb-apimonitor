//char *strcasestr(const char *haystack, const char *needle);
//char *strstr(const char *haystack, const char *needle);
Interceptor.attach(Module.findExportByName(null , "strcasestr"), {
    onEnter: function(args) {
        //send("strcasestr haystack=" + Memory.readUtf8String(args[0]) + 
	//	" needle=" + Memory.readUtf8String(args[1]));

        send("strcasestr needle=" + Memory.readUtf8String(args[1]));
    },
    onLeave:function(retval){
    
    }
});

Interceptor.attach(Module.findExportByName(null , "strstr"), {
    onEnter: function(args) {
        send("strstr needle=" + Memory.readUtf8String(args[1]));
    },
    onLeave:function(retval){
    
    }
});
