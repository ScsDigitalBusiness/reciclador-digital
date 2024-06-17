fetch("../../data/products.JSON").then((response) => { 
   response.json().then((dados) => {
        dados.cards.map((elemento) => {
            document.getElementById("cards-area-projects").innerHTML += `<div class="projetct-card-body">
           <div class="info-project-name">
             <div class="img-project">
             <img src="${elemento.img}" alt="" />
              
             </div>
             <h2>${elemento.nome}</h2>
           </div>
           <div class="description">
             ${elemento.description}
           </div>
           <button class="project-card-button" type="button">
             Saiba Mais
           </button>
         </div>`;
       }) 
    });  
})