//iife construct
(function (angular) {
  'use strict';
//callback for the factory service type
  function UserFactroy() {
    //refrence the this variable
    var self = this;
    self.user = {
      username:'',
      password:''
    };
    return self;
  }
  //Injecting the dependencies
  UserFactroy.$inject = [];

  //define the factory service type
  angular.module('projectApp.services').factory('UserFactory',UserFactroy);
})(window.angular || (window.angular = {}));

