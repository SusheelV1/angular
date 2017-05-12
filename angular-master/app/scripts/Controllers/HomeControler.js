//iife construct
(function (angular) {
  'use strict';
  //call back function
  function HomeController ($scope,UserFactory,LoginService) {
   /*$scope.user = UserFactory.user;

   $scope.loginUser = function () {
     LoginService.performLogin();
   };*/
   //vm = viewmodel
    var vm =  this;
    vm.user = UserFactory.user;
    vm.loginUser = function(){
      LoginService.performLogin();
    };
  }
  //inject the dependencies
  HomeController.$inject = ['$scope','UserFactory','LoginService'];

  //creating module and define controller

  angular.module('coustemApp',[]).controller('HomeControler',HomeController);

})(window.angular || (window.angular = {}));
