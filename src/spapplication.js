function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Utils =
/*#__PURE__*/
function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: "isDefined",
    value: function isDefined(value) {
      return typeof value !== 'undefined';
    }
  }, {
    key: "isFunction",
    value: function isFunction(value) {
      return typeof value === 'function';
    }
  }, {
    key: "isString",
    value: function isString(value) {
      return typeof value === 'string';
    }
  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return typeof value !== 'number';
    }
  }, {
    key: "isDefinedAndNotNull",
    value: function isDefinedAndNotNull(value) {
      return instance.isDefined(value) && value !== null;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return !instance.isDefined(value) || value === null || value === '';
    }
  }]);

  return Utils;
}();

var instance = new Utils();
Object.freeze(instance);

var SVGService = function SVGService() {
  _classCallCheck(this, SVGService);
};

SVGService.NAME_SPACE_URI = 'http://www.w3.org/2000/svg';
SVGService.CIRCLE = 'circle';
SVGService.TEXT = 'text';
SVGService.TSPAN = 'tspan';
var instance$1 = new SVGService();
Object.freeze(SVGService);

var VisualElementEvent = function VisualElementEvent(type) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _classCallCheck(this, VisualElementEvent);

  this.type = type;
  this.data = data;
};

VisualElementEvent.WIDTH_CHANGED = 'widthChanged';
VisualElementEvent.HEIGHT_CHANGED = 'heightChanged';
VisualElementEvent.LEFT_CHANGED = 'leftChanged';
VisualElementEvent.RIGHT_CHANGED = 'rightChanged';
VisualElementEvent.TOP_CHANGED = 'topChanged';
VisualElementEvent.BOTTOM_CHANGED = 'bottomChanged';

/**
 *
 * @constructor
 */

var DOMService =
/*#__PURE__*/
function () {
  function DOMService() {
    _classCallCheck(this, DOMService);
  }

  _createClass(DOMService, [{
    key: "getElementsByClassName",
    value: function getElementsByClassName(element, className) {
      if (!element) {
        return null;
      }

      return element.querySelector('.' + className);
    }
    /**
     * @param {string} className
     * @returns {HTMLElement}
     */

  }, {
    key: "createSpanElement",
    value: function createSpanElement(className) {
      var divElement = document.createElement(DOMService.SPAN);

      if (className) {
        divElement.className = className;
      }

      return divElement;
    }
    /**
     * @param {string} id
     * @param {string} className
     * @returns {HTMLElement}
     */

  }, {
    key: "createSpanElementWithIDAndClassName",
    value: function createSpanElementWithIDAndClassName(id, className) {
      var spanElement = document.createElement(DOMService.SPAN);
      spanElement.id = id;
      spanElement.className = className;
      return spanElement;
    }
    /**
     * @param {string} id
     * @param {string} className
     * @returns {HTMLElement}
     */

  }, {
    key: "createDivElementWithIDAndClassName",
    value: function createDivElementWithIDAndClassName(id, className) {
      var divElement = document.createElement(DOMService.DIV);
      divElement.id = id;
      divElement.className = className;
      return divElement;
    }
    /**
     * @param {string} id
     * @param {string} className
     * @returns {HTMLElement}
     */

  }, {
    key: "createCanvasElement",
    value: function createCanvasElement(id, className) {
      var canvasElement = document.createElement('canvas');

      if (id) {
        canvasElement.id = id;
      }

      if (className) {
        canvasElement.className = className;
      }

      return canvasElement;
    }
    /**
     * @param {string} className
     * @returns {HTMLElement}
     */

  }, {
    key: "createElement",
    value: function createElement(className) {
      var divElement = document.createElement(DOMService.DIV);

      if (className) {
        divElement.className = className;
      }

      return divElement;
    }
    /**
     * @memberOf DOMService
     * @param {HTMLElement} parentElement
     * @param {string} className
     * @returns {HTMLElement}
     */

  }, {
    key: "addDivElement",
    value: function addDivElement(parentElement, className) {
      if (!parentElement) {
        return null;
      }

      var child = instance$2.createDivElement(className);
      parentElement.appendChild(child);
      return child;
    }
  }, {
    key: "appendSpanElement",
    value: function appendSpanElement(parent) {
      var child = instance$2.createSpanElement();
      parent.appendChild(child);
      return child;
    }
  }, {
    key: "appendChildElement",
    value: function appendChildElement(parent, child) {
      if (!parent || !child) {
        return;
      }

      parent.appendChild(child);
    }
  }, {
    key: "appendChildVisualElement",
    value: function appendChildVisualElement(parent, childVisualElement) {
      parent.appendChild(childVisualElement.getDOMElement());
    }
  }, {
    key: "appendVisualElement",
    value: function appendVisualElement(parent, childVisualElement) {
      parent.getDOMElement().appendChild(childVisualElement.getDOMElement());
    }
  }, {
    key: "setWidth",
    value: function setWidth(element, width) {
      if (!element) {
        return;
      }

      element.getDOMElement().style.width = width + DOMService.PIXELS;
      element.dispatch(VisualElementEvent.WIDTH_CHANGED, width);
    }
  }, {
    key: "setWidthAsCalcPercentage",
    value: function setWidthAsCalcPercentage(element, width) {
      if (!element) {
        return;
      }

      element.getDOMElement().style.width = 'calc(100%  - ' + width + DOMService.PIXELS + ')';
      element.dispatch(VisualElementEvent.WIDTH_CHANGED, width);
    }
  }, {
    key: "setHeight",
    value: function setHeight(element, height) {
      if (!element) {
        return;
      }

      element.getDOMElement().style.height = height + DOMService.PIXELS;
      element.dispatch(VisualElementEvent.HEIGHT_CHANGED, height);
    }
  }, {
    key: "setHeightAsCalcPercentage",
    value: function setHeightAsCalcPercentage(element, height) {
      if (!element) {
        return;
      }

      element.getDOMElement().style.height = 'calc(100%  - ' + height + DOMService.PIXELS + ')';
      element.dispatch(VisualElementEvent.HEIGHT_CHANGED, height);
    }
  }, {
    key: "setText",
    value: function setText(element, text) {
      if (!element) {
        return;
      }

      text = instance.isEmpty(text) ? '' : text;
      var textUpdated = false;

      if (element.childNodes.length) {
        for (var nodes = element.childNodes, i = nodes.length; i--;) {
          var node = nodes[i];
          var nodeType = node.nodeType;

          if (nodeType === DOMService.TEXT_NODE_TYPE_ID) {
            if (node.nodeValue !== text) {
              node.nodeValue = text;
              textUpdated = true;
              break;
            }
          }
        }
      }

      if (textUpdated) {
        return;
      }

      var textNode = document.createTextNode(text);
      element.appendChild(textNode);
    }
  }, {
    key: "visible",
    value: function visible(element, display) {
      if (!element) {
        return;
      } // if (display && display === true) {
      //     display = DOMService.DISPLAY_ELEMENT;
      // }


      var domeElementStyle = element.getDOMElement().style;
      domeElementStyle.display = display ? DOMService.DISPLAY_ELEMENT : DOMService.DISPLAY_ELEMENT_NONE;
    }
  }, {
    key: "translate",
    value: function translate(element, x, y) {
      if (!element) {
        return;
      }

      element.style.transform = 'translate3d(' + x + DOMService.PIXELS + ',' + y + DOMService.PIXELS + ',' + DOMService.ZERO_PIXELS + ')';
    }
  }, {
    key: "setZIndex",
    value: function setZIndex(element, index) {
      if (!element) {
        return;
      }

      element.getDOMElement().style.zIndex = index + '';
    }
  }, {
    key: "createSVGElement",
    value: function createSVGElement(id, className) {
      var svgElement = document.createElementNS(SVGService.NAME_SPACE_URI, 'svg');
      svgElement.id = id; //svgElement.class = className;

      return svgElement;
    }
  }, {
    key: "createSVGChildElement",
    value: function createSVGChildElement(id, drawingName) {
      var newSVGElement = document.createElementNS(SVGService.NAME_SPACE_URI, drawingName);
      newSVGElement.id = id;
      return newSVGElement;
    }
  }, {
    key: "addSVGChildElement",
    value: function addSVGChildElement(svgElement, drawingName, id, className) {
      var newSVGElement = document.createElementNS(SVGService.NAME_SPACE_URI, drawingName);
      newSVGElement.id = id; //newSVGElement.class = className;

      svgElement.addChild(newSVGElement);
      return newSVGElement;
    }
  }, {
    key: "addSVGChildElementWithFullWidthAndHeight",
    value: function addSVGChildElementWithFullWidthAndHeight(svgElement, drawingName, id, className) {
      var newSVGElement = document.createElementNS(SVGService.NAME_SPACE_URI, drawingName);
      newSVGElement.id = id; //newSVGElement.class = className;

      svgElement.addChild(newSVGElement);
      return newSVGElement;
    }
  }, {
    key: "setSVGPercentWidthAndHeight",
    value: function setSVGPercentWidthAndHeight(svgVisualElement, widthInPercent, heightInPercent) {
      var svgElement = svgVisualElement.getDOMElement();
      svgElement.setAttributeNS(null, DOMService.SVG_ATTRIBUTE_WIDTH, widthInPercent);
      svgElement.setAttributeNS(null, DOMService.SVG_ATTRIBUTE_HEIGHT, heightInPercent);
    }
  }, {
    key: "setSVGText",
    value: function setSVGText(svgVisualElement, text) {
      svgVisualElement.getDOMElement().setAttribute(SVGService.TEXT, text);
    }
  }, {
    key: "setSVGWidth",
    value: function setSVGWidth(svgVisualElement, width) {
      svgVisualElement.getDOMElement().setAttribute(DOMService.SVG_ATTRIBUTE_WIDTH, width);
    }
  }, {
    key: "setSVGHeight",
    value: function setSVGHeight(svgVisualElement, height) {
      svgVisualElement.getDOMElement().setAttribute(DOMService.SVG_ATTRIBUTE_HEIGHT, height);
    }
  }, {
    key: "setFillColor",
    value: function setFillColor(visualElement, color) {
      visualElement.getDOMElement().style.backgroundColor = color;
    }
  }, {
    key: "setSVGTextColor",
    value: function setSVGTextColor(visualElement, color) {
      visualElement.getDOMElement().setAttribute(DOMService.SVG_ATTRIBUTE_COLOR, color);
    }
  }, {
    key: "setSVGTextFontSize",
    value: function setSVGTextFontSize(visualElement, fontSize) {
      visualElement.getDOMElement().setAttribute(DOMService.SVG_FONT_SIZE, fontSize);
    }
  }, {
    key: "setSVGPosition",
    value: function setSVGPosition(visualElement, x, y) {
      var svgElement = visualElement.getDOMElement();
      svgElement.setAttribute(DOMService.SVG_ATTRIBUTE_X, x);
      svgElement.setAttribute(DOMService.SVG_ATTRIBUTE_Y, y);
    }
  }, {
    key: "addclass",
    value: function addclass(visualElement, className) {
      if (!visualElement) {
        return;
      }

      var element = visualElement.getDOMElement();
      element.classList.add.call(element.classList, className);
    }
  }, {
    key: "removeclass",
    value: function removeclass(visualElement, className) {
      if (!visualElement) {
        return;
      }

      var element = visualElement.getDOMElement();
      element.classList.remove.call(element.classList, className);
    }
  }]);

  return DOMService;
}();

DOMService.DIV = 'DIV';
DOMService.SPAN = 'SPAN';
DOMService.TEXT_NODE_TYPE_ID = 3;
DOMService.PIXELS = 'px';
DOMService.ZERO_PIXELS = '0px';
DOMService.FULL_WIDTH_OR_HEIGHT_IN_PERCENT = '100%';
DOMService.SVG_ATTRIBUTE_WIDTH = 'width';
DOMService.SVG_ATTRIBUTE_HEIGHT = 'height';
DOMService.SVG_ATTRIBUTE_COLOR = 'fill';
DOMService.SVG_ATTRIBUTE_X = 'x';
DOMService.SVG_ATTRIBUTE_Y = 'y';
DOMService.SVG_FONT_SIZE = 'font-size';
DOMService.DISPLAY_ELEMENT = '';
DOMService.DISPLAY_ELEMENT_NONE = 'none';
var instance$2 = new DOMService();
Object.freeze(DOMService);

var _container = null;

function _setVisible(isVisible) {
  instance$2.visible(_container, isVisible);
}

var ElementManager =
/*#__PURE__*/
function () {
  function ElementManager() {
    _classCallCheck(this, ElementManager);
  }

  _createClass(ElementManager, [{
    key: "container",
    set: function set(element) {
      _container = element;

      _setVisible(false);
    }
  }]);

  return ElementManager;
}();

var DialogManager =
/*#__PURE__*/
function (_ElementManager) {
  _inherits(DialogManager, _ElementManager);

  function DialogManager() {
    _classCallCheck(this, DialogManager);

    return _possibleConstructorReturn(this, _getPrototypeOf(DialogManager).apply(this, arguments));
  }

  return DialogManager;
}(ElementManager);

var instance$3 = new DialogManager();

var DropDownManager =
/*#__PURE__*/
function (_ElementManager) {
  _inherits(DropDownManager, _ElementManager);

  function DropDownManager() {
    _classCallCheck(this, DropDownManager);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropDownManager).apply(this, arguments));
  }

  return DropDownManager;
}(ElementManager);

var instance$4 = new DropDownManager();

var ToolTipManager =
/*#__PURE__*/
function (_ElementManager) {
  _inherits(ToolTipManager, _ElementManager);

  function ToolTipManager() {
    _classCallCheck(this, ToolTipManager);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToolTipManager).apply(this, arguments));
  }

  return ToolTipManager;
}(ElementManager);

var instance$5 = new ToolTipManager();

var timeUniqueId = 1;

var UUIDUtils =
/*#__PURE__*/
function () {
  function UUIDUtils() {
    _classCallCheck(this, UUIDUtils);
  }

  _createClass(UUIDUtils, [{
    key: "createUUID",
    value: function createUUID() {
      var d = new Date().getTime();
      d += timeUniqueId;
      timeUniqueId++;
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
    }
  }]);

  return UUIDUtils;
}();

var instance$6 = new UUIDUtils();
Object.freeze(instance$6);

var EventsDispatcher =
/*#__PURE__*/
function () {
  function EventsDispatcher() {
    _classCallCheck(this, EventsDispatcher);

    this.events = {};
    this.eventsCollection = [];
  }

  _createClass(EventsDispatcher, [{
    key: "addListener",
    value: function addListener(event, callback) {
      // Check if the callback is not a function
      if (!instance.isFunction(callback)) {
        console.error("The listener callback must be a function, the given type is ".concat(_typeof(callback)));
        return false;
      } // Check if the event is not a string


      if (!instance.isString(event)) {
        console.error("The event name must be a string, the given type is ".concat(_typeof(event)));
        return false;
      } // Create the event if not exists


      if (this.events[event] === undefined) {
        this.events[event] = {
          listeners: []
        };
      }

      var listeners = this.events[event].listeners;
      listeners.push(callback);
      var eventId = instance$6.createUUID();
      var eventObj = {
        eventId: eventId,
        event: event,
        callback: callback,
        listeners: listeners
      };
      this.eventsCollection.push(eventObj);
      return eventId;
    }
  }, {
    key: "removeListener",
    value: function removeListener(eventId) {
      if (!eventId) {
        return;
      }

      var collectionLength = this.eventsCollection.length;
      var eventObj;
      var found;

      for (var i = 0; i < collectionLength; i++) {
        eventObj = this.eventsCollection[i];

        if (eventObj.eventId === eventId) {
          this.eventsCollection.splice(i, 1);
          found = true;
          break;
        }
      }

      if (!found) {
        return;
      }

      collectionLength = eventObj.listeners.length;
      var eventListener;
      var eventObjCallBack = eventObj.callback.toString();

      for (var _i = 0; _i < collectionLength; _i++) {
        eventListener = eventObj.listeners[_i];

        if (eventListener.toString() === eventObjCallBack) {
          eventObj.listeners.splice(_i, 1);
          break;
        }
      }
    }
    /*
    removeListener(event, callback) {
      // Check if this event not exists
      if (this.events[event] === undefined) {
        //console.error(`This event: ${event} does not exist`);
        return false;
      }
        this.events[event].listeners = this.events[event].listeners.filter(listener => {
        return listener.toString() !== callback.toString();
      });
    };
    */

  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      for (var _i2 = 0, _Object$entries = Object.entries(this.events); _i2 < _Object$entries.length; _i2++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 1),
            event = _Object$entries$_i[0];

        this.events[event].listeners.forEach(function (listener) {
        });
      }
    }
  }, {
    key: "dispatch",
    value: function dispatch(event, details) {
      // Check if this event not exists
      if (this.events[event] === undefined) {
        //console.error(`This event: ${event} does not exist`);
        return false;
      }

      this.events[event].listeners.forEach(function (listener) {
        listener(details);
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAllListeners();
      this.events = null;
      this.eventsCollection.length = 0;
      this.eventsCollection = null;
    }
  }]);

  return EventsDispatcher;
}();

var VisualElement =
/*#__PURE__*/
function (_EventsDispatcher) {
  _inherits(VisualElement, _EventsDispatcher);

  function VisualElement(className) {
    var _this;

    var callLifeCycleImmediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, VisualElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisualElement).call(this));
    _this.children = [];
    _this.uuid = instance$6.createUUID();
    _this.className = className;
    _this.domElement = null;
    _this.text = null;
    _this.x = 0;
    _this.y = 0;
    _this.minimiumDragX = 0;
    _this.minimiumDragY = 20;
    _this.minWidth = NaN;
    _this.minHeight = NaN;
    _this.width = NaN;
    _this.height = NaN;
    _this.resizeWidth = 0;
    _this.resizeHeight = 0;
    _this.adjustWidthAsParent = false;
    _this.adjustHeightAsParent = false;
    _this.index = -1;
    _this.visible = true;
    _this.parent = null;
    _this.DOMEventCollection = [];
    _this.windowDOMEventCollection = [];
    _this.classListCollection = [];
    _this.translatePosition = _this.translate.bind(_assertThisInitialized(_this));

    if (callLifeCycleImmediately) {
      _this.callLifeCycle();
    }

    return _this;
  }

  _createClass(VisualElement, [{
    key: "callLifeCycle",
    value: function callLifeCycle() {
      this.createDOMElement();
      this.createChildren();
      this.addEventListeners();
      this.attachChildren();
    }
  }, {
    key: "createDOMElement",
    value: function createDOMElement() {}
  }, {
    key: "createChildren",
    value: function createChildren() {}
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {}
  }, {
    key: "measure",
    value: function measure(width, height) {
      this.setDimension(width, height);
    }
  }, {
    key: "attachChildren",
    value: function attachChildren() {}
    /**
     *
     * @param {VisualElement} visualElement
     */

  }, {
    key: "addChild",
    value: function addChild(visualElement) {
      var updateDimension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var childIndex = this.children.indexOf(visualElement);

      if (childIndex < 0) {
        instance$2.appendChildVisualElement(this.domElement, visualElement);
        visualElement.parent = this;
        this.children.push(visualElement);
      }

      if (updateDimension) {
        this.updateDimension();
      }
    }
  }, {
    key: "setDimension",
    value: function setDimension(width, height) {
      this.updateWidth(width);
      this.updateHeight(height);
      /*
      Experimental feature
      this.width = width;
      this.height = height;
      this.domElement.style.cssText = 'width:' + width + 'px;height:' + height + 'px;';
      */

      this.updateDisplayList(this.width, this.height);
    }
  }, {
    key: "updateWidth",
    value: function updateWidth(width) {
      if (this.width !== width) {
        this.width = isNaN(this.minWidth) ? width : Math.max(width, this.minWidth);
        instance$2.setWidth(this, this.width);
      }
    }
  }, {
    key: "updateHeight",
    value: function updateHeight(height) {
      if (this.height !== height) {
        this.height = isNaN(this.minHeight) ? height : Math.max(height, this.minHeight);
        instance$2.setHeight(this, this.height);
      }
    }
  }, {
    key: "updateDisplayList",
    value: function updateDisplayList(width, height) {
      var childrenLength = this.children.length;

      for (var i = 0; i < childrenLength; i++) {
        var loopChildVisualElement = this.children[i];

        if (loopChildVisualElement.adjustWidthAsParent && (loopChildVisualElement.width !== width || loopChildVisualElement.height !== height)) {
          loopChildVisualElement.measure(width, height);
        }
      }
    }
  }, {
    key: "enableAutoAdjustWidthAndHeight",
    value: function enableAutoAdjustWidthAndHeight() {
      this.adjustWidthAsParent = true;
      this.adjustHeightAsParent = true;
    }
  }, {
    key: "enableAutoAdjustWidth",
    value: function enableAutoAdjustWidth() {
      this.adjustWidthAsParent = true;
    }
  }, {
    key: "enableAutoAdjustHeight",
    value: function enableAutoAdjustHeight() {
      this.adjustHeightAsParent = true;
    }
  }, {
    key: "setMinWidthAndHeight",
    value: function setMinWidthAndHeight(width, height) {
      this.minWidth = width;
      this.minHeight = height;
    }
  }, {
    key: "setMinWidth",
    value: function setMinWidth(width) {
      this.minWidth = width;
    }
  }, {
    key: "setMinHeight",
    value: function setMinHeight(height) {
      this.minHeight = height;
    }
  }, {
    key: "getDOMElement",
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: "removeChild",
    value: function removeChild(childVisualElement) {
      var childIndex = this.children.indexOf(childVisualElement);

      if (childIndex < 0) {
        return;
      }

      this.children.splice(childIndex, 1);
      childVisualElement.remove();
    }
  }, {
    key: "removeChildAndDestroy",
    value: function removeChildAndDestroy(childVisualElement) {
      var childIndex = this.children.indexOf(childVisualElement);

      if (childIndex < 0) {
        return;
      }

      this.children.splice(childIndex, 1);
      childVisualElement.destroy();
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.domElement) {
        this.domElement.remove();
        this.domElement = null;
      }

      this.parent = null;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.removeAllDOMEventListeners();
      this.DOMEventCollection.length = 0;
      this.DOMEventCollection = null;
      this.removeAllWindowDOMEventListeners();
      this.windowDOMEventCollection.length = 0;
      this.windowDOMEventCollection = null;
      this.classListCollection.length = 0;
      this.classListCollection = null;

      _get(_getPrototypeOf(VisualElement.prototype), "destroy", this).call(this);

      this.remove();
      var childrenLength = this.children.length;

      for (var i = 0; i < childrenLength; i++) {
        this.children[i].destroy();
      }

      this.children.length = 0;
      this.children = null;
    }
  }, {
    key: "addDOMEventListener",
    value: function addDOMEventListener(event, fn, useCapture) {
      var capture = instance.isDefinedAndNotNull(useCapture) && useCapture ? true : false;
      this.domElement.addEventListener(event, fn, capture);
      var eventId = instance$6.createUUID();
      var eventObj = {
        eventId: eventId,
        event: event,
        fn: fn,
        capture: capture
      };
      this.DOMEventCollection.push(eventObj);
      return eventId;
    }
  }, {
    key: "removeDOMEventListener",
    value: function removeDOMEventListener(eventIds) {
      if (!eventIds) {
        return;
      }

      var argsLength = eventIds.length;

      for (var argsIndex = 0; argsIndex < argsLength; argsIndex++) {
        var collectionLength = this.DOMEventCollection.length;
        var eventId = eventIds[argsIndex];
        var eventObj = void 0;
        var eventFound = void 0;

        for (var i = 0; i < collectionLength; i++) {
          eventObj = this.DOMEventCollection[i];

          if (eventObj.eventId === eventId) {
            this.DOMEventCollection.splice(i, 1);
            eventFound = true;
            break;
          }
        }

        if (eventFound) {
          this.domElement.removeEventListener(eventObj.event, eventObj.fn, eventObj.capture);
        }
      }
    }
  }, {
    key: "removeAllDOMEventListeners",
    value: function removeAllDOMEventListeners() {
      var domEventCollectionLength = this.DOMEventCollection.length;
      var eventObj;

      for (var i = 0; i < domEventCollectionLength; i++) {
        eventObj = this.DOMEventCollection[i];
        this.domElement.removeEventListener(eventObj.event, eventObj.fn, eventObj.capture);
      }
    }
  }, {
    key: "addWindowDOMEventListener",
    value: function addWindowDOMEventListener(event, fn, useCapture) {
      var capture = instance.isDefinedAndNotNull(useCapture) && useCapture ? true : false;
      window.addEventListener(event, fn, capture);
      var eventId = instance$6.createUUID();
      var eventObj = {
        eventId: eventId,
        event: event,
        fn: fn,
        capture: capture
      };
      this.windowDOMEventCollection.push(eventObj);
      return eventId;
    }
  }, {
    key: "removeWindowDOMEventListener",
    value: function removeWindowDOMEventListener() {
      for (var _len = arguments.length, eventIds = new Array(_len), _key = 0; _key < _len; _key++) {
        eventIds[_key] = arguments[_key];
      }

      if (!eventIds) {
        return;
      }

      var argsLength = eventIds.length;

      for (var argsIndex = 0; argsIndex < argsLength; argsIndex++) {
        var collectionLength = this.windowDOMEventCollection.length;
        var eventId = eventIds[argsIndex];
        var eventObj = void 0;
        var eventFound = void 0;

        for (var i = 0; i < collectionLength; i++) {
          eventObj = this.windowDOMEventCollection[i];

          if (eventObj.eventId === eventId) {
            this.windowDOMEventCollection.splice(i, 1);
            eventFound = true;
            break;
          }
        }

        if (eventFound) {
          window.removeEventListener(eventObj.event, eventObj.fn, eventObj.capture);
        }
      }
    }
  }, {
    key: "removeAllWindowDOMEventListeners",
    value: function removeAllWindowDOMEventListeners() {
      var domEventCollectionLength = this.windowDOMEventCollection.length;
      var eventObj;

      for (var i = 0; i < domEventCollectionLength; i++) {
        eventObj = this.windowDOMEventCollection[i];
        window.removeEventListener(eventObj.event, eventObj.fn, eventObj.capture);
      }
    }
  }, {
    key: "setText",
    value: function setText(text) {
      if (this.text === text) {
        return;
      }

      instance$2.setText(this.domElement, text);
      this.text = text;
    }
  }, {
    key: "translate",
    value: function translate() {
      instance$2.translate(this.domElement, this.x, this.y);
    }
  }, {
    key: "resizeDimension",
    value: function resizeDimension() {
      this.setDimension(this.resizeWidth, this.resizeHeight);
    }
  }, {
    key: "setIndex",
    value: function setIndex(index) {
      if (this.index === index) {
        return false;
      }

      this.index = index;
      instance$2.setZIndex(this, index);
      return true;
    }
  }, {
    key: "setVisible",
    value: function setVisible(visible) {
      if (this.visible === visible) {
        return;
      }

      this.visible = visible;
      instance$2.visible(this, visible);
    }
  }, {
    key: "setChildIndexAt",
    value: function setChildIndexAt(childVisualElement, index) {
      var childIndex = this.children.indexOf(childVisualElement);

      if (childIndex < 0) {
        return;
      }

      var childCurrentIndex = childVisualElement.index;
      var childrenLength = this.children.length;
      var currentChildVisualElement;

      for (var i = 0; i < childrenLength; i++) {
        var loopChildVisualElement = this.children[i];

        if (loopChildVisualElement.index === index) {
          currentChildVisualElement = loopChildVisualElement;
        }
      }

      if (currentChildVisualElement && childCurrentIndex >= 0) {
        currentChildVisualElement.setIndex(childCurrentIndex);
      }

      childVisualElement.setIndex(index);
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      if (this.x === x && this.y === y) {
        return;
      }

      this.x = x;
      this.y = y;
      requestAnimationFrame(this.translatePosition);
    }
  }, {
    key: "updateDimension",
    value: function updateDimension() {
      this.measure(this.width, this.height);
    }
  }, {
    key: "addClass",
    value: function addClass() {
      for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classNames[_key2] = arguments[_key2];
      }

      if (!classNames) {
        return;
      }

      var argsLength = classNames.length;

      for (var argsIndex = 0; argsIndex < argsLength; argsIndex++) {
        var className = classNames[argsIndex];

        if (instance.isEmpty(className) || className.trim() === '') {
          continue;
        }

        var classListCollectionLength = this.classListCollection.length;
        var found = false;

        for (var i = 0; i < classListCollectionLength; i++) {
          if (this.classListCollection[i] === className) {
            found = true;
            break;
          }
        }

        if (!found) {
          instance$2.addclass(this, className);
          this.classListCollection.push(className);
        }
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass() {
      for (var _len3 = arguments.length, classNames = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        classNames[_key3] = arguments[_key3];
      }

      if (!classNames) {
        return;
      }

      var argsLength = classNames.length;

      for (var argsIndex = 0; argsIndex < argsLength; argsIndex++) {
        var className = classNames[argsIndex];

        if (instance.isEmpty(className) || className.trim() === '') {
          continue;
        }

        var classListCollectionLength = this.classListCollection.length;

        for (var i = 0; i < classListCollectionLength; i++) {
          if (this.classListCollection[i] === className) {
            instance$2.removeclass(this, className);
            this.classListCollection.splice(i, 1);
            break;
          }
        }
      }
    }
  }]);

  return VisualElement;
}(EventsDispatcher);

VisualElement.BRING_TO_FRONT_ZINDEX = 1000;

/**
 *
 *  @constructor
 *  @param {string} className
 */

var VisualDivElement =
/*#__PURE__*/
function (_VisualElement) {
  _inherits(VisualDivElement, _VisualElement);

  function VisualDivElement(className) {
    var callLifeCycleImmediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, VisualDivElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(VisualDivElement).call(this, className, callLifeCycleImmediately));
  }

  _createClass(VisualDivElement, [{
    key: "createDOMElement",
    value: function createDOMElement() {
      this.domElement = instance$2.createDivElementWithIDAndClassName(this.uuid, this.className);
    }
  }]);

  return VisualDivElement;
}(VisualElement);

/**
 *
 *  @constructor
 */

var VisualBodyElement =
/*#__PURE__*/
function (_VisualDivElement) {
  _inherits(VisualBodyElement, _VisualDivElement);

  function VisualBodyElement(className) {
    var _this;

    _classCallCheck(this, VisualBodyElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VisualBodyElement).call(this, className));
    _this.noOfWindows = 0;
    return _this;
  }

  _createClass(VisualBodyElement, [{
    key: "createDOMElement",
    value: function createDOMElement() {
      this.domElement = instance$2.createDivElementWithIDAndClassName(this.uuid, this.className);
    }
  }, {
    key: "addToBody",
    value: function addToBody() {
      instance$2.appendChildElement(document.body, this.domElement);
    }
  }]);

  return VisualBodyElement;
}(VisualDivElement);

var VisualSpanElement =
/*#__PURE__*/
function (_VisualElement) {
  _inherits(VisualSpanElement, _VisualElement);

  function VisualSpanElement(className) {
    _classCallCheck(this, VisualSpanElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(VisualSpanElement).call(this, className));
  }

  _createClass(VisualSpanElement, [{
    key: "createChildren",
    value: function createChildren() {
      this.domElement = instance$2.createSpanElementWithIDAndClassName(this.uuid, this.className);
    }
  }]);

  return VisualSpanElement;
}(VisualElement);

var VisualMouseEvent = function VisualMouseEvent() {
  _classCallCheck(this, VisualMouseEvent);
};

VisualMouseEvent.CLICK = 'click';
VisualMouseEvent.MOUSE_DOWN = 'mousedown';
VisualMouseEvent.MOUSE_UP = 'mouseup';
VisualMouseEvent.MOUSE_MOVE = 'mousemove';
VisualMouseEvent.MOUSE_LEAVE = 'mouseleave';
VisualMouseEvent.MOUSE_WHEEL = 'wheel';

var NumberUtils =
/*#__PURE__*/
function () {
  function NumberUtils() {
    _classCallCheck(this, NumberUtils);
  }

  _createClass(NumberUtils, [{
    key: "truncate",
    value: function truncate(v) {
      v = +v;
      return v - v % 1 || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
    }
  }, {
    key: "round",
    value: function round(v) {
      return Math.round(v);
    }
  }]);

  return NumberUtils;
}();

var instance$7 = new NumberUtils();
Object.freeze(instance$7);

var SinglePagedApplicationWindowContainer =
/*#__PURE__*/
function (_VisualBodyElement) {
  _inherits(SinglePagedApplicationWindowContainer, _VisualBodyElement);

  function SinglePagedApplicationWindowContainer() {
    var _this;

    _classCallCheck(this, SinglePagedApplicationWindowContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SinglePagedApplicationWindowContainer).call(this, 'sp-application-container'));
    _this.taskWindowHeightChangeHandler = _this._taskWindowHeightChangeHandler.bind(_assertThisInitialized(_this));
    _this.taskWindowContainer = null;
    return _this;
  }

  _createClass(SinglePagedApplicationWindowContainer, [{
    key: "addTaskWindowContainer",
    value: function addTaskWindowContainer(taskWindowContainer) {
      this.taskWindowContainer = taskWindowContainer;
      taskWindowContainer.addListener(VisualElementEvent.HEIGHT_CHANGED, this.taskWindowHeightChangeHandler);
    }
  }, {
    key: "_taskWindowHeightChangeHandler",
    value: function _taskWindowHeightChangeHandler() {
      instance$2.setHeightAsCalcPercentage(this, this.taskWindowContainer.height);
    }
  }]);

  return SinglePagedApplicationWindowContainer;
}(VisualBodyElement);

var SinglePagedDialogWindowContainer =
/*#__PURE__*/
function (_VisualBodyElement) {
  _inherits(SinglePagedDialogWindowContainer, _VisualBodyElement);

  function SinglePagedDialogWindowContainer() {
    _classCallCheck(this, SinglePagedDialogWindowContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SinglePagedDialogWindowContainer).call(this, 'sp-dialog-container-container'));
  }

  return SinglePagedDialogWindowContainer;
}(VisualBodyElement);

var SinglePagedDropDownWindowContainer =
/*#__PURE__*/
function (_VisualBodyElement) {
  _inherits(SinglePagedDropDownWindowContainer, _VisualBodyElement);

  function SinglePagedDropDownWindowContainer() {
    _classCallCheck(this, SinglePagedDropDownWindowContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SinglePagedDropDownWindowContainer).call(this, 'sp-dropdown-container-container'));
  }

  return SinglePagedDropDownWindowContainer;
}(VisualBodyElement);

var SinglePagedInteractionWindowContainer =
/*#__PURE__*/
function (_VisualBodyElement) {
  _inherits(SinglePagedInteractionWindowContainer, _VisualBodyElement);

  function SinglePagedInteractionWindowContainer() {
    _classCallCheck(this, SinglePagedInteractionWindowContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SinglePagedInteractionWindowContainer).call(this, 'sp-interaction-container-container'));
  }

  return SinglePagedInteractionWindowContainer;
}(VisualBodyElement);

var SinglePagedNotificationWindowContainer =
/*#__PURE__*/
function (_VisualBodyElement) {
  _inherits(SinglePagedNotificationWindowContainer, _VisualBodyElement);

  function SinglePagedNotificationWindowContainer() {
    _classCallCheck(this, SinglePagedNotificationWindowContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SinglePagedNotificationWindowContainer).call(this, 'sp-notification-container-container'));
  }

  return SinglePagedNotificationWindowContainer;
}(VisualBodyElement);

var SinglePagedPromotionWindowContainer =
/*#__PURE__*/
function (_VisualBodyElement) {
  _inherits(SinglePagedPromotionWindowContainer, _VisualBodyElement);

  function SinglePagedPromotionWindowContainer() {
    _classCallCheck(this, SinglePagedPromotionWindowContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SinglePagedPromotionWindowContainer).call(this, 'sp-promotion-container-container'));
  }

  return SinglePagedPromotionWindowContainer;
}(VisualBodyElement);

var SinglePagedTaskWindowContainer =
/*#__PURE__*/
function (_VisualBodyElement) {
  _inherits(SinglePagedTaskWindowContainer, _VisualBodyElement);

  function SinglePagedTaskWindowContainer() {
    _classCallCheck(this, SinglePagedTaskWindowContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SinglePagedTaskWindowContainer).call(this, 'sp-task-window-container'));
  }

  _createClass(SinglePagedTaskWindowContainer, [{
    key: "addToTaskContainer",
    value: function addToTaskContainer(visualElement) {
      instance$2.appendVisualElement(this, visualElement);
    }
  }]);

  return SinglePagedTaskWindowContainer;
}(VisualBodyElement);

var SinglePagedTooltipWindowContainer =
/*#__PURE__*/
function (_VisualBodyElement) {
  _inherits(SinglePagedTooltipWindowContainer, _VisualBodyElement);

  function SinglePagedTooltipWindowContainer() {
    _classCallCheck(this, SinglePagedTooltipWindowContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SinglePagedTooltipWindowContainer).call(this, 'sp-tooltip-container-container'));
  }

  return SinglePagedTooltipWindowContainer;
}(VisualBodyElement);

const version = "1.0.0";

var JS_FILE_TYPE = 'js';
var CSS_FILE_TYPE = 'css';
var MODULE_BUILD_PATH = './modules';
var isCSSBugFixed = false;

var getUrl = function getUrl(definition, fileType) {
  var extension = fileType === JS_FILE_TYPE ? JS_FILE_TYPE : CSS_FILE_TYPE;
  var baseURL = "".concat(MODULE_BUILD_PATH, "/").concat(definition.moduleName);
  return definition.useVersionForImport ? "".concat(baseURL, "__").concat(version, ".").concat(extension) : "".concat(baseURL, ".").concat(extension);
};

var ModuleLoader =
/*#__PURE__*/
function (_EventsDispatcher) {
  _inherits(ModuleLoader, _EventsDispatcher);

  /**
   *
   * @param {WindowSession}session
   */
  function ModuleLoader(session) {
    var _this;

    _classCallCheck(this, ModuleLoader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModuleLoader).call(this));
    _this.session = session;

    _this.loadModules();

    return _this;
  }

  _createClass(ModuleLoader, [{
    key: "loadModules",
    value: function loadModules() {
      var _this2 = this;

      if (this.session.definition.loadCSS && isCSSBugFixed) {
        var cssUrl = getUrl(this.session.definition, CSS_FILE_TYPE);
        console.log('Trying to load Module', cssUrl);
        this.loadCSSLink(cssUrl).then(function () {
          console.log('CSS Loaded');
        })["catch"](function (error) {
          console.log('CSS NOT Loaded', error);
        })["finally"](function () {
          _this2.loadModuleFactory.bind(_this2);
        });
      } else {
        this.loadModuleFactory();
      }
    }
  }, {
    key: "loadCSSLink",
    value: function loadCSSLink(url) {
      var link = document.createElement('link');
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      return new Promise(function (resolve, reject) {
        link.onload = resolve;
        link.onerror = reject;
        link.setAttribute("href", url);
        document.head.appendChild(link);
      });
    }
  }, {
    key: "loadModuleFactory",
    value: function loadModuleFactory() {
      var _this3 = this;

      var moduleUrl = getUrl(this.session.definition, JS_FILE_TYPE);
      console.log('Trying to load Module', moduleUrl);
      import(moduleUrl).then(function (Factory) {
        return _this3.moduleLoadedHandler(Factory);
      })["catch"](function (error) {
        return _this3.moduleFailHandler(error);
      });
    }
  }, {
    key: "moduleLoadedHandler",
    value: function moduleLoadedHandler(Factory) {
      var factory = new Factory["default"]();
      this.session.windowTemplates = factory.loadFactory();
      this.dispatch(ModuleLoader.MODULE_LOADED, this);
    }
  }, {
    key: "moduleFailHandler",
    value: function moduleFailHandler(error) {
      console.error('Module Failed to load', error);
      this.dispatch(ModuleLoader.MODULE_FAILED, this);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.session = null;

      _get(_getPrototypeOf(ModuleLoader.prototype), "destroy", this).call(this);
    }
  }]);

  return ModuleLoader;
}(EventsDispatcher);

ModuleLoader.MODULE_LOADED = 'moduleLoaded';
ModuleLoader.MODULE_FAILED = 'moduleFailed';

var WindowRequestDestination = function WindowRequestDestination() {
  _classCallCheck(this, WindowRequestDestination);
};

WindowRequestDestination.WINDOW_CONTAINER = 0;
WindowRequestDestination.DROP_DOWN_CONTAINER = 1;
WindowRequestDestination.PROMOTION_CONTAINER = 2;
WindowRequestDestination.INTERACTION_CONTAINER = 3;
WindowRequestDestination.DIALOG_CONTAINER = 4;
WindowRequestDestination.NOTIFICATION_CONTAINER = 5;
WindowRequestDestination.URL = 6;
WindowRequestDestination.IFRAME = 7;

var WindowRequest = function WindowRequest() {
  _classCallCheck(this, WindowRequest);

  this.creationDate = Date.now();
  this.source = null;
  this.destination = WindowRequestDestination.WINDOW_CONTAINER;
  this.type = 0;
  this.interactionSource = null;
  this.data = null;
};

var dontUse = function dontUse() {
  new WindowRequest();
};

var WindowSession =
/*#__PURE__*/
function () {
  function WindowSession() {
    _classCallCheck(this, WindowSession);
  }

  _createClass(WindowSession, [{
    key: "super",
    value: function _super() {
      /**
       * @type {WindowRequest}
       */
      this.request = null;
      /**
       * @type {WindowDefinition}
       */

      this.definition = null;
      /**
       * @type {WindowContainer}
       */

      this.window = null;
      /**
       * @type {number}
       */

      this.creationDate = Date.now();
      this.windowTemplates = null;
      this.dontUse = dontUse;
    }
    /**
     * @returns {string}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.request = null;
      this.definition = null;
      this.window = null;
    }
  }, {
    key: "UUID",
    get: function get() {
      return this.window.uuid;
    }
    /**
     * @returns {string}
     */

  }, {
    key: "type",
    get: function get() {
      return this.request.type;
    }
  }, {
    key: "destination",
    get: function get() {
      return this.request.destination;
    }
  }]);

  return WindowSession;
}();

var WindowHeaderContainer =
/*#__PURE__*/
function (_VisualDivElement) {
  _inherits(WindowHeaderContainer, _VisualDivElement);

  function WindowHeaderContainer(className) {
    _classCallCheck(this, WindowHeaderContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(WindowHeaderContainer).call(this, className));
  }

  _createClass(WindowHeaderContainer, [{
    key: "createChildren",
    value: function createChildren() {
      this.closeIconElement = new VisualSpanElement('single-paged-window-header__close-icon');
      this.addChild(this.closeIconElement);
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      this.headerMouseDownHandler = this.headerMouseDownHandler.bind(this);
      this.closeClickHandler = this.closeClickHandler.bind(this);
      this.addDOMEventListener(VisualMouseEvent.MOUSE_DOWN, this.headerMouseDownHandler);
      this.closeIconElement.addDOMEventListener(VisualMouseEvent.MOUSE_DOWN, this.closeClickHandler);
    }
  }, {
    key: "headerMouseDownHandle",
    value: function headerMouseDownHandle(event) {
      this.dispatch(WindowHeaderContainer.INIT_DRAG, event);
    }
  }, {
    key: "headerMouseDownHandler",
    value: function headerMouseDownHandler(event) {
      this.dispatch(WindowHeaderContainer.INIT_DRAG, event);
    }
  }, {
    key: "closeClickHandler",
    value: function closeClickHandler(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.dispatch(WindowHeaderContainer.CLOSE, this);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(WindowHeaderContainer.prototype), "destroy", this).call(this);

      this.closeIconElement = null;
    }
  }]);

  return WindowHeaderContainer;
}(VisualDivElement);

WindowHeaderContainer.CLOSE = 'closeContainer';
WindowHeaderContainer.INIT_DRAG = 'initDrag';

/**
 *
 * @constructor
 */

var DragWindowService =
/*#__PURE__*/
function () {
  function DragWindowService() {
    _classCallCheck(this, DragWindowService);

    this.isActive = false;
    this.mouseReferenceX = 0;
    this.mouseReferenceY = 0;
    this.minimumDragX = 0;
    this.minimumDragY = 0;
    this.windowX = 0;
    this.windowY = 0;
    this.sourceElement = null;
    this.moveHandler = this.windowMouseMoveHandler.bind(this);
    this.upHandler = this.windowMouseUpHandler.bind(this);
    this.leaveHandler = this.windowMouseLeaveHandler.bind(this);
    this.moveHandlerEventId = null;
    this.upHandlerEventId = null;
    this.leaveHandlerEventId = null;
    this.started = false;
  }
  /**
   *
   * @param {Object} sourceElement
   * @param {number} mouseReferenceX
   * @param {number} mouseReferenceY
   */


  _createClass(DragWindowService, [{
    key: "prepare",
    value: function prepare(sourceElement, mouseReferenceX, mouseReferenceY) {
      if (this.isActive || !sourceElement) {
        if (this.sourceElement.uuid !== sourceElement.uuid) {
          this.destroy();
        } else {
          return;
        }
      }

      this.started = false;
      this.sourceElement = sourceElement;
      this.moveHandlerEventId = this.sourceElement.addWindowDOMEventListener(VisualMouseEvent.MOUSE_MOVE, this.moveHandler);
      this.upHandlerEventId = this.sourceElement.addWindowDOMEventListener(VisualMouseEvent.MOUSE_UP, this.upHandler);
      this.leaveHandlerEventId = this.sourceElement.addWindowDOMEventListener(VisualMouseEvent.MOUSE_LEAVE, this.leaveHandler);
      this.mouseReferenceX = mouseReferenceX;
      this.mouseReferenceY = mouseReferenceY;
      this.windowX = sourceElement.x;
      this.windowY = sourceElement.y;
      this.minimumDragX = this.sourceElement.minimiumDragX;
      this.minimumDragY = this.sourceElement.minimiumDragY;
      this.isActive = true;
      this.sourceElement.highLight();
    }
    /**
     *
     * @param {MouseEvent} event
     */

  }, {
    key: "windowMouseMoveHandler",
    value: function windowMouseMoveHandler(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      var deltaX = event.clientX - this.mouseReferenceX;
      var deltaY = event.clientY - this.mouseReferenceY;
      var elementX = this.windowX + deltaX;
      var elementY = this.windowY + deltaY;
      elementX = elementX <= this.minimumDragX ? this.minimumDragX : elementX;
      elementY = elementY <= this.minimumDragY ? this.minimumDragY : elementY;
      elementX = instance$7.truncate(elementX);
      elementY = instance$7.truncate(elementY);
      this.sourceElement.setPosition(elementX, elementY);
      this.sourceElement.dragStart();
      this.started = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.sourceElement.removeWindowDOMEventListener(this.moveHandlerEventId, this.upHandlerEventId, this.leaveHandlerEventId);
      this.moveHandlerEventId = null;
      this.upHandlerEventId = null;
      this.leaveHandlerEventId = null;
      this.sourceElement.removeHighLight();

      if (this.started) {
        this.sourceElement.dragComplete();
      }

      this.started = false;
      this.sourceElement = null;
      this.isActive = false;
    }
  }, {
    key: "windowMouseUpHandler",
    value: function windowMouseUpHandler(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.destroy();
    }
  }, {
    key: "windowMouseLeaveHandler",
    value: function windowMouseLeaveHandler() {//this.destroy();
    }
  }]);

  return DragWindowService;
}();

var instance$8 = new DragWindowService();
Object.freeze(DragWindowService);

/**
 *
 * @constructor
 */

var ResizeWindowService =
/*#__PURE__*/
function () {
  function ResizeWindowService() {
    _classCallCheck(this, ResizeWindowService);

    this.isActive = false;
    this.mouseReferenceX = 0;
    this.mouseReferenceY = 0;
    this.startWidth = 0;
    this.startHeight = 0;
    this.elementMinWidth = 0;
    this.elementMinHeight = 0;
    this.sourceElement = null;
    this.moveHandler = this.windowMouseMoveHandler.bind(this);
    this.upHandler = this.windowMouseUpHandler.bind(this);
    this.leaveHandler = this.windowMouseLeaveHandler.bind(this);
    this.moveHandlerEventId = null;
    this.upHandlerEventId = null;
    this.leaveHandlerEventId = null;
    this.started = false;
  }
  /**
   *
   * @param {Object} sourceElement
   * @param {number} mouseReferenceX
   * @param {number} mouseReferenceY
   */


  _createClass(ResizeWindowService, [{
    key: "prepare",
    value: function prepare(sourceElement, mouseReferenceX, mouseReferenceY) {
      if (this.isActive || !sourceElement) {
        if (this.sourceElement.uuid !== sourceElement.uuid) {
          this.destroy();
        } else {
          return;
        }
      }

      this.started = false;
      this.sourceElement = sourceElement;
      this.moveHandlerEventId = this.sourceElement.addWindowDOMEventListener(VisualMouseEvent.MOUSE_MOVE, this.moveHandler);
      this.upHandlerEventId = this.sourceElement.addWindowDOMEventListener(VisualMouseEvent.MOUSE_UP, this.upHandler);
      this.leaveHandlerEventId = this.sourceElement.addWindowDOMEventListener(VisualMouseEvent.MOUSE_LEAVE, this.leaveHandler);
      this.mouseReferenceX = mouseReferenceX;
      this.mouseReferenceY = mouseReferenceY;
      this.startWidth = sourceElement.width;
      this.startHeight = sourceElement.height;
      this.elementMinWidth = sourceElement.minWidth;
      this.elementMinHeight = sourceElement.minHeight;
      this.isActive = true;
    }
    /**
     *
     * @param {MouseEvent} event
     */

  }, {
    key: "windowMouseMoveHandler",
    value: function windowMouseMoveHandler(event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (!this.isActive) {
        return;
      }

      var deltaX = event.clientX - this.mouseReferenceX;
      var deltaY = event.clientY - this.mouseReferenceY;
      var elementWidth = this.startWidth + deltaX;
      var elementHeight = this.startHeight + deltaY;
      elementWidth = elementWidth <= this.elementMinWidth ? this.elementMinWidth : elementWidth;
      elementHeight = elementHeight <= this.elementMinHeight ? this.elementMinHeight : elementHeight;
      elementWidth = instance$7.truncate(elementWidth);
      elementHeight = instance$7.truncate(elementHeight);
      this.sourceElement.measure(elementWidth, elementHeight);
      this.sourceElement.highLight();
      this.sourceElement.resizeStart();
      this.started = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.sourceElement.removeWindowDOMEventListener(this.moveHandlerEventId, this.upHandlerEventId, this.leaveHandlerEventId);
      this.moveHandlerEventId = null;
      this.upHandlerEventId = null;
      this.leaveHandlerEventId = null;
      this.sourceElement.removeHighLight();

      if (this.started) {
        this.sourceElement.resizeComplete();
      }

      this.sourceElement = null;
      this.isActive = false;
      this.started = false;
    }
  }, {
    key: "windowMouseUpHandler",
    value: function windowMouseUpHandler(event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (!this.isActive) {
        return;
      }

      this.destroy();
    }
  }, {
    key: "windowMouseLeaveHandler",
    value: function windowMouseLeaveHandler() {//this.destroy();
    }
  }]);

  return ResizeWindowService;
}();

var instance$9 = new ResizeWindowService();
Object.freeze(ResizeWindowService);

var _resizeIconWidth = 15;
var _resizeIconHeight = 15;

var WindowFooterContainer =
/*#__PURE__*/
function (_VisualDivElement) {
  _inherits(WindowFooterContainer, _VisualDivElement);

  function WindowFooterContainer(className) {
    _classCallCheck(this, WindowFooterContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(WindowFooterContainer).call(this, className));
  }

  _createClass(WindowFooterContainer, [{
    key: "createChildren",
    value: function createChildren() {
      this.resizeIconElement = new VisualSpanElement('single-paged-window-footer__resize-icon');
    }
  }, {
    key: "attachChildren",
    value: function attachChildren() {
      this.addChild(this.resizeIconElement);
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      this.resizeIconElement.addDOMEventListener(VisualMouseEvent.MOUSE_DOWN, this.resizeMouseDownHandler.bind(this));
    }
  }, {
    key: "updateDisplayList",
    value: function updateDisplayList(width, height) {
      this.resizeIconElement.measure(_resizeIconWidth, _resizeIconHeight);
      this.resizeIconElement.setPosition(width - _resizeIconWidth, height - _resizeIconHeight);
      var childrenLength = this.children.length;

      for (var i = 0; i < childrenLength; i++) {
        var loopChildVisualElement = this.children[i];

        if (loopChildVisualElement === this.resizeIconElement) {
          continue;
        }

        if (loopChildVisualElement.width !== width || loopChildVisualElement.height !== height) {
          loopChildVisualElement.measure(width, height);
        }
      }
    }
  }, {
    key: "resizeMouseDownHandler",
    value: function resizeMouseDownHandler(event) {
      this.dispatch(WindowFooterContainer.RESIZE, event);
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(WindowFooterContainer.prototype), "destroy", this).call(this);

      this.resizeIconElement = null;
    }
  }, {
    key: "resizeIconWidth",
    set: function set(iconWidth) {
      if (_resizeIconWidth === iconWidth) {
        return;
      }

      _resizeIconWidth = iconWidth;
      this.updateDimension();
    }
  }, {
    key: "resizeIconHeight",
    set: function set(iconHeight) {
      if (_resizeIconHeight === iconHeight) {
        return;
      }

      _resizeIconHeight = iconHeight;
      this.updateDimension();
    }
  }]);

  return WindowFooterContainer;
}(VisualDivElement);

WindowFooterContainer.RESIZE = 'resize';

var WindowContainer =
/*#__PURE__*/
function (_VisualDivElement) {
  _inherits(WindowContainer, _VisualDivElement);

  /**
   * @constructor
   * @param {string} className
   * @param {WindowSession} session
   * @property {WindowModel} windowModel
   */
  function WindowContainer(className, session) {
    var _this;

    _classCallCheck(this, WindowContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WindowContainer).call(this, className, false));
    _this.windowSession = session;
    _this.definition = session.definition;
    _this._headerHeight = session.definition.headerHeight;
    _this._footerHeight = session.definition.footerHeight;

    _this.callLifeCycle();

    _this.windowModel = null; //console.log('APP version is', process.env.APP_VERSION);

    console.log('APP version is', version);
    return _this;
  }

  _createClass(WindowContainer, [{
    key: "createChildren",
    value: function createChildren() {
      this.headerElement = new this.definition.headerContainer(this.definition.headerContainerStyleName);
      this.bodyElement = new this.definition.appContainer(this.definition.appContainerStyleName);
      this.footerElement = new this.definition.footerContainer(this.definition.footerContainerStyleName);
      this.headerElement.enableAutoAdjustWidth();
      this.bodyElement.enableAutoAdjustWidthAndHeight();
      this.footerElement.enableAutoAdjustWidthAndHeight();
      this.setMinWidthAndHeight(this.definition.minWidth, this.definition.minHeight);
      this.measure(this.definition.width, this.definition.height);
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      this.headerElement.addListener(WindowHeaderContainer.INIT_DRAG, this.initDragHandler.bind(this));
      this.headerElement.addListener(WindowHeaderContainer.CLOSE, this.headerCloseHandler.bind(this));
      this.footerElement.addListener(WindowFooterContainer.RESIZE, this.resizeMouseDownHandler.bind(this));
    }
  }, {
    key: "attachChildren",
    value: function attachChildren() {
      this.addChild(this.headerElement);
      this.addChild(this.bodyElement);
      this.addChild(this.footerElement);
    }
  }, {
    key: "attachChildrenToBody",
    value: function attachChildrenToBody(visualElement) {
      this.bodyElement.addChild(visualElement);
    }
  }, {
    key: "updateDisplayList",
    value: function updateDisplayList(width, height) {
      this.headerElement.measure(width, this._headerHeight);
      var bodyHeight = height - this._headerHeight - this._footerHeight;
      this.bodyElement.measure(width, height - this._headerHeight - this._footerHeight);
      this.footerElement.measure(width, this._footerHeight);
      this.footerElement.setPosition(0, bodyHeight);
    }
  }, {
    key: "initDragHandler",
    value: function initDragHandler(event) {
      this.bringToFront();
      instance$8.prepare(this, event.clientX, event.clientY);
    }
  }, {
    key: "resizeMouseDownHandler",
    value: function resizeMouseDownHandler(event) {
      this.dispatch(WindowContainer.BRING_TO_FRONT, this);
      instance$9.prepare(this, event.clientX, event.clientY);
    }
  }, {
    key: "headerCloseHandler",
    value: function headerCloseHandler() {
      this.dispatch(WindowContainer.CLOSE, this);
    }
  }, {
    key: "bringToFront",
    value: function bringToFront() {
      this.dispatch(WindowContainer.BRING_TO_FRONT, this);
    }
  }, {
    key: "highLight",
    value: function highLight() {
      this.addClass(WindowContainer.HIGHLIGHT_CLASS);
    }
  }, {
    key: "removeHighLight",
    value: function removeHighLight() {
      this.removeClass(WindowContainer.HIGHLIGHT_CLASS);
    }
  }, {
    key: "setIndex",
    value: function setIndex(index) {
      var isSet = _get(_getPrototypeOf(WindowContainer.prototype), "setIndex", this).call(this, index);

      if (isSet && this.windowModel) {
        this.windowModel.indexChanged();
      }
    }
  }, {
    key: "dragStart",
    value: function dragStart() {
      this.windowModel.dragStart();
    }
  }, {
    key: "dragComplete",
    value: function dragComplete() {
      this.windowModel.dragComplete();
    }
  }, {
    key: "resizeStart",
    value: function resizeStart() {
      this.windowModel.resizeStart();
    }
  }, {
    key: "resizeComplete",
    value: function resizeComplete() {
      this.windowModel.resizeComplete();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.windowModel) {
        this.windowModel.destroy();
        this.windowModel = null;
      }

      _get(_getPrototypeOf(WindowContainer.prototype), "destroy", this).call(this);

      this.headerElement = null;
      this.bodyElement = null;
      this.footerElement = null;
    }
  }, {
    key: "headerHeight",
    set: function set(newHeaderHeight) {
      if (this._headerHeight === newHeaderHeight) {
        return;
      }

      this._headerHeight = newHeaderHeight;
      this.updateDimension();
    }
  }, {
    key: "footerHeight",
    set: function set(newFooterHeight) {
      if (this._footerHeight === newFooterHeight) {
        return;
      }

      this._footerHeight = newFooterHeight;
      this.updateDimension();
    }
  }, {
    key: "session",
    get: function get() {
      return this.windowSession;
    }
  }, {
    key: "model",
    set: function set(value) {
      this.windowModel = value;
    }
  }]);

  return WindowContainer;
}(VisualDivElement);

WindowContainer.BRING_TO_FRONT = 'bringToFront';
WindowContainer.CLOSE = 'close';
WindowContainer.HIGHLIGHT_CLASS = 'highlight';

var _sessionCollectionByType = {};
var _sessionCollection = [];
var _sessionIndexInfo = {
  sessionsCollectionByType: null,
  sessionsCollectionByTypeIndex: -1,
  sessionCollectionIndex: -1
};
/**
 * @param type
 * @returns {Array.<WindowSession>}
 */

var _getSessionsByType = function _getSessionsByType(type) {
  if (_sessionCollectionByType[type] === undefined) {
    _sessionCollectionByType[type] = {
      sessions: []
    };
  }

  return _sessionCollectionByType[type].sessions;
};
/**
 * @param {string} type
 * @param {string} sessionId
 */


var _findSessionsIndexByType = function _findSessionsIndexByType(type, sessionId) {
  _sessionIndexInfo.sessionsCollectionByType = null;
  _sessionIndexInfo.sessionsCollectionByTypeIndex = -1;
  _sessionIndexInfo.sessionCollectionIndex = -1;

  var sessionsByType = _getSessionsByType(type);

  if (!sessionsByType) {
    return;
  }

  var sessionsLength = sessionsByType.length;
  var session = null;

  for (var i = 0; i < sessionsLength; i++) {
    session = sessionsByType[i];

    if (session.UUID === sessionId) {
      _sessionIndexInfo.sessionsCollectionByType = sessionsByType;
      _sessionIndexInfo.sessionsCollectionByTypeIndex = i;
      break;
    }
  }

  var sessionCollectionLength = _sessionCollection.length;

  for (var _i = 0; _i < sessionCollectionLength; _i++) {
    session = _sessionCollection[_i];

    if (session.UUID === sessionId) {
      _sessionIndexInfo.sessionCollectionIndex = _i;
      break;
    }
  }
};

var _getSessionId = function _getSessionId(session) {
  return session.UUID;
};

var _getSessionType = function _getSessionType(session) {
  return session.type;
};

var _addSession = function _addSession(session) {
  var sessionType = _getSessionType(session);

  var sessionsByType = _getSessionsByType(sessionType);

  sessionsByType.push(session);

  _sessionCollection.push(session);
};

var _removeSession = function _removeSession(session) {
  var type = _getSessionType(session);

  var sessionId = _getSessionId(session);

  _findSessionsIndexByType(type, sessionId);

  var sessionDeleted = false;

  if (_sessionIndexInfo.sessionsCollectionByTypeIndex >= 0) {
    _sessionIndexInfo.sessionsCollectionByType.splice(_sessionIndexInfo.sessionsCollectionByTypeIndex, 1);

    sessionDeleted = true;
  }

  if (_sessionIndexInfo.sessionCollectionIndex >= 0) {
    _sessionCollection.splice(_sessionIndexInfo.sessionCollectionIndex, 1);

    sessionDeleted = true;
  }

  return sessionDeleted;
};

var _getSessionFromSessionId = function _getSessionFromSessionId(sessionId) {
  var sessionCollectionLength = _sessionCollection.length;
  var session = null;

  for (var i = 0; i < sessionCollectionLength; i++) {
    session = _sessionCollection[i];

    if (session.UUID === sessionId) {
      return session;
    }
  }

  return null;
};

var WindowSessionManager =
/*#__PURE__*/
function () {
  function WindowSessionManager() {
    _classCallCheck(this, WindowSessionManager);
  }
  /**
   * @param {WindowSession} session
   */


  _createClass(WindowSessionManager, [{
    key: "addSession",
    value: function addSession(session) {
      if (!session) {
        return;
      }

      _addSession(session);
    }
    /**
     * @param {WindowSession} session
     * @returns ?{WindowSession}
     */

  }, {
    key: "removeSession",
    value: function removeSession(session) {
      if (!session) {
        return;
      }

      var sessionDeleted = _removeSession(session);

      return sessionDeleted ? session : null;
    }
    /**
     * @param {string} sessionId
     * @returns ?{WindowSession}
     */

  }, {
    key: "removeSessionBySessionId",
    value: function removeSessionBySessionId(sessionId) {
      var session = _getSessionFromSessionId(sessionId);

      if (!session) {
        return null;
      }

      return this.removeSession(session);
    }
  }, {
    key: "getSessionsByType",
    value: function getSessionsByType(type) {
      if (instance.isEmpty(type)) {
        return null;
      }

      return _getSessionsByType(type);
    }
  }, {
    key: "getSessionsCount",
    value: function getSessionsCount(type) {
      return type ? _getSessionsByType(type).length : -1;
    }
  }]);

  return WindowSessionManager;
}();

var instance$a = new WindowSessionManager();

var WindowCommunication =
/*#__PURE__*/
function () {
  function WindowCommunication() {
    _classCallCheck(this, WindowCommunication);
  }

  _createClass(WindowCommunication, [{
    key: "super",
    value: function _super() {
      this.windowId = null;
      this.source = null;
      this.externalSource = null;
      this.data = null;
      this.destination = null;
    }
  }]);

  return WindowCommunication;
}();

WindowCommunication.HEADER = 'header';
WindowCommunication.APP = 'app';
WindowCommunication.FOOTER = 'footer';
WindowCommunication.INITIAL = 'initial';
WindowCommunication.SNAPSHOT = 'snapshot';
WindowCommunication.INTER_WINDOWS = 'interWindows';
WindowCommunication.ALL = 'all';
WindowCommunication.RESIZE_START = 'resizeStart';
WindowCommunication.RESIZE_COMPLETE = 'resizeComplete';
WindowCommunication.DRAG_START = 'dragStart';
WindowCommunication.DRAG_COMPLETE = 'dragComplete';
WindowCommunication.INDEX_CHANGED = 'indexChanged';
WindowCommunication.ACTIVE_WINDOW = 'activeWindow';

var InterWindowCommunication =
/*#__PURE__*/
function () {
  function InterWindowCommunication() {
    _classCallCheck(this, InterWindowCommunication);
  }

  _createClass(InterWindowCommunication, [{
    key: "super",
    value: function _super() {
      this.sourceType = null;
      this.sourceWindowId = null;
      this.data = null;
      this.destinationWindowId = null;
      this.destination = null;
    }
  }]);

  return InterWindowCommunication;
}();

InterWindowCommunication.ALL = 'all';
InterWindowCommunication.ALL_WINDOWS_EXCEPT_SOURCE = 'allWindowsExceptSource';
InterWindowCommunication.SIMILAR_TYPE_WINDOWS = 'similarTypeWindows';
InterWindowCommunication.TARGET_WINDOWS = 'targetWindows';

var WindowModel =
/*#__PURE__*/
function (_EventsDispatcher) {
  _inherits(WindowModel, _EventsDispatcher);

  /**
   *
   * @param {WindowHeaderModel} headerModel
   * @param {WindowAppModel} appModel
   * @param {WindowFooterModel} footerModel
   * @param {string} windowId
   * @param {string} windowType
   */
  function WindowModel(headerModel, appModel, footerModel, windowId, windowType) {
    var _this;

    _classCallCheck(this, WindowModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WindowModel).call(this));
    _this.headerModel = headerModel;
    _this.appModel = appModel;
    _this.footerModel = footerModel;
    _this.windowId = windowId;
    _this.windowType = windowType;

    _this.headerModel.addListener(WindowModel.UPDATE_APPLICATION_MODEL, _this.headerUpdateAppHandler.bind(_assertThisInitialized(_this)));

    _this.headerModel.addListener(WindowModel.UPDATE_FOOTER_MODEL, _this.headerUpdateFooterHandler.bind(_assertThisInitialized(_this)));

    _this.appModel.addListener(WindowModel.UPDATE_HEADER_MODEL, _this.appUpdateHeaderHandler.bind(_assertThisInitialized(_this)));

    _this.appModel.addListener(WindowModel.UPDATE_FOOTER_MODEL, _this.appUpdateFooterHandler.bind(_assertThisInitialized(_this)));

    _this.footerModel.addListener(WindowModel.UPDATE_HEADER_MODEL, _this.footerUpdateHeaderHandler.bind(_assertThisInitialized(_this)));

    _this.footerModel.addListener(WindowModel.UPDATE_APPLICATION_MODEL, _this.footerUpdateAppHandler.bind(_assertThisInitialized(_this)));

    _this.genericComms = new WindowCommunication();
    _this.genericComms.windowId = _this.windowId;
    return _this;
  }
  /**
   *
   * @param {WindowCommunication} comms
   */


  _createClass(WindowModel, [{
    key: "headerUpdateAppHandler",
    value: function headerUpdateAppHandler(comms) {
      var isCommsWindowCommunication = comms instanceof WindowCommunication;

      if (!isCommsWindowCommunication) {
        return;
      }

      comms.windowId = this.windowId;
      comms.source = WindowCommunication.HEADER;
      comms.destination = WindowCommunication.APP;
      this.communicateToApp(comms);
    }
    /**
     *
     * @param {WindowCommunication} comms
     */

  }, {
    key: "headerUpdateFooterHandler",
    value: function headerUpdateFooterHandler(comms) {
      var isCommsWindowCommunication = comms instanceof WindowCommunication;

      if (!isCommsWindowCommunication) {
        return;
      }

      comms.windowId = this.windowId;
      comms.source = WindowCommunication.HEADER;
      comms.destination = WindowCommunication.FOOTER;
      this.communicateToFooter(comms);
    }
    /**
     *
     * @param {WindowCommunication} comms
     */

  }, {
    key: "appUpdateHeaderHandler",
    value: function appUpdateHeaderHandler(comms) {
      var isCommsWindowCommunication = comms instanceof WindowCommunication;

      if (!isCommsWindowCommunication) {
        return;
      }

      comms.windowId = this.windowId;
      comms.source = WindowCommunication.APP;
      comms.destination = WindowCommunication.HEADER;
      this.communicateToHeader(comms);
    }
    /**
     *
     * @param {WindowCommunication} comms
     */

  }, {
    key: "appUpdateFooterHandler",
    value: function appUpdateFooterHandler(comms) {
      var isCommsWindowCommunication = comms instanceof WindowCommunication;

      if (!isCommsWindowCommunication) {
        return;
      }

      comms.windowId = this.windowId;
      comms.source = WindowCommunication.APP;
      comms.destination = WindowCommunication.FOOTER;
      this.communicateToFooter(comms);
    }
    /**
     *
     * @param {WindowCommunication} comms
     */

  }, {
    key: "footerUpdateHeaderHandler",
    value: function footerUpdateHeaderHandler(comms) {
      var isCommsWindowCommunication = comms instanceof WindowCommunication;

      if (!isCommsWindowCommunication) {
        return;
      }

      comms.windowId = this.windowId;
      comms.source = WindowCommunication.FOOTER;
      comms.destination = WindowCommunication.HEADER;
      this.communicateToHeader(comms);
    }
    /**
     *
     * @param {WindowCommunication} comms
     */

  }, {
    key: "footerUpdateAppHandler",
    value: function footerUpdateAppHandler(comms) {
      var isCommsWindowCommunication = comms instanceof WindowCommunication;

      if (!isCommsWindowCommunication) {
        return;
      }

      comms.windowId = this.windowId;
      comms.source = WindowCommunication.FOOTER;
      comms.destination = WindowCommunication.APP;
      this.communicateToApp(comms);
    }
    /**
     *
     * @param {WindowCommunication} comms
     */

  }, {
    key: "communicateToHeader",
    value: function communicateToHeader(comms) {
      var isCommsWindowCommunication = comms instanceof WindowCommunication;

      if (!isCommsWindowCommunication) {
        return;
      }

      this.headerModel.setData(comms);
    }
    /**
     *
     * @param {WindowCommunication} comms
     */

  }, {
    key: "communicateToApp",
    value: function communicateToApp(comms) {
      var isCommsWindowCommunication = comms instanceof WindowCommunication;

      if (!isCommsWindowCommunication) {
        return;
      }

      this.appModel.setData(comms);
    }
    /**
     *
     * @param {WindowCommunication} comms
     */

  }, {
    key: "communicateToFooter",
    value: function communicateToFooter(comms) {
      var isCommsWindowCommunication = comms instanceof WindowCommunication;

      if (!isCommsWindowCommunication) {
        return;
      }

      this.footerModel.setData(comms);
    }
  }, {
    key: "communicateGenericComms",
    value: function communicateGenericComms() {
      return;
      console.log('-----------------------------------------');
      this.headerModel.setWindowData(this.genericComms);
      this.appModel.setWindowData(this.genericComms);
      this.footerModel.setWindowData(this.genericComms);
    }
  }, {
    key: "setInitialData",
    value: function setInitialData(data, externalSource) {
      var comms = new WindowCommunication();
      comms.windowId = this.windowId;
      comms.source = WindowCommunication.INITIAL;
      comms.externalSource = externalSource;
      comms.destination = WindowCommunication.ALL;
      comms.data = data;
      this.communicateToHeader(comms);
      this.communicateToApp(comms);
      this.communicateToFooter(comms);
    }
  }, {
    key: "setSnapShotData",
    value: function setSnapShotData(data) {
      var comms = new WindowCommunication();
      comms.windowId = this.windowId;
      comms.source = WindowCommunication.SNAPSHOT;
      comms.destination = WindowCommunication.ALL;
      comms.data = data;
      this.communicateToHeader(comms);
      this.communicateToApp(comms);
      this.communicateToFooter(comms);
    }
    /**
     *
     * @param {InterWindowCommunication} interWindowComms
     */

  }, {
    key: "setInterWindowData",
    value: function setInterWindowData(interWindowComms) {
      var comms = new WindowCommunication();
      comms.windowId = this.windowId;
      comms.source = WindowCommunication.INTER_WINDOWS;
      comms.destination = WindowCommunication.ALL;
      comms.data = interWindowComms.data;
      this.communicateToHeader(comms);
      this.communicateToApp(comms);
      this.communicateToFooter(comms);
    }
  }, {
    key: "communicateInterWindow",
    value: function communicateInterWindow(data, destination) {
      var comms = new InterWindowCommunication();
      comms.sourceType = this.windowType;
      comms.sourceWindowId = this.windowId;
      comms.data = data;
      comms.destination = destination;
      this.dispatch(WindowModel.INTER_WINDOW_COMMUNICATION);
    }
  }, {
    key: "resizeStart",
    value: function resizeStart() {
      this.genericComms.source = WindowCommunication.RESIZE_START;
      this.communicateGenericComms();
    }
  }, {
    key: "resizeComplete",
    value: function resizeComplete() {
      this.genericComms.source = WindowCommunication.RESIZE_COMPLETE;
      this.communicateGenericComms();
    }
  }, {
    key: "dragStart",
    value: function dragStart() {
      this.genericComms.source = WindowCommunication.DRAG_START;
      this.communicateGenericComms();
    }
  }, {
    key: "dragComplete",
    value: function dragComplete() {
      this.genericComms.source = WindowCommunication.DRAG_COMPLETE;
      this.communicateGenericComms();
    }
  }, {
    key: "indexChanged",
    value: function indexChanged() {
      this.genericComms.source = WindowCommunication.INDEX_CHANGED;
      this.communicateGenericComms();
    }
  }, {
    key: "activeWindow",
    value: function activeWindow() {
      this.genericComms.source = WindowCommunication.ACTIVE_WINDOW;
      this.communicateGenericComms();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(WindowModel.prototype), "destroy", this).call(this);

      if (this.headerModel) {
        this.headerModel.destroy();
        this.headerModel = null;
      }

      if (this.appModel) {
        this.appModel.destroy();
        this.appModel = null;
      }

      if (this.footerModel) {
        this.footerModel.destroy();
        this.footerModel = null;
      }

      this.genericComms = null;
    }
  }]);

  return WindowModel;
}(EventsDispatcher);

WindowModel.UPDATE_APPLICATION_MODEL = 'updateApplicationModel';
WindowModel.UPDATE_HEADER_MODEL = 'updateHeaderModel';
WindowModel.UPDATE_FOOTER_MODEL = 'updateFooterModel';
WindowModel.INTER_WINDOW_COMMUNICATION = 'interWindowCommunication';

var WindowRequestInteractionSource = function WindowRequestInteractionSource() {
  _classCallCheck(this, WindowRequestInteractionSource);
};

WindowRequestInteractionSource.USER_INTERACTION = 0;
WindowRequestInteractionSource.SNAP_SHOT = 1;
WindowRequestInteractionSource.PROMOTION = 2;
WindowRequestInteractionSource.PARENT_CHILD = 3;
WindowRequestInteractionSource.OTHER = 4;

var _applicationWindowContainer = null;
var _taskWindowContainer = null;
var _promotionWindowContainer = null;
var _interactionWindowContainer = null;
var _notificationWindowContainer = null;
var _dialogWindowContainer = null;
var _dropdownWindowContainer = null;
var _windowDefinitionCollection = null;
var _highLightWindow = null;
var _highLightWindowTimeOutId = null;
var HIGHLIGHT_TIME_IN_MILLISECONDS = 1000;
/**
 *
 * @param {String} type
 * @returns {?WindowDefinition}
 */

var getWindowDefinitionByType = function getWindowDefinitionByType(type) {
  if (!_windowDefinitionCollection || _windowDefinitionCollection.length === 0) {
    return null;
  }

  var definitionCollectionLength = _windowDefinitionCollection.length;
  var windowDefinition;

  for (var i = 0; i < definitionCollectionLength; i++) {
    windowDefinition = _windowDefinitionCollection[i];

    if (windowDefinition.type === type) {
      return windowDefinition;
    }
  }

  return null;
};
/**
 * @private
 * @param {number} destination
 * @returns {?VisualBodyElement}
 */


var _getBodyContainer = function _getBodyContainer(destination) {
  switch (destination) {
    case WindowRequestDestination.WINDOW_CONTAINER:
      return _applicationWindowContainer;

    case WindowRequestDestination.DROP_DOWN_CONTAINER:
      return _dropdownWindowContainer;

    case WindowRequestDestination.PROMOTION_CONTAINER:
      return _promotionWindowContainer;

    case WindowRequestDestination.INTERACTION_CONTAINER:
      return _interactionWindowContainer;

    case WindowRequestDestination.DIALOG_CONTAINER:
      return _dialogWindowContainer;

    case WindowRequestDestination.NOTIFICATION_CONTAINER:
      return _notificationWindowContainer;
  }

  return null;
};

var _openURL = function _openURL(url) {};

var _openIFrame = function _openIFrame(data) {};

var _showHighLightTimeOut = function _showHighLightTimeOut(window) {
  _highLightWindow = window;
  window.addClass(WindowContainer.HIGHLIGHT_CLASS);
  _highLightWindowTimeOutId = setTimeout(_clearHighLightTimeout.bind(this), HIGHLIGHT_TIME_IN_MILLISECONDS);
};

var _clearHighLightTimeout = function _clearHighLightTimeout() {
  if (_highLightWindowTimeOutId) {
    clearTimeout(_highLightWindowTimeOutId);
    _highLightWindowTimeOutId = null;

    if (_highLightWindow) {
      _highLightWindow.removeClass(WindowContainer.HIGHLIGHT_CLASS);
    }

    _highLightWindow = null;
  }
};

var SinglePagedWindowManager =
/*#__PURE__*/
function () {
  function SinglePagedWindowManager() {
    _classCallCheck(this, SinglePagedWindowManager);
  }

  _createClass(SinglePagedWindowManager, [{
    key: "addNewWindow",

    /**
     * @function
     * @memberOf SinglePagedWindowManager
     * @param windowRequest {WindowRequest}
     */
    value: function addNewWindow(windowRequest) {
      if (!windowRequest) {
        console.error('Cannot add new window. Window Request not defined');
        return;
      }

      if (windowRequest.destination === WindowRequestDestination.URL) {
        _openURL(windowRequest.data);

        return;
      } else if (windowRequest.destination === WindowRequestDestination.IFRAME) {
        _openIFrame(windowRequest.data);
      }

      var definition = getWindowDefinitionByType(windowRequest.type);

      if (!definition) {
        console.error('Cannot add new window. Definition not found');
        return;
      }

      if (definition.maxNumberOfInstances > 0) {
        var sessions = instance$a.getSessionsByType(windowRequest.type);

        if (sessions && sessions.length > 0) {
          var sessionCount = sessions.length;

          if (sessionCount >= definition.maxNumberOfInstances) {
            console.log('Max number of instances Reached');

            if (definition.maxNumberOfInstances === 1 && definition.highLightWindowsForSingleInstance) {
              _showHighLightTimeOut.call(this, sessions[0].window);
            }

            return;
          }
        }
      }

      var container = _getBodyContainer(windowRequest.destination);

      if (!container) {
        console.error('Cannot add new window. Window Container not defined in Window Request. Use Window Request Destination');
        return;
      }

      var session = new WindowSession();
      session.request = windowRequest;
      session.definition = definition;
      instance$a.addSession(session);
      var window = new WindowContainer('single-paged-window', session);
      window.setIndex(container.noOfWindows);
      window.addListener(WindowContainer.CLOSE, this.windowCloseHandler.bind(this));
      window.addListener(WindowContainer.BRING_TO_FRONT, this.windowBringToFrontHandler.bind(this));
      window.minimiumDragY = _taskWindowContainer.height;
      window.setPosition(50, _taskWindowContainer.height);
      container.addChild(window);
      session.window = window;
      container.noOfWindows++;
      this.loadDynamicModule(session);
    }
  }, {
    key: "loadDynamicModule",
    value: function loadDynamicModule(session) {
      var moduleLoader = new ModuleLoader(session);
      moduleLoader.addListener(ModuleLoader.MODULE_LOADED, this.moduleLoadedHandler.bind(this));
      moduleLoader.addListener(ModuleLoader.MODULE_FAILED, this.moduleLoadedFailedHandler.bind(this));
    }
    /**
     *
     * @param {ModuleLoader} moduleLoader
     */

  }, {
    key: "moduleLoadedHandler",
    value: function moduleLoadedHandler(moduleLoader) {
      console.log('Module Loaded successfully');
      var templates = moduleLoader.session.windowTemplates;
      var window = moduleLoader.session.window; //Instantiate Models

      var headerModel = new templates.models.header();
      var appModel = new templates.models.app();
      var footerModel = new templates.models.footer();
      var windowModel = new WindowModel(headerModel, appModel, footerModel, moduleLoader.session.UUID, moduleLoader.session.request.type); //Instantiate Wrappers

      var headerWrapper = new templates.wrappers.header.obj(templates.wrappers.header.className);
      var appWrapper = new templates.wrappers.app.obj(templates.wrappers.app.className);
      var footerWrapper = new templates.wrappers.footer.obj(templates.wrappers.footer.className);
      window.model = windowModel;
      window.headerElement.addChild(headerWrapper, true);
      window.bodyElement.addChild(appWrapper, true);
      window.footerElement.addChild(footerWrapper, true);
      headerWrapper.model = headerModel;
      appWrapper.model = appModel;
      footerWrapper.model = footerModel;

      if (moduleLoader.session.request.source === WindowRequestInteractionSource.SNAP_SHOT) {
        windowModel.setSnapShotData(moduleLoader.session.request.data);
      } else {
        windowModel.setInitialData(moduleLoader.session.request.data, moduleLoader.session.request.source);
      }

      moduleLoader.destroy();
    }
  }, {
    key: "moduleLoadedFailedHandler",
    value: function moduleLoadedFailedHandler(moduleLoader) {}
  }, {
    key: "_clearHighLightTimeout",
    value: function _clearHighLightTimeout() {
      if (_highLightWindowTimeOutId) {
        clearTimeout(_highLightWindowTimeOutId);
        _highLightWindowTimeOutId = null;
      }
    }
    /**
     * @function
     * @memberOf SinglePagedWindowManager
     * @param session {WindowSession}
     */

  }, {
    key: "removeWindowBySession",
    value: function removeWindowBySession(session) {
      if (!session) {
        return;
      }

      this.removeWindowBySessionId(session.UUID);
    }
  }, {
    key: "removeWindowBySessionId",
    value: function removeWindowBySessionId(sessionId) {
      var session = instance$a.removeSessionBySessionId(sessionId);

      if (!session) {
        return;
      }

      var container = _getBodyContainer(session.destination);

      container.removeChild(session.window);
      session.window.destroy();
      session.destroy();
      container.noOfWindows--;
    }
    /**
     * @param {WindowContainer} window
     */

  }, {
    key: "windowCloseHandler",
    value: function windowCloseHandler(window) {
      this.removeWindowBySession(window.session);

      if (_highLightWindow && window === _highLightWindow) {
        _clearHighLightTimeout();
      }

      window = null;
    }
  }, {
    key: "windowBringToFrontHandler",
    value: function windowBringToFrontHandler(window) {
      var container = _getBodyContainer(window.session.destination);

      var maxChildIndex = Math.max(0, container.noOfWindows - 1);
      container.setChildIndexAt(window, maxChildIndex);
      window.windowModel.activeWindow();
    }
  }, {
    key: "applicationWindowContainer",
    set: function set(element) {
      _applicationWindowContainer = element;
    }
  }, {
    key: "taskWindowContainer",
    set: function set(element) {
      _taskWindowContainer = element;
    }
  }, {
    key: "promotionWindowContainer",
    set: function set(element) {
      _promotionWindowContainer = element;
    }
  }, {
    key: "notificationWindowContainer",
    set: function set(element) {
      _notificationWindowContainer = element;
    }
  }, {
    key: "interactionWindowContainer",
    set: function set(element) {
      _interactionWindowContainer = element;
    }
  }, {
    key: "dialogWindowContainer",
    set: function set(element) {
      _dialogWindowContainer = element;
    }
  }, {
    key: "dropdownWindowContainer",
    set: function set(element) {
      _dropdownWindowContainer = element;
    }
  }, {
    key: "tooltipWindowContainer",
    set: function set(element) {
    }
  }, {
    key: "windowDefinitionCollection",
    set: function set(definition) {
      _windowDefinitionCollection = definition;
    }
  }]);

  return SinglePagedWindowManager;
}();

var instance$b = new SinglePagedWindowManager();

/**
 * @type {SinglePagedTaskWindowContainer}
 * @private
 */

var _taskWindowContainer$1 = null;

var SinglePagedTaskManager =
/*#__PURE__*/
function (_EventsDispatcher) {
  _inherits(SinglePagedTaskManager, _EventsDispatcher);

  function SinglePagedTaskManager() {
    _classCallCheck(this, SinglePagedTaskManager);

    return _possibleConstructorReturn(this, _getPrototypeOf(SinglePagedTaskManager).call(this));
  }

  _createClass(SinglePagedTaskManager, [{
    key: "loadWindow",
    value: function loadWindow(windowRequest) {
      instance$b.addNewWindow(windowRequest);
    }
  }, {
    key: "taskWindowContainer",
    set: function set(element) {
      _taskWindowContainer$1 = element;
    }
    /**
     * @returns {SinglePagedTaskWindowContainer}
     */
    ,
    get: function get() {
      return _taskWindowContainer$1;
    }
  }]);

  return SinglePagedTaskManager;
}(EventsDispatcher);

var instance$c = new SinglePagedTaskManager();

var _taskWindowContainer$2 = null;
var _applicationWindowContainer$1 = null;
var _promotionWindowContainer$1 = null;
var _interactionWindowContainer$1 = null;
var _notificationWindowContainer$1 = null;
var _dialogWindowContainer$1 = null;
var _dropdownWindowContainer$1 = null;
var _tooltipWindowContainer = null;

var _initialiseWindowContainers = function _initialiseWindowContainers() {
  _initTaskWindowContainer.call(this);

  _initApplicationWindowContainer.call(this);

  if (this.isPromotionWindowContainerVisible) {
    _initPromotionWindowContainer.call(this);
  }

  if (this.interactionWindowContainerVisible) {
    _initInteractionWindowContainer.call(this);
  }

  if (this.notificationWindowContainerVisible) {
    _initNotificationWindowContainer.call(this);
  }

  if (this.dialogWindowContainerVisible) {
    _initDialogWindowContainer.call(this);
  }

  if (this.dropdownWindowContainerVisible) {
    _initDropdownWindowContainer.call(this);
  }

  if (this.tooltipWindowContainerVisible) {
    _initTooltipWindowContainer.call(this);
  }

  _assignWindowContainerToManager.call(this);
};

var _initTaskWindowContainer = function _initTaskWindowContainer() {
  var windowContainer = new SinglePagedTaskWindowContainer();
  windowContainer.addToBody();
  _taskWindowContainer$2 = windowContainer;
};

var _initApplicationWindowContainer = function _initApplicationWindowContainer() {
  _applicationWindowContainer$1 = new SinglePagedApplicationWindowContainer();

  _applicationWindowContainer$1.addTaskWindowContainer(_taskWindowContainer$2);

  _applicationWindowContainer$1.addToBody();
};

var _initPromotionWindowContainer = function _initPromotionWindowContainer() {
  _promotionWindowContainer$1 = new SinglePagedPromotionWindowContainer();

  _promotionWindowContainer$1.addToBody();
};

var _initInteractionWindowContainer = function _initInteractionWindowContainer() {
  _interactionWindowContainer$1 = new SinglePagedInteractionWindowContainer();

  _interactionWindowContainer$1.addToBody();
};

var _initNotificationWindowContainer = function _initNotificationWindowContainer() {
  _notificationWindowContainer$1 = new SinglePagedNotificationWindowContainer();

  _notificationWindowContainer$1.addToBody();
};

var _initDialogWindowContainer = function _initDialogWindowContainer() {
  _dialogWindowContainer$1 = new SinglePagedDialogWindowContainer();

  _dialogWindowContainer$1.addToBody();
};

var _initDropdownWindowContainer = function _initDropdownWindowContainer() {
  _dropdownWindowContainer$1 = new SinglePagedDropDownWindowContainer();

  _dropdownWindowContainer$1.addToBody();
};

var _initTooltipWindowContainer = function _initTooltipWindowContainer() {
  _tooltipWindowContainer = new SinglePagedTooltipWindowContainer();

  _tooltipWindowContainer.addToBody();
};

var _assignWindowContainerToManager = function _assignWindowContainerToManager() {
  instance$b.applicationWindowContainer = _applicationWindowContainer$1;
  instance$b.taskWindowContainer = _taskWindowContainer$2;
  instance$b.promotionWindowContainer = _promotionWindowContainer$1;
  instance$b.notificationWindowContainer = _notificationWindowContainer$1;
  instance$b.interactionWindowContainer = _interactionWindowContainer$1;
  instance$b.dialogWindowContainer = _dialogWindowContainer$1;
  instance$b.dropdownWindowContainer = _dropdownWindowContainer$1;
  instance$b.tooltipWindowContainer = _tooltipWindowContainer;
  instance$c.taskWindowContainer = _taskWindowContainer$2;
  instance$3.container = _dialogWindowContainer$1;
  instance$4.container = _dropdownWindowContainer$1;
  instance$5.container = _tooltipWindowContainer;
};

var SinglePagedApplicationManager =
/*#__PURE__*/
function () {
  function SinglePagedApplicationManager() {
    _classCallCheck(this, SinglePagedApplicationManager);

    this.isPromotionWindowContainerVisible = false;
    this.interactionWindowContainerVisible = false;
    this.notificationWindowContainerVisible = false;
    this.dialogWindowContainerVisible = false;
    this.dropdownWindowContainerVisible = false;
    this.tooltipWindowContainerVisible = false;
    this.taskWindowContainerHeight = 50;
  }

  _createClass(SinglePagedApplicationManager, [{
    key: "initialiseWindowContainers",
    value: function initialiseWindowContainers() {
      _initialiseWindowContainers.call(this);

      _taskWindowContainer$2.updateHeight(this.taskWindowContainerHeight);

      Object.freeze(this);
    }
  }]);

  return SinglePagedApplicationManager;
}();

var instance$d = new SinglePagedApplicationManager();

var WindowAppContainer =
/*#__PURE__*/
function (_VisualDivElement) {
  _inherits(WindowAppContainer, _VisualDivElement);

  function WindowAppContainer(className) {
    _classCallCheck(this, WindowAppContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(WindowAppContainer).call(this, className));
  }

  return WindowAppContainer;
}(VisualDivElement);

var WindowContainerWrapper =
/*#__PURE__*/
function (_VisualDivElement) {
  _inherits(WindowContainerWrapper, _VisualDivElement);

  function WindowContainerWrapper(className) {
    var _this;

    var callLifeCycleImmediately = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, WindowContainerWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WindowContainerWrapper).call(this, className, callLifeCycleImmediately));
    _this.windowModel = null;

    _this.enableAutoAdjustWidthAndHeight();

    _this.callLifeCycle();

    return _this;
  }

  _createClass(WindowContainerWrapper, [{
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(WindowContainerWrapper.prototype), "destroy", this).call(this);

      this.windowModel = null;
    }
  }, {
    key: "model",
    set: function set(value) {
      this.windowModel = value;
      this.addModelListeners();
    }
  }]);

  return WindowContainerWrapper;
}(VisualDivElement);

var WindowAppModel =
/*#__PURE__*/
function (_EventsDispatcher) {
  _inherits(WindowAppModel, _EventsDispatcher);

  function WindowAppModel() {
    var _this;

    _classCallCheck(this, WindowAppModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WindowAppModel).call(this));
    _this.data = null;
    _this.windowData = null;
    return _this;
  }
  /**
   *
   * @param {WindowCommunication} data
   */


  _createClass(WindowAppModel, [{
    key: "setData",
    value: function setData(data) {
      this.data = data;
      this.dispatch(WindowAppModel.DATA, this.data);
    }
    /**
     *
     * @param {WindowCommunication} data
     */

  }, {
    key: "setWindowData",
    value: function setWindowData(data) {
      this.windowData = data;
      this.dispatch(WindowAppModel.WINDOW_DATA, this.data);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(WindowAppModel.prototype), "destroy", this).call(this);

      this.data = null;
      this.windowData = null;
    }
  }]);

  return WindowAppModel;
}(EventsDispatcher);

WindowAppModel.DATA = 'dataChanged';
WindowAppModel.WINDOW_DATA = 'windowDataChanged';

var WindowAppContainerWrapper =
/*#__PURE__*/
function (_WindowContainerWrapp) {
  _inherits(WindowAppContainerWrapper, _WindowContainerWrapp);

  function WindowAppContainerWrapper(className) {
    _classCallCheck(this, WindowAppContainerWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(WindowAppContainerWrapper).call(this, className));
  }

  _createClass(WindowAppContainerWrapper, [{
    key: "addModelListeners",
    value: function addModelListeners() {
      this.windowModel.addListener(WindowAppModel.DATA, this.dataHandler.bind(this));
      this.windowModel.addListener(WindowAppModel.WINDOW_DATA, this.dataWindowHandler.bind(this));
    }
  }, {
    key: "dataHandler",
    value: function dataHandler(data) {
      console.log('App Wrapper', data);
    }
  }, {
    key: "dataWindowHandler",
    value: function dataWindowHandler(data) {
      console.log('App Wrapper[Window]', data);
    }
  }]);

  return WindowAppContainerWrapper;
}(WindowContainerWrapper);

var WindowFooterModel =
/*#__PURE__*/
function (_EventsDispatcher) {
  _inherits(WindowFooterModel, _EventsDispatcher);

  function WindowFooterModel() {
    var _this;

    _classCallCheck(this, WindowFooterModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WindowFooterModel).call(this));
    _this.data = null;
    _this.windowData = null;
    return _this;
  }
  /**
   *
   * @param {WindowCommunication} data
   */


  _createClass(WindowFooterModel, [{
    key: "setData",
    value: function setData(data) {
      this.data = data;
      this.dispatch(WindowFooterModel.DATA, this.data);
    }
    /**
     *
     * @param {WindowCommunication} data
     */

  }, {
    key: "setWindowData",
    value: function setWindowData(data) {
      this.windowData = data;
      this.dispatch(WindowFooterModel.WINDOW_DATA, this.windowData);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(WindowFooterModel.prototype), "destroy", this).call(this);

      this.data = null;
      this.windowData = null;
    }
  }]);

  return WindowFooterModel;
}(EventsDispatcher);

WindowFooterModel.DATA = 'dataChanged';
WindowFooterModel.WINDOW_DATA = 'windowDataChanged';

var WindowFooterContainerWrapper =
/*#__PURE__*/
function (_WindowContainerWrapp) {
  _inherits(WindowFooterContainerWrapper, _WindowContainerWrapp);

  function WindowFooterContainerWrapper(className) {
    _classCallCheck(this, WindowFooterContainerWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(WindowFooterContainerWrapper).call(this, className));
  }

  _createClass(WindowFooterContainerWrapper, [{
    key: "addModelListeners",
    value: function addModelListeners() {
      this.windowModel.addListener(WindowFooterModel.DATA, this.dataHandler.bind(this));
      this.windowModel.addListener(WindowFooterModel.WINDOW_DATA, this.dataWindowHandler.bind(this));
    }
  }, {
    key: "dataHandler",
    value: function dataHandler(data) {
      console.log('Footer Wrapper', data);
    }
  }, {
    key: "dataWindowHandler",
    value: function dataWindowHandler(data) {
      console.log('Footer Wrapper[Window]', data);
    }
  }]);

  return WindowFooterContainerWrapper;
}(WindowContainerWrapper);

var WindowHeaderModel =
/*#__PURE__*/
function (_EventsDispatcher) {
  _inherits(WindowHeaderModel, _EventsDispatcher);

  function WindowHeaderModel() {
    var _this;

    _classCallCheck(this, WindowHeaderModel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WindowHeaderModel).call(this));
    _this.data = null;
    _this.windowData = null;
    return _this;
  }
  /**
   *
   * @param {WindowCommunication} data
   */


  _createClass(WindowHeaderModel, [{
    key: "setData",
    value: function setData(data) {
      this.data = data;
      this.dispatch(WindowHeaderModel.DATA, this.data);
    }
    /**
     *
     * @param {WindowCommunication} data
     */

  }, {
    key: "setWindowData",
    value: function setWindowData(data) {
      this.windowData = data;
      this.dispatch(WindowHeaderModel.WINDOW_DATA, this.windowData);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(WindowHeaderModel.prototype), "destroy", this).call(this);

      this.data = null;
      this.windowData = null;
    }
  }]);

  return WindowHeaderModel;
}(EventsDispatcher);

WindowHeaderModel.DATA = 'dataChanged';
WindowHeaderModel.WINDOW_DATA = 'windowDataChanged';

var WindowHeaderContainerWrapper =
/*#__PURE__*/
function (_WindowContainerWrapp) {
  _inherits(WindowHeaderContainerWrapper, _WindowContainerWrapp);

  function WindowHeaderContainerWrapper(className) {
    _classCallCheck(this, WindowHeaderContainerWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(WindowHeaderContainerWrapper).call(this, className));
  }

  _createClass(WindowHeaderContainerWrapper, [{
    key: "addModelListeners",
    value: function addModelListeners() {
      this.windowModel.addListener(WindowHeaderModel.DATA, this.dataHandler.bind(this));
      this.windowModel.addListener(WindowHeaderModel.WINDOW_DATA, this.dataWindowHandler.bind(this));
    }
  }, {
    key: "dataHandler",
    value: function dataHandler(data) {
      console.log('Header Wrapper', data);
    }
  }, {
    key: "dataWindowHandler",
    value: function dataWindowHandler(data) {
      console.log('Header Wrapper[Window]', data);
    }
  }]);

  return WindowHeaderContainerWrapper;
}(WindowContainerWrapper);

var ModuleTemplate =
/*#__PURE__*/
function () {
  function ModuleTemplate() {
    _classCallCheck(this, ModuleTemplate);

    this.template = {};
  }

  _createClass(ModuleTemplate, [{
    key: "setWrapper",
    value: function setWrapper(HeaderContainerWrapper, AppContainerWrapper, FooterContainerWrapper) {
      this.template.wrappers = {};
      this.template.wrappers.header = {};
      this.template.wrappers.header.obj = HeaderContainerWrapper;
      this.template.wrappers.app = {};
      this.template.wrappers.app.obj = AppContainerWrapper;
      this.template.wrappers.footer = {};
      this.template.wrappers.footer.obj = FooterContainerWrapper;
    }
  }, {
    key: "setClassNamesWrapper",
    value: function setClassNamesWrapper(headerContainerWrapperClassName, appContainerWrapperClassName, footerContainerWrapperClassName) {
      this.template.wrappers.header.className = headerContainerWrapperClassName;
      this.template.wrappers.app.className = appContainerWrapperClassName;
      this.template.wrappers.footer.className = footerContainerWrapperClassName;
    }
  }, {
    key: "setModel",
    value: function setModel(HeaderModel, AppModel, FooterModel) {
      this.template.models = {};
      this.template.models.header = HeaderModel;
      this.template.models.app = AppModel;
      this.template.models.footer = FooterModel;
    }
  }, {
    key: "templateFactory",
    get: function get() {
      return this.template;
    }
  }, {
    key: "defaultTemplateFactory",
    get: function get() {
      this.setWrapper(WindowHeaderContainerWrapper, WindowAppContainerWrapper, WindowFooterContainerWrapper);
      this.setClassNamesWrapper('window-header-container-wrapper', 'window-app-container-wrapper', 'window-footer-container-wrapper');
      this.setModel(WindowHeaderModel, WindowAppModel, WindowHeaderModel);
      return this.template;
    }
  }]);

  return ModuleTemplate;
}();

var WindowDefinition = function WindowDefinition() {
  _classCallCheck(this, WindowDefinition);

  this.headerContainer = WindowHeaderContainer;
  this.appContainer = WindowAppContainer;
  this.footerContainer = WindowFooterContainer;
  this.headerContainerStyleName = 'single-paged-window-header';
  this.appContainerStyleName = 'single-paged-window-body';
  this.footerContainerStyleName = 'single-paged-window-footer';
  this.minWidth = 100;
  this.minHeight = 100;
  this.width = 1000;
  this.height = 250;
  this.headerHeight = 40;
  this.footerHeight = 15;
  this.isDraggable = true;
  this.isResizable = true;
  this.snapShotBackupAvailable = true;
  this.snapShotRestoreAvailable = true;
  this.maxNumberOfInstances = 0;
  this.highLightWindowsForSingleInstance = true;
  this.type = null;
  this.loadCSS = false; // Bug.. Not fixed in ModuleLoader.. Dynamic loader of CSS Not supported at this moment

  this.useVersionForImport = true;
  this.moduleName = ''; // TO BE SET BY SUPER CLASSES
};

var temp__213222 = {
  DialogManager: instance$3,
  DropDownManager: instance$4,
  ElementManager: ElementManager,
  ToolTipManager: instance$5,
  VisualBodyElement: VisualBodyElement,
  VisualDivElement: VisualDivElement,
  VisualElement: VisualElement,
  VisualSpanElement: VisualSpanElement,
  EventsDispatcher: EventsDispatcher,
  VisualElementEvent: VisualElementEvent,
  VisualMouseEvent: VisualMouseEvent,
  DOMService: instance$2,
  SVGService: SVGService,
  NumberUtils: instance$7,
  Utils: instance,
  UUIDUtils: instance$6,
  SinglePagedApplicationWindowContainer: SinglePagedApplicationWindowContainer,
  SinglePagedDialogWindowContainer: SinglePagedDialogWindowContainer,
  SinglePagedDropDownWindowContainer: SinglePagedDropDownWindowContainer,
  SinglePagedInteractionWindowContainer: SinglePagedInteractionWindowContainer,
  SinglePagedNotificationWindowContainer: SinglePagedNotificationWindowContainer,
  SinglePagedPromotionWindowContainer: SinglePagedPromotionWindowContainer,
  SinglePagedTaskWindowContainer: SinglePagedTaskWindowContainer,
  SinglePagedTooltipWindowContainer: SinglePagedTooltipWindowContainer,
  ModuleLoader: ModuleLoader,
  SinglePagedApplicationManager: instance$d,
  SinglePagedTaskManager: instance$c,
  SinglePagedWindowManager: instance$b,
  InterWindowCommunication: InterWindowCommunication,
  WindowAppContainer: WindowAppContainer,
  WindowAppContainerWrapper: WindowAppContainerWrapper,
  WindowAppModel: WindowAppModel,
  WindowFooterContainer: WindowFooterContainer,
  WindowFooterContainerWrapper: WindowFooterContainerWrapper,
  WindowFooterModel: WindowFooterModel,
  WindowHeaderContainer: WindowHeaderContainer,
  WindowHeaderContainerWrapper: WindowHeaderContainerWrapper,
  WindowHeaderModel: WindowHeaderModel,
  WindowContainer: WindowContainer,
  WindowContainerWrapper: WindowContainerWrapper,
  ModuleTemplate: ModuleTemplate,
  DragWindowService: instance$8,
  ResizeWindowService: instance$9,
  WindowCommunication: WindowCommunication,
  WindowDefinition: WindowDefinition,
  WindowModel: WindowModel,
  WindowRequest: WindowRequest,
  WindowRequestDestination: WindowRequestDestination,
  WindowRequestInteractionSource: WindowRequestInteractionSource,
  WindowSession: WindowSession,
  WindowSessionManager: instance$a
};

export default temp__213222;
