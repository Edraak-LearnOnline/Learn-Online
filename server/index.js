var app = require('./server.js');
var port = 3000;
app.get('/*', function (req, res){
    res.sendFile(path.resolve(__dirname, '../react-client/dist', 'index.html'));
})
app.listen(process.env.PORT || port, function () {
  console.log('listening on port ' + port);
});