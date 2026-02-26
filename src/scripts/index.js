import "../stylesheets/custom-reset.css";
import "../stylesheets/style.css";

import { loadHomepage } from "./home.js";
import { loadHoursAndLocationPage } from "./hours-and-location.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";

loadHomepage();

document.querySelector(".home").addEventListener("click", () => {
    loadHomepage();

    document.querySelector(".section-btn > .about")
            .addEventListener("click", loadAboutPage);

    document.querySelector(".section-btn > .menu")
            .addEventListener("click", loadMenuPage);

    document.querySelector(".section-btn > .hours-and-location")
            .addEventListener("click", loadHoursAndLocationPage);
});


document.querySelectorAll(".hours-and-location")
        .forEach(button => button.addEventListener("click", loadHoursAndLocationPage));

document.querySelectorAll(".menu")
        .forEach(button => button.addEventListener("click", loadMenuPage));

document.querySelectorAll(".about")
        .forEach(button => button.addEventListener("click", loadAboutPage));