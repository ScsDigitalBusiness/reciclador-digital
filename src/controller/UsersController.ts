import SignUp from "../models/SingupAndLoginModel";
  
export default abstract class UsersController { 
     static  async usersIndex (req:any,res:any) { 
        if(req.session.user && req.session.user.status==="authorized") {
            const singUpModel = new SignUp(req.body); 
            const allUsers  = await singUpModel.getAllUsers(); 
            res.render("AllUsers",{allUsers}); 
          
    }else {
        res.render("NoPermission")
    }
     }  
     static async edit(req:any,res:any) :Promise<any> {
        const singUpModel = new SignUp(req.body);   
         await singUpModel.editPermissionsOfUser(req.params.id);  
        res.redirect('back'); 
     } 
     static async delete(req:any,res:any) {
        const singUpModel = new SignUp(req.body); 
        await singUpModel.deleteUser(req.params.id);  
        res.redirect("back"); 
     }
     
} 
