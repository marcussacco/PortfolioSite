$( document ).ready(function() {
	$("section").hide();
	$("nav li").click(function(){
		$('body').animate({
        scrollTop: $("nav").offset().top
    	}, 1000);
		var index = $("nav li").index(this);
		$("section").not("section:eq(" + index + ")").fadeOut();
    	$("section:eq(" + index + ")").fadeIn();
	});
});
