$(function() {
	$("#icons_box, #sidemenu").on("click", ".alg", function(){
		$("#sidemenu").load("html/core/sidemenu.html .algo");
		$("#contentBox").load("html/content/algorytmy.html #content_algorytm_default");
	});
});
$(function() {
	$("#sidemenu").on("click", "#sdadt", function(){
		$("#contentBox").load("html/content/algorytmy.html #content_algorytm_sdadt");
	});
});
