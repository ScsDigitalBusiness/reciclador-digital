import { AccountIn } from "../interfaces/Account.interface";
import  Products from "../models/ProductsModels"
import { Request, Response } from "express";

export default class Admin {

    static async indexAdmin(req: Request,res: Response) : Promise<void> {
        const user: AccountIn = req.session.user as AccountIn  
        if(user && user.status==="authorized") {
        const productModel = new Products(req.body);   
        const allProducts =  await productModel.GetProducts(); 
         res.render("AdminPage", {allProducts});
        }else  {
            res.render("NoPermission"); 
        }
         
    } 

    static async create (req: Request, res: Response): Promise<void> {    
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

    static  async deleteProduct(req: Request, res: Response) :Promise<void> {
        const productModel = new Products(req.body);   
        await productModel.delete(req.params.id); 
        res.redirect("back"); 
    } 

    static async editProduct(req: Request, res: Response):Promise<void> { 
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

    static logout(req: Request,res: Response): void {
        req.session.destroy((err) => {
            if (err) {
                      throw new Error(err)

            } else {
                      res.clearCookie("user");
                      res.redirect("/login/")
        
            }
          });
    }

}