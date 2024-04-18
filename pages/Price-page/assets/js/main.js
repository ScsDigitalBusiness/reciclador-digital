
import { Table } from "../../../../modules/class/Table.js"; 
import { plasticAPI, papelAPI, metalAPI,vidroAPI } from "../../../../modules/apis/api.js";

let MyTable = new Table("tbody-table",plasticAPI,papelAPI,metalAPI,vidroAPI);  
let data = await MyTable.getData(plasticAPI);  

MyTable.setHTML(data); 
