const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    sku: { type: String, required: true },
    brand: { type: String, required: true },
    productImage: { type: String, required: false }, 
    urlOfUpsellPage:{type:String, required:false}
});

const ProductModel = mongoose.model("Products", ProductSchema)

 export default class Products { 
    public body:object; 
    public errors:  any;
    public product: object | boolean |null ;  
    constructor(body:any) {
        this.body  = body;
        this.errors = [];
        this.product = null;
    };

   public async create(): Promise<any> {
        try {
            this.product  = await ProductModel.create(this.body)

        } catch (e:any) {
            throw new Error(e)
        }
    };

   public  async GetProducts(): Promise<any>  {
        try {
            const allProducts = await ProductModel.find();
            return allProducts;

        } catch (e:any) {
            throw new Error(e)
        }
    } 
    public async delete(id:string) {
        try  {
            this.product = await ProductModel.findByIdAndDelete({_id:id}); 
        }catch(e:any) {
            throw new Error(e);
        }
    } 
    public async  edit(id:string) {
        try{
            this.product = await ProductModel.findByIdAndUpdate(id,this.body); 
        }catch(e:any) {
            throw new Error(e); 
        }
    }
}

