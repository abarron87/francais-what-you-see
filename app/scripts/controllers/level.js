'use strict';

angular
	.module('francaisWhatYouSeeApp')
	.controller('LevelCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http){
		$scope.routeParams = $routeParams;
		console.log('Route params:',$scope.routeParams);
		$http.get('/api/games/' + $routeParams.game + '/' + $routeParams.level)
			.success(function(level){
				$scope.level = level;
				console.log('Level:',$scope.level);
			})
			.error(function(data, status, headers, config) {
				console.log('Error:',arguments);
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});
	}]);
