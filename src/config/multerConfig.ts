import multer from 'multer'; 
import path from "path"; 
import { Request } from 'express';

let erroMsg:any = "Arquivo inválido!";

export const multerConfig =  {
    
    fileFilter: (req: Request, file:any, cb:any) =>{
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