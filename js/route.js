var crydecApp = angular.module('crydecApp', ['ngRoute']);

crydecApp.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/pages/home/home.html',
		})
		.when('/home', {
			templateUrl: '/pages/home/home.html',
			controller: 'homeController'
		})
		.when('/about', {
			templateUrl: '/pages/about/about.html',
			controller: 'aboutController'
		})
		.when('/cry', {
			templateUrl: '/pages/cry/cry.html',
			controller: 'cryController'
		})
		.when('/dec', {
			templateUrl: '/pages/dec/dec.html',
			controller: 'decController'
		})
		.when('/chart', {
			templateUrl: '/pages/chart/chart.html',
			controller: 'chartController'
		})
		.when('/contact', {
			templateUrl: '/pages/contact/contact.html',
			controller: 'contactController'
		});
});

crydecApp.directive("navBar", function() {
    return {
		restrict: "E",
        templateUrl : "pages/navbar.html"
    };
});
