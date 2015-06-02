$(document).ready(function() {
    
   
    //loading up #page1
    //start the ajax calls with getting a total number of categories
    page1Loading();
    
    
    
    
});

function page1Loading(){
    getNumberOfCategories();
}

function getPHPSite(){
    return "http://biggymjll.altervista.org/getfromdb2.php";
}

function getNumberOfCategories(){
    var total_number;
     $.ajax({
        url:getPHPSite(),
        method:"POST", //metodo per ricevere i dati  
        data:{/* query: "SELECT COUNT(*) AS counted FROM course_categories;"*/
            query:"getnumberofcategories"
        },
        success: function(response){
           total_number=(JSON.parse(response));
           //console.log(total_number);
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done(function(){
     
         groupedCourses(total_number[0]['counted']);
         
     });  
}
   
function groupedCourses(totalNumber){
    $.ajax({
        url:getPHPSite(),
        method:"POST", //metodo per ricevere i dati  
        data:{/* query: "SELECT course_categories.id_course_category, course_categories.course_category, course_categories.cat_bg_img_path, courses.idcourse, courses.course_name FROM course_categories JOIN courses ON courses.id_course_category=course_categories.id_course_category ORDER BY id_course_category;"*/
            query: "getcoursesjoincategories"
        },
        success: function(response){
           var courses_join_categories=(JSON.parse(response));
           //console.log(courses);
            
            //for every category, create some divs
           
                var categories=new Array();
                var toCheck=courses_join_categories[0]['id_course_category'];
                //console.log(toCheck);
                for(var i=0; i<courses_join_categories.length;i++){
                    if(toCheck==courses_join_categories[i]['id_course_category']){
                        categories.push(courses_join_categories[i]);
                        //console.log(courses_join_categories[i]);
                        toCheck=toCheck-1;
                        //console.log(toCheck);
                    }
                }
            
            
           // console.log(categories);
            
            for(var j=0;j<categories.length;j++){
            
             //...get category's id, the category's name and the background image
                var categoryID=categories[j]['id_course_category'];
                var categoryName=categories[j]['course_category'];
                var imageUrl=categories[j]['cat_bg_img_path'];
                //create a container for the image
                var box_category="<div class='category' id='category"+ categoryID + "'> <img src='" + imageUrl + "' class='category_image img-rounded'/> <div class='overlay'> <h2 class='category_name'> " + categoryName + "</h2> </div> </div>";
                $("#select_category_main_box").after(box_category);
                
                
                //add a panel
                var box_courses="<div class='courses panel panel-default' id='courses_cat"+ categoryID+"'> </div>";
                    $('#category'+categoryID).append(box_courses);
                //then add a list inside that panel
                    $('#courses_cat'+ categoryID).append("<ul class='list-group' id='list_cat"+categoryID+"'>  </ul>");   
                
                //add a click handler for the panel
                 $('#category'+categoryID).on("click", toggleCallbackForPanel(categoryID));
                //and then hide it at load
                $('#courses_cat'+categoryID).css("display", "none");
            }
            
            //for every course...
            //searching for sub groups of courses inside that particular category
           for(var i=0;i<categories.length;i++){
               
               var courses_per_category=$.grep(courses_join_categories, function(v,index){
                    return v['id_course_category']==categories[i]['id_course_category'];
               });
               
               //console.log(courses_per_category);
               
                for(var j=0; j<courses_per_category.length;j++){
                    //append course to list
                    $("#list_cat"+categories[i]['id_course_category']).append("<li id='el"+categories[i]['id_course_category']+courses_per_category[j]['idcourse'] +"' class='list-group-item'> <a href='#page2' data-transition='slide'>" + courses_per_category[j]['course_name'] + "</a> </li>");
                    //add a click handler that overwrite the courseRecord var
                    $("#el"+categories[i]['id_course_category']+courses_per_category[j]['idcourse']).on("click", storeInRecordCallback(categories[i]['id_course_category'],courses_per_category[j]['idcourse'],courses_per_category[j]['description'],courses_per_category[j]['course_name']));
                    
                }
               
               
           }
            
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done(function(){});  
}

function toggleCallbackForPanel(categoryID){
    return function() {
                     console.log('#category'+categoryID);
                     $('#courses_cat'+categoryID).toggle('slow');
    }
}

function storeInRecordCallback(idcat, idcou, descr, course_name){
    return function(){
        courseRecord.categoryID=idcat;
        courseRecord.idcourse=idcou;
        courseRecord.description=descr;
        courseRecord.coursename=course_name;
        $('#course_name').html(course_name);
        console.log(courseRecord.categoryID);
        console.log(courseRecord.idcourse);
        console.log(courseRecord.description);
        console.log(courseRecord.coursename);
       // page2Loading();
    }
}

function page2Loading(){
    //here the content is placed inside the div
    //courseRecord();
}

 var courseRecord={
        categoryID: '',
        idcourse: '',
        description: null,
        coursename: ''
    }