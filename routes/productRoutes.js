const express = require("express");
const router = express.Router();
const {showAllProduct,showHome}=require('../controllers/productController');
const Products=require('../models/productModel');

router.get("/product/show", showAllProduct);
router.get("/home",showHome);
router.get("/addProduct",(req,res)=>{
    res.render('addProduct');
});
router.post('/addProduct',async (req,res)=>{
    console.log(req.body);
   
await Products.create(req.body);
res.redirect('home');
})
module.exports = router;
