const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
productName:{type:String,required:true,trim:true},
productCategory:{type:String,trim:true,required:true},
productPrice:{type:Number,required:true},
sellerName:{type:String,required:true,trim:true},
productDescription:{type:String,required:true,trim:true},
productImageUrl:{type:String,default:'https://www.mikimotoamerica.com/media/wysiwyg/images/spa.gif'},
productDiscount:{type:Number,default:0}



});
const Products=mongoose.model('products',productSchema);
module.exports=Products;