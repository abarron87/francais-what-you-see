'use strict';

angular
  .module('francaisWhatYouSeeApp')
  .factory('Game', ['$routeParams', '$http', 'Progress', function ($routeParams, $http, Progress) {
    // Private stuff
    var gameProgress = {};

    // Public API here
    return {
      getAll: function(){
        return $http.get('/api/games');
      },

      get: function(gameSlug){
        var game = $routeParams.game || gameSlug;

        return $http.get('/api/games/' + game);
      },

      getCurrentLevelPath: function () {
        return '/games/' + $routeParams.game + '/' + $routeParams.level;
      },

      isCompleted: function(id){
        return Progress.getGameProgress(id).completed;
      },

      isInProgress: function(id){
        return Progress.getGameProgress(id).inProgress;
      },

      isLocked: function(id){
        return Progress.getGameProgress(id).locked;
      }
    };
  }]);
