$(document).ready(function() {
var queryString = new Array();
    $(function () {
        if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) {
                var params = window.location.search.split('?')[1].split('&');
                for (var i = 0; i < params.length; i++) {
                    var key = params[i].split('=')[0];
                    var value = decodeURIComponent(params[i].split('=')[1]);
                    queryString[key] = value;
                }
            }
        }
        if (queryString["idcat"] != null && queryString["idcourse"] != null) {
            var data = "<u>Values from QueryString</u><br /><br />";
            data += "<b>Name:</b> " + queryString["idcat"] + " <b>Technology:</b> " + queryString["idcourse"];
            $("body").append(data);
        }
        else{
           $("body").html("Problem loading course. Try selecting again"); 
        }
    });
});