
var idselgrupo = 0;
var idselcriterio = 0;

combosC1("grupos1");

//GESTIÓN DE ARCHIVOS

$('#btncrear').click ( function () {idselcriterio=0; verForm2();});

$(document).on('change', '#combgrs', function() {
    idselgrupo = $("#combgrs").val();
    verForm1();
});
$(document).on('change', '#combcrits', function() {
    idselcriterio = $("#combcrits").val();
    verForm2();
});

//____________________________________________________________________________________
//

function combosC1 (combosel, idselinput, idseloutput){

    $.ajax({
        url: '/getCombo', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({combo: combosel, idsel: idselinput}),
        success: function (data) {

            //console.log("data[0].tablas: "+data[0].tablas);

            switch (combosel) {
                case "grupos1": document.getElementById("combogrupos1").innerHTML = '<label for="disabledSelect">Selecciona un grupo de criterios</label><select id="combgrs" class="form-control">'+data[0].grupos+'</select>';break;
                case "criterios": document.getElementById("combocriterios").innerHTML = '<label for="disabledSelect">Selecciona un criterios</label><select id="combcrits" class="form-control">'+data[0].criterios+'</select>';break;
                case "grupos2": document.getElementById("campo22").innerHTML = '<label for="disabledSelect">Grupo de criterios</label><select id="item22" class="form-control">'+data[0].grupos+'</select>';break;
            };

            console.log("combosC1("+combosel+") ejecutado.");
        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });
}

function verForm1 () {

    document.getElementById("campo11").innerHTML = '<label>Nombre de nuevo criterio</label><input id="item11" class="form-control" placeholder="Nuevo nombre">';
    document.getElementById("botones11").innerHTML = '<button type="button" class="btn btn-outline btn-default" id="btncrear1">Crear</button>';
    combosC1("criterios",idselgrupo);

    $('#btncrear1').click ( function () {verForm2();});
     
}

function verForm2 () {

    document.getElementById("campo21").innerHTML = '<label>Nombre del criterio</label><input id="item21" class="form-control" placeholder="Nombre del criterio">';
    combosC1("grupos2");
    document.getElementById("campo23").innerHTML = '<label>Descripción del criterio</label><textarea id="item23" class="form-control" placeholder="Descripción"></textarea>';
    document.getElementById("botones21").innerHTML = '<button type="button" class="btn btn-outline btn-default" id="btnguardar2">Guardar</button><button type="button" class="btn btn-outline btn-default" id="btnborrar2">Borrar</button>';
    document.getElementById("campo24").innerHTML = '<label>ID del criterio</label><input id="item24" class="form-control" disabled>';
    
    $('#btnguardar2').click ( function () {adupCrit();});
    $('#btnborrar2').click ( function () {delCrit();});


    if (idselcriterio==0) {

        $("#item21").val($("#item11").val());
        $("#item22").val($("#combgrs").val());
        
    } else {
                                                   
        $.ajax({
            url: '/data1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: "C1Crit", b: idselcriterio}),
            success: function (data) {

                $("#item21").val(data[0].criterios2);
                $("#item22").val(data[0].criterios1);
                $("#item23").val(data[0].criterios3);
                $("#item24").val(data[0].criterios0);
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });
    };      
}

function adupCrit () {

    //idselcriterio == 0 => nuevo, 1 => update.

    var adatos = [idselcriterio,$('#item21').val(),$('#item22').val(),$('#item23').val()];

    if ($('#item1').val() != "") {
         $.ajax({
            url: '/adup1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: "crits", b: adatos}),
            success: function (data) {
                combosC1("criterios",idselgrupo);
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });       
    };
}

function delCrit () {

        if (idselcriterio != 0) {
         $.ajax({
            url: '/del1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: "crits", b: idselcriterio}),
            success: function (data) {
                combosC1("criterios",idselgrupo);
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });       
    };
}

