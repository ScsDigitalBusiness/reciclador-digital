export  interface AccountIn {
    body:any;
    errors:Array<string>; 
    user:any;  
    userExist():Promise<any>; 
    validation():any; 
    register():Promise<any>; 
    login():Promise<any>; 
    cleanUP():any;  
    updateProfile(id:string):Promise<any>;   
    getAllUsers():Promise<any>;  
    editPermissionsOfUser(id: string): Promise<any>;  
    deleteUser(id: string): Promise<any>


}