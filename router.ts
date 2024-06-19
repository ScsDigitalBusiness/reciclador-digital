const express = require ("express"); 
const router = express.Router();  
import {index} from "./src/controller/HomeControler";  
const {indexProductPage} = require("./src/controller/ProductPageController.js")
import  {indexAdmin,create,deleteProduct,editProduct} from "./src/controller/AdminPageController.js";  
const  multer =  require('multer');    
const {ativacaoIndex} = require("./src/controller/AtbPageController.js") 
const multerConfig = require("./src/config/multerConfig");
const uploads = multer (multerConfig);  

router.get("/", index) 
router.get("/products/",indexProductPage);   
router.get("/products/atb/index",ativacaoIndex) 
router.get("/admin/",indexAdmin); 
router.post("/admin/create/",create); 
router.get("/admin/delete/:id",deleteProduct)
router.post("/admin/edit/:id",editProduct)
export default router;