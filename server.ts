const  express = require("express"); 
const app = express();
const   session  =  require("express-session");
const  flash = require ("connect-flash");
const mongoose = require("mongoose");
const   MongoStore = require("connect-mongo"); 
const  path = require("path"); 
//const helmet = require("helmet"); 
require("dotenv").config();
import  routs from "./router";
import {middlewareGlobal} from "./src/middlewares/middlewars"

app.use(express.urlencoded({ extended: true }));  //body parse configuration 

//confugurando arquivos estáticos
app.use(express.static("public"));

//setando o motor para renderizar o nosso front-end
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "src", "views"))  //<- local onde o nosso HTML está

//Conectando no Banco de Dados
mongoose.connect(process.env.CONNECTION_URL).then(() => {
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

const sessionOptions = session({
  secret: "Sessions Aplication",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION_URL }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 7 * 1000,
  },
}); 


//usando as configurações

app.use(sessionOptions);
app.use(flash());
app.use(middlewareGlobal); 
app.use(routs);
//app.use(helmet()); 
