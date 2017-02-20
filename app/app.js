'use strict';
var appModule = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.header',
  'myApp.concert',
  'angular-toasty'
]);

appModule.config(function($locationProvider, $routeProvider, toastyConfigProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/home', {
	  templateUrl: 'home/index.html',
	  controller: 'HomeCtrl as homeCtrl'
	})
  	.when('/concert', {
		  templateUrl: 'concert/index.html',
	  	controller: 'ConcertCtrl as concertCtrl'
	})
    .otherwise({redirectTo: '/home'});

  toastyConfigProvider.setConfig({
    sound: false,
    html: true,
    position: 'top-right',
    theme: 'bootstrap',
    timeout: 5000
  });
});

appModule.constant('API_BASE_URL', 'http://wakatickets.wakasolutions.com/');

// Constant for lodash to be inyected in controllers, services...
appModule.constant('_', window._);
