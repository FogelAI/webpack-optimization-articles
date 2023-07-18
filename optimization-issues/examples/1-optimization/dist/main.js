/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Sections_GreenSection_GreenSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Sections/GreenSection/GreenSection */ "./src/components/Sections/GreenSection/GreenSection.js");
/* harmony import */ var _components_Sections_RedSection_RedSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Sections/RedSection/RedSection */ "./src/components/Sections/RedSection/RedSection.js");
/* harmony import */ var _components_Strongs_BlueStrong_BlueStrong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Strongs/BlueStrong/BlueStrong */ "./src/components/Strongs/BlueStrong/BlueStrong.js");



function App() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_Strongs_BlueStrong_BlueStrong__WEBPACK_IMPORTED_MODULE_0__.BlueStrong, null, "Blue strong component (Direct Import)"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(_components_Sections_GreenSection_GreenSection__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(_components_Sections_RedSection_RedSection__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/Buttons/Button/Button.js":
/*!*************************************************!*\
  !*** ./src/components/Buttons/Button/Button.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });

function Button(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: "Button " + props.className
  }, props.children);
}

/***/ }),

/***/ "./src/components/Buttons/GreenButton/GreenButton.js":
/*!***********************************************************!*\
  !*** ./src/components/Buttons/GreenButton/GreenButton.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreenButton": () => (/* binding */ GreenButton)
/* harmony export */ });
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Buttons/Button/Button.js");


function GreenButton(props) {
  return /*#__PURE__*/React.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Button, {
    className: "GreenButton"
  }, props.children);
}

/***/ }),

/***/ "./src/components/Buttons/RedButton/RedButton.js":
/*!*******************************************************!*\
  !*** ./src/components/Buttons/RedButton/RedButton.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedButton": () => (/* binding */ RedButton)
/* harmony export */ });
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Buttons/Button/Button.js");


function RedButton(props) {
  return /*#__PURE__*/React.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_0__.Button, {
    className: "RedButton"
  }, props.children);
}

/***/ }),

/***/ "./src/components/Sections/GreenSection/GreenSection.js":
/*!**************************************************************!*\
  !*** ./src/components/Sections/GreenSection/GreenSection.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Texts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Texts */ "./src/components/Texts/index.js");
/* harmony import */ var _Buttons_GreenButton_GreenButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Buttons/GreenButton/GreenButton */ "./src/components/Buttons/GreenButton/GreenButton.js");
/* harmony import */ var _tools_numberFunctions_numberFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../tools/numberFunctions/numberFunctions */ "./src/tools/numberFunctions/numberFunctions.js");



function GreenSection() {
  const tenNum = (0,_tools_numberFunctions_numberFunctions__WEBPACK_IMPORTED_MODULE_0__.getTenNumber)();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Texts__WEBPACK_IMPORTED_MODULE_1__.GreenText, null, "Green text component (Indirect import - Barrel)"), /*#__PURE__*/React.createElement(_Texts__WEBPACK_IMPORTED_MODULE_1__.GreenText, null, "Green ten number: ", tenNum), /*#__PURE__*/React.createElement(_Buttons_GreenButton_GreenButton__WEBPACK_IMPORTED_MODULE_2__.GreenButton, null, "Green button component (Direct import)"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GreenSection);

/***/ }),

/***/ "./src/components/Sections/RedSection/RedSection.js":
/*!**********************************************************!*\
  !*** ./src/components/Sections/RedSection/RedSection.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Texts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Texts */ "./src/components/Texts/index.js");
/* harmony import */ var _Buttons_RedButton_RedButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Buttons/RedButton/RedButton */ "./src/components/Buttons/RedButton/RedButton.js");
/* harmony import */ var _tools_numberFunctions_numberFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../tools/numberFunctions/numberFunctions */ "./src/tools/numberFunctions/numberFunctions.js");



function RedSection() {
  const thousandNum = (0,_tools_numberFunctions_numberFunctions__WEBPACK_IMPORTED_MODULE_0__.getThousandNumber)();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Texts__WEBPACK_IMPORTED_MODULE_1__.RedText, null, "Red text component (Indirect import - Barrel)"), /*#__PURE__*/React.createElement(_Texts__WEBPACK_IMPORTED_MODULE_1__.RedText, null, "Red thousand number: ", thousandNum), /*#__PURE__*/React.createElement(_Buttons_RedButton_RedButton__WEBPACK_IMPORTED_MODULE_2__.RedButton, null, "Red button component (Direct import)"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedSection);

/***/ }),

/***/ "./src/components/Strongs/BlueStrong/BlueStrong.js":
/*!*********************************************************!*\
  !*** ./src/components/Strongs/BlueStrong/BlueStrong.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlueStrong": () => (/* binding */ BlueStrong)
/* harmony export */ });
/* harmony import */ var _Strong_Strong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Strong/Strong */ "./src/components/Strongs/Strong/Strong.js");


function BlueStrong(props) {
  return /*#__PURE__*/React.createElement(_Strong_Strong__WEBPACK_IMPORTED_MODULE_0__.Strong, {
    className: "BlueStrong"
  }, props.children);
}

/***/ }),

/***/ "./src/components/Strongs/Strong/Strong.js":
/*!*************************************************!*\
  !*** ./src/components/Strongs/Strong/Strong.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strong": () => (/* binding */ Strong)
/* harmony export */ });

function Strong(props) {
  return /*#__PURE__*/React.createElement("strong", {
    className: "Strong " + props.className
  }, props.children);
}

/***/ }),

/***/ "./src/components/Texts/GreenText/GreenText.js":
/*!*****************************************************!*\
  !*** ./src/components/Texts/GreenText/GreenText.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreenText": () => (/* binding */ GreenText)
/* harmony export */ });
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Text/Text */ "./src/components/Texts/Text/Text.js");


function GreenText(props) {
  return /*#__PURE__*/React.createElement(_Text_Text__WEBPACK_IMPORTED_MODULE_0__.Text, {
    className: "GreenText"
  }, props.children);
}

/***/ }),

/***/ "./src/components/Texts/RedText/RedText.js":
/*!*************************************************!*\
  !*** ./src/components/Texts/RedText/RedText.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedText": () => (/* binding */ RedText)
/* harmony export */ });
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Text/Text */ "./src/components/Texts/Text/Text.js");


function RedText(props) {
  return /*#__PURE__*/React.createElement(_Text_Text__WEBPACK_IMPORTED_MODULE_0__.Text, {
    className: "RedText"
  }, props.children);
}

/***/ }),

/***/ "./src/components/Texts/Text/Text.js":
/*!*******************************************!*\
  !*** ./src/components/Texts/Text/Text.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": () => (/* binding */ Text)
/* harmony export */ });

function Text(props) {
  return /*#__PURE__*/React.createElement("p", {
    className: "Text " + props.className
  }, props.children);
}

/***/ }),

/***/ "./src/components/Texts/index.js":
/*!***************************************!*\
  !*** ./src/components/Texts/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreenText": () => (/* reexport safe */ _GreenText_GreenText__WEBPACK_IMPORTED_MODULE_1__.GreenText),
/* harmony export */   "RedText": () => (/* reexport safe */ _RedText_RedText__WEBPACK_IMPORTED_MODULE_0__.RedText)
/* harmony export */ });
/* harmony import */ var _RedText_RedText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedText/RedText */ "./src/components/Texts/RedText/RedText.js");
/* harmony import */ var _GreenText_GreenText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GreenText/GreenText */ "./src/components/Texts/GreenText/GreenText.js");





/***/ }),

/***/ "./src/tools/numberFunctions/numberFunctions.js":
/*!******************************************************!*\
  !*** ./src/tools/numberFunctions/numberFunctions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTenNumber": () => (/* binding */ getTenNumber),
/* harmony export */   "getThousandNumber": () => (/* binding */ getThousandNumber)
/* harmony export */ });
/* unused harmony export getHundredNumber */
function getTenNumber() {
  return 10;
}
function getHundredNumber() {
  return 100;
}
function getThousandNumber() {
  return 1000;
}

/***/ }),

/***/ "react-dom/client":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");



// Render your React component instead
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_1__["default"], null));
})();

/******/ })()
;