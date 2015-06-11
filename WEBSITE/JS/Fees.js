$(document).ready(ready);

function ready()
{
    getOfferts();
}

function getOfferts(){
    var offerts;
     $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_offerts.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
        data:{/* query: "SELECT COUNT(*) AS counted FROM instructors;"*/
            query:"getOfferts="
        },
        success: function(response){
          offerts=(JSON.parse(response));
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done(function(){
     displayOfferts(offerts);
     });  
}

function displayOfferts(offerts)
{for(var i = 0 ; i < offerts.length ; i++)
    {
    var content="<div class='offert col-sm-12 col-xs-12 col-md-4 col-lg-4 '>"+offerts[i]['description']+"</div>";
    $("#offerts").append(content);
    }
}