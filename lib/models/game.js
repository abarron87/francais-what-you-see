'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Game Schema
 */
var GameSchema = new Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	slug: { type: String, required: true },
	type: {
		type: String,
		enum: ['standard','conjugation','jumble'],
		default: ['standard'],
		required: true
	},
	levels: [{
		type: Schema.Types.ObjectId,
		ref: 'Level'
	}]
});

/**
 * Validations
 */
// ThingSchema.path('awesomeness').validate(function (num) {
// 	return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Game', GameSchema);
