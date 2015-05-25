$(document).ready(function(){
     //AJAX call creation
    $.ajax({
        method:"POST", //metodo per mandare i dati 
        //dataType:"json", //se non si specifica il datatype con json, il dato in entrata va "parsato" con la funzione JSON.parse
        crossDomain:true, /*forza a prendere i dati dallo stesso dominio
        nel caso sia necessario*/
        url:"getFromDB.php", //path del file php a cui fare richiesta
        data:{id_course_category:2},
        //SUCCESSO!: la risposta dal server viene scritta qui 
        success: function(response){
            //Carica il contenuto scritto con echo dalla pagina php getFromDB.php
            var courses=JSON.parse(response); 
            console.log(courses);
            var el="";
            console.log(courses.length);
            for(var i=0;i<courses.length;i++)
            {
                
                el+='<div class="course" id="'+courses[i].id+'"> <h2> '+courses[i].title+' </h2> <p> '+courses[i].description+'</p> </div>';  
            }
            $('body').html(el);
        },
        //ERRORE: scrive a console l'errore dato
        error: function(request,error){
            console.log("ERROR: Request " + request + "\nSpecific Error: " + error);
        }

    });
});