'use strict';

describe('Service: Progress', function () {

  // load the service's module
  beforeEach(module('francaisWhatYouSeeApp'));

  // instantiate service
  var Progress;
  beforeEach(inject(function (_Progress_) {
    Progress = _Progress_;
  }));

  it('should do something', function () {
    expect(!!Progress).toBe(true);
  });

});
