export class elementShow {
  constructor(areaID) {
    this.areaOfChanges = areaID;
  }
}

elementShow.prototype.createElementInDOM = function (el) {
  document.getElementById(
   "projects"
  ).innerHTML += `<div class="projetct-card-body">
  <div class="info-project-name">
    <div class="img-project">
      <img src="${el.img}" alt="logo" />
    </div>
    <h2>${el.nome}</h2>
  </div>
  <div class="description">
    <p>${el.description}</p>
  </div>
  <a href="${el.link}">
    <button class="project-card-button" type="button">
      Saiba Mais
    </button>
  </a>
</div>`;
};

elementShow.prototype.getAndShowDataOf = function (url, callback) {
  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.projects.map((el) => {
          callback(el);
        });
      });
  } catch (err) {
    throw new ReferenceError("Url 404");
  }
};
