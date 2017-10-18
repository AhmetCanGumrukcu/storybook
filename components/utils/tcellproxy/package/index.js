(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tcellproxy"] = factory();
	else
		root["tcellproxy"] = factory();
})(this, function() {
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IProxy = exports.IProxy = function () {
    function IProxy() {
        _classCallCheck(this, IProxy);
    }

    _createClass(IProxy, [{
        key: "_serviceCall",
        value: function _serviceCall(request) {
            var result = this.serviceCall ? this.serviceCall(request) : null;
            if (!result) {
                result = Promise.resolve({});
            }
            return result;
        }
    }, {
        key: "_callBase",
        value: function _callBase(request) {
            if (typeof request === "string") {
                request = { servicePath: request };
            }
            var result = this._serviceCall(request);
            return result;
        }
    }]);

    return IProxy;
}();

var ServiceProxy = exports.ServiceProxy = function (_IProxy) {
    _inherits(ServiceProxy, _IProxy);

    function ServiceProxy(baseUrl) {
        _classCallCheck(this, ServiceProxy);

        var _this = _possibleConstructorReturn(this, (ServiceProxy.__proto__ || Object.getPrototypeOf(ServiceProxy)).call(this));

        _this.baseUrl = baseUrl;
        return _this;
    }

    _createClass(ServiceProxy, [{
        key: "call",
        value: function call(request) {
            return this._callBase(request);
        }
    }, {
        key: "getBaseUrl",
        value: function getBaseUrl(request) {
            var baseUrl = request.baseUrl || this.baseUrl;
            return baseUrl ? baseUrl.replace(/[\/\s]+$/, "") + "/" : "";
        }
    }, {
        key: "serviceCall",
        value: function serviceCall(request) {
            var baseUrl = this.getBaseUrl(request);
            var url = baseUrl + request.servicePath;
            var requestString = JSON.stringify(request.data);
            var requestObj = {
                url: url,
                data: requestString,
                type: request.method || "GET",
                timeout: request.timeout ? request.timeout : 30000,
                crossDomain: true,
                cache: false,
                processData: false,
                dataType: request.dataType || "json",
                headers: request.headers
            };

            var promise = $.ajax(requestObj);
            return promise;
        }
    }]);

    return ServiceProxy;
}(IProxy);

exports.default = ServiceProxy;

var MockProxy = exports.MockProxy = function (_IProxy2) {
    _inherits(MockProxy, _IProxy2);

    function MockProxy(mockDataDictionary) {
        _classCallCheck(this, MockProxy);

        var _this2 = _possibleConstructorReturn(this, (MockProxy.__proto__ || Object.getPrototypeOf(MockProxy)).call(this));

        _this2.mockDataDictionary = mockDataDictionary;
        return _this2;
    }

    _createClass(MockProxy, [{
        key: "call",
        value: function call(request) {
            return this._callBase(request);
        }
    }, {
        key: "serviceCall",
        value: function serviceCall(request) {
            var methodName = request.servicePath;
            var dictionary = this.mockDataDictionary;
            var promise = new Promise(function (resolve, reject) {
                try {
                    var obj = null;
                    for (var index in dictionary) {
                        var item = dictionary[index];
                        if (item && item.name === methodName) {
                            obj = item.value(request.data);
                            break;
                        }
                    }
                    if (obj) {
                        resolve(obj);
                    } else {
                        reject("method not found");
                    }
                } catch (e) {
                    reject(e);
                }
            });
            return promise;
        }
    }]);

    return MockProxy;
}(IProxy);

/***/ })
/******/ ]);
});