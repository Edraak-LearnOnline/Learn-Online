// var mongoose=require('mongoose');
// var bcrypt = require('bcrypt');

// //user Schema.
// var User=mongoose.Schema({
// 	userName:{
// 		type:String,
// 		index:{
// 			unique: true
// 		},
// 		required:true
// 	},
// 	password:{
// 		type:String,
// 		required:true
// 	},
// 	firstName:{
// 		type:String,
// 		required:true
// 	},
// 	lastName:{
// 		type:String,
// 		required:true
// 	},
// 	email:{
// 		type:String,
// 		index:{
// 			unique: true
// 		},
// 		required:true
// 	},
// 	image:{
// 		type:String
// 	}
	
// });

// //hashing function
// User.pre('save',function(next){
// 	if(!isModified('password')){
// 		return next();
// 	}
// 	var that=this
// 	bcrypt.hash(that.password,10,function(err,hash){
// 		if(err){
// 			return next(err)
// 		}
// 		that.password=hash;
// 		next();
// 	});
// });

// //check if the password is correct
// User.methods.comparePassword=function(password,callback){
// 	bcrypt.compare(password,this.password,function(err,isMatch){
// 		if(err){
// 			callback(err)
// 		}
// 		callback(null,isMatch)
// 	});
// };

// var Users=mongoose.model('Users',User);

// module.exports=Users;