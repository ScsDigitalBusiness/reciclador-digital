import express from "express"; 
const router = express.Router();  
import {index} from "./src/controller/HomeControler";  
import { indexProductPage } from "./src/controller/ProductPageController";
import  {indexAdmin,create,deleteProduct,editProduct} from "./src/controller/AdminPageController";  
import multer from 'multer';    
import { ativacaoIndex } from "./src/controller/AtbPageController.js"; 
import {multerConfig} from "./src/config/multerConfig"; 

//GET Routs
router.get("/", index) 
router.get("/products/",indexProductPage);   
router.get("/products/atb/index",ativacaoIndex) 
router.get("/admin/",indexAdmin); 
//POST Routs
router.post("/admin/delete/:id",deleteProduct)
router.post("/admin/create/",create); 
router.post("/admin/edit/:id",editProduct)
export default router;