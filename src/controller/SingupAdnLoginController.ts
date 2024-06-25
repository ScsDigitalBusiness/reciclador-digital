import session from "express-session";
import SignUp from "../models/SingupAndLoginModel";

export abstract class SignUpAndLoginController {
    static indexLogin(req: any, res: any) {
        res.render("Login")

    }
    static async Auth(req: any, res: any) {
        const singUpModel = new SignUp(req.body); 
        await singUpModel.login(); 
        if(singUpModel.errors.length >  0) {
            req.flash("errors",singUpModel.errors);  
            res.redirect("back"); 

        }else {
            req.session.user =  singUpModel.user; 
            res.redirect("/admin/"); 
       }
    }
    static indexSignup(req: any, res: any) {
        res.render("SignUp")
    }
    static async createAccount(req: any, res: any): Promise<any> {
        let body = { ...req.body, office: "Colaborador" } 
        const singUpModel = new SignUp(body);
        await singUpModel.register();
        if (singUpModel.errors.length > 0) {
            req.flash("errors", singUpModel.errors);
            res.redirect("back");
        } else { 
            req.flash("success","Conta criada com sucesso!"); 
            res.redirect("/login/")
        }
    }
} 

