const mongoose = require("mongoose");
const validator = require('validator');
const bcryptjs = require("bcrypt-ts");
import { AccountIn } from "../interfaces/Account.interface";
const SignupSchema = mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
   passwordConfirmed: { type: String, required: true },
   userPhoto: { type: String, required: false },
   office: { type: String, required: false },
   status: { type: String, required: true } 

});

const SignupModel = mongoose.model("Accounts", SignupSchema);


export default class SignUp {
   public body: any;
   public errors: Array<string>;
   public  user: any
   constructor(body: any) {
      this.body = body;
      this.errors = [];
      this.user = null;
   }
   public async userExist(): Promise<any> {
      try {
         const existUser: Promise<any> | null = await SignupModel.findOne({ email: this.body.email });
         if (existUser) {
            this.errors.push("Já possui uma conta com esse E-mail!");
            return;
         }
      } catch (e: any) {
         throw new Error(e);
      }

   }
   private validation() {
      this.cleanUP();
      this.userExist();
      if (!bcryptjs.compare(this.body.password, this.body.passwordConfirmed)) {
         this.errors.push("Senhas não conferem !");
         return;
      }
      if (!validator.isEmail(this.body.email)) {
         this.errors.push("E-mail incorreto !");
         return;
      };
      if (this.body.password < 3) {
         this.errors.push("Senha inválida, precistar ter no minimo 4 caraceters");
         return;
      }
   

   }
   public async register(): Promise<any> {
      try {
         const salt = bcryptjs.genSaltSync();
         this.body.password = bcryptjs.hashSync(this.body.password);
         this.body.passwordConfirmed = bcryptjs.hashSync(this.body.passwordConfirmed);
         this.validation();
         if (this.errors.length === 0) {  
            this.user = await SignupModel.create(this.body);
         }
      } catch (e: any) {
         throw new Error(e);
      }

   }
   public async login(): Promise<any> {
      try {
         this.user = await SignupModel.findOne({ email: this.body.email });
         if (!this.user) {
            this.errors.push("Usuário não existe !");
            return;
         }
         if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push("Senha incorreta !");
            return;
         }

      } catch (e: any) {
         throw new Error(e);
      }
   }
   private cleanUP() {
      for (let key in this.body) {
         if (typeof this.body[key] !== "string") this.body[key] = "";

      }

   }
   public async updateProfile(id: string): Promise<any> {
      const profileUpdated = await SignupModel.findByIdAndUpdate(id, this.body, { new: true });
      return profileUpdated;
   }
   public async getAllUsers(): Promise<any> {
      const allUsers = await SignupModel.find();
      return allUsers;
   }
   public async editPermissionsOfUser(id: string): Promise<any> {
      try {
         this.user = await SignupModel.findByIdAndUpdate(id, { office: this.body.office, status: this.body.status }, { new: true });
      } catch (e: any) {
         throw new Error(e);
      }
   }
   public async deleteUser(id: string): Promise<any> {
      try {
         this.user = await SignupModel.findByIdAndDelete({ _id: id });
      } catch (e: any) {
         throw new Error(e);
      } 
   }
}








