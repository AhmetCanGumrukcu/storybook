(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("classnames"), require("material-ui/styles"), require("material-ui/Card"), require("material-ui/transitions/Collapse"), require("material-ui/Avatar"), require("material-ui/IconButton"), require("material-ui-icons/ExpandMore"), require("tcellcomponent"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "classnames", "material-ui/styles", "material-ui/Card", "material-ui/transitions/Collapse", "material-ui/Avatar", "material-ui/IconButton", "material-ui-icons/ExpandMore", "tcellcomponent"], factory);
	else if(typeof exports === 'object')
		exports["tcellcard"] = factory(require("react"), require("prop-types"), require("classnames"), require("material-ui/styles"), require("material-ui/Card"), require("material-ui/transitions/Collapse"), require("material-ui/Avatar"), require("material-ui/IconButton"), require("material-ui-icons/ExpandMore"), require("tcellcomponent"));
	else
		root["tcellcard"] = factory(root["react"], root["prop-types"], root["classnames"], root["material-ui/styles"], root["material-ui/Card"], root["material-ui/transitions/Collapse"], root["material-ui/Avatar"], root["material-ui/IconButton"], root["material-ui-icons/ExpandMore"], root["tcellcomponent"]);
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

var _TcellCard = __webpack_require__(1);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TcellCard).default;
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

var _classnames2 = __webpack_require__(4);

var _classnames3 = _interopRequireDefault(_classnames2);

var _styles = __webpack_require__(5);

var _Card = __webpack_require__(6);

var _Card2 = _interopRequireDefault(_Card);

var _Collapse = __webpack_require__(7);

var _Collapse2 = _interopRequireDefault(_Collapse);

var _Avatar = __webpack_require__(8);

var _Avatar2 = _interopRequireDefault(_Avatar);

var _IconButton = __webpack_require__(9);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _ExpandMore = __webpack_require__(10);

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _tcellcomponent = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return {
        root: {
            margin: 20,
            background: 'white'
        },
        expand: {
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest
            })
        },
        expandOpen: {
            transform: 'rotate(180deg)'
        },
        flexGrow: {
            flex: '1 1 auto'
        },
        flexContainer: {
            display: 'flex',
            alignItems: 'center'
        }
    };
};

var TcellCard1 = function (_TcellComponent) {
    _inherits(TcellCard1, _TcellComponent);

    function TcellCard1() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TcellCard1);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TcellCard1.__proto__ || Object.getPrototypeOf(TcellCard1)).call.apply(_ref, [this].concat(args))), _this), _this.showExpansionIcon = function () {
            if (_this.props.expandable) {
                return _react2.default.createElement(
                    _IconButton2.default,
                    { className: (0, _classnames3.default)(_this.props.classes.expand, _defineProperty({}, _this.props.classes.expandOpen, _this.props.expanded)),
                        onClick: _this.props.onClick,
                        'aria-expanded': _this.props.expanded,
                        'aria-label': 'Show more' },
                    _react2.default.createElement(_ExpandMore2.default, null)
                );
            }
        }, _this.getContent = function () {
            if (_this.props.expandable) {
                return _react2.default.createElement(
                    _Collapse2.default,
                    { 'in': _this.props.expanded, transitionDuration: 'auto' },
                    _react2.default.createElement(
                        _Card.CardContent,
                        null,
                        _this.props.children
                    )
                );
            } else {
                return _react2.default.createElement(
                    _Card.CardContent,
                    null,
                    _this.props.children
                );
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TcellCard1, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                raised = _props.raised,
                classes = _props.classes,
                title = _props.title,
                subtitle = _props.subtitle,
                name = _props.name;


            return _react2.default.createElement(
                _Card2.default,
                { raised: raised, classes: { root: classes.root } },
                _react2.default.createElement(_Card.CardHeader, {
                    avatar: _react2.default.createElement(
                        _Avatar2.default,
                        { 'aria-label': 'Recipe' },
                        'R'
                    ),
                    title: _react2.default.createElement(
                        'div',
                        { className: classes.flexContainer },
                        _react2.default.createElement(
                            'span',
                            null,
                            title
                        ),
                        _react2.default.createElement('div', { className: classes.flexGrow }),
                        this.showExpansionIcon()
                    ),
                    subheader: subtitle
                }),
                this.getContent()
            );
        }
    }]);

    return TcellCard1;
}(_tcellcomponent.TcellComponent);

var TcellCard = function (_TcellComponent2) {
    _inherits(TcellCard, _TcellComponent2);

    function TcellCard(props) {
        _classCallCheck(this, TcellCard);

        var _this2 = _possibleConstructorReturn(this, (TcellCard.__proto__ || Object.getPrototypeOf(TcellCard)).call(this, props));

        _this2.handleExpandClick = _this2.handleExpandClick.bind(_this2);
        if (props.viewStoreObject) {
            _this2.state = {
                expanded: props.viewStoreObject.expanded
            };
        } else {
            _this2.state = {
                expanded: props.expanded
            };
        }
        return _this2;
    }

    _createClass(TcellCard, [{
        key: 'maintainViewState',
        value: function maintainViewState(viewStoreObject, expanded) {
            if (viewStoreObject) {
                viewStoreObject["expanded"] = expanded ? true : false;
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var viewStoreObject = this.props.viewStoreObject;

            if (viewStoreObject) {
                this.setState({ expanded: viewStoreObject.expanded ? true : false });
            }
        }
    }, {
        key: 'handleExpandClick',
        value: function handleExpandClick() {
            var viewStoreObject = this.props.viewStoreObject;

            var newState = !this.state.expanded;

            this.setState({ expanded: newState }, this.maintainViewState(viewStoreObject, newState));
        }
    }, {
        key: 'decideExpanded',
        value: function decideExpanded() {
            var _props2 = this.props,
                expanded = _props2.expanded,
                onClick = _props2.onClick,
                others = _objectWithoutProperties(_props2, ['expanded', 'onClick']);

            return _react2.default.createElement(TcellCard1, _extends({
                expanded: this.state.expanded,
                onClick: this.handleExpandClick
            }, others));
        }
    }, {
        key: 'render',
        value: function render() {
            return this.decideExpanded();
        }
    }]);

    return TcellCard;
}(_tcellcomponent.TcellComponent);

TcellCard.propTypes = {
    raised: _propTypes2.default.bool,
    expanded: _propTypes2.default.bool,
    title: _propTypes2.default.string,
    subtitle: _propTypes2.default.string,
    expandable: _propTypes2.default.bool,
    onExpandClick: _propTypes2.default.func
};

TcellCard.defaultProps = {
    raised: false,
    title: 'Title is here...',
    expandable: false,
    subtitle: ''
};

exports.default = (0, _styles.withStyles)(styles)(TcellCard);

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

module.exports = require("material-ui/Card");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/transitions/Collapse");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Avatar");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/ExpandMore");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("tcellcomponent");

/***/ })
/******/ ]);
});