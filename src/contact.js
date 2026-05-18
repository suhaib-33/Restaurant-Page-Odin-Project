export default function loadContact () {


    const content = document.querySelector("#content")

    const heading = document.createElement("h1");
    heading.textContent = "Contact";

    const para = document.createElement("p");
    para.textContent = "Phone: 123456";
    para.classList.add("contact-info");

    const input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = "Name";

    const input2 = document.createElement("input");
    input2.type = "text";
    input2.placeholder = "Email";

    const input3 = document.createElement("input");
    input3.type = "number";
    input3.placeholder = "Phone Number";

    const input4 = document.createElement("input");
    input4.type = "text";
    input4.placeholder = "Message";

    input1.classList.add("input");
    input2.classList.add("input");
    input3.classList.add("input");
    input4.classList.add("input");

    const submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.classList.add("submit");

    content.appendChild(heading);
    content.appendChild(para);
    content.appendChild(input1);
    content.appendChild(input2);
    content.appendChild(input3);
    content.appendChild(input4);
    content.appendChild(submit);
};