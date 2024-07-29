import { Request, Response, NextFunction } from "express";
import MongoStore from "connect-mongo"; 
require("dotenv").config();
import session from "express-session";

export const sessionOptions = session({
  secret: "Sessions Aplication",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION_URL }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 7 * 1000,
  },
  name: "user"
}); 

export class Middlewares {
  
  static global(req: Request, res: Response, next: NextFunction): void {
    res.locals.errors = req.flash("errors"); 
    res.locals.success = req.flash("success");
    res.locals.user = req.session.user;  
    next(); 
  
  }

}