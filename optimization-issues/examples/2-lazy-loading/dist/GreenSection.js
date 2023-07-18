"use strict";
(self["webpackChunk_2_lazy_loading"] = self["webpackChunk_2_lazy_loading"] || []).push([["GreenSection"],{

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

/***/ "./src/components/Sections/GreenSection/GreenSection.js":
/*!**************************************************************!*\
  !*** ./src/components/Sections/GreenSection/GreenSection.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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

/***/ })

}]);