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
           award=(JSON.parse(response));
           console.log("succes");
        },
        error: function(request, error) {
            console.log("error");
        }
    }).done(function(){
         displayAwardsOfInstructor(award);
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
    
    var descContent="<div><ul class='list-group'><li class='list-group-item'>"+
    "Name:"+instructor[0]['firstname']+" "+instructor[0]['surname']+
    "</li><li class='list-group-item'>Birth:"+instructor[0]['birth']+
    "</li><li class='list-group-item'>Height:"+instructor[0]['height']+" cm"+
    "</li><li class='list-group-item'>Weight:"+instructor[0]['weight']+" Kg"+
    "</li><li class='list-group-item'>Member Since:"+instructor[0]['membersince']+
    "</li><li class='list-group-item'>Favourite Color:"+instructor[0]['favouritecolor']+
    "</li><li class='list-group-item'>Description:</br>"+instructor[0]['description']+
    "</li><li class='list-group-item'></br>Certifications:</br>"+instructor[0]['certifications']+
    "</li><li class='list-group-item'></br>Motto:</br>"+instructor[0]['motto']+
    "</li></div>"+
    "</ul>";
    
    $("#sectionDescription").append(descContent);
    $("#instructorPersonalImage").append(image);
    var awardsContent="<ul class='list-group'><li class='list-group-item'>User Rating:"+instructor[0]['userrating']+"</li></ul>";
    $("#rating").append(awardsContent);
    $(".instructorName").append(name);
}
function displayAwardsOfInstructor(award)
{
    var awards="";
    
        if(award!=null)
        {
    for(var i =0 ; i < award.length ;i++) 
    {
        temp="<li class='list-group-item'>"+award[i]['comment']+""+award[i]['dayawarded']+"<a data-toggle='tooltip' data-original-title='"+award[i]['description']+"'><img class='awardicon' src="+award[i]['iconurl']+"></a></li>";
        awards=awards+temp;
    }
        }
        var awardsContent="<div><ul class='list-group'>"+awards+"</ul></div>";
    $("#sectionAwards").append(awardsContent);
    $('a').tooltip();
}
function displayCoursesOfInstructor(instructor)
{
    var courses="";
        if(instructor!=null)
        {
    for(var i =0 ; i < instructor.length ;i++) 
    {
        temp="<li class='course list-group-item'><a href='single_course_page.html?idcat="+instructor[i]['id_course_category']+"&idcourse="+instructor[i]['idcourse']+"'>"+instructor[i]['course_name']+"</a></li>";
        courses=courses+temp;
    }
        }
        var coursesContent="<div><ul class='list-group'>"+courses+"</ul></div>";
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