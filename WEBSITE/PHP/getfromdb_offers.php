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
   // $query=$_GET['query'];
    
    $substrings=explode('=', $query);
    
    switch($substrings[0]){
        case 'getOffers':
            $actualQuery="SELECT * FROM offers;";
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
    
    
    
    echo json_encode(utf8ize(array_reverse($myArray)));
    
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