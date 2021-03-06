(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("tcellcomponent"), require("material-ui/Button"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "tcellcomponent", "material-ui/Button"], factory);
	else if(typeof exports === 'object')
		exports["tcellbutton"] = factory(require("react"), require("prop-types"), require("tcellcomponent"), require("material-ui/Button"));
	else
		root["tcellbutton"] = factory(root["react"], root["prop-types"], root["tcellcomponent"], root["material-ui/Button"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
exports.TcellButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tcellcomponent = __webpack_require__(3);

var _Button = __webpack_require__(4);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TcellButton = exports.TcellButton = function (_TcellComponent) {
    _inherits(TcellButton, _TcellComponent);

    function TcellButton(props) {
        _classCallCheck(this, TcellButton);

        return _possibleConstructorReturn(this, (TcellButton.__proto__ || Object.getPrototypeOf(TcellButton)).call(this, props));
    }

    _createClass(TcellButton, [{
        key: 'createFlatButton',
        value: function createFlatButton(props) {
            return _react2.default.createElement(_Button2.default, props);
        }
    }, {
        key: 'createRaisedButton',
        value: function createRaisedButton(props) {
            return _react2.default.createElement(_Button2.default, _extends({ raised: true }, props));
        }
    }, {
        key: 'createFloatingActionButton',
        value: function createFloatingActionButton(props) {
            return _react2.default.createElement(_Button2.default, _extends({ fab: true }, props));
        }
    }, {
        key: 'createButton',
        value: function createButton() {
            var _props = this.props,
                type = _props.type,
                others = _objectWithoutProperties(_props, ['type']);

            if (type) {
                switch (type) {
                    default:
                    case "flat":
                        return this.createFlatButton(others);
                    case "raised":
                        return this.createRaisedButton(others);
                    case "floatingAction":
                        return this.createFloatingActionButton(others);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var button = this.createButton();
            return button;
        }
    }]);

    return TcellButton;
}(_tcellcomponent.TcellComponent);

TcellButton.propTypes = {
    color: _propTypes2.default.oneOf(["default", "inherit", "primary", "accent", "contrast"]),
    component: _propTypes2.default.element,
    dense: _propTypes2.default.bool,
    disabled: _propTypes2.default.bool,
    disableFocusRipple: _propTypes2.default.bool,
    disableRipple: _propTypes2.default.bool,
    href: _propTypes2.default.string,
    type: _propTypes2.default.oneOf(["flat", "raised", "floatingAction"]),
    onClick: _propTypes2.default.func,
    onTouchTap: _propTypes2.default.func
};

exports.default = TcellButton;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("tcellcomponent");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ })
/******/ ]);
});