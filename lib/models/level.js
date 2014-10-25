'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Level Schema
 */
var LevelSchema = new Schema({
	_game: { type: Schema.Types.ObjectId, ref: 'Game' },
	name: { type: String, required: true },
	description: { type: String, required: true },
	slug: { type: String, required: true },
	position: { type: Number, required: true },
	questions: [{
		type: Schema.Types.ObjectId,
		ref: 'Question'
	}]
});

/**
 * Validations
 */
// ThingSchema.path('awesomeness').validate(function (num) {
// 	return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Level', LevelSchema);
