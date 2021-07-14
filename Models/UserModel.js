var mongoose = require('mongoose');
const OrdersModel = require('./OrdersModel');
var Schema = mongoose.Schema;

let addressSchema = mongoose.Schema({
	'city': String,
	'street': String,
	'buildingNum': Number,
	'houseNum': Number
})


var UserSchema = new Schema({
	'Email': {
		type: String,
		unique: true
	},
	'FirstName': String,
	'LastName': String,
	'Password': String,
	'addresses':[addressSchema]

}, {toJSON:{virtuals:true}, timestamps: true });


UserSchema.virtual('orders',{
	ref:'Orders',
	localField:'_id',
	foreignField:'User'

})

module.exports = mongoose.model('User', UserSchema);
