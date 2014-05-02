var angulargap = angular.module("angulargap", ['ngRoute']);

// configure our routes
angulargap.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'templates/about.html',
			controller  : 'aboutController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'templates/contact.html',
			controller  : 'contactController'
		});
});
