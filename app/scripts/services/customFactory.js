'use strict';

angular.module('serviceVsFactoryApp')
    .factory('customFactory', function () {

        console.log("CustomFactory has been Called")
        var localVariable = 1;
        console.warn("Value of this inside a factory",this,"Notice the $get")

        return {
            test: function () {
                console.warn("Value of this inside the object a factory",this,"Notice the __proto__")
                return ++localVariable;
            },
            thisVariable : 100
        };
    })
    .factory('customFactoryThatInstantiatesAfunction', function () {

        console.log("CustomFactory has been Called")
        var localVariable = 1;
        console.warn("Value of this inside a factory",this,"Notice the $get")
        function Customservice() {
            console.log("CustomService has been Called");
            console.warn("Value of this inside a factory", this, "Notice the __proto__ by putting a break point")
            var localVariable = 1;
            this.thisVariable = 100;
            this.test = function () {

                return ++localVariable;
            }
        }
        return new Customservice();
    })
    .factory('customFactoryThatReturnsAFunction', function () {


        var staticVariable = 1;


        function customFn(){
            this.value=1;
            console.log("custom Function is called")
        }
        customFn.prototype.increment = function(){
            staticVariable++;
            return ++this.value;
        }
        return customFn
    });
