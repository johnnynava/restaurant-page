import { ps, content } from './header.js';

const Contact = () => {
    ps[0].innerHTML = "Home";
    ps[1].innerHTML = "Menu";
    ps[2].innerHTML = "<u>Contact</u>";
    ps[0].setAttribute("id","");
    ps[1].setAttribute("id","");
    ps[2].setAttribute("id","currentPage");
}

export { Contact };