// $ = get jquery
// $(document) = get jquery, and run something with the title
// $("title").click << method
//$("a").click( function(){
//	DO STUFF
//});

$(document).ready( function() {
	/*$("h1").html("THIS IS WORKING!");

	var width = $(window).width();

	if ( width < 350 ) {
		$(".navToggle").show();
		$("nav").hide();
	}*/

	$("#mobilemenubutton").click( function() {
		$("nav").slideToggle(500);
		
	});

	$(window).scroll(function() {
	    if ($(this).scrollTop()>250) {
	        $('.back-to-top').fadeIn();
	    } else {
	        $('.back-to-top').fadeOut();
	    }
	});
});