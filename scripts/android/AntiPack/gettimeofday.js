//int gettimeofday(struct timeval *restrict tp, void *restrict tzp);
Interceptor.attach(Module.findExportByName(null , "gettimeofday"), {
    onEnter: function(args) {
        send("gettimeofday ...");
    },
    onLeave:function(retval){
    
    }
});
