'use strict';

angular
	.module('francaisWhatYouSeeApp')
	.controller('GamesCtrl', ['$scope', 'Game', 'Progress', function ($scope, Game, Progress){
		$scope.games = [];

	  	Game.getAll().success(function(games){
	  		for(var i = 0, len = games.length; i < len; i++){
	  			var progress = Progress.getGameProgress(games[i]._id);
	  			games[i].local = {
	  				progress: progress,
	  				status: Progress.getGameStatus(progress)
	  			};
	  		}

			$scope.games = games;
		});
	}]);
