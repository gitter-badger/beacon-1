 var express = require('express');
 var mongoose = require('mongoose');
 var bodyParser = require('body-parser');
 var ejs = require('ejs');
 var app = express();
 
//  mongoose.connect('mongodb://169.45.106.140/beacon-test'); //this may not work you goober
 
 app.use(express.static('./client'));
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));
 
 app.set('views', __dirname + '/client/views');
 app.set('view engine', 'ejs');

 
 var indexRouter = require('./server/routes/index');
//  var beaconsRouter = require('./server/routes/api/beacons');
 
 app.use('/', indexRouter);
//  app.use('/api/beacons', beaconsRouter);
 
 var port = 3000;
 
 app.listen(port, function(){
     console.log('on cloud ' + port);
 })