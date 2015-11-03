
var app2 = angular.module("ODIPApp", []);

app2.config(function($routeProvider){
	$routeProvider
		.when("/", {controller: Controller1, templateUrl: "pages/00.html"})
		.when("/A0", {controller: Controller1, templateUrl: "pages/A0.html"})
		.when("/A1", {controller: Controller1, templateUrl: "pages/A1.html"})
		.when("/A2", {controller: Controller1, templateUrl: "pages/A2.html"})
		.when("/A3", {controller: Controller1, templateUrl: "pages/A3.html"})
		.when("/Z1", {controller: Controller1, templateUrl: "pages/Z1.html"})
		.when("/B0", {controller: Controller1, templateUrl: "pages/B0.html"})
		.when("/B1", {controller: Controller1, templateUrl: "pages/B1.html"})
		.when("/B2", {controller: Controller1, templateUrl: "pages/B2.html"})
		.when("/B3", {controller: Controller1, templateUrl: "pages/B3.html"})
		.when("/C0", {controller: Controller1, templateUrl: "pages/C0.html"})
		.when("/C1", {controller: Controller1, templateUrl: "pages/C1.html"})
		.when("/D0", {controller: Controller1, templateUrl: "pages/D0.html"})
		.when("/D1", {controller: Controller1, templateUrl: "pages/D1.html"})
		.when("/D2", {controller: Controller1, templateUrl: "pages/D2.html"})
		.when("/D3", {controller: Controller1, templateUrl: "pages/D3.html"})
		.otherwise({redirectTo:'/'});
});

	//No es necesaria esta función, porque cargo el nombre del proceso desde la base de datos con e.js
var idproceso;

function Controller1($location){

	if ($location.path()=="/") {idproceso = 1;};
	if ($location.path()=="/csv") {idproceso = 10;};

	//alert ($location.path());
}
