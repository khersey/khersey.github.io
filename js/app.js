var app = angular.module('portfolioApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		templateUrl : 'home.html',
		url         : '/home'
	})
	.state('resume', {
		templateUrl : 'resume.html',
		url         : '/resume'
	})
	.state('contact', {
		templateUrl : 'contact.html',
		url         : '/contact'
	});

});

app.controller('mainController', function($scope) {


});

app.controller('resumeController', function($scope) {


});

app.controller('contactController', function($scope) {


});