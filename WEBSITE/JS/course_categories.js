$(document).ready(function() {
    //VARIABLE DECLARATIONS
    var courses_join_categories;
    //TITLE PAGE CHANGE
    $('title').html("BigGym - Courses");
    //PAGE LOADING - START
    pageLoading();

});

function pageLoading(){
     //start the ajax calls by building the categories and grouping courses inside them
    groupedCourses();
}


   
/*
* function that gets the number of categories, and for every category, creates a div containing:
  --> category header, with overlay category name and image
  --> list of courses, appended in a panel, already appended to the div of the category
*/
function groupedCourses(){
    
    var courses_searchbar=new Array(); /*this array will contains the names 
    of the courses that will be displayed as suggestions for the typeahead.js plugin */
    
    $.ajax({
        url:getPHPFile('courses'),
        method:"POST", //metodo per ricevere i dati  
        cache: false,
        crossDomain: setBrowserCrossDomain(),
        data:{/* Actual Query: "SELECT course_categories.id_course_category, course_categories.course_category, course_categories.cat_bg_img_path, courses.idcourse, courses.course_name FROM course_categories JOIN courses ON courses.id_course_category=course_categories.id_course_category ORDER BY id_course_category;"*/
            query: "getcoursesjoincategories="
        },
        success: function(response){
            
            courses_join_categories=(JSON.parse(response));
            //console.log(courses_join_categories);
            
            /*
            THE RETURNED ARRAY IN COURSES_JOIN_CATEGORIES IS ACTUALLY A JOIN. SO WE'LL HAVE A CATEGORY AND AN IDCOURSE FOR EVERY RECORD, AND CATEGORIES WILL BE DUPLICATED IF THERE ARE MORE COURSES FOR A CATEGORY. 
            WE MUST FITLER THE ARRAY: FIRST WE'LL TAKE THE CATEGORIES, THEN FOR EVERY CATEGORY WE'LL LIST THE COURSES 
            */
            
            var categories=getCategoriesFromArray(courses_join_categories);
            
            //console.log(categories);
            
            //then, we'll procede to create a div for every category
            for(var j=0;j<categories.length;j++){
            //CATEGORY HEADER CREATION
             //...get category's id, the category's name and the background image
                var categoryID=categories[j]['id_course_category'];
                var categoryName=categories[j]['course_category'];
                var imageUrl=categories[j]['cat_bg_img_path'];
                //create a container for the image
                var box_category="<div class='category' id='category"+ categoryID + "'> <div class='category_header'> <img src='" + imageUrl + "' class='category_image img-rounded'/> <div class='overlay'> <h2 class='category_name'> " + categoryName + "</h2> </div> </div> </div>";
                //and append it to the main content
                $("#main_content").append(box_category);
                
                //CATEGORY COURSES LIST CREATION
                //add a panel to insert the list
                var box_courses="<div class='courses panel panel-default' id='courses_cat"+ categoryID+"'> </div>";
                    $('#category'+categoryID).append(box_courses);
                //then add a list inside that panel
                    $('#courses_cat'+ categoryID).append("<ul class='list-group' id='list_cat"+categoryID+"'>  </ul>");   
                 //and then hide it at load
                 $('#courses_cat'+categoryID).css("display", "none");
            }
            
            //FILLING COURSES LIST FOR EVERY CATEGORY
            //for every course...
            //we'll for a sub group made only of courses inside that particular category
           for(var i=0;i<categories.length;i++){
               
               var courses_per_category=$.grep(courses_join_categories, function(v,index){
                    return v['id_course_category']==categories[i]['id_course_category'];
                   //returns an array of courses that matches the id_course_category
               });
               
               //the id of that category will be saved for a visual optimization of the code
               var currentCategoryID=categories[i]['id_course_category'];
               
               //console.log(courses_per_category);
               
               //COURSE LIST CREATION
               //for every course of that category
                for(var j=0; j<courses_per_category.length;j++){
                    //append course to list
                    var idcourse=courses_per_category[j]['idcourse'];
                    var coursename=courses_per_category[j]['course_name'];
                    $("#list_cat"+currentCategoryID).append("<li id='course"+currentCategoryID+idcourse +"' class='course list-group-item'> <a href='#' >" + coursename + "</a> </li>");
                    //add the name to the searchbar to be visualized as a suggestion
                    courses_searchbar.push(coursename); 
                    
                }
               
            //..and on to the next course 'till the end of the parsing  
           }
            
            
            //////////////////////CLICK HANDLERS INITIALIZAZION///////////////////////
             //add a click handler for the panels
             $('.category').on("click", toggleCallbackForPanelAttr);
            //add a click handler for the list element
            $(".course").on("click", callbackChangePagePassingData);
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done(function(){
        //console.log(courses_join_categories);
        //TYPEAHEAD INITIALIZATION: creating the substring matcher for the suggestions
            var substringMatcher = function(strs) {
                  return function findMatches(q, cb) {
                    var matches, substringRegex;

                    // an array that will be populated with substring matches
                    matches = [];

                    // regex used to determine if a string contains the substring `q`
                    substrRegex = new RegExp(q, 'i');

                    // iterate through the pool of strings and for any string that
                    // contains the substring `q`, add it to the `matches` array
                    $.each(strs, function(i, str) {
                      if (substrRegex.test(str)) {
                        matches.push(str);
                      }
                    });

                    cb(matches);
                  };
            };

       //initialize the searchbar as a TYPEAHEAD element
            
            $('.typeahead').typeahead({
              hint: true,
              highlight: true,
              minLength: 1
            },
            {
              name: 'states',
              source: substringMatcher(courses_searchbar)
            });
        
        
        /*add a function for the submit of the input form that 
        ->search the data into the array of courses
        ->gets id_category and idcourse
        ->changes the page when the suggestion is clicked*/ 
        $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
            
            //->takes the position of the suggestion into the array of courses
                var position=searchIntoArray(courses_join_categories, suggestion);
            //changes the page accordingly
            changePagePassingData("single_course_page.html", courses_join_categories[position]['id_course_category'],courses_join_categories[position]['idcourse']);
        });
    });  
}


//function that gets the id of the panel and attaches an event handler to it to hide/show the list beneath.
function toggleCallbackForPanelAttr(){
        var idElement=$(this).attr("id");
        var categoryID=idElement.slice(-1);
        $('#courses_cat'+categoryID).toggle('slow');  
}

//callback function associated to the list element calling (this): extracts with splice() the categoryID and the idcourse, and fetch it to the changePagePassingData function.
function callbackChangePagePassingData(){
        var id=$(this).attr("id");
        var categoryID=id.slice(-2,-1);  //gets the categoryID
        var idcourse=id.slice(-1); //gets the idcourse
        changePagePassingData("single_course_page.html", categoryID, idcourse);    
}

//function that composes an url with two data as parameters and changes page accordingly
function changePagePassingData(initialURL, firstdata, seconddata){
     var url = initialURL + "?idcat=" + firstdata + "&idcourse=" + seconddata; //past it into the url
     window.location.href = url; //change the page
}

//function that searches a data "suggestion" into a collection "coll" and returns its position
function searchIntoArray(coll, suggestion){
    
    var position=0;
    
    for(var i=0;i<coll.length;i++){
        //console.log("Coll[i]: "+coll[i]['course_name']);
            if(coll[i]['course_name']==suggestion){
                position = i;
            }
            // console.log(coll[i]['course_name']);
    }   
    return position;
}
           
//this snippet loads the categories into another array called 'categories'
function getCategoriesFromArray(array_categories){
                var cats=new Array();
               //loads up the first one category number into a counter called toCheck 
                var toCheck=array_categories[0]['id_course_category'];
                //console.log(toCheck);
               //for every category, take the first instance equal to a counter of categories
                for(var i=0; i<array_categories.length;i++){
                   // console.log(courses_join_categories.length);
                    //if it matches the counter, than store it into the 'categories' array, and decrement the category number (this works because the category_number is actually an Integer
                    if(toCheck==array_categories[i]['id_course_category']){
                        cats.push(array_categories[i]);
                        //console.log(courses_join_categories[i]);
                        //console.log(toCheck);
                        toCheck++;
                        //console.log(toCheck);
                    }
                }
    return cats;
}




