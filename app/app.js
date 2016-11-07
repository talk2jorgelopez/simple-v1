var myPortfolioApp = angular.module('myPortfolioApp', ['ngRoute', 'myPortfolioCtrl']);

myPortfolioApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider.
	when ('/', {
		templateUrl: 'app/templates/main.html',
		controller: 'MainCtrl'
	}).
	when ('/edu', {
		templateUrl: 'app/templates/education.html',
		controller: 'EduCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);