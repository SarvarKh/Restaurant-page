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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_hilton05_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/hilton05.jpg */ \"./src/images/hilton05.jpg\");\n/* harmony import */ var _images_hilton04_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/hilton04.jpg */ \"./src/images/hilton04.jpg\");\n/* harmony import */ var _images_hilton03_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/hilton03.jpg */ \"./src/images/hilton03.jpg\");\n/* harmony import */ var _images_home_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/home.jpg */ \"./src/images/home.jpg\");\n\n\n\n\n\nfunction pageLoad() {\n    const home = document.createElement(\"div\");\n    home.setAttribute(\"id\", \"home\");\n\n    const main = createE(\"main\");\n    const container = createE(\"div\", false, \"navbar\");\n    container.appendChild(createImg(_images_hilton05_jpg__WEBPACK_IMPORTED_MODULE_0__, \"photo\"))\n    container.appendChild(createImg(_images_hilton04_jpg__WEBPACK_IMPORTED_MODULE_1__, \"photo\"))\n    container.appendChild(createImg(_images_hilton03_jpg__WEBPACK_IMPORTED_MODULE_2__, \"photo\"))\n    container.appendChild(createImg(_images_home_jpg__WEBPACK_IMPORTED_MODULE_3__, \"photo\"))\n    const descr = createE(\"p\");\n    descr.innerHTML = \"Appreciate stunning views from the Pan Asian restaurant which is located on the top 21th floor, open from lunchtime until late evening and serving some of the finest dishes in the city. Enjoy the city from our spacious outdoor terrace while indulging in a wide range of wines and international spirits. Relax to some of the coolest music, while savoring delicacies prepared by our chef.\"\n    main.appendChild(container);\n    main.appendChild(descr);\n    home.appendChild(main);\n\n\n    const footer = createE(\"footer\");\n    const footerDiv = createE(\"div\", \"Copyright © 2021 Sarvar Khalimov\");\n    const linkIcon1 = createE(\"a\", \"\", \"icon-link\", \"https://github.com/SarvarKh\");\n    linkIcon1.setAttribute(\"target\", \"_blank\")\n    const icon1 = document.createElement(\"i\");\n    icon1.classList.add(\"fab\");\n    icon1.classList.add(\"fa-github\");\n    \n    const linkIcon2 = createE(\"a\", \"\", \"icon-link\", \"https://www.linkedin.com/in/sarvar-khalimov/\");\n    linkIcon2.setAttribute(\"target\", \"_blank\")\n    const icon2 = document.createElement(\"i\");\n    icon2.classList.add(\"fab\");\n    icon2.classList.add(\"fa-linkedin\");\n    \n    const linkIcon3 = createE(\"a\", \"\", \"icon-link\", \"https://sarvarkh.github.io/portfolio/\");\n    linkIcon3.setAttribute(\"target\", \"_blank\")\n    const icon3 = document.createElement(\"i\");\n    icon3.classList.add(\"fas\");\n    icon3.classList.add(\"fa-folder-open\");\n    \n    linkIcon1.appendChild(icon1);\n    linkIcon2.appendChild(icon2);\n    linkIcon3.appendChild(icon3);\n    footerDiv.appendChild(linkIcon1);\n    footerDiv.appendChild(linkIcon2);\n    footerDiv.appendChild(linkIcon3);\n    footer.appendChild(footerDiv);\n    home.appendChild(footer);\n\n    return home;\n}\n\nfunction createE(elementName, content, className, href) {\n    let element = document.createElement(elementName);\n    \n    if (content) {\n        element.innerHTML = content;\n    }\n\n    if (className) {\n        element.classList.toggle(className);\n    }\n\n    if (href) {\n        element.href = href;\n    }\n    return element;\n}\n\nfunction createImg(source, className) {\n    let photo = new Image();\n    photo.src = source;\n    photo.classList.add(className)\n\n    return photo\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/images/hilton03.jpg":
/*!*********************************!*\
  !*** ./src/images/hilton03.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"411e7287e3a4eb89cd06.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/hilton03.jpg?");

/***/ }),

/***/ "./src/images/hilton04.jpg":
/*!*********************************!*\
  !*** ./src/images/hilton04.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d7d51205fdb65d46a687.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/hilton04.jpg?");

/***/ }),

/***/ "./src/images/hilton05.jpg":
/*!*********************************!*\
  !*** ./src/images/hilton05.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"06bfd9bbc3f5e4982f09.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/hilton05.jpg?");

/***/ }),

/***/ "./src/images/home.jpg":
/*!*****************************!*\
  !*** ./src/images/home.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6d9e1785b0301dca51ee.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/home.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\nfunction component() {\n  const element = document.createElement('div');\n  element.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__.default)());\n  element.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.default)());\n\n  return element;\n}\n\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction navbarLoad(params) {\n    const container = document.createElement(\"div\");\n    \n    const nav = document.createElement(\"nav\");\n    const navbar = createE(\"div\", false, \"navbar\");\n    navbar.appendChild(createE(\"button\", \"Home\", \"nav-btn\"));\n    navbar.appendChild(createE(\"button\", \"Menu\", \"nav-btn\"));\n    navbar.appendChild(createE(\"button\", \"Contact\", \"nav-btn\"));\n    nav.appendChild(createE(\"h1\", \"Hilton Tashkent City\"));\n    nav.appendChild(createE(\"h3\", \"City 21 Pan Asian Restaurant\"));\n    nav.appendChild(navbar);\n    container.appendChild(nav);\n\n    return container;\n}\n\nfunction createE(elementName, content, className) {\n    let element = document.createElement(elementName);\n    \n    if (content) {\n        element.innerHTML = content;\n    }\n\n    if (className) {\n        element.classList.toggle(className);\n    }\n\n    return element;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbarLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/navbar.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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