var courseRouter = require('express').Router();
var courseController = require('./courseController');

// create route
courseRouter.route('/Create')
	.post(function (req, res) {
	courseController.Create(req, res);
	});
//retrieve Route.
courseRouter.route('/retrieve')	
	.get(function (req, res) {
		courseController.retrieve(req, res);
	});
//retriveAll
courseRouter.route('/retriveAll')	
	.get(function (req, res) {
		courseController.retriveAll(req, res);
	});
//delete router.
courseRouter.route('/Delete')
	.post(function(req,res){
		courseController.delete(req,res)
	});
//update router
courseRouter.route('/update')
	.put(function(req,res){
		courseController.update(req,res)
	});
//retrive one Route 
courseRouter.route('/retriveone')
	.get(function(req,res){
		courseController.getOne(req,res)
	});
//Like router 
courseRouter.route('/Like')
	.post(function(req,res){
		courseController.Like(req,res)
	});
//unlike router
courseRouter.route('/Unlike')
	.post(function(req,res){
		courseController.Unlike(req,res)
	});




module.exports = courseRouter