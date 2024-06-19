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

export default class Multer {
          public req:any;
          public res:any;
          public cd:any;

          constructor(req:any, res:any, cd:any) {
                    this.req = req,
                    this.res = res,
                    this.cd = cd
          };

          public fileFilter(req:any,file:any,cb:any) {

                    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg' ) {
                      
                        return cb(new multer.MulterError(erroMsg));
                    } 
                    return cb(null,true); 
          };

          public storage(req:any,file:any,cb:any) {

                    multer.diskStorage({

                    destination: (req:any,file:any,cb:any) =>{
                        cb(null, path.resolve(__dirname, "..","..","public","uploads"))
                    }, 
                    filename:(req:any,file:any,cb:any) =>{
                        cb(null, `${Date.now()}${path.extname(file.originalname)}`); 
                    }
                })
          }

}