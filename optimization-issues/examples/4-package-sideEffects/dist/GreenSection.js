"use strict";
(self["webpackChunk_4_package_sideeffects"] = self["webpackChunk_4_package_sideeffects"] || []).push([["GreenSection"],{

/***/ "./src/components/Buttons/GreenButton/GreenButton.js":
/*!***********************************************************!*\
  !*** ./src/components/Buttons/GreenButton/GreenButton.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreenButton": () => (/* binding */ GreenButton)
/* harmony export */ });
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ "./src/components/Buttons/Button/Button.js");
/* harmony import */ var _GreenButton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GreenButton.css */ "./src/components/Buttons/GreenButton/GreenButton.css");


function GreenButton(props) {
  return /*#__PURE__*/React.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "GreenButton"
  }, props.children);
}

/***/ }),

/***/ "./src/components/Sections/GreenSection/GreenSection.js":
/*!**************************************************************!*\
  !*** ./src/components/Sections/GreenSection/GreenSection.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Texts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Texts */ "./src/components/Texts/GreenText/GreenText.js");
/* harmony import */ var _Buttons_GreenButton_GreenButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Buttons/GreenButton/GreenButton */ "./src/components/Buttons/GreenButton/GreenButton.js");
/* harmony import */ var _tools_numberFunctions_numberFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../tools/numberFunctions/numberFunctions */ "./src/tools/numberFunctions/numberFunctions.js");



function GreenSection() {
  const tenNum = (0,_tools_numberFunctions_numberFunctions__WEBPACK_IMPORTED_MODULE_0__.getTenNumber)();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Texts__WEBPACK_IMPORTED_MODULE_1__.GreenText, null, "Green text component (Indirect import - Barrel)"), /*#__PURE__*/React.createElement(_Texts__WEBPACK_IMPORTED_MODULE_1__.GreenText, null, "Green ten number: ", tenNum), /*#__PURE__*/React.createElement(_Buttons_GreenButton_GreenButton__WEBPACK_IMPORTED_MODULE_2__.GreenButton, null, "Green button component (Direct import)"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GreenSection);

/***/ }),

/***/ "./src/components/Texts/GreenText/GreenText.js":
/*!*****************************************************!*\
  !*** ./src/components/Texts/GreenText/GreenText.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreenText": () => (/* binding */ GreenText)
/* harmony export */ });
/* harmony import */ var _Text_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text/Text */ "./src/components/Texts/Text/Text.js");
/* harmony import */ var _GreenText_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GreenText.css */ "./src/components/Texts/GreenText/GreenText.css");


function GreenText(props) {
  return /*#__PURE__*/React.createElement(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.Text, {
    className: "GreenText"
  }, props.children);
}

/***/ }),

/***/ "./src/components/Buttons/GreenButton/GreenButton.css":
/*!************************************************************!*\
  !*** ./src/components/Buttons/GreenButton/GreenButton.css ***!
  \************************************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Texts/GreenText/GreenText.css":
/*!******************************************************!*\
  !*** ./src/components/Texts/GreenText/GreenText.css ***!
  \******************************************************/
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ })

}]);