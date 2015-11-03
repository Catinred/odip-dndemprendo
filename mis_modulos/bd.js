var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host     : '127.0.0.1',
	user     : 'root',
	// password : 'david181', //Cuando trabajo en AWS
	password : '', //Cuando trabajo en local
	// host     : 'www.isowin.es',
	// user     : 'iwuser2',
	// password : 'david181',
	//insecureAuth: true //No usar este parámetro. es sólo para medible.es
});

function crearTablas (req, res) {

var tablas = ["doc",10,"reg",12,"ncs",11,"pro",14,//Básicos
"cit",7,"tar",3,"nts",2,//Gestion
"acp",16,"aud",20,//ACP y Auditorias
"req",12,"prd",13,"cli",19,"rqp",10,//Requisitos legales, clientes y productos, y tabla de relación.
"per",11,"pe2",18,"pue",8,"cur",20,"cup",7,"frm",14,//Formación y personas
"dis",19,"dir",10,//Diseños y sus revisiones
"equ",13,"cal",10,"eqc",17,//Equipos, calibraciones, Equipos propiedad del cliente
"ctl",12,"maq",28,"man",10,"mrv",10,//Control operacional y máquinas
"ncp",7,"prv",21,"pre",13,//NCs proveedor, Proveedores, evaluación de proveedores.
"est",19,"enc",32,"rec",12,//Estudios, encuestas y reclamaciones
"obj",7,"acc",13,"rie",12//Planificación: objetivos y acciones, riesgos
];

	//connection.connect();

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);

//Creo cada una de las tablas
for (i=0; i<(tablas.length); i=i+2){

var tabla = tablas[i];
var ncampos = tablas[i+1];
var campos = tabla+"0 integer primary key auto_increment";

for (j=1; j<(ncampos+1); j++){

campos += ", "+ tabla + j +" text";

};

connection.query('CREATE TABLE IF NOT EXISTS '+tabla+' ('+campos+')');

//console.log("Tabla: "+tabla+' ('+campos+')');

//ESPECIALES
connection.query("CREATE TABLE IF NOT EXISTS ind (ind0 integer primary key auto_increment, ind1 text, ind2 text, ind3 integer, ind4 double)");


};
console.log(bd+" crearTablas(): Tablas creadas! (next: cargarBD)");
}

function crearBD (req, res) {
	connection.connect();
	connection.query('create database db222222');
}

function cargarBD (req, res) {

	//connection.connect();

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);

	//CARGAR DATOS BÁSICOS
	connection.query("INSERT INTO pro (pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11, pro12, pro13, pro14) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1, "Gestión", "", "", "", "", "", "", "", "", "Indicador 1", "Indicador 2", "Indicador 3", "Indicador 4"]);
	connection.query("INSERT INTO pro (pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11, pro12, pro13, pro14) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[2, "Planificación", "", "", "", "", "", "", "", "", "Objetivo 1", "Objetivo 2", "Objetivo 3", "Objetivo 4"]);
	connection.query("INSERT INTO pro (pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11, pro12, pro13, pro14) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[3, "Ofertas y pedidos", "", "", "", "", "", "", "", "", "Indicador 1", "Indicador 2", "Indicador 3", "Indicador 4"]);
	connection.query("INSERT INTO pro (pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11, pro12, pro13, pro14) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[4, "Formación y personas", "", "", "", "", "", "", "", "", "Indicador 1", "Indicador 2", "Indicador 3", "Indicador 4"]);
	connection.query("INSERT INTO pro (pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11, pro12, pro13, pro14) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[5, "Calibración", "", "", "", "", "", "", "", "", "Indicador 1", "Indicador 2", "Indicador 3", "Indicador 4"]);
	connection.query("INSERT INTO pro (pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11, pro12, pro13, pro14) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[6, "Diseño", "", "", "", "", "", "", "", "", "Indicador 1", "Indicador 2", "Indicador 3", "Indicador 4"]);
	connection.query("INSERT INTO pro (pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11, pro12, pro13, pro14) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[7, "Producción", "", "", "", "", "", "", "", "", "Indicador 1", "Indicador 2", "Indicador 3", "Indicador 4"]);
	connection.query("INSERT INTO pro (pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11, pro12, pro13, pro14) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[8, "Compras", "", "", "", "", "", "", "", "", "Indicador 1", "Indicador 2", "Indicador 3", "Indicador 4"]);
	connection.query("INSERT INTO pro (pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11, pro12, pro13, pro14) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[9, "Auditorias y AC", "", "", "", "", "", "", "", "", "Indicador 1", "Indicador 2", "Indicador 3", "Indicador 4"]);
	connection.query("INSERT INTO pro (pro1, pro2, pro3, pro4, pro5, pro6, pro7, pro8, pro9, pro10, pro11, pro12, pro13, pro14) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[10, "Satisfacción", "", "", "", "", "", "", "", "", "Indicador 1", "Indicador 2", "Indicador 3", "Indicador 4"]);

console.log(bd+" cargarBD(): Datos básicos cargados! (next: probarBD)");

}
function probarBD (req, res) {

	//connection.connect();

	var bd = "db"+req.cookies.isowin_al.substring(0,6); //En server
	connection.query("USE "+bd);

	var mesActual = "2015-09";//Se usa en CIT
	var anoActual = "2015", anoPasado = "2014", anoSiguiente = "2016";

	//CARGAR DATOS DE PRUEBA
//Proceso 1 Gestión
	connection.query("INSERT INTO cit (cit0, cit1, cit2, cit3, cit4, cit5, cit6, cit7) VALUES (?,?,?,?,?,?,?,?)",[1,"Reunión con Dirección",mesActual+"-08",mesActual+"-08","Reunión para el seguimiento de objetivos del SGC","black","white",,]);
	connection.query("INSERT INTO cit (cit0, cit1, cit2, cit3, cit4, cit5, cit6, cit7) VALUES (?,?,?,?,?,?,?,?)",[2,"Curso de formación",mesActual+"-13",mesActual+"-16","Titulo del curso: Curso PRL sobre PVDs.","white","#004A94","cur1",]);
	connection.query("INSERT INTO nts (nts0, nts1, nts2) VALUES (?,?,?)",[1,"Cerrar las fechas definitivas de la auditoría de certificación con empresa certificadora.",,]);
	connection.query("INSERT INTO tar (tar0, tar1, tar2, tar3) VALUES (?,?,?,?)",[1,"Planificar la auditoría interna del SGC.",2,,]);
	connection.query("INSERT INTO doc (doc0, doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9) VALUES (?,?,?,?,?,?,?,?,?,?)",[1,"MC-1","Manual de Calidad","1.0","2014-03-24","Obsoleto","Sólo se entrega una copia a la linea de mando.","Creación del documento.",1,,,]);
	connection.query("INSERT INTO doc (doc0, doc1, doc2, doc3, doc4, doc5, doc6, doc7, doc8, doc9) VALUES (?,?,?,?,?,?,?,?,?,?)",[2,"MC-1","Manual de Calidad","2.0","2015-05-11","Publicado","Sólo se entrega una copia a la linea de mando.","Se adapta el documento a los requisitos de la ISO 14001.",1,,,]);
	connection.query("INSERT INTO reg (reg0, reg1, reg2, reg3, reg4, reg5, reg6, reg7, reg8, reg9, reg10, reg11) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",[1,"F-IRD","Plantilla de Informe de Revisión por la Dirección","1.0","5","2014-04-07","Publicado","Se guarda una copia en pdf en Isowin, y el original en papel firmado en el despacho de Dirección.","Sólo se entrega una copia a la linea de mando.","Creación del documento.",1,,,]);
//Proceso 2 Planificación
	connection.query("INSERT INTO obj (obj0, obj1, obj2, obj3, obj4, obj5, obj6, obj7) VALUES (?,?,?,?,?,?,?,?)",[1,"Reducir nº reclamaciones","Reducir el número de reclamaciones un 10% en el año 2015",1,"Se contará con un presupuesto de 3.000 euros para tomar acciones que logren dicho objetivo.","Pendiente...","Pendiente...",,]);	
	connection.query("INSERT INTO acc (acc0, acc1, acc2, acc3, acc4, acc5, acc6, acc7, acc8, acc9, acc10, acc11, acc12, acc13) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Mejora del Control de Calidad final",1,"Se mejorará el proceso de control de calidad final, testeando el 100% de los productos y adquiriendo nuevos equipos de medida más precisos y faibles.",1,"Se contará con el Depto de Producción, apoyado por el Depto de Compras. El presupuesto para está acción será de 2.000 euros.","Pendiente...","Pendiente...",anoActual+"-02-01",anoActual+"-08-31","Pendiente...",,"ganttRed",,]);	
	connection.query("INSERT INTO rie (rie0, rie1, rie2, rie3, rie4, rie5, rie6, rie7, rie8, rie9, rie10, rie11, rie12) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Perdida del certificado ISO 9001","Auditorías y AC","2015-07-01","Identificado","Perdida del certificado ISO 9001 por no cumplir con los requisitos de la norma.","Dejamos de vender a varios clientes importantes.",2,4,"Tolerable","Corrección de los incumplimientos, contratar auditoría para la recertificación.","Ninguno.","Sin observaciones.",]);	
//Proceso 3 Ofertas y pedidos
	connection.query("INSERT INTO req (req0, req1, req2, req3, req4, req5, req6, req7, req8, req9, req10, req11, req12) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Requisito legal: LOPD","REQ1","2014-11-18","Implantado","Ley orgánica 15/1999 de Protección de Datos de Caracter Personal.",,,"Si","N/A",3,"Creación de un Procedimiento interno de Protección de Datos, alta en el registro de la AGPD.","Sólo gestionamos información de nivel básico de trabajadores, proveedores y clientes.",]);
	connection.query("INSERT INTO req (req0, req1, req2, req3, req4, req5, req6, req7, req8, req9, req10, req11, req12) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",[2,"Limitaciones del REBT para motores híbridos","REQ2","2014-08-20","Implantado","Reglamento Eléctrico de Baja Tensión.",,,"Si","N/A",1,"Creación de instrucciones técnicas para cada uno de los productos a los que le resulta de aplicación.","Sin observaciones.",]);
	connection.query("INSERT INTO req (req0, req1, req2, req3, req4, req5, req6, req7, req8, req9, req10, req11, req12) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",[3,"Condiciones particulares GlobalTech","REQ3","2014-01-01","Implantado","Pliego de condiciones particulares de los motores suministrados a GlobalTech, correspondientes al contrato de suministro durante el año 2015 al 2017.",,,"Si","N/A",0,"Se crea un documento de requisitos particulares, que se utilizará para la revisión del diseño actual de los motores híbridos.","Sin observaciones.",]);
	connection.query("INSERT INTO cli (cli0, cli1, cli2, cli3, cli4, cli5, cli6, cli7, cli8, cli9, cli10, cli11, cli12, cli13, cli14, cli15, cli16, cli17, cli18, cli19) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"GlobalTech S.A.","A65408093","919006060","919006061","contacto@globaltech.com","2014-12-11","Activo","Calle Baltasar Gracian Nave 7A (Polígono Industrial Caesar)","28210","Madrid","Pablo Sánchez","620458972","Jefe de Ventas","psanchez@globaltech.com","Motores híbridos multifunción","Plazos de entrega inferiores a 10 días, paletización de los pedidos.",,,"Sin comentarios",]);
	connection.query("INSERT INTO prd (prd0, prd1, prd2, prd3, prd4, prd5, prd6, prd7, prd8, prd9, prd10, prd11, prd12, prd13) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Motor híbrido multifunción RE250D","MHM-RE250D","Motor híbrido multifunción de 250CV de potencia de biodiesel","En venta","2013-06-24",,"Peso: 58Kg. Potencia 250CV a 2.000 RPM. Refrigeración por agua. Para uso industrial, sólo interior.","Motor multifunción de reducido consumo y alta vida útil. Máxima potencia a mínimas revoluciones.","No es compatible con el uso de diesel o gasolina. No acepta temperaturas extremas. No sirve para exterior.","El mayor problema en las pruebas finales es alcanzar la potencia prevista de 250CV.",,,"Sin observaciones.",]);
	connection.query("INSERT INTO rqp (rqp0, rqp1, rqp2, rqp3, rqp4, rqp5, rqp6, rqp7, rqp8, rqp9, rqp10) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[1,,1,2,,"Ver la instrucción técnica: IT002-Motores RE250D","2013-01-01","2016-01-01",,,"Sin observaciones.",]);
	connection.query("INSERT INTO rqp (rqp0, rqp1, rqp2, rqp3, rqp4, rqp5, rqp6, rqp7, rqp8, rqp9, rqp10) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[2,1,,3,,"Ver el pliego de condiciones particulares: PCP036-Motores para GlobalTech","2014-01-01","2017-01-01",,,"Sin observaciones.",]);	
//Proceso 4 Formación y Personas
	connection.query("INSERT INTO pue (pue0, pue1, pue2, pue3, pue4, pue5, pue6, pue7, pue8) VALUES (?,?,?,?,?,?,?,?,?)",[1,"Director general","Licenciado y MBA", "Dirección administrativa y operacional de la compañía",,"2014-11-15",,,,,]);
	connection.query("INSERT INTO pue (pue0, pue1, pue2, pue3, pue4, pue5, pue6, pue7, pue8) VALUES (?,?,?,?,?,?,?,?,?)",[2,"Responsable comercial","Licenciado en ADE, Máster en Marketing", "Relación comercial con los clientes, desarrollo de planes de ventas",1,"2014-11-16",,,,,]);
	connection.query("INSERT INTO pue (pue0, pue1, pue2, pue3, pue4, pue5, pue6, pue7, pue8) VALUES (?,?,?,?,?,?,?,?,?)",[3,"Jefe producción","Ingeniero técnico mecánico", "Supervisión, planificación y control de la producción",1,"2014-11-15",,,,,]);
	connection.query("INSERT INTO pue (pue0, pue1, pue2, pue3, pue4, pue5, pue6, pue7, pue8) VALUES (?,?,?,?,?,?,?,?,?)",[4,"Operario de máquina","Graduado escolar", "Fabricación de piezas y control de calidad",3,"2014-11-16",,,,,]);
	connection.query("INSERT INTO per (per0, per1, per2, per3, per4, per5, per6, per7, per8, per9, per10, per11) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",[1, "Mario", "Olivan Garcés", "Olivan Garcés, Mario", "25998764G", "Si", "345569812256",1, "1960-11-21", "2014-12-01","","No",]);
	connection.query("INSERT INTO per (per0, per1, per2, per3, per4, per5, per6, per7, per8, per9, per10, per11) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",[2, "Susana", "García Salamanca", "García Salamanca, Susana", "17544395Z", "Si", "502311678940",2, "1985-06-12", "2015-02-16","","No",]);
	connection.query("INSERT INTO per (per0, per1, per2, per3, per4, per5, per6, per7, per8, per9, per10, per11) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",[3, "Carlos", "Sainz López", "Sainz López, Carlos", "45667132G", "Si", "456608902336",3, "1965-04-17", "2015-01-25","","No",]);
	connection.query("INSERT INTO per (per0, per1, per2, per3, per4, per5, per6, per7, per8, per9, per10, per11) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",[4, "Sara", "Escolano Pérez", "Escolano Pérez, Sara", "33456923K", "No", "436832698850",4, "1992-08-02", "2015-01-27","","Si",]);
	connection.query("INSERT INTO per (per0, per1, per2, per3, per4, per5, per6, per7, per8, per9, per10, per11) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",[5, "Jose Luis", "Sánchez Rodríguez", "Sánchez Rodríguez, Jose Luis", "23324498M", "No", "233240098039",4, "1963-12-20", "2015-04-15","","No",]);
	connection.query("INSERT INTO pe2 (pe20, pe21, pe22, pe23, pe24, pe25, pe26, pe27, pe28, pe29, pe210, pe211, pe212, pe213, pe214, pe215, pe216, pe217, pe218) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1, 1, "914595962", "602456791", "molivan@gmail.com", "Calle Apostol santiago 2, 1º Izq", "28005", "Madrid", "Madrid",,, "Marisa Pérez", "600213459",8,7,9,,"2014-12-01",,]);
	connection.query("INSERT INTO pe2 (pe20, pe21, pe22, pe23, pe24, pe25, pe26, pe27, pe28, pe29, pe210, pe211, pe212, pe213, pe214, pe215, pe216, pe217, pe218) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[2, 2, "915467923", "605609328", "susana85@yahoo.es", "Calle Serrano 24, 4º 2ª", "28001", "Madrid", "Madrid",,, "José Martinez", "604445628",6,5,6,1,"2015-02-18",,]);
	connection.query("INSERT INTO pe2 (pe20, pe21, pe22, pe23, pe24, pe25, pe26, pe27, pe28, pe29, pe210, pe211, pe212, pe213, pe214, pe215, pe216, pe217, pe218) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[3, 3, "914546622", "602229861", "carlos.sainz@hotmail.com", "Calle Gamboa 13, 1ºA", "28004", "Tres Cantos", "Madrid",,, "Miguel García", "600809449",7,7,8,1,"2015-03-24",,]);
	connection.query("INSERT INTO pe2 (pe20, pe21, pe22, pe23, pe24, pe25, pe26, pe27, pe28, pe29, pe210, pe211, pe212, pe213, pe214, pe215, pe216, pe217, pe218) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[4, 4, "919872324", "600045644", "saray@gmail.com", "Plaza Mayor 24, Casa 2", "28020", "Getafe", "Madrid",,, "Marcos López", "601490080",4,5,6,3,"2015-04-17",,]);
	connection.query("INSERT INTO pe2 (pe20, pe21, pe22, pe23, pe24, pe25, pe26, pe27, pe28, pe29, pe210, pe211, pe212, pe213, pe214, pe215, pe216, pe217, pe218) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[5, 5, "918900980", "606188977", "jlp@yahoo.es", "Calle Prado 57, Portal 2 10ºB", "28045", "Madrid", "Madrid",,, "José Martinez", "600912552",7,5,5,3,"2015-06-02",,]);
	connection.query("INSERT INTO frm (frm0, frm1, frm2, frm3, frm4, frm5, frm6, frm7, frm8, frm9, frm10, frm11, frm12, frm13, frm14) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1, "Prevención de Riesgos Laborales - PVDs", "Contenido mínimo exigido por la Ley PRL, para las personas que están más de 4 horas de su jornada laboral utilizando pantallas de visulación de datos","Requisitos mínimos marcados por la Ley 31/1995 de Prevención de Riesgos Laborales", "Reducir lesiones oculares, y mejorar las condiciones de trabajo","Externa","Online","Teorico","4 horas","2013-01-24",,"Técnico Superior de Prevención de Riesgos Laborales. Perteneciente al Servicio de Prevención de la empresa.",,,"Este curso no tiene coste."]);
	connection.query("INSERT INTO frm (frm0, frm1, frm2, frm3, frm4, frm5, frm6, frm7, frm8, frm9, frm10, frm11, frm12, frm13, frm14) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[2, "Manejo seguro de carretilla elevadora","Manejo básico de una carretilla elevadora, riesgos y medidas preventivas, procedimientos seguros, buenas prácticas.","Contenido teorico-práctico mínimo de 8 horas","Aprender a manejar la carretilla elevadora de manera segura","Externa","Presencial","Teorico","8 horas","2013-01-25",,"Haber realizado el curso básico de PRL. Experiencia de al menos 5 años utiliando carretillas elevadoras en entornos industriales.",,,"Realizar los meses de verano."]);
	connection.query("INSERT INTO cur (cur0, cur1, cur2, cur3, cur4, cur5, cur6, cur7, cur8, cur9, cur10, cur11, cur12, cur13, cur14, cur15, cur16, cur17, cur18, cur19, cur20) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1, "Curso PRL sobre PVDs", "CUR-1","Aprender buenas prácticas que eviten lesiones en los trabajadores.", anoSiguiente+"-08-04",anoSiguiente+"-08-06","Planificado","De 10 a 14","4 hrs",1,"Personal de oficina",,,,,,,,,,,]);
	connection.query("INSERT INTO cur (cur0, cur1, cur2, cur3, cur4, cur5, cur6, cur7, cur8, cur9, cur10, cur11, cur12, cur13, cur14, cur15, cur16, cur17, cur18, cur19, cur20) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[2, "Curso de Marketing en internet", "CUR-2","Conocer la últimas herramientas para el lanzamiento de campañas de marketing en internet.", "2015-04-14","2015-04-18","Finalizado","De 9 a 20","16 hrs",,"Departamento comercial",,,,,,,,,,,]);
	connection.query("INSERT INTO cup (cup0, cup1, cup2, cup3, cup4, cup5, cup6, cup7) VALUES(?,?,?,?,?,?,?,?)",[1, 1, 2,"El trabajador aplica lo aprendido correctamente.", "2013-01-03",,,,]);
	connection.query("INSERT INTO cup (cup0, cup1, cup2, cup3, cup4, cup5, cup6, cup7) VALUES(?,?,?,?,?,?,?,?)",[2, 1, 3,"El trabajador aplica lo aprendido correctamente.", "2014-01-03",,,,]);
	connection.query("INSERT INTO cup (cup0, cup1, cup2, cup3, cup4, cup5, cup6, cup7) VALUES(?,?,?,?,?,?,?,?)",[3, 2, 2,"El trabajador aplica lo aprendido correctamente.", "2013-02-16",,,,]);
//Proceso 5 Calibración
	connection.query("INSERT INTO equ (equ0, equ1, equ2, equ3, equ4, equ5, equ6, equ7, equ8, equ9, equ10, equ11, equ12, equ13) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Pie de rey","Mitutoyo","CD250X","45AA689G234","En uso","de 0 a 150mm","0.001 mm","Control de calidad, diametro externo","0.01","2014-06-09",,,"Cambiar la pila en la próxima calibración",]);
	connection.query("INSERT INTO cal (cal0, cal1, cal2, cal3, cal4, cal5, cal6, cal7, cal8, cal9, cal10) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[1,1,"Calibración inicial","2014-06-11","2014-06-12","Realizada","Cumple las especificaciones del fabricante, y nuestras necesidades internas",3,"",,,]);
	connection.query("INSERT INTO cal (cal0, cal1, cal2, cal3, cal4, cal5, cal6, cal7, cal8, cal9, cal10) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[2,1,"Calibración periódica","2016-06-11","","Planificada","",,"",,,]);
	connection.query("INSERT INTO eqc (eqc0, eqc1, eqc2, eqc3, eqc4, eqc5, eqc6, eqc7, eqc8, eqc9, eqc10, eqc11, eqc12, eqc13, eqc14, eqc15, eqc16, eqc17) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Cajas de plástico logotipo cliente","Tecnoplast","CRT345-B","","MP-253",anoPasado+"-01-01",anoActual+"-12-31",1,3,"Cedido","500 unidades","Conservar en lugar sin humedad y protegido de la radiación solar.","Montar en todos los productos suministrados a este cliente","Almacén de materias primas especiales",,,"Se devolverán las unidades no utilizadas.",]);
	connection.query("INSERT INTO eqc (eqc0, eqc1, eqc2, eqc3, eqc4, eqc5, eqc6, eqc7, eqc8, eqc9, eqc10, eqc11, eqc12, eqc13, eqc14, eqc15, eqc16, eqc17) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[2,"Molde de inyección","Innotech","M2405","","HR-58",anoActual+"-01-01",anoActual+"-12-31",2,3,"Cedido","1 unidad","Conservar en lugar sin humedad, evitar la oxidación.","Fabricación carcasas para motor","Almacén de moldes",,,"Se devolverá al finalizar el plazo establecido.",]);
//Proceso 6 Diseño
	connection.query("INSERT INTO dis (dis0, dis1, dis2, dis3, dis4, dis5, dis6, dis7, dis8, dis9, dis10, dis11, dis12, dis13, dis14, dis15, dis16, dis17, dis18, dis19) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Nuevo motor hibrido mixto",anoActual+"-01-01",anoActual+"-12-31","Diseño","Abierto",3,"Depto. Producción",,,"No ha habido cambios significativos","Reglamento eléctrico de Baja Tensión","Ver el pliego de condiciones del cliente",,,"Los criterios están detallados en el pliego de condiciones del cliente","Pendiente",,,"Sin observaciones",]);
	connection.query("INSERT INTO dir (dir0, dir1, dir2, dir3, dir4, dir5, dir6, dir7, dir8, dir9, dir10) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[1,1,"Primera revisión",anoPasado+"-08-18",anoPasado+"-08-19","Realizada","Sin cambios. Se está cumpliendo con lo planificado.",3,"",,,]);
	connection.query("INSERT INTO dir (dir0, dir1, dir2, dir3, dir4, dir5, dir6, dir7, dir8, dir9, dir10) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[2,1,"Segunda revisión",anoActual+"-11-12",,"Planificada","",,"",,,]);
//Proceso 7 Producción
	connection.query("INSERT INTO ctl (ctl0, ctl1, ctl2, ctl3, ctl4, ctl5, ctl6, ctl7, ctl8, ctl9, ctl10, ctl11, ctl12) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Pruebas de potencia","Control-14","2013-10-21","Vigente","Chequeo que el motor alcanza la potencia prevista a 5.000 revoluciones. Se comprobarán el 100% de los motores fabricados.","Garantizar el requisito de nuestro cliente.",,,"Alta",3,"cada motor deberá alcanzar los 400CV de potencia.","Sin observaciones",]);
	connection.query("INSERT INTO maq (maq0, maq1, maq2, maq3, maq4, maq5, maq6, maq7, maq8, maq9, maq10, maq11, maq12, maq13, maq14, maq15, maq16, maq17, maq18, maq19, maq20, maq21, maq22, maq23, maq24, maq25, maq26, maq27, maq28) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Fresadora","M73","Snechkered","NR2300B","CB345G5678","Activo",1,"2011-07-10","2013-09-12","Si",,,,,,,"R.D.1215/1997 Disposiciones mínimas de seguridad y salud para la utilización por los trabajadores de los equipos de trabajo.","Sin observaciones","IT-Instrucciones fresadora M73","Ver manual de intrucciones del fabricante","3","5","Taller de mantenimiento",,,,,,,]);
	connection.query("INSERT INTO man (man0, man1, man2, man3, man4, man5, man6, man7, man8, man9, man10) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[1,1,1,"Engrase general","Trimestral","Alta",1,"Engrasar todos los puntos móviles de la máquina, y aquellos que puedan sufrir corrosión.",3,,"Usar las grasas y aceites adecuados en cada caso.",]);
	connection.query("INSERT INTO man (man0, man1, man2, man3, man4, man5, man6, man7, man8, man9, man10) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[2,1,0,"Revisión inyector de taladrina","Anual","Media",0,"Revisar si el inyector de taladrina está obturado o dañado. Y asegurar que funciona correctamente.",3,,"Sin observaciones.",]);
	connection.query("INSERT INTO mrv (mrv0, mrv1, mrv2, mrv3, mrv4, mrv5, mrv6, mrv7, mrv8, mrv9, mrv10) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[1,1,1,1,"Se ha sustituido un rodamiento por desgaste.","Mantesa S.L.","2014-07-23","2014-10-23",,,"Sin observaciones.",]);
	connection.query("INSERT INTO mrv (mrv0, mrv1, mrv2, mrv3, mrv4, mrv5, mrv6, mrv7, mrv8, mrv9, mrv10) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[2,1,1,2,"Todo correcto.","Sara Escolano",anoActual+"-04-06",anoSiguiente+"-02-06",,,"Sin observaciones.",]);
//Proceso 8 Compras
	connection.query("INSERT INTO prv (prv0, prv1, prv2, prv3, prv4, prv5, prv6, prv7, prv8, prv9, prv10, prv11, prv12, prv13, prv14, prv15, prv16, prv17, prv18, prv19, prv20, prv21) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Mantesa S.L.","B28066624","914404050","914404051","admin@mantesa.es","2014-09-28","Calle B 32, Poligono industrial Campoalto","28138","Madrid","Felix Monteagudo","605449891","Responsable comercial","felix@mantesa.es","Servicios de mantenimiento de máquinas.","Un mal trabajo de mantenimiento, puede deterner la producción por una avería.","2016-03-25","Media","Homologado",,,"Sin observaciones",]);
	connection.query("INSERT INTO pre (pre0, pre1, pre2, pre3, pre4, pre5, pre6, pre7, pre8, pre9, pre10, pre11, pre12, pre13) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,1,"Evaluación inicial","2014-09-30","Realizada",2,5,2,5,"Todo correcto. Muy puntuales.",,,"Sin observaciones",,]);
	connection.query("INSERT INTO pre (pre0, pre1, pre2, pre3, pre4, pre5, pre6, pre7, pre8, pre9, pre10, pre11, pre12, pre13) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[2,1,"Evaluación periódica",anoSiguiente+"-12-01","Planificada",,,,,"",,,"",,]);
	connection.query("INSERT INTO ncp (ncp0, ncp1, ncp2, ncp3, ncp4, ncp5, ncp6, ncp7) VALUES (?,?,?,?,?,?,?,?)",[1,1,"Mala gestión de los residuos generados","NC1-1","2014-11-26","2014-11-27","Después de realizar los trabajos de mantenimiento del torno de taller, dejan el suelo sucio de resto de grasas y aceites usados.","Vienen al día siguiente a limpiarlo todo. Indicando que no se volverá a repetir.",]);
//Proceso 9 ACP y Auditorías
	connection.query("INSERT INTO ncs (ncs0, ncs1, ncs2, ncs3, ncs4, ncs5, ncs6, ncs7, ncs8, ncs9, ncs10, ncs11) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Enviados productos incorrectos a cliente.","NC15-1",anoPasado+"-03-01",anoPasado+"-03-12","Depto. Expediciones",3,"Se envia por error unos equipos incorrectos a un cliente.","El operario elige unos palets incorrectos, al equivocarse al leer el código de los equipos.","Se sustituyen los equipos al cliente al día siguiente. Sin coste alguno para él.",,1,]);
	connection.query("INSERT INTO acp (acp0, acp1, acp2, acp3, acp4, acp5, acp6, acp7, acp8, acp9, acp10, acp11, acp12, acp13, acp14, acp15, acp16) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Implantación del sistema de código de barras en Expediciones.","AC15-1","AC","",anoPasado+"-03-02",3,"Depto. Producción y Comercial",anoPasado+"-03-05",anoPasado+"-04-25","Finalizada","Se adquirirán nuevas pistolas de lectura de codigos de barras, y ampliarán las licencias de uso del software.","Se han comprado 3 nuevas pistolas. Se ha formado para su uso al personal de expediciones.","En los tres últimos meses no ha habido ninguna incidencia.",anoPasado+"-04-28",anoPasado+"-07-28","07-1",]);
	connection.query("INSERT INTO acp (acp0, acp1, acp2, acp3, acp4, acp5, acp6, acp7, acp8, acp9, acp10, acp11, acp12, acp13, acp14, acp15, acp16) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[2,"Nuevo procedimiento de gestión de residuos para empresas externas.","AC15-2","AC","","2014-11-27",2,"Personal de Mantenimiento","2014-11-30","2014-12-30","Finalizada","Desarrollar un nuevo procedimiento de control de subcontratas, que garantice que estas cumplen con los protocolos internos de actuación. En concreto con la gestión de los residuos.","Se ha definido un nuevo protocolo de seguimiento de los trabajos subcontratados.","En los últimos 5 meses no se ha registrado ninguna incidencia.",anoPasado+"-12-28",anoActual+"-01-13","12-1",]);
	connection.query("INSERT INTO ncs (ncs0, ncs1, ncs2, ncs3, ncs4, ncs5, ncs6, ncs7, ncs8, ncs9, ncs10, ncs11) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",[2,"Falta de evaluaciones de proveedor.","A15-1/NC-1",anoPasado+"-05-15",anoPasado+"-05-16","Auditoria 1",1,"Faltan evidencias de que realice una evaluación inicial a todos los proveedores, como se indica en el procedimiento interno.","Los proveedores históricos no han pasado dicha evaluación inicial, pero si están pasando las periódicas.","Se modificará el procedimiento interno para flexibilizar dichas evaluaciones iniciales en los proveedores con una antiguiedad mayor a 2 años.","Todos los proveedores o han pasado la evaluación inicial o son considerados históricos.",8,]);
	connection.query("INSERT INTO aud (aud0, aud1, aud2, aud3, aud4, aud5, aud6, aud7, aud8, aud9, aud10, aud11, aud12, aud13, aud14, aud15, aud16, aud17, aud18, aud19, aud20) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Auditoría interna "+anoPasado,"AUDIT-1","Finalizada",anoPasado+"-05-02",anoPasado+"-05-05",1,2,,"Todo el Sistema de Gestión.",1,1,0,,,,,,,"Se distribuye en papel a los jefes de departamento auditados.","Sin incidencias.",]);
//Proceso 10 Satisfacción
	connection.query("INSERT INTO rec (rec0, rec1, rec2, rec3, rec4, rec5, rec6, rec7, rec8, rec9, rec10, rec11, rec12) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Retraso en la entrega de un pedido urgente.","REC-1",1,anoActual+"-01-21","En proceso",,3,"Nos retrasamos una semana en entregar un pedido del cliente","Entregamos el pedido una semana después, y negociamos con nuestro cliente una compensación por el retraso.","El cliente está conforme con la bonificación en los próximos pedidos",,,]);
	connection.query("INSERT INTO est (est0, est1, est2, est3, est4, est5, est6, est7, est8, est9, est10, est11, est12, est13, est14, est15, est16, est17, est18, est19) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,"Estudio satisfacción anual.","Finalizado","2014-12-01","2014-12-15","Conocer la valoración que tienen nuestros clientes de la empresa, nuestros productos, y su evolución respecto al año pasado.","Todos los clientes a los cuales les hemos facturado algún producto durante este año.","¿Como valora a nuestra empresa?","¿Nos considera una marca de prestigio?","¿Cómo valora la relación calidad/precio de nuestros productos?","¿Cómo valora nuestro servicio de atención postventa?","¿Nos recomendaría a otras empresas?","¿Cómo valora nuestros plazos de entrega?","¿Cómo valora los precios de nuestros productos?","¿?","¿?","¿?",,,"Las preguntas son iguales al año anterior para poder comparar los resultados obtenidos.",]);
	connection.query("INSERT INTO enc (enc0, enc1, enc2, enc3, enc4, enc5, enc6, enc7, enc8, enc9, enc10, enc11, enc12, enc13, enc14, enc15, enc16, enc17, enc18, enc19, enc20, enc21, enc22, enc23, enc24, enc25, enc26, enc27, enc28, enc29, enc30, enc31, enc32) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[1,1,"EST15-1",1,"Contestada","2014-12-02","2014-12-09",7.20,"Javier Aguirre, Responsable de Compras.","Muy posivamente.",8,"En algunos productos creo que son un referente.",7,"Bueno. Aunque hay empresas mejores.",5,"Muy correcto. Son rápidos en dar soluciones.",8,"Si, claro.",6,"Mejorables, sobre todo en los meses de verano.",4,"Caros, en algunos productos concretos.",5,,5,,5,,5,"El encuestado sugiere ampliar la gama de colores de determinados productos.",,,"El encuestado ha mostrado gran interés en rellenar la encuesta.",]);
	connection.query("INSERT INTO enc (enc0, enc1, enc2, enc3, enc4, enc5, enc6, enc7, enc8, enc9, enc10, enc11, enc12, enc13, enc14, enc15, enc16, enc17, enc18, enc19, enc20, enc21, enc22, enc23, enc24, enc25, enc26, enc27, enc28, enc29, enc30, enc31, enc32) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[2,1,"EST15-2",2,"Contestada","2014-12-02","2014-12-07",6.60,"Maria Esteve, Jefa del Depto. Logística.","Mejorable en determinados aspectos.",4,"Bien. No tengo una mala opinión sobre ella",5,"Correcta.",5,"Las veces que he hablado con ellos muy bien.",9,"Si.",5,"Buenos, aunque otras empresas entregan más rápido y mejor.",6,"No son baratos, pero tampoco muy caros. Están bien.",7,,5,,5,,5,"No sugiere nada más.",,,"Sin observaciones.",]);
//FIN..............


console.log(bd+" probarBD(): Datos de prueba cargados! (next: crear carpeta para docs)");

}

exports.crearBD = crearBD;
exports.crearTablas = crearTablas;
exports.cargarBD = cargarBD;
exports.probarBD = probarBD;

