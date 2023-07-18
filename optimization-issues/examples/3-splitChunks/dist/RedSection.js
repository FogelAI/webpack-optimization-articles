"use strict";
(self["webpackChunk_3_splitchunks"] = self["webpackChunk_3_splitchunks"] || []).push([["RedSection"],{

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

/***/ "./src/components/Sections/RedSection/RedSection.js":
/*!**********************************************************!*\
  !*** ./src/components/Sections/RedSection/RedSection.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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

/***/ })

}]);