var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CatagorySchema = new Schema({
	'CatagoryName': String
}, { timestamps: true });

module.exports = mongoose.model('Catagory', CatagorySchema);
