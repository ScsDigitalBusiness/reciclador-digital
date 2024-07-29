import { AccountIn } from "../interfaces/Account.interface";
import SignUp from "../models/SingupAndLoginModel";
import { Request, Response } from "express";
  
export default abstract class UsersController { 
     static  async usersIndex (req: Request, res: Response) { 
      const user: AccountIn = req.session.user as AccountIn 
        if(user && user.status==="authorized") {
            const singUpModel = new SignUp(req.body); 
            const allUsers  = await singUpModel.getAllUsers(); 
            res.render("AllUsers",{allUsers}); 
          
    }else {
        res.render("NoPermission")
    }
     }  
     static async edit(req: Request, res: Response): Promise<void> {
        const singUpModel = new SignUp(req.body);   
         await singUpModel.editPermissionsOfUser(req.params.id);  
        res.redirect('back'); 
     } 
     static async delete(req:any,res:any): Promise<void> {
        const singUpModel = new SignUp(req.body); 
        await singUpModel.deleteUser(req.params.id);  
        res.redirect("back"); 
     }
     
} 
