import express from "express"; 
const app = express();
import flash from "connect-flash";
import mongoose from "mongoose";
import path from "path"; 
//const helmet = require("helmet"); 
require("dotenv").config();
import {Middlewares, sessionOptions} from "./src/middlewares/middlewars"
import router from "./router";

app.use(express.urlencoded({ extended: true }));  //body parse configuration 

//confugurando arquivos estáticos
app.use(express.static("public"));

//setando o motor para renderizar o nosso front-end
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "src", "views"))  //<- local onde o nosso HTML está

//Conectando no Banco de Dados
const urlConnect = process.env.CONNECTION_URL as string
mongoose.connect(urlConnect).then(() => {
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
//

//usando as configurações

app.use(sessionOptions);
app.use(flash());
app.use(Middlewares.global); 
app.use(router);
//app.use(helmet()); 
