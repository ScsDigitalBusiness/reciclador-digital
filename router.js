const  express = require('express'); 
const router = express.Router(); 
const {index} = require("./src/controller/HomeControler") 
const {indexProductPage} = require("./src/controller/ProductPageController.js")
const {indexAdmin}  = require("./src/controller/AdminPageController.js") 
const {ativacaoIndex} = require("./src/controller/AtbPageController.js")
router.get("/", index) 
router.get("/products/",indexProductPage);   
router.get("/products/atb/index",ativacaoIndex)
router.get("/admin/",indexAdmin); 

module.exports = router;