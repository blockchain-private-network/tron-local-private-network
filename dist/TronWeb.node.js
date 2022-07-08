module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, husky, dependencies, devDependencies, author, contributors, homepage, license, repository, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"tronweb\",\"version\":\"4.2.0\",\"description\":\"JavaScript SDK that encapsulates the TRON HTTP API\",\"main\":\"dist/TronWeb.node.js\",\"scripts\":{\"prepare\":\"npm run build\",\"build\":\"npm run clean && webpack --config webpack.config.js --progress --color\",\"build:dev\":\"NODE_ENV=development npm run build\",\"clean\":\"rimraf dist\",\"newaccount\":\"node scripts/test-node.js && node test/helpers/newAccounts 50\",\"test\":\"node scripts/test-node.js && node test/helpers/newAccounts 50 npm run-script newaccount && npx mocha 'test/**/*.test.js'  --timeout 120000\",\"testAbi\":\"node scripts/test-node.js && node test/helpers/newAccounts 1 npm run-script newaccount && npx mocha 'test/**/abi.test.js'  --timeout 120000\",\"testContract\":\"node scripts/test-node.js && node test/helpers/newAccounts 1 npm run-script newaccount && npx mocha 'test/**/transactionBuilder.test.js'  --timeout 120000\",\"test-no-accounts\":\"node scripts/test-node.js && npx mocha 'test/**/*.test.js'\",\"test:browser\":\"npm run-script newaccount && node scripts/test-browser.js && npx karma start --single-run --browsers ChromeHeadless\",\"coverage\":\"npm run-script test:browser && npm run-script test\",\"btest\":\"npm run build:dev && npm run test\"},\"husky\":{\"hooks\":{\"pre-commit\":\"node ./scripts/pre-commit.js\"}},\"dependencies\":{\"@babel/runtime\":\"^7.0.0\",\"axios\":\"^0.26.1\",\"bignumber.js\":\"^9.0.1\",\"elliptic\":\"^6.5.4\",\"ethers\":\"^5.4.4\",\"eventemitter3\":\"^3.1.0\",\"injectpromise\":\"^1.0.0\",\"lodash\":\"^4.17.21\",\"semver\":\"^5.6.0\",\"validator\":\"^13.7.0\"},\"devDependencies\":{\"@babel/core\":\"^7.0.0\",\"@babel/plugin-proposal-class-properties\":\"^7.0.0\",\"@babel/plugin-proposal-numeric-separator\":\"^7.0.0\",\"@babel/plugin-proposal-object-rest-spread\":\"^7.0.0\",\"@babel/plugin-transform-runtime\":\"^7.0.0\",\"@babel/preset-env\":\"^7.0.0\",\"babel-loader\":\"^8.0.2\",\"babel-plugin-istanbul\":\"^6.1.1\",\"babel-plugin-source-map-support\":\"^2.1.3\",\"chai\":\"^4.1.2\",\"chalk\":\"^2.4.1\",\"globby\":\"^8.0.1\",\"husky\":\"^7.0.0\",\"istanbul\":\"^0.4.5\",\"istanbul-instrumenter-loader\":\"^3.0.1\",\"jsonwebtoken\":\"^8.5.1\",\"karma\":\"^6.3.17\",\"karma-chrome-launcher\":\"^2.2.0\",\"karma-coverage\":\"^2.0.3\",\"karma-coverage-istanbul-reporter\":\"^3.0.3\",\"karma-edge-launcher\":\"^0.4.2\",\"karma-firefox-launcher\":\"^1.1.0\",\"karma-mocha\":\"^1.3.0\",\"karma-sourcemap-loader\":\"^0.3.7\",\"karma-spec-reporter\":\"^0.0.32\",\"karma-webpack\":\"4.0.0-rc.6\",\"matchdep\":\"^2.0.0\",\"mocha\":\"^5.2.0\",\"puppeteer\":\"^13.5.1\",\"rimraf\":\"^3.0.2\",\"source-map-support\":\"^0.5.19\",\"webpack\":\"^4.46.0\",\"webpack-cli\":\"^3.3.12\",\"webpack-node-externals\":\"^3.0.0\"},\"author\":{\"name\":\"Kondax\",\"url\":\"https://github.com/Kondax\"},\"contributors\":[{\"name\":\"Francesco Sullo\",\"url\":\"https://github.com/sullof\"},{\"name\":\"TRON-US\",\"url\":\"https://github.com/tron-us\"}],\"homepage\":\"https://github.com/tronprotocol/tronweb\",\"license\":\"MIT\",\"repository\":\"https://github.com/tronprotocol/tronweb.git\"}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TronWeb; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lib_providers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/providers */ "./src/lib/providers/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bignumber.js */ "bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! eventemitter3 */ "eventemitter3");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! semver */ "semver");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! injectpromise */ "injectpromise");
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(injectpromise__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lib_transactionBuilder__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lib/transactionBuilder */ "./src/lib/transactionBuilder.js");
/* harmony import */ var lib_trx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lib/trx */ "./src/lib/trx.js");
/* harmony import */ var lib_contract__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lib/contract */ "./src/lib/contract/index.js");
/* harmony import */ var lib_plugin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lib/plugin */ "./src/lib/plugin.js");
/* harmony import */ var lib_event__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! lib/event */ "./src/lib/event.js");
/* harmony import */ var lib_sidechain__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lib/sidechain */ "./src/lib/sidechain.js");
/* harmony import */ var utils_ethersUtils__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! utils/ethersUtils */ "./src/utils/ethersUtils.js");
/* harmony import */ var utils_address__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! utils/address */ "./src/utils/address.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
















var DEFAULT_VERSION = '3.5.0';
var FEE_LIMIT = 150000000;

var TronWeb = /*#__PURE__*/function (_EventEmitter) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TronWeb, _EventEmitter);

  var _super = _createSuper(TronWeb);

  function TronWeb() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var solidityNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var eventServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var sideOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var privateKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TronWeb);

    _this = _super.call(this);
    var fullNode;
    var headers = false;
    var eventHeaders = false;

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(options) === 'object' && (options.fullNode || options.fullHost)) {
      fullNode = options.fullNode || options.fullHost;
      sideOptions = solidityNode;
      solidityNode = options.solidityNode || options.fullHost;
      eventServer = options.eventServer || options.fullHost;
      headers = options.headers || false;
      eventHeaders = options.eventHeaders || headers;
      privateKey = options.privateKey;
    } else {
      fullNode = options;
    }

    if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isString(fullNode)) fullNode = new lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"].HttpProvider(fullNode);
    if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isString(solidityNode)) solidityNode = new lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"].HttpProvider(solidityNode);
    if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isString(eventServer)) eventServer = new lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"].HttpProvider(eventServer);
    _this.event = new lib_event__WEBPACK_IMPORTED_MODULE_22__["default"](_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.transactionBuilder = new lib_transactionBuilder__WEBPACK_IMPORTED_MODULE_18__["default"](_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.trx = new lib_trx__WEBPACK_IMPORTED_MODULE_19__["default"](_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.plugin = new lib_plugin__WEBPACK_IMPORTED_MODULE_21__["default"](_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), options);
    _this.utils = utils__WEBPACK_IMPORTED_MODULE_12__["default"];

    _this.setFullNode(fullNode);

    _this.setSolidityNode(solidityNode);

    _this.setEventServer(eventServer);

    _this.providers = lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"];
    _this.BigNumber = bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a;
    _this.defaultBlock = false;
    _this.defaultPrivateKey = false;
    _this.defaultAddress = {
      hex: false,
      base58: false
    };
    ['sha3', 'toHex', 'toUtf8', 'fromUtf8', 'toAscii', 'fromAscii', 'toDecimal', 'fromDecimal', 'toSun', 'fromSun', 'toBigNumber', 'isAddress', 'createAccount', 'address', 'version'].forEach(function (key) {
      _this[key] = TronWeb[key];
    }); // for sidechain

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(sideOptions) === 'object' && (sideOptions.fullNode || sideOptions.fullHost)) {
      _this.sidechain = new lib_sidechain__WEBPACK_IMPORTED_MODULE_23__["default"](sideOptions, TronWeb, _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), privateKey);
    } else {
      privateKey = privateKey || sideOptions;
    }

    if (privateKey) _this.setPrivateKey(privateKey);
    _this.fullnodeVersion = DEFAULT_VERSION;
    _this.feeLimit = FEE_LIMIT;
    _this.injectPromise = injectpromise__WEBPACK_IMPORTED_MODULE_17___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));

    if (headers) {
      _this.setFullNodeHeader(headers);
    }

    if (eventHeaders) {
      _this.setEventHeader(eventHeaders);
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TronWeb, [{
    key: "getFullnodeVersion",
    value: function () {
      var _getFullnodeVersion = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee() {
        var nodeInfo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.trx.getNodeInfo();

              case 3:
                nodeInfo = _context.sent;
                this.fullnodeVersion = nodeInfo.configNodeInfo.codeVersion;

                if (this.fullnodeVersion.split('.').length === 2) {
                  this.fullnodeVersion += '.0';
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                this.fullnodeVersion = DEFAULT_VERSION;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function getFullnodeVersion() {
        return _getFullnodeVersion.apply(this, arguments);
      }

      return getFullnodeVersion;
    }()
  }, {
    key: "setDefaultBlock",
    value: function setDefaultBlock() {
      var blockID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if ([false, 'latest', 'earliest', 0].includes(blockID)) {
        return this.defaultBlock = blockID;
      }

      if (!utils__WEBPACK_IMPORTED_MODULE_12__["default"].isInteger(blockID) || !blockID) throw new Error('Invalid block ID provided');
      this.defaultBlock = Math.abs(blockID);
    }
  }, {
    key: "setPrivateKey",
    value: function setPrivateKey(privateKey) {
      try {
        this.setAddress(this.address.fromPrivateKey(privateKey));
      } catch (_unused) {
        throw new Error('Invalid private key provided');
      }

      this.defaultPrivateKey = privateKey;
      this.emit('privateKeyChanged', privateKey);
    }
  }, {
    key: "setAddress",
    value: function setAddress(address) {
      if (!this.isAddress(address)) throw new Error('Invalid address provided');
      var hex = this.address.toHex(address);
      var base58 = this.address.fromHex(address);
      if (this.defaultPrivateKey && this.address.fromPrivateKey(this.defaultPrivateKey) !== base58) this.defaultPrivateKey = false;
      this.defaultAddress = {
        hex: hex,
        base58: base58
      };
      this.emit('addressChanged', {
        hex: hex,
        base58: base58
      });
    }
  }, {
    key: "fullnodeSatisfies",
    value: function fullnodeSatisfies(version) {
      return semver__WEBPACK_IMPORTED_MODULE_16___default.a.satisfies(this.fullnodeVersion, version);
    }
  }, {
    key: "isValidProvider",
    value: function isValidProvider(provider) {
      return Object.values(lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"]).some(function (knownProvider) {
        return provider instanceof knownProvider;
      });
    }
  }, {
    key: "setFullNode",
    value: function setFullNode(fullNode) {
      if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isString(fullNode)) fullNode = new lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"].HttpProvider(fullNode);
      if (!this.isValidProvider(fullNode)) throw new Error('Invalid full node provided');
      this.fullNode = fullNode;
      this.fullNode.setStatusPage('wallet/getnowblock');
      this.getFullnodeVersion();
    }
  }, {
    key: "setSolidityNode",
    value: function setSolidityNode(solidityNode) {
      if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isString(solidityNode)) solidityNode = new lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"].HttpProvider(solidityNode);
      if (!this.isValidProvider(solidityNode)) throw new Error('Invalid solidity node provided');
      this.solidityNode = solidityNode;
      this.solidityNode.setStatusPage('walletsolidity/getnowblock');
    }
  }, {
    key: "setEventServer",
    value: function setEventServer() {
      var _this$event;

      (_this$event = this.event).setServer.apply(_this$event, arguments);
    }
  }, {
    key: "setHeader",
    value: function setHeader() {
      var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var fullNode = new lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"].HttpProvider(this.fullNode.host, 30000, false, false, headers);
      var solidityNode = new lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"].HttpProvider(this.solidityNode.host, 30000, false, false, headers);
      var eventServer = new lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"].HttpProvider(this.eventServer.host, 30000, false, false, headers);
      this.setFullNode(fullNode);
      this.setSolidityNode(solidityNode);
      this.setEventServer(eventServer);
    }
  }, {
    key: "setFullNodeHeader",
    value: function setFullNodeHeader() {
      var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var fullNode = new lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"].HttpProvider(this.fullNode.host, 30000, false, false, headers);
      var solidityNode = new lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"].HttpProvider(this.solidityNode.host, 30000, false, false, headers);
      this.setFullNode(fullNode);
      this.setSolidityNode(solidityNode);
    }
  }, {
    key: "setEventHeader",
    value: function setEventHeader() {
      var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var eventServer = new lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"].HttpProvider(this.eventServer.host, 30000, false, false, headers);
      this.setEventServer(eventServer);
    }
  }, {
    key: "currentProviders",
    value: function currentProviders() {
      return {
        fullNode: this.fullNode,
        solidityNode: this.solidityNode,
        eventServer: this.eventServer
      };
    }
  }, {
    key: "currentProvider",
    value: function currentProvider() {
      return this.currentProviders();
    }
  }, {
    key: "getEventResult",
    value: function getEventResult() {
      var _this$event2;

      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(params[1]) !== 'object') {
        params[1] = {
          sinceTimestamp: params[1] || 0,
          eventName: params[2] || false,
          blockNumber: params[3] || false,
          size: params[4] || 20,
          page: params[5] || 1
        };
        params.splice(2, 4); // callback:

        if (!utils__WEBPACK_IMPORTED_MODULE_12__["default"].isFunction(params[2])) {
          if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isFunction(params[1].page)) {
            params[2] = params[1].page;
            params[1].page = 1;
          } else if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isFunction(params[1].size)) {
            params[2] = params[1].size;
            params[1].size = 20;
            params[1].page = 1;
          }
        }
      }

      return (_this$event2 = this.event).getEventsByContractAddress.apply(_this$event2, params);
    }
  }, {
    key: "getEventByTransactionID",
    value: function getEventByTransactionID() {
      var _this$event3;

      return (_this$event3 = this.event).getEventsByTransactionID.apply(_this$event3, arguments);
    }
  }, {
    key: "contract",
    value: function contract() {
      var abi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return new lib_contract__WEBPACK_IMPORTED_MODULE_20__["default"](this, abi, address);
    }
  }, {
    key: "isConnected",
    value: function () {
      var _isConnected = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee2() {
        var callback,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                callback = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;

                if (callback) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", this.injectPromise(this.isConnected));

              case 3:
                _context2.t0 = callback;
                _context2.next = 6;
                return this.fullNode.isConnected();

              case 6:
                _context2.t1 = _context2.sent;
                _context2.next = 9;
                return this.solidityNode.isConnected();

              case 9:
                _context2.t2 = _context2.sent;
                _context2.t3 = this.eventServer;

                if (!_context2.t3) {
                  _context2.next = 15;
                  break;
                }

                _context2.next = 14;
                return this.eventServer.isConnected();

              case 14:
                _context2.t3 = _context2.sent;

              case 15:
                _context2.t4 = _context2.t3;
                _context2.t5 = {
                  fullNode: _context2.t1,
                  solidityNode: _context2.t2,
                  eventServer: _context2.t4
                };
                return _context2.abrupt("return", (0, _context2.t0)(null, _context2.t5));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function isConnected() {
        return _isConnected.apply(this, arguments);
      }

      return isConnected;
    }()
  }], [{
    key: "address",
    get: function get() {
      return {
        fromHex: function fromHex(address) {
          if (!utils__WEBPACK_IMPORTED_MODULE_12__["default"].isHex(address)) return address;
          return utils__WEBPACK_IMPORTED_MODULE_12__["default"].crypto.getBase58CheckAddress(utils__WEBPACK_IMPORTED_MODULE_12__["default"].code.hexStr2byteArray(address.replace(/^0x/, utils_address__WEBPACK_IMPORTED_MODULE_25__["ADDRESS_PREFIX"])));
        },
        toHex: function toHex(address) {
          if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isHex(address)) return address.toLowerCase().replace(/^0x/, utils_address__WEBPACK_IMPORTED_MODULE_25__["ADDRESS_PREFIX"]);
          return utils__WEBPACK_IMPORTED_MODULE_12__["default"].code.byteArray2hexStr(utils__WEBPACK_IMPORTED_MODULE_12__["default"].crypto.decodeBase58Address(address)).toLowerCase();
        },
        fromPrivateKey: function fromPrivateKey(privateKey) {
          var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          try {
            return utils__WEBPACK_IMPORTED_MODULE_12__["default"].crypto.pkToAddress(privateKey, strict);
          } catch (_unused2) {
            return false;
          }
        }
      };
    }
  }, {
    key: "sha3",
    value: function sha3(string) {
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return (prefix ? '0x' : '') + Object(utils_ethersUtils__WEBPACK_IMPORTED_MODULE_24__["keccak256"])(Buffer.from(string, 'utf-8')).toString().substring(2);
    }
  }, {
    key: "toHex",
    value: function toHex(val) {
      if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isBoolean(val)) return TronWeb.fromDecimal(+val);
      if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isBigNumber(val)) return TronWeb.fromDecimal(val);
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(val) === 'object') return TronWeb.fromUtf8(JSON.stringify(val));

      if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isString(val)) {
        if (/^(-|)0x/.test(val)) return val;
        if (!isFinite(val) || /^\s*$/.test(val)) return TronWeb.fromUtf8(val);
      }

      var result = TronWeb.fromDecimal(val);

      if (result === '0xNaN') {
        throw new Error('The passed value is not convertible to a hex string');
      } else {
        return result;
      }
    }
  }, {
    key: "toUtf8",
    value: function toUtf8(hex) {
      if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isHex(hex)) {
        hex = hex.replace(/^0x/, '');
        return Buffer.from(hex, 'hex').toString('utf8');
      } else {
        throw new Error('The passed value is not a valid hex string');
      }
    }
  }, {
    key: "fromUtf8",
    value: function fromUtf8(string) {
      if (!utils__WEBPACK_IMPORTED_MODULE_12__["default"].isString(string)) {
        throw new Error('The passed value is not a valid utf-8 string');
      }

      return '0x' + Buffer.from(string, 'utf8').toString('hex');
    }
  }, {
    key: "toAscii",
    value: function toAscii(hex) {
      if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isHex(hex)) {
        var str = "";
        var i = 0,
            l = hex.length;

        if (hex.substring(0, 2) === '0x') {
          i = 2;
        }

        for (; i < l; i += 2) {
          var code = parseInt(hex.substr(i, 2), 16);
          str += String.fromCharCode(code);
        }

        return str;
      } else {
        throw new Error('The passed value is not a valid hex string');
      }
    }
  }, {
    key: "fromAscii",
    value: function fromAscii(string, padding) {
      if (!utils__WEBPACK_IMPORTED_MODULE_12__["default"].isString(string)) {
        throw new Error('The passed value is not a valid utf-8 string');
      }

      return '0x' + Buffer.from(string, 'ascii').toString('hex').padEnd(padding, '0');
    }
  }, {
    key: "toDecimal",
    value: function toDecimal(value) {
      return TronWeb.toBigNumber(value).toNumber();
    }
  }, {
    key: "fromDecimal",
    value: function fromDecimal(value) {
      var number = TronWeb.toBigNumber(value);
      var result = number.toString(16);
      return number.isLessThan(0) ? '-0x' + result.substr(1) : '0x' + result;
    }
  }, {
    key: "fromSun",
    value: function fromSun(sun) {
      var trx = TronWeb.toBigNumber(sun).div(1000000);
      return utils__WEBPACK_IMPORTED_MODULE_12__["default"].isBigNumber(sun) ? trx : trx.toString(10);
    }
  }, {
    key: "toSun",
    value: function toSun(trx) {
      var sun = TronWeb.toBigNumber(trx).times(1000000);
      return utils__WEBPACK_IMPORTED_MODULE_12__["default"].isBigNumber(trx) ? sun : sun.toString(10);
    }
  }, {
    key: "toBigNumber",
    value: function toBigNumber() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isBigNumber(amount)) return amount;
      if (utils__WEBPACK_IMPORTED_MODULE_12__["default"].isString(amount) && /^(-|)0x/.test(amount)) return new bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a(amount.replace('0x', ''), 16);
      return new bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a(amount.toString(10), 10);
    }
  }, {
    key: "isAddress",
    value: function isAddress() {
      var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!utils__WEBPACK_IMPORTED_MODULE_12__["default"].isString(address)) return false; // Convert HEX to Base58

      if (address.length === 42) {
        try {
          return TronWeb.isAddress(utils__WEBPACK_IMPORTED_MODULE_12__["default"].crypto.getBase58CheckAddress(utils__WEBPACK_IMPORTED_MODULE_12__["default"].code.hexStr2byteArray(address) // it throws an error if the address starts with 0x
          ));
        } catch (err) {
          return false;
        }
      }

      try {
        return utils__WEBPACK_IMPORTED_MODULE_12__["default"].crypto.isAddressValid(address);
      } catch (err) {
        return false;
      }
    }
  }, {
    key: "createAccount",
    value: function () {
      var _createAccount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.mark(function _callee3() {
        var account;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_10___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                account = utils__WEBPACK_IMPORTED_MODULE_12__["default"].accounts.generateAccount();
                return _context3.abrupt("return", account);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function createAccount() {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }]);

  return TronWeb;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_14___default.a);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(TronWeb, "providers", lib_providers__WEBPACK_IMPORTED_MODULE_11__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(TronWeb, "BigNumber", bignumber_js__WEBPACK_IMPORTED_MODULE_13___default.a);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(TronWeb, "TransactionBuilder", lib_transactionBuilder__WEBPACK_IMPORTED_MODULE_18__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(TronWeb, "Trx", lib_trx__WEBPACK_IMPORTED_MODULE_19__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(TronWeb, "Contract", lib_contract__WEBPACK_IMPORTED_MODULE_20__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(TronWeb, "Plugin", lib_plugin__WEBPACK_IMPORTED_MODULE_21__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(TronWeb, "Event", lib_event__WEBPACK_IMPORTED_MODULE_22__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(TronWeb, "version", _package_json__WEBPACK_IMPORTED_MODULE_15__["version"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(TronWeb, "utils", utils__WEBPACK_IMPORTED_MODULE_12__["default"]);


;

/***/ }),

/***/ "./src/lib/contract/index.js":
/*!***********************************!*\
  !*** ./src/lib/contract/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contract; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! index */ "./src/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var _method__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./method */ "./src/lib/contract/method.js");
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! injectpromise */ "injectpromise");
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(injectpromise__WEBPACK_IMPORTED_MODULE_9__);











var Contract = /*#__PURE__*/function () {
  function Contract() {
    var tronWeb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var abi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var address = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Contract);

    if (!tronWeb || !tronWeb instanceof index__WEBPACK_IMPORTED_MODULE_6__["default"]) throw new Error('Expected instance of TronWeb');
    this.tronWeb = tronWeb;
    this.injectPromise = injectpromise__WEBPACK_IMPORTED_MODULE_9___default()(this);
    this.address = address;
    this.abi = abi;
    this.eventListener = false;
    this.bytecode = false;
    this.deployed = false;
    this.lastBlock = false;
    this.methods = {};
    this.methodInstances = {};
    this.props = [];
    if (this.tronWeb.isAddress(address)) this.deployed = true;else this.address = false;
    this.loadAbi(abi);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Contract, [{
    key: "_getEvents",
    value: function () {
      var _getEvents2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var _this = this;

        var options,
            events,
            _events$sort,
            _events$sort2,
            latestEvent,
            newEvents,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                _context.next = 3;
                return this.tronWeb.event.getEventsByContractAddress(this.address, options);

              case 3:
                events = _context.sent;
                _events$sort = events.sort(function (a, b) {
                  return b.block - a.block;
                }), _events$sort2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_events$sort, 1), latestEvent = _events$sort2[0];
                newEvents = events.filter(function (event, index) {
                  if (options.resourceNode && event.resourceNode && options.resourceNode.toLowerCase() !== event.resourceNode.toLowerCase()) {
                    return false;
                  }

                  var duplicate = events.slice(0, index).some(function (priorEvent) {
                    return JSON.stringify(priorEvent) == JSON.stringify(event);
                  });
                  if (duplicate) return false;
                  if (!_this.lastBlock) return true;
                  return event.block > _this.lastBlock;
                });
                if (latestEvent) this.lastBlock = latestEvent.block;
                return _context.abrupt("return", newEvents);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _getEvents() {
        return _getEvents2.apply(this, arguments);
      }

      return _getEvents;
    }()
  }, {
    key: "_startEventListener",
    value: function () {
      var _startEventListener2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var _this2 = this;

        var options,
            callback,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
                callback = _args2.length > 1 ? _args2[1] : undefined;

                if (utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (this.eventListener) clearInterval(this.eventListener);

                if (this.tronWeb.eventServer) {
                  _context2.next = 6;
                  break;
                }

                throw new Error('Event server is not configured');

              case 6:
                if (this.address) {
                  _context2.next = 8;
                  break;
                }

                throw new Error('Contract is not configured with an address');

              case 8:
                this.eventCallback = callback;
                _context2.next = 11;
                return this._getEvents(options);

              case 11:
                this.eventListener = setInterval(function () {
                  _this2._getEvents(options).then(function (newEvents) {
                    return newEvents.forEach(function (event) {
                      _this2.eventCallback && _this2.eventCallback(event);
                    });
                  })["catch"](function (err) {
                    console.error('Failed to get event list', err);
                  });
                }, 3000);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _startEventListener() {
        return _startEventListener2.apply(this, arguments);
      }

      return _startEventListener;
    }()
  }, {
    key: "_stopEventListener",
    value: function _stopEventListener() {
      if (!this.eventListener) return;
      clearInterval(this.eventListener);
      this.eventListener = false;
      this.eventCallback = false;
    }
  }, {
    key: "hasProperty",
    value: function hasProperty(property) {
      return this.hasOwnProperty(property) || this.__proto__.hasOwnProperty(property);
    }
  }, {
    key: "loadAbi",
    value: function loadAbi(abi) {
      var _this3 = this;

      this.abi = abi;
      this.methods = {};
      this.props.forEach(function (prop) {
        return delete _this3[prop];
      });
      abi.forEach(function (func) {
        // Don't build a method for constructor function. That's handled through contract create.
        if (!func.type || /constructor/i.test(func.type)) return;
        var method = new _method__WEBPACK_IMPORTED_MODULE_8__["default"](_this3, func);
        var methodCall = method.onMethod.bind(method);
        var name = method.name,
            functionSelector = method.functionSelector,
            signature = method.signature;
        _this3.methods[name] = methodCall;
        _this3.methods[functionSelector] = methodCall;
        _this3.methods[signature] = methodCall;
        _this3.methodInstances[name] = method;
        _this3.methodInstances[functionSelector] = method;
        _this3.methodInstances[signature] = method;

        if (!_this3.hasProperty(name)) {
          _this3[name] = methodCall;

          _this3.props.push(name);
        }

        if (!_this3.hasProperty(functionSelector)) {
          _this3[functionSelector] = methodCall;

          _this3.props.push(functionSelector);
        }

        if (!_this3.hasProperty(signature)) {
          _this3[signature] = methodCall;

          _this3.props.push(signature);
        }
      });
    }
  }, {
    key: "decodeInput",
    value: function decodeInput(data) {
      var methodName = data.substring(0, 8);
      var inputData = data.substring(8);
      if (!this.methodInstances[methodName]) throw new Error('Contract method ' + methodName + " not found");
      var methodInstance = this.methodInstances[methodName];
      return {
        name: methodInstance.name,
        params: this.methodInstances[methodName].decodeInput(inputData)
      };
    }
  }, {
    key: "new",
    value: function () {
      var _new2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3(options) {
        var privateKey,
            callback,
            address,
            transaction,
            signedTransaction,
            contract,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                privateKey = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : this.tronWeb.defaultPrivateKey;
                callback = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.tronWeb.defaultPrivateKey;
                }

                if (callback) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return", this.injectPromise(this["new"], options, privateKey));

              case 5:
                _context3.prev = 5;
                address = this.tronWeb.address.fromPrivateKey(privateKey);
                _context3.next = 9;
                return this.tronWeb.transactionBuilder.createSmartContract(options, address);

              case 9:
                transaction = _context3.sent;
                _context3.next = 12;
                return this.tronWeb.trx.sign(transaction, privateKey);

              case 12:
                signedTransaction = _context3.sent;
                _context3.next = 15;
                return this.tronWeb.trx.sendRawTransaction(signedTransaction);

              case 15:
                contract = _context3.sent;

                if (!contract.code) {
                  _context3.next = 18;
                  break;
                }

                return _context3.abrupt("return", callback({
                  error: contract.code,
                  message: this.tronWeb.toUtf8(contract.message)
                }));

              case 18:
                _context3.next = 20;
                return utils__WEBPACK_IMPORTED_MODULE_7__["default"].sleep(3000);

              case 20:
                return _context3.abrupt("return", this.at(signedTransaction.contract_address, callback));

              case 23:
                _context3.prev = 23;
                _context3.t0 = _context3["catch"](5);
                return _context3.abrupt("return", callback(_context3.t0));

              case 26:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 23]]);
      }));

      function _new(_x) {
        return _new2.apply(this, arguments);
      }

      return _new;
    }()
  }, {
    key: "at",
    value: function () {
      var _at = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4(contractAddress) {
        var callback,
            contract,
            _args4 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                callback = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : false;

                if (callback) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", this.injectPromise(this.at, contractAddress));

              case 3:
                _context4.prev = 3;
                _context4.next = 6;
                return this.tronWeb.trx.getContract(contractAddress);

              case 6:
                contract = _context4.sent;

                if (contract.contract_address) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt("return", callback('Unknown error: ' + JSON.stringify(contract, null, 2)));

              case 9:
                this.address = contract.contract_address;
                this.bytecode = contract.bytecode;
                this.deployed = true;
                this.loadAbi(contract.abi ? contract.abi.entrys ? contract.abi.entrys : [] : []);
                return _context4.abrupt("return", callback(null, this));

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](3);

                if (!_context4.t0.toString().includes('does not exist')) {
                  _context4.next = 20;
                  break;
                }

                return _context4.abrupt("return", callback('Contract has not been deployed on the network'));

              case 20:
                return _context4.abrupt("return", callback(_context4.t0));

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 16]]);
      }));

      function at(_x2) {
        return _at.apply(this, arguments);
      }

      return at;
    }()
  }, {
    key: "events",
    value: function events() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (!utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(callback)) throw new Error('Callback function expected');
      var self = this;
      return {
        start: function start() {
          var startCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!startCallback) {
            self._startEventListener(options, callback);

            return this;
          }

          self._startEventListener(options, callback).then(function () {
            startCallback();
          })["catch"](function (err) {
            startCallback(err);
          });

          return this;
        },
        stop: function stop() {
          self._stopEventListener();
        }
      };
    }
  }]);

  return Contract;
}();



/***/ }),

/***/ "./src/lib/contract/method.js":
/*!************************************!*\
  !*** ./src/lib/contract/method.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Method; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var utils_address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/address */ "./src/utils/address.js");
/* harmony import */ var utils_abi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/abi */ "./src/utils/abi.js");
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! injectpromise */ "injectpromise");
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(injectpromise__WEBPACK_IMPORTED_MODULE_10__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var getFunctionSelector = function getFunctionSelector(abi) {
  abi.stateMutability = abi.stateMutability ? abi.stateMutability.toLowerCase() : 'nonpayable';
  abi.type = abi.type ? abi.type.toLowerCase() : '';
  if (abi.type === 'fallback' || abi.type === 'receive') return '0x';
  var iface = new utils__WEBPACK_IMPORTED_MODULE_7__["default"].ethersUtils.Interface([abi]);

  if (abi.type === 'event') {
    return iface.getEvent(abi.name).format(utils__WEBPACK_IMPORTED_MODULE_7__["default"].ethersUtils.FormatTypes.sighash);
  }

  return iface.getFunction(abi.name).format(utils__WEBPACK_IMPORTED_MODULE_7__["default"].ethersUtils.FormatTypes.sighash);
};

var decodeOutput = function decodeOutput(abi, output) {
  return Object(utils_abi__WEBPACK_IMPORTED_MODULE_9__["decodeParamsV2ByABI"])(abi, output);
};

var Method = /*#__PURE__*/function () {
  function Method(contract, abi) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Method);

    this.tronWeb = contract.tronWeb;
    this.contract = contract;
    this.abi = abi;
    this.name = abi.name || (abi.name = abi.type);
    this.inputs = abi.inputs || [];
    this.outputs = abi.outputs || [];
    this.functionSelector = getFunctionSelector(abi);
    this.signature = this.tronWeb.sha3(this.functionSelector, false).slice(0, 8);
    this.injectPromise = injectpromise__WEBPACK_IMPORTED_MODULE_10___default()(this);
    this.defaultOptions = {
      feeLimit: this.tronWeb.feeLimit,
      callValue: 0,
      userFeePercentage: 100,
      shouldPollResponse: false // Only used for sign()

    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Method, [{
    key: "decodeInput",
    value: function decodeInput(data) {
      return decodeOutput(this.inputs, '0x' + data);
    }
  }, {
    key: "onMethod",
    value: function onMethod() {
      var _this = this;

      var rawParameter = '';

      if (this.abi && !/event/i.test(this.abi.type)) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        rawParameter = Object(utils_abi__WEBPACK_IMPORTED_MODULE_9__["encodeParamsV2ByABI"])(this.abi, args);
      }

      return {
        call: function call() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(options)) {
            callback = options;
            options = {};
          }

          options = _objectSpread(_objectSpread({}, options), {}, {
            rawParameter: rawParameter
          });
          return _this._call([], [], options, callback);
        },
        send: function send() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var privateKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.tronWeb.defaultPrivateKey;
          var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(privateKey)) {
            callback = privateKey;
            privateKey = _this.tronWeb.defaultPrivateKey;
          }

          if (utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(options)) {
            callback = options;
            options = {};
          }

          options = _objectSpread(_objectSpread({}, options), {}, {
            rawParameter: rawParameter
          });
          return _this._send([], [], options, privateKey, callback);
        },
        watch: function watch() {
          return _this._watch.apply(_this, arguments);
        }
      };
    }
  }, {
    key: "_call",
    value: function () {
      var _call2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(types, args) {
        var _this2 = this;

        var options,
            callback,
            stateMutability,
            parameters,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                callback = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (callback) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", this.injectPromise(this._call, types, args, options));

              case 5:
                if (!(types.length !== args.length)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", callback('Invalid argument count provided'));

              case 7:
                if (this.contract.address) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", callback('Smart contract is missing address'));

              case 9:
                if (this.contract.deployed) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", callback('Calling smart contracts requires you to load the contract first'));

              case 11:
                stateMutability = this.abi.stateMutability;

                if (['pure', 'view'].includes(stateMutability.toLowerCase())) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", callback("Methods with state mutability \"".concat(stateMutability, "\" must use send()")));

              case 14:
                options = _objectSpread(_objectSpread(_objectSpread({}, this.defaultOptions), {}, {
                  from: this.tronWeb.defaultAddress.hex
                }, options), {}, {
                  _isConstant: true
                });
                parameters = args.map(function (value, index) {
                  return {
                    type: types[index],
                    value: value
                  };
                });
                this.tronWeb.transactionBuilder.triggerSmartContract(this.contract.address, this.functionSelector, options, parameters, options.from ? this.tronWeb.address.toHex(options.from) : false, function (err, transaction) {
                  if (err) return callback(err);
                  if (!utils__WEBPACK_IMPORTED_MODULE_7__["default"].hasProperty(transaction, 'constant_result')) return callback('Failed to execute');

                  try {
                    var len = transaction.constant_result[0].length;

                    if (len === 0 || len % 64 === 8) {
                      var msg = 'The call has been reverted or has thrown an error.';

                      if (len !== 0) {
                        msg += ' Error message: ';
                        var msg2 = '';
                        var chunk = transaction.constant_result[0].substring(8);

                        for (var i = 0; i < len - 8; i += 64) {
                          msg2 += _this2.tronWeb.toUtf8(chunk.substring(i, i + 64));
                        }

                        msg += msg2.replace(/(\u0000|\u000b|\f)+/g, ' ').replace(/ +/g, ' ').replace(/\s+$/g, '');
                      }

                      return callback(msg);
                    }

                    var output = decodeOutput(_this2.abi, '0x' + transaction.constant_result[0]);

                    if (output.length === 1 && Object.keys(output).length === 1) {
                      output = output[0];
                    }

                    return callback(null, output);
                  } catch (ex) {
                    return callback(ex);
                  }
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _call(_x, _x2) {
        return _call2.apply(this, arguments);
      }

      return _call;
    }()
  }, {
    key: "_send",
    value: function () {
      var _send2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3(types, args) {
        var _this3 = this;

        var options,
            privateKey,
            callback,
            stateMutability,
            parameters,
            address,
            transaction,
            signedTransaction,
            broadcast,
            err,
            checkResult,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                options = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
                privateKey = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : this.tronWeb.defaultPrivateKey;
                callback = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.tronWeb.defaultPrivateKey;
                }

                if (utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (callback) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", this.injectPromise(this._send, types, args, options, privateKey));

              case 7:
                if (!(types.length !== args.length)) {
                  _context3.next = 9;
                  break;
                }

                throw new Error('Invalid argument count provided');

              case 9:
                if (this.contract.address) {
                  _context3.next = 11;
                  break;
                }

                return _context3.abrupt("return", callback('Smart contract is missing address'));

              case 11:
                if (this.contract.deployed) {
                  _context3.next = 13;
                  break;
                }

                return _context3.abrupt("return", callback('Calling smart contracts requires you to load the contract first'));

              case 13:
                stateMutability = this.abi.stateMutability;

                if (!['pure', 'view'].includes(stateMutability.toLowerCase())) {
                  _context3.next = 16;
                  break;
                }

                return _context3.abrupt("return", callback("Methods with state mutability \"".concat(stateMutability, "\" must use call()")));

              case 16:
                // If a function isn't payable, dont provide a callValue.
                if (!['payable'].includes(stateMutability.toLowerCase())) options.callValue = 0;
                options = _objectSpread(_objectSpread({}, this.defaultOptions), {}, {
                  from: this.tronWeb.defaultAddress.hex
                }, options);
                parameters = args.map(function (value, index) {
                  return {
                    type: types[index],
                    value: value
                  };
                });
                _context3.prev = 19;
                address = privateKey ? this.tronWeb.address.fromPrivateKey(privateKey) : this.tronWeb.defaultAddress.base58;
                _context3.next = 23;
                return this.tronWeb.transactionBuilder.triggerSmartContract(this.contract.address, this.functionSelector, options, parameters, this.tronWeb.address.toHex(address));

              case 23:
                transaction = _context3.sent;

                if (!(!transaction.result || !transaction.result.result)) {
                  _context3.next = 26;
                  break;
                }

                return _context3.abrupt("return", callback('Unknown error: ' + JSON.stringify(transaction, null, 2)));

              case 26:
                _context3.next = 28;
                return this.tronWeb.trx.sign(transaction.transaction, privateKey);

              case 28:
                signedTransaction = _context3.sent;

                if (signedTransaction.signature) {
                  _context3.next = 33;
                  break;
                }

                if (privateKey) {
                  _context3.next = 32;
                  break;
                }

                return _context3.abrupt("return", callback('Transaction was not signed properly'));

              case 32:
                return _context3.abrupt("return", callback('Invalid private key provided'));

              case 33:
                _context3.next = 35;
                return this.tronWeb.trx.sendRawTransaction(signedTransaction);

              case 35:
                broadcast = _context3.sent;

                if (!broadcast.code) {
                  _context3.next = 40;
                  break;
                }

                err = {
                  error: broadcast.code,
                  message: broadcast.code
                };
                if (broadcast.message) err.message = this.tronWeb.toUtf8(broadcast.message);
                return _context3.abrupt("return", callback(err));

              case 40:
                if (options.shouldPollResponse) {
                  _context3.next = 42;
                  break;
                }

                return _context3.abrupt("return", callback(null, signedTransaction.txID));

              case 42:
                checkResult = /*#__PURE__*/function () {
                  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2() {
                    var index,
                        output,
                        decoded,
                        _args2 = arguments;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            index = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 0;

                            if (!(index === 20)) {
                              _context2.next = 3;
                              break;
                            }

                            return _context2.abrupt("return", callback({
                              error: 'Cannot find result in solidity node',
                              transaction: signedTransaction
                            }));

                          case 3:
                            _context2.next = 5;
                            return _this3.tronWeb.trx.getTransactionInfo(signedTransaction.txID);

                          case 5:
                            output = _context2.sent;

                            if (Object.keys(output).length) {
                              _context2.next = 8;
                              break;
                            }

                            return _context2.abrupt("return", setTimeout(function () {
                              checkResult(index + 1);
                            }, 3000));

                          case 8:
                            if (!(output.result && output.result === 'FAILED')) {
                              _context2.next = 10;
                              break;
                            }

                            return _context2.abrupt("return", callback({
                              error: _this3.tronWeb.toUtf8(output.resMessage),
                              transaction: signedTransaction,
                              output: output
                            }));

                          case 10:
                            if (utils__WEBPACK_IMPORTED_MODULE_7__["default"].hasProperty(output, 'contractResult')) {
                              _context2.next = 12;
                              break;
                            }

                            return _context2.abrupt("return", callback({
                              error: 'Failed to execute: ' + JSON.stringify(output, null, 2),
                              transaction: signedTransaction,
                              output: output
                            }));

                          case 12:
                            if (!options.rawResponse) {
                              _context2.next = 14;
                              break;
                            }

                            return _context2.abrupt("return", callback(null, output));

                          case 14:
                            decoded = decodeOutput(_this3.abi, '0x' + output.contractResult[0]);

                            if (decoded.length === 1 && Object.keys(decoded).length === 1) {
                              decoded = decoded[0];
                            }

                            if (!options.keepTxID) {
                              _context2.next = 18;
                              break;
                            }

                            return _context2.abrupt("return", callback(null, [signedTransaction.txID, decoded]));

                          case 18:
                            return _context2.abrupt("return", callback(null, decoded));

                          case 19:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function checkResult() {
                    return _ref.apply(this, arguments);
                  };
                }();

                checkResult();
                _context3.next = 49;
                break;

              case 46:
                _context3.prev = 46;
                _context3.t0 = _context3["catch"](19);
                return _context3.abrupt("return", callback(_context3.t0));

              case 49:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[19, 46]]);
      }));

      function _send(_x3, _x4) {
        return _send2.apply(this, arguments);
      }

      return _send;
    }()
  }, {
    key: "_watch",
    value: function () {
      var _watch2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee5() {
        var _this4 = this;

        var options,
            callback,
            listener,
            lastBlock,
            since,
            getEvents,
            bindListener,
            _args5 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                options = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {};
                callback = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (utils__WEBPACK_IMPORTED_MODULE_7__["default"].isFunction(callback)) {
                  _context5.next = 5;
                  break;
                }

                throw new Error('Expected callback to be provided');

              case 5:
                if (this.contract.address) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", callback('Smart contract is missing address'));

              case 7:
                if (!(!this.abi.type || !/event/i.test(this.abi.type))) {
                  _context5.next = 9;
                  break;
                }

                return _context5.abrupt("return", callback('Invalid method type for event watching'));

              case 9:
                if (this.tronWeb.eventServer) {
                  _context5.next = 11;
                  break;
                }

                return _context5.abrupt("return", callback('No event server configured'));

              case 11:
                listener = false;
                lastBlock = false;
                since = Date.now() - 1000;

                getEvents = /*#__PURE__*/function () {
                  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4() {
                    var params, events, _events$sort, _events$sort2, latestEvent, newEvents;

                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.prev = 0;
                            params = {
                              since: since,
                              eventName: _this4.name,
                              sort: 'block_timestamp',
                              blockNumber: 'latest',
                              filters: options.filters
                            };

                            if (options.resourceNode) {
                              if (/full/i.test(options.resourceNode)) params.onlyUnconfirmed = true;else params.onlyConfirmed = true;
                            }

                            _context4.next = 5;
                            return _this4.tronWeb.event.getEventsByContractAddress(_this4.contract.address, params);

                          case 5:
                            events = _context4.sent;
                            _events$sort = events.sort(function (a, b) {
                              return b.block - a.block;
                            }), _events$sort2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_events$sort, 1), latestEvent = _events$sort2[0];
                            newEvents = events.filter(function (event, index) {
                              if (options.resourceNode && event.resourceNode && options.resourceNode.toLowerCase() !== event.resourceNode.toLowerCase()) {
                                return false;
                              }

                              var duplicate = events.slice(0, index).some(function (priorEvent) {
                                return JSON.stringify(priorEvent) == JSON.stringify(event);
                              });
                              if (duplicate) return false;
                              if (!lastBlock) return true;
                              return event.block > lastBlock;
                            });
                            if (latestEvent) lastBlock = latestEvent.block;
                            return _context4.abrupt("return", newEvents);

                          case 12:
                            _context4.prev = 12;
                            _context4.t0 = _context4["catch"](0);
                            return _context4.abrupt("return", Promise.reject(_context4.t0));

                          case 15:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[0, 12]]);
                  }));

                  return function getEvents() {
                    return _ref2.apply(this, arguments);
                  };
                }();

                bindListener = function bindListener() {
                  if (listener) clearInterval(listener);
                  listener = setInterval(function () {
                    getEvents().then(function (events) {
                      return events.forEach(function (event) {
                        callback(null, utils__WEBPACK_IMPORTED_MODULE_7__["default"].parseEvent(event, _this4.abi));
                      });
                    })["catch"](function (err) {
                      return callback(err);
                    });
                  }, 3000);
                };

                _context5.next = 18;
                return getEvents();

              case 18:
                bindListener();
                return _context5.abrupt("return", {
                  start: bindListener,
                  stop: function stop() {
                    if (!listener) return;
                    clearInterval(listener);
                    listener = false;
                  }
                });

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _watch() {
        return _watch2.apply(this, arguments);
      }

      return _watch;
    }()
  }]);

  return Method;
}();



/***/ }),

/***/ "./src/lib/event.js":
/*!**************************!*\
  !*** ./src/lib/event.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Event; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! index */ "./src/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var _providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers */ "./src/lib/providers/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! injectpromise */ "injectpromise");
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(injectpromise__WEBPACK_IMPORTED_MODULE_8__);










var Event = /*#__PURE__*/function () {
  function Event() {
    var tronWeb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Event);

    if (!tronWeb || !(tronWeb instanceof index__WEBPACK_IMPORTED_MODULE_4__["default"])) throw new Error('Expected instance of TronWeb');
    this.tronWeb = tronWeb;
    this.injectPromise = injectpromise__WEBPACK_IMPORTED_MODULE_8___default()(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Event, [{
    key: "setServer",
    value: function setServer() {
      var _this = this;

      var eventServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var healthcheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'healthcheck';
      if (!eventServer) return this.tronWeb.eventServer = false;
      if (utils__WEBPACK_IMPORTED_MODULE_5__["default"].isString(eventServer)) eventServer = new _providers__WEBPACK_IMPORTED_MODULE_6__["default"].HttpProvider(eventServer);
      if (!this.tronWeb.isValidProvider(eventServer)) throw new Error('Invalid event server provided');
      this.tronWeb.eventServer = eventServer;

      this.tronWeb.eventServer.isConnected = function () {
        return _this.tronWeb.eventServer.request(healthcheck).then(function () {
          return true;
        })["catch"](function () {
          return false;
        });
      };
    }
  }, {
    key: "getEventsByContractAddress",
    value: function getEventsByContractAddress() {
      var contractAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var _Object$assign = Object.assign({
        sinceTimestamp: 0,
        eventName: false,
        blockNumber: false,
        size: 20,
        page: 1
      }, options),
          sinceTimestamp = _Object$assign.sinceTimestamp,
          since = _Object$assign.since,
          fromTimestamp = _Object$assign.fromTimestamp,
          eventName = _Object$assign.eventName,
          blockNumber = _Object$assign.blockNumber,
          size = _Object$assign.size,
          page = _Object$assign.page,
          onlyConfirmed = _Object$assign.onlyConfirmed,
          onlyUnconfirmed = _Object$assign.onlyUnconfirmed,
          previousLastEventFingerprint = _Object$assign.previousLastEventFingerprint,
          previousFingerprint = _Object$assign.previousFingerprint,
          fingerprint = _Object$assign.fingerprint,
          rawResponse = _Object$assign.rawResponse,
          sort = _Object$assign.sort,
          filters = _Object$assign.filters;

      if (!callback) return this.injectPromise(this.getEventsByContractAddress, contractAddress, options);
      fromTimestamp = fromTimestamp || sinceTimestamp || since;
      if (!this.tronWeb.eventServer) return callback('No event server configured');
      var routeParams = [];
      if (!this.tronWeb.isAddress(contractAddress)) return callback('Invalid contract address provided');
      if (eventName && !contractAddress) return callback('Usage of event name filtering requires a contract address');
      if (typeof fromTimestamp !== 'undefined' && !utils__WEBPACK_IMPORTED_MODULE_5__["default"].isInteger(fromTimestamp)) return callback('Invalid fromTimestamp provided');
      if (!utils__WEBPACK_IMPORTED_MODULE_5__["default"].isInteger(size)) return callback('Invalid size provided');

      if (size > 200) {
        console.warn('Defaulting to maximum accepted size: 200');
        size = 200;
      }

      if (!utils__WEBPACK_IMPORTED_MODULE_5__["default"].isInteger(page)) return callback('Invalid page provided');
      if (blockNumber && !eventName) return callback('Usage of block number filtering requires an event name');
      if (contractAddress) routeParams.push(this.tronWeb.address.fromHex(contractAddress));
      if (eventName) routeParams.push(eventName);
      if (blockNumber) routeParams.push(blockNumber);
      var qs = {
        size: size,
        page: page
      };

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(filters) === 'object' && Object.keys(filters).length > 0) {
        qs.filters = JSON.stringify(filters);
      }

      if (fromTimestamp) {
        qs.fromTimestamp = qs.since = fromTimestamp;
      }

      if (onlyConfirmed) qs.only_confirmed = onlyConfirmed;
      if (onlyUnconfirmed && !onlyConfirmed) qs.only_unconfirmed = onlyUnconfirmed;
      if (sort) qs.sort = sort;
      fingerprint = fingerprint || previousFingerprint || previousLastEventFingerprint;
      if (fingerprint) qs.fingerprint = fingerprint;
      return this.tronWeb.eventServer.request("event/contract/".concat(routeParams.join('/'), "?").concat(querystring__WEBPACK_IMPORTED_MODULE_7___default.a.stringify(qs))).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (!data) return callback('Unknown error occurred');
        if (!utils__WEBPACK_IMPORTED_MODULE_5__["default"].isArray(data)) return callback(data);
        return callback(null, rawResponse === true ? data : data.map(function (event) {
          return utils__WEBPACK_IMPORTED_MODULE_5__["default"].mapEvent(event);
        }));
      })["catch"](function (err) {
        return callback(err.response && err.response.data || err);
      });
    }
  }, {
    key: "getEventsByTransactionID",
    value: function getEventsByTransactionID() {
      var transactionID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_5__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (!callback) return this.injectPromise(this.getEventsByTransactionID, transactionID, options);
      if (!this.tronWeb.eventServer) return callback('No event server configured');
      return this.tronWeb.eventServer.request("event/transaction/".concat(transactionID)).then(function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (!data) return callback('Unknown error occurred');
        if (!utils__WEBPACK_IMPORTED_MODULE_5__["default"].isArray(data)) return callback(data);
        return callback(null, options.rawResponse === true ? data : data.map(function (event) {
          return utils__WEBPACK_IMPORTED_MODULE_5__["default"].mapEvent(event);
        }));
      })["catch"](function (err) {
        return callback(err.response && err.response.data || err);
      });
    }
  }]);

  return Event;
}();



/***/ }),

/***/ "./src/lib/plugin.js":
/*!***************************!*\
  !*** ./src/lib/plugin.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Plugin; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! index */ "./src/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semver */ "semver");
/* harmony import */ var semver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semver__WEBPACK_IMPORTED_MODULE_5__);







var Plugin = /*#__PURE__*/function () {
  function Plugin() {
    var tronWeb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Plugin);

    if (!tronWeb || !tronWeb instanceof index__WEBPACK_IMPORTED_MODULE_3__["default"]) throw new Error('Expected instance of TronWeb');
    this.tronWeb = tronWeb;
    this.pluginNoOverride = ['register'];
    this.disablePlugins = options.disablePlugins;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Plugin, [{
    key: "register",
    value: function register(_Plugin, options) {
      var pluginInterface = {
        requires: '0.0.0',
        components: {}
      };
      var result = {
        libs: [],
        plugged: [],
        skipped: []
      };

      if (this.disablePlugins) {
        result.error = 'This instance of TronWeb has plugins disabled.';
        return result;
      }

      var plugin = new _Plugin(this.tronWeb);

      if (utils__WEBPACK_IMPORTED_MODULE_4__["default"].isFunction(plugin.pluginInterface)) {
        pluginInterface = plugin.pluginInterface(options);
      }

      if (semver__WEBPACK_IMPORTED_MODULE_5___default.a.satisfies(index__WEBPACK_IMPORTED_MODULE_3__["default"].version, pluginInterface.requires)) {
        if (pluginInterface.fullClass) {
          // plug the entire class at the same level of tronWeb.trx
          var className = plugin.constructor.name;
          var classInstanceName = className.substring(0, 1).toLowerCase() + className.substring(1);

          if (className !== classInstanceName) {
            index__WEBPACK_IMPORTED_MODULE_3__["default"][className] = _Plugin;
            this.tronWeb[classInstanceName] = plugin;
            result.libs.push(className);
          }
        } else {
          // plug methods into a class, like trx
          for (var component in pluginInterface.components) {
            if (!this.tronWeb.hasOwnProperty(component)) {
              continue;
            }

            var methods = pluginInterface.components[component];
            var pluginNoOverride = this.tronWeb[component].pluginNoOverride || [];

            for (var method in methods) {
              if (method === 'constructor' || this.tronWeb[component][method] && (pluginNoOverride.includes(method) // blacklisted methods
              || /^_/.test(method)) // private methods
              ) {
                result.skipped.push(method);
                continue;
              }

              this.tronWeb[component][method] = methods[method].bind(this.tronWeb[component]);
              result.plugged.push(method);
            }
          }
        }
      } else {
        throw new Error('The plugin is not compatible with this version of TronWeb');
      }

      return result;
    }
  }]);

  return Plugin;
}();



/***/ }),

/***/ "./src/lib/providers/HttpProvider.js":
/*!*******************************************!*\
  !*** ./src/lib/providers/HttpProvider.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HttpProvider; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils */ "./src/utils/index.js");








var HttpProvider = /*#__PURE__*/function () {
  function HttpProvider(host) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30000;
    var user = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var password = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    var statusPage = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '/';

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, HttpProvider);

    if (!utils__WEBPACK_IMPORTED_MODULE_6__["default"].isValidURL(host)) throw new Error('Invalid URL provided to HttpProvider');
    if (isNaN(timeout) || timeout < 0) throw new Error('Invalid timeout duration provided');
    if (!utils__WEBPACK_IMPORTED_MODULE_6__["default"].isObject(headers)) throw new Error('Invalid headers object provided');
    host = host.replace(/\/+$/, '');
    this.host = host;
    this.timeout = timeout;
    this.user = user;
    this.password = password;
    this.headers = headers;
    this.statusPage = statusPage;
    this.instance = axios__WEBPACK_IMPORTED_MODULE_5___default.a.create({
      baseURL: host,
      timeout: timeout,
      headers: headers,
      auth: user && {
        user: user,
        password: password
      }
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(HttpProvider, [{
    key: "setStatusPage",
    value: function setStatusPage() {
      var statusPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
      this.statusPage = statusPage;
    }
  }, {
    key: "isConnected",
    value: function () {
      var _isConnected = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
        var statusPage,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                statusPage = _args.length > 0 && _args[0] !== undefined ? _args[0] : this.statusPage;
                return _context.abrupt("return", this.request(statusPage).then(function (data) {
                  return utils__WEBPACK_IMPORTED_MODULE_6__["default"].hasProperties(data, 'blockID', 'block_header');
                })["catch"](function () {
                  return false;
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function isConnected() {
        return _isConnected.apply(this, arguments);
      }

      return isConnected;
    }()
  }, {
    key: "request",
    value: function request(url) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
      method = method.toLowerCase();
      return this.instance.request({
        data: method == 'post' && Object.keys(payload).length ? payload : null,
        params: method == 'get' && payload,
        url: url,
        method: method
      }).then(function (_ref) {
        var data = _ref.data;
        return data;
      });
    }
  }]);

  return HttpProvider;
}();


;

/***/ }),

/***/ "./src/lib/providers/index.js":
/*!************************************!*\
  !*** ./src/lib/providers/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HttpProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpProvider */ "./src/lib/providers/HttpProvider.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  HttpProvider: _HttpProvider__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/lib/sidechain.js":
/*!******************************!*\
  !*** ./src/lib/sidechain.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideChain; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! injectpromise */ "injectpromise");
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(injectpromise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var paramValidator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! paramValidator */ "./src/paramValidator/index.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var SideChain = /*#__PURE__*/function () {
  function SideChain(sideOptions) {
    var TronWeb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var mainchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var privateKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SideChain);

    this.mainchain = mainchain;
    var fullHost = sideOptions.fullHost,
        fullNode = sideOptions.fullNode,
        solidityNode = sideOptions.solidityNode,
        eventServer = sideOptions.eventServer,
        mainGatewayAddress = sideOptions.mainGatewayAddress,
        sideGatewayAddress = sideOptions.sideGatewayAddress,
        sideChainId = sideOptions.sideChainId;
    this.sidechain = new TronWeb(fullHost || fullNode, fullHost || solidityNode, fullHost || eventServer, privateKey);
    this.isAddress = this.mainchain.isAddress;
    this.utils = this.mainchain.utils;
    this.setMainGatewayAddress(mainGatewayAddress);
    this.setSideGatewayAddress(sideGatewayAddress);
    this.setChainId(sideChainId);
    this.injectPromise = injectpromise__WEBPACK_IMPORTED_MODULE_6___default()(this);
    this.validator = new paramValidator__WEBPACK_IMPORTED_MODULE_7__["default"](this.sidechain);
    var self = this;

    this.sidechain.trx.sign = function () {
      return self.sign.apply(self, arguments);
    };

    this.sidechain.trx.multiSign = function () {
      return self.multiSign.apply(self, arguments);
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SideChain, [{
    key: "setMainGatewayAddress",
    value: function setMainGatewayAddress(mainGatewayAddress) {
      if (!this.isAddress(mainGatewayAddress)) throw new Error('Invalid main gateway address provided');
      this.mainGatewayAddress = mainGatewayAddress;
    }
  }, {
    key: "setSideGatewayAddress",
    value: function setSideGatewayAddress(sideGatewayAddress) {
      if (!this.isAddress(sideGatewayAddress)) throw new Error('Invalid side gateway address provided');
      this.sideGatewayAddress = sideGatewayAddress;
    }
  }, {
    key: "setChainId",
    value: function setChainId(sideChainId) {
      if (!this.utils.isString(sideChainId) || !sideChainId) throw new Error('Invalid side chainId provided');
      this.chainId = sideChainId;
    }
  }, {
    key: "signTransaction",
    value: function signTransaction(priKeyBytes, transaction) {
      if (typeof priKeyBytes === 'string') {
        priKeyBytes = this.utils.code.hexStr2byteArray(priKeyBytes);
      }

      var chainIdByteArr = this.utils.code.hexStr2byteArray(this.chainId);
      var byteArr = this.utils.code.hexStr2byteArray(transaction.txID).concat(chainIdByteArr);
      var byteArrHash = this.sidechain.utils.ethersUtils.sha256(byteArr);
      var signature = this.utils.crypto.ECKeySign(this.utils.code.hexStr2byteArray(byteArrHash.replace(/^0x/, '')), priKeyBytes);

      if (Array.isArray(transaction.signature)) {
        if (!transaction.signature.includes(signature)) transaction.signature.push(signature);
      } else transaction.signature = [signature];

      return transaction;
    }
  }, {
    key: "multiSign",
    value: function () {
      var _multiSign = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee() {
        var transaction,
            privateKey,
            permissionId,
            callback,
            address,
            signWeight,
            foundKey,
            _args = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                transaction = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
                privateKey = _args.length > 1 && _args[1] !== undefined ? _args[1] : this.sidechain.defaultPrivateKey;
                permissionId = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
                callback = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;

                if (this.utils.isFunction(permissionId)) {
                  callback = permissionId;
                  permissionId = 0;
                }

                if (this.utils.isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.mainchain.defaultPrivateKey;
                  permissionId = 0;
                }

                if (callback) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", this.injectPromise(this.multiSign, transaction, privateKey, permissionId));

              case 8:
                if (!(!this.utils.isObject(transaction) || !transaction.raw_data || !transaction.raw_data.contract)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return", callback('Invalid transaction provided'));

              case 10:
                if (!(!transaction.raw_data.contract[0].Permission_id && permissionId > 0)) {
                  _context.next = 30;
                  break;
                }

                // set permission id
                transaction.raw_data.contract[0].Permission_id = permissionId; // check if private key insides permission list

                address = this.sidechain.address.toHex(this.sidechain.address.fromPrivateKey(privateKey)).toLowerCase();
                _context.next = 15;
                return this.sidechain.trx.getSignWeight(transaction, permissionId);

              case 15:
                signWeight = _context.sent;

                if (!(signWeight.result.code === 'PERMISSION_ERROR')) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("return", callback(signWeight.result.message));

              case 18:
                foundKey = false;
                signWeight.permission.keys.map(function (key) {
                  if (key.address === address) foundKey = true;
                });

                if (foundKey) {
                  _context.next = 22;
                  break;
                }

                return _context.abrupt("return", callback(privateKey + ' has no permission to sign'));

              case 22:
                if (!(signWeight.approved_list && signWeight.approved_list.indexOf(address) != -1)) {
                  _context.next = 24;
                  break;
                }

                return _context.abrupt("return", callback(privateKey + ' already sign transaction'));

              case 24:
                if (!(signWeight.transaction && signWeight.transaction.transaction)) {
                  _context.next = 29;
                  break;
                }

                transaction = signWeight.transaction.transaction;
                transaction.raw_data.contract[0].Permission_id = permissionId;
                _context.next = 30;
                break;

              case 29:
                return _context.abrupt("return", callback('Invalid transaction provided'));

              case 30:
                _context.prev = 30;
                return _context.abrupt("return", callback(null, this.signTransaction(privateKey, transaction)));

              case 34:
                _context.prev = 34;
                _context.t0 = _context["catch"](30);
                callback(_context.t0);

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[30, 34]]);
      }));

      function multiSign() {
        return _multiSign.apply(this, arguments);
      }

      return multiSign;
    }()
  }, {
    key: "sign",
    value: function () {
      var _sign = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2() {
        var transaction,
            privateKey,
            useTronHeader,
            multisig,
            callback,
            signatureHex,
            address,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                transaction = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;
                privateKey = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : this.sidechain.defaultPrivateKey;
                useTronHeader = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : true;
                multisig = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : false;
                callback = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : false;

                if (this.utils.isFunction(multisig)) {
                  callback = multisig;
                  multisig = false;
                }

                if (this.utils.isFunction(useTronHeader)) {
                  callback = useTronHeader;
                  useTronHeader = true;
                  multisig = false;
                }

                if (this.utils.isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.sidechain.defaultPrivateKey;
                  useTronHeader = true;
                  multisig = false;
                }

                if (callback) {
                  _context2.next = 10;
                  break;
                }

                return _context2.abrupt("return", this.injectPromise(this.sign, transaction, privateKey, useTronHeader, multisig));

              case 10:
                if (!this.utils.isString(transaction)) {
                  _context2.next = 21;
                  break;
                }

                if (this.utils.isHex(transaction)) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt("return", callback('Expected hex message input'));

              case 13:
                _context2.prev = 13;
                signatureHex = this.sidechain.trx.signString(transaction, privateKey, useTronHeader);
                return _context2.abrupt("return", callback(null, signatureHex));

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](13);
                callback(_context2.t0);

              case 21:
                if (this.utils.isObject(transaction)) {
                  _context2.next = 23;
                  break;
                }

                return _context2.abrupt("return", callback('Invalid transaction provided'));

              case 23:
                if (!(!multisig && transaction.signature)) {
                  _context2.next = 25;
                  break;
                }

                return _context2.abrupt("return", callback('Transaction is already signed'));

              case 25:
                _context2.prev = 25;

                if (multisig) {
                  _context2.next = 30;
                  break;
                }

                address = this.sidechain.address.toHex(this.sidechain.address.fromPrivateKey(privateKey)).toLowerCase();

                if (!(address !== this.sidechain.address.toHex(transaction.raw_data.contract[0].parameter.value.owner_address))) {
                  _context2.next = 30;
                  break;
                }

                return _context2.abrupt("return", callback('Private key does not match address in transaction'));

              case 30:
                return _context2.abrupt("return", callback(null, this.signTransaction(privateKey, transaction)));

              case 33:
                _context2.prev = 33;
                _context2.t1 = _context2["catch"](25);
                callback(_context2.t1);

              case 36:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[13, 18], [25, 33]]);
      }));

      function sign() {
        return _sign.apply(this, arguments);
      }

      return sign;
    }()
    /**
    * deposit asset to sidechain
    */

  }, {
    key: "depositTrx",
    value: function () {
      var _depositTrx = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee3(callValue, depositFee, feeLimit) {
        var options,
            privateKey,
            callback,
            contractInstance,
            result,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                options = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : {};
                privateKey = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : this.mainchain.defaultPrivateKey;
                callback = _args3.length > 5 && _args3[5] !== undefined ? _args3[5] : false;

                if (this.utils.isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.mainchain.defaultPrivateKey;
                }

                if (this.utils.isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (callback) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", this.injectPromise(this.depositTrx, callValue, depositFee, feeLimit, options, privateKey));

              case 7:
                if (!this.validator.notValid([{
                  name: 'callValue',
                  type: 'integer',
                  value: callValue,
                  gte: 0
                }, {
                  name: 'depositFee',
                  type: 'integer',
                  value: depositFee,
                  gte: 0
                }, {
                  name: 'feeLimit',
                  type: 'integer',
                  value: feeLimit,
                  gte: 0
                }], callback)) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return");

              case 9:
                options = _objectSpread({
                  callValue: Number(callValue) + Number(depositFee),
                  feeLimit: feeLimit
                }, options);
                _context3.prev = 10;
                _context3.next = 13;
                return this.mainchain.contract().at(this.mainGatewayAddress);

              case 13:
                contractInstance = _context3.sent;
                _context3.next = 16;
                return contractInstance.depositTRX().send(options, privateKey);

              case 16:
                result = _context3.sent;
                return _context3.abrupt("return", callback(null, result));

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](10);
                return _context3.abrupt("return", callback(_context3.t0));

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[10, 20]]);
      }));

      function depositTrx(_x, _x2, _x3) {
        return _depositTrx.apply(this, arguments);
      }

      return depositTrx;
    }()
  }, {
    key: "depositTrc10",
    value: function () {
      var _depositTrc = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee4(tokenId, tokenValue, depositFee, feeLimit) {
        var options,
            privateKey,
            callback,
            contractInstance,
            result,
            _args4 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                options = _args4.length > 4 && _args4[4] !== undefined ? _args4[4] : {};
                privateKey = _args4.length > 5 && _args4[5] !== undefined ? _args4[5] : this.mainchain.defaultPrivateKey;
                callback = _args4.length > 6 && _args4[6] !== undefined ? _args4[6] : false;

                if (this.utils.isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.mainchain.defaultPrivateKey;
                }

                if (this.utils.isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (callback) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", this.injectPromise(this.depositTrc10, tokenId, tokenValue, depositFee, feeLimit, options, privateKey));

              case 7:
                if (!this.validator.notValid([{
                  name: 'tokenValue',
                  type: 'integer',
                  value: tokenValue,
                  gte: 0
                }, {
                  name: 'depositFee',
                  type: 'integer',
                  value: depositFee,
                  gte: 0
                }, {
                  name: 'feeLimit',
                  type: 'integer',
                  value: feeLimit,
                  gte: 0
                }, {
                  name: 'tokenId',
                  type: 'integer',
                  value: tokenId,
                  gte: 0
                }], callback)) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt("return");

              case 9:
                options = _objectSpread(_objectSpread({
                  tokenId: tokenId,
                  tokenValue: tokenValue,
                  feeLimit: feeLimit
                }, options), {}, {
                  callValue: depositFee
                });
                _context4.prev = 10;
                _context4.next = 13;
                return this.mainchain.contract().at(this.mainGatewayAddress);

              case 13:
                contractInstance = _context4.sent;
                _context4.next = 16;
                return contractInstance.depositTRC10(tokenId, tokenValue).send(options, privateKey);

              case 16:
                result = _context4.sent;
                callback(null, result);
                _context4.next = 23;
                break;

              case 20:
                _context4.prev = 20;
                _context4.t0 = _context4["catch"](10);
                return _context4.abrupt("return", callback(_context4.t0));

              case 23:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[10, 20]]);
      }));

      function depositTrc10(_x4, _x5, _x6, _x7) {
        return _depositTrc.apply(this, arguments);
      }

      return depositTrc10;
    }()
  }, {
    key: "depositTrc",
    value: function () {
      var _depositTrc2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee5(functionSelector, num, fee, feeLimit, contractAddress) {
        var options,
            privateKey,
            callback,
            result,
            approveInstance,
            contractInstance,
            _args5 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                options = _args5.length > 5 && _args5[5] !== undefined ? _args5[5] : {};
                privateKey = _args5.length > 6 && _args5[6] !== undefined ? _args5[6] : this.mainchain.defaultPrivateKey;
                callback = _args5.length > 7 && _args5[7] !== undefined ? _args5[7] : false;

                if (this.utils.isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.mainchain.defaultPrivateKey;
                }

                if (this.utils.isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (callback) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return", this.injectPromise(this.depositTrc, functionSelector, num, fee, feeLimit, contractAddress, options, privateKey));

              case 7:
                if (!this.validator.notValid([{
                  name: 'functionSelector',
                  type: 'not-empty-string',
                  value: functionSelector
                }, {
                  name: 'num',
                  type: 'integer',
                  value: num,
                  gte: 0
                }, {
                  name: 'fee',
                  type: 'integer',
                  value: fee,
                  gte: 0
                }, {
                  name: 'feeLimit',
                  type: 'integer',
                  value: feeLimit,
                  gte: 0
                }, {
                  name: 'contractAddress',
                  type: 'address',
                  value: contractAddress
                }], callback)) {
                  _context5.next = 9;
                  break;
                }

                return _context5.abrupt("return");

              case 9:
                options = _objectSpread(_objectSpread({
                  feeLimit: feeLimit
                }, options), {}, {
                  callValue: fee,
                  tokenId: '',
                  tokenValue: 0
                });
                _context5.prev = 10;
                result = null;

                if (!(functionSelector === 'approve')) {
                  _context5.next = 21;
                  break;
                }

                _context5.next = 15;
                return this.mainchain.contract().at(contractAddress);

              case 15:
                approveInstance = _context5.sent;
                _context5.next = 18;
                return approveInstance.approve(this.mainGatewayAddress, num).send(options, privateKey);

              case 18:
                result = _context5.sent;
                _context5.next = 44;
                break;

              case 21:
                _context5.next = 23;
                return this.mainchain.contract().at(this.mainGatewayAddress);

              case 23:
                contractInstance = _context5.sent;
                _context5.t0 = functionSelector;
                _context5.next = _context5.t0 === 'depositTRC20' ? 27 : _context5.t0 === 'depositTRC721' ? 31 : _context5.t0 === 'retryDeposit' ? 35 : _context5.t0 === 'retryMapping' ? 39 : 43;
                break;

              case 27:
                _context5.next = 29;
                return contractInstance.depositTRC20(contractAddress, num).send(options, privateKey);

              case 29:
                result = _context5.sent;
                return _context5.abrupt("break", 44);

              case 31:
                _context5.next = 33;
                return contractInstance.depositTRC721(contractAddress, num).send(options, privateKey);

              case 33:
                result = _context5.sent;
                return _context5.abrupt("break", 44);

              case 35:
                _context5.next = 37;
                return contractInstance.retryDeposit(num).send(options, privateKey);

              case 37:
                result = _context5.sent;
                return _context5.abrupt("break", 44);

              case 39:
                _context5.next = 41;
                return contractInstance.retryMapping(num).send(options, privateKey);

              case 41:
                result = _context5.sent;
                return _context5.abrupt("break", 44);

              case 43:
                return _context5.abrupt("break", 44);

              case 44:
                callback(null, result);
                _context5.next = 50;
                break;

              case 47:
                _context5.prev = 47;
                _context5.t1 = _context5["catch"](10);
                return _context5.abrupt("return", callback(_context5.t1));

              case 50:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[10, 47]]);
      }));

      function depositTrc(_x8, _x9, _x10, _x11, _x12) {
        return _depositTrc2.apply(this, arguments);
      }

      return depositTrc;
    }()
  }, {
    key: "approveTrc20",
    value: function () {
      var _approveTrc = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee6(num, feeLimit, contractAddress) {
        var options,
            privateKey,
            callback,
            functionSelector,
            _args6 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                options = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : {};
                privateKey = _args6.length > 4 && _args6[4] !== undefined ? _args6[4] : this.mainchain.defaultPrivateKey;
                callback = _args6.length > 5 && _args6[5] !== undefined ? _args6[5] : false;
                functionSelector = 'approve';
                return _context6.abrupt("return", this.depositTrc(functionSelector, num, 0, feeLimit, contractAddress, options, privateKey, callback));

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function approveTrc20(_x13, _x14, _x15) {
        return _approveTrc.apply(this, arguments);
      }

      return approveTrc20;
    }()
  }, {
    key: "approveTrc721",
    value: function () {
      var _approveTrc2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee7(id, feeLimit, contractAddress) {
        var options,
            privateKey,
            callback,
            functionSelector,
            _args7 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                options = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : {};
                privateKey = _args7.length > 4 && _args7[4] !== undefined ? _args7[4] : this.mainchain.defaultPrivateKey;
                callback = _args7.length > 5 && _args7[5] !== undefined ? _args7[5] : false;
                functionSelector = 'approve';
                return _context7.abrupt("return", this.depositTrc(functionSelector, id, 0, feeLimit, contractAddress, options, privateKey, callback));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function approveTrc721(_x16, _x17, _x18) {
        return _approveTrc2.apply(this, arguments);
      }

      return approveTrc721;
    }()
  }, {
    key: "depositTrc20",
    value: function () {
      var _depositTrc3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee8(num, depositFee, feeLimit, contractAddress) {
        var options,
            privateKey,
            callback,
            functionSelector,
            _args8 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                options = _args8.length > 4 && _args8[4] !== undefined ? _args8[4] : {};
                privateKey = _args8.length > 5 && _args8[5] !== undefined ? _args8[5] : this.mainchain.defaultPrivateKey;
                callback = _args8.length > 6 && _args8[6] !== undefined ? _args8[6] : false;
                functionSelector = 'depositTRC20';
                return _context8.abrupt("return", this.depositTrc(functionSelector, num, depositFee, feeLimit, contractAddress, options, privateKey, callback));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function depositTrc20(_x19, _x20, _x21, _x22) {
        return _depositTrc3.apply(this, arguments);
      }

      return depositTrc20;
    }()
  }, {
    key: "depositTrc721",
    value: function () {
      var _depositTrc4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee9(id, depositFee, feeLimit, contractAddress) {
        var options,
            privateKey,
            callback,
            functionSelector,
            _args9 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                options = _args9.length > 4 && _args9[4] !== undefined ? _args9[4] : {};
                privateKey = _args9.length > 5 && _args9[5] !== undefined ? _args9[5] : this.mainchain.defaultPrivateKey;
                callback = _args9.length > 6 && _args9[6] !== undefined ? _args9[6] : false;
                functionSelector = 'depositTRC721';
                return _context9.abrupt("return", this.depositTrc(functionSelector, id, depositFee, feeLimit, contractAddress, options, privateKey, callback));

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function depositTrc721(_x23, _x24, _x25, _x26) {
        return _depositTrc4.apply(this, arguments);
      }

      return depositTrc721;
    }()
    /**
     * mapping asset TRC20 or TRC721 to DAppChain
     */

  }, {
    key: "mappingTrc",
    value: function () {
      var _mappingTrc = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee10(trxHash, mappingFee, feeLimit, functionSelector) {
        var options,
            privateKey,
            callback,
            contractInstance,
            result,
            _args10 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                options = _args10.length > 4 && _args10[4] !== undefined ? _args10[4] : {};
                privateKey = _args10.length > 5 && _args10[5] !== undefined ? _args10[5] : this.mainchain.defaultPrivateKey;
                callback = _args10.length > 6 ? _args10[6] : undefined;

                if (this.utils.isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.mainchain.defaultPrivateKey;
                }

                if (this.utils.isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (callback) {
                  _context10.next = 7;
                  break;
                }

                return _context10.abrupt("return", this.injectPromise(this.mappingTrc, trxHash, mappingFee, feeLimit, functionSelector, options, privateKey));

              case 7:
                if (!this.validator.notValid([{
                  name: 'trxHash',
                  type: 'not-empty-string',
                  value: trxHash
                }, {
                  name: 'mappingFee',
                  type: 'integer',
                  value: mappingFee,
                  gte: 0
                }, {
                  name: 'feeLimit',
                  type: 'integer',
                  value: feeLimit,
                  gte: 0
                }], callback)) {
                  _context10.next = 9;
                  break;
                }

                return _context10.abrupt("return");

              case 9:
                trxHash = trxHash.startsWith('0x') ? trxHash : '0x' + trxHash;
                options = _objectSpread(_objectSpread({
                  feeLimit: feeLimit
                }, options), {}, {
                  callValue: mappingFee
                });
                _context10.prev = 11;
                _context10.next = 14;
                return this.mainchain.contract().at(this.mainGatewayAddress);

              case 14:
                contractInstance = _context10.sent;
                result = null;

                if (!(functionSelector === 'mappingTRC20')) {
                  _context10.next = 22;
                  break;
                }

                _context10.next = 19;
                return contractInstance.mappingTRC20(trxHash).send(options, privateKey);

              case 19:
                result = _context10.sent;
                _context10.next = 29;
                break;

              case 22:
                if (!(functionSelector === 'mappingTRC721')) {
                  _context10.next = 28;
                  break;
                }

                _context10.next = 25;
                return contractInstance.mappingTRC721(trxHash).send(options, privateKey);

              case 25:
                result = _context10.sent;
                _context10.next = 29;
                break;

              case 28:
                callback(new Error('type must be trc20 or trc721'));

              case 29:
                callback(null, result);
                _context10.next = 35;
                break;

              case 32:
                _context10.prev = 32;
                _context10.t0 = _context10["catch"](11);
                return _context10.abrupt("return", callback(_context10.t0));

              case 35:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[11, 32]]);
      }));

      function mappingTrc(_x27, _x28, _x29, _x30) {
        return _mappingTrc.apply(this, arguments);
      }

      return mappingTrc;
    }()
  }, {
    key: "mappingTrc20",
    value: function () {
      var _mappingTrc2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee11(trxHash, mappingFee, feeLimit) {
        var options,
            privateKey,
            callback,
            functionSelector,
            _args11 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                options = _args11.length > 3 && _args11[3] !== undefined ? _args11[3] : {};
                privateKey = _args11.length > 4 && _args11[4] !== undefined ? _args11[4] : this.mainchain.defaultPrivateKey;
                callback = _args11.length > 5 && _args11[5] !== undefined ? _args11[5] : false;
                functionSelector = 'mappingTRC20';
                return _context11.abrupt("return", this.mappingTrc(trxHash, mappingFee, feeLimit, functionSelector, options, privateKey, callback));

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function mappingTrc20(_x31, _x32, _x33) {
        return _mappingTrc2.apply(this, arguments);
      }

      return mappingTrc20;
    }()
  }, {
    key: "mappingTrc721",
    value: function () {
      var _mappingTrc3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee12(trxHash, mappingFee, feeLimit) {
        var options,
            privateKey,
            callback,
            functionSelector,
            _args12 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                options = _args12.length > 3 && _args12[3] !== undefined ? _args12[3] : {};
                privateKey = _args12.length > 4 && _args12[4] !== undefined ? _args12[4] : this.mainchain.defaultPrivateKey;
                callback = _args12.length > 5 && _args12[5] !== undefined ? _args12[5] : false;
                functionSelector = 'mappingTRC721';
                return _context12.abrupt("return", this.mappingTrc(trxHash, mappingFee, feeLimit, functionSelector, options, privateKey, callback));

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function mappingTrc721(_x34, _x35, _x36) {
        return _mappingTrc3.apply(this, arguments);
      }

      return mappingTrc721;
    }()
    /**
     * withdraw trx from sidechain to mainchain
     */

  }, {
    key: "withdrawTrx",
    value: function () {
      var _withdrawTrx = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee13(callValue, withdrawFee, feeLimit) {
        var options,
            privateKey,
            callback,
            contractInstance,
            result,
            _args13 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                options = _args13.length > 3 && _args13[3] !== undefined ? _args13[3] : {};
                privateKey = _args13.length > 4 && _args13[4] !== undefined ? _args13[4] : this.mainchain.defaultPrivateKey;
                callback = _args13.length > 5 && _args13[5] !== undefined ? _args13[5] : false;

                if (this.utils.isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.mainchain.defaultPrivateKey;
                }

                if (this.utils.isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (callback) {
                  _context13.next = 7;
                  break;
                }

                return _context13.abrupt("return", this.injectPromise(this.withdrawTrx, callValue, withdrawFee, feeLimit, options, privateKey));

              case 7:
                if (!this.validator.notValid([{
                  name: 'callValue',
                  type: 'integer',
                  value: callValue,
                  gte: 0
                }, {
                  name: 'withdrawFee',
                  type: 'integer',
                  value: withdrawFee,
                  gte: 0
                }, {
                  name: 'feeLimit',
                  type: 'integer',
                  value: feeLimit,
                  gte: 0
                }], callback)) {
                  _context13.next = 9;
                  break;
                }

                return _context13.abrupt("return");

              case 9:
                options = _objectSpread({
                  callValue: Number(callValue) + Number(withdrawFee),
                  feeLimit: feeLimit
                }, options);
                _context13.prev = 10;
                _context13.next = 13;
                return this.sidechain.contract().at(this.sideGatewayAddress);

              case 13:
                contractInstance = _context13.sent;
                _context13.next = 16;
                return contractInstance.withdrawTRX().send(options, privateKey);

              case 16:
                result = _context13.sent;
                return _context13.abrupt("return", callback(null, result));

              case 20:
                _context13.prev = 20;
                _context13.t0 = _context13["catch"](10);
                return _context13.abrupt("return", callback(_context13.t0));

              case 23:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[10, 20]]);
      }));

      function withdrawTrx(_x37, _x38, _x39) {
        return _withdrawTrx.apply(this, arguments);
      }

      return withdrawTrx;
    }()
  }, {
    key: "withdrawTrc10",
    value: function () {
      var _withdrawTrc = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee14(tokenId, tokenValue, withdrawFee, feeLimit) {
        var options,
            privateKey,
            callback,
            contractInstance,
            result,
            _args14 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                options = _args14.length > 4 && _args14[4] !== undefined ? _args14[4] : {};
                privateKey = _args14.length > 5 && _args14[5] !== undefined ? _args14[5] : this.mainchain.defaultPrivateKey;
                callback = _args14.length > 6 && _args14[6] !== undefined ? _args14[6] : false;

                if (this.utils.isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.mainchain.defaultPrivateKey;
                }

                if (this.utils.isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (callback) {
                  _context14.next = 7;
                  break;
                }

                return _context14.abrupt("return", this.injectPromise(this.withdrawTrc10, tokenId, tokenValue, withdrawFee, feeLimit, options, privateKey));

              case 7:
                if (!this.validator.notValid([{
                  name: 'tokenId',
                  type: 'integer',
                  value: tokenId,
                  gte: 0
                }, {
                  name: 'tokenValue',
                  type: 'integer',
                  value: tokenValue,
                  gte: 0
                }, {
                  name: 'withdrawFee',
                  type: 'integer',
                  value: withdrawFee,
                  gte: 0
                }, {
                  name: 'feeLimit',
                  type: 'integer',
                  value: feeLimit,
                  gte: 0
                }], callback)) {
                  _context14.next = 9;
                  break;
                }

                return _context14.abrupt("return");

              case 9:
                options = _objectSpread({
                  tokenValue: tokenValue,
                  tokenId: tokenId,
                  callValue: withdrawFee,
                  feeLimit: feeLimit
                }, options);
                _context14.prev = 10;
                _context14.next = 13;
                return this.sidechain.contract().at(this.sideGatewayAddress);

              case 13:
                contractInstance = _context14.sent;
                _context14.next = 16;
                return contractInstance.withdrawTRC10(tokenId, tokenValue).send(options, privateKey);

              case 16:
                result = _context14.sent;
                return _context14.abrupt("return", callback(null, result));

              case 20:
                _context14.prev = 20;
                _context14.t0 = _context14["catch"](10);
                return _context14.abrupt("return", callback(_context14.t0));

              case 23:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[10, 20]]);
      }));

      function withdrawTrc10(_x40, _x41, _x42, _x43) {
        return _withdrawTrc.apply(this, arguments);
      }

      return withdrawTrc10;
    }()
  }, {
    key: "withdrawTrc",
    value: function () {
      var _withdrawTrc2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee16(functionSelector, numOrId, withdrawFee, feeLimit, contractAddress) {
        var _this = this;

        var options,
            privateKey,
            callback,
            parameters,
            address,
            transaction,
            signedTransaction,
            broadcast,
            err,
            checkResult,
            _args16 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                options = _args16.length > 5 && _args16[5] !== undefined ? _args16[5] : {};
                privateKey = _args16.length > 6 && _args16[6] !== undefined ? _args16[6] : this.mainchain.defaultPrivateKey;
                callback = _args16.length > 7 && _args16[7] !== undefined ? _args16[7] : false;

                if (this.utils.isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.mainchain.defaultPrivateKey;
                }

                if (this.utils.isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (callback) {
                  _context16.next = 7;
                  break;
                }

                return _context16.abrupt("return", this.injectPromise(this.withdrawTrc, functionSelector, numOrId, withdrawFee, feeLimit, contractAddress, options, privateKey));

              case 7:
                if (!this.validator.notValid([{
                  name: 'functionSelector',
                  type: 'not-empty-string',
                  value: functionSelector
                }, {
                  name: 'numOrId',
                  type: 'integer',
                  value: numOrId,
                  gte: 0
                }, {
                  name: 'withdrawFee',
                  type: 'integer',
                  value: withdrawFee,
                  gte: 0
                }, {
                  name: 'feeLimit',
                  type: 'integer',
                  value: feeLimit,
                  gte: 0
                }, {
                  name: 'contractAddress',
                  type: 'address',
                  value: contractAddress
                }], callback)) {
                  _context16.next = 9;
                  break;
                }

                return _context16.abrupt("return");

              case 9:
                options = _objectSpread(_objectSpread({
                  feeLimit: feeLimit
                }, options), {}, {
                  callValue: withdrawFee
                });
                parameters = [{
                  type: 'uint256',
                  value: numOrId
                }];
                _context16.prev = 11;
                address = privateKey ? this.sidechain.address.fromPrivateKey(privateKey) : this.sidechain.defaultAddress.base58;
                _context16.next = 15;
                return this.sidechain.transactionBuilder.triggerSmartContract(contractAddress, functionSelector, options, parameters, this.sidechain.address.toHex(address));

              case 15:
                transaction = _context16.sent;

                if (!(!transaction.result || !transaction.result.result)) {
                  _context16.next = 18;
                  break;
                }

                return _context16.abrupt("return", callback('Unknown error: ' + JSON.stringify(transaction.transaction, null, 2)));

              case 18:
                _context16.next = 20;
                return this.sidechain.trx.sign(transaction.transaction, privateKey);

              case 20:
                signedTransaction = _context16.sent;

                if (signedTransaction.signature) {
                  _context16.next = 25;
                  break;
                }

                if (privateKey) {
                  _context16.next = 24;
                  break;
                }

                return _context16.abrupt("return", callback('Transaction was not signed properly'));

              case 24:
                return _context16.abrupt("return", callback('Invalid private key provided'));

              case 25:
                _context16.next = 27;
                return this.sidechain.trx.sendRawTransaction(signedTransaction);

              case 27:
                broadcast = _context16.sent;

                if (!broadcast.code) {
                  _context16.next = 32;
                  break;
                }

                err = {
                  error: broadcast.code,
                  message: broadcast.code
                };
                if (broadcast.message) err.message = this.sidechain.toUtf8(broadcast.message);
                return _context16.abrupt("return", callback(err));

              case 32:
                if (options.shouldPollResponse) {
                  _context16.next = 34;
                  break;
                }

                return _context16.abrupt("return", callback(null, signedTransaction.txID));

              case 34:
                checkResult = /*#__PURE__*/function () {
                  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee15() {
                    var index,
                        output,
                        decoded,
                        _args15 = arguments;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            index = _args15.length > 0 && _args15[0] !== undefined ? _args15[0] : 0;

                            if (!(index == 20)) {
                              _context15.next = 3;
                              break;
                            }

                            return _context15.abrupt("return", callback({
                              error: 'Cannot find result in solidity node',
                              transaction: signedTransaction
                            }));

                          case 3:
                            _context15.next = 5;
                            return _this.sidechain.trx.getTransactionInfo(signedTransaction.txID);

                          case 5:
                            output = _context15.sent;

                            if (Object.keys(output).length) {
                              _context15.next = 8;
                              break;
                            }

                            return _context15.abrupt("return", setTimeout(function () {
                              checkResult(index + 1);
                            }, 3000));

                          case 8:
                            if (!(output.result && output.result == 'FAILED')) {
                              _context15.next = 10;
                              break;
                            }

                            return _context15.abrupt("return", callback({
                              error: _this.sidechain.toUtf8(output.resMessage),
                              transaction: signedTransaction,
                              output: output
                            }));

                          case 10:
                            if (_this.utils.hasProperty(output, 'contractResult')) {
                              _context15.next = 12;
                              break;
                            }

                            return _context15.abrupt("return", callback({
                              error: 'Failed to execute: ' + JSON.stringify(output, null, 2),
                              transaction: signedTransaction,
                              output: output
                            }));

                          case 12:
                            if (!options.rawResponse) {
                              _context15.next = 14;
                              break;
                            }

                            return _context15.abrupt("return", callback(null, output));

                          case 14:
                            decoded = decodeOutput(_this.outputs, '0x' + output.contractResult[0]);
                            if (decoded.length === 1) decoded = decoded[0];
                            return _context15.abrupt("return", callback(null, decoded));

                          case 17:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  return function checkResult() {
                    return _ref.apply(this, arguments);
                  };
                }();

                checkResult();
                _context16.next = 41;
                break;

              case 38:
                _context16.prev = 38;
                _context16.t0 = _context16["catch"](11);
                return _context16.abrupt("return", callback(_context16.t0));

              case 41:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[11, 38]]);
      }));

      function withdrawTrc(_x44, _x45, _x46, _x47, _x48) {
        return _withdrawTrc2.apply(this, arguments);
      }

      return withdrawTrc;
    }()
  }, {
    key: "withdrawTrc20",
    value: function () {
      var _withdrawTrc3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee17(num, withdrawFee, feeLimit, contractAddress, options) {
        var privateKey,
            callback,
            functionSelector,
            _args17 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                privateKey = _args17.length > 5 && _args17[5] !== undefined ? _args17[5] : this.mainchain.defaultPrivateKey;
                callback = _args17.length > 6 && _args17[6] !== undefined ? _args17[6] : false;
                functionSelector = 'withdrawal(uint256)';
                return _context17.abrupt("return", this.withdrawTrc(functionSelector, num, withdrawFee, feeLimit, contractAddress, options, privateKey, callback));

              case 4:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function withdrawTrc20(_x49, _x50, _x51, _x52, _x53) {
        return _withdrawTrc3.apply(this, arguments);
      }

      return withdrawTrc20;
    }()
  }, {
    key: "withdrawTrc721",
    value: function () {
      var _withdrawTrc4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee18(id, withdrawFee, feeLimit, contractAddress, options) {
        var privateKey,
            callback,
            functionSelector,
            _args18 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                privateKey = _args18.length > 5 && _args18[5] !== undefined ? _args18[5] : this.mainchain.defaultPrivateKey;
                callback = _args18.length > 6 && _args18[6] !== undefined ? _args18[6] : false;
                functionSelector = 'withdrawal(uint256)';
                return _context18.abrupt("return", this.withdrawTrc(functionSelector, id, withdrawFee, feeLimit, contractAddress, options, privateKey, callback));

              case 4:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function withdrawTrc721(_x54, _x55, _x56, _x57, _x58) {
        return _withdrawTrc4.apply(this, arguments);
      }

      return withdrawTrc721;
    }()
  }, {
    key: "injectFund",
    value: function () {
      var _injectFund = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee19(num, feeLimit, options) {
        var privateKey,
            callback,
            address,
            hexAddress,
            transaction,
            signedTransaction,
            broadcast,
            err,
            _args19 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                privateKey = _args19.length > 3 && _args19[3] !== undefined ? _args19[3] : this.mainchain.defaultPrivateKey;
                callback = _args19.length > 4 && _args19[4] !== undefined ? _args19[4] : false;

                if (this.utils.isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.mainchain.defaultPrivateKey;
                }

                if (this.utils.isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (callback) {
                  _context19.next = 6;
                  break;
                }

                return _context19.abrupt("return", this.injectPromise(this.injectFund, num, feeLimit, options, privateKey));

              case 6:
                if (!this.validator.notValid([{
                  name: 'num',
                  type: 'integer',
                  value: num,
                  gte: 0
                }, {
                  name: 'feeLimit',
                  type: 'integer',
                  value: feeLimit,
                  gte: 0
                }], callback)) {
                  _context19.next = 8;
                  break;
                }

                return _context19.abrupt("return");

              case 8:
                _context19.prev = 8;
                address = this.sidechain.address.fromPrivateKey(privateKey);
                hexAddress = this.sidechain.address.toHex(address);
                _context19.next = 13;
                return this.sidechain.fullNode.request('/wallet/fundinject', {
                  owner_address: hexAddress,
                  amount: num
                }, 'post');

              case 13:
                transaction = _context19.sent;
                _context19.next = 16;
                return this.sidechain.trx.sign(transaction, privateKey);

              case 16:
                signedTransaction = _context19.sent;

                if (signedTransaction.signature) {
                  _context19.next = 21;
                  break;
                }

                if (privateKey) {
                  _context19.next = 20;
                  break;
                }

                return _context19.abrupt("return", callback('Transaction was not signed properly'));

              case 20:
                return _context19.abrupt("return", callback('Invalid private key provided'));

              case 21:
                _context19.next = 23;
                return this.sidechain.trx.sendRawTransaction(signedTransaction);

              case 23:
                broadcast = _context19.sent;

                if (!broadcast.code) {
                  _context19.next = 28;
                  break;
                }

                err = {
                  error: broadcast.code,
                  message: broadcast.code
                };
                if (broadcast.message) err.message = this.mainchain.toUtf8(broadcast.message);
                return _context19.abrupt("return", callback(err));

              case 28:
                return _context19.abrupt("return", callback(null, signedTransaction.txID));

              case 31:
                _context19.prev = 31;
                _context19.t0 = _context19["catch"](8);
                return _context19.abrupt("return", callback(_context19.t0));

              case 34:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this, [[8, 31]]);
      }));

      function injectFund(_x59, _x60, _x61) {
        return _injectFund.apply(this, arguments);
      }

      return injectFund;
    }()
  }, {
    key: "retryWithdraw",
    value: function () {
      var _retryWithdraw = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee20(nonce, retryWithdrawFee, feeLimit) {
        var options,
            privateKey,
            callback,
            functionSelector,
            _args20 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                options = _args20.length > 3 && _args20[3] !== undefined ? _args20[3] : {};
                privateKey = _args20.length > 4 && _args20[4] !== undefined ? _args20[4] : this.sidechain.defaultPrivateKey;
                callback = _args20.length > 5 && _args20[5] !== undefined ? _args20[5] : false;
                functionSelector = 'retryWithdraw(uint256)';
                return _context20.abrupt("return", this.withdrawTrc(functionSelector, nonce, retryWithdrawFee, feeLimit, this.sideGatewayAddress, options, privateKey, callback));

              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function retryWithdraw(_x62, _x63, _x64) {
        return _retryWithdraw.apply(this, arguments);
      }

      return retryWithdraw;
    }()
  }, {
    key: "retryDeposit",
    value: function () {
      var _retryDeposit = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee21(nonce, retryDepositFee, feeLimit) {
        var options,
            privateKey,
            callback,
            functionSelector,
            _args21 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                options = _args21.length > 3 && _args21[3] !== undefined ? _args21[3] : {};
                privateKey = _args21.length > 4 && _args21[4] !== undefined ? _args21[4] : this.mainchain.defaultPrivateKey;
                callback = _args21.length > 5 && _args21[5] !== undefined ? _args21[5] : false;
                functionSelector = 'retryDeposit';
                return _context21.abrupt("return", this.depositTrc(functionSelector, nonce, retryDepositFee, feeLimit, this.mainGatewayAddress, options, privateKey, callback));

              case 5:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function retryDeposit(_x65, _x66, _x67) {
        return _retryDeposit.apply(this, arguments);
      }

      return retryDeposit;
    }()
  }, {
    key: "retryMapping",
    value: function () {
      var _retryMapping = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee22(nonce, retryMappingFee, feeLimit) {
        var options,
            privateKey,
            callback,
            functionSelector,
            _args22 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                options = _args22.length > 3 && _args22[3] !== undefined ? _args22[3] : {};
                privateKey = _args22.length > 4 && _args22[4] !== undefined ? _args22[4] : this.mainchain.defaultPrivateKey;
                callback = _args22.length > 5 && _args22[5] !== undefined ? _args22[5] : false;
                functionSelector = 'retryMapping';
                return _context22.abrupt("return", this.depositTrc(functionSelector, nonce, retryMappingFee, feeLimit, this.mainGatewayAddress, options, privateKey, callback));

              case 5:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function retryMapping(_x68, _x69, _x70) {
        return _retryMapping.apply(this, arguments);
      }

      return retryMapping;
    }()
  }]);

  return SideChain;
}();



/***/ }),

/***/ "./src/lib/transactionBuilder.js":
/*!***************************************!*\
  !*** ./src/lib/transactionBuilder.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TransactionBuilder; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! index */ "./src/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var utils_ethersUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/ethersUtils */ "./src/utils/ethersUtils.js");
/* harmony import */ var paramValidator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! paramValidator */ "./src/paramValidator/index.js");
/* harmony import */ var utils_address__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/address */ "./src/utils/address.js");
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! injectpromise */ "injectpromise");
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(injectpromise__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var utils_abi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/abi */ "./src/utils/abi.js");








function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var self; //helpers

function toHex(value) {
  return index__WEBPACK_IMPORTED_MODULE_7__["default"].address.toHex(value);
}

function fromUtf8(value) {
  return self.tronWeb.fromUtf8(value);
}

function resultManager(transaction, callback) {
  if (transaction.Error) return callback(transaction.Error);

  if (transaction.result && transaction.result.message) {
    return callback(self.tronWeb.toUtf8(transaction.result.message));
  }

  return callback(null, transaction);
}

var TransactionBuilder = /*#__PURE__*/function () {
  function TransactionBuilder() {
    var tronWeb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TransactionBuilder);

    if (!tronWeb || !tronWeb instanceof index__WEBPACK_IMPORTED_MODULE_7__["default"]) throw new Error('Expected instance of TronWeb');
    self = this;
    this.tronWeb = tronWeb;
    this.injectPromise = injectpromise__WEBPACK_IMPORTED_MODULE_12___default()(this);
    this.validator = new paramValidator__WEBPACK_IMPORTED_MODULE_10__["default"](tronWeb);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TransactionBuilder, [{
    key: "sendTrx",
    value: function sendTrx() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 3 ? arguments[3] : undefined;
      var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(from)) {
        callback = from;
        from = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(from)) {
        options = from;
        from = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.sendTrx, to, amount, from, options); // accept amounts passed as strings

      amount = parseInt(amount);
      if (this.validator.notValid([{
        name: 'recipient',
        type: 'address',
        value: to
      }, {
        name: 'origin',
        type: 'address',
        value: from
      }, {
        names: ['recipient', 'origin'],
        type: 'notEqual',
        msg: 'Cannot transfer TRX to the same account'
      }, {
        name: 'amount',
        type: 'integer',
        gt: 0,
        value: amount
      }], callback)) return;
      var data = {
        to_address: toHex(to),
        owner_address: toHex(from),
        amount: amount
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/createtransaction', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "sendToken",
    value: function sendToken() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var tokenID = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var from = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 4 ? arguments[4] : undefined;
      var callback = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(from)) {
        callback = from;
        from = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(from)) {
        options = from;
        from = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.sendToken, to, amount, tokenID, from, options);
      amount = parseInt(amount);
      if (this.validator.notValid([{
        name: 'recipient',
        type: 'address',
        value: to
      }, {
        name: 'origin',
        type: 'address',
        value: from
      }, {
        names: ['recipient', 'origin'],
        type: 'notEqual',
        msg: 'Cannot transfer tokens to the same account'
      }, {
        name: 'amount',
        type: 'integer',
        gt: 0,
        value: amount
      }, {
        name: 'token ID',
        type: 'tokenId',
        value: tokenID
      }], callback)) return;
      var data = {
        to_address: toHex(to),
        owner_address: toHex(from),
        asset_name: fromUtf8(tokenID),
        amount: parseInt(amount)
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/transferasset', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "purchaseToken",
    value: function purchaseToken() {
      var issuerAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var tokenID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var amount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var buyer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 4 ? arguments[4] : undefined;
      var callback = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(buyer)) {
        callback = buyer;
        buyer = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(buyer)) {
        options = buyer;
        buyer = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.purchaseToken, issuerAddress, tokenID, amount, buyer, options);
      if (this.validator.notValid([{
        name: 'buyer',
        type: 'address',
        value: buyer
      }, {
        name: 'issuer',
        type: 'address',
        value: issuerAddress
      }, {
        names: ['buyer', 'issuer'],
        type: 'notEqual',
        msg: 'Cannot purchase tokens from same account'
      }, {
        name: 'amount',
        type: 'integer',
        gt: 0,
        value: amount
      }, {
        name: 'token ID',
        type: 'tokenId',
        value: tokenID
      }], callback)) return;
      var data = {
        to_address: toHex(issuerAddress),
        owner_address: toHex(buyer),
        asset_name: fromUtf8(tokenID),
        amount: parseInt(amount)
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/participateassetissue', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "freezeBalance",
    value: function freezeBalance() {
      var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      var resource = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "BANDWIDTH";
      var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.tronWeb.defaultAddress.hex;
      var receiverAddress = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      var options = arguments.length > 5 ? arguments[5] : undefined;
      var callback = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(receiverAddress)) {
        callback = receiverAddress;
        receiverAddress = undefined;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(receiverAddress)) {
        options = receiverAddress;
        receiverAddress = undefined;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(address)) {
        callback = address;
        address = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(address)) {
        options = address;
        address = this.tronWeb.defaultAddress.hex;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(duration)) {
        callback = duration;
        duration = 3;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(resource)) {
        callback = resource;
        resource = "BANDWIDTH";
      }

      if (!callback) return this.injectPromise(this.freezeBalance, amount, duration, resource, address, receiverAddress, options);
      if (this.validator.notValid([{
        name: 'origin',
        type: 'address',
        value: address
      }, {
        name: 'receiver',
        type: 'address',
        value: receiverAddress,
        optional: true
      }, {
        name: 'amount',
        type: 'integer',
        gt: 0,
        value: amount
      }, {
        name: 'duration',
        type: 'integer',
        gte: 3,
        value: duration
      }, {
        name: 'resource',
        type: 'resource',
        value: resource,
        msg: 'Invalid resource provided: Expected "BANDWIDTH" or "ENERGY'
      }], callback)) return;
      var data = {
        owner_address: toHex(address),
        frozen_balance: parseInt(amount),
        frozen_duration: parseInt(duration),
        resource: resource
      };

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isNotNullOrUndefined(receiverAddress) && toHex(receiverAddress) !== toHex(address)) {
        data.receiver_address = toHex(receiverAddress);
      }

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/freezebalance', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "unfreezeBalance",
    value: function unfreezeBalance() {
      var resource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "BANDWIDTH";
      var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tronWeb.defaultAddress.hex;
      var receiverAddress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var options = arguments.length > 3 ? arguments[3] : undefined;
      var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(receiverAddress)) {
        callback = receiverAddress;
        receiverAddress = undefined;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(receiverAddress)) {
        options = receiverAddress;
        receiverAddress = undefined;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(address)) {
        callback = address;
        address = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(address)) {
        options = address;
        address = this.tronWeb.defaultAddress.hex;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(resource)) {
        callback = resource;
        resource = "BANDWIDTH";
      }

      if (!callback) return this.injectPromise(this.unfreezeBalance, resource, address, receiverAddress, options);
      if (this.validator.notValid([{
        name: 'origin',
        type: 'address',
        value: address
      }, {
        name: 'receiver',
        type: 'address',
        value: receiverAddress,
        optional: true
      }, {
        name: 'resource',
        type: 'resource',
        value: resource,
        msg: 'Invalid resource provided: Expected "BANDWIDTH" or "ENERGY'
      }], callback)) return;
      var data = {
        owner_address: toHex(address),
        resource: resource
      };

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isNotNullOrUndefined(receiverAddress) && toHex(receiverAddress) !== toHex(address)) {
        data.receiver_address = toHex(receiverAddress);
      }

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/unfreezebalance', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "withdrawBlockRewards",
    value: function withdrawBlockRewards() {
      var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 1 ? arguments[1] : undefined;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(address)) {
        callback = address;
        address = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(address)) {
        options = address;
        address = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.withdrawBlockRewards, address, options);
      if (this.validator.notValid([{
        name: 'origin',
        type: 'address',
        value: address
      }], callback)) return;
      var data = {
        owner_address: toHex(address)
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/withdrawbalance', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "applyForSR",
    value: function applyForSR() {
      var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultAddress.hex;
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var options = arguments.length > 2 ? arguments[2] : undefined;
      var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(url) && utils__WEBPACK_IMPORTED_MODULE_8__["default"].isValidURL(address)) {
        options = url;
        url = address;
        address = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.applyForSR, address, url, options);
      if (this.validator.notValid([{
        name: 'origin',
        type: 'address',
        value: address
      }, {
        name: 'url',
        type: 'url',
        value: url,
        msg: 'Invalid url provided'
      }], callback)) return;
      var data = {
        owner_address: toHex(address),
        url: fromUtf8(url)
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/createwitness', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "vote",
    value: function vote() {
      var _this = this;

      var votes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var voterAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 2 ? arguments[2] : undefined;
      var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(voterAddress)) {
        callback = voterAddress;
        voterAddress = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(voterAddress)) {
        options = voterAddress;
        voterAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.vote, votes, voterAddress, options);
      if (this.validator.notValid([{
        name: 'voter',
        type: 'address',
        value: voterAddress
      }, {
        name: 'votes',
        type: 'notEmptyObject',
        value: votes
      }], callback)) return;
      var invalid = false;
      votes = Object.entries(votes).map(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 2),
            srAddress = _ref2[0],
            voteCount = _ref2[1];

        if (invalid) return;
        if (_this.validator.notValid([{
          name: 'SR',
          type: 'address',
          value: srAddress
        }, {
          name: 'vote count',
          type: 'integer',
          gt: 0,
          value: voteCount,
          msg: 'Invalid vote count provided for SR: ' + srAddress
        }])) return invalid = true;
        return {
          vote_address: toHex(srAddress),
          vote_count: parseInt(voteCount)
        };
      });
      if (invalid) return;
      var data = {
        owner_address: toHex(voterAddress),
        votes: votes
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/votewitnessaccount', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "createSmartContract",
    value: function createSmartContract() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var issuerAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(issuerAddress)) {
        callback = issuerAddress;
        issuerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.createSmartContract, options, issuerAddress);
      var feeLimit = options.feeLimit || this.tronWeb.feeLimit;
      var userFeePercentage = options.userFeePercentage;

      if (typeof userFeePercentage !== 'number' && !userFeePercentage) {
        userFeePercentage = 100;
      }

      var originEnergyLimit = options.originEnergyLimit || 10000000;
      var callValue = options.callValue || 0;
      var tokenValue = options.tokenValue;
      var tokenId = options.tokenId || options.token_id;
      var _options$abi = options.abi,
          abi = _options$abi === void 0 ? false : _options$abi,
          _options$bytecode = options.bytecode,
          bytecode = _options$bytecode === void 0 ? false : _options$bytecode,
          _options$parameters = options.parameters,
          parameters = _options$parameters === void 0 ? [] : _options$parameters,
          _options$name = options.name,
          name = _options$name === void 0 ? "" : _options$name;

      if (abi && utils__WEBPACK_IMPORTED_MODULE_8__["default"].isString(abi)) {
        try {
          abi = JSON.parse(abi);
        } catch (_unused) {
          return callback('Invalid options.abi provided');
        }
      }

      if (abi.entrys) abi = abi.entrys;
      if (!utils__WEBPACK_IMPORTED_MODULE_8__["default"].isArray(abi)) return callback('Invalid options.abi provided');
      var payable = abi.some(function (func) {
        return func.type === 'constructor' && 'payable' === func.stateMutability.toLowerCase();
      });
      if (this.validator.notValid([{
        name: 'bytecode',
        type: 'hex',
        value: bytecode
      }, {
        name: 'feeLimit',
        type: 'integer',
        value: feeLimit,
        gt: 0
      }, {
        name: 'callValue',
        type: 'integer',
        value: callValue,
        gte: 0
      }, {
        name: 'userFeePercentage',
        type: 'integer',
        value: userFeePercentage,
        gte: 0,
        lte: 100
      }, {
        name: 'originEnergyLimit',
        type: 'integer',
        value: originEnergyLimit,
        gte: 0,
        lte: 10000000
      }, {
        name: 'parameters',
        type: 'array',
        value: parameters
      }, {
        name: 'issuer',
        type: 'address',
        value: issuerAddress
      }, {
        name: 'tokenValue',
        type: 'integer',
        value: tokenValue,
        gte: 0,
        optional: true
      }, {
        name: 'tokenId',
        type: 'integer',
        value: tokenId,
        gte: 0,
        optional: true
      }], callback)) return;
      if (payable && callValue == 0 && tokenValue == 0) return callback('When contract is payable, options.callValue or options.tokenValue must be a positive integer');
      if (!payable && (callValue > 0 || tokenValue > 0)) return callback('When contract is not payable, options.callValue and options.tokenValue must be 0');

      if (options.rawParameter && utils__WEBPACK_IMPORTED_MODULE_8__["default"].isString(options.rawParameter)) {
        parameters = options.rawParameter.replace(/^(0x)/, '');
      } else if (options.funcABIV2) {
        parameters = Object(utils_abi__WEBPACK_IMPORTED_MODULE_13__["encodeParamsV2ByABI"])(options.funcABIV2, options.parametersV2).replace(/^(0x)/, '');
      } else {
        var constructorParams = abi.find(function (it) {
          return it.type === 'constructor';
        });

        if (typeof constructorParams !== 'undefined' && constructorParams) {
          var abiCoder = new utils_ethersUtils__WEBPACK_IMPORTED_MODULE_9__["AbiCoder"]();
          var types = [];
          var values = [];
          constructorParams = constructorParams.inputs;
          if (parameters.length != constructorParams.length) return callback("constructor needs ".concat(constructorParams.length, " but ").concat(parameters.length, " provided"));

          for (var i = 0; i < parameters.length; i++) {
            var type = constructorParams[i].type;
            var value = parameters[i];
            if (!type || !utils__WEBPACK_IMPORTED_MODULE_8__["default"].isString(type) || !type.length) return callback('Invalid parameter type provided: ' + type);
            if (type === 'address') value = toHex(value).replace(utils_address__WEBPACK_IMPORTED_MODULE_11__["ADDRESS_PREFIX_REGEX"], '0x');else if (type.match(/^([^\x5b]*)(\x5b|$)/)[0] === 'address[') value = value.map(function (v) {
              return toHex(v).replace(utils_address__WEBPACK_IMPORTED_MODULE_11__["ADDRESS_PREFIX_REGEX"], '0x');
            });else if (/trcToken/.test(type)) {
              type = type.replace(/trcToken/, 'uint256');
            }
            types.push(type);
            values.push(value);
          }

          try {
            parameters = abiCoder.encode(types, values).replace(/^(0x)/, '');
          } catch (ex) {
            return callback(ex);
          }
        } else parameters = '';
      }

      var args = {
        owner_address: toHex(issuerAddress),
        fee_limit: parseInt(feeLimit),
        call_value: parseInt(callValue),
        consume_user_resource_percent: userFeePercentage,
        origin_energy_limit: originEnergyLimit,
        abi: JSON.stringify(abi),
        bytecode: bytecode,
        parameter: parameters,
        name: name
      }; // tokenValue and tokenId can cause errors if provided when the trx10 proposal has not been approved yet. So we set them only if they are passed to the method.

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isNotNullOrUndefined(tokenValue)) args.call_token_value = parseInt(tokenValue);
      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isNotNullOrUndefined(tokenId)) args.token_id = parseInt(tokenId);
      if (options && options.permissionId) args.Permission_id = options.permissionId;
      this.tronWeb.fullNode.request('wallet/deploycontract', args, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "triggerSmartContract",
    value: function triggerSmartContract() {
      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
      }

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(params[2]) !== 'object') {
        params[2] = {
          feeLimit: params[2],
          callValue: params[3]
        };
        params.splice(3, 1);
      }

      return this._triggerSmartContract.apply(this, params);
    }
  }, {
    key: "triggerConstantContract",
    value: function triggerConstantContract() {
      for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
      }

      params[2]._isConstant = true;
      return this.triggerSmartContract.apply(this, params);
    }
  }, {
    key: "triggerConfirmedConstantContract",
    value: function triggerConfirmedConstantContract() {
      for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
      }

      params[2]._isConstant = true;
      params[2].confirmed = true;
      return this.triggerSmartContract.apply(this, params);
    }
  }, {
    key: "_triggerSmartContract",
    value: function _triggerSmartContract(contractAddress, functionSelector) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var parameters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
      var issuerAddress = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(issuerAddress)) {
        callback = issuerAddress;
        issuerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(parameters)) {
        callback = parameters;
        parameters = [];
      }

      if (!callback) {
        return this.injectPromise(this._triggerSmartContract, contractAddress, functionSelector, options, parameters, issuerAddress);
      }

      var _Object$assign = Object.assign({
        callValue: 0,
        feeLimit: this.tronWeb.feeLimit
      }, options),
          tokenValue = _Object$assign.tokenValue,
          tokenId = _Object$assign.tokenId,
          callValue = _Object$assign.callValue,
          feeLimit = _Object$assign.feeLimit;

      if (this.validator.notValid([{
        name: 'feeLimit',
        type: 'integer',
        value: feeLimit,
        gt: 0
      }, {
        name: 'callValue',
        type: 'integer',
        value: callValue,
        gte: 0
      }, {
        name: 'parameters',
        type: 'array',
        value: parameters
      }, {
        name: 'contract',
        type: 'address',
        value: contractAddress
      }, {
        name: 'issuer',
        type: 'address',
        value: issuerAddress,
        optional: true
      }, {
        name: 'tokenValue',
        type: 'integer',
        value: tokenValue,
        gte: 0,
        optional: true
      }, {
        name: 'tokenId',
        type: 'integer',
        value: tokenId,
        gte: 0,
        optional: true
      }], callback)) return;
      var args = {
        contract_address: toHex(contractAddress),
        owner_address: toHex(issuerAddress)
      };

      if (functionSelector && utils__WEBPACK_IMPORTED_MODULE_8__["default"].isString(functionSelector)) {
        functionSelector = functionSelector.replace('/\s*/g', '');

        if (parameters.length) {
          var abiCoder = new utils_ethersUtils__WEBPACK_IMPORTED_MODULE_9__["AbiCoder"]();
          var types = [];
          var values = [];

          for (var i = 0; i < parameters.length; i++) {
            var _parameters$i = parameters[i],
                type = _parameters$i.type,
                value = _parameters$i.value;
            if (!type || !utils__WEBPACK_IMPORTED_MODULE_8__["default"].isString(type) || !type.length) return callback('Invalid parameter type provided: ' + type);
            if (type === 'address') value = toHex(value).replace(utils_address__WEBPACK_IMPORTED_MODULE_11__["ADDRESS_PREFIX_REGEX"], '0x');else if (type.match(/^([^\x5b]*)(\x5b|$)/)[0] === 'address[') value = value.map(function (v) {
              return toHex(v).replace(utils_address__WEBPACK_IMPORTED_MODULE_11__["ADDRESS_PREFIX_REGEX"], '0x');
            });
            types.push(type);
            values.push(value);
          }

          try {
            // workaround for unsupported trcToken type
            types = types.map(function (type) {
              if (/trcToken/.test(type)) {
                type = type.replace(/trcToken/, 'uint256');
              }

              return type;
            });
            parameters = abiCoder.encode(types, values).replace(/^(0x)/, '');
          } catch (ex) {
            return callback(ex);
          }
        } else parameters = ''; // work for abiv2 if passed the function abi in options


        if (options.funcABIV2) {
          parameters = Object(utils_abi__WEBPACK_IMPORTED_MODULE_13__["encodeParamsV2ByABI"])(options.funcABIV2, options.parametersV2).replace(/^(0x)/, '');
        }

        if (options.shieldedParameter && utils__WEBPACK_IMPORTED_MODULE_8__["default"].isString(options.shieldedParameter)) {
          parameters = options.shieldedParameter.replace(/^(0x)/, '');
        }

        if (options.rawParameter && utils__WEBPACK_IMPORTED_MODULE_8__["default"].isString(options.rawParameter)) {
          parameters = options.rawParameter.replace(/^(0x)/, '');
        }

        args.function_selector = functionSelector;
        args.parameter = parameters;
      }

      args.call_value = parseInt(callValue);
      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isNotNullOrUndefined(tokenValue)) args.call_token_value = parseInt(tokenValue);
      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isNotNullOrUndefined(tokenId)) args.token_id = parseInt(tokenId);

      if (!options._isConstant) {
        args.fee_limit = parseInt(feeLimit);
      }

      if (options.permissionId) {
        args.Permission_id = options.permissionId;
      }

      this.tronWeb[options.confirmed ? 'solidityNode' : 'fullNode'].request("wallet".concat(options.confirmed ? 'solidity' : '', "/trigger").concat(options._isConstant ? 'constant' : 'smart', "contract"), args, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "clearABI",
    value: function clearABI(contractAddress) {
      var ownerAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!callback) return this.injectPromise(this.clearABI, contractAddress, ownerAddress);
      if (!this.tronWeb.isAddress(contractAddress)) return callback('Invalid contract address provided');
      if (!this.tronWeb.isAddress(ownerAddress)) return callback('Invalid owner address provided');
      var data = {
        contract_address: toHex(contractAddress),
        owner_address: toHex(ownerAddress)
      };

      if (this.tronWeb.trx.cache.contracts[contractAddress]) {
        delete this.tronWeb.trx.cache.contracts[contractAddress];
      }

      this.tronWeb.fullNode.request('wallet/clearabi', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "updateBrokerage",
    value: function updateBrokerage(brokerage) {
      var ownerAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!callback) return this.injectPromise(this.updateBrokerage, brokerage, ownerAddress);
      if (!utils__WEBPACK_IMPORTED_MODULE_8__["default"].isNotNullOrUndefined(brokerage)) return callback('Invalid brokerage provided');
      if (!utils__WEBPACK_IMPORTED_MODULE_8__["default"].isInteger(brokerage) || brokerage < 0 || brokerage > 100) return callback('Brokerage must be an integer between 0 and 100');
      if (!this.tronWeb.isAddress(ownerAddress)) return callback('Invalid owner address provided');
      var data = {
        brokerage: parseInt(brokerage),
        owner_address: toHex(ownerAddress)
      };
      this.tronWeb.fullNode.request('wallet/updateBrokerage', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "createToken",
    value: function createToken() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var issuerAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(issuerAddress)) {
        callback = issuerAddress;
        issuerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.createToken, options, issuerAddress);
      var _options$name2 = options.name,
          name = _options$name2 === void 0 ? false : _options$name2,
          _options$abbreviation = options.abbreviation,
          abbreviation = _options$abbreviation === void 0 ? false : _options$abbreviation,
          _options$description = options.description,
          description = _options$description === void 0 ? false : _options$description,
          _options$url = options.url,
          url = _options$url === void 0 ? false : _options$url,
          _options$totalSupply = options.totalSupply,
          totalSupply = _options$totalSupply === void 0 ? 0 : _options$totalSupply,
          _options$trxRatio = options.trxRatio,
          trxRatio = _options$trxRatio === void 0 ? 1 : _options$trxRatio,
          _options$tokenRatio = options.tokenRatio,
          tokenRatio = _options$tokenRatio === void 0 ? 1 : _options$tokenRatio,
          _options$saleStart = options.saleStart,
          saleStart = _options$saleStart === void 0 ? Date.now() : _options$saleStart,
          _options$saleEnd = options.saleEnd,
          saleEnd = _options$saleEnd === void 0 ? false : _options$saleEnd,
          _options$freeBandwidt = options.freeBandwidth,
          freeBandwidth = _options$freeBandwidt === void 0 ? 0 : _options$freeBandwidt,
          _options$freeBandwidt2 = options.freeBandwidthLimit,
          freeBandwidthLimit = _options$freeBandwidt2 === void 0 ? 0 : _options$freeBandwidt2,
          _options$frozenAmount = options.frozenAmount,
          frozenAmount = _options$frozenAmount === void 0 ? 0 : _options$frozenAmount,
          _options$frozenDurati = options.frozenDuration,
          frozenDuration = _options$frozenDurati === void 0 ? 0 : _options$frozenDurati,
          voteScore = options.voteScore,
          precision = options.precision;
      if (this.validator.notValid([{
        name: 'Supply amount',
        type: 'positive-integer',
        value: totalSupply
      }, {
        name: 'TRX ratio',
        type: 'positive-integer',
        value: trxRatio
      }, {
        name: 'Token ratio',
        type: 'positive-integer',
        value: tokenRatio
      }, {
        name: 'token abbreviation',
        type: 'not-empty-string',
        value: abbreviation
      }, {
        name: 'token name',
        type: 'not-empty-string',
        value: name
      }, {
        name: 'token description',
        type: 'not-empty-string',
        value: description
      }, {
        name: 'token url',
        type: 'url',
        value: url
      }, {
        name: 'issuer',
        type: 'address',
        value: issuerAddress
      }, {
        name: 'sale start timestamp',
        type: 'integer',
        value: saleStart,
        gte: Date.now()
      }, {
        name: 'sale end timestamp',
        type: 'integer',
        value: saleEnd,
        gt: saleStart
      }, {
        name: 'Free bandwidth amount',
        type: 'integer',
        value: freeBandwidth,
        gte: 0
      }, {
        name: 'Free bandwidth limit',
        type: 'integer',
        value: freeBandwidthLimit,
        gte: 0
      }, {
        name: 'Frozen supply',
        type: 'integer',
        value: frozenAmount,
        gte: 0
      }, {
        name: 'Frozen duration',
        type: 'integer',
        value: frozenDuration,
        gte: 0
      }], callback)) return;
      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isNotNullOrUndefined(voteScore) && (!utils__WEBPACK_IMPORTED_MODULE_8__["default"].isInteger(voteScore) || voteScore <= 0)) return callback('voteScore must be a positive integer greater than 0');
      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isNotNullOrUndefined(precision) && (!utils__WEBPACK_IMPORTED_MODULE_8__["default"].isInteger(precision) || precision < 0 || precision > 6)) return callback('precision must be a positive integer >= 0 and <= 6');
      var data = {
        owner_address: toHex(issuerAddress),
        name: fromUtf8(name),
        abbr: fromUtf8(abbreviation),
        description: fromUtf8(description),
        url: fromUtf8(url),
        total_supply: parseInt(totalSupply),
        trx_num: parseInt(trxRatio),
        num: parseInt(tokenRatio),
        start_time: parseInt(saleStart),
        end_time: parseInt(saleEnd),
        free_asset_net_limit: parseInt(freeBandwidth),
        public_free_asset_net_limit: parseInt(freeBandwidthLimit),
        frozen_supply: {
          frozen_amount: parseInt(frozenAmount),
          frozen_days: parseInt(frozenDuration)
        }
      };

      if (!(parseInt(frozenAmount) > 0)) {
        delete data.frozen_supply;
      }

      if (precision && !isNaN(parseInt(precision))) {
        data.precision = parseInt(precision);
      }

      if (voteScore && !isNaN(parseInt(voteScore))) {
        data.vote_score = parseInt(voteScore);
      }

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/createassetissue', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "updateAccount",
    value: function updateAccount() {
      var accountName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 2 ? arguments[2] : undefined;
      var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(address)) {
        callback = address;
        address = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(address)) {
        options = address;
        address = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) {
        return this.injectPromise(this.updateAccount, accountName, address, options);
      }

      if (this.validator.notValid([{
        name: 'Name',
        type: 'not-empty-string',
        value: accountName
      }, {
        name: 'origin',
        type: 'address',
        value: address
      }], callback)) return;
      var data = {
        account_name: fromUtf8(accountName),
        owner_address: toHex(address)
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/updateaccount', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "setAccountId",
    value: function setAccountId(accountId) {
      var address = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(address)) {
        callback = address;
        address = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) {
        return this.injectPromise(this.setAccountId, accountId, address);
      }

      if (accountId && utils__WEBPACK_IMPORTED_MODULE_8__["default"].isString(accountId) && accountId.startsWith('0x')) {
        accountId = accountId.slice(2);
      }

      if (this.validator.notValid([{
        name: 'accountId',
        type: 'hex',
        value: accountId
      }, {
        name: 'accountId',
        type: 'string',
        lte: 32,
        gte: 8,
        value: accountId
      }, {
        name: 'origin',
        type: 'address',
        value: address
      }], callback)) return;
      this.tronWeb.fullNode.request('wallet/setaccountid', {
        account_id: accountId,
        owner_address: toHex(address)
      }, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "updateToken",
    value: function updateToken() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var issuerAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(issuerAddress)) {
        callback = issuerAddress;
        issuerAddress = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(issuerAddress)) {
        options = issuerAddress;
        issuerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.updateToken, options, issuerAddress);
      var _options = options,
          _options$description2 = _options.description,
          description = _options$description2 === void 0 ? false : _options$description2,
          _options$url2 = _options.url,
          url = _options$url2 === void 0 ? false : _options$url2,
          _options$freeBandwidt3 = _options.freeBandwidth,
          freeBandwidth = _options$freeBandwidt3 === void 0 ? 0 : _options$freeBandwidt3,
          _options$freeBandwidt4 = _options.freeBandwidthLimit,
          freeBandwidthLimit = _options$freeBandwidt4 === void 0 ? 0 : _options$freeBandwidt4;
      if (this.validator.notValid([{
        name: 'token description',
        type: 'not-empty-string',
        value: description
      }, {
        name: 'token url',
        type: 'url',
        value: url
      }, {
        name: 'issuer',
        type: 'address',
        value: issuerAddress
      }, {
        name: 'Free bandwidth amount',
        type: 'positive-integer',
        value: freeBandwidth
      }, {
        name: 'Free bandwidth limit',
        type: 'positive-integer',
        value: freeBandwidthLimit
      }], callback)) return;
      var data = {
        owner_address: toHex(issuerAddress),
        description: fromUtf8(description),
        url: fromUtf8(url),
        new_limit: parseInt(freeBandwidth),
        new_public_limit: parseInt(freeBandwidthLimit)
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/updateasset', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "sendAsset",
    value: function sendAsset() {
      return this.sendToken.apply(this, arguments);
    }
  }, {
    key: "purchaseAsset",
    value: function purchaseAsset() {
      return this.purchaseToken.apply(this, arguments);
    }
  }, {
    key: "createAsset",
    value: function createAsset() {
      return this.createToken.apply(this, arguments);
    }
  }, {
    key: "updateAsset",
    value: function updateAsset() {
      return this.updateToken.apply(this, arguments);
    }
    /**
     * Creates a proposal to modify the network.
     * Can only be created by a current Super Representative.
     */

  }, {
    key: "createProposal",
    value: function createProposal() {
      var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var issuerAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 2 ? arguments[2] : undefined;
      var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(issuerAddress)) {
        callback = issuerAddress;
        issuerAddress = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(issuerAddress)) {
        options = issuerAddress;
        issuerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.createProposal, parameters, issuerAddress, options);
      if (this.validator.notValid([{
        name: 'issuer',
        type: 'address',
        value: issuerAddress
      }], callback)) return;
      var invalid = 'Invalid proposal parameters provided';
      if (!parameters) return callback(invalid);
      if (!utils__WEBPACK_IMPORTED_MODULE_8__["default"].isArray(parameters)) parameters = [parameters];

      var _iterator = _createForOfIteratorHelper(parameters),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var parameter = _step.value;
          if (!utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(parameter)) return callback(invalid);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var data = {
        owner_address: toHex(issuerAddress),
        parameters: parameters
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/proposalcreate', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Deletes a network modification proposal that the owner issued.
     * Only current Super Representative can vote on a proposal.
     */

  }, {
    key: "deleteProposal",
    value: function deleteProposal() {
      var proposalID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var issuerAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 2 ? arguments[2] : undefined;
      var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(issuerAddress)) {
        callback = issuerAddress;
        issuerAddress = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(issuerAddress)) {
        options = issuerAddress;
        issuerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.deleteProposal, proposalID, issuerAddress, options);
      if (this.validator.notValid([{
        name: 'issuer',
        type: 'address',
        value: issuerAddress
      }, {
        name: 'proposalID',
        type: 'integer',
        value: proposalID,
        gte: 0
      }], callback)) return;
      var data = {
        owner_address: toHex(issuerAddress),
        proposal_id: parseInt(proposalID)
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/proposaldelete', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Adds a vote to an issued network modification proposal.
     * Only current Super Representative can vote on a proposal.
     */

  }, {
    key: "voteProposal",
    value: function voteProposal() {
      var proposalID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var isApproval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var voterAddress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 3 ? arguments[3] : undefined;
      var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(voterAddress)) {
        callback = voterAddress;
        voterAddress = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(voterAddress)) {
        options = voterAddress;
        voterAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.voteProposal, proposalID, isApproval, voterAddress, options);
      if (this.validator.notValid([{
        name: 'voter',
        type: 'address',
        value: voterAddress
      }, {
        name: 'proposalID',
        type: 'integer',
        value: proposalID,
        gte: 0
      }, {
        name: 'has approval',
        type: 'boolean',
        value: isApproval
      }], callback)) return;
      var data = {
        owner_address: toHex(voterAddress),
        proposal_id: parseInt(proposalID),
        is_add_approval: isApproval
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/proposalapprove', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Create an exchange between a token and TRX.
     * Token Name should be a CASE SENSITIVE string.
     * PLEASE VERIFY THIS ON TRONSCAN.
     */

  }, {
    key: "createTRXExchange",
    value: function createTRXExchange(tokenName, tokenBalance, trxBalance) {
      var ownerAddress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 4 ? arguments[4] : undefined;
      var callback = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(ownerAddress)) {
        callback = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(ownerAddress)) {
        options = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.createTRXExchange, tokenName, tokenBalance, trxBalance, ownerAddress, options);
      if (this.validator.notValid([{
        name: 'owner',
        type: 'address',
        value: ownerAddress
      }, {
        name: 'token name',
        type: 'not-empty-string',
        value: tokenName
      }, {
        name: 'token balance',
        type: 'positive-integer',
        value: tokenBalance
      }, {
        name: 'trx balance',
        type: 'positive-integer',
        value: trxBalance
      }], callback)) return;
      var data = {
        owner_address: toHex(ownerAddress),
        first_token_id: fromUtf8(tokenName),
        first_token_balance: tokenBalance,
        second_token_id: '5f',
        // Constant for TRX.
        second_token_balance: trxBalance
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/exchangecreate', data, 'post').then(function (resources) {
        callback(null, resources);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Create an exchange between a token and another token.
     * DO NOT USE THIS FOR TRX.
     * Token Names should be a CASE SENSITIVE string.
     * PLEASE VERIFY THIS ON TRONSCAN.
     */

  }, {
    key: "createTokenExchange",
    value: function createTokenExchange(firstTokenName, firstTokenBalance, secondTokenName, secondTokenBalance) {
      var ownerAddress = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 5 ? arguments[5] : undefined;
      var callback = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(ownerAddress)) {
        callback = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(ownerAddress)) {
        options = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.createTokenExchange, firstTokenName, firstTokenBalance, secondTokenName, secondTokenBalance, ownerAddress, options);
      if (this.validator.notValid([{
        name: 'owner',
        type: 'address',
        value: ownerAddress
      }, {
        name: 'first token name',
        type: 'not-empty-string',
        value: firstTokenName
      }, {
        name: 'second token name',
        type: 'not-empty-string',
        value: secondTokenName
      }, {
        name: 'first token balance',
        type: 'positive-integer',
        value: firstTokenBalance
      }, {
        name: 'second token balance',
        type: 'positive-integer',
        value: secondTokenBalance
      }], callback)) return;
      var data = {
        owner_address: toHex(ownerAddress),
        first_token_id: fromUtf8(firstTokenName),
        first_token_balance: firstTokenBalance,
        second_token_id: fromUtf8(secondTokenName),
        second_token_balance: secondTokenBalance
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/exchangecreate', data, 'post').then(function (resources) {
        callback(null, resources);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Adds tokens into a bancor style exchange.
     * Will add both tokens at market rate.
     * Use "_" for the constant value for TRX.
     */

  }, {
    key: "injectExchangeTokens",
    value: function injectExchangeTokens() {
      var exchangeID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var tokenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var tokenAmount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var ownerAddress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 4 ? arguments[4] : undefined;
      var callback = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(ownerAddress)) {
        callback = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(ownerAddress)) {
        options = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.injectExchangeTokens, exchangeID, tokenName, tokenAmount, ownerAddress, options);
      if (this.validator.notValid([{
        name: 'owner',
        type: 'address',
        value: ownerAddress
      }, {
        name: 'token name',
        type: 'not-empty-string',
        value: tokenName
      }, {
        name: 'token amount',
        type: 'integer',
        value: tokenAmount,
        gte: 1
      }, {
        name: 'exchangeID',
        type: 'integer',
        value: exchangeID,
        gte: 0
      }], callback)) return;
      var data = {
        owner_address: toHex(ownerAddress),
        exchange_id: parseInt(exchangeID),
        token_id: fromUtf8(tokenName),
        quant: parseInt(tokenAmount)
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/exchangeinject', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Withdraws tokens from a bancor style exchange.
     * Will withdraw at market rate both tokens.
     * Use "_" for the constant value for TRX.
     */

  }, {
    key: "withdrawExchangeTokens",
    value: function withdrawExchangeTokens() {
      var exchangeID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var tokenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var tokenAmount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var ownerAddress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 4 ? arguments[4] : undefined;
      var callback = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(ownerAddress)) {
        callback = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(ownerAddress)) {
        options = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.withdrawExchangeTokens, exchangeID, tokenName, tokenAmount, ownerAddress, options);
      if (this.validator.notValid([{
        name: 'owner',
        type: 'address',
        value: ownerAddress
      }, {
        name: 'token name',
        type: 'not-empty-string',
        value: tokenName
      }, {
        name: 'token amount',
        type: 'integer',
        value: tokenAmount,
        gte: 1
      }, {
        name: 'exchangeID',
        type: 'integer',
        value: exchangeID,
        gte: 0
      }], callback)) return;
      var data = {
        owner_address: toHex(ownerAddress),
        exchange_id: parseInt(exchangeID),
        token_id: fromUtf8(tokenName),
        quant: parseInt(tokenAmount)
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/exchangewithdraw', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Trade tokens on a bancor style exchange.
     * Expected value is a validation and used to cap the total amt of token 2 spent.
     * Use "_" for the constant value for TRX.
     */

  }, {
    key: "tradeExchangeTokens",
    value: function tradeExchangeTokens() {
      var exchangeID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var tokenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var tokenAmountSold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var tokenAmountExpected = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var ownerAddress = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 5 ? arguments[5] : undefined;
      var callback = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(ownerAddress)) {
        callback = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(ownerAddress)) {
        options = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.tradeExchangeTokens, exchangeID, tokenName, tokenAmountSold, tokenAmountExpected, ownerAddress, options);
      if (this.validator.notValid([{
        name: 'owner',
        type: 'address',
        value: ownerAddress
      }, {
        name: 'token name',
        type: 'not-empty-string',
        value: tokenName
      }, {
        name: 'tokenAmountSold',
        type: 'integer',
        value: tokenAmountSold,
        gte: 1
      }, {
        name: 'tokenAmountExpected',
        type: 'integer',
        value: tokenAmountExpected,
        gte: 1
      }, {
        name: 'exchangeID',
        type: 'integer',
        value: exchangeID,
        gte: 0
      }], callback)) return;
      var data = {
        owner_address: toHex(ownerAddress),
        exchange_id: parseInt(exchangeID),
        token_id: this.tronWeb.fromAscii(tokenName),
        quant: parseInt(tokenAmountSold),
        expected: parseInt(tokenAmountExpected)
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/exchangetransaction', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Update userFeePercentage.
     */

  }, {
    key: "updateSetting",
    value: function updateSetting() {
      var contractAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var userFeePercentage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var ownerAddress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 3 ? arguments[3] : undefined;
      var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(ownerAddress)) {
        callback = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(ownerAddress)) {
        options = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.updateSetting, contractAddress, userFeePercentage, ownerAddress, options);
      if (this.validator.notValid([{
        name: 'owner',
        type: 'address',
        value: ownerAddress
      }, {
        name: 'contract',
        type: 'address',
        value: contractAddress
      }, {
        name: 'userFeePercentage',
        type: 'integer',
        value: userFeePercentage,
        gte: 0,
        lte: 100
      }], callback)) return;
      var data = {
        owner_address: toHex(ownerAddress),
        contract_address: toHex(contractAddress),
        consume_user_resource_percent: userFeePercentage
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/updatesetting', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Update energy limit.
     */

  }, {
    key: "updateEnergyLimit",
    value: function updateEnergyLimit() {
      var contractAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var originEnergyLimit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var ownerAddress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.tronWeb.defaultAddress.hex;
      var options = arguments.length > 3 ? arguments[3] : undefined;
      var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(ownerAddress)) {
        callback = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      } else if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(ownerAddress)) {
        options = ownerAddress;
        ownerAddress = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.updateEnergyLimit, contractAddress, originEnergyLimit, ownerAddress, options);
      if (this.validator.notValid([{
        name: 'owner',
        type: 'address',
        value: ownerAddress
      }, {
        name: 'contract',
        type: 'address',
        value: contractAddress
      }, {
        name: 'originEnergyLimit',
        type: 'integer',
        value: originEnergyLimit,
        gte: 0,
        lte: 10000000
      }], callback)) return;
      var data = {
        owner_address: toHex(ownerAddress),
        contract_address: toHex(contractAddress),
        origin_energy_limit: originEnergyLimit
      };

      if (options && options.permissionId) {
        data.Permission_id = options.permissionId;
      }

      this.tronWeb.fullNode.request('wallet/updateenergylimit', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "checkPermissions",
    value: function checkPermissions(permissions, type) {
      if (permissions) {
        if (permissions.type !== type || !permissions.permission_name || !utils__WEBPACK_IMPORTED_MODULE_8__["default"].isString(permissions.permission_name) || !utils__WEBPACK_IMPORTED_MODULE_8__["default"].isInteger(permissions.threshold) || permissions.threshold < 1 || !permissions.keys) {
          return false;
        }

        var _iterator2 = _createForOfIteratorHelper(permissions.keys),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var key = _step2.value;

            if (!this.tronWeb.isAddress(key.address) || !utils__WEBPACK_IMPORTED_MODULE_8__["default"].isInteger(key.weight) || key.weight > permissions.threshold || key.weight < 1 || type === 2 && !permissions.operations) {
              return false;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return true;
    }
  }, {
    key: "updateAccountPermissions",
    value: function updateAccountPermissions() {
      var ownerAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultAddress.hex;
      var ownerPermissions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var witnessPermissions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var activesPermissions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var callback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(activesPermissions)) {
        callback = activesPermissions;
        activesPermissions = false;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(witnessPermissions)) {
        callback = witnessPermissions;
        witnessPermissions = activesPermissions = false;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(ownerPermissions)) {
        callback = ownerPermissions;
        ownerPermissions = witnessPermissions = activesPermissions = false;
      }

      if (!callback) return this.injectPromise(this.updateAccountPermissions, ownerAddress, ownerPermissions, witnessPermissions, activesPermissions);
      if (!this.tronWeb.isAddress(ownerAddress)) return callback('Invalid ownerAddress provided');

      if (!this.checkPermissions(ownerPermissions, 0)) {
        return callback('Invalid ownerPermissions provided');
      }

      if (!this.checkPermissions(witnessPermissions, 1)) {
        return callback('Invalid witnessPermissions provided');
      }

      if (!Array.isArray(activesPermissions)) {
        activesPermissions = [activesPermissions];
      }

      var _iterator3 = _createForOfIteratorHelper(activesPermissions),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var activesPermission = _step3.value;

          if (!this.checkPermissions(activesPermission, 2)) {
            return callback('Invalid activesPermissions provided');
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var data = {
        owner_address: ownerAddress
      };

      if (ownerPermissions) {
        data.owner = ownerPermissions;
      }

      if (witnessPermissions) {
        data.witness = witnessPermissions;
      }

      if (activesPermissions) {
        data.actives = activesPermissions.length === 1 ? activesPermissions[0] : activesPermissions;
      }

      this.tronWeb.fullNode.request('wallet/accountpermissionupdate', data, 'post').then(function (transaction) {
        return resultManager(transaction, callback);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "newTxID",
    value: function () {
      var _newTxID = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(transaction, callback) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (callback) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", this.injectPromise(this.newTxID, transaction));

              case 2:
                this.tronWeb.fullNode.request('wallet/getsignweight', transaction, 'post').then(function (newTransaction) {
                  newTransaction = newTransaction.transaction.transaction;

                  if (typeof transaction.visible === 'boolean') {
                    newTransaction.visible = transaction.visible;
                  }

                  callback(null, newTransaction);
                })["catch"](function (err) {
                  return callback('Error generating a new transaction id.');
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function newTxID(_x, _x2) {
        return _newTxID.apply(this, arguments);
      }

      return newTxID;
    }()
  }, {
    key: "alterTransaction",
    value: function () {
      var _alterTransaction = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2(transaction) {
        var options,
            callback,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
                callback = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;

                if (callback) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", this.injectPromise(this.alterTransaction, transaction, options));

              case 4:
                if (!transaction.signature) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", callback('You can not extend the expiration of a signed transaction.'));

              case 6:
                if (!options.data) {
                  _context2.next = 12;
                  break;
                }

                if (options.dataFormat !== 'hex') options.data = this.tronWeb.toHex(options.data);
                options.data = options.data.replace(/^0x/, '');

                if (!(options.data.length === 0)) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", callback('Invalid data provided'));

              case 11:
                transaction.raw_data.data = options.data;

              case 12:
                if (!options.extension) {
                  _context2.next = 17;
                  break;
                }

                options.extension = parseInt(options.extension * 1000);

                if (!(isNaN(options.extension) || transaction.raw_data.expiration + options.extension <= Date.now() + 3000)) {
                  _context2.next = 16;
                  break;
                }

                return _context2.abrupt("return", callback('Invalid extension provided'));

              case 16:
                transaction.raw_data.expiration += options.extension;

              case 17:
                this.newTxID(transaction, callback);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function alterTransaction(_x3) {
        return _alterTransaction.apply(this, arguments);
      }

      return alterTransaction;
    }()
  }, {
    key: "extendExpiration",
    value: function () {
      var _extendExpiration = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee3(transaction, extension) {
        var callback,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                callback = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : false;

                if (callback) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", this.injectPromise(this.extendExpiration, transaction, extension));

              case 3:
                this.alterTransaction(transaction, {
                  extension: extension
                }, callback);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function extendExpiration(_x4, _x5) {
        return _extendExpiration.apply(this, arguments);
      }

      return extendExpiration;
    }()
  }, {
    key: "addUpdateData",
    value: function () {
      var _addUpdateData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee4(transaction, data) {
        var dataFormat,
            callback,
            _args4 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dataFormat = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 'utf8';
                callback = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_8__["default"].isFunction(dataFormat)) {
                  callback = dataFormat;
                  dataFormat = 'utf8';
                }

                if (callback) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return", this.injectPromise(this.addUpdateData, transaction, data, dataFormat));

              case 5:
                this.alterTransaction(transaction, {
                  data: data,
                  dataFormat: dataFormat
                }, callback);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function addUpdateData(_x6, _x7) {
        return _addUpdateData.apply(this, arguments);
      }

      return addUpdateData;
    }()
  }]);

  return TransactionBuilder;
}();



/***/ }),

/***/ "./src/lib/trx.js":
/*!************************!*\
  !*** ./src/lib/trx.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trx; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! index */ "./src/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils */ "./src/utils/index.js");
/* harmony import */ var utils_ethersUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/ethersUtils */ "./src/utils/ethersUtils.js");
/* harmony import */ var utils_address__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/address */ "./src/utils/address.js");
/* harmony import */ var _paramValidator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../paramValidator */ "./src/paramValidator/index.js");
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! injectpromise */ "injectpromise");
/* harmony import */ var injectpromise__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(injectpromise__WEBPACK_IMPORTED_MODULE_13__);









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var TRX_MESSAGE_HEADER = '\x19TRON Signed Message:\n32'; // it should be: '\x15TRON Signed Message:\n32';

var ETH_MESSAGE_HEADER = '\x19Ethereum Signed Message:\n32';

function toHex(value) {
  return index__WEBPACK_IMPORTED_MODULE_8__["default"].address.toHex(value);
}

var Trx = /*#__PURE__*/function () {
  function Trx() {
    var tronWeb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Trx);

    if (!tronWeb || !tronWeb instanceof index__WEBPACK_IMPORTED_MODULE_8__["default"]) throw new Error('Expected instance of TronWeb');
    this.tronWeb = tronWeb;
    this.injectPromise = injectpromise__WEBPACK_IMPORTED_MODULE_13___default()(this);
    this.cache = {
      contracts: {}
    };
    this.validator = new _paramValidator__WEBPACK_IMPORTED_MODULE_12__["default"](tronWeb);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Trx, [{
    key: "_parseToken",
    value: function _parseToken(token) {
      return _objectSpread(_objectSpread({}, token), {}, {
        name: this.tronWeb.toUtf8(token.name),
        abbr: token.abbr && this.tronWeb.toUtf8(token.abbr),
        description: token.description && this.tronWeb.toUtf8(token.description),
        url: token.url && this.tronWeb.toUtf8(token.url)
      });
    }
  }, {
    key: "getCurrentBlock",
    value: function getCurrentBlock() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!callback) return this.injectPromise(this.getCurrentBlock);
      this.tronWeb.fullNode.request('wallet/getnowblock').then(function (block) {
        callback(null, block);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getConfirmedCurrentBlock",
    value: function getConfirmedCurrentBlock() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!callback) return this.injectPromise(this.getConfirmedCurrentBlock);
      this.tronWeb.solidityNode.request('walletsolidity/getnowblock').then(function (block) {
        callback(null, block);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getBlock",
    value: function getBlock() {
      var block = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultBlock;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(block)) {
        callback = block;
        block = this.tronWeb.defaultBlock;
      }

      if (!callback) return this.injectPromise(this.getBlock, block);
      if (block === false) return callback('No block identifier provided');
      if (block == 'earliest') block = 0;
      if (block == 'latest') return this.getCurrentBlock(callback);
      if (isNaN(block) && utils__WEBPACK_IMPORTED_MODULE_9__["default"].isHex(block)) return this.getBlockByHash(block, callback);
      this.getBlockByNumber(block, callback);
    }
  }, {
    key: "getBlockByHash",
    value: function getBlockByHash(blockHash) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getBlockByHash, blockHash);
      this.tronWeb.fullNode.request('wallet/getblockbyid', {
        value: blockHash
      }, 'post').then(function (block) {
        if (!Object.keys(block).length) return callback('Block not found');
        callback(null, block);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getBlockByNumber",
    value: function getBlockByNumber(blockID) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getBlockByNumber, blockID);
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(blockID) || blockID < 0) return callback('Invalid block number provided');
      this.tronWeb.fullNode.request('wallet/getblockbynum', {
        num: parseInt(blockID)
      }, 'post').then(function (block) {
        if (!Object.keys(block).length) return callback('Block not found');
        callback(null, block);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getBlockTransactionCount",
    value: function getBlockTransactionCount() {
      var block = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultBlock;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(block)) {
        callback = block;
        block = this.tronWeb.defaultBlock;
      }

      if (!callback) return this.injectPromise(this.getBlockTransactionCount, block);
      this.getBlock(block).then(function (_ref) {
        var _ref$transactions = _ref.transactions,
            transactions = _ref$transactions === void 0 ? [] : _ref$transactions;
        callback(null, transactions.length);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getTransactionFromBlock",
    value: function getTransactionFromBlock() {
      var block = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultBlock;
      var index = arguments.length > 1 ? arguments[1] : undefined;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(index)) {
        callback = index;
        index = 0;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(block)) {
        callback = block;
        block = this.tronWeb.defaultBlock;
      }

      if (!callback) return this.injectPromise(this.getTransactionFromBlock, block, index);
      this.getBlock(block).then(function (_ref2) {
        var _ref2$transactions = _ref2.transactions,
            transactions = _ref2$transactions === void 0 ? false : _ref2$transactions;
        if (!transactions) callback('Transaction not found in block');else if (typeof index == 'number') {
          if (index >= 0 && index < transactions.length) callback(null, transactions[index]);else callback('Invalid transaction index provided');
        } else callback(null, transactions);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getTransaction",
    value: function getTransaction(transactionID) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getTransaction, transactionID);
      this.tronWeb.fullNode.request('wallet/gettransactionbyid', {
        value: transactionID
      }, 'post').then(function (transaction) {
        if (!Object.keys(transaction).length) return callback('Transaction not found');
        callback(null, transaction);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getConfirmedTransaction",
    value: function getConfirmedTransaction(transactionID) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getConfirmedTransaction, transactionID);
      this.tronWeb.solidityNode.request('walletsolidity/gettransactionbyid', {
        value: transactionID
      }, 'post').then(function (transaction) {
        if (!Object.keys(transaction).length) return callback('Transaction not found');
        callback(null, transaction);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getUnconfirmedTransactionInfo",
    value: function getUnconfirmedTransactionInfo(transactionID) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this._getTransactionInfoById(transactionID, {
        confirmed: false
      }, callback);
    }
  }, {
    key: "getTransactionInfo",
    value: function getTransactionInfo(transactionID) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this._getTransactionInfoById(transactionID, {
        confirmed: true
      }, callback);
    }
  }, {
    key: "_getTransactionInfoById",
    value: function _getTransactionInfoById(transactionID, options) {
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!callback) return this.injectPromise(this._getTransactionInfoById, transactionID, options);
      this.tronWeb[options.confirmed ? 'solidityNode' : 'fullNode'].request("wallet".concat(options.confirmed ? 'solidity' : '', "/gettransactioninfobyid"), {
        value: transactionID
      }, 'post').then(function (transaction) {
        callback(null, transaction);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getTransactionsToAddress",
    value: function getTransactionsToAddress() {
      var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultAddress.hex;
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(offset)) {
        callback = offset;
        offset = 0;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(limit)) {
        callback = limit;
        limit = 30;
      }

      if (!callback) return this.injectPromise(this.getTransactionsToAddress, address, limit, offset);
      address = this.tronWeb.address.toHex(address);
      return this.getTransactionsRelated(address, 'to', limit, offset, callback);
    }
  }, {
    key: "getTransactionsFromAddress",
    value: function getTransactionsFromAddress() {
      var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultAddress.hex;
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(offset)) {
        callback = offset;
        offset = 0;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(limit)) {
        callback = limit;
        limit = 30;
      }

      if (!callback) return this.injectPromise(this.getTransactionsFromAddress, address, limit, offset);
      address = this.tronWeb.address.toHex(address);
      return this.getTransactionsRelated(address, 'from', limit, offset, callback);
    }
  }, {
    key: "getTransactionsRelated",
    value: function () {
      var _getTransactionsRelated = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
        var address,
            direction,
            limit,
            offset,
            callback,
            _yield$Promise$all,
            _yield$Promise$all2,
            from,
            to,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = _args.length > 0 && _args[0] !== undefined ? _args[0] : this.tronWeb.defaultAddress.hex;
                direction = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'all';
                limit = _args.length > 2 && _args[2] !== undefined ? _args[2] : 30;
                offset = _args.length > 3 && _args[3] !== undefined ? _args[3] : 0;
                callback = _args.length > 4 && _args[4] !== undefined ? _args[4] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(offset)) {
                  callback = offset;
                  offset = 0;
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(limit)) {
                  callback = limit;
                  limit = 30;
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(direction)) {
                  callback = direction;
                  direction = 'all';
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(address)) {
                  callback = address;
                  address = this.tronWeb.defaultAddress.hex;
                }

                if (callback) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", this.injectPromise(this.getTransactionsRelated, address, direction, limit, offset));

              case 11:
                if (['to', 'from', 'all'].includes(direction)) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt("return", callback('Invalid direction provided: Expected "to", "from" or "all"'));

              case 13:
                if (!(direction == 'all')) {
                  _context.next = 27;
                  break;
                }

                _context.prev = 14;
                _context.next = 17;
                return Promise.all([this.getTransactionsRelated(address, 'from', limit, offset), this.getTransactionsRelated(address, 'to', limit, offset)]);

              case 17:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_yield$Promise$all, 2);
                from = _yield$Promise$all2[0];
                to = _yield$Promise$all2[1];
                return _context.abrupt("return", callback(null, [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(from.map(function (tx) {
                  return tx.direction = 'from', tx;
                })), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(to.map(function (tx) {
                  return tx.direction = 'to', tx;
                }))).sort(function (a, b) {
                  return b.raw_data.timestamp - a.raw_data.timestamp;
                })));

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](14);
                return _context.abrupt("return", callback(_context.t0));

              case 27:
                if (this.tronWeb.isAddress(address)) {
                  _context.next = 29;
                  break;
                }

                return _context.abrupt("return", callback('Invalid address provided'));

              case 29:
                if (!(!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(limit) || limit < 0 || offset && limit < 1)) {
                  _context.next = 31;
                  break;
                }

                return _context.abrupt("return", callback('Invalid limit provided'));

              case 31:
                if (!(!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(offset) || offset < 0)) {
                  _context.next = 33;
                  break;
                }

                return _context.abrupt("return", callback('Invalid offset provided'));

              case 33:
                address = this.tronWeb.address.toHex(address);
                this.tronWeb.solidityNode.request("walletextension/gettransactions".concat(direction, "this"), {
                  account: {
                    address: address
                  },
                  offset: offset,
                  limit: limit
                }, 'post').then(function (_ref3) {
                  var transaction = _ref3.transaction;
                  callback(null, transaction);
                })["catch"](function (err) {
                  return callback(err);
                });

              case 35:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[14, 24]]);
      }));

      function getTransactionsRelated() {
        return _getTransactionsRelated.apply(this, arguments);
      }

      return getTransactionsRelated;
    }()
  }, {
    key: "getAccount",
    value: function getAccount() {
      var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(address)) {
        callback = address;
        address = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.getAccount, address);
      if (!this.tronWeb.isAddress(address)) return callback('Invalid address provided');
      address = this.tronWeb.address.toHex(address);
      this.tronWeb.solidityNode.request('walletsolidity/getaccount', {
        address: address
      }, 'post').then(function (account) {
        callback(null, account);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getAccountById",
    value: function getAccountById() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getAccountById, id);
      this.getAccountInfoById(id, {
        confirmed: true
      }, callback);
    }
  }, {
    key: "getAccountInfoById",
    value: function getAccountInfoById(id, options, callback) {
      if (this.validator.notValid([{
        name: 'accountId',
        type: 'hex',
        value: id
      }, {
        name: 'accountId',
        type: 'string',
        lte: 32,
        gte: 8,
        value: id
      }], callback)) return;

      if (id.startsWith('0x')) {
        id = id.slice(2);
      }

      this.tronWeb[options.confirmed ? 'solidityNode' : 'fullNode'].request("wallet".concat(options.confirmed ? 'solidity' : '', "/getaccountbyid"), {
        account_id: id
      }, 'post').then(function (account) {
        callback(null, account);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getBalance",
    value: function getBalance() {
      var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(address)) {
        callback = address;
        address = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.getBalance, address);
      this.getAccount(address).then(function (_ref4) {
        var _ref4$balance = _ref4.balance,
            balance = _ref4$balance === void 0 ? 0 : _ref4$balance;
        callback(null, balance);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getUnconfirmedAccount",
    value: function getUnconfirmedAccount() {
      var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(address)) {
        callback = address;
        address = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.getUnconfirmedAccount, address);
      if (!this.tronWeb.isAddress(address)) return callback('Invalid address provided');
      address = this.tronWeb.address.toHex(address);
      this.tronWeb.fullNode.request('wallet/getaccount', {
        address: address
      }, 'post').then(function (account) {
        callback(null, account);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getUnconfirmedAccountById",
    value: function getUnconfirmedAccountById(id) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getUnconfirmedAccountById, id);
      this.getAccountInfoById(id, {
        confirmed: false
      }, callback);
    }
  }, {
    key: "getUnconfirmedBalance",
    value: function getUnconfirmedBalance() {
      var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(address)) {
        callback = address;
        address = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.getUnconfirmedBalance, address);
      this.getUnconfirmedAccount(address).then(function (_ref5) {
        var _ref5$balance = _ref5.balance,
            balance = _ref5$balance === void 0 ? 0 : _ref5$balance;
        callback(null, balance);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getBandwidth",
    value: function getBandwidth() {
      var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(address)) {
        callback = address;
        address = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.getBandwidth, address);
      if (!this.tronWeb.isAddress(address)) return callback('Invalid address provided');
      address = this.tronWeb.address.toHex(address);
      this.tronWeb.fullNode.request('wallet/getaccountnet', {
        address: address
      }, 'post').then(function (_ref6) {
        var _ref6$freeNetUsed = _ref6.freeNetUsed,
            freeNetUsed = _ref6$freeNetUsed === void 0 ? 0 : _ref6$freeNetUsed,
            _ref6$freeNetLimit = _ref6.freeNetLimit,
            freeNetLimit = _ref6$freeNetLimit === void 0 ? 0 : _ref6$freeNetLimit,
            _ref6$NetUsed = _ref6.NetUsed,
            NetUsed = _ref6$NetUsed === void 0 ? 0 : _ref6$NetUsed,
            _ref6$NetLimit = _ref6.NetLimit,
            NetLimit = _ref6$NetLimit === void 0 ? 0 : _ref6$NetLimit;
        callback(null, freeNetLimit - freeNetUsed + (NetLimit - NetUsed));
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getTokensIssuedByAddress",
    value: function getTokensIssuedByAddress() {
      var _this = this;

      var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(address)) {
        callback = address;
        address = this.tronWeb.defaultAddress.hex;
      }

      if (!callback) return this.injectPromise(this.getTokensIssuedByAddress, address);
      if (!this.tronWeb.isAddress(address)) return callback('Invalid address provided');
      address = this.tronWeb.address.toHex(address);
      this.tronWeb.fullNode.request('wallet/getassetissuebyaccount', {
        address: address
      }, 'post').then(function (_ref7) {
        var _ref7$assetIssue = _ref7.assetIssue,
            assetIssue = _ref7$assetIssue === void 0 ? false : _ref7$assetIssue;
        if (!assetIssue) return callback(null, {});
        var tokens = assetIssue.map(function (token) {
          return _this._parseToken(token);
        }).reduce(function (tokens, token) {
          return tokens[token.name] = token, tokens;
        }, {});
        callback(null, tokens);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getTokenFromID",
    value: function getTokenFromID() {
      var _this2 = this;

      var tokenID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getTokenFromID, tokenID);
      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(tokenID)) tokenID = tokenID.toString();
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isString(tokenID) || !tokenID.length) return callback('Invalid token ID provided');
      this.tronWeb.fullNode.request('wallet/getassetissuebyname', {
        value: this.tronWeb.fromUtf8(tokenID)
      }, 'post').then(function (token) {
        if (!token.name) return callback('Token does not exist');
        callback(null, _this2._parseToken(token));
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "listNodes",
    value: function listNodes() {
      var _this3 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!callback) return this.injectPromise(this.listNodes);
      this.tronWeb.fullNode.request('wallet/listnodes').then(function (_ref8) {
        var _ref8$nodes = _ref8.nodes,
            nodes = _ref8$nodes === void 0 ? [] : _ref8$nodes;
        callback(null, nodes.map(function (_ref9) {
          var _ref9$address = _ref9.address,
              host = _ref9$address.host,
              port = _ref9$address.port;
          return "".concat(_this3.tronWeb.toUtf8(host), ":").concat(port);
        }));
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getBlockRange",
    value: function getBlockRange() {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(end)) {
        callback = end;
        end = 30;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(start)) {
        callback = start;
        start = 0;
      }

      if (!callback) return this.injectPromise(this.getBlockRange, start, end);
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(start) || start < 0) return callback('Invalid start of range provided');
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(end) || end <= start) return callback('Invalid end of range provided');
      this.tronWeb.fullNode.request('wallet/getblockbylimitnext', {
        startNum: parseInt(start),
        endNum: parseInt(end) + 1
      }, 'post').then(function (_ref10) {
        var _ref10$block = _ref10.block,
            block = _ref10$block === void 0 ? [] : _ref10$block;
        callback(null, block);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "listSuperRepresentatives",
    value: function listSuperRepresentatives() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!callback) return this.injectPromise(this.listSuperRepresentatives);
      this.tronWeb.fullNode.request('wallet/listwitnesses').then(function (_ref11) {
        var _ref11$witnesses = _ref11.witnesses,
            witnesses = _ref11$witnesses === void 0 ? [] : _ref11$witnesses;
        callback(null, witnesses);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "listTokens",
    value: function listTokens() {
      var _this4 = this;

      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(offset)) {
        callback = offset;
        offset = 0;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(limit)) {
        callback = limit;
        limit = 0;
      }

      if (!callback) return this.injectPromise(this.listTokens, limit, offset);
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(limit) || limit < 0 || offset && limit < 1) return callback('Invalid limit provided');
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(offset) || offset < 0) return callback('Invalid offset provided');

      if (!limit) {
        return this.tronWeb.fullNode.request('wallet/getassetissuelist').then(function (_ref12) {
          var _ref12$assetIssue = _ref12.assetIssue,
              assetIssue = _ref12$assetIssue === void 0 ? [] : _ref12$assetIssue;
          callback(null, assetIssue.map(function (token) {
            return _this4._parseToken(token);
          }));
        })["catch"](function (err) {
          return callback(err);
        });
      }

      this.tronWeb.fullNode.request('wallet/getpaginatedassetissuelist', {
        offset: parseInt(offset),
        limit: parseInt(limit)
      }, 'post').then(function (_ref13) {
        var _ref13$assetIssue = _ref13.assetIssue,
            assetIssue = _ref13$assetIssue === void 0 ? [] : _ref13$assetIssue;
        callback(null, assetIssue.map(function (token) {
          return _this4._parseToken(token);
        }));
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "timeUntilNextVoteCycle",
    value: function timeUntilNextVoteCycle() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!callback) return this.injectPromise(this.timeUntilNextVoteCycle);
      this.tronWeb.fullNode.request('wallet/getnextmaintenancetime').then(function (_ref14) {
        var _ref14$num = _ref14.num,
            num = _ref14$num === void 0 ? -1 : _ref14$num;
        if (num == -1) return callback('Failed to get time until next vote cycle');
        callback(null, Math.floor(num / 1000));
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getContract",
    value: function getContract(contractAddress) {
      var _this5 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getContract, contractAddress);
      if (!this.tronWeb.isAddress(contractAddress)) return callback('Invalid contract address provided');

      if (this.cache.contracts[contractAddress]) {
        callback(null, this.cache.contracts[contractAddress]);
        return;
      }

      contractAddress = this.tronWeb.address.toHex(contractAddress);
      this.tronWeb.fullNode.request('wallet/getcontract', {
        value: contractAddress
      }).then(function (contract) {
        if (contract.Error) return callback('Contract does not exist');
        _this5.cache.contracts[contractAddress] = contract;
        callback(null, contract);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "verifyMessage",
    value: function () {
      var _verifyMessage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {
        var message,
            signature,
            address,
            useTronHeader,
            callback,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                message = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;
                signature = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
                address = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : this.tronWeb.defaultAddress.base58;
                useTronHeader = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : true;
                callback = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(address)) {
                  callback = address;
                  address = this.tronWeb.defaultAddress.base58;
                  useTronHeader = true;
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(useTronHeader)) {
                  callback = useTronHeader;
                  useTronHeader = true;
                }

                if (callback) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", this.injectPromise(this.verifyMessage, message, signature, address, useTronHeader));

              case 9:
                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isHex(message)) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", callback('Expected hex message input'));

              case 11:
                if (!Trx.verifySignature(message, address, signature, useTronHeader)) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt("return", callback(null, true));

              case 13:
                callback('Signature does not match');

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function verifyMessage() {
        return _verifyMessage.apply(this, arguments);
      }

      return verifyMessage;
    }()
  }, {
    key: "sign",
    value: function () {
      var _sign = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3() {
        var transaction,
            privateKey,
            useTronHeader,
            multisig,
            callback,
            signatureHex,
            address,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                transaction = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : false;
                privateKey = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : this.tronWeb.defaultPrivateKey;
                useTronHeader = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : true;
                multisig = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : false;
                callback = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(multisig)) {
                  callback = multisig;
                  multisig = false;
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(useTronHeader)) {
                  callback = useTronHeader;
                  useTronHeader = true;
                  multisig = false;
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.tronWeb.defaultPrivateKey;
                  useTronHeader = true;
                  multisig = false;
                }

                if (callback) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return", this.injectPromise(this.sign, transaction, privateKey, useTronHeader, multisig));

              case 10:
                if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isString(transaction)) {
                  _context3.next = 21;
                  break;
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isHex(transaction)) {
                  _context3.next = 13;
                  break;
                }

                return _context3.abrupt("return", callback('Expected hex message input'));

              case 13:
                _context3.prev = 13;
                signatureHex = Trx.signString(transaction, privateKey, useTronHeader);
                return _context3.abrupt("return", callback(null, signatureHex));

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](13);
                callback(_context3.t0);

              case 21:
                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(transaction)) {
                  _context3.next = 23;
                  break;
                }

                return _context3.abrupt("return", callback('Invalid transaction provided'));

              case 23:
                if (!(!multisig && transaction.signature)) {
                  _context3.next = 25;
                  break;
                }

                return _context3.abrupt("return", callback('Transaction is already signed'));

              case 25:
                _context3.prev = 25;

                if (multisig) {
                  _context3.next = 30;
                  break;
                }

                address = this.tronWeb.address.toHex(this.tronWeb.address.fromPrivateKey(privateKey)).toLowerCase();

                if (!(address !== this.tronWeb.address.toHex(transaction.raw_data.contract[0].parameter.value.owner_address))) {
                  _context3.next = 30;
                  break;
                }

                return _context3.abrupt("return", callback('Private key does not match address in transaction'));

              case 30:
                return _context3.abrupt("return", callback(null, utils__WEBPACK_IMPORTED_MODULE_9__["default"].crypto.signTransaction(privateKey, transaction)));

              case 33:
                _context3.prev = 33;
                _context3.t1 = _context3["catch"](25);
                callback(_context3.t1);

              case 36:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[13, 18], [25, 33]]);
      }));

      function sign() {
        return _sign.apply(this, arguments);
      }

      return sign;
    }()
  }, {
    key: "multiSign",
    value: function () {
      var _multiSign = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee4() {
        var transaction,
            privateKey,
            permissionId,
            callback,
            address,
            signWeight,
            foundKey,
            _args4 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                transaction = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : false;
                privateKey = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : this.tronWeb.defaultPrivateKey;
                permissionId = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : false;
                callback = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(permissionId)) {
                  callback = permissionId;
                  permissionId = 0;
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(privateKey)) {
                  callback = privateKey;
                  privateKey = this.tronWeb.defaultPrivateKey;
                  permissionId = 0;
                }

                if (callback) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", this.injectPromise(this.multiSign, transaction, privateKey, permissionId));

              case 8:
                if (!(!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(transaction) || !transaction.raw_data || !transaction.raw_data.contract)) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt("return", callback('Invalid transaction provided'));

              case 10:
                if (!(!transaction.raw_data.contract[0].Permission_id && permissionId > 0)) {
                  _context4.next = 30;
                  break;
                }

                // set permission id
                transaction.raw_data.contract[0].Permission_id = permissionId; // check if private key insides permission list

                address = this.tronWeb.address.toHex(this.tronWeb.address.fromPrivateKey(privateKey)).toLowerCase();
                _context4.next = 15;
                return this.getSignWeight(transaction, permissionId);

              case 15:
                signWeight = _context4.sent;

                if (!(signWeight.result.code === 'PERMISSION_ERROR')) {
                  _context4.next = 18;
                  break;
                }

                return _context4.abrupt("return", callback(signWeight.result.message));

              case 18:
                foundKey = false;
                signWeight.permission.keys.map(function (key) {
                  if (key.address === address) foundKey = true;
                });

                if (foundKey) {
                  _context4.next = 22;
                  break;
                }

                return _context4.abrupt("return", callback(privateKey + ' has no permission to sign'));

              case 22:
                if (!(signWeight.approved_list && signWeight.approved_list.indexOf(address) != -1)) {
                  _context4.next = 24;
                  break;
                }

                return _context4.abrupt("return", callback(privateKey + ' already sign transaction'));

              case 24:
                if (!(signWeight.transaction && signWeight.transaction.transaction)) {
                  _context4.next = 29;
                  break;
                }

                transaction = signWeight.transaction.transaction;

                if (permissionId > 0) {
                  transaction.raw_data.contract[0].Permission_id = permissionId;
                }

                _context4.next = 30;
                break;

              case 29:
                return _context4.abrupt("return", callback('Invalid transaction provided'));

              case 30:
                _context4.prev = 30;
                return _context4.abrupt("return", callback(null, utils__WEBPACK_IMPORTED_MODULE_9__["default"].crypto.signTransaction(privateKey, transaction)));

              case 34:
                _context4.prev = 34;
                _context4.t0 = _context4["catch"](30);
                callback(_context4.t0);

              case 37:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[30, 34]]);
      }));

      function multiSign() {
        return _multiSign.apply(this, arguments);
      }

      return multiSign;
    }()
  }, {
    key: "getApprovedList",
    value: function () {
      var _getApprovedList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee5(transaction) {
        var callback,
            _args5 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                callback = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : false;

                if (callback) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return", this.injectPromise(this.getApprovedList, transaction));

              case 3:
                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(transaction)) {
                  _context5.next = 5;
                  break;
                }

                return _context5.abrupt("return", callback('Invalid transaction provided'));

              case 5:
                this.tronWeb.fullNode.request('wallet/getapprovedlist', transaction, 'post').then(function (result) {
                  callback(null, result);
                })["catch"](function (err) {
                  return callback(err);
                });

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getApprovedList(_x) {
        return _getApprovedList.apply(this, arguments);
      }

      return getApprovedList;
    }()
  }, {
    key: "getSignWeight",
    value: function () {
      var _getSignWeight = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee6(transaction, permissionId) {
        var callback,
            _args6 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                callback = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(permissionId)) {
                  callback = permissionId;
                  permissionId = undefined;
                }

                if (callback) {
                  _context6.next = 4;
                  break;
                }

                return _context6.abrupt("return", this.injectPromise(this.getSignWeight, transaction, permissionId));

              case 4:
                if (!(!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(transaction) || !transaction.raw_data || !transaction.raw_data.contract)) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return", callback('Invalid transaction provided'));

              case 6:
                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(permissionId)) {
                  transaction.raw_data.contract[0].Permission_id = parseInt(permissionId);
                } else if (typeof transaction.raw_data.contract[0].Permission_id !== 'number') {
                  transaction.raw_data.contract[0].Permission_id = 0;
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(transaction)) {
                  _context6.next = 9;
                  break;
                }

                return _context6.abrupt("return", callback('Invalid transaction provided'));

              case 9:
                this.tronWeb.fullNode.request('wallet/getsignweight', transaction, 'post').then(function (result) {
                  callback(null, result);
                })["catch"](function (err) {
                  return callback(err);
                });

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getSignWeight(_x2, _x3) {
        return _getSignWeight.apply(this, arguments);
      }

      return getSignWeight;
    }()
  }, {
    key: "sendRawTransaction",
    value: function sendRawTransaction() {
      var signedTransaction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (!callback) return this.injectPromise(this.sendRawTransaction, signedTransaction, options);
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(signedTransaction)) return callback('Invalid transaction provided');
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(options)) return callback('Invalid options provided');
      if (!signedTransaction.signature || !utils__WEBPACK_IMPORTED_MODULE_9__["default"].isArray(signedTransaction.signature)) return callback('Transaction is not signed');
      this.tronWeb.fullNode.request('wallet/broadcasttransaction', signedTransaction, 'post').then(function (result) {
        if (result.result) result.transaction = signedTransaction;
        callback(null, result);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "sendRawTransactions",
    value: function sendRawTransactions() {
      var signedTransactions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (!callback) return this.injectPromise(this.sendRawTransactions, signedTransactions, options);
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(signedTransactions)) return callback('Invalid transaction provided');
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(options)) return callback('Invalid options provided');
      this.tronWeb.fullNode.request('wallet/sendseatxs', signedTransactions, 'post').then(function (result) {
        if (result.result) result.transactions = signedTransactions.transactions;
        callback(null, result);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "sendHexTransaction",
    value: function sendHexTransaction() {
      var signedHexTransaction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(options)) {
        callback = options;
        options = {};
      }

      if (!callback) return this.injectPromise(this.sendHexTransaction, signedHexTransaction, options);
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isHex(signedHexTransaction)) return callback('Invalid hex transaction provided');
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(options)) return callback('Invalid options provided');
      var params = {
        transaction: signedHexTransaction
      };
      this.tronWeb.fullNode.request('wallet/broadcasthex', params, 'post').then(function (result) {
        if (result.result) {
          result.transaction = JSON.parse(result.transaction);
          result.hexTransaction = signedHexTransaction;
        }

        callback(null, result);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "sendTransaction",
    value: function () {
      var _sendTransaction = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee7() {
        var to,
            amount,
            options,
            callback,
            address,
            transaction,
            signedTransaction,
            result,
            _args7 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                to = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : false;
                amount = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : false;
                options = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : {};
                callback = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (typeof options === 'string') options = {
                  privateKey: options
                };

                if (callback) {
                  _context7.next = 8;
                  break;
                }

                return _context7.abrupt("return", this.injectPromise(this.sendTransaction, to, amount, options));

              case 8:
                if (this.tronWeb.isAddress(to)) {
                  _context7.next = 10;
                  break;
                }

                return _context7.abrupt("return", callback('Invalid recipient provided'));

              case 10:
                if (!(!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(amount) || amount <= 0)) {
                  _context7.next = 12;
                  break;
                }

                return _context7.abrupt("return", callback('Invalid amount provided'));

              case 12:
                options = _objectSpread({
                  privateKey: this.tronWeb.defaultPrivateKey,
                  address: this.tronWeb.defaultAddress.hex
                }, options);

                if (!(!options.privateKey && !options.address)) {
                  _context7.next = 15;
                  break;
                }

                return _context7.abrupt("return", callback('Function requires either a private key or address to be set'));

              case 15:
                _context7.prev = 15;
                address = options.privateKey ? this.tronWeb.address.fromPrivateKey(options.privateKey) : options.address;
                _context7.next = 19;
                return this.tronWeb.transactionBuilder.sendTrx(to, amount, address);

              case 19:
                transaction = _context7.sent;
                _context7.next = 22;
                return this.sign(transaction, options.privateKey || undefined);

              case 22:
                signedTransaction = _context7.sent;
                _context7.next = 25;
                return this.sendRawTransaction(signedTransaction);

              case 25:
                result = _context7.sent;
                return _context7.abrupt("return", callback(null, result));

              case 29:
                _context7.prev = 29;
                _context7.t0 = _context7["catch"](15);
                return _context7.abrupt("return", callback(_context7.t0));

              case 32:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[15, 29]]);
      }));

      function sendTransaction() {
        return _sendTransaction.apply(this, arguments);
      }

      return sendTransaction;
    }()
  }, {
    key: "sendToken",
    value: function () {
      var _sendToken = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee8() {
        var to,
            amount,
            tokenID,
            options,
            callback,
            address,
            transaction,
            signedTransaction,
            result,
            _args8 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                to = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : false;
                amount = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : false;
                tokenID = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : false;
                options = _args8.length > 3 && _args8[3] !== undefined ? _args8[3] : {};
                callback = _args8.length > 4 && _args8[4] !== undefined ? _args8[4] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (typeof options === 'string') options = {
                  privateKey: options
                };

                if (callback) {
                  _context8.next = 9;
                  break;
                }

                return _context8.abrupt("return", this.injectPromise(this.sendToken, to, amount, tokenID, options));

              case 9:
                if (this.tronWeb.isAddress(to)) {
                  _context8.next = 11;
                  break;
                }

                return _context8.abrupt("return", callback('Invalid recipient provided'));

              case 11:
                if (!(!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(amount) || amount <= 0)) {
                  _context8.next = 13;
                  break;
                }

                return _context8.abrupt("return", callback('Invalid amount provided'));

              case 13:
                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(tokenID)) tokenID = tokenID.toString();

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isString(tokenID)) {
                  _context8.next = 16;
                  break;
                }

                return _context8.abrupt("return", callback('Invalid token ID provided'));

              case 16:
                options = _objectSpread({
                  privateKey: this.tronWeb.defaultPrivateKey,
                  address: this.tronWeb.defaultAddress.hex
                }, options);

                if (!(!options.privateKey && !options.address)) {
                  _context8.next = 19;
                  break;
                }

                return _context8.abrupt("return", callback('Function requires either a private key or address to be set'));

              case 19:
                _context8.prev = 19;
                address = options.privateKey ? this.tronWeb.address.fromPrivateKey(options.privateKey) : options.address;
                _context8.next = 23;
                return this.tronWeb.transactionBuilder.sendToken(to, amount, tokenID, address);

              case 23:
                transaction = _context8.sent;
                _context8.next = 26;
                return this.sign(transaction, options.privateKey || undefined);

              case 26:
                signedTransaction = _context8.sent;
                _context8.next = 29;
                return this.sendRawTransaction(signedTransaction);

              case 29:
                result = _context8.sent;
                return _context8.abrupt("return", callback(null, result));

              case 33:
                _context8.prev = 33;
                _context8.t0 = _context8["catch"](19);
                return _context8.abrupt("return", callback(_context8.t0));

              case 36:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[19, 33]]);
      }));

      function sendToken() {
        return _sendToken.apply(this, arguments);
      }

      return sendToken;
    }()
    /**
     * Freezes an amount of TRX.
     * Will give bandwidth OR Energy and TRON Power(voting rights)
     * to the owner of the frozen tokens.
     *
     * @param amount - is the number of frozen trx
     * @param duration - is the duration in days to be frozen
     * @param resource - is the type, must be either "ENERGY" or "BANDWIDTH"
     * @param options
     * @param callback
     */

  }, {
    key: "freezeBalance",
    value: function () {
      var _freezeBalance = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee9() {
        var amount,
            duration,
            resource,
            options,
            receiverAddress,
            callback,
            address,
            _freezeBalance2,
            signedTransaction,
            result,
            _args9 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                amount = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : 0;
                duration = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : 3;
                resource = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : "BANDWIDTH";
                options = _args9.length > 3 && _args9[3] !== undefined ? _args9[3] : {};
                receiverAddress = _args9.length > 4 && _args9[4] !== undefined ? _args9[4] : undefined;
                callback = _args9.length > 5 && _args9[5] !== undefined ? _args9[5] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(receiverAddress)) {
                  callback = receiverAddress;
                  receiverAddress = undefined;
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(duration)) {
                  callback = duration;
                  duration = 3;
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(resource)) {
                  callback = resource;
                  resource = "BANDWIDTH";
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (typeof options === 'string') options = {
                  privateKey: options
                };

                if (callback) {
                  _context9.next = 13;
                  break;
                }

                return _context9.abrupt("return", this.injectPromise(this.freezeBalance, amount, duration, resource, options, receiverAddress));

              case 13:
                if (['BANDWIDTH', 'ENERGY'].includes(resource)) {
                  _context9.next = 15;
                  break;
                }

                return _context9.abrupt("return", callback('Invalid resource provided: Expected "BANDWIDTH" or "ENERGY"'));

              case 15:
                if (!(!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(amount) || amount <= 0)) {
                  _context9.next = 17;
                  break;
                }

                return _context9.abrupt("return", callback('Invalid amount provided'));

              case 17:
                if (!(!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(duration) || duration < 3)) {
                  _context9.next = 19;
                  break;
                }

                return _context9.abrupt("return", callback('Invalid duration provided, minimum of 3 days'));

              case 19:
                options = _objectSpread({
                  privateKey: this.tronWeb.defaultPrivateKey,
                  address: this.tronWeb.defaultAddress.hex
                }, options);

                if (!(!options.privateKey && !options.address)) {
                  _context9.next = 22;
                  break;
                }

                return _context9.abrupt("return", callback('Function requires either a private key or address to be set'));

              case 22:
                _context9.prev = 22;
                address = options.privateKey ? this.tronWeb.address.fromPrivateKey(options.privateKey) : options.address;
                _context9.next = 26;
                return this.tronWeb.transactionBuilder.freezeBalance(amount, duration, resource, address, receiverAddress);

              case 26:
                _freezeBalance2 = _context9.sent;
                _context9.next = 29;
                return this.sign(_freezeBalance2, options.privateKey || undefined);

              case 29:
                signedTransaction = _context9.sent;
                _context9.next = 32;
                return this.sendRawTransaction(signedTransaction);

              case 32:
                result = _context9.sent;
                return _context9.abrupt("return", callback(null, result));

              case 36:
                _context9.prev = 36;
                _context9.t0 = _context9["catch"](22);
                return _context9.abrupt("return", callback(_context9.t0));

              case 39:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[22, 36]]);
      }));

      function freezeBalance() {
        return _freezeBalance.apply(this, arguments);
      }

      return freezeBalance;
    }()
    /**
     * Unfreeze TRX that has passed the minimum freeze duration.
     * Unfreezing will remove bandwidth and TRON Power.
     *
     * @param resource - is the type, must be either "ENERGY" or "BANDWIDTH"
     * @param options
     * @param callback
     */

  }, {
    key: "unfreezeBalance",
    value: function () {
      var _unfreezeBalance = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee10() {
        var resource,
            options,
            receiverAddress,
            callback,
            address,
            _unfreezeBalance2,
            signedTransaction,
            result,
            _args10 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                resource = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : "BANDWIDTH";
                options = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};
                receiverAddress = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : undefined;
                callback = _args10.length > 3 && _args10[3] !== undefined ? _args10[3] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(receiverAddress)) {
                  callback = receiverAddress;
                  receiverAddress = undefined;
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(resource)) {
                  callback = resource;
                  resource = 'BANDWIDTH';
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (typeof options === 'string') options = {
                  privateKey: options
                };

                if (callback) {
                  _context10.next = 10;
                  break;
                }

                return _context10.abrupt("return", this.injectPromise(this.unfreezeBalance, resource, options, receiverAddress));

              case 10:
                if (['BANDWIDTH', 'ENERGY'].includes(resource)) {
                  _context10.next = 12;
                  break;
                }

                return _context10.abrupt("return", callback('Invalid resource provided: Expected "BANDWIDTH" or "ENERGY"'));

              case 12:
                options = _objectSpread({
                  privateKey: this.tronWeb.defaultPrivateKey,
                  address: this.tronWeb.defaultAddress.hex
                }, options);

                if (!(!options.privateKey && !options.address)) {
                  _context10.next = 15;
                  break;
                }

                return _context10.abrupt("return", callback('Function requires either a private key or address to be set'));

              case 15:
                _context10.prev = 15;
                address = options.privateKey ? this.tronWeb.address.fromPrivateKey(options.privateKey) : options.address;
                _context10.next = 19;
                return this.tronWeb.transactionBuilder.unfreezeBalance(resource, address, receiverAddress);

              case 19:
                _unfreezeBalance2 = _context10.sent;
                _context10.next = 22;
                return this.sign(_unfreezeBalance2, options.privateKey || undefined);

              case 22:
                signedTransaction = _context10.sent;
                _context10.next = 25;
                return this.sendRawTransaction(signedTransaction);

              case 25:
                result = _context10.sent;
                return _context10.abrupt("return", callback(null, result));

              case 29:
                _context10.prev = 29;
                _context10.t0 = _context10["catch"](15);
                return _context10.abrupt("return", callback(_context10.t0));

              case 32:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[15, 29]]);
      }));

      function unfreezeBalance() {
        return _unfreezeBalance.apply(this, arguments);
      }

      return unfreezeBalance;
    }()
    /**
     * Modify account name
     * Note: Username is allowed to edit only once.
     *
     * @param privateKey - Account private Key
     * @param accountName - name of the account
     * @param callback
     *
     * @return modified Transaction Object
     */

  }, {
    key: "updateAccount",
    value: function () {
      var _updateAccount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee11() {
        var accountName,
            options,
            callback,
            address,
            _updateAccount2,
            signedTransaction,
            result,
            _args11 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                accountName = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : false;
                options = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                callback = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (typeof options === 'string') options = {
                  privateKey: options
                };

                if (callback) {
                  _context11.next = 7;
                  break;
                }

                return _context11.abrupt("return", this.injectPromise(this.updateAccount, accountName, options));

              case 7:
                if (!(!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isString(accountName) || !accountName.length)) {
                  _context11.next = 9;
                  break;
                }

                return _context11.abrupt("return", callback('Name must be a string'));

              case 9:
                options = _objectSpread({
                  privateKey: this.tronWeb.defaultPrivateKey,
                  address: this.tronWeb.defaultAddress.hex
                }, options);

                if (!(!options.privateKey && !options.address)) {
                  _context11.next = 12;
                  break;
                }

                return _context11.abrupt("return", callback('Function requires either a private key or address to be set'));

              case 12:
                _context11.prev = 12;
                address = options.privateKey ? this.tronWeb.address.fromPrivateKey(options.privateKey) : options.address;
                _context11.next = 16;
                return this.tronWeb.transactionBuilder.updateAccount(accountName, address);

              case 16:
                _updateAccount2 = _context11.sent;
                _context11.next = 19;
                return this.sign(_updateAccount2, options.privateKey || undefined);

              case 19:
                signedTransaction = _context11.sent;
                _context11.next = 22;
                return this.sendRawTransaction(signedTransaction);

              case 22:
                result = _context11.sent;
                return _context11.abrupt("return", callback(null, result));

              case 26:
                _context11.prev = 26;
                _context11.t0 = _context11["catch"](12);
                return _context11.abrupt("return", callback(_context11.t0));

              case 29:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[12, 26]]);
      }));

      function updateAccount() {
        return _updateAccount.apply(this, arguments);
      }

      return updateAccount;
    }()
  }, {
    key: "signMessage",
    value: function signMessage() {
      return this.sign.apply(this, arguments);
    }
  }, {
    key: "sendAsset",
    value: function sendAsset() {
      return this.sendToken.apply(this, arguments);
    }
  }, {
    key: "send",
    value: function send() {
      return this.sendTransaction.apply(this, arguments);
    }
  }, {
    key: "sendTrx",
    value: function sendTrx() {
      return this.sendTransaction.apply(this, arguments);
    }
  }, {
    key: "broadcast",
    value: function broadcast() {
      return this.sendRawTransaction.apply(this, arguments);
    }
  }, {
    key: "broadcastHex",
    value: function broadcastHex() {
      return this.sendHexTransaction.apply(this, arguments);
    }
  }, {
    key: "signTransaction",
    value: function signTransaction() {
      return this.sign.apply(this, arguments);
    }
    /**
     * Gets a network modification proposal by ID.
     */

  }, {
    key: "getProposal",
    value: function getProposal() {
      var proposalID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getProposal, proposalID);
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(proposalID) || proposalID < 0) return callback('Invalid proposalID provided');
      this.tronWeb.fullNode.request('wallet/getproposalbyid', {
        id: parseInt(proposalID)
      }, 'post').then(function (proposal) {
        callback(null, proposal);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Lists all network modification proposals.
     */

  }, {
    key: "listProposals",
    value: function listProposals() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!callback) return this.injectPromise(this.listProposals);
      this.tronWeb.fullNode.request('wallet/listproposals', {}, 'post').then(function (_ref15) {
        var _ref15$proposals = _ref15.proposals,
            proposals = _ref15$proposals === void 0 ? [] : _ref15$proposals;
        callback(null, proposals);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Lists all parameters available for network modification proposals.
     */

  }, {
    key: "getChainParameters",
    value: function getChainParameters() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!callback) return this.injectPromise(this.getChainParameters);
      this.tronWeb.fullNode.request('wallet/getchainparameters', {}, 'post').then(function (_ref16) {
        var _ref16$chainParameter = _ref16.chainParameter,
            chainParameter = _ref16$chainParameter === void 0 ? [] : _ref16$chainParameter;
        callback(null, chainParameter);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Get the account resources
     */

  }, {
    key: "getAccountResources",
    value: function getAccountResources() {
      var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.tronWeb.defaultAddress.hex;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getAccountResources, address);
      if (!this.tronWeb.isAddress(address)) return callback('Invalid address provided');
      this.tronWeb.fullNode.request('wallet/getaccountresource', {
        address: this.tronWeb.address.toHex(address)
      }, 'post').then(function (resources) {
        callback(null, resources);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Get the exchange ID.
     */

  }, {
    key: "getExchangeByID",
    value: function getExchangeByID() {
      var exchangeID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getExchangeByID, exchangeID);
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(exchangeID) || exchangeID < 0) return callback('Invalid exchangeID provided');
      this.tronWeb.fullNode.request('wallet/getexchangebyid', {
        id: exchangeID
      }, 'post').then(function (exchange) {
        callback(null, exchange);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Lists the exchanges
     */

  }, {
    key: "listExchanges",
    value: function listExchanges() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!callback) return this.injectPromise(this.listExchanges);
      this.tronWeb.fullNode.request('wallet/listexchanges', {}, 'post').then(function (_ref17) {
        var _ref17$exchanges = _ref17.exchanges,
            exchanges = _ref17$exchanges === void 0 ? [] : _ref17$exchanges;
        callback(null, exchanges);
      }, 'post')["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Lists all network modification proposals.
     */

  }, {
    key: "listExchangesPaginated",
    value: function listExchangesPaginated() {
      var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(offset)) {
        callback = offset;
        offset = 0;
      }

      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(limit)) {
        callback = limit;
        limit = 10;
      }

      if (!callback) return this.injectPromise(this.listExchangesPaginated, limit, offset);
      this.tronWeb.fullNode.request('wallet/getpaginatedexchangelist', {
        limit: limit,
        offset: offset
      }, 'post').then(function (_ref18) {
        var _ref18$exchanges = _ref18.exchanges,
            exchanges = _ref18$exchanges === void 0 ? [] : _ref18$exchanges;
        callback(null, exchanges);
      })["catch"](function (err) {
        return callback(err);
      });
    }
    /**
     * Get info about thre node
     */

  }, {
    key: "getNodeInfo",
    value: function getNodeInfo() {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!callback) return this.injectPromise(this.getNodeInfo);
      this.tronWeb.fullNode.request('wallet/getnodeinfo', {}, 'post').then(function (info) {
        callback(null, info);
      }, 'post')["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getTokenListByName",
    value: function getTokenListByName() {
      var _this6 = this;

      var tokenID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getTokenListByName, tokenID);
      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(tokenID)) tokenID = tokenID.toString();
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isString(tokenID) || !tokenID.length) return callback('Invalid token ID provided');
      this.tronWeb.fullNode.request('wallet/getassetissuelistbyname', {
        value: this.tronWeb.fromUtf8(tokenID)
      }, 'post').then(function (token) {
        if (Array.isArray(token.assetIssue)) {
          callback(null, token.assetIssue.map(function (t) {
            return _this6._parseToken(t);
          }));
        } else if (!token.name) return callback('Token does not exist');

        callback(null, _this6._parseToken(token));
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getTokenByID",
    value: function getTokenByID() {
      var _this7 = this;

      var tokenID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!callback) return this.injectPromise(this.getTokenByID, tokenID);
      if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isInteger(tokenID)) tokenID = tokenID.toString();
      if (!utils__WEBPACK_IMPORTED_MODULE_9__["default"].isString(tokenID) || !tokenID.length) return callback('Invalid token ID provided');
      this.tronWeb.fullNode.request('wallet/getassetissuebyid', {
        value: tokenID
      }, 'post').then(function (token) {
        if (!token.name) return callback('Token does not exist');
        callback(null, _this7._parseToken(token));
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "getReward",
    value: function () {
      var _getReward2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee12(address) {
        var options,
            callback,
            _args12 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                options = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
                callback = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : false;
                options.confirmed = true;
                return _context12.abrupt("return", this._getReward(address, options, callback));

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getReward(_x4) {
        return _getReward2.apply(this, arguments);
      }

      return getReward;
    }()
  }, {
    key: "getUnconfirmedReward",
    value: function () {
      var _getUnconfirmedReward = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee13(address) {
        var options,
            callback,
            _args13 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                options = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {};
                callback = _args13.length > 2 && _args13[2] !== undefined ? _args13[2] : false;
                options.confirmed = false;
                return _context13.abrupt("return", this._getReward(address, options, callback));

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getUnconfirmedReward(_x5) {
        return _getUnconfirmedReward.apply(this, arguments);
      }

      return getUnconfirmedReward;
    }()
  }, {
    key: "getBrokerage",
    value: function () {
      var _getBrokerage2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee14(address) {
        var options,
            callback,
            _args14 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                options = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};
                callback = _args14.length > 2 && _args14[2] !== undefined ? _args14[2] : false;
                options.confirmed = true;
                return _context14.abrupt("return", this._getBrokerage(address, options, callback));

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getBrokerage(_x6) {
        return _getBrokerage2.apply(this, arguments);
      }

      return getBrokerage;
    }()
  }, {
    key: "getUnconfirmedBrokerage",
    value: function () {
      var _getUnconfirmedBrokerage = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee15(address) {
        var options,
            callback,
            _args15 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                options = _args15.length > 1 && _args15[1] !== undefined ? _args15[1] : {};
                callback = _args15.length > 2 && _args15[2] !== undefined ? _args15[2] : false;
                options.confirmed = false;
                return _context15.abrupt("return", this._getBrokerage(address, options, callback));

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getUnconfirmedBrokerage(_x7) {
        return _getUnconfirmedBrokerage.apply(this, arguments);
      }

      return getUnconfirmedBrokerage;
    }()
  }, {
    key: "_getReward",
    value: function () {
      var _getReward3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee16() {
        var address,
            options,
            callback,
            data,
            _args16 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                address = _args16.length > 0 && _args16[0] !== undefined ? _args16[0] : this.tronWeb.defaultAddress.hex;
                options = _args16.length > 1 ? _args16[1] : undefined;
                callback = _args16.length > 2 && _args16[2] !== undefined ? _args16[2] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(address)) {
                  callback = address;
                  address = this.tronWeb.defaultAddress.hex;
                } else if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(address)) {
                  options = address;
                  address = this.tronWeb.defaultAddress.hex;
                }

                if (callback) {
                  _context16.next = 7;
                  break;
                }

                return _context16.abrupt("return", this.injectPromise(this._getReward, address, options));

              case 7:
                if (!this.validator.notValid([{
                  name: 'origin',
                  type: 'address',
                  value: address
                }], callback)) {
                  _context16.next = 9;
                  break;
                }

                return _context16.abrupt("return");

              case 9:
                data = {
                  address: toHex(address)
                };
                this.tronWeb[options.confirmed ? 'solidityNode' : 'fullNode'].request("wallet".concat(options.confirmed ? 'solidity' : '', "/getReward"), data, 'post').then(function () {
                  var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  if (typeof result.reward === 'undefined') return callback('Not found.');
                  callback(null, result.reward);
                })["catch"](function (err) {
                  return callback(err);
                });

              case 11:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function _getReward() {
        return _getReward3.apply(this, arguments);
      }

      return _getReward;
    }()
  }, {
    key: "_getBrokerage",
    value: function () {
      var _getBrokerage3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee17() {
        var address,
            options,
            callback,
            data,
            _args17 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                address = _args17.length > 0 && _args17[0] !== undefined ? _args17[0] : this.tronWeb.defaultAddress.hex;
                options = _args17.length > 1 ? _args17[1] : undefined;
                callback = _args17.length > 2 && _args17[2] !== undefined ? _args17[2] : false;

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(options)) {
                  callback = options;
                  options = {};
                }

                if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isFunction(address)) {
                  callback = address;
                  address = this.tronWeb.defaultAddress.hex;
                } else if (utils__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(address)) {
                  options = address;
                  address = this.tronWeb.defaultAddress.hex;
                }

                if (callback) {
                  _context17.next = 7;
                  break;
                }

                return _context17.abrupt("return", this.injectPromise(this._getBrokerage, address, options));

              case 7:
                if (!this.validator.notValid([{
                  name: 'origin',
                  type: 'address',
                  value: address
                }], callback)) {
                  _context17.next = 9;
                  break;
                }

                return _context17.abrupt("return");

              case 9:
                data = {
                  address: toHex(address)
                };
                this.tronWeb[options.confirmed ? 'solidityNode' : 'fullNode'].request("wallet".concat(options.confirmed ? 'solidity' : '', "/getBrokerage"), data, 'post').then(function () {
                  var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                  if (typeof result.brokerage === 'undefined') return callback('Not found.');
                  callback(null, result.brokerage);
                })["catch"](function (err) {
                  return callback(err);
                });

              case 11:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function _getBrokerage() {
        return _getBrokerage3.apply(this, arguments);
      }

      return _getBrokerage;
    }()
  }], [{
    key: "verifySignature",
    value: function verifySignature(message, address, signature) {
      var useTronHeader = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      message = message.replace(/^0x/, '');
      signature = signature.replace(/^0x/, '');
      var messageBytes = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(utils_ethersUtils__WEBPACK_IMPORTED_MODULE_10__["toUtf8Bytes"])(useTronHeader ? TRX_MESSAGE_HEADER : ETH_MESSAGE_HEADER)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(utils__WEBPACK_IMPORTED_MODULE_9__["default"].code.hexStr2byteArray(message)));
      var messageDigest = Object(utils_ethersUtils__WEBPACK_IMPORTED_MODULE_10__["keccak256"])(messageBytes);
      var recovered = Object(utils_ethersUtils__WEBPACK_IMPORTED_MODULE_10__["recoverAddress"])(messageDigest, {
        recoveryParam: signature.substring(128, 130) == '1c' ? 1 : 0,
        r: '0x' + signature.substring(0, 64),
        s: '0x' + signature.substring(64, 128)
      });
      var tronAddress = utils_address__WEBPACK_IMPORTED_MODULE_11__["ADDRESS_PREFIX"] + recovered.substr(2);
      var base58Address = index__WEBPACK_IMPORTED_MODULE_8__["default"].address.fromHex(tronAddress);
      return base58Address == index__WEBPACK_IMPORTED_MODULE_8__["default"].address.fromHex(address);
    }
  }, {
    key: "signString",
    value: function signString(message, privateKey) {
      var useTronHeader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      message = message.replace(/^0x/, '');
      var value = {
        toHexString: function toHexString() {
          return '0x' + privateKey;
        },
        value: privateKey
      };
      var signingKey = new utils_ethersUtils__WEBPACK_IMPORTED_MODULE_10__["SigningKey"](value);
      var messageBytes = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(utils_ethersUtils__WEBPACK_IMPORTED_MODULE_10__["toUtf8Bytes"])(useTronHeader ? TRX_MESSAGE_HEADER : ETH_MESSAGE_HEADER)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(utils__WEBPACK_IMPORTED_MODULE_9__["default"].code.hexStr2byteArray(message)));
      var messageDigest = Object(utils_ethersUtils__WEBPACK_IMPORTED_MODULE_10__["keccak256"])(messageBytes);
      var signature = signingKey.signDigest(messageDigest);
      var signatureHex = ['0x', signature.r.substring(2), signature.s.substring(2), Number(signature.v).toString(16)].join('');
      return signatureHex;
    }
  }]);

  return Trx;
}();


;

/***/ }),

/***/ "./src/paramValidator/index.js":
/*!*************************************!*\
  !*** ./src/paramValidator/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Validator; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! index */ "./src/index.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils */ "./src/utils/index.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var Validator = /*#__PURE__*/function () {
  function Validator() {
    var tronWeb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Validator);

    if (!tronWeb || !tronWeb instanceof index__WEBPACK_IMPORTED_MODULE_3__["default"]) throw new Error('Expected instance of TronWeb');
    this.tronWeb = tronWeb;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Validator, [{
    key: "invalid",
    value: function invalid(param) {
      return param.msg || "Invalid ".concat(param.name).concat(param.type === 'address' ? ' address' : '', " provided");
    }
  }, {
    key: "notPositive",
    value: function notPositive(param) {
      return "".concat(param.name, " must be a positive integer");
    }
  }, {
    key: "notEqual",
    value: function notEqual(param) {
      return param.msg || "".concat(param.names[0], " can not be equal to ").concat(param.names[1]);
    }
  }, {
    key: "notValid",
    value: function notValid() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Function();
      var normalized = {};
      var no = false;

      var _iterator = _createForOfIteratorHelper(params),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var param = _step.value;
          var name = param.name,
              names = param.names,
              value = param.value,
              type = param.type,
              gt = param.gt,
              lt = param.lt,
              gte = param.gte,
              lte = param.lte,
              se = param.se,
              optional = param.optional;
          if (optional && (!utils__WEBPACK_IMPORTED_MODULE_4__["default"].isNotNullOrUndefined(value) || type !== 'boolean' && value === false)) continue;
          normalized[param.name] = param.value;

          switch (type) {
            case 'address':
              if (!this.tronWeb.isAddress(value)) {
                no = true;
              } else {
                normalized[name] = this.tronWeb.address.toHex(value);
              }

              break;

            case 'integer':
              if (!utils__WEBPACK_IMPORTED_MODULE_4__["default"].isInteger(value) || typeof gt === 'number' && value <= param.gt || typeof lt === 'number' && value >= param.lt || typeof gte === 'number' && value < param.gte || typeof lte === 'number' && value > param.lte) {
                no = true;
              }

              break;

            case 'positive-integer':
              if (!utils__WEBPACK_IMPORTED_MODULE_4__["default"].isInteger(value) || value <= 0) {
                callback(this.notPositive(param));
                return;
              }

              break;

            case 'tokenId':
              if (!utils__WEBPACK_IMPORTED_MODULE_4__["default"].isString(value) || !value.length) {
                no = true;
              }

              break;

            case 'notEmptyObject':
              if (!utils__WEBPACK_IMPORTED_MODULE_4__["default"].isObject(value) || !Object.keys(value).length) {
                no = true;
              }

              break;

            case 'notEqual':
              if (normalized[names[0]] === normalized[names[1]]) {
                callback(this.notEqual(param));
                return true;
              }

              break;

            case 'resource':
              if (!['BANDWIDTH', 'ENERGY'].includes(value)) {
                no = true;
              }

              break;

            case 'url':
              if (!utils__WEBPACK_IMPORTED_MODULE_4__["default"].isValidURL(value)) {
                no = true;
              }

              break;

            case 'hex':
              if (!utils__WEBPACK_IMPORTED_MODULE_4__["default"].isHex(value)) {
                no = true;
              }

              break;

            case 'array':
              if (!Array.isArray(value)) {
                no = true;
              }

              break;

            case 'not-empty-string':
              if (!utils__WEBPACK_IMPORTED_MODULE_4__["default"].isString(value) || !value.length) {
                no = true;
              }

              break;

            case 'boolean':
              if (!utils__WEBPACK_IMPORTED_MODULE_4__["default"].isBoolean(value)) {
                no = true;
              }

              break;

            case 'string':
              if (!utils__WEBPACK_IMPORTED_MODULE_4__["default"].isString(value) || typeof gt === 'number' && value.length <= param.gt || typeof lt === 'number' && value.length >= param.lt || typeof gte === 'number' && value.length < param.gte || typeof lte === 'number' && value.length > param.lte) {
                no = true;
              }

              break;
          }

          if (no) {
            callback(this.invalid(param));
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  }]);

  return Validator;
}();



/***/ }),

/***/ "./src/utils/abi.js":
/*!**************************!*\
  !*** ./src/utils/abi.js ***!
  \**************************/
/*! exports provided: decodeParams, encodeParams, encodeParamsV2ByABI, decodeParamsV2ByABI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeParams", function() { return decodeParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeParams", function() { return encodeParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeParamsV2ByABI", function() { return encodeParamsV2ByABI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeParamsV2ByABI", function() { return decodeParamsV2ByABI; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ethersUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ethersUtils */ "./src/utils/ethersUtils.js");
/* harmony import */ var index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! index */ "./src/index.js");
/* harmony import */ var utils_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/address */ "./src/utils/address.js");




var abiCoder = new _ethersUtils__WEBPACK_IMPORTED_MODULE_1__["AbiCoder"]();

function _isArray(_array) {
  return Array.isArray(_array);
}

function _addressToHex(value) {
  return index__WEBPACK_IMPORTED_MODULE_2__["default"].address.toHex(value).replace(utils_address__WEBPACK_IMPORTED_MODULE_3__["ADDRESS_PREFIX_REGEX"], '0x');
}

function deepCopy(target) {
  if (Object.prototype.toString.call(target) !== '[object Object]' && Object.prototype.toString.call(target) !== '[object Array]') {
    return target;
  }

  var newTarget = _isArray(target) ? [] : {};
  Object.keys(target).forEach(function (key) {
    return newTarget[key] = target[key] instanceof Object && !target[key]._isBigNumber ? deepCopy(target[key]) : target[key];
  });
  return newTarget;
}

function decodeParams(names, types, output, ignoreMethodHash) {
  if (!output || typeof output === 'boolean') {
    ignoreMethodHash = output;
    output = types;
    types = names;
    names = [];
  }

  if (ignoreMethodHash && output.replace(/^0x/, '').length % 64 === 8) output = '0x' + output.replace(/^0x/, '').substring(8);
  if (output.replace(/^0x/, '').length % 64) throw new Error('The encoded string is not valid. Its length must be a multiple of 64.'); // workaround for unsupported trcToken type

  types = types.map(function (type) {
    if (/trcToken/.test(type)) {
      type = type.replace(/trcToken/, 'uint256');
    }

    return type;
  });
  return abiCoder.decode(types, output).reduce(function (obj, arg, index) {
    if (types[index] == 'address') arg = utils_address__WEBPACK_IMPORTED_MODULE_3__["ADDRESS_PREFIX"] + arg.substr(2).toLowerCase();
    if (names.length) obj[names[index]] = arg;else obj.push(arg);
    return obj;
  }, names.length ? {} : []);
}
function encodeParams(types, values) {
  for (var i = 0; i < types.length; i++) {
    if (types[i] === 'address') {
      values[i] = index__WEBPACK_IMPORTED_MODULE_2__["default"].address.toHex(values[i]).replace(utils_address__WEBPACK_IMPORTED_MODULE_3__["ADDRESS_PREFIX_REGEX"], '0x');
    }
  }

  return abiCoder.encode(types, values);
}

function extractSize(type) {
  var size = type.match(/([a-zA-Z0-9])(\[.*\])/);
  return size ? size[2] : '';
}

function extractArrayDim(type) {
  var size = extractSize(type);
  return (size.match(/\]\[/g) || []).length + 1;
}

function encodeParamsV2ByABI(funABI, args) {
  var types = [];

  var buildFullTypeDefinition = function buildFullTypeDefinition(typeDef) {
    if (typeDef && typeDef.type.indexOf('tuple') === 0 && typeDef.components) {
      var innerTypes = typeDef.components.map(function (innerType) {
        return buildFullTypeDefinition(innerType);
      });
      return "tuple(".concat(innerTypes.join(','), ")").concat(extractSize(typeDef.type));
    }

    if (/trcToken/.test(typeDef.type)) return typeDef.type.replace(/trcToken/, 'uint256');
    return typeDef.type;
  };

  var convertTypes = function convertTypes(types) {
    for (var i = 0; i < types.length; i++) {
      var type = types[i];
      if (/trcToken/.test(type)) types[i] = type.replace(/trcToken/, 'uint256');
    }
  };

  var convertAddresses = function convertAddresses(addrArr) {
    if (Array.isArray(addrArr)) {
      addrArr.forEach(function (addrs, i) {
        addrArr[i] = convertAddresses(addrs);
      });
      return addrArr;
    } else {
      return _addressToHex(addrArr);
    }
  };

  var mapTuple = function mapTuple(components, args, dimension) {
    if (dimension > 1) {
      if (args.length) {
        args.forEach(function (arg) {
          mapTuple(components, arg, dimension - 1);
        });
      }
    } else {
      if (args.length && dimension) {
        args.forEach(function (arg) {
          encodeArgs(components, arg);
        });
      }
    }
  };

  var encodeArgs = function encodeArgs() {
    var inputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var args = arguments.length > 1 ? arguments[1] : undefined;
    if (inputs.length) inputs.forEach(function (input, i) {
      var type = input.type;
      if (args[i]) if (type === 'address') args[i] = _addressToHex(args[i]);else if (type.match(/^([^\x5b]*)(\x5b|$)/)[0] === 'address[') convertAddresses(args[i]);else if (type.indexOf('tuple') === 0) if (extractSize(type)) {
        var dimension = extractArrayDim(type);
        mapTuple(input.components, args[i], dimension);
      } else encodeArgs(input.components, args[i]);
    });
  };

  if (funABI.inputs && funABI.inputs.length) {
    for (var i = 0; i < funABI.inputs.length; i++) {
      var type = funABI.inputs[i].type; // "false" will be converting to `false` and "true" will be working
      // fine as abiCoder assume anything in quotes as `true`

      if (type === 'bool' && args[i] === 'false') {
        args[i] = false;
      }

      types.push(type.indexOf('tuple') === 0 ? buildFullTypeDefinition(funABI.inputs[i]) : type);

      if (args.length < types.length) {
        args.push('');
      }
    }
  }

  encodeArgs(funABI.inputs, args);
  convertTypes(types);
  return abiCoder.encode(types, args);
}
function decodeParamsV2ByABI(funABI, data) {
  var convertTypeNames = function convertTypeNames(types) {
    for (var i = 0; i < types.length; i++) {
      var type = types[i];
      if (/^trcToken/.test(type)) types[i] = type.replace(/^trcToken/, 'uint256');
    }
  };

  var convertAddresses = function convertAddresses(addrArr) {
    if (Array.isArray(addrArr)) {
      addrArr.forEach(function (addrs, i) {
        addrArr[i] = convertAddresses(addrs);
      });
      return addrArr;
    } else {
      return index__WEBPACK_IMPORTED_MODULE_2__["default"].address.toHex(addrArr);
    }
  };

  var mapTuple = function mapTuple(components, args, dimension) {
    if (dimension > 1) {
      if (args.length) {
        args.forEach(function (arg) {
          mapTuple(components, arg, dimension - 1);
        });
      }
    } else {
      if (args.length && dimension) {
        args.forEach(function (arg) {
          decodeResult(components, arg);
        });
      }
    }
  };

  var buildFullTypeNameDefinition = function buildFullTypeNameDefinition(typeDef) {
    var name = typeDef.name ? " ".concat(typeDef.name) : '';

    if (typeDef && typeDef.type.indexOf('tuple') === 0 && typeDef.components) {
      var innerTypes = typeDef.components.map(function (innerType) {
        return buildFullTypeNameDefinition(innerType);
      });
      return "tuple(".concat(innerTypes.join(','), ")").concat(extractSize(typeDef.type)).concat(name);
    }

    if (/trcToken/.test(typeDef.type)) return typeDef.type.replace(/trcToken/, 'uint256') + name;
    return typeDef.type + name;
  };

  var decodeResult = function decodeResult() {
    var outputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var result = arguments.length > 1 ? arguments[1] : undefined;
    if (outputs.length) outputs.forEach(function (output, i) {
      var type = output.type,
          name = output.name;
      if (result[i]) if (type === 'address') {
        result[i] = index__WEBPACK_IMPORTED_MODULE_2__["default"].address.toHex(result[i]);
        if (name) result[name] = index__WEBPACK_IMPORTED_MODULE_2__["default"].address.toHex(result[name]);
      } else if (type.match(/^([^\x5b]*)(\x5b|$)/)[0] === 'address[') {
        convertAddresses(result[i]);
        if (name) convertAddresses(result[name]);
      } else if (type.indexOf('tuple') === 0) {
        if (extractSize(type)) {
          var dimension = extractArrayDim(type);
          mapTuple(output.components, result[i], dimension);
        } else decodeResult(output.components, result[i]);

        if (name) result[name] = result[i];
      }
    });
  }; // Only decode if there supposed to be fields


  if (funABI.outputs && funABI.outputs.length > 0) {
    var outputTypes = [];

    for (var i = 0; i < funABI.outputs.length; i++) {
      var type = funABI.outputs[i].type;
      var name = funABI.outputs[i].name ? " ".concat(funABI.outputs[i].name) : '';
      outputTypes.push(type.indexOf('tuple') === 0 ? buildFullTypeNameDefinition(funABI.outputs[i]) : type + name);
    }

    convertTypeNames(outputTypes);
    if (!data || !data.length) data = new Uint8Array(32 * funABI.outputs.length); // ensuring the data is at least filled by 0 cause `AbiCoder` throws if there's not engouh data
    // decode data

    var decodeRes = abiCoder.decode(outputTypes, data);
    var decodeResCopy = deepCopy(decodeRes);
    decodeResult(funABI.outputs, decodeResCopy);
    return decodeResCopy;
  }

  return [];
}

/***/ }),

/***/ "./src/utils/accounts.js":
/*!*******************************!*\
  !*** ./src/utils/accounts.js ***!
  \*******************************/
/*! exports provided: generateAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateAccount", function() { return generateAccount; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytes */ "./src/utils/bytes.js");
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crypto */ "./src/utils/crypto.js");



function generateAccount() {
  var priKeyBytes = Object(_crypto__WEBPACK_IMPORTED_MODULE_2__["genPriKey"])();
  var pubKeyBytes = Object(_crypto__WEBPACK_IMPORTED_MODULE_2__["getPubKeyFromPriKey"])(priKeyBytes);
  var addressBytes = Object(_crypto__WEBPACK_IMPORTED_MODULE_2__["getAddressFromPriKey"])(priKeyBytes);
  var privateKey = Object(_bytes__WEBPACK_IMPORTED_MODULE_1__["byteArray2hexStr"])(priKeyBytes);
  var publicKey = Object(_bytes__WEBPACK_IMPORTED_MODULE_1__["byteArray2hexStr"])(pubKeyBytes);
  return {
    privateKey: privateKey,
    publicKey: publicKey,
    address: {
      base58: Object(_crypto__WEBPACK_IMPORTED_MODULE_2__["getBase58CheckAddress"])(addressBytes),
      hex: Object(_bytes__WEBPACK_IMPORTED_MODULE_1__["byteArray2hexStr"])(addressBytes)
    }
  };
}

/***/ }),

/***/ "./src/utils/address.js":
/*!******************************!*\
  !*** ./src/utils/address.js ***!
  \******************************/
/*! exports provided: ADDRESS_SIZE, ADDRESS_PREFIX, ADDRESS_PREFIX_BYTE, ADDRESS_PREFIX_REGEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_SIZE", function() { return ADDRESS_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_PREFIX", function() { return ADDRESS_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_PREFIX_BYTE", function() { return ADDRESS_PREFIX_BYTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_PREFIX_REGEX", function() { return ADDRESS_PREFIX_REGEX; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

var ADDRESS_SIZE = 34;
var ADDRESS_PREFIX = "41";
var ADDRESS_PREFIX_BYTE = 0x41;
var ADDRESS_PREFIX_REGEX = /^(41)/;

/***/ }),

/***/ "./src/utils/base58.js":
/*!*****************************!*\
  !*** ./src/utils/base58.js ***!
  \*****************************/
/*! exports provided: encode58, decode58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode58", function() { return encode58; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode58", function() { return decode58; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
var ALPHABET_MAP = {};

for (var i = 0; i < ALPHABET.length; i++) {
  ALPHABET_MAP[ALPHABET.charAt(i)] = i;
}

var BASE = 58;
function encode58(buffer) {
  if (buffer.length === 0) return '';
  var i;
  var j;
  var digits = [0];

  for (i = 0; i < buffer.length; i++) {
    for (j = 0; j < digits.length; j++) {
      digits[j] <<= 8;
    }

    digits[0] += buffer[i];
    var carry = 0;

    for (j = 0; j < digits.length; ++j) {
      digits[j] += carry;
      carry = digits[j] / BASE | 0;
      digits[j] %= BASE;
    }

    while (carry) {
      digits.push(carry % BASE);
      carry = carry / BASE | 0;
    }
  }

  for (i = 0; buffer[i] === 0 && i < buffer.length - 1; i++) {
    digits.push(0);
  }

  return digits.reverse().map(function (digit) {
    return ALPHABET[digit];
  }).join('');
}
function decode58(string) {
  if (string.length === 0) return [];
  var i;
  var j;
  var bytes = [0];

  for (i = 0; i < string.length; i++) {
    var c = string[i];
    if (!(c in ALPHABET_MAP)) throw new Error('Non-base58 character');

    for (j = 0; j < bytes.length; j++) {
      bytes[j] *= BASE;
    }

    bytes[0] += ALPHABET_MAP[c];
    var carry = 0;

    for (j = 0; j < bytes.length; ++j) {
      bytes[j] += carry;
      carry = bytes[j] >> 8;
      bytes[j] &= 0xff;
    }

    while (carry) {
      bytes.push(carry & 0xff);
      carry >>= 8;
    }
  }

  for (i = 0; string[i] === '1' && i < string.length - 1; i++) {
    bytes.push(0);
  }

  return bytes.reverse();
}

/***/ }),

/***/ "./src/utils/base64.js":
/*!*****************************!*\
  !*** ./src/utils/base64.js ***!
  \*****************************/
/*! exports provided: Base64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64", function() { return Base64; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

function Base64() {
  var _this = this;

  this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  this.encode = function (input) {
    var output = "";
    var chr1;
    var chr2;
    var chr3;
    var enc1;
    var enc2;
    var enc3;
    var enc4;
    var i = 0;

    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;
      if (isNaN(chr2)) enc3 = enc4 = 64;else if (isNaN(chr3)) enc4 = 64;
      output = output + _this._keyStr.charAt(enc1) + _this._keyStr.charAt(enc2) + _this._keyStr.charAt(enc3) + _this._keyStr.charAt(enc4);
    }

    return output;
  };

  this.encodeIgnoreUtf8 = function (inputBytes) {
    var output = "";
    var chr1;
    var chr2;
    var chr3;
    var enc1;
    var enc2;
    var enc3;
    var enc4;
    var i = 0;

    while (i < inputBytes.length) {
      chr1 = inputBytes[i++];
      chr2 = inputBytes[i++];
      chr3 = inputBytes[i++];
      enc1 = chr1 >> 2;
      enc2 = (chr1 & 3) << 4 | chr2 >> 4;
      enc3 = (chr2 & 15) << 2 | chr3 >> 6;
      enc4 = chr3 & 63;
      if (isNaN(chr2)) enc3 = enc4 = 64;else if (isNaN(chr3)) enc4 = 64;
      output = output + _this._keyStr.charAt(enc1) + _this._keyStr.charAt(enc2) + _this._keyStr.charAt(enc3) + _this._keyStr.charAt(enc4);
    }

    return output;
  };

  this.decode = function (input) {
    var output = "";
    var chr1;
    var chr2;
    var chr3;
    var enc1;
    var enc2;
    var enc3;
    var enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = _this._keyStr.indexOf(input.charAt(i++));
      enc2 = _this._keyStr.indexOf(input.charAt(i++));
      enc3 = _this._keyStr.indexOf(input.charAt(i++));
      enc4 = _this._keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) output = output + String.fromCharCode(chr2);
      if (enc4 != 64) output = output + String.fromCharCode(chr3);
    }

    return _this._utf8_decode(output);
  };

  this.decodeToByteArray = function (input) {
    var output = "";
    var chr1;
    var chr2;
    var chr3;
    var enc1;
    var enc2;
    var enc3;
    var enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {
      enc1 = _this._keyStr.indexOf(input.charAt(i++));
      enc2 = _this._keyStr.indexOf(input.charAt(i++));
      enc3 = _this._keyStr.indexOf(input.charAt(i++));
      enc4 = _this._keyStr.indexOf(input.charAt(i++));
      chr1 = enc1 << 2 | enc2 >> 4;
      chr2 = (enc2 & 15) << 4 | enc3 >> 2;
      chr3 = (enc3 & 3) << 6 | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) output = output + String.fromCharCode(chr2);
      if (enc4 != 64) output = output + String.fromCharCode(chr3);
    }

    return _this._out2ByteArray(output);
  };

  this._out2ByteArray = function (utftext) {
    var byteArray = new Array(utftext.length);
    var i = 0;
    var c = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      byteArray[i] = c;
      i++;
    }

    return byteArray;
  };

  this._utf8_encode = function (string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }

    return utftext;
  };

  this._utf8_decode = function (utftext) {
    var string = "";
    var i = 0;
    var c = 0;
    var c2 = 0;
    var c3 = 0;

    while (i < utftext.length) {
      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode((c & 31) << 6 | c2 & 63);
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        i += 3;
      }
    }

    return string;
  };
}

/***/ }),

/***/ "./src/utils/bytes.js":
/*!****************************!*\
  !*** ./src/utils/bytes.js ***!
  \****************************/
/*! exports provided: byte2hexStr, bytesToString, hextoString, byteArray2hexStr, base64DecodeFromString, base64EncodeToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byte2hexStr", function() { return byte2hexStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytesToString", function() { return bytesToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hextoString", function() { return hextoString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byteArray2hexStr", function() { return byteArray2hexStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64DecodeFromString", function() { return base64DecodeFromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64EncodeToString", function() { return base64EncodeToString; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base64 */ "./src/utils/base64.js");


function byte2hexStr(_byte) {
  if (typeof _byte !== 'number') throw new Error('Input must be a number');
  if (_byte < 0 || _byte > 255) throw new Error('Input must be a byte');
  var hexByteMap = '0123456789ABCDEF';
  var str = '';
  str += hexByteMap.charAt(_byte >> 4);
  str += hexByteMap.charAt(_byte & 0x0f);
  return str;
}
function bytesToString(arr) {
  if (typeof arr === 'string') return arr;
  var str = '';

  for (var i = 0; i < arr.length; i++) {
    var one = arr[i].toString(2);
    var v = one.match(/^1+?(?=0)/);

    if (v && one.length === 8) {
      var bytesLength = v[0].length;
      var store = arr[i].toString(2).slice(7 - bytesLength);

      for (var st = 1; st < bytesLength; st++) {
        store += arr[st + i].toString(2).slice(2);
      }

      str += String.fromCharCode(parseInt(store, 2));
      i += bytesLength - 1;
    } else {
      str += String.fromCharCode(arr[i]);
    }
  }

  return str;
}
function hextoString(hex) {
  var arr = hex.replace(/^0x/, '').split('');
  var out = '';

  for (var i = 0; i < arr.length / 2; i++) {
    var tmp = "0x".concat(arr[i * 2]).concat(arr[i * 2 + 1]);
    out += String.fromCharCode(tmp);
  }

  return out;
}
function byteArray2hexStr(byteArray) {
  var str = '';

  for (var i = 0; i < byteArray.length; i++) {
    str += byte2hexStr(byteArray[i]);
  }

  return str;
}
function base64DecodeFromString(string64) {
  return new _base64__WEBPACK_IMPORTED_MODULE_1__["Base64"]().decodeToByteArray(string64);
}
function base64EncodeToString(bytes) {
  var b = new _base64__WEBPACK_IMPORTED_MODULE_1__["Base64"]();
  var string64 = b.encodeIgnoreUtf8(bytes);
  return string64;
}

/***/ }),

/***/ "./src/utils/code.js":
/*!***************************!*\
  !*** ./src/utils/code.js ***!
  \***************************/
/*! exports provided: bin2String, arrayEquals, stringToBytes, byte2hexStr, bytesToString, hextoString, byteArray2hexStr, base64DecodeFromString, base64EncodeToString, hexChar2byte, isHexChar, hexStr2byteArray, strToDate, isNumber, getStringType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bin2String", function() { return bin2String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEquals", function() { return arrayEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToBytes", function() { return stringToBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexChar2byte", function() { return hexChar2byte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHexChar", function() { return isHexChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexStr2byteArray", function() { return hexStr2byteArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strToDate", function() { return strToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringType", function() { return getStringType; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytes */ "./src/utils/bytes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "byte2hexStr", function() { return _bytes__WEBPACK_IMPORTED_MODULE_1__["byte2hexStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bytesToString", function() { return _bytes__WEBPACK_IMPORTED_MODULE_1__["bytesToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hextoString", function() { return _bytes__WEBPACK_IMPORTED_MODULE_1__["hextoString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "byteArray2hexStr", function() { return _bytes__WEBPACK_IMPORTED_MODULE_1__["byteArray2hexStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64DecodeFromString", function() { return _bytes__WEBPACK_IMPORTED_MODULE_1__["base64DecodeFromString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "base64EncodeToString", function() { return _bytes__WEBPACK_IMPORTED_MODULE_1__["base64EncodeToString"]; });



function bin2String(array) {
  // TODO Do we need this alias?
  return Object(_bytes__WEBPACK_IMPORTED_MODULE_1__["bytesToString"])(array);
}
function arrayEquals(array1, array2, strict) {
  if (array1.length != array2.length) return false;
  var i;

  for (i = 0; i < array1.length; i++) {
    if (strict) {
      if (array1[i] != array2[i]) return false;
    } else if (JSON.stringify(array1[i]) != JSON.stringify(array2[i])) return false;
  }

  return true;
}
function stringToBytes(str) {
  if (typeof str !== 'string') throw new Error('The passed string is not a string');
  var bytes = new Array();
  var len;
  var c;
  len = str.length;

  for (var i = 0; i < len; i++) {
    c = str.charCodeAt(i);

    if (c >= 0x010000 && c <= 0x10FFFF) {
      bytes.push(c >> 18 & 0x07 | 0xF0);
      bytes.push(c >> 12 & 0x3F | 0x80);
      bytes.push(c >> 6 & 0x3F | 0x80);
      bytes.push(c & 0x3F | 0x80);
    } else if (c >= 0x000800 && c <= 0x00FFFF) {
      bytes.push(c >> 12 & 0x0F | 0xE0);
      bytes.push(c >> 6 & 0x3F | 0x80);
      bytes.push(c & 0x3F | 0x80);
    } else if (c >= 0x000080 && c <= 0x0007FF) {
      bytes.push(c >> 6 & 0x1F | 0xC0);
      bytes.push(c & 0x3F | 0x80);
    } else bytes.push(c & 0xFF);
  }

  return bytes;
}

function hexChar2byte(c) {
  var d;
  if (c >= 'A' && c <= 'F') d = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;else if (c >= 'a' && c <= 'f') d = c.charCodeAt(0) - 'a'.charCodeAt(0) + 10;else if (c >= '0' && c <= '9') d = c.charCodeAt(0) - '0'.charCodeAt(0);
  if (typeof d === 'number') return d;else throw new Error('The passed hex char is not a valid hex char');
}
function isHexChar(c) {
  if (c >= 'A' && c <= 'F' || c >= 'a' && c <= 'f' || c >= '0' && c <= '9') {
    return 1;
  }

  return 0;
} // set strict as true: if the length of str is odd, add 0 before the str to make its length as even

function hexStr2byteArray(str) {
  var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (typeof str !== 'string') throw new Error('The passed string is not a string');
  var len = str.length;

  if (strict) {
    if (len % 2) {
      str = "0".concat(str);
      len++;
    }
  }

  var byteArray = Array();
  var d = 0;
  var j = 0;
  var k = 0;

  for (var i = 0; i < len; i++) {
    var c = str.charAt(i);

    if (isHexChar(c)) {
      d <<= 4;
      d += hexChar2byte(c);
      j++;

      if (0 === j % 2) {
        byteArray[k++] = d;
        d = 0;
      }
    } else throw new Error('The passed hex char is not a valid hex string');
  }

  return byteArray;
} //yyyy-MM-DD HH-mm-ss

function strToDate(str) {
  if (!/^\d{4}-\d{2}-\d{2}( \d{2}-\d{2}-\d{2}|)/.test(str)) throw new Error('The passed date string is not valid');
  var tempStrs = str.split(" ");
  var dateStrs = tempStrs[0].split("-");
  var year = parseInt(dateStrs[0], 10);
  var month = parseInt(dateStrs[1], 10) - 1;
  var day = parseInt(dateStrs[2], 10);

  if (tempStrs.length > 1) {
    var timeStrs = tempStrs[1].split("-");
    var hour = parseInt(timeStrs[0], 10);
    var minute = parseInt(timeStrs[1], 10);
    var second = parseInt(timeStrs[2], 10);
    return new Date(year, month, day, hour, minute, second);
  }

  return new Date(year, month, day);
}
function isNumber(c) {
  if (c >= '0' && c <= '9') return 1;
  return 0;
} //return 1: address  --- 20Bytes HexString
//return 2: blockNumber ------ Decimal number
//return 3: assetName ------ String
//return other: error

function getStringType(str) {
  if (null == str) return -1;
  if (typeof str != 'string') return -1;
  if (str.length == 0 || str == "") return -1;
  var i = 0; // TODO Should we return 1 if someone passes a full, 42-chars long address?
  // if (str.length == 42 && /^41/.test(str)) {
  //     for (; i < 40; i++) {
  //         var c = str.charAt(i+2);
  //
  //         if (!isHexChar(c))
  //             break;
  //     }
  // } else

  if (str.length == 40) {
    for (; i < 40; i++) {
      var c = str.charAt(i);
      if (!isHexChar(c)) break;
    }
  }

  if (i == 40) return 1; //40 Hex, Address

  for (i = 0; i < str.length; i++) {
    var c = str.charAt(i);
    if (!isNumber(c)) break;
  }

  if (i == str.length) return 2; // All Decimal number, BlockNumber

  for (i = 0; i < str.length; i++) {
    var c = str.charAt(i);
    if (c > ' ') return 3; // At least one visible character
  }

  return -1;
}

/***/ }),

/***/ "./src/utils/crypto.js":
/*!*****************************!*\
  !*** ./src/utils/crypto.js ***!
  \*****************************/
/*! exports provided: getBase58CheckAddress, decodeBase58Address, signTransaction, arrayToBase64String, signBytes, getRowBytesFromTransactionBase64, genPriKey, computeAddress, getAddressFromPriKey, decode58Check, isAddressValid, getBase58CheckAddressFromPriKeyBase64String, getHexStrAddressFromPriKeyBase64String, getAddressFromPriKeyBase64String, getPubKeyFromPriKey, ECKeySign, SHA256, passwordToAddress, pkToAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBase58CheckAddress", function() { return getBase58CheckAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeBase58Address", function() { return decodeBase58Address; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signTransaction", function() { return signTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayToBase64String", function() { return arrayToBase64String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signBytes", function() { return signBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRowBytesFromTransactionBase64", function() { return getRowBytesFromTransactionBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genPriKey", function() { return genPriKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAddress", function() { return computeAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddressFromPriKey", function() { return getAddressFromPriKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decode58Check", function() { return decode58Check; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAddressValid", function() { return isAddressValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBase58CheckAddressFromPriKeyBase64String", function() { return getBase58CheckAddressFromPriKeyBase64String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHexStrAddressFromPriKeyBase64String", function() { return getHexStrAddressFromPriKeyBase64String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddressFromPriKeyBase64String", function() { return getAddressFromPriKeyBase64String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPubKeyFromPriKey", function() { return getPubKeyFromPriKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECKeySign", function() { return ECKeySign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHA256", function() { return SHA256; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordToAddress", function() { return passwordToAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pkToAddress", function() { return pkToAddress; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address */ "./src/utils/address.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code */ "./src/utils/code.js");
/* harmony import */ var _base58__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base58 */ "./src/utils/base58.js");
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bytes */ "./src/utils/bytes.js");
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! elliptic */ "elliptic");
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ethersUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ethersUtils */ "./src/utils/ethersUtils.js");









function getBase58CheckAddress(addressBytes) {
  var hash0 = SHA256(addressBytes);
  var hash1 = SHA256(hash0);
  var checkSum = hash1.slice(0, 4);
  checkSum = addressBytes.concat(checkSum);
  return Object(_base58__WEBPACK_IMPORTED_MODULE_4__["encode58"])(checkSum);
}
function decodeBase58Address(base58Sting) {
  if (typeof base58Sting != 'string') return false;
  if (base58Sting.length <= 4) return false;
  var address = Object(_base58__WEBPACK_IMPORTED_MODULE_4__["decode58"])(base58Sting);
  if (base58Sting.length <= 4) return false;
  var len = address.length;
  var offset = len - 4;
  var checkSum = address.slice(offset);
  address = address.slice(0, offset);
  var hash0 = SHA256(address);
  var hash1 = SHA256(hash0);
  var checkSum1 = hash1.slice(0, 4);

  if (checkSum[0] == checkSum1[0] && checkSum[1] == checkSum1[1] && checkSum[2] == checkSum1[2] && checkSum[3] == checkSum1[3]) {
    return address;
  }

  throw new Error('Invalid address provided');
}
function signTransaction(priKeyBytes, transaction) {
  if (typeof priKeyBytes === 'string') priKeyBytes = Object(_code__WEBPACK_IMPORTED_MODULE_3__["hexStr2byteArray"])(priKeyBytes);
  var txID = transaction.txID;
  var signature = ECKeySign(Object(_code__WEBPACK_IMPORTED_MODULE_3__["hexStr2byteArray"])(txID), priKeyBytes);

  if (Array.isArray(transaction.signature)) {
    if (!transaction.signature.includes(signature)) transaction.signature.push(signature);
  } else transaction.signature = [signature];

  return transaction;
}
function arrayToBase64String(a) {
  return btoa(String.fromCharCode.apply(String, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(a)));
}
function signBytes(privateKey, contents) {
  if (typeof privateKey === 'string') privateKey = Object(_code__WEBPACK_IMPORTED_MODULE_3__["hexStr2byteArray"])(privateKey);
  var hashBytes = SHA256(contents);
  var signBytes = ECKeySign(hashBytes, privateKey);
  return signBytes;
}
function getRowBytesFromTransactionBase64(base64Data) {
  var bytesDecode = Object(_code__WEBPACK_IMPORTED_MODULE_3__["base64DecodeFromString"])(base64Data);
  var transaction = proto.protocol.Transaction.deserializeBinary(bytesDecode);
  var raw = transaction.getRawData();
  return raw.serializeBinary();
}
function genPriKey() {
  var ec = new elliptic__WEBPACK_IMPORTED_MODULE_6__["ec"]('secp256k1');
  var key = ec.genKeyPair();
  var priKey = key.getPrivate();
  var priKeyHex = priKey.toString('hex');

  while (priKeyHex.length < 64) {
    priKeyHex = "0".concat(priKeyHex);
  }

  return Object(_code__WEBPACK_IMPORTED_MODULE_3__["hexStr2byteArray"])(priKeyHex);
}
function computeAddress(pubBytes) {
  if (pubBytes.length === 65) pubBytes = pubBytes.slice(1);
  var hash = Object(_ethersUtils__WEBPACK_IMPORTED_MODULE_7__["keccak256"])(pubBytes).toString().substring(2);
  var addressHex = _address__WEBPACK_IMPORTED_MODULE_2__["ADDRESS_PREFIX"] + hash.substring(24);
  return Object(_code__WEBPACK_IMPORTED_MODULE_3__["hexStr2byteArray"])(addressHex);
}
function getAddressFromPriKey(priKeyBytes) {
  var pubBytes = getPubKeyFromPriKey(priKeyBytes);
  return computeAddress(pubBytes);
}
function decode58Check(addressStr) {
  var decodeCheck = Object(_base58__WEBPACK_IMPORTED_MODULE_4__["decode58"])(addressStr);
  if (decodeCheck.length <= 4) return false;
  var decodeData = decodeCheck.slice(0, decodeCheck.length - 4);
  var hash0 = SHA256(decodeData);
  var hash1 = SHA256(hash0);

  if (hash1[0] === decodeCheck[decodeData.length] && hash1[1] === decodeCheck[decodeData.length + 1] && hash1[2] === decodeCheck[decodeData.length + 2] && hash1[3] === decodeCheck[decodeData.length + 3]) {
    return decodeData;
  }

  return false;
}
function isAddressValid(base58Str) {
  if (typeof base58Str !== 'string') return false;
  if (base58Str.length !== _address__WEBPACK_IMPORTED_MODULE_2__["ADDRESS_SIZE"]) return false;
  var address = Object(_base58__WEBPACK_IMPORTED_MODULE_4__["decode58"])(base58Str);
  if (address.length !== 25) return false;
  if (address[0] !== _address__WEBPACK_IMPORTED_MODULE_2__["ADDRESS_PREFIX_BYTE"]) return false;
  var checkSum = address.slice(21);
  address = address.slice(0, 21);
  var hash0 = SHA256(address);
  var hash1 = SHA256(hash0);
  var checkSum1 = hash1.slice(0, 4);

  if (checkSum[0] == checkSum1[0] && checkSum[1] == checkSum1[1] && checkSum[2] == checkSum1[2] && checkSum[3] == checkSum1[3]) {
    return true;
  }

  return false;
}
function getBase58CheckAddressFromPriKeyBase64String(priKeyBase64String) {
  var priKeyBytes = Object(_code__WEBPACK_IMPORTED_MODULE_3__["base64DecodeFromString"])(priKeyBase64String);
  var pubBytes = getPubKeyFromPriKey(priKeyBytes);
  var addressBytes = computeAddress(pubBytes);
  return getBase58CheckAddress(addressBytes);
}
function getHexStrAddressFromPriKeyBase64String(priKeyBase64String) {
  var priKeyBytes = Object(_code__WEBPACK_IMPORTED_MODULE_3__["base64DecodeFromString"])(priKeyBase64String);
  var pubBytes = getPubKeyFromPriKey(priKeyBytes);
  var addressBytes = computeAddress(pubBytes);
  var addressHex = Object(_bytes__WEBPACK_IMPORTED_MODULE_5__["byteArray2hexStr"])(addressBytes);
  return addressHex;
}
function getAddressFromPriKeyBase64String(priKeyBase64String) {
  var priKeyBytes = Object(_code__WEBPACK_IMPORTED_MODULE_3__["base64DecodeFromString"])(priKeyBase64String);
  var pubBytes = getPubKeyFromPriKey(priKeyBytes);
  var addressBytes = computeAddress(pubBytes);
  var addressBase64 = Object(_code__WEBPACK_IMPORTED_MODULE_3__["base64EncodeToString"])(addressBytes);
  return addressBase64;
}
function getPubKeyFromPriKey(priKeyBytes) {
  var ec = new elliptic__WEBPACK_IMPORTED_MODULE_6__["ec"]('secp256k1');
  var key = ec.keyFromPrivate(priKeyBytes, 'bytes');
  var pubkey = key.getPublic();
  var x = pubkey.x;
  var y = pubkey.y;
  var xHex = x.toString('hex');

  while (xHex.length < 64) {
    xHex = "0".concat(xHex);
  }

  var yHex = y.toString('hex');

  while (yHex.length < 64) {
    yHex = "0".concat(yHex);
  }

  var pubkeyHex = "04".concat(xHex).concat(yHex);
  var pubkeyBytes = Object(_code__WEBPACK_IMPORTED_MODULE_3__["hexStr2byteArray"])(pubkeyHex);
  return pubkeyBytes;
}
function ECKeySign(hashBytes, priKeyBytes) {
  var ec = new elliptic__WEBPACK_IMPORTED_MODULE_6__["ec"]('secp256k1');
  var key = ec.keyFromPrivate(priKeyBytes, 'bytes');
  var signature = key.sign(hashBytes);
  var r = signature.r;
  var s = signature.s;
  var id = signature.recoveryParam;
  var rHex = r.toString('hex');

  while (rHex.length < 64) {
    rHex = "0".concat(rHex);
  }

  var sHex = s.toString('hex');

  while (sHex.length < 64) {
    sHex = "0".concat(sHex);
  }

  var idHex = Object(_bytes__WEBPACK_IMPORTED_MODULE_5__["byte2hexStr"])(id);
  var signHex = rHex + sHex + idHex;
  return signHex;
}
function SHA256(msgBytes) {
  var msgHex = Object(_bytes__WEBPACK_IMPORTED_MODULE_5__["byteArray2hexStr"])(msgBytes);
  var hashHex = Object(_ethersUtils__WEBPACK_IMPORTED_MODULE_7__["sha256"])('0x' + msgHex).replace(/^0x/, '');
  return Object(_code__WEBPACK_IMPORTED_MODULE_3__["hexStr2byteArray"])(hashHex);
}
function passwordToAddress(password) {
  var com_priKeyBytes = Object(_code__WEBPACK_IMPORTED_MODULE_3__["base64DecodeFromString"])(password);
  var com_addressBytes = getAddressFromPriKey(com_priKeyBytes);
  return getBase58CheckAddress(com_addressBytes);
}
function pkToAddress(privateKey) {
  var strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var com_priKeyBytes = Object(_code__WEBPACK_IMPORTED_MODULE_3__["hexStr2byteArray"])(privateKey, strict);
  var com_addressBytes = getAddressFromPriKey(com_priKeyBytes);
  return getBase58CheckAddress(com_addressBytes);
}

/***/ }),

/***/ "./src/utils/ethersUtils.js":
/*!**********************************!*\
  !*** ./src/utils/ethersUtils.js ***!
  \**********************************/
/*! exports provided: keccak256, sha256, toUtf8Bytes, toUtf8String, recoverAddress, SigningKey, AbiCoder, Interface, FormatTypes, arrayify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keccak256", function() { return keccak256; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sha256", function() { return sha256; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUtf8Bytes", function() { return toUtf8Bytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUtf8String", function() { return toUtf8String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recoverAddress", function() { return recoverAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigningKey", function() { return SigningKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbiCoder", function() { return AbiCoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interface", function() { return Interface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTypes", function() { return FormatTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayify", function() { return arrayify; });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ "ethers");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);


var keccak256 = ethers__WEBPACK_IMPORTED_MODULE_1__["utils"].keccak256;
var sha256 = ethers__WEBPACK_IMPORTED_MODULE_1__["utils"].sha256;
var toUtf8Bytes = ethers__WEBPACK_IMPORTED_MODULE_1__["utils"].toUtf8Bytes;
var toUtf8String = ethers__WEBPACK_IMPORTED_MODULE_1__["utils"].toUtf8String;
var recoverAddress = ethers__WEBPACK_IMPORTED_MODULE_1__["utils"].recoverAddress;
var SigningKey = ethers__WEBPACK_IMPORTED_MODULE_1__["utils"].SigningKey;
var AbiCoder = ethers__WEBPACK_IMPORTED_MODULE_1__["utils"].AbiCoder;
var Interface = ethers__WEBPACK_IMPORTED_MODULE_1__["utils"].Interface;
var FormatTypes = ethers__WEBPACK_IMPORTED_MODULE_1__["utils"].FormatTypes;
var arrayify = ethers__WEBPACK_IMPORTED_MODULE_1__["utils"].arrayify;


/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! source-map-support/register */ "source-map-support/register");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accounts */ "./src/utils/accounts.js");
/* harmony import */ var _base58__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base58 */ "./src/utils/base58.js");
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bytes */ "./src/utils/bytes.js");
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crypto */ "./src/utils/crypto.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./code */ "./src/utils/code.js");
/* harmony import */ var _abi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./abi */ "./src/utils/abi.js");
/* harmony import */ var _ethersUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ethersUtils */ "./src/utils/ethersUtils.js");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bignumber.js */ "bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var utils_address__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/address */ "./src/utils/address.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var utils = {
  isValidURL: function isValidURL(url) {
    if (typeof url !== 'string') return false;
    return validator__WEBPACK_IMPORTED_MODULE_11___default.a.isURL(url.toString(), {
      protocols: ['http', 'https'],
      require_tld: false
    });
  },
  isObject: function isObject(obj) {
    return obj === Object(obj) && Object.prototype.toString.call(obj) !== '[object Array]';
  },
  isArray: function isArray(array) {
    return Array.isArray(array);
  },
  isJson: function isJson(string) {
    try {
      return !!JSON.parse(string);
    } catch (ex) {
      return false;
    }
  },
  isBoolean: function isBoolean(bool) {
    return typeof bool === 'boolean';
  },
  isBigNumber: function isBigNumber(number) {
    return number && (number instanceof bignumber_js__WEBPACK_IMPORTED_MODULE_12___default.a || number.constructor && number.constructor.name === 'BigNumber');
  },
  isString: function isString(string) {
    return typeof string === 'string' || string && string.constructor && string.constructor.name === 'String';
  },
  isFunction: function isFunction(obj) {
    return typeof obj === 'function';
  },
  isHex: function isHex(string) {
    return typeof string === 'string' && !isNaN(parseInt(string, 16)) && /^(0x|)[a-fA-F0-9]+$/.test(string);
  },
  isInteger: function isInteger(number) {
    if (number === null) return false;
    return Number.isInteger(Number(number));
  },
  hasProperty: function hasProperty(obj, property) {
    return Object.prototype.hasOwnProperty.call(obj, property);
  },
  hasProperties: function hasProperties(obj) {
    var _this = this;

    for (var _len = arguments.length, properties = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      properties[_key - 1] = arguments[_key];
    }

    return properties.length && !properties.map(function (property) {
      return _this.hasProperty(obj, property);
    }).includes(false);
  },
  mapEvent: function mapEvent(event) {
    var data = {
      block: event.block_number,
      timestamp: event.block_timestamp,
      contract: event.contract_address,
      name: event.event_name,
      transaction: event.transaction_id,
      result: event.result,
      resourceNode: event.resource_Node || (event._unconfirmed ? 'fullNode' : 'solidityNode')
    };

    if (event._unconfirmed) {
      data.unconfirmed = event._unconfirmed;
    }

    if (event._fingerprint) {
      data.fingerprint = event._fingerprint;
    }

    return data;
  },
  parseEvent: function parseEvent(event, _ref) {
    var abi = _ref.inputs;
    if (!event.result) return event;

    if (this.isObject(event.result)) {
      for (var i = 0; i < abi.length; i++) {
        var obj = abi[i];
        if (obj.type == 'address' && obj.name in event.result) event.result[obj.name] = utils_address__WEBPACK_IMPORTED_MODULE_13__["ADDRESS_PREFIX"] + event.result[obj.name].substr(2).toLowerCase();
      }
    } else if (this.isArray(event.result)) {
      event.result = event.result.reduce(function (obj, result, index) {
        var _abi$index = abi[index],
            name = _abi$index.name,
            type = _abi$index.type;
        if (type == 'address') result = utils_address__WEBPACK_IMPORTED_MODULE_13__["ADDRESS_PREFIX"] + result.substr(2).toLowerCase();
        obj[name] = result;
        return obj;
      }, {});
    }

    return event;
  },
  padLeft: function padLeft(input, padding, amount) {
    var res = input.toString();

    while (res.length < amount) {
      res = padding + res;
    }

    return res;
  },
  isNotNullOrUndefined: function isNotNullOrUndefined(val) {
    return val !== null && typeof val !== 'undefined';
  },
  sleep: function sleep() {
    var _arguments = arguments;
    return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
      var millis;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              millis = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1000;
              return _context.abrupt("return", new Promise(function (resolve) {
                return setTimeout(resolve, millis);
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, utils), {}, {
  code: _code__WEBPACK_IMPORTED_MODULE_8__,
  accounts: _accounts__WEBPACK_IMPORTED_MODULE_4__,
  base58: _base58__WEBPACK_IMPORTED_MODULE_5__,
  bytes: _bytes__WEBPACK_IMPORTED_MODULE_6__,
  crypto: _crypto__WEBPACK_IMPORTED_MODULE_7__,
  abi: _abi__WEBPACK_IMPORTED_MODULE_9__,
  ethersUtils: _ethersUtils__WEBPACK_IMPORTED_MODULE_10__
}));

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "bignumber.js":
/*!*******************************!*\
  !*** external "bignumber.js" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bignumber.js");

/***/ }),

/***/ "elliptic":
/*!***************************!*\
  !*** external "elliptic" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("elliptic");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ethers");

/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("eventemitter3");

/***/ }),

/***/ "injectpromise":
/*!********************************!*\
  !*** external "injectpromise" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("injectpromise");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "semver":
/*!*************************!*\
  !*** external "semver" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semver");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ })["default"];
//# sourceMappingURL=TronWeb.node.js.map