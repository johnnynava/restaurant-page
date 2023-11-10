const content = document.querySelector("#content")
const header = document.createElement("div");
const h1 = document.createElement("h1");
const span = document.createElement("span");
let ps;

const Header = () => {
    content.appendChild(header);
    header.setAttribute("id","header");
    header.appendChild(h1);
    h1.textContent = "Garfield's Bulkers Paradise";
    header.appendChild(span);
    span.appendChild(document.createElement("p"));
    span.appendChild(document.createElement("p"));
    span.appendChild(document.createElement("p"));
    ps = document.querySelectorAll("p");
    ps[0].textContent = "Home";
    ps[1].textContent = "Menu";
    ps[2].textContent = "Contact";
}

export { Header, ps, content};