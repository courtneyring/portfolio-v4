//--------Smoothscroll--------//

navbarHeight = $('nav').height()

$(".nav-item a").on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var hash = this.hash;

    if(hash.length){
        var scrollLocation = $(hash).offset().top - navbarHeight;
    }
    else{
       var scrollLocation = 0;
    }                            
    
    $('html, body').animate({
       scrollTop: scrollLocation
     }, 500, function(){
     });
    
    if($(".collapse.navbar-collapse").hasClass('show')){
       $(".collapse.navbar-collapse").collapse('hide');
    }  

});

$('body').scrollspy({
//   offset: $("nav").outerHeight()
});


//---------Navbar Collapse-------//
function checkScroll(){
    var startY = $('.navbar').height() ; 


    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
        console.log('here')
    } else{
        $('.navbar').removeClass("scrolled");
    }
}

$(function(){
    $(window).on("scroll load resize", function(){
        checkScroll();
    })
})


//---------Menubar-------//
$('.menubar__toggler').on('click', function(e) {
    $('.menubar').collapse('show');
})

$('.menubar').on('click', function(e) {
    if (!e.target.classList.contains('menubar__pullout')){
        $('.menubar').collapse('hide');
    }
})