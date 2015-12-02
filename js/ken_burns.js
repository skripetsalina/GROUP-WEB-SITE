$(function() {
	/*Scaling background image of Screen2*/
    $(".item1 .background").mouseenter(function() {
    	var FF = !(window.mozInnerScreenX == null);
		if(FF) {
		    //do nothing
		}
		else {
			$('.item1 .background').css('transform','scale(1.1)');
		    $('.item1 .background').css('transition','40s');
		}
  	});

  	$(".item2 .background").mouseenter(function() {
    	var FF = !(window.mozInnerScreenX == null);
		if(FF) {
		    //do nothing
		}
		else {
			$('.item2  .background').css('transform','scale(1.1)');
		    $('.item2  .background').css('transition','40s');
		}
  	});

  	$(".item3 .background").mouseenter(function() {
    	var FF = !(window.mozInnerScreenX == null);
		if(FF) {
		    //do nothing
		}
		else {
			$('.item3 .background').css('transform','scale(1.1)');
		    $('.item3 .background').css('transition','40s');
		}
  	});
});



