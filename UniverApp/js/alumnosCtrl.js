app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){

	$scope.setActive("mAlumnos");

	$scope.alumnos = {};
	$scope.position = 5;

	$http.get('php/servicios/alumnos.listado.php').success(function(data){
		$scope.alumnos = data;
	});

	$scope.siguientes = function(){
		if ($scope.alumnos.length > $scope.position){
			$scope.position +=5;
		}
	}

	$scope.anteriores = function(){
		if ($scope.position > 5){
			$scope.position -=5;
		}
	}

}]);