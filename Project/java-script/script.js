// responsive header
// change the menu icon when clicking on it
let changeIcon = function (icon) {
  icon.classList.toggle("fa-xmark");
};
let navBar = document.querySelector(".menuitems");
//checking if the width is bigger than 750px
function removeActive() {
  if (window.innerWidth > 650) {
    navBar.classList.remove("active");
  }
}
let menu = document.querySelector(".fa-solid");
menu.onclick = function () {
  navBar.classList.toggle("active");
  changeIcon(menu);
  window.addEventListener("resize", function () {
    removeActive();
  });
};
//responsive header section end
const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let cardDimensions = item
    .querySelector(".product-card")
    .getBoundingClientRect();
  let cardWidth = cardDimensions.width * 3;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += cardWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= cardWidth;
  });
});

// Variables globales
const products = document.querySelectorAll(".product2");
const positionSpan = document.querySelector(".carousel-position");
let currentPosition = 0;

// Fonction pour mettre à jour la position actuelle dans le carousel
function updatePosition() {
  positionSpan.textContent = `${currentPosition + 1} / ${products.length}`;
}

// Écouteurs d'événements pour les boutons précédents et suivants
document.querySelector(".btn-prev").addEventListener("click", () => {
  currentPosition--;
  if (currentPosition < 0) {
    currentPosition = products.length - 1;
  }
  updatePosition();
});

document.querySelector(".btn-next").addEventListener("click", () => {
  currentPosition++;
  if (currentPosition >= products.length) {
    currentPosition = 0;
  }
  updatePosition();
});
