'use strict';

angular
  .module('francaisWhatYouSeeApp')
  .factory('Level', ['$resource', function($resource){
    var baseUrl = '/api/games/:game/:level',
        defaultParams = {
          game: '@game',
          level: '@level'
        },
        additionalActions = {
          getNextQuestion: {
            method: 'GET',
            params: {
              getNextQuestion: true,
              currentQuestion: '@currentQuestion'
            },
            isArray: false
          },
          getPrevQuestion: {
            method: 'GET',
            params: {
              getPrevQuestion: true,
              currentQuestion: '@currentQuestion'
            },
            isArray: false
          } 
        };
    
    return $resource(baseUrl, defaultParams, additionalActions);
  }]);
