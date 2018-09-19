Interceptor.attach(Module.findExportByName(null , "fileno"), {
    onEnter: function(args) {
        send("fileno FILE=" + args[0]);
        this.file=args[0]
    },
    onLeave:function(retval){
   	send("fileno retval=" + retval + " FILE=" + this.file); 
    }
});
