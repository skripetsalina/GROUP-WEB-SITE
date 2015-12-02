$(function() {
    /*declare variables of main colors*/
    var $green='#b2c857';
    var $violet='#8f599a';
    var $blue='#60a9e6';

    /*Different filling of Screen2 in Group, Agency and Studio*/
    $('.item1 .screen2_title').replaceWith('<div data-wow-delay="1s" data-wow-duration="1.2s" class="screen2_title wow fadeInDown col-lg-12"><p>creative</p><p>group</p></div>');
    $('.item1 .screen2_logo').html('<img src="img/logo_group_white.png" alt="logo Creative Group">');
    $('.item2 .screen2_title').replaceWith('<div data-wow-delay="1s" data-wow-duration="1.2s" class="screen2_title wow fadeInDown col-lg-12"><p>creative</p><p>agency</p></div>');
    $('.item2 .screen2_logo').html('<img src="img/logo_agency_white.png" alt="logo Creative Group">');
    $('.item3 .screen2_title').replaceWith('<div data-wow-delay="1s" data-wow-duration="1.2s" class="screen2_title wow fadeInDown col-lg-12"><p>web</p><p>development</p><p>studio</p></div>');
    $('.item3 .screen2_logo').html('<img src="img/logo_studio_001_white.png" alt="logo Creative Group">');
    $('.item3 .screen2').css('height','620px');
    $('.item3 .screen2_logo').css('margin-bottom','35px');
    $('.item3 .screen2_title').css('margin-bottom','25px');

    /*Block Visit is hidden in Greative Group and visible in
    Creative Agency and Studio, has diffent backgrounds in Agency and Studio*/
    $('.group').children('.visit').css('display','none');
    $('.agency').children('.visit').css('background',$blue);
    $('.studio').children('.visit').css('background',$violet);

    /*Screen2 has 3 available options of backgrounds*/
    $('.group').children('.screen2').children('.background').css('background','url("img/screen2_background_group.png") no-repeat');
    $('.group').children('.screen2').children('.background').css('background-size','cover');
    $('.agency').children('.screen2').children('.background').css('background','url("img/screen2_background_agency.png") no-repeat');
    $('.agency').children('.screen2').children('.background').css('background-size','cover');
    $('.studio').children('.screen2').children('.background').css('background','url("img/screen2_background_web.png") no-repeat');
    $('.studio').children('.screen2').children('.background').css('background-size','cover');

    /*Add differrent id to block "screen1" in Group, Agency and Studio*/
    $('.item1 .screen1').attr('id','screen1_group');
    $('.item2 .screen1').attr('id','screen1_agency');
    $('.item3 .screen1').attr('id','screen1_studio');

    /*Add differrent id to block "screen3"(Our Last Works) in Group, Agency and Studio*/
    $('.item1 .screen3').attr('id','works_group');
    $('.item2 .screen3').attr('id','works_agency');
    $('.item3 .screen3').attr('id','works_studio');

    /*Add differrent id to block "principles" in Group, Agency and Studio*/
    $('.item1 .principles').attr('id','about_us_group');
    $('.item2 .principles').attr('id','about_us_agency');
    $('.item3 .principles').attr('id','about_us_studio');

    /*Add differrent id to block "contacts" in Group, Agency and Studio*/
    $('.item1 .contacts').attr('id','contacts_group');
    $('.item2 .contacts').attr('id','contacts_agency');
    $('.item3 .contacts').attr('id','contacts_studio');

    /*When user scrolls down hamburger menu changes color grom black to white.
    Menu changes color from transparent to one of 3 main colors.
    Position of cariousel indicators(grey dots) changes from absolute to fixed,
    Star link in menu changes.
    When user scrolls to top, all options return to initial*/
    $(window).scroll(function(event) {
        var scroll_position = $(this).scrollTop();
        if (scroll_position>600) {
            $('.menu-global').css("background","#fff"); 
            $('.carousel-indicators').css('position','fixed');
            $('.carousel-indicators').css('top','30px');
            $('.carousel-indicators').css('z-index','70');
            $('.carousel-indicators').css('height','30px');
            if ($('body').hasClass('green')) {
                $('.star_group_green').css('display','none');
                $('.star_group_white').css('display','block');
                $('.menu').css('background',$green);
            }
            else if ($('body').hasClass('blue')) {
                $('.star_agency_blue').css('display','none');
                $('.star_agency_white').css('display','block');
                $('.menu').css('background',$blue);
            }
            else {
                $('.star_studio_violet').css('display','none');
                $('.star_studio_white').css('display','block');
                $('.menu').css('background',$violet);
            }
        }
        else if (scroll_position<600) {
            $('.carousel-indicators').css('position','absolute');
            $('.carousel-indicators').css('top','630px');
            $('.carousel-indicators').css('right','0');
            $('.carousel-indicators').css('z-index','25');
            if ($('.menu-global').hasClass('menu-top-click')) {
                $('.menu-global').css("background","#fff"); 
                if ($('body').hasClass('green')) {
                    $('.menu').css('background',$green);
                    $('.star_group_green').css('display','none');
                    $('.star_group_white').css('display','block');
                }
                else if ($('body').hasClass('blue')) {
                    $('.menu').css('background',$blue);
                    $('.star_agency_blue').css('display','none');
                    $('.star_agency_white').css('display','block');
                }
                else if ($('body').hasClass('violet')) {
                    $('.menu').css('background',$violet);
                    $('.star_studio_violet').css('display','none');
                    $('.star_studio_white').css('display','block');
                }
            }
            else if (!$('.menu-global').hasClass('menu-top-click')) {
                $('.menu-global').css("background","#000");
                $('.menu').css('background',"transparent");
                if ($('body').hasClass('green')) {
                    $('.star_group_green').css('display','block');
                    $('.star_group_white').css('display','none');
                }
                else if ($('body').hasClass('blue')) {
                    $('.star_agency_blue').css('display','block');
                    $('.star_agency_white').css('display','none');
                }
                else if ($('body').hasClass('violet')) {
                    $('.star_studio_violet').css('display','block');
                    $('.star_studio_white').css('display','none');
                }
            }
        }
    });
    
    /*When user cliks on star or any link in menu, menu 
    becomes 80px height*/
    $('.links_wrap a').click(function() {
        $('.menu').css("height","80");
        $('.menu-top').removeClass("menu-top-click");
        $('.menu-middle').removeClass("menu-middle-click");
        $('.menu-bottom').removeClass("menu-bottom-click");
    });
    $('.menu_left').click(function() {
        $('.menu').css("height","80");
        $('.menu-top').removeClass("menu-top-click");
        $('.menu-middle').removeClass("menu-middle-click");
        $('.menu-bottom').removeClass("menu-bottom-click");
    });
});

