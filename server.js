const express = require('express')
const app = express()
const session = require("express-session")
const flash = require("connect-flash")
const mongoose = require("mongoose")
const MongoStore = require("connect-mongo")
const path = require("path")
require("dotenv").config()
const router = require("./router")
