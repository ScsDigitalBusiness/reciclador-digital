const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

const SingupSchema = mongoose.Schema({
          name: {type:String, required:true},
          email: {type:String, required:true},
          password: {type:String, required:true},
          confirmedPassword: {type:String, required:true},
          userImage: {type:String, required:false}
});

const SingupModel = mongoose.model("Accounts", SingupSchema)

class SingUp {
          constructor(body) {
                    this.body = body,
                    this.errors = [],
                    this.user = null
                    }

          CleanUp() {
                    for( let key in this.body) {
                              if( typeof this.body[key] !== "string") this.body[key] = ""; 
                    }
          };

          Validation() {
                    this.CleanUp();
                    if(!validator.isEmail(this.body.email)) {
                              this.errors.push("E-mail Incorreto!")
                              return;
                    };
          };

          async UserExist() {
                    try {
                              const existUser = await SingupModel.findOne({email: this.body.email})

                              if(!existUser) {
                                        this.errors.push("Já possui uma conta com esse E-mail!")
                                        return;
                              }

                              if(!bcrypt.compare(this.body.password, this.body.passwordConfirmed)) {
                                        this.errors.push("Senhas não conferem!"); 
                                        return; 
                                     } 

                    } catch(e) {
                              throw new Error(e)
                    }
          };

          async Register() {
                    const salt = bcrypt.genSaltSync(); 
                    this.body.password  = bcrypt.hashSync(this.body.password,salt); 
                    this.body.passwordConfirmed  = bcrypt.hashSync(this.body.passwordConfirmed,salt); 
                    this.Validation(); 
                    
                    if (this.errors.length === 0) {

                       try {
                          this.user = await SingupModel.create(this.body);
              
                       } catch (e) {
                          throw new Error(e);
                       }
                    }
                 };

                 async Login() {
                    try {
                       this.user = await SingupModel.findOne({ email: this.body.email}); 

                       if (!this.user)  {
                          this.errors.push("Usuário não existe!"); 
                          return;
                       } 
                       if(!bcrypt.compareSync(this.body.password,this.user.password)) {
                          this.errors.push("Senha incorreta!"); 
                          return; 
                       }
              
                    } catch (e) {
                       throw new Error(e);
                    }
                 }
}

exports.SingUp = SingUp;