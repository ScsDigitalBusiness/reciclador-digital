import { AccountIn } from '../interfaces/Account.interface';
import Material from '../models/MaterialModel';
import { Request, Response } from 'express';

//All Materials

export default class Materials {
  static async createMaterial(req: Request, res: Response): Promise<void> {
    let body: Object = {};
    if (!req.file) {
      body = { ...req.body };
    } else {
      body = { ...req.body, materialImage: req.file.filename };
    }
    await Material.Create(body);
    res.redirect("back");
  };

  static async editMaterial(req: Request, res: Response): Promise<void> {
    let body: Object = {};
    if (!req.file) {
      body = { ...req.body };
    } else {
      body = { ...req.body, materialImage: req.file.filename };
    }
    await Material.Update(req.params.id, body);
    res.redirect("back");
  };

  static async deletMaterial(req: Request, res: Response): Promise<void> {
    await Material.Delete(req.params.id);
    res.redirect("back");
  };

  // Plastic
static async materialPlastic(req: Request, res: Response): Promise<void> { 
  const user: AccountIn = req.session.user as AccountIn 
  if(user && user.status==="authorized") {
    const allMaterials = await Material.GetMaterialsOf("Plastico");
    res.render("MaterialPlastic", { allMaterials });
    
}else {
res.render("NoPermission")
}
};

// Metals
static async materialMetals(req: Request, res: Response): Promise<void> { 
  const user: AccountIn = req.session.user as AccountIn 
  if(user && user.status==="authorized") {
    const allMaterials = await Material.GetMaterialsOf("Metal");
    res.render("MaterialMetals", { allMaterials });
   
}else {
res.render("NoPermission")
}
};

// Pape
static async materialPape(req: Request, res: Response): Promise<void> { 
  const user: AccountIn = req.session.user as AccountIn 
  if(user && user.status==="authorized") {
    const allMaterials = await Material.GetMaterialsOf("Papel");
    res.render("MaterialPape", { allMaterials });
    
}else {
res.render("NoPermission")
}
};

// Glass
static async materialGlass(req: Request, res: Response): Promise<void> { 
  const user: AccountIn = req.session.user as AccountIn 
  if(user && user.status==="authorized") {
    const allMaterials = await Material.GetMaterialsOf("Vidro");
    res.render("MaterialGlass", { allMaterials });
  
}else {
res.render("NoPermission")
}
};

}