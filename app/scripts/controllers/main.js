'use strict';

angular.module('serviceVsFactoryApp')
    .controller('MainCtrl', function ($scope, customFactory, Customservice,customFactoryThatInstantiatesAfunction) {
        console.log("Calling test function on service",Customservice.test());
        console.log("Calling test function on factory",customFactory.test());
        console.log("Calling test function on factory that returns a function",customFactoryThatInstantiatesAfunction.test());
        console.log("Incrementing variable on service",++Customservice.thisVariable);
        console.log("Incrementing variable on factory",++customFactory.thisVariable);
        customFactory.addingRandom="random text";
        Customservice.addingRandom="random text";
        $scope.heading="Similar behaviour with factories and services";
        $scope.content = "This page demonstrates that factories and services can also be made to behave similarly.Check the console and put debuggers to see how the this changes in service and factory"
    });
