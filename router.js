const  express = require('express'); 
const router = express.Router(); 
const {index} = require("./src/controller/HomeControler") 
const {indexProductPage} = require("./src/controller/ProductPageController.js")
const {indexAdmin}  = require("./src/controller/AdminPageController.js")
router.get("/", index) 
router.get("/products/",indexProductPage);   
router.get("/products/atb/index")
router.get("/admin/",indexAdmin); 

module.exports = router;