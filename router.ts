const  express=  require("express") ; 
const router = express.Router();  
import {index} from "./src/controller/HomeControler";  
<<<<<<< HEAD
=======
<<<<<<< HEAD
const {indexProductPage} = require("./src/controller/ProductPageController.js")
import  {indexAdmin,create,deleteProduct,editProduct} from "./src/controller/AdminPageController.js";  
const  multer =  require('multer');    
const {ativacaoIndex} = require("./src/controller/AtbPageController.js") 
const  multerConfig = require("./src/config/multerConfig");
const uploads = multer(multerConfig);  
=======
>>>>>>> teste-ts
import { indexProductPage } from "./src/controller/ProductPageController";
import  {indexAdmin,create,deleteProduct,editProduct} from "./src/controller/AdminPageController";  
import multer from 'multer';    
import { ativacaoIndex } from "./src/controller/AtbPageController.js"; 
import {multerConfig} from "./src/config/multerConfig"; 
<<<<<<< HEAD
=======
>>>>>>> 517f877580d3447b5aee3b4daa854b8e6db091ec
>>>>>>> teste-ts

//GET Routs
router.get("/", index) 
router.get("/products/",indexProductPage);   
router.get("/products/atb/index",ativacaoIndex) 
router.get("/admin/",indexAdmin); 
<<<<<<< HEAD
=======
<<<<<<< HEAD
router.post("/admin/create/", uploads.single("productImage"),create); 
router.get("/admin/delete/:id",deleteProduct)
router.post("/admin/edit/:id",editProduct); 

=======
>>>>>>> teste-ts
//POST Routs
router.post("/admin/delete/:id",deleteProduct)
router.post("/admin/create/",create); 
router.post("/admin/edit/:id",editProduct)
<<<<<<< HEAD
=======
>>>>>>> 517f877580d3447b5aee3b4daa854b8e6db091ec
>>>>>>> teste-ts
export default router;