var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = "mongodb://localhost:27017/cp/clients";
mongoose.connect(config)
	.connection
		.on('connected', function(){
			console.log("successfully cconneted to "+ config)
		})
		.on('error', function(err){
			console.log("Failed to establish connection. Database error "+ err)
		})
var app = express();
var port = 3000;
app.get('/', function(req,res){
	res.send('Hello from Alban');
});
var router = require('./routes');

//Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api/clients', router);
app.listen(port, function (){
	console.log("server is runningon port "+ port);
})