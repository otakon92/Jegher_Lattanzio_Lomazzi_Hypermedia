$(document).ready(ready);

$(window).resize(dynamicAlign);

function ready()
{
    dynamicAlign();
    code = getFromURL();
    getInstructorFromDB(code);
    getAllAwardsOfInstructor(code);
    getAllCoursesOfInstructor(code);
}

function getFromURL()
{
    var queryString = new Array();
    if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) {
                var params = window.location.search.split('?')[1].split('&');
                for (var i = 0; i < params.length; i++) {
                    var key = params[i].split('=')[0];
                    var value = decodeURIComponent(params[i].split('=')[1]);
                    queryString[key] = value;
                }
            }
         if (queryString["code"] ) {
             return queryString["code"];
        }
    }
}

function getInstructorFromDB(code) 
{
    var instructor;
    $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_instructors.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
        data:{/* query: "SELECT * FROM instructors WHERE instructors.personid=".$substrings[1].";"*/
            query:"getSingleInstructor="+code+"="
        },
        success: function(response){
           instructor=(JSON.parse(response));
           console.log("succes");
        },
        error: function(request, error) {
            console.log("error");
        }
    }).done(function(){
         displayInstructor(instructor);
     });  
}


function getAllAwardsOfInstructor(code) 
{
    var instructor;
    $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_instructors.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
        data:{/* query: "SELECT awards.iconurl, awards.comment, instructors_awards.dayawarded FROM instructors, awards, instructors_awards WHERE instructors.personid='".$substrings[1]."' AND instructors.personid = instructors_awards.personid AND instructors_awards.award = awards.award;"*/
            query:"getAllAwardsOfInstructor="+code+"="
        },
        success: function(response){
           instructor=(JSON.parse(response));
           console.log("succes");
        },
        error: function(request, error) {
            console.log("error");
        }
    }).done(function(){
         displayAwardsOfInstructor(instructor);
     });  
}


function getAllCoursesOfInstructor(code) 
{
    var instructor;
    $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_instructors.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
        data:{/* query: "SELECT courses.course_name FROM instructors, courses, instructors_courses WHERE instructors.personid='".$substrings[1]."' AND instructors.personid = instructors_courses.personid AND instructors_courses.idcourse = courses.idcourse AND instructors_courses.id_course_category = courses.id_course_categpry ;"*/
            query:"getAllCoursesOfInstructor="+code+"="
        },
        success: function(response){
           instructor=(JSON.parse(response));
           console.log("succes");
        },
        error: function(request, error) {
            console.log("error");
        }
    }).done(function(){
         displayCoursesOfInstructor(instructor);
     });  
}

function displayInstructor(instructor)
{
    
    if(instructor[0]['secondname']!=null) 
    {
    var name=""+instructor[0]['firstname']+" "+instructor[0]['secondname']+" "+instructor[0]['surname']+"";
    }
    else
    {
        var name=""+instructor[0]['firstname']+" "+instructor[0]['surname']+"";
    }
    var image ="<img src="+instructor[0]['bigimage']+">";
    
    var descContent="<div><ul><li>"+
    "Name:"+instructor[0]['firstname']+" "+instructor[0]['surname']+
    "</li><li>Birth:"+instructor[0]['birth']+
    "</li><li>Height:"+instructor[0]['height']+" cm"+
    "</li><li>Weight:"+instructor[0]['weight']+" Kg"+
    "</li><li>Member Since:"+instructor[0]['membersince']+
    "</li><li>Favourite Color:"+instructor[0]['favouritecolor']+
    "</ul>"+
    "Description:</br>"+instructor[0]['description']+
    "</br>Certifications:</br>"+instructor[0]['certifications']+
    "</br>Motto:</br>"+instructor[0]['motto']+
    "</div>";
    
    $("#sectionDescription").append(descContent);
    $("#instructorPersonalImage").append(image);
    var awardsContent="<div>User Rating:"+instructor[0]['userrating']+"</div>";
    $("#rating").append(awardsContent);
    $(".instructorName").append(name);
}
function displayAwardsOfInstructor(instructor)
{
    var awards="";
    
        if(instructor!=null)
        {
    for(var i =0 ; i < instructor.length ;i++) 
    {
        temp="<div>"+instructor[i]['comment']+""+instructor[i]['dayawarded']+"<img class='awardicon' src="+instructor[i]['iconurl']+"></div>";
        awards=awards+temp;
    }
        }
        var awardsContent="<div>"+awards+"</div>";
    $("#sectionAwards").append(awardsContent);
}
function displayCoursesOfInstructor(instructor)
{
    var courses="";
        if(instructor!=null)
        {
    for(var i =0 ; i < instructor.length ;i++) 
    {
        temp="<div class='course'>"+instructor[i]['course_name']+"</div>";
        courses=courses+temp;
    }
        }
        var coursesContent="<div>"+courses+"</div>";
    $("#sectionCourses").append(coursesContent);
}
function dynamicAlign()
{
    var width = window.innerWidth;
    
    $('.resizable').each(function() {
        dynamicAlignElement(width,$( this ))
    });
    
    $('.resizableMargin').each(function() {
        dynamicMargin(width,$( this ))
    });
}

function dynamicAlignElement(width,elem)
{
    if(width>=880)
        dynamicAlignBig(width,elem);
    else
        dynamicAlignSmall(width,elem);                           
}
function dynamicAlignBig(width,elem)
{
    elem.width("47%");
}
function dynamicAlignSmall(width,elem)
{
    elem.width("90%");
}
function dynamicMargin(width,elem)
{  
    if(width>=880)
        dynamicMarginBig(width,elem);
    else
        dynamicMarginSmall(width,elem);
}
function dynamicMarginBig(width,elem)
{
    elem.css('margin', function (index, curValue) {
    return "0%";
    });
}
function dynamicMarginSmall(width,elem)
{
    elem.css('margin-left', function (index, curValue) {
    return "5%";
    });
}