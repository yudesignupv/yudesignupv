$(document).ready(function(){
    $('.firstpage').click(function(){
        $('.firstpage').hide();
        $('.navbar').css("visibility","visible");
        $("body").css("overflow-y","visible");
		$('#newsletterPopUp').modal('show');
	});
});

$(window).bind('beforeunload',function(){
    $('.firstpage').show();
    $('html,body').scrollTop(0);
});