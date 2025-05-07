const express = require("express");
const { getProduct, getOneProduct, createProduct } = require("../controllers/productControllers");
const router = express.Router();

router.get("/",getProduct);
router.get("/:id",getOneProduct);
router.post("/",createProduct);

module.exports = router