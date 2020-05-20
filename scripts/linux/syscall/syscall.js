Interceptor.attach(Module.findExportByName("libc.so" , "syscall"), {
    onEnter: function(args) {
        var number1 = args[0];
        var number2 = args[1];
        send("syscall " + number1 + " " + number2);
        var fun = 0;
        switch(number2)
        {
            case 3:
                fun="read";
                break;
            case 4:
                fun="write";
                break;
            case 5:
                fun="open";
                break;
            case 192:
                fun="mmap2";
                break;
            case 240:
                fun="futex";
                break;
            default:
                fun=number2;
        }
        this.funname=fun;
    },
    onLeave:function(retval){
   	send("syscall " + this.funname +" retval=" + retval); 
    }
});
