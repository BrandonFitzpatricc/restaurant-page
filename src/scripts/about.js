import { createElement, Attribute } from "./element-factory.js";

import flatbread from "../photos/flatbread.jpg";
import owner from "../photos/owner.jpg";

const loadAboutPage = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    const content = document.querySelector("#content");
    content.textContent = "";

    const mainPhotoContainer = createElement("div", "", 
                                             new Attribute("class", "photo main-photo"));

    const mainPhoto = createElement("img", "", 
                                    new Attribute("src", flatbread),
                                    new Attribute("alt", "rows of cooked flatbread"),
                                    new Attribute("width", "1275"),
                                    new Attribute("height", "823"));

    const mainPhotoCredit = createElement("div", 
                                          'Photo by <a href="https://unsplash.com/@travelingwithpurpose?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nancy Hann</a> on <a href="https://unsplash.com/photos/tray-of-food-on-wooden-surface-cnktbiZJICw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
                                          new Attribute("class", "photo-credit"));

    mainPhotoContainer.append(mainPhoto, mainPhotoCredit);

    const ourStorySection = createElement("div", "", new Attribute("class", "our-story-section"));

    const ourStoryHeading = createElement("div", 
                                         "Our Story", 
                                         new Attribute("class", "heading larger"));

    const ourStoryText = [
        createElement("div", 
                      "Schmengo’s was established in 2016, with one clear goal in mind: offering serviceable food that our customers will likely forget, but keep coming back for.",
                      new Attribute("class", "text")),

        createElement("div", 
                      "Sometimes you aren’t in the mood to go to a premium restaurant. Maybe it’s been a tiring week, and you just want to sit down and enjoy some average food from an average establishment. <strong>We understand.</strong>",
                      new Attribute("class", "text")),
    ];

    ourStorySection.append(ourStoryHeading, ourStoryText[0], ourStoryText[1]);

    const meetTheOwnerSection = createElement("div", "", 
                                              new Attribute("class", "meet-the-owner-section"));

    const meetTheOwnerHeading = createElement("div", "Meet The Owner",
                                              new Attribute("class", "heading larger"));

    const ownerPhotoContainer = createElement("div", "",
                                              new Attribute("class", "photo section-photo"));

    const ownerPhoto = createElement("img", "", 
                                    new Attribute("src", owner),
                                    new Attribute("alt", "photo of schmengo, owner of schmengo's"));

    ownerPhotoContainer.appendChild(ownerPhoto);

    const meetTheOwnerText = [
    createElement("div", 
                  "Schmengo Schmengus came from humble beginnings as an aspiring businessman. As a matter of fact, Schmengo’s was just one of many business ventures, all of which failed prior. Through a moderate amount of effort, he found success with his first venture into the food industry. ",
                  new Attribute("class", "text")),

    createElement("div", 
                  "Schmengo never had a strong passion for the culinary arts, but he’s always had a strong passion for making enough money to live comfortably. We’re confident you will see that during your time at Schmengo’s.",
                  new Attribute("class", "text")),
    ];

    meetTheOwnerSection.append(meetTheOwnerHeading, ownerPhotoContainer, meetTheOwnerText[0], meetTheOwnerText[1]);

    const closingText = createElement("div", 
                                      "Come to us.", 
                                      new Attribute("class", "text closing-text"));

    content.className = "content about-page";
    content.append(mainPhotoContainer, ourStorySection, meetTheOwnerSection, closingText);
}

export { loadAboutPage };