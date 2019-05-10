$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
               margin:50, //Îòñòóï îò ýëåìåíòà ñïðàâà â 50px
               nav:true, //Îòêëþ÷åíèå íàâèãàöèè
               navText: ["",""],
               autoplay:true, //Àâòîçàïóñê ñëàéäåðà
               smartSpeed:1000, //Âðåìÿ äâèæåíèÿ ñëàéäà
               autoplayTimeout:2000, //Âðåìÿ ñìåíû ñëàéäà
               responsiveClass:true,
               responsive:{0:{
                       items:1
                   },
                   600:{
                       items:2
                   },
                   1000:{
                       items:3
                   }
                   } //Àäàïòèâíîñòü. Êîë-âî âûâîäèìûõ ýëåìåíòîâ ïðè îïðåäåëåííîé øèðèíå.
                   
     });
});
// $('.navbar-header').click(function(){
//     if('bg-red'){
//     $(this).addClass('bg-red')}
//     else{
//         $(this).removeClass('bg-red')
//     }
        
//         });