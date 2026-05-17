export default function loadMenu () {

    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Menu:";

    const item1 = document.createElement("p");
    item1.textContent = "Pizza";

    const item2 = document.createElement("p");
    item2.textContent = "Burger";


    content.appendChild(heading);
    content.appendChild(item1);
    content.appendChild(item2);
}