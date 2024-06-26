const  express =  require("express") ; 
const router = express.Router();  
import  HomeController from "./src/controller/HomeControler";  
import { indexProductPage } from "./src/controller/ProductPageController"; 
import {SignUpAndLoginController} from "./src/controller/SingupAdnLoginController";
import  {indexAdmin,create,deleteProduct,editProduct,logout} from "./src/controller/AdminPageController";  
import multer from 'multer';    
import { ativacaoIndex } from "./src/controller/AtbPageController.js"; 
import {multerConfig} from "./src/config/multerConfig";  
import { createMaterial, deletMaterial, editMaterial, materialGlass, materialMetals, materialPape, materialPlastic } from "./src/controller/MaterialController";
import Config from "./src/controller/ConfigPageController"; 
import UsersController from './src/controller/UsersController';
import ProjectsController from './src/controller/ProjectsController';
const uploads = multer(multerConfig); 

router.get("/", HomeController.index) 
//login and SignUp routes 
router.get("/login/", SignUpAndLoginController.indexLogin);   
router.post("/login/auth", SignUpAndLoginController.Auth);    
router.get("/signup/", SignUpAndLoginController.indexSignup)
router.post("/signup/create/", SignUpAndLoginController.createAccount); 

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

//usuários-page 
router.get("/users/",UsersController.usersIndex);  
router.post("/users/edit/:id",UsersController.edit); 
router.post("/users/delete/:id",UsersController.delete);  
//Projetcts Page 
router.get("/projects",ProjectsController.index);  
router.post("/projects/create",uploads.single("projectImage"),ProjectsController.create);    
router.post("/projects/delete/:id",ProjectsController.delete);
router.post("/projects/edit/:id",uploads.single("projectImageEdited"),ProjectsController.edit);   


//Routs settings
router.get("/configuracoes/", Config.settingsPage) 
router.get("/logout",logout)
router.post("/configuracoes/update/:id", uploads.single("userImageEdited"), Config.updateProfile)


export default router;