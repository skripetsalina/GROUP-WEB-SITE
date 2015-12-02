$(function() {
	var headerHeight = $(".menu").height() + 50;
	$('a[href*=#]:not([href=#myCarousel])').bind("click", function(e) {
	    var target = $(this).attr("href"); //Get the target
	    var scrollToPosition = $(target).offset().top-80;
	    $('html,body').animate({ 'scrollTop': scrollToPosition }, 800, function(target) {
	        window.location.hash = target;
	    });
	    e.preventDefault();
	});
});

