$(function() {
    var browser_width=window.outerWidth-10;/*browser width*/
    /*position of carousel dots for 320px width device*/
    if (browser_width>300) {
    	$('.carousel-indicators').css('left','40%');
        $(".screen2_logo").css('position','relative');    
        $(".item2 .screen2_logo").css('left','10px');
        $(".item3 .screen2_logo").css('left','4px'); 
    }
    /*position of carousel dots for 480px width device*/
    if (browser_width>440) {
    	$('.carousel-indicators').css('left','41%');
        $(".screen2_logo").css('position','relative');    
        $(".item2 .screen2_logo").css('left','14px');
        $(".item3 .screen2_logo").css('left','4px'); 
    }
    /*position of carousel dots for 568px width device*/
    if (browser_width>550) {
    	$('.carousel-indicators').css('left','42%');
        $(".screen2_logo").css('position','relative');    
        $(".item2 .screen2_logo").css('left','7px');
        $(".item3 .screen2_logo").css('right','0px'); 
    }
    /*position of carousel dots for 627px width device*/
    if (browser_width>600) {
    	$('.carousel-indicators').css('left','43%');
        $(".screen2_logo").css('position','relative');    
        $(".item2 .screen2_logo").css('left','7px');
        $(".item3 .screen2_logo").css('right','0px'); 
    }
    /*position of carousel dots for 768px width device*/
    if (browser_width>730) {
    	$('.carousel-indicators').css('left','44%');
        $(".links_wrap a:eq(1)").css('position','relative');    
        $(".links_wrap a:eq(1)").css('left','20px');
        $(".links_wrap a:eq(2)").css('position','relative');    
        $(".links_wrap a:eq(2)").css('left','10px');
        $(".screen2_logo").css('position','relative');    
        $(".item1 .screen2_logo").css('right','12px'); 
        $(".item2 .screen2_logo").css('left','7px');
        $(".item3 .screen2_logo").css('right','2px');  
    }
    /*position of carousel dots for 1024px width device*/
    if (browser_width>950) {
    	$('.carousel-indicators').css('left','45%');
        $(".links_wrap a:eq(1)").css('position','relative');    
        $(".links_wrap a:eq(1)").css('left','15px');
        $(".screen2_logo").css('position','relative');    
        $(".item1 .screen2_logo").css('right','14px'); 
        $(".item2 .screen2_logo").css('left','3px');
        $(".item3 .screen2_logo").css('right','7px');  
    }
    /*position of carousel dots for 1280px width device*/
    if (browser_width>1200) {
    	$('.carousel-indicators').css('left','46%');
        $(".screen2_logo").css('position','relative');    
        $(".item1 .screen2_logo").css('right','14px');
        $(".item2 .screen2_logo").css('left','5px');
        $(".item3 .screen2_logo").css('right','7px');
    }
    /*position of carousel dots for 1366px width device*/
    if (browser_width>1300) {
    	$('.carousel-indicators').css('left','47%');
        $(".links_wrap a:eq(1)").css('position','relative');    
        $(".links_wrap a:eq(1)").css('left','30px');   
        $(".screen2_logo").css('position','relative');    
        $(".item1.screen2_logo").css('right','9px');
        $(".item2 .screen2_logo").css('left','12px');
        $(".item3 .screen2_logo").css('left','3px');
    }
    /*position of carousel dots for 1920px width device*/
    if (browser_width>1400) {
    	$('.carousel-indicators').css('left','48%');
        $(".links_wrap a:eq(1)").css('position','relative');    
        $(".links_wrap a:eq(1)").css('left','27px');   
        $(".screen2_logo").css('position','relative');    
        $(".item2 .screen2_logo").css('left','15px');
        $(".item3 .screen2_logo").css('left','6px');
    }
});