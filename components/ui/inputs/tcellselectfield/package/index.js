(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("material-ui/TextField"), require("material-ui/styles"), require("material-ui/Menu"), require("material-ui/List"), require("material-ui-icons/ArrowDropDown"), require("material-ui/IconButton"), require("tcellcomponent"), require("lodash/filter"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "material-ui/TextField", "material-ui/styles", "material-ui/Menu", "material-ui/List", "material-ui-icons/ArrowDropDown", "material-ui/IconButton", "tcellcomponent", "lodash/filter"], factory);
	else if(typeof exports === 'object')
		exports["tcellselectfield"] = factory(require("react"), require("react-dom"), require("material-ui/TextField"), require("material-ui/styles"), require("material-ui/Menu"), require("material-ui/List"), require("material-ui-icons/ArrowDropDown"), require("material-ui/IconButton"), require("tcellcomponent"), require("lodash/filter"));
	else
		root["tcellselectfield"] = factory(root["react"], root["react-dom"], root["material-ui/TextField"], root["material-ui/styles"], root["material-ui/Menu"], root["material-ui/List"], root["material-ui-icons/ArrowDropDown"], root["material-ui/IconButton"], root["tcellcomponent"], root["lodash/filter"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__) {
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

var _TcellSelectField = __webpack_require__(1);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TcellSelectField).default;
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

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TextField = __webpack_require__(4);

var _TextField2 = _interopRequireDefault(_TextField);

var _styles = __webpack_require__(5);

var _Menu = __webpack_require__(6);

var _Menu2 = _interopRequireDefault(_Menu);

var _List = __webpack_require__(7);

var _ArrowDropDown = __webpack_require__(8);

var _ArrowDropDown2 = _interopRequireDefault(_ArrowDropDown);

var _IconButton = __webpack_require__(9);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _tcellcomponent = __webpack_require__(10);

var _filter = __webpack_require__(11);

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    root: {
      padding: 0
    }
  };
};

var ReadOnlyTextField = function (_TcellComponent) {
  _inherits(ReadOnlyTextField, _TcellComponent);

  function ReadOnlyTextField() {
    _classCallCheck(this, ReadOnlyTextField);

    return _possibleConstructorReturn(this, (ReadOnlyTextField.__proto__ || Object.getPrototypeOf(ReadOnlyTextField)).apply(this, arguments));
  }

  _createClass(ReadOnlyTextField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          others = _objectWithoutProperties(_props, ['value']);

      return _react2.default.createElement(_TextField2.default, _extends({ value: value ? value : '' }, others));
    }
  }]);

  return ReadOnlyTextField;
}(_tcellcomponent.TcellComponent);

var TcellSelectField = function (_TcellComponent2) {
  _inherits(TcellSelectField, _TcellComponent2);

  function TcellSelectField(props) {
    _classCallCheck(this, TcellSelectField);

    //this.handleClick = this.handleClick.bind(this);
    var _this2 = _possibleConstructorReturn(this, (TcellSelectField.__proto__ || Object.getPrototypeOf(TcellSelectField)).call(this, props));

    _this2.handleClick = function (event) {
      _this2.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    };

    _this2.handleRequestClose = function () {
      _this2.setState({
        open: false
      });
    };

    _this2.handleMenuItemClick = function (param) {
      var myEvent = {
        target: {
          name: _this2.props.name,
          value: param.option.id
        }
      };
      _this2.setState({
        open: false,
        display: param.option.text
      });
      _this2.props.onChange(myEvent);
    };

    _this2.getClosestUp = function (elem, selector) {
      // Element.matches() polyfill
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
              i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
      }

      // Get closest match
      for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
      }

      return null;
    };

    _this2.state = {
      anchorEl: null,
      open: false,
      display: null
    };
    return _this2;
  }

  _createClass(TcellSelectField, [{
    key: 'setDisplayFromDatasource',
    value: function setDisplayFromDatasource(dataSource, id) {
      if (!id) {
        this.setState({
          display: null
        });
      } else if (dataSource && dataSource.length > 0) {
        var found = (0, _filter2.default)(dataSource, function (item) {
          return item.id === id;
        });
        this.setState({
          display: found && found.length > 0 ? found[0].text : null
        });
      } else {
        this.setState({
          display: id
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value != nextProps.value) {
        var dataSource = this.props.dataSource;
        var value = nextProps.value;

        this.setState({
          value: value
        });
        this.setDisplayFromDatasource(dataSource, value);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          dataSource = _props2.dataSource,
          value = _props2.value;

      var inputNode = _reactDom2.default.findDOMNode(this.textField);
      var inputs = inputNode.querySelectorAll('input');
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute('readonly', 'readonly');
      }

      var firstDiv = this.getClosestUp(inputNode, 'div');
      var secondDiv = this.getClosestUp(firstDiv, 'div');
      if (secondDiv) secondDiv.style.paddingTop = "3px";

      this.setDisplayFromDatasource(dataSource, value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          dataSource = _props3.dataSource,
          onChange = _props3.onChange,
          value = _props3.value,
          classes = _props3.classes,
          others = _objectWithoutProperties(_props3, ['dataSource', 'onChange', 'value', 'classes']);

      this.handleChange = onChange;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _List.ListItem,
          { classes: { root: classes.root } },
          _react2.default.createElement(ReadOnlyTextField, _extends({ ref: function ref(r) {
              _this3.textField = r;
            },
            'aria-owns': this.state.open ? 'simple-menu' : null,
            'aria-haspopup': 'true',
            onClick: this.handleClick,
            value: this.state.display
          }, others)),
          _react2.default.createElement(_ArrowDropDown2.default, null)
        ),
        _react2.default.createElement(
          _Menu2.default,
          {
            id: 'simple-menu',
            anchorEl: this.state.anchorEl,
            open: this.state.open,
            onRequestClose: this.handleRequestClose
          },
          dataSource.map(function (option, index) {
            return _react2.default.createElement(
              _Menu.MenuItem,
              {
                key: index,
                selected: _this3.selectedItem ? index === _this3.selectedItem.id : false,
                onClick: function onClick() {
                  return _this3.handleMenuItemClick({ index: index, option: option });
                } },
              option.text
            );
          })
        )
      );
    }
  }]);

  return TcellSelectField;
}(_tcellcomponent.TcellComponent);

exports.default = (0, _styles.withStyles)(styles)(TcellSelectField);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/ArrowDropDown");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("tcellcomponent");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash/filter");

/***/ })
/******/ ]);
});