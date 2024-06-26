import  Products from "../models/ProductsModels"
export const indexProductPage =  async (req:any,res:any) => {  
 const products = new Products(req.body); 
  const allProducts =  await products.GetProducts(); 
 res.render("ProductPage",{allProducts}); 

  
}