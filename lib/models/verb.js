'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Verb Schema
 */
var VerbSchema = new Schema({
	_question: { type: Schema.Types.ObjectId, ref: 'Question'},
	infinitive: { type: String, required: true },
	english: { type: [String], required: true },
	language: { type: String, default: "French" },
	slug: { type: String, required: true },
	group: { type: String, enum: ['first','second','third','auxiliary'], required: true },
	lastModified: { type: Date, default: Date.now },
	conjugations: [{
		type: Schema.Types.ObjectId,
		ref: 'Conjugation'
	}]
});

/**
 * Validations
 */
// QuestionSchema.path('image').validate(function (path) {
// 	return /^\w+.(jpg|jpeg|png|bmp|gif|tiff)$/.test(path);
// }, 'Image must be of one of the following types: jpg, jpeg, png, bmp, gif, tiff');

mongoose.model('Verb', VerbSchema);
