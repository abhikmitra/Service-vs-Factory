'use strict';

angular.module('serviceVsFactoryApp')
  .controller('OnemoreCtrl', function ($scope,Customservice,customFactory) {
    console.log(Customservice.test());
    console.log(customFactory.test());
        console.log("Incrementing variable on service",++Customservice.thisVariable);
    console.log("Incrementing variable on factory",++customFactory.thisVariable);
    console.log("Constructor of  a service",Object.getPrototypeOf(Customservice.constructor));
    console.log("Random text on factory is accessible from here",customFactory.addingRandom);
    console.log("Random text on service is accessible from here",Customservice.addingRandom);

        $scope.heading="Similar Singleton behaviour behaviour with factories and services";
        $scope.content = "This page demonstrates that factories and services are both single tons as the values get persisted across the app"
  });
