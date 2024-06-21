import session from "express-session";
import SingUp from "../models/SingupAndLoginModel"; 

export const  indexLogin =  (req:any,res:any)  =>{
    res.render("Login")
}  
export const Auth  =  (req:any, res:any) =>{

}
export const indexSignup = (req:any,res:any) =>{
    res.render("SignUp")
}  
export const createAccount =  async (req:any,res:any) =>{   
   console.log(req.body)
   const  singUpModel = new SingUp(req.body);   
   await singUpModel.Register();  
   if(singUpModel.errors.length >0) {
        req.flash("errors",singUpModel.errors); 
        res.redirecrt("back"); 
    } else {
        res.redirect("back")
    }
}