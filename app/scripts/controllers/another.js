'use strict';

angular.module('serviceVsFactoryApp')
  .controller('AnotherctrlCtrl', function ($scope,customFactoryThatReturnsAFunction) {

        var obj = new customFactoryThatReturnsAFunction();
        console.log("Increment value",obj.increment());
        $scope.heading="Factory that can be used as constructors";
        $scope.content = " This page demonstrates that factories and services are lazy initialized.Then it demonstrates how to form a factory that can be used as a constructor/object factory"
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
