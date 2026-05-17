import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";
import "./style.css";

const content = document.querySelector("#content");

const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");



function clearContent () {
    content.innerHTML = "";
};


homeBtn.addEventListener("click", () => {
    clearContent();
    loadHome();
});

contactBtn.addEventListener("click", () => {
    clearContent();
    loadContact();
})

menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenu();
})

loadHome();