$(document).ready(function(){
    $('.firstpage').click(function(){
        $('.firstpage').hide();
        $('.navbar').css("visibility","visible");
        $("body").css("overflow-y","visible");
		$('.newsletterPopUp').modal('show');
	});
	
     $(function() {
	setTimeout(function() {
	$(".firstpage").hide('blind', {}, 500);
	$('.navbar').css("visibility","visible");
	$("body").css("overflow-y","visible");
	$('.newsletterPopUp').modal('show');
	}, 7000);
     });
});

$(window).bind('beforeunload',function(){
    $('.firstpage').show();
    $('html,body').scrollTop(0);
});
