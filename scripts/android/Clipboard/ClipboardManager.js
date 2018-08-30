Java.perform(function() {
    var cn = "android.content.ClipboardManager";
    var activityManager = Java.use(cn);
    if (activityManager) {
        //hook getPrimaryClip
        activityManager.getPrimaryClip.implementation = function() {
            var data = this.getPrimaryClip.apply(this);
            send("call " + cn + "->getPrimaryClip " + data);
            return data;
        };

        //hook setPrimaryClip
        activityManager.setPrimaryClip.implementation = function() {
            send("call " + cn + "->setPrimaryClip " + arguments[0]);
            return this.setPrimaryClip.apply(this, arguments);
        };
    }
});
