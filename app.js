var app = angular.module('angularSpotify', ['ui.router', 'ngMaterial']);
app.config(['$stateProvider',
	'$urlRouterProvider', 
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('/', {
			url: '/',
			templateUrl: 'index.html', 
			controller: 'MainCtrl'
		})
		$urlRouterProvider.otherwise('/');
	}
]);