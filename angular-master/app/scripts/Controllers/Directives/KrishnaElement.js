//iife construct
(function (angular) {
 'use strict';
  function KrishnaElement() {
   /* var self = this;
    self.element = {
      restrict: 'E',
      link: function () {
      },*/
   return {
     restrict : 'E',
      /*E -> element
      c-> class
      A-> attribute*/

      templateUrl: '../../template/KrishnaElement.html',
     /*link: function (scope,element,attribute) {
       console.log(attribute.krishna);
       console.log(element[0].children[0]);
     }*/
    };
    //return self.element;
  }
  KrishnaElement.$inject = [];

//call the directives module
  angular.module('projectApp.directives').directive('krishnaElement',KrishnaElement);

})(window.angular || (window.angular = {}));
