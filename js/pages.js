$(window).on('pronto.request', function() {
	// default
	$("#sidemenu").load("html/sidemenu.html .one");
	$("#contentBox").load("html/default.html #content_default");
});