(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("classnames"), require("material-ui/styles"), require("material-ui/Badge"), require("tcellcomponent"), require("material-ui-icons/Mail"), require("material-ui-icons/Voicemail"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "classnames", "material-ui/styles", "material-ui/Badge", "tcellcomponent", "material-ui-icons/Mail", "material-ui-icons/Voicemail"], factory);
	else if(typeof exports === 'object')
		exports["tcellbadges"] = factory(require("react"), require("prop-types"), require("classnames"), require("material-ui/styles"), require("material-ui/Badge"), require("tcellcomponent"), require("material-ui-icons/Mail"), require("material-ui-icons/Voicemail"));
	else
		root["tcellbadges"] = factory(root["react"], root["prop-types"], root["classnames"], root["material-ui/styles"], root["material-ui/Badge"], root["tcellcomponent"], root["material-ui-icons/Mail"], root["material-ui-icons/Voicemail"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__) {
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

var _TcellBadges = __webpack_require__(1);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TcellBadges).default;
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

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(5);

var _Badge = __webpack_require__(6);

var _Badge2 = _interopRequireDefault(_Badge);

var _tcellcomponent = __webpack_require__(7);

var _Mail = __webpack_require__(8);

var _Mail2 = _interopRequireDefault(_Mail);

var _Voicemail = __webpack_require__(9);

var _Voicemail2 = _interopRequireDefault(_Voicemail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    badge: {
        margin: "0px"
    }
};

var TcellBadges = function (_TcellComponent) {
    _inherits(TcellBadges, _TcellComponent);

    function TcellBadges() {
        _classCallCheck(this, TcellBadges);

        return _possibleConstructorReturn(this, (TcellBadges.__proto__ || Object.getPrototypeOf(TcellBadges)).apply(this, arguments));
    }

    _createClass(TcellBadges, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Badge2.default,
                _extends({ style: styles.badge }, this.props),
                _react2.default.createElement(_Mail2.default, null)
            );
        }
    }]);

    return TcellBadges;
}(_tcellcomponent.TcellComponent);

TcellBadges.propTypes = {
    badgeContent: _propTypes2.default.string,
    color: _propTypes2.default.strig
};

TcellBadges.defaultProps = {
    badgeContent: 4,
    color: "primary"
};

exports.default = (0, _styles.withStyles)(styles)(TcellBadges);

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

module.exports = require("classnames");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Badge");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("tcellcomponent");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Mail");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Voicemail");

/***/ })
/******/ ]);
});