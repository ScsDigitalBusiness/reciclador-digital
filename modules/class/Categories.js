import { Table } from "./Table.js";
export class CategoriesSelect  extends Table{
    constructor(plastic,vidro,metal,papel,table, plasticAPI, papelAPI, metalAPI, vidroAPI) { 
        super(table, plasticAPI, papelAPI, metalAPI, vidroAPI);
        this.plastic = document.getElementById(plastic); 
        this.vidro = document.getElementById(vidro); 
        this.metal = document.getElementById(metal); 
        this.papel = document.getElementById(papel); 
        
    }   

    

    
   
}