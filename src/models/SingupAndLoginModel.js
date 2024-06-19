"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const SingupSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmedPassword: { type: String, required: true },
    userImage: { type: String, required: false }
});
const SingupModel = mongoose.model("Accounts", SingupSchema);
class SingUp {
    constructor(body) {
        this.body = body,
            this.errors = [],
            this.user = null;
    }
    CleanUp() {
        for (let key in this.body) {
            if (typeof this.body[key] !== "string")
                this.body[key] = "";
        }
    }
    ;
    Validation() {
        this.CleanUp();
        if (!validator.isEmail(this.body.email)) {
            this.errors.push("E-mail Incorreto!");
            return;
        }
        ;
    }
    ;
    UserExist() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existUser = yield SingupModel.findOne({ email: this.body.email });
                if (!existUser) {
                    this.errors.push("Já possui uma conta com esse E-mail!");
                    return;
                }
                if (!bcrypt.compare(this.body.password, this.body.passwordConfirmed)) {
                    this.errors.push("Senhas não conferem!");
                    return;
                }
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    ;
    Register() {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = bcrypt.genSaltSync();
            this.body.password = bcrypt.hashSync(this.body.password, salt);
            this.body.passwordConfirmed = bcrypt.hashSync(this.body.passwordConfirmed, salt);
            this.Validation();
            if (this.errors.length === 0) {
                try {
                    this.user = yield SingupModel.create(this.body);
                }
                catch (e) {
                    throw new Error(e);
                }
            }
        });
    }
    ;
    Login() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.user = yield SingupModel.findOne({ email: this.body.email });
                if (!this.user) {
                    this.errors.push("Usuário não existe!");
                    return;
                }
                if (!bcrypt.compareSync(this.body.password, this.user.password)) {
                    this.errors.push("Senha incorreta!");
                    return;
                }
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.SingUp = SingUp;
