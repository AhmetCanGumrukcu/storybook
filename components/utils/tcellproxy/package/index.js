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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServiceProxy = function () {
    function ServiceProxy(rootHost, baseUrl, username, secretKey, accesstoken, refreshtoken, oauthServiceUrl) {
        _classCallCheck(this, ServiceProxy);

        this.rootHost = rootHost;
        this.baseUrl = baseUrl;
        this.username = username;
        this.secretKey = secretKey;
        this.accesstoken = accesstoken;
        this.refreshtoken = refreshtoken;
        this.oauthServiceUrl = oauthServiceUrl;
    }

    _createClass(ServiceProxy, [{
        key: "renewRequest",
        value: function renewRequest(url, type, data, identifier, contentType) {
            return $.ajax({
                url: url,
                type: type,
                dataType: 'json',
                cache: false,
                contentType: contentType,
                headers: {
                    "Authorization": "Bearer " + this.accesstoken,
                    "Tidentifier": identifier,
                    "Culture": window["culture"]
                },
                data: data
            });
        }
    }, {
        key: "refreshRequest",
        value: function refreshRequest() {
            var _this = this;

            return $.ajax({
                url: this.oauthServiceUrl + "/Token",
                type: "POST",
                crossDomain: true,
                cache: false,
                data: 'grant_type=refresh_token&refresh_token=' + this.refreshtoken + '&secretKey=' + this.secretKey + '&userName=' + this.username,
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                }
            });
            promise.done(function (response) {
                _this.accesstoken = response.access_token;
                resolve(response);
            });
            promise.fail(function (jqXhr, textStatus, errorThrown) {
                reject(errorThrown);
            });
        }
    }, {
        key: "serviceCall",
        value: function serviceCall(path, type, data, identifier, useAbsolutePath) {
            var _this2 = this;

            var dataType = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'json';
            var timeout = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

            return new Promise(function (resolve, reject) {
                var url = useAbsolutePath ? path : _this2.baseUrl + path;
                var contentType = "application/json; charset=utf-8";
                var requestString = JSON.stringify(data);
                var promise = $.ajax({
                    url: url,
                    type: type,
                    dataType: dataType,
                    cache: false,
                    contentType: contentType,
                    timeout: timeout,
                    crossDomain: true,
                    headers: {
                        "Authorization": "Bearer " + _this2.accesstoken,
                        "Tidentifier": identifier,
                        "Culture": window["culture"]
                    },
                    data: requestString
                });
                promise.done(function (response) {
                    resolve(response);
                });
                promise.fail(function (jqXhr, textStatus, errorThrown) {
                    if (jqXhr.status == 400 && jqXhr.responseJSON !== undefined) {
                        if (jqXhr.responseJSON.Message === 'RefreshRequired') {
                            var refreshPromise = _this2.refreshRequest();
                            refreshPromise.done(function (response) {
                                _this2.accesstoken = response.access_token;
                                var retryPromise = _this2.renewRequest(url, type, data, identifier, contentType);
                                retryPromise.done(function (response) {
                                    resolve(response);
                                });
                                retryPromise.fail(function (jqXhrRetry, textStatusRetry, errorThrownRetry) {
                                    reject(errorThrownRetry);
                                });
                            });
                            refreshPromise.fail(function (jqXhrRefresh, textStatusRefresh, errorThrownRefresh) {
                                reject(errorThrownRefresh);
                            });
                        } else if (jqXhr.responseJSON.Message === CommonResources.Spa.Dictionary.UnAuthorizedResponse) {
                            reject(errorThrown);
                        }
                    } else {
                        reject(errorThrown);
                    }
                });
            });
        }
    }]);

    return ServiceProxy;
}();

var serviceFactory = function () {
    function serviceFactory() {
        _classCallCheck(this, serviceFactory);

        this.proxyfactory = null;
    }

    _createClass(serviceFactory, [{
        key: "configure",
        value: function configure(rootHost, baseUrl, username, secretKey, accesstoken, refreshtoken, oauthServiceUrl) {
            this.proxy = new ServiceProxy(rootHost, baseUrl, username, secretKey, accesstoken, refreshtoken, oauthServiceUrl);
        }
    }, {
        key: "proxy",
        set: function set(value) {
            this.proxyfactory = value;
        },
        get: function get() {
            return this.proxyfactory;
        }
    }]);

    return serviceFactory;
}();

var servicefactory = exports.servicefactory = new serviceFactory();

/***/ })
/******/ ]);
});