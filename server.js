var express = require('express');
var app = express();

var apiRouter = require('./routes/api');
// var ejs = require('ejs');
//var viewsRouter = require('./routes/views');


app.use('/api', apiRouter);
// app.use('/', viewsRouter);


//app.use(express.static(__dirname + '/public'));
//app.set('view engine', 'ejs');




app.listen(3000, function () {
  console.log('express listening on port 3000')
});