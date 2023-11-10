import { ps, content } from './header.js';

const middle = document.createElement("div");

const Home = () =>{
    ps[0].innerHTML = "<u>Home</u>";
    ps[1].innerHTML = "Menu";
    ps[2].innerHTML = "Contact";
    ps[0].setAttribute("id","currentPage");
    ps[1].setAttribute("id","");
    ps[2].setAttribute("id","");
    content.appendChild(middle);
    middle.setAttribute("id","middle");
    const introduction = document.createElement("p")
    const img = document.createElement("img")
    middle.appendChild(introduction);
    introduction.textContent = "You know the rules of bodybuilding, eat big to get big. Garfield's Bulkers Paradise has meal options for all the fellow gymrats that are on a bulk. We serve foods high in calories but with the right macros to help you in your bodybuilding journey.";
    middle.appendChild(img);
    img.setAttribute("id","homeImage");
    img.setAttribute("src","./img/buff-garfield.png");
    const ul = document.createElement("ul");
    middle.appendChild(ul);
    ul.appendChild(document.createElement("li"));
    ul.appendChild(document.createElement("li"));
    ul.appendChild(document.createElement("li"));
    ul.appendChild(document.createElement("li"));
    ul.appendChild(document.createElement("br"));
    ul.appendChild(document.createElement("li"));
    ul.appendChild(document.createElement("li"));
    const lis = document.querySelectorAll("li");
    lis[0].setAttribute("id","miniTitle");
    lis[0].textContent = "Hours"
    lis[1].textContent = "Sunday: 10am - 6pm"
    lis[2].textContent = "Monday-Friday: 8am - 10pm"
    lis[3].textContent = "Saturday: 10am - 8pm"
    lis[4].setAttribute("id","miniTitle");
    lis[4].textContent = "Location";
    lis[5].textContent = "711 Maple Street";
}

export { Home };