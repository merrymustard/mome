const router = require('express').Router();
const {addProduct} = require("../controllers/productsControllers")
router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.post("/addproduct", addProduct)
module.exports = router;
