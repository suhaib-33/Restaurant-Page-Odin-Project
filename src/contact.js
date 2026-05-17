export default function loadContact () {


    const content = document.querySelector("#content")

    const heading = document.createElement("h1");
    heading.textContent = "Contact";

    const para = document.createElement("p");
    para.textContent = "Phone: 123456";

    const input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = "Name";

    content.appendChild(heading);
    content.appendChild(para);
    content.appendChild(input1);
};