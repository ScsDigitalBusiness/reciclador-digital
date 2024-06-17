const api  = `https://script.google.com/macros/s/AKfycbxzfvCXEpK77BVsgQEzy4VMiL-auff6gq30O2oOhZqVGZH2KDB7T4513xFod-9b84WT/exec` ;

fetch(api).then(response => response.json()).then(data=>{
    let database = data.output; 
    for(let i in database ) {
        document.getElementById("tbody-table").innerHTML += `<tr id="line${i}" >
        <td>
          ${database[i].material}
        </td> 
        <td> 

        ${database[i].price}

        </td> 
        <td>
        ${database[i].un}
       </td> 
       <td>
       ${database[i].marca}
     </td>
    </tr>` 
    if(i %2 ==0) {
        document.getElementById(`line${i}`).style.backgroundColor = "#008A44"; 
         }else  {
            document.getElementById(`line${i}`).style.backgroundColor = "#00AC6A"
         }
    } 
  
})

