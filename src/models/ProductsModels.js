const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
          name: {type:String, required:true},
          category: {type:String, required:true},
          price: {type:String, required:true},
          branding: {type:String, required:true},
          productImage: {type:String, required:false}
});

const ProductModel = mongoose.model("Products", ProductSchema)

class Products {
          constructor(body) {
                    this.body = body;
                    this.errors = [];
                    this.product = null;
          };

          async Create() {
                    try {
                              this.product = await ProductModel.create(this.body)

                    } catch(e) {
                              throw new Error(e)
                    }
          };

          async GetProducts() {
                    try {
                              this.product = await ProductModel.find();
                              const allProducts = this.product;
                              return allProducts;

                    } catch(e) {
                              throw new Error(e)
                    }
          }
}

exports.Products = Products;