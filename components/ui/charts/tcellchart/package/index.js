(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("echarts"), require("echarts/theme/macarons"), require("element-resize-event"), require("tcellcomponent"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "echarts", "echarts/theme/macarons", "element-resize-event", "tcellcomponent"], factory);
	else if(typeof exports === 'object')
		exports["tcellchart"] = factory(require("react"), require("prop-types"), require("echarts"), require("echarts/theme/macarons"), require("element-resize-event"), require("tcellcomponent"));
	else
		root["tcellchart"] = factory(root["react"], root["prop-types"], root["echarts"], root["echarts/theme/macarons"], root["element-resize-event"], root["tcellcomponent"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
exports.TcellChart = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _echarts = __webpack_require__(3);

var _echarts2 = _interopRequireDefault(_echarts);

__webpack_require__(4);

var _elementResizeEvent = __webpack_require__(5);

var _elementResizeEvent2 = _interopRequireDefault(_elementResizeEvent);

var _tcellcomponent = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TcellChart = exports.TcellChart = function (_TcellComponent) {
  _inherits(TcellChart, _TcellComponent);

  function TcellChart() {
    _classCallCheck(this, TcellChart);

    return _possibleConstructorReturn(this, (TcellChart.__proto__ || Object.getPrototypeOf(TcellChart)).apply(this, arguments));
  }

  _createClass(TcellChart, [{
    key: 'componentDidMount',

    // first add
    value: function componentDidMount() {
      var echartObj = this.renderEchartDom();
      var onEvents = this.props.onEvents || {};
      var reizeEvent = void 0;
      this.bindEvents(echartObj, onEvents);
      // on chart ready
      if (typeof this.props.onChartReady === 'function') this.props.onChartReady(echartObj);
      function resize() {
        clearTimeout(reizeEvent);
        reizeEvent = setTimeout(function () {
          echartObj.resize();
        }, 200);
      }
      // on resize
      (0, _elementResizeEvent2.default)(this.echartsDom, function () {
        resize();
      });
    }

    // update

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.renderEchartDom();
      this.bindEvents(this.getEchartsInstance(), this.props.onEvents || []);
    }

    // remove

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _echarts2.default.dispose(this.echartsDom);
    }

    // bind the events

  }, {
    key: 'bindEvents',
    value: function bindEvents(instance, events) {
      var loop = function loop(eventName) {
        // ignore the event config which not satisfy
        if (typeof eventName === 'string' && typeof events[eventName] === 'function') {
          // binding event
          instance.off(eventName);
          instance.on(eventName, function (param) {
            events[eventName](param, instance);
          });
        }
      };
      for (var eventName in events) {
        loop(eventName);
      }
    }

    // render the dom

  }, {
    key: 'renderEchartDom',
    value: function renderEchartDom() {
      // init the echart object
      var echartObj = this.getEchartsInstance();
      // set the echart option
      echartObj.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || false);
      // set loading mask
      if (this.props.showLoading) echartObj.showLoading(this.props.loadingOption || null);else echartObj.hideLoading();
      return echartObj;
    }
  }, {
    key: 'getEchartsInstance',
    value: function getEchartsInstance() {
      // return the echart object
      var theme = this.props.theme ? this.props.theme : 'macarons';
      return _echarts2.default.getInstanceByDom(this.echartsDom) || _echarts2.default.init(this.echartsDom, theme);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.props.style || {
        height: '350px'
      };
      // for render
      return _react2.default.createElement('div', {
        ref: function ref(c) {
          _this2.echartsDom = c;
        },
        className: this.props.className,
        style: style });
    }
  }]);

  return TcellChart;
}(_tcellcomponent.TcellComponent);

TcellChart.propTypes = {
  option: _propTypes2.default.object.isRequired,
  notMerge: _propTypes2.default.bool,
  lazyUpdate: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.string,
  onChartReady: _propTypes2.default.func,
  showLoading: _propTypes2.default.bool,
  loadingOption: _propTypes2.default.object,
  onEvents: _propTypes2.default.object
};

exports.default = TcellChart;

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

module.exports = require("echarts");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("echarts/theme/macarons");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("element-resize-event");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("tcellcomponent");

/***/ })
/******/ ]);
});