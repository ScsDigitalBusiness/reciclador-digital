export const indexProductPage = (req:any,res:any) => { 
    if(req.session.user && req.session.user.status==="authorized") {
        res.render("ProductPage"); 
}else {
    res.render("NoPermission")
}
  
}