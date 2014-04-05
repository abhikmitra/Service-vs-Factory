'use strict';

describe('Controller: AnotherctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('serviceVsFactoryApp'));

  var AnotherctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnotherctrlCtrl = $controller('AnotherctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
