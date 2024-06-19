const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    sku: { type: String, required: true },
    brand: { type: String, required: true },
    productImage: { type: String, required: false }
});

const ProductModel = mongoose.model("Products", ProductSchema)

class Products {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.product = null;
    };

    async create() {
        try {
            this.product = await ProductModel.create(this.body)

        } catch (e) {
            throw new Error(e)
        }
    };

    async GetProducts() {
        try {
            const allProducts = await ProductModel.find();
            return allProducts;

        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = Products;