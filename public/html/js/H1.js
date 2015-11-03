
var idselneg = 0;

//GESTIÓN DE ARCHIVOS

$('#btncalcular').click ( function () {adSolicitud();});
$('#btnver').click ( function () {verSolicitud();});
$('#btnbuscar').click ( function () {combosH1("cnaes",$("#buscacnae").val());});

$(document).on('change', '#combnegs', function() {
    idselneg = $("#combnegs").val();
});

//____________________________________________________________________________________
//

function combosH1 (combosel, idselinput, idseloutput){

    $.ajax({
        url: '/getCombo', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({combo: combosel, idsel: idselinput}),
        success: function (data) {

            //console.log("data[0].tablas: "+data[0].tablas);

            switch (combosel) {
                case "cnaes": document.getElementById("combocnaes").innerHTML = '<label for="disabledSelect">Selecciona el negocio</label><select id="combnegs" class="form-control">'+data[0].cnaes+'</select>';break;
            };

            console.log("combosH1("+combosel+") ejecutado.");
        },
        error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });
}

//*****************************************************************************************

// function adSolicitud () {

//     //var adatos = [idselneg,$('#item1').val(),$('#item2').val(),$('#item3').val()];
//     var adatos = [idselneg,5,4,8,6,0,9,6,8,3,0];

//     //if ($(#idselneg).val() != 0) {
//          $.ajax({
//             url: '/adsolicitud', type: 'POST', contentType: 'application/json', 
//             data: JSON.stringify({a: adatos}),
//             success: function (data) {
//                 location.href="#/resultados";
//                 $("#resultado1").html(data[0].resultado1);
//                 $("#resultado2").html(data[0].resultado2);
//                 $("#resultado3").html(data[0].resultado3);
//                 $("#resultado4").html(data[0].resultado4);
//                 $("#resultado5").html(data[0].resultado5);
//             },
//             error: function (xhr, status, error) {console.log('Error: ' + error.message); console.log("Error conexión Ajax");
//                 //$('#lblResponse').html('Error connecting to the server.');
//             }
//         });       
//     //};
// }

$(document).ready(function(){

BtnGroup('selector');
BtnGroup('user_sexo');BtnGroup('user_edad');BtnGroup('user_motivo');
BtnGroup('client_1');BtnGroup('client_2');BtnGroup('client_3');
BtnGroup('client_4');BtnGroup('client_5');BtnGroup('client_6');
BtnGroup('client_7');
BtnGroup('ubic_1');BtnGroup('ubic_2');
BtnGroup('pers_1');BtnGroup('pers_2');BtnGroup('pers_3');

function BtnGroup(div_id) {
    $('.'+div_id+' button').last().attr("aria-pressed","true");
    $('.'+div_id+' button').last().addClass("active");
    //$('#'+div_id).attr('value',$('.'+div_id+' button.active').val());
    $('.'+div_id).attr('value',$('.'+div_id+' button.active').val());
    $('.'+div_id+' button').click(function() {
        $('.'+div_id+' button').attr("aria-pressed","false");
        $('.'+div_id+' button').removeClass("active");
        $(this).attr("aria-pressed","true");
        $(this).addClass("active");
        //$('#'+div_id).attr('value',$('.'+div_id+' button.active').val());
        $('.'+div_id).attr('value',$('.'+div_id+' button.active').val());
        //console.log("$('.'+div_id).attr('value')"+$('.'+div_id).attr('value'));
     });
};


//http://crlcu.github.io/multiselect/#afterMoveToRight
    //http://jqueryscript.nhavungtau.vn/form/Two-side-Multi-Select-Plugin-with-jQuery-multiselect-js.html
    //https://github.com/crlcu/multiselect
    //http://www.jqueryscript.net/demo/Two-side-Multi-Select-Plugin-with-jQuery-multiselect-js/
$('#multiselect1').multiselect({afterMoveToRight: function(Multiselect, options, event, silent, skipStack) {

        // console.log('options.html() -> ' + options.html());
        // console.log('options.text() -> ' + options.text());
        console.log('$(): options.val() -> ' + options.val());//options es un array!
        amulti1 = crearAMulti(options.val());
        console.log('$(): amulti1 -> ' + amulti1);//options es un array!
    }, afterMoveToLeft: function(Multiselect, options, event, silent, skipStack) {amulti1 = crearAMulti(options.val());}, sort: false});

$('#multiselect2').multiselect({afterMoveToRight: function(Multiselect, options, event, silent, skipStack) {amulti2 = crearAMulti(options.val());}, afterMoveToLeft: function(Multiselect, options, event, silent, skipStack) {amulti2 = crearAMulti(options.val());}, sort: false});
$('#multiselect3').multiselect({afterMoveToRight: function(Multiselect, options, event, silent, skipStack) {amulti3 = crearAMulti(options.val());}, afterMoveToLeft: function(Multiselect, options, event, silent, skipStack) {amulti3 = crearAMulti(options.val());}, sort: false});
$('#multiselect4').multiselect({afterMoveToRight: function(Multiselect, options, event, silent, skipStack) {amulti4 = crearAMulti(options.val());}, afterMoveToLeft: function(Multiselect, options, event, silent, skipStack) {amulti4 = crearAMulti(options.val());}, sort: false});

});

 var amulti1 = [0,0,0,0,0,0,0,0,0,0];
 var amulti2 = [0,0,0,0,0,0,0,0,0,0];
 var amulti3 = [0,0,0,0,0,0,0,0,0,0];
 var amulti4 = [0,0,0,0,0,0,0,0,0,0];

function crearAMulti (options) {

    var amulti = [0,0,0,0,0,0,0,0,0,0];

    if (options.length) {
    for (var i=0; i<options.length; i++) { 
        switch (options[i]) {
            case "1": amulti[0]=1; break; case "2": amulti[1]=1; break;
            case "3": amulti[2]=1; break; case "4": amulti[3]=1; break;
            case "5": amulti[4]=1; break; case "6": amulti[5]=1; break;
            case "7": amulti[6]=1; break; case "8": amulti[7]=1; break;
            case "9": amulti[8]=1; break; case "10": amulti[9]=1; break;
        }; 
    };
    };

    console.log('crearAMulti(): amulti -> ' + amulti);
    return amulti;
};
