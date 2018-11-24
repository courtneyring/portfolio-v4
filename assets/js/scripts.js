
$(window).on('load', function() {
    $('.loading-screen').hide()
    checkAnimations();
})


//--------Animations-------//


function checkAnimations() {
    $('.landing').removeClass('pre-scroll')
}


//---------Navbar Collapse-------//
function checkScroll(){

    if($(window).width() > 990) {
        if($(window).scrollTop() > 100){
            $('.menubar__toggler').removeClass('ghost')

        } else{
            $('.menubar__toggler').addClass('ghost')
        }
    }
}

$(function(){
    $(window).on("scroll load resize", function(){
        checkScroll();
        checkAnimations();
    })
})


//---------Menubar-------//

$(function(){
    offsets = {
        'work': $('#work').offset().top,
        'contact': $('#contact').offset().top
    }
})

$('.menubar__toggler').on('click', function(e) {
    openMenu();
})


$('.menubar').on('click', function(e) {
    target = e.target.classList
    
    if (target.contains('menubar__link')){
        scrollToSection(e);
        closeMenu(); 
    }
    else if (target.contains('menubar__pullout')){
        return;
    }
    else{
       closeMenu();   
    }
})

$('.menubar__list-link').on('click', function(e){
    scrollToSection(e);
})

function scrollToSection(e) {
    e.preventDefault();
    e.stopPropagation();

    var hash = $(e.target).attr('href')


    
    offset = offsets[hash]

    if(hash.length){
        var scrollLocation = offset+$('menubar__toggler').height();
    }
    else{
       var scrollLocation = 0;
    }                 


    $('html, body').animate({
       scrollTop: scrollLocation
     }, 500);
        
}

function openMenu() {
//    $('.menubar').removeClass('ghost')
     
    $('.menubar__toggler').addClass('hidden')
    $('.menubar').addClass('expand')
    setTimeout(function() {
        $('.menubar').removeClass('ghost')
    }, 20)
//    
//    $('.menubar').animate(
//        {opacity: '1'}, 
//        {duration: 400, queue: false}
//    )
//    
//    $('.menubar__pullout').animate(
//        {width: '25%'},
//        {duration: 400, queue: false}
//    )
}


function closeMenu() {
    $('.menubar').removeClass('expand')
    setTimeout(function() {
       $('.menubar').addClass('ghost')
    }, 20)
//    $('.menubar').css('display', 'none')
    $('.menubar__toggler').removeClass('hidden')
//    $('.menubar').animate(
//        {opacity: '0'}, 
//        {duration: 400, queue: false}
//    )
//
//    $('.menubar__pullout').animate(
//        {width: '0%'},
//        {duration: 400, 
//        queue: false, 
//        complete: function() {
//                $('.menubar').addClass('ghost')
//                if($(window).scrollTop() > 100){
//                    $('.menubar__toggler').removeClass('ghost')
//                }
//            }
//        }
//    )
}


/*----------ReCaptcha----------*/
function recaptchaCallback() {
    $('.submit').removeClass('disabled');
    $('.submit').removeAttr('disabled');
};
