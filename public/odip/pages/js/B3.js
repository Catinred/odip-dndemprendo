
var idselloc = 0;

//GESTIÓN DE ARCHIVOS

$('#btnbuscar').click ( function () {combosB3("locs2",$("#buscaloc").val());});
$("#buscaloc").keyup(function(event){if(event.keyCode == 13){$("#btnbuscar").click();};});

//____________________________________________________________________________________
//

function combosB3 (combosel, idselinput, idseloutput){

    $.ajax({
        url: '/getCombo', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({combo: combosel, idsel: idselinput}),
        success: function (data) {

            //console.log("data[0].tablas: "+data[0].tablas);

            switch (combosel) {
                case "locs2": document.getElementById("combolocs").innerHTML = '<label for="disabledSelect">Selecciona la localización</label><select id="comblocs" class="form-control">'+data[0].locs2+'</select>';break;
            };

            document.getElementById("botones1").innerHTML = '<button type="button" class="btn btn-outline btn-default" id="btncargar">Ver en mapa</button><br>';

            $('#btncargar').click ( function () {idselloc = $("#comblocs").val();cargarMapa();});
            $(document).on('change', '#comblocs', function() {$("#btncargar").click();});

            console.log("combosB3("+combosel+") ejecutado.");
        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });
}

function cargarMapa () {

    if (idselloc!=0) {
                                                   
        $.ajax({
            url: '/data1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: "B3loc", b: idselloc}),
            success: function (data) {

                document.getElementById("map").innerHTML = '<iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll='+data[0].localizaciones4+','+data[0].localizaciones5+'&amp;spn=56.506174,79.013672&amp;t=m&amp;z='+data[0].localizaciones6+'&amp;output=embed"></iframe>';       

            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });
    }; 

}


