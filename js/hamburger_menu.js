$(function() {

    /*declare main colors*/
    var $green='#b2c857';
    var $violet='#8f599a';
    var $blue='#60a9e6';

    var Menu = {
        el: {
            ham: $('.hamburger'),
            menuTop: $('.menu-top'),
            menuMiddle: $('.menu-middle'),
            menuBottom: $('.menu-bottom')
        },
        init: function() {
            Menu.bindUIactions();
        },
        bindUIactions: function() {
            Menu.el.ham
                .on(
                  'click',
                    function(event) {
                        Menu.activateMenu(event);
                        event.preventDefault();
                    } 
                );
        },
        activateMenu: function() {
            Menu.el.menuTop.toggleClass('menu-top-click');
            Menu.el.menuMiddle.toggleClass('menu-middle-click');
            Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
        }
    };
    Menu.init();

    /*toggle menu*/
    var browser_width=window.outerWidth-10;/*browser width*/
    $('#hamburger').click(function() {
        if ($(window).scrollTop()<600) {
            if ($('span').hasClass('menu-middle-click')) {
                if ($('body').hasClass('green')) {
                    $('.menu').css("background",$green);
                    $('.star_group_green').css('display','none');
                    $('.star_agency_blue').css('display','none');
                    $('.star_studio_violet').css('display','none');
                    $('.star_group_white').css('display','block');
                    $('.star_agency_white').css('display','none');
                    $('.star_studio_white').css('display','none'); 
                }
                if ($('body').hasClass('blue')) {
                    $('.menu').css("background",$blue);
                    $('.star_group_green').css('display','none');
                    $('.star_agency_blue').css('display','none');
                    $('.star_studio_violet').css('display','none');
                    $('.star_group_white').css('display','none');
                    $('.star_agency_white').css('display','block');
                    $('.star_studio_white').css('display','none'); 
                }
                if ($('body').hasClass('violet')) {
                    $('.menu').css("background",$violet);
                    $('.star_group_green').css('display','none');
                    $('.star_agency_blue').css('display','none');
                    $('.star_studio_violet').css('display','none');
                    $('.star_group_white').css('display','none');
                    $('.star_agency_white').css('display','none');
                    $('.star_studio_white').css('display','block'); 
                }
                $('.menu-global').css("background","#fff"); 
                if (browser_width<660) {
                    $('.menu').css("height","270px"); 
                }
                if (browser_width>660) {
                    $('.menu').css("height","225px"); 
                }
                $('.menu').css('-webkit-transition','height 0.5s ease-out 0s');
                $('.menu').css('-moz-transition','height 0.5s ease-out 0s');
                $('.menu').css('-o-transition','height 0.5s ease-out 0s');
                $('.menu').css('transition','height 0.5s ease-out 0s');
                $('.links_wrap').css('opacity','1');
                $('.links_wrap').css('-webkit-transition','opacity 0.4s ease-out 0.4s');
                $('.links_wrap').css('-moz-transition','opacity 0.4s ease-out 0.4s');
                $('.links_wrap').css('-o-transition','opacity 0.4s ease-out 0.4s');
                $('.links_wrap').css('transition','opacity 0.4s ease-out 0.4s');
            } 
            else {
                if ($('body').hasClass('green')) {
                    $('.star_group_green').css('display','block');
                    $('.star_agency_blue').css('display','none');
                    $('.star_studio_violet').css('display','none');
                    $('.star_group_white').css('display','none');
                    $('.star_agency_white').css('display','none');
                    $('.star_studio_white').css('display','none');
                }
                if ($('body').hasClass('blue')) {
                    $('.star_group_green').css('display','none');
                    $('.star_agency_blue').css('display','block');
                    $('.star_studio_violet').css('display','none');
                    $('.star_group_white').css('display','none');
                    $('.star_agency_white').css('display','none');
                    $('.star_studio_white').css('display','none');
                }
                if ($('body').hasClass('violet')) {
                    $('.star_group_green').css('display','none');
                    $('.star_agency_blue').css('display','none');
                    $('.star_studio_violet').css('display','block');
                    $('.star_group_white').css('display','none');
                    $('.star_agency_white').css('display','none');
                    $('.star_studio_white').css('display','none');
                }
                $('.menu').css("background","transparent"); 
                $('.menu-global').css("background","#000"); 
                $('.menu').css("height","80px"); 
                $('.menu').css('-webkit-transition','height 0.5s ease-out 0.2s');
                $('.menu').css('-moz-transition','height 0.5s ease-out 0.2s');
                $('.menu').css('-o-transition','height 0.5s ease-out 0.2s');
                $('.menu').css('transition','height 0.5s ease-out 0.2s');
                $('.menu').css('-webkit-transition','all 0.5s ease-out 0.2s');
                $('.menu').css('-moz-transition','all 0.5s ease-out 0.2s');
                $('.menu').css('-o-transition','all 0.5s ease-out 0.2s');
                $('.menu').css('transition','all 0.5s ease-out 0.2s');
                $('.links_wrap').css('opacity','0');
                $('.links_wrap').css('-webkit-transition','opacity 0.4s ease-out 0s');
                $('.links_wrap').css('-moz-transition','opacity 0.4s ease-out 0s');
                $('.links_wrap').css('-o-transition','opacity 0.4s ease-out 0s');
                $('.links_wrap').css('transition','opacity 0.4s ease-out 0s');
            }
        }
        else {
            $('.menu-global').css("background","#fff"); 
            if ($('span').hasClass('menu-middle-click')) {
                if (browser_width<660) {
                    $('.menu').css("height","270px"); 
                }
                else {
                    $('.menu').css("height","225px"); 
                }
                $('.menu').css('-webkit-transition','height 0.5s ease-out 0s');
                $('.menu').css('-moz-transition','height 0.5s ease-out 0s');
                $('.menu').css('-o-transition','height 0.5s ease-out 0s');
                $('.menu').css('transition','height 0.5s ease-out 0s');
                $('.links_wrap').css('opacity','1');
                $('.links_wrap').css('-webkit-transition','opacity 0.4s ease-out 0.4s');
                $('.links_wrap').css('-moz-transition','opacity 0.4s ease-out 0.4s');
                $('.links_wrap').css('-o-transition','opacity 0.4s ease-out 0.4s');
                $('.links_wrap').css('transition','opacity 0.4s ease-out 0.4s');
            } 
            else {
                $('.menu').css("height","80px"); 
                $('.menu').css('-webkit-transition','height 0.5s ease-out 0.2s');
                $('.menu').css('-moz-transition','height 0.5s ease-out 0.2s');
                $('.menu').css('-o-transition','height 0.5s ease-out 0.2s');
                $('.menu').css('transition','height 0.5s ease-out 0.2s');
                $('.links_wrap').css('opacity','0');
                $('.links_wrap').css('-webkit-transition','opacity 0.4s ease-out 0s');
                $('.links_wrap').css('-moz-transition','opacity 0.4s ease-out 0s');
                $('.links_wrap').css('-o-transition','opacity 0.4s ease-out 0s');
                $('.links_wrap').css('transition','opacity 0.4s ease-out 0s');
            }
        }
    });
}); 



