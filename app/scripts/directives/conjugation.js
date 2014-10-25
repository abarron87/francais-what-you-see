'use strict';

angular.module('francaisWhatYouSeeApp')
	.directive('conjugation', ['AnswerService', function(AnswerService) {
		return {
			templateUrl: 'partials/conjugation',
			scope: {
				subject: '@',
				verb: '='
			},
			controller: function($scope){
				var questionType = 'conjugate';
				$scope.value = $scope.iconClass = '';
				$scope.answerValidity = 'unanswered';

				$scope.checkAnswer = function(){
					AnswerService.checkAnswer(questionType, $scope.verb.conjugations[$scope.subject], $scope.value, function(data){
						console.log('Answer checked',data);
						$scope.answerValidity = data.answerValidity;
						$scope.iconClass = data.iconClass;
					});
				};

				$scope.isAnswered = function(){
					return AnswerService.isAnswered(questionType, $scope.answerValidity);
				};
			},
			link: function(scope, element){
				console.log('In link function!');
				scope.$watch('answerValidity', function(newVal){
					console.log('answerValidity changed:',newVal);

					if(scope.answerValidity === 'correct'){
						element.find('input').replaceWith('<span>'+ scope.value +'</span>');
						scope.$emit('INCREASE_CORRECT_ANSWER_COUNT');
					}
				});

				console.log('Subject:',scope.subject);
			}
		};
	}]);