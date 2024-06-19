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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editProduct = exports.deleteProduct = exports.create = exports.indexAdmin = void 0;
const ProductsModels_js_1 = __importDefault(require("../models/ProductsModels.js"));
const indexAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productModel = new ProductsModels_js_1.default(req.body);
    const allProducts = yield productModel.GetProducts();
    res.render("AdminPage", { allProducts }); //render
});
exports.indexAdmin = indexAdmin;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let body = {};
    if (!req.file) {
        body = Object.assign({}, req.body);
    }
    else {
        body = Object.assign(Object.assign({}, req.body), { productImage: req.file.filename });
    }
    const productModel = new ProductsModels_js_1.default(body);
    yield productModel.create();
    res.redirect("back");
});
exports.create = create;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productModel = new ProductsModels_js_1.default(req.body);
    yield productModel.delete(req.params.id);
    res.redirect("back");
});
exports.deleteProduct = deleteProduct;
const editProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productModel = new ProductsModels_js_1.default(req.body);
    yield productModel.edit(req.params.id);
    res.redirect("back");
});
exports.editProduct = editProduct;
