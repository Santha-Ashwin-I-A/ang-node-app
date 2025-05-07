
const Product = require("../models/product")

exports.getProduct = async(req,res)=>{
    const products =await Product.find({});
    res.send(products);
}
exports.getOneProduct = async(req,res)=>{
    const id =await req.params.id;
    const product =await Product.findById(id);
    res.send(product);
}
exports.createProduct = async(req,res)=>{
    const {name,description,price} = await req.body;
    const product = Product.create({name,description,price});
    const newProduct = (await product).save()
    res.send(newProduct);
}
// exports.updateProduct = async(req,res)=>{
//     const id = 
//     const products = Product.find({});
//     res.send(products);
// }
// exports.getProduct = async(req,res)=>{
//     const products = Product.find({});
//     res.send(products);
// }