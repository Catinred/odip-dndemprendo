
var idselneg = 0;

//GESTIÓN DE ARCHIVOS

$('#btncrear').click ( function () {idselneg=0; verForm();});
$('#btnbuscar').click ( function () {combosD1("cnaes",$("#buscacnae").val());});

$(document).on('change', '#combnegs', function() {
    idselneg = $("#combnegs").val();
    verForm();
});

//____________________________________________________________________________________
//

function combosD1 (combosel, idselinput, idseloutput){

    $.ajax({
        url: '/getCombo', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({combo: combosel, idsel: idselinput}),
        success: function (data) {

            //console.log("data[0].tablas: "+data[0].tablas);

            switch (combosel) {
                case "cnaes": document.getElementById("combocnaes").innerHTML = '<label for="disabledSelect">Selecciona el negocio</label><select id="combnegs" class="form-control">'+data[0].cnaes+'</select>';break;
            };

            console.log("combosD1("+combosel+") ejecutado.");
        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });
}

function verForm () {

    document.getElementById("campo1").innerHTML = '<label>Nombre de la localización</label><input id="item1" class="form-control" placeholder="Tipo de negocio">';
    document.getElementById("campo2").innerHTML = '<label>Número CNAE</label><input id="item2" class="form-control" placeholder="CNAE">';
    document.getElementById("campo3").innerHTML = '<label>Descripción del negocio</label><textarea id="item3" class="form-control" placeholder="Descripción"></textarea>';
    document.getElementById("botones").innerHTML = '<button type="button" class="btn btn-outline btn-default" id="btnguardar">Guardar</button><button type="button" class="btn btn-outline btn-default" id="btnborrar">Borrar</button>';

    $('#btnguardar').click ( function () {adupNeg();});
    $('#btnborrar').click ( function () {delNeg();});


    if (idselneg==0) {

        $("#item1").val($("#nuevoneg").val());
        
    } else {
                                                   
        $.ajax({
            url: '/data1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: "D1Neg", b: idselneg}),
            success: function (data) {

                $("#item1").val(data[0].cnae2);
                $("#item2").val(data[0].cnae1);
                $("#item3").val(data[0].cnae3);
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });
    };      
}

function adupNeg () {

    //idselneg == 0 => nuevo, 1 => update.

    var adatos = [idselneg,$('#item1').val(),$('#item2').val(),$('#item3').val()];

    if ($('#item1').val() != "") {
         $.ajax({
            url: '/adup1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: "negs", b: adatos}),
            success: function (data) {
                combosD1("cnaes");
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });       
    };
}

function delNeg () {

        if (idselneg != 0) {
         $.ajax({
            url: '/del1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: "negs", b: idselneg}),
            success: function (data) {
                combosD1("cnaes");
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });       
    };
}

