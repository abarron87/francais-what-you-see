'use strict';

angular
	.module('francaisWhatYouSeeApp')
	.factory('Question', ['$resource', function ($resource) {
		var baseUrl = '/api/games/:game/:level/:question',
				defaultParams = {
					game: '@game',
					level: '@level',
					question: '@question'
				},
				additionalActions = {
					checkAnswer: {
						method: 'POST',
						params: {
							checkAnswer: true,
							conjugation: '@conjugation',
							verb: '@verb',
							infinitive: '@infinitive',
							answer: '@answer'
						},
						isArray: false
					}	
				};
  	
		return $resource(baseUrl, defaultParams, additionalActions);
  }]);
