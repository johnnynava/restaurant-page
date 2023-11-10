import { Header } from './header.js';
import { Home } from './home.js';
import { Menu } from './menu.js';
import { Contact } from './contact.js';

Header();
Home();

const buttons = document.querySelectorAll("#header>span>p");
const middle = document.querySelector("#middle");

const clearMiddle = () => {
    middle.innerHTML = "";
}

buttons.forEach((button) => button.addEventListener("click", () => {
    if (button.textContent === "Home"){
        clearMiddle();
        Home();
    }
    else if (button.textContent === "Menu"){
        clearMiddle();
        Menu();
    }
    else {
        clearMiddle();
        Contact();
    }
}))