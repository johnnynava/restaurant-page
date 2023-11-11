/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header),
/* harmony export */   content: () => (/* binding */ content),
/* harmony export */   ps: () => (/* binding */ ps)
/* harmony export */ });
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



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Home: () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const middle = document.createElement("div");

const Home = () =>{
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].innerHTML = "<u>Home</u>";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[1].innerHTML = "Menu";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[2].innerHTML = "Contact";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].setAttribute("id","currentPage");
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[1].setAttribute("id","");
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[2].setAttribute("id","");
    _header_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(middle);
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



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const Menu = () => {
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].innerHTML = "Home";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[1].innerHTML = "<u>Menu</u>";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[2].innerHTML = "Contact";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].setAttribute("id","");
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[1].setAttribute("id","currentPage");
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[2].setAttribute("id","");
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



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Contact: () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
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



const Contact = () => {
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].innerHTML = "Home";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[1].innerHTML = "Menu";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[2].innerHTML = "<u>Contact</u>";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].setAttribute("id","");
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[1].setAttribute("id","");
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[2].setAttribute("id","currentPage");
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



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.Header)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.Home)();

const buttons = document.querySelectorAll("#header>span>p");
const middle = document.querySelector("#middle");

const clearMiddle = () => {
    middle.innerHTML = "";
}

buttons.forEach((button) => button.addEventListener("click", () => {
    if (button.textContent === "Home"){
        clearMiddle();
        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.Home)();
    }
    else if (button.textContent === "Menu"){
        clearMiddle();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.Menu)();
    }
    else {
        clearMiddle();
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.Contact)();
    }
}))
})();

/******/ })()
;