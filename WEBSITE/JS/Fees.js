$(document).ready(ready);

function ready()
{
    getOffers();
}

function getOffers(){
    var offerts;
     $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_offers.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
        data:{/* query: "SELECT COUNT(*) AS counted FROM instructors;"*/
            query:"getOffers="
        },
        success: function(response){
          offers=(JSON.parse(response));
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done(function(){
     displayOffers(offers);
     });  
}

function displayOffers(offers)
{for(var i = 0 ; i < offers.length ; i++)
    {
    var content="<div class='offer col-sm-12 col-xs-12 col-md-4 col-lg-4 '>"+offers[i]['description']+"</div>";
    $("#offers").append(content);
    }
}