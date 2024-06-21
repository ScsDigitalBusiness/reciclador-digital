const  express =  require("express") ; 
const router = express.Router();  
import {index} from "./src/controller/HomeControler";  
import { indexProductPage } from "./src/controller/ProductPageController"; 
import { indexLogin,Auth,indexSignup,createAccount} from "./src/controller/SingupAdnLoginController";
import  {indexAdmin,create,deleteProduct,editProduct} from "./src/controller/AdminPageController";  
import multer from 'multer';    
import { ativacaoIndex } from "./src/controller/AtbPageController.js"; 
import {multerConfig} from "./src/config/multerConfig";  
import { createMaterial, deletMaterial, editMaterial, materialGlass, materialMetals, materialPape, materialPlastic } from "./src/controller/MaterialController";
const uploads = multer(multerConfig); 

router.get("/", index) 
router.get("/products/atb/index", ativacaoIndex)  
//login and SignUp routes 
router.get("/login/",indexLogin);   
router.get("/login/auth",Auth);    
router.get("/signup/",indexSignup)
router.post("/signup/create",createAccount); 

//Routs products
router.get("/products/", indexProductPage);    
router.get("/admin/", indexAdmin); 
router.post("/admin/create/", uploads.single("productImage"), create); 
router.post("/admin/delete/:id", deleteProduct)
router.post("/admin/edit/:id",uploads.single("productImageEdited"), editProduct);  

//Routs material 

router.post("/materiais/create/", uploads.single("materialImage"), createMaterial)
router.post("/materiais/delete/:id", deletMaterial)
router.post("/materiais/edit/:id", uploads.single("materialImageEdited"), editMaterial)
router.get("/materiais/papel/", materialPape)
router.get("/materiais/vidro/", materialGlass)
router.get("/materiais/plastico/", materialPlastic)
router.get("/materiais/metais/", materialMetals)


export default router;