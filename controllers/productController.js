const Products=require('../models/productModel');
const showAllProduct=async (req,res)=>{
    const products=await Products.find({});
    res.render('showAllProduct',{products});

}
const showHome= (req,res)=>{
   

    res.render('home',{name:"abc"});
}
module.exports={showAllProduct,showHome};