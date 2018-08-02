var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//Courses Schema.
var course = mongoose.Schema({
	courseName: {
		type: String,
		index: {
			unique: true
		},
		required: true
	},
	description: {
		type: String,
		required: true
	},

	publisher: {
		type: String
	},
	publishTime: {
		type: Date,
		default: Date.now
	},
	video: {
		type: String,
		required: true,
		index: {
			unique: true
		}

	},
	image: {
		data: Buffer, type: String
	},
	Like: {
		type: Number
	},
	incrementUser: {
		type: [String]
	},
	decrementUser: {
		type: [String]
	}

});
//model
var Courses = mongoose.model('Courses', course);

module.exports = Courses;