const  express=  require("express") ; 
const router = express.Router();  
import {index} from "./src/controller/HomeControler";  

import { indexProductPage } from "./src/controller/ProductPageController";
import  {indexAdmin,create,deleteProduct,editProduct} from "./src/controller/AdminPageController";  
import multer from 'multer';    
import { ativacaoIndex } from "./src/controller/AtbPageController.js"; 
import {multerConfig} from "./src/config/multerConfig"; 
const uploads = multer(multerConfig); 

router.get("/", index) 
router.get("/products/atb/index",ativacaoIndex) 
//Routs products
router.get("/products/",indexProductPage);   
router.get("/admin/",indexAdmin); 
router.post("/admin/create/", uploads.single("productImage"),create); 
router.post("/admin/delete/:id",deleteProduct)
router.post("/admin/edit/:id",uploads.single("productImageEdited"),editProduct); 


export default router;