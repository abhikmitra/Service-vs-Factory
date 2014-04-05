'use strict';

angular.module('serviceVsFactoryApp')
    .service('Customservice', function Customservice() {
        console.log("CustomService has been Called");
        console.warn("Value of this inside a factory",this,"Notice the __proto__ by putting a break point")
        var localVariable = 1;
        this.thisVariable = 100;
        this.test = function () {

            return ++localVariable;
        }
    });
