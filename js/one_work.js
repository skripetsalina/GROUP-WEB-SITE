$(function() {

    /*declare variable wich is equal to browser width*/
    var jQuery_browser_width=$(window).width()+16;/*jQuery browser width is less then real browser width on 120px*/
    var js_browser_width=window.outerWidth-10;/*real browser width*/
    console.log('jQuery Browser width='+ jQuery_browser_width + 'px');
    console.log('Js Browser width=' + js_browser_width + 'px');
    
    /*declare variables of main colors*/
    var $green='#b2c857';
    var $violet='#8f599a';
    var $blue='#60a9e6';
    
    /*width of Menu*/	
    $(".menu").css('width',jQuery_browser_width);

	/*declare height of first screen,
	wich depends on height of ribbon div*/
	var ribbon_height=$('.ribbons_wrap').height();
	$('.screen1').css('height',ribbon_height);

	/* OUR PRINCIPLES colors of titles*/
    $(".feat_title:eq(0)").css('color','#b2c857');
    $(".feat_title:eq(1)").css('color','#60a9e6');
    $(".feat_title:eq(2)").css('color','#8f599a');

    $(".clients_title").addClass('wow fadeInLeft');
	$(".clients_title").css('animation-duration','1.5s');
	$(".clients_title").css('animation-delay','1s');
	
	/*Add position of lines Creative agency and
	Web development studio in Our Works*/
	var distance_to_studio_line1=$('.agency_works').height()+340;
    if (js_browser_width>900) {
    	$('.agency_line').css('position','absolute');
    	$('.agency_line').css('top','340px');
    	$('.studio_line').css('position','absolute');
    	$('.studio_line').css('top',distance_to_studio_line1+'px');
	}
	var distance_to_studio_line2=$('.agency_works').height()+590;
	if (js_browser_width<900) {
    	$('.agency_line').css('position','absolute');
    	$('.agency_line').css('top','600px');
    	$('.studio_line').css('position','absolute');
    	$('.studio_line').css('top',distance_to_studio_line2+'px');
    	$('.studio_line img').css('bottom','14px');
    	$('.agency_line img').css('bottom','4px');
	}

	/*Calculate height of description in each "one_work" 
	div and put description down unless it will be invisible*/

	// $(".description").each(function(i) {
 //        var a=$(this).height();
 //        $(this).css('bottom',-a-30+'px');
 //    });

	/*Put description up on hover "one_work" div,
	add black border*/
	$('.one_work').mouseenter(function() {
		var h=$(this).find('.description').height();
		$(this).css('border','1px solid #343434');
		$(this).find('.description').css('border-top','1px solid #343434');
		$(this).find('.description').css({'bottom': 0 + 'px'});
		$(this).find('img').css('top','0');
		$(this).find('img').css('right','0');
		$(this).find('img').css('position','absolute');
		$(this).find('img').css('height',450-h+'px');
		$(this).find('img').css('width','270px');
	});

	/*Put description down when mouse leaves "one_work" div,
	remove black border*/
	$('.one_work').mouseleave(function() {
		var h=$(this).find('.description').height();
		$(this).css('border','1px solid transparent');
		$(this).find('.description').css({'bottom':-h + 'px'});
		$(this).find('img').css('position','absolute');
		$(this).find('img').css('width','594px');
		$(this).find('img').css('height','100%');
		$(this).find('img').css('border','transparent');
		$(this).find('.description').css('border','transparent');
	});

	/*Add color line under link in description*/
	$('.descr_link').mouseenter(function() {
		if ($(this).parent().parent().parent().hasClass("agency_works")) {
			$(this).css('color',$blue);
			$('.line').css('display','block');
			$('.line').css('background',$blue);
		}
		else if ($(this).parent().parent().parent().hasClass("studio_works")) {
			$(this).css('color',$violet);
			$('.line').css('display','block');
			$('.line').css('background',$violet);
		}
	});
	$('.descr_link').mouseleave(function() {
		$(this).css('color','#343434');
		$('.line').css('display','none');
	});
	
	/*Check index of elements in class "one_work".
    Add different delay of animation in different situations:
    1 block in row, 2 blocks in row, 3 blocks in row
    Add delays and durations of animation in other classes*/
    if (js_browser_width<900) {
		$( ".one_work" ).each(function() {
  			$(this).css('animation-duration','1.5s');
  			$(this).css('animation-delay','0.8s');	
	  	});
  		$('.our_last_works_title').css('animation-delay','1s');
    	$(".visit_left").addClass('wow fadeInDown');
    	$(".visit_right").addClass('wow fadeInDown');
    	$(".visit_right").css('animation-delay','0.5s');
    	$(".contacts_top").addClass('wow fadeInDown');
    	$(".contacts_top").css('animation-delay','0.5s');
    	$(".contacts_bottom").addClass('wow fadeInDown');
    	$(".contacts_bottom").css('animation-delay','1s');
    }
    if (js_browser_width>900) {
    	$( ".one_work" ).each(function() {
	  		var index = $( ".one_work" ).index( this );
	  		var z=index+1;
	  		if (z % 2==1) {
	  			$(this).css('animation-delay','1s');
	  			$(this).css('animation-duration','1.5s');
	  		}
	  		else if (z % 2==0) {
	  			$(this).css('animation-delay','1.5s');
	  			$(this).css('animation-duration','1.5s');
	  		}
		});
	// $(".one_work:eq(0)").css('animation-delay','2.5s');
  	// $(".one_work:eq(1)").css('animation-delay','3s');

    	$(".visit_left").addClass('wow fadeInLeft');
    	$(".visit_left").css('animation-duration','1.5s');
    	$(".visit_right div").each(function() {
    		$(this).addClass('wow fadeInRight');
	  		var index = $( ".visit_right div" ).index( this );
	  		var z=index+1;
	  		if (z % 2==1) {
	  			$(this).css('animation-delay','0.5s');
	  			$(this).css('animation-duration','1.5s');
	  		}
	  		else if (z % 2==0) {
	  			$(this).css('animation-delay','1s');
	  			$(this).css('animation-duration','1.5s');
	  		}
		});
    	$(".contacts_top").addClass('wow fadeInRight');
    	$(".contacts_top").css('animation-delay','0.5s');
    	$(".contacts_bottom").addClass('wow fadeInRight');
    	$(".contacts_bottom").css('animation-delay','1s');
    	
    }
	if (js_browser_width>1130) {
		$( ".one_work" ).each(function() {
	  		$(this).css('animation-duration','1.5s');	
	  		var index = $( ".one_work" ).index( this );
	  		var z=index+1;
	  		if (z % 3==1) {
	  			$(this).css('animation-delay','1.5s');	
	  		}
	  		else if (z % 3==2) {
	  			$(this).css('animation-delay','2s');	
	  		}
	  		else if (z % 3==0) {
	  			$(this).css('animation-delay','2.5s');	
	  		}
		});
	}
	if (js_browser_width<1050) {
		$(".one_adv").addClass('wow fadeInDown');
		$(".one_adv").css('animation-delay','0.5s');
		$('.princ_one_feature').addClass('wow fadeInDown');
		$('.princ_one_feature').css('animation-duration','1.5s');
  		$('.princ_one_feature').css('animation-delay','0.5s');	
    	$(".princ_title").css('animation-delay','0s');
	}
	if (js_browser_width>1050) {
		$(".one_adv").addClass('wow fadeInDown');
		$(".one_adv").css('animation-duration','1.5s');
		$(".one_adv").each(function() {
	  		var index = $( ".one_adv" ).index( this );
	  		var z=index+1;
	  		if (z % 3==1) {
	  			$(this).css('animation-delay','1s');	
	  		}
	  		else if (z % 3==2) {
	  			$(this).css('animation-delay','1.5s');	
	  		}
	  		else if (z % 3==0) {
	  			$(this).css('animation-delay','2s');	
	  		}
		});
		$(".princ_one_feature").each(function() {
			$(this).css('animation-duration','1.5s');
			$(this).addClass('wow fadeInLeft');
	  		var index = $(".princ_one_feature").index(this);
	  		var z=index+1;
	  		if (z % 3==1) {
	  			$(this).css('animation-delay','1s');	
	  		}
	  		else if (z % 3==2) {
	  			$(this).css('animation-delay','1.5s');	
	  		}
	  		else if (z % 3==0) {
	  			$(this).css('animation-delay','2s');	
	  		}
		});
	}

	/*animation for Our Clients*/
	if (js_browser_width<1220) {
		$(".one_client").addClass('wow fadeInDown');
		$(".one_client").css('animation-delay','0.5s');
		$(".one_client").css('animation-duration','1.5s');
	}
	if (js_browser_width>1220) {
		$(".one_client").addClass('wow fadeInDown');
		$(".one_client").css('animation-duration','2s');
		$(".one_client").each(function() {
	  		var index = $( ".one_client" ).index( this );
	  		var z=index+1;
	  		if (z % 3==1) {
	  			$(this).css('animation-delay','1.5s');	
	  		}
	  		else if (z % 3==2) {
	  			$(this).css('animation-delay','2s');	
	  		}
	  		else if (z % 3==0) {
	  			$(this).css('animation-delay','2.5s');	
	  		}
		});
	}
});


