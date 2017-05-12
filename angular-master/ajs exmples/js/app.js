var app =  angular.module('sampleApp',['ngRoute']);

/* routing concept */
app.config(function($routeProvider){
	$routeProvider
	.when("/", {    //when is method
		templateUrl: "views/index.html"
		controller: "loginCtrl"
	}).when'/createUser',(
	templateUrl: ""
	
});