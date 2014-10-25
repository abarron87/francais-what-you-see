'use strict';

angular.module('francaisWhatYouSeeApp')
  .factory('AnswerService', function () {
    return {
      answerData: {
        'conjugate': {
          correct: {
            text: 'correct',
            iconClass: 'check-circle'
          },
          incorrect: {
            text: 'incorrect',
            iconClass: 'times-circle'
          },
          unanswered: {
            text: 'unanswered',
            iconClass: ''
          }
        },
        'jumble': {
          correct: {
            text: 'correct',
            iconClass: 'check-circle'
          },
          incorrect: {
            text: 'incorrect',
            iconClass: 'times-circle'
          },
          unanswered: {
            text: 'unanswered',
            iconClass: ''
          }
        }
      },

      isAnswered: function(questionType,statusValue){
        return (statusValue !== this.answerData[questionType].unanswered.text);
      },

      checkAnswer: function(questionType,correctAnswer,userAnswer,callbackFn){
        var data = {
            iconClass: ''
          },
          answerData = this.answerData[questionType];

        if(userAnswer && userAnswer.trim() !== ''){
          userAnswer = userAnswer.trim().toLowerCase();

          if(this.isCorrect(userAnswer, correctAnswer)){
            angular.extend(data, {
              answerValidity: answerData.correct.text,
              iconClass: answerData.correct.iconClass
            });
          }
          else{
            angular.extend(data, {
              answerValidity: answerData.incorrect.text,
              iconClass: answerData.incorrect.iconClass
            });
          }
        }
        else{
          data.answerValidity = answerData.unanswered.text;
        }

        if(_.isFunction(callbackFn)){
          callbackFn(data);
        }
      },

      isCorrect: function(userAnswer, correctAnswer){
        if(_.isArray(correctAnswer)){
          return (_.contains(correctAnswer, userAnswer));
        }
        else if(_.isString(correctAnswer)) {
          return (userAnswer === correctAnswer);
        }

        return false;
      },

      amendAnswered: function(newVal, oldVal, callbackFn){
        if(_.isFunction(callbackFn)){
          var data = {
            hasChanged: false
          };

          if(oldVal === '' && newVal !== ''){
            angular.extend(data,{
              hasChanged: true,
              direction: 'increase'
            });
          }
          else if(oldVal !== '' && newVal === ''){
            angular.extend(data,{
              hasChanged: true,
              direction: 'decrease'
            });
          }

          callbackFn(data);
        }
      }
    };
  });
