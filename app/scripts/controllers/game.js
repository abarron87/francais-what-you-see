'use strict';

angular
	.module('francaisWhatYouSeeApp')
	.controller('GameCtrl', ['$scope', '$routeParams', '$http', 'Game', 'Progress', function ($scope, $routeParams, Game, Progress) {
		console.log('Route params:', $routeParams);
		$scope.game = {};
		$scope.progress = {};
		$scope.status = "";

		Game.get().success(function(game) {
			$scope.game = game;
			$scope.progress = Progress.getGameProgress($scope.game._id);
			$scope.status = Progress.getGameStatus($scope.progress);
		});
	}]);
