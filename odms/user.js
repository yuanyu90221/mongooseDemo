// user.js
var mongoose = require('mongoose');
var _User = new mongoose.Schema({
	_id: Number,
	name: {type: String, default: 'test'},
	age: {type: Number, min: 1}
});
module.exports = _User;
