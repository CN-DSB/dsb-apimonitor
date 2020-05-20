Interceptor.attach(Module.findExportByName(null , "truncate"), {
    onEnter: function(args) {
        var path = args[0];
        var length = args[1];
        send("truncate pathname=" + Memory.readUtf8String(path) + " length" + length);
    }
});
