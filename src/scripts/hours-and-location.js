import { createElement, Attribute } from "./element-factory.js";

import restaurantBuilding from "../photos/restaurant-building.jpg";

const loadHoursAndLocationPage = () => {
    const content = document.querySelector("#content");

    const mainPhotoContainer = createElement("div", "", 
                                             new Attribute("class", "photo main-photo"));

    const mainPhoto = createElement("img", "",
                                    new Attribute("src", restaurantBuilding),
                                    new Attribute("alt", "schmengo's restaurant building"),
                                    new Attribute("width", "1275"),
                                    new Attribute("height", "823"));

    const mainPhotoCredit = createElement("div", 
                                          'Photo by <a href="https://unsplash.com/@lacostercell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ladislav Stercell</a> on <a href="https://unsplash.com/photos/a-person-standing-in-a-doorway-EOTTrSZ359o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
                                          new Attribute("class", "photo-credit"));

    mainPhotoContainer.append(mainPhoto, mainPhotoCredit);

    const pageInfo = createElement("div", "", new Attribute("class", "page-info"));

    const heading = createElement("div", 
                                  "Hours & Location",
                                  new Attribute("class", "heading smaller"));

    const text = [
        createElement("div", 
                      "8107 Horace Greely Rd <br /> Mohawk, Michigan, 49950 <br /> (517) 432-4294 <br /> Schmengos@gmail.com",
                      new Attribute("class", "text")),

        createElement("div", 
                      '<strong>Open Daily</strong> <br /> Monday-Thursday: 11am - 9pm <br /> Friday-Sunday: 12pm - 12am <br />',
                      new Attribute("class", "text"))

    ]

    pageInfo.append(heading, text[0], text[1]);

    content.className = "content hours-and-location-page";
    content.append(mainPhotoContainer, pageInfo);
}

export{ loadHoursAndLocationPage };