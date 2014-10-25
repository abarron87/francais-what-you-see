'use strict';

angular
  .module('francaisWhatYouSeeApp')
  .factory('Progress', function () {
    // Service logic
    
    var _model = {
      games: {
        completed: [],
        inProgress: [],
        locked: []
      },
      levels: {
        completed: [],
        inProgress: [],
        locked: []
      },
      questions: {
        completed: [],
        inProgress: [],
        locked: []
      }
    };

    var privateMethods = {
      _get: function(what, id){
        var what = _model[what],
            status = {
              completed: false,
              inProgress: false,
              locked: false
            };

        if((!!what.completed.length) && (!!~_getIndex(what.completed, id))){
          status.completed = true;
          return status;
        }

        if((!!what.inProgress.length) && (!!~_getIndex(what.inProgress, id))){
          status.inProgress = true;
          return status;     
        }

        if(((!!what.locked.length) && (!!~_getIndex(what.locked, id))) || !what.locked.length){
          status.locked = true;
          return status;       
        }

        return status;

      },

      _set: function(what, id, status){
        var whatStatuses = _get(what, id);

        if(!whatStatuses[status]){
          _model[what][status].push(id);
        }

        //remove id from other status arrays if present (which it shouldn't be).
        for(var s in _model[what]){
          if(_model[what].hasOwnProperty(s) && (s !== status) && (whatStatuses[s])){
            _model[what][s].splice(_getIndex(_model[what][s], id), 1);
          }
        }
      },

      _getIndex: function(arr, val){
        return arr.indexOf(val);
      }
    };


    // Public API here
    return {
      getGameProgress: function(id) {
        return privateMethods._get('games', id);
      },

      getLevelProgress: function(id){
        return privateMethods._get('levels', id);
      },

      getQuestionProgress: function(id){
        return privateMethods._get('questions', id);
      },

      getGameStatus: function(progressObj){
        if(progressObj.completed){
          return 'completed';
        }

        if(progressObj.inProgress){
          return 'in-progress';
        }

        return 'locked';
      },

      setGameProgress: function(id, status){
        privateMethods._set('games', id, status);
      },

      setLevelProgress: function(id, status){
        privateMethods._set('levels', id, status);
      },

      setQuestionProgress: function(id, status){
        privateMethods._set('questions', id, status);
      }

    };
  });
