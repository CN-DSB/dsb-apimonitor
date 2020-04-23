Java.perform(function() {
    var cn = "com.shockwave.pdfium.PdfiumCore";
    var pdfium = Java.use(cn);
    if (pdfium) {
        //hook setOnClickListener
        pdfium.getNumFd.implementation = function() {
		var fd = this.getNumFd.apply(this, arguments);
		send(cn + "->getNumFd" + " return fd=" + fd);
		return fd;
        };
    }
});
