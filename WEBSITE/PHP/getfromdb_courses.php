<?php
header('Access-Control-Allow-Origin: *');
//get all the courses from the database and reply using the JSON structure
    
//echo "I'm the PHP\n";
//MYSQL CONNECTION
//STANDARD STRUCTURE
//$mysqli=new msqli("localhost","username","password","dbname");

$mysqli=new mysqli("localhost","biggymjll","","my_biggymjll");



if(mysqli_connect_errno()) //returns a number of the error if there is any, 0 if not
{
    echo json_encode("Error to connect to DBMS".mysqli_connect_error());
    
    exit(); //closes the connection
}
else
{
    
    $query=$_POST["query"];
    //$query=$_GET["query"];
    
    $substrings=explode('=', $query);
    
    switch($substrings[0]){
        case 'getcoursesjoincategories':
            $actualQuery="SELECT course_categories.id_course_category, course_categories.course_category, course_categories.cat_bg_img_path, courses.idcourse, courses.course_name FROM course_categories JOIN courses ON courses.id_course_category=course_categories.id_course_category ORDER BY course_categories.id_course_category, 
courses.idcourse;";
        break;
        case 'getcourse':
            $actualQuery="SELECT * FROM courses JOIN courses_timetable ON courses.id_course_category=courses_timetable.id_course_category AND courses.idcourse=courses_timetable.idcourse WHERE courses.id_course_category=".$substrings[1]." AND courses.idcourse=".$substrings[2].";";
            break;
        case 'getinstructors':
            $actualQuery="SELECT instructors.personid, instructors.firstname, instructors.secondname, instructors.surname, instructors.smallimage FROM instructors_courses JOIN instructors ON instructors_courses.personid=instructors.personid  WHERE instructors_courses.id_course_category=".$substrings[1]." AND instructors_courses.idcourse=".$substrings[2].";";
            //echo $actualQuery;
            break;
    }
    
    $result=$mysqli->query($actualQuery); //do a query (->query) setted by $query, using the $mysqli variable, and store the data in $result 
    
    if($result->num_rows >0) //if there is at least one row...
    {
        $myArray= array(); //...create an array...
        while($row = $result->fetch_array(MYSQL_ASSOC))
        { 
            //...and fetch it. Everytime this operation returns a row,
            $myArray[]=$row; //...and added to myArray ([] means autoincrement).
        }
 
    }
    
    
    
    echo json_encode(utf8ize($myArray));
    
     //free result
    $result->close();
 
    //close connection
    $mysqli->close(); 

}

//Recursive function that converts in utf8 the content of an a array
function utf8ize($obj) {
    if (is_array($obj)) {
        foreach ($obj as $k => $v) {
            $obj[$k] = utf8ize($v);
        }
    } else if (is_string ($obj)) {
        return utf8_encode($obj);
    }
    return $obj;
}

?>