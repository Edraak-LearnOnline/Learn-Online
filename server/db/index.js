var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/Learn-Online';
// Connect Mongoose to our local MongoDB 
mongoose.connect(process.env.MONGOURI || mongoUri, { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection to database not working'));
db.once('open', function() {
	console.log('connected to database work');
});
module.exports = db;