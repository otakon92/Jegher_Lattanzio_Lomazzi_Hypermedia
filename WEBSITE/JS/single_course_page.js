$(document).ready(function() {
var queryString = new Array();
    $(function () {
        if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) {
                var params = window.location.search.split('?')[1].split('&');
                for (var i = 0; i < params.length; i++) {
                    var key = params[i].split('=')[0];
                    var value = params[i].split('=')[1];
                    queryString[key] = value;
                }
            }
        }
        if (queryString["idcat"] != null && queryString["idcourse"] != null) {
            /*var data;
            data = "<b>Name:</b> " + queryString["idcat"] + " <b>Technology:</b> " + queryString["idcourse"];
            console.log(data);*/
            getCourse(queryString["idcat"],queryString["idcourse"]);
        }
        else{
           $("body").html("Problem loading course. Try selecting again"); 
        }
    });
});


function getCourse(categoryID, idcourse){
    console.log("idcat=" + categoryID +" idcourse="+idcourse);
    $.ajax({
        url:getPHPFile('courses'),
        method:"POST", //metodo per ricevere i dati  
        cache: false,
        crossDomain: setBrowserCrossDomain(),
        data:{/* query: "SELECT * FROM courses WHERE idcourse=idcourse AND id_course_category=categoryID;"*/
            query:"getcourse="+categoryID+"="+idcourse
        },
        success: function(response){
           
           //console.log(response);
           var course=JSON.parse(response);
           console.log(course);
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done({});
}

