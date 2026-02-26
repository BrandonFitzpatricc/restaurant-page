import { createElement, Attribute } from "./element-factory.js";

import restaurantInterior from "../photos/restaurant-interior.jpg";
import burger from "../photos/burger.jpg";

const loadHomepage = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    const content = document.querySelector("#content");
    content.textContent = "";

    const mainPhotoContainer = createElement("div", "", 
                                             new Attribute("class", "photo main-photo"));

    const mainPhotoText = createElement("div", "Schmengo's", 
                                        new Attribute("class", "main-photo-text"));

    const mainPhoto = createElement("img", "",
                                    new Attribute("src", restaurantInterior),
                                    new Attribute("alt", "photo of the inside of schmengo's"),
                                    new Attribute("width", "1275"),
                                    new Attribute("height", "823"));

    const mainPhotoCredit = createElement("div", 
                                          'Photo by <a href="https://unsplash.com/@nickkarvounis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nick Karvounis</a> on <a href="https://unsplash.com/photos/rectangular-beige-wooden-tables-and-chair-Ciqxn7FE4vE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
                                          new Attribute("class", "photo-credit"));

    mainPhotoContainer.append(mainPhotoText, mainPhoto, mainPhotoCredit);

    const aboutSection = createElement("div", "", new Attribute("class", "about-section"));

    const aboutSectionText = [
        createElement("div",
                      `At Schmengo's, we are committed to always providing "slightly above average" food and service to our customers.`,
                      new Attribute("class", "text")),

        createElement("div",
                      "<strong>It's our guarantee</strong>",
                      new Attribute("class", "text"))
    ];

    const aboutBtnContainer = createElement("div", "", 
                                            new Attribute("class", "section-btn"));

    const aboutBtn = createElement("button", "Learn More", new Attribute("class", "about"));

    aboutBtnContainer.appendChild(aboutBtn);

    aboutSection.append(aboutSectionText[0], aboutSectionText[1], aboutBtnContainer);

    const menuSection = createElement("div", "", new Attribute("class", "menu-section"));

    const menuSectionPhotoContainer = createElement("div", "", 
                                                    new Attribute("class", "photo section-photo"));

    const menuSectionPhoto = createElement("img", "",
                                           new Attribute("src", burger),
                                           new Attribute("alt", "burger on a plate with fries"),
                                           new Attribute("width", "700"),
                                           new Attribute("height", "450"));

    const menuSectionPhotoCredit = createElement("div", 
                                                 'Photo by <a href="https://unsplash.com/@eddie2oh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edward Franklin</a> on <a href="https://unsplash.com/photos/burger-and-fries-on-plate-Nb_Q-M3Cdzg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
                                                 new Attribute("class", "photo-credit"));

    menuSectionPhotoContainer.append(menuSectionPhoto, menuSectionPhotoCredit);   

    const menuSectionText = createElement("div", 
                                          `A moderate variety of food that will make you say "I've had better,but that's not bad!"`,
                                          new Attribute("class", "text"));

    const menuBtnContainer = createElement("div", "", 
                                           new Attribute("class", "section-btn"));

    const menuBtn = createElement("button", "View Menu", new Attribute("class", "menu"));

    menuBtnContainer.appendChild(menuBtn);

    menuSection.append(menuSectionPhotoContainer, menuSectionText, menuBtnContainer);

    const hoursAndLocationSection = createElement("div", "", 
                                                  new Attribute("class", "hours-and-location-section"));

    const hoursAndLocationSectionText = createElement("div",
                                                      "We're waiting for you.",
                                                      new Attribute("class", "text"));

    const hoursAndLocationBtnContainer = createElement("div", "", 
                                                       new Attribute("class", "section-btn"));

    const hoursAndLocationBtn = createElement("button", 
                                              "Hours & Location", 
                                              new Attribute("class", "hours-and-location"));

    hoursAndLocationBtnContainer.appendChild(hoursAndLocationBtn);
    
    hoursAndLocationSection.append(hoursAndLocationSectionText, hoursAndLocationBtnContainer);

    content.className = "content homepage";
    content.append(mainPhotoContainer, aboutSection, menuSection, hoursAndLocationSection);
}

export { loadHomepage };