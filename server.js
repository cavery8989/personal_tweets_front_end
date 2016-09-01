var express = require('express');
var app = express();

var apiRouter = require('./routes/api');



app.use('/api', apiRouter);
app.use('/',express.static(__dirname + '/public'));



app.listen(3000, function () {
  console.log('express listening on port 3000')


});