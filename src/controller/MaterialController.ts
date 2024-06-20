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
  const allMaterials = await Material.GetMaterials("Plastico");
  res.render("MaterialPlastic", { allMaterials });
};

// Metals
export const materialMetals = async (req: any, res: any): Promise<any> => {
  const allMaterials = await Material.GetMaterials("Metal");
  res.render("MaterialMetals", { allMaterials });
};

// Pape
export const materialPape = async (req: any, res: any): Promise<any> => {
  const allMaterials = await Material.GetMaterials("Papel");
  res.render("MaterialPape", { allMaterials });
};

// Glass
export const materialGlass = async (req: any, res: any): Promise<any> => {
  const allMaterials = await Material.GetMaterials("Vidro");
  res.render("MaterialGlass", { allMaterials });
};
