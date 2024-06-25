import SingUp from "../models/SingupAndLoginModel"
import session from 'express-session';

export default abstract class Config {

  static settingsPage(req:any, res:any) {
    res.render("ConfigPage")
  }
  
  static async updateProfile(req:any, res:any) {
    let body: Object = {};
    if (!req.file) {
    body = { ...req.body };
  } else {
    body = { ...req.body, userPhoto: req.file.filename };
  }

    let updateUser = new SingUp(body)
    let user = await updateUser.updateProfile(req.params.id)
    req.session.user = user

    res.redirect("back")
  }
}