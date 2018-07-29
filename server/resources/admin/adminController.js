var admin = require('./admin');
var salt = 10

exports.create = function(req,res){

	var Admin= new admin({
		userName:req.body.userName,
		password:req.body.password,
		email:req.body.email,
		fullName:req.body.fullName
		
	})
	Admin.save(function(err,data){
		if(err){
		console.log(err);
		}
		res.send(data)
	});
};


exports.retrieve= function(req,res){
	admin.find({},function(err,data){
		if(err){
			console.log(err);
		}
		res.send(data);
	});
};

//login
exports.login=function(req,res){
	admin.findOne({userName:req.body.userName}).exec(function(err,adm){

		if(err){
			console.error(err);
		}
		if(!adm){
			console.error('No admin found ')
		}else{
			adm.comparePassword(req.body.password,function(err,isMatch){
				if(err){
					console.error(err);
				}
				if(!isMatch){
					console.error('no match password');
				}else{
					return req.session.regenerate(function(err){

						if(err){
							return console.log(err);
						}

						req.session.userName = adm.userName;
						req.session.adminType = adm.userType;
						res.json(adm);
					});
				}
			});
		}

	});
}

//logout 
exports.logout = function(req,res){
	req.session.destroy(function(err){

		if(err){
			console.log(err);
		}

		    res.redirect('/admin');
	});
}

// check if the loggedin person is the admin .
exports.isLogin = function(req, res) {

	if (req.session.adminType === "A") {
		res.json(true);
	} else {
		console.error("not Admin");
		res.status(500)
 		res.json('error')
	}
	
}
exports.signup = function (req , res) {
	 let userName = req.body.userName;
    let password = req.body.password; 
    let email = req.body.email; 
    let fullName = req.body.fullName;

    admin.find({
        userName: userName
    }, function (err, data) {
        if (err) {
            res.sendStatus(404); 
        }
            else {
                let user = new admin({
                    userName: userName,
                    email: email,
                    password: password,
                    fullName:fullName
                }); 
                user.save(function (err, data) { 
                    if (err) {
                        throw err;
                    }
                    req.session.userName = adm.userName;
					req.session.adminType = adm.userType;
					res.json(adm);
                });
            }
    });
}