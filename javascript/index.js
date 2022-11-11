// Estado active de los botones

const btnOffers = document.querySelectorAll(".offers__btn");

function removeActive() {
  btnOffers.forEach((n) => n.classList.remove("offers__btn--active"));
}

document.addEventListener("click", (event) => {
  if (event.target.classList[0] === "offers__btn") {
    removeActive();
    event.target.classList.add("offers__btn--active");
  }
});
