(function(angular) {
  'use strict';

  //call back function
   function KrishnaControll ($scope) {
     console.log($scope);
     /*$scope.user = {
       phoneNumber: '',
       fuck:'',
       suck: '',
       firstName: 'kondju',
       lastName : 'krishnakk'

     };

     $scope.checkFirst = function () {
       if($scope.user.suck === 'krishna'){
         $scope.user.fuck = 'hero';
       }
        else{
         $scope.user.fuck='';
       }
     };*/

   }
   KrishnaControll.$inject = ['$scope'];
//we use inject to pass the parameters and to injuct the dependency

  //creating new module and new controller
 angular.module('ProjectApp.controllers',[]).controller('KrishnaController',KrishnaControll);

 //KrishnaControll is the dependency for KrishnaController
  //ProjectApp.Controllers is the new creation of modules
  //if we keep projectApp.Controller then it is calling function
  //if we keep 'projectApp.Controllers'.[] then we are creating module
  // take controller dependency and write in the function


})(window.angular || (window.angular = {}));
