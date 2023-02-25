const express = require('express');
const {
  getAllProductsforAdmin,
  getProductsForTheClient,
  getSingleProduct,
} = require('../controllers/Productscontrollers');
const router = express.Router();

router.get('/getallproducts', getAllProductsforAdmin);
router.get('/getallproductsforclients', getProductsForTheClient);
router.get('/getsingleproduct/:id', getSingleProduct);

module.exports = router;
