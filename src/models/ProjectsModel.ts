import ModelIn from '../interfaces/ModelInterface';
const mongoose = require("mongoose"); 

const ProjectsSchema = mongoose.Schema({
    name:{type:String, required:true}, 
    description:  {type:String, required:true},  
    colaborator: {type:String, required:true},   
    date: {type:String, required:true},  
    url: {type:String, required:true}, 
    projectPhoto:{type:String,required:false}, 
})  

const ProjectsModel  = mongoose.model("Projects",ProjectsSchema); 

export default class Projects implements ModelIn {
        body:object ;
        errors:Array<string>;   
        valueCapted : object | null; 
        constructor(body: object) {
            this.body = body; 
            this.errors = [];  
            this.valueCapted = null
        }  
       async   create(): Promise<void> {
         try{
            this.valueCapted = await ProjectsModel.create(this.body);  
            return; 
         }catch(e:any){
            throw new Error(e); 
         }
       } 
       async delete(id:string): Promise<void>{
        try {
            this.valueCapted = await ProjectsModel.findByIdAndDelete({_id:id}); 
        }catch(e:any) {
            throw new Error(e); 
        }
       } 
       async getAll(): Promise<object> {
         try{   
            const allProjects = await ProjectsModel.find(); 
            return allProjects;  
         }catch(e:any) {
            throw new Error(e); 
         }
       } 
       async edit(id:string): Promise<void> {
          try {
            this.valueCapted = await ProjectsModel.findByIdAndUpdate(id,this.body);  
            return; 
          }catch(e:any) {
            throw new Error(e); 
          }
       }



}
