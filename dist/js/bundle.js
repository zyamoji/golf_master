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

/***/ "./course_information.json":
/*!*********************************!*\
  !*** ./course_information.json ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"courses\":[{\"name\":\"golf_park_tamagawa\",\"holes\":[{\"number\":1,\"par\":3,\"yard_length\":151,\"tee_position\":{\"lng\":139.639445,\"lat\":35.598297},\"cup_position\":{\"lng\":139.638682,\"lat\":35.599348}},{\"number\":2,\"par\":3,\"yard_length\":90,\"tee_position\":{\"lng\":139.637974,\"lat\":35.599366},\"cup_position\":{\"lng\":139.638676,\"lat\":35.599762}},{\"number\":3,\"par\":3,\"yard_length\":175,\"tee_position\":{\"lng\":139.639553,\"lat\":35.599416},\"cup_position\":{\"lng\":139.640763,\"lat\":35.598402}},{\"number\":4,\"par\":3,\"yard_length\":115,\"tee_position\":{\"lng\":139.641037,\"lat\":35.598294},\"cup_position\":{\"lng\":139.641566,\"lat\":35.597494}},{\"number\":5,\"par\":3,\"yard_length\":136,\"tee_position\":{\"lng\":139.642457,\"lat\":35.597359},\"cup_position\":{\"lng\":139.642894,\"lat\":35.596358}},{\"number\":6,\"par\":3,\"yard_length\":124,\"tee_position\":{\"lng\":139.642284,\"lat\":35.596464},\"cup_position\":{\"lng\":139.642014,\"lat\":35.597376}},{\"number\":7,\"par\":3,\"yard_length\":135,\"tee_position\":{\"lng\":139.641049,\"lat\":35.597235},\"cup_position\":{\"lng\":139.640243,\"lat\":35.598114}}]}]}\n\n//# sourceURL=webpack:///./course_information.json?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"button.shot_btn {\\n    font-size: 1.4em;\\n}\\n\\n#shot_counter_box {\\n    height: 22px;\\n    width: 40px;\\n    font-size: 1.4em;\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_position */ \"./src/js/get_position.js\");\n/* harmony import */ var _calc_dist_from_lon_lat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc_dist_from_lon_lat */ \"./src/js/calc_dist_from_lon_lat.js\");\n/* harmony import */ var _get_course_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get_course_data */ \"./src/js/get_course_data.js\");\n/* harmony import */ var _shot_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shot_counter */ \"./src/js/shot_counter.js\");\n/* harmony import */ var _save_to_localstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save_to_localstorage */ \"./src/js/save_to_localstorage.js\");\n/* harmony import */ var _read_from_localstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./read_from_localstorage */ \"./src/js/read_from_localstorage.js\");\n/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/style */ \"./src/css/style.css\");\n/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_style__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n// 位置取得ボタン\nconst position_get_btn = document.getElementById('position_get_btn');\n// クリックしたら位置取得\nposition_get_btn.addEventListener(\"click\", async function() {\n    // 現在地の取得の処理を待つためにawait\n    const {ball_lng, ball_lat} = await Object(_get_position__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    // 選択されたホールのカップ情報を取得\n    const cup_lng_lat = Object(_get_course_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"course_select\", \"hole_select\")\n        \n    // 現在地からカップまでの距離を計算\n    const {meter, yard} = Object(_calc_dist_from_lon_lat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ball_lng, ball_lat, cup_lng_lat[\"lng\"], cup_lng_lat[\"lat\"]);\n    // 計算結果を表示\n    document.getElementById('app').innerHTML = \"カップまで\" + Math.round(yard) + \"y (\" + Math.round(meter) + \" m)\";\n}, false)\n\n// 打数カウンタ\nObject(_shot_counter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n// 打数保存ボタン\nconst save_to_localstorage_btn = document.getElementById('save_to_localstorage_btn');\n// クリックしたら打数保存\nsave_to_localstorage_btn.addEventListener(\"click\", Object(_save_to_localstorage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n// 打数ログ読み込みボタン\nconst read_from_localstorage_btn = document.getElementById('read_from_localstorage_btn');\n// クリックしたら打数保存\nObject(_read_from_localstorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n// 起動時の処理\ndocument.addEventListener('DOMContentLoaded', function() {\n    // コース情報の読み込み\n    Object(_get_course_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"course_select\", \"hole_select\")\n    console.log(\"コース情報を読み込みました\")\n}, false)\n\n//# sourceURL=webpack:///./src/js/app.js?");

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

/***/ "./src/js/get_course_data.js":
/*!***********************************!*\
  !*** ./src/js/get_course_data.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(course_id, hole_id) {\n    // コース情報ファイルを指定\n    const course_object = __webpack_require__(/*! ../../course_information.json */ \"./course_information.json\");\n\n    // 選択されたコース情報を取得\n    const selected_course = document.getElementById(course_id).value\n    // 選択されたホール情報を取得\n    const selected_hole = document.getElementById(hole_id).value\n\n    // 選択されたコース/ホールのカップ緯度経度を取得\n    for (let course_info of course_object[\"courses\"]) {\n        // 選択されたコースならホール選択に移る\n        if (course_info[\"name\"] == selected_course) {\n            for (let hole_info of course_info[\"holes\"]) {\n                if (hole_info[\"number\"] == Number(selected_hole)) {\n                    console.log(Number(selected_hole))\n                    return hole_info[\"cup_position\"]\n                }\n            }\n        }\n    }\n});\n\n//# sourceURL=webpack:///./src/js/get_course_data.js?");

/***/ }),

/***/ "./src/js/get_position.js":
/*!********************************!*\
  !*** ./src/js/get_position.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 現在地情報の取得\n// そのままでは非同期実行されるので、Promiseで返す\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n    // Promise化して現在地の取得まで実行を止める\n    return new Promise((resolve, reject) =>  {\n        // 現在地の取得機能がない場合\n        if (!navigator.geolocation) {\n            alert(\"位置情報の取得機能がありません。\")\n        } else {\n            // 現在地取得\n            navigator.geolocation.getCurrentPosition(function (position) {\n                const ball_lat = position.coords.latitude;\n                const ball_lng = position.coords.longitude;\n                // 現在地情報を返す\n                resolve({\"ball_lng\": ball_lng, \"ball_lat\": ball_lat})\n            }, function (err) {\n                // エラー時の処理\n                if (err.code == 0) {\n                    alert(\"不明なエラーです\")\n                } else if (err.code == 1) {\n                    alert(\"許可がもらえませんでした\")\n                } else if (err.code == 2) {\n                    alert(\"位置情報の取得に失敗しました\")\n                }　else if (err.code == 3) {\n                    alert(\"位置情報の取得がタイムアウトしました\")\n                }\n                // エラーコードを返す\n                reject(err.code)\n             }, {\n                 // オプション\n                 enableHighAccuracy: true,\n                 timeout: 1000,\n                 maximumAge: 1000\n             })\n        }\n    })\n});\n\n\n\n//# sourceURL=webpack:///./src/js/get_position.js?");

/***/ }),

/***/ "./src/js/read_from_localstorage.js":
/*!******************************************!*\
  !*** ./src/js/read_from_localstorage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n\n    // 読み込みボタン押したらデータを表示\n    read_from_localstorage_btn.addEventListener(\"click\", function () {\n        // 選択されたコース情報を取得\n        const selected_course = document.getElementById(\"course_select\").value\n        // 選択されたホール情報を取得\n        const selected_hole = document.getElementById(\"hole_select\").value\n        // 表示領域\n        const display_shot_counter = document.getElementById(\"display_shot_counter\")\n\n        // localStorageから読み出す\n        const shot_data = localStorage.getItem(selected_course)\n\n        if (shot_data == undefined) {\n            display_shot_counter.innerHTML = \"ログはありません\"\n        } else {\n            const shot_json_data = JSON.parse(shot_data)\n            \n            // データはあるけど、ホール情報がない時\n            const hole_key = \"hole_\" + selected_hole\n            if (shot_json_data[hole_key] == undefined) {\n                display_shot_counter.innerHTML = \"ログはありません\"\n            } else {\n                const this_hole_data = shot_json_data[hole_key]\n                console.log(Object.keys(this_hole_data))\n                for (var date_key of Object.keys(this_hole_data)) {\n                    display_shot_counter.innerHTML = \"\"\n                    display_shot_counter.innerHTML += date_key + \" のデータ↓<br>\"\n                    for (const time_key of Object.keys(this_hole_data[date_key])) {\n                        display_shot_counter.innerHTML += time_key.slice(0, 2) + \":\" + time_key.slice(2, 4) + \" → \" + this_hole_data[date_key][time_key][\"shot_count\"] + \"打<br>\"\n                    }\n                    console.log(this_hole_data[date_key])\n                }\n                //display_shot_counter.innerHTML = JSON.stringify(this_hole_data)\n            }\n\n            \n        }\n    })\n});\n\n//# sourceURL=webpack:///./src/js/read_from_localstorage.js?");

/***/ }),

/***/ "./src/js/save_to_localstorage.js":
/*!****************************************!*\
  !*** ./src/js/save_to_localstorage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n           \n    // 保存ボタン押したらデータを保存\n    save_to_localstorage_btn.addEventListener(\"click\", function () {\n        // 選択されたコース情報を取得\n        const selected_course = document.getElementById(\"course_select\").value\n        // 選択されたホール情報を取得\n        const selected_hole = document.getElementById(\"hole_select\").value\n        // 打数を取得\n        const shot_count = document.getElementById(\"shot_counter_box\").value\n\n        // 追記するので、一旦読み出してから追記、保存する\n        const shot_data = localStorage.getItem(selected_course)\n        // JSONデータを初期化\n        let shot_json_data = {}\n        // なにかデータが有るときは、それで上書きする\n        if (shot_data != null) {\n            shot_json_data = JSON.parse(shot_data)\n        }\n        \n        // データを保存するけど、深い階層まで一気に保存するためには、毎回undefinedじゃないかを確認する\n        // 時刻の階層は、絶対初やからない前提良いかも\n        // 時刻をキーにしたオブジェクトを作成\n        // 時間と分を2桁にする\n        const now_time = new Date();\n        const shot_hour_str = ('0' + now_time.getHours()).slice(-2);\n        const shot_minutes_str = ('0' + now_time.getMinutes()).slice(-2);\n\n        const time_str_len4 = shot_hour_str + shot_minutes_str\n\n        const time_obj = {\n            [time_str_len4]: {\n                \"shot_count\": shot_count\n            }\n        }\n\n        // 日付をキーにするため、文字列を生成\n        const shot_year = String(now_time.getFullYear());\n        const shot_month = ('0' + (now_time.getMonth() + 1)).slice(-2);\n        const shot_day = ('0' + now_time.getDate()).slice(-2);\n        const date_key = shot_year + shot_month + shot_day;\n        // 日付オブジェクトを作成\n\n        const hole_key = \"hole_\" + selected_hole;\n        // そもそもホール情報が無い時\n        if (shot_json_data[hole_key] == undefined) {\n            shot_json_data[hole_key] = {\n                [date_key]: time_obj\n            }\n        // ホール情報があって同じ日付が無い時\n        } else if (shot_json_data[hole_key][date_key] == undefined) {\n            shot_json_data[hole_key][date_key] = time_obj\n        // ホール情報があって同じ日付もある時\n        } else if (shot_json_data[hole_key][date_key] != undefined) {\n            shot_json_data[hole_key][date_key][time_str_len4] = {\n                \"shot_count\": shot_count\n            }\n        }\n        \n        localStorage.setItem(selected_course, JSON.stringify(shot_json_data));\n    }, false)\n});\n\n//# sourceURL=webpack:///./src/js/save_to_localstorage.js?");

/***/ }),

/***/ "./src/js/shot_counter.js":
/*!********************************!*\
  !*** ./src/js/shot_counter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n    // 打数カウンタ増加ボタン\n    const shot_inc_btn = document.getElementById('shot_inc_btn');\n    // 打数カウンタ減少ボタン\n    const shot_dec_btn = document.getElementById('shot_dec_btn');\n    \n    // 増加ボタン押したら数を増やす\n    shot_inc_btn.addEventListener(\"click\", function () {\n        // 打数カウンタ\n        const shot_counter = Number(document.getElementById('shot_counter_box').value);\n        // 1足した数字を表示\n        document.getElementById('shot_counter_box').value = shot_counter + 1\n    }, false)\n\n    // 減少ボタン押したら数を減らす\n    shot_dec_btn.addEventListener(\"click\", function () {\n        // 打数カウンタ\n        const shot_counter = Number(document.getElementById('shot_counter_box').value);\n        // マイナスにはしない\n        if (shot_counter == 0) {\n            return;\n        }\n        // 1引いた数字を表示\n        document.getElementById('shot_counter_box').value = shot_counter - 1\n    }, false)\n});\n\n//# sourceURL=webpack:///./src/js/shot_counter.js?");

/***/ })

/******/ });