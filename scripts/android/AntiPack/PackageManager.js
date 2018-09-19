Java.perform(function() {
    var cn = "android.app.ApplicationPackageManager";
    var packageManager = Java.use(cn);
    if (packageManager) {
        //hook getPackageInfo
        packageManager.getPackageInfo.overload('java.lang.String', 'int').implementation = function() {
	    if(64 == arguments[1])
                send("call " + cn + "->getPackageInfo GET_SIGNATURES " + arguments[0]);
            return this.getPackageInfo.apply(this, arguments);
        };
    }
});
