For every angular module definition (in short. ng-app), there a $rootScope object assigned in our app file this $rootScope tell the 
angular that is it view model.

***$rootScope is a scope variable that is global of all other scopes in angular app

//callback function to be excuted once as soon as the app is intialized
  function AppRun($rootScope) {
    console.log($rootScope);
  }
  //injecting a dependency
AppRun.$injuct = ['$rootScope'];
.run(AppRun);


$rootScope -> ng-app


$scope --> ng-controller

$scope is the child of $rootScope and it is the viewmodel only for our controller
