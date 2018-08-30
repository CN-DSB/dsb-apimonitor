Java.perform(function() {
    var cn = "android.app.Activity";
    var activityManager = Java.use(cn);
    if (activityManager) {
        //hook onCreate
        activityManager.onCreate.overload('android.os.Bundle').implementation = function() {
            send("call " + cn + "->onCreate");
            return this.onCreate.apply(this, arguments);
        };
        //hook forceStopPackage
        activityManager.startActivityForResult.overload('android.content.Intent', 'int', 'android.os.Bundle').implementation = function() {
            send("call " + cn + "->startActivityForResult");
            return this.startActivityForResult.apply(this, arguments);
        };
    }
});
