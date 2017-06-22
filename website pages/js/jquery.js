/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
$(document).ready(function(){
function checkScroll(){
    var startY = $('.nav ').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.nav ').addClass("scrolled");
    }else{
        $('.nav ').removeClass("scrolled");
    }
}

if($('.nav').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
});
