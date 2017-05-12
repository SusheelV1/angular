app.controller('loginCtrl', function($scope, $location){

	$scope.login = function(){
		$location.path('/createUser')
	}

});