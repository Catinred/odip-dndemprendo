
var idselitem = 0;
var numcolums = 0;

comboLocalizaciones();
cargartabla();

//GESTIÓN DE ARCHIVOS

$('#btninsertar').click ( function () {adupItem(0);});
$('#btnguardar').click ( function () {adupItem(1);});
$('#btnborrar').click ( function () {delItem();});
$('#btnpasarGeoloc').click ( function () {pasarGeoloc();});

//____________________________________________________________________________________
//

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


var dataSetA3 = [[ "","","","","",""]];

var colSetA3 = [{ title: "Id" },{ title: "Nombre" },{ title: "Ubicación" },{ title: "Localización" },{ title: "Latitud" },{ title: "Logitud" }];
 
var laDataTable;

$(document).ready(function() {
    $('#dynamicA3').html( '<table id="exampleA3" class="table table-striped table-bordered table-hover display" width="100%"></table>' );
    laDataTable = $('#exampleA3').DataTable( {
        data: dataSetA3,
        columns: colSetA3,
        "scrollX": true,
        select: true
    });

});

function listtabla () {

    laDataTable.clear();
    laDataTable.rows.add(dataSetA3);
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
            $("#colsel6").val(rowData[0][6]);
            //events.prepend( '<div><b>'+type+' selection</b> - '+JSON.stringify( rowData )+'</div>' );
        } )
        .on( 'deselect', function ( e, dt, type, indexes ) {
            var rowData = laDataTable.rows( indexes ).data().toArray();
            //events.prepend( '<div><b>'+type+' <i>de</i>selection</b> - '+JSON.stringify( rowData )+'</div>' );
        });
    });
}

function cargartabla () {

    $.ajax({
            url: '/dataDT', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a:"A3"}),
            success: function (data) {

                    dataSetA3 = data["data"];
                    listtabla();
                    //console.log("cargartabla() aDataSet1: "+aDataSet1);  
                
            },
            error: function (xhr, status, error) {
                console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });

}

function adupItem (selector) {

    //idselitem == 0 => nuevo, 1 => update.
    if (selector == 0) {idselitem=0;};

    var aDatos = [idselitem,$("#colsel1").val(),$("#colsel2").val(),$("#colsel3").val(),$("#colsel4").val(),$("#colsel5").val(),$("#colsel6").val()];

    if ($('#colsel1').val() != "") {
         $.ajax({
            url: '/adup1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a:"itms", b: aDatos}),
            success: function (data) {
                cargartabla();
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });       
    };
}

function delItem () {

        if (idselitem != 0) {
         $.ajax({
            url: '/del1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: "itms", b: idselitem}),
            success: function (data) {
                cargartabla();
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