//iife construct
(function (angular) {
  'use strict';
//callback for the factory service type
  function LoginService(UserFactory,$location) {
    //refrence the this variable
    var self = this;

    self.performLogin = function () {
      if(UserFactory.user.username === 'krishna' && UserFactory.user.password === 'krishna'){
        console.log('Login was succesful');
        $location.path('/about');
    }
    };
    //logic to check if the username and password fields are not empty
    self.checkLogin = function($scope){
      if($scope.user.username === '' && $scope.user.password === ''){
        $location.path('/home');
      }
    };
  }
  //Injecting the dependencies
  LoginService.$inject = ['UserFactory','$location'];

  //define the factory service type
  angular.module('projectApp.services').factory('LoginService',LoginService);
})(window.angular || (window.angular = {}));

