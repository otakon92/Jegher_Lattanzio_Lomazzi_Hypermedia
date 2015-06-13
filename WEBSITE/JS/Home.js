$(document).ready(getInformation());

function getInformation(){
    var info;
     $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_Home.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
        data:{
            query:"getAll="
        },
        success: function(response){
            console.log(response);
           info=(JSON.parse(response));
           //console.log(total_number);
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done(function(){
        var str ="<div class='index-container'><p class='index-title-description'>"+info[0]['description']+"</p></div>";
         $("#index-title").append(str);
         $("#index-aboutUs").append(info[0]['about']);
         $("#index-courses").append(info[0]['courses']);
         $("#index-offers").append(info[0]['offer']);
         $("#index-social").append(info[0]['social']);
         
     });  
}
