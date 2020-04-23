Java.perform(function() {
    var cn = "android.widget.Button";
    var button = Java.use(cn);
    if (button) {
        //hook setOnClickListener
        button.setOnClickListener.implementation = function() {
            send("call " + cn + "->setOnClickListener");
            return this.setOnClickListener.apply(this, arguments);
        };
    }
});
