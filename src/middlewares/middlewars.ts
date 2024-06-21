export const middlewareGlobal = (req:any,res:any,next:any) =>{
  res.locals.errors = req.flash("errors"); 
  res.locals.success = req.flash("success");  
  next(); 

}