'use strict';

angular
	.module('francaisWhatYouSeeApp')
	.controller('QuestionCtrl', ['$scope', '$routeParams', 'Question', 'Game', function ($scope, $routeParams, Question, Game) {
		$scope.routeParams = $routeParams;
		$scope.question = {};
		$scope.totalCorrect = 0; // replace from local storage.

		Question.get({
			game: $routeParams.game,
			level: $routeParams.level,
			question: $routeParams.question
		}, function(q){
			console.log('Question:',q);
			$scope.questionId = q.id;
			$scope.question = q.questionData;
			$scope.gameType = q.gameType;
		}, function(){ 
			// error
		});

		$scope.checkAnswer = function(answerData){
			Question.checkAnswer(angular.extend(answerData, {
				game: $routeParams.game,
				level: $routeParams.level,
				question: $routeParams.question
			}),
			function(response){
				if(response.isCorrect){
					$scope.$broadcast('ANSWER_CORRECT');
					$scope.totalCorrect++;
				}
				else{
					$scope.$broadcast('ANSWER_INCORRECT');
				}
			});
		};

		$scope.isAnswered = function(value){
			return !!value;
		};

		$scope.isComplete = function(){
			return $scope.totalCorrect === ($scope.question.conjugations.length + 1);
		};
	}]);
