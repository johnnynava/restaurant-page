import { ps, content } from './header.js';

const Menu = () => {
    ps[0].innerHTML = "Home";
    ps[1].innerHTML = "<u>Menu</u>";
    ps[2].innerHTML = "Contact";
    ps[0].setAttribute("id","");
    ps[1].setAttribute("id","currentPage");
    ps[2].setAttribute("id","");
    const middle = document.querySelector("#content div:nth-child(2)"); 
    middle.setAttribute("id","middleMenu");
    for(let i=0;i<6;i++){
    middle.appendChild(document.createElement("div"));
    }
    const menuOptions = document.querySelectorAll("#middleMenu>div");
    for(let i=0;i<6;i++){
        menuOptions[i].classList.add("menuOption");
        menuOptions[i].appendChild(document.createElement("img"));
        menuOptions[i].appendChild(document.createElement("p"));
    }
    const menuImgs = document.querySelectorAll(".menuOption>img");
    const menuPs = document.querySelectorAll(".menuOption>p");
    menuImgs[0].setAttribute("src","img/lasagna.png");
    menuPs[0].textContent = "Protein Lasagna";
    menuImgs[1].setAttribute("src","img/chicken.png");
    menuPs[1].textContent ="Chicken and Rice";
    menuImgs[2].setAttribute("src","img/steak.png");
    menuPs[2].textContent = "Steak";
    menuImgs[3].setAttribute("src","img/english-breakfast.png");
    menuPs[3].textContent = "English Breakfast";
    menuImgs[4].setAttribute("src","img/pancakes.png");
    menuPs[4].textContent = "Protein Pancakes";
    menuImgs[5].setAttribute("src","img/protein-shake.png");
    menuPs[5].textContent = "Protein Shake";
}

export { Menu }