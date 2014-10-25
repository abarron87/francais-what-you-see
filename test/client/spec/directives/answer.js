'use strict';

describe('Directive: answer', function () {

  // load the directive's module
  beforeEach(module('francaisWhatYouSeeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<answer></answer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the answer directive');
  }));
});
