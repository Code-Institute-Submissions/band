angular.module('BandSite', ['ngRoute', 'angular-storage', 'RouteControllers', 'NavDirective', 'NewsCont', 'MailList', 'Footer', 'ngMap']);

angular.module('BandSite').config(function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl: 'templates/home.html'
	})

	.when('/music', {
		templateUrl: 'templates/music.html',
		controller: 'MusicSearch'
	})

	.when('/bookings',{
		templateUrl: 'templates/bookings.html',
		controller: 'BookingsForm'
	})

	.when('/social', {
		templateUrl: 'templates/social.html'
	})

	.when('/aboutus', {
		templateUrl: 'templates/aboutus.html'
	});
});

