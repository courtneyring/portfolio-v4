$(window).on('load', function() {
    $('.loading-screen').hide()
   
})

$(function(){
    $(window).on('resize', function(){
        setBackground()
    })
})


function setBackground() {
    
    mediaQuery = window.matchMedia( "(max-width: 767px)" )
    if(mediaQuery.matches){
        $('.hero').css('background-image', 'url(' + window.templateData.heroImgMobile + ')')
    }
    else {
         $('.hero').css('background-image', 'url(' + window.templateData.heroImgDesktop + ')')
    }
}


$(document).ready(function() {
    
    $.getJSON( "/assets/json/data.json", function( data ) {
        
        
        var queryString = window.location.search.slice(1);
        queryString = queryString.split('#')[0];
        var query = queryString.split('&');
        
        project = query[0].split('=')[1]
        templateData = data[project]

         
         if(!templateData){
             window.location.href = '/index.html#work'
            return 
         }
        
         window.templateData = templateData
         
         $('#mainHeader').html(templateData.mainHeader)
         $('#mainBody').html(templateData.mainBody)
         $('#infoCompany').html(templateData.infoCompany)
         templateData.infoRole.forEach(function(role){
             $('#infoRole').append('<li>' + role + '</li>')  
         })
         templateData.infoTech.forEach(function(tech){
             $('#infoTech').append('<li>' + tech + '</li>')  
         })
         
         
         $('.footer__previous').attr('href', '/work.html?id=' + templateData.previous.id)
         $('.footer__previous-project').html(templateData.previous.label)
         $('.footer__next').attr('href', '/work.html?id=' + templateData.next.id)
         $('.footer__next-project').html(templateData.next.label)
         
         setBackground()
         
         if(templateData.links){
             $("<div class='overview__main-links'></div>").insertAfter('.overview__main-body')
             templateData.links.forEach(function(link){
                 $('.overview__main-links').append("<a class='overview__main-link' href=" + link.url +" target='_blank'><i class='fa fa-link overview__main-link-icon'></i>" + link.label + "</a>")
             })
         }
         
         if (!templateData.desktopImg && !templateData.mobileImg){
             $('.section2').hide()
         }
         else if(!templateData.mobileImg) {
             $('.section2__desktop-image').attr('src', templateData.desktopImg)
             $('.section2__mobile-image').hide()
         }
         else {
             $('.section2__desktop-image').attr('src', templateData.desktopImg)
             $('.section2__mobile-image').attr('src', templateData.mobileImg)
         }
         
       

    })

    
    

})