/* <div id="middleContact">
<div class="contactOption">
    <img src="img/reg-garfield.png">
    <p class="name">Garfield</p>
    <p>Executive Chef</p>
    <p>079 2358 90X3</p>
</div>
<div class="contactOption">
    <img src="img/jon.png">
    <p class="name">Jon Arbuckle</p>
    <p>Sous Chef</p>
    <p>079 5248 9X71</p>  
</div>
<div class="contactOption">
    <img src="img/odie.png">
    <p class="name">Odie</p>
    <p>Assistant Chef</p>
    <p>070 8572 3X36</p> 
    </div>  */

import { ps, content } from './header.js';

const Contact = () => {
    ps[0].innerHTML = "Home";
    ps[1].innerHTML = "Menu";
    ps[2].innerHTML = "<u>Contact</u>";
    ps[0].setAttribute("id","");
    ps[1].setAttribute("id","");
    ps[2].setAttribute("id","currentPage");
    const middle = document.querySelector("#content div:nth-child(2)"); 
    middle.setAttribute("id","middleContact");
    for(let i=0; i<3; i++){
        middle.appendChild(document.createElement("div"))
    }
    const contactOption = document.querySelectorAll("#middleContact>div");
    for(let i=0 ;i<3; i++){
        contactOption[i].appendChild(document.createElement("img"));
        for(let o=0;o<3;o++){
            contactOption[i].appendChild(document.createElement("p"));
        }
        contactOption[i].classList.add("contactOption");
    }
    const contactImgs = document.querySelectorAll(".contactOption>img");
    const contactPs = document.querySelectorAll(".contactOption>p");
    contactImgs[0].setAttribute("src","img/reg-garfield.png");
    contactPs[0].textContent = "Garfield";
    contactPs[0].classList.add("name");
    contactPs[1].textContent = "Executive Chef";
    contactPs[2].textContent = "079 2358 90X3";
    contactImgs[1].setAttribute("src","img/jon.png");
    contactPs[3].textContent = "Jon Arbuckle";
    contactPs[3].classList.add("name");
    contactPs[4].textContent = "Sous Chef";
    contactPs[5].textContent = "079 5248 9X71";
    contactImgs[2].setAttribute("src","img/odie.png");
    contactPs[6].textContent = "Odie";
    contactPs[6].classList.add("name");
    contactPs[7].textContent = "Assistant Chef";
    contactPs[8].textContent = "070 8572 3X36";
}

export { Contact };