var adminRouter = require('express').Router();
var adminController = require('./adminController');
//create new user
adminRouter.route('/create')
	.post(function (req, res) {
		adminController.create(req, res);
	});

//retrieve data 
adminRouter.route('/retrieve')
	.get(function (req, res) {
		adminController.retrieve(req, res);
	});

//login
adminRouter.route('/login')
	.post(function (req, res) {
		adminController.login(req, res);
	});

//logout
adminRouter.route('/logout')
	.get(function (req, res) {
		adminController.logout(req, res);
	});
//signup
adminRouter.route('/signup')
	.post(function (req, res) {
		adminController.signup(req, res)
	});

module.exports = adminRouter;
