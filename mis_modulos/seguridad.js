var express = require('express');
var mysql = require('mysql');

var bd = require('./bd');

var connection = mysql.createConnection({
	host     : '127.0.0.1',
	user     : 'root',
	password : 'david181', //Cuando trabajo en AWS
	//password : '', //Cuando trabajo en local
	database : 'dbodip'
});

//LOGUEARSE
function login (req, res) {

	//console.log("login(), logueandose...");
	res.set('Content-Type', 'text/plain');
	res.contentType('text/plain');
	res.send(0);
	//console.log("login(), No estás logueado.");

};
exports.login = login;

//ESTA LOGUEADO
function logueado (req, res) {

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	var numero_aleatorio = req.cookies.isowin_al;

			console.log(bd+" logueado() numero_aleatorio: " + numero_aleatorio);

	connection.query('SELECT * FROM users WHERE codigo='+connection.escape(numero_aleatorio),
	function (err, results, fields) {
				//console.log("Consulta BBDD: " + results[0].id+" <<< "+results[0].password + "(" +results.length+ ")");
		if (err) {throw err;} 
		else {
				//console.log("Comparando...");
			if (results.length>0) {

				console.log(bd+" logueado(): El código es correcto!");

				//Guardo la fecha de esta última entrada en la web
				//Ejemplo: var now2 = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
				var fchUltimo = new Date().toISOString().replace(/T.+/, '');

				connection.query('UPDATE users SET fchult = ? WHERE codigo = ?',  
					[fchUltimo, numero_aleatorio],
					function () {
						console.log(bd+" logueado() Registrada fecha última entrada: " + fchUltimo);
					});

				res.set('Content-Type', 'text/plain');
				res.send(results[0].nombre);

			} else {
				res.set('Content-Type', 'text/plain');
				res.contentType('text/plain');
				res.send(0);
				console.log("logueado() No estás logueado: "+results.length);	
			};
		};
	});
};
exports.logueado = logueado;

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//LOGOUT
function logout (req, res) {

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server

	//Elimino las cookies
	res.cookie('isowin_id', null, { expires: new Date(Date.now() - 900000) });
	res.cookie('isowin_al', null, { expires: new Date(Date.now() - 900000) });

	res.set('Content-Type', 'text/plain');
	res.send('success');
	console.log(bd+" logout(): Logout!");

};
exports.logout = logout;