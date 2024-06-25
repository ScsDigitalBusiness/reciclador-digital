import SingUp from "../models/SingupAndLoginModel"
import session from 'express-session';

export const settingsPage = async (req:any, res:any) => {
          let singUp = new SingUp(req.body);
            res.render("ConfigPage")
}