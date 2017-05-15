var express = require('express');
var router = express.Router();
var Client = require('./model');
// List all Clients
router.get('/', function (req, res){
	Client.getClients(function (err, clients) {
		if(err) throw err;
		res.json(clients);

	});
})
// Add Client
router.post('/', function (req, res){
	var newClient = {
		FirstName: req.body.FirstName,
		MiddleName: req.body.MiddleName,
		LastName: req.body.LastName,
		LicNumber: req.body.LicNumber,
		DOB: req.body.DOB
	}
	Client.addClient(newClient, function (err, client) {
		if(err) throw err;
		res.json(client);
		// body...
	});
})
// Update Client
router.put('/:_id', function (req, res){
	var update = {
		FirstName: req.body.FirstName,
		MiddleName: req.body.MiddleName,
		LastName: req.body.LastName,
		LicNumber: req.body.LicNumber,
		DOB: req.body.DOB
	}
	Client.updateClient(req.params._id, update, function (err, client) {
		if(err) throw err;
		res.json(client);

	});
})
// Delete Client
router.delete('/:_id', function (req, res){
	
	Client.deleteClient(req.params._id, function (err, client) {
		if(err) throw err;
		res.json(client);

	});
})
// Get Client
router.get('/:_id', function (req, res){
	
	Client.getClient(req.params._id, function (err, client) {
		if(err) throw err;
		res.json(client);

	});
})

module.exports = router;
