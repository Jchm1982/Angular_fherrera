(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){

	//ARRREGLO
	$scope.listado = ["Fernando Herrera","Melisa Flores","Juan Carlos Pineda", "Juan Carlos Hernandez"];

	$scope.listadoProfesores = {
		profesores:[{
			nombre: "Fernando Herrera2",
			edad:29,
			clase: "PEE"
		},
		{
			nombre: "Melisa Flores2",
			edad:24,
			clase: "ICE"
		},
		{
			nombre: "Juan Carlos2",
			edad:42,
			clase: "M110"
		}]
	};



}]);





})();
