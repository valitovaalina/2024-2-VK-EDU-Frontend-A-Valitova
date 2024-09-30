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

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar form = document.getElementById('form');\nvar input = document.getElementById('form_input');\nvar messagesContainer = document.getElementById('messages');\nvar sendButton = document.getElementById('form_send-button');\nvar getMessageElement = function getMessageElement(message) {\n  var messageDiv = document.createElement('li');\n  var messageContentDiv = document.createElement('div');\n  var messageTextP = document.createElement('p');\n  var messageDateSpan = document.createElement('span');\n  messageDiv.className = 'message';\n  messageContentDiv.className = 'message-content';\n  messageTextP.className = 'message-text';\n  messageDateSpan.className = 'message-date';\n  messageTextP.innerText = message.text;\n  messageDateSpan.innerHTML = message.date;\n  messageDiv.append(messageContentDiv);\n  messageContentDiv.append(messageTextP);\n  messageContentDiv.append(messageDateSpan);\n  return messageDiv;\n};\nvar getMessagesFromLocalStorage = function getMessagesFromLocalStorage() {\n  return JSON.parse(localStorage.getItem('messages')) || [];\n};\nvar loadMessagesFromLocalStorage = function loadMessagesFromLocalStorage() {\n  var messages = getMessagesFromLocalStorage();\n  var fragment = document.createDocumentFragment();\n  messages.forEach(function (message) {\n    var messageElement = getMessageElement({\n      text: message.text,\n      name: message.name,\n      date: message.date\n    });\n    fragment.appendChild(messageElement);\n  });\n  messagesContainer.appendChild(fragment);\n};\nvar saveMessageToLocalStorage = function saveMessageToLocalStorage(message) {\n  var messages = getMessagesFromLocalStorage();\n  messages.push(message);\n  localStorage.setItem('messages', JSON.stringify(messages));\n};\nvar handleSubmit = function handleSubmit(event) {\n  event.preventDefault();\n  var messageText = input.value.trim();\n  if (!messageText) {\n    return;\n  }\n  var message = {\n    text: messageText,\n    name: 'Я',\n    date: new Date().toLocaleTimeString()\n  };\n  messagesContainer.append(getMessageElement(message));\n  saveMessageToLocalStorage(message);\n  input.value = '';\n  messagesContainer.scrollTop = messagesContainer.scrollHeight;\n};\nvar handleKeyPress = function handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    form.dispatchEvent(new Event('submit'));\n  }\n};\nloadMessagesFromLocalStorage();\nform.addEventListener('submit', function (e) {\n  return handleSubmit(e);\n});\nform.addEventListener('keypress', function (e) {\n  return handleKeyPress(e);\n});\nsendButton.addEventListener('click', function (e) {\n  return handleSubmit(e);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });