//iife construct
(function (angular) {
'use strict';
 // we should write inside paranthasis '$rootScope'
  function ProjectControl($scope,UserFactory,LoginService) {
    $scope.init = function () {

      /*$scope.firstName = 'Krishna Kanth';  setting the data
       $scope.lastName = 'Kondoju'; */

      //another method to create one way data binding
      // $scope.user = {

      /*firstName: 'krishna kanth',
       lastName: 'kondoju'*/
      //}; //$rootScope.user

      // console.log(UserFactory.user);
      //extend the factory object by adding another property

      /*var temObj = {
       firstName : 'krishna',
       lastName : 'kondoju',
       rollNumber: 55
       };

       angular.extend(UserFactory.user,temObj); */
        //create a clone of the factroy of the user in the factory
      $scope.user = angular.copy(UserFactory.user);
      console.log($scope.user);

      LoginService.checkLogin($scope);
    };
    $scope.init();
  }

   // console.log($scope.user);
   /* if($scope.user.username === '' && $scope.user.password === '') {
      $location.path('/home');
    }
  }*/

  ProjectControl.$inject = ['$scope','UserFactory','LoginService'];    //'$rootScope' we can injuct to use in totoal html

  //call the module from app.js file
  angular.module('ProjectAppi',[]).controller('ProjectController',ProjectControl);
})(window.angular || (window.angular = {}));
