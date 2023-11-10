// {/* <div id="middleMenu">
//             <div class="menuOption">
//                 <img src="img/lasagna.png">
//                 <p>Protein Lasagna</p>
//             </div>
//             <div class="menuOption">
//                 <img src="img/chicken.png">
//                 <p>Chicken and Rice</p>
//             </div>
//             <div class="menuOption">
//                 <img src="img/steak.png">
//                 <p>Steak</p>
//             </div>
//             <div class="menuOption">
//                 <img src="img/english-breakfast.png">
//                 <p>English Breakfast</p>
//             </div>
//             <div class="menuOption">
//                 <img src="img/pancakes.png">
//                 <p>Protein Pancakes</p>
//             </div>
//             <div class="menuOption">
//                 <img src="img/protein-shake.png">
//                 <p>Protein Shake</p>
//             </div>
//         </div> */}

import { ps, content } from './header.js';

const Menu = () => {
    ps[0].innerHTML = "Home";
    ps[1].innerHTML = "<u>Menu</u>";
    ps[2].innerHTML = "Contact";
    ps[0].setAttribute("id","");
    ps[1].setAttribute("id","currentPage");
    ps[2].setAttribute("id","");
    middle.setAttribute("id","middleMenu");
}

export { Menu }