'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session'),
    middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {
    // app.route('/insertVerbs')
    //     .get(api.insertVerbs);

    app.route('/insertConjugations')
        .get(api.insertConjugations);

    app.route('/linkVerbsToConj')
        .get(api.linkVerbsToConj);

    app.route('/linkConjToVerbs/:verb')
        .get(api.linkConjToVerbs);

    app.route('/removeVerbb')
        .get(api.removeVerbb); 

    app.route('/insertGames')
        .get(api.insertGames);

    app.route('/insertLevels')
        .get(api.insertLevels);

    app.route('/insertQuestions')
        .get(api.insertQuestions);

    app.route('/updateLevels')
        .get(api.updateLevels);

    app.route('/updateQuestions')
        .get(api.updateQuestions);

    // Server API Routes
    app.route('/api/awesomeThings')
        .get(api.awesomeThings);

    app.route('/api/games')
        .get(api.games);

    app.route('/api/games/:game')
        .get(api.game);

    app.route('/api/games/:game/:level')
        .get(api.level);

    app.route('/api/games/:game/:level/:question')
        .get(api.question)
        .post(api.checkAnswer);

    // app.route('/api/games/:gameSlug/levels/:levelSlug')
    //     .get(api.level);

    // app.route('/api/games/:gameSlug/levels/:levelSlug/questions')
    //     .get(api.questions);

    // app.route('/api/games/:gameSlug/levels/:levelSlug/questions/:questionId')
    //     .get(api.question);

    app.route('/api/users')
        .post(users.create)
        .put(users.changePassword);
    
    app.route('/api/users/me')
        .get(users.me);
    
    app.route('/api/users/:id')
        .get(users.show);

    app.route('/api/session')
        .post(session.login)
        .delete(session.logout);

    // All undefined api routes should return a 404
    app.route('/api/*')
        .get(function(req, res) {
            res.send(404);
        });

    // All other routes to use Angular routing in app/scripts/app.js
    app.route('/partials/*')
    .get(index.partials);
    app.route('/*')
    .get( middleware.setUserCookie, index.index);
};