(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("material-ui/Input"), require("tcellcomponent"), require("react-text-mask-hoc"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "material-ui/Input", "tcellcomponent", "react-text-mask-hoc"], factory);
	else if(typeof exports === 'object')
		exports["tcellinputmask"] = factory(require("react"), require("prop-types"), require("material-ui/Input"), require("tcellcomponent"), require("react-text-mask-hoc"));
	else
		root["tcellinputmask"] = factory(root["react"], root["prop-types"], root["material-ui/Input"], root["tcellcomponent"], root["react-text-mask-hoc"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Input");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TcellInputMask = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tcellcomponent = __webpack_require__(4);

var _reactTextMaskHoc = __webpack_require__(5);

var _InputAdapter = __webpack_require__(6);

var _Input = __webpack_require__(2);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TcellInputMask = exports.TcellInputMask = function (_TcellComponent) {
    _inherits(TcellInputMask, _TcellComponent);

    function TcellInputMask(props) {
        _classCallCheck(this, TcellInputMask);

        //this.state={ maskedValue: this.props.maskedValue };
        var _this = _possibleConstructorReturn(this, (TcellInputMask.__proto__ || Object.getPrototypeOf(TcellInputMask)).call(this, props));

        _this.state = { maskedValue: _this.props.value };
        //this.onChange = this.onChange.bind(this);
        return _this;
    }

    // onChange(event) {
    //     this.setState({maskedValue: event.target.value});
    //     if(this.props.onChange) {
    //         this.props.onChange(event.target.value);
    //     }
    // }


    _createClass(TcellInputMask, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            debugger;
            if (this.props.value != nextProps.value) {
                if (this.props.onChange) {
                    this.props.onChange({
                        target: {
                            value: nextProps.value,
                            name: this.props.name
                        }
                    });
                }
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                mask = _props.mask,
                onChange = _props.onChange,
                isSpacesIncluded = _props.isSpacesIncluded,
                filterOutChars = _props.filterOutChars,
                rest = _objectWithoutProperties(_props, ['mask', 'onChange', 'isSpacesIncluded', 'filterOutChars']);

            return _react2.default.createElement(_reactTextMaskHoc.TextMask, _extends({}, rest, {
                Component: _InputAdapter.InputAdapter,
                value: this.props.value,
                mask: this.props.mask,
                onChange: this.props.onChange
            }));
        }
    }]);

    return TcellInputMask;
}(_tcellcomponent.TcellComponent);

TcellInputMask.propTypes = {
    name: _propTypes2.default.string,
    autoFocus: _propTypes2.default.bool,
    inputComponent: _propTypes2.default.func,
    maskedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    rawValue: _propTypes2.default.any,
    onChange: _propTypes2.default.func,
    disabled: _propTypes2.default.bool,
    error: _propTypes2.default.bool,
    fullWidth: _propTypes2.default.bool,
    id: _propTypes2.default.string,
    inputProps: _propTypes2.default.array,
    mask: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func, _propTypes2.default.bool, _propTypes2.default.shape({
        mask: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.func]),
        pipe: _propTypes2.default.func
    })]).isRequired,
    placeholderChar: _propTypes2.default.string,
    keepCharPositions: _propTypes2.default.bool,
    pipe: _propTypes2.default.func,
    showMask: _propTypes2.default.bool
};

exports.default = TcellInputMask;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("tcellcomponent");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-text-mask-hoc");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InputAdapter = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = __webpack_require__(2);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isAndroid = navigator != null && /Android/i.test(navigator.userAgent);

var InputAdapter = exports.InputAdapter = (_temp2 = _class = function (_Component) {
    _inherits(InputAdapter, _Component);

    function InputAdapter() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, InputAdapter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InputAdapter.__proto__ || Object.getPrototypeOf(InputAdapter)).call.apply(_ref, [this].concat(args))), _this), _this._getRef = function (ref) {
            _this.input = ref;
        }, _this._onChange = function (event) {

            event.persist();
            _this.props.onChange(event);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InputAdapter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._setCaretPosition();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this._setCaretPosition();
        }
    }, {
        key: '_setCaretPosition',
        value: function _setCaretPosition() {
            var _this2 = this;

            if (this.input === document.activeElement) {
                if (isAndroid === true) {
                    setTimeout(function () {
                        _this2.input.setSelectionRange(_this2.props.caretPosition, _this2.props.caretPosition, 'none');
                    }, 0);
                } else {
                    this.input.setSelectionRange(this.props.caretPosition, this.props.caretPosition, 'none');
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                caretPosition = _props.caretPosition,
                onChange = _props.onChange,
                rest = _objectWithoutProperties(_props, ['caretPosition', 'onChange']);

            return _react2.default.createElement(_Input2.default, _extends({ ref: this._getRef, type: 'text', onChange: this._onChange }, rest));
        }
    }, {
        key: 'caretPosition',
        get: function get() {
            return this.input.selectionEnd;
        }
    }]);

    return InputAdapter;
}(_react.Component), _class.propTypes = {
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
    caretPosition: _propTypes2.default.number.isRequired,
    onChange: _propTypes2.default.func.isRequired
}, _temp2);

/***/ })
/******/ ]);
});