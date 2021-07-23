$(function (){
    'use strict'
    // Adjust Slider Height
    
    var winH    = $(window).height(),
    upperH  = $('.upper-bar').innerHeight(),
    navH    = $('.navbar').innerHeight();

$('.slider , .carousel-item').height(winH - (upperH + navH));

// Start Shuffled imges in Featuerd Work Section

$('.featured_work ul li').on('click' , function (){
    $(this).addClass('active').siblings().removeClass('active')
    if($(this).data('class') ==='all')  {
        $('.shuffule-imgs .col-sm').css('opacity' , 1)

    }else {
        $('.shuffule-imgs .col-sm').css('opacity' , '.08')
        $($(this).data('class')).parent().css('opacity' , 1)
    }
   })
   //  Cashing the Scrol Top Element

   var scrollButton = $("#scroll-top");
   $(window).scroll(function () {

       $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();

   });

   // Click On Botton To Scroll Top 
   scrollButton.click(function () {
       $("html ,body").animate({ scrollTop: 0 }, 600);

   });
})