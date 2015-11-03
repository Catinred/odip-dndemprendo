// InputFile

$(document).on('change', '.btn-file :file', function() {

        //console.log("cargado: importarcsv.js");
        
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
});

$(document).ready( function() {
    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        console.log(numFiles);
        console.log(label);
    });
});


//GESTIÓN DE ARCHIVOS

$('#btnsubir').click ( function () {upFile();});//File CSV
//console.log("$('#miFile').change");

//____________________________________________________________________________________
//Subir archivos con NodeJS

function upFile () {

    var formData = new FormData();
    var file = document.getElementById("miFile").files[0];
    formData.append("myFileUp", file);

    var xhr = new XMLHttpRequest();
    
    xhr.open('post', '/subirArchivo', true);
    
    xhr.upload.onprogress = function(e) {
      if (e.lengthComputable) {
        var percentage = (e.loaded / e.total) * 100;
        $("#Evo").css('width', percentage + '%');
      }
    };
    
    xhr.onerror = function(e) {
      showInfo('An error occurred while submitting the form. Maybe your file is too big');
    };
    
    //xhr.onload = function() {showInfo(this.statusText);};
    xhr.onload = function(res) {
	//Visualización en HTML-----------------------------------------------------------
	if (this.statusText == "OK") {

        //>>Me llega com texto, y lo paso a Json
        var datajson = eval(xhr.responseText);

		document.getElementById("linktabla").innerHTML = "<i class='fa fa-file-code-o'></i> <a href='"+datajson[0].path+"' target='_blank'>"+datajson[0].tabla+"</a>";
        document.getElementById("ncolumnas").innerHTML = "<i class='fa fa-columns'></i> "+datajson[0].ncol+" columnas";
        document.getElementById("nfilas").innerHTML = "<i class='fa fa-navicon'></i> "+datajson[0].nfilas+" filas";
        document.getElementById("cabeceras").innerHTML = "<i class='fa fa-table'></i> Nombres de columna:<div class='well well-sm'><p>"+datajson[0].cabeceras+"</p></div>";
	} else {
		document.getElementById("linktabla").innerHTML = "No se ha podido subir el archivo.";
	};
	//--------------------------------------------------------------------------------
    };

    xhr.send(formData);

}
