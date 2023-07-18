"use strict";
(self["webpackChunk_5_babel_plugin"] = self["webpackChunk_5_babel_plugin"] || []).push([["GreenSection.RedSection"],{

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