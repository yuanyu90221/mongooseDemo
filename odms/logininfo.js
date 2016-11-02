//logininfo
var mongoose = require('mongoose');
var logininfoSchema = new mongoose.Schema({
	  name: { type: String , default: 'noname'}
	, password: String
	, age:  { type: Number, min: 18, index: true }
	, job: String
	, date: { type: Date, default: Date.now }
	, buff: Buffer
});
module.exports = logininfoSchema;