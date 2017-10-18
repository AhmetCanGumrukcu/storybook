(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("material-ui/Button"), require("material-ui/Dialog"), require("tcellcomponent"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "material-ui/Button", "material-ui/Dialog", "tcellcomponent", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["tcelldialog"] = factory(require("react"), require("prop-types"), require("material-ui/Button"), require("material-ui/Dialog"), require("tcellcomponent"), require("lodash"));
	else
		root["tcelldialog"] = factory(root["react"], root["prop-types"], root["material-ui/Button"], root["material-ui/Dialog"], root["tcellcomponent"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TcellDialog = __webpack_require__(1);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TcellDialog).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(4);

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = __webpack_require__(5);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _tcellcomponent = __webpack_require__(6);

var _lodash = __webpack_require__(7);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TcellDialog = function (_TcellComponent) {
  _inherits(TcellDialog, _TcellComponent);

  function TcellDialog() {
    _classCallCheck(this, TcellDialog);

    return _possibleConstructorReturn(this, (TcellDialog.__proto__ || Object.getPrototypeOf(TcellDialog)).apply(this, arguments));
  }

  _createClass(TcellDialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          children = _props.children,
          name = _props.name,
          cancel = _props.cancel,
          ok = _props.ok,
          title = _props.title,
          other = _objectWithoutProperties(_props, ['value', 'children', 'name', 'cancel', 'ok', 'title']);

      var dialogContent = undefined;

      var contentChildren = children[0].props.children;
      if (_lodash2.default.isFunction(contentChildren)) {
        dialogContent = _react2.default.createElement(contentChildren);
      } else {
        dialogContent = contentChildren;
      }

      var actionsChildren = children[1].props.children;

      return _react2.default.createElement(
        _Dialog2.default,
        _extends({
          ignoreBackdropClick: true,
          ignoreEscapeKeyUp: true
        }, other),
        _react2.default.createElement(
          _Dialog.DialogTitle,
          null,
          title
        ),
        _react2.default.createElement(
          _Dialog.DialogContent,
          null,
          dialogContent
        ),
        _react2.default.createElement(
          _Dialog.DialogActions,
          null,
          actionsChildren
        )
      );
    }
  }]);

  return TcellDialog;
}(_tcellcomponent.TcellComponent);

exports.default = TcellDialog;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Dialog");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("tcellcomponent");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })
/******/ ]);
});