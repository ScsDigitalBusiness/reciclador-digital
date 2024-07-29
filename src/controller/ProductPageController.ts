import Products from '../models/ProductsModels';
import { Request, Response } from 'express';


export default class Product {

          static async indexProductPage(req:Request,res:Response): Promise<void> {
                    try {
                              const products = new Products(req.body); 
                              const allProducts =  await products.GetProducts(); 
                              res.render("ProductPage", {allProducts}); 

                    } catch(e: any) {
                              throw new Error(e)
                    }

          }

}