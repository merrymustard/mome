const router = require("express").Router()
const uploadCloud = require("../config/cloudinary")

const {
  addProduct,
  deleteProduct,
  getProducts,
  productDetail,
  createOrder,
  deleteProductFromWishlist,
  addProductToWishList,
  uploadImage,
  getMan,
  getWoman
} = require("../controllers/productsControllers")

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" })
})

router.post("/addproduct", uploadCloud.array("images"), addProduct)
router.post("/delete-product-from-wishlist", deleteProductFromWishlist)
router.post("/add-product-to-wishlist", addProductToWishList)
router.get("/man", getMan)
router.get("/woman", getWoman)
router.get("/delete-product", deleteProduct)
router.get("/products", getProducts)
router.post("/product-detail", productDetail)
router.post("/new-order", createOrder)
router.post("/upload", uploadCloud.single("photo"), uploadImage)

module.exports = router
