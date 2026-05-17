export default function loadHome() {
  const content = document.querySelector("#content");
  content.classList.add("home");


  const heading = document.createElement("h1");
  heading.textContent = "Welcome To Our Restaurant";

  const para = document.createElement("p");
  para.textContent = "Best food in town";

  content.appendChild(heading);
  content.appendChild(para);
}