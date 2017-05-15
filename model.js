var mongoose = require('mongoose');
var clientSchema = new mongoose.Schema({
	FirstName: String,
	MiddleName: String,
	LastName: String,
	LicNumber: String,
	DOB: Date
})

var Client = module.exports = mongoose.model('Client', clientSchema);

module.exports.getClients = function(callback){
	Client.find(callback);
}
module.exports.addClient = function(newClient, callback){
	Client.create(newClient, callback);
}
module.exports.updateClient = function(id, newClient, callback){
	Client.findByIdAndUpdate(id, newClient, callback);
}
module.exports.deleteClient = function(id, callback){
	Client.findByIdAndRemove(id, callback);
}
module.exports.getClient = function(id, callback){
	Client.findById(id, callback);
}