var app = angular.module('portfolioApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		templateUrl : 'pages/home.html',
		url         : '/home'
	})
	.state('resume', {
		templateUrl : 'pages/resume.html',
		url         : '/resume'
	})
	.state('contact', {
		templateUrl : 'pages/contact.html',
		url         : '/contact'
	});

});

app.controller('mainController', function($scope) {


});

app.controller('resumeController', function($scope) {


});

app.controller('contactController', function($scope) {


});