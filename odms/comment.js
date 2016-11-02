//comment.js
var mongoose = require('mongoose');
var _Comment = new mongoose.Schema({
	comments:[{
		text: String,
		created_by: {type: Number, ref:'User'}
	}]
});

module.exports = _Comment;