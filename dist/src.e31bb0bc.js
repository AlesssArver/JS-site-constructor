// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/image.jpg":[function(require,module,exports) {
module.exports = "/image.70feebc7.jpg";
},{}],"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.block = exports.css = exports.col = exports.row = void 0;

var row = function row(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    background: '',
    color: '',
    'margin-top': '',
    'margin-bottom': ''
  };
  return "\n    <div class=\"row\" style=\"".concat(css(styles), "\">\n        ").concat(content, "\n    </div>\n");
};

exports.row = row;

var col = function col(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    background: '',
    color: '',
    marginTop: '',
    marginBottom: ''
  };
  return "\n        <div class=\"col-sm\" style=\"".concat(css(styles), "\">\n            ").concat(content, "\n        </div>\n    ");
};

exports.col = col;

var css = function css() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof style === 'sting') {
    return styles;
  }

  var toString = function toString(value) {
    return "".concat(value, ": ").concat(styles[value]);
  };

  return Object.keys(styles).map(toString).join(';');
};

exports.css = css;

var block = function block(type) {
  return "\n        <button\n            class=\"btn btn-primary\"\n            type=\"button\"\n            data-bs-toggle=\"collapse\"\n            data-bs-target=\"#".concat(type, "\" \n            aria-expanded=\"false\" \n            aria-controls=\"").concat(type, "\">\n            Open: ").concat(type, "\n        </button>\n        <form class=\"collapse multi-collapse\" name=\"").concat(type, "\" id=\"").concat(type, "\">\n            <h5>").concat(type, "</h5>\n            <div class=\"mb-3\">\n                <input class=\"form-control form-control-md\" name=\"value\" placeholder=\"Text\">\n            </div>\n            <div class=\"mb-3\">\n                <select class=\"form-select\" name=\"tag\" aria-label=\"Default select example\">\n                    <option selected>Tag</option>\n                    <option value=\"h1\">h1</option>\n                    <option value=\"h2\">h2</option>\n                    <option value=\"h3\">h3</option>\n                    <option value=\"h4\">h4</option>\n                    <option value=\"h5\">h5</option>\n                    <option value=\"h6\">h6</option>\n                    <option value=\"p\">p</option>\n                    <option value=\"span\">span</option>\n                    <option value=\"div\">div</option>\n                </select>\n            </div>\n            <h4>Margin</h4>\n            <div class=\"form-group mb-3 row\">\n                <div class=\"col\">\n                    <input class=\"form-control form-control-md\" name=\"marginTop\" placeholder=\"top\">\n                </div>\n                <div class=\"col\">\n                    <input class=\"form-control form-control-md\" name=\"marginBottom\" placeholder=\"bottom\">\n                </div>\n            </div>\n            <div class=\"form-group mb-3 row\">\n                <div class=\"col\">\n                    <label for=\"background\" class=\"col-form-label\">Background</label>\n                    <input type=\"color\" class=\"form-control form-control-md\" name=\"background\" id=\"background\" placeholder=\"Background\">\n                </div>\n                <div class=\"col\">\n                    <label for=\"color\" class=\"col-form-label\">Text color</label>\n                    <input type=\"color\" class=\"form-control form-control-md\" name=\"color\" id=\"color\" placeholder=\"Color\">\n                </div>\n            </div>\n            <button type=\"submit\" class=\"add--btn btn btn-primary btn-sm\">Add</button>\n        </form>\n    ");
};

exports.block = block;
},{}],"classes/blocks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageBlock = exports.ColumnsBlock = exports.TextBlock = void 0;

var _utils = require("../utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Block = /*#__PURE__*/function () {
  function Block(value, options) {
    _classCallCheck(this, Block);

    this.value = value;
    this.options = options;
  }

  _createClass(Block, [{
    key: "toHTML",
    value: function toHTML() {
      throw new Error('Method toHTML must be released');
    }
  }]);

  return Block;
}();

var TextBlock = /*#__PURE__*/function (_Block) {
  _inherits(TextBlock, _Block);

  var _super = _createSuper(TextBlock);

  function TextBlock(value, options) {
    _classCallCheck(this, TextBlock);

    return _super.call(this, value, options);
  }

  _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      console.log('value', this.value);
      var _this$options = this.options,
          _this$options$tag = _this$options.tag,
          tag = _this$options$tag === void 0 ? 'p' : _this$options$tag,
          styles = _this$options.styles;
      return (0, _utils.row)((0, _utils.col)("<".concat(tag, ">").concat(this.value, "</").concat(tag, ">")), styles);
    }
  }]);

  return TextBlock;
}(Block);

exports.TextBlock = TextBlock;

var ColumnsBlock = /*#__PURE__*/function (_Block2) {
  _inherits(ColumnsBlock, _Block2);

  var _super2 = _createSuper(ColumnsBlock);

  function ColumnsBlock(value, options) {
    _classCallCheck(this, ColumnsBlock);

    return _super2.call(this, value, options);
  }

  _createClass(ColumnsBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var styles = this.options.styles;
      var html = this.value.map(_utils.col).join('');
      return (0, _utils.row)(html, styles);
    }
  }]);

  return ColumnsBlock;
}(Block);

exports.ColumnsBlock = ColumnsBlock;

var ImageBlock = /*#__PURE__*/function (_Block3) {
  _inherits(ImageBlock, _Block3);

  var _super3 = _createSuper(ImageBlock);

  function ImageBlock(value, options) {
    _classCallCheck(this, ImageBlock);

    return _super3.call(this, value, options);
  }

  _createClass(ImageBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options2 = this.options,
          styles = _this$options2.styles,
          is = _this$options2.imageStyles,
          _this$options2$alt = _this$options2.alt,
          alt = _this$options2$alt === void 0 ? "" : _this$options2$alt;
      return (0, _utils.row)("\n        <img\n            src=\"".concat(this.value, "\" \n            alt=\"").concat(alt, "\" \n            style=\"").concat((0, _utils.css)(is), "\" \n        />"), styles);
    }
  }]);

  return ImageBlock;
}(Block);

exports.ImageBlock = ImageBlock;
},{"../utils":"utils.js"}],"model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

var _image = _interopRequireDefault(require("./assets/image.jpg"));

var _blocks = require("./classes/blocks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = [new _blocks.TextBlock('Title', {
  tag: 'h1',
  styles: {
    color: '#2d2d2d',
    padding: '1.5rem'
  }
}), new _blocks.TextBlock('There very long some text. Very interesting text.Very cool text.You reading this text and want to sleep, because It\'s very boring text.', {
  tag: 'p',
  styles: {
    padding: '1rem'
  }
}) // new ColumnsBlock([
//     '11111',
//     '22222',
//     '33333',
// ], {
//     styles: {
//         padding: '2rem'
//     }
// }),
// new ImageBlock(image, {
//     styles: {
//         padding: '2rem 0',
//         display: 'flex',
//         'justify-content': 'center'
//     },
//     imageStyles: {
//         width: '500px',
//         height: 'auto'
//     },
//     alt: 'Это картинка'
// })
];
exports.model = model;
},{"./assets/image.jpg":"assets/image.jpg","./classes/blocks":"classes/blocks.js"}],"classes/site.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Site = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Site = /*#__PURE__*/function () {
  function Site(selector) {
    _classCallCheck(this, Site);

    this.el = document.querySelector(selector);
  }

  _createClass(Site, [{
    key: "render",
    value: function render(model) {
      var _this = this;

      console.log('model', model);
      this.el.innerHTML = '';
      model.forEach(function (block) {
        console.log(block);

        _this.el.insertAdjacentHTML('beforeend', block.toHTML());
      });
    }
  }]);

  return Site;
}();

exports.Site = Site;
},{}],"classes/sidebar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

var _blocks = require("./blocks");

var _utils = require("../utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sidebar = /*#__PURE__*/function () {
  function Sidebar(selector, updateCallback) {
    var _this = this;

    _classCallCheck(this, Sidebar);

    _defineProperty(this, "add", function (e) {
      e.preventDefault();
      var type = e.target.name;
      var tag = e.target.tag.value;
      var value = e.target.value.value;
      var background = e.target.background.value;
      var color = e.target.color.value;
      var marginTop = e.target.marginTop.value;
      var marginBottom = e.target.marginBottom.value;
      var styles = {
        background: background,
        color: color,
        'margin-top': marginTop ? "".concat(marginTop, "px") : '',
        'margin-bottom': marginBottom ? "".concat(marginBottom, "px") : ''
      };
      var newBlock;
      console.log('type', e.target.name);

      if (type === 'text') {
        newBlock = new _blocks.TextBlock(value, {
          tag: tag,
          styles: styles
        });
      }

      console.log('newBlock', newBlock);

      _this.update(newBlock);

      e.target.value.value = '';
      e.target.styles = {};
    });

    this.el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  _createClass(Sidebar, [{
    key: "init",
    value: function init() {
      this.el.insertAdjacentHTML('afterbegin', this.template);
      this.el.addEventListener('submit', this.add);
    }
  }, {
    key: "template",
    get: function get() {
      return (0, _utils.block)('text');
    }
  }]);

  return Sidebar;
}();

exports.Sidebar = Sidebar;
},{"./blocks":"classes/blocks.js","../utils":"utils.js"}],"classes/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _site = require("./site");

var _sidebar = require("./sidebar");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(model) {
    _classCallCheck(this, App);

    this.model = model;
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      var site = new _site.Site('#site');
      site.render(this.model);

      var updateCallback = function updateCallback(newBlock) {
        _this.model.push(newBlock);

        site.render(_this.model);
      };

      new _sidebar.Sidebar('#panel', updateCallback);
    }
  }]);

  return App;
}();

exports.App = App;
},{"./site":"classes/site.js","./sidebar":"classes/sidebar.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/index.sass":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _model = require("./model");

var _app = require("./classes/app");

require("./styles");

new _app.App(_model.model).init();
},{"./model":"model.js","./classes/app":"classes/app.js","./styles":"styles/index.sass"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60227" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map