Interceptor.attach(Module.findExportByName(null , "rename"), {
    onEnter: function(args) {
    send("rename(" +
      "oldpath=\"" + Memory.readUtf8String(args[0]) + "\"" +
      ", newpath=\"" + Memory.readUtf8String(args[1]) + "\"" +
    ")");
    },
    onLeave:function(retval){
    
    }
});
