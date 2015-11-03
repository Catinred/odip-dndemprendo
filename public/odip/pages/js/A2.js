
comboTablas();
comboLocalizaciones();

//GESTIÓN DE ARCHIVOS

$('#btncargar').click ( function () {cargartabla();});
$('#btncambiar').click ( function () {cambiarnombretabla();});
$('#btnguardar').click ( function () {upItem();});
$('#btninsertar').click ( function () {adItem();});
$('#btnpasarGeoloc').click ( function () {pasarGeoloc();});

$(document).on('change', '#combtabl', function() {verinfotabla();comboCols();});

//____________________________________________________________________________________
//

var idseltabla;
var idselitem;
var numcolums = 0;

function comboTablas (){

    $.ajax({
        url: '/getCombo', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({combo: "tablas"}),
        success: function (data) {

            //console.log("data[0].tablas: "+data[0].tablas);

            document.getElementById("combotbs").innerHTML = '<label for="disabledSelect">Selecciona la tabla</label><select id="combtabl" class="form-control">'+data[0].tablas+'</select>';

        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });
}

function comboLocalizaciones (){

    $.ajax({
        url: '/getCombo', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({combo: "locs"}),
        success: function (data) {

            //console.log("data[0].tablas: "+data[0].tablas);

            document.getElementById("combolocs").innerHTML = '<select id="colsel3" class="form-control">'+data[0].locs+'</select>';

        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });
}

function cambiarnombretabla () {

    var nuevoNombre = $("#nuevonombre").val();

    if (nuevoNombre != "") {
         $.ajax({
            url: '/guardarNombre', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({nombre: nuevoNombre, idsel: idseltabla}),
            success: function (data) {
                comboTablas();
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });       
    };
}


var dataSetA2 = [[ "","","","","",""]];

var colSetA2 = [{ title: "Id" },{ title: "Nombre" },{ title: "Ubicación" },{ title: "Localización" },{ title: "Latitud" },{ title: "Logitud" }];
 
var laDataTable;

$(document).ready(function() {
    $('#dynamicA2').html( '<table id="exampleA2" class="table table-striped table-bordered table-hover display" width="100%"></table>' );
    laDataTable = $('#exampleA2').DataTable( {
        data: dataSetA2,
        columns: colSetA2,
        "scrollX": true,
        select: true
    });

});

function listtabla () {

    laDataTable.clear();
    laDataTable.rows.add(dataSetA2);
    laDataTable.draw();

    var datasel;

    $(document).ready( function() {

    laDataTable
        .on( 'select', function ( e, dt, type, indexes ) {
            var rowData = laDataTable.rows( indexes ).data().toArray();
            //console.log("rowData: "+rowData);
            //console.log("JSON.stringify(rowData): "+JSON.stringify(rowData));
            idselitem = rowData[0][0];
            $("#colsel1").val(rowData[0][1]);
            $("#colsel2").val(rowData[0][2]);
            $("#colsel3").val(rowData[0][3]);
            $("#colsel4").val(rowData[0][4]);
            $("#colsel5").val(rowData[0][5]);
            //events.prepend( '<div><b>'+type+' selection</b> - '+JSON.stringify( rowData )+'</div>' );
        } )
        .on( 'deselect', function ( e, dt, type, indexes ) {
            var rowData = laDataTable.rows( indexes ).data().toArray();
            //events.prepend( '<div><b>'+type+' <i>de</i>selection</b> - '+JSON.stringify( rowData )+'</div>' );
        });
    });
}

function verinfotabla () {

    idseltabla = $("#combtabl").val();
    //console.log("idseltabla: "+idseltabla);

     $.ajax({
        url: '/verinfotabla', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({idsel: idseltabla}),
        success: function (data) {

            document.getElementById("linktabla").innerHTML = "<i class='fa fa-file-code-o'></i> <a href='"+data[0].infotablas4+"' target='_blank'>"+data[0].infotablas1+"</a>";
            document.getElementById("ncolumnas").innerHTML = "<i class='fa fa-columns'></i>"+data[0].infotablas5+" columnas";
            numcolums = data[0].infotablas5;
            document.getElementById("nfilas").innerHTML = "<i class='fa fa-navicon'></i> "+data[0].infotablas6+" filas";
            document.getElementById("cabeceras").innerHTML = "<i class='fa fa-table'></i> Nombres de columna:<div class='well well-sm'><p>"+data[0].infotablas7+"</p></div>";


        $('#selcolumnas').css("display", "block");
                
        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });       
}

function comboCols (){

    idseltabla = $("#combtabl").val();

    $.ajax({
        url: '/getCombo', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({combo: "cols", idsel: idseltabla}),
        success: function (data) {

            //console.log("data[0].tablas: "+data[0].tablas);

            document.getElementById("combocol1").innerHTML = '<select id="combcol1" class="form-control">'+data[0].columnas+'</select>';
            document.getElementById("combocol2").innerHTML = '<select id="combcol2" class="form-control">'+data[0].columnas+'</select>';

        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });
}

function cargartabla () {

    parametros = [idseltabla,$("#combcol1").val(),$("#combcol2").val(), numcolums];

    $.ajax({
            url: '/dataDT', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a:"A2", b: parametros}),
            success: function (data) {

                    dataSetA2 = data["data"];
                    listtabla();
                    //console.log("cargartabla() aDataSet1: "+aDataSet1);  
                
            },
            error: function (xhr, status, error) {
                console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });

}

function upItem () {

    var parametros = [idseltabla,$("#combcol1").val(),$("#combcol2").val(), numcolums];
    var aDatos = [idselitem,$("#colsel1").val(),$("#colsel2").val(),$("#colsel3").val(),$("#colsel4").val(),$("#colsel5").val()];

    $.ajax({
            url: '/upItem', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a:"", b: parametros, c: aDatos}),
            success: function (data) {
                
            },
            error: function (xhr, status, error) {
                console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });
}

function adItem () {

    var aDatos = [0,$("#colsel1").val(),$("#colsel2").val(),$("#colsel3").val(),$("#colsel4").val(),$("#colsel5").val(),,];

    if ($('#colsel1').val() != "") {
         $.ajax({
            url: '/adup1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a:"itms", b: aDatos}),
            success: function (data) {
                
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });       
    };
}

//GEOLOCALIZACION**********************************************************************

function initMap() {

  var geocoder = new google.maps.Geocoder();

  document.getElementById('btnlocalizar').addEventListener('click', function() {
    geocodeAddress(geocoder);
  });
}

function geocodeAddress(geocoder) {
  var address = document.getElementById('boxgeoloc').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      document.getElementById("boxlat").value = results[0].geometry.location.lat();
      document.getElementById("boxlng").value = results[0].geometry.location.lng();
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function pasarGeoloc () {

    $("#colsel4").val($("#boxlat").val());
    $("#colsel5").val($("#boxlng").val());

}
//*************************************************************************************