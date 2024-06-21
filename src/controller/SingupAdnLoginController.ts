import session from "express-session";
import SignUp from "../models/SingupAndLoginModel";
export abstract class SignUpAndLoginController {
    static indexLogin(req: any, res: any) {
        res.render("Login")

    }
    static Auth(req: any, res: any) {

    }
    static indexSignup(req: any, res: any) {
        res.render("SignUp")
    }
    static async createAccount(req: any, res: any): Promise<any> {
        let body = { ...req.body, office: "Colaborador" }
        const singUpModel = new SignUp(body);
        console.log(singUpModel.body)
        await singUpModel.register();
        if (singUpModel.errors.length > 0) {
            req.flash("errors", singUpModel.errors);
            res.redirect("back");
        } else {
            res.redirect("back")
        }
    }
}