import SingUp from "../models/SingupAndLoginModel"
import { Request, Response } from "express";

export default abstract class Config {

  static settingsPage(req: Request, res: Response): void {
    res.render("ConfigPage")
  }
  
  static async updateProfile(req: Request, res: Response): Promise<void> {
    let body: Object = {};
    if (!req.file) {
    body = { ...req.body };
  } else {
    body = { ...req.body, userPhoto: req.file.filename };
  }

    let updateUser = new SingUp(body)
    let user = await updateUser.updateProfile(req.params.id)
    req.session.user = user
     res.redirect("back"); 
  }
}