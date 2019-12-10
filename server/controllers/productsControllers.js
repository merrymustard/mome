const User = require('../models/User');
const Product = require("../models/Product")

exports.addProduct = async (req, res) => {
	const {newProduct} = req.body
	await Product.create( newProduct )
			.then((newProduct) => { res.status(201).json({newProduct}); })
			.catch((err) => {
				console.log(err)
				res.status(500).json({ err })
			} );
}