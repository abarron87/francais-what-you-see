 'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Question Schema
 */
var QuestionSchema = new Schema({
	_level: { type: Schema.Types.ObjectId, ref: 'Level', required: true },
	id: { type: Number },
	name: { type: String, required: true },
	slug: { type: String, required: true }, //use slug or id?
	image: { type: String },
	answer: { type: String },
	position: { type: Number, required: true },
	verb: [{
		type: Schema.Types.ObjectId,
		ref: 'Verb'
	}],
	conjugations: [{
		type: Schema.Types.ObjectId,
		ref: 'Conjugation'
	}] // For game type 'jumble'.
});

/**
 * Validations
 */
QuestionSchema.path('image').validate(function (path) {
	return (/^\w+.(jpg|jpeg|png|bmp|gif|tiff)$/).test(path);
}, 'Image must be of one of the following types: jpg, jpeg, png, bmp, gif, tiff');

mongoose.model('Question', QuestionSchema);
