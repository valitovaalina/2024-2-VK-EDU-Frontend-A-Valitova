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
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--6-2!./components/chat-page-footer/chat-page-footer.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"input[type=submit] {\\n  visibility: collapse;\\n}\\n\\n.form_input {\\n  outline: 0;\\n  width: 100%;\\n  padding: 10px 13px 10px 23px;\\n  border: 0;\\n}\\n\\n.form_send-button {\\n  background: none;\\n  border: none;\\n}\\n\\n.form_send-button:hover {\\n  opacity: 50%;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/chat-page-footer/chat-page-footer.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--6-2");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chat-page-header/chat-page-header.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--6-2!./components/chat-page-header/chat-page-header.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".header {\\n  height: 60px;\\n  border-bottom: 2px solid #DDD;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 20px;\\n  background-color: rgb(252, 197, 33);\\n}\\n\\n.header_name {\\n  font-size: 20px;\\n  font-style: normal;\\n  font-weight: 600;\\n}\\n\\n.header_icons {\\n  display: flex;\\n  gap: 10px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/chat-page-header/chat-page-header.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--6-2");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chat-page-messages/chat-page-messages.scss":
/*!********************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--6-2!./components/chat-page-messages/chat-page-messages.scss ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".messages-scroll {\\n  max-height: 630px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-end;\\n}\\n\\n.messages {\\n  display: flex;\\n  flex-direction: column;\\n  overflow-y: auto;\\n  padding-top: 10px;\\n}\\n\\n.messages::-webkit-scrollbar {\\n  height: 100px;\\n  width: 7px;\\n}\\n\\n.messages::-webkit-scrollbar-thumb {\\n  background-color: #A6A3A3;\\n  border-radius: 20px;\\n  border: 3px solid transparent;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./components/chat-page-messages/chat-page-messages.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--6-2");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./styles/index.scss":
/*!********************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--6-2!./styles/index.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".form {\\n  width: 100%;\\n  border: 1px solid rgba(25, 25, 25, 0.32);\\n  position: fixed;\\n  bottom: 0;\\n  display: flex;\\n  border-top: 2px solid #DDD;\\n  background: #FFF;\\n  padding-right: 7px;\\n  max-height: 100px;\\n  align-items: center;\\n}\\n\\n.chat-container {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.header {\\n  height: 60px;\\n  border-bottom: 2px solid #DDD;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 20px;\\n  background-color: rgb(252, 197, 33);\\n}\\n\\n.header_name {\\n  font-size: 20px;\\n  font-style: normal;\\n  font-weight: 600;\\n}\\n\\n.header_icons {\\n  display: flex;\\n  gap: 10px;\\n}\\n\\n.messages-scroll {\\n  max-height: 630px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-end;\\n}\\n\\n.messages {\\n  display: flex;\\n  flex-direction: column;\\n  overflow-y: auto;\\n  padding-top: 10px;\\n}\\n\\n.messages::-webkit-scrollbar {\\n  height: 100px;\\n  width: 7px;\\n}\\n\\n.messages::-webkit-scrollbar-thumb {\\n  background-color: #A6A3A3;\\n  border-radius: 20px;\\n  border: 3px solid transparent;\\n}\\n\\n.message {\\n  display: flex;\\n  justify-content: flex-end;\\n  margin-bottom: 10px;\\n}\\n\\n.message-content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  padding: 0.3125rem 0.5rem 0.375rem;\\n  background-color: #428BF9;\\n  border-radius: 15px 15px 0 15px;\\n  max-width: 500px;\\n  margin-right: 10px;\\n}\\n\\n.message-text {\\n  color: #FFF;\\n  word-break: break-word;\\n  margin: 0;\\n}\\n\\n.message-date {\\n  color: #FFF;\\n  font-size: 12px;\\n  display: flex;\\n  align-items: flex-end;\\n  padding-left: 10px;\\n}\\n\\n.form_input {\\n  outline: 0;\\n  width: 100%;\\n  padding: 10px 13px 10px 23px;\\n  border: 0;\\n}\\n\\n.form_send-button {\\n  background: none;\\n  border: none;\\n}\\n\\n.form_send-button:hover {\\n  opacity: 50%;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./styles/index.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ref--6-2");

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

/***/ "./components/chat-page-footer/chat-page-footer.scss":
/*!***********************************************************!*\
  !*** ./components/chat-page-footer/chat-page-footer.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./chat-page-footer.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chat-page-footer/chat-page-footer.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/chat-page-footer/chat-page-footer.scss?");

/***/ }),

/***/ "./components/chat-page-footer/index.js":
/*!**********************************************!*\
  !*** ./components/chat-page-footer/index.js ***!
  \**********************************************/
/*! exports provided: createChatPageFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChatPageFooter\", function() { return createChatPageFooter; });\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ \"./helpers/createElement.js\");\n/* harmony import */ var _chat_page_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-page-footer.scss */ \"./components/chat-page-footer/chat-page-footer.scss\");\n/* harmony import */ var _chat_page_footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chat_page_footer_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar createChatPageFooter = function createChatPageFooter() {\n  var footer = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('footer');\n  var form = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('form', '', '', {\n    'id': 'form'\n  });\n  var input = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', 'form_input', '', {\n    'id': 'form_input',\n    'name': 'message-text',\n    'placeholder': 'Сообщение',\n    'type': 'text'\n  });\n  var button = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('button', 'form_send-button', 'отправить', {\n    'id': 'form_send-button'\n  });\n  form.append(input, button);\n  footer.append(form);\n  return footer;\n};\n\n//# sourceURL=webpack:///./components/chat-page-footer/index.js?");

/***/ }),

/***/ "./components/chat-page-header/chat-page-header.scss":
/*!***********************************************************!*\
  !*** ./components/chat-page-header/chat-page-header.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./chat-page-header.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chat-page-header/chat-page-header.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/chat-page-header/chat-page-header.scss?");

/***/ }),

/***/ "./components/chat-page-header/index.js":
/*!**********************************************!*\
  !*** ./components/chat-page-header/index.js ***!
  \**********************************************/
/*! exports provided: createChatPageHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChatPageHeader\", function() { return createChatPageHeader; });\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ \"./helpers/createElement.js\");\n/* harmony import */ var _chat_page_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-page-header.scss */ \"./components/chat-page-header/chat-page-header.scss\");\n/* harmony import */ var _chat_page_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chat_page_header_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar createChatPageHeader = function createChatPageHeader() {\n  var header = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('header', 'header');\n  var headerTitle = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'header_name', 'Иван');\n  var headerIcons = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'header_icons');\n  var searchIcon = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'material-symbols-outlined', 'search');\n  var settingsIcon = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'material-symbols-outlined', 'settings');\n  headerIcons.append(searchIcon, settingsIcon);\n  header.append(headerTitle, headerIcons);\n  return header;\n};\n\n//# sourceURL=webpack:///./components/chat-page-header/index.js?");

/***/ }),

/***/ "./components/chat-page-messages/chat-page-messages.scss":
/*!***************************************************************!*\
  !*** ./components/chat-page-messages/chat-page-messages.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./chat-page-messages.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./components/chat-page-messages/chat-page-messages.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./components/chat-page-messages/chat-page-messages.scss?");

/***/ }),

/***/ "./components/chat-page-messages/index.js":
/*!************************************************!*\
  !*** ./components/chat-page-messages/index.js ***!
  \************************************************/
/*! exports provided: createChatPageMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChatPageMessages\", function() { return createChatPageMessages; });\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/createElement */ \"./helpers/createElement.js\");\n/* harmony import */ var _chat_page_messages_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-page-messages.scss */ \"./components/chat-page-messages/chat-page-messages.scss\");\n/* harmony import */ var _chat_page_messages_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chat_page_messages_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar createChatPageMessages = function createChatPageMessages() {\n  var main = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('main');\n  var messagesScroller = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'messages-scroll');\n  var messages = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'messages', '', {\n    'id': 'messages'\n  });\n  messagesScroller.append(messages);\n  main.append(messagesScroller);\n  return main;\n};\n\n//# sourceURL=webpack:///./components/chat-page-messages/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/chat-page */ \"./pages/chat-page.js\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ \"./styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar root = document.getElementById('root');\nvar App = document.createElement('div');\nApp.id = 'App';\nvar state = 'chat-page';\nvar userId = 31;\nvar chatId = null;\nvar updateApp = function updateApp() {\n  App.innerHTML = '';\n  switch (state) {\n    // case \"chat\":\n    //     App.appendChild(createChatActivity({userId: userId, chatId: chatId}));\n    //     break;\n    case \"chat-page\":\n      App.appendChild(Object(_pages_chat_page__WEBPACK_IMPORTED_MODULE_0__[\"createChatPage\"])({\n        userId: userId\n      }));\n      break;\n  }\n  root.appendChild(App);\n};\nwindow.updateState = function (newState) {\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  state = newState;\n  if (newState === 'chat') {\n    chatId = params.chatId;\n  }\n  updateApp();\n};\nwindow.addEventListener('storage', function (event) {\n  if (event.key === 'chats') {\n    var updatedChats = JSON.parse(event.newValue);\n  }\n});\nupdateApp();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./pages/chat-page.js":
/*!****************************!*\
  !*** ./pages/chat-page.js ***!
  \****************************/
/*! exports provided: createChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChatPage\", function() { return createChatPage; });\n/* harmony import */ var _components_chat_page_header_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/chat-page-header/index */ \"./components/chat-page-header/index.js\");\n/* harmony import */ var _components_chat_page_messages_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/chat-page-messages/index */ \"./components/chat-page-messages/index.js\");\n/* harmony import */ var _components_chat_page_footer_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/chat-page-footer/index */ \"./components/chat-page-footer/index.js\");\n/* harmony import */ var _helpers_createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/createElement */ \"./helpers/createElement.js\");\n\n\n\n\nvar createChatPage = function createChatPage(_ref) {\n  var userId = _ref.userId;\n  var container = Object(_helpers_createElement__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])('div', 'chat-container');\n  container.append(Object(_components_chat_page_header_index__WEBPACK_IMPORTED_MODULE_0__[\"createChatPageHeader\"])(), Object(_components_chat_page_messages_index__WEBPACK_IMPORTED_MODULE_1__[\"createChatPageMessages\"])(), Object(_components_chat_page_footer_index__WEBPACK_IMPORTED_MODULE_2__[\"createChatPageFooter\"])());\n  return container;\n};\n\n//# sourceURL=webpack:///./pages/chat-page.js?");

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./index.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js?!./styles/index.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./styles/index.scss?");

/***/ })

/******/ });