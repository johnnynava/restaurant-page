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



const Menu = () => {
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].innerHTML = "Home";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[1].innerHTML = "<u>Menu</u>";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[2].innerHTML = "Contact";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].setAttribute("id","");
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[1].setAttribute("id","currentPage");
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[2].setAttribute("id","");
    middle.setAttribute("id","middleMenu");
}



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Contact: () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


const Contact = () => {
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].innerHTML = "Home";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[1].innerHTML = "Menu";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[2].innerHTML = "<u>Contact</u>";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].setAttribute("id","");
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[1].setAttribute("id","");
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[2].setAttribute("id","currentPage");
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