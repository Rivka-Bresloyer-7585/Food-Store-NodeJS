var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/324115385', { useNewUrlParser: true, useUnifiedTopology: true });
var Schema = mongoose.Schema;

var OrdersSchema = new Schema({
	'OrderId': Number,
	'OrderDate': Date,
	'OrderSum': Number,
	'UserId': Number,
	'User': {
		type: Schema.Types.ObjectId,
		ref: 'user'
	},
	'OrderItem': Array,
}, { timestamps: true });

module.exports = mongoose.model('Orders', OrdersSchema);
