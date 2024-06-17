exports.middlewareGlobal = (req,res, next) =>{
    req.local.erros = req.flash("erros");
    req.local.sucess = req.flash("sucess");
    req.local.user = req.session.user;

    next();
}