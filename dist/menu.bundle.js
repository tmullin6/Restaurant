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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Function to render the contents of the menu page to the screen.\nfunction renderMenu() {\n\n    //Create DOM elements for the menu lists and price lists\n    const menu = document.createElement('div');\n    const menuList = document.createElement('ul');\n    const priceList = document.createElement('ul');\n    let menuItems = new Array(6);\n    let menuPrices = new Array(6);\n\n    //Creates and appends list of menu items to the menu list\n    for (let i =0; i<menuItems.length; i++){\n        menuItems[i]= document.createElement('li');\n        menuItems[i].classList.add('menu-item');\n        menuList.appendChild(menuItems[i]);\n    };\n    \n    //Creates and appends list of prices to the price list\n    for (let i =0; i<menuPrices.length; i++){\n        menuPrices[i]= document.createElement('li');\n        menuPrices[i].classList.add('menu-item');\n        priceList.appendChild(menuPrices[i]);\n    };\n\n    //Add CSS Classes to each created list\n    menu.classList.add('menu');\n    menuList.classList.add('menu-list');\n    priceList.classList.add('menu-list');\n    \n    //Text content for menu items\n    menuItems[0].textContent = 'Drip Coffee';\n    menuItems[1].textContent = 'Mocha';\n    menuItems[2].textContent = 'Flavored Latte';\n    menuItems[3].textContent = 'Iced Coffee or Latte';\n    menuItems[4].textContent = 'Assorted Pastries';\n    menuItems[5].textContent = 'Pupaccino';\n\n    //Text content for the prices list\n    menuPrices[0].textContent= 'Sm: $2.50/Lg: $3.50';\n    menuPrices[1].textContent= 'Sm: $2.00/Lg: $3.00';\n    menuPrices[2].textContent= 'Sm: $2.00/Lg: $3.00';\n    menuPrices[3].textContent= 'Sm: $2.50/Lg: $3.50';\n    menuPrices[4].textContent= '$2.00 each';\n    menuPrices[5].textContent= '$1.00';\n\n    menu.appendChild(menuList);\n    menu.appendChild(priceList);\n\n    \n    return menu;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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