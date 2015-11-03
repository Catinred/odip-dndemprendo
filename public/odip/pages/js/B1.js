
var idselloc = 0;
var idselprov = 8;

combosB1("locs");

//GESTIÓN DE ARCHIVOS

$('#btncrear').click ( function () {idselloc=0; verForm();});

$(document).on('change', '#comblocs', function() {
    idselloc = $("#comblocs").val();
    verForm();
});
$(document).on('change', '#item2', function() {
    idselprov = $("#item2").val();
    combosB1("munis",idselprov);
    //$("#combomunis").prop( "disabled", false );
});

//____________________________________________________________________________________
//

function combosB1 (combosel, idselinput, idseloutput){

    $.ajax({
        url: '/getCombo', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({combo: combosel, idsel: idselinput}),
        success: function (data) {

            //console.log("data[0].tablas: "+data[0].tablas);

            switch (combosel) {
                case "locs": document.getElementById("combolocs").innerHTML = '<label for="disabledSelect">Selecciona la localización</label><select id="comblocs" class="form-control">'+data[0].locs+'</select>';break;
                case "provs": document.getElementById("campo2").innerHTML = '<label for="disabledSelect">Selecciona la provincia</label><select id="item2" class="form-control">'+data[0].provs+'</select>';break;
                case "munis": document.getElementById("campo3").innerHTML = '<label for="disabledSelect">Selecciona el municipio/comarca</label><select id="item3" class="form-control">'+data[0].munis+'</select>';
                            $("#item3").val(idseloutput);break;
            };

            console.log("combosB1("+combosel+") ejecutado.");
        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });
}

function verForm () {

    document.getElementById("campo1").innerHTML = '<label>Nombre de la localización</label><input id="item1" class="form-control" placeholder="Localización">';
    combosB1("provs");
    document.getElementById("campo3").innerHTML = '<label for="disabledSelect">Selecciona el municipio/comarca</label><select id="item3" class="form-control"></select><hr>';
    document.getElementById("campo4").innerHTML = '<label>Latitud</label><input id="item4" class="form-control" placeholder="Latitud">';
    document.getElementById("campo5").innerHTML = '<label>Longitud</label><input id="item5" class="form-control" placeholder="Longitud">';
    document.getElementById("campo6").innerHTML = '<label for="disabledSelect">Zoom sobre mapa</label><select id="item6" class="form-control"><option value=10>Comarca</option><option value=12>Ciudad</option><option value=14>Barrio</option><option value=15>Zona</option></select>';
    document.getElementById("botones").innerHTML = '<button type="button" class="btn btn-outline btn-default" id="btnguardar">Guardar</button><button type="button" class="btn btn-outline btn-default" id="btnborrar">Borrar</button>';

    $('#btnguardar').click ( function () {adupLoc();});
    $('#btnborrar').click ( function () {delLoc();});


    if (idselloc==0) {

        $("#item1").val($("#nuevaloc").val());
        
    } else {
                                                   
        $.ajax({
            url: '/data1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: "B1loc", b: idselloc}),
            success: function (data) {

                $("#item1").val(data[0].localizaciones3);
                $("#item2").val(data[0].localizaciones1);
                idselprov = data[0].localizaciones1;
                combosB1("munis",idselprov,data[0].localizaciones2);
                $("#item4").val(data[0].localizaciones4);
                $("#item5").val(data[0].localizaciones5);
                $("#item6").val(data[0].localizaciones6);
                document.getElementById("map").innerHTML = '<iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll='+data[0].localizaciones4+','+data[0].localizaciones5+'&amp;spn=56.506174,79.013672&amp;t=m&amp;z='+data[0].localizaciones6+'&amp;output=embed"></iframe>';       
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });
    };      
}

function adupLoc() {

    console.log("adupLoc: inside");

    //idselloc == 0 => nuevo, 1 => update.

    var adatos = [idselloc,$('#item1').val(),$('#item2').val(),$('#item3').val(),$('#item4').val(),$('#item5').val(),$('#item6').val()];

    if ($('#item1').val() != "") {
         $.ajax({
            url: '/adup1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a:"locs", b: adatos}),
            success: function (data) {
                combosB1("locs");
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });       
    };
}

function delLoc () {

        if (idselloc != 0) {
         $.ajax({
            url: '/del1', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: "locs", b: idselloc}),
            success: function (data) {
                combosB1("locs");
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
      if (idselloc == 0) {
          document.getElementById("item4").value = results[0].geometry.location.lat();
          document.getElementById("item5").value = results[0].geometry.location.lng();
      };
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
//*************************************************************************************