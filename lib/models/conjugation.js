'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Conjugation Schema
 */
var ConjugationSchema = new Schema({
	_questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
	position: { type: Number, enum: [1,2,3,4,5,6], required: true },
	subject: { type: String, enum: ['je','j\'','tu','il/elle/on','nous','vous','ils/elles'], required: true },
	conjugation: { type: String, required: true },
	verbb: { type: String },
	verb: [{
		type: Schema.Types.ObjectId,
		ref: 'Verb'
	}] // Conjugation should not be standalone
});

/**
 * Validations
 */
// QuestionSchema.path('image').validate(function (path) {
// 	return /^\w+.(jpg|jpeg|png|bmp|gif|tiff)$/.test(path);
// }, 'Image must be of one of the following types: jpg, jpeg, png, bmp, gif, tiff');

module.exports = mongoose.model('Conjugation', ConjugationSchema);
