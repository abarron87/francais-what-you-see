'use strict';

var _ = require('underscore'),
		mongoose = require('mongoose'),
		Schema = mongoose.Schema,
    Thing = mongoose.model('Thing'),
    Game = mongoose.model('Game'),
    Level = mongoose.model('Level'),
    Question = mongoose.model('Question'),
    Verb = mongoose.model('Verb'),
    Conjugation = mongoose.model('Conjugation');

exports.insertVerbs = function(req, res){
	res.end();
	// return Verb.create('[{"infinitive":"manger","slug":"manger","english":"to eat","group":"first"},{"infinitive":"être","slug":"etre","english":"to be","group":"auxiliary"},{"infinitive":"avoir","slug":"avoir","english":"to have","group":"auxiliary"},{"infinitive":"boire","slug":"boire","english":"to drink","group":"third"},{"infinitive":"entrer","slug":"entrer","english":"to enter","group":"first"},{"infinitive":"lancer","slug":"lancer","english":"to throw","group":"first"},{"infinitive":"savoir","slug":"savoir","english":"to know","group":"third"},{"infinitive":"rentrer","slug":"rentrer","english":["to come back","to return"],"group":"first"},{"infinitive":"répondre","slug":"repondre","english":["to answer","to respond"],"group":"third"},{"infinitive":"espérer","slug":"esperer","english":"to hope","group":"first"},{"infinitive":"agir","slug":"agir","english":"to act","group":"second"},{"infinitive":"gagner","slug":"gagner","english":"to win","group":"first"},{"infinitive":"appeler","slug":"appeler","english":["to call","to name"],"group":"first"},{"infinitive":"photographier","slug":"photographier","english":"to photograph","group":"first"},{"infinitive":"acheter","slug":"acheter","english":["to buy","to purchase"],"group":"first"},{"infinitive":"anéantir","slug":"aneantir","english":"annihilate","group":"second"},{"infinitive":"grandir","slug":"grandir","english":"to grow up","group":"second"},{"infinitive":"vouloir","slug":"vouloir","english":"to want","group":"third"},{"infinitive":"dire","slug":"dire","english":"to say","group":"third"},{"infinitive":"voir","slug":"voir","english":"to see","group":"third"}]',
	// 	function(err){
	// 		if(err){
	// 			res.send(err);
	// 		}

	// 		res.end();
	// 	}
	// );

};

exports.insertConjugations = function(req, res){
	// res.end();
	return Conjugation.create(JSON.parse('[{"position":1,"subject":"je","conjugation":"mange","verbb":"manger"},{"position":2,"subject":"tu","conjugation":"manges","verbb":"manger"},{"position":3,"subject":"il/elle/on","conjugation":"mange","verbb":"manger"},{"position":4,"subject":"nous","conjugation":"mangeons","verbb":"manger"},{"position":5,"subject":"vous","conjugation":"mangez","verbb":"manger"},{"position":6,"subject":"ils/elles","conjugation":"mangent","verbb":"manger"},{"position":1,"subject":"j\'","conjugation":"suis","verbb":"etre"},{"position":2,"subject":"tu","conjugation":"es","verbb":"etre"},{"position":3,"subject":"il/elle/on","conjugation":"est","verbb":"etre"},{"position":4,"subject":"nous","conjugation":"sommes","verbb":"etre"},{"position":5,"subject":"vous","conjugation":"êtes","verbb":"etre"},{"position":6,"subject":"ils/elles","conjugation":"sont","verbb":"etre"},{"position":1,"subject":"j\'","conjugation":"ai","verbb":"avoir"},{"position":2,"subject":"tu","conjugation":"as","verbb":"avoir"},{"position":3,"subject":"il/elle/on","conjugation":"a","verbb":"avoir"},{"position":4,"subject":"nous","conjugation":"avons","verbb":"avoir"},{"position":5,"subject":"vous","conjugation":"avez","verbb":"avoir"},{"position":6,"subject":"ils/elles","conjugation":"ont","verbb":"avoir"},{"position":1,"subject":"j\'","conjugation":"bois","verbb":"boire"},{"position":2,"subject":"tu","conjugation":"bois","verbb":"boire"},{"position":3,"subject":"il/elle/on","conjugation":"boit","verbb":"boire"},{"position":4,"subject":"nous","conjugation":"buvons","verbb":"boire"},{"position":5,"subject":"vous","conjugation":"buvez","verbb":"boire"},{"position":6,"subject":"ils/elles","conjugation":"boivent","verbb":"boire"},{"position":1,"subject":"j\'","conjugation":"entre","verbb":"entrer"},{"position":2,"subject":"tu","conjugation":"entres","verbb":"entrer"},{"position":3,"subject":"il/elle/on","conjugation":"entre","verbb":"entrer"},{"position":4,"subject":"nous","conjugation":"entrons","verbb":"entrer"},{"position":5,"subject":"vous","conjugation":"entrez","verbb":"entrer"},{"position":6,"subject":"ils/elles","conjugation":"entrent","verbb":"entrer"},{"position":1,"subject":"j\'","conjugation":"lance","verbb":"lancer"},{"position":2,"subject":"tu","conjugation":"lances","verbb":"lancer"},{"position":3,"subject":"il/elle/on","conjugation":"lance","verbb":"lancer"},{"position":4,"subject":"nous","conjugation":"lançons","verbb":"lancer"},{"position":5,"subject":"vous","conjugation":"lancez","verbb":"lancer"},{"position":6,"subject":"ils/elles","conjugation":"lancent","verbb":"lancer"},{"position":1,"subject":"j\'","conjugation":"sais","verbb":"savoir"},{"position":2,"subject":"tu","conjugation":"sais","verbb":"savoir"},{"position":3,"subject":"il/elle/on","conjugation":"sait","verbb":"savoir"},{"position":4,"subject":"nous","conjugation":"savons","verbb":"savoir"},{"position":5,"subject":"vous","conjugation":"savez","verbb":"savoir"},{"position":6,"subject":"ils/elles","conjugation":"savent","verbb":"savoir"},{"position":1,"subject":"j\'","conjugation":"rentre","verbb":"rentrer"},{"position":2,"subject":"tu","conjugation":"rentres","verbb":"rentrer"},{"position":3,"subject":"il/elle/on","conjugation":"rentre","verbb":"rentrer"},{"position":4,"subject":"nous","conjugation":"rentrons","verbb":"rentrer"},{"position":5,"subject":"vous","conjugation":"rentrez","verbb":"rentrer"},{"position":6,"subject":"ils/elles","conjugation":"rentrent","verbb":"rentrer"},{"position":1,"subject":"j\'","conjugation":"réponds","verbb":"repondre"},{"position":2,"subject":"tu","conjugation":"réponds","verbb":"repondre"},{"position":3,"subject":"il/elle/on","conjugation":"répond","verbb":"repondre"},{"position":4,"subject":"nous","conjugation":"répondons","verbb":"repondre"},{"position":5,"subject":"vous","conjugation":"répondez","verbb":"repondre"},{"position":6,"subject":"ils/elles","conjugation":"répondent","verbb":"repondre"},{"position":1,"subject":"j\'","conjugation":"espère","verbb":"esperer"},{"position":2,"subject":"tu","conjugation":"espères","verbb":"esperer"},{"position":3,"subject":"il/elle/on","conjugation":"espère","verbb":"esperer"},{"position":4,"subject":"nous","conjugation":"espérons","verbb":"esperer"},{"position":5,"subject":"vous","conjugation":"espérez","verbb":"esperer"},{"position":6,"subject":"ils/elles","conjugation":"espèrent","verbb":"esperer"},{"position":1,"subject":"j\'","conjugation":"agis","verbb":"agir"},{"position":2,"subject":"tu","conjugation":"agis","verbb":"agir"},{"position":3,"subject":"il/elle/on","conjugation":"agit","verbb":"agir"},{"position":4,"subject":"nous","conjugation":"agissons","verbb":"agir"},{"position":5,"subject":"vous","conjugation":"agissez","verbb":"agir"},{"position":6,"subject":"ils/elles","conjugation":"agissent","verbb":"agir"},{"position":1,"subject":"j\'","conjugation":"gagne","verbb":"gagner"},{"position":2,"subject":"tu","conjugation":"gagnes","verbb":"gagner"},{"position":3,"subject":"il/elle/on","conjugation":"gagne","verbb":"gagner"},{"position":4,"subject":"nous","conjugation":"gagnons","verbb":"gagner"},{"position":5,"subject":"vous","conjugation":"gagnez","verbb":"gagner"},{"position":6,"subject":"ils/elles","conjugation":"gagnent","verbb":"gagner"},{"position":1,"subject":"j\'","conjugation":"appelle","verbb":"appeler"},{"position":2,"subject":"tu","conjugation":"appelles","verbb":"appeler"},{"position":3,"subject":"il/elle/on","conjugation":"appelle","verbb":"appeler"},{"position":4,"subject":"nous","conjugation":"appelons","verbb":"appeler"},{"position":5,"subject":"vous","conjugation":"appelez","verbb":"appeler"},{"position":6,"subject":"ils/elles","conjugation":"appellent","verbb":"appeler"},{"position":1,"subject":"j\'","conjugation":"photographie","verbb":"photographier"},{"position":2,"subject":"tu","conjugation":"photographies","verbb":"photographier"},{"position":3,"subject":"il/elle/on","conjugation":"photographie","verbb":"photographier"},{"position":4,"subject":"nous","conjugation":"photographions","verbb":"photographier"},{"position":5,"subject":"vous","conjugation":"photographiez","verbb":"photographier"},{"position":6,"subject":"ils/elles","conjugation":"photographient","verbb":"photographier"},{"position":1,"subject":"j\'","conjugation":"achète","verbb":"acheter"},{"position":2,"subject":"tu","conjugation":"achètes","verbb":"acheter"},{"position":3,"subject":"il/elle/on","conjugation":"achète","verbb":"acheter"},{"position":4,"subject":"nous","conjugation":"achetons","verbb":"acheter"},{"position":5,"subject":"vous","conjugation":"achetez","verbb":"acheter"},{"position":6,"subject":"ils/elles","conjugation":"achetons","verbb":"acheter"},{"position":1,"subject":"j\'","conjugation":"anéantis","verbb":"aneantir"},{"position":2,"subject":"tu","conjugation":"anéantis","verbb":"aneantir"},{"position":3,"subject":"il/elle/on","conjugation":"anéantit","verbb":"aneantir"},{"position":4,"subject":"nous","conjugation":"anéantissons","verbb":"aneantir"},{"position":5,"subject":"vous","conjugation":"anéantissez","verbb":"aneantir"},{"position":6,"subject":"ils/elles","conjugation":"anéantissent","verbb":"aneantir"},{"position":1,"subject":"j\'","conjugation":"grandis","verbb":"grandir"},{"position":2,"subject":"tu","conjugation":"grandis","verbb":"grandir"},{"position":3,"subject":"il/elle/on","conjugation":"grandit","verbb":"grandir"},{"position":4,"subject":"nous","conjugation":"grandissons","verbb":"grandir"},{"position":5,"subject":"vous","conjugation":"grandissez","verbb":"grandir"},{"position":6,"subject":"ils/elles","conjugation":"grandissent","verbb":"grandir"},{"position":1,"subject":"j\'","conjugation":"veux","verbb":"vouloir"},{"position":2,"subject":"tu","conjugation":"veux","verbb":"vouloir"},{"position":3,"subject":"il/elle/on","conjugation":"veut","verbb":"vouloir"},{"position":4,"subject":"nous","conjugation":"voulons","verbb":"vouloir"},{"position":5,"subject":"vous","conjugation":"voulez","verbb":"vouloir"},{"position":6,"subject":"ils/elles","conjugation":"veulent","verbb":"vouloir"},{"position":1,"subject":"j\'","conjugation":"dis","verbb":"dire"},{"position":2,"subject":"tu","conjugation":"dis","verbb":"dire"},{"position":3,"subject":"il/elle/on","conjugation":"dit","verbb":"dire"},{"position":4,"subject":"nous","conjugation":"disons","verbb":"dire"},{"position":5,"subject":"vous","conjugation":"dites","verbb":"dire"},{"position":6,"subject":"ils/elles","conjugation":"disent","verbb":"dire"},{"position":1,"subject":"j\'","conjugation":"vois","verbb":"voir"},{"position":2,"subject":"tu","conjugation":"vois","verbb":"voir"},{"position":3,"subject":"il/elle/on","conjugation":"voit","verbb":"voir"},{"position":4,"subject":"nous","conjugation":"voyons","verbb":"voir"},{"position":5,"subject":"vous","conjugation":"voyez","verbb":"voir"},{"position":6,"subject":"ils/elles","conjugation":"voient","verbb":"voir"}]'),
		function(err){
			if(err){
				return res.send(err);
			}
			else{
				return res.end();
			}
		}
	);
};

exports.insertGames = function(req, res){
	return Game.create([
		// {
		// 	name: 'Verb Conjugation',
		// 	description: 'Practice at conjugating French verbs.',
		// 	slug: 'verb-conjugation',
		// 	type: 'conjugation'
		// },
		{
			name: 'Conjugation Jumbler',
			description: 'Think you\'re a conjugation Hotshot? Prove it!',
			slug: 'conjugation-jumbler',
			type: 'jumble'
		}
	], function(err){
		if(!err){
			return res.end();
		}
		else{
			return res.send(err);
		}
	});
};

exports.insertLevels = function(req, res){
	return Level.create([
		{
			_game: "53679077370b64ddf4669b6d",
			name: 'Easy',
			description: 'Easy',
			slug: 'easy',
			position: 0
		},
		{
			_game: "53679077370b64ddf4669b6d",
			name: 'Medium',
			description: 'Medium',
			slug: 'medium',
			position: 1		
		},
		{
			_game: "53679077370b64ddf4669b6d",
			name: 'Hard',
			description: 'Hard',
			slug: 'hard',
			position: 2
		}
	], function(err, easy, medium, hard){
		if(!err){
			Game.update({ _id: easy._game }, { levels: [easy._id,medium._id,hard._id] }, function(err,num){
				if(!err){
					console.log("Updated " + num + " document(s)");
					return res.end();
				}
				else {
					return res.send(err);
				}
			});
		}
		else{
			return res.send(err);
		}
	});
};

exports.insertQuestions = function(req, res){
	return Question.create([
		{ "name": 'manger', "slug": 'manger', "verb": mongoose.Types.ObjectId('53675b728cff72b6b9cdb818'), "_level": mongoose.Types.ObjectId("536861d3afacaa0000e358ee") },
		{ "name" : "etre", "slug" : "etre", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb819'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358f0") },
		{ "name" : "avoir", "slug" : "avoir", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb81a'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358f0") },
		{ "name" : "savoir", "slug" : "savoir", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb81e'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358f0") },
		{ "name" : "entrer", "slug" : "entrer", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb81c'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358ee") },
		{ "name" : "lancer", "slug" : "lancer", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb81d'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358ef") },
		{ "name" : "boire", "slug" : "boire", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb81b'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358f0") },
		{ "name" : "agir", "slug" : "agir", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb822'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358ef") },
		{ "name" : "gagner", "slug" : "gagner", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb823'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358ee") },
		{ "name" : "aneantir", "slug" : "aneantir", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb827'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358ef") },
		{ "name" : "grandir", "slug" : "grandir", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb828'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358ef") },
		{ "name" : "repondre", "slug" : "repondre", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb820'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358f0") },
		{ "name" : "esperer", "slug" : "esperer", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb821'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358ef") },
		{ "name" : "photographier", "slug" : "photographier", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb825'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358ef") },
		{ "name" : "rentrer", "slug" : "rentrer", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb81f'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358ee") },
		{ "name" : "dire", "slug" : "dire", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb82a'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358f0") },
		{ "name" : "appeler", "slug" : "appeler", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb824'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358ef") },
		{ "name" : "acheter", "slug" : "acheter", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb826'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358ef") },
		{ "name" : "vouloir", "slug" : "vouloir", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb829'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358f0") },
		{ "name" : "voir", "slug" : "voir", 'verb': mongoose.Types.ObjectId('53675b728cff72b6b9cdb82b'), '_level': mongoose.Types.ObjectId("536861d3afacaa0000e358f0") }
	], function(err){
		if(!err){
			console.log("Inserted questions");
			return res.end();
		}
		else{
			return res.send(err);
		}
	});
};

exports.updateLevels = function(req, res){
	return Level.update({ name: 'Easy'}, { questions: [
		mongoose.Types.ObjectId("5368647842e9a600007c3fdd"),
		mongoose.Types.ObjectId("5368647842e9a600007c3fe1"),
		mongoose.Types.ObjectId("5368647842e9a600007c3fe5"),
		mongoose.Types.ObjectId("5368647842e9a600007c3feb")
	]}, function(err,num){
		if(!err){
			console.log('Updated "easy"');
			Level.update({ name: 'Medium' }, { questions: [
				mongoose.Types.ObjectId("5368647842e9a600007c3fe2"), 
				mongoose.Types.ObjectId("5368647842e9a600007c3fe4"),
				mongoose.Types.ObjectId("5368647842e9a600007c3fe6"), 
				mongoose.Types.ObjectId("5368647842e9a600007c3fe7"), 
				mongoose.Types.ObjectId("5368647842e9a600007c3fe9"), 
				mongoose.Types.ObjectId("5368647842e9a600007c3fea"), 
				mongoose.Types.ObjectId("5368647842e9a600007c3fed"), 
				mongoose.Types.ObjectId("5368647842e9a600007c3fee"), 
			]}, function(err,num){
				if(!err){
					console.log('Updated "medium"');
					Level.update({ name: 'Hard' }, { questions: [
						mongoose.Types.ObjectId("5368647842e9a600007c3fde"),
						mongoose.Types.ObjectId("5368647842e9a600007c3fdf"), 
						mongoose.Types.ObjectId("5368647842e9a600007c3fe0"), 
						mongoose.Types.ObjectId("5368647842e9a600007c3fe3"), 
						mongoose.Types.ObjectId("5368647842e9a600007c3fe8"), 
						mongoose.Types.ObjectId("5368647842e9a600007c3fec"), 
						mongoose.Types.ObjectId("5368647842e9a600007c3fef"), 
						mongoose.Types.ObjectId("5368647842e9a600007c3ff0") 
					]}, function(err,num){
						if(!err){
							console.log('Updated "hard"');
							return res.end();
						}
						else{
							return res.send(err);
						}
					});
				}
				else{
					return res.send(err);
				}
			});
		}
		else{
			return res.send(err);
		}

	});
};

exports.updateEasy = function(req, res){
	return Level.update({ name: 'Easy'}, { questions: [
			'53685d8c6c94f70000386739',
			'53685d8c6c94f7000038673d',
			'53685d8c6c94f70000386741',
			'53685d8c6c94f70000386747'
		]}, function(err,num){
			if(!err){
				console.log('Updated "easy":',num);
			}
			else {
				console.log('Error updating.');
				res.send(err);
			}
		});
};

exports.linkVerbsToConj = function(req, res){
	return Verb.find({}, '_id slug', function(err, verbs){
		for(var v = 0, len = verbs.length; v < len; v++){
			// Conjugation.update({ verbb: verbs[v].slug }, { verb: verbs[v]._id }, { multi: true }, function(err, num){
			// 	if(err){
			// 		return res.send(err);
			// 	}
			// 	else{
			// 		console.log("Updated conjugations. '" + num + "' updated.");
			// 	}
			// });
		}

		return res.end();
	});
};

exports.linkConjToVerbs = function(req, res){
	// return Verb.find({}, 'slug', function(err, verbs){
		// if(!err){
			// for(var i = 0, len = verbs.length; i < len; i++){
			// 	var conjs = [],
			// 		verb = verbs[i];

				console.log("Verb ", req.params.verb);
				Conjugation.find({ verb: req.params.verb }, function(err, conjss){
					console.log("Conjss",conjss);
					if(!err){
						var conjs = [];
						for(var j = 0, leng = conjss.length; j < leng; j++){
							conjs.push(conjss[j]._id);
						}

						console.log("Conjs",conjs);

						Verb.update({ _id: req.params.verb }, { conjugations: conjs }, { multi: true }, function(err, num){
							if(!err){
								console.log("Updated " + num);
							}
							else{
								console.log("Error updating:", err);
							}
						});
					}

					return res.end();
				});
			// }


		// }
		// else {
			// return res.send(err);
		// }
	// });
};

exports.removeVerbb = function(req,res){
	return Conjugation.collection.update({},
			{$unset: {verbb: true}},
			{multi: true, safe: true},
			function(err){
				if(err){
					return res.send(err);
				}
				else{
					console.log("done");
					return res.end();
				}
			});
};

exports.updateQuestions = function(req,res){
	Question.update({ "_id" : "5368647842e9a600007c3fdd" }, { position: 1 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fde" }, { position: 3 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fdf" }, { position: 4 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fe0" }, { position: 1 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fe1" }, { position: 2 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fe2" }, { position: 1 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fe3" }, { position: 2 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fe4" }, { position: 2 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fe5" }, { position: 3 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fe6" }, { position: 3 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fe7" }, { position: 4 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fe8" }, { position: 6 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fe9" }, { position: 5 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fea" }, { position: 6 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3feb" }, { position: 4 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fec" }, { position: 7 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fed" }, { position: 7 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fee" }, { position: 8 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3fef" }, { position: 8 }, function(err){ if(err){ console.log(err); }});
	Question.update({ "_id" : "5368647842e9a600007c3ff0" }, { position: 5 }, function(err){ if(err){ console.log(err); }});

	res.end();
};

/*
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
	return Thing.find(function (err, things) {
		if (!err) {
			return res.json(things);
		} else {
			return res.send(err);
		}
	});
};

// Get games
exports.games = function(req, res) {
	return Game.find(function (err, games) {
		if (!err) {
			return res.json(games);
		} else {
			return res.send(err);
		}
	});
};

// Get a game and its levels
exports.game = function(req, res) {
	var gQuery = Game.findOne({ slug: req.params.game });

	gQuery.populate('levels','name slug');

	return gQuery.exec(function(err, game){
		if (!err) {
			return res.json(game);
		} else {
			return res.send(err);
		}
	});
};

// Get a game level's questions
exports.level = function(req, res) {
	if(((!_.isUndefined(req.query.getNextQuestion)) || (!_.isUndefined(req.query.getPrevQuestion))) && (!_.isUndefined(req.query.currentQuestion))){
		if(!_.isUndefined(req.query.getNextQuestion)){
			return Level.findOne({ slug: req.params.level }, '_id', function(err, level){
				console.log('Current Level ID:',level._id);
				if(!err){
					return Question.findById(req.query.currentQuestion, 'position', function(err, currQ){
						console.log('Current Question ID:',req.query.currentQuestion);
						console.log('CurrQ:',currQ);
						if(!err){
							return Question.findOne({ _level: level._id, position: { $gt: currQ.position } }, 'name position', { sort: 'position' }, function(err, nextQuestion){
								console.log('Next Questions', nextQuestion);
								if(!err){
									return res.json({
										question: nextQuestion
									});
								}
								else{
									return res.send(err);
								}
							});
						}
						else{
							return res.send(err);
						}
					});
				}
				else{
					return res.send(err);
				}
			});
		}
		else{

		}
	}
	else{
		console.log("Fetching level with slug:", req.params.level);
		return Level.findOne({ slug: req.params.level })
					.select('name slug questions')
					.populate('questions', 'name slug')
					.exec(function (err, level) {
						if (!err) {
							return res.json(level);
						} else {
							return res.send(err);
						}
					});		
	}
};

// Get a game level's question
exports.question = function(req, res) {
	return Game.findOne(
				{ slug: req.params.game },
				'type',
				function(err, game){
					if(!err) {
						console.log("Game",game);
						return Question.findOne({ slug: req.params.question }, function(err, question){
							if(!err) {
								if(game.type === 'conjugation'){
									console.log("Question ID", question._id);

									return Verb
										.findById(question.verb)
										.populate({ path: 'conjugations', select: 'position subject conjugation', options: { sort: 'position' }})
										.exec(function(err, verb){
											if(!err){
												console.log("Verb ID", verb._id);
												console.log("Conjugations", verb.conjugations);
												return res.json({
													id: question._id,
													questionData: verb,
													gameType: game.type
												});
											}
											else {
												return res.send(err);
											} 
										});
								}
								else if(game.type === 'jumble'){
									return Conjugation
										.find({ _questions: question._id })
										.exec(function(err, conjugations){
											if(!err){
												return res.json({
													questionData: conjugations,
													gameType: game.type
												});
											}
											else{
												return res.send(err);
											}
										});
								}
								else {
									return res.json({
												questionData: question,
												gameType: game.type
											});
								}
							} else {
								return res.send(err);
							}							
						});
					} else {
						return res.send(err);
					}
				}
			);
};

// Check user's answer
exports.checkAnswer = function(req, res){
	console.log("Query params:",req.query);

	return Game.findOne(
						{ slug: req.params.game },
						'type',
						function(err, game){
							if(!err){
								var answer = req.query.answer;

								if(game.type === 'conjugation' && ((!_.isUndefined(req.query.conjugation)) || ((!_.isUndefined(req.query.infinitive)) && (!_.isUndefined(req.query.verb))))){
									console.log('infinitive',_.isUndefined(req.query.infinitive));
									console.log('verb',_.isUndefined(req.query.verb));
									if((!_.isUndefined(req.query.infinitive)) && (!_.isUndefined(req.query.verb))){
										var infinitive = req.query.infinitive,
												verb = req.query.verb;

										Verb.findOne({ _id: verb, infinitive: infinitive, english: answer }, 'english', function(err, verb){
											if(!err){
												console.log('Verb found',verb);
												return res.json({
													isCorrect: ((!!verb) || false),
													alternatives: (!!verb) ? verb.english : null
												});
											}
											else{
												return res.send(err);
											}
										});
									}
									else if(!_.isUndefined(req.query.conjugation)){
										var conjugation = req.query.conjugation;

										Conjugation.findOne({ _id: conjugation, conjugation: answer }, function(err, conj){
											if(!err){
												console.log('Answer [conjugation field]:', conj);
												return res.json({isCorrect: ((!!conj) || false) });
											}
											else{
												return res.send(err);
											}
										});
									}
								}
								else if(game.type === 'jumble'){

								}
								else{

								}
							}
						}
					);
};