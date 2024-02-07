var express = require('express');
var router = express.Router();

const ProductController = require('../controllers/ProductController');

router.post("/add",ProductController.addProduct);
router.get("/",ProductController.getAllData);
router.get("/:product_id",ProductController.getDataFromId);

module.exports = router;