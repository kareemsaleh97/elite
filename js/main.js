/*global $, window*/

$(function () {

    'use strict';

    var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
    
    // adjest slider height

    $('.slider, .carousel-item').height(winH - (upperH + navH));

    // featured work shuflle

    $('.featured-work ul li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') ==='all') {
            $('.shuflle-image .col-md-3').animate({'opacity': '1'}, 700);
        } else {
            $('.shuflle-image .col-md-3').animate({'opacity': '0'}, 700);
            $($(this).data('class')).parent().animate({'opacity': '1'}, 700);
        }
        
    });

    // move line

    // $('.line').on('mouseover', function () {
    //     $('.line-m').animate({'left':'120%'}, 700);
    //     $('.line-m').animate({'left':'-40'}, 0);
    // });
});
