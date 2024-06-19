const Products = require("../models/ProductsModels")
exports.indexAdmin = async (req,res) =>{  
    const productModel = new Products(req.body);   
    const allProducts =  await productModel.GetProducts(); 

    res.render("AdminPage", {allProducts});  //render
} 
exports.create =  async (req,res) => {
    const productModel = new Products(req.body);  
    await productModel.create(); 
      
}