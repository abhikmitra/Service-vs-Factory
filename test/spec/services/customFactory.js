'use strict';

describe('Service: Customfactory', function () {

  // load the service's module
  beforeEach(module('serviceVsFactoryApp'));

  // instantiate service
  var Customfactory;
  beforeEach(inject(function (_Customfactory_) {
    Customfactory = _Customfactory_;
  }));

  it('should do something', function () {
    expect(!!Customfactory).toBe(true);
  });

});
