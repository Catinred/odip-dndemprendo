
$(document).ready(function() {

    cargartotales();
} );



function cargartotales () { 

    $.ajax({
        url: '/dTotales', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({a:"CM"}),
        success: function (data) {

            $("#totalCrits").html(data[0].totales[0]);
            $("#totalLocs").html(data[0].totales[1]);
            $("#totalNegs").html(data[0].totales[2]);
            $("#totalItems").html(data[0].totales[3]);
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });

};


function mostrarGrafico (chartselect){

    $.ajax({
            url: '/dataCharts', type: 'POST', contentType: 'application/json', 
            data: JSON.stringify({chart: chartselect}),
            success: function (data) {

                switch (chartselect) {
                    case 1: showChart(1, data);break;
                    case 2: showChart2(2, data);break;
                    case 3: showChart2(3, data);break;
                    case 4: showChart2(4, data);break;
                    case 5: showChart3(5, data);break;
                };


            },
            error: function (xhr, status, error) {
                console.log('Error conexión Ajax: ' + error.message);
            }
        });         
    };

mostrarGrafico(1);
mostrarGrafico(2);
mostrarGrafico(3);
mostrarGrafico(4);
mostrarGrafico(5);

function showChart(nchart, aDatos){

    var container = "container-chart" + nchart;

    new Morris.Line({
      // ID of the element in which to draw the chart.
      element: container,
      // Chart data records -- each entry in this array corresponds to a point on the chart.
      data: aDatos,
      // Ejemplo: [{ dia: '2008', value: 20 },{ dia: '2009', value: 10 },{ dia: '2010', value: 5 },{ dia: '2011', value: 5 },{ dia: '2012', value: 20 }],
      // The name of the data record attribute that contains x-values.
      xkey: 'dia',
      // A list of names of data record attributes that contain y-values.
      ykeys: ['valor'],
      // Labels for the ykeys -- will be displayed when you hover over the chart.
      labels: ['valor']
    });
}


function showChart2(nchart, aDatos){

    var container = "container-chart" + nchart;

    new Morris.Donut({
      element: container,
      data: aDatos,
      //data: [{label: '2008', value: 20 },{label: '2009', value: 10 }]
    });
}

function showChart3(nchart, aDatos){

    var container = "container-chart" + nchart;

    new Morris.Bar({
      element: container,
      data: aDatos,
      xkey: 'negocio',
      ykeys: ['valor'],
      labels: ['valor']
    });
}

//TABLA DE COMENTARIOS:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

var dataSet00 = [["1","2","3"]];
var colSet00 = [{ title: "Id" },{ title: "Negocio" },{ title: "Comentario" }];
 
var laDataTable;

$(document).ready(function() {

    $('#dynamic00').html( '<table id="example00" class="table table-striped table-bordered table-hover display" width="99%"></table>' );
    laDataTable = $('#example00').DataTable( {
        data: dataSet00,
        columns: colSet00,
        "bAutoWidth" : true,
        "sScrollY" : "200",
        "sScrollX" : "100%",
        "bScrollCollapse" : true,
    });
    cargartabla();
} );

//listtabla();

function listtabla () {

    laDataTable.clear();
    laDataTable.rows.add(dataSet00);
    laDataTable.draw();
    //laDataTable.destroy();
    //http://datatables.net/upgrade/1.10-convert
}

function cargartabla () { 

    $.ajax({
        url: '/dataDT', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({a:"00"}),
        success: function (data) {

                dataSet00 = data["data"];
                //colSetB0 = data["cols"];
                setTimeout('listtabla();',500);
            
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });

}