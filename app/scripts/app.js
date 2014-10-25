'use strict';

angular.module('francaisWhatYouSeeApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/app',
        controller: 'AppCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl',
        authenticate: true
      })

      .when('/games', {
        templateUrl: 'partials/games',
        controller: 'GamesCtrl'
      })
      .when('/games/:game', {
        templateUrl: 'partials/game',
        controller: 'GameCtrl'
      })
      .when('/games/:game/:level', {
        templateUrl: 'partials/level',
        controller: 'LevelCtrl'
      })
      // .when('/games/:game/levels/:level', {
      //   templateUrl: 'partials/level',
      //   controller: 'LevelCtrl'
      // })
      // .when('/games/:game/levels/:level/questions', {
      //   templateUrl: 'partials/questions',
      //   controller: 'QuestionsCtrl'
      // })
      .when('/games/:game/:level/:question', {
        templateUrl: 'partials/question',
        controller: 'QuestionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
      
    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });