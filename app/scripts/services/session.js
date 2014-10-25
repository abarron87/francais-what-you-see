'use strict';

angular.module('francaisWhatYouSeeApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
