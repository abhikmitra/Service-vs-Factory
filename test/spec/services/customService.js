'use strict';

describe('Service: Customservice', function () {

  // load the service's module
  beforeEach(module('serviceVsFactoryApp'));

  // instantiate service
  var Customservice;
  beforeEach(inject(function (_Customservice_) {
    Customservice = _Customservice_;
  }));

  it('should do something', function () {
    expect(!!Customservice).toBe(true);
  });

});
