
var idselneg = 0;

$('#btnbuscar').click ( function () {combosD3("cnaes",$("#buscacnae").val());});
$("#buscacnae").keyup(function(event){if(event.keyCode == 13){$("#btnbuscar").click();};});

//____________________________________________________________________________________
//

function combosD3 (combosel, idselinput, idseloutput){

    $.ajax({
        url: '/getCombo', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({combo: combosel, idsel: idselinput}),
        success: function (data) {

            //console.log("data[0].tablas: "+data[0].tablas);

            switch (combosel) {
                case "cnaes": document.getElementById("combocnaes").innerHTML = '<label for="disabledSelect">Selecciona el negocio</label><select id="combnegs" class="form-control">'+data[0].cnaes+'</select>';break;
            };

            document.getElementById("botones1").innerHTML = '<button type="button" class="btn btn-outline btn-default" id="btncalcular">Calcular</button><br>';

            $('#btncalcular').click ( function () {idselneg = $("#combnegs").val();verSolicitud();});
            //$(document).on('change', '#combnegs', function() {$("#btncalcular").click();});

            console.log("combosD3("+combosel+") ejecutado.");
        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });
}

//____________________________________________________________________________________
//

var idlocalizaciones = [];

function verSolicitud () {
    
    $.ajax({
        url: '/versolicitud', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({a: idselneg}),
        success: function (data) {
            rdatos = data;
            mostrarResultados();
        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });    
};

function mostrarResultados () {
               
    $('#panel_r').css("display", "block");
    $('#panel_r1').css("display", "block");
    $('#panel_r2').css("display", "block");
    $('#panel_r3').css("display", "block");
    $('#panel_r4').css("display", "block");
    $('#panel_r5').css("display", "block");

    console.log("mostrarResultados(): rdatos: "+rdatos);
    console.log("mostrarResultados(): rdatos[0]: "+rdatos[0]);
    console.log("mostrarResultados(): rdatos[0].resultados[0]: "+rdatos[0].resultados[0]);
    //console.log("mostrarResultados(): rdatos[0].resultados[0][0]: "+rdatos[0].resultados[0][0]);
    console.log("mostrarResultados(): rdatos[0].resultados: "+rdatos[0].resultados);
    console.log("mostrarResultados(): rdatos[0].resultados[1]: "+rdatos[0].resultados[1]);

    $("#resultado1").html('<iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll='+rdatos[0].resultados[0][3]+','+rdatos[0].resultados[0][4]+'&amp;spn=56.506174,79.013672&amp;t=m&amp;z='+rdatos[0].resultados[0][5]+'&amp;output=embed"></iframe>');
    
    idlocalizaciones[0]=rdatos[0].resultados[0][0];
    $("#1L0").html(rdatos[0].resultados[0][2]);
    $("#1T0").html(rdatos[0].resultados[0][1]);
    $("#1T1").html(rdatos[0].resultados[0][6]);
    $("#1T2").html(rdatos[0].resultados[0][7]);
    $("#1T3").html(rdatos[0].resultados[0][8]);
    $("#1L1").html(rdatos[0].resultados[0][9]);
    $("#1L2").html(rdatos[0].resultados[0][10]);

    $("#resultado2").html('<iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll='+rdatos[0].resultados[1][3]+','+rdatos[0].resultados[1][4]+'&amp;spn=56.506174,79.013672&amp;t=m&amp;z='+rdatos[0].resultados[1][5]+'&amp;output=embed"></iframe>');
    idlocalizaciones[1]=rdatos[0].resultados[1][0];
    $("#2L0").html(rdatos[0].resultados[1][2]);
    $("#2T0").html(rdatos[0].resultados[1][1]);
    $("#2T1").html(rdatos[0].resultados[1][6]);
    $("#2T2").html(rdatos[0].resultados[1][7]);
    $("#2T3").html(rdatos[0].resultados[1][8]);
    $("#2L1").html(rdatos[0].resultados[1][9]);
    $("#2L2").html(rdatos[0].resultados[1][10]);

    $("#resultado3").html('<iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll='+rdatos[0].resultados[2][3]+','+rdatos[0].resultados[2][4]+'&amp;spn=56.506174,79.013672&amp;t=m&amp;z='+rdatos[0].resultados[2][5]+'&amp;output=embed"></iframe>');
    idlocalizaciones[2]=rdatos[0].resultados[2][0];
    $("#3L0").html(rdatos[0].resultados[2][2]);
    $("#3T0").html(rdatos[0].resultados[2][1]);
    $("#3T1").html(rdatos[0].resultados[2][6]);
    $("#3T2").html(rdatos[0].resultados[2][7]);
    $("#3T3").html(rdatos[0].resultados[2][8]);
    $("#3L1").html(rdatos[0].resultados[2][9]);
    $("#3L2").html(rdatos[0].resultados[2][10]);

    $("#resultado4").html('<iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll='+rdatos[0].resultados[3][3]+','+rdatos[0].resultados[3][4]+'&amp;spn=56.506174,79.013672&amp;t=m&amp;z='+rdatos[0].resultados[3][5]+'&amp;output=embed"></iframe>');
    idlocalizaciones[3]=rdatos[0].resultados[3][0];
    $("#4L0").html(rdatos[0].resultados[3][2]);
    $("#4T0").html(rdatos[0].resultados[3][1]);
    $("#4T1").html(rdatos[0].resultados[3][6]);
    $("#4T2").html(rdatos[0].resultados[3][7]);
    $("#4T3").html(rdatos[0].resultados[3][8]);
    $("#4L1").html(rdatos[0].resultados[3][9]);
    $("#4L2").html(rdatos[0].resultados[3][10]);

    $("#resultado5").html('<iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll='+rdatos[0].resultados[4][3]+','+rdatos[0].resultados[4][4]+'&amp;spn=56.506174,79.013672&amp;t=m&amp;z='+rdatos[0].resultados[4][5]+'&amp;output=embed"></iframe>');
    idlocalizaciones[4]=rdatos[0].resultados[4][0];
    $("#5L0").html(rdatos[0].resultados[4][2]);
    $("#5T0").html(rdatos[0].resultados[4][1]);
    $("#5T1").html(rdatos[0].resultados[4][6]);
    $("#5T2").html(rdatos[0].resultados[4][7]);
    $("#5T3").html(rdatos[0].resultados[4][8]);
    $("#5L1").html(rdatos[0].resultados[4][9]);
    $("#5L2").html(rdatos[0].resultados[4][10]);

};

function mostrarGraficos (idresp){

    $.ajax({
            url: '/dataResp', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({idlocsel: idlocalizaciones[idresp-1]}),
            success: function (data) {

            //1- ESCRIBIR LOS DATOS POBLACIONALES
                var xdatos = data;

                $("#"+idresp+"A1").html(xdatos[0].pobl[0]+" m2");$("#"+idresp+"A2").html(xdatos[0].pobl[1]+" hab");
                $("#"+idresp+"A3").html(xdatos[0].pobl[2]+" hab/m2");$("#"+idresp+"A4").html(xdatos[0].pobl[3]+" años");
                $("#"+idresp+"A5").html(xdatos[0].pobl[4]+" años");$("#"+idresp+"A6").html(xdatos[0].pobl[5]+" %");
                $("#"+idresp+"A7").html(xdatos[0].pobl[6]+" %");$("#"+idresp+"A8").html(xdatos[0].pobl[7]+" %");
                $("#"+idresp+"A9").html(xdatos[0].pobl[8]+" %");$("#"+idresp+"A10").html(xdatos[0].pobl[9]+" %");
                $("#"+idresp+"A11").html(xdatos[0].pobl[10]+" %");$("#"+idresp+"A12").html(xdatos[0].pobl[11]);

            //2- MOSTRAR LOS GRÁFICOS

            switch (idresp) {
                case 1: showChartA("1B1", xdatos[1].graf[0]);showChartA("1B2", xdatos[1].graf[1]);showChartA("1B3", xdatos[1].graf[2]);break;
                case 2: showChartA("2B1", xdatos[1].graf[0]);showChartA("2B2", xdatos[1].graf[1]);showChartA("2B3", xdatos[1].graf[2]);break;
                case 3: showChartA("3B1", xdatos[1].graf[0]);showChartA("3B2", xdatos[1].graf[1]);showChartA("3B3", xdatos[1].graf[2]);break;
                case 4: showChartA("4B1", xdatos[1].graf[0]);showChartA("4B2", xdatos[1].graf[1]);showChartA("4B3", xdatos[1].graf[2]);break;
                case 5: showChartA("5B1", xdatos[1].graf[0]);showChartA("5B2", xdatos[1].graf[1]);showChartA("5B3", xdatos[1].graf[2]);break;
            };

            //3- MOSTRAR LOS PUNTOS DE INTERES

            switch (idresp) {
                case 1: $("#listItms1").html(xdatos[2].itms);break;
                case 2: $("#listItms2").html(xdatos[2].itms);break;
                case 3: $("#listItms3").html(xdatos[2].itms);break;
                case 4: $("#listItms4").html(xdatos[2].itms);break;
                case 5: $("#listItms5").html(xdatos[2].itms);break;
            };

            },
            error: function (xhr, status, error) {
                console.log('Error conexión Ajax: ' + error.message);
            }
        });         
    };

function showChartA(idchart, adatos){

    var container = "chart" + idchart;
    var gdatos = eval(adatos);
    // console.log('showChartA(), gdatos: ' + gdatos);
    // console.log('showChartA(), gdatos[0]: ' + gdatos[0]);
    // console.log('showChartA(), gdatos[1]: ' + gdatos[1]);
    // console.log('showChartA(), gdatos[0].label: ' + gdatos[0].label);
    // console.log('showChartA(), gdatos[0].value: ' + gdatos[0].value);
    // console.log('showChartA(), gdatos[1].label: ' + gdatos[1].label);
    // console.log('showChartA(), gdatos[1].value: ' + gdatos[1].value);

    new Morris.Donut({
      element: container,
      data: gdatos,
      //data: [{label: '2008', value: 20 },{label: '2009', value: 10 }],
      resize: true,
      colors: ['#666','#BBB'],

    });
};


