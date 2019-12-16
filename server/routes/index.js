const router = require('express').Router();
const {addProduct, deleteProduct, getProducts, productDetail, createOrder, deleteProductFromWishlist} = require("../controllers/productsControllers")

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.post("/addproduct", addProduct)
module.exports = router;
router.post("/delete-product-from-wishlist", deleteProductFromWishlist)

router.get("/delete-product", deleteProduct)
router.get("/products", getProducts)
router.get("/product-detail", productDetail)
router.post("/new-order", createOrder)
