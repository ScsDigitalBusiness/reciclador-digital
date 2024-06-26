export default interface  ModelIn {
    body: any; 
    errors: Array<string>; 
    valueCapted: any;
    create():Promise<any>; 
    getAll():Promise<any>; 
    edit(id:string):Promise<any>; 
    delete(id:string):Promise<any>; 

}  