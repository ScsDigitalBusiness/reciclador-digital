import Material from "../models/MaterialModel";

//All Materials
export const createMaterial = async (req: any, res: any): Promise<any> => {
  let body: Object = {};
  if (!req.file) {
    body = { ...req.body };
  } else {
    body = { ...req.body, materialImage: req.file.filename };
  }
  await Material.Create(body);
  res.redirect("back");
};

export const editMaterial = async (req: any, res: any): Promise<any> => {
  let body: Object = {};
  if (!req.file) {
    body = { ...req.body };
  } else {
    body = { ...req.body, materialImage: req.file.filename };
  }
  await Material.Update(req.params.id, body);
  res.redirect("back");
};

export const deletMaterial = async (req: any, res: any): Promise<any> => {
  await Material.Delete(req.params.id);
  res.redirect("back");
};


// Plastic
export const materialPlastic = async (req: any, res: any): Promise<any> => { 
  if(req.session.user && req.session.user.status==="authorized") {
    const allMaterials = await Material.GetMaterialsOf("Plastico");
    res.render("MaterialPlastic", { allMaterials });
    
}else {
res.render("NoPermission")
}
};

// Metals
export const materialMetals = async (req: any, res: any): Promise<any> => { 
  if(req.session.user && req.session.user.status==="authorized") {
    const allMaterials = await Material.GetMaterialsOf("Metal");
    res.render("MaterialMetals", { allMaterials });
   
}else {
res.render("NoPermission")
}
};

// Pape

export const materialPape = async (req: any, res: any): Promise<any> => { 
  if(req.session.user && req.session.user.status==="authorized") {
    const allMaterials = await Material.GetMaterialsOf("Papel");
    res.render("MaterialPape", { allMaterials });
    
}else {
res.render("NoPermission")
}
};


// Glass
export const materialGlass = async (req: any, res: any): Promise<any> => { 
  if(req.session.user && req.session.user.status==="authorized") {
    const allMaterials = await Material.GetMaterialsOf("Vidro");
    res.render("MaterialGlass", { allMaterials });
  
}else {
res.render("NoPermission")
}
};
