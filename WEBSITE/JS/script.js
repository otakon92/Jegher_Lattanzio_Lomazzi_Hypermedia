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
    
    getTwitterPosts();
    
});

function getPHPFile(phpSite){
    var str;
    switch(phpSite){
        case 'courses':  
            str="http://biggymjll.altervista.org/getfromdb_courses.php";
        break;
        case 'twitter':
            str="http://biggymjll.altervista.org/getFromTwitter.php";
        break;
    }
    return str;
}

function setBrowserCrossDomain(){
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    if(!!window.chrome && !isOpera)              // Chrome 1+
        return true;
    else
        return false;
}

function getTwitterPosts(){
    var resp;
    $.ajax({
        url:getPHPFile('twitter'),
        method:"POST", //metodo per ricevere i dati  
        cache: false,
        crossDomain: setBrowserCrossDomain(),
        success: function(response){
           resp=JSON.parse(response);
           console.log(resp);
        },
        error: function(request, error) {
            console.log(resp);
        }
    }).done(function(){
        //done loading twitter posts, we can start creating the footer panel for twitter
        var lastPost="<div> <img src="+ resp[0]['user']['profile_image_url']  +" /><h4> <a href='https://twitter.com/BigGymSRL'>"+ resp[0]['user']['screen_name'] +" </a> </h4> </div> <div>" + resp[0]['text']+" </div>";
        var linkToPost= "<a href='https://twitter.com/BigGymSRL/status/"+resp[0]['id_str']+"'>" + resp[0]['user']['created_at'] + " </a>";
        $('#twitterLastPost').append(lastPost);
        $('#twitterFooter').append(linkToPost);
    });
}
