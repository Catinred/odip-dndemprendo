
var idselneg = 0;
var ncriterios = 0;

//GESTIÓN DE ARCHIVOS

$('#btnbuscar').click ( function () {combosD2("cnaes",$("#buscacnae").val());});
$("#buscacnae").keyup(function(event){if(event.keyCode == 13){$("#btnbuscar").click();};});

//____________________________________________________________________________________
//

function combosD2 (combosel, idselinput, idseloutput){

    $.ajax({
        url: '/getCombo', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({combo: combosel, idsel: idselinput}),
        success: function (data) {

            //console.log("data[0].tablas: "+data[0].tablas);

            switch (combosel) {
                case "cnaes": document.getElementById("combocnaes").innerHTML = '<label for="disabledSelect">Selecciona el negocio</label><select id="combnegs" class="form-control">'+data[0].cnaes+'</select>';break;
            };

            document.getElementById("botones1").innerHTML = '<button type="button" class="btn btn-outline btn-default" id="btncargar">Cargar</button><br>';

            $('#btncargar').click ( function () {idselneg = $("#combnegs").val();verForm();});
            $(document).on('change', '#combnegs', function() {$("#btncargar").click();});

            console.log("combosD2("+combosel+") ejecutado.");
        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });
}

function verForm () {

    htmlCrit = ""; 

    $.ajax({
        url: '/data1', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({a: "D2Crit"}),
        success: function (data) {

            // console.log("verForm(): data.length: "+data.length);

            for(var i=0; i < data.length; i++) {
                htmlCrit = htmlCrit +'<label>'+data[i].grcriterios1+' : '+data[i].criterios2+'</label><br><div class="col-sm-10"><input id="item'+i+'" class="form-control"></div><br>'; 
            };

            document.getElementById("campo1").innerHTML = htmlCrit;
            ncriterios = i;
            document.getElementById("campo2").innerHTML = '<label>Número de criterios: '+i+'</label>';
            cargarForm();
        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });

    document.getElementById("botones2").innerHTML = '<button type="button" class="btn btn-outline btn-default" id="btnguardar">Guardar</button>';

    $('#btnguardar').click ( function () {upCritNeg();});
}

function cargarForm () {
                                                   
    $.ajax({
        url: '/dataDT', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({a: "D2CritNeg", b: idselneg}),
        success: function (data) {

            for(var i=0; i < data["data"][0].length; i++) {
                //console.log("cargarForm(): data['data'][0].length: "+data["data"][0].length);
                //console.log("cargarForm(): data['data'][0][1]: "+data["data"][0][1]);
                var idItem="#item"+i;
                var j=i+5;//El 5 son las columnas de la tabla CNAE que están ocupadas por no criterios.
                $(idItem).val(data["data"][0][j]);
            };
        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });
}

function upCritNeg () {

    var adatos = [];

    for(var i=0; i < ncriterios; i++) {
        var idItem="#item"+i;
        var itemvalor = $(idItem).val();
        adatos.push (itemvalor);
    };
    adatos.push (idselneg);

    //console.log("upCritNeg(): adatos: "+adatos);

         $.ajax({
            url: '/upCrits', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: "critNegs", b: adatos}),
            success: function (data) {
                
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });       
}

