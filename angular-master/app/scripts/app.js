// iife construct
(function (angular) {
  'use strict';
  //routeprovider
  function AppConfig ($routeProvider){
    $routeProvider
      .when('/home',{
        templateUrl:'../template/home.temp.html',
        controller: 'HomeControler as HomeCtrl'
      })
      .when('/about',{
        templateUrl:'../template/about.html',
        controller: 'ProjectController'
      })
      .otherwise('/home');
  }
  AppConfig.$inject = ['$routeProvider'];
  function AppRun($rootScope) {
    $rootScope.user = {
      firstName: '',
      lastName: ''
    };
    AppRun.$inject = ['$rootScope'];
  }
  //callback function to be excuted once as soon as the app is intialized
  //function ProjectController() {
  //}
  //injecting a dependency
  //AppRun.$injuct = [];
  //to define the app module, we write:
  angular.module('projectApp',
                  ['ngAnimate',
                    'ngAria',
                    'ngCookies',
                    'ngMessages',
                    'ngResource',
                    'ngRoute',
                    'ngSanitize',
                    'ngTouch',
                    'coustemApp',
                    'ProjectAppi',
                   'projectApp.services',
                    'ProjectApp.controllers',
                    'projectApp.directives'
                    ])
  .config(AppConfig)
    .run(AppRun);
    //.run(['$routeScope',function ($routeScope) {
    //}]);
  //create a custom module for services
  angular.module('projectApp.services',[]);
  //create a custom module for directives
  angular.module('projectApp.directives',[]);
})(window.angular || (window.angular = {}));
