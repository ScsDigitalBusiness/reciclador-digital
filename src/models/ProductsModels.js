"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    sku: { type: String, required: true },
    brand: { type: String, required: true },
    productImage: { type: String, required: false }
});
const ProductModel = mongoose.model("Products", ProductSchema);
class Products {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.product = null;
    }
    ;
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.product = yield ProductModel.create(this.body);
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    ;
    GetProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allProducts = yield ProductModel.find();
                return allProducts;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.product = yield ProductModel.findByIdAndDelete({ _id: id });
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    edit(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.product = yield ProductModel.findByIdAndUpdate(id, this.body);
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.default = Products;
