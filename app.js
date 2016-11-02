var mongoose = require('mongoose');
	mongoose.Promise = require('bluebird');
var movieSchema = require('./odms/movies');
var logininfoSchema = require('./odms/logininfo');
var _User = require('./odms/user');
var _Comment = require('./odms/comment');
var conn = mongoose.createConnection('mongodb://localhost:27017/accounts');
var Movie = conn.model('movie',movieSchema);
var LoginInfo = conn.model('logininfo',logininfoSchema);
var User = conn.model('User', _User);
var Comment = conn.model('Comment',_Comment);
// var user = new User({
// 	_id: 1,
// 	name: 'test',
// 	age: 19
// });
// var comment_ = new Comment({
// 	comments:[
// 		{
// 			text: '太白癡了',
// 			created_by: user._id
// 		}
// 	]
// });
var commentA = new Comment({
	comments:[
		{
			text: '太白癡了',
			created_by: 1
		}
	]
});
var thor = new Movie({
	  title: 'Thor'
	, rating: 'PG-13'
	, releaseYear: '2016'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
	, hasCreditCookie: false
});

var logininfo = new LoginInfo({
	age : 19,
	name : 'stupidman'
});
logininfo.save(function(err, result) {
  if (err) return console.error(err);
  //console.dir(result);
  //conn.close();
}).then(function(){
	// thor.save(function(err, result) {
 //  	   if (err) return console.error(err);
	//    //console.dir(result);
	//    //conn.close();
 //   });
}).then(function(){

	// LoginInfo.find({}, function(err, loginInfos){
	// 	for(var index in loginInfos){
	// 		var logininfot = loginInfos[index];
	// 		console.log(logininfot);
	// 	}
	// });
}).then(function(){
	// user.save(function(err, result) {
 //  	   if (err) return console.error(err);
 //  	   conn.close();
 //  	});
    // var _id ;
    //var commentA ;
    commentA.save(function(err, result){
    		if(err) return console.error(err);
    		//console.log(result);
    		Comment.findOne({}).populate('comments.created_by')
				.exec(function(err, comments){
					console.log(err, JSON.stringify(comments));
					conn.close();
			});
    });
    // User.findOne({}, function(err, user){
    // 	if(err) return console.error(err);
    // 	 console.log(user._id);
    //  //    _id = user._id;

    // 	console.log(commentA);

    // });
 // });
});