/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/carousel.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/carousel.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*///////////////////////////////////////////////*/\n/* CAROUSEL */\n/*///////////////////////////////////////////////*/\n.carousel {\n  --center-offset: var(--project-card-dim);\n  display: grid;\n  position: relative;\n  grid-template: 300px 1fr / 1fr;\n  width: 100%;\n}\n\n.carousel>.slider {\n  --column-gap: 10px;\n\n  display: flex;\n  position: absolute;\n\n  left: calc(50% - calc(calc(var(--column-gap) * 2) + calc(var(--center-offset) / 2)));\n\n  grid-template: 1fr / 1fr;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  /* overflow: hidden; */\n  align-items: center;\n  column-gap: var(--column-gap);\n\n  transition: left 0.2s ease-in-out;\n}\n\n.carousel>.hud {\n  display: flex;\n  justify-content: center;\n  font-family: 'Courier New', Courier, monospace;\n  letter-spacing: 1.2rem;\n  margin: 10px 0px;\n  align-items: flex-end;\n}\n\n.carousel>.hud>div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.carousel>.hud>div.current {\n  color: red;\n}\n\n.carousel>.controls {\n  display: flex;\n  justify-content: space-around;\n}\n\n.carousel>.controls>div {\n  border: 3px solid red;\n  background-color: goldenrod;\n  width: 100px;\n  text-align: center;\n}\n\n.carousel>.controls div:hover {\n  background-color: aqua;\n}\n\n.carousel>.slider>.current {\n  /* margin: 0px 50px; */\n}\n\n\n/* .carousel>.view>.carousel-image>img {\n  max-height: 100%;\n  max-width: 100%;\n  margin: 0px;\n}\n\n.carousel>.view>.carousel-image.off-left {\n  transform: translateX(-2000px);\n  transition: transform 300ms ease-in-out;\n}\n\n.carousel>.view>.carousel-image.off-right {\n  transform: translateX(2000px);\n  transition: transform 300ms ease-in-out;\n} */\n", "",{"version":3,"sources":["webpack://./src/carousel.css"],"names":[],"mappings":"AAAA,kDAAkD;AAClD,aAAa;AACb,kDAAkD;AAClD;EACE,wCAAwC;EACxC,aAAa;EACb,kBAAkB;EAClB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,kBAAkB;;EAElB,aAAa;EACb,kBAAkB;;EAElB,oFAAoF;;EAEpF,wBAAwB;EACxB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;;EAE7B,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,8CAA8C;EAC9C,sBAAsB;EACtB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;;AAGA;;;;;;;;;;;;;;GAcG","sourcesContent":["/*///////////////////////////////////////////////*/\n/* CAROUSEL */\n/*///////////////////////////////////////////////*/\n.carousel {\n  --center-offset: var(--project-card-dim);\n  display: grid;\n  position: relative;\n  grid-template: 300px 1fr / 1fr;\n  width: 100%;\n}\n\n.carousel>.slider {\n  --column-gap: 10px;\n\n  display: flex;\n  position: absolute;\n\n  left: calc(50% - calc(calc(var(--column-gap) * 2) + calc(var(--center-offset) / 2)));\n\n  grid-template: 1fr / 1fr;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  /* overflow: hidden; */\n  align-items: center;\n  column-gap: var(--column-gap);\n\n  transition: left 0.2s ease-in-out;\n}\n\n.carousel>.hud {\n  display: flex;\n  justify-content: center;\n  font-family: 'Courier New', Courier, monospace;\n  letter-spacing: 1.2rem;\n  margin: 10px 0px;\n  align-items: flex-end;\n}\n\n.carousel>.hud>div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.carousel>.hud>div.current {\n  color: red;\n}\n\n.carousel>.controls {\n  display: flex;\n  justify-content: space-around;\n}\n\n.carousel>.controls>div {\n  border: 3px solid red;\n  background-color: goldenrod;\n  width: 100px;\n  text-align: center;\n}\n\n.carousel>.controls div:hover {\n  background-color: aqua;\n}\n\n.carousel>.slider>.current {\n  /* margin: 0px 50px; */\n}\n\n\n/* .carousel>.view>.carousel-image>img {\n  max-height: 100%;\n  max-width: 100%;\n  margin: 0px;\n}\n\n.carousel>.view>.carousel-image.off-left {\n  transform: translateX(-2000px);\n  transition: transform 300ms ease-in-out;\n}\n\n.carousel>.view>.carousel-image.off-right {\n  transform: translateX(2000px);\n  transition: transform 300ms ease-in-out;\n} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/AnonymousPro-Regular.ttf */ "./src/fonts/AnonymousPro-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/AnonymousPro-Bold.ttf */ "./src/fonts/AnonymousPro-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/AmaticSC-Regular.ttf */ "./src/fonts/AmaticSC-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/AmaticSC-Bold.ttf */ "./src/fonts/AmaticSC-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --font-standard: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    --color-bg: black;\n    --padding-vert: 10px;\n    --padding-hori: 10px;\n    --project-card-dim: 250px;\n    --font-size: 11pt;\n}\n\n/*///////////////////////////////////////////////*/\n/* CUSTOM FONTS */\n/*///////////////////////////////////////////////*/\n\n@font-face {\n    font-family: anon;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: anon-bold;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n    font-family: amatic;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n@font-face {\n    font-family: amatic-bold;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n/*///////////////////////////////////////////////*/\n/* RESETS */\n/*///////////////////////////////////////////////*/\n\n* {\n    border: 0px solid red;\n    color: white;\n    padding: 0;\n    margin: 0;\n    font-family: var(--font-standard);\n    font-size: var(--font-size);\n}\n\nbody {\n    background-color: var(--color-bg);\n}\n\n/*///////////////////////////////////////////////*/\n/* SECTIONS */\n/*///////////////////////////////////////////////*/\n\n.viewport {\n    padding: var(--padding-hori) var(--padding-hori);\n}\n\n.viewport {\n    display: grid;\n    /* grid-template: calc(4rem + calc(2*var(--padding-vert))) minmax(100px, 3fr) calc(var(--project-card-dim) + calc(var(--padding-hori) * 2)) / 1fr; */\n    justify-content: space-between;\n    grid-template: 1fr 5fr auto/ 1fr;\n    min-height: calc(100vh - 20px);\n}\n\n.title {\n    font-family: amatic-bold;\n    font-size: calc(4*1rem);\n    margin-bottom: auto;\n}\n\n.looking-glass {\n    overflow: auto;\n}\n\n.projects {\n    display: grid;\n    justify-content: stretch;\n    grid-template: var(--project-card-dim) / repeat(5, var(--project-card-dim));\n    grid-auto-columns: var(--project-card-dim);\n    grid-auto-flow: column;\n    gap: 25px\n}\n\n/*///////////////////////////////////////////////*/\n/* PROJECT CARDS */\n/*///////////////////////////////////////////////*/\n\n.card {\n    /* height: var(--project-card-dim); */\n    /* box-sizing: border-box; */\n    background: #222;\n    padding: 5px;\n    width: 250px;\n    height: 250px;\n    font-size: 0.8rem;\n    border: 1px solid rgb(77, 76, 76);\n    transition: 0.5s cubic-bezier(.18, .89, .32, 1.28);\n    box-shadow: 4px 4px 10px rgb(126, 125, 125);\n    border-radius: 5px;\n    overflow: visible;\n}\n\n.card:hover {\n    border: 2px solid white;\n    transform: scale(120%, 120%) translatey(-50px);\n    z-index: 1;\n}\n\n.card-img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    float: left;\n    width: calc(var(--project-card-dim) / 2.5);\n    height: calc(var(--project-card-dim) / 2.5);\n    background-position: center;\n    background-size: calc(var(--project-card-dim) / 2.5) calc(var(--project-card-dim) / 2.5);\n    border-radius: 7px;\n    margin: 5px 5px 5px 0px;\n}\n\n.card-img>img {\n\n    border-radius: 5px;\n    margin: 5px;\n\n}\n\n.card-title {\n    font-size: 1rem;\n    text-transform: uppercase;\n    text-align: center;\n    padding-bottom: 10px;\n    font-family: anon;\n    font-weight: bolder;\n    letter-spacing: 0.3rem;\n}\n\n/*///////////////////////////////////////////////*/\n/* MEDIA QUERIES */\n/*///////////////////////////////////////////////*/\n\n@media screen and (max-width: 1300px) {\n    .title {\n        margin-bottom: 0px;\n    }\n\n    .projects {\n        grid-template-columns: repeat(3, var(--project-card-dim));\n    }\n}\n\n@media screen and (max-width: 800px) {\n    .title {\n        margin-bottom: 0px;\n    }\n\n    .projects {\n        grid-template-columns: repeat(2, var(--project-card-dim));\n\n    }\n}\n\n/* @media screen and (max-width: 600px) {\n    .title {\n        margin-bottom: 0px;\n    }\n\n    .projects {\n        grid-template-columns: repeat(2, var(--project-card-dim));\n    }\n} */\n\n@media screen and (max-width: 600px) {\n    .title {\n        margin-bottom: 0px;\n    }\n\n    .projects {\n        grid-template-columns: var(--project-card-dim);\n    }\n\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,8EAA8E;IAC9E,iBAAiB;IACjB,oBAAoB;IACpB,oBAAoB;IACpB,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA,kDAAkD;AAClD,iBAAiB;AACjB,kDAAkD;;AAElD;IACI,iBAAiB;IACjB,4CAA4C;AAChD;;AAEA;IACI,sBAAsB;IACtB,4CAAyC;AAC7C;;AAEA;IACI,mBAAmB;IACnB,4CAAwC;AAC5C;;AAEA;IACI,wBAAwB;IACxB,4CAAqC;AACzC;;AAEA,kDAAkD;AAClD,WAAW;AACX,kDAAkD;;AAElD;IACI,qBAAqB;IACrB,YAAY;IACZ,UAAU;IACV,SAAS;IACT,iCAAiC;IACjC,2BAA2B;AAC/B;;AAEA;IACI,iCAAiC;AACrC;;AAEA,kDAAkD;AAClD,aAAa;AACb,kDAAkD;;AAElD;IACI,gDAAgD;AACpD;;AAEA;IACI,aAAa;IACb,oJAAoJ;IACpJ,8BAA8B;IAC9B,gCAAgC;IAChC,8BAA8B;AAClC;;AAEA;IACI,wBAAwB;IACxB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,2EAA2E;IAC3E,0CAA0C;IAC1C,sBAAsB;IACtB;AACJ;;AAEA,kDAAkD;AAClD,kBAAkB;AAClB,kDAAkD;;AAElD;IACI,qCAAqC;IACrC,4BAA4B;IAC5B,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,iCAAiC;IACjC,kDAAkD;IAClD,2CAA2C;IAC3C,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,8CAA8C;IAC9C,UAAU;AACd;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,0CAA0C;IAC1C,2CAA2C;IAC3C,2BAA2B;IAC3B,wFAAwF;IACxF,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;;IAEI,kBAAkB;IAClB,WAAW;;AAEf;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA,kDAAkD;AAClD,kBAAkB;AAClB,kDAAkD;;AAElD;IACI;QACI,kBAAkB;IACtB;;IAEA;QACI,yDAAyD;IAC7D;AACJ;;AAEA;IACI;QACI,kBAAkB;IACtB;;IAEA;QACI,yDAAyD;;IAE7D;AACJ;;AAEA;;;;;;;;GAQG;;AAEH;IACI;QACI,kBAAkB;IACtB;;IAEA;QACI,8CAA8C;IAClD;;AAEJ","sourcesContent":[":root {\n    --font-standard: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    --color-bg: black;\n    --padding-vert: 10px;\n    --padding-hori: 10px;\n    --project-card-dim: 250px;\n    --font-size: 11pt;\n}\n\n/*///////////////////////////////////////////////*/\n/* CUSTOM FONTS */\n/*///////////////////////////////////////////////*/\n\n@font-face {\n    font-family: anon;\n    src: url('./fonts/AnonymousPro-Regular.ttf');\n}\n\n@font-face {\n    font-family: anon-bold;\n    src: url('./fonts/AnonymousPro-Bold.ttf');\n}\n\n@font-face {\n    font-family: amatic;\n    src: url('./fonts/AmaticSC-Regular.ttf');\n}\n\n@font-face {\n    font-family: amatic-bold;\n    src: url('./fonts/AmaticSC-Bold.ttf');\n}\n\n/*///////////////////////////////////////////////*/\n/* RESETS */\n/*///////////////////////////////////////////////*/\n\n* {\n    border: 0px solid red;\n    color: white;\n    padding: 0;\n    margin: 0;\n    font-family: var(--font-standard);\n    font-size: var(--font-size);\n}\n\nbody {\n    background-color: var(--color-bg);\n}\n\n/*///////////////////////////////////////////////*/\n/* SECTIONS */\n/*///////////////////////////////////////////////*/\n\n.viewport {\n    padding: var(--padding-hori) var(--padding-hori);\n}\n\n.viewport {\n    display: grid;\n    /* grid-template: calc(4rem + calc(2*var(--padding-vert))) minmax(100px, 3fr) calc(var(--project-card-dim) + calc(var(--padding-hori) * 2)) / 1fr; */\n    justify-content: space-between;\n    grid-template: 1fr 5fr auto/ 1fr;\n    min-height: calc(100vh - 20px);\n}\n\n.title {\n    font-family: amatic-bold;\n    font-size: calc(4*1rem);\n    margin-bottom: auto;\n}\n\n.looking-glass {\n    overflow: auto;\n}\n\n.projects {\n    display: grid;\n    justify-content: stretch;\n    grid-template: var(--project-card-dim) / repeat(5, var(--project-card-dim));\n    grid-auto-columns: var(--project-card-dim);\n    grid-auto-flow: column;\n    gap: 25px\n}\n\n/*///////////////////////////////////////////////*/\n/* PROJECT CARDS */\n/*///////////////////////////////////////////////*/\n\n.card {\n    /* height: var(--project-card-dim); */\n    /* box-sizing: border-box; */\n    background: #222;\n    padding: 5px;\n    width: 250px;\n    height: 250px;\n    font-size: 0.8rem;\n    border: 1px solid rgb(77, 76, 76);\n    transition: 0.5s cubic-bezier(.18, .89, .32, 1.28);\n    box-shadow: 4px 4px 10px rgb(126, 125, 125);\n    border-radius: 5px;\n    overflow: visible;\n}\n\n.card:hover {\n    border: 2px solid white;\n    transform: scale(120%, 120%) translatey(-50px);\n    z-index: 1;\n}\n\n.card-img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    float: left;\n    width: calc(var(--project-card-dim) / 2.5);\n    height: calc(var(--project-card-dim) / 2.5);\n    background-position: center;\n    background-size: calc(var(--project-card-dim) / 2.5) calc(var(--project-card-dim) / 2.5);\n    border-radius: 7px;\n    margin: 5px 5px 5px 0px;\n}\n\n.card-img>img {\n\n    border-radius: 5px;\n    margin: 5px;\n\n}\n\n.card-title {\n    font-size: 1rem;\n    text-transform: uppercase;\n    text-align: center;\n    padding-bottom: 10px;\n    font-family: anon;\n    font-weight: bolder;\n    letter-spacing: 0.3rem;\n}\n\n/*///////////////////////////////////////////////*/\n/* MEDIA QUERIES */\n/*///////////////////////////////////////////////*/\n\n@media screen and (max-width: 1300px) {\n    .title {\n        margin-bottom: 0px;\n    }\n\n    .projects {\n        grid-template-columns: repeat(3, var(--project-card-dim));\n    }\n}\n\n@media screen and (max-width: 800px) {\n    .title {\n        margin-bottom: 0px;\n    }\n\n    .projects {\n        grid-template-columns: repeat(2, var(--project-card-dim));\n\n    }\n}\n\n/* @media screen and (max-width: 600px) {\n    .title {\n        margin-bottom: 0px;\n    }\n\n    .projects {\n        grid-template-columns: repeat(2, var(--project-card-dim));\n    }\n} */\n\n@media screen and (max-width: 600px) {\n    .title {\n        margin-bottom: 0px;\n    }\n\n    .projects {\n        grid-template-columns: var(--project-card-dim);\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/img/budgetKeeper-windowMonth.png":
/*!**********************************************!*\
  !*** ./src/img/budgetKeeper-windowMonth.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "bbc90890c2fdf9a6a5923ec48588f3e5.png");

/***/ }),

/***/ "./src/img/budgetKeeper-windowTransaction.png":
/*!****************************************************!*\
  !*** ./src/img/budgetKeeper-windowTransaction.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "46ef4ad18cd26532b2db502945f97751.png");

/***/ }),

/***/ "./src/img/budgetKeeper-windowYear.png":
/*!*********************************************!*\
  !*** ./src/img/budgetKeeper-windowYear.png ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b7ad90a43c8d5a81f1db93185815c8e8.png");

/***/ }),

/***/ "./src/img/checkers.png":
/*!******************************!*\
  !*** ./src/img/checkers.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ea4c326eb6914f8e578e3d8bc33c25d6.png");

/***/ }),

/***/ "./src/img/crasioCalculator.png":
/*!**************************************!*\
  !*** ./src/img/crasioCalculator.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2cef2cf3ad688b8b116feeb5857e6f0e.png");

/***/ }),

/***/ "./src/carousel.css":
/*!**************************!*\
  !*** ./src/carousel.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./carousel.css */ "./node_modules/css-loader/dist/cjs.js!./src/carousel.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_carousel_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCarousel": () => (/* binding */ createCarouselDotHud)
/* harmony export */ });
let position = 0;

function createCarouselDotHud(carouselElementArray) {
    const carousel = document.createElement('div');
    const slider = document.createElement('div');
    const hud = document.createElement('div');
    const controls = document.createElement('div');
    const controlPrev = document.createElement('div');
    const controlNext = document.createElement('div');

    carousel.className = 'carousel';
    slider.className = 'slider';
    hud.className = 'hud';
    controls.className = 'controls';
    controlPrev.className = 'control-prev';
    controlNext.className = 'control-next';

    controlPrev.textContent = 'Previous';
    controlNext.textContent = 'Next';

    for (let i = 0, displayFirst = true; i < carouselElementArray.length; i++) {
        const imgDot = document.createElement('div');
        imgDot.textContent = 'o';

        if (displayFirst) {
            displayFirst = false;
            imgDot.className = 'current';
            carouselElementArray[i].classList.add('current');
        } else {
            imgDot.className = 'off-right';
        }
        imgDot.addEventListener('click', () => slideTo(i));
        slider.appendChild(carouselElementArray[i]);
        hud.appendChild(imgDot);
    }

    controlPrev.addEventListener('click', slidePrev);
    controlNext.addEventListener('click', slideNext);

    controls.append(controlPrev, controlNext);
    carousel.append(slider, hud, controls);

    return carousel;
}


function slideTo(slideNumber) {
    position = slideNumber;
    /*
    set current
    advance the image to slideNumber
        sort classes
    advance the dot to slide slideNumber
        sort classes
    */
    // get carousel elements necessary for processing
    const carousel = document.querySelector('.carousel');
    const slider = carousel.querySelector('.slider');
    const cards = carousel.querySelectorAll('.slider .card');
    const dots = carousel.querySelectorAll('.hud>div');

    // capture positioning values
    const centerOffSet = convertPxValToNumber(getComputedStyle(carousel).getPropertyValue('--center-offset'));
    const leftValue = convertPxValToNumber(getComputedStyle(slider).left);

    // set new current slide & positioning
    let currentSlideIndex;
    let found = false;
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const dot = dots[i];
        // determine number of slides to move
        if (card.classList.contains('current') && !found) {
            found = true;
            currentSlideIndex = i;
        }

        // set new current slide
        // if (i === slideNumber) card.classList.add('current'); 
        // else card.classList.remove('current');

        if (i < slideNumber) {
            card.className = 'card'
            card.classList.remove('current');
            dot.classList.remove('current');
        } else if (i > slideNumber) {
            card.classList.remove('current');
            dot.classList.remove('current');
        } else if (i === slideNumber) {
            card.classList.add('current');
            dot.classList.add('current');
        }

    }
    const placesToMove = slideNumber - currentSlideIndex;
    const finalLeftVal = (leftValue - ((centerOffSet * placesToMove) + (placesToMove * (20 + 2))));
    // alert('left value: ' + leftValue + '\n' + 'final left value: ' + finalLeftVal);
    slider.style.left = (finalLeftVal) + 'px';




    function convertPxValToNumber(pixelValue) {
        if (typeof pixelValue !== 'string') throw Error("convertPxValToNumber can only take string parameters");
        if (pixelValue.length < 2) throw Error(`convertPxValToNumber must be minimumal length of 2 but was ${pixelValue.length}`);
        return parseInt(pixelValue.substring(0, pixelValue.length - 2));
    }
}

function slidePrev() { return slideTo(position - 1); }
function slideNext() { return slideTo(position + 1); }
/**
 * 
 * @param {'forwards' | 'backwards'} direction 
 * @param {boolean} bounce controls if the slideshow bounces direction when hitting end of slideshow
 * @param {number} internalInMs a positive number
 */
function slideShow(direction, bounce, internalInMs) {
    if ((direction !== 'forwards' && direction !== 'backwards' && direction !== undefined)
        || internalInMs < 0) {
        return;
    }
    const interval = internalInMs || 5000;
    const bouncing = bounce || false;

    let f = () => {
        self.sliding = setInterval(() => {
            console.log('forward');
            const response = self.slideNext();
            if (response === 'last') {
                clearInterval(self.sliding);
                if (bouncing) b();
            }
        }, interval);
    };

    let b = () => {
        self.sliding = setInterval(() => {
            console.log('backwards');
            const response = self.slidePrev();
            if (response === 'first') {
                clearInterval(self.sliding);
                if (bouncing) f();
            }
        }, interval);
    };

    if (direction === 'forwards') f();
    if (direction === 'backwards') b();
}
function stopSlideShow() {
    if (sliding) clearInterval(sliding);
}



/***/ }),

/***/ "./src/fonts/AmaticSC-Bold.ttf":
/*!*************************************!*\
  !*** ./src/fonts/AmaticSC-Bold.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f12c1d887cda2131ac83.ttf";

/***/ }),

/***/ "./src/fonts/AmaticSC-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/AmaticSC-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd9971162ff94dc53856.ttf";

/***/ }),

/***/ "./src/fonts/AnonymousPro-Bold.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/AnonymousPro-Bold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a722102835c269d44886.ttf";

/***/ }),

/***/ "./src/fonts/AnonymousPro-Regular.ttf":
/*!********************************************!*\
  !*** ./src/fonts/AnonymousPro-Regular.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7c1fd363699a9483f8f.ttf";

/***/ }),

/***/ "./src/cards.json":
/*!************************!*\
  !*** ./src/cards.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"0":{"title":"Crasio Calculator","text":"Crasio calculator is a simple web calculator that implements a simple calculator that respects order of operations (PEDMAS). It was initially an exersize of The Odin Project, which did not expect order of operations to be respected, that I went further with.","images":{"cardOrigin":"./img/crasioCalculator.png","cardPacked":"2cef2cf3ad688b8b116feeb5857e6f0e.png"}},"1":{"title":"Budget Keeper","text":"I was sick of all the bloated budgeting software I had tried so I decided to make my own. You enter what you spend and receive, and it keeps track. Implemented in Java, using an <em>sqlite3</em> database and <em>JavaFX</em> GUI","images":{"cardOrigin":"./img/budgetKeeper-windowYear.png","cardPacked":"ea4c326eb6914f8e578e3d8bc33c25d6.png"}},"2":{"title":"Checkers","text":"The first complex (?) program I ever made. Locally played 2-player Checkers. Enforces all rules. Implemented in Java, with a <em>Swing</em> GUI.","images":{"cardOrigin":"./img/checkers.png","cardPacked":"bbc90890c2fdf9a6a5923ec48588f3e5.png"}},"3":{"title":"Crasio Calculator","text":"Crasio calculator is a simple web calculator that implements a simple calculator that respects order of operations (PEDMAS). It was initially an exersize of The Odin Project, which did not expect order of operations to be respected, that I went further with.","images":{"cardOrigin":"./img/crasioCalculator.png","cardPacked":"2cef2cf3ad688b8b116feeb5857e6f0e.png"}},"4":{"title":"Budget Keeper","text":"I was sick of all the bloated budgeting software I had tried so I decided to make my own. You enter what you spend and receive, and it keeps track. Implemented in Java, using an <em>sqlite3</em> database and <em>JavaFX</em> GUI","images":{"cardOrigin":"./img/budgetKeeper-windowYear.png","cardPacked":"ea4c326eb6914f8e578e3d8bc33c25d6.png"}},"5":{"title":"Checkers","text":"The first complex (?) program I ever made. Locally played 2-player Checkers. Enforces all rules. Implemented in Java, with a <em>Swing</em> GUI.","images":{"cardOrigin":"./img/checkers.png","cardPacked":"bbc90890c2fdf9a6a5923ec48588f3e5.png"}},"6":{"title":"Crasio Calculator","text":"Crasio calculator is a simple web calculator that implements a simple calculator that respects order of operations (PEDMAS). It was initially an exersize of The Odin Project, which did not expect order of operations to be respected, that I went further with.","images":{"cardOrigin":"./img/crasioCalculator.png","cardPacked":"2cef2cf3ad688b8b116feeb5857e6f0e.png"}},"7":{"title":"Budget Keeper","text":"I was sick of all the bloated budgeting software I had tried so I decided to make my own. You enter what you spend and receive, and it keeps track. Implemented in Java, using an <em>sqlite3</em> database and <em>JavaFX</em> GUI","images":{"cardOrigin":"./img/budgetKeeper-windowYear.png","cardPacked":"ea4c326eb6914f8e578e3d8bc33c25d6.png"}},"8":{"title":"Checkers","text":"The first complex (?) program I ever made. Locally played 2-player Checkers. Enforces all rules. Implemented in Java, with a <em>Swing</em> GUI.","images":{"cardOrigin":"./img/checkers.png","cardPacked":"bbc90890c2fdf9a6a5923ec48588f3e5.png"}}}');

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _carousel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.css */ "./src/carousel.css");
/* harmony import */ var _img_budgetKeeper_windowMonth_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/budgetKeeper-windowMonth.png */ "./src/img/budgetKeeper-windowMonth.png");
/* harmony import */ var _img_budgetKeeper_windowTransaction_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/budgetKeeper-windowTransaction.png */ "./src/img/budgetKeeper-windowTransaction.png");
/* harmony import */ var _img_budgetKeeper_windowYear_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/budgetKeeper-windowYear.png */ "./src/img/budgetKeeper-windowYear.png");
/* harmony import */ var _img_checkers_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/checkers.png */ "./src/img/checkers.png");
/* harmony import */ var _img_crasioCalculator_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/crasioCalculator.png */ "./src/img/crasioCalculator.png");
/* harmony import */ var _cards_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cards.json */ "./src/cards.json");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousel */ "./src/carousel.js");
// styles


// images
/* eslint-disable no-unused-vars */





/* eslint-enable no-unused-vars */

// projects data from json




const projectsDiv = document.querySelector('.projects');

// (function init() {
//   // for (let obj of projects) {
//   //     buildCard(obj, projectsDiv);
//   // }
//   buildCards(projectsJson);
// }());

function buildCards(projectsJson) {
  const cards = [];
  for (const projectId in projectsJson) {
    cards.push(buildCard(projectsJson[projectId]));
  }
  return cards;
}

function buildCard(project) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = project.title;

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img');
  cardImg.src = project.images.cardPacked;

  const cardText = document.createElement('div');
  cardText.classList.add('card-text');
  cardText.innerHTML = project.text;

  card.appendChild(cardTitle);
  card.appendChild(cardImg);
  card.appendChild(cardText);
  // console.log(card.children);

  return card;
}

let x = (0,_carousel__WEBPACK_IMPORTED_MODULE_8__.createCarousel)(buildCards(_cards_json__WEBPACK_IMPORTED_MODULE_7__))
document.querySelector('.viewport').appendChild(x);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNzQjtBQUNFO0FBQ3hCO0FBQ0E7QUFDK0Q7QUFDWTtBQUNkO0FBQ3pCO0FBQ1E7QUFDNUM7O0FBRUE7QUFDd0M7O0FBRUk7O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFFBQVEseURBQWMsWUFBWSx3Q0FBWTtBQUM5QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jYXJvdXNlbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWcvYnVkZ2V0S2VlcGVyLXdpbmRvd01vbnRoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2J1ZGdldEtlZXBlci13aW5kb3dUcmFuc2FjdGlvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9idWRnZXRLZWVwZXItd2luZG93WWVhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jaGVja2Vycy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9jcmFzaW9DYWxjdWxhdG9yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY2Fyb3VzZWwuY3NzP2Q1YzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xcbi8qIENBUk9VU0VMICovXFxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXFxuLmNhcm91c2VsIHtcXG4gIC0tY2VudGVyLW9mZnNldDogdmFyKC0tcHJvamVjdC1jYXJkLWRpbSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMzAwcHggMWZyIC8gMWZyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJvdXNlbD4uc2xpZGVyIHtcXG4gIC0tY29sdW1uLWdhcDogMTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICBsZWZ0OiBjYWxjKDUwJSAtIGNhbGMoY2FsYyh2YXIoLS1jb2x1bW4tZ2FwKSAqIDIpICsgY2FsYyh2YXIoLS1jZW50ZXItb2Zmc2V0KSAvIDIpKSk7XFxuXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnI7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogdmFyKC0tY29sdW1uLWdhcCk7XFxuXFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jYXJvdXNlbD4uaHVkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBsZXR0ZXItc3BhY2luZzogMS4ycmVtO1xcbiAgbWFyZ2luOiAxMHB4IDBweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmNhcm91c2VsPi5odWQ+ZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbD4uaHVkPmRpdi5jdXJyZW50IHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5jYXJvdXNlbD4uY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uY2Fyb3VzZWw+LmNvbnRyb2xzPmRpdiB7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxuICB3aWR0aDogMTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbD4uY29udHJvbHMgZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5jYXJvdXNlbD4uc2xpZGVyPi5jdXJyZW50IHtcXG4gIC8qIG1hcmdpbjogMHB4IDUwcHg7ICovXFxufVxcblxcblxcbi8qIC5jYXJvdXNlbD4udmlldz4uY2Fyb3VzZWwtaW1hZ2U+aW1nIHtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmNhcm91c2VsPi52aWV3Pi5jYXJvdXNlbC1pbWFnZS5vZmYtbGVmdCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jYXJvdXNlbD4udmlldz4uY2Fyb3VzZWwtaW1hZ2Uub2ZmLXJpZ2h0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY2Fyb3VzZWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtEQUFrRDtBQUNsRCxhQUFhO0FBQ2Isa0RBQWtEO0FBQ2xEO0VBQ0Usd0NBQXdDO0VBQ3hDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLGtCQUFrQjs7RUFFbEIsb0ZBQW9GOztFQUVwRix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2Qjs7RUFFN0IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4Q0FBOEM7RUFDOUMsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7OztBQUdBOzs7Ozs7Ozs7Ozs7OztHQWNHXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xcbi8qIENBUk9VU0VMICovXFxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXFxuLmNhcm91c2VsIHtcXG4gIC0tY2VudGVyLW9mZnNldDogdmFyKC0tcHJvamVjdC1jYXJkLWRpbSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMzAwcHggMWZyIC8gMWZyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJvdXNlbD4uc2xpZGVyIHtcXG4gIC0tY29sdW1uLWdhcDogMTBweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICBsZWZ0OiBjYWxjKDUwJSAtIGNhbGMoY2FsYyh2YXIoLS1jb2x1bW4tZ2FwKSAqIDIpICsgY2FsYyh2YXIoLS1jZW50ZXItb2Zmc2V0KSAvIDIpKSk7XFxuXFxuICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnI7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sdW1uLWdhcDogdmFyKC0tY29sdW1uLWdhcCk7XFxuXFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jYXJvdXNlbD4uaHVkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBsZXR0ZXItc3BhY2luZzogMS4ycmVtO1xcbiAgbWFyZ2luOiAxMHB4IDBweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmNhcm91c2VsPi5odWQ+ZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbD4uaHVkPmRpdi5jdXJyZW50IHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5jYXJvdXNlbD4uY29udHJvbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uY2Fyb3VzZWw+LmNvbnRyb2xzPmRpdiB7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxuICB3aWR0aDogMTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbD4uY29udHJvbHMgZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5jYXJvdXNlbD4uc2xpZGVyPi5jdXJyZW50IHtcXG4gIC8qIG1hcmdpbjogMHB4IDUwcHg7ICovXFxufVxcblxcblxcbi8qIC5jYXJvdXNlbD4udmlldz4uY2Fyb3VzZWwtaW1hZ2U+aW1nIHtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmNhcm91c2VsPi52aWV3Pi5jYXJvdXNlbC1pbWFnZS5vZmYtbGVmdCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jYXJvdXNlbD4udmlldz4uY2Fyb3VzZWwtaW1hZ2Uub2ZmLXJpZ2h0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAwcHgpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcbn0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQW5vbnltb3VzUHJvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Bbm9ueW1vdXNQcm8tQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FtYXRpY1NDLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9mb250cy9BbWF0aWNTQy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1mb250LXN0YW5kYXJkOiAnTW9udHNlcnJhdCcsICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICAtLWNvbG9yLWJnOiBibGFjaztcXG4gICAgLS1wYWRkaW5nLXZlcnQ6IDEwcHg7XFxuICAgIC0tcGFkZGluZy1ob3JpOiAxMHB4O1xcbiAgICAtLXByb2plY3QtY2FyZC1kaW06IDI1MHB4O1xcbiAgICAtLWZvbnQtc2l6ZTogMTFwdDtcXG59XFxuXFxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXFxuLyogQ1VTVE9NIEZPTlRTICovXFxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBhbm9uO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYW5vbi1ib2xkO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYW1hdGljO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYW1hdGljLWJvbGQ7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG59XFxuXFxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXFxuLyogUkVTRVRTICovXFxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXFxuXFxuKiB7XFxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXN0YW5kYXJkKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmcpO1xcbn1cXG5cXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKi9cXG4vKiBTRUNUSU9OUyAqL1xcbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xcblxcbi52aWV3cG9ydCB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmctaG9yaSkgdmFyKC0tcGFkZGluZy1ob3JpKTtcXG59XFxuXFxuLnZpZXdwb3J0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZTogY2FsYyg0cmVtICsgY2FsYygyKnZhcigtLXBhZGRpbmctdmVydCkpKSBtaW5tYXgoMTAwcHgsIDNmcikgY2FsYyh2YXIoLS1wcm9qZWN0LWNhcmQtZGltKSArIGNhbGModmFyKC0tcGFkZGluZy1ob3JpKSAqIDIpKSAvIDFmcjsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgNWZyIGF1dG8vIDFmcjtcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIwcHgpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LWZhbWlseTogYW1hdGljLWJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg0KjFyZW0pO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbn1cXG5cXG4ubG9va2luZy1nbGFzcyB7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHZhcigtLXByb2plY3QtY2FyZC1kaW0pIC8gcmVwZWF0KDUsIHZhcigtLXByb2plY3QtY2FyZC1kaW0pKTtcXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IHZhcigtLXByb2plY3QtY2FyZC1kaW0pO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBnYXA6IDI1cHhcXG59XFxuXFxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXFxuLyogUFJPSkVDVCBDQVJEUyAqL1xcbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xcblxcbi5jYXJkIHtcXG4gICAgLyogaGVpZ2h0OiB2YXIoLS1wcm9qZWN0LWNhcmQtZGltKTsgKi9cXG4gICAgLyogYm94LXNpemluZzogYm9yZGVyLWJveDsgKi9cXG4gICAgYmFja2dyb3VuZDogIzIyMjtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNzcsIDc2LCA3Nik7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgY3ViaWMtYmV6aWVyKC4xOCwgLjg5LCAuMzIsIDEuMjgpO1xcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDEwcHggcmdiKDEyNiwgMTI1LCAxMjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUsIDEyMCUpIHRyYW5zbGF0ZXkoLTUwcHgpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2FyZC1pbWcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLXByb2plY3QtY2FyZC1kaW0pIC8gMi41KTtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLXByb2plY3QtY2FyZC1kaW0pIC8gMi41KTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNhbGModmFyKC0tcHJvamVjdC1jYXJkLWRpbSkgLyAyLjUpIGNhbGModmFyKC0tcHJvamVjdC1jYXJkLWRpbSkgLyAyLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIG1hcmdpbjogNXB4IDVweCA1cHggMHB4O1xcbn1cXG5cXG4uY2FyZC1pbWc+aW1nIHtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW46IDVweDtcXG5cXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBhbm9uO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xcbn1cXG5cXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKi9cXG4vKiBNRURJQSBRVUVSSUVTICovXFxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XFxuICAgIC50aXRsZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIHZhcigtLXByb2plY3QtY2FyZC1kaW0pKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAudGl0bGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCB2YXIoLS1wcm9qZWN0LWNhcmQtZGltKSk7XFxuXFxuICAgIH1cXG59XFxuXFxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdHMge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgdmFyKC0tcHJvamVjdC1jYXJkLWRpbSkpO1xcbiAgICB9XFxufSAqL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC50aXRsZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tcHJvamVjdC1jYXJkLWRpbSk7XFxuICAgIH1cXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4RUFBOEU7SUFDOUUsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQSxrREFBa0Q7QUFDbEQsaUJBQWlCO0FBQ2pCLGtEQUFrRDs7QUFFbEQ7SUFDSSxpQkFBaUI7SUFDakIsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNENBQXFDO0FBQ3pDOztBQUVBLGtEQUFrRDtBQUNsRCxXQUFXO0FBQ1gsa0RBQWtEOztBQUVsRDtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBLGtEQUFrRDtBQUNsRCxhQUFhO0FBQ2Isa0RBQWtEOztBQUVsRDtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixvSkFBb0o7SUFDcEosOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDJFQUEyRTtJQUMzRSwwQ0FBMEM7SUFDMUMsc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUEsa0RBQWtEO0FBQ2xELGtCQUFrQjtBQUNsQixrREFBa0Q7O0FBRWxEO0lBQ0kscUNBQXFDO0lBQ3JDLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxrREFBa0Q7SUFDbEQsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsOENBQThDO0lBQzlDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCwwQ0FBMEM7SUFDMUMsMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQix3RkFBd0Y7SUFDeEYsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQSxrREFBa0Q7QUFDbEQsa0JBQWtCO0FBQ2xCLGtEQUFrRDs7QUFFbEQ7SUFDSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHlEQUF5RDtJQUM3RDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSx5REFBeUQ7O0lBRTdEO0FBQ0o7O0FBRUE7Ozs7Ozs7O0dBUUc7O0FBRUg7SUFDSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLDhDQUE4QztJQUNsRDs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tZm9udC1zdGFuZGFyZDogJ01vbnRzZXJyYXQnLCAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgLS1jb2xvci1iZzogYmxhY2s7XFxuICAgIC0tcGFkZGluZy12ZXJ0OiAxMHB4O1xcbiAgICAtLXBhZGRpbmctaG9yaTogMTBweDtcXG4gICAgLS1wcm9qZWN0LWNhcmQtZGltOiAyNTBweDtcXG4gICAgLS1mb250LXNpemU6IDExcHQ7XFxufVxcblxcbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xcbi8qIENVU1RPTSBGT05UUyAqL1xcbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYW5vbjtcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvQW5vbnltb3VzUHJvLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYW5vbi1ib2xkO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9Bbm9ueW1vdXNQcm8tQm9sZC50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBhbWF0aWM7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0FtYXRpY1NDLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogYW1hdGljLWJvbGQ7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0FtYXRpY1NDLUJvbGQudHRmJyk7XFxufVxcblxcbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xcbi8qIFJFU0VUUyAqL1xcbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xcblxcbioge1xcbiAgICBib3JkZXI6IDBweCBzb2xpZCByZWQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zdGFuZGFyZCk7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcXG59XFxuXFxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXFxuLyogU0VDVElPTlMgKi9cXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKi9cXG5cXG4udmlld3BvcnQge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nLWhvcmkpIHZhcigtLXBhZGRpbmctaG9yaSk7XFxufVxcblxcbi52aWV3cG9ydCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGU6IGNhbGMoNHJlbSArIGNhbGMoMip2YXIoLS1wYWRkaW5nLXZlcnQpKSkgbWlubWF4KDEwMHB4LCAzZnIpIGNhbGModmFyKC0tcHJvamVjdC1jYXJkLWRpbSkgKyBjYWxjKHZhcigtLXBhZGRpbmctaG9yaSkgKiAyKSkgLyAxZnI7ICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDVmciBhdXRvLyAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHB4KTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IGFtYXRpYy1ib2xkO1xcbiAgICBmb250LXNpemU6IGNhbGMoNCoxcmVtKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG59XFxuXFxuLmxvb2tpbmctZ2xhc3Mge1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgICBncmlkLXRlbXBsYXRlOiB2YXIoLS1wcm9qZWN0LWNhcmQtZGltKSAvIHJlcGVhdCg1LCB2YXIoLS1wcm9qZWN0LWNhcmQtZGltKSk7XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiB2YXIoLS1wcm9qZWN0LWNhcmQtZGltKTtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgZ2FwOiAyNXB4XFxufVxcblxcbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xcbi8qIFBST0pFQ1QgQ0FSRFMgKi9cXG4vKi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vKi9cXG5cXG4uY2FyZCB7XFxuICAgIC8qIGhlaWdodDogdmFyKC0tcHJvamVjdC1jYXJkLWRpbSk7ICovXFxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXFxuICAgIGJhY2tncm91bmQ6ICMyMjI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDc3LCA3NiwgNzYpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGN1YmljLWJlemllciguMTgsIC44OSwgLjMyLCAxLjI4KTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IHJnYigxMjYsIDEyNSwgMTI1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMjAlLCAxMjAlKSB0cmFuc2xhdGV5KC01MHB4KTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmNhcmQtaW1nIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1wcm9qZWN0LWNhcmQtZGltKSAvIDIuNSk7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1wcm9qZWN0LWNhcmQtZGltKSAvIDIuNSk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjYWxjKHZhcigtLXByb2plY3QtY2FyZC1kaW0pIC8gMi41KSBjYWxjKHZhcigtLXByb2plY3QtY2FyZC1kaW0pIC8gMi41KTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBtYXJnaW46IDVweCA1cHggNXB4IDBweDtcXG59XFxuXFxuLmNhcmQtaW1nPmltZyB7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuXFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogYW5vbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXG59XFxuXFxuLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyovXFxuLyogTUVESUEgUVVFUklFUyAqL1xcbi8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8qL1xcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xcbiAgICAudGl0bGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCB2YXIoLS1wcm9qZWN0LWNhcmQtZGltKSk7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdHMge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgdmFyKC0tcHJvamVjdC1jYXJkLWRpbSkpO1xcblxcbiAgICB9XFxufVxcblxcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC50aXRsZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RzIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIHZhcigtLXByb2plY3QtY2FyZC1kaW0pKTtcXG4gICAgfVxcbn0gKi9cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAudGl0bGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0cyB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXByb2plY3QtY2FyZC1kaW0pO1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYmM5MDg5MGMyZmRmOWE2YTU5MjNlYzQ4NTg4ZjNlNS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDZlZjRhZDE4Y2QyNjUzMmIyZGI1MDI5NDVmOTc3NTEucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI3YWQ5MGE0M2M4ZDVhODFmMWRiOTMxODU4MTVjOGU4LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlYTRjMzI2ZWI2OTE0ZjhlNTc4ZTNkOGJjMzNjMjVkNi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmNlZjJjZjNhZDY4OGI4YjExNmZlZWI1ODU3ZTZmMGUucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nhcm91c2VsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY2Fyb3VzZWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibGV0IHBvc2l0aW9uID0gMDtcblxuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWxEb3RIdWQoY2Fyb3VzZWxFbGVtZW50QXJyYXkpIHtcbiAgICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGh1ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udHJvbFByZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250cm9sTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY2Fyb3VzZWwuY2xhc3NOYW1lID0gJ2Nhcm91c2VsJztcbiAgICBzbGlkZXIuY2xhc3NOYW1lID0gJ3NsaWRlcic7XG4gICAgaHVkLmNsYXNzTmFtZSA9ICdodWQnO1xuICAgIGNvbnRyb2xzLmNsYXNzTmFtZSA9ICdjb250cm9scyc7XG4gICAgY29udHJvbFByZXYuY2xhc3NOYW1lID0gJ2NvbnRyb2wtcHJldic7XG4gICAgY29udHJvbE5leHQuY2xhc3NOYW1lID0gJ2NvbnRyb2wtbmV4dCc7XG5cbiAgICBjb250cm9sUHJldi50ZXh0Q29udGVudCA9ICdQcmV2aW91cyc7XG4gICAgY29udHJvbE5leHQudGV4dENvbnRlbnQgPSAnTmV4dCc7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgZGlzcGxheUZpcnN0ID0gdHJ1ZTsgaSA8IGNhcm91c2VsRWxlbWVudEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGltZ0RvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbWdEb3QudGV4dENvbnRlbnQgPSAnbyc7XG5cbiAgICAgICAgaWYgKGRpc3BsYXlGaXJzdCkge1xuICAgICAgICAgICAgZGlzcGxheUZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbWdEb3QuY2xhc3NOYW1lID0gJ2N1cnJlbnQnO1xuICAgICAgICAgICAgY2Fyb3VzZWxFbGVtZW50QXJyYXlbaV0uY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW1nRG90LmNsYXNzTmFtZSA9ICdvZmYtcmlnaHQnO1xuICAgICAgICB9XG4gICAgICAgIGltZ0RvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNsaWRlVG8oaSkpO1xuICAgICAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxFbGVtZW50QXJyYXlbaV0pO1xuICAgICAgICBodWQuYXBwZW5kQ2hpbGQoaW1nRG90KTtcbiAgICB9XG5cbiAgICBjb250cm9sUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNsaWRlUHJldik7XG4gICAgY29udHJvbE5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzbGlkZU5leHQpO1xuXG4gICAgY29udHJvbHMuYXBwZW5kKGNvbnRyb2xQcmV2LCBjb250cm9sTmV4dCk7XG4gICAgY2Fyb3VzZWwuYXBwZW5kKHNsaWRlciwgaHVkLCBjb250cm9scyk7XG5cbiAgICByZXR1cm4gY2Fyb3VzZWw7XG59XG5cblxuZnVuY3Rpb24gc2xpZGVUbyhzbGlkZU51bWJlcikge1xuICAgIHBvc2l0aW9uID0gc2xpZGVOdW1iZXI7XG4gICAgLypcbiAgICBzZXQgY3VycmVudFxuICAgIGFkdmFuY2UgdGhlIGltYWdlIHRvIHNsaWRlTnVtYmVyXG4gICAgICAgIHNvcnQgY2xhc3Nlc1xuICAgIGFkdmFuY2UgdGhlIGRvdCB0byBzbGlkZSBzbGlkZU51bWJlclxuICAgICAgICBzb3J0IGNsYXNzZXNcbiAgICAqL1xuICAgIC8vIGdldCBjYXJvdXNlbCBlbGVtZW50cyBuZWNlc3NhcnkgZm9yIHByb2Nlc3NpbmdcbiAgICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbCcpO1xuICAgIGNvbnN0IHNsaWRlciA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXInKTtcbiAgICBjb25zdCBjYXJkcyA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXIgLmNhcmQnKTtcbiAgICBjb25zdCBkb3RzID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvckFsbCgnLmh1ZD5kaXYnKTtcblxuICAgIC8vIGNhcHR1cmUgcG9zaXRpb25pbmcgdmFsdWVzXG4gICAgY29uc3QgY2VudGVyT2ZmU2V0ID0gY29udmVydFB4VmFsVG9OdW1iZXIoZ2V0Q29tcHV0ZWRTdHlsZShjYXJvdXNlbCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1jZW50ZXItb2Zmc2V0JykpO1xuICAgIGNvbnN0IGxlZnRWYWx1ZSA9IGNvbnZlcnRQeFZhbFRvTnVtYmVyKGdldENvbXB1dGVkU3R5bGUoc2xpZGVyKS5sZWZ0KTtcblxuICAgIC8vIHNldCBuZXcgY3VycmVudCBzbGlkZSAmIHBvc2l0aW9uaW5nXG4gICAgbGV0IGN1cnJlbnRTbGlkZUluZGV4O1xuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGNhcmRzW2ldO1xuICAgICAgICBjb25zdCBkb3QgPSBkb3RzW2ldO1xuICAgICAgICAvLyBkZXRlcm1pbmUgbnVtYmVyIG9mIHNsaWRlcyB0byBtb3ZlXG4gICAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudCcpICYmICFmb3VuZCkge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgY3VycmVudFNsaWRlSW5kZXggPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IG5ldyBjdXJyZW50IHNsaWRlXG4gICAgICAgIC8vIGlmIChpID09PSBzbGlkZU51bWJlcikgY2FyZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7IFxuICAgICAgICAvLyBlbHNlIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuXG4gICAgICAgIGlmIChpIDwgc2xpZGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA+IHNsaWRlTnVtYmVyKSB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc2xpZGVOdW1iZXIpIHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgICAgICAgICAgZG90LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGNvbnN0IHBsYWNlc1RvTW92ZSA9IHNsaWRlTnVtYmVyIC0gY3VycmVudFNsaWRlSW5kZXg7XG4gICAgY29uc3QgZmluYWxMZWZ0VmFsID0gKGxlZnRWYWx1ZSAtICgoY2VudGVyT2ZmU2V0ICogcGxhY2VzVG9Nb3ZlKSArIChwbGFjZXNUb01vdmUgKiAoMjAgKyAyKSkpKTtcbiAgICAvLyBhbGVydCgnbGVmdCB2YWx1ZTogJyArIGxlZnRWYWx1ZSArICdcXG4nICsgJ2ZpbmFsIGxlZnQgdmFsdWU6ICcgKyBmaW5hbExlZnRWYWwpO1xuICAgIHNsaWRlci5zdHlsZS5sZWZ0ID0gKGZpbmFsTGVmdFZhbCkgKyAncHgnO1xuXG5cblxuXG4gICAgZnVuY3Rpb24gY29udmVydFB4VmFsVG9OdW1iZXIocGl4ZWxWYWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHBpeGVsVmFsdWUgIT09ICdzdHJpbmcnKSB0aHJvdyBFcnJvcihcImNvbnZlcnRQeFZhbFRvTnVtYmVyIGNhbiBvbmx5IHRha2Ugc3RyaW5nIHBhcmFtZXRlcnNcIik7XG4gICAgICAgIGlmIChwaXhlbFZhbHVlLmxlbmd0aCA8IDIpIHRocm93IEVycm9yKGBjb252ZXJ0UHhWYWxUb051bWJlciBtdXN0IGJlIG1pbmltdW1hbCBsZW5ndGggb2YgMiBidXQgd2FzICR7cGl4ZWxWYWx1ZS5sZW5ndGh9YCk7XG4gICAgICAgIHJldHVybiBwYXJzZUludChwaXhlbFZhbHVlLnN1YnN0cmluZygwLCBwaXhlbFZhbHVlLmxlbmd0aCAtIDIpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNsaWRlUHJldigpIHsgcmV0dXJuIHNsaWRlVG8ocG9zaXRpb24gLSAxKTsgfVxuZnVuY3Rpb24gc2xpZGVOZXh0KCkgeyByZXR1cm4gc2xpZGVUbyhwb3NpdGlvbiArIDEpOyB9XG4vKipcbiAqIFxuICogQHBhcmFtIHsnZm9yd2FyZHMnIHwgJ2JhY2t3YXJkcyd9IGRpcmVjdGlvbiBcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYm91bmNlIGNvbnRyb2xzIGlmIHRoZSBzbGlkZXNob3cgYm91bmNlcyBkaXJlY3Rpb24gd2hlbiBoaXR0aW5nIGVuZCBvZiBzbGlkZXNob3dcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcm5hbEluTXMgYSBwb3NpdGl2ZSBudW1iZXJcbiAqL1xuZnVuY3Rpb24gc2xpZGVTaG93KGRpcmVjdGlvbiwgYm91bmNlLCBpbnRlcm5hbEluTXMpIHtcbiAgICBpZiAoKGRpcmVjdGlvbiAhPT0gJ2ZvcndhcmRzJyAmJiBkaXJlY3Rpb24gIT09ICdiYWNrd2FyZHMnICYmIGRpcmVjdGlvbiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB8fCBpbnRlcm5hbEluTXMgPCAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBpbnRlcm5hbEluTXMgfHwgNTAwMDtcbiAgICBjb25zdCBib3VuY2luZyA9IGJvdW5jZSB8fCBmYWxzZTtcblxuICAgIGxldCBmID0gKCkgPT4ge1xuICAgICAgICBzZWxmLnNsaWRpbmcgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZm9yd2FyZCcpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBzZWxmLnNsaWRlTmV4dCgpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlID09PSAnbGFzdCcpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHNlbGYuc2xpZGluZyk7XG4gICAgICAgICAgICAgICAgaWYgKGJvdW5jaW5nKSBiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGludGVydmFsKTtcbiAgICB9O1xuXG4gICAgbGV0IGIgPSAoKSA9PiB7XG4gICAgICAgIHNlbGYuc2xpZGluZyA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiYWNrd2FyZHMnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gc2VsZi5zbGlkZVByZXYoKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSA9PT0gJ2ZpcnN0Jykge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2VsZi5zbGlkaW5nKTtcbiAgICAgICAgICAgICAgICBpZiAoYm91bmNpbmcpIGYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgIH07XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnZm9yd2FyZHMnKSBmKCk7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkcycpIGIoKTtcbn1cbmZ1bmN0aW9uIHN0b3BTbGlkZVNob3coKSB7XG4gICAgaWYgKHNsaWRpbmcpIGNsZWFySW50ZXJ2YWwoc2xpZGluZyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNhcm91c2VsRG90SHVkIGFzIGNyZWF0ZUNhcm91c2VsIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIHN0eWxlc1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuL2Nhcm91c2VsLmNzcyc7XG4vLyBpbWFnZXNcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5pbXBvcnQgYmtXaW5kb3dNb250aCBmcm9tICcuL2ltZy9idWRnZXRLZWVwZXItd2luZG93TW9udGgucG5nJztcbmltcG9ydCBia1dpbmRvd1RyYW5zYWN0aW9uIGZyb20gJy4vaW1nL2J1ZGdldEtlZXBlci13aW5kb3dUcmFuc2FjdGlvbi5wbmcnO1xuaW1wb3J0IGJrV2luZG93WWVhciBmcm9tICcuL2ltZy9idWRnZXRLZWVwZXItd2luZG93WWVhci5wbmcnO1xuaW1wb3J0IGNrIGZyb20gJy4vaW1nL2NoZWNrZXJzLnBuZyc7XG5pbXBvcnQgY2MgZnJvbSAnLi9pbWcvY3Jhc2lvQ2FsY3VsYXRvci5wbmcnO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vLyBwcm9qZWN0cyBkYXRhIGZyb20ganNvblxuaW1wb3J0IHByb2plY3RzSnNvbiBmcm9tICcuL2NhcmRzLmpzb24nO1xuXG5pbXBvcnQgeyBjcmVhdGVDYXJvdXNlbCB9IGZyb20gJy4vY2Fyb3VzZWwnO1xuXG5jb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuXG4vLyAoZnVuY3Rpb24gaW5pdCgpIHtcbi8vICAgLy8gZm9yIChsZXQgb2JqIG9mIHByb2plY3RzKSB7XG4vLyAgIC8vICAgICBidWlsZENhcmQob2JqLCBwcm9qZWN0c0Rpdik7XG4vLyAgIC8vIH1cbi8vICAgYnVpbGRDYXJkcyhwcm9qZWN0c0pzb24pO1xuLy8gfSgpKTtcblxuZnVuY3Rpb24gYnVpbGRDYXJkcyhwcm9qZWN0c0pzb24pIHtcbiAgY29uc3QgY2FyZHMgPSBbXTtcbiAgZm9yIChjb25zdCBwcm9qZWN0SWQgaW4gcHJvamVjdHNKc29uKSB7XG4gICAgY2FyZHMucHVzaChidWlsZENhcmQocHJvamVjdHNKc29uW3Byb2plY3RJZF0pKTtcbiAgfVxuICByZXR1cm4gY2FyZHM7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkQ2FyZChwcm9qZWN0KSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgY29uc3QgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjYXJkSW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nJyk7XG4gIGNhcmRJbWcuc3JjID0gcHJvamVjdC5pbWFnZXMuY2FyZFBhY2tlZDtcblxuICBjb25zdCBjYXJkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkVGV4dC5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgY2FyZFRleHQuaW5uZXJIVE1MID0gcHJvamVjdC50ZXh0O1xuXG4gIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSW1nKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGV4dCk7XG4gIC8vIGNvbnNvbGUubG9nKGNhcmQuY2hpbGRyZW4pO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5sZXQgeCA9IGNyZWF0ZUNhcm91c2VsKGJ1aWxkQ2FyZHMocHJvamVjdHNKc29uKSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3cG9ydCcpLmFwcGVuZENoaWxkKHgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9