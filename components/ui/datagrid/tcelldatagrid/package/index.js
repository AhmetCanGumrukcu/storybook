(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("tcellcomponent"), require("react-dom"), require("deep-diff"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "tcellcomponent", "react-dom", "deep-diff"], factory);
	else if(typeof exports === 'object')
		exports["tcelldatagrid"] = factory(require("react"), require("prop-types"), require("tcellcomponent"), require("react-dom"), require("deep-diff"));
	else
		root["tcelldatagrid"] = factory(root["react"], root["prop-types"], root["tcellcomponent"], root["react-dom"], root["deep-diff"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
exports.TcellDataGrid = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tcellcomponent = __webpack_require__(3);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _deepDiff = __webpack_require__(5);

var _deepDiff2 = _interopRequireDefault(_deepDiff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TcellDataGrid = exports.TcellDataGrid = function (_TcellComponent) {
	_inherits(TcellDataGrid, _TcellComponent);

	function TcellDataGrid(props) {
		_classCallCheck(this, TcellDataGrid);

		return _possibleConstructorReturn(this, (TcellDataGrid.__proto__ || Object.getPrototypeOf(TcellDataGrid)).call(this, props));
	}

	//component is in the DOM, so do stuff to it in this callback


	_createClass(TcellDataGrid, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			//get, child element node for this component
			var elementNode = _reactDom2.default.findDOMNode(this);
			//determine if a selector was passed on which to invoke the KUI widget
			if (this.props.selector) {
				elementNode = elementNode.querySelector(this.props.selector);
			}
			//instantiate and save reference to the Kendo UI widget on elementNode
			//note I am not using jQuery plugin to instantiate, don't want to wait for namespace on $.fn
			this.widgetInstance = $(elementNode).kendoGrid(this.props.options);
			//if props are avaliable for events, triggers, unbind events, or methods make it happen now
			this.props.events ? this.bindEventsToKendoWidget(this.props.events) : null;
			this.props.methods ? this.callKendoWidgetMethods(this.props.methods) : null;
			this.props.triggerEvents ? this.triggerKendoWidgetEvents(this.props.triggerEvents) : null;
		}

		//instance methods for updating widget

	}, {
		key: 'triggerKendoWidgetEvents',
		value: function triggerKendoWidgetEvents(events) {
			events.forEach(function (event) {
				//loop over events, and trigger
				this.widgetInstance.trigger(event);
			}, this);
		}
	}, {
		key: 'bindEventsToKendoWidget',
		value: function bindEventsToKendoWidget(events) {
			Object.keys(events).forEach(function (event) {
				//loop over events and bind
				this.widgetInstance.bind(event, events[event]);
			}, this);
		}
	}, {
		key: 'unbindEventsToKendoWidget',
		value: function unbindEventsToKendoWidget(events) {
			events.forEach(function (event) {
				//loop ove revents and unbind
				this.widgetInstance.unbind(event);
			}, this);
		}
	}, {
		key: 'callKendoWidgetMethods',
		value: function callKendoWidgetMethods(methods) {
			Object.keys(methods).forEach(function (method) {
				var _widgetInstance;

				//loop over methods and call
				(_widgetInstance = this.widgetInstance)[method].apply(_widgetInstance, _toConsumableArray(methods[method]));
			}, this);
		}

		//not called on inital render, but whenever parent state changes this is called

	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			//always update the widget with nextProp changes if avaliable
			if (nextProps.events) {
				this.bindEventsToKendoWidget(nextProps.events);
			}

			if (this.widgetInstance.setOptions) {
				if (nextProps.options) {
					this.widgetInstance.setOptions(nextProps.options);
				}
			}

			//try and determine if any of the nextProps have changed, and if so, update the widget
			if (nextProps.methods) {
				if ((0, _deepDiff2.default)(nextProps.methods, this.props.methods)) {
					this.callKendoWidgetMethods(nextProps.methods);
				}
			}

			if (nextProps.unbindEvents) {
				if ((0, _deepDiff2.default)(nextProps.unbindEvents, this.props.unbindEvents)) {
					this.unbindEventsToKendoWidget(nextProps.unbindEvents);
				}
			}

			if (nextProps.triggerEvents) {
				if ((0, _deepDiff2.default)(nextProps.triggerEvents, this.props.triggerEvents)) {
					this.triggerKendoWidgetEvents(nextProps.triggerEvents);
				}
			}
		}

		//don't run render again, create widget once, then leave it alone

	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate() {
			return false;
		}

		//destory it, when the component is unmouted

	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.widgetInstance.remove();
		}

		//use the passed in React nodes or a plain <div> if no React child nodes are defined

	}, {
		key: 'render',
		value: function render() {
			return this.props.children ? this.props.children : _react2.default.createElement('div', null);
		}
	}]);

	return TcellDataGrid;
}(_tcellcomponent.TcellComponent);

exports.default = TcellDataGrid;

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

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("deep-diff");

/***/ })
/******/ ]);
});