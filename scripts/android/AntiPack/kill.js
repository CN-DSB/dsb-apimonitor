Interceptor.attach(Module.findExportByName(null , "kill"), {
    onEnter: function(args) {
    send("kill(" + args[0] +
      ", " + args[1] +
    ")");
    },
    onLeave:function(retval){
    
    }
});
