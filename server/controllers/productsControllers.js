const User = require("../models/User")
const Product = require("../models/Product")
const Order = require("../models/Order")

/********** CRUD PRODUCTOS CREADOR */

exports.addProduct = async (req, res) => {
  await Product.create({
    ...req.body,
    images: req.files.map(img => img.secure_url)
  })
    .then(newProduct => {
      res.status(201).json({ newProduct })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err })
    })
}

exports.editProduct = async (req, res) => {}

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.body.productId)
  res.status(201).json(product)
}

/************ USUARIO FUNCIONES  */

exports.deleteProductFromWishlist = async (req, res) => {
  const usr = User.findByIdAndUpdate(_id, {
    $pull: {
      wishList: {
        $in: req.body.productId
      }
    }
  })
  res.status(201).json({ usr })
}

exports.addProductToWishList = async (req, res) => {
  const { _id } = req.user
  const usr = User.findByIdAndUpdate(
    _id,
    {
      $push: {
        wishList: req.body.article
      }
    },
    { new: true }
  )
  res.status(201).json({ usr })
}

exports.getProducts = async (req, res) => {
  const products = await Product.find()
  res.status(200).json({ products })
}

exports.productDetail = async (req, res) => {
  const { productId } = req.body
  console.log(req.body, "esto es el req body")
  console.log(productId, "existes?")
  const product = await Product.findById(productId)
  console.log(product)
  res.status(200).json({ product })
}

exports.createOrder = async (req, res) => {
  const order = req.body.productCart
  const newOrder = await Order.create(order)
  const usr = await User.findById(req.user._id)
  usr.orders.push(newOrder._id)
  usr.save()
  res.status(201).json({ newOrder })
}

// Method	Endpoint	    Parameters      	        Return Value
// POST	    /upload	    file	                    Product updated
exports.uploadImage = async (req, res) => {
  console.log(req.file)
  if (req.file) {
    const { secure_url } = req.file
    const { productId } = req.body
    console.log(productId)
    await Product.findByIdAndUpdate(productId, { image: secure_url })
      .then(() => {
        res.status(200).json({ file: req.file })
      })
      .catch(err => console.log(err))
  }
}
