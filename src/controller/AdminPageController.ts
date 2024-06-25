import  Products from "../models/ProductsModels"

export const indexAdmin = async (req:any,res:any) : Promise<any> =>{  
    if(req.session.user && req.session.user.status==="authorized") {
    const productModel = new Products(req.body);   
    const allProducts =  await productModel.GetProducts(); 
     res.render("AdminPage", {allProducts});
    }else  {
        res.render("NoPermission"); 
    }
      //render
} 
export  const create =  async (req : any,res :any): Promise<any> => {    
    let body: Object = {}; 
    if(!req.file) {
        body =  {...req.body}
    }else {
        body =  {...req.body,productImage: req.file.filename}
    }
    const productModel = new Products(body);  
    await productModel.create(); 
    res.redirect("back") 
}  
export const deleteProduct = async (req :any,res:any) :Promise<any> =>{
    const productModel = new Products(req.body);   
    await productModel.delete(req.params.id); 
    res.redirect("back"); 
} 

export const editProduct = async(req:any,res:any):Promise<any> =>{ 
    let body:object = {}; 
    if(!req.file) {
        body =  {...req.body}; 
    }else {
        body = {...req.body,productImage:req.file.filename } 
    }
    const productModel = new Products(body); 
    await productModel.edit(req.params.id); 
    res.redirect("back"); 
} 
export const logout = (req:any,res:any) =>{
    req.session.destroy(); 
    res.redirect("/login/"); 
}