
var dataSetD0 = [["","",""]];
var colSetD0 = [{ title: "Id" },{ title: "Negocio / CNAE" },{ title: "Descripción" }];
 
var laDataTable;

$(document).ready(function() {

    $('#dynamicD0').html( '<table id="exampleD0" class="table table-striped table-bordered table-hover display" width="99%"></table>' );
    laDataTable = $('#exampleD0').DataTable( {
        data: dataSetD0,
        columns: colSetD0,
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
    laDataTable.rows.add(dataSetD0);
    laDataTable.draw();
    //laDataTable.destroy();
    //http://datatables.net/upgrade/1.10-convert
}

function cargartabla () { 

    $.ajax({
        url: '/dataDT', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({a:"D0"}),
        success: function (data) {

                dataSetD0 = data["data"];
                //colSetD0 = data["cols"];
                setTimeout('listtabla();',500);
            
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });

}

