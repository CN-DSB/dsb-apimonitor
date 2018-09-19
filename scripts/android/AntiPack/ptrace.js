//ong ptrace(enum __ptrace_request request, pid_t pid,
//                   void *addr, void *data);
Interceptor.attach(Module.findExportByName(null , "ptrace"), {
    onEnter: function(args) {
        send("ptrace pid=" + args[1]);
    },
    onLeave:function(retval){
    
    }
});
