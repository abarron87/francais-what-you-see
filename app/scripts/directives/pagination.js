'use strict';

angular
	.module('francaisWhatYouSeeApp')
  .directive('pagination', ['Game', 'Level', '$routeParams', function(Game, Level, $routeParams) {
    return {
      templateUrl: 'partials/pagination',
      link: function(scope, element, attrs) {
      	scope.currentLevelPath = Game.getCurrentLevelPath();
      	scope.next = null;

        Level.getNextQuestion({
        	game: $routeParams.game,
        	level: $routeParams.level,
        	currentQuestion: scope.questionId
        }, function(q){
        	scope.next = (q && q.question) ? q.question.name : null;
        }, function(err){
        	// error;
        });
      }
    };
  }]);
