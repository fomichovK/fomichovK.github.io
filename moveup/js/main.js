$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
   items: 1,
        nav:true,
        navText:["",""],
        loop: true,
        autoplay: true,
        loop:true,

    });
    
    
    $('.nav-icon').on('click', function () {
        $('.nav-icon').css('display', 'none');
        $('.nav_close').css('display', 'block');
        $('.nav').css('display', 'block');
    });
    $('.nav_close').on('click', function () {
        $('.nav-icon').css('display', 'block');
        $('.nav_close').css('display', 'none');
        $('.nav').css('display', 'none');
    });
});