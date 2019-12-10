const {
	model,
	Schema
} = require('mongoose');

const productSchema = new Schema({
	name: String,
	brand: String,
	caption: String,
	price: Number,
	size: Array,
	quantity: Array,
	color: Array,
	details: String,
	image: [String],
	category: {
		type: String,
		enum : [men,women]
	},
	subcategory: {
		type: String,
		enum : [shirts, tshirts, sweaters, pants, shorts, dresses, skirts, shoes, accesories]
  },
})

module.exports = model('Product', productSchema);