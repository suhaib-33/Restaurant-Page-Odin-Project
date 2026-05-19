import img from "./images/restaurant.jpg";

export default function loadHome() {

  const content = document.querySelector("#content");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome To Our Restaurant";
  heading.classList.add("main-heading");

  const para = document.createElement("p");
  para.textContent = "Best food in town";

  content.appendChild(heading);
  content.appendChild(para);

  const image = document.createElement("img");
  image.src = img;
  image.alt = "Restaurant Image";
  image.classList.add("restaurant-image");
  content.appendChild(image);

  const abt = document.createElement("div");
  abt.classList.add("about-section");
  const detail = document.createElement("div");
  detail.classList.add("details");
  const aboutHeading = document.createElement("h2");
  aboutHeading.classList.add("about-heading");

  aboutHeading.textContent = "About Us";
  const aboutPara = document.createElement("p");
  aboutPara.textContent = "We are a family-owned restaurant that has been serving delicious food for over 20 years. Our menu features a variety of dishes made with fresh, locally-sourced ingredients. We pride ourselves on providing excellent customer service and creating a welcoming atmosphere for all of our guests.";
  detail.appendChild(aboutHeading);
  detail.appendChild(aboutPara);
  abt.appendChild(detail);
  content.appendChild(abt);

}