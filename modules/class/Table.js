
export class Table {
    constructor(table, plasticAPI, papelAPI, metalAPI, vidroAPI) {
        this.table = document.getElementById(table);
        this.plasticAPI = plasticAPI;
        this.papelAPI = papelAPI;
        this.metalAPI = metalAPI;
        this.vidroAPI = vidroAPI;


    }
     async  getData(api) {
        let database = await fetch(api).then(response => response.json()).then(data => {
            return data.output;
        })
        return database;
    }

     setHTML(db) { 
                 
        for (let i in db) { 
 
            this.table.innerHTML += `<tr id="line-${i}" >
            <td>
              ${db[i].material}
            </td> 
            <td> 
    
            ${db[i].price}
    
            </td> 
            <td>
            ${db[i].un}
           </td> 
           <td>
           ${db[i].marca}
         </td>
        </tr>`;
            if (i % 2 == 0) {
                document.getElementById(`line-${i}`).style.backgroundColor = "#008A44";
            } else {
                document.getElementById(`line-${i}`).style.backgroundColor = "#00AC6A";
            }

        }
    }

}