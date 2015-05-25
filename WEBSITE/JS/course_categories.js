$(document).ready(function(){
     //AJAX call creation
    $.ajax({
        method:"POST", //metodo per mandare i dati 
        //dataType:"json", //se non si specifica il datatype con json, il dato in entrata va "parsato" con la funzione JSON.parse
        crossDomain:false, /*forza a prendere i dati dallo stesso dominio
        nel caso sia necessario*/
        url:"../PHP/getFromDB.php", //path del file php a cui fare richiesta
        data:{
            query: "SELECT * FROM course_categories;"
        },
        //SUCCESSO!: la risposta dal server viene scritta qui 
        success: function(response){
            //Carica il contenuto scritto con echo dalla pagina php getFromDB.php
            var course_categories=JSON.parse(response); 
            console.log(course_categories);
            var el="";
            console.log(course_categories.length);
            for(var i=0;i<course_categories.length;i++)
            {
                //insert a div with a span
                var box_category="<div class='category' id='category"+course_categories[0]+"'> <span> "+course_categories[1]+" </span> </div>";
                $("#select_category_main_box").after(box_category);
            }
            
        },
        //ERRORE: scrive a console l'errore dato
        error: function(request,error){
            console.log("ERROR: Request " + request + "\nSpecific Error: " + error);
        }

    });
});