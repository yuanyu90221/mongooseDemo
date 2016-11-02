//movies.js
var mongoose = require('mongoose');
var movieSchema = new mongoose.Schema({
	  title: { type: String }
	, rating: String
	, releaseYear: Number
	, hasCreditCookie: Boolean
});
module.exports = movieSchema;