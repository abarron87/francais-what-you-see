'use strict';

angular.module('francaisWhatYouSeeApp')
  .directive('answer', function () {
    return {
      templateUrl: function(elem, attrs){
				return 'partials/' + attrs.type;
      },
      link: function(scope, element, attrs) {
      	scope.listening = false;
      	scope.isCorrect = false;
        scope.iconClass = '';
      	scope.value = '';

      	scope.$watch('value', function(newVal, oldVal){
      		// callback is called upon init of the watcher. Only change listening val if
      		// invoked by a change.
      		if(newVal !== oldVal){
      			scope.listening = true;
      		}
      	});

      	scope.$watch('isCorrect', function(isCorrect){
      		if(isCorrect){
      			element.find('input').replaceWith('<span>'+ scope.value +'</span>');
      		}
      	});
        
        scope.$on('ANSWER_CORRECT', function(){
        	if(scope.listening){
        		scope.isCorrect = true;
	        	scope.iconClass = 'check-circle';
	        	scope.answerValidity = 'correct';
	        	scope.listening = false;
	        }
        });

        scope.$on('ANSWER_INCORRECT', function(){
        	if(scope.listening){
	        	scope.iconClass = 'times-circle';
	        	scope.answerValidity = 'incorrect';
	        	scope.listening = false;
	        }
        });
      }
    };
  });
