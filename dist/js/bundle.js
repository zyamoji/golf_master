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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_position */ \"./src/js/get_position.js\");\n/* harmony import */ var _calc_dist_from_lon_lat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc_dist_from_lon_lat */ \"./src/js/calc_dist_from_lon_lat.js\");\n\n\n\nconst deg_x1 = 139.639445; // tee\nconst deg_y1 = 35.598297;\nconst deg_x2 = 139.638682; // cup\nconst deg_y2 = 35.599348;\n\n// 位置取得ボタン\nconst position_get_btn = document.getElementById('position_get_btn');\n// クリックしたら位置取得\nposition_get_btn.addEventListener(\"click\", async function() {\n    // 現在地の取得の処理を待つためにawait\n    const {ball_lng, ball_lat} = await Object(_get_position__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    // 現在地からカップまでの距離を計算\n    const {meter, yard} = Object(_calc_dist_from_lon_lat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ball_lng, ball_lat, deg_x2, deg_y2);\n    // 計算結果を表示\n    document.getElementById('app').innerHTML = \"カップまでの距離は\" + Math.round(yard) + \"y (\" + Math.round(meter) + \" m)\";\n}, false)\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/calc_dist_from_lon_lat.js":
/*!******************************************!*\
  !*** ./src/js/calc_dist_from_lon_lat.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(deg_x1, deg_y1, deg_x2, deg_y2) {\n    console.log('Hello Fon');\n\n    // earth radius(m)\n    const r = 6378137\n    \n    // convert radius from deg\n    const rad_x1 = Math.PI * deg_x1 / 180\n    const rad_y1 = Math.PI * deg_y1 / 180\n    const rad_x2 = Math.PI * deg_x2 / 180\n    const rad_y2 = Math.PI * deg_y2 / 180\n\n    // calc\n    const siny1siny2 = Math.sin(rad_y1) * Math.sin(rad_y2)\n    const cosy1cosy2 = Math.cos(rad_y1) * Math.cos(rad_y2)\n    const deltaX = rad_x2 - rad_x1\n    const cosdx = Math.cos(deltaX)\n    \n    // calc distance(km)\n    const d = r * Math.acos(siny1siny2 + cosy1cosy2 * cosdx)\n    console.log('meter is : ' + d)\n    console.log('yard is : ' + d*1.0936)\n\n    return {'meter': d, 'yard': d*1.0936};\n});\n\n//# sourceURL=webpack:///./src/js/calc_dist_from_lon_lat.js?");

/***/ }),

/***/ "./src/js/get_position.js":
/*!********************************!*\
  !*** ./src/js/get_position.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 現在地情報の取得\n// そのままでは非同期実行されるので、Promiseで返す\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n    // Promise化して現在地の取得まで実行を止める\n    return new Promise((resolve, reject) =>  {\n        // 現在地の取得機能がない場合\n        if (!navigator.geolocation) {\n            alert(\"位置情報の取得機能がありません。\")\n        } else {\n            // 現在地取得\n            navigator.geolocation.getCurrentPosition(function (position) {\n                const ball_lat = position.coords.latitude;\n                const ball_lng = position.coords.longitude;\n                // 現在地情報を返す\n                resolve({\"ball_lng\": ball_lng, \"ball_lat\": ball_lat})\n            }, function (err) {\n                // エラー時の処理\n                if (err.code == 0) {\n                    alert(\"不明なエラーです\")\n                } else if (err.code == 1) {\n                    alert(\"許可がもらえませんでした\")\n                } else if (err.code == 2) {\n                    alert(\"位置情報の取得に失敗しました\")\n                }　else if (err.code == 3) {\n                    alert(\"位置情報の取得がタイムアウトしました\")\n                }\n                // エラーコードを返す\n                reject(err.code)\n             }, {\n                 // オプション\n                 enableHighAccuracy: true,\n                 timeout: 1000,\n                 maximumAge: 1000\n             })\n        }\n    })\n});\n\n\n\n//# sourceURL=webpack:///./src/js/get_position.js?");

/***/ })

/******/ });