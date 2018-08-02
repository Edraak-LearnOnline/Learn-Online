var server = require('../server/server.js')
const assert = require('assertthat');
var expect = require('expect.js');
var chai = require('chai')
var handler = require('../server/resources/admin/adminController')
var CourseHandler= require('../server/resources/course/courseController')
var chaiHttp = require('chai-http');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);


describe('all the status code should be right', function () {
   it('create function should be exist', function () {
       should.exist(handler.create);
   });

   it('retrive function should be exist', function () {
    should.exist(CourseHandler.retrieve);
});

   it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
    .get('/courseController/retrieve')
        .end(function (err,res){
            res.should.have.status(200)
           
            done()
        });
});
it('retriveAll function should be exist', function () {
    should.exist(CourseHandler.retriveAll);
});
it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
    .get('/courseController/retriveAll')
        .end(function (err,res){
            res.should.have.status(200)
           
            done()
        });
});
it('delete function should be exist', function () {
    should.exist(CourseHandler.delete);
});
it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
    .post('/courseController/delete')
        .end(function (err,res){
            res.should.have.status(200)
           
            done()
        });
});
it('update function should be exist', function () {
    should.exist(CourseHandler.update);
});
it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
    .put('/courseController/update')
        .end(function (err,res){
            res.should.have.status(200)
           
            done()
        });
});

});
it('getOne function should be exist', function () {
    should.exist(CourseHandler.getOne);
});
it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
    .get('/courseController/getOne')
        .end(function (err,res){
            res.should.have.status(200)
           
            done()
        });
});


   it('Unlike function should be exist', function () {
    should.exist(CourseHandler.Unlike);
});
   it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
    .post('/courseController/Unlike')
        .end(function (err,res){
            res.should.have.status(200)
           
            done()
        });
});
it('Like function should be exist', function () {
    should.exist(CourseHandler.Like);
});
it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
    .post('/courseController/Like')
        .end(function (err,res){
            res.should.have.status(200)
            done()
        });
});
it('retrieve function should be exist', function () {
    should.exist(handler.retrieve);
});
it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
    .get('/adminController/retrieve')
        .end(function (err,res){
            res.should.have.status(200)
           
            done()
        });
});
it('login function should be exist', function () {
    should.exist(handler.login);
});
it('login should sendStatus(200) to the client', function (done) {
    
    chai.request(server)
    .post('/adminController/login')
        .end(function (err,res){
            res.should.have.status(200)
           
            done()
        });
});
it('logout function should be exist', function () {
    should.exist(handler.logout);
});
it('it should sendStatus(200) to the client', function (done) {
    chai.request(server)
    .get('/adminController/logout')
        .end(function (err,res){
            res.should.have.status(200)
           
            done()
        });
});
it('signup function should be exist', function () {
    should.exist(handler.signup);
});
// it('it should sendStatus(200) to the client', function (done) {
//     chai.request(server)
//     .post('/adminController/signup')
//         .end(function (err,res){
//             res.should.have.status(200)
           
//             done()
//         });
// });




