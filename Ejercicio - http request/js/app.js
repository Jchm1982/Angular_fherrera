(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

	//Este es un arreglo vacio
	$scope.profesores = {};

	//Vamos a cragar los datos de manera dinamica, con la instruccion http que se pasa por parametro en la funcion
	//Dentro del parectesis debemos colocar el archivo que queremos leer
	//data es un parametro de retorno
	$http.get('json/profesores.json').success(function(data){
		//Este es el codigo que se ejecutara, cuando es correcta la peticion
		$scope.profesores = data.profesores;

	});





}]);





})();
