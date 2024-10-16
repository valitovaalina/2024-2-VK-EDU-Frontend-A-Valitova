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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chat-page-footer/chat-page-footer.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2!./components/chat-page-footer/chat-page-footer.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"input[type=submit] {\\n  visibility: collapse;\\n}\\n\\n.chat-page-form {\\n  width: 100%;\\n  border: 1px solid rgba(25, 25, 25, 0.32);\\n  position: fixed;\\n  bottom: 0;\\n  display: flex;\\n  border-top: 2px solid #DDD;\\n  background: #FFF;\\n  padding-right: 7px;\\n  min-height: 60px;\\n  max-height: 100px;\\n  align-items: center;\\n}\\n\\n.chat-page-form_input {\\n  outline: 0;\\n  width: 100%;\\n  padding: 10px 13px 10px 23px;\\n  border: 0;\\n}\\n\\n.chat-page-form_send-button {\\n  background: none;\\n  border: none;\\n}\\n\\n.chat-page-form_send-button:hover {\\n  opacity: 50%;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/chat-page-footer/chat-page-footer.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chat-page-header/chat-page-header.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2!./components/chat-page-header/chat-page-header.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".chat-page-header {\\n  height: 60px;\\n  border-bottom: 2px solid #DDD;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding-left: 20px;\\n  padding-right: 20px;\\n  background-color: rgb(252, 197, 33);\\n}\\n\\n.chat-page-header_name {\\n  font-size: 20px;\\n  font-style: normal;\\n  font-weight: 600;\\n}\\n\\n.material-symbols-outlined {\\n  cursor: pointer;\\n}\\n.material-symbols-outlined:hover {\\n  opacity: 50%;\\n}\\n\\n.chat-page-header_icons {\\n  display: flex;\\n  gap: 10px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/chat-page-header/chat-page-header.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chat-page-messages/chat-page-messages.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2!./components/chat-page-messages/chat-page-messages.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".chat-page-messages-scroll {\\n  max-height: 630px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-end;\\n}\\n\\n.chat-page-messages {\\n  display: flex;\\n  flex-direction: column;\\n  overflow-y: auto;\\n  padding-top: 10px;\\n}\\n\\n.chat-page-messages::-webkit-scrollbar {\\n  height: 100px;\\n  width: 7px;\\n}\\n\\n.chat-page-messages::-webkit-scrollbar-thumb {\\n  background-color: #A6A3A3;\\n  border-radius: 20px;\\n  border: 3px solid transparent;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/chat-page-messages/chat-page-messages.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chats-page-header/chats-page-header.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2!./components/chats-page-header/chats-page-header.scss ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".chats-page-header {\\n  height: 60px;\\n  border-bottom: 2px solid #DDD;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding-left: 20px;\\n  padding-right: 20px;\\n  background-color: rgb(252, 197, 33);\\n}\\n\\n.chats-page-header_name {\\n  font-size: 20px;\\n  font-style: normal;\\n  font-weight: 600;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/chats-page-header/chats-page-header.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chats-page-item/chats-page-item.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2!./components/chats-page-item/chats-page-item.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".chat {\\n  border-radius: 10px;\\n  background: #F6F7F8;\\n  margin-top: 10px;\\n  padding: 15px;\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: nowrap;\\n  justify-content: space-between;\\n  transition: transform 0.2s ease;\\n}\\n\\n.chat:hover {\\n  background: #E8E9EA;\\n  cursor: pointer;\\n}\\n\\n.chat:active {\\n  transform: scale(1.02);\\n}\\n\\n.chat_avatar {\\n  width: 56px;\\n  height: 56px;\\n  margin-right: 20px;\\n  border-radius: 56px;\\n}\\n\\n.chat_content-box {\\n  display: flex;\\n}\\n\\n.chat_content {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n.chat_name {\\n  margin: 0;\\n  font-size: 18px;\\n  font-style: normal;\\n  font-weight: 400;\\n}\\n\\n.chat_last-message, .chat_date {\\n  margin: 0;\\n  color: #898787;\\n}\\n\\n.chat_indicators {\\n  align-items: end;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/chats-page-item/chats-page-item.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chats-page-items-list/chats-page-items-list.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2!./components/chats-page-items-list/chats-page-items-list.scss ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".chats-page-items-list {\\n  margin: 0;\\n  padding: 0 10px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/chats-page-items-list/chats-page-items-list.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/new-chat-button/new-chat-button.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2!./components/new-chat-button/new-chat-button.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"@keyframes pulse {\\n  0% {\\n    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);\\n    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);\\n  }\\n  70% {\\n    -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);\\n    box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);\\n  }\\n  100% {\\n    -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);\\n    box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);\\n  }\\n}\\n.new-chat-button {\\n  position: fixed;\\n  bottom: 20px;\\n  right: 20px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 50px;\\n  height: 50px;\\n  border-radius: 50%;\\n  background-color: rgb(252, 197, 33);\\n  cursor: pointer;\\n  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);\\n  animation: pulse 2s infinite;\\n}\\n.new-chat-button:hover {\\n  cursor: pointer;\\n  background-color: rgb(229, 173, 16);\\n  animation: none;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/new-chat-button/new-chat-button.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./styles/index.scss":
/*!********************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2!./styles/index.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html {\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: inherit;\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: #fff;\\n  color: #333;\\n  font-size: 15px;\\n  font-family: Helvetica, Arial, sans-serif;\\n  font-weight: 400;\\n  line-height: 20px;\\n}\\n\\n.message {\\n  display: flex;\\n  justify-content: flex-end;\\n  margin-bottom: 10px;\\n  animation: fadeIn 0.5s ease-in-out forwards;\\n}\\n\\n@keyframes fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@media screen and (min-width: 768px) {\\n  .message {\\n    justify-content: flex-start;\\n    margin-left: 20px;\\n  }\\n}\\n.message-content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  padding: 0.3125rem 0.5rem 0.375rem;\\n  background-color: #428BF9;\\n  border-radius: 15px 15px 0 15px;\\n  max-width: 500px;\\n  margin-right: 10px;\\n}\\n\\n.message-text {\\n  color: #FFF;\\n  word-break: break-word;\\n  margin: 0;\\n}\\n\\n.message-date {\\n  color: #FFF;\\n  font-size: 12px;\\n  display: flex;\\n  align-items: flex-end;\\n  padding-left: 10px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/index.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--7-2");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./components/chat-page-footer/chat-page-footer.js":
/*!*********************************************************!*\
  !*** ./components/chat-page-footer/chat-page-footer.js ***!
  \*********************************************************/
/*! exports provided: createChatPageFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChatPageFooter\", function() { return createChatPageFooter; });\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ \"./helpers/createElement.js\");\n/* harmony import */ var _chat_page_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-page-footer.scss */ \"./components/chat-page-footer/chat-page-footer.scss\");\n/* harmony import */ var _chat_page_footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chat_page_footer_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar createChatPageFooter = function createChatPageFooter() {\n  var footer = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('footer');\n  var form = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('form', 'chat-page-form', '', {\n    id: 'form'\n  });\n  var input = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', 'chat-page-form_input', '', {\n    id: 'form_input',\n    name: 'message-text',\n    placeholder: 'Сообщение',\n    type: 'text',\n    autofocus: true\n  });\n  var button = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('button', 'chat-page-form_send-button', '', {\n    id: 'form_send-button'\n  });\n  var icon = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'material-symbols-outlined', 'chevron_right');\n  button.append(icon);\n  form.append(input, button);\n  footer.append(form);\n  return {\n    footer: footer,\n    form: form,\n    button: button,\n    input: input\n  };\n};\n\n//# sourceURL=webpack:///./components/chat-page-footer/chat-page-footer.js?");

/***/ }),

/***/ "./components/chat-page-footer/chat-page-footer.scss":
/*!***********************************************************!*\
  !*** ./components/chat-page-footer/chat-page-footer.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--7-2!./chat-page-footer.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chat-page-footer/chat-page-footer.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/chat-page-footer/chat-page-footer.scss?");

/***/ }),

/***/ "./components/chat-page-header/chat-page-header.js":
/*!*********************************************************!*\
  !*** ./components/chat-page-header/chat-page-header.js ***!
  \*********************************************************/
/*! exports provided: createChatPageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChatPageHeader\", function() { return createChatPageHeader; });\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ \"./helpers/createElement.js\");\n/* harmony import */ var _chat_page_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-page-header.scss */ \"./components/chat-page-header/chat-page-header.scss\");\n/* harmony import */ var _chat_page_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chat_page_header_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar createChatPageHeader = function createChatPageHeader(chatName) {\n  var header = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('header', 'chat-page-header');\n  var headerTitle = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('h1', 'chat-page-header_name', chatName);\n  var headerIcons = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'chat-page-header_icons');\n  var searchIcon = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'material-symbols-outlined', 'search');\n  var settingsIcon = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'material-symbols-outlined', 'settings');\n  var returnedIcon = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'material-symbols-outlined', 'arrow_back');\n  headerIcons.append(searchIcon, settingsIcon);\n  header.append(returnedIcon, headerTitle, headerIcons);\n  returnedIcon.addEventListener('click', function () {\n    window.updateState('chats-page');\n  });\n  return header;\n};\n\n//# sourceURL=webpack:///./components/chat-page-header/chat-page-header.js?");

/***/ }),

/***/ "./components/chat-page-header/chat-page-header.scss":
/*!***********************************************************!*\
  !*** ./components/chat-page-header/chat-page-header.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--7-2!./chat-page-header.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chat-page-header/chat-page-header.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/chat-page-header/chat-page-header.scss?");

/***/ }),

/***/ "./components/chat-page-messages/chat-page-messages.js":
/*!*************************************************************!*\
  !*** ./components/chat-page-messages/chat-page-messages.js ***!
  \*************************************************************/
/*! exports provided: createChatPageMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChatPageMessages\", function() { return createChatPageMessages; });\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ \"./helpers/createElement.js\");\n/* harmony import */ var _chat_page_messages_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-page-messages.scss */ \"./components/chat-page-messages/chat-page-messages.scss\");\n/* harmony import */ var _chat_page_messages_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chat_page_messages_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar createChatPageMessages = function createChatPageMessages() {\n  var main = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('main');\n  var messagesScroller = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'chat-page-messages-scroll');\n  var messagesContainer = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'chat-page-messages', '', {\n    id: 'messages'\n  });\n  messagesScroller.append(messagesContainer);\n  main.append(messagesScroller);\n  return {\n    main: main,\n    messagesContainer: messagesContainer\n  };\n};\n\n//# sourceURL=webpack:///./components/chat-page-messages/chat-page-messages.js?");

/***/ }),

/***/ "./components/chat-page-messages/chat-page-messages.scss":
/*!***************************************************************!*\
  !*** ./components/chat-page-messages/chat-page-messages.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--7-2!./chat-page-messages.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chat-page-messages/chat-page-messages.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/chat-page-messages/chat-page-messages.scss?");

/***/ }),

/***/ "./components/chats-page-header/chats-page-header.js":
/*!***********************************************************!*\
  !*** ./components/chats-page-header/chats-page-header.js ***!
  \***********************************************************/
/*! exports provided: createChatsPageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChatsPageHeader\", function() { return createChatsPageHeader; });\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ \"./helpers/createElement.js\");\n/* harmony import */ var _chats_page_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats-page-header.scss */ \"./components/chats-page-header/chats-page-header.scss\");\n/* harmony import */ var _chats_page_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chats_page_header_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar createChatsPageHeader = function createChatsPageHeader() {\n  var header = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('header', 'chats-page-header');\n  var headerTitle = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('h1', 'chats-page-header_name', 'Чаты');\n  var searchIcon = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'material-symbols-outlined', 'search');\n  var menuIcon = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'material-symbols-outlined', 'menu');\n  header.append(menuIcon, headerTitle, searchIcon);\n  return header;\n};\n\n//# sourceURL=webpack:///./components/chats-page-header/chats-page-header.js?");

/***/ }),

/***/ "./components/chats-page-header/chats-page-header.scss":
/*!*************************************************************!*\
  !*** ./components/chats-page-header/chats-page-header.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--7-2!./chats-page-header.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chats-page-header/chats-page-header.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/chats-page-header/chats-page-header.scss?");

/***/ }),

/***/ "./components/chats-page-item/chats-page-item.js":
/*!*******************************************************!*\
  !*** ./components/chats-page-item/chats-page-item.js ***!
  \*******************************************************/
/*! exports provided: createChatsPageItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChatsPageItem\", function() { return createChatsPageItem; });\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ \"./helpers/createElement.js\");\n/* harmony import */ var _chats_page_item_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chats-page-item.scss */ \"./components/chats-page-item/chats-page-item.scss\");\n/* harmony import */ var _chats_page_item_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chats_page_item_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar createChatsPageItem = function createChatsPageItem(chat) {\n  var chatItem = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('li', 'chat');\n  var contentBox = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'chat_content-box');\n  var content = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'chat_content');\n  var indicators = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'chat_content chat_indicators');\n  var avatar = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('img', 'chat_avatar');\n  var name = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('h2', 'chat_name', chat.name);\n  var lastMessage = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('p', 'chat_last-message', chat.messages.at(-1).text);\n  var date = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'chat_date', new Date(chat.messages.at(-1).date).toLocaleTimeString());\n  var readabilityIndicator = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'material-symbols-outlined', 'done_all');\n  var notReadabilityIndicator = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'material-symbols-outlined', 'check');\n  var checkedElement = chat.isReadability ? readabilityIndicator : notReadabilityIndicator;\n  avatar.src = chat.avatar;\n  content.append(name, lastMessage);\n  contentBox.append(avatar, content);\n  indicators.append(date, checkedElement);\n  chatItem.append(contentBox, indicators);\n  chatItem.addEventListener('click', function () {\n    window.updateState('chat-page', {\n      chatId: chat.id,\n      chatName: chat.name\n    });\n  });\n  return chatItem;\n};\n\n//# sourceURL=webpack:///./components/chats-page-item/chats-page-item.js?");

/***/ }),

/***/ "./components/chats-page-item/chats-page-item.scss":
/*!*********************************************************!*\
  !*** ./components/chats-page-item/chats-page-item.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--7-2!./chats-page-item.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chats-page-item/chats-page-item.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/chats-page-item/chats-page-item.scss?");

/***/ }),

/***/ "./components/chats-page-items-list/chats-page-items-list.js":
/*!*******************************************************************!*\
  !*** ./components/chats-page-items-list/chats-page-items-list.js ***!
  \*******************************************************************/
/*! exports provided: createChatsPageItemsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChatsPageItemsList\", function() { return createChatsPageItemsList; });\n/* harmony import */ var _chats_page_item_chats_page_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chats-page-item/chats-page-item */ \"./components/chats-page-item/chats-page-item.js\");\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/createElement */ \"./helpers/createElement.js\");\n/* harmony import */ var _mocks_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mocks/mocks */ \"./mocks/mocks.js\");\n/* harmony import */ var _pages_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/chat-page */ \"./pages/chat-page.js\");\n/* harmony import */ var _chats_page_items_list_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chats-page-items-list.scss */ \"./components/chats-page-items-list/chats-page-items-list.scss\");\n/* harmony import */ var _chats_page_items_list_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chats_page_items_list_scss__WEBPACK_IMPORTED_MODULE_4__);\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n\n\n\n\n\nvar createChatsPageItemsList = function createChatsPageItemsList(chat) {\n  var chats = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('ul', 'chats-page-items-list');\n  chats.append.apply(chats, _toConsumableArray(Object(_pages_chat_page__WEBPACK_IMPORTED_MODULE_3__[\"getChatsFromLocalStorage\"])().map(function (e) {\n    return Object(_chats_page_item_chats_page_item__WEBPACK_IMPORTED_MODULE_0__[\"createChatsPageItem\"])(e);\n  })));\n  return chats;\n};\n\n//# sourceURL=webpack:///./components/chats-page-items-list/chats-page-items-list.js?");

/***/ }),

/***/ "./components/chats-page-items-list/chats-page-items-list.scss":
/*!*********************************************************************!*\
  !*** ./components/chats-page-items-list/chats-page-items-list.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--7-2!./chats-page-items-list.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chats-page-items-list/chats-page-items-list.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/chats-page-items-list/chats-page-items-list.scss?");

/***/ }),

/***/ "./components/new-chat-button/new-chat-button.js":
/*!*******************************************************!*\
  !*** ./components/new-chat-button/new-chat-button.js ***!
  \*******************************************************/
/*! exports provided: createNewChatButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNewChatButton\", function() { return createNewChatButton; });\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ \"./helpers/createElement.js\");\n/* harmony import */ var _new_chat_button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-chat-button.scss */ \"./components/new-chat-button/new-chat-button.scss\");\n/* harmony import */ var _new_chat_button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_new_chat_button_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar createNewChatButton = function createNewChatButton() {\n  var newChatButton = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'new-chat-button');\n  var newChatButtonIcon = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'material-symbols-outlined', 'edit');\n  newChatButton.append(newChatButtonIcon);\n  return newChatButton;\n};\n\n//# sourceURL=webpack:///./components/new-chat-button/new-chat-button.js?");

/***/ }),

/***/ "./components/new-chat-button/new-chat-button.scss":
/*!*********************************************************!*\
  !*** ./components/new-chat-button/new-chat-button.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--7-2!./new-chat-button.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/new-chat-button/new-chat-button.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/new-chat-button/new-chat-button.scss?");

/***/ }),

/***/ "./helpers/createElement.js":
/*!**********************************!*\
  !*** ./helpers/createElement.js ***!
  \**********************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nvar createElement = function createElement(tag, className, innerHtml, attributes) {\n  var element = document.createElement(tag);\n  if (className) {\n    element.className = className;\n  }\n  if (innerHtml) {\n    element.innerHTML = innerHtml;\n  }\n  if (attributes) {\n    Object.entries(attributes).forEach(function (_ref) {\n      var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        value = _ref2[1];\n      element.setAttribute(key, value);\n    });\n  }\n  return element;\n};\n\n//# sourceURL=webpack:///./helpers/createElement.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/chat-page */ \"./pages/chat-page.js\");\n/* harmony import */ var _pages_chats_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/chats-page */ \"./pages/chats-page.js\");\n/* harmony import */ var _mocks_mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mocks/mocks */ \"./mocks/mocks.js\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar root = document.getElementById('root');\nvar app = document.createElement('div');\nvar state = 'chats-page';\nvar chatId = 1;\nvar chatName = '';\nvar chats = Object(_pages_chat_page__WEBPACK_IMPORTED_MODULE_0__[\"getChatsFromLocalStorage\"])();\nif (!chats) localStorage.setItem('chats', JSON.stringify(_mocks_mocks__WEBPACK_IMPORTED_MODULE_2__[\"chatsMocks\"]));\nvar updateApp = function updateApp() {\n  app.innerHTML = '';\n  switch (state) {\n    case 'chats-page':\n      app.appendChild(Object(_pages_chats_page__WEBPACK_IMPORTED_MODULE_1__[\"createChatsPage\"])(chatId));\n      break;\n    case 'chat-page':\n      app.appendChild(Object(_pages_chat_page__WEBPACK_IMPORTED_MODULE_0__[\"createChatPage\"])(chatName, chatId));\n      break;\n  }\n  root.appendChild(app);\n};\nwindow.updateState = function (updatedState) {\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  state = updatedState;\n  if (updatedState === 'chat-page') {\n    chatId = params.chatId;\n    chatName = params.chatName;\n  }\n  updateApp();\n};\nupdateApp();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./mocks/mocks.js":
/*!************************!*\
  !*** ./mocks/mocks.js ***!
  \************************/
/*! exports provided: chatsMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatsMocks\", function() { return chatsMocks; });\nvar chatsMocks = [{\n  id: '1',\n  name: 'Оля',\n  avatar: './images/avatar_1.jpg',\n  messages: [{\n    text: 'kkkkkkkkkkkkkkkkk',\n    date: new Date('2024-09-21T22:13:10-04:12')\n  }, {\n    text: 'bbbbbbbbbbbbbbbbbb',\n    date: new Date('2024-10-21T22:14:30-04:12')\n  }, {\n    text: 'cccccccccccccccc',\n    date: new Date('2024-10-22T22:15:45-04:12')\n  }],\n  isReadability: false\n}, {\n  id: '2',\n  name: 'Дима',\n  avatar: './images/avatar_1.jpg',\n  messages: [{\n    text: 'cccccccccccccccc',\n    date: new Date('2024-04-21T22:15:45-04:12')\n  }],\n  isReadability: true\n}, {\n  id: '3',\n  name: 'Ваня',\n  avatar: './images/avatar_1.jpg',\n  messages: [{\n    text: 'aaaaaaaaaaaaaaaaaa',\n    date: new Date('2024-09-21T22:13:10-04:12')\n  }, {\n    text: 'bbbbbbbbbbbbbbbbbb',\n    date: new Date('2024-10-21T22:14:30-04:12')\n  }, {\n    text: 'cccccccccccccccc',\n    date: new Date('2024-10-22T22:15:45-04:12')\n  }],\n  isReadability: false\n}, {\n  id: '4',\n  name: 'Лиза',\n  avatar: './images/avatar_1.jpg',\n  messages: [{\n    text: 'aaaaaaaaaaaaaaaaaa',\n    date: new Date('2024-09-21T22:13:10-04:12')\n  }, {\n    text: 'bbbbbbbbbbbbbbbbbb',\n    date: new Date('2024-10-21T22:14:30-04:12')\n  }, {\n    text: 'cccccccccccccccc',\n    date: new Date('2024-10-22T22:15:45-04:12')\n  }],\n  isReadability: true\n}, {\n  id: '5',\n  name: 'Катя',\n  avatar: './images/avatar_1.jpg',\n  messages: [{\n    text: 'aaaaaaaaaaaaaaaaaa',\n    date: new Date('2024-09-21T22:13:10-04:12')\n  }, {\n    text: 'bbbbbbbbbbbbbbbbbb',\n    date: new Date('2024-10-21T22:14:30-04:12')\n  }, {\n    text: 'cccccccccccccccc',\n    date: new Date('2024-10-22T22:15:45-04:12')\n  }],\n  isReadability: false\n}, {\n  id: '6',\n  name: 'Арина',\n  avatar: './images/avatar_1.jpg',\n  messages: [{\n    text: 'cccccccccccccccc',\n    date: new Date('2024-04-21T22:15:45-04:12')\n  }],\n  isReadability: true\n}, {\n  id: '7',\n  name: 'Максим',\n  avatar: './images/avatar_1.jpg',\n  messages: [{\n    text: 'aaaaaaaaaaaaaaaaaa',\n    date: new Date('2024-09-21T22:13:10-04:12')\n  }, {\n    text: 'bbbbbbbbbbbbbbbbbb',\n    date: new Date('2024-10-21T22:14:30-04:12')\n  }, {\n    text: 'cccccccccccccccc',\n    date: new Date('2024-10-22T22:15:45-04:12')\n  }],\n  isReadability: false\n}, {\n  id: '8',\n  name: 'Вова',\n  avatar: './images/avatar_1.jpg',\n  messages: [{\n    text: 'aaaaaaaaaaaaaaaaaa',\n    date: new Date('2024-09-21T22:13:10-04:12')\n  }, {\n    text: 'bbbbbbbbbbbbbbbbbb',\n    date: new Date('2024-10-21T22:14:30-04:12')\n  }, {\n    text: 'cccccccccccccccc',\n    date: new Date('2024-10-22T22:15:45-04:12')\n  }],\n  isReadability: true\n}];\n\n//# sourceURL=webpack:///./mocks/mocks.js?");

/***/ }),

/***/ "./pages/chat-page.js":
/*!****************************!*\
  !*** ./pages/chat-page.js ***!
  \****************************/
/*! exports provided: getChatsFromLocalStorage, createChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getChatsFromLocalStorage\", function() { return getChatsFromLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChatPage\", function() { return createChatPage; });\n/* harmony import */ var _components_chat_page_header_chat_page_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/chat-page-header/chat-page-header */ \"./components/chat-page-header/chat-page-header.js\");\n/* harmony import */ var _components_chat_page_messages_chat_page_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/chat-page-messages/chat-page-messages */ \"./components/chat-page-messages/chat-page-messages.js\");\n/* harmony import */ var _components_chat_page_footer_chat_page_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chat-page-footer/chat-page-footer */ \"./components/chat-page-footer/chat-page-footer.js\");\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/createElement */ \"./helpers/createElement.js\");\n\n\n\n\nvar getMessageElement = function getMessageElement(message) {\n  var messageDiv = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])('li', 'message');\n  var messageContentDiv = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])('div', 'message-content');\n  var messageTextP = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])('p', 'message-text', message.text);\n  var messageDateSpan = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])('span', 'message-date', new Date(message.date).toLocaleTimeString());\n  messageDiv.append(messageContentDiv);\n  messageContentDiv.append(messageTextP, messageDateSpan);\n  return messageDiv;\n};\nvar getChatsFromLocalStorage = function getChatsFromLocalStorage() {\n  return JSON.parse(localStorage.getItem('chats')) || [];\n};\nvar loadMessagesFromLocalStorage = function loadMessagesFromLocalStorage(messagesContainer, chatId) {\n  var chat = getChatsFromLocalStorage().filter(function (e) {\n    return e.id === chatId;\n  })[0];\n  var fragment = document.createDocumentFragment();\n  chat.messages.forEach(function (message) {\n    var messageElement = getMessageElement({\n      text: message.text,\n      name: chat.name,\n      date: message.date\n    });\n    fragment.appendChild(messageElement);\n  });\n  messagesContainer.appendChild(fragment);\n};\nvar updateMessagesFromLocalStorage = function updateMessagesFromLocalStorage(message, chatId) {\n  var chats = getChatsFromLocalStorage();\n  var chat = chats.filter(function (e) {\n    return e.id === chatId;\n  })[0];\n  chat.messages.push(message);\n  return chats;\n};\nvar saveMessageToLocalStorage = function saveMessageToLocalStorage(message, chatId) {\n  return localStorage.setItem('chats', JSON.stringify(updateMessagesFromLocalStorage(message, chatId)));\n};\nvar handleSubmit = function handleSubmit(event, input, messagesContainer, chatId) {\n  event.preventDefault();\n  var messageText = input.value.trim();\n  if (!messageText) {\n    return;\n  }\n  var message = {\n    text: messageText,\n    name: 'Я',\n    date: new Date()\n  };\n  messagesContainer.append(getMessageElement(message));\n  saveMessageToLocalStorage(message, chatId);\n  input.value = '';\n  messagesContainer.scrollTop = messagesContainer.scrollHeight;\n};\nvar handleKeyPress = function handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    form.dispatchEvent(new Event('submit'));\n  }\n};\nvar createChatPage = function createChatPage(chatName, chatId) {\n  var container = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])('div', 'chat-container');\n  var header = Object(_components_chat_page_header_chat_page_header__WEBPACK_IMPORTED_MODULE_0__[\"createChatPageHeader\"])(chatName);\n  var _createChatPageMessag = Object(_components_chat_page_messages_chat_page_messages__WEBPACK_IMPORTED_MODULE_1__[\"createChatPageMessages\"])(),\n    main = _createChatPageMessag.main,\n    messagesContainer = _createChatPageMessag.messagesContainer;\n  var _createChatPageFooter = Object(_components_chat_page_footer_chat_page_footer__WEBPACK_IMPORTED_MODULE_2__[\"createChatPageFooter\"])(),\n    footer = _createChatPageFooter.footer,\n    form = _createChatPageFooter.form,\n    button = _createChatPageFooter.button,\n    input = _createChatPageFooter.input;\n  container.append(header, main, footer);\n  form.addEventListener('submit', function (e) {\n    return handleSubmit(e, input, messagesContainer, chatId);\n  });\n  form.addEventListener('keypress', function (e) {\n    return handleKeyPress(e);\n  });\n  button.addEventListener('click', function (e) {\n    return handleSubmit(e, input, messagesContainer, chatId);\n  });\n  loadMessagesFromLocalStorage(messagesContainer, chatId);\n  return container;\n};\n\n//# sourceURL=webpack:///./pages/chat-page.js?");

/***/ }),

/***/ "./pages/chats-page.js":
/*!*****************************!*\
  !*** ./pages/chats-page.js ***!
  \*****************************/
/*! exports provided: createChatsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChatsPage\", function() { return createChatsPage; });\n/* harmony import */ var _components_chats_page_header_chats_page_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/chats-page-header/chats-page-header */ \"./components/chats-page-header/chats-page-header.js\");\n/* harmony import */ var _components_chats_page_item_chats_page_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/chats-page-item/chats-page-item */ \"./components/chats-page-item/chats-page-item.js\");\n/* harmony import */ var _components_chats_page_items_list_chats_page_items_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chats-page-items-list/chats-page-items-list */ \"./components/chats-page-items-list/chats-page-items-list.js\");\n/* harmony import */ var _components_new_chat_button_new_chat_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/new-chat-button/new-chat-button */ \"./components/new-chat-button/new-chat-button.js\");\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/createElement */ \"./helpers/createElement.js\");\n/* harmony import */ var _mocks_mocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mocks/mocks */ \"./mocks/mocks.js\");\n\n\n\n\n\n\nvar createChatsPage = function createChatsPage(_ref) {\n  var userId = _ref.userId;\n  var container = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"])('div', 'chats-page-container');\n  var header = Object(_components_chats_page_header_chats_page_header__WEBPACK_IMPORTED_MODULE_0__[\"createChatsPageHeader\"])();\n  var chats = Object(_components_chats_page_items_list_chats_page_items_list__WEBPACK_IMPORTED_MODULE_2__[\"createChatsPageItemsList\"])();\n  var newChatButton = Object(_components_new_chat_button_new_chat_button__WEBPACK_IMPORTED_MODULE_3__[\"createNewChatButton\"])();\n  container.append(header, chats, newChatButton);\n  return container;\n};\n\n//# sourceURL=webpack:///./pages/chats-page.js?");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--7-2!./index.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./styles/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/index.scss?");

/***/ })

/******/ });