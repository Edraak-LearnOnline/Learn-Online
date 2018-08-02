var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//users and  admins schema 
var admin = mongoose.Schema({
	userName: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	fullName: {
		type: String,
		required: true
	},
	Courses: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Courses'
	}]

});
//before save in DataBase
admin.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next();
	}
	var that = this
	bcrypt.hash(that.password, 10, function (err, hash) {
		if (err) {
			return next(err)
		}
		that.password = hash;
		next();
	});
});
admin.methods.comparePassword = function (password, callback) {
	bcrypt.compare(password, this.password, function (err, isMatch) {
		if (err) {
			callback(err)
		}
		callback(null, isMatch)
	});
};
// model 
var Admin = mongoose.model('Admin', admin);

module.exports = Admin;