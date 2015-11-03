
var dataSetB0 = [["","","","","",""]];
var colSetB0 = [{ title: "Id" },{ title: "Localización" },{ title: "Municipio" },{ title: "Provincia" },
    { title: "Latitud" },{ title: "Longitud" }];
 
var laDataTable;

$(document).ready(function() {

    $('#dynamicB0').html( '<table id="exampleB0" class="table table-striped table-bordered table-hover display" width="99%"></table>' );
    laDataTable = $('#exampleB0').DataTable( {
        data: dataSetB0,
        columns: colSetB0,
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
    laDataTable.rows.add(dataSetB0);
    laDataTable.draw();
    //laDataTable.destroy();
    //http://datatables.net/upgrade/1.10-convert
}

function cargartabla () { 

    $.ajax({
        url: '/dataDT', type: 'POST', contentType: 'application/json', 
        data: JSON.stringify({a:"B0"}),
        success: function (data) {

                dataSetB0 = data["data"];
                //colSetB0 = data["cols"];
                setTimeout('listtabla();',500);
            
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message); console.log("Error conexión Ajax");
            //$('#lblResponse').html('Error connecting to the server.');
        }
    });

}

