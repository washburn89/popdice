(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~f075b844"],{

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */"GAND");
__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */"GmYv");
module.exports = __webpack_require__(/*! aurelia-bootstrapper */"b9nV");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy91dGlsIChpZ25vcmVkKT85ZjAwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIChpZ25vcmVkKSAqLyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy91dGlsIChpZ25vcmVkKT83ZTQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIChpZ25vcmVkKSAqLyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),

/***/ "BEPO":
/*!*********************************!*\
  !*** ./config/environment.json ***!
  \*********************************/
/*! exports provided: debug, testing, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"debug\\\":true,\\\"testing\\\":true}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkVQTy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///BEPO\n");

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar RandomOrg = __webpack_require__(/*! random-org */ \"q8An\");\r\nvar App = (function () {\r\n    function App() {\r\n        this.successes = 'Number of Successes';\r\n        this.numD6 = 0;\r\n        this.numD4 = 0;\r\n        this.totalSuccesses = 0;\r\n    }\r\n    App.prototype.getRandomIntsFromOneToMax = function (max, count) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var random, randNumInRange;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        if (!(count > 30)) return [3, 1];\r\n                        console.error('TOO MANY DICE');\r\n                        return [3, 3];\r\n                    case 1:\r\n                        random = new RandomOrg({ apiKey: 'ab5f7285-94f1-4c60-8b1d-a8d4a343745b' });\r\n                        return [4, random.generateIntegers({ min: 1, max: max, n: count }).then(function (result) {\r\n                                return result.random.data;\r\n                            }, function (issue) {\r\n                                console.log(issue);\r\n                                var numArr = [];\r\n                                for (var i = count; i > 0; i--) {\r\n                                    numArr.push(Math.floor(Math.random() * max) + 1);\r\n                                }\r\n                                return numArr;\r\n                            })];\r\n                    case 2:\r\n                        randNumInRange = _a.sent();\r\n                        return [2, randNumInRange];\r\n                    case 3: return [2];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    App.prototype.onClickRollDice = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var _a;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        this.successes = 'Rolling...';\r\n                        _a = this;\r\n                        return [4, this.rollDice(this.numD6, this.numD4)];\r\n                    case 1:\r\n                        _a.totalSuccesses = _b.sent();\r\n                        this.successes = this.totalSuccesses.toString();\r\n                        return [2];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    App.prototype.rollDice = function (d6s, d4s) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var successes, d6Array, d4Array;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        this.totalSuccesses = 0;\r\n                        successes = 0;\r\n                        if (!(d6s > 0)) return [3, 2];\r\n                        return [4, this.getRandomIntsFromOneToMax(6, d6s)];\r\n                    case 1:\r\n                        d6Array = _a.sent();\r\n                        d6Array.forEach(function (element) {\r\n                            if (element == 1) {\r\n                                successes++;\r\n                            }\r\n                        });\r\n                        _a.label = 2;\r\n                    case 2:\r\n                        if (!(d4s > 0)) return [3, 4];\r\n                        return [4, this.getRandomIntsFromOneToMax(4, d4s)];\r\n                    case 3:\r\n                        d4Array = _a.sent();\r\n                        d4Array.forEach(function (element) {\r\n                            if (element == 1) {\r\n                                successes++;\r\n                            }\r\n                        });\r\n                        _a.label = 4;\r\n                    case 4: return [2, successes];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    return App;\r\n}());\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz8wNjZlIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBSYW5kb21PcmcgPSByZXF1aXJlKCdyYW5kb20tb3JnJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBwdWJsaWMgc3VjY2Vzc2VzID0gJ051bWJlciBvZiBTdWNjZXNzZXMnO1xyXG5cclxucHVibGljIG51bUQ2ID0gMDtcclxucHVibGljIG51bUQ0ID0gMDtcclxucHJpdmF0ZSB0b3RhbFN1Y2Nlc3NlcyA9IDA7XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgZ2V0UmFuZG9tSW50c0Zyb21PbmVUb01heChtYXg6IG51bWJlciwgY291bnQ6IG51bWJlcikge1xyXG5cclxuICAgIGlmIChjb3VudCA+IDMwKXtcclxuICAgICAgY29uc29sZS5lcnJvcignVE9PIE1BTlkgRElDRScpO1xyXG4gICAgICBcclxuICAgIH1lbHNle1xyXG4gICAgICBsZXQgcmFuZG9tID0gbmV3IFJhbmRvbU9yZyh7IGFwaUtleTogJ2FiNWY3Mjg1LTk0ZjEtNGM2MC04YjFkLWE4ZDRhMzQzNzQ1YicgfSk7XHJcbiAgICAgIGxldCByYW5kTnVtSW5SYW5nZSA9IGF3YWl0IHJhbmRvbS5nZW5lcmF0ZUludGVnZXJzKHsgbWluOiAxLCBtYXg6IG1heCwgbjogY291bnR9KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQucmFuZG9tLmRhdGE7XHJcbiAgICAgIH0sIChpc3N1ZTogYW55KSA9PiB7XHJcbiAgICAgICAgLy8gaWYgcmFuZG9tLm9yZyBmYWlscyB0aGVuIGxvZyBpdCBhbmQgcmV0dXJuIGEgcHN1ZWRvIHJhbmRvbSBudW1iZXIgYXJyYXlcclxuICAgICAgICBjb25zb2xlLmxvZyhpc3N1ZSk7XHJcbiAgICAgICAgbGV0IG51bUFycjogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSBjb3VudDsgaSA+IDAgOyBpLS0pe1xyXG4gICAgICAgICAgLy8gb25seSBnaXZlcyBudW1iZXJzIGZyb20gMSB0byBtYXggXHJcbiAgICAgICAgICBudW1BcnIucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICBudW1BcnI7XHJcblxyXG4gICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiByYW5kTnVtSW5SYW5nZTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIG9uQ2xpY2tSb2xsRGljZSgpe1xyXG4gICAgdGhpcy5zdWNjZXNzZXMgPSAnUm9sbGluZy4uLic7XHJcbiAgICB0aGlzLnRvdGFsU3VjY2Vzc2VzID0gYXdhaXQgdGhpcy5yb2xsRGljZSh0aGlzLm51bUQ2LCB0aGlzLm51bUQ0KVxyXG5cclxuICAgIHRoaXMuc3VjY2Vzc2VzID0gdGhpcy50b3RhbFN1Y2Nlc3Nlcy50b1N0cmluZygpO1xyXG5cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyByb2xsRGljZShkNnM6IG51bWJlciwgZDRzOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj57XHJcbiAgICB0aGlzLnRvdGFsU3VjY2Vzc2VzID0gMDtcclxuXHJcbiAgICBsZXQgc3VjY2Vzc2VzID0gMDtcclxuXHJcbiAgICBpZihkNnMgPiAwKXtcclxuICAgICAgbGV0IGQ2QXJyYXkgPSBhd2FpdCB0aGlzLmdldFJhbmRvbUludHNGcm9tT25lVG9NYXgoNiwgZDZzKTtcclxuICAgICAgZDZBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50ID09IDEpe1xyXG4gICAgICAgICAgc3VjY2Vzc2VzKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmKGQ0cyA+IDApe1xyXG4gICAgbGV0IGQ0QXJyYXkgPSBhd2FpdCB0aGlzLmdldFJhbmRvbUludHNGcm9tT25lVG9NYXgoNCwgZDRzKTtcclxuICAgIGQ0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQgPT0gMSl7XHJcbiAgICAgICAgc3VjY2Vzc2VzKys7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4gIHJldHVybiBzdWNjZXNzZXM7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBNkRBO0FBM0RBOzs7Ozs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQVpBO0FBY0E7Ozs7O0FBR0E7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBRUE7Ozs7O0FBRUE7QUFFQTs7Ozs7O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTs7OztBQUNBO0FBQ0E7QUFBQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"JPst\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body{\\r\\n    background-color: grey;\\r\\n}\\r\\n\\r\\n.success{\\r\\n    color: rgb(0, 0, 0);\\r\\n    font-size: 50px;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/app.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB\",\"sourcesContent\":[\"body{\\r\\n    background-color: grey;\\r\\n}\\r\\n\\r\\n.success{\\r\\n    color: rgb(0, 0, 0);\\r\\n    font-size: 50px;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuY3NzPzM2YmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Y2Nlc3N7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9hcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Y2Nlc3N7XFxyXFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///app.css\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Module\nvar code = \"<template>\\r\\n  <require from=\\\"./app.css\\\"></require>\\r\\n\\r\\n  <h2>Enter the number of d6's and d4's you would like to roll then click ROLL THEM. Resulting number of the number of 1's shown on the dice faces. </h2>\\r\\n\\r\\n  <div> Website for use with The Price of Power ttRPG. Dice roll randomized using RANDOM.org.</div>\\r\\n\\r\\n  <div> Number of d6 dice: \\r\\n    <input type=\\\"number\\\" value.bind=\\\"numD6\\\">\\r\\n  </div>\\r\\n\\r\\n  <div> Number of d4 dice: \\r\\n    <input type=\\\"number\\\" value.bind=\\\"numD4\\\">\\r\\n  </div>\\r\\n  \\r\\n  <div>\\r\\n    <button click.delegate=\\\"onClickRollDice()\\\"> ROLL THEM </button>\\r\\n  </div>\\r\\n\\r\\n  <div class=\\\"success\\\">${successes}</div>\\r\\n</template>\\r\\n\\r\\n\";\n// Exports\nmodule.exports = code;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/MmY0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8dGVtcGxhdGU+XFxyXFxuICA8cmVxdWlyZSBmcm9tPVxcXCIuL2FwcC5jc3NcXFwiPjwvcmVxdWlyZT5cXHJcXG5cXHJcXG4gIDxoMj5FbnRlciB0aGUgbnVtYmVyIG9mIGQ2J3MgYW5kIGQ0J3MgeW91IHdvdWxkIGxpa2UgdG8gcm9sbCB0aGVuIGNsaWNrIFJPTEwgVEhFTS4gUmVzdWx0aW5nIG51bWJlciBvZiB0aGUgbnVtYmVyIG9mIDEncyBzaG93biBvbiB0aGUgZGljZSBmYWNlcy4gPC9oMj5cXHJcXG5cXHJcXG4gIDxkaXY+IFdlYnNpdGUgZm9yIHVzZSB3aXRoIFRoZSBQcmljZSBvZiBQb3dlciB0dFJQRy4gRGljZSByb2xsIHJhbmRvbWl6ZWQgdXNpbmcgUkFORE9NLm9yZy48L2Rpdj5cXHJcXG5cXHJcXG4gIDxkaXY+IE51bWJlciBvZiBkNiBkaWNlOiBcXHJcXG4gICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgdmFsdWUuYmluZD1cXFwibnVtRDZcXFwiPlxcclxcbiAgPC9kaXY+XFxyXFxuXFxyXFxuICA8ZGl2PiBOdW1iZXIgb2YgZDQgZGljZTogXFxyXFxuICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHZhbHVlLmJpbmQ9XFxcIm51bUQ0XFxcIj5cXHJcXG4gIDwvZGl2PlxcclxcbiAgXFxyXFxuICA8ZGl2PlxcclxcbiAgICA8YnV0dG9uIGNsaWNrLmRlbGVnYXRlPVxcXCJvbkNsaWNrUm9sbERpY2UoKVxcXCI+IFJPTEwgVEhFTSA8L2J1dHRvbj5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cXFwic3VjY2Vzc1xcXCI+JHtzdWNjZXNzZXN9PC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/environment.json */ \"BEPO\");\nvar _config_environment_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/environment.json */ \"BEPO\", 1);\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n\r\n\r\nfunction configure(aurelia) {\r\n    aurelia.use\r\n        .standardConfiguration()\r\n        .feature('resources/index');\r\n    aurelia.use.developmentLogging(_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"debug\"] ? 'debug' : 'warn');\r\n    if (_config_environment_json__WEBPACK_IMPORTED_MODULE_0__[\"testing\"]) {\r\n        aurelia.use.plugin('aurelia-testing');\r\n    }\r\n    aurelia.start().then(function () { return aurelia.setRoot('app'); });\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLnRzP2NkNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgKiBhcyBlbnZpcm9ubWVudCBmcm9tICcuLi9jb25maWcvZW52aXJvbm1lbnQuanNvbic7XG5pbXBvcnQge1BMQVRGT1JNfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSk6IHZvaWQge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKFBMQVRGT1JNLm1vZHVsZU5hbWUoJ3Jlc291cmNlcy9pbmRleCcpKTtcblxuICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoZW52aXJvbm1lbnQuZGVidWcgPyAnZGVidWcnIDogJ3dhcm4nKTtcblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbihQTEFURk9STS5tb2R1bGVOYW1lKCdhdXJlbGlhLXRlc3RpbmcnKSk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoUExBVEZPUk0ubW9kdWxlTmFtZSgnYXBwJykpKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///main\n");

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.ts ***!
  \********************************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\nfunction configure(config) {\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9pbmRleC50cz83NDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbik6IHZvaWQge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///resources/index\n");

/***/ })

},[[0,"runtime~app","vendors~0ba1d959","vendors~556c66f2","vendors~72fdf3f2","vendors~50e8d500","vendors~5ea1390f","vendors~ecff2e3d","vendors~9e0f4621","vendors~7274e1de","vendors~db300d2f","vendors~7d359b94","vendors~678f84af"]]]);