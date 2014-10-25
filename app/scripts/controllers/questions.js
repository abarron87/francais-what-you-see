'use strict';

angular.module('francaisWhatYouSeeApp')
  .controller('QuestionsCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
