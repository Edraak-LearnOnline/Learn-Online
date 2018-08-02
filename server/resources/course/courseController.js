var Courses = require('./course');

exports.Create = function (req, res) {

	const { courseName, description, video, image } = req.body
	var obj = {
		courseName: courseName,
		description: description,
		publisher: req.session.userName,
		video: video,
		image: image
	}
	var course = new Courses(obj)
	course.save(function (err, data) {
		if (err) {
			throw err;
		}
		res.send(data);
	});
};

//retrive courses by publisher
exports.retrieve = function (req, res) {
	Courses.find({ publisher: req.session.userName })
		.exec(function (err, data) {
			if (err) {
				throw err;
			}
			res.send(data)
		})
};
//retrive all courses 
exports.retriveAll = function (req, res) {
	Courses.find({}).exec(function (err, data) {
		if (err) {
			throw err;
		}
		res.send(data)
	})
};
// delete course
exports.delete = function (req, res) {
	Courses.findOne({ publisher: req.session.userName })
		.exec(function (err, deleted) {
			if (err) return res.send(err);
			Courses.deleteOne({ _id: req.body.id }, function (err) {
				if (err) return res.send(err);
				res.send(deleted);
			})
		})
};


//update the course 
exports.update = function (req, res) {
	let courseName = req.body.courseName
	let description = req.body.description
	let video = req.body.video
	let id = req.body.id
	Courses.findOne({ _id: id }, (err, found) => {
		if (err) {
			throw err
		} else {
			if (courseName === '') {
				courseName = found.courseName
			} if (description === '') {
				description = found.description
			} if (video === '') {
				video = found.video
			}
			Courses.findOneAndUpdate({ _id: id }, { $set: { courseName: courseName, description: description, video: video } }, (err, data) => {
				if (err) return res.send(err);
				
				res.send(data)
			})
		}
	})
};
//find course by publisher Id
exports.getOne = function (req, res) {
	var id = req.body.id;
	Courses.findById(id, function (err, course) {
		if (err) return res.send(err);
		res.send(course)
	});
}


//function to like the course and count numbers of likes . 
exports.Like = function (req, res) {
	var publisher = req.body.publisher
	if (req.session.userName)
		Courses.findOne({ publisher: publisher }, function (err, found) {
			if (err) {
				throw err;
			} else {

				if (found) {
					if (found.incrementUser.includes(req.session.userName)) {
						res.send(found);
					} else {
						Courses.update({ publisher: publisher }, { $push: { incrementUser: req.session.userName }, $pull: { decrementUser: req.session.userName }, $inc: { Like: + 1 } }, function (err, success) {
							if (err) {
								throw err;
							}
							else {
								Courses.findOne({ publisher: publisher }, function (err, data) {
									if (err) {
										throw err;
									} else {
										res.send(data);
									}
								});

							}
						});
					}

				}
			}
		});
	else
		res.sendStatus(401)
};

// function to unlike the course and count numbers of unlikes
exports.Unlike = function (req, res) {
	let publisher = req.body.publisher
	if (req.session.userName)
		Courses.findOne({ publisher: publisher }, function (err, found) {
			if (err) {
				throw err;
			} else {
				if (found) {
					if (found.decrementUser.includes(req.session.userName)) {
						res.send(found);
					} else {
						Courses.update({ publisher: publisher }, { $push: { decrementUser: req.session.userName }, $pull: { incrementUser: req.session.userName }, $inc: { Like: - 1 } }, function (err, success) {
							if (err) {
								throw err;
							}
							else {
								Courses.findOne({ publisher: publisher }, function (err, data) {
									if (err) {
										throw err;
									} else {
										res.send(data);
									}
								});

							}
						});
					}
				}
			}
		});
	else
		res.sendStatus(401)
};