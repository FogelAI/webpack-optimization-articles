"use strict";
(self["webpackChunk_6_function_per_module"] = self["webpackChunk_6_function_per_module"] || []).push([["GreenSection"],{

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
/* harmony import */ var D_Users_Ori_Documents_VscodeProjects_myFirstProject_webpack_optimization_issues_examples_6_function_per_module_src_components_Texts_GreenText_GreenText_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/components/Texts/GreenText/GreenText.js */ "./src/components/Texts/GreenText/GreenText.js");
/* harmony import */ var _Buttons_GreenButton_GreenButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Buttons/GreenButton/GreenButton */ "./src/components/Buttons/GreenButton/GreenButton.js");
/* harmony import */ var D_Users_Ori_Documents_VscodeProjects_myFirstProject_webpack_optimization_issues_examples_6_function_per_module_src_tools_numberFunctions_getTenNumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/tools/numberFunctions/getTenNumber.js */ "./src/tools/numberFunctions/getTenNumber.js");



function GreenSection() {
  const tenNum = (0,D_Users_Ori_Documents_VscodeProjects_myFirstProject_webpack_optimization_issues_examples_6_function_per_module_src_tools_numberFunctions_getTenNumber_js__WEBPACK_IMPORTED_MODULE_0__.getTenNumber)();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(D_Users_Ori_Documents_VscodeProjects_myFirstProject_webpack_optimization_issues_examples_6_function_per_module_src_components_Texts_GreenText_GreenText_js__WEBPACK_IMPORTED_MODULE_1__.GreenText, null, "Green text component (Indirect import - Barrel)"), /*#__PURE__*/React.createElement(D_Users_Ori_Documents_VscodeProjects_myFirstProject_webpack_optimization_issues_examples_6_function_per_module_src_components_Texts_GreenText_GreenText_js__WEBPACK_IMPORTED_MODULE_1__.GreenText, null, "Green ten number: ", tenNum), /*#__PURE__*/React.createElement(_Buttons_GreenButton_GreenButton__WEBPACK_IMPORTED_MODULE_2__.GreenButton, null, "Green button component (Direct import)"));
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

/***/ "./src/tools/numberFunctions/getTenNumber.js":
/*!***************************************************!*\
  !*** ./src/tools/numberFunctions/getTenNumber.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTenNumber": () => (/* binding */ getTenNumber)
/* harmony export */ });
function getTenNumber() {
  return 10;
}

/***/ })

}]);