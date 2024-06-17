const express = require('express')
const app = express()
const session = require("express-session")
const flash = require("connect-flash")
const mongoose = require("mongoose")
const MongoStore = require("connect-mongo")
const path = require("path")
require("dotenv").config()
const router = require("./router")


//setando o motor para renderizar o nosso front-end
app.set("view engine","ejs"); 
app.set("views",path.resolve(__dirname,"src","views"))  //<- local onde o nosso HTML está