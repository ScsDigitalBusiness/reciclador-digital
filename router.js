const router = require("express").Router()
const {index} = require("./src/controller/HomeControler")

router.get("/", index)

module.exports = router;