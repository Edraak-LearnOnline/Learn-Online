// var Users=require('./user');

// //create User .
// exports.Create=function(req,res){
// 	var user=new Users(req.body);
// 	user.save(function(err,data){
// 		if(err){
// 			console.log(err);
// 		}
// 		res.send(data);
// 	});
// };


// exports.login = function (req, res) {
// 	Users.findOne({userName: req.body.userName})
// 	.exec(function (err, user) {
// 		if (err) {
// 			console.error(err);
// 		} 
// 		if (!user) { 
// 			console.error("No user found");
// 		} else { 
// 			user.comparePassword(req.body.password, function(err, isMatch) {
// 		if (err) {
// 			console.error(err);
// 		}
// 		if (!isMatch) { 
// 			console.error("Wrong password");
// 		} else { 
// 			return req.session.regenerate(function(err) {
//         		if (err) {
//         			return console.error(err);
//         		}
//         		req.session.userName = user.userName;
//         		res.json(user);
// 			});
// 		}
// 	});
// }
// });
// };


// // Logout function 
// exports.logout = function (req, res) {
// req.session.destroy(function(err) {

// 	if (err) {
// 		return console.log(err);
// 	}
// 	res.json("logged out")

// })
// };
