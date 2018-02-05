(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("material-ui/styles"), require("material-ui/Menu"), require("material-ui/Button"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "material-ui/styles", "material-ui/Menu", "material-ui/Button"], factory);
	else if(typeof exports === 'object')
		exports["tcellpopupmenu"] = factory(require("react"), require("prop-types"), require("material-ui/styles"), require("material-ui/Menu"), require("material-ui/Button"));
	else
		root["tcellpopupmenu"] = factory(root["react"], root["prop-types"], root["material-ui/styles"], root["material-ui/Menu"], root["material-ui/Button"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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

var _TcellPopupMenu = __webpack_require__(1);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TcellPopupMenu).default;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(4);

var _Menu = __webpack_require__(5);

var _Menu2 = _interopRequireDefault(_Menu);

var _Button = __webpack_require__(6);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TcellPopupMenu = function (_React$Component) {
    _inherits(TcellPopupMenu, _React$Component);

    function TcellPopupMenu(props) {
        _classCallCheck(this, TcellPopupMenu);

        var _this = _possibleConstructorReturn(this, (TcellPopupMenu.__proto__ || Object.getPrototypeOf(TcellPopupMenu)).call(this, props));

        _this.handleClick = function (event) {
            _this.setState({ anchorEl: event.currentTarget });
        };

        _this.handleClose = function () {
            _this.setState({ anchorEl: null });
        };

        _this.state = { anchorEl: null };
        _this.props = { propType: null };
        _this.props = { buttonName: "Open menu" };
        return _this;
    }

    _createClass(TcellPopupMenu, [{
        key: 'render',
        value: function render() {
            var anchorEl = this.state.anchorEl;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Button2.default,
                    {
                        'aria-owns': anchorEl ? 'simple-menu' : null,
                        'aria-haspopup': 'true',
                        onClick: this.handleClick
                    },
                    this.props.buttonName
                ),
                _react2.default.createElement(
                    _Menu2.default,
                    {
                        id: 'simple-menu',
                        anchorEl: anchorEl,
                        open: Boolean(anchorEl),
                        onClose: this.handleClose
                    },
                    _react2.default.createElement(
                        _Menu.MenuItem,
                        { onClick: this.handleClose },
                        'Profile'
                    ),
                    _react2.default.createElement(
                        _Menu.MenuItem,
                        { onClick: this.handleClose },
                        'Hesab\u0131m'
                    ),
                    _react2.default.createElement(
                        _Menu.MenuItem,
                        { onClick: this.handleClose },
                        '\xC7\u0131k\u0131\u015F Yap'
                    )
                )
            );
        }
    }]);

    return TcellPopupMenu;
}(_react2.default.Component);

TcellPopupMenu.defaultProps = { buttonName: "Default Name" };

exports.default = TcellPopupMenu;

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

module.exports = require("material-ui/styles");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ })
/******/ ]);
});