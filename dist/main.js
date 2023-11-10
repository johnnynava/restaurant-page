/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header),\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   ps: () => (/* binding */ ps)\n/* harmony export */ });\nconst content = document.querySelector(\"#content\")\nconst header = document.createElement(\"div\");\nconst h1 = document.createElement(\"h1\");\nconst span = document.createElement(\"span\");\nlet ps;\n\nconst Header = () => {\n    content.appendChild(header);\n    header.setAttribute(\"id\",\"header\");\n    header.appendChild(h1);\n    h1.textContent = \"Garfield's Bulkers Paradise\";\n    header.appendChild(span);\n    span.appendChild(document.createElement(\"p\"));\n    span.appendChild(document.createElement(\"p\"));\n    span.appendChild(document.createElement(\"p\"));\n    ps = document.querySelectorAll(\"p\");\n    ps[0].textContent = \"Home\";\n    ps[1].textContent = \"Menu\";\n    ps[2].textContent = \"Contact\";\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Home: () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n// {/* <div id=\"content\">\n//     <div id=\"header\">\n//         <h1>Garfield's Bulkers Paradise</h1>\n//         <span id=\"links\">\n//             <p id=\"\">Home</p>\n//             <p>Menu</p>\n//             <p>Contact</p>\n//         </span>\n//     </div>\n//     <div id=\"middle\">\n//         <p>You know the rules of bodybuilding, eat big to get big.\n//             Garfield's Bulkers Paradise has meal options for all the fellow gymrats that are on a bulk.\n//             We serve foods high in calories but with the right macros to help you in your bodybuilding journey.\n//         </p>\n//         <img  id=\"homeImage\" src=\"./buff-garfield.png\">\n//         <ul>\n//             <li class=\"miniTitle\">Hours</li>\n//             <li>Sunday: 10am - 6pm</li>\n//             <li>Monday-Friday: 8am - 10pm</li>\n//             <li>Saturday: 10am - 8pm</li>\n//             <br>\n//             <li class=\"miniTitle\">Location</li>\n//             <li>711 Maple Street</li>\n//         </ul>\n//     </div>\n// </div> */}\n\n\n\nconst middle = document.createElement(\"div\");\nconst introduction = document.createElement(\"p\")\nconst img = document.createElement(\"img\")\n\nconst Home = () =>{\n    console.log(_header_js__WEBPACK_IMPORTED_MODULE_0__.ps);\n    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].innerHTML = \"<u>Home</u>\";\n    _header_js__WEBPACK_IMPORTED_MODULE_0__.ps[0].setAttribute(\"id\",\"currentPage\");\n    _header_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(middle);\n    middle.setAttribute(\"id\",\"middle\");\n    middle.appendChild(introduction);\n    introduction.textContent = \"You know the rules of bodybuilding, eat big to get big. Garfield's Bulkers Paradise has meal options for all the fellow gymrats that are on a bulk. We serve foods high in calories but with the right macros to help you in your bodybuilding journey.\";\n    middle.appendChild(img);\n    img.setAttribute(\"id\",\"homeImage\");\n    img.setAttribute(\"src\",\"./buff-garfield.png\");\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\nconsole.log(\"Heyyyy\")\n\n;\n\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.Header)();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.Home)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;