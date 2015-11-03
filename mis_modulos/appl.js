var express = require('express');
var mysql = require('mysql');
var fs = require('fs');

//"www.isowin.org", "isowin0", "david181"
var connection = mysql.createConnection({
	host     : '127.0.0.1',
	user     : 'root',
	//password : 'david181', //Cuando trabajo en AWS
	password : '', //Cuando trabajo en local
	// host     : 'www.isowin.es',
	// user     : 'iwuser2',
	// password : 'david181',
	//database : "db222222",
});

//ODIP

//SUBIR ARCHIVOS

function subirArchivo (req, res) {

	//var usuario_id = 1; //req.cookies.isowin_al
				// console.log("Nombre archivo subido: "+req.files.myFileUp.name); 
				// console.log("Path archivo subido: "+req.files.myFileUp.path);
				// console.log("Archivo subido size: "+req.files.myFileUp.size);

	var pathLongitud = req.files.myFileUp.path.length;
	nombreFile = req.files.myFileUp.path.substring(26,pathLongitud);// En local
	//nombreFile = req.files.myFileUp.path.substring(30,pathLongitud);// En server aws

				// console.log("req.files.myFileUp.path.length: "+req.files.myFileUp.path.length);
				// console.log("nombreFile: "+nombreFile);

	//2- Muevo el archivo a la carpeta del usuario
    var path_actual = "./mis_csv/"+nombreFile;
			console.log(+'subirArchivo() path_actual: '+path_actual);
   // 	var path_usuario = './docs/'+bd+'/'+nombreFile;
			// console.log(bd+' subirArchivo() path_usuario: '+path_usuario);
    	//>>Muevo el archivo a la carpeta de usuario (cambio el path del archivo)
    // fs.rename(path_actual, path_usuario, function(err) {
    //     if (err) throw err;
    //     //>>Borro el archivo temporal
    //     //fs.unlink(path_actual, function() {if (err) throw err;});
    //     //Creo que no es necesario borrarlo. Ya que al renombrarlo se mueve a su sitio sin dejar copia.
    // });

	//3- Enchufo el reloj de borrado automático
  	//deleteAfterUpload(path_usuario); //Lo desconecto para evitar perder documentos de los primeros clientes

				//Teoria:
				//timeoutObject = setTimeout('borradoAuto(path);',2000);
				//Para parar el setTimeout: clearTimeout(timeoutObject)

  	//4- Devuelvo el path para incluirlo en el link del formulario
   	var path_link = '/proyectos/odip/mis_csv/'+nombreFile;//Trabajando en local
   	//var path_link = '/home/ubuntu/apps/iw9001/docs/'+bd+'/'+nombreFile;//Trabajando en server aws
			console.log('subirArchivo() path_link: '+path_link);
	
	//res.end(path_link);

//EXTRAIGO TODO EL CONTENIDO DEL ARCHIVO COMO UNA CADENA DE TEXTO
//https://docs.nodejitsu.com/articles/file-system/how-to-read-files-in-nodejs

	//console.log("procesarArchivo(): path_actual: "+path_actual);
	//fs = require('fs');
	fs.readFile(path_actual, 'utf8', function (err,data) {
  	if (err) {
    	return console.log(err);
  	}
  	//console.log(data);
  	ArchivoCSV(data,path_link,res);
	});
}

exports.subirArchivo = subirArchivo;

function ArchivoCSV (allText, path_link, res) {

//LIMPIO EL ARCHIVO DE COMAS
//http://stackoverflow.com/questions/7431268/how-to-read-data-from-csv-file-using-javascript

	//var allTextclear2 = allText.split("\"").join(',');//Cambio las comillas dobles por vacio.
	//var allTextclear1 = allTextclear2.split("\'").join(',');//Cambio las comilla simple por vacio.
	//allTextclear1 = allText.replace(/\/"/g, '/');
	var allTextclear = allText.split(",").join('.');//Cambio las comas por puntos.
    var allTextLines = allTextclear.split(/\r\n|\n/);
    var headers = allTextLines[0].split(';');
    var records = [];
    var lines = [];

    for (var i=0; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(';');
        records[i] = data;
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
    console.log("ArchivoCSV(): headers: "+headers);
    console.log("ArchivoCSV(): Nº Filas: "+i);
    console.log("ArchivoCSV(): Nº Columnas: "+j);
    //console.log("ArchivoCSV(): lines: "+lines);
    // alert(lines);

    //CREO LA TABLA
    //>>Nombre de la tabla
    var longNombre = nombreFile.length - 4;
    var tabla = nombreFile.substring(0,longNombre);
    tabla = tabla.split("-").join('');//Elimino los guiones.
    console.log("tabla: "+tabla+" longNombre: "+longNombre);
    //tabla = "tabla1";


	var ncampos = j+1;
	var nfilas = i-1;
	var campos = tabla+"0 integer primary key auto_increment, "+tabla+"1 text";//Para crear tabla
	var campos2 = tabla+"1";//Para cargar datos
	var interrog2 = "?";

	for (j=2; j<(ncampos); j++){
		campos += ", "+ tabla + j +" text";
		campos2 += ", "+ tabla + j;
		interrog2 += ",?";
	};

	//>>Incluyo los campos de lat/lng/peso/ubicacion en la tabla que quearán vacios.
	for (j=ncampos; j<(ncampos+4); j++){ 
		campos += ", "+ tabla + j +" text";
	};

    //console.log("ArchivoCSV(): tabla: "+tabla);
    //console.log("ArchivoCSV(): campos: "+campos);
    //console.log("ArchivoCSV(): INSERT INTO "+tabla+" ("+campos2+") VALUES ("+interrog2+") ");

	connection.query("USE dbodip");
	connection.query('CREATE TABLE IF NOT EXISTS '+tabla+' ('+campos+')');

	var nombretabla = "tabla-" + tabla;

	var cadenaheaders = ""+headers[0];
	for (i=1; i<headers.length; i++){
    	//if (i<9) {console.log("ArchivoCSV(): records[i]: "+records[i]);};
		cadenaheaders = cadenaheaders+", "+headers[i];
	};
    //console.log("ArchivoCSV(): nombretabla: "+nombretabla);
	datainfotablas = [nombretabla, tabla, path_link, ncampos, nfilas, cadenaheaders];
	connection.query("INSERT INTO infotablas (infotablas1, infotablas2, infotablas4, infotablas5, infotablas6, infotablas7) VALUES (?,?,?,?,?,?) ",datainfotablas);

	for (i=0; i<(nfilas); i++){
    	//if (i<9) {console.log("ArchivoCSV(): records[i]: "+records[i]);};
		connection.query("INSERT INTO "+tabla+" ("+campos2+") VALUES ("+interrog2+") ",records[i]);
	};

	//>>DEVUELVEO INFO A CLIENTE
    var cadenaDatos = '{"tabla":"'+nombretabla+'","path":"'+path_link+'","ncol":"'+ncampos+'","nfilas" :"'+nfilas+'","cabeceras" :["'+cadenaheaders+'"]}';
	cadenaJSON = "[" + cadenaDatos + "]";
    console.log("ArchivoCSV(): cadenaJSON: "+cadenaJSON);
	res.contentType('json');
	var dataJSON = eval(cadenaJSON);
	res.json(200, dataJSON);
}

//COMBOS

function getCombo (req, res) {
	//Recibe JSON(combo,idsel)
	//Devuelve: [{combo1: string, combo2: string}]

	connection.query("USE dbodip");

		console.log("req.body.combo: "+req.body.combo);
		console.log("req.body.idsel: "+req.body.idsel);

	var consultaSQL;

	switch (req.body.combo) {
		case "tablas": consultaSQL = 'SELECT * FROM infotablas'; 
					var nuevastablas = "<option selected>Seleccionar...</option>";break;
		case "cols": consultaSQL = 'SELECT * FROM '+req.body.idsel; 
					var nuevascols = "<option selected>Seleccionar...</option>";break;
		case "locs": consultaSQL = 'SELECT * FROM localizaciones ORDER BY localizaciones1 ASC, localizaciones2 ASC, localizaciones3 ASC'; 
					var nuevaslocs = "<option selected>Seleccionar...</option>";break;
		case "provs": consultaSQL = 'SELECT * FROM localizaciones WHERE localizaciones1="0"'; 
					var nuevasprovs = "<option value=0 selected>Es provincia</option></option>";break;
		case "munis": consultaSQL = 'SELECT * FROM localizaciones WHERE localizaciones1='+req.body.idsel+' AND localizaciones2="0"'; 
					var nuevosmunis = "<option value=0 selected>Es municipio/comarca</option>";break;
		case "locs2": consultaSQL = 'SELECT * FROM localizaciones WHERE localizaciones3 LIKE "%'+req.body.idsel+'%" ORDER BY localizaciones3 ASC'; 
					var nuevoscnaes = "<option selected>Seleccionar...</option>";break;
		case "cnaes": consultaSQL = 'SELECT * FROM cnae WHERE cnae1 LIKE "'+req.body.idsel+'%" ORDER BY cnae2 ASC'; 
					var nuevoscnaes = "<option selected>Seleccionar...</option>";break;
		case "grupos1": consultaSQL = 'SELECT * FROM grcriterios'; 
					var nuevosgrupos = "<option selected>Seleccionar...</option>";break;
		case "criterios": consultaSQL = 'SELECT * FROM criterios WHERE criterios1='+req.body.idsel; 
					var nuevoscriterios = "<option selected>Seleccionar...</option>";break;
		case "grupos2": consultaSQL = 'SELECT * FROM grcriterios'; 
					var nuevosgrupos = "<option selected>Seleccionar...</option>";break;
	};

	connection.query(consultaSQL,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				// if (results.length>0) {

				switch (req.body.combo) {

					case "tablas"://Devuelvo el combo de las tablas.
						for(var i=0; i < results.length; i++) {	
							nuevastablas = nuevastablas + "<option value=" +results[i].infotablas2+">"+results[i].infotablas1 +"</option> ";
						};
						var cadenaJSON = "[{tablas:'"+nuevastablas+"'}]";break;
					case "cols"://Devuelvo el combo de las columnas de la tabla seleccionada.
						//console.log("getCombo("+req.body.combo+") results[0]: "+ results[0]);
						console.log("getCombo() Object.keys(results[0]).length: "+ Object.keys(results[0]).length);
						//console.log("getCombo("+req.body.combo+") Object.list(results[0])[0]: "+ Object.list(results[0])[0]);
						//console.log("getCombo("+req.body.combo+") results[0].list[0]: "+ results[0].list[0]);
						var arrayCols = pasarJSONaArray (results);
						arrayCols = eval(arrayCols);
						// console.log("getCombo() arrayCols: "+ arrayCols);
						var arrayCol0 = eval(arrayCols[0]);
						// console.log("getCombo() arrayCol0.length: "+ arrayCol0.length);
						// console.log("getCombo() arrayCol0[0]: "+ arrayCol0[0]);
						// console.log("getCombo() arrayCols[0][0][0]: "+ arrayCols[0][0][0]);
						for(var i=1; i < arrayCol0.length-4; i++) {	
							nuevascols = nuevascols + "<option value=" +i+">"+arrayCol0[i] +"</option> ";
							//console.log("getCombo() arrayCols[0][i]: "+ arrayCols[0][i]);
						};
						var cadenaJSON = "[{columnas:'"+nuevascols+"'}]";break;
					case "locs"://Devuelvo el combo de las localizaciones.
						for(var i=0; i < results.length; i++) {	
							nuevaslocs = nuevaslocs + "<option value=" +results[i].localizaciones0+">"+results[i].localizaciones3 +"</option> ";
						};
						var cadenaJSON = "[{locs:'"+nuevaslocs+"'}]";break;
					case "provs"://Devuelvo el combo de las localizaciones.
						for(var i=0; i < results.length; i++) {	
							nuevasprovs = nuevasprovs + "<option value=" +results[i].localizaciones0+">"+results[i].localizaciones3 +"</option> ";
						};
						var cadenaJSON = "[{provs:'"+nuevasprovs+"'}]";break;
					case "munis"://Devuelvo el combo de las localizaciones.
						for(var i=0; i < results.length; i++) {	
							nuevosmunis = nuevosmunis + "<option value=" +results[i].localizaciones0+">"+results[i].localizaciones3 +"</option> ";
						};
						var cadenaJSON = "[{munis:'"+nuevosmunis+"'}]";break;
					case "locs2"://Devuelvo el combo de las localizaciones.
						for(var i=0; i < results.length; i++) {	
							nuevaslocs = nuevaslocs + "<option value=" +results[i].localizaciones0+">"+results[i].localizaciones3 +"</option> ";
						};
						var cadenaJSON = "[{locs2:'"+nuevaslocs+"'}]";break;
					case "cnaes"://Devuelvo el combo de las localizaciones.
						for(var i=0; i < results.length; i++) {	
							nuevoscnaes = nuevoscnaes + "<option value=" +results[i].cnae0+">"+results[i].cnae2+" ("+results[i].cnae1+")</option> ";
						};
						var cadenaJSON = "[{cnaes:'"+nuevoscnaes+"'}]";break;
					case "grupos1"://Devuelvo el combo de los grupos de criterios.
						for(var i=0; i < results.length; i++) {	
							nuevosgrupos = nuevosgrupos + "<option value=" +results[i].grcriterios0+">"+results[i].grcriterios1+"</option> ";
						};
						var cadenaJSON = "[{grupos:'"+nuevosgrupos+"'}]";break;
					case "criterios"://Devuelvo el combo de los criterios.
						for(var i=0; i < results.length; i++) {	
							nuevoscriterios = nuevoscriterios + "<option value=" +results[i].criterios0+">"+results[i].criterios2+"</option> ";
						};
						var cadenaJSON = "[{criterios:'"+nuevoscriterios+"'}]";break;
					case "grupos2"://Devuelvo el combo de los grupos de criterios.
						for(var i=0; i < results.length; i++) {	
							nuevosgrupos = nuevosgrupos + "<option value=" +results[i].grcriterios0+">"+results[i].grcriterios1+"</option> ";
						};
						var cadenaJSON = "[{grupos:'"+nuevosgrupos+"'}]";break;

					};

					res.contentType('json');
					var dataJSON = eval(cadenaJSON);
					res.json(200, dataJSON);
						//console.log("getCombo("+req.body.combo+"): Devuelve: "+ cadenaJSON);
						console.log("getCombo("+req.body.combo+"): Devuelto.");

				// } else {
				// 	console.log("0 Datos.");
				// 	res.set('Content-Type', 'text/plain');
				// 	res.send('nosuccess');	
				// };
			};
		});

};
exports.getCombo = getCombo;

function guardarNombre (req, res) {

	connection.query("USE dbodip");

	connection.query('UPDATE infotablas SET infotablas1=? WHERE infotablas2=?',[req.body.nombre, req.body.idsel],
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				res.end("Success");
				console.log("guardarNombre(): Nuevo nombre: "+req.body.nombre);
			};
		});

};
exports.guardarNombre = guardarNombre;

function verinfotabla (req, res) {

	connection.query("USE dbodip");

	connection.query('SELECT * FROM infotablas WHERE infotablas2=?',[req.body.idsel],
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				res.contentType('json');
				res.send(results);
				//console.log("guardarNombre(): Nuevo nombre: "+req.body.nombre);
			};
		});

};
exports.verinfotabla = verinfotabla;

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function dataDT (req, res){

	var consultaSQL;

	console.log("dataDT() req.body.b " + req.body.b);

	switch (req.body.a) {
		case "00": consultaSQL = "SELECT comentarios0, (SELECT cnae2 FROM cnae WHERE cnae0=comentarios1), comentarios2 FROM comentarios LIMIT 10";break;
		case "A0": consultaSQL = "SELECT infotablas0, infotablas1, infotablas2, infotablas5, infotablas6 FROM infotablas";break;
		case "A2": 
			var col1 = req.body.b[0] + "0";
			var col2 = req.body.b[0] + req.body.b[1];
			var col3 = req.body.b[0] + req.body.b[2];
			var ncol = parseInt(req.body.b[3]);
			var col4 = req.body.b[0] + ncol; ncol++;
			var col5 = req.body.b[0] + ncol; ncol++;
			var col6 = req.body.b[0] + ncol; ncol++;
		consultaSQL = "SELECT "+col1+", "+col2+", "+col3+", "+col4+", "+col5+", "+col6+" FROM " + req.body.b[0];break;
		case "A3": consultaSQL = "SELECT * FROM items";break;
		case "B0": consultaSQL = "SELECT loc2.localizaciones0, loc2.localizaciones3, (SELECT loc1.localizaciones3 FROM localizaciones as loc1 WHERE loc1.localizaciones0 = loc2.localizaciones2), (SELECT loc3.localizaciones3 FROM localizaciones as loc3 WHERE loc3.localizaciones0 = loc2.localizaciones1), loc2.localizaciones4, loc2.localizaciones5 FROM localizaciones as loc2";break;
		case "C0": consultaSQL = "SELECT criterios0, criterios2, (SELECT grcriterios1 FROM grcriterios WHERE grcriterios0 = criterios1) as grcrit2, criterios3 FROM criterios ORDER BY grcrit2 ASC";break;
		case "D0": consultaSQL = "SELECT cnae0, cnae1, cnae2 FROM cnae";break;
		case "D2CritLoc": consultaSQL = "SELECT * FROM localizaciones WHERE localizaciones0="+ req.body.b;break;
		case "D2CritNeg": consultaSQL = "SELECT * FROM cnae WHERE cnae0="+ req.body.b;break;
	};

	connection.query("USE dbodip");

	console.log("dataDT() consultaSQL " + consultaSQL);

	connection.query(consultaSQL,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				if (results.length>0) {

					//console.log("dataDT() results " + results);
					var losdatos = pasarJSONaArray(results);//Paso el array de JSONs a una matriz (array de arrays).
					//console.log("dataDT() losdatos[0]: " + losdatos[0]);
					//console.log("dataDT() losdatos[100]: " + losdatos[100]);
					var losdatos2= '{"data":['+losdatos+']}';//Completo el string.
					//console.log("dataDT() losdatos2 " + losdatos2);
					var resultsJSON = eval('('+losdatos2+')');//Convierto el string en un JSON.
					//console.log("dataDT() resultsJSON " + resultsJSON);

					res.json(200, resultsJSON);
					//console.log("dataDT() Devuelto.");

				} else {
					//console.log("dataDT(); 0 resultados");
					res.set('Content-Type', 'text/plain');
					res.send('nosuccess');	
				};
			};
		});
};
exports.dataDT = dataDT;


function data1 (req, res) {
//<<Consulta de datos de cualquier TABLA {a} y devuelve JSON: [{c0:"valor1", c1:"valor2",..},{...},...]
	var consultaSQL;
	//console.log("data1: req.body.a: " + req.body.a);

	switch (req.body.a) {
		case "B1loc": consultaSQL = "SELECT * FROM localizaciones WHERE localizaciones0="+ req.body.b;break;
		case "D1Neg": consultaSQL = "SELECT * FROM cnae WHERE cnae0="+ req.body.b;break;
		case "B2Crit": consultaSQL = "SELECT * FROM criterios LEFT JOIN grcriterios ON criterios1=grcriterios0 ORDER BY criterios0 ASC";break;
		case "D2Crit": consultaSQL = "SELECT * FROM criterios LEFT JOIN grcriterios ON criterios1=grcriterios0 ORDER BY criterios0 ASC";break;
		case "C1Crit": consultaSQL = "SELECT * FROM criterios WHERE criterios0="+ req.body.b;break;
	};

	connection.query("USE dbodip");

	console.log("data1() consultaSQL " + consultaSQL);

	connection.query(consultaSQL,
		function selectCC(err, results, fields) {
			if (err) {throw err;} 
			else {

				if (results.length>0) {

					res.contentType('json');
					res.send(results);
					//console.log("data1: Devuelve: " + results);
					console.log("data1: Devuelto.");

				} else {
					console.log("data1: 0 resultados");
					res.set('Content-Type', 'text/plain');
					res.send('nosuccess');	
				};
			};
		});
};
exports.data1 = data1;


function pasarJSONaArray (datajson){
// Esta función convierte: [{"rms0":"Hey1","rms1":"Hola1"},{"rms0":"Hey2","rms1":"Hola2"},...] 
//en: [["Hey1","Hola1"],["Hey2","Hola2"]...]

	var datamatriz = [];
	for (j=0; j<datajson.length; j++) {
	//Dentro de cada JSON
		var dataarray = [];
		var data1json = datajson[j];
		var iarray = 0;//número de elemento en el vector de salida.

		for(var col in data1json) {//col es el nombre del elemento del JSON, ej: "rms2".
			//console.log("i: "+i);
		//var ncol = parseInt(col.substring(3,10));
		var ncol = iarray;
			//Elimino el identificador de tabla (ej: "rms") del nombre de la columna y cojo los siete siguientes caracteres. Luego los transformo en un Integer.
    		//console.log("ci: "+ci);
    		if(data1json.hasOwnProperty(col) && !isNaN(+ncol)) {//Si la propiedad tiene valor, y el nombre de la propiedad es un número.
        	
        	dataarray[+iarray] = '"'+data1json[col]+'"';
        	iarray++;//Sumo una posición en el vector de salida.
    		};
		};
		datamatriz.push ("["+dataarray+"]");//Incluyo el nuevo array en la matriz.
	};
	return (datamatriz);
}

function adup1 (req, res) {

	var consultaSQL;

	if (req.body.b[0] == 0) {
		req.body.b.shift();//Elimino el 0 del vector inicial.
		switch (req.body.a) {
			case "locs": consultaSQL = 'INSERT INTO localizaciones (localizaciones3, localizaciones1, localizaciones2, localizaciones4, localizaciones5, localizaciones6) VALUES (?,?,?,?,?,?)';break;
			case "negs": consultaSQL = 'INSERT INTO cnae (cnae2, cnae1, cnae3) VALUES (?,?,?)';break;
			case "crits": consultaSQL = 'INSERT INTO criterios (criterios2, criterios1, criterios3) VALUES (?,?,?)';break;
			case "itms": consultaSQL = 'INSERT INTO items (items1, items2, items3, items4, items5, items6) VALUES (?,?,?,?,?,?)';break;
		};
	}else{
		var aux = req.body.b[0];//Guardo el identificador en una variable auxiliar.
		req.body.b.shift();//Elimino el primer valor.
		req.body.b.push(aux);//agrego el identificador al final.
		switch (req.body.a) {
			case "locs": consultaSQL = 'UPDATE localizaciones SET localizaciones3=?, localizaciones1=?, localizaciones2=?, localizaciones4=?, localizaciones5=?, localizaciones6=? WHERE localizaciones0=?';break;
			case "negs": consultaSQL = 'UPDATE cnae SET cnae2=?, cnae1=?, cnae3=? WHERE cnae0=?';break;
			case "crits": consultaSQL = 'UPDATE criterios SET criterios2=?, criterios1=?, criterios3=? WHERE criterios0=?';break;
			case "itms": consultaSQL = 'UPDATE items SET items1=?, items2=?, items3=?, items4=?, items5=?, items6=? WHERE items0=?';break;
		};
	};

	console.log("adup1("+req.body.a+"): consultaSQL: "+consultaSQL);
	console.log("adup1("+req.body.a+"): req.body.b: "+req.body.b);

	connection.query("USE dbodip");

	connection.query(consultaSQL, req.body.b,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				//res.end("Success");
				console.log("adup1("+req.body.a+"): Nuevo: "+req.body.b[0]);
			};
	});

	if (req.body.a == "crits") {
		connection.query("SELECT * FROM criterios ORDER BY criterios0 DESC",
			function (err, results, fields) {
				if (err) {throw err;} 
				else {
					console.log("adup1Col("+req.body.a+"): results[0].criterios0: "+results[0].criterios0);
					adup1Col("localizaciones", results[0].criterios0); 
					adup1Col("cnae", results[0].criterios0);
					adup1Col("solicitudes", results[0].criterios0);
				};
		});
	};
};
exports.adup1 = adup1;

function adup1Col (tabla, idnew) {

	var consultaSQL;

	switch (tabla) {
		case "localizaciones": consultaSQL = 'ALTER TABLE localizaciones ADD localizaciones'+idnew+' INT DEFAULT 0';break;
		case "cnae": consultaSQL = 'ALTER TABLE cnae ADD cnae'+idnew+' FLOAT DEFAULT 0';break;
		case "solicitudes": consultaSQL = 'ALTER TABLE solicitudes ADD solicitudes'+idnew+' INT DEFAULT 0';break;
	};

	connection.query("USE dbodip");

	connection.query(consultaSQL,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				console.log("adup1Col("+tabla+"): Nuevo campo: "+tabla+idnew);
			};
	});
};

function upCrits (req, res) {

	var consultaSQL;
	var consultaSQL2;
	var datosCol = req.body.b;
	var ultdato = datosCol.length - 1;
	var idsel = datosCol[ultdato];

	console.log("upCrits("+req.body.a+"): req.body.b: "+req.body.b);

	switch (req.body.a) {
		case "critNegs": consultaSQL = 'SELECT * FROM cnae';break;
		case "critLocs": consultaSQL = 'SELECT * FROM localizaciones';break;			
	};
		
	connection.query("USE dbodip");

	connection.query(consultaSQL,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				var nombreCols = Object.keys(results[0]);//Obtengo los nombres de la columnas!

				switch (req.body.a) {//Quito los elementos que no son valoraciones de criterios.
					case "critNegs": nombreCols.shift();nombreCols.shift();nombreCols.shift();nombreCols.shift();break;
					case "critLocs": nombreCols.shift();nombreCols.shift();nombreCols.shift();nombreCols.shift();
									nombreCols.shift();nombreCols.shift();nombreCols.shift();nombreCols.shift();break;					
				};

				var textoCols = nombreCols[0] + "=?";//Preparo los nombres de las columnas para la consulta update.
				for(var i=1; i < nombreCols.length; i++) {
					textoCols = textoCols + ", " + nombreCols[i] + "=?";
				};

				switch (req.body.a) {//Quito los elementos que no son valoraciones de criterios.
					case "critNegs": var consultaSQL2 = 'UPDATE cnae SET '+textoCols+' WHERE cnae0=?';break;
					case "critLocs": var consultaSQL2 = 'UPDATE localizaciones SET '+textoCols+' WHERE localizaciones0=?';break;
				};

				connection.query(consultaSQL2, datosCol,
					function (err, results, fields) {
						if (err) {throw err;} 
						else {
							res.end("Success");							
						};
				});
			};
	});
};
exports.upCrits = upCrits;

function upItem (req, res) {

	var consultaSQL;

	var col1 = req.body.b[0] + req.body.b[1];//Nombre del Item
	var col2 = req.body.b[0] + req.body.b[2];//Ubicación del Item
	var ncol = parseInt(req.body.b[3]);
	var col3 = req.body.b[0] + ncol; ncol++;//Localización del Item
	var col4 = req.body.b[0] + ncol; ncol++;//Latitud
	var col5 = req.body.b[0] + ncol; ncol++;//Longitud

	var aDatos = [req.body.c[1],req.body.c[2],req.body.c[3],req.body.c[4],req.body.c[5],req.body.c[0]]

	consultaSQL = 'UPDATE '+req.body.b[0]+' SET '+col1+"=?, "+col2+"=?, "+col3+"=?, "+col4+"=?, "+col5+'=? '+req.body.a+' WHERE '+req.body.b[0]+'0=?';		
	console.log("upItem(): consultaSQL: "+consultaSQL);
	console.log("upItem(): aDatos: "+aDatos);

	connection.query("USE dbodip");

	connection.query(consultaSQL,aDatos,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				res.end("Success");							
			};
	});
};
exports.upItem = upItem;


function del1 (req, res) {

	var consultaSQL;

	switch (req.body.a) {
		case "locs": consultaSQL = 'DELETE FROM localizaciones WHERE localizaciones0=?';break;
		case "negs": consultaSQL = 'DELETE FROM cnae WHERE cnae0=?';break;
		case "crits": consultaSQL = 'DELETE FROM criterios WHERE criterios0=?';break;
	};

	connection.query("USE dbodip");

	connection.query(consultaSQL, req.body.b,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				res.end("Success");
				console.log("del1("+req.body.a+"): id: "+req.body.b);
			};
		});

	del1Col("localizaciones", req.body.b); 
	del1Col("cnae", req.body.b);
	del1Col("solicitudes", req.body.b);
};
exports.del1 = del1;

function del1Col (tabla, iddel) {

	var consultaSQL;

	switch (tabla) {
		case "localizaciones": consultaSQL = 'ALTER TABLE localizaciones DROP COLUMN localizaciones'+iddel;break;
		case "cnae": consultaSQL = 'ALTER TABLE cnae DROP COLUMN cnae'+iddel;break;
		case "solicitudes": consultaSQL = 'ALTER TABLE solicitudes DROP COLUMN solicitudes'+iddel;break;
	};

	connection.query("USE dbodip");

	connection.query(consultaSQL,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				console.log("del1Col("+tabla+"): columna: "+tabla+iddel);
			};
		});
};

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function adsolicitud (req, res) {

	//console.log("adconsulta(): req.body.a: "+req.body.a);

	var idNegocio = req.body.a[0];
	var aDatos = req.body.a;

	connection.query("USE dbodip");

	//PASO 1- REGISTRO LA NUEVA SOLICITUD EN LA TABLA DE SOLICITUDES
	var consultaSQL = 'SELECT * FROM solicitudes';

	connection.query(consultaSQL,
		function (err, results, fields) {
			if (err) {throw err;} else {

				var nombreCols = Object.keys(results[0]);//Obtengo los nombres de la columnas!
				nombreCols.shift();	//Elimino el nombre de la columna 0 ya que es autoincrement.		

				var textoCols = nombreCols[0];//Preparo los nombres de las columnas para la consulta update.
				var interrogantes = "?";
				for(var i=1; i < aDatos.length-1; i++) {//CUIDADO: He descontado 1 al aDatos.length para que funcione, pero no tengo claro porque´.
					textoCols +=  ", " + nombreCols[i];
					interrogantes += ",?";
				};

				console.log("adconsulta(1): textoCols: "+textoCols);
				console.log("adconsulta(1): interrogantes: "+interrogantes);
				console.log("adconsulta(1): aDatos: "+aDatos);
				console.log("adconsulta(1): aDatos.length: "+aDatos.length);

				var consultaSQL2 = 'INSERT INTO solicitudes ('+textoCols+') VALUES ('+interrogantes+')';

				connection.query(consultaSQL2, aDatos,
					function (err, results, fields) {
						if (err) {throw err;} else {
							//res.send("success");
					};
				});

				//numero1.toFixed();
			};
	});

	var aLocsMax = [];

if (aDatos.length>10) {//Lo uso para saber si están haciendo una consulta automática o manual.
console.log("adconsulta(): MANUAL");
//PASO 2A- APLICO EL ARGORITMO DE SELECCIÓN DE LOCALIZACIONES Y LAS ORDENO
	var consultaSQL = 'SELECT * FROM localizaciones';

	//Filtro únicamente las localizaciones en la provincia indicada.
	if (parseInt(aDatos[20])>0) {consultaSQL = 'SELECT * FROM localizaciones WHERE localizaciones1='+aDatos[20];};
			//console.log("adconsulta(): aDatos[20]: "+aDatos[20]);
			//for(var i=0; i < aDatos.length; i++) {console.log("aDatos["+i+"]: "+aDatos[i]);};

	connection.query(consultaSQL,
		function (err, results, fields) {
			if (err) {throw err;} else {

				var aResults = pasarJSONaArray(results);
				//console.log("adconsulta(): aResults: "+aResults);
				aDatos.shift();aDatos.shift();aDatos.shift();aDatos.shift();aDatos.shift();aDatos.shift();

				//2.A- MULTIPLICO CADA LOCALIZACIÓN POR LA SOLICITUD, CRITERIO A CRITERIO.
				//console.log("adconsulta(): MULTIPLICADORES LOC: aDatos: "+aDatos);
				//console.log("adconsulta(): MULTIPLICADORES CRIT: aResults[i]: "+aResults[i]);

				for(var i=0; i < aResults.length; i++) {//PARA CADA LOCALIZACION
					var acum = 0; var acum1 = 0; var acum2 = 0; var acum3 = 0;
					var h = 8;//En la columna 8 de la tabla "localizaciones" comienzan los criterios.
					aResults[i] = eval(aResults[i]);
					//console.log("adconsulta(): aDatos: "+aDatos);
					for(var j=1; j < aDatos.length; j++) {//PARA CADA CRITERIO
						//if (i==1){console.log("adconsulta(): Ponderando... "+acum+"+"+aDatos[j]+"*"+aResults[i][h]);};
						
						var nuevosumando = parseInt(aDatos[j])*parseInt(aResults[i][h]);
						acum += nuevosumando;
						if (j<15) {acum1 += nuevosumando;};
						if (j>14 && j<47) {acum2 += nuevosumando;};
						if (j>46) {acum3 += nuevosumando;};
						h++;
					};
					aLocsMax.push([aResults[i][0],acum,acum1,acum2,acum3]);
					//<< Guardo la relación del id de la localización y su puntuación.
					//console.log("adconsulta(): [aResults["+i+"][0],acum]: "+aResults[i][0]+","+acum);
				};

				console.log("adconsulta(2A): aLocsMax: "+aLocsMax);
				aLocsMax.sort(function(a, b){return b[1]-a[1]});//Ordeno de mayor a menor por el segundo valor de cada pareja.
				//console.log("adconsulta(): aLocsMax(DESC): "+aLocsMax);
				aLocsMax.splice(5);//Dejo sólo los 5 mejores resultados
				//console.log("adconsulta(): aLocsMax(Splice): "+aLocsMax);

				//2.B- MUESTRO LAS LOCALIZACIONES ORDENADAS
				showLocs(aLocsMax,res);
				console.log("adconsulta(2A): EJECUTADA");
			};
	});

//PASO 3A- ACTUALIZO LOS CRITERIOS DEL CNAE CONSULTADO.
	//3A.a - Consultar CNAE y sacar los datos registrados.
	if (idNegocio>0) {

		consultaSQL = 'SELECT * FROM cnae WHERE cnae0='+idNegocio;

		connection.query(consultaSQL,
			function (err, results, fields) {
				if (err) {throw err;} else {
					var nuevosvalores = aDatos;
					//console.log("adconsulta(): nuevosvalores: "+nuevosvalores);
					
					var nAcum = parseInt(results[0].cnae9);
					//console.log("adconsulta(A3): nAcum: "+nAcum);
					//console.log("adconsulta(A3): results[0].cnae2: "+results[0].cnae2);

					var antiguosvalores = pasarJSONaArray(results);
					antiguosvalores = eval(antiguosvalores[0]);
					antiguosvalores.shift();antiguosvalores.shift();antiguosvalores.shift();antiguosvalores.shift();antiguosvalores.shift();
					//console.log("adconsulta(): antiguosvalores: "+antiguosvalores);
					
					var nombreCols = Object.keys(results[0]);//Obtengo los nombres de la columnas!
					nombreCols.shift();nombreCols.shift();nombreCols.shift();nombreCols.shift();nombreCols.shift();
					//console.log("adconsulta(): nombreCols: "+nombreCols);
					
					for(var i=0; i < nuevosvalores.length; i++) {

						//console.log("adconsulta(): antiguosvalores[i]: "+antiguosvalores[i]);
						//console.log("adconsulta(): nuevosvalores[i]: "+nuevosvalores[i]);
						//console.log("adconsulta(): nAcum: "+nAcum);
						//console.log("adconsulta(): nuevosvalores.length: "+nuevosvalores.length);

						var nuevovalor=(parseFloat(antiguosvalores[i])*nAcum)+parseFloat(nuevosvalores[i]);
						nuevovalor = nuevovalor / (nAcum+1);
						nuevosvalores[i] = nuevovalor.toFixed(3);//Dejo 3 decimales.

						//if (antiguosvalores[i]>0) {console.log("adconsulta(): nuevovalor "+i+": "+nuevovalor);};

					};

					nAcum++;
					nuevosvalores.unshift(nAcum);

					var textoCols = "cnae9=?";//Preparo los nombres de las columnas para la consulta update.
					for(var i=0; i < nombreCols.length; i++) {
						textoCols = textoCols + ", " + nombreCols[i] + "=?";
					};

					nuevosvalores.push(idNegocio);//Incluyo el idnegocio al final del vector para la consulta.

					consultaSQL2 = 'UPDATE cnae SET '+textoCols+' WHERE cnae0=?';
					console.log("adconsulta(3A): consultaSQL2: "+consultaSQL2);
					console.log("adconsulta(3A): nuevosvalores: "+nuevosvalores);


					connection.query(consultaSQL2, nuevosvalores,
						function (err, results, fields) {
							if (err) {throw err;} else {
								console.log("adconsulta(3A): EJECUTADA");
							};
					});

				};
		});

	//3.b - Multriplicar cada dato por CNAE9 y sumarle la nueva cantidad
	//3.c - Guardar los nuevos datos en la tabla
	};

} else {
console.log("adconsulta(): AUTOMATICO");
if (idNegocio>0) {
	
//PASO 2B- USANDO VALORACIONES DE CNAE, SELECCIONO LAS LOCALIZACIONES Y LAS ORDENO.
	var consultaSQL = 'SELECT * FROM localizaciones';

	connection.query(consultaSQL,
		function (err, results, fields) {
			if (err) {throw err;} else {

				var aResults = pasarJSONaArray(results);

					var consultaSQL2 = 'SELECT * FROM cnae WHERE cnae0='+idNegocio;

					connection.query(consultaSQL2,
						function (err2, results2, fields2) {
							if (err2) {throw err2;} else {

								var aResults2 = pasarJSONaArray(results2);

								//console.log("adconsulta(): aResults.length "+aResults.length);
								//console.log("adconsulta(): aResults2.length "+aResults2.length);
								aResults2[0] = eval(aResults2[0]);

								//2.A- MULTIPLICO CADA LOCALIZACIÓN POR LA SOLICITUD, CRITERIO A CRITERIO.

								//console.log("adconsulta(Auto): MULTIPLICADORES LOC: aResults: "+aResults);
								//console.log("adconsulta(Auto): MULTIPLICADORES CRIT: aResults2: "+aResults2);

								for(var i=0; i < aResults.length; i++) {//PARA CADA LOCALIZACION
									var acum = 0; var acum1 = 0; var acum2 = 0; var acum3 = 0;
									var h1 = 8;//En la columna 8 de la tabla "localizaciones" comienzan los criterios.
									var h2 = 5;//En la columna 5 de la tabla "cnae" comienzan los criterios.
									var h2T = 5;//FIJO. En la columna 5 de la tabla "cnae" comienzan los criterios.
									aResults[i] = eval(aResults[i]);
									for(var j=1; j < aResults2[0].length-h2T; j++) {//PARA CADA CRITERIO

										//console.log("adconsulta(): aResults2[0].length "+aResults2[0].length);

										//if (i<1){console.log("adconsulta("+j+"/"+aResults2[0].length+"/"+h1+"/"+h2+"/"+h2T+"): Ponderando... "+acum+"+"+aResults[i][h1]+"*"+aResults2[0][h2]);};
										
										var nuevosumando = parseInt(aResults[i][h1])*parseInt(aResults2[0][h2]);
										acum += nuevosumando;
										if (h1<15) {acum1 += nuevosumando;};//Criterios de Clientes
										if (h1>14 && h1<47) {acum2 += nuevosumando;};//Criterios de Ubicación
										if (h1>46) {acum3 += nuevosumando;};//Criterios de Personal
										h1++;h2++;
									};
									acum = acum.toFixed(0); acum1 = acum1.toFixed(0);
									acum2 = acum2.toFixed(0); acum3 = acum3.toFixed(0);

									aLocsMax.push([aResults[i][0],acum,acum1,acum2,acum3]);
									//<< Guardo la relación del id de la localización y su puntuación.
									//console.log("adconsulta(): [aResults["+i+"][0],acum]: "+aResults[i][0]+","+acum);
								};

								console.log("adconsulta(2B): aLocsMax: "+aLocsMax);
								aLocsMax.sort(function(a, b){return b[1]-a[1]});//Ordeno de mayor a menor por el segundo valor de cada pareja.
								//console.log("adconsulta(): aLocsMax(DESC): "+aLocsMax);
								aLocsMax.splice(5);//Dejo sólo los 5 mejores resultados
								//console.log("adconsulta(): aLocsMax(Splice): "+aLocsMax);

								//2.B- MUESTRO LAS LOCALIZACIONES ORDENADAS
								showLocs(aLocsMax,res);

				};});//Primera consulta
			};});//Segunda consulta
};};
};
exports.adsolicitud = adsolicitud;

function showLocs (matrizData, res) {

	var consultaSQL;
	var resultadoHTML = "";
	var losresultados = [];
	var j=0;
	var puntuaciones = [[],[],[],[]];//
	//console.log("showLocs(): matrizData: "+matrizData)

	for(var i=0; i < matrizData.length; i++) {

		consultaSQL = 'SELECT localizaciones0, (SELECT loc1.localizaciones3 FROM localizaciones as loc1 WHERE loc1.localizaciones0=loc.localizaciones1) as prov, (SELECT loc2.localizaciones3 FROM localizaciones as loc2 WHERE loc2.localizaciones0=loc.localizaciones2) as munic, localizaciones3, localizaciones4, localizaciones5, localizaciones6 FROM localizaciones as loc WHERE localizaciones0='+matrizData[i][0];
		
		puntuaciones[0].push(parseInt(matrizData[i][1])); 
		puntuaciones[1].push(parseInt(matrizData[i][2]));
		puntuaciones[2].push(parseInt(matrizData[i][3])); 
		puntuaciones[3].push(parseInt(matrizData[i][4]));
		
		connection.query(consultaSQL,
			function (err, results, fields) {
				if (err) {throw err;} else {

					//resultadoHTML = '<div class="row"><!-- Map Column --><div class="col-md-8"><!-- Embedded Google Map --><iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=42.56619856937041,-0.5608391761779785&amp;spn=56.506174,79.013672&amp;t=m&amp;z=16&amp;output=embed"></iframe></div><!-- Contact Details Column --><div class="col-md-4"><h3>Localización</h3><p>Llanos de la Victoria<br>Jaca (Huesca)<br></p><ul class="list-group"><li class="list-group-item"><span class="badge">14</span><i class="fa fa-bar-chart"></i> Valoración general</li><li class="list-group-item"><span class="badge">8</span><i class="fa fa-bullseye"></i> Competencia</li><li class="list-group-item"><span class="badge">2</span><i class="fa fa-users"></i> Público objetivo</li></ul><!-- http://fortawesome.github.io/Font-Awesome/icons/ --></div></div>';
					//resultadoHTML = results[0].localizaciones0;
					if (results[0].prov != null) {var laprovincia = results[0].prov} else {var laprovincia = "-";};
					if (results[0].munic != null) {var elmunicipio = results[0].munic} else {var elmunicipio = "-";};
					losresultados += "['"+results[0].localizaciones0+"',"+puntuaciones[0][j]+",'"+results[0].localizaciones3+"','"+results[0].localizaciones4+"','"+results[0].localizaciones5+"','"+results[0].localizaciones6+"',"+puntuaciones[1][j]+","+puntuaciones[2][j]+","+puntuaciones[3][j]+",'"+elmunicipio+"','"+laprovincia+"'],";
					console.log("showLocs(): results[0].localizaciones0: "+results[0].localizaciones0+", puntuaciones[0][j]: "+puntuaciones[0][j]);
					//losresultados.push(resultadoHTML);
					j++;
					//losresultados += losresultados+"}";
					//var losresultados = "{'resultado1':'"+matrizData[0][1]+"','resultado2':'"+matrizData[1][1]+"','resultado3':'que','resultado4':'hace','resultado5':'pue',}";//Completo el string.
					//var resultsJSON = eval("["+losresultados+"]");//Convierto el string en un JSON.
					//console.log("showLocs(): j: "+j);
					if (j == 5) {
						console.log("showLocs(): resultados: "+"[{'resultados':["+losresultados+"]}]");
						var resultsJSON = eval("[{'resultados':["+losresultados+"]}]");//Convierto el string en un JSON.
						console.log("showLocs(): resultsJSON(): "+resultsJSON);
						res.json(200, resultsJSON);
					};
				}; 
		});
	};
};

function dTotales (req, res) {

	connection.query("USE dbodip");

	var stringTotales = "";

	connection.query('SELECT COUNT(*) as total FROM localizaciones',
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				//console.log("dTotales(): results[0].total: "+results[0].total);
				stringTotales+=results[0].total;
				
	connection.query('SELECT COUNT(*) as total FROM criterios',
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				//console.log("dTotales(): results[0].total: "+results[0].total);
				stringTotales+=","+results[0].total;

	connection.query('SELECT COUNT(*) as total FROM cnae',
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				//console.log("dTotales(): results[0].total: "+results[0].total);
				stringTotales+=","+results[0].total;

	connection.query('SELECT COUNT(*) as total FROM items',
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				//console.log("dTotales(): results[0].total: "+results[0].total);
				stringTotales+=","+results[0].total;

				//console.log("dTotales(): stringTotales: "+"[{'totales':["+stringTotales+"]}]");
				var resultsJSON = eval("[{'totales':["+stringTotales+"]}]");//Convierto el string en un JSON.
				console.log("dTotales(): resultsJSON(): "+resultsJSON);
				res.json(200, resultsJSON);
			};
	});
			};
	});
			};
	});
			};
	});
};
exports.dTotales = dTotales;


function dataCharts (req, res) {
//<<Consulta de datos de cualquier TABLA {a} y devuelve JSON: [{c0:"valor1", c1:"valor2",..},{...},...]
	var consultaSQL;
	//console.log("data1: req.body.a: " + req.body.a);

	switch (req.body.chart) {
		case 1: consultaSQL = "SELECT solicitudes5 as dia, COUNT(*) as valor FROM solicitudes GROUP BY solicitudes5 ORDER BY solicitudes5 DESC LIMIT 10";break;
		case 2: consultaSQL = "SELECT solicitudes2 as label, COUNT(*) as value FROM solicitudes GROUP BY solicitudes2";break;
		case 3: consultaSQL = "SELECT solicitudes3 as label, COUNT(*) as value FROM solicitudes GROUP BY solicitudes3";break;
		case 4: consultaSQL = "SELECT solicitudes4 as label, COUNT(*) as value FROM solicitudes GROUP BY solicitudes4";break;
		case 5: consultaSQL = "SELECT solicitudes1, (SELECT cnae2 FROM cnae WHERE cnae0=solicitudes1) as negocio, COUNT(*) as valor FROM solicitudes WHERE solicitudes1 <> 0 GROUP BY solicitudes1 ORDER BY valor DESC LIMIT 10";break;
	};

	connection.query("USE dbodip");

	connection.query(consultaSQL,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {

				if (results.length>0) {

					for (i=0; i<results.length; i++){
						switch (req.body.chart) {
							case 2: switch (results[i].label) {
										case 1: results[i].label = "Hombre";break;
										case 2: results[i].label = "Mujer";break;
										case 0: results[i].label = "Sin definir";break;
									};break;
							case 3: switch (results[i].label) {
										case 1: results[i].label = "Menos de 25 años";break;
										case 2: results[i].label = "De 25 a 35 años";break;
										case 3: results[i].label = "De 35 a 45 años";break;
										case 4: results[i].label = "Más de 35  años";break;
										case 0: results[i].label = "Sin definir";break;
									};break;
							case 4: switch (results[i].label) {
										case 1: results[i].label = "Autoempleo";break;
										case 2: results[i].label = "Necesidad económica";break;
										case 3: results[i].label = "Emprendedor";break;
										case 4: results[i].label = "Otras";break;
										case 0: results[i].label = "Sin definir";break;
									};break;
							};

					};

					res.contentType('json');
					res.send(results);
					//console.log("data1: Devuelve: " + results);
					console.log("dataCharts: Devuelto.");

				} else {
					console.log("dataCharts: 0 resultados");
					res.set('Content-Type', 'text/plain');
					res.send('nosuccess');	
				};
			};
		});
};
exports.dataCharts = dataCharts;


function adcomentario (req, res) {

	var consultaSQL = 'INSERT INTO comentarios (comentarios1, comentarios2) VALUES (?,?)';

	connection.query("USE dbodip");

	connection.query(consultaSQL,req.body.a,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				console.log("adcomentario(): Adjuntado el comentario.");
				res.end("success");
			};
		});
};
exports.adcomentario = adcomentario;


function dataResp (req, res) {
//<<Consulta de datos de cualquier TABLA {a} y devuelve JSON: [{c0:"valor1", c1:"valor2",..},{...},...]

	//console.log("dataResp(): req.body.idlocsel: " + req.body.idlocsel);

	var consultaSQL = "SELECT * FROM datagente WHERE datagente1="+req.body.idlocsel;

	connection.query("USE dbodip");

	connection.query(consultaSQL,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {

				if (results.length>0) {

					var stringPoblacionales = "'"+results[0].datagente2+"','"+results[0].datagente13+"','"+results[0].datagente3+"','"+results[0].datagente4+"','"+
					results[0].datagente5+"','"+results[0].datagente6+"','"+results[0].datagente7+"','"+results[0].datagente8+"','"+
					results[0].datagente9+"','"+results[0].datagente10+"','"+results[0].datagente11+"','"+results[0].datagente12+"'";

					console.log("dataResp(): stringPoblacionales: " + stringPoblacionales);

					var espanoles = results[0].datagente13 - results[0].datagente24;

					var stringGraficos = "[{label:'Hombres', value:"+results[0].datagente14+
					"},{label:'Mujeres', value:"+results[0].datagente15+
					"}],[{label:'De 0 a 4 años', value:"+results[0].datagente16+
					"},{label:'De 5 a 14 años', value:"+results[0].datagente17+
					"},{label:'De 15 a 19 años', value:"+results[0].datagente18+
					"},{label:'De 20 a 29 años', value:"+results[0].datagente19+
					"},{label:'De 30 a 39 años', value:"+results[0].datagente20+
					"},{label:'De 40 a 49 años', value:"+results[0].datagente21+
					"},{label:'De 50 a 64 años', value:"+results[0].datagente22+
					"},{label:'Mayores 65 años', value:"+results[0].datagente23+
					"}],[{label:'Extranjeros', value:"+results[0].datagente24+
					"},{label:'Españoles', value:"+espanoles+"}]";

					console.log("dataResp(): stringGraficos: " + stringGraficos);

					var consultaSQL2 = "SELECT * FROM items WHERE items3="+req.body.idlocsel;

					connection.query(consultaSQL2,
						function (err, results2, fields) {
							if (err) {throw err;} 
							else {
								if (results2.length>0) {

									var stringItems = "";

									for(var i=0; i < results2.length; i++) {
										stringItems += "<li>"+results2[i].items1+"</li>";
									};
								} else {var stringItems = "<p>No hay nada destacable</p>";};

								console.log("dataResp(): stringItems: " + stringItems);

								var resultsJSON = eval("[{'pobl':["+stringPoblacionales+"]},{'graf':["+stringGraficos+"]},{'itms':'"+stringItems+"'}]");//Convierto el string en un JSON.
								console.log("dataResp(): resultsJSON(): "+resultsJSON);
								res.json(200, resultsJSON);
								console.log("dataResp(): Devuelto.");
							
							};
						});
				} else {
					console.log("dataResp(): 0 resultados");
					res.set('Content-Type', 'text/plain');
					res.send('nosuccess');	
				};
			};
		});
};
exports.dataResp = dataResp;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX





function DTLJ (bd, datos, res) {
	//<>Left Join

	var tabla=datos.tabla1;
	switch (tabla) {
		case "pup": tabla="per"; break;
		case "cuc": tabla="cur"; break;
	};

	connection.query("USE "+bd);
	console.log(bd+" DTLJ() "+"Select * From " + tabla + " LEFT JOIN " + datos.tabla2 + " ON " + 
		tabla + "." + datos.col1 + "=" + datos.tabla2 + "." + datos.col2 + 
		" " + datos.filtro);

	connection.query("SELECT * FROM " + 
		tabla + " LEFT JOIN " + datos.tabla2 + " ON " + 
		tabla + "." + datos.col1 + "=" + datos.tabla2 + "." + datos.col2 + 
		" " + datos.filtro,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {

				if (results.length>0) {

					switch (datos.tabla1) {
			/*P3*/		case "rqp": 
	    					for(var i=0; i < results.length; i++) {
	    						results[i].rqp1 = results[i].req1;//Descripción del requisito
	    						results[i].rqp2 = results[i].req4;//Estado
	    						results[i].rqp4 = results[i].req0;// Id del requisito en req
	    						// if (results[i].rqp9) {//compruebo que hay link a archivo antes de dar formato <a>
				    			// 	var nuevoid = "mLb4-"+results[i].req0;//Creo el identificador del enlace al archivo. Con "mL"+el id.
				    			// 	var subfilename = results[i].rqp3.substring(0,60);
				    			// 	results[i].rqp3 = "<a id='"+nuevoid+"' class='doc' href='"+results[i].req9+"' target='_blank'>"+subfilename+"</a>";
				    			// } else {results[i].rqp3 = ""; results[i].req9 = ""};
				    			results[i].rqp6 = fchSQLaWEB(results[i].rqp6);//Cambio el formato de fecha para que se vea bien en la tabla
				    			results[i].rqp7 = fchSQLaWEB(results[i].rqp7);
				    			if (results[i].rqp9) {//compruebo que hay link a archivo antes de dar formato <a>
				    				var nuevoid = "mLb3-"+results[i].rqp0;//Creo el identificador del enlace al archivo. Con "mL"+el id.
				    				var minifilename = results[i].rqp8.substring(0,6);
				    				var subfilename = results[i].rqp8.substring(0,60);
				    				results[i].rqp8 = "<a id='"+nuevoid+"' class='doc' href='"+results[i].rqp9+"' target='_blank'>"+subfilename+"</a>";
				    				results[i].rqp9 = "<a id='"+nuevoid+"' class='doc' href='"+results[i].rqp9+"' target='_blank'>"+minifilename+"...</a>";
				    			} else {results[i].rqp8 = ""; results[i].rqp9 = ""};
				    		}; break;
			/*P4*/		case "cup": 
	    					for(var i=0; i < results.length; i++) {
	    						results[i].cup1 = results[i].per3;
	    						results[i].cup2 = results[i].per4;
	    						results[i].cup4 = fchSQLaWEB(results[i].cup4);
	    						if (results[i].cup3) {results[i].cup3 = results[i].cup3} else {results[i].cup3 = ""};//Evita que salgan "null" en las casillas de texto del formulario.
	    						if (results[i].cup7) {results[i].cup7 = results[i].cup7} else {results[i].cup7 = ""};//Evita que salgan "null" en las casillas de texto del formulario.
				    			if (results[i].cup6) {//compruebo que hay link a archivo antes de dar formato <a>
				    				var nuevoid = "mLa1-"+results[i].cup0;//Creo el identificador del enlace al archivo. Con "mL"+el id.
				    				var minifilename = results[i].cup5.substring(0,6);
				    				var subfilename = results[i].cup5.substring(0,60);
				    				results[i].cup5 = "<a id='"+nuevoid+"' class='doc' href='"+results[i].cup6+"' target='_blank'>"+subfilename+"</a>";
				    				results[i].cup6 = "<a id='"+nuevoid+"' class='doc' href='"+results[i].cup6+"' target='_blank'>"+minifilename+"...</a>";
				    			} else {results[i].cup5 = ""; results[i].cup6 = ""};
				    		}; break;
						case "per" || "pup": 
	    					for(var i=0; i < results.length; i++) {
				    			results[i].per8 = fchSQLaWEB(results[i].per8);//Cambio el formato de fecha para que se vea bien en la tabla
				    			results[i].per9 = fchSQLaWEB(results[i].per9);
				    			results[i].per10 = fchSQLaWEB(results[i].per10);
				    			results[i].pe217 = fchSQLaWEB(results[i].pe217);
				    			if (results[i].pe210) {//compruebo que hay link a archivo antes de dar formato <a>
				    				var nuevoid = "mLb1-"+results[i].per0;//Creo el identificador del enlace al archivo. Con "mL"+el id.
				    				var subfilename = results[i].pe29.substring(0,60);
				    				results[i].pe29 = "<a id='"+nuevoid+"' class='doc' href='"+results[i].pe210+"' target='_blank'>"+subfilename+"</a>";
				    			} else {results[i].pe29 = ""; results[i].pe210 = ""};
				    		}; break;
						case "cuc": 
	    					for(var i=0; i < results.length; i++) {
				    			results[i].cur3 = results[i].cur6;//Pongo el estado del curso en tercera posición de la tabla.
				    			results[i].cur2 = fchSQLaWEB(results[i].cur4);
				    			if (results[i].cup6) {//compruebo que hay link a archivo antes de dar formato <a>
				    				var nuevoid = "mLb1-"+results[i].cup0;//Creo el identificador del enlace al archivo. Con "mL"+el id.
				    				var minifilename = results[i].cup5.substring(0,6);
				    				results[i].cur4 = "<a id='"+nuevoid+"' class='doc' href='"+results[i].cup6+"' target='_blank'>"+minifilename+"...</a>";
				    			} else {results[i].cur4 = ""; results[i].cup6 = ""};
				    		}; break;
			/*P7*/    	case "mrv": 
	    					for(var i=0; i < results.length; i++) {
	    						results[i].mrv1 = results[i].man3;//Adelanto la descripción del MAN para que aparezca en la tabla
	    						results[i].mrv6 = fchSQLaWEB(results[i].mrv6);
	    						results[i].mrv7 = fchSQLaWEB(results[i].mrv7);
				    			if (results[i].mrv9) {//compruebo que hay link a archivo antes de dar formato <a>
				    				var nuevoid = "mLb2-"+results[i].mrv0;//Creo el identificador del enlace al archivo. Con "mL"+el id.
				    				var subfilename = results[i].mrv8.substring(0,60);
				    				results[i].mrv8 = "<a id='"+nuevoid+"' class='doc' href='"+results[i].mrv9+"' target='_blank'>"+subfilename+"</a>";
				    			} else {results[i].mrv8 = ""; results[i].mrv9 = ""};
				    		}; break;
			/*P10*/    	case "rec": 
	    					for(var i=0; i < results.length; i++) {
	    						results[i].rec4 = fchSQLaWEB(results[i].rec4);
	    						results[i].rec6 = fchSQLaWEB(results[i].rec6);
				    			if (results[i].rec12) {//compruebo que hay link a archivo antes de dar formato <a>
				    				var nuevoid = "mLa1-"+results[i].rec0;//Creo el identificador del enlace al archivo. Con "mL"+el id.
				    				var subfilename = results[i].rec11.substring(0,60);
				    				results[i].rec11 = "<a id='"+nuevoid+"' class='doc' href='"+results[i].rec12+"' target='_blank'>"+subfilename+"</a>";
				    			} else {results[i].rec11 = ""; results[i].rec12 = ""};
				    		}; break;
				    	case "enc": 
	    					for(var i=0; i < results.length; i++) {
	    						results[i].enc1 = results[i].cli1;//Adelanto el nombre del cliente para sacarlo en la tabla.
	    						results[i].enc5 = fchSQLaWEB(results[i].enc5);
	    						results[i].enc6 = fchSQLaWEB(results[i].enc6);
				    			if (results[i].enc31) {//compruebo que hay link a archivo antes de dar formato <a>
				    				var nuevoid = "mLb2-"+results[i].enc0;//Creo el identificador del enlace al archivo. Con "mL"+el id.
				    				var subfilename = results[i].enc30.substring(0,60);
				    				results[i].enc30 = "<a id='"+nuevoid+"' class='doc' href='"+results[i].enc31+"' target='_blank'>"+subfilename+"</a>";
				    			} else {results[i].enc30 = ""; results[i].enc31 = ""};
				    		}; break;


				    };

					var losdatos = pasarJSONaArray(results);//Paso el array de JSONs a una matriz (array de arrays).
					var losdatos2= "{'data':["+losdatos+"]}";//Completo el string.
					var resultsJSON = eval("("+losdatos2+")");//Convierto el string en un JSON.
					
					res.json(200, resultsJSON);
						//console.log(bd+" DTLJ() Devuelve: " + losdatos);
						console.log(bd+" DTLJ() Devuelto.");

				} else {
					console.log(bd+" DTLJ() 0 resultados");
					res.set('Content-Type', 'text/plain');
					res.send('nosuccess');	
				};
			};
		});
};

function adupDT (req, res){
	//<<Recibe JSON(a,b[]) donde b[0] es idsel o 0 si es nuevo.
	//<<Recibe JSON(a,b[],c[]) donde b[0] y c[0] es idsel o 0 si es nuevo.

	var estado;
	var tabla = req.body.a;
	var newdatos=req.body.b;


	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);
	//console.log(bd+" adupDT() "+"tabla " + tabla + ", newdatos " + newdatos);

	switch (tabla){
/*D*/	case "doc": newdatos[4]= fchWEBaSQL(newdatos[4]);break;
 		case "reg": newdatos[5]= fchWEBaSQL(newdatos[5]);break;
/*F*/	case "ncs": newdatos[3]= fchWEBaSQL(newdatos[3]);newdatos[4]= fchWEBaSQL(newdatos[4]);break;		
/*P1*/	case "cit": newdatos[2]= fchWEBaSQL(newdatos[2]);newdatos[3]= fchWEBaSQL(newdatos[3]);break;
/*P2*/	case "acc": newdatos[8]= fchWEBaSQL(newdatos[8]);newdatos[9]= fchWEBaSQL(newdatos[9]);newdatos[11]= fchWEBaSQL(newdatos[11]);break;
		case "rie": newdatos[3]= fchWEBaSQL(newdatos[3]);break;		
/*P3*/	case "req": newdatos[3]= fchWEBaSQL(newdatos[3]);break;
		case "cli": newdatos[6]= fchWEBaSQL(newdatos[6]);break;
		case "prd": newdatos[5]= fchWEBaSQL(newdatos[5]); newdatos[6]= fchWEBaSQL(newdatos[6]);break;
		case "rqp": newdatos[6]= fchWEBaSQL(newdatos[6]); newdatos[7]= fchWEBaSQL(newdatos[7]);break;
/*P4*/	case "cur": newdatos[4]= fchWEBaSQL(newdatos[4]); newdatos[5]= fchWEBaSQL(newdatos[5]); newdatos[14]= fchWEBaSQL(newdatos[14]);break;
		case "frm": newdatos[9]= fchWEBaSQL(newdatos[9]);break;
		case "cup": newdatos[4]= fchWEBaSQL(newdatos[4]);break;
		case "per": newdatos[0][8]= fchWEBaSQL(newdatos[0][8]);newdatos[0][9]= fchWEBaSQL(newdatos[0][9]);
					newdatos[0][10]= fchWEBaSQL(newdatos[0][10]); newdatos[1][17]= fchWEBaSQL(newdatos[1][17]);
					newdatos[0][3]=newdatos[0][2]+", "+newdatos[0][1]; break;//apellidos, nombre
		case "pue": newdatos[5]= fchWEBaSQL(newdatos[5]);break;
		case "pup": tabla = "per";break;
/*P5*/	case "equ": newdatos[10]= fchWEBaSQL(newdatos[10]);break;
		case "cal": newdatos[3]= fchWEBaSQL(newdatos[3]);newdatos[4]= fchWEBaSQL(newdatos[4]);break;
		case "eqc": newdatos[6]= fchWEBaSQL(newdatos[6]);newdatos[7]= fchWEBaSQL(newdatos[7]);break;
/*P6*/	case "dis": newdatos[2]= fchWEBaSQL(newdatos[2]);newdatos[3]= fchWEBaSQL(newdatos[3]);break;
		case "dir": newdatos[3]= fchWEBaSQL(newdatos[3]);newdatos[4]= fchWEBaSQL(newdatos[4]);break;
/*P7*/	case "ctl": newdatos[3]= fchWEBaSQL(newdatos[3]);break;
		case "maq": newdatos[8]= fchWEBaSQL(newdatos[8]);newdatos[9]= fchWEBaSQL(newdatos[9]);break;
		case "mrv": newdatos[6]= fchWEBaSQL(newdatos[6]);newdatos[7]= fchWEBaSQL(newdatos[7]);break;
/*P8*/	case "prv": newdatos[6]= fchWEBaSQL(newdatos[6]);newdatos[16]= fchWEBaSQL(newdatos[16]);break;
		case "ncp": newdatos[4]= fchWEBaSQL(newdatos[4]);newdatos[5]= fchWEBaSQL(newdatos[5]);break;
		case "pre": newdatos[3]= fchWEBaSQL(newdatos[3]);break;
/*P9*/	case "acp": newdatos[5]= fchWEBaSQL(newdatos[5]);
					newdatos[8]= fchWEBaSQL(newdatos[8]);newdatos[9]= fchWEBaSQL(newdatos[9]);
					newdatos[14]= fchWEBaSQL(newdatos[14]);newdatos[15]= fchWEBaSQL(newdatos[15]);break;
		case "nca": var tablaNCA = newdatos[0].substring(0,2);//Identificador de proceso/origen
					newdatos[0] = parseInt(newdatos[0].substring(3));//Sólo dejo el Id del elemento. Elimino la estructura: 12-1
					if (parseInt(tablaNCA)<11) {//No conformidad de un proceso cualquiera
						newdatos[3]= fchWEBaSQL(newdatos[3]);newdatos[4]= fchWEBaSQL(newdatos[4]);
						tabla = "ncs";};
					break;
		case "aud": newdatos[4]= fchWEBaSQL(newdatos[4]);newdatos[5]= fchWEBaSQL(newdatos[5]);break;
		case "anc": newdatos[3]= fchWEBaSQL(newdatos[3]);newdatos[4]= fchWEBaSQL(newdatos[4]);
					tabla = "ncs";newdatos[5]= "Auditoria "+newdatos[5];break;

/*P10*/	case "rec": newdatos[4]= fchWEBaSQL(newdatos[4]);newdatos[6]= fchWEBaSQL(newdatos[6]);break;
		case "est": newdatos[3]= fchWEBaSQL(newdatos[3]);newdatos[4]= fchWEBaSQL(newdatos[4]);break;
		case "enc": newdatos[5]= fchWEBaSQL(newdatos[5]); newdatos[6]= fchWEBaSQL(newdatos[6]); 
					newdatos[7]= mediaENC(newdatos);break;
		
	};

	ADUP(bd, {tabla: tabla, datos: newdatos}, res);
};
exports.adupDT = adupDT;

function ADUP (bd, adatos, res) {//Recibe JSON(a,b[]) donde b[0] es idsel o 0 si es nuevo.

	var campos;//String que contiene el nombre de los campos.
	var interrogantes = "?";
	var tabla=adatos.tabla;//console.log("tabla: " + tabla);

	// switch (tabla){
	// 	case "per": accion = adatos.datos[0][0];
	// 				adatos.datos[0].shift();
	// 				aData = adatos.datos[0]; var aData2 = adatos.datos[1];
	// 				break;
	// 	default: 	var accion = adatos.datos[0];//console.log("accion: " + accion);//Valdrá 0 si es nuevo, o idSel si es un update.
	// 				adatos.datos.shift();//Elimino el valor de la acción, y dejo sólo los datos a incluir en la BD.
	// 				var aData = adatos.datos;//console.log("aData[0]: " + aData[0]);
	// };
	if (tabla!='per') {
		var accion = adatos.datos[0];//console.log("accion: " + accion);//Valdrá 0 si es nuevo, o idSel si es un update.
		adatos.datos.shift();//Elimino el valor de la acción, y dejo sólo los datos a incluir en la BD.
		var aData = adatos.datos;//console.log("aData[0]: " + aData[0]);
	}else{
		accion = adatos.datos[0][0];
		adatos.datos[0].shift();
		aData = adatos.datos[0]; var aData2 = adatos.datos[1]; 
		//console.log("aData: "+aData);console.log("aData2: "+aData2);
	};
	
	//CEX---------------------------
	var idsel;//Id del nuevo registro creado.
	var idtraza; //CEX: Codigo de trazabilidad en el calendario/objetivos.
	//------------------------------
	//console.log("aData: " + [aData]);	
	//console.log("adupFila:idselect: " + req.body.idselect);

	connection.query("USE "+bd);

//Insertar fila..........................................................................

if (accion == 0) {

	var campos = tabla+"1";

	for (i=2; i<(aData.length+1); i++){
		campos += ", "+ tabla + i;
		interrogantes += ", ?";
	};

	console.log(bd+' ADUP(0): Insert Into '+tabla+' -> '+aData); 

	connection.query('INSERT INTO '+tabla+' ('+campos+') VALUES ('+interrogantes+')', 
		aData,
		function() {

			connection.query('SELECT * FROM '+tabla+' ORDER BY '+tabla+'0 DESC',
				function selectCb(err, results, fields) {
					if (err) {throw err;} 
					else {
						//console.log("adupFila: results.length: " + results.length);
						if (results.length>0) {
						
						//CEX ADUP---------------------------
						switch (tabla){
							case "cit": idsel=results[0].cit0;break;
							case "doc": idsel=results[0].doc0; idtraza=''+tabla+idsel; 
										datosX=[results[0].doc4,results[0].doc4,results[0].doc1,results[0].doc2,results[0].doc3];//FechaAltaDOC,CodigoDoc,NombreDocumento,Revision.
										var timeoutObjectAux = setTimeout(adupX(bd,0,idtraza,datosX),20000); 
										break;
							case "aud": idsel=results[0].aud0; idtraza=''+tabla+idsel;
										datosX=[results[0].aud4,results[0].aud5,results[0].aud1];//FechaInicio, FechaFin, NombreAuditoria.
										var timeoutObjectAux = setTimeout(adupX(bd,0,idtraza,datosX),20000);
										break;
							case "cur": idsel=results[0].cur0; idtraza=''+tabla+idsel; idtraza2='cu2'+idsel;
										datosX=[results[0].cur4,results[0].cur5,results[0].cur1];//FechaInicio, FechaFin, NombreCurso.
										var timeoutObjectAux = setTimeout(adupX(bd,0,idtraza,datosX),20000);
										// datosX=[results[0].cur14,results[0].cur14,results[0].cur1];//FechaIEvalEficacia, NombreCurso.
										// var timeoutObjectAux = setTimeout(adupX(bd,0,idtraza2,datosX),20000);
										break;
							case "equ": idsel=results[0].equ0; idtraza=''+tabla+idsel;
										datosX=[results[0].equ10,results[0].equ1,results[0].equ2,results[0].equ3,results[0].equ4];//FechaProxCalibración, Equipo, Marca, Modelo, S/N.
										var timeoutObjectAux = setTimeout(adupX(bd,0,idtraza,datosX),20000);
										break;
							case "eqc": idsel=results[0].eqc0; idtraza=''+tabla+idsel;
										datosX=[results[0].eqc7,results[0].eqc1,results[0].eqc2,results[0].eqc3,results[0].eqc4];//FechaFinCesion, Equipo, Marca, Modelo, S/N.
										var timeoutObjectAux = setTimeout(adupX(bd,0,idtraza,datosX),20000);
										break;
							case "mrv": idsel=results[0].mrv0; idtraza=''+tabla+idsel;
										datosX=[results[0].mrv7,results[0].mrv2,results[0].mrv1];//FechaProx, idMaquina, idMantenimiento.
										var timeoutObjectAux = setTimeout(adupX(bd,0,idtraza,datosX),20000);
										break;
							case "acp": idsel=results[0].acp0; idtraza=''+tabla+idsel;
										datosX=[results[0].acp9,results[0].acp1,results[0].acp2,results[0].acp3];//FechaProx, idMaquina, idMantenimiento.
										var timeoutObjectAux = setTimeout(adupX(bd,0,idtraza,datosX),20000);
										datosY=[results[0].acp1,results[0].acp4,results[0].acp6,results[0].acp7,results[0].acp8,results[0].acp9];//ACP, FechaInicioACP, FechaFinACP.
										var timeoutObjectAuxY = setTimeout(adupY(bd,0,idtraza,datosY),20000);
										break;
							case "dis": idsel=results[0].dis0; idtraza=''+tabla+idsel;
										datosX=[results[0].dis3,results[0].dis1];//FechaFinDiseño, Diseño.
										var timeoutObjectAuxX = setTimeout(adupX(bd,0,idtraza,datosX),20000);
										datosY=[results[0].dis1,results[0].dis12,results[0].dis6,results[0].dis7,results[0].dis2,results[0].dis3];//Diseño, FechaInicioDiseño, FechaFinDiseño.
										var timeoutObjectAuxY = setTimeout(adupY(bd,0,idtraza,datosY),20000);
										break;
							case "per": aData2[1]=results[0].per0;//Incluyo el Id de la nueva persona creada.
										ADUP(bd, {tabla: 'pe2', datos: aData2}, res);//Creo el registro en la tabla pe2 asociado a esta nueva persona.
										idsel=results[0].per0; idtraza=''+tabla+idsel;
										datosX=[results[0].per9,results[0].per3,results[0].per4];//FechaAlta, Nombre y apellidos, DNI.
										var timeoutObjectAux = setTimeout(adupX(bd,0,idtraza,datosX),20000);
										break;
							case "pre": idsel=results[0].pre0; idtraza=''+tabla+idsel;
										datosX=[results[0].pre3,results[0].pre2];//FechaEvaluación, TituloEvaluación.
										var timeoutObjectAux = setTimeout(adupX(bd,0,idtraza,datosX),20000);
										break;
							case "est": idsel=results[0].est0; idtraza=''+tabla+idsel;
										datosX=[results[0].est4,results[0].est1];//FechaFinEstudiosatisfacción, TituloEstudio.
										var timeoutObjectAux = setTimeout(adupX(bd,0,idtraza,datosX),20000);
										datosY=[results[0].est1,results[0].est5,,results[0].est6,results[0].est3,results[0].est4];//Estudio, FechaInicioEstudio, FechaFinEstudio.
										var timeoutObjectAuxY = setTimeout(adupY(bd,0,idtraza,datosY),20000);
										break;
							case "obj": idsel = results[0].obj0;
										var fechaHoy = new Date();
										fechaHoy = fchDATEaSQL(fechaHoy);
										var aData2 = [0,"Creación del objetivo",idsel,'','','','','',fechaHoy,fechaHoy,'','','gantBlue',''];
										ADUP(bd, {tabla: 'acc', datos: aData2}, res);
										//<<Incluyo una acción únicamente con la fecha de creación del objetivo. Para que este objetivo se vea.
										break;
						};

				//>>Si se llama a adup() dentro de adup(), se ejecuta dos veces el res.send y da problemas.
				if (tabla!='pe2' && tabla!='obj') {
					res.contentType('text/plain');
					res.send('"'+idsel+'"');
					console.log(bd+" ADUP(0) Devuelve: " + idsel);
				};

				} else {
					console.log(bd+" ADUP(0) 0 resultados.");
					res.set('Content-Type', 'text/plain');
					res.send('nosuccess');	
				};
			};
		});
			
	});

} else {

//Modificar fila..........................................................................

var campos = tabla+"1=?";

for (i=2; i<(aData.length+1); i++){
		campos += ", " + tabla + i + "=?";
	//console.log(campos + "->" + aData[i]);
	};

//CEX---------------------------
idsel=accion;
idtraza=''+tabla+idsel;
//------------------------------

aData.push (idsel);//Incluyo el idSel en el array de datos para la consulta.

console.log(bd+' ADUP(1): Update '+tabla+' -> '+aData);

connection.query('UPDATE '+tabla+' SET '+campos+' WHERE '+tabla+'0=?', 
		aData,
		function() {

			//CEX ADUP---------------------------
			switch (tabla){//Tener en cuenta C1 es aData[0]. Es decir, restar 1.
				case "doc": datosX=[aData[3],aData[3],aData[0],aData[1],aData[2]]; var timeoutObjectAux = setTimeout(adupX(bd,1,idtraza,datosX),20000); break;
				case "aud": datosX=[aData[3],aData[4],aData[0]]; var timeoutObjectAux = setTimeout(adupX(bd,1,idtraza,datosX),20000);break;
				case "cur": datosX=[aData[3],aData[4],aData[0]]; 
							var timeoutObjectAux = setTimeout(adupX(bd,1,idtraza,datosX),20000);break;
				case "equ": datosX=[aData[9],aData[0],aData[1],aData[2],aData[3]]; var timeoutObjectAux = setTimeout(adupX(bd,1,idtraza,datosX),20000);break;
				case "eqc": datosX=[aData[6],aData[0],aData[1],aData[2],aData[3]]; var timeoutObjectAux = setTimeout(adupX(bd,1,idtraza,datosX),20000);break;
				case "mrv": datosX=[aData[6],aData[1],aData[0]]; var timeoutObjectAux = setTimeout(adupX(bd,1,idtraza,datosX),20000);break;
				case "acp": datosX=[aData[8],aData[0],aData[1],aData[2]]; 
							var timeoutObjectAux = setTimeout(adupX(bd,1,idtraza,datosX),20000);
							datosY=[aData[0],aData[3],aData[5],aData[6],aData[7],aData[8]]; 
							var timeoutObjectAux = setTimeout(adupY(bd,1,idtraza,datosY),20000);break;
				case "dis": datosX=[aData[2],aData[0]]; 
							var timeoutObjectAux = setTimeout(adupX(bd,1,idtraza,datosX),20000);
							datosY=[aData[0],aData[11],aData[5],aData[6],aData[1],aData[2]]; 
							var timeoutObjectAux = setTimeout(adupY(bd,1,idtraza,datosY),20000);break;
				case "per": ADUP(bd, {tabla: 'pe2', datos: aData2}, res);//CUIDADO!!! Para que esto funcione, el id PE2 en PE20, debe coincidir con PE21 (id del trabajador en PER).
							datosX=[aData[8],aData[2],aData[3]]; 
							var timeoutObjectAux = setTimeout(adupX(bd,1,idtraza,datosX),20000);break;
				case "pre": datosX=[aData[2],aData[1]]; var timeoutObjectAux = setTimeout(adupX(bd,1,idtraza,datosX),20000);break;
				case "est": datosX=[aData[3],aData[0]]; 
							var timeoutObjectAux = setTimeout(adupX(bd,1,idtraza,datosX),20000);
							datosY=[aData[0],aData[4],,aData[5],aData[2],aData[3]]; 
							var timeoutObjectAux = setTimeout(adupY(bd,1,idtraza,datosY),20000);break;
				
			};

		//>>Si se llama a adup() dentro de adup(), se ejecuta dos veces el res.send y da problemas.
		if (tabla!='pe2') {
			res.set('Content-Type', 'text/plain');
			res.send('"'+idsel+'"');
			console.log(bd+" ADUP(1) Devuelve: " + idsel);
		};
	});
};
//FILES: Guardo el Archivo si es que lo hay.
guardarArchivo(bd);
};

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function adACP (req, res){
	//<<Recibe un JSON {a:procesoId, b:[idSel,datos,,,]}

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);

	var proceso;
	if (parseInt(req.body.a)<10) {proceso = "0"+req.body.a} else {proceso = ""+req.body.a};

	var newdatos = req.body.b;
	var idSel = newdatos[0];
	newdatos[16] = proceso+"-"+idSel;//Trazabilidad con el origen.
	newdatos[0] = 0;//Para que incluya una nueva acción ADUP();
	newdatos[4] = "Sin origen definido";
	newdatos[5]= fchWEBaSQL(newdatos[5]);
	newdatos[8]= fchWEBaSQL(newdatos[8]);newdatos[9]= fchWEBaSQL(newdatos[9]);
	newdatos[10] = "Pendiente";
	newdatos[12]= "Pendiente...";newdatos[13]= "Pendiente...";
	
	switch (proceso) {
		case "01": newdatos[4] = "NC del proceso Gestión";break;
		case "02": newdatos[4] = "NC del proceso Planificación";break;
		case "03": newdatos[4] = "NC del proceso Ofertas y pedidos";break;
		case "04": newdatos[4] = "NC del proceso Formación y personas";break;
		case "05": newdatos[4] = "NC del proceso Calibración";break;
		case "06": newdatos[4] = "NC del proceso Diseño";break;
		case "07": newdatos[4] = "NC del proceso Producción";break;
		case "08": newdatos[4] = "NC del proceso Compras";break;
		case "09": newdatos[4] = "NC del proceso Auditorías y ACPs";break;
		case "10": newdatos[4] = "NC del proceso Satisfacción";break;
		case "11": newdatos[4] = "Reclamación de cliente: "+idSel;break;
		case "12": newdatos[4] = "NC del proveedor: "+idSel;break;
		case "13": newdatos[4] = "Control operacional: "+idSel;break;
		case "14": newdatos[4] = "Requisito aplicable: "+idSel;break;
		case "15": newdatos[4] = "Riesgo identificado: "+idSel;break;
		case "21": newdatos[4] = "NC de la Auditoría: "+idSel;break;//Salto a 21 porque hay 3 formularios ACP en esta pagina
	};

	ADUP(bd, {tabla: "acp", datos: newdatos}, res);
}
exports.adACP = adACP;

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function delDT (req, res){

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);
	//console.log(bd+" delDT() atablas: "+atablas+" aids: "+aids+" idsel: "+idsel);

	var id0 = req.body.a + "0";//utilizo este identificador de columna por defecto.
	var atablas=[req.body.a]; var aids=[id0]; var idsel=req.body.b;
	
	// if (req.body.a == "maq"){delN(bd, ["maq","man","mrv"], ["maq0","man3","mrv2"], req.body.b, res);};
	// if (req.body.a == "man"){delN(bd, ["man","mrv"], ["man0","mrv1"], req.body.b, res);};
	// if (req.body.a == "mrv"){delN(bd, ["mrv"], ["mrv0"], req.body.b, res);};

	switch (req.body.a) {
/*P2*/	case "obj": atablas=["obj","acc"]; aids=["obj0","acc2"];break;
		//case "acc": break;//No es necesario
		//case "rie": break;//No es necesario
/*P3*/	case "req": atablas=["req","rqp"]; aids=["req0","rqp3"];break;
		case "cli": atablas=["cli","rqp"]; aids=["cli0","rqp1"];break;
		case "prd": atablas=["prd","rqp"]; aids=["prd0","rqp2"];break;
		//case "rqp": break;//No es necesario
/*P4*/	case "cur": atablas=["cur","cup","cit"]; aids=["cur0","cup1","cit7"];break;
		//case "frm": break;//No es necesario
		//case "cup": break;//No es necesario
		case "per": atablas=["per","pe2","cup","rec","cit"]; aids=["per0","pe21","cup2","rec7","cit7"];break;
		//case "pue": break;//No es necesario
		//case "pup": break;//No es tabla
		//case "cuc": break;//No es tabla
/*P5*/	case "equ": atablas=["equ","cal"]; aids=["equ0","cal1"];break;
		case "cal": atablas=["cal","cit"]; aids=["cal0","cit7"];break;
		case "eqc": atablas=["eqc","cit"]; aids=["eqc0","cit7"];break;
/*P6*/	case "dis": atablas=["dis","dir","cit","obj","acc"]; aids=["dis0","dir1","cit7","obj7","acc13"];break;
		//case "dir": break;//No es necesario
/*P7*/	//case "ctl": break;//No es necesario
		case "maq": atablas=["maq","man","mrv"]; aids=["maq0","man3","mrv2"];break;
		case "man": atablas=["man","mrv"]; aids=["man0","mrv1"];break;
		case "mrv": atablas=["mrv","cit"]; aids=["mrv0","cit7"];break;
/*P8*/	case "prv": atablas=["prv","ncp","pre"]; aids=["prv0","ncp1","pre1"];break;
		//case "ncp": break;//No es necesario
		case "pre": atablas=["pre","cit"]; aids=["pre0","cit7"];break;
/*P9*/	case "acp": atablas=["acp","cit","obj","acc"]; aids=["acp0","cit7","obj7","acc13"];break;
		//case "nca": break;//No es tabla
		case "aud": atablas=["aud","anc","cit"]; aids=["aud0","ncs5","cit7"];break;//ncs5 = "Auditoria 0"
		//case "anc": break;//No es tabla
/*P10*/	case "est": atablas=["est","enc","cit","obj","acc"]; aids=["est0","enc1","cit7","obj7","acc13"];break;
		//case "enc": break;//No es necesario
 		//case "rec": break;//No es necesario
		};

	delN(bd, atablas, aids, idsel, res);
};
exports.delDT = delDT;

var ndel;// número de deletes pendientes de realizar.

function delN (bd, tablas, camposid, idsel, res) {
	//función de apoyo de delDT()

	connection.query("USE "+bd);
	console.log(bd+" delN() tablas: "+tablas+" camposid: "+camposid+" idsel: "+idsel);

	var ndel = tablas.length;
					//console.log("ndel (delN): "+ndel+" tablas (delN): "+tablas);
	var tablaMadre= tablas[0];
					//console.log("tablaMadre (delN): "+tablaMadre);

	for (i=0; i<ndel; i++){

		var tablasel=tablas[i];
		var camposel=camposid[i];
		var idcolsel=idsel;
		if (i>0) {//Evito que modifique el Id si se elimina la cita/objetivo/acción directamente.
			switch (tablasel) {
				case "anc": tablasel="ncs"; idcolsel="Auditoria "+idsel;
				case "cit": idcolsel=""+tablaMadre+idsel;//Creo el idTraza para borrar la cita dependiente
				case "obj": idcolsel=""+tablaMadre+idsel;//Creo el idTraza para borrar el objetivo dependiente
				case "acc": if (i>1) {idcolsel=""+tablaMadre+idsel;};//Creo el idTraza para borrar la accion dependiente
				//<<Necesito este if adicional, porque no quiero que se aplique en el caso de obj que ocupa posición 1.
			};
		};
						//console.log("idcolsel (delN): "+idcolsel);

		connection.query('DELETE FROM '+ tablasel +' WHERE '+camposel+'="'+ idcolsel+'"',
			function () {

				//console.log("delN: "+'DELETE FROM '+ tablasel +' WHERE '+camposel+'="'+ idcolsel+'"');
				
			if (ndel==1) {
				console.log(bd+" delN() Se han eliminado los "+tablas.length+" registros dependientes.");
				res.contentType('text/plain');
				res.json(200, "Hecho");

			}else{
				ndel=ndel-1;
				//console.log(bd+" delN() ndel: "+ ndel);
			};
		});

	};
}

function dataTB (req, res) {
//<<Consulta de datos de cualquier TABLA {a} y devuelve JSON: [{c0:"valor1", c1:"valor2",..},{...},...]

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);

	var condicion = "";

	switch (req.body.a) {
		case "pro": condicion="WHERE pro1='"+req.body.b[0]+"'"; break;
		case "cit": condicion=""; break;
		case "obj": condicion="WHERE obj0='"+req.body.b[0]+"'"; break;
	};

	console.log(bd+" dataTB: "+'Select * From ' + req.body.a + ' ' + condicion);

	connection.query('SELECT * FROM ' + req.body.a + ' ' + condicion,
		function selectCC(err, results, fields) {
			if (err) {throw err;} 
			else {

				if (results.length>0) {

					res.contentType('json');
					res.send(results);
					//console.log(bd+" dataTB: Devuelve: " + results);
					console.log(bd+" dataTB: Devuelto.");

				} else {
					console.log(bd+" dataTB: 0 resultados");
					res.set('Content-Type', 'text/plain');
					res.send('nosuccess');	
				};
			};
		});
};
exports.dataTB = dataTB;


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//ORGANIGRAMA DE PUESTOS

function dataOR (req, res) {

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);
	console.log(bd+" dataOR(): Iniciando... ");

	connection.query('SELECT pue4 c1, GROUP_CONCAT(pue0) c2, GROUP_CONCAT(pue1) c3 FROM pue GROUP BY pue4 ORDER BY pue4 ASC',
		function selectCC(err, results, fields) {
			if (err) {throw err;} 
			else {

				if (results.length>0) {
					if(results[0].c2.length>0){
					//>>Array con los nombres de los puestos hijos
					var a1nivel = results[0].c3.split(",");//Convierte cadena con comas, en array
					//>>Array con los ids de los puestos hijos
					var aid1nivel = results[0].c2.split(",");//Convierte cadena con comas, en array
																			//console.log("aid1nivel: " + aid1nivel);
																			//console.log("aid1nivel.length: " + aid1nivel.length);
					//>>Id del puesto hijo seleccionado
					var id1nivel = aid1nivel[0];
																			//console.log("id1nivel: " + id1nivel);
					var cadenadatos = "";
																			//console.log("cadenadatos: " + cadenadatos);
																			//console.log("results[0].c2: " + results[0].c2);
																			//console.log("results[0].c2[0]: " + results[0].c2[0]);
																			//console.log("a1nivel: " + a1nivel);
																			//console.log("a1nivel[0]: " + a1nivel[0]);
																			//console.log("results[0].c2.length: " + results[0].c2.length);
																			//console.log("results.length: " + results.length);
					for (var a=0; a<aid1nivel.length; a++) {
					cadenadatos = cadenadatos+"<li>"+a1nivel[a];
					//>>Busco si tiene hijos en nivel 2 en los resultados obtenidos de la consulta SQL
					for (var i=1; i<results.length; i++) {
						if (id1nivel == results[i].c1) {
							var aid2nivel = results[i].c2.split(",");
																			//console.log("aid2nivel: " + aid2nivel);
																			//console.log("aid2nivel.length: " + aid2nivel.length);
							if(aid2nivel.length>0){
								cadenadatos = cadenadatos+"<ul>";
								var a2nivel = results[i].c3.split(",");
																			//console.log("a2nivel: " + a2nivel);
																			//console.log("results[i].c2.length: " + results[i].c2.length);
								for (var b=0; b<aid2nivel.length; b++) {
								cadenadatos = cadenadatos+"<li>"+a2nivel[b];
								var id2nivel = aid2nivel[b];
								//>>Busco si tiene hijos en nivel 3											//console.log("id2nivel: " + id2nivel);
								for (var j=1; j<results.length; j++) {
									if (id2nivel == results[j].c1) {
										var aid3nivel = results[j].c2.split(",");
																			//console.log("aid3nivel: " + aid3nivel);
																			//console.log("aid3nivel.length: " + aid3nivel.length);
										if(aid3nivel.length>0){
											cadenadatos = cadenadatos+"<ul>";
											var a3nivel = results[j].c3.split(",");
											
											for (var c=0; c<aid3nivel.length; c++) {
											cadenadatos = cadenadatos+"<li>"+a3nivel[c];
											var id3nivel = aid3nivel[c];
								//>>Busco si tiene hijos en nivel 4											//console.log("id3nivel: " + id3nivel);
								for (var k=1; k<results.length; k++) {
									if (id3nivel == results[k].c1) {
										var aid4nivel = results[k].c2.split(",");
																			//console.log("aid4nivel: " + aid4nivel);
																			//console.log("aid4nivel.length: " + aid4nivel.length);
										if(aid4nivel.length>0){
											cadenadatos = cadenadatos+"<ul>";
											var a4nivel = results[k].c3.split(",");
											
											for (var d=0; d<aid4nivel.length; d++) {
											cadenadatos = cadenadatos+"<li>"+a4nivel[d];
											var id4nivel = aid4nivel[d];
								//>>Busco si tiene hijos en nivel 5											//console.log("id4nivel: " + id4nivel);
								for (var m=1; m<results.length; m++) {
									if (id4nivel == results[m].c1) {
										var aid5nivel = results[m].c2.split(",");
																			//console.log("aid5nivel: " + aid5nivel);
																			//console.log("aid5nivel.length: " + aid5nivel.length);
										if(aid5nivel.length>0){
											cadenadatos = cadenadatos+"<ul>";
											var a5nivel = results[m].c3.split(",");
											
											for (var e=0; e<aid5nivel.length; e++) {
											cadenadatos = cadenadatos+"<li>"+a5nivel[e];
											var id5nivel = aid5nivel[e];
								//>>Busco si tiene hijos en nivel 6											//console.log("id5nivel: " + id5nivel);
								for (var n=1; n<results.length; n++) {
									if (id5nivel == results[n].c1) {
										var aid6nivel = results[n].c2.split(",");
																			//console.log("aid6nivel: " + aid6nivel);
																			//console.log("aid6nivel.length: " + aid6nivel.length);
										if(aid6nivel.length>0){
											cadenadatos = cadenadatos+"<ul>";
											var a6nivel = results[n].c3.split(",");
											
											for (var f=0; f<aid6nivel.length; f++) {
											cadenadatos = cadenadatos+"<li>"+a6nivel[f];
											var id6nivel = aid6nivel[f];
																			//console.log("id6nivel: " + id6nivel);

											cadenadatos = cadenadatos+"</li>";
											
											};
											cadenadatos = cadenadatos+"</ul>";
										};
										cadenadatos = cadenadatos+"</li>";
									};
								};
											cadenadatos = cadenadatos+"</li>";
											
											};
											cadenadatos = cadenadatos+"</ul>";
										};
										cadenadatos = cadenadatos+"</li>";
									};
								};
											cadenadatos = cadenadatos+"</li>";
											
											};
											cadenadatos = cadenadatos+"</ul>";
										};
										cadenadatos = cadenadatos+"</li>";
									};
								};
											cadenadatos = cadenadatos+"</li>";

											};
											cadenadatos = cadenadatos+"</ul>";
										};
										cadenadatos = cadenadatos+"</li>";
									};
								};
								};
								cadenadatos = cadenadatos+"</ul>";
							};
							cadenadatos = cadenadatos+"</li>";
						};
					};
					};
					cadenadatos = cadenadatos+"</ul>";
				};
				cadenadatos = cadenadatos+"</li>";

					var results = {data: cadenadatos};
					res.contentType('json');
					res.send(results);
					//console.log(bd+" dataOR(): Devuelve: " + cadenadatos);
					console.log(bd+" dataOR(): Devuelto.");
					// console.log("Datos enviados: " + results);
					// console.log("Datos enviados: " + results);
					// console.log("results[0].c2: " + results[0].c2);
					// console.log("results[0].c3: " + results[0].c3);
					// console.log("results[0].c2[0]: " + results[0].c2[0]);

				} else {
					console.log(bd+" dataOR(): 0 resultados");
					res.set('Content-Type', 'text/plain');
					res.send('nosuccess');	
				};
			};
		});
};
exports.dataOR = dataOR;

//====================================================================================

var nombretrabajador;

// function adupXper (idsel) {
// 	var trabajador;

// 					//console.log("adupXper: idsel: "+ idsel);

// 	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
//	connection.query("USE "+bd);

// 	connection.query('SELECT * FROM per WHERE per0=?',idsel,
// 				function (err, results, fields) {
// 					trabajador = results[0].per3;
// 					nombretrabajador = results[0].per3;
// 					//console.log("adupXper: trabajador: "+ trabajador);
// 					//console.log("adupXper: nombretrabajador: "+ nombretrabajador);
// 				});
// 	return trabajador;
// };

//var adupX = function(esnuevo,idtraza,datosX) {
function adupX (bd,esnuevo,idtraza,datosX) {

	connection.query("USE "+bd);

	var datosString;
	var tabla = idtraza.substring(0,3);
	//console.log("adupX: tabla: "+tabla);
	//console.log("adupX: nombretrabajador: "+nombretrabajador);
	var datosArray=[];

	//CEX ADUP
	switch (tabla){
		case "doc": datosArray = ["Nuevo documento",datosX[0],datosX[0],"El documento: "+datosX[3]+' ('+datosX[2]+'), en su revisión: '+datosX[4]+'.',"white","#004A94",idtraza];break;
		case "aud": datosArray = ["Auditoria",datosX[0],datosX[1],"Titulo auditoría: "+datosX[2]+'.',"white","#004A94",idtraza];break;
		case "cur": datosArray = ["Curso de formación",datosX[0],datosX[1],"Titulo del curso: "+datosX[2]+'.',"white","#004A94",idtraza];break;
		case "cu2": datosArray = ["Evaluación de eficacia",datosX[0],datosX[1],"Evaluar la eficacia del curso: "+datosX[2]+'.',"white","#004A94",idtraza];break;
		case "per": datosArray = ["Nuevo trabajador",datosX[0],datosX[0],"Trabajador: "+datosX[1]+' ('+datosX[2]+').',"white","#004A94",idtraza];break;
		case "equ": datosArray = ["Calibración equipo",datosX[0],datosX[0],"Calibración del equipo: "+datosX[1]+' ('+datosX[2]+', '+datosX[3]+') con número de serie: '+datosX[4]+'.',"white","#004A94",idtraza];break;
		case "eqc": datosArray = ["Devolución a cliente",datosX[0],datosX[0],"Devolución del equipo: "+datosX[1]+' ('+datosX[2]+', '+datosX[3]+') con número de serie: '+datosX[4]+'.',"white","#004A94",idtraza];break;
		case "mrv": datosArray = ["Revisión de máquina",datosX[0],datosX[0],"A la máquina: "+datosX[1]+' hay que realizarle el mantenimiento: '+datosX[2]+'.',"white","#004A94",idtraza];break;
		case "acp": datosArray = ["Cierre de "+datosX[3],datosX[0],datosX[0],"Pendiente el cierre de la "+datosX[3]+': '+datosX[1]+' ('+datosX[2]+').',"white","#004A94",idtraza];break;
		case "dis": datosArray = ["Fin de Diseño",datosX[0],datosX[0],"fecha fin del Diseño: "+datosX[1]+'.',"white","#004A94",idtraza];break;
		case "pre": datosArray = ["Evaluación de proveedor",datosX[0],datosX[0],'Evaluación planificada del proveedor: '+datosX[1]+'.',"white","#004A94",idtraza];break;
		case "est": datosArray = ["Fin de Estudio de Satisfacción",datosX[0],datosX[0],'Fecha fin del Estudio de Satisfacción: '+datosX[1]+'.',"white","#004A94",idtraza];break;

	};


//Insertar Cita..........................................................................

if (esnuevo == 0) {

	console.log(bd+' adupX(0): Insert Into cit (cit1,cit2,cit3,cit4,cit5,cit6,cit7) VALUES ('+datosString+')');
	
	connection.query('INSERT INTO cit (cit1,cit2,cit3,cit4,cit5,cit6,cit7) VALUES (?,?,?,?,?,?,?)',
		datosArray,
		function() {
			console.log(bd+" adupX(0): Devuelve: idtraza" + idtraza);
			//console.log(bd+" adupX(): Devuelve: datosString: " + datosString);

		});

} else {
//Modificar Cita..........................................................................

console.log(bd+' adupX(1): Update cit Set cit1=?, cit2=?, cit3=?, cit4=?, cit5=?, cit6=? Where cit7=?');

	connection.query('UPDATE cit SET cit1=?, cit2=?, cit3=?, cit4=?, cit5=?, cit6=? WHERE cit7=?', 
		datosArray,
		function() {
			console.log(bd+" adupX(1): Devuelve: idtraza" + idtraza);
			//console.log(bd+" adupX(): Devuelve: datosString: " + datosString);
		});
	};
};

function adupY (bd,esnuevo,idtraza,datosY) {

	connection.query("USE "+bd);

	var tabla = idtraza.substring(0,3);
	var nombreObjetivo; var colorAccion;

	//CEX ADUP
	switch (tabla){
		case "acp": nombreObjetivo = "ACPs"; colorAccion="ganttRed";break;
		case "dis": nombreObjetivo = "Diseños"; colorAccion="ganttRed";break;
		case "est": nombreObjetivo = "Est. Satisf."; colorAccion="ganttRed";break;

	};

//Insertar Objetivo y Accion...............................................................

if (esnuevo == 0) {

	console.log(bd+' adupY(0): Insert Into obj (obj1) Values ('+nombreObjetivo+')');

	connection.query('INSERT INTO obj (obj1, obj7) VALUES (?,?)',
		[nombreObjetivo, idtraza],
		function() {
			connection.query('SELECT obj0 FROM obj ORDER BY obj0 DESC',
				function (err, results, fields){
					
					console.log(bd+" adupY(0): id del nuevo objetivo: " + results[0].obj0);

					connection.query('INSERT INTO acc (acc1, acc2, acc3, acc4, acc5, acc8, acc9, acc12, acc13) VALUES (?,?,?,?,?,?,?,?,?)',
						[datosY[0],results[0].obj0,datosY[1],datosY[2],datosY[3],datosY[4],datosY[5],colorAccion,idtraza],
						function() {
							console.log(bd+" adupY(0): Nueva acción: " + [datosY[0],results[0].obj0,datosY[1],datosY[2],datosY[3],datosY[4],datosY[5],colorAccion,idtraza]);
						});

				});
		});

} else {
//Modificar Acción..........................................................................

	
	console.log(bd+' adupY(1): Update acc Set... '+ [datosY[0],datosY[1],datosY[2],datosY[3],datosY[4],datosY[5],colorAccion,idtraza]);

	connection.query('UPDATE acc SET acc1=?, acc3=?, acc4=?, acc5=?, acc8=?, acc9=?, acc12=? WHERE acc13=?', 
		[datosY[0],datosY[1],datosY[2],datosY[3],datosY[4],datosY[5],colorAccion,idtraza],
		function() {
			console.log(bd+" adupY(1): Actualizada acción.");
		});
	};
};

function inverseCEX (bd, idCita, fchInicio, fchFin){
	//Al actualizar las fechas en el calendario de una cita generada autmáticamente, mediante un drop o un 
	//cambio en el formulario, cambia las fechas en la tabla origen. ACTUALIZACIÓN INVERSA

	connection.query("USE "+bd);

	var tabla, idtraza, idOriginal, consultaSQL, valores=[];

	console.log(bd+' inverseCEX(): Select cit7 From cit Where cit0='+idCita+' AND cit7 is not null');

	connection.query('SELECT cit7 FROM cit WHERE cit0='+idCita+' AND cit7 is not null',
		function (err, results, fields){
			if (results.length>0){//La cita es autogenerada. No se ha introducido manualmente.
						//console.log("inverseCEX: results.length: "+results.length);
				idtraza = results[0].cit7;
						console.log("inverseCEX: idtraza: "+idtraza);
				tabla = idtraza.substring(0,3);
				idOriginal = idtraza.substring(3,20);
				idOriginal = parseInt(idOriginal);
				valores=[fchInicio,idOriginal]; 

				//CEX ADUP---------------------------
				switch (tabla){
					case "doc": consultaSQL='UPDATE doc SET doc4=? WHERE doc0=?';break;
					case "aud": consultaSQL='UPDATE aud SET aud4=?, aud5=? WHERE aud0=?'; 
								valores=[fchInicio,fchFin,idOriginal]; break;
					case "cur": consultaSQL='UPDATE cur SET cur4=?, cur5=? WHERE cur0=?'; 
								valores=[fchInicio,fchFin,idOriginal]; break;
					case "equ": consultaSQL='UPDATE equ SET equ10=? WHERE equ0=?';break;
					case "eqc": consultaSQL='UPDATE eqc SET eqc7=? WHERE eqc0=?';break;
					case "mrv": consultaSQL='UPDATE mrv SET mrv7=? WHERE mrv0=?';break;
					case "acp": consultaSQL='UPDATE acp SET acp9=? WHERE acp0=?';break;
					case "dis": consultaSQL='UPDATE dis SET dis3=? WHERE dis0=?';break;
					case "per": consultaSQL='UPDATE per SET per9=? WHERE per0=?';break;
					case "pre": consultaSQL='UPDATE pre SET pre3=? WHERE pre0=?';break;
					case "est": consultaSQL='UPDATE est SET est4=? WHERE est0=?';break;
				}; 

				connection.query(consultaSQL,valores,
					function() {
						console.log(bd+" inverseCEX(): valores: " + valores);
				});
			};
		});
};


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//INDICADORES Y GRAFICOS

var nchart;// número de graficos cargados.
var cadenaJSON;

function getdataInd (req, res) {

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);

	var idchart = req.body.chart.substring(3, 4);
	var proceso = req.body.chart.substring(0, 3);
	var idsel = req.body.chart.substring(4);
		console.log(bd+" getdataInd() idchart: "+idchart+" idsel: "+idsel);


	switch (idchart) {

        case "0": for (i=1; i<5; i++){nchart=4;dataSRV(bd,proceso,i,res);};break;
		case "1": nchart=1;dataSRV(bd,proceso,idchart,res);break;
        case "2": nchart=1;dataSRV(bd,proceso,idchart,res);break;
        case "3": nchart=1;dataSRV(bd,proceso,idchart,res);break;
        case "4": nchart=1;dataSRV(bd,proceso,idchart,res);break;
        //case "A": for (i=1; i<5; i++){nchart=4;dataCUA(proceso,i,res);};break;
        case "A": nchart=4;dataXTR(bd,proceso,1,0,res);dataXTR(bd,proceso,2,0,res);dataXTR(bd,proceso,10,0,res);dataXTR(bd,proceso,9,0,res);break;//Cuadro de Mando
        case "B": nchart=4;dataXTR(bd,proceso,5,0,res);dataXTR(bd,proceso,6,0,res);dataSRV(bd,proceso,3,res);dataSRV(bd,proceso,4,res);break;//Formación
        case "C": nchart=1;dataXTR(bd,proceso,7,idsel,res);break;//Grafico estudio en satisfaccion
        case "D": nchart=4;dataXTR(bd,proceso,9,0,res);dataXTR(bd,proceso,8,0,res);dataSRV(bd,proceso,3,res);dataSRV(bd,proceso,4,res);break;//Satisfacción
        case "E": nchart=4;dataXTR(bd,proceso,10,0,res);dataXTR(bd,proceso,11,0,res);dataSRV(bd,proceso,3,res);dataSRV(bd,proceso,4,res);break;//ACP
        case "F": nchart=4;dataXTR(bd,proceso,12,0,res);dataXTR(bd,proceso,13,0,res);dataSRV(bd,proceso,3,res);dataSRV(bd,proceso,4,res);break;//Compras
        case "G": nchart=4;dataXTR(bd,proceso,14,0,res);dataSRV(bd,proceso,2,res);dataSRV(bd,proceso,3,res);dataSRV(bd,proceso,4,res);break;//Calibración
   		   
   	};

	cadenaJSON = "";
}
exports.getdataInd = getdataInd;

//GRAFICOS MANUALES......................................................................................

function dataSRV (bd,proceso,idchart,res) {

	connection.query("USE "+bd);

	var condicionsql=""+proceso+idchart;
				//console.log("condicionsql: "+condicionsql);

	//2 Preparación de CONSULTA SQL	
	var consultaSQL = "SELECT * FROM ind WHERE ind1='"+condicionsql+"' ORDER BY ind3";

		console.log(bd+" dataSRV(): Select * From ind Where ind1='"+condicionsql+"' Order By ind3");

	//3 Ejecución de las consultas
	connection.query(consultaSQL, 
		function (err, results, fields) {
			if (err) {throw err;} else {

			// if (results.length>0) {

				var matriz = [[1,1,1,1,1,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null],[null,null,null,null,null,null]];
				//var matriz = [[,,,,,],[,,,,,],[,,,,,],[,,,,,],[,,,,,],[,,,,,],[,,,,,],[,,,,,],[,,,,,],[,,,,,],[,,,,,],[,,,,,]];
					//Chapuza que funciona: Meto un elemento más de los que necesito para tener la comas adecuadas al pasar el útimo dato vacío al JSON y luego en googlecharts.

				var p=0; //Posición en el vector que corresponde al mes.
					
				for(i=0; i<results.length; i++) {

	 				var result1 = results[i];
					var p = parseInt(result1['ind3']);
						// console.log("p: "+p);
						//alert(p);
					 if (result1['ind2'] == "2015") {matriz[p][2]=result1['ind4'];};
					 if (result1['ind2'] == "2014") {matriz[p][1]=result1['ind4'];};
					 if (result1['ind2'] == "2013") {matriz[p][0]=result1['ind4'];};
					 if (result1['ind2'] == "Objetivo") {matriz[p][3]=result1['ind4'];};
					 if (result1['ind2'] == "Limite") {matriz[p][4]=result1['ind4'];};
				};

				var cadenaDatos = "['Mes','2013','2014','2015','Objetivo','Limite']";
				var mes;

				for(i=0; i<12; i++) {

					switch (i) {
    					case 0: mes = "Ene"; break; case 1: mes = "Feb"; break; case 2: mes = "Mar"; break; case 3: mes = "Abr"; break;
    					case 4: mes = "May"; break; case 5: mes = "Jun"; break; case 6: mes = "Jul"; break; case 7: mes = "Ago"; break;
    					case 8: mes = "Sep"; break; case 9: mes = "Oct"; break; case 10: mes = "Nov"; break; case 11: mes = "Dic"; break;
    				};

					cadenaDatos = cadenaDatos + ",['"+mes+"',"+matriz[i]+"]";
				};
					
				//console.log(bd+" dataSRV() cadenaDatos intermedia: "+cadenaDatos);

				cadenaJSON = cadenaJSON+"I"+idchart+":["+cadenaDatos+"]";

				if (nchart==1) {
					cadenaJSON = "[{" + cadenaJSON + "}]";
					res.contentType('json');
					var dataJSON = eval(cadenaJSON);
					res.json(200, dataJSON);
						//console.log(bd+" dataSRV() Devuelve: "+cadenaJSON);
						console.log(bd+" dataSRV() Devuelto.");

				}else{
					nchart=nchart-1;
					//console.log("nchart: "+ nchart);
					cadenaJSON = cadenaJSON + ",";
				};
		};
	});
}

//Modificación de uno de los datos del Indicador.
function addIndicador (req, res) {
 // En REQ recibo: chart, serie, mes, valor

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);

 var intmes = req.body.mes-1; //parseInt(req.body.mes)-1; //intmes = ""+intmes;

 if(req.body.valor==""){
	connection.query("DELETE FROM ind WHERE ind1=? AND ind2=? AND ind3=?", [req.body.chart, req.body.serie, intmes],
		function () {
			console.log(bd+" addIndicador(): Dato borrado por falta de valor.");
			getdataInd (req, res);
		});
 }else{

 var encontrado="false";
 var floatvalor = parseFloat (req.body.valor);
 //console.log(bd+" addIndicador() intmes: "+intmes);

 if (intmes == 12)//Incluir en todos los meses el mismo valor.
	{connection.query("DELETE FROM ind WHERE ind1=? AND ind2=?", [req.body.chart, req.body.serie],
		function () {
			var datosSQL="";
			for (i=0; i<12; i++) {
				datosSQL=datosSQL+"('"+req.body.chart+"','"+req.body.serie+"','"+i+"','"+floatvalor+"')";
				if(i<11){datosSQL=datosSQL+","};
			};
			//console.log("datosSQL: "+datosSQL);
				console.log(bd+' addIndicador(12) INSERT INTO ind... '+datosSQL);
			connection.query('INSERT INTO ind (ind1, ind2, ind3, ind4) VALUES'+datosSQL);
			getdataInd (req, res);
		});
	}
	else //Si no hay que incluir este valor todos los meses
	{
	connection.query('SELECT * FROM ind WHERE ind1=? AND ind2=? AND ind3=?', [req.body.chart, req.body.serie, intmes],
			function (err, results, fields) {

				if(results.length>0){encontrado="true"};	

				if (encontrado == "true")
					{
						console.log(bd+" addIndicador(1) UPDATE ind SET... ", [floatvalor, req.body.chart, req.body.serie, intmes]);
					connection.query("UPDATE ind SET ind4=? WHERE ind1=? AND ind2=? AND ind3=?", [floatvalor, req.body.chart, req.body.serie, intmes],
						function () {getdataInd (req, res);});
					}
					else
					{
						console.log(bd+' addIndicador(0) INSERT INTO ind... '+[req.body.chart, req.body.serie, intmes, floatvalor]);
					connection.query("INSERT INTO ind (ind1, ind2, ind3, ind4) VALUES(?,?,?,?)", [req.body.chart, req.body.serie, intmes, floatvalor],
						function () {getdataInd (req, res);});
					};

				});	
	};

 };
};
exports.addIndicador = addIndicador;

//GRAFICOS AUTOMÁTICOS................................................................................

function dataXTR (bd,proceso,idchart,idsel,res) {

	connection.query("USE "+bd);

	var procId=parseInt(idchart);
	var condicionsql=""+proceso+procId;
	var cadenadatos="";
		console.log(bd+" dataXTR() idsel: "+idsel);

	//2 Preparación de CONSULTA SQL	
	var consultaSQL1;// = "SELECT YEAR(ncs3) c1, SUM(IF (ncs4='', 1, 0)) c2,SUM(IF (ncs4!='', 1, 0)) c3 FROM ncs group by YEAR(ncs3)";
	switch (procId){
		case 1: consultaSQL1 = "SELECT YEAR(ncs3) c1, SUM(IF (ncs4='', 1, 0)) c2,SUM(IF (ncs4!='', 1, 0)) c3 FROM ncs GROUP BY YEAR(ncs3) ORDER BY YEAR(ncs3) DESC LIMIT 5";break;
		case 2: consultaSQL1 = "SELECT ncs11 c1, COUNT(*) c2 FROM ncs WHERE YEAR(ncs3)='2015' GROUP BY ncs11 ORDER BY ncs11 ASC";break;
		//case 3: consultaSQL1 = "SELECT YEAR(rec4) c1, SUM(IF (MONTH(rec4)=1, 1, 0)) c2,SUM(IF (MONTH(rec4)=2, 1, 0)) c3,SUM(IF (MONTH(rec4)=3, 1, 0)) c4,SUM(IF (MONTH(rec4)=4, 1, 0)) c5,SUM(IF (MONTH(rec4)=5, 1, 0)) c6,SUM(IF (MONTH(rec4)=6, 1, 0)) c7,SUM(IF (MONTH(rec4)=7, 1, 0)) c8,SUM(IF (MONTH(rec4)=8, 1, 0)) c9,SUM(IF (MONTH(rec4)=9, 1, 0)) c10,SUM(IF (MONTH(rec4)=10, 1, 0)) c11,SUM(IF (MONTH(rec4)=11, 1, 0)) c12,SUM(IF (MONTH(rec4)=12, 1, 0)) c13 FROM rec GROUP BY YEAR(rec4)";break;
		case 10: consultaSQL1 = "SELECT YEAR(acp5) c1, SUM(IF (acp10='Pendiente', 1, 0)) c2,SUM(IF (acp3='AC', 1, 0)) c3,SUM(IF (acp3='AP', 1, 0)) c4 FROM acp GROUP BY YEAR(acp5) ORDER BY YEAR(acp5) DESC LIMIT 4";break;
		case 9: consultaSQL1 = "SELECT YEAR(rec4) c1, SUM(IF (rec5!='Cerrada', 1, 0)) c2,SUM(IF (rec5='Cerrada', 1, 0)) c3 FROM rec GROUP BY YEAR(rec4) ORDER BY YEAR(rec4) DESC LIMIT 5";break;
		case 5: consultaSQL1 = "SELECT YEAR(cur4) c1, SUM(cur11) c2,SUM(cur12) c3,SUM(cur13) c4,SUM(1) c5 FROM cur GROUP BY YEAR(cur4) ORDER BY YEAR(cur4) DESC LIMIT 4";break;
		case 6: consultaSQL1 = "SELECT YEAR(pe217) c1, SUM(pe213) c2,SUM(pe214) c3,SUM(pe215) c4,SUM(1) c5 FROM per LEFT JOIN pe2 ON per.per0=pe2.pe21 GROUP BY YEAR(pe217) ORDER BY YEAR(pe217) DESC LIMIT 4";break;
		case 7: consultaSQL1 = "SELECT enc1 c1, AVG(enc10) c2,AVG(enc12) c3,AVG(enc14) c4,AVG(enc16) c5,AVG(enc18) c6,AVG(enc20) c7,AVG(enc22) c8,AVG(enc24) c9,AVG(enc26) c10,AVG(enc28) c11,SUM(1) c12 FROM enc WHERE enc1 = '"+idsel+"' AND enc4='Contestada' GROUP BY enc1";break;
		case 8: consultaSQL1 = "SELECT enc1 c1, AVG(enc7) c2, SUM(1) c3 FROM enc GROUP BY enc1 ORDER BY enc1 DESC LIMIT 5";break;
		case 11: consultaSQL1 = "SELECT aud0 c1, aud10 c2, aud11 c3, aud12 c4 FROM aud WHERE aud3='Finalizada' ORDER BY aud4 DESC LIMIT 4";break;
		case 12: consultaSQL1 = "SELECT YEAR(ncp4) c1, COUNT(*) c2 FROM ncp GROUP BY YEAR(ncp4) ORDER BY YEAR(ncp4) DESC LIMIT 6";break;
		case 13: consultaSQL1 = "SELECT YEAR(pre3) c1, AVG(pre6) c2, AVG(pre7) c3, AVG(pre8) c4 FROM pre WHERE pre4='Realizada' GROUP BY YEAR(pre3) ORDER BY YEAR(pre3) DESC LIMIT 4";break;
		case 14: var f = new Date();var ano=f.getFullYear()+2;
				consultaSQL1 = "SELECT YEAR(cal3) c1, COUNT(*) c2, SUM(IF (cal5='Realizada', 1, 0)) c3 FROM cal WHERE YEAR(cal3)<'"+ano+"' GROUP BY YEAR(cal3) ORDER BY YEAR(cal3) DESC LIMIT 6";break;

	};

	//3 Ejecución de las consultas
	connection.query(consultaSQL1, 
		function (err, results1, fields) {
			if (err) {throw err;} else {
				//console.log(bd+" dataXTR(0) results1.length: "+results1.length);
				switch (procId){
					case 1:
						var matriz = [[0,0],[0,0],[0,0],[0,0],[0,0]]; 
						for(i=0; i<results1.length; i++) {
							//console.log("results1[0].c1(dataXTR): "+results1[0].c1);
							//console.log("results1[0].c3(dataXTR): "+results1[0].c3);
							switch (results1[i].c1) {
								case 2011: matriz[0][0]=results1[i].c2;matriz[0][1]=results1[i].c3;break;
								case 2012: matriz[1][0]=results1[i].c2;matriz[1][1]=results1[i].c3;break;
								case 2013: matriz[2][0]=results1[i].c2;matriz[2][1]=results1[i].c3;break;
								case 2014: matriz[3][0]=results1[i].c2;matriz[3][1]=results1[i].c3;break;
								case 2015: matriz[4][0]=results1[i].c2;matriz[4][1]=results1[i].c3;break;

							};
						};
						//console.log("matriz[3][0] (dataXTR): "+matriz[3][0]);
							//cadenadatos=cadenadatos+",('"+condicionsql+"','"+results1[i].c1+"','"+results1[i].c2/results1[i].c4+"','"+results1[i].c3/results1[i].c4+"')";
						var cadenadatos = "['Año','Abiertas','Cerradas']";
						var ano;

						for(i=0; i<5; i++) {
							switch (i) {
	    						case 0: ano = "2011"; break; case 1: ano = "2012"; break; 
	    						case 2: ano = "2013"; break; case 3: ano = "2014"; break; 
	    						case 4: ano = "2015"; break; 
	    					};
							cadenadatos = cadenadatos + ",['"+ano+"',"+matriz[i][0]+","+matriz[i][1]+"]";
						};break;
					case 2:
						var matriz = [0,0,0,0,0,0,0,0,0,0];
						for(i=0; i<results1.length; i++) {
							var posicion = parseInt(results1[i].c1)-1;
							matriz[posicion]=results1[i].c2;
						};

						var cadenadatos = "['Proceso','Total NCs'],['Gest',"+matriz[0]+"],['Plan',"+matriz[1]+"],['Ofer',"+matriz[2]+"],['For',"
						+matriz[3]+"],['Calib',"+matriz[4]+"],['Dis',"+matriz[5]+"],['Prod',"+matriz[6]+"],['Comp',"
						+matriz[7]+"],['Audit',"+matriz[8]+"],['Satis',"+matriz[9]+"]";

						break;
					case 10:
						var matriz = [[0,0,0],[0,0,0],[0,0,0],[0,0,0]];  
						for(i=0; i<results1.length; i++) {
							switch (results1[i].c1) {
								case 2012: matriz[0][0]=results1[i].c2;matriz[0][1]=results1[i].c3;matriz[0][2]=results1[i].c4;break;
								case 2013: matriz[1][0]=results1[i].c2;matriz[1][1]=results1[i].c3;matriz[1][2]=results1[i].c4;break;
								case 2014: matriz[2][0]=results1[i].c2;matriz[2][1]=results1[i].c3;matriz[2][2]=results1[i].c4;break;
								case 2015: matriz[3][0]=results1[i].c2;matriz[3][1]=results1[i].c3;matriz[3][2]=results1[i].c4;break;

							};
						};
						//console.log("matriz[3][0] (dataXTR): "+matriz[3][0]);
							//cadenadatos=cadenadatos+",('"+condicionsql+"','"+results1[i].c1+"','"+results1[i].c2/results1[i].c4+"','"+results1[i].c3/results1[i].c4+"')";
						var cadenadatos = "['Año','Pendientes','AC','AP']";
						var ano;

						for(i=0; i<4; i++) {
							switch (i) {
	    						case 0: ano = "2012"; break; case 1: ano = "2013"; break; 
	    						case 2: ano = "2014"; break; case 3: ano = "2015"; break; 
	    					};
							cadenadatos = cadenadatos + ",['"+ano+"',"+matriz[i][0]+","+matriz[i][1]+","+matriz[i][2]+"]";
						};break;
					case 9: 
						var matriz = [[0,0],[0,0],[0,0],[0,0],[0,0]]; 
						for(i=0; i<results1.length; i++) {
							// console.log("results1[0].c1(dataXTR): "+results1[0].c1);
							// console.log("results1[0].c3(dataXTR): "+results1[0].c2);
							switch (results1[i].c1) {
								case 2011: matriz[0][0]=results1[i].c2;matriz[0][1]=results1[i].c3;break;
								case 2012: matriz[1][0]=results1[i].c2;matriz[1][1]=results1[i].c3;break;
								case 2013: matriz[2][0]=results1[i].c2;matriz[2][1]=results1[i].c3;break;
								case 2014: matriz[3][0]=results1[i].c2;matriz[3][1]=results1[i].c3;break;
								case 2015: matriz[4][0]=results1[i].c2;matriz[4][1]=results1[i].c3;break;

							};
						};
						//console.log("matriz[3][0] (dataXTR): "+matriz[3][0]);
							//cadenadatos=cadenadatos+",('"+condicionsql+"','"+results1[i].c1+"','"+results1[i].c2/results1[i].c4+"','"+results1[i].c3/results1[i].c4+"')";
						var cadenadatos = "['Año','Abiertas','Cerradas']";
						var ano;

						for(i=0; i<5; i++) {
							switch (i) {
	    						case 0: ano = "2011"; break; case 1: ano = "2012"; break; 
	    						case 2: ano = "2013"; break; case 3: ano = "2014"; break; 
	    						case 4: ano = "2015"; break; 
	    					};
							cadenadatos = cadenadatos + ",['"+ano+"',"+matriz[i][0]+","+matriz[i][1]+"]";
						};break;
					case 5:
						var matriz = [[0,0,0],[0,0,0],[0,0,0],[0,0,0]];  
						for(i=0; i<results1.length; i++) {
							//console.log("results1[0].c1(dataXTR): "+results1[0].c1);
							//console.log("results1[0].c3(dataXTR): "+results1[0].c3);
							switch (results1[i].c1) {
								case 2012: matriz[0][0]=results1[i].c2/results1[i].c5;matriz[0][1]=results1[i].c3/results1[i].c5;matriz[0][2]=results1[i].c4/results1[i].c5;break;
								case 2013: matriz[1][0]=results1[i].c2/results1[i].c5;matriz[1][1]=results1[i].c3/results1[i].c5;matriz[1][2]=results1[i].c4/results1[i].c5;break;
								case 2014: matriz[2][0]=results1[i].c2/results1[i].c5;matriz[2][1]=results1[i].c3/results1[i].c5;matriz[2][2]=results1[i].c4/results1[i].c5;break;
								case 2015: matriz[3][0]=results1[i].c2/results1[i].c5;matriz[3][1]=results1[i].c3/results1[i].c5;matriz[3][2]=results1[i].c4/results1[i].c5;break;

							};
						};
						//console.log("matriz[3][0] (dataXTR): "+matriz[3][0]);
							//cadenadatos=cadenadatos+",('"+condicionsql+"','"+results1[i].c1+"','"+results1[i].c2/results1[i].c4+"','"+results1[i].c3/results1[i].c4+"')";
						var cadenadatos = "['Año','Solicitante','Alumnos','Profesor']";
						var ano;

						for(i=0; i<4; i++) {
							switch (i) {
	    						case 0: ano = "2012"; break; case 1: ano = "2013"; break; 
	    						case 2: ano = "2014"; break; case 3: ano = "2015"; break; 
	    					};
							cadenadatos = cadenadatos + ",['"+ano+"',"+matriz[i][0]+","+matriz[i][1]+","+matriz[i][2]+"]";
						};break;
					case 6:
						var matriz = [[0,0,0],[0,0,0],[0,0,0],[0,0,0]]; 
						for(i=0; i<results1.length; i++) {
							//console.log("results1[0].c1(dataXTR): "+results1[0].c1);
							//console.log("results1[0].c3(dataXTR): "+results1[0].c3);
							switch (results1[i].c1) {
								case 2012: matriz[0][0]=results1[i].c2/results1[i].c5;matriz[0][1]=results1[i].c3/results1[i].c5;matriz[0][2]=results1[i].c4/results1[i].c5;break;
								case 2013: matriz[1][0]=results1[i].c2/results1[i].c5;matriz[1][1]=results1[i].c3/results1[i].c5;matriz[1][2]=results1[i].c4/results1[i].c5;break;
								case 2014: matriz[2][0]=results1[i].c2/results1[i].c5;matriz[2][1]=results1[i].c3/results1[i].c5;matriz[2][2]=results1[i].c4/results1[i].c5;break;
								case 2015: matriz[3][0]=results1[i].c2/results1[i].c5;matriz[3][1]=results1[i].c3/results1[i].c5;matriz[3][2]=results1[i].c4/results1[i].c5;break;

							};
						};
						//console.log("matriz[3][0] (dataXTR): "+matriz[3][0]);
							//cadenadatos=cadenadatos+",('"+condicionsql+"','"+results1[i].c1+"','"+results1[i].c2/results1[i].c4+"','"+results1[i].c3/results1[i].c4+"')";
						var cadenadatos = "['Año','Actitud','Aptitud','Global']";
						var ano;

						for(i=0; i<4; i++) {
							switch (i) {
	    						case 0: ano = "2012"; break; case 1: ano = "2013"; break; 
	    						case 2: ano = "2014"; break; case 3: ano = "2015"; break; 
	    					};
							cadenadatos = cadenadatos + ",['"+ano+"',"+matriz[i][0]+","+matriz[i][1]+","+matriz[i][2]+"]";
						};break;
					case 7:
						if (results1.length==0) {results1 =[{c1:0,c2:0,c3:0,c4:0,c5:0,c6:0,c7:0,c8:0,c9:0,c10:0,c11:0}];};

						var cadenadatos = "['Pregunta','Valor medio'],['Preg1',"+results1[0].c2+"],['Preg2',"+results1[0].c3+"],['Preg3',"+results1[0].c4+"],['Preg4',"
						+results1[0].c5+"],['Preg5',"+results1[0].c6+"],['Preg6',"+results1[0].c7+"],['Preg7',"+results1[0].c8+"],['Preg8',"
						+results1[0].c9+"],['Preg9',"+results1[0].c10+"],['Preg10',"+results1[0].c11+"]";

						break;
					case 8:
						//var matriz = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]]; 
						var cadenadatos = "";

						for(i=0; i<results1.length; i++) {
							cadenadatos = ",['Estudio "+results1[i].c1+"',"+results1[i].c2+","+results1[i].c3+"]" + cadenadatos;
						};

						cadenadatos = "['Estudio','Valor medio','Nº encuestas']" + cadenadatos;

						break;
					case 11:
						var cadenadatos = "";
						for(i=0; i<results1.length; i++) {
							cadenadatos = ",['Auditoría "+results1[i].c1+"',"+results1[i].c2+","+results1[i].c3+","+results1[i].c4+"]" + cadenadatos;
						};
						cadenadatos = "['Auditoría','NC','DL','AM']" + cadenadatos;
						break;
					case 12:
						var cadenadatos = "";
						for(i=0; i<results1.length; i++) {
							cadenadatos = ",['"+results1[i].c1+"',"+results1[i].c2+"]" + cadenadatos;
						};
						cadenadatos = "['Año','NC']" + cadenadatos;
						break;
					case 13:
						var cadenadatos = "";
						for(i=0; i<results1.length; i++) {
							cadenadatos = ",['"+results1[i].c1+"',"+results1[i].c2+","+results1[i].c3+","+results1[i].c4+"]" + cadenadatos;
						};
						cadenadatos = "['Año','Calidad','Cal/Prec','Tiempo']" + cadenadatos;
						break;
					case 14:
						var cadenadatos = "";
						for(i=0; i<results1.length; i++) {
							cadenadatos = ",['"+results1[i].c1+"',"+results1[i].c2+","+results1[i].c3+"]" + cadenadatos;
						};
						cadenadatos = "['Año','Planificadas','Realizadas']" + cadenadatos;
						break;
				};
				
				//console.log("cadenadatos (dataXTR "+ cadenadatos);

				cadenaJSON = cadenaJSON+"I"+idchart+":["+cadenadatos+"]";

				if (nchart==1) {
					cadenaJSON = "[{" + cadenaJSON + "}]";
					res.contentType('json');
					var dataJSON = eval(cadenaJSON);
					res.json(200, dataJSON);
						//console.log(bd+" dataXTR() Devuelve: "+cadenaJSON);
						console.log(bd+" dataXTR() Devuelto.");

				}else{
					nchart=nchart-1;
					//console.log("nchart: "+ nchart);
					cadenaJSON = cadenaJSON + ",";
				};
			};
		});

}


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//GANTT (OBJETIVOS)

function dataACC (req, res) {

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);

		console.log(bd+" dataACC(): SELECT * FROM obj LEFT JOIN...");

	connection.query("SELECT * FROM obj LEFT JOIN acc ON obj.obj0=acc.acc2 ORDER BY obj.obj0", 
		function (err, results, fields) {
			if (err) {throw err;} else {

				var idobjetivoAnterior = 0;
				var nexti=0;
				var cadenaDatosObj = "";
													//alert("Numero de objetivos-acciones: "+result.rows.length);
				for(var i=0; i < results.length; i++) {
					
					var cadenaDatosAcc = "";
					var idobjetivoActual = results[i]['obj0'];// result.rows.item(i)['idobjetivo'];
					
													//alert("Id Objetivo: " + result.rows.item(i)['idobjetivo'] + "(i: " +  i + ") "+ "(j: " +  j + ") " + result.rows.item(i)['objetivo']);
					
					for(var j=nexti; idobjetivoActual == results[j]['obj0']; j++) {
													//alert("AcciÃ³n: " +  i + ":" +  j + " : " +  result.rows.item(j)['accion']);
						if (results[j]['acc0'] != null) {
							
							var fchinicioAux2 = results[j]['acc8'];				//alert(Parse(Date(1330011200000)));
							var fchfinAux2 = results[j]['acc9'];
							var fchinicioAux = new Date(fchinicioAux2); //"/Date(1336611200000)/"//"/Date('2012/09/12')/"; //1330011200000; //Date.parse ('mm/dd/yyyy'); 
							var fchfinAux =   new Date(fchfinAux2); // "/Date(1349711200000)/"//"/Date('2012/11/12')/";
							var fchinicio = fchinicioAux.getTime();
							var fchfin =   fchfinAux.getTime(); 
							var idFila = i+1; //Lo uso para poder crear una acciÃ³n en el objetivo seleccionado con un click.
							
							// console.log("fchinicioAux2: "+fchinicioAux2);
							// console.log("fchfinAux2: "+fchfinAux2);
							// console.log("fchinicioAux: "+fchinicioAux);
							// console.log("fchfinAux: "+fchfinAux);

							cadenaDatosAcc = cadenaDatosAcc + '{ from: "/Date(' + fchinicio + 
								')/", to: "/Date(' + fchfin + ')/", "label":"'+  results[j]['acc1']+
								'", "customClass":"'+ results[j]['acc12']+'", "dataObj":["'+
									results[j]['acc0']+'","'+results[j]['acc1']+'","'+
									//El 2 es el idobjetivo
									results[j]['acc3']+'","'+results[j]['acc4']+'","'+
									results[j]['acc5']+'","'+results[j]['acc6']+'","'+
									results[j]['acc7']+'","'+
									fchSQLaWEB(results[j]['acc8'])+'","'+
									fchSQLaWEB(results[j]['acc9'])+'","'+
									results[j]['acc10']+'","'+
									fchSQLaWEB(results[j]['acc11'])+'","'+
									results[j]['acc12']+'","'+
									results[j]['obj0']+'","'+results[j]['obj1']+'","'+
									results[j]['obj2']+'","'+results[j]['obj3']+'","'+
									results[j]['obj4']+'","'+results[j]['obj5']+'","'+
									results[j]['obj6']+'",'+idFila+']}';

							if (i != results.length-1) {cadenaDatosAcc = cadenaDatosAcc + ','};
						
						};
						//};
						if ((j+1) == results.length) {break;}; //Para incluir el último objetivo correctamente.
					};
						
					nexti=j; //Evita publicar de nuevo acciones correspondientes a objetivos anteriores.	
						
										//alert("<<<<Objetivo actual " + result.rows.item(i)['idobjetivo'] + " VS Objetivo Anterior " + idobjetivoAnterior);
						
					if (results[i]['obj0'] != idobjetivoAnterior) {
						//aObjetivos.push({"id" : result.rows.item(i)['idobjetivo'],"name" : "Obj: " + result.rows.item(i)['idobjetivo'], "desc" : result.rows.item(i)['objetivo'], "values" : aAcciones,});
						cadenaDatosObj = cadenaDatosObj + '{"id":'+results[i]['obj0']+',"name":"Obj: '+results[i]['obj0']+'","desc":"'+ results[i]['obj1']+'","values" :['+cadenaDatosAcc+']},';
					};
					
					idobjetivoAnterior = results[i]['obj0'];
						
				};

				cadenaJSON = "[" + cadenaDatosObj + "]";
				res.contentType('json');
				var dataJSON = eval(cadenaJSON);
				res.json(200, dataJSON);
					//console.log(bd+" dataACC() Devuelve: "+cadenaJSON);
					console.log(bd+" dataACC() Devuelto.");
			};
		});
};

exports.dataACC = dataACC;

//FILES

function guardarArchivo (bd){
	//<<Esta función se ejecuta desde los adupFila().
			console.log(bd+' guardarArchivo(): Archivos pendiente de confirmar: '+timeoutObject[0]);

	//1- Elimino el contador del Archivo que acabo de subir.
	for(var i=1; i < timeoutObject[0]+1; i++) {
		timeoutObject[i] = clearTimeout(timeoutObject[i]);
	};
			console.log(bd+' guardarArchivo(): Archivo guardado, reloj anulado');
	timeoutObject[0]=0;//Reinicializo el array.

}

function borrarArchivo (req, res) {
	//<<Borra el archivo, al borrar el elemento que lo contiene el usuario

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server

	var pathCompleto = "./docs/"+req.body.path;//En local
	//var pathCompleto = "/home/ubuntu/apps/iw9001/docs/"+req.body.path;//En server AWS
	var path_usuario = "./docs/papelera/"+req.body.path;

			//console.log(bd+" borrarArchivo(): nuevoNombre del archivo borrado: "+req.body.path); 

	//Opción 1: Manda el archivo a la papelera del usuario
	fs.rename(pathCompleto, path_usuario, function(err) {
	    if (err) console.log(err); 
	    	console.log(bd+' borrarArchivo(): Archivo enviado a la papelera.');
	});

	//Opción 2: Borra el archivo del servidor
	// fs.unlink(pathCompleto, function(err) {
	//     if (err) console.log(err); 
	//     	console.log(bd+' borrarArchivo(): Archivo borrado manualmente.');
	// });

	res.end();

};

var deleteAfterUpload = function(path) {
	//<<Esta función enchufa un contador al subir el documento, 
	//<<y si no se desactiva este se borrará en X seg.
	timeoutObject[0] = timeoutObject[0]+1;
	var i = timeoutObject[0];
  	timeoutObject[i] = setTimeout( function(){
    	fs.unlink(path, function(err) {
     		if (err) console.log(err);
      		console.log('deleteAfterUpload(): File borrado por consumir el tiempo');
    	});
  	}, 20 * 1000);//10 segundos
};


exports.borrarArchivo = borrarArchivo;
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function upCD (req, res) {
	//Actualiza las fechas de una cita, cuando esta es movida directamente en el calendario.

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);

	var fchInicio = req.body.fchinicio;
	var fchFin = req.body.fchfin;
	var idCita = parseInt(req.body.idcita);

	connection.query('UPDATE cit SET cit2=?, cit3=? WHERE cit0=?', 
		[fchInicio, fchFin, idCita],
		function() {
			console.log(bd+" upCD(): nuevoinicio: "+fchInicio+" nuevofin: "+fchFin+" Id cita movida: "+idCita);

			inverseCEX (bd,idCita,fchInicio,fchFin)

			res.set('Content-Type', 'text/plain');
			res.send('success');
		});

};
exports.upCD = upCD;


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//CAMPOS EDITABLES EN PESTAÑA FICHA DE PROCESO

function upDato (req, res) {//Recibe JSON(tabla, idFil, idCol, dat)

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);

		console.log(bd+" upDato() dat: " + req.body.dat);

	var nombrecompleto = req.body.idCol;
	var letra = nombrecompleto.substring(0, 1);
	var numero = nombrecompleto.substring(1, 2);//Número de columna a modificar.
	if (letra=='P') {var ncol = parseInt(numero) + 2;};
 	if (letra=='I') {var ncol = parseInt(numero) + 10;};

				//console.log("nombrecompleto: " + nombrecompleto);
				//console.log("letra: " + letra);
				//console.log("numero: " + numero);
				//console.log("ncol: " + ncol);
	
	connection.query('UPDATE pro SET pro'+ncol+'=? WHERE pro1=?', 
		[req.body.dat, req.body.idFil],
		function() {
			console.log(bd+" upDato() Dato modificado (Fil/Col): " + req.body.idFil + "/" + req.body.idCol);
			res.set('Content-Type', 'text/plain');
			res.send('"'+req.body.idFil+'"');
	});
};

exports.upDato = upDato;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//COMBOS

function getRevs (req, res) {
	//Recibe JSON(a(tabla),b(codsel))

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);

	var consultaSQL;
	var nuevosrevs = "<ul>";
	console.log(bd+" getRev("+req.body.a+"): "+'SELECT * FROM doc WHERE doc1="'+req.body.b+'" ORDER BY doc4 ASC');

	switch (req.body.a) {
		case "doc": consultaSQL = 'SELECT * FROM doc WHERE doc1="'+req.body.b+'" ORDER BY doc4 DESC LIMIT 8';break; 
		case "reg": consultaSQL = 'SELECT * FROM reg WHERE reg1="'+req.body.b+'" ORDER BY reg5 DESC LIMIT 8';break; 
	};

	connection.query(consultaSQL,
		function (err, results, fields) {
			if (err) {throw err;} 
			else {
				// if (results.length>0) {

				switch (req.body.a) {
					case "doc":
						for(var i=0; i < results.length; i++) {
							var fechaAUX = fchSQLaWEB(results[i].doc4);
							if (results[i].doc7.length>70) {var cambiosAUX = results[i].doc7.substring(0,70)+"...";} else {var cambiosAUX = results[i].doc7};
							nuevosrevs = nuevosrevs + '<li type="disc"><b>'+fechaAUX+" ("+results[i].doc3 +")</b> "+cambiosAUX+"</li> ";
						};break;
					case "reg":
						for(var i=0; i < results.length; i++) {	
							var fechaAUX = fchSQLaWEB(results[i].reg5);
							if (results[i].reg9.length>70) {var cambiosAUX = results[i].reg9.substring(0,70)+"...";} else {var cambiosAUX = results[i].reg9};
							nuevosrevs = nuevosrevs + '<li type="disc"><b>'+fechaAUX+" ("+results[i].reg3 +")</b> "+cambiosAUX+"</li> ";
						};break;

					};
					
					var cadenaJSON = "[{docs:'"+nuevosrevs+"</ul>'}]";

					res.contentType('json');
					var dataJSON = eval(cadenaJSON);
					res.json(200, dataJSON);
						//console.log(bd+" getCombo("+req.body.combo+"): Devuelve: "+ cadenaJSON);
						console.log(bd+" getRev("+req.body.a+"): Devuelto.");
			};
		});

};
exports.getRevs = getRevs;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// "I" INTELIGENCE

function adI (req,res) {

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);

	delI(bd);//Limpio la lista de tareas automáticas.

	var chequeos = [
	/*Rojos*/	"for1","cal1","cal2","maq2","prv2",
	/*Naranjas*/"acc1","rie1","req1","per1","maq1","cur1","cur2","cur3","prv1",
	/*Verdes*/	"acp1","ctl1","ncs1","doc1","reg1","aud1","rec1","est1"
	];
	var nresultados = 0;

	for(var i=0; i<chequeos.length; i++) {
		nresultados = nresultados + adITareas(bd,chequeos[i]);
		//console.log("adI:i: "+i+" "+chequeos[i]+" nresultados: "+nresultados);
	};

	res.send("success");
		console.log(bd+" adI() nresultados: "+nresultados);
	//var timeoutObjectAux = setTimeout(dataDT(req, res),2000);
};
exports.adI = adI;

function adITareas (bd,chequeo) {
	//Incluyo todas las tareas pendientes en la tabla tareas

	var consultaSQL;
	var datosString='';
	var nresultados=0;

	switch (chequeo){
	//Generales
		case "doc1": consultaSQL = 'SELECT * FROM doc WHERE doc5="Borrador"';break;//Documentos en borrador
		case "reg1": consultaSQL = 'SELECT * FROM reg WHERE reg6="Borrador"';break;//Registros en borrador
		case "ncs1": consultaSQL = 'SELECT * FROM ncs WHERE ncs4=""';break;//No conformidades abiertas
/*P2*/	case "acc1": consultaSQL = 'SELECT * FROM acc WHERE acc9<NOW() AND acc12<>"gantBlue"';break;//Accciones no cerradas y caducadas
		case "rie1": consultaSQL = 'SELECT * FROM rie WHERE rie4<>"Controlado" AND rie4<>"No aplica"';break;//Riesgos no controlados
/*P3*/	case "req1": consultaSQL = 'SELECT * FROM req WHERE req4<>"Implantado" AND req4<>"No aplica"';break;//Requisitos sin implantar
/*P4*/	case "cur1": consultaSQL = 'SELECT * FROM cur WHERE cur5<NOW() AND cur6<>"Finalizado" AND cur6<>"Anulado"';break;//Cursos caducados pendientes de finalizar
		case "cur2": consultaSQL = 'SELECT * FROM cur WHERE cur6<>"Finalizado" AND cur14=""';break;//Cursos pendientes de evaluar
		case "cur3": consultaSQL = 'SELECT * FROM per LEFT JOIN cup ON per.per0=cup.cup2 LEFT JOIN cur ON cup.cup1=cur.cur0 WHERE cup.cup4=""';break;//Valoración pendiente del trabajador del curso.
		case "for1": consultaSQL = 'SELECT * FROM per LEFT JOIN pue ON per.per7=pue.pue0 LEFT JOIN frm ON pue.pue0=frm.frm10 LEFT JOIN cur ON frm.frm0=cur.cur9 WHERE frm.frm0 is not null AND cur.cur0 is null';break;////Formaciones pendientes según puesto de trabajo de un trabajador
		case "per1": consultaSQL = 'SELECT * FROM per LEFT JOIN pe2 ON per.per0=pe2.pe21 WHERE pe2.pe217=""';break;//Evaluación de la contratación
/*P5*/	case "cal1": consultaSQL = 'SELECT * FROM equ LEFT JOIN cal ON equ.equ0=cal.cal1 WHERE cal.cal5 is null AND equ.equ5<>"Fuera de uso"';break;//Equipos sin calibrar
		case "cal2": consultaSQL = 'SELECT * FROM equ LEFT JOIN cal ON equ.equ0=cal.cal1 WHERE equ.equ5<>"Fuera de uso" GROUP BY equ.equ0 HAVING MAX(cal.cal5)<NOW() ';break;//Equipos con la calibración caducada
/*P7*/	case "ctl1": consultaSQL = 'SELECT * FROM ctl WHERE ctl4="Pendiente"';break;//Controles pendientes de implantar
		case "maq1": consultaSQL = 'SELECT * FROM maq LEFT JOIN man ON maq.maq0=man.man1 WHERE man.man0 is null AND maq.maq0<>"Fuera de uso"';break;//Maquina sin mantenimiento asignados
		//<<MAL: faltaría chequear que aquellas que tiene un chequeo por TIPO DE MAQUINA, tampoco tiene la revisión. Usar un UNION con maq.maq7=man.man2.
		case "maq2": consultaSQL = 'SELECT * FROM maq LEFT JOIN man ON maq.maq0=man.man1 LEFT JOIN mrv ON man.man0=mrv.mrv3 WHERE maq.maq0<>"Fuera de uso" GROUP BY maq.maq0 HAVING MIN(mrv.mrv7)<NOW() OR mrv.mrv0 is null';break;//Revisiones pendientes de realizar a una máquina
		//<<MAL: faltaría chequear que aquellas que tiene un chequeo por TIPO DE MAQUINA, tampoco tiene la revisión. Usar un UNION con maq.maq7=man.man2.
/*P8*/	case "prv1": consultaSQL = 'SELECT * FROM prv LEFT JOIN ncp ON prv.prv0=ncp.ncp1 WHERE ncp.ncp5="" AND prv.prv18="Homologado"';break;//No conformidades de proveedor no cerradas
		case "prv2": consultaSQL = 'SELECT * FROM prv WHERE prv16<NOW() AND prv18="Homologado"';break;// Fecha de próxima evaluación proveedor caducada.
/*P9*/	case "acp1": consultaSQL = 'SELECT * FROM acp WHERE acp10<>"Finalizada" AND acp10<>"Anulada"';break;//ACPs sin cerrar
		case "aud1": consultaSQL = 'SELECT * FROM aud WHERE aud4<NOW() AND aud3<>"Finalizada" AND aud3<>"Anulada"';break;//Auditorías pendientes de cerrar
/*P10*/	case "rec1": consultaSQL = 'SELECT * FROM rec WHERE rec5<>"Cerrada"';break;//Reclamaciones pendientes de cerrar
		case "est1": consultaSQL = 'SELECT * FROM est WHERE est3<NOW() AND est2<>"Finalizado" AND est2<>"Anulado"';break;//Estudios pendientes de cerrar
		
	};

			//console.log("adITareas:consultaSQL: "+consultaSQL);

	connection.query(consultaSQL, function (err, results, fields) {
		if (err) {throw err;} 
		else {

			if (results.length>0) {
				for(var i=0; i<results.length; i++) {

					switch (chequeo){
		/*General*/		case "doc1": datosString=datosString+'("<strong>Documento</strong> en borrador: <strong>'+results[i].doc1+'</strong>","3","doc1-'+results[i].doc0+'"),';break;
						case "reg1": datosString=datosString+'("<strong>Registro</strong> en borrador: <strong>'+results[i].reg1+'</strong>","3","reg1-'+results[i].reg0+'"),';break;
						case "ncs1": datosString=datosString+'("<strong>No Conformidad</strong> abierta: <strong>'+results[i].ncs1+'</strong>","3","ncs1-'+results[i].ncs0+'"),';break;
		/*P2*/			case "acc1": datosString=datosString+'("<strong>Acción en Planificación</strong> caducada sin finalizar: <strong>'+results[i].acc1+'</strong>","2","acc1-'+results[i].acc0+'"),';break;
						case "rie1": datosString=datosString+'("<strong>Riesgo</strong> pendiente de controlar: <strong>'+results[i].rie1+'</strong>","2","rie1-'+results[i].rie0+'"),';break;	
		/*P3*/			case "req1": datosString=datosString+'("<strong>Requisito</strong> pendiente de implantar: <strong>'+results[i].req1+'</strong>","2","req1-'+results[i].req0+'"),';break;
		/*P4*/			case "cur1": datosString=datosString+'("<strong>Curso</strong> pendiente de finalizar: <strong>'+results[i].cur1+'</strong>","2","cur1-'+results[i].cur0+'"),';break;
						case "cur2": datosString=datosString+'("<strong>Curso</strong> pendiente valorar: <strong>'+results[i].cur1+'</strong>","2","cur2-'+results[i].cur0+'"),';break;
						case "cur3": datosString=datosString+'("<strong>'+results[i].per1+' '+results[i].per2+'</strong> tiene pendiente evaluar el curso: <strong>'+results[i].cur1+'</strong>","2","cur3-'+results[i].cur0+'"),';break;
						case "for1": datosString=datosString+'("<strong>'+results[i].per1+' '+results[i].per2+'</strong> tiene pendiente formarse en: <strong>'+results[i].frm1+'</strong>","1","frm1-'+results[i].frm0+'"),';break;
						case "per1": datosString=datosString+'("<strong>Contratación</strong> pendiente de valorar: <strong>'+results[i].per1+' '+results[i].per2+'</strong>","2","per1-'+results[i].per0+'"),';break;
		/*P5*/			case "cal1": datosString=datosString+'("<strong>Equipo</strong> pendiente de calibrar: <strong>'+results[i].equ1+' ('+results[i].equ2+' '+results[i].equ3+', '+results[i].equ3+')</strong>","1","cal1-'+results[i].cal0+'"),';break;
						case "cal2": datosString=datosString+'("<strong>Equipo</strong> con la calibración caducada: <strong>'+results[i].equ1+' ('+results[i].equ2+' '+results[i].equ3+', '+results[i].equ3+')</strong>","1","cal2-'+results[i].cal0+'"),';break;
		/*P7*/			case "ctl1": datosString=datosString+'("<strong>Control operacional</strong> pendiente de implantar: <strong>'+results[i].ctl1+' ('+results[i].ctl0+')</strong>","3","ctl1-'+results[i].ctl0+'"),';break;
						case "maq1": datosString=datosString+'("<strong>Máquina</strong> sin mantenimientos asignados: <strong>'+results[i].maq1+' '+results[i].maq3+' '+results[i].maq4+' ('+results[i].maq2+')</strong>","2","maq1-'+results[i].maq0+'"),';break;
						case "maq2": datosString=datosString+'("<strong>Máquina</strong> con revisiones pendientes: <strong>'+results[i].maq1+' '+results[i].maq3+' '+results[i].maq4+' ('+results[i].maq2+')</strong>","1","maq2-'+results[i].maq0+'"),';break;
		/*P8*/			case "prv1": datosString=datosString+'("<strong>Proveedor</strong> con No Conformidades abiertas: <strong>'+results[i].prv1+'</strong>","2","prv1-'+results[i].prv0+'"),';break;
						case "prv2": datosString=datosString+'("<strong>Proveedor</strong> pendiente de evaluación: <strong>'+results[i].prv1+'</strong>","1","prv2-'+results[i].prv0+'"),';break;
						case "acp1": datosString=datosString+'("<strong>Acción Correctiva</strong> pendiente de finalizar: <strong>'+results[i].acp1+'</strong>","3","acp1-'+results[i].acp0+'"),';break;
						case "aud1": datosString=datosString+'("<strong>Auditoría</strong> pendiente de finalizar: <strong>'+results[i].aud1+'</strong>","3","aud1-'+results[i].aud0+'"),';break;
						case "rec1": datosString=datosString+'("<strong>Reclamación</strong> pendiente de cerrar: <strong>'+results[i].rec1+'</strong>","3","rec1-'+results[i].rec0+'"),';break;
						case "est1": datosString=datosString+'("<strong>Estudio de satisfacción</strong> pendiente de cerrar: <strong>'+results[i].est1+'</strong>","3","est1-'+results[i].est0+'"),';break;
				
					};
				};

				datosString=datosString.substring(0,datosString.length-1);//Elimino la última coma de la cadena.
					//console.log("adITareas:datosString: "+datosString);
				nresultados=nresultados+results.length;
				 
				connection.query('INSERT INTO tar (tar1,tar2,tar3) VALUES '+datosString);

					console.log(bd+" adITareas() "+chequeo+" nresultados: "+nresultados);
			};
		};
	});

return nresultados;

};

function delI (bd) {
	//Limpio todas las tareas creadas automáticamente.

	connection.query("USE "+bd);

	connection.query('DELETE FROM tar WHERE tar3 is not null');
	console.log(bd+" delI() Borradas todas tareas.");

};

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//FECHAS

function fchWEBaSQL (fchweb) { 
	//Pasa "01/02/2014" a "2014-02-01".
	if (fchweb==""||fchweb==null||fchweb=="//") {
		var newfchsql = "";
	} else {
		var newfchsql =  fchweb.substring(6, 10)+"-"+fchweb.substring(3, 5)+"-"+fchweb.substring(0, 2);
	};

	return newfchsql;
			//console.log("newfchsql (desde fchWEBaSQL): "+newfchsql);
}

function fchSQLaWEB (fchsql) { 
	//Pasa "2014-02-01" a "01/02/2014".
	if (fchsql==""||fchsql==null||fchsql=="//") {
		var newfchweb = "";
	} else {
		var newfchweb = fchsql.substring(8, 10)+"/"+fchsql.substring(5, 7)+"/"+fchsql.substring(0, 4);
	};

	return newfchweb;
			//console.log("newfchweb (desde fchSQLaWEB): "+newfchweb);
}

function fchSQLaDATE (fchsql) { 

	if (fchsql==""||fchsql==null||fchsql=="//") {
		var newfchdate = "";
	} else {
		var newfchdate = new Date (fchsql.substring(0, 4),fchsql.substring(5, 7)-1,fchsql.substring(8, 10));//Los meses van del 0 al 11.
	};

	return newfchdate;
			//console.log("newfchdate (desde fchSQLaDATE): "+newfchdate);
}

function fchWEBaDATE (fchweb) { 

	if (fchweb==""||fchweb==null||fchweb=="//") {
		var newfchdate = "";
	} else {
		var newfchdate = new Date (fchweb.substring(6, 10),fchweb.substring(3, 5)-1,fchweb.substring(0, 2));//Los meses van del 0 al 11.
	};

	return newfchdate;
			//console.log("newfchdate (desde fchWEBaDATE): "+newfchdate);
}

function fchDATEaWEB (fchdate) { 
	//Pasa "2014-02-01" a DATE.
	if (fchdate==""||fchdate==null||fchdate=="//") {
		var newfchweb = "";
	} else {
		var mes = fchdate.getMonth()+1;//Los meses van del 0 al 11.
		var dia = fchdate.getDate();
		if (parseInt(mes)<10) {mes="0"+mes};//Poner un cero delante del mes si este es menor a 10.
		if (parseInt(dia)<10) {dia="0"+dia};//Poner un cero delante del día si este es menor a 10.
		var newfchweb = dia+"/"+mes+"/"+fchdate.getFullYear();
	};

	return newfchweb;
			//console.log("newfchweb (desde fchDATEaWEB): "+newfchweb);
}

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
}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//CASOS PARTICULARES

function mediaENC (adatos) {
	//<<Se usa en ENC para calcular la valoración media de las 10 preguntas de cada encuesta.

	var acumulado=0; var nsumandos=0; var media; var mediafinal="N/A";

	for (i=10; i<(29); i=i+2){
		if(adatos[i]!=""){
			acumulado=acumulado+parseInt(adatos[i]);
			nsumandos++;
		};
	};	

	if (nsumandos>0){media=acumulado/nsumandos; mediafinal=media.toFixed(2);};
	return mediafinal;
	//console.log(bd+" mediaENC() mediafinal: "+mediafinal);
}