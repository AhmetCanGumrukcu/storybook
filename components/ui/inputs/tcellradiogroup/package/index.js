(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("lodash"), require("material-ui/styles"), require("material-ui/Radio"), require("material-ui/Form"), require("tcellcomponent"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "lodash", "material-ui/styles", "material-ui/Radio", "material-ui/Form", "tcellcomponent"], factory);
	else if(typeof exports === 'object')
		exports["tcellradiogroup"] = factory(require("react"), require("prop-types"), require("lodash"), require("material-ui/styles"), require("material-ui/Radio"), require("material-ui/Form"), require("tcellcomponent"));
	else
		root["tcellradiogroup"] = factory(root["react"], root["prop-types"], root["lodash"], root["material-ui/styles"], root["material-ui/Radio"], root["material-ui/Form"], root["tcellcomponent"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
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

var _TcellRadioGroup = __webpack_require__(1);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TcellRadioGroup).default;
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

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = __webpack_require__(5);

var _Radio = __webpack_require__(6);

var _Radio2 = _interopRequireDefault(_Radio);

var _Form = __webpack_require__(7);

var _tcellcomponent = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    group: {
      margin: theme.spacing.unit + 'px 0'
    }
  };
};

var TcellRadioGroup = function (_TcellComponent) {
  _inherits(TcellRadioGroup, _TcellComponent);

  function TcellRadioGroup(props) {
    _classCallCheck(this, TcellRadioGroup);

    var _this = _possibleConstructorReturn(this, (TcellRadioGroup.__proto__ || Object.getPrototypeOf(TcellRadioGroup)).call(this, props));

    _this.handleChange = function (event) {
      var myVal = Number(event.target.value);
      var myEvent = {
        target: {
          name: event.target.name,
          value: event.target.value = _lodash2.default.isNaN(myVal) ? event.target.value : myVal
        }
      };
      _this.props.onChange(myEvent);
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(TcellRadioGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          name = _props.name,
          label = _props.label,
          value = _props.value,
          children = _props.children,
          error = _props.error;

      return _react2.default.createElement(
        _Form.FormControl,
        { component: 'fieldset', error: error },
        _react2.default.createElement(
          _Form.FormLabel,
          { component: 'legend' },
          label
        ),
        _react2.default.createElement(
          _Radio.RadioGroup,
          {
            'aria-label': label,
            name: name,
            className: classes.group,
            value: value,
            onChange: this.handleChange
          },
          children
        )
      );
    }
  }]);

  return TcellRadioGroup;
}(_tcellcomponent.TcellComponent);

TcellRadioGroup.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(TcellRadioGroup);

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

module.exports = require("lodash");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Radio");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Form");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("tcellcomponent");

/***/ })
/******/ ]);
});