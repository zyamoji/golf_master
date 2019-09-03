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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_position */ \"./src/js/get_position.js\");\n/* harmony import */ var _calc_dist_from_lon_lat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc_dist_from_lon_lat */ \"./src/js/calc_dist_from_lon_lat.js\");\n/* harmony import */ var _get_course_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get_course_data */ \"./src/js/get_course_data.js\");\n/* harmony import */ var _shot_counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shot_counter */ \"./src/js/shot_counter.js\");\n/* harmony import */ var _save_to_localstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save_to_localstorage */ \"./src/js/save_to_localstorage.js\");\n/* harmony import */ var _read_from_localstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./read_from_localstorage */ \"./src/js/read_from_localstorage.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../css/style'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n\n\n\n// 位置取得ボタン\nconst position_get_btn = document.getElementById('position_get_btn');\n// クリックしたら位置取得\nposition_get_btn.addEventListener(\"click\", async function() {\n    // 現在地の取得の処理を待つためにawait\n    const {ball_lng, ball_lat} = await Object(_get_position__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    // 選択されたホールのカップ情報を取得\n    const cup_lng_lat = Object(_get_course_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"course_select\", \"hole_select\")\n        \n    // 現在地からカップまでの距離を計算\n    const {meter, yard} = Object(_calc_dist_from_lon_lat__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ball_lng, ball_lat, cup_lng_lat[\"lng\"], cup_lng_lat[\"lat\"]);\n    // 計算結果を表示\n    document.getElementById('app').innerHTML = \"カップまで\" + Math.round(yard) + \"y (\" + Math.round(meter) + \" m)\";\n}, false)\n\n// 打数カウンタ\nObject(_shot_counter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n// 打数保存ボタン\nconst save_to_localstorage_btn = document.getElementById('save_to_localstorage_btn');\n// クリックしたら打数保存\nsave_to_localstorage_btn.addEventListener(\"click\", Object(_save_to_localstorage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n\n// 打数ログ読み込みボタン\nconst read_from_localstorage_btn = document.getElementById('read_from_localstorage_btn');\n// クリックしたら打数保存\nObject(_read_from_localstorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n// 起動時の処理\ndocument.addEventListener('DOMContentLoaded', function() {\n    // コース情報の読み込み\n    Object(_get_course_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"course_select\", \"hole_select\")\n    console.log(\"コース情報を読み込みました\")\n}, false)\n\n//# sourceURL=webpack:///./src/js/app.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(course_id, hole_id) {\n    // コース情報ファイルを指定\n    const course_object = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../../course_information.json'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\n    // 選択されたコース情報を取得\n    const selected_course = document.getElementById(course_id).value\n    // 選択されたホール情報を取得\n    const selected_hole = document.getElementById(hole_id).value\n\n    // 選択されたコース/ホールのカップ緯度経度を取得\n    for (let course_info of course_object[\"courses\"]) {\n        // 選択されたコースならホール選択に移る\n        if (course_info[\"name\"] == selected_course) {\n            for (let hole_info of course_info[\"holes\"]) {\n                if (hole_info[\"number\"] == Number(selected_hole)) {\n                    console.log(Number(selected_hole))\n                    return hole_info[\"cup_position\"]\n                }\n            }\n        }\n    }\n});\n\n//# sourceURL=webpack:///./src/js/get_course_data.js?");

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