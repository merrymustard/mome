const User = require('../models/User');
const Product = require("../models/Product")

exports.addProduct = async (req, res) => {
	const {product} = req.body
	await Product.create( product )
			.then((product) => { res.status(201).json({product}); })
			.catch((err) => res.status(500).json({ err }));
}