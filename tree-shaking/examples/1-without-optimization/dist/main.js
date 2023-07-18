/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Texts_GreenText_GreenText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Texts/GreenText/GreenText */ "./src/components/Texts/GreenText/GreenText.js");
/* harmony import */ var _components_Texts_RedText_RedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Texts/RedText/RedText */ "./src/components/Texts/RedText/RedText.js");
/* harmony import */ var _tools_numberFunctions_numberFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/numberFunctions/numberFunctions */ "./src/tools/numberFunctions/numberFunctions.js");
/* harmony import */ var _tools_unusedModule_unusedModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/unusedModule/unusedModule */ "./src/tools/unusedModule/unusedModule.js");
/* harmony import */ var _tools_sideEffectsModule_sideEffectsModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/sideEffectsModule/sideEffectsModule */ "./src/tools/sideEffectsModule/sideEffectsModule.js");
/* harmony import */ var _tools_sideEffectsModule_sideEffectsModule__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tools_sideEffectsModule_sideEffectsModule__WEBPACK_IMPORTED_MODULE_4__);





function App() {
  const hundredNumber = (0,_tools_numberFunctions_numberFunctions__WEBPACK_IMPORTED_MODULE_2__.getHundredNumber)();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_components_Texts_GreenText_GreenText__WEBPACK_IMPORTED_MODULE_0__.GreenText, null, "Number in green: ", hundredNumber), /*#__PURE__*/React.createElement(_components_Texts_RedText_RedText__WEBPACK_IMPORTED_MODULE_1__.RedText, null, "Text in red"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/Texts/GreenText/GreenText.js":
/*!*****************************************************!*\
  !*** ./src/components/Texts/GreenText/GreenText.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreenText": () => (/* binding */ GreenText)
/* harmony export */ });
/* harmony import */ var _GreenText_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GreenText.css */ "./src/components/Texts/GreenText/GreenText.css");

function GreenText(props) {
  return /*#__PURE__*/React.createElement("p", {
    className: "GreenText"
  }, props.children);
}

/***/ }),

/***/ "./src/components/Texts/RedText/RedText.js":
/*!*************************************************!*\
  !*** ./src/components/Texts/RedText/RedText.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedText": () => (/* binding */ RedText)
/* harmony export */ });
/* harmony import */ var _RedText_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedText.css */ "./src/components/Texts/RedText/RedText.css");

function RedText(props) {
  return /*#__PURE__*/React.createElement("p", {
    className: "RedText"
  }, props.children);
}

/***/ }),

/***/ "./src/tools/numberFunctions/numberFunctions.js":
/*!******************************************************!*\
  !*** ./src/tools/numberFunctions/numberFunctions.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHundredNumber": () => (/* binding */ getHundredNumber),
/* harmony export */   "getTenNumber": () => (/* binding */ getTenNumber),
/* harmony export */   "getThousandNumber": () => (/* binding */ getThousandNumber)
/* harmony export */ });
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

/***/ "./src/tools/sideEffectsModule/sideEffectsModule.js":
/*!**********************************************************!*\
  !*** ./src/tools/sideEffectsModule/sideEffectsModule.js ***!
  \**********************************************************/
/***/ (() => {

window.sideEffects = true;

/***/ }),

/***/ "./src/tools/unusedModule/unusedModule.js":
/*!************************************************!*\
  !*** ./src/tools/unusedModule/unusedModule.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUnusedModuleButton": () => (/* binding */ getUnusedModuleButton),
/* harmony export */   "getUnusedModuleText": () => (/* binding */ getUnusedModuleText)
/* harmony export */ });
function getUnusedModuleText() {
  return "imported but unused module";
}
function getUnusedModuleButton() {
  return "imported but unused module";
}

/***/ }),

/***/ "./src/components/Texts/GreenText/GreenText.css":
/*!******************************************************!*\
  !*** ./src/components/Texts/GreenText/GreenText.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Texts/RedText/RedText.css":
/*!**************************************************!*\
  !*** ./src/components/Texts/RedText/RedText.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react-dom/client":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/client */ "react-dom/client");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");



// Render your React component instead
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_0__.createRoot)(document.getElementById("app"));
root.render( /*#__PURE__*/React.createElement(_App__WEBPACK_IMPORTED_MODULE_1__["default"], null));
})();

/******/ })()
;