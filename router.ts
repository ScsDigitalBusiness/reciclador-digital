import express from "express"; 
const router = express.Router();  
import  HomeController from "./src/controller/HomeControler";
import SignUpAndLoginController from "./src/controller/SingupAdnLoginController";
import  Admin from "./src/controller/AdminPageController";  
import multer from 'multer';    
const uploads = multer(multerConfig); 
import { ativacaoIndex } from "./src/controller/AtbPageController.js"; 
import {multerConfig} from "./src/config/multerConfig";  
import Materials from "./src/controller/MaterialController";
import Config from "./src/controller/ConfigPageController"; 
import UsersController from './src/controller/UsersController';
import ProjectsController from './src/controller/ProjectsController';
import Product from "./src/controller/ProductPageController";

router.get("/", HomeController.index) 
//login and SignUp routes 
router.get("/login/", SignUpAndLoginController.indexLogin);   
router.post("/login/auth", SignUpAndLoginController.Auth);    
router.get("/signup/", SignUpAndLoginController.indexSignup)
router.post("/signup/create/", SignUpAndLoginController.createAccount); 

//Routs products
router.get("/products/", Product.indexProductPage);    
router.get("/admin/", Admin.indexAdmin); 
router.post("/admin/create/", uploads.single("productImage"), Admin.create); 
router.post("/admin/delete/:id", Admin.deleteProduct)
router.post("/admin/edit/:id",uploads.single("productImageEdited"), Admin.editProduct);  

//Routs material 
router.post("/materiais/create/", uploads.single("materialImage"), Materials.createMaterial)
router.post("/materiais/delete/:id", Materials.deletMaterial)
router.post("/materiais/edit/:id", uploads.single("materialImageEdited"), Materials.editMaterial)
router.get("/materiais/papel/", Materials.materialPape)
router.get("/materiais/vidro/", Materials.materialGlass)
router.get("/materiais/plastico/", Materials.materialPlastic)
router.get("/materiais/metais/", Materials.materialMetals) 

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
router.get("/logout",Admin.logout)
router.post("/configuracoes/update/:id", uploads.single("userImageEdited"), Config.updateProfile)


export default router;