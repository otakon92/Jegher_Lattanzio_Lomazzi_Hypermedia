$(document).ready(function () {
    
    var offset = 250;
    var duration = 300;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top-button').fadeIn(duration);
        } else {
            $('.back-to-top-button').fadeOut(duration);
        }
    });
    
   
    
    /*Scroll Plugin*/
    $(".back-to-top-button").click(function(event) { 
        $('html, body').animate({scrollTop: 0}, 'slow');
        event.preventDefault();
    });
    
    /*jsSocials*/
    $("#share").jsSocials({
            showLabel: true,
            showCount: true,
            shares: ["email", "facebook"]
        });
    
});


