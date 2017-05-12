
function AppConfig($routeProider) {
  $routeProider
    .when('/home',{
      templateUrl:'',
      controller: ''
    })
    .otherwise('/home');
}
AppConfig.$inject = ['$routeProvider'];

.config(AppConfig);

//controller
function HomeController($scope,$location) {
  $scope.user = {
    'userName':'',
    'password':''

  };
  $scope.loginUser = function () {
    if($scope.user.userName === 'krishna' && $scope.user.password === 'krishna') {
      console.log('login succesfull');
      $location.path('/about');
    }
  };
}

HomeController.$inject = ['$scope','$locaiton'];
