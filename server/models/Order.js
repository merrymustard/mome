const {	model, Schema } = require('mongoose');

const orderSchema = new Schema({
  orderNumber: Number,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
	},
	products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  quantity: Number,
	total: Number
}, {
  timestamps: true
});


// un array que imprima fotos de productos en la orden
module.exports = model('Order', orderSchema);