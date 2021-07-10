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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction renderContact() {\n\n    const contact = document.createElement('div');\n    const addressHead = document.createElement('h3');\n    const addressText = document.createElement('p');\n    const phoneHead = document.createElement('h3');\n    const phoneText = document.createElement('p');\n    const gitHead = document.createElement('h3');\n    const gitText = document.createElement('p');\n\n    addressHead.classList.add('contact-headers');\n    phoneHead.classList.add('contact-headers');\n    gitHead.classList.add('contact-headers');\n\n    addressText.classList.add('contact-text');\n    phoneText.classList.add('contact-text');\n    gitText.classList.add('contact-text');\n\n    addressHead.textContent=\"Our Address:\";\n    addressText.textContent = \"12345 Street Drive, Denver CO. <-- Not Real\";\n\n    phoneHead.textContent=\"Call us:\";\n    phoneText.textContent=\"(123)456-7890 <-- Also Not Real\";\n\n    gitHead.textContent=\"Want to check out my other work: \";\n    gitText.textContent=\"https://github.com/tmullin6 <--This one is real\";\n\n    contact.appendChild(addressHead);\n    contact.appendChild(addressText);\n    contact.appendChild(phoneHead);\n    contact.appendChild(phoneText);\n    contact.appendChild(gitHead);\n    contact.appendChild(gitText);\n\n\n    return contact;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/contact.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;