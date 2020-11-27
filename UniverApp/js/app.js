var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
	$scope.menuSuperior = 'parciales/menu.html';

<<<<<<< HEAD
	$scope.setActive = function(Opcion){

		$scope.mInicio ="";
		$scope.mProfesores ="";
		$scope.mAlumnos ="";

		$scope[Opcion] = "active";
	}
}]);
=======
}]);

>>>>>>> 1b4a838a224f76ce2730993acbb24cd166a46f4d
