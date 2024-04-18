
import { Table } from "../../../../modules/class/Table.js"; 
import { plasticAPI, papelAPI, metalAPI,vidroAPI } from "../../../../modules/apis/api.js";
import {CategoriesSelect} from "../../../../modules/class/Categories.js" 
setTimeout(() => {
    document.getElementById("spiner-area").style.display = "none"; 
},10000)
let MyTable = new Table("tbody-table",plasticAPI,papelAPI,metalAPI,vidroAPI);  
let data = await MyTable.getData(plasticAPI);  

let Categories = new CategoriesSelect("plastic-button","vidro-button","metal-button","papel-button","tbody-table",plasticAPI,papelAPI,metalAPI,vidroAPI)


MyTable.setHTML(data);  

//mudança de API  através do clique de categoria : 
let plasticDB = await Categories.getData(plasticAPI);  
let vidroDB =  await Categories.getData(vidroAPI);   
let papelDB = await Categories.getData(papelAPI); 
let metalDB = await Categories.getData(metalAPI); 
Categories.vidro.addEventListener("click",()=>{ 
    console.log("teste")
    Categories.table.innerHTML = ""; 
    Categories.setHTML(vidroDB); 
}) 

Categories.plastic.addEventListener("click",()=>{
    Categories.table.innerHTML =""; 
     Categories.setHTML(plasticDB); 
}) 

Categories.papel.addEventListener("click",()=>{
    Categories.table.innerHTML =""; 
     Categories.setHTML(papelDB); 
}) 
Categories.metal.addEventListener("click",()=>{
    Categories.table.innerHTML = ""; 
     Categories.setHTML(metalDB); 
}) 



