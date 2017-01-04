angular.module('BandSite', ['ngRoute', 'angular-storage', 'RouteControllers', 'NavDirective', 'NewsCont', 'MailList', 'Footer']);

angular.module('BandSite').config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'BandHome'
	})

	.when('/music', {
		templateUrl: 'templates/music.html'
	})

	.when('/bookings',{
		templateUrl: 'templates/bookings.html',
		controller: 'MailListSubmit'
	})

	.when('/social', {
		templateUrl: 'templates/social.html'
	})

	.when('/aboutus', {
		templateUrl: 'templates/aboutus.html'
	});
});

