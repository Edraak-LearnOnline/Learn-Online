var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var path = require('path')
//-----------------------------------------------------
var adminRouter=require('./resources/admin/adminRouter')
var courseRouter=require('./resources/course/courseRouter')
//-----------------------------------------------------


var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var app = express();
app.use(session({
  secret: 'OurAppSessionSecrets',
  resave: false,
  saveUninitialized: true,
}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));
app.use('/courseController',courseRouter);
app.use('/adminController',adminRouter);


app.get('/*', function (req, res){
    res.sendFile(path.resolve(__dirname, '../react-client/dist', 'index.html'));
})
module.exports = app;