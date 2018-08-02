var mongoose = require('mongoose');
var mongoUri = 'mongodb://Tal:TalOmari123@ds123080.mlab.com:23080/learnonline';
// Connect Mongoose to our local MongoDB 
mongoose.connect( mongoUri, { useMongoClient: true });
var db = mongoose.connection;
db.on('error', ()=>{
	console.log("database connection error")
});
db.once('open', function() {
	console.log('connected to database work');
});
module.exports = db;