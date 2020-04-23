Java.perform(function() {
    var cn = "com.shockwave.pdfium.PdfiumCore";
    var pdfium = Java.use(cn);
    if (pdfium) {
        //hook setOnClickListener
        pdfium.newDocument.overload('android.os.ParcelFileDescriptor').implementation = function() {
            send(cn + "->newDocument" + " fd=" + arguments[0]);
            return this.newDocument.apply(this, arguments);
        };

        pdfium.newDocument.overload('android.os.ParcelFileDescriptor', 'java.lang.String').implementation = function() {
            send(cn + "->newDocument" + " fd=" + arguments[0] +
		" password=" + arguments[1]
	
	);
            return this.newDocument.apply(this, arguments);
        };
    }
});
