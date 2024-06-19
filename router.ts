import express from "express"; 
const router = express.Router();  
import {index} from "./src/controller/HomeControler";  
import { indexProductPage } from "./src/controller/ProductPageController";
import  {indexAdmin,create,deleteProduct,editProduct} from "./src/controller/AdminPageController";  
import multer from 'multer';    
import { ativacaoIndex } from "./src/controller/AtbPageController.js"; 
import Multer from "./src/config/multerConfig"; 

router.get("/", index) 
router.get("/products/",indexProductPage);   
router.get("/products/atb/index",ativacaoIndex) 
router.get("/admin/",indexAdmin); 
router.post("/admin/create/",create); 
router.get("/admin/delete/:id",deleteProduct)
router.post("/admin/edit/:id",editProduct)
export default router;