"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-content-tree-js"],{

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCssClassNames": () => (/* binding */ createCssClassNames)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var createCssClassNames = function createCssClassNames(classes) {
  if (Object.prototype.toString.call(classes) !== '[object Object]') {
    return '';
  }

  return Object.entries(classes).reduce(function (total, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        condition = _ref2[1];

    return "".concat(total, " ").concat(condition ? name : '');
  }, '').trim();
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js":
/*!**********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBasicRequestInit": () => (/* binding */ getBasicRequestInit),
/* harmony export */   "handleRequestError": () => (/* binding */ handleRequestError),
/* harmony export */   "handleRequestResponse": () => (/* binding */ handleRequestResponse),
/* harmony export */   "handleRequestResponseStatus": () => (/* binding */ handleRequestResponseStatus)
/* harmony export */ });
/**
 * Returns basic RequestInit object for Request
 *
 * @function getBasicRequestInit
 * @param {Object} restInfo REST config hash containing: token and siteaccess properties
 * @returns {RequestInit}
 */
var getBasicRequestInit = function getBasicRequestInit(_ref) {
  var token = _ref.token,
      siteaccess = _ref.siteaccess;
  return {
    headers: {
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    },
    mode: 'same-origin',
    credentials: 'same-origin'
  };
};
/**
 * Handles request error
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Response}
 */

var handleRequestError = function handleRequestError(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
};
/**
 * Handles request response
 *
 * @function handleRequestResponse
 * @param {Response} response
 * @returns {Error|Promise}
 */

var handleRequestResponse = function handleRequestResponse(response) {
  return handleRequestError(response).json();
};
/**
 * Handles request response; returns status if response is OK
 *
 * @function handleRequestResponseStatus
 * @param {Response} response
 * @returns {number}
 */

var handleRequestResponseStatus = function handleRequestResponseStatus(response) {
  return handleRequestError(response).status;
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js":
/*!*********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Icon = function Icon(props) {
  var linkHref = props.customPath ? props.customPath : window.ibexa.helpers.icon.getIconPath(props.name);
  var className = 'ibexa-icon';

  if (props.extraClasses) {
    className = "".concat(className, " ").concat(props.extraClasses);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("use", {
    xlinkHref: linkHref
  }));
};

Icon.propTypes = {
  extraClasses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  customPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
Icon.defaultProps = {
  customPath: null,
  name: null,
  extraClasses: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NOTIFICATION_ERROR_LABEL": () => (/* binding */ NOTIFICATION_ERROR_LABEL),
/* harmony export */   "NOTIFICATION_INFO_LABEL": () => (/* binding */ NOTIFICATION_INFO_LABEL),
/* harmony export */   "NOTIFICATION_SUCCESS_LABEL": () => (/* binding */ NOTIFICATION_SUCCESS_LABEL),
/* harmony export */   "NOTIFICATION_WARNING_LABEL": () => (/* binding */ NOTIFICATION_WARNING_LABEL),
/* harmony export */   "showErrorNotification": () => (/* binding */ showErrorNotification),
/* harmony export */   "showInfoNotification": () => (/* binding */ showInfoNotification),
/* harmony export */   "showNotification": () => (/* binding */ showNotification),
/* harmony export */   "showSuccessNotification": () => (/* binding */ showSuccessNotification),
/* harmony export */   "showWarningNotification": () => (/* binding */ showWarningNotification)
/* harmony export */ });
var NOTIFICATION_INFO_LABEL = 'info';
var NOTIFICATION_SUCCESS_LABEL = 'success';
var NOTIFICATION_WARNING_LABEL = 'warning';
var NOTIFICATION_ERROR_LABEL = 'error';
/**
 * Dispatches notification event
 *
 * @method showNotification
 * @param {{message: string, label: string}} detail
 */

var showNotification = function showNotification(detail) {
  var event = new CustomEvent('ibexa-notify', {
    detail: detail
  });
  document.body.dispatchEvent(event);
};
/**
 * Dispatches info notification event
 *
 * @method showInfoNotification
 * @param {String} message
 */

var showInfoNotification = function showInfoNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_INFO_LABEL
  });
};
/**
 * Dispatches success notification event
 *
 * @method showSuccessNotification
 * @param {String} message
 */

var showSuccessNotification = function showSuccessNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_SUCCESS_LABEL
  });
};
/**
 * Dispatches warning notification event
 *
 * @method showWarningNotification
 * @param {String} message
 */

var showWarningNotification = function showWarningNotification(message) {
  showNotification({
    message: message,
    label: NOTIFICATION_WARNING_LABEL
  });
};
/**
 * Dispatches error notification event
 *
 * @method showErrorNotification
 * @param {(string|Error)} error
 */

var showErrorNotification = function showErrorNotification(error) {
  var isErrorObj = error instanceof Error;
  var message = isErrorObj ? error.message : error;
  showNotification({
    message: message,
    label: NOTIFICATION_ERROR_LABEL
  });
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/content-tree/content.tree.js":
/*!******************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/content-tree/content.tree.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentTree)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list/list.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list/list.component.js");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/header/header.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var _window = window,
    Translator = _window.Translator;
var CLASS_IS_TREE_RESIZING = 'ibexa-is-tree-resizing';
var MIN_CONTAINER_WIDTH = 200;
var COLLAPSED_WIDTH = 66;
var EXPANDED_WIDTH = 320;
var DEFAULT_CONTAINER_WIDTH = 300;

var ContentTree = /*#__PURE__*/function (_Component) {
  _inherits(ContentTree, _Component);

  var _super = _createSuper(ContentTree);

  function ContentTree(props) {
    var _this;

    _classCallCheck(this, ContentTree);

    _this = _super.call(this, props);
    _this.changeContainerWidth = _this.changeContainerWidth.bind(_assertThisInitialized(_this));
    _this.toggleCollapseTree = _this.toggleCollapseTree.bind(_assertThisInitialized(_this));
    _this.addWidthChangeListener = _this.addWidthChangeListener.bind(_assertThisInitialized(_this));
    _this.handleResizeEnd = _this.handleResizeEnd.bind(_assertThisInitialized(_this));
    _this.checkIsTreeCollapsed = _this.checkIsTreeCollapsed.bind(_assertThisInitialized(_this));
    _this._refTreeContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this._refPopupContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
    _this.scrollTimeout = null;
    _this.scrollPositionRestored = false;
    _this.state = {
      resizeStartPositionX: 0,
      containerWidth: _this.getConfig('width') || DEFAULT_CONTAINER_WIDTH,
      resizedContainerWidth: 0,
      isResizing: false
    };
    return _this;
  }

  _createClass(ContentTree, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearDocumentResizingListeners();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.containerScrollRef.addEventListener('scroll', function (event) {
        window.clearTimeout(_this2.scrollTimeout);
        _this2.scrollTimeout = window.setTimeout(function (scrollTop) {
          _this2.saveConfig('scrollTop', scrollTop);
        }, 50, event.currentTarget.scrollTop);
      });
      document.body.dispatchEvent(new CustomEvent('ibexa-tb-rendered', {
        detail: {
          id: 'ibexa-content-tree'
        }
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevState) {
      if (this.state.containerWidth !== prevState.containerWidth) {
        this.saveConfig('width', this.state.containerWidth);
        document.body.dispatchEvent(new CustomEvent('ibexa-content-tree-resized'));
      }

      if (this.props.items && this.props.items.length && !this.scrollPositionRestored) {
        this.scrollPositionRestored = true;
        this.containerScrollRef.scrollTo(0, this.getConfig('scrollTop'));
      }
    }
  }, {
    key: "saveConfig",
    value: function saveConfig(id, value) {
      var userId = this.props.userId;
      var data = JSON.parse(window.localStorage.getItem('ibexa-content-tree-state') || '{}');

      if (!data[userId]) {
        data[userId] = {};
      }

      data[userId][id] = value;
      window.localStorage.setItem('ibexa-content-tree-state', JSON.stringify(data));
    }
  }, {
    key: "getConfig",
    value: function getConfig(id) {
      var _data$userId;

      var userId = this.props.userId;
      var data = JSON.parse(window.localStorage.getItem('ibexa-content-tree-state') || '{}');
      return (_data$userId = data[userId]) === null || _data$userId === void 0 ? void 0 : _data$userId[id];
    }
  }, {
    key: "changeContainerWidth",
    value: function changeContainerWidth(_ref) {
      var clientX = _ref.clientX;
      var currentPositionX = clientX;
      this.setState(function (state) {
        return {
          resizedContainerWidth: state.containerWidth + (currentPositionX - state.resizeStartPositionX)
        };
      }, function () {
        document.body.dispatchEvent(new CustomEvent('ibexa-content-resized'));
      });
    }
  }, {
    key: "toggleCollapseTree",
    value: function toggleCollapseTree() {
      var width = this.checkIsTreeCollapsed() ? EXPANDED_WIDTH : COLLAPSED_WIDTH;
      this.setState(function () {
        return {
          resizedContainerWidth: width,
          containerWidth: width
        };
      }, function () {
        document.body.dispatchEvent(new CustomEvent('ibexa-content-resized'));
      });
    }
  }, {
    key: "addWidthChangeListener",
    value: function addWidthChangeListener(_ref2) {
      var nativeEvent = _ref2.nativeEvent;
      var resizeStartPositionX = nativeEvent.clientX;

      var containerWidth = this._refTreeContainer.current.getBoundingClientRect().width;

      window.document.addEventListener('mousemove', this.changeContainerWidth, false);
      window.document.addEventListener('mouseup', this.handleResizeEnd, false);
      window.document.body.classList.add(CLASS_IS_TREE_RESIZING);
      this.setState(function () {
        return {
          resizeStartPositionX: resizeStartPositionX,
          containerWidth: containerWidth,
          resizedContainerWidth: containerWidth,
          isResizing: true
        };
      });
    }
  }, {
    key: "handleResizeEnd",
    value: function handleResizeEnd() {
      this.clearDocumentResizingListeners();
      this.setState(function (state) {
        return {
          resizeStartPositionX: 0,
          containerWidth: state.resizedContainerWidth,
          isResizing: false
        };
      }, function () {
        document.body.dispatchEvent(new CustomEvent('ibexa-content-resized'));
      });
    }
  }, {
    key: "clearDocumentResizingListeners",
    value: function clearDocumentResizingListeners() {
      window.document.removeEventListener('mousemove', this.changeContainerWidth);
      window.document.removeEventListener('mouseup', this.handleResizeEnd);
      window.document.body.classList.remove(CLASS_IS_TREE_RESIZING);
    }
  }, {
    key: "getCollapseAllBtn",
    value: function getCollapseAllBtn() {
      var _this3 = this;

      var CollapseAction = function CollapseAction() {
        var collapseAllLabel = Translator.trans(
        /*@Desc("Collapse all")*/
        'collapse_all', {}, 'content_tree');
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          onClick: _this3.props.onCollapseAllItems
        }, collapseAllLabel);
      };

      return CollapseAction;
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var actions = [{
        id: 'collapse-all',
        priority: 0,
        component: this.getCollapseAllBtn()
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        toggleCollapseTree: this.toggleCollapseTree,
        isCollapsed: this.checkIsTreeCollapsed(),
        popupRef: this._refPopupContainer,
        actions: actions
      });
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this4 = this;

      var _this$props = this.props,
          items = _this$props.items,
          loadMoreSubitems = _this$props.loadMoreSubitems,
          currentLocationId = _this$props.currentLocationId,
          onClickItem = _this$props.onClickItem,
          subitemsLoadLimit = _this$props.subitemsLoadLimit,
          subitemsLimit = _this$props.subitemsLimit,
          treeMaxDepth = _this$props.treeMaxDepth,
          afterItemToggle = _this$props.afterItemToggle;
      var attrs = {
        items: items,
        path: '',
        loadMoreSubitems: loadMoreSubitems,
        currentLocationId: currentLocationId,
        subitemsLimit: subitemsLimit,
        subitemsLoadLimit: subitemsLoadLimit,
        treeMaxDepth: treeMaxDepth,
        afterItemToggle: afterItemToggle,
        isRoot: true,
        onClickItem: onClickItem
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-tree__scrollable-wrapper",
        ref: function ref(_ref3) {
          return _this4.containerScrollRef = _ref3;
        }
      }, this.checkIsTreeCollapsed() || !items || !items.length ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_list_component__WEBPACK_IMPORTED_MODULE_2__["default"], attrs));
    }
  }, {
    key: "renderLoadingSpinner",
    value: function renderLoadingSpinner() {
      var items = this.props.items;

      if (this.checkIsTreeCollapsed() || items && items.length) {
        return;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-tree__loading-spinner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "spinner",
        extraClasses: "ibexa-icon--medium ibexa-spin"
      }));
    }
  }, {
    key: "checkIsTreeCollapsed",
    value: function checkIsTreeCollapsed() {
      var width = this.state.resizedContainerWidth || this.state.containerWidth;
      return width <= MIN_CONTAINER_WIDTH;
    }
  }, {
    key: "render",
    value: function render() {
      var resizable = this.props.resizable;
      var _this$state = this.state,
          isResizing = _this$state.isResizing,
          containerWidth = _this$state.containerWidth,
          resizedContainerWidth = _this$state.resizedContainerWidth;
      var width = isResizing ? resizedContainerWidth : containerWidth;
      var containerAttrs = {
        className: 'm-tree',
        ref: this._refTreeContainer
      };

      if (width && resizable) {
        containerAttrs.style = {
          width: "".concat(width, "px")
        };
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", containerAttrs, this.renderHeader(), this.renderList(), this.renderLoadingSpinner(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "m-tree__resize-handler",
        onMouseDown: this.addWidthChangeListener
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        ref: this._refPopupContainer
      }));
    }
  }]);

  return ContentTree;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


ContentTree.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  loadMoreSubitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  currentLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  subitemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  subitemsLoadLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  treeMaxDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  afterItemToggle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onCollapseAllItems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onClickItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  userId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  resizable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
ContentTree.defaultProps = {
  subitemsLoadLimit: null,
  onClickItem: function onClickItem() {}
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/header/header.js":
/*!******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/header/header.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/helpers/css.class.names */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/css.class.names.js");
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
/* harmony import */ var _popup_actions_popup_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup-actions/popup.actions */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/popup-actions/popup.actions.js");





var _window = window,
    Translator = _window.Translator;

var Header = function Header(_ref) {
  var isCollapsed = _ref.isCollapsed,
      toggleCollapseTree = _ref.toggleCollapseTree,
      actions = _ref.actions,
      popupRef = _ref.popupRef;
  var headerTitle = Translator.trans(
  /*@Desc("Content tree")*/
  'content_tree.header', {}, 'content_tree');

  var renderCollapseButton = function renderCollapseButton() {
    var iconName = isCollapsed ? 'caret-next' : 'caret-back';
    var caretIconClass = (0,_common_helpers_css_class_names__WEBPACK_IMPORTED_MODULE_2__.createCssClassNames)({
      'ibexa-icon--tiny': isCollapsed,
      'ibexa-icon--small': !isCollapsed
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "ibexa-btn btn ibexa-btn--no-text ibexa-btn--tertiary c-header__toggle-btn",
      onClick: toggleCollapseTree
    }, isCollapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: "content-tree",
      extraClasses: "ibexa-icon--small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: iconName,
      extraClasses: caretIconClass
    }));
  };

  if (isCollapsed) {
    return renderCollapseButton();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-header"
  }, renderCollapseButton(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-header__name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "content-tree",
    extraClasses: "ibexa-icon--small"
  }), headerTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-header__options"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup_actions_popup_actions__WEBPACK_IMPORTED_MODULE_4__["default"], {
    listRef: popupRef,
    options: actions
  })));
};

Header.propTypes = {
  isCollapsed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  toggleCollapseTree: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  actions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  popupRef: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list-item/list.item.component.js":
/*!**********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list-item/list.item.component.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var _window = window,
    ibexa = _window.ibexa,
    Translator = _window.Translator;

var ListItem = /*#__PURE__*/function (_Component) {
  _inherits(ListItem, _Component);

  var _super = _createSuper(ListItem);

  function ListItem(props) {
    var _this;

    _classCallCheck(this, ListItem);

    _this = _super.call(this, props);
    _this.toggleExpandedState = _this.toggleExpandedState.bind(_assertThisInitialized(_this));
    _this.cancelLoadingState = _this.cancelLoadingState.bind(_assertThisInitialized(_this));
    _this.loadMoreSubitems = _this.loadMoreSubitems.bind(_assertThisInitialized(_this));
    _this.handleAfterExpandedStateChange = _this.handleAfterExpandedStateChange.bind(_assertThisInitialized(_this));
    _this.secondaryItemActions = _this.getSecondaryItemActions();
    _this.sortedActions = _this.getSortedActions();
    _this.state = {
      isExpanded: !!props.subitems.length,
      isLoading: false
    };
    return _this;
  }

  _createClass(ListItem, [{
    key: "getSecondaryItemActions",
    value: function getSecondaryItemActions() {
      var secondaryItemActions = ibexa.adminUiConfig.contentTreeWidget.secondaryItemActions;

      if (!secondaryItemActions) {
        return [];
      }

      return _toConsumableArray(secondaryItemActions).sort(function (prefixActionA, prefixActionB) {
        return prefixActionB.priority - prefixActionA.priority;
      });
    }
  }, {
    key: "getSortedActions",
    value: function getSortedActions() {
      var itemActions = ibexa.adminUiConfig.contentTreeWidget.itemActions;
      var actions = itemActions ? _toConsumableArray(itemActions) : [];
      return actions.sort(function (actionA, actionB) {
        return actionB.priority - actionA.priority;
      });
    }
  }, {
    key: "cancelLoadingState",
    value: function cancelLoadingState() {
      this.setState(function () {
        return {
          isLoading: false
        };
      });
    }
  }, {
    key: "toggleExpandedState",
    value: function toggleExpandedState() {
      var _this2 = this;

      var _this$props = this.props,
          currentPath = _this$props.path,
          treeMaxDepth = _this$props.treeMaxDepth;
      var currentDepth = currentPath.split(',').length - 1;

      if (currentDepth >= treeMaxDepth) {
        var notificationMessage = Translator.trans(
        /*@Desc("Cannot load sub-items for this Location because you reached max tree depth.")*/
        'expand_item.limit.message', {}, 'content_tree');
        ibexa.helpers.notification.showWarningNotification(notificationMessage);
        return;
      }

      this.setState(function (state) {
        return {
          isExpanded: !state.isExpanded
        };
      }, function () {
        var _this2$props = _this2.props,
            afterItemToggle = _this2$props.afterItemToggle,
            path = _this2$props.path;
        afterItemToggle(path, _this2.state.isExpanded);

        _this2.handleAfterExpandedStateChange();
      });
    }
  }, {
    key: "handleAfterExpandedStateChange",
    value: function handleAfterExpandedStateChange() {
      var loadInitialItems = this.state.isExpanded && !this.props.subitems.length;

      if (loadInitialItems) {
        this.loadMoreSubitems();
      }
    }
  }, {
    key: "loadMoreSubitems",
    value: function loadMoreSubitems() {
      var _this3 = this;

      var _this$props2 = this.props,
          subitems = _this$props2.subitems,
          subitemsLimit = _this$props2.subitemsLimit;
      var subitemsLimitReached = subitems.length >= subitemsLimit;

      if (this.state.isLoading || subitemsLimitReached) {
        return;
      }

      var _this$props3 = this.props,
          path = _this$props3.path,
          locationId = _this$props3.locationId,
          subitemsLoadLimit = _this$props3.subitemsLoadLimit,
          loadMoreSubitems = _this$props3.loadMoreSubitems;
      this.setState(function () {
        return {
          isLoading: true
        };
      }, function () {
        return loadMoreSubitems({
          path: path,
          parentLocationId: locationId,
          offset: subitems.length,
          limit: subitemsLoadLimit
        }, _this3.cancelLoadingState);
      });
    }
  }, {
    key: "checkCanLoadMore",
    value: function checkCanLoadMore() {
      var _this$props4 = this.props,
          subitems = _this$props4.subitems,
          totalSubitemsCount = _this$props4.totalSubitemsCount;
      return subitems.length < totalSubitemsCount;
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props5 = this.props,
          contentTypeIdentifier = _this$props5.contentTypeIdentifier,
          locationId = _this$props5.locationId;
      var iconAttrs = {
        extraClasses: 'ibexa-icon--small ibexa-icon--dark'
      };

      if (!this.state.isLoading || this.props.subitems.length) {
        if (locationId === 1) {
          iconAttrs.customPath = ibexa.helpers.contentType.getContentTypeIconUrl('folder');
        } else {
          iconAttrs.customPath = ibexa.helpers.contentType.getContentTypeIconUrl(contentTypeIdentifier) || ibexa.helpers.contentType.getContentTypeIconUrl('file');
        }
      } else {
        iconAttrs.name = 'spinner';
        iconAttrs.extraClasses = "".concat(iconAttrs.extraClasses, " ibexa-spin");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-list-item__icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], iconAttrs));
    }
  }, {
    key: "renderLoadMoreBtn",
    value: function renderLoadMoreBtn() {
      var _this$props6 = this.props,
          subitems = _this$props6.subitems,
          subitemsLimit = _this$props6.subitemsLimit;
      var subitemsLimitReached = subitems.length >= subitemsLimit;

      if (!this.state.isExpanded || subitemsLimitReached || !this.checkCanLoadMore() || !subitems.length) {
        return null;
      }

      var isLoading = this.state.isLoading;
      var seeMoreLabel = Translator.trans(
      /*@Desc("See more")*/
      'see_more', {}, 'content_tree');
      var loadingMoreLabel = Translator.trans(
      /*@Desc("Loading more...")*/
      'loading_more', {}, 'content_tree');
      var btnLabel = isLoading ? loadingMoreLabel : seeMoreLabel;
      var loadingSpinner = null;

      if (isLoading) {
        loadingSpinner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          name: "spinner",
          extraClasses: "ibexa-spin ibexa-icon--small c-list-item__load-more-btn-spinner"
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        type: "button",
        className: "c-list-item__load-more-btn",
        onClick: this.loadMoreSubitems
      }, loadingSpinner, " ", btnLabel);
    }
  }, {
    key: "renderSubitemsLimitReachedInfo",
    value: function renderSubitemsLimitReachedInfo() {
      var _this$props7 = this.props,
          subitems = _this$props7.subitems,
          subitemsLimit = _this$props7.subitemsLimit;
      var subitemsLimitReached = subitems.length >= subitemsLimit;

      if (!this.state.isExpanded || !subitemsLimitReached) {
        return null;
      }

      var message = Translator.trans(
      /*@Desc("Loading limit reached")*/
      'show_more.limit_reached', {}, 'content_tree');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-list-item__load-more-limit-info"
      }, message);
    }
  }, {
    key: "renderItemLabel",
    value: function renderItemLabel() {
      var _this4 = this;

      var _this$props8 = this.props,
          href = _this$props8.href,
          name = _this$props8.name,
          locationId = _this$props8.locationId,
          indent = _this$props8.indent,
          onClick = _this$props8.onClick;

      if (locationId === 1) {
        return null;
      }

      var togglerClassName = 'c-list-item__toggler';
      var togglerAttrs = {
        className: togglerClassName,
        onClick: this.toggleExpandedState,
        tabIndex: -1
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-list-item__row",
        style: {
          '--indent': indent
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-list-item__prefix-actions"
      }, this.secondaryItemActions.map(function (action) {
        var ActionComponent = action.component;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: action.id,
          className: "c-list-item__prefix-actions-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActionComponent, _this4.props));
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", togglerAttrs), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        className: "c-list-item__label",
        href: href,
        onClick: onClick
      }, this.renderIcon(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "c-list-item__label-content",
        title: name
      }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "c-list-item__actions"
      }, this.sortedActions.map(function (action) {
        var ActionComponent = action.component;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
          key: action.id,
          className: "c-list-item__actions-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ActionComponent, _this4.props));
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
          totalSubitemsCount = _this$props9.totalSubitemsCount,
          children = _this$props9.children,
          isInvisible = _this$props9.isInvisible,
          selected = _this$props9.selected;
      var itemClassName = 'c-list-item';
      var itemAttrs = {
        className: itemClassName
      };

      if (totalSubitemsCount) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--has-sub-items");
      }

      if (this.checkCanLoadMore()) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--can-load-more");
      }

      if (this.state.isExpanded) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--is-expanded");
      }

      if (isInvisible) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--is-hidden");
      }

      if (selected) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--is-selected");
      }

      if (this.props.isRootItem) {
        itemAttrs.className = "".concat(itemAttrs.className, " ").concat(itemClassName, "--is-root-item");
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", itemAttrs, this.renderItemLabel(), children, this.renderLoadMoreBtn(), this.renderSubitemsLimitReachedInfo());
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

ListItem.propTypes = {
  path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  contentTypeIdentifier: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  totalSubitemsCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  subitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element),
  hidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  isContainer: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  selected: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  locationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  isInvisible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  loadMoreSubitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  subitemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  subitemsLoadLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  treeMaxDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  afterItemToggle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  isRootItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  indent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
ListItem.defaultProps = {
  children: null,
  hidden: false,
  isRootItem: false,
  onClick: function onClick() {},
  subitemsLoadLimit: null,
  indent: 0
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list/list.component.js":
/*!************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list/list.component.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-item/list.item.component */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/list-item/list.item.component.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _window = window,
    Translator = _window.Translator;

var List = function List(_ref) {
  var items = _ref.items,
      loadMoreSubitems = _ref.loadMoreSubitems,
      currentLocationId = _ref.currentLocationId,
      path = _ref.path,
      subitemsLoadLimit = _ref.subitemsLoadLimit,
      subitemsLimit = _ref.subitemsLimit,
      treeMaxDepth = _ref.treeMaxDepth,
      afterItemToggle = _ref.afterItemToggle,
      indent = _ref.indent,
      isRoot = _ref.isRoot,
      onClickItem = _ref.onClickItem;
  var commonAttrs = {
    loadMoreSubitems: loadMoreSubitems,
    subitemsLoadLimit: subitemsLoadLimit,
    subitemsLimit: subitemsLimit,
    treeMaxDepth: treeMaxDepth,
    afterItemToggle: afterItemToggle,
    onClickItem: onClickItem
  };

  var listAttrs = _objectSpread(_objectSpread({}, commonAttrs), {}, {
    currentLocationId: currentLocationId
  });

  var listItemAttrs = commonAttrs;

  var renderNoSubitemMessage = function renderNoSubitemMessage() {
    var _items = _slicedToArray(items, 1),
        rootLocation = _items[0];

    var isRootLoaded = rootLocation;
    var noSubitemsMessage = Translator.trans(
    /*@Desc("This Location has no sub-items")*/
    'no_subitems', {}, 'content_tree');

    if (!isRoot || !isRootLoaded || rootLocation.subitems && rootLocation.subitems.length) {
      return;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-list__no-items-message"
    }, noSubitemsMessage);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "c-list"
  }, items.map(function (item) {
    var hasPreviousPath = path && path.length;
    var locationHref = window.Routing.generate('ibexa.content.view', {
      contentId: item.contentId,
      locationId: item.locationId
    });
    var itemPath = "".concat(hasPreviousPath ? "".concat(path, ",") : '').concat(item.locationId);
    var subitems = item.subitems;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, item, listItemAttrs, {
      key: item.locationId,
      selected: item.locationId === currentLocationId,
      href: locationHref,
      isRootItem: isRoot,
      onClick: onClickItem.bind(null, item),
      path: itemPath,
      indent: indent
    }), subitems.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(List, _extends({
      path: itemPath,
      items: subitems,
      isRoot: false,
      indent: indent + 1
    }, listAttrs)) : renderNoSubitemMessage());
  }));
};

List.propTypes = {
  path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  loadMoreSubitems: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  currentLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  subitemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  subitemsLoadLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  treeMaxDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  afterItemToggle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  indent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  isRoot: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onClickItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
List.defaultProps = {
  indent: 0,
  isRoot: false,
  onClickItem: function onClickItem() {},
  subitemsLoadLimit: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/popup-actions/popup.actions.js":
/*!********************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/popup-actions/popup.actions.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/icon/icon */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/icon/icon.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var PopupActions = function PopupActions(_ref) {
  var listRef = _ref.listRef,
      options = _ref.options;
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var containerItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isExpanded = _useState2[0],
      setIsExpanded = _useState2[1];

  var toggleExpanded = function toggleExpanded() {
    setIsExpanded(function (prevState) {
      return !prevState;
    });
  };

  var getHeaderActions = function getHeaderActions() {
    var headerActions = window.ibexa.adminUiConfig.contentTreeWidget.headerActions;

    if (!headerActions) {
      return [];
    }

    return _toConsumableArray(headerActions).sort(function (headerActionA, headerActionB) {
      return headerActionB.priority - headerActionA.priority;
    });
  };

  var renderItem = function renderItem(item) {
    var Component = item.component;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "c-popup-actions__item",
      key: item.id,
      onClick: toggleExpanded
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null));
  };

  var renderItemsList = function renderItemsList() {
    var itemsStyles = {};
    var allOptions = [].concat(_toConsumableArray(options), _toConsumableArray(getHeaderActions()));

    if (containerRef.current) {
      var _containerRef$current = containerRef.current.getBoundingClientRect(),
          left = _containerRef$current.left,
          top = _containerRef$current.top,
          height = _containerRef$current.height;

      itemsStyles.left = left;
      itemsStyles.top = top + height + 8;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "c-popup-actions__items",
      style: itemsStyles,
      ref: containerItemsRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "c-popup-actions__items-list"
    }, allOptions.map(renderItem)));
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isExpanded) {
      return;
    }

    var onInteractionOutside = function onInteractionOutside(event) {
      if (containerRef.current.contains(event.target) || containerItemsRef.current.contains(event.target)) {
        return;
      }

      setIsExpanded(false);
    };

    document.body.addEventListener('click', onInteractionOutside, false);
    return function () {
      document.body.removeEventListener('click', onInteractionOutside, false);
    };
  }, [isExpanded]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "c-popup-actions",
    ref: containerRef,
    onClick: toggleExpanded
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "options",
    extraClasses: "ibexa-icon--small"
  })), isExpanded && /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default().createPortal(renderItemsList(), listRef.current));
};

PopupActions.propTypes = {
  listRef: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupActions);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentTreeModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_content_tree_content_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/content-tree/content.tree */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/components/content-tree/content.tree.js");
/* harmony import */ var _services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/content.tree.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/services/content.tree.service.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var _window = window,
    ibexa = _window.ibexa;
var KEY_CONTENT_TREE_SUBTREE = 'ibexa-content-tree-subtrees';

var ContentTreeModule = /*#__PURE__*/function (_Component) {
  _inherits(ContentTreeModule, _Component);

  var _super = _createSuper(ContentTreeModule);

  function ContentTreeModule(props) {
    var _this;

    _classCallCheck(this, ContentTreeModule);

    _this = _super.call(this, props);
    _this.setInitialItemsState = _this.setInitialItemsState.bind(_assertThisInitialized(_this));
    _this.loadMoreSubitems = _this.loadMoreSubitems.bind(_assertThisInitialized(_this));
    _this.updateSubtreeAfterItemToggle = _this.updateSubtreeAfterItemToggle.bind(_assertThisInitialized(_this));
    _this.handleCollapseAllItems = _this.handleCollapseAllItems.bind(_assertThisInitialized(_this));
    _this.limitSubitemsInSubtree = _this.limitSubitemsInSubtree.bind(_assertThisInitialized(_this));
    _this.refreshContentTree = _this.refreshContentTree.bind(_assertThisInitialized(_this));
    _this.getLoadSubtreeParams = _this.getLoadSubtreeParams.bind(_assertThisInitialized(_this));

    try {
      var savedSubtree = _this.readSubtree();

      _this.items = props.preloadedLocations;
      _this.subtree = savedSubtree ? savedSubtree : _this.generateInitialSubtree();

      _this.expandCurrentLocationInSubtree();

      _this.clipTooDeepSubtreeBranches(_this.subtree[0], props.treeMaxDepth - 1);

      _this.subtree[0].children.forEach(_this.limitSubitemsInSubtree);

      _this.saveSubtree();
    } catch (error) {
      _this.items = [];
      _this.subtree = _this.generateInitialSubtree();

      _this.saveSubtree();
    }

    return _this;
  }

  _createClass(ContentTreeModule, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      document.body.addEventListener('ibexa-content-tree-refresh', this.refreshContentTree, false);

      if (this.items.length) {
        this.subtree = this.generateSubtree(this.items, true);
        this.saveSubtree();
        return;
      }

      (0,_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.loadSubtree)(this.getLoadSubtreeParams(), function (loadedSubtree) {
        _this2.setInitialItemsState(loadedSubtree[0]);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      if (prevProps.sort.sortClause !== this.props.sort.sortClause || prevProps.sort.sortOrder !== this.props.sort.sortOrder) {
        (0,_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.loadSubtree)(this.getLoadSubtreeParams(), function (loadedSubtree) {
          _this3.setInitialItemsState(loadedSubtree[0]);
        });
      }
    }
  }, {
    key: "setInitialItemsState",
    value: function setInitialItemsState(location) {
      this.items = [location];
      this.subtree = this.generateSubtree(this.items, true);
      this.saveSubtree();
      this.forceUpdate();
    }
  }, {
    key: "loadMoreSubitems",
    value: function loadMoreSubitems(_ref, successCallback) {
      var parentLocationId = _ref.parentLocationId,
          offset = _ref.offset,
          limit = _ref.limit,
          path = _ref.path;
      (0,_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.loadLocationItems)(this.props.restInfo, parentLocationId, this.updateLocationsStateAfterLoadingMoreItems.bind(this, path, successCallback), limit, offset);
    }
  }, {
    key: "refreshContentTree",
    value: function refreshContentTree() {
      var _this4 = this;

      this.items = [];
      this.forceUpdate();
      (0,_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.loadSubtree)(this.getLoadSubtreeParams(), function (loadedSubtree) {
        _this4.setInitialItemsState(loadedSubtree[0]);
      });
    }
  }, {
    key: "updateLocationsStateAfterLoadingMoreItems",
    value: function updateLocationsStateAfterLoadingMoreItems(path, successCallback, location) {
      var item = this.findItem(this.items, path.split(','));

      if (!item) {
        return;
      }

      item.subitems = [].concat(_toConsumableArray(item.subitems), _toConsumableArray(location.subitems));
      this.updateSubtreeAfterLoadMoreItems(path);
      successCallback();
      this.forceUpdate();
    }
  }, {
    key: "updateSubtreeAfterLoadMoreItems",
    value: function updateSubtreeAfterLoadMoreItems(path) {
      var item = this.findItem(this.items, path.split(','));
      this.updateItemInSubtree(this.subtree[0], item, path.split(','));
      this.saveSubtree();
    }
  }, {
    key: "updateSubtreeAfterItemToggle",
    value: function updateSubtreeAfterItemToggle(path, isExpanded) {
      var item = this.findItem(this.items, path.split(','));

      if (isExpanded) {
        this.addItemToSubtree(this.subtree[0], item, path.split(','));
      } else {
        this.removeItemFromSubtree(this.subtree[0], item, path.split(','));
      }

      this.saveSubtree();
      this.props.afterItemToggle(item, isExpanded);
    }
  }, {
    key: "addItemToSubtree",
    value: function addItemToSubtree(subtree, item, path) {
      var parentSubtree = this.findParentSubtree(subtree, path);

      if (!parentSubtree) {
        return;
      }

      var _this$props = this.props,
          subitemsLoadLimit = _this$props.subitemsLoadLimit,
          subitemsLimit = _this$props.subitemsLimit;
      var limit = Math.ceil(item.subitems.length / subitemsLoadLimit) * subitemsLoadLimit;
      parentSubtree.children.push({
        '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequestNode',
        locationId: item.locationId,
        limit: Math.min(subitemsLimit, limit),
        offset: 0,
        children: []
      });
    }
  }, {
    key: "removeItemFromSubtree",
    value: function removeItemFromSubtree(subtree, item, path) {
      var parentSubtree = this.findParentSubtree(subtree, path);

      if (!parentSubtree) {
        return;
      }

      var index = parentSubtree.children.findIndex(function (element) {
        return element.locationId === item.locationId;
      });

      if (index > -1) {
        parentSubtree.children.splice(index, 1);
      }
    }
  }, {
    key: "updateItemInSubtree",
    value: function updateItemInSubtree(subtree, item, path) {
      var parentSubtree = this.findParentSubtree(subtree, path);

      if (!parentSubtree) {
        return;
      }

      var index = parentSubtree.children.findIndex(function (element) {
        return element.locationId === item.locationId;
      });

      if (index > -1) {
        parentSubtree.children[index].limit = item.subitems.length;
      }
    }
  }, {
    key: "readSubtree",
    value: function readSubtree() {
      var readSubtree = this.props.readSubtree;

      if (typeof readSubtree === 'function') {
        return readSubtree();
      }

      var _this$props2 = this.props,
          rootLocationId = _this$props2.rootLocationId,
          userId = _this$props2.userId;
      var savedSubtrees = localStorage.getItem(KEY_CONTENT_TREE_SUBTREE);
      var subtrees = savedSubtrees ? JSON.parse(savedSubtrees) : null;
      var userSubtrees = subtrees ? subtrees[userId] : null;
      var savedSubtree = userSubtrees ? userSubtrees[rootLocationId] : null;
      var subtree = savedSubtree ? JSON.parse(savedSubtree) : null;
      return subtree;
    }
  }, {
    key: "saveSubtree",
    value: function saveSubtree() {
      var _this$props3 = this.props,
          rootLocationId = _this$props3.rootLocationId,
          userId = _this$props3.userId;
      var savedSubtreesStringified = localStorage.getItem(KEY_CONTENT_TREE_SUBTREE);
      var subtrees = savedSubtreesStringified ? JSON.parse(savedSubtreesStringified) : {};

      if (!subtrees[userId]) {
        subtrees[userId] = {};
      }

      subtrees[userId][rootLocationId] = JSON.stringify(this.subtree);
      localStorage.setItem(KEY_CONTENT_TREE_SUBTREE, JSON.stringify(subtrees));
    }
  }, {
    key: "findParentSubtree",
    value: function findParentSubtree(subtree, path) {
      if (path.length < 2) {
        return;
      }

      path.shift();
      path.pop();
      return path.reduce(function (subtreeChild, locationId) {
        return subtreeChild.children.find(function (element) {
          return element.locationId === parseInt(locationId, 10);
        });
      }, subtree);
    }
  }, {
    key: "expandCurrentLocationInSubtree",
    value: function expandCurrentLocationInSubtree() {
      var _this$props4 = this.props,
          rootLocationId = _this$props4.rootLocationId,
          currentLocationPath = _this$props4.currentLocationPath;
      var path = currentLocationPath.split('/').filter(function (id) {
        return !!id;
      });
      var rootLocationIdIndex = path.findIndex(function (element) {
        return parseInt(element, 10) === rootLocationId;
      });

      if (rootLocationIdIndex === -1) {
        return;
      }

      var pathStartingAfterRootLocation = path.slice(rootLocationIdIndex - path.length + 1);
      var pathWithoutLeaf = pathStartingAfterRootLocation.slice(0, pathStartingAfterRootLocation.length - 1);
      this.expandPathInSubtree(this.subtree[0], pathWithoutLeaf);
    }
  }, {
    key: "expandPathInSubtree",
    value: function expandPathInSubtree(subtree, path) {
      if (!path.length) {
        return;
      }

      var locationId = parseInt(path[0], 10);
      var nextSubtree = subtree.children.find(function (element) {
        return element.locationId === locationId;
      });

      if (!nextSubtree) {
        nextSubtree = {
          '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequestNode',
          locationId: locationId,
          limit: this.props.subitemsLimit,
          offset: 0,
          children: []
        };
        subtree.children.push(nextSubtree);
      }

      path.shift();
      this.expandPathInSubtree(nextSubtree, path);
    }
  }, {
    key: "clipTooDeepSubtreeBranches",
    value: function clipTooDeepSubtreeBranches(subtree, maxDepth) {
      var _this5 = this;

      if (maxDepth <= 0) {
        subtree.children = [];
        return;
      }

      subtree.children.forEach(function (subtreeChild) {
        return _this5.clipTooDeepSubtreeBranches(subtreeChild, maxDepth - 1);
      });
    }
  }, {
    key: "limitSubitemsInSubtree",
    value: function limitSubitemsInSubtree(subtree) {
      subtree.limit = Math.min(this.props.subitemsLimit, subtree.limit);
      subtree.children.forEach(this.limitSubitemsInSubtree);
    }
  }, {
    key: "generateInitialSubtree",
    value: function generateInitialSubtree() {
      return [{
        '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequestNode',
        locationId: this.props.rootLocationId,
        limit: this.props.subitemsLoadLimit,
        offset: 0,
        children: []
      }];
    }
  }, {
    key: "generateSubtree",
    value: function generateSubtree(items, isRoot) {
      var itemsWithoutLeafs = [];
      var _this$props5 = this.props,
          subitemsLoadLimit = _this$props5.subitemsLoadLimit,
          subitemsLimit = _this$props5.subitemsLimit;

      var _iterator = _createForOfIteratorHelper(items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var subitemsCount = item.subitems.length;
          var isLeaf = !subitemsCount;

          if (!isLeaf || isRoot) {
            var limit = subitemsCount ? Math.ceil(subitemsCount / subitemsLoadLimit) * subitemsLoadLimit : subitemsLoadLimit;
            itemsWithoutLeafs.push({
              '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequestNode',
              locationId: item.locationId,
              limit: Math.min(subitemsLimit, limit),
              offset: 0,
              children: this.generateSubtree(item.subitems, false)
            });
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return itemsWithoutLeafs;
    }
  }, {
    key: "findItem",
    value: function findItem(items, path) {
      var isLast = path.length === 1;
      var item = items.find(function (element) {
        return element.locationId === parseInt(path[0], 10);
      });

      if (!item) {
        return null;
      }

      if (isLast) {
        return item;
      }

      if (!(Object.prototype.hasOwnProperty.call(item, 'subitems') && Array.isArray(item.subitems))) {
        return null;
      }

      path.shift();
      return this.findItem(item.subitems, path);
    }
  }, {
    key: "getCurrentLocationId",
    value: function getCurrentLocationId() {
      var currentLocationIdString = this.props.currentLocationPath.split('/').filter(function (id) {
        return !!id;
      }).pop();
      return parseInt(currentLocationIdString, 10);
    }
  }, {
    key: "handleCollapseAllItems",
    value: function handleCollapseAllItems() {
      var _this6 = this;

      this.items = [];
      this.forceUpdate();
      this.subtree = this.generateInitialSubtree();
      this.saveSubtree();
      (0,_services_content_tree_service__WEBPACK_IMPORTED_MODULE_3__.loadSubtree)(this.getLoadSubtreeParams(), function (loadedSubtree) {
        _this6.setInitialItemsState(loadedSubtree[0]);
      });
    }
  }, {
    key: "getLoadSubtreeParams",
    value: function getLoadSubtreeParams() {
      return {
        token: this.props.restInfo.token,
        siteaccess: this.props.restInfo.siteaccess,
        subtree: this.subtree,
        sortClause: this.props.sort.sortClause,
        sortOrder: this.props.sort.sortOrder
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          onClickItem = _this$props6.onClickItem,
          subitemsLimit = _this$props6.subitemsLimit,
          subitemsLoadLimit = _this$props6.subitemsLoadLimit,
          treeMaxDepth = _this$props6.treeMaxDepth,
          userId = _this$props6.userId,
          resizable = _this$props6.resizable;
      var attrs = {
        items: this.items,
        currentLocationId: this.getCurrentLocationId(),
        subitemsLimit: subitemsLimit,
        subitemsLoadLimit: subitemsLoadLimit,
        treeMaxDepth: treeMaxDepth,
        loadMoreSubitems: this.loadMoreSubitems,
        afterItemToggle: this.updateSubtreeAfterItemToggle,
        onCollapseAllItems: this.handleCollapseAllItems,
        onClickItem: onClickItem,
        userId: userId,
        resizable: resizable
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_content_tree_content_tree__WEBPACK_IMPORTED_MODULE_2__["default"], attrs);
    }
  }]);

  return ContentTreeModule;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


ibexa.addConfig('modules.ContentTree', ContentTreeModule);
ContentTreeModule.propTypes = {
  rootLocationId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  currentLocationPath: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  userId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  preloadedLocations: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)),
  subitemsLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  subitemsLoadLimit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  treeMaxDepth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  restInfo: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    token: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    siteaccess: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
  }).isRequired,
  onClickItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  readSubtree: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  afterItemToggle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  sort: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    sortClause: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    sortOrder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
  }),
  resizable: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
ContentTreeModule.defaultProps = {
  preloadedLocations: [],
  rootLocationId: ibexa.adminUiConfig.contentTree.treeRootLocationId,
  subitemsLimit: ibexa.adminUiConfig.contentTree.childrenLoadMaxLimit,
  subitemsLoadLimit: ibexa.adminUiConfig.contentTree.loadMoreLimit,
  treeMaxDepth: ibexa.adminUiConfig.contentTree.treeMaxDepth,
  afterItemToggle: function afterItemToggle() {},
  sort: {},
  resizable: true,
  onClickItem: function onClickItem() {},
  readSubtree: null
};

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/services/content.tree.service.js":
/*!***********************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/services/content.tree.service.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadLocationItems": () => (/* binding */ loadLocationItems),
/* harmony export */   "loadSubtree": () => (/* binding */ loadSubtree)
/* harmony export */ });
/* harmony import */ var _common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/helpers/request.helper */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/helpers/request.helper.js");
/* harmony import */ var _common_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services/notification.service */ "./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/common/services/notification.service.js");


var ENDPOINT_LOAD_SUBITEMS = '/api/ibexa/v2/location/tree/load-subitems';
var ENDPOINT_LOAD_SUBTREE = '/api/ibexa/v2/location/tree/load-subtree';
var loadLocationItems = function loadLocationItems(_ref, parentLocationId, callback) {
  var siteaccess = _ref.siteaccess;
  var limit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;
  var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var request = new Request("".concat(ENDPOINT_LOAD_SUBITEMS, "/").concat(parentLocationId, "/").concat(limit, "/").concat(offset), {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/vnd.ibexa.api.ContentTreeNode+json',
      'X-Siteaccess': siteaccess
    }
  });
  fetch(request).then(_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (data) {
    var location = data.ContentTreeNode;
    location.children = location.children.map(mapChildrenToSubitems);
    return mapChildrenToSubitems(location);
  }).then(callback)["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.showErrorNotification);
};
var loadSubtree = function loadSubtree(_ref2, callback) {
  var token = _ref2.token,
      siteaccess = _ref2.siteaccess,
      subtree = _ref2.subtree,
      sortClause = _ref2.sortClause,
      sortOrder = _ref2.sortOrder;
  var path = ENDPOINT_LOAD_SUBTREE;

  if (sortClause && sortOrder) {
    path += "?sortClause=".concat(sortClause, "&sortOrder=").concat(sortOrder);
  }

  var request = new Request(path, {
    method: 'POST',
    mode: 'same-origin',
    credentials: 'same-origin',
    body: JSON.stringify({
      LoadSubtreeRequest: {
        '_media-type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequest',
        nodes: subtree
      }
    }),
    headers: {
      Accept: 'application/vnd.ibexa.api.ContentTreeRoot+json',
      'Content-Type': 'application/vnd.ibexa.api.ContentTreeLoadSubtreeRequest+json',
      'X-Siteaccess': siteaccess,
      'X-CSRF-Token': token
    }
  });
  fetch(request).then(_common_helpers_request_helper__WEBPACK_IMPORTED_MODULE_0__.handleRequestResponse).then(function (data) {
    var loadedSubtree = data.ContentTreeRoot.ContentTreeNodeList;
    return mapChildrenToSubitemsDeep(loadedSubtree);
  }).then(callback)["catch"](_common_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.showErrorNotification);
};

var mapChildrenToSubitemsDeep = function mapChildrenToSubitemsDeep(tree) {
  return tree.map(function (subtree) {
    mapChildrenToSubitems(subtree);
    subtree.subitems = mapChildrenToSubitemsDeep(subtree.subitems);
    return subtree;
  });
};

var mapChildrenToSubitems = function mapChildrenToSubitems(location) {
  location.totalSubitemsCount = location.totalChildrenCount;
  location.subitems = location.children;
  delete location.totalChildrenCount;
  delete location.children;
  delete location.displayLimit;
  return location;
};

/***/ }),

/***/ "prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/***/ ((module) => {

module.exports = PropTypes;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = ReactDOM;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/ui-dev/src/modules/content-tree/content.tree.module.js"));
/******/ }
]);