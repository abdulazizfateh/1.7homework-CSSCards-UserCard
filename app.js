const modeBtn = document.querySelector(".mode-btn");
const day = document.querySelector(".mode-btn-day-img");
const night = document.querySelector(".mode-btn-night-img");
const cardWrapper = document.querySelector(".card-wrapper");
const card = document.querySelector(".card");


modeBtn.addEventListener("click", () => {
    day.classList.toggle("have");
    night.classList.toggle("none");
    cardWrapper.classList.toggle("night-mode");
    card.classList.toggle("night-card");
});

