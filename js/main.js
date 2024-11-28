$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50)
            $(".navbar").addClass("sticky");
        else
            $(".navbar").removeClass("sticky");
        console.log("Scroll detectado");
    });
});