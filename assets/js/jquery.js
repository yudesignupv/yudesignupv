$(document).ready(function(){
    $('.firstpage').click(function(){
        $('.firstpage').hide();
        $('.navbar').css("visibility","visible");
        $("body").css("overflow-y","visible");
        });
});

$(window).bind('beforeunload',function(){
    $('.firstpage').show();
    $('html,body').scrollTop(0);
});