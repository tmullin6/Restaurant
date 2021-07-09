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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderMenu() {\n\n    const menu = document.createElement('div');\n    const menuList = document.createElement('ul');\n    let menuItems = new Array(5);\n    let menuPrices = new Array(5);\n\n   for (let i =0; i<menuItems.length; i++){\n        menuItems[i]= document.createElement('li');\n        menuItems[i].classList.add('menu-item');\n        menuItems[i].textContent='Enter Item';\n        menuList.appendChild(menuItems[i]);\n    };\n    \n\n   for (let i =0; i<menuPrices.length; i++){\n    menuPrice[i]= document.createElement('li');\n    menuPrices[i].classList.add('menu-item');\n    menuList.appendChild(menuPrices[i]);\n};\n\n    menuList.classList.add('menu');\n    \n    menuItems[0].textContent = 'Drip Coffee................................... $2.50';\n    menuItems[1].textContent = 'Mocha.............................................. $2.50';\n    menuItems[2].textContent = 'Latte.............................................. $2.50';\n    menuItems[3].textContent = 'Iced Coffee................................... $2.50';\n    menuItems[4].textContent = 'Assorted Pastries............................. $2.50';\n\n    menuPrices[0].textContent= '$2.50';\n    menuPrices[1].textContent= '$2.50';\n    menuPrices[2].textContent= '$2.50';\n    menuPrices[3].textContent= '$2.50';\n    menuPrices[4].textContent= '$2.50';\n\n    menu.appendChild(menuList);\n    \n    return menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 	__webpack_modules__["./src/menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;