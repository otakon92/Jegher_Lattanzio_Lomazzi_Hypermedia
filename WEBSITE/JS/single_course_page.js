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
            
            //load up course informations
            getCourse(queryString["idcat"],queryString["idcourse"]);
        }
        else{
           $("body").html("Problem loading course. Try selecting again"); 
        }
    });
});


function getCourse(categoryID, idcourse){
    var course;
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
           course=JSON.parse(response);
           console.log(course[0]);
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done(function() {
    //change page title
     $('title').html("BigGym - " + course[0]['course_name']);
    //begin copying data into tabs
    //1) the div containing the main image of the course
        var boxcourse="<img src='" + course[0]['main_image_path'] + "' class='course_image img-rounded'/> <div class='overlay'> <h2 class='course_name'> " + course[0]['course_name'] + "</h2> </div>";
       $('#course_container').append(boxcourse);
    //2)load up description 
        var description="<p>" + course[0]['description'] + "</p>";
        $('#description').append(description);
    //3)load up teachers 
        loadTeachers(categoryID, idcourse);
    });
}

function loadTeachers(categoryID, idcourse){
    $.ajax({
        url:getPHPFile('courses'),
        method:"POST",
        cache: false,
        crossDomain: setBrowserCrossDomain(),
        data:{/* query: "SELECT * FROM instructors_courses JOIN instructors ON instructors_courses.PersonID=instructors.personid WHERE idcourse=idcourse AND id_course_category=categoryID;"*/
            query:"getinstructors="+categoryID+"="+idcourse
        },
        success: function(response){
           
           //console.log(response);
           instructors=JSON.parse(response);
           console.log(instructors);
        },
        error: function(request, error) {
            console.log(error);
        }
    
    }).done(function (){
    
    //done loading instructors, we can proceed create a list for them, with a image for every instructor
        var ul="<ul class='list-group teachers-list'> </ul>";
        $("#teachers").append(ul);
        
        for(var i=0;i<instructors.length;i++){
            var li= "<li class='list-group-item'> <img src='"+instructors[i]['smallimage']+"' class='teacher-small-image'> <a href='single_instructor.html?name="+instructors[i].personid+"' >" + instructors[i]['firstname'] + " " + instructors[i]['secondname'] + " " + instructors[i]['surname'] + "</a> </li>"
            $(".teachers-list").append(li);
        }
    
    });
}

