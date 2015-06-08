$(document).ready(ready);

function ready()
{
}

function getNumberOfCategories(){
    var total_number;
     $.ajax({
        url:getPHPFile('courses'),
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        crossDomain: setBrowserCrossDomain(),
        data:{/* query: "SELECT COUNT(*) AS counted FROM instructors;"*/
            query:"getnumberofInstructors="
        },
        success: function(response){
           total_number=(JSON.parse(response));
           //console.log(total_number);
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done(function(){
     
         
     });  
}

function getInstructorOfTheMonth()
{
}