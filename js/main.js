const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}
$(document).ready   (function(){

   $nav=$('.nav');
   $toggleCollapse=$('.toggle-collapse');

//    click event to toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse'); 
    })

    // owl carousel for block
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .own-nav-prev'),$('.owl-navigation .own-nav-next')],
        responsive:responsive
    });
    //  click to scro;; up
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })
    // aos instance
    AOS.init();
});