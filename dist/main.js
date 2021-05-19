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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createE(elementName, content, className, href) {\r\n  const element = document.createElement(elementName);\r\n\r\n  if (content) {\r\n    element.innerHTML = content;\r\n  }\r\n\r\n  if (className) {\r\n    element.classList.toggle(className);\r\n  }\r\n\r\n  if (href) {\r\n    element.href = href;\r\n  }\r\n  return element;\r\n}\r\n\r\nfunction createContact() {\r\n  const contact = createE('div', false, 'container');\r\n  contact.classList.add('background-image');\r\n  const contact1 = createE('div', false, 'contact1');\r\n  const contact1H3 = createE('h3', 'Contact us');\r\n  const contactDiv1 = createE('div');\r\n  const contactDiv1Span1 = createE('span', '8 71 210 89 06');\r\n  const contactDiv1Icon1 = createE('i', false, 'fas');\r\n  contactDiv1Icon1.classList.add('fa-mobile-alt');\r\n  const contactDiv2 = createE('div');\r\n  const contactDiv2Span2 = createE('span', '2, Islam Karimov Street Floor 21, Tashkent 100027');\r\n  const contactDiv1Icon2 = createE('i', false, 'fas');\r\n  contactDiv1Icon2.classList.add('fa-map-marker-alt');\r\n  contactDiv1.appendChild(contactDiv1Icon1);\r\n  contactDiv1.appendChild(contactDiv1Span1);\r\n  contactDiv2.appendChild(contactDiv1Icon2);\r\n  contactDiv2.appendChild(contactDiv2Span2);\r\n  contact1.appendChild(contact1H3);\r\n  contact1.appendChild(contactDiv1);\r\n  contact1.appendChild(contactDiv2);\r\n  contact.appendChild(contact1);\r\n\r\n  const contact2 = createE('div', false, 'contact2');\r\n  const contact2h3 = createE('h3', 'Find and Follow us on social media');\r\n  const contact2Social = createE('div', false, 'social');\r\n  const a1 = createE('a', false, false, 'https://www.hilton.com/en/hotels/tastchi-hilton-tashkent-city/dining/');\r\n  a1.setAttribute('target', '_blank');\r\n  const contactIcon1 = createE('i', false, 'fas');\r\n  contactIcon1.classList.add('fa-external-link-square-alt');\r\n  a1.appendChild(contactIcon1);\r\n  contact2Social.appendChild(a1);\r\n\r\n  const a2 = createE('a', false, false, 'https://www.facebook.com/City21restaurant/');\r\n  a2.setAttribute('target', '_blank');\r\n  const contactIcon2 = createE('i', false, 'fab');\r\n  contactIcon2.classList.add('fa-facebook-square');\r\n  a2.appendChild(contactIcon2);\r\n  contact2Social.appendChild(a2);\r\n\r\n  const a3 = createE('a', false, false, 'https://www.tripadvisor.com/Restaurant_Review-g293968-d21200578-Reviews-City_21_Pan_Asian_Restaurant_Lounge-Tashkent_Tashkent_Province.html');\r\n  a3.setAttribute('target', '_blank');\r\n  const contactIcon3 = createE('i', false, 'fab');\r\n  contactIcon3.classList.add('fa-tripadvisor');\r\n  a3.appendChild(contactIcon3);\r\n  contact2Social.appendChild(a3);\r\n\r\n  const a4 = createE('a', false, false, 'https://www.instagram.com/hiltontashkentcityhotel/?hl=en');\r\n  a4.setAttribute('target', '_blank');\r\n  const contactIcon4 = createE('i', false, 'fab');\r\n  contactIcon4.classList.add('fa-instagram');\r\n  a4.appendChild(contactIcon4);\r\n  contact2Social.appendChild(a4);\r\n\r\n  contact2.appendChild(contact2h3);\r\n  contact2.appendChild(contact2Social);\r\n  contact.appendChild(contact2);\r\n\r\n  return contact;\r\n}\r\n\r\nfunction loadContact() {\r\n  const main = document.querySelector('#main');\r\n  main.textContent = '';\r\n  main.appendChild(createContact());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_hilton05_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/hilton05.jpg */ \"./src/images/hilton05.jpg\");\n/* harmony import */ var _images_hilton04_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/hilton04.jpg */ \"./src/images/hilton04.jpg\");\n/* harmony import */ var _images_hilton03_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/hilton03.jpg */ \"./src/images/hilton03.jpg\");\n/* harmony import */ var _images_home_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/home.jpg */ \"./src/images/home.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction createE(elementName, content, className, href) {\r\n  const element = document.createElement(elementName);\r\n\r\n  if (content) {\r\n    element.innerHTML = content;\r\n  }\r\n\r\n  if (className) {\r\n    element.classList.toggle(className);\r\n  }\r\n\r\n  if (href) {\r\n    element.href = href;\r\n  }\r\n  return element;\r\n}\r\n\r\nfunction createImg(source, className) {\r\n  const photo = new Image();\r\n  photo.src = source;\r\n  photo.classList.add(className);\r\n\r\n  return photo;\r\n}\r\n\r\nfunction createHome() {\r\n  const home = document.createElement('div');\r\n  home.setAttribute('id', 'home');\r\n\r\n  const main = createE('div');\r\n  const container = createE('div', false, 'container');\r\n  container.appendChild(createImg(_images_hilton05_jpg__WEBPACK_IMPORTED_MODULE_0__, 'photo'));\r\n  container.appendChild(createImg(_images_hilton04_jpg__WEBPACK_IMPORTED_MODULE_1__, 'photo'));\r\n  container.appendChild(createImg(_images_hilton03_jpg__WEBPACK_IMPORTED_MODULE_2__, 'photo'));\r\n  container.appendChild(createImg(_images_home_jpg__WEBPACK_IMPORTED_MODULE_3__, 'photo'));\r\n  const descr = createE('p');\r\n  descr.innerHTML = 'Appreciate stunning views from the Pan Asian restaurant which is located on the top 21th floor, open from lunchtime until late evening and serving some of the finest dishes in the city. Enjoy the city from our spacious outdoor terrace while indulging in a wide range of wines and international spirits. Relax to some of the coolest music, while savoring delicacies prepared by our chef.';\r\n  main.appendChild(container);\r\n  main.appendChild(descr);\r\n  home.appendChild(main);\r\n\r\n  return home;\r\n}\r\n\r\nfunction loadHome() {\r\n  const main = document.querySelector('#main');\r\n  main.textContent = '';\r\n  main.appendChild(createHome());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

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

/***/ "./src/images/menu.jpg":
/*!*****************************!*\
  !*** ./src/images/menu.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e83ad587f3680d95b84c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu.jpg?");

/***/ }),

/***/ "./src/images/menu01.jpg":
/*!*******************************!*\
  !*** ./src/images/menu01.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a23ecc3c86505c1db233.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu01.jpg?");

/***/ }),

/***/ "./src/images/menu02.jpg":
/*!*******************************!*\
  !*** ./src/images/menu02.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04536a4ac621aa71aebc.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu02.jpg?");

/***/ }),

/***/ "./src/images/menu03.jpg":
/*!*******************************!*\
  !*** ./src/images/menu03.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f320ebe6742a9f124b01.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/menu03.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-loader */ \"./src/page-loader.js\");\n\r\n\r\ndocument.body.appendChild((0,_page_loader__WEBPACK_IMPORTED_MODULE_0__.default)());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_menu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/menu.jpg */ \"./src/images/menu.jpg\");\n/* harmony import */ var _images_menu01_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu01.jpg */ \"./src/images/menu01.jpg\");\n/* harmony import */ var _images_menu02_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/menu02.jpg */ \"./src/images/menu02.jpg\");\n/* harmony import */ var _images_menu03_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/menu03.jpg */ \"./src/images/menu03.jpg\");\n\r\n\r\n\r\n\r\n\r\nfunction createE(elementName, content, className, href) {\r\n  const element = document.createElement(elementName);\r\n  if (content) { element.innerHTML = content; }\r\n  if (className) { element.classList.toggle(className); }\r\n  if (href) { element.href = href; }\r\n  return element;\r\n}\r\n\r\nfunction createImg(source, className) {\r\n  const photo = new Image();\r\n  photo.src = source;\r\n  photo.classList.add(className);\r\n\r\n  return photo;\r\n}\r\n\r\nfunction createMenu() {\r\n  const menu = createE('div', false, 'menu');\r\n  const chef = createE('div', false, 'chef');\r\n  const chefH2 = createE('h2', 'Rusnadin Mukhtar: \"I love challenges\"');\r\n  const chefP = createE('p', 'The magician responsible for the gastronomic delights of the guests is the chef Rusnadin Mukhtar, specially invited to Tashkent.');\r\n  const chefText = createE('div', false, 'chef-text');\r\n  const chefImg = createImg(_images_menu_jpg__WEBPACK_IMPORTED_MODULE_0__);\r\n  chefText.appendChild(chefH2);\r\n  chefText.appendChild(chefP);\r\n  chef.appendChild(chefText);\r\n  chef.appendChild(chefImg);\r\n  menu.appendChild(chef);\r\n\r\n  const menuCards = createE('div', false, 'menu-cards');\r\n  const card1 = createE('div', false, 'card');\r\n  const card1Img = createImg(_images_menu01_jpg__WEBPACK_IMPORTED_MODULE_1__);\r\n  const card1Text = createE('div', false, 'card-text');\r\n  const card1H5 = createE('h5', 'Spicy beef salad');\r\n  const card1P = createE('p');\r\n  card1P.innerHTML = \"Where to start your meal if not with a hearty salad, perfect for whetting your appetite. It is based on tender beef cooked over low heat for a long time, as well as crispy fresh vegetables and a spicy Pan-Asian sauce of chili and lime. It tastes just fiery, while any guest will enjoy the dish and even require additives. It is not surprising that this is an absolute favorite among salads due to the extraordinary juiciness of the beef and the 'brightness' of the sauce.\";\r\n  card1.appendChild(card1Img);\r\n  card1Text.appendChild(card1H5);\r\n  card1Text.appendChild(card1P);\r\n  card1.appendChild(card1Text);\r\n  menuCards.appendChild(card1);\r\n\r\n  const card2 = createE('div', false, 'card');\r\n  const card2Img = createImg(_images_menu02_jpg__WEBPACK_IMPORTED_MODULE_2__);\r\n  const card2Text = createE('div', false, 'card-text');\r\n  const card2H5 = createE('h5', 'Nasi Goreng');\r\n  const card2P = createE('p');\r\n  card2P.innerHTML = 'Many have heard about one of the signature dishes of Pan-Asian cuisine, which is very popular all over the world, have tried it in Southeast Asia and would like to re-experience the unusual taste at home. It has many varieties, and Rusnadin Mukhtar offers his own proprietary approach. First, vegetables and eggs are fried in a traditional wok, then chili paste, soy sauce and chicken with shrimps are added. When everything is browned, put the pre-cooked rice in the pan and mix its contents. Nasi goreng at City 21 is served with shrimp kebabs, grilled chicken, crackers and vegetable salad. The traditional dish is spicy, but at the request of the guests, it can be muted or removed altogether.';\r\n  card2.appendChild(card2Img);\r\n  card2Text.appendChild(card2H5);\r\n  card2Text.appendChild(card2P);\r\n  card2.appendChild(card2Text);\r\n  menuCards.appendChild(card2);\r\n\r\n  const card3 = createE('div', false, 'card');\r\n  const card3Img = createImg(_images_menu03_jpg__WEBPACK_IMPORTED_MODULE_3__);\r\n  const card3Text = createE('div', false, 'card-text');\r\n  const card3H5 = createE('h5', 'Shrimp with wasabi');\r\n  const card3P = createE('p');\r\n  card3P.innerHTML = \"Guests of City 21 will enjoy a real treat - juicy and crunchy tiger prawns, fried in hot oil and seasoned with a hot wasabi sauce prepared according to the chef's original recipe. What gives rise to such a combination is a surprisingly contrasting taste, built on a mixture of milky sweet and spicy. A hot appetizer is served with Japanese radish - daikon, chukka salad and red roe of flying fish - tobiko. \";\r\n  card3.appendChild(card3Img);\r\n  card3Text.appendChild(card3H5);\r\n  card3Text.appendChild(card3P);\r\n  card3.appendChild(card3Text);\r\n  menuCards.appendChild(card3);\r\n\r\n  menu.appendChild(menuCards);\r\n  return menu;\r\n}\r\n\r\nfunction loadMenu() {\r\n  const main = document.querySelector('#main');\r\n  main.textContent = '';\r\n  main.appendChild(createMenu());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-loader.js":
/*!****************************!*\
  !*** ./src/page-loader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst createE = (elementName, content, className, href) => {\r\n  const element = document.createElement(elementName);\r\n\r\n  if (content) {\r\n    element.innerHTML = content;\r\n  }\r\n\r\n  if (className) {\r\n    element.classList.toggle(className);\r\n  }\r\n\r\n  if (href) {\r\n    element.href = href;\r\n  }\r\n\r\n  return element;\r\n}\r\n\r\nfunction setActiveButton(button) {\r\n  const buttons = document.querySelectorAll('.nav-btn');\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.classList.remove('active');\r\n  });\r\n\r\n  button.classList.add('active');\r\n}\r\n\r\nfunction createHeader() {\r\n  const nav = document.createElement('nav');\r\n\r\n  const buttons = createE('div', false, 'buttons');\r\n\r\n  const homeButton = createE('button', 'Home', 'nav-btn');\r\n  homeButton.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('active')) return;\r\n    setActiveButton(homeButton);\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n  });\r\n  buttons.appendChild(homeButton);\r\n\r\n  const menuButton = createE('button', 'Menu', 'nav-btn');\r\n  menuButton.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('active')) return;\r\n    setActiveButton(menuButton);\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n  });\r\n  buttons.appendChild(menuButton);\r\n\r\n  const contactButton = createE('button', 'Contact', 'nav-btn');\r\n  contactButton.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains('active')) return;\r\n    setActiveButton(contactButton);\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n  });\r\n  buttons.appendChild(contactButton);\r\n\r\n  const navText = createE('div', false, 'nav-text');\r\n  navText.appendChild(createE('h1', 'Hilton Tashkent City'));\r\n  navText.appendChild(createE('h3', 'City 21 Pan Asian Restaurant'));\r\n  nav.appendChild(navText);\r\n\r\n  nav.appendChild(buttons);\r\n\r\n  return nav;\r\n}\r\n\r\nfunction createMain() {\r\n  const main = document.createElement('main');\r\n  main.classList.add('main');\r\n  main.setAttribute('id', 'main');\r\n  return main;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = createE('footer');\r\n  const footerDiv = createE('div', 'Copyright © 2021 Sarvar Khalimov');\r\n  const linkIcon1 = createE('a', '', 'icon-link', 'https://github.com/SarvarKh');\r\n  linkIcon1.setAttribute('target', '_blank');\r\n  const icon1 = document.createElement('i');\r\n  icon1.classList.add('fab');\r\n  icon1.classList.add('fa-github');\r\n\r\n  const linkIcon2 = createE('a', '', 'icon-link', 'https://www.linkedin.com/in/sarvar-khalimov/');\r\n  linkIcon2.setAttribute('target', '_blank');\r\n  const icon2 = document.createElement('i');\r\n  icon2.classList.add('fab');\r\n  icon2.classList.add('fa-linkedin');\r\n\r\n  const linkIcon3 = createE('a', '', 'icon-link', 'https://sarvarkh.github.io/portfolio/');\r\n  linkIcon3.setAttribute('target', '_blank');\r\n  const icon3 = document.createElement('i');\r\n  icon3.classList.add('fas');\r\n  icon3.classList.add('fa-folder-open');\r\n\r\n  linkIcon1.appendChild(icon1);\r\n  linkIcon2.appendChild(icon2);\r\n  linkIcon3.appendChild(icon3);\r\n  footerDiv.appendChild(linkIcon1);\r\n  footerDiv.appendChild(linkIcon2);\r\n  footerDiv.appendChild(linkIcon3);\r\n  footer.appendChild(footerDiv);\r\n\r\n  return footer;\r\n}\r\n\r\nfunction start() {\r\n  const content = document.getElementById('content');\r\n\r\n  content.appendChild(createHeader());\r\n  content.appendChild(createMain());\r\n  content.appendChild(createFooter());\r\n\r\n  setActiveButton(document.querySelector('.nav-btn'));\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);\n\n//# sourceURL=webpack://restaurant-page/./src/page-loader.js?");

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