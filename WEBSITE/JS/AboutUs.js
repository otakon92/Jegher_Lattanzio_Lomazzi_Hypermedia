$(document).ready(function() {
    /*Snippet of code for taking the tab to be opened by the footer*/
    var queryString = new Array();
    var params=null;
    $(function () {
        if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) 
            {
                params = window.location.search.split('?')[1];  
            }
        }
            getInformation(params);
    });
   
});

function getInformation(params){
    var info;
     $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_AboutUs.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
        data:{
            query:"getAll="
        },
        success: function(response){
           // console.log(response);
           info=(JSON.parse(response));
           //console.log(total_number);
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done(function(){
        
        var string;
        
         $(".AboutUs-History-box").append(info[0]['History']);
         $(".AboutUs-Goal-box").append(info[0]['Goal']);
         $(".AboutUs-Contact-right").append(info[0]['Contact']+"<br><br><br>");
         
        var testimonials = info[0]['Testimonial'].split('|');
        for(i = 0 ; testimonials[i] ; i++) {
            string = "<div style='background-image: url(../RES/IMAGES/AboutUs/"+testimonials[i]+".png); background-size: 100% 100%; display: inline-block; padding: 7%; margin: 2%;  margin-left: 10%; margin-right: 10%'></div>";
            $(".AboutUs-Testimonial-box").append(string);
        }
         history();
        $(".AboutUs-History").on("click",history);
        $(".AboutUs-Goal").on("click",Goal);
        $(".AboutUs-Contact").on("click",Contact);
        $(".AboutUs-Testimonial").on("click",Testimonial);
         //takes the name of the tab to be loaded, and loads it
         if(params!=null){
             $(".AboutUs-"+params).click();
         }
         
         $(".AboutUs-Contact-box").append("<br><div id='map-canvas'> </div>");
         //Google Maps API loading
         loadMap();
     });  
}



function history(){
    $(".AboutUs-History").css("background-color","rgb(50,50,250)");
    $(".AboutUs-Goal").css("background-color","rgb(50,50,100)");
    $(".AboutUs-Contact").css("background-color","rgb(50,50,100)");
    $(".AboutUs-Testimonial").css("background-color","rgb(50,50,100)");
    $(".AboutUs-History-box").show();
    $(".AboutUs-Goal-box").hide();
    $(".AboutUs-Contact-box").hide();
    $(".AboutUs-Testimonial-box").hide();
}

function Goal(){
    $(".AboutUs-History").css("background-color","rgb(50,50,100)");
    $(".AboutUs-Goal").css("background-color","rgb(50,50,250)");
    $(".AboutUs-Contact").css("background-color","rgb(50,50,100)");
    $(".AboutUs-Testimonial").css("background-color","rgb(50,50,100)");
    $(".AboutUs-History-box").hide();
    $(".AboutUs-Goal-box").show();
    $(".AboutUs-Contact-box").hide();
    $(".AboutUs-Testimonial-box").hide();
}

function Contact(){
    $(".AboutUs-History").css("background-color","rgb(50,50,100)");
    $(".AboutUs-Goal").css("background-color","rgb(50,50,100)");
    $(".AboutUs-Contact").css("background-color","rgb(50,50,250)");
    $(".AboutUs-Testimonial").css("background-color","rgb(50,50,100)");
    $(".AboutUs-History-box").hide();
    $(".AboutUs-Goal-box").hide();
    $(".AboutUs-Contact-box").show();
    $(".AboutUs-Testimonial-box").hide();
}

function Testimonial(){
    $(".AboutUs-History").css("background-color","rgb(50,50,100)");
    $(".AboutUs-Goal").css("background-color","rgb(50,50,100)");
    $(".AboutUs-Contact").css("background-color","rgb(50,50,100)");
    $(".AboutUs-Testimonial").css("background-color","rgb(50,50,250)");
    $(".AboutUs-History-box").hide();
    $(".AboutUs-Goal-box").hide();
    $(".AboutUs-Contact-box").hide();
    $(".AboutUs-Testimonial-box").show();
}

function loadMap(){  
      google.maps.event.addDomListener(window, 'load', initialize());  
}

function initialize() {
        var mapOptions = {
          center: { lat: 25.82226748, lng: -80.28586063},
          zoom: 13
        };
   // console.log(mapOptions);
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
}