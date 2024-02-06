

const CreateCardElement = (el, areaId) => {
  document.getElementById(areaId).innerHTML += `<div class="projetct-card-body">
  <div class="info-project-name">
    <div class="img-project">
    <img src="${el.img}" alt="" />
     
    </div>
    <h2>${el.nome}</h2>
  </div>
  <div class="description">
    ${el.description}
  </div>
  <a href = "${el.link}"> <button id="${el.id}" class="project-card-button" type="button">
    Saiba Mais
  </button> </a>
</div>`;
};

const GetAndShowMaterialData = (url, callback, id) => {
  fetch(url).then((response) => {
    response.json().then((dados) => {
      try {
        //Vai tentar resolver
        dados.cards.map((elemento) => {
          callback(elemento, id); //função de callback executada.
        });
      } catch (e) {
        //caso dê um erro ele executa.
        alert("Erro encontrado !");
      }
    });
  });
};
GetAndShowMaterialData(
  "../../data/products.JSON",
  CreateCardElement,
  "cards-area-projects"
);
