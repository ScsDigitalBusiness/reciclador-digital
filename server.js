"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const express_session_1 = __importDefault(require("express-session"));
const connect_flash_1 = __importDefault(require("connect-flash"));
const mongoose_1 = __importDefault(require("mongoose"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const path = require("path");
require("dotenv").config();
const router_1 = __importDefault(require("./router"));
const middlewars_1 = require("./src/middlewares/middlewars");
app.use(express.urlencoded({ extended: true })); //body parse configuration 
//confugurando arquivos estáticos
app.use(express.static("public"));
//setando o motor para renderizar o nosso front-end
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "src", "views")); //<- local onde o nosso HTML está
//Conectando no Banco de Dados
mongoose_1.default.connect(process.env.CONNECTION_URL).then(() => {
    console.log("Conectando...");
    app.emit("Connected"); //quando estiver conectado, o express vai emitir um status conectado
});
//quando estiver conectado, o servidor vai estar escutando na porta que está no arquivo .env 
app.on("Connected", () => {
    app.listen(process.env.PORT, () => {
        // o express vai ficar escutando tudo oque está  acontecendo na porta definida no arquivo .ev
        console.log("Conectado: http://localhost:3000/");
    });
});
const sessionOptions = (0, express_session_1.default)({
    secret: "Sessions Aplication",
    resave: false,
    saveUninitialized: false,
    store: connect_mongo_1.default.create({ mongoUrl: process.env.CONNECTION_URL }),
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 7 * 1000,
    },
});
//usando as configurações
app.use(sessionOptions);
app.use((0, connect_flash_1.default)());
app.use(router_1.default);
app.use(middlewars_1.middlewareGlobal);
