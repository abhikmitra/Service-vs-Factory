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
    .factory('customFactoryThatReturnsAFunction', function () {

        this.privateVariable = 1;
        var a = 1;


        function customFn(){
            this.value=1;
            console.log("custom Function is called")
        }
        customFn.prototype.increment = function(){
            return ++this.value;
        }
        return customFn
    });
