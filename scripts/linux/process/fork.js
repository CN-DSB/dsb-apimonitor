Interceptor.attach(Module.findExportByName(null , "fork"), {
    onEnter: function(args) {
    send("fork");
    },
    onLeave:function(retval){
    send("fork retval=" + retval);
    }
});
