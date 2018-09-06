Interceptor.attach(Module.findExportByName(null , "dup"), {
    onEnter: function(args) {
        send("dup fd=" + args[0]);
    },
    onLeave:function(retval){
   	send("dup retval=" + retval); 
    }
});
