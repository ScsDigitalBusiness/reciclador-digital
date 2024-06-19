const router = require("express").Router(); 
const {index} = require("./src/controller/HomeControler") 
const {indexProductPage} = require("./src/controller/ProductPageController.js")
import  {indexAdmin,create} from "./src/controller/AdminPageController.js";  
const  multer =  require('multer');    
const {ativacaoIndex} = require("./src/controller/AtbPageController.js") 
const multerConfig = require("./src/config/multerConfig");
const uploads = multer (multerConfig); 
router.get("/", index) 
router.get("/products/",indexProductPage);   
router.get("/products/atb/index",ativacaoIndex) 
router.get("/admin/",indexAdmin); 

router.post("/admin/create/",create); 

export default router;