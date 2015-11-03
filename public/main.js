
var app = angular.module("DNDApp", ['uiGmapgoogle-maps']);

app.config(function($routeProvider){
	$routeProvider
		.when("/", {controller: Controller1, templateUrl: "html/H1.html"})
		.when("/resultados", {controller: "h2Controller", templateUrl: "html/H2.html"})
		.otherwise({redirectTo:'/'});
});

	//No es necesaria esta función, porque cargo el nombre del proceso desde la base de datos con e.js
var idproceso;

function Controller1($location){

	if ($location.path()=="/") {idproceso = 1;};
	if ($location.path()=="/resultados") {idproceso = 10;};

	//alert ($location.path());
}

app.controller('h2Controller', function($scope) {
    $scope.mapa = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    //$scope.mapa = "Hola que tal";
});

//********************************************************************************************
//********************************************************************************************
//********************************************************************************************
//********************************************************************************************
//********************************************************************************************
//*****************************************************************************************

var rdatos = [];
//variable idselneg definida en H1.js

function adSolicitud () {

    var hoy = new Date();
    hoy = fchDATEaSQL(hoy);
    //console.log("adSolicitud(): hoy -> "+hoy);

    //var adatos = [idselneg,5,4,8,6,0,9,6,8,3,0];
    var adatos = [idselneg,$('.user_sexo').attr('value'),$('.user_edad').attr('value'),$('.user_motivo').attr('value'),hoy,
                    $('.client_1').attr('value'),$('.client_2').attr('value'),$('.client_3').attr('value'),
                    $('.client_4').attr('value'),$('.client_5').attr('value'),$('.client_6').attr('value'),
                    amulti1[0],amulti1[1],amulti1[2],amulti1[3],amulti1[4],amulti1[5],amulti1[6],amulti1[7],
                    $('.client_7').attr('value'),$('.ubic_1').attr('value'),
                    amulti2[0],amulti2[1],amulti2[2],amulti2[3],amulti2[4],amulti2[5],amulti2[6],
                    $('.ubic_2').attr('value'),
                    amulti3[0],amulti3[1],amulti3[2],amulti3[3],amulti3[4],amulti3[5],amulti3[6],amulti3[7],amulti3[8],amulti3[9],
                    amulti4[0],amulti4[1],amulti4[2],amulti4[3],amulti4[4],
                    $('.pers_1').attr('value'),$('.pers_2').attr('value'),$('.pers_3').attr('value'),0,0];
    
    //console.log("adSolicitud(): adatos2 -> "+adatos2);
    //console.log("adSolicitud(): amulti1 -> " + amulti1);

    //if ($(#idselneg).val() != 0) {
     $.ajax({
        url: '/adsolicitud', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({a: adatos}),
        success: function (data) {
            location.href="#/resultados";
            // $("#resultado1").html(data[0].resultado1);
            // $("#resultado2").html(data[0].resultado2);
            // $("#resultado3").html(data[0].resultado3);
            // $("#resultado4").html(data[0].resultado4);
            // $("#resultado5").html(data[0].resultado5);
            // console.log("adSolicitud(): data.length: "+data.length);
            // console.log("adSolicitud(): data[0].resultado1: "+data[0].resultado1);
            // console.log("adSolicitud(): data[0]: "+data[0]);
            // console.log("adSolicitud(): data: "+data);
            rdatos = data;
        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });       
    //};
}

var idlocalizaciones = [];

function mostrarResultados () {

    console.log("mostrarResultados(): rdatos: "+rdatos);
    console.log("mostrarResultados(): rdatos[0]: "+rdatos[0]);
    console.log("mostrarResultados(): rdatos[0].resultados[0]: "+rdatos[0].resultados[0]);
    //console.log("mostrarResultados(): rdatos[0].resultados[0][0]: "+rdatos[0].resultados[0][0]);
    console.log("mostrarResultados(): rdatos[0].resultados: "+rdatos[0].resultados);
    console.log("mostrarResultados(): rdatos[0].resultados[1]: "+rdatos[0].resultados[1]);
    // var resse = eval(rdatos[0].resultados);
    // console.log("mostrarResultados(): resse: "+resse);
    // console.log("mostrarResultados(): resse[0]: "+resse[0]);

    // $("#resultado1").html(rdatos[0].resultado1);
    // $("#resultado2").html(rdatos[0].resultado2);
    // $("#resultado3").html(rdatos[0].resultado3);
    // $("#resultado4").html(rdatos[0].resultado4);
    // $("#resultado5").html(rdatos[0].resultado5);

    // $("#resultado1").html(rdatos[0].resultados[0][0]);
    // $("#resultado2").html(rdatos[0].resultados[0][1]);
    // $("#resultado3").html(rdatos[0].resultados[0][2]);
    // $("#resultado4").html(rdatos[0].resultados[0][3]);

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


    // $("#resultado2").html('<div class="row"><!-- Map Column --><div class="col-md-8"><!-- Embedded Google Map --><iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll='+rdatos[0].resultados[1][3]+','+rdatos[0].resultados[1][4]+'&amp;spn=56.506174,79.013672&amp;t=m&amp;z='+rdatos[0].resultados[1][5]+'&amp;output=embed"></iframe></div><!-- Contact Details Column --><div class="col-md-4"><h3>'+rdatos[0].resultados[1][2]+'</h3><p>'+rdatos[0].resultados[1][1]+'<br>'+rdatos[0].resultados[1][0]+'<br></p><ul class="list-group"><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[1][1]+'</span><i class="fa fa-bar-chart"></i> Valoración general</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[1][6]+'</span><i class="fa fa-users"></i> clientes</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[1][7]+'</span><i class="fa fa-bullseye"></i> Ubicación</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[1][8]+'</span><i class="fa fa-user-md"></i> Contratación de personal</li></ul><!-- http://fortawesome.github.io/Font-Awesome/icons/ --></div></div>');
    // $("#resultado3").html('<div class="row"><!-- Map Column --><div class="col-md-8"><!-- Embedded Google Map --><iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll='+rdatos[0].resultados[2][3]+','+rdatos[0].resultados[2][4]+'&amp;spn=56.506174,79.013672&amp;t=m&amp;z='+rdatos[0].resultados[2][5]+'&amp;output=embed"></iframe></div><!-- Contact Details Column --><div class="col-md-4"><h3>'+rdatos[0].resultados[2][2]+'</h3><p>'+rdatos[0].resultados[2][1]+'<br>'+rdatos[0].resultados[2][0]+'<br></p><ul class="list-group"><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[2][1]+'</span><i class="fa fa-bar-chart"></i> Valoración general</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[2][6]+'</span><i class="fa fa-users"></i> clientes</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[2][7]+'</span><i class="fa fa-bullseye"></i> Ubicación</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[2][8]+'</span><i class="fa fa-user-md"></i> Contratación de personal</li></ul><!-- http://fortawesome.github.io/Font-Awesome/icons/ --></div></div>');
    
    // $("#resultado4").html('<div class="row"><!-- Map Column --><div class="col-md-8"><!-- Embedded Google Map --><iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="html/iframes/H2_map1.html"></iframe></div><!-- Contact Details Column --><div class="col-md-4"><h3>Localización</h3><p>'+rdatos[0].resultados[1][1]+'<br>Jaca (Huesca)<br></p><ul class="list-group"><li class="list-group-item"><span class="badge">14</span><i class="fa fa-bar-chart"></i> Valoración general</li><li class="list-group-item"><span class="badge">8</span><i class="fa fa-bullseye"></i> Competencia</li><li class="list-group-item"><span class="badge">2</span><i class="fa fa-users"></i> Público objetivo</li></ul><!-- http://fortawesome.github.io/Font-Awesome/icons/ --></div></div>');


};


// function mostrarResultados2 () {

// 	console.log("mostrarResultados(): rdatos: "+rdatos);
// 	console.log("mostrarResultados(): rdatos[0]: "+rdatos[0]);
// 	console.log("mostrarResultados(): rdatos[0].resultados[0]: "+rdatos[0].resultados[0]);
// 	//console.log("mostrarResultados(): rdatos[0].resultados[0][0]: "+rdatos[0].resultados[0][0]);
// 	console.log("mostrarResultados(): rdatos[0].resultados: "+rdatos[0].resultados);
//     console.log("mostrarResultados(): rdatos[0].resultados[1]: "+rdatos[0].resultados[1]);
// 	// var resse = eval(rdatos[0].resultados);
// 	// console.log("mostrarResultados(): resse: "+resse);
// 	// console.log("mostrarResultados(): resse[0]: "+resse[0]);

//     // $("#resultado1").html(rdatos[0].resultado1);
//     // $("#resultado2").html(rdatos[0].resultado2);
//     // $("#resultado3").html(rdatos[0].resultado3);
//     // $("#resultado4").html(rdatos[0].resultado4);
//     // $("#resultado5").html(rdatos[0].resultado5);

//     // $("#resultado1").html(rdatos[0].resultados[0][0]);
//     // $("#resultado2").html(rdatos[0].resultados[0][1]);
//     // $("#resultado3").html(rdatos[0].resultados[0][2]);
//     // $("#resultado4").html(rdatos[0].resultados[0][3]);

//     $("#resultado1").html('<div class="row"><!-- Map Column --><div class="col-md-8"><!-- Embedded Google Map --><iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll='+rdatos[0].resultados[0][3]+','+rdatos[0].resultados[0][4]+'&amp;spn=56.506174,79.013672&amp;t=m&amp;z='+rdatos[0].resultados[0][5]+'&amp;output=embed"></iframe></div><!-- Contact Details Column --><div class="col-md-4"><h3>'+rdatos[0].resultados[0][2]+'</h3><p>'+rdatos[0].resultados[0][1]+'<br>'+rdatos[0].resultados[0][0]+'<br></p><ul class="list-group"><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[0][1]+'</span><i class="fa fa-bar-chart"></i> Valoración general</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[0][6]+'</span><i class="fa fa-users"></i> clientes</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[0][7]+'</span><i class="fa fa-bullseye"></i> Ubicación</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[0][8]+'</span><i class="fa fa-user-md"></i> Contratación de personal</li></ul><!-- http://fortawesome.github.io/Font-Awesome/icons/ --></div></div>');
//     $("#resultado2").html('<div class="row"><!-- Map Column --><div class="col-md-8"><!-- Embedded Google Map --><iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll='+rdatos[0].resultados[1][3]+','+rdatos[0].resultados[1][4]+'&amp;spn=56.506174,79.013672&amp;t=m&amp;z='+rdatos[0].resultados[1][5]+'&amp;output=embed"></iframe></div><!-- Contact Details Column --><div class="col-md-4"><h3>'+rdatos[0].resultados[1][2]+'</h3><p>'+rdatos[0].resultados[1][1]+'<br>'+rdatos[0].resultados[1][0]+'<br></p><ul class="list-group"><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[1][1]+'</span><i class="fa fa-bar-chart"></i> Valoración general</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[1][6]+'</span><i class="fa fa-users"></i> clientes</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[1][7]+'</span><i class="fa fa-bullseye"></i> Ubicación</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[1][8]+'</span><i class="fa fa-user-md"></i> Contratación de personal</li></ul><!-- http://fortawesome.github.io/Font-Awesome/icons/ --></div></div>');
//     $("#resultado3").html('<div class="row"><!-- Map Column --><div class="col-md-8"><!-- Embedded Google Map --><iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll='+rdatos[0].resultados[2][3]+','+rdatos[0].resultados[2][4]+'&amp;spn=56.506174,79.013672&amp;t=m&amp;z='+rdatos[0].resultados[2][5]+'&amp;output=embed"></iframe></div><!-- Contact Details Column --><div class="col-md-4"><h3>'+rdatos[0].resultados[2][2]+'</h3><p>'+rdatos[0].resultados[2][1]+'<br>'+rdatos[0].resultados[2][0]+'<br></p><ul class="list-group"><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[2][1]+'</span><i class="fa fa-bar-chart"></i> Valoración general</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[2][6]+'</span><i class="fa fa-users"></i> clientes</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[2][7]+'</span><i class="fa fa-bullseye"></i> Ubicación</li><li class="list-group-item"><span class="badge">'+rdatos[0].resultados[2][8]+'</span><i class="fa fa-user-md"></i> Contratación de personal</li></ul><!-- http://fortawesome.github.io/Font-Awesome/icons/ --></div></div>');
    
//     $("#resultado4").html('<div class="row"><!-- Map Column --><div class="col-md-8"><!-- Embedded Google Map --><iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="html/iframes/H2_map1.html"></iframe></div><!-- Contact Details Column --><div class="col-md-4"><h3>Localización</h3><p>'+rdatos[0].resultados[1][1]+'<br>Jaca (Huesca)<br></p><ul class="list-group"><li class="list-group-item"><span class="badge">14</span><i class="fa fa-bar-chart"></i> Valoración general</li><li class="list-group-item"><span class="badge">8</span><i class="fa fa-bullseye"></i> Competencia</li><li class="list-group-item"><span class="badge">2</span><i class="fa fa-users"></i> Público objetivo</li></ul><!-- http://fortawesome.github.io/Font-Awesome/icons/ --></div></div>');


// };


function fchDATEaSQL (fchdate) { 
    //Pasa "2014-02-01" a DATE.
    if (fchdate==""||fchdate==null||fchdate=="//") {
        var newfchsql = "";
    } else {
        var mes = fchdate.getMonth()+1;//Los meses van del 0 al 11.
        var dia = fchdate.getDate();
        if (parseInt(mes)<10) {mes="0"+mes};//Poner un cero delante del mes si este es menor a 10.
        if (parseInt(dia)<10) {dia="0"+dia};//Poner un cero delante del día si este es menor a 10.
        var newfchsql = fchdate.getFullYear()+"-"+mes+"-"+dia;
    };

    return newfchsql;
            //console.log("newfchweb (desde fchDATEaWEB): "+newfchweb);
};

function verSolicitud () {

    if ($('.selector').attr('value')==0) {

        var hoy = new Date();
        hoy = fchDATEaSQL(hoy);

        var adatos = [idselneg,$('.user_sexo').attr('value'),$('.user_edad').attr('value'),$('.user_motivo').attr('value'),hoy,0];
        
        $.ajax({
            url: '/adsolicitud', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: adatos}),
            success: function (data) {
                location.href="#/resultados";
                rdatos = data;
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });    
    } else {
        $('#panel_clientes').css("display", "block");
        $('#panel_ubicacion').css("display", "block");
        $('#panel_personal').css("display", "block");
        $('#panel_calcular').css("display", "block");
    };

};



$('#btncomentario').click ( function () {adComentario();});

function adComentario () {

    var adatos = [idselneg,$('#comentario').val()];

    console.log("adComentario(): $('#comentario').val(): "+$('#comentario').val());

    if ($('#comentario').val() != "") {
         $.ajax({
            url: '/adcomentario', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({a: adatos}),
            success: function (data) {
                console.log("adComentario(): Adjuntado el comentario a la solicitud:");
            },
            error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
                //$('#lblResponse').html('Error connecting to the server.');
            }
        });       
    };
};

function mostrarGraficos (idresp){

    // console.log('mostrarGraficos(), idresp: ' + idresp);
    // console.log('mostrarGraficos(), idlocalizaciones: ' + idlocalizaciones);
    // console.log('mostrarGraficos(), idlocalizaciones[idresp]: ' + idlocalizaciones[idresp]);

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

            // console.log('mostrarGraficos(), xdatos[1].graf: ' + xdatos[1].graf);
            // console.log('mostrarGraficos(), xdatos[1].graf[0]: ' + xdatos[1].graf[0]);
            // console.log('mostrarGraficos(), xdatos[1].graf[0][0].label: ' + xdatos[1].graf[0][0].label);

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
      colors: ['#bf3176','#B12F6E'],

    });
};