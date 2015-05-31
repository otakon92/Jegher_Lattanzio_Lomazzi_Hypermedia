$(document).ready(function(){
     //AJAX call creation
    $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb.php",
        method:"POST", //metodo per ricevere i dati  
        data:{
            query: "SELECT * FROM course_categories JOIN courses ON course_categories.id_course_category=courses.id_course_category;"
        },
        
        //SUCCESS: creates a div for every single category
        success: function(response){
            var course_categories=JSON.parse(response); 
            //for every category...
            for(var i=course_categories.length-1;i>=0;i--)
            {
                //...get category's id, the category's name and the background image
                var categoryID=course_categories[i]['id_course_category'];
                var categoryName=course_categories[i]['course_category'];
                var imageUrl=course_categories[i]['cat_bg_img_path'];
                var box_category="<div class='category' id='category"+ categoryID + "'> <img src='" + imageUrl + "' class='category_image img-rounded'/> <div class='overlay'> <h2 class='category_name'> " + categoryName + "</h2> </div> </div>";
                $("#select_category_main_box").after(box_category);
                
            }  
        },
        //ERROR: writes the error in the console
        error: function(request, error) {
            console.log(error);
        }

    });
    
    
    
    //Creating submenus of courses for the specific category
    
});


function getCategory(){
    return "http://biggymjll.altervista.org/getfromdb.php";
}