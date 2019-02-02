
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

    if($(window).width() > 1199) {
        
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
    
        if($(window).width() > 1199) {window.menubarWidth = '25%'}
        else if ($(window).width() > 767) {window.menubarWidth = '50%'}
        else {window.menubarWidth = '100%'}
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
        var scrollLocation = offset;
//        var scrollLocation = offset+$('.menubar__toggler').height();
        console.log(scrollLocation)
    }
    else{
       var scrollLocation = 0;
    }                 


    $('html, body').animate({
       scrollTop: scrollLocation
     }, 500);
        
}

function openMenu() {
    
    $('.menubar__toggler').animate({
        opacity: 0
    }, 400)
    
    $('.menubar').css('display', 'flex')
  
    $('.menubar').animate(
        {opacity: '1'}, 
        {duration: 400, queue: false}
    )

    $('.menubar__pullout').animate(
        {width: window.menubarWidth},
        {duration: 400, queue: false}
    )
}


function closeMenu() {
    $('.menubar__toggler').animate({
        opacity: 1
    }, 400)

    $('.menubar').animate(
        {opacity: '0'}, 
        {duration: 400, 
         queue: false,
         complete: function() {
               $('.menubar').css('display', 'none')
            }
        }
    ) 

    $('.menubar__pullout').animate(
        {width: '0%'},
        {duration: 400, queue: false}
    )
}

/*----------ReCaptcha----------*/
function recaptchaCallback() {
    $('.submit').removeClass('disabled');
    $('.submit').removeAttr('disabled');
};
