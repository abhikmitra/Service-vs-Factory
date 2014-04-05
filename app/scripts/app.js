'use strict';

angular.module('serviceVsFactoryApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/another', {
        templateUrl: 'views/main.html',
        controller: 'AnotherctrlCtrl'
      })
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/onemore', {
            templateUrl: 'views/main.html',
            controller: 'OnemoreCtrl'
        })
      .otherwise({
        redirectTo: '/main'
      });
  });
