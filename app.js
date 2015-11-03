
var express = require('express');
var http = require('http');
var path = require('path');


var appl = require('./mis_modulos/appl');
var bd = require('./mis_modulos/bd');
var seguridad = require('./mis_modulos/seguridad');

var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.methodOverride());
// app.use(app.router);
app.use(express.cookieParser());//Para obtener el valor de una cookie de la web
app.use(express.bodyParser({ //Para subir archivos
	keepExtensions: true, 
	uploadDir: __dirname + '/mis_csv',
	limit: '4mb'
	}));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {res.sendfile(__dirname + '/public/index.html');});
app.get('/odip', function(req, res) {res.sendfile(__dirname + '/public/odip/#/');});

app.post('/subirArchivo', function (req, res) {appl.subirArchivo(req, res);});
app.post('/getCombo', function (req, res) {appl.getCombo(req, res);});
app.post('/guardarNombre', function (req, res) {appl.guardarNombre(req, res);});
app.post('/verinfotabla', function (req, res) {appl.verinfotabla(req, res);});
app.post('/dataDT', function (req, res) {appl.dataDT(req, res);});
app.post('/data1', function (req, res) {appl.data1(req, res);});
app.post('/adup1', function (req, res) {appl.adup1(req, res);});
app.post('/upCrits', function (req, res) {appl.upCrits(req, res);});
app.post('/upItem', function (req, res) {appl.upItem(req, res);});
app.post('/del1', function (req, res) {appl.del1(req, res);});

app.post('/dTotales', function (req, res) {appl.dTotales(req, res);});
app.post('/dataCharts', function (req, res) {appl.dataCharts(req, res);});

app.post('/adsolicitud', function (req, res) {appl.adsolicitud(req, res);});
app.post('/dataResp', function (req, res) {appl.dataResp(req, res);});
app.post('/adcomentario', function (req, res) {appl.adcomentario(req, res);});

app.post('/login', function (req, res) {seguridad.login(req, res);});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
