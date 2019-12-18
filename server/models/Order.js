const {	model, Schema } = require('mongoose');

const orderSchema = new Schema({
	products: [{
    product:{
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity:{
      type: Number
    },
    size:{
      type:Number
    }
  }],
	total: Number
}, {
  timestamps: true
});


// un array que imprima fotos de productos en la orden
module.exports = model('Order', orderSchema);