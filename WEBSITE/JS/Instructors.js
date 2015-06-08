$(document).ready(ready);

function ready()
{
    getInstructorOfTheMonth();
}

function getNumberOfInstructors(){
    var total_number;
     $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_instructors.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
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
    var instructorOfTheMonth;
    $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_instructors.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
        data:{/* query: "SELECT instructors.FirstName, instructors.Surname, instructors.Description, instructors.SmallImage, awards.IconUrl FROM instructors JOIN awards ON instructors.PersonID=awards.PersonID WHERE awards.award=".InstructorOfTheMonth.";"*/
            query:"getnumberofInstructors="
        },
        success: function(response){
           instructorOfTheMonth=(JSON.parse(response));
           console.log(instructorOfTheMonth);
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done(function(){
         displayInstructorOfTheMonth(instructorOfTheMonth);
     });  
}

function displayInstructorOfTheMonth(instructorOfTheMonth)
{
    var content="<div><img src=".instructorOfTheMonth[0][3]."></div><div><p>".instructorOfTheMonth[0][0]."</p><p>".instructorOfTheMonth[0][1]."</p><p>".instructorOfTheMonth[0][2]."</p><img res=".instructorOfTheMonth[0][4]."></div>";
    $("#instructorOfTheMonth").append(content);
}