'use strict';
var c_openmemory = Module.findExportByName("libart.so", "_ZN3art7DexFile10OpenMemoryEPKhjRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEjPNS_6MemMapEPKNS_10OatDexFileEPS9_");
Interceptor.attach(c_openmemory, {
    onEnter: function (args) {
      
        //dex起始位置
        var begin = args[1]
        //打印magic
        console.log("magic : " + Memory.readUtf8String(begin))
        //dex fileSize 地址
        var address = parseInt(begin,16) + 0x20
        //dex 大小
        var dex_size = Memory.readInt(ptr(address))

	send("OpenMemory address:" + address + " dex_size:" + dex_size);
    },
    onLeave: function (retval) {
    }
});
