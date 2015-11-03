
var dataSetC0 = [["","","",""]];
var colSetC0 = [{ title: "Id" },{ title: "Criterio" },{ title: "Grupo" },{ title: "Descripción"}];
 
var laDataTable;

$(document).ready(function() {

    $('#dynamicC0').html( '<table id="exampleC0" class="table table-striped table-bordered table-hover display" width="99%"></table>' );
    laDataTable = $('#exampleC0').DataTable( {
        data: dataSetC0,
        columns: colSetC0,
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
    laDataTable.rows.add(dataSetC0);
    laDataTable.draw();
    //laDataTable.destroy();
    //http://datatables.net/upgrade/1.10-convert
}

function cargartabla () { 

    $.ajax({
        url: '/dataDT', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({a:"C0"}),
        success: function (data) {

                dataSetC0 = data["data"];
                //colSetC0 = data["cols"];
                setTimeout('listtabla();',500);
            
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });

}

