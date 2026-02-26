import { createElement, Attribute } from "./element-factory.js";

import steak from "../photos/steak.jpg";

const loadMenuPage = () => {
    const content = document.querySelector("#content");

    const mainPhotoContainer = createElement("div", "", 
                                             new Attribute("class", "photo main-photo"));

    const mainPhoto = createElement("img", "",
                                    new Attribute("src", steak),
                                    new Attribute("alt", "choice grade steak"),
                                    new Attribute("width", "1275"),
                                    new Attribute("height", "823"));

    const mainPhotoCredit = createElement("div", 
                                          'Photo by <a href="https://unsplash.com/@bogzilla?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexandru-Bogdan Ghita</a> on <a href="https://unsplash.com/photos/roasted-ribs-with-sliced-tomatoes-and-potatoes-UeYkqQh4PoI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
                                          new Attribute("class", "photo-credit"));

    mainPhotoContainer.append(mainPhoto, mainPhotoCredit);

    const pageInfo = createElement("div", "", new Attribute("class", "page-info"));

    const mainHeading = createElement("div", "Menu", new Attribute("class", "heading larger"));

    const appetizersContainer = createElement("div", "", new Attribute("class", "appetizers"));

    const appetizersHeading = createElement("div", 
                                            "Appetizers", 
                                            new Attribute("class", "heading smaller"));

    const appetizersList = createElement("ul", "",
                                         new Attribute("class", "menu-items"),
                                         new Attribute("role", "list"));

    appetizersList.append(
        createMenuItem("Schmengo's Wings", 
                       "Slightly crispy chicken, served with store bought barbecue sauce ($16)"),
        
        createMenuItem("Schmengo's Mozzarella Sticks", 
                       "Partially melted cheese, served with store bought marinara sauce ($14)"),

        createMenuItem("Schmengo's Nachos", 
                       "20 Tostitos Scoops topped with salsa, black beans, and shredded cheddar ($15) add Schmengo's Wings ($16) melt the cheddar ($2)"),

        createMenuItem("Schmengo's Pretzel Sticks",
                       "Soft, salted pretzel ($10) add beer cheese ($5)"),

        createMenuItem("Schmengo's Mac & Cheese Bites",
                       "Store bought Kraft Mac & Cheese rolled into balls and deep fried. Build your own! Small ($10) Medium ($15) Large ($20)")
    );
    
    appetizersContainer.append(appetizersHeading, appetizersList);
    
    const entreesContainer = createElement("div", "", new Attribute("class", "entrees"));

    const entreesHeading = createElement("div", 
                                         "Entrees", 
                                         new Attribute("class", "heading smaller"));

    const entreesList = createElement("ul", "",
                                      new Attribute("class", "menu-items"),
                                      new Attribute("role", "list"));

    entreesList.append(
        createMenuItem("Schmengo's Steak", 
                       "Choice grade meat, cooked well rare ($28)"),
        
        createMenuItem("Schmengo's Burger", 
                       "80% lean beef, cooked well rare ($20) add buns ($1) add american cheese, lettuce, tomato, onion, or pickle ($0.50 each)"),

        createMenuItem("Schmengo's Chicken Sandwich", 
                       "Slightly crispy chicken served on a lukewarm bun ($18) add american cheese, lettuce, tomato, onion, or pickle ($0.50 each)"),

        createMenuItem("Schmengo's Quesadillas",
                       "Grilled tortilla with cheddar inside ($18) add slightly crispy chicken ($5) add pico de gallo ($0.50)"),

        createMenuItem("Schmengo's Flatbread",
                       "Build your own! Add mozzarella cheese ($5) add chicken ($5) add hot sauce ($2) add ranch dressing ($2) add green onion ($2)")
    );
    
    entreesContainer.append(entreesHeading, entreesList);

    pageInfo.append(mainHeading, appetizersContainer, entreesContainer);

    content.className = "content menu-page";
    content.append(mainPhotoContainer, pageInfo);
}

function createMenuItem(itemName, itemDescription) {
    const menuItem = createElement("div", "", new Attribute("class", "menu-item"));
    menuItem.append(
        createElement("div", itemName, new Attribute("class", "item-name")),
        createElement("div", itemDescription, new Attribute("class", "item-description"))
    );
    return menuItem;
}

export { loadMenuPage };