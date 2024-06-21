const mongoose = require("mongoose")
import validator from "validator"; 
const bcryptjs  = require("bcryptjs"); 
import {  AccountIn } from "../interfaces/Account.interface";
const SingupSchema = mongoose.Schema({ 

   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
   confirmedPassword: { type: String, required: true },
   userImage: { type: String, required: false } 
   
});

const SingupModel = mongoose.model("Accounts", SingupSchema)

class SingUp {  

   private body: any;  
   public errors: Array<string>;  
   private user: any; 
   
   constructor(body: AccountIn) {
         this.body = body,
         this.errors = [],
         this.user = null
   }

  private CleanUp() {
      for (let key in this.body) {
         if (typeof this.body[key] !== "string") this.body[key] = "";
      }
   };

  private  Validation() {
      this.CleanUp(); 
       if(!this.body.password) { 
         this.errors.push("Insira uma senha !"); 
         throw new Error("Senha requirida!"); 
       }
      if (!validator.isEmail(this.body.email)) {
         this.errors.push("E-mail Incorreto!")
         return;
      };
   };

   public async UserExist() {
      try {
         const existUser = await SingupModel.findOne({ email: this.body.email })

         if (!existUser) {
            this.errors.push("Já possui uma conta com esse E-mail!")
            return;
         }
         if (!bcryptjs.compare(this.body.password, this.body.passwordConfirmed)) {
            this.errors.push("Senhas não conferem!");
            return;
         }

      } catch (e:any) {
         throw new Error(e)
      }
   }; 

     public async Register():Promise<any> { 
      
      const salt:string = bcryptjs.genSaltSync();
      this.body.password = bcryptjs.hashSync(this.body.password, salt);
      this.body.passwordConfirmed = bcryptjs.hashSync(this.body.passwordConfirmed, salt);  

      this.UserExist(); 
      this.Validation();

      if (this.errors.length === 0) {
         try {
            this.user = await SingupModel.create(this.body);         
         } catch (e:any) {
            throw new Error(e);
         }
      }
   };

   async Login() {
      try {
         this.user = await SingupModel.findOne({ email: this.body.email });

         if (!this.user) {
            this.errors.push("Usuário não existe!");
            return;
         }
         if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push("Senha incorreta!");
            return;
         }

      } catch (e:any) {
         throw new Error(e);
      }
   } 

   async GetUser(id:string): Promise<any> {
      try {
         const user: string | undefined = await SingupModel.find({_id:id})
         return user;
         
      } catch(e:any) {
         throw new Error(e)
      }
   }

}

export default  SingUp;