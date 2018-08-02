var mongoose = require('mongoose');
var mongoUri = 'mongodb://TalOmari:talomari@1993@ds135963.mlab.com:35963/learn-online';
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