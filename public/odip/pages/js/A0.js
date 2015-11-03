
var dataSetA0 = [["","","","",""]];
var colSetA0 = [{ title: "Id" },{ title: "Tabla" },{ title: "Tabla original" },{ title: "Nº Columnas" },{ title: "Nº Filas" }];
 
var laDataTable;

$(document).ready(function() {

    $('#dynamicA0').html( '<table id="exampleA0" class="table table-striped table-bordered table-hover display" width="99%"></table>' );
    laDataTable = $('#exampleA0').DataTable( {
        data: dataSetA0,
        columns: colSetA0,
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
    laDataTable.rows.add(dataSetA0);
    laDataTable.draw();
    //laDataTable.destroy();
    //http://datatables.net/upgrade/1.10-convert
}

function cargartabla () { 

    $.ajax({
        url: '/dataDT', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({a:"A0"}),
        success: function (data) {

                dataSetA0 = data["data"];
                //colSetA0 = data["cols"];
                setTimeout('listtabla();',500);
            
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });

}

