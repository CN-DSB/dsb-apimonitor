Interceptor.attach(Module.findExportByName(null , "mmap"), {
    onEnter: function(args) {
    send("mmap(" +
      "addr=" + args[0] +
      ", length=" + args[1] +
      ", prot=" + args[2] +
      ", flags=" + args[3] +
      ", fd=" + args[4] +
      ", offset=" + args[5] +
    ")");
    },
    onLeave:function(retval){
    
    }
});
