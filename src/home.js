// {/* <div id="content">
//     <div id="header">
//         <h1>Garfield's Bulkers Paradise</h1>
//         <span id="links">
//             <p id="">Home</p>
//             <p>Menu</p>
//             <p>Contact</p>
//         </span>
//     </div>
//     <div id="middle">
//         <p>You know the rules of bodybuilding, eat big to get big.
//             Garfield's Bulkers Paradise has meal options for all the fellow gymrats that are on a bulk.
//             We serve foods high in calories but with the right macros to help you in your bodybuilding journey.
//         </p>
//         <img  id="homeImage" src="./buff-garfield.png">
//         <ul>
//             <li class="miniTitle">Hours</li>
//             <li>Sunday: 10am - 6pm</li>
//             <li>Monday-Friday: 8am - 10pm</li>
//             <li>Saturday: 10am - 8pm</li>
//             <br>
//             <li class="miniTitle">Location</li>
//             <li>711 Maple Street</li>
//         </ul>
//     </div>
// </div> */}

import { ps, content } from './header.js';

const middle = document.createElement("div");
const introduction = document.createElement("p")
const img = document.createElement("img")

const Home = () =>{
    console.log(ps);
    ps[0].innerHTML = "<u>Home</u>";
    ps[0].setAttribute("id","currentPage");
    content.appendChild("middle");
    middle.setAttribute("id","middle");
    middle.appendChild(introduction);
    introduction.textContent = "You know the rules of bodybuilding, eat big to get big. Garfield's Bulkers Paradise has meal options for all the fellow gymrats that are on a bulk. We serve foods high in calories but with the right macros to help you in your bodybuilding journey.";
    middle.appendChild(img);
    img.setAttribute("id","homeImage");
    img.setAttribute("src","./buff-garfield.png");
}

export { Home };