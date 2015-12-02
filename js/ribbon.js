$(function() {
    /*declare variable wich is equal to browser width*/
    var jQuery_browser_width=$(window).width()+16;/*jQuery browser width is less then real browser width on 120px*/
    var js_browser_width=window.outerWidth-10;/*real browser width*/
    console.log('jQuery Browser width='+ jQuery_browser_width + 'px');
    console.log('Js Browser width=' + js_browser_width + 'px');

    if (js_browser_width<1380) {
        $('.ribbons_wrap_1366').css('display','block');
        $('.ribbons_wrap').css('display','none');
    }
    if (js_browser_width>1380) {
        $('.ribbons_wrap_1366').css('display','none');
        $('.ribbons_wrap').css('display','block');
    }

    /*declare variables of main colors*/
    var $green='#b2c857';
    var $violet='#8f599a';
    var $blue='#60a9e6';

    /*Ribbin transforms to line*/
    ribbon_to_line_1_1= document.getElementById('to_line_1_1');
    ribbon_to_line_2_1= document.getElementById('to_line_2_1');
    ribbon_to_line_3_1= document.getElementById('to_line_3_1');
    ribbon_to_line_4_1= document.getElementById('to_line_4_1');
    ribbon_to_line_1_2= document.getElementById('to_line_1_2');
    ribbon_to_line_2_2= document.getElementById('to_line_2_2');
    ribbon_to_line_3_2= document.getElementById('to_line_3_2');
    ribbon_to_line_4_2= document.getElementById('to_line_4_2');
    ribbin_to_violet_1_1= document.getElementById('ribbon_to_violet_1_1');
    ribbin_to_violet_2_1= document.getElementById('ribbon_to_violet_2_1');
    ribbin_to_violet_3_1= document.getElementById('ribbon_to_violet_3_1');
    ribbin_to_violet_4_1= document.getElementById('ribbon_to_violet_4_1');
    ribbin_to_violet_1_2= document.getElementById('ribbon_to_violet_1_2');
    ribbin_to_violet_2_2= document.getElementById('ribbon_to_violet_2_2');
    ribbin_to_violet_3_2= document.getElementById('ribbon_to_violet_3_2');
    ribbin_to_violet_4_2= document.getElementById('ribbon_to_violet_4_2');
    ribbin_to_green_1_1= document.getElementById('ribbon_to_green_1_1');
    ribbin_to_green_2_1= document.getElementById('ribbon_to_green_2_1');
    ribbin_to_green_3_1= document.getElementById('ribbon_to_green_3_1');
    ribbin_to_green_4_1= document.getElementById('ribbon_to_green_4_1');
    ribbin_to_green_1_2= document.getElementById('ribbon_to_green_1_2');
    ribbin_to_green_2_2= document.getElementById('ribbon_to_green_2_2');
    ribbin_to_green_3_2= document.getElementById('ribbon_to_green_3_2');
    ribbin_to_green_4_2= document.getElementById('ribbon_to_green_4_2');
    ribbin_to_blue_1_1= document.getElementById('ribbon_to_blue_1_1');
    ribbin_to_blue_2_1= document.getElementById('ribbon_to_blue_2_1');
    ribbin_to_blue_3_1= document.getElementById('ribbon_to_blue_3_1');
    ribbin_to_blue_4_1= document.getElementById('ribbon_to_blue_4_1');
    ribbin_to_blue_1_2= document.getElementById('ribbon_to_blue_1_2');
    ribbin_to_blue_2_2= document.getElementById('ribbon_to_blue_2_2');
    ribbin_to_blue_3_2= document.getElementById('ribbon_to_blue_3_2');
    ribbin_to_blue_4_2= document.getElementById('ribbon_to_blue_4_2');
    ribbon_to_main_violet_1_1= document.getElementById('ribbon_to_main_violet_1_1');
    ribbon_to_main_violet_2_1= document.getElementById('ribbon_to_main_violet_2_1');
    ribbon_to_main_violet_3_1= document.getElementById('ribbon_to_main_violet_3_1');
    ribbon_to_main_violet_4_1= document.getElementById('ribbon_to_main_violet_4_1');
    ribbon_to_main_violet_1_2= document.getElementById('ribbon_to_main_violet_1_2');
    ribbon_to_main_violet_2_2= document.getElementById('ribbon_to_main_violet_2_2');
    ribbon_to_main_violet_3_2= document.getElementById('ribbon_to_main_violet_3_2');
    ribbon_to_main_violet_4_2= document.getElementById('ribbon_to_main_violet_4_2');
    ribbon_to_main_green_1_1= document.getElementById('ribbon_to_main_green_1_1');
    ribbon_to_main_green_2_1= document.getElementById('ribbon_to_main_green_2_1');
    ribbon_to_main_green_3_1= document.getElementById('ribbon_to_main_green_3_1');
    ribbon_to_main_green_4_1= document.getElementById('ribbon_to_main_green_4_1');
    ribbon_to_main_green_1_2= document.getElementById('ribbon_to_main_green_1_2');
    ribbon_to_main_green_2_2= document.getElementById('ribbon_to_main_green_2_2');
    ribbon_to_main_green_3_2= document.getElementById('ribbon_to_main_green_3_2');
    ribbon_to_main_green_4_2= document.getElementById('ribbon_to_main_green_4_2');
    ribbon_to_main_blue_1_1= document.getElementById('ribbon_to_main_blue_1_1');
    ribbon_to_main_blue_2_1= document.getElementById('ribbon_to_main_blue_2_1');
    ribbon_to_main_blue_3_1= document.getElementById('ribbon_to_main_blue_3_1');
    ribbon_to_main_blue_4_1= document.getElementById('ribbon_to_main_blue_4_1');
    ribbon_to_main_blue_1_2= document.getElementById('ribbon_to_main_blue_1_2');
    ribbon_to_main_blue_2_2= document.getElementById('ribbon_to_main_blue_2_2');
    ribbon_to_main_blue_3_2= document.getElementById('ribbon_to_main_blue_3_2');
    ribbon_to_main_blue_4_2= document.getElementById('ribbon_to_main_blue_4_2');

    ribbon_to_line_1_1_1366= document.getElementById('to_line_1_1_1366');
    ribbon_to_line_2_1_1366= document.getElementById('to_line_2_1_1366');
    ribbon_to_line_3_1_1366= document.getElementById('to_line_3_1_1366');
    ribbon_to_line_4_1_1366= document.getElementById('to_line_4_1_1366');
    ribbon_to_line_1_2_1366= document.getElementById('to_line_1_2_1366');
    ribbon_to_line_2_2_1366= document.getElementById('to_line_2_2_1366');
    ribbon_to_line_3_2_1366= document.getElementById('to_line_3_2_1366');
    ribbon_to_line_4_2_1366= document.getElementById('to_line_4_2_1366');
    ribbin_to_violet_1_1_1366= document.getElementById('ribbon_to_violet_1_1_1366');
    ribbin_to_violet_2_1_1366= document.getElementById('ribbon_to_violet_2_1_1366');
    ribbin_to_violet_3_1_1366= document.getElementById('ribbon_to_violet_3_1_1366');
    ribbin_to_violet_4_1_1366= document.getElementById('ribbon_to_violet_4_1_1366');
    ribbin_to_violet_1_2_1366= document.getElementById('ribbon_to_violet_1_2_1366');
    ribbin_to_violet_2_2_1366= document.getElementById('ribbon_to_violet_2_2_1366');
    ribbin_to_violet_3_2_1366= document.getElementById('ribbon_to_violet_3_2_1366');
    ribbin_to_violet_4_2_1366= document.getElementById('ribbon_to_violet_4_2_1366');
    ribbin_to_green_1_1_1366= document.getElementById('ribbon_to_green_1_1_1366');
    ribbin_to_green_2_1_1366= document.getElementById('ribbon_to_green_2_1_1366');
    ribbin_to_green_3_1_1366= document.getElementById('ribbon_to_green_3_1_1366');
    ribbin_to_green_4_1_1366= document.getElementById('ribbon_to_green_4_1_1366');
    ribbin_to_green_1_2_1366= document.getElementById('ribbon_to_green_1_2_1366');
    ribbin_to_green_2_2_1366= document.getElementById('ribbon_to_green_2_2_1366');
    ribbin_to_green_3_2_1366= document.getElementById('ribbon_to_green_3_2_1366');
    ribbin_to_green_4_2_1366= document.getElementById('ribbon_to_green_4_2_1366');
    ribbin_to_blue_1_1_1366= document.getElementById('ribbon_to_blue_1_1_1366');
    ribbin_to_blue_2_1_1366= document.getElementById('ribbon_to_blue_2_1_1366');
    ribbin_to_blue_3_1_1366= document.getElementById('ribbon_to_blue_3_1_1366');
    ribbin_to_blue_4_1_1366= document.getElementById('ribbon_to_blue_4_1_1366');
    ribbin_to_blue_1_2_1366= document.getElementById('ribbon_to_blue_1_2_1366');
    ribbin_to_blue_2_2_1366= document.getElementById('ribbon_to_blue_2_2_1366');
    ribbin_to_blue_3_2_1366= document.getElementById('ribbon_to_blue_3_2_1366');
    ribbin_to_blue_4_2_1366= document.getElementById('ribbon_to_blue_4_2_1366');
    ribbon_to_main_violet_1_1_1366= document.getElementById('ribbon_to_main_violet_1_1_1366');
    ribbon_to_main_violet_2_1_1366= document.getElementById('ribbon_to_main_violet_2_1_1366');
    ribbon_to_main_violet_3_1_1366= document.getElementById('ribbon_to_main_violet_3_1_1366');
    ribbon_to_main_violet_4_1_1366= document.getElementById('ribbon_to_main_violet_4_1_1366');
    ribbon_to_main_violet_1_2_1366= document.getElementById('ribbon_to_main_violet_1_2_1366');
    ribbon_to_main_violet_2_2_1366= document.getElementById('ribbon_to_main_violet_2_2_1366');
    ribbon_to_main_violet_3_2_1366= document.getElementById('ribbon_to_main_violet_3_2_1366');
    ribbon_to_main_violet_4_2_1366= document.getElementById('ribbon_to_main_violet_4_2_1366');
    ribbon_to_main_green_1_1_1366= document.getElementById('ribbon_to_main_green_1_1_1366');
    ribbon_to_main_green_2_1_1366= document.getElementById('ribbon_to_main_green_2_1_1366');
    ribbon_to_main_green_3_1_1366= document.getElementById('ribbon_to_main_green_3_1_1366');
    ribbon_to_main_green_4_1_1366= document.getElementById('ribbon_to_main_green_4_1_1366');
    ribbon_to_main_green_1_2_1366= document.getElementById('ribbon_to_main_green_1_2_1366');
    ribbon_to_main_green_2_2_1366= document.getElementById('ribbon_to_main_green_2_2_1366');
    ribbon_to_main_green_3_2_1366= document.getElementById('ribbon_to_main_green_3_2_1366');
    ribbon_to_main_green_4_2_1366= document.getElementById('ribbon_to_main_green_4_2_1366');
    ribbon_to_main_blue_1_1_1366= document.getElementById('ribbon_to_main_blue_1_1_1366');
    ribbon_to_main_blue_2_1_1366= document.getElementById('ribbon_to_main_blue_2_1_1366');
    ribbon_to_main_blue_3_1_1366= document.getElementById('ribbon_to_main_blue_3_1_1366');
    ribbon_to_main_blue_4_1_1366= document.getElementById('ribbon_to_main_blue_4_1_1366');
    ribbon_to_main_blue_1_2_1366= document.getElementById('ribbon_to_main_blue_1_2_1366');
    ribbon_to_main_blue_2_2_1366= document.getElementById('ribbon_to_main_blue_2_2_1366');
    ribbon_to_main_blue_3_2_1366= document.getElementById('ribbon_to_main_blue_3_2_1366');
    ribbon_to_main_blue_4_2_1366= document.getElementById('ribbon_to_main_blue_4_2_1366');

    function RibbonToMainBlue() {
        ribbon_to_main_blue_1_1.beginElement();
        ribbon_to_main_blue_2_1.beginElement();
        ribbon_to_main_blue_3_1.beginElement();
        ribbon_to_main_blue_4_1.beginElement();
        ribbon_to_main_blue_1_2.beginElement();
        ribbon_to_main_blue_2_2.beginElement();
        ribbon_to_main_blue_3_2.beginElement();
        ribbon_to_main_blue_4_2.beginElement();

        ribbon_to_main_blue_1_1_1366.beginElement();
        ribbon_to_main_blue_2_1_1366.beginElement();
        ribbon_to_main_blue_3_1_1366.beginElement();
        ribbon_to_main_blue_4_1_1366.beginElement();
        ribbon_to_main_blue_1_2_1366.beginElement();
        ribbon_to_main_blue_2_2_1366.beginElement();
        ribbon_to_main_blue_3_2_1366.beginElement();
        ribbon_to_main_blue_4_2_1366.beginElement();
    }
    function RibbonToMainGreen() {
        ribbon_to_main_green_1_1.beginElement();
        ribbon_to_main_green_2_1.beginElement();
        ribbon_to_main_green_3_1.beginElement();
        ribbon_to_main_green_4_1.beginElement();
        ribbon_to_main_green_1_2.beginElement();
        ribbon_to_main_green_2_2.beginElement();
        ribbon_to_main_green_3_2.beginElement();
        ribbon_to_main_green_4_2.beginElement();

        ribbon_to_main_green_1_1_1366.beginElement();
        ribbon_to_main_green_2_1_1366.beginElement();
        ribbon_to_main_green_3_1_1366.beginElement();
        ribbon_to_main_green_4_1_1366.beginElement();
        ribbon_to_main_green_1_2_1366.beginElement();
        ribbon_to_main_green_2_2_1366.beginElement();
        ribbon_to_main_green_3_2_1366.beginElement();
        ribbon_to_main_green_4_2_1366.beginElement();
    }
    function RibbonToMainViolet() {
        ribbon_to_main_violet_1_1.beginElement();
        ribbon_to_main_violet_2_1.beginElement();
        ribbon_to_main_violet_3_1.beginElement();
        ribbon_to_main_violet_4_1.beginElement();
        ribbon_to_main_violet_1_2.beginElement();
        ribbon_to_main_violet_2_2.beginElement();
        ribbon_to_main_violet_3_2.beginElement();
        ribbon_to_main_violet_4_2.beginElement();

        ribbon_to_main_violet_1_1_1366.beginElement();
        ribbon_to_main_violet_2_1_1366.beginElement();
        ribbon_to_main_violet_3_1_1366.beginElement();
        ribbon_to_main_violet_4_1_1366.beginElement();
        ribbon_to_main_violet_1_2_1366.beginElement();
        ribbon_to_main_violet_2_2_1366.beginElement();
        ribbon_to_main_violet_3_2_1366.beginElement();
        ribbon_to_main_violet_4_2_1366.beginElement();
    }
    function RibbonToViolet() {
        ribbin_to_violet_1_1.beginElement();
        ribbin_to_violet_2_1.beginElement();
        ribbin_to_violet_3_1.beginElement();
        ribbin_to_violet_4_1.beginElement();
        ribbin_to_violet_1_2.beginElement();
        ribbin_to_violet_2_2.beginElement();
        ribbin_to_violet_3_2.beginElement();
        ribbin_to_violet_4_2.beginElement();

        ribbin_to_violet_1_1_1366.beginElement();
        ribbin_to_violet_2_1_1366.beginElement();
        ribbin_to_violet_3_1_1366.beginElement();
        ribbin_to_violet_4_1_1366.beginElement();
        ribbin_to_violet_1_2_1366.beginElement();
        ribbin_to_violet_2_2_1366.beginElement();
        ribbin_to_violet_3_2_1366.beginElement();
        ribbin_to_violet_4_2_1366.beginElement();
    }
    function RibbonToGreen() {
        ribbin_to_green_1_1.beginElement();
        ribbin_to_green_2_1.beginElement();
        ribbin_to_green_3_1.beginElement();
        ribbin_to_green_4_1.beginElement();
        ribbin_to_green_1_2.beginElement();
        ribbin_to_green_2_2.beginElement();
        ribbin_to_green_3_2.beginElement();
        ribbin_to_green_4_2.beginElement();

        ribbin_to_green_1_1_1366.beginElement();
        ribbin_to_green_2_1_1366.beginElement();
        ribbin_to_green_3_1_1366.beginElement();
        ribbin_to_green_4_1_1366.beginElement();
        ribbin_to_green_1_2_1366.beginElement();
        ribbin_to_green_2_2_1366.beginElement();
        ribbin_to_green_3_2_1366.beginElement();
        ribbin_to_green_4_2_1366.beginElement();
    }
    function RibbonToBlue() {
        ribbin_to_blue_1_1.beginElement();
        ribbin_to_blue_2_1.beginElement();
        ribbin_to_blue_3_1.beginElement();
        ribbin_to_blue_4_1.beginElement();
        ribbin_to_blue_1_2.beginElement();
        ribbin_to_blue_2_2.beginElement();
        ribbin_to_blue_3_2.beginElement();
        ribbin_to_blue_4_2.beginElement();

        ribbin_to_blue_1_1_1366.beginElement();
        ribbin_to_blue_2_1_1366.beginElement();
        ribbin_to_blue_3_1_1366.beginElement();
        ribbin_to_blue_4_1_1366.beginElement();
        ribbin_to_blue_1_2_1366.beginElement();
        ribbin_to_blue_2_2_1366.beginElement();
        ribbin_to_blue_3_2_1366.beginElement();
        ribbin_to_blue_4_2_1366.beginElement();
    }
    function RibbonToLine() {
        ribbon_to_line_1_1.beginElement();
        ribbon_to_line_2_1.beginElement();
        ribbon_to_line_3_1.beginElement();
        ribbon_to_line_4_1.beginElement();
        ribbon_to_line_1_2.beginElement();
        ribbon_to_line_2_2.beginElement();
        ribbon_to_line_3_2.beginElement();
        ribbon_to_line_4_2.beginElement();

        ribbon_to_line_1_1_1366.beginElement();
        ribbon_to_line_2_1_1366.beginElement();
        ribbon_to_line_3_1_1366.beginElement();
        ribbon_to_line_4_1_1366.beginElement();
        ribbon_to_line_1_2_1366.beginElement();
        ribbon_to_line_2_2_1366.beginElement();
        ribbon_to_line_3_2_1366.beginElement();
        ribbon_to_line_4_2_1366.beginElement();
    }
    /*Line transforms to ribbon*/
    line_to_ribbon_1_1= document.getElementById('reverse_part_1_1');
    line_to_ribbon_2_1= document.getElementById('reverse_part_2_1');
    line_to_ribbon_3_1= document.getElementById('reverse_part_3_1');
    line_to_ribbon_4_1= document.getElementById('reverse_part_4_1');
    line_to_ribbon_1_2= document.getElementById('reverse_part_1_2');
    line_to_ribbon_2_2= document.getElementById('reverse_part_2_2');
    line_to_ribbon_3_2= document.getElementById('reverse_part_3_2');
    line_to_ribbon_4_2= document.getElementById('reverse_part_4_2');

    line_to_ribbon_1_1_1366= document.getElementById('reverse_part_1_1_1366');
    line_to_ribbon_2_1_1366= document.getElementById('reverse_part_2_1_1366');
    line_to_ribbon_3_1_1366= document.getElementById('reverse_part_3_1_1366');
    line_to_ribbon_4_1_1366= document.getElementById('reverse_part_4_1_1366');
    line_to_ribbon_1_2_1366= document.getElementById('reverse_part_1_2_1366');
    line_to_ribbon_2_2_1366= document.getElementById('reverse_part_2_2_1366');
    line_to_ribbon_3_2_1366= document.getElementById('reverse_part_3_2_1366');
    line_to_ribbon_4_2_1366= document.getElementById('reverse_part_4_2_1366');
    

    function Line_To_Ribbon() {
        line_to_ribbon_1_1.beginElement();
        line_to_ribbon_2_1.beginElement();
        line_to_ribbon_3_1.beginElement();
        line_to_ribbon_4_1.beginElement();
        line_to_ribbon_1_2.beginElement();
        line_to_ribbon_2_2.beginElement();
        line_to_ribbon_3_2.beginElement();
        line_to_ribbon_4_2.beginElement();

        line_to_ribbon_1_1_1366.beginElement();
        line_to_ribbon_2_1_1366.beginElement();
        line_to_ribbon_3_1_1366.beginElement();
        line_to_ribbon_4_1_1366.beginElement();
        line_to_ribbon_1_2_1366.beginElement();
        line_to_ribbon_2_2_1366.beginElement();
        line_to_ribbon_3_2_1366.beginElement();
        line_to_ribbon_4_2_1366.beginElement();
    }
    /*Apply to body one of 3 classes :"green", "blue" or "violet"
    when click on carousel arrows*/
    $('.right').click(function() {
        if ($('body').hasClass('green') && $('#ribbons_wrap').hasClass('its_ribbon_now')) {
            $('body').removeClass('green').addClass('blue');
            $('.links_wrap_group').css('display','none');
            $('.links_wrap_agency').css('display','table');
            $('.links_wrap_studio').css('display','none');
            RibbonToBlue();
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$blue);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','block');
                $('.star_studio_white').css('display','none');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background','transparent');
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','block');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
        }
        else if ($('body').hasClass('blue') && $('#ribbons_wrap').hasClass('its_ribbon_now')) {
            $('body').removeClass('blue').addClass('violet');
            $('.links_wrap_group').css('display','none');
            $('.links_wrap_agency').css('display','none');
            $('.links_wrap_studio').css('display','table');
            RibbonToViolet();
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$violet);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','block');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background','transparent');
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','block');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
            
        }
        else if ($('body').hasClass('violet') && $('#ribbons_wrap').hasClass('its_ribbon_now')) {
            $('body').removeClass('violet').addClass('green');
            $('.links_wrap_group').css('display','table');
            $('.links_wrap_agency').css('display','none');
            $('.links_wrap_studio').css('display','none');
            RibbonToGreen();
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$green);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','block');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background','transparent');
                $('.star_group_green').css('display','block');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }

        }
        else if ($('body').hasClass('green') && $('#ribbons_wrap').hasClass('its_line_now')) {
            $('body').removeClass('green').addClass('blue');
            $('.links_wrap_group').css('display','none');
            $('.links_wrap_agency').css('display','table');
            $('.links_wrap_studio').css('display','none');
            RibbonToMainBlue();
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$blue);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','block');
                $('.star_studio_white').css('display','none');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background','transparent');
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','block');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
            
        }
         else if ($('body').hasClass('blue') && $('#ribbons_wrap').hasClass('its_line_now')) {
            $('body').removeClass('blue').addClass('violet');
            $('body').removeClass('blue').addClass('violet');
            $('.links_wrap_group').css('display','none');
            $('.links_wrap_agency').css('display','none');
            $('.links_wrap_studio').css('display','table');
            RibbonToMainViolet();
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$violet);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','block');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background','transparent');
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','block');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
        }
        else if ($('body').hasClass('violet') && $('#ribbons_wrap').hasClass('its_line_now')) {
            $('body').removeClass('violet').addClass('green');
            $('.links_wrap_group').css('display','table');
            $('.links_wrap_agency').css('display','none');
            $('.links_wrap_studio').css('display','none');
            RibbonToMainGreen();
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$green);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','block');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background','transparent');
                $('.star_group_green').css('display','block');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
        }
    });
    $('.left').click(function() {
        console.log('asasdasdasdasd')
        if ($('body').hasClass('green') && $('#ribbons_wrap').hasClass('its_ribbon_now')) {
            $('body').removeClass('green').addClass('violet');
            $('.links_wrap_group').css('display','none');
            $('.links_wrap_agency').css('display','none');
            $('.links_wrap_studio').css('display','table');
            RibbonToViolet();
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$violet);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','block');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background','transparent');
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','block');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
        }
        else if ($('body').hasClass('blue') && $('#ribbons_wrap').hasClass('its_ribbon_now')) {
            $('body').removeClass('blue').addClass('green');
            $('.links_wrap_group').css('display','table');
            $('.links_wrap_agency').css('display','none');
            $('.links_wrap_studio').css('display','none');
            RibbonToGreen();
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$green);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','block');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background','transparent');
                $('.star_group_green').css('display','block');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
        }
        else if ($('body').hasClass('violet') && $('#ribbons_wrap').hasClass('its_ribbon_now')) {
            $('body').removeClass('violet').addClass('blue');
            $('.links_wrap_group').css('display','none');
            $('.links_wrap_agency').css('display','table');
            $('.links_wrap_studio').css('display','none');
            RibbonToBlue();
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$blue);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','block');
                $('.star_studio_white').css('display','none');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background','transparent');
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','block');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
            
        }
        else if ($('body').hasClass('green') && $('#ribbons_wrap').hasClass('its_line_now')) {
            $('body').removeClass('green').addClass('violet');
            $('.links_wrap_group').css('display','none');
            $('.links_wrap_agency').css('display','none');
            $('.links_wrap_studio').css('display','table');
            RibbonToMainViolet();
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$violet);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','block');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background','transparent');
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','block');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
        }
        else if ($('body').hasClass('blue') && $('#ribbons_wrap').hasClass('its_line_now')) {
            $('body').removeClass('blue').addClass('green');
            $('.links_wrap_group').css('display','table');
            $('.links_wrap_agency').css('display','none');
            $('.links_wrap_studio').css('display','none');
            RibbonToMainGreen();
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$green);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','block');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background','transparent');
                $('.star_group_green').css('display','block');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
        }
        else if ($('body').hasClass('violet') && $('#ribbons_wrap').hasClass('its_line_now')) {
            $('body').removeClass('violet').addClass('blue');
            $('.links_wrap_group').css('display','none');
            $('.links_wrap_agency').css('display','table');
            $('.links_wrap_studio').css('display','none');
            RibbonToMainBlue();
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$blue);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','block');
                $('.star_studio_white').css('display','none');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background','transparent');
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','block');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
        }
    });
    
    /*Apply one of 3 classes :"green", "blue" or "violet"
    when click on dot*/
    $('#dot1').click(function() {
        $('body').removeClass('blue').removeClass('violet').addClass('green');
        $('.links_wrap_group').css('display','table');
        $('.links_wrap_agency').css('display','none');
        $('.links_wrap_studio').css('display','none');
        if ($('#ribbons_wrap').hasClass('its_ribbon_now')) {
            console.log('body green');
            RibbonToGreen();
        }
        if ($('#ribbons_wrap').hasClass('its_line_now')) {
            RibbonToMainGreen();
        }
        if ($(window).scrollTop()<600) {
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$green);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','block');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',"transparent");
                $('.star_group_green').css('display','block');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
        }
        if ($(window).scrollTop()>600) {
            $('.star_group_green').css('display','none');
            $('.star_agency_blue').css('display','none');
            $('.star_studio_violet').css('display','none');
            $('.star_group_white').css('display','block');
            $('.star_agency_white').css('display','none');
            $('.star_studio_white').css('display','none');              

            $('.menu').css('background',$green);
        }
    });
    $('#dot2').click(function() {
        $('body').removeClass('green').removeClass('violet').addClass('blue');
        $('.links_wrap_group').css('display','none');
        $('.links_wrap_agency').css('display','table');
        $('.links_wrap_studio').css('display','none');
        if ($('#ribbons_wrap').hasClass('its_ribbon_now')) {
            console.log('body blue');
            RibbonToBlue();
        }
        if ($('#ribbons_wrap').hasClass('its_line_now')) {
            RibbonToMainBlue();
        }
        if ($(window).scrollTop()<600) {
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$blue);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','block');
                $('.star_studio_white').css('display','none');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',"transparent");
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','block');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }  
        }
        if ($(window).scrollTop()>600) {
            $('.star_group_green').css('display','none');
            $('.star_agency_blue').css('display','none');
            $('.star_studio_violet').css('display','none');
            $('.star_group_white').css('display','none');
            $('.star_agency_white').css('display','block');
            $('.star_studio_white').css('display','none');

            $('.menu').css('background',$blue);
        }
    });
    $('#dot3').click(function() {
        $('body').removeClass('blue').removeClass('green').addClass('violet');
        $('.links_wrap_group').css('display','none');
        $('.links_wrap_agency').css('display','none');
        $('.links_wrap_studio').css('display','table');
        if ($('#ribbons_wrap').hasClass('its_ribbon_now')) {
            console.log('body violet');
            RibbonToViolet();
        }
        if ($('#ribbons_wrap').hasClass('its_line_now')) {
            RibbonToMainViolet();
        }
        if ($(window).scrollTop()<600) {
            if ($('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',$violet);
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','none');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','block');
            }
            else if (!$('span').hasClass('menu-middle-click')) {
                $('.menu').css('background',"transparent");
                $('.star_group_green').css('display','none');
                $('.star_agency_blue').css('display','none');
                $('.star_studio_violet').css('display','block');
                $('.star_group_white').css('display','none');
                $('.star_agency_white').css('display','none');
                $('.star_studio_white').css('display','none');
            }
        }
        if ($(window).scrollTop()>600) {
            $('.star_group_green').css('display','none');
            $('.star_agency_blue').css('display','none');
            $('.star_studio_violet').css('display','none');
            $('.star_group_white').css('display','none');
            $('.star_agency_white').css('display','none');
            $('.star_studio_white').css('display','block');

            $('.menu').css('background',$violet);
        }
    });
   
    /*Animate ribbon dipendently of user scroll direction*/
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        console.log("scrool from top of window="+st);
        /*If user scrolls down*/
        if (st > lastScrollTop && ($(window).scrollTop()>=0) && ($(window).scrollTop()<=500) && $('#ribbons_wrap').hasClass("its_ribbon_now") ) {
            RibbonToLine();
            $('#ribbons_wrap').addClass("its_line_now").removeClass("its_ribbon_now");
            $('#ribbon1,#ribbon2').css('z-index','-5 !important');
                        if ($('body').hasClass('green')) {
                RibbonToMainGreen();
            }
            else if ($('body').hasClass('blue')) {
                RibbonToMainBlue();
            }
            else {
                RibbonToMainViolet();
            }
       }
       /*If user scrolls up*/ 
       else if (st < lastScrollTop && ($(window).scrollTop()>=0) && ($(window).scrollTop()<=500) && $('#ribbons_wrap').hasClass("its_line_now")) {
            console.log("up up");
            Line_To_Ribbon();
            $('#ribbons_wrap').addClass("its_ribbon_now").removeClass("its_line_now");
            if ($('body').hasClass('green')) {
                RibbonToGreen();
            }
            else if ($('body').hasClass('blue')) {
                RibbonToBlue();
            }
            else {
                RibbonToViolet();
            }
       }
       lastScrollTop = st;
    });
});