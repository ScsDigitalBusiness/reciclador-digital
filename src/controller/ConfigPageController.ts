import SingUp from "../models/SingupAndLoginModel"
import session from 'express-session';

export const settingsPage = async (req:any, res:any) => {
          let singUp = new SingUp(req.body);
          const user = await singUp.GetUser(req.session.userId)

          res.render("ConfigPage", {user: ["1"]})
}