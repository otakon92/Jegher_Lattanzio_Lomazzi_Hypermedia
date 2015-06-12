$(document).ready(getRooms());

function getRooms(){
    var rooms;
     $.ajax({
        url:"http://biggymjll.altervista.org/getfromdb_rooms.php",
        cache: false,
        method:"POST", //metodo per ricevere i dati 
        //crossDomain: setBrowserCrossDomain(),
        data:{
            query:"getRomms&Images="
        },
        success: function(response){
            console.log(response);
           rooms=(JSON.parse(response));
           //console.log(total_number);
        },
        error: function(request, error) {
            console.log(error);
        }
    }).done(function(){
        var string;
        for(i = 0 ; rooms[i] ; i++) {
            string = "<div style='background-image: url(../RES/IMAGES/"+rooms[i]['room_name']+".jpg); background-size: 100% 100%; margin: 5%; margin-top:3%; margin-bottom:3%; display: inline-block'><p style='font-family: Aharoni; font-size: 300%; color: white; padding: 10%; height:25%'>"+rooms[i][`room_name`]+" Room</p></div>";
            //string="<img style='PADDING: 2.5%' height='32%' width='18%' src=../RES/IMAGES/"+rooms[i]['room_main_image']+">"+rooms[i][`room_name`]+"</img>";
            $("#list").append(string);
        }
     });  
}