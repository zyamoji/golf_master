/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calc_dist_from_lon_lat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc_dist_from_lon_lat */ \"./src/js/calc_dist_from_lon_lat.js\");\n\n\nconst deg_x1 = 139.639445; \nconst deg_y1 = 35.598297;\nconst deg_x2 = 139.638682;\nconst deg_y2 = 35.599348;\nconst {meter, yard} = Object(_calc_dist_from_lon_lat__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(deg_x1, deg_y1, deg_x2, deg_y2);\ndocument.getElementById('app').innerHTML = \"カップまでの距離は\" + Math.round(yard) + \"y (\" + Math.round(meter) + \" m)\";\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/calc_dist_from_lon_lat.js":
/*!******************************************!*\
  !*** ./src/js/calc_dist_from_lon_lat.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(deg_x1, deg_y1, deg_x2, deg_y2) {\n    console.log('Hello Fon');\n\n    // earth radius(m)\n    const r = 6378137\n    \n    // convert radius from deg\n    const rad_x1 = Math.PI * deg_x1 / 180\n    const rad_y1 = Math.PI * deg_y1 / 180\n    const rad_x2 = Math.PI * deg_x2 / 180\n    const rad_y2 = Math.PI * deg_y2 / 180\n\n    // calc\n    const siny1siny2 = Math.sin(rad_y1) * Math.sin(rad_y2)\n    const cosy1cosy2 = Math.cos(rad_y1) * Math.cos(rad_y2)\n    const deltaX = rad_x2 - rad_x1\n    const cosdx = Math.cos(deltaX)\n    \n    // calc distance(km)\n    const d = r * Math.acos(siny1siny2 + cosy1cosy2 * cosdx)\n    console.log('meter is : ' + d)\n    console.log('yard is : ' + d*1.0936)\n\n    return {'meter': d, 'yard': d*1.0936};\n});\n\n//# sourceURL=webpack:///./src/js/calc_dist_from_lon_lat.js?");

/***/ })

/******/ });