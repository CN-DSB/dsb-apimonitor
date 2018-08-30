Java.perform(function() {
    var cn = "android.webkit.WebView";
    var url = Java.use(cn);
    if (url) {
        //hook loadUrl
        url.loadUrl.overload('java.lang.String').implementation = function () {
            send("call " + cn + "->loadUrl " + arguments[0]);
            return this.loadUrl.overload('java.lang.String').apply(this, arguments);
        };
    }
});
