/* global $ , window */

$(document).ready(function(){
    $('#content').show();
    $('#loading').hide();
    $("html").niceScroll({
        cursorcolor:"silver" ,
        cursorwidth:"10px" ,
        background:"silver" ,
        cursorborder:"1px solid black" ,
        cursorborderradius:0
    });
    var wh = $(window).height();
    $(".begin").height(wh*.1);
    $("header").height(wh*.9);
    $(".contact").height(wh*.9);
    $(".copyright").height(wh*.1);
//    Recall BX slider
    $('.slider').bxSlider({
        auto: true ,
        pause: 3000
    });
    // Go to top
    $(".top").on("click",function(){
        $("html,body").animate({
            scrollTop: 0
        },1000);
    });
    // Click on Menu sign
    $(".menu").height(wh);
    $(".menusign").on("click",function(){
        $(this).fadeOut(400).next().fadeIn(400);   
    });
    $(".close").on("click",function(){
        $(this).parent().fadeOut(400).prev().fadeIn(400);
    });
    $(".menu a").on("click",function(){
        $(this).parent().parent().fadeOut(1000).prev().fadeIn(1000);
        $("html , body").animate({
            scrollTop: $($(this).data("value")).offset().top
        },1000)
    });
    
});
