import SingUp from "../models/SingupAndLoginModel"
import session from 'express-session';

export const settingsPage = async (req:any, res:any) => { 
    if(req.session.user && req.session.user.status==="authorized") {
            let singUp = new SingUp(req.body);
            res.render("ConfigPage") 
    }else {
        res.render("NoPermission")
    }
}