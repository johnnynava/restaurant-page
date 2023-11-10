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



const middle = document.createElement("div");
const introduction = document.createElement("p")
const img = document.createElement("img")

const Home = () =>{
    console.log(_header_js__WEBPACK_IMPORTED_MODULE_0__.ps);
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].innerHTML = "<u>Home</u>";
    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].setAttribute("id","currentPage");
    _header_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild("middle");
    middle.setAttribute("id","middle");
    middle.appendChild(introduction);
    introduction.textContent = "You know the rules of bodybuilding, eat big to get big. Garfield's Bulkers Paradise has meal options for all the fellow gymrats that are on a bulk. We serve foods high in calories but with the right macros to help you in your bodybuilding journey.";
    middle.appendChild(img);
    img.setAttribute("id","homeImage");
    img.setAttribute("src","./buff-garfield.png");
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
console.log("Heyyyy")

;


(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.Header)();
(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.Home)();
})();

/******/ })()
;