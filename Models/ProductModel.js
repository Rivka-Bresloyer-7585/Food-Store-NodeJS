var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	'ProductId': Number,
	'ProductName': String,
	'CategoryId': {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	},
	'Price': Number,
	'Description': String,
	'ImageName': String
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
