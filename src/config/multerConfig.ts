import multer from 'multer'; 
import path from "path"; 

let erroMsg:any = "Arquivo inválido!";

module.exports =  {
    fileFilter: (req:any,file:any,cb:any) =>{
        if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg' ) {
          
            return cb(new multer.MulterError(erroMsg));
        } 
        return cb(null,true); 
    }, 
    storage: multer.diskStorage({
        destination: (req:any,file:any,cb:any) =>{
            cb(null, path.resolve(__dirname, "..","..","public","uploads"))
        }, 
        filename:(req:any,file:any,cb:any) =>{
            cb(null, `${Date.now()}${path.extname(file.originalname)}`); 
        }
    })
}