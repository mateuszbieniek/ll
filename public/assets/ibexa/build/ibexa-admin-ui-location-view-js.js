(self["webpackChunk"] = self["webpackChunk"] || []).push([["ibexa-admin-ui-location-view-js"],{

/***/ "./vendor/ibexa/admin-ui-assets/src/bundle/Resources/public/vendors/leaflet/dist/leaflet.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui-assets/src/bundle/Resources/public/vendors/leaflet/dist/leaflet.js ***!
  \**************************************************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/* @preserve
 * Leaflet 1.8.0, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2022 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function (t, i) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? i(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (i),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (t) {
  "use strict";

  function l(t) {
    for (var i, e, n = 1, o = arguments.length; n < o; n++) {
      for (i in e = arguments[n]) {
        t[i] = e[i];
      }
    }

    return t;
  }

  var R = Object.create || function (t) {
    return N.prototype = t, new N();
  };

  function N() {}

  function a(t, i) {
    var e = Array.prototype.slice;
    if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
    var n = e.call(arguments, 2);
    return function () {
      return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
    };
  }

  var D = 0;

  function h(t) {
    return "_leaflet_id" in t || (t._leaflet_id = ++D), t._leaflet_id;
  }

  function j(t, i, e) {
    var n,
        o,
        s = function s() {
      n = !1, o && (r.apply(e, o), o = !1);
    },
        r = function r() {
      n ? o = arguments : (t.apply(e, arguments), setTimeout(s, i), n = !0);
    };

    return r;
  }

  function H(t, i, e) {
    var n = i[1],
        i = i[0],
        o = n - i;
    return t === n && e ? t : ((t - i) % o + o) % o + i;
  }

  function u() {
    return !1;
  }

  function e(t, i) {
    if (!1 === i) return t;
    i = Math.pow(10, void 0 === i ? 6 : i);
    return Math.round(t * i) / i;
  }

  function W(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }

  function F(t) {
    return W(t).split(/\s+/);
  }

  function c(t, i) {
    for (var e in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? R(t.options) : {}), i) {
      t.options[e] = i[e];
    }

    return t.options;
  }

  function U(t, i, e) {
    var n,
        o = [];

    for (n in t) {
      o.push(encodeURIComponent(e ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
    }

    return (i && -1 !== i.indexOf("?") ? "&" : "?") + o.join("&");
  }

  var V = /\{ *([\w_ -]+) *\}/g;

  function q(t, e) {
    return t.replace(V, function (t, i) {
      i = e[i];
      if (void 0 === i) throw new Error("No value provided for variable " + t);
      return i = "function" == typeof i ? i(e) : i;
    });
  }

  var d = Array.isArray || function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  };

  function G(t, i) {
    for (var e = 0; e < t.length; e++) {
      if (t[e] === i) return e;
    }

    return -1;
  }

  var K = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

  function Y(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }

  var X = 0;

  function J(t) {
    var i = +new Date(),
        e = Math.max(0, 16 - (i - X));
    return X = i + e, window.setTimeout(t, e);
  }

  var $ = window.requestAnimationFrame || Y("RequestAnimationFrame") || J,
      Q = window.cancelAnimationFrame || Y("CancelAnimationFrame") || Y("CancelRequestAnimationFrame") || function (t) {
    window.clearTimeout(t);
  };

  function x(t, i, e) {
    if (!e || $ !== J) return $.call(window, a(t, i));
    t.call(i);
  }

  function r(t) {
    t && Q.call(window, t);
  }

  var tt = {
    __proto__: null,
    extend: l,
    create: R,
    bind: a,

    get lastId() {
      return D;
    },

    stamp: h,
    throttle: j,
    wrapNum: H,
    falseFn: u,
    formatNum: e,
    trim: W,
    splitWords: F,
    setOptions: c,
    getParamString: U,
    template: q,
    isArray: d,
    indexOf: G,
    emptyImageUrl: K,
    requestFn: $,
    cancelFn: Q,
    requestAnimFrame: x,
    cancelAnimFrame: r
  };

  function it() {}

  it.extend = function (t) {
    function i() {
      c(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
    }

    var e,
        n = i.__super__ = this.prototype,
        o = R(n);

    for (e in (o.constructor = i).prototype = o, this) {
      Object.prototype.hasOwnProperty.call(this, e) && "prototype" !== e && "__super__" !== e && (i[e] = this[e]);
    }

    if (t.statics && l(i, t.statics), t.includes) {
      var s = t.includes;

      if ("undefined" != typeof L && L && L.Mixin) {
        s = d(s) ? s : [s];

        for (var r = 0; r < s.length; r++) {
          s[r] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }

      l.apply(null, [o].concat(t.includes));
    }

    return l(o, t), delete o.statics, delete o.includes, o.options && (o.options = n.options ? R(n.options) : {}, l(o.options, t.options)), o._initHooks = [], o.callInitHooks = function () {
      if (!this._initHooksCalled) {
        n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;

        for (var t = 0, i = o._initHooks.length; t < i; t++) {
          o._initHooks[t].call(this);
        }
      }
    }, i;
  }, it.include = function (t) {
    var i = this.prototype.options;
    return l(this.prototype, t), t.options && (this.prototype.options = i, this.mergeOptions(t.options)), this;
  }, it.mergeOptions = function (t) {
    return l(this.prototype.options, t), this;
  }, it.addInitHook = function (t) {
    var i = Array.prototype.slice.call(arguments, 1),
        e = "function" == typeof t ? t : function () {
      this[t].apply(this, i);
    };
    return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this;
  };
  var i = {
    on: function on(t, i, e) {
      if ("object" == _typeof(t)) for (var n in t) {
        this._on(n, t[n], i);
      } else for (var o = 0, s = (t = F(t)).length; o < s; o++) {
        this._on(t[o], i, e);
      }
      return this;
    },
    off: function off(t, i, e) {
      if (arguments.length) {
        if ("object" == _typeof(t)) for (var n in t) {
          this._off(n, t[n], i);
        } else {
          t = F(t);

          for (var o = 1 === arguments.length, s = 0, r = t.length; s < r; s++) {
            o ? this._off(t[s]) : this._off(t[s], i, e);
          }
        }
      } else delete this._events;
      return this;
    },
    _on: function _on(t, i, e) {
      if ("function" != typeof i) console.warn("wrong listener type: " + _typeof(i));else {
        this._events = this._events || {};

        for (var n = this._events[t], t = (n || (this._events[t] = n = []), {
          fn: i,
          ctx: e = e === this ? void 0 : e
        }), o = n, s = 0, r = o.length; s < r; s++) {
          if (o[s].fn === i && o[s].ctx === e) return;
        }

        o.push(t);
      }
    },
    _off: function _off(t, i, e) {
      var n, o, s;
      if (this._events && (n = this._events[t])) if (1 === arguments.length) {
        if (this._firingCount) for (o = 0, s = n.length; o < s; o++) {
          n[o].fn = u;
        }
        delete this._events[t];
      } else if (e === this && (e = void 0), "function" != typeof i) console.warn("wrong listener type: " + _typeof(i));else {
        for (o = 0, s = n.length; o < s; o++) {
          var r = n[o];
          if (r.ctx === e && r.fn === i) return this._firingCount && (r.fn = u, this._events[t] = n = n.slice()), void n.splice(o, 1);
        }

        console.warn("listener not found");
      }
    },
    fire: function fire(t, i, e) {
      if (!this.listens(t, e)) return this;
      var n = l({}, i, {
        type: t,
        target: this,
        sourceTarget: i && i.sourceTarget || this
      });

      if (this._events) {
        var o = this._events[t];

        if (o) {
          this._firingCount = this._firingCount + 1 || 1;

          for (var s = 0, r = o.length; s < r; s++) {
            var a = o[s];
            a.fn.call(a.ctx || this, n);
          }

          this._firingCount--;
        }
      }

      return e && this._propagateEvent(n), this;
    },
    listens: function listens(t, i) {
      "string" != typeof t && console.warn('"string" type argument expected');
      var e = this._events && this._events[t];
      if (e && e.length) return !0;
      if (i) for (var n in this._eventParents) {
        if (this._eventParents[n].listens(t, i)) return !0;
      }
      return !1;
    },
    once: function once(t, i, e) {
      if ("object" == _typeof(t)) {
        for (var n in t) {
          this.once(n, t[n], i);
        }

        return this;
      }

      var o = a(function () {
        this.off(t, i, e).off(t, o, e);
      }, this);
      return this.on(t, i, e).on(t, o, e);
    },
    addEventParent: function addEventParent(t) {
      return this._eventParents = this._eventParents || {}, this._eventParents[h(t)] = t, this;
    },
    removeEventParent: function removeEventParent(t) {
      return this._eventParents && delete this._eventParents[h(t)], this;
    },
    _propagateEvent: function _propagateEvent(t) {
      for (var i in this._eventParents) {
        this._eventParents[i].fire(t.type, l({
          layer: t.target,
          propagatedFrom: t.target
        }, t), !0);
      }
    }
  },
      et = (i.addEventListener = i.on, i.removeEventListener = i.clearAllEventListeners = i.off, i.addOneTimeEventListener = i.once, i.fireEvent = i.fire, i.hasEventListeners = i.listens, it.extend(i));

  function p(t, i, e) {
    this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i;
  }

  var nt = Math.trunc || function (t) {
    return 0 < t ? Math.floor(t) : Math.ceil(t);
  };

  function _(t, i, e) {
    return t instanceof p ? t : d(t) ? new p(t[0], t[1]) : null == t ? t : "object" == _typeof(t) && "x" in t && "y" in t ? new p(t.x, t.y) : new p(t, i, e);
  }

  function m(t, i) {
    if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) {
      this.extend(e[n]);
    }
  }

  function f(t, i) {
    return !t || t instanceof m ? t : new m(t, i);
  }

  function s(t, i) {
    if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) {
      this.extend(e[n]);
    }
  }

  function g(t, i) {
    return t instanceof s ? t : new s(t, i);
  }

  function v(t, i, e) {
    if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
    this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e);
  }

  function w(t, i, e) {
    return t instanceof v ? t : d(t) && "object" != _typeof(t[0]) ? 3 === t.length ? new v(t[0], t[1], t[2]) : 2 === t.length ? new v(t[0], t[1]) : null : null == t ? t : "object" == _typeof(t) && "lat" in t ? new v(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new v(t, i, e);
  }

  p.prototype = {
    clone: function clone() {
      return new p(this.x, this.y);
    },
    add: function add(t) {
      return this.clone()._add(_(t));
    },
    _add: function _add(t) {
      return this.x += t.x, this.y += t.y, this;
    },
    subtract: function subtract(t) {
      return this.clone()._subtract(_(t));
    },
    _subtract: function _subtract(t) {
      return this.x -= t.x, this.y -= t.y, this;
    },
    divideBy: function divideBy(t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function _divideBy(t) {
      return this.x /= t, this.y /= t, this;
    },
    multiplyBy: function multiplyBy(t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function _multiplyBy(t) {
      return this.x *= t, this.y *= t, this;
    },
    scaleBy: function scaleBy(t) {
      return new p(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function unscaleBy(t) {
      return new p(this.x / t.x, this.y / t.y);
    },
    round: function round() {
      return this.clone()._round();
    },
    _round: function _round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    },
    floor: function floor() {
      return this.clone()._floor();
    },
    _floor: function _floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    },
    ceil: function ceil() {
      return this.clone()._ceil();
    },
    _ceil: function _ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    },
    trunc: function trunc() {
      return this.clone()._trunc();
    },
    _trunc: function _trunc() {
      return this.x = nt(this.x), this.y = nt(this.y), this;
    },
    distanceTo: function distanceTo(t) {
      var i = (t = _(t)).x - this.x,
          t = t.y - this.y;
      return Math.sqrt(i * i + t * t);
    },
    equals: function equals(t) {
      return (t = _(t)).x === this.x && t.y === this.y;
    },
    contains: function contains(t) {
      return t = _(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
    },
    toString: function toString() {
      return "Point(" + e(this.x) + ", " + e(this.y) + ")";
    }
  }, m.prototype = {
    extend: function extend(t) {
      return t = _(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this;
    },
    getCenter: function getCenter(t) {
      return new p((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
    },
    getBottomLeft: function getBottomLeft() {
      return new p(this.min.x, this.max.y);
    },
    getTopRight: function getTopRight() {
      return new p(this.max.x, this.min.y);
    },
    getTopLeft: function getTopLeft() {
      return this.min;
    },
    getBottomRight: function getBottomRight() {
      return this.max;
    },
    getSize: function getSize() {
      return this.max.subtract(this.min);
    },
    contains: function contains(t) {
      var i, e;
      return (t = ("number" == typeof t[0] || t instanceof p ? _ : f)(t)) instanceof m ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y;
    },
    intersects: function intersects(t) {
      t = f(t);
      var i = this.min,
          e = this.max,
          n = t.min,
          t = t.max,
          o = t.x >= i.x && n.x <= e.x,
          t = t.y >= i.y && n.y <= e.y;
      return o && t;
    },
    overlaps: function overlaps(t) {
      t = f(t);
      var i = this.min,
          e = this.max,
          n = t.min,
          t = t.max,
          o = t.x > i.x && n.x < e.x,
          t = t.y > i.y && n.y < e.y;
      return o && t;
    },
    isValid: function isValid() {
      return !(!this.min || !this.max);
    }
  }, s.prototype = {
    extend: function extend(t) {
      var i,
          e,
          n = this._southWest,
          o = this._northEast;
      if (t instanceof v) e = i = t;else {
        if (!(t instanceof s)) return t ? this.extend(w(t) || g(t)) : this;
        if (i = t._southWest, e = t._northEast, !i || !e) return this;
      }
      return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new v(i.lat, i.lng), this._northEast = new v(e.lat, e.lng)), this;
    },
    pad: function pad(t) {
      var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          t = Math.abs(i.lng - e.lng) * t;
      return new s(new v(i.lat - n, i.lng - t), new v(e.lat + n, e.lng + t));
    },
    getCenter: function getCenter() {
      return new v((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    },
    getSouthWest: function getSouthWest() {
      return this._southWest;
    },
    getNorthEast: function getNorthEast() {
      return this._northEast;
    },
    getNorthWest: function getNorthWest() {
      return new v(this.getNorth(), this.getWest());
    },
    getSouthEast: function getSouthEast() {
      return new v(this.getSouth(), this.getEast());
    },
    getWest: function getWest() {
      return this._southWest.lng;
    },
    getSouth: function getSouth() {
      return this._southWest.lat;
    },
    getEast: function getEast() {
      return this._northEast.lng;
    },
    getNorth: function getNorth() {
      return this._northEast.lat;
    },
    contains: function contains(t) {
      t = ("number" == typeof t[0] || t instanceof v || "lat" in t ? w : g)(t);
      var i,
          e,
          n = this._southWest,
          o = this._northEast;
      return t instanceof s ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng;
    },
    intersects: function intersects(t) {
      t = g(t);
      var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          t = t.getNorthEast(),
          o = t.lat >= i.lat && n.lat <= e.lat,
          t = t.lng >= i.lng && n.lng <= e.lng;
      return o && t;
    },
    overlaps: function overlaps(t) {
      t = g(t);
      var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          t = t.getNorthEast(),
          o = t.lat > i.lat && n.lat < e.lat,
          t = t.lng > i.lng && n.lng < e.lng;
      return o && t;
    },
    toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
    },
    equals: function equals(t, i) {
      return !!t && (t = g(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i));
    },
    isValid: function isValid() {
      return !(!this._southWest || !this._northEast);
    }
  };
  var ot = {
    latLngToPoint: function latLngToPoint(t, i) {
      t = this.projection.project(t), i = this.scale(i);
      return this.transformation._transform(t, i);
    },
    pointToLatLng: function pointToLatLng(t, i) {
      i = this.scale(i), t = this.transformation.untransform(t, i);
      return this.projection.unproject(t);
    },
    project: function project(t) {
      return this.projection.project(t);
    },
    unproject: function unproject(t) {
      return this.projection.unproject(t);
    },
    scale: function scale(t) {
      return 256 * Math.pow(2, t);
    },
    zoom: function zoom(t) {
      return Math.log(t / 256) / Math.LN2;
    },
    getProjectedBounds: function getProjectedBounds(t) {
      if (this.infinite) return null;
      var i = this.projection.bounds,
          t = this.scale(t);
      return new m(this.transformation.transform(i.min, t), this.transformation.transform(i.max, t));
    },
    infinite: !(v.prototype = {
      equals: function equals(t, i) {
        return !!t && (t = w(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i));
      },
      toString: function toString(t) {
        return "LatLng(" + e(this.lat, t) + ", " + e(this.lng, t) + ")";
      },
      distanceTo: function distanceTo(t) {
        return st.distance(this, w(t));
      },
      wrap: function wrap() {
        return st.wrapLatLng(this);
      },
      toBounds: function toBounds(t) {
        var t = 180 * t / 40075017,
            i = t / Math.cos(Math.PI / 180 * this.lat);
        return g([this.lat - t, this.lng - i], [this.lat + t, this.lng + i]);
      },
      clone: function clone() {
        return new v(this.lat, this.lng, this.alt);
      }
    }),
    wrapLatLng: function wrapLatLng(t) {
      var i = this.wrapLng ? H(t.lng, this.wrapLng, !0) : t.lng;
      return new v(this.wrapLat ? H(t.lat, this.wrapLat, !0) : t.lat, i, t.alt);
    },
    wrapLatLngBounds: function wrapLatLngBounds(t) {
      var i = t.getCenter(),
          e = this.wrapLatLng(i),
          n = i.lat - e.lat,
          i = i.lng - e.lng;
      if (0 == n && 0 == i) return t;
      e = t.getSouthWest(), t = t.getNorthEast();
      return new s(new v(e.lat - n, e.lng - i), new v(t.lat - n, t.lng - i));
    }
  },
      st = l({}, ot, {
    wrapLng: [-180, 180],
    R: 6371e3,
    distance: function distance(t, i) {
      var e = Math.PI / 180,
          n = t.lat * e,
          o = i.lat * e,
          s = Math.sin((i.lat - t.lat) * e / 2),
          i = Math.sin((i.lng - t.lng) * e / 2),
          t = s * s + Math.cos(n) * Math.cos(o) * i * i,
          e = 2 * Math.atan2(Math.sqrt(t), Math.sqrt(1 - t));
      return this.R * e;
    }
  }),
      rt = 6378137,
      rt = {
    R: rt,
    MAX_LATITUDE: 85.0511287798,
    project: function project(t) {
      var i = Math.PI / 180,
          e = this.MAX_LATITUDE,
          e = Math.max(Math.min(e, t.lat), -e),
          e = Math.sin(e * i);
      return new p(this.R * t.lng * i, this.R * Math.log((1 + e) / (1 - e)) / 2);
    },
    unproject: function unproject(t) {
      var i = 180 / Math.PI;
      return new v((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R);
    },
    bounds: new m([-(rt = rt * Math.PI), -rt], [rt, rt])
  };

  function at(t, i, e, n) {
    if (d(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void (this._d = t[3]);
    this._a = t, this._b = i, this._c = e, this._d = n;
  }

  function ht(t, i, e, n) {
    return new at(t, i, e, n);
  }

  at.prototype = {
    transform: function transform(t, i) {
      return this._transform(t.clone(), i);
    },
    _transform: function _transform(t, i) {
      return t.x = (i = i || 1) * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t;
    },
    untransform: function untransform(t, i) {
      return new p((t.x / (i = i || 1) - this._b) / this._a, (t.y / i - this._d) / this._c);
    }
  };
  var lt = l({}, st, {
    code: "EPSG:3857",
    projection: rt,
    transformation: ht(lt = .5 / (Math.PI * rt.R), .5, -lt, .5)
  }),
      ut = l({}, lt, {
    code: "EPSG:900913"
  });

  function ct(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }

  function dt(t, i) {
    for (var e, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
      for (e = 0, n = (o = t[a]).length; e < n; e++) {
        r += (e ? "L" : "M") + (s = o[e]).x + " " + s.y;
      }

      r += i ? P.svg ? "z" : "x" : "";
    }

    return r || "M0 0";
  }

  var _t = document.documentElement.style,
      pt = ("ActiveXObject" in window),
      mt = pt && !document.addEventListener,
      n = "msLaunchUri" in navigator && !("documentMode" in document),
      ft = y("webkit"),
      gt = y("android"),
      vt = y("android 2") || y("android 3"),
      yt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      yt = gt && y("Google") && yt < 537 && !("AudioNode" in window),
      xt = !!window.opera,
      wt = !n && y("chrome"),
      Pt = y("gecko") && !ft && !xt && !pt,
      bt = !wt && y("safari"),
      Lt = y("phantom"),
      o = ("OTransition" in _t),
      Tt = 0 === navigator.platform.indexOf("Win"),
      zt = pt && "transition" in _t,
      Mt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !vt,
      _t = ("MozPerspective" in _t),
      Ct = !window.L_DISABLE_3D && (zt || Mt || _t) && !o && !Lt,
      Zt = "undefined" != typeof orientation || y("mobile"),
      St = Zt && ft,
      kt = Zt && Mt,
      Et = !window.PointerEvent && window.MSPointerEvent,
      Bt = !(!window.PointerEvent && !Et),
      At = "ontouchstart" in window || !!window.TouchEvent,
      It = !window.L_NO_TOUCH && (At || Bt),
      Ot = Zt && xt,
      Rt = Zt && Pt,
      Nt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
      Dt = function () {
    var t = !1;

    try {
      var i = Object.defineProperty({}, "passive", {
        get: function get() {
          t = !0;
        }
      });
      window.addEventListener("testPassiveEventSupport", u, i), window.removeEventListener("testPassiveEventSupport", u, i);
    } catch (t) {}

    return t;
  }(),
      jt = !!document.createElement("canvas").getContext,
      Ht = !(!document.createElementNS || !ct("svg").createSVGRect),
      Wt = !!Ht && ((Wt = document.createElement("div")).innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (Wt.firstChild && Wt.firstChild.namespaceURI));

  function y(t) {
    return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
  }

  var P = {
    ie: pt,
    ielt9: mt,
    edge: n,
    webkit: ft,
    android: gt,
    android23: vt,
    androidStock: yt,
    opera: xt,
    chrome: wt,
    gecko: Pt,
    safari: bt,
    phantom: Lt,
    opera12: o,
    win: Tt,
    ie3d: zt,
    webkit3d: Mt,
    gecko3d: _t,
    any3d: Ct,
    mobile: Zt,
    mobileWebkit: St,
    mobileWebkit3d: kt,
    msPointer: Et,
    pointer: Bt,
    touch: It,
    touchNative: At,
    mobileOpera: Ot,
    mobileGecko: Rt,
    retina: Nt,
    passiveEvents: Dt,
    canvas: jt,
    svg: Ht,
    vml: !Ht && function () {
      try {
        var t = document.createElement("div"),
            i = (t.innerHTML = '<v:shape adj="1"/>', t.firstChild);
        return i.style.behavior = "url(#default#VML)", i && "object" == _typeof(i.adj);
      } catch (t) {
        return !1;
      }
    }(),
    inlineSvg: Wt
  },
      Ft = P.msPointer ? "MSPointerDown" : "pointerdown",
      Ut = P.msPointer ? "MSPointerMove" : "pointermove",
      Vt = P.msPointer ? "MSPointerUp" : "pointerup",
      qt = P.msPointer ? "MSPointerCancel" : "pointercancel",
      Gt = {
    touchstart: Ft,
    touchmove: Ut,
    touchend: Vt,
    touchcancel: qt
  },
      Kt = {
    touchstart: function touchstart(t, i) {
      i.MSPOINTER_TYPE_TOUCH && i.pointerType === i.MSPOINTER_TYPE_TOUCH && B(i);
      ii(t, i);
    },
    touchmove: ii,
    touchend: ii,
    touchcancel: ii
  },
      Yt = {},
      Xt = !1;

  function Jt(t, i, e) {
    return "touchstart" !== i || Xt || (document.addEventListener(Ft, $t, !0), document.addEventListener(Ut, Qt, !0), document.addEventListener(Vt, ti, !0), document.addEventListener(qt, ti, !0), Xt = !0), Kt[i] ? (e = Kt[i].bind(this, e), t.addEventListener(Gt[i], e, !1), e) : (console.warn("wrong event specified:", i), L.Util.falseFn);
  }

  function $t(t) {
    Yt[t.pointerId] = t;
  }

  function Qt(t) {
    Yt[t.pointerId] && (Yt[t.pointerId] = t);
  }

  function ti(t) {
    delete Yt[t.pointerId];
  }

  function ii(t, i) {
    if (i.pointerType !== (i.MSPOINTER_TYPE_MOUSE || "mouse")) {
      for (var e in i.touches = [], Yt) {
        i.touches.push(Yt[e]);
      }

      i.changedTouches = [i], t(i);
    }
  }

  var ei = 200;

  function ni(t, e) {
    t.addEventListener("dblclick", e);
    var n,
        o = 0;

    function i(t) {
      var i;
      1 !== t.detail ? n = t.detail : "mouse" === t.pointerType || t.sourceCapabilities && !t.sourceCapabilities.firesTouchEvents || ((i = Date.now()) - o <= ei ? 2 === ++n && e(function (t) {
        var i,
            e,
            n = {};

        for (e in t) {
          i = t[e], n[e] = i && i.bind ? i.bind(t) : i;
        }

        return (t = n).type = "dblclick", n.detail = 2, n.isTrusted = !1, n._simulated = !0, n;
      }(t)) : n = 1, o = i);
    }

    return t.addEventListener("click", i), {
      dblclick: e,
      simDblclick: i
    };
  }

  var oi,
      si,
      ri,
      ai,
      hi,
      li,
      ui = wi(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
      ci = wi(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
      di = "webkitTransition" === ci || "OTransition" === ci ? ci + "End" : "transitionend";

  function _i(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }

  function pi(t, i) {
    var e = t.style[i] || t.currentStyle && t.currentStyle[i];
    return "auto" === (e = e && "auto" !== e || !document.defaultView ? e : (t = document.defaultView.getComputedStyle(t, null)) ? t[i] : null) ? null : e;
  }

  function b(t, i, e) {
    t = document.createElement(t);
    return t.className = i || "", e && e.appendChild(t), t;
  }

  function T(t) {
    var i = t.parentNode;
    i && i.removeChild(t);
  }

  function mi(t) {
    for (; t.firstChild;) {
      t.removeChild(t.firstChild);
    }
  }

  function fi(t) {
    var i = t.parentNode;
    i && i.lastChild !== t && i.appendChild(t);
  }

  function gi(t) {
    var i = t.parentNode;
    i && i.firstChild !== t && i.insertBefore(t, i.firstChild);
  }

  function vi(t, i) {
    if (void 0 !== t.classList) return t.classList.contains(i);
    t = xi(t);
    return 0 < t.length && new RegExp("(^|\\s)" + i + "(\\s|$)").test(t);
  }

  function z(t, i) {
    var e;
    if (void 0 !== t.classList) for (var n = F(i), o = 0, s = n.length; o < s; o++) {
      t.classList.add(n[o]);
    } else vi(t, i) || yi(t, ((e = xi(t)) ? e + " " : "") + i);
  }

  function M(t, i) {
    void 0 !== t.classList ? t.classList.remove(i) : yi(t, W((" " + xi(t) + " ").replace(" " + i + " ", " ")));
  }

  function yi(t, i) {
    void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i;
  }

  function xi(t) {
    return void 0 === (t = t.correspondingElement ? t.correspondingElement : t).className.baseVal ? t.className : t.className.baseVal;
  }

  function C(t, i) {
    if ("opacity" in t.style) t.style.opacity = i;else if ("filter" in t.style) {
      var e = !1,
          n = "DXImageTransform.Microsoft.Alpha";

      try {
        e = t.filters.item(n);
      } catch (t) {
        if (1 === i) return;
      }

      i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")";
    }
  }

  function wi(t) {
    for (var i = document.documentElement.style, e = 0; e < t.length; e++) {
      if (t[e] in i) return t[e];
    }

    return !1;
  }

  function Pi(t, i, e) {
    i = i || new p(0, 0);
    t.style[ui] = (P.ie3d ? "translate(" + i.x + "px," + i.y + "px)" : "translate3d(" + i.x + "px," + i.y + "px,0)") + (e ? " scale(" + e + ")" : "");
  }

  function Z(t, i) {
    t._leaflet_pos = i, P.any3d ? Pi(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px");
  }

  function bi(t) {
    return t._leaflet_pos || new p(0, 0);
  }

  function Li() {
    S(window, "dragstart", B);
  }

  function Ti() {
    E(window, "dragstart", B);
  }

  function zi(t) {
    for (; -1 === t.tabIndex;) {
      t = t.parentNode;
    }

    t.style && (Mi(), li = (hi = t).style.outline, t.style.outline = "none", S(window, "keydown", Mi));
  }

  function Mi() {
    hi && (hi.style.outline = li, li = hi = void 0, E(window, "keydown", Mi));
  }

  function Ci(t) {
    for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body);) {
      ;
    }

    return t;
  }

  function Zi(t) {
    var i = t.getBoundingClientRect();
    return {
      x: i.width / t.offsetWidth || 1,
      y: i.height / t.offsetHeight || 1,
      boundingClientRect: i
    };
  }

  ai = "onselectstart" in document ? (ri = function ri() {
    S(window, "selectstart", B);
  }, function () {
    E(window, "selectstart", B);
  }) : (si = wi(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]), ri = function ri() {
    var t;
    si && (t = document.documentElement.style, oi = t[si], t[si] = "none");
  }, function () {
    si && (document.documentElement.style[si] = oi, oi = void 0);
  });
  pt = {
    __proto__: null,
    TRANSFORM: ui,
    TRANSITION: ci,
    TRANSITION_END: di,
    get: _i,
    getStyle: pi,
    create: b,
    remove: T,
    empty: mi,
    toFront: fi,
    toBack: gi,
    hasClass: vi,
    addClass: z,
    removeClass: M,
    setClass: yi,
    getClass: xi,
    setOpacity: C,
    testProp: wi,
    setTransform: Pi,
    setPosition: Z,
    getPosition: bi,

    get disableTextSelection() {
      return ri;
    },

    get enableTextSelection() {
      return ai;
    },

    disableImageDrag: Li,
    enableImageDrag: Ti,
    preventOutline: zi,
    restoreOutline: Mi,
    getSizedParentNode: Ci,
    getScale: Zi
  };

  function S(t, i, e, n) {
    if (i && "object" == _typeof(i)) for (var o in i) {
      Ei(t, o, i[o], e);
    } else for (var s = 0, r = (i = F(i)).length; s < r; s++) {
      Ei(t, i[s], e, n);
    }
    return this;
  }

  var k = "_leaflet_events";

  function E(t, i, e, n) {
    if (1 === arguments.length) Si(t), delete t[k];else if (i && "object" == _typeof(i)) for (var o in i) {
      Bi(t, o, i[o], e);
    } else if (i = F(i), 2 === arguments.length) Si(t, function (t) {
      return -1 !== G(i, t);
    });else for (var s = 0, r = i.length; s < r; s++) {
      Bi(t, i[s], e, n);
    }
    return this;
  }

  function Si(t, i) {
    for (var e in t[k]) {
      var n = e.split(/\d/)[0];
      i && !i(n) || Bi(t, n, null, null, e);
    }
  }

  var ki = {
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    wheel: !("onwheel" in window) && "mousewheel"
  };

  function Ei(i, t, e, n) {
    var o,
        s,
        r = t + h(e) + (n ? "_" + h(n) : "");
    i[k] && i[k][r] || (s = o = function o(t) {
      return e.call(n || i, t || window.event);
    }, !P.touchNative && P.pointer && 0 === t.indexOf("touch") ? o = Jt(i, t, o) : P.touch && "dblclick" === t ? o = ni(i, o) : "addEventListener" in i ? "touchstart" === t || "touchmove" === t || "wheel" === t || "mousewheel" === t ? i.addEventListener(ki[t] || t, o, !!P.passiveEvents && {
      passive: !1
    }) : "mouseenter" === t || "mouseleave" === t ? i.addEventListener(ki[t], o = function o(t) {
      t = t || window.event, Hi(i, t) && s(t);
    }, !1) : i.addEventListener(t, s, !1) : i.attachEvent("on" + t, o), i[k] = i[k] || {}, i[k][r] = o);
  }

  function Bi(t, i, e, n, o) {
    o = o || i + h(e) + (n ? "_" + h(n) : "");
    var s,
        r,
        e = t[k] && t[k][o];
    e && (!P.touchNative && P.pointer && 0 === i.indexOf("touch") ? (n = t, r = e, Gt[s = i] ? n.removeEventListener(Gt[s], r, !1) : console.warn("wrong event specified:", s)) : P.touch && "dblclick" === i ? (n = e, (r = t).removeEventListener("dblclick", n.dblclick), r.removeEventListener("click", n.simDblclick)) : "removeEventListener" in t ? t.removeEventListener(ki[i] || i, e, !1) : t.detachEvent("on" + i, e), t[k][o] = null);
  }

  function Ai(t) {
    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
  }

  function Ii(t) {
    return Ei(t, "wheel", Ai), this;
  }

  function Oi(t) {
    return S(t, "mousedown touchstart dblclick contextmenu", Ai), t._leaflet_disable_click = !0, this;
  }

  function B(t) {
    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
  }

  function Ri(t) {
    return B(t), Ai(t), this;
  }

  function Ni(t, i) {
    if (!i) return new p(t.clientX, t.clientY);
    var e = Zi(i),
        n = e.boundingClientRect;
    return new p((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop);
  }

  var Di = P.win && P.chrome ? 2 * window.devicePixelRatio : P.gecko ? window.devicePixelRatio : 1;

  function ji(t) {
    return P.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Di : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
  }

  function Hi(t, i) {
    var e = i.relatedTarget;
    if (!e) return !0;

    try {
      for (; e && e !== t;) {
        e = e.parentNode;
      }
    } catch (t) {
      return !1;
    }

    return e !== t;
  }

  var mt = {
    __proto__: null,
    on: S,
    off: E,
    stopPropagation: Ai,
    disableScrollPropagation: Ii,
    disableClickPropagation: Oi,
    preventDefault: B,
    stop: Ri,
    getMousePosition: Ni,
    getWheelDelta: ji,
    isExternalTarget: Hi,
    addListener: S,
    removeListener: E
  },
      Wi = et.extend({
    run: function run(t, i, e, n) {
      this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = bi(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
    },
    stop: function stop() {
      this._inProgress && (this._step(!0), this._complete());
    },
    _animate: function _animate() {
      this._animId = x(this._animate, this), this._step();
    },
    _step: function _step(t) {
      var i = +new Date() - this._startTime,
          e = 1e3 * this._duration;
      i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete());
    },
    _runFrame: function _runFrame(t, i) {
      t = this._startPos.add(this._offset.multiplyBy(t));
      i && t._round(), Z(this._el, t), this.fire("step");
    },
    _complete: function _complete() {
      r(this._animId), this._inProgress = !1, this.fire("end");
    },
    _easeOut: function _easeOut(t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    }
  }),
      A = et.extend({
    options: {
      crs: lt,
      center: void 0,
      zoom: void 0,
      minZoom: void 0,
      maxZoom: void 0,
      layers: [],
      maxBounds: void 0,
      renderer: void 0,
      zoomAnimation: !0,
      zoomAnimationThreshold: 4,
      fadeAnimation: !0,
      markerZoomAnimation: !0,
      transform3DLimit: 8388608,
      zoomSnap: 1,
      zoomDelta: 1,
      trackResize: !0
    },
    initialize: function initialize(t, i) {
      i = c(this, i), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = a(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(w(i.center), i.zoom, {
        reset: !0
      }), this.callInitHooks(), this._zoomAnimated = ci && P.any3d && !P.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), S(this._proxy, di, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
    },
    setView: function setView(t, i, e) {
      if ((i = void 0 === i ? this._zoom : this._limitZoom(i), t = this._limitCenter(w(t), i, this.options.maxBounds), e = e || {}, this._stop(), this._loaded && !e.reset && !0 !== e) && (void 0 !== e.animate && (e.zoom = l({
        animate: e.animate
      }, e.zoom), e.pan = l({
        animate: e.animate,
        duration: e.duration
      }, e.pan)), this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, e.zoom) : this._tryAnimatedPan(t, e.pan))) return clearTimeout(this._sizeTimer), this;
      return this._resetView(t, i), this;
    },
    setZoom: function setZoom(t, i) {
      return this._loaded ? this.setView(this.getCenter(), t, {
        zoom: i
      }) : (this._zoom = t, this);
    },
    zoomIn: function zoomIn(t, i) {
      return t = t || (P.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i);
    },
    zoomOut: function zoomOut(t, i) {
      return t = t || (P.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i);
    },
    setZoomAround: function setZoomAround(t, i, e) {
      var n = this.getZoomScale(i),
          o = this.getSize().divideBy(2),
          t = (t instanceof p ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
          n = this.containerPointToLatLng(o.add(t));
      return this.setView(n, i, {
        zoom: e
      });
    },
    _getBoundsCenterZoom: function _getBoundsCenterZoom(t, i) {
      i = i || {}, t = t.getBounds ? t.getBounds() : g(t);

      var e = _(i.paddingTopLeft || i.padding || [0, 0]),
          n = _(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, e.add(n));

      if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
        center: t.getCenter(),
        zoom: o
      };
      i = n.subtract(e).divideBy(2), n = this.project(t.getSouthWest(), o), e = this.project(t.getNorthEast(), o);
      return {
        center: this.unproject(n.add(e).divideBy(2).add(i), o),
        zoom: o
      };
    },
    fitBounds: function fitBounds(t, i) {
      if (!(t = g(t)).isValid()) throw new Error("Bounds are not valid.");
      t = this._getBoundsCenterZoom(t, i);
      return this.setView(t.center, t.zoom, i);
    },
    fitWorld: function fitWorld(t) {
      return this.fitBounds([[-90, -180], [90, 180]], t);
    },
    panTo: function panTo(t, i) {
      return this.setView(t, this._zoom, {
        pan: i
      });
    },
    panBy: function panBy(t, i) {
      return i = i || {}, (t = _(t).round()).x || t.y ? (!0 === i.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new Wi(), this._panAnim.on({
        step: this._onPanTransitionStep,
        end: this._onPanTransitionEnd
      }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate ? (z(this._mapPane, "leaflet-pan-anim"), e = this._getMapPanePos().subtract(t).round(), this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)) : (this._rawPanBy(t), this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this) : this.fire("moveend");
      var e;
    },
    flyTo: function flyTo(n, o, t) {
      if (!1 === (t = t || {}).animate || !P.any3d) return this.setView(n, o, t);

      this._stop();

      var s = this.project(this.getCenter()),
          r = this.project(n),
          i = this.getSize(),
          a = this._zoom,
          h = (n = w(n), o = void 0 === o ? a : o, Math.max(i.x, i.y)),
          e = h * this.getZoomScale(a, o),
          l = r.distanceTo(s) || 1,
          u = 1.42,
          c = u * u;

      function d(t) {
        t = (e * e - h * h + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? e : h) * c * l), t = Math.sqrt(t * t + 1) - t;
        return t < 1e-9 ? -18 : Math.log(t);
      }

      function _(t) {
        return (Math.exp(t) - Math.exp(-t)) / 2;
      }

      function p(t) {
        return (Math.exp(t) + Math.exp(-t)) / 2;
      }

      var m = d(0);

      function f(t) {
        return h * (p(m) * (_(t = m + u * t) / p(t)) - _(m)) / c;
      }

      var g = Date.now(),
          v = (d(1) - m) / u,
          y = t.duration ? 1e3 * t.duration : 1e3 * v * .8;
      return this._moveStart(!0, t.noMoveStart), function t() {
        var i = (Date.now() - g) / y,
            e = (1 - Math.pow(1 - i, 1.5)) * v;
        i <= 1 ? (this._flyToFrame = x(t, this), this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(e) / l)), a), this.getScaleZoom(h / (i = e, h * (p(m) / p(m + u * i))), a), {
          flyTo: !0
        })) : this._move(n, o)._moveEnd(!0);
      }.call(this), this;
    },
    flyToBounds: function flyToBounds(t, i) {
      t = this._getBoundsCenterZoom(t, i);
      return this.flyTo(t.center, t.zoom, i);
    },
    setMaxBounds: function setMaxBounds(t) {
      return (t = g(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds));
    },
    setMinZoom: function setMinZoom(t) {
      var i = this.options.minZoom;
      return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
    },
    setMaxZoom: function setMaxZoom(t) {
      var i = this.options.maxZoom;
      return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
    },
    panInsideBounds: function panInsideBounds(t, i) {
      this._enforcingBounds = !0;

      var e = this.getCenter(),
          t = this._limitCenter(e, this._zoom, g(t));

      return e.equals(t) || this.panTo(t, i), this._enforcingBounds = !1, this;
    },
    panInside: function panInside(t, i) {
      var e = _((i = i || {}).paddingTopLeft || i.padding || [0, 0]),
          n = _(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.project(this.getCenter()),
          t = this.project(t),
          s = this.getPixelBounds(),
          e = f([s.min.add(e), s.max.subtract(n)]),
          s = e.getSize();

      return e.contains(t) || (this._enforcingBounds = !0, n = t.subtract(e.getCenter()), e = e.extend(t).getSize().subtract(s), o.x += n.x < 0 ? -e.x : e.x, o.y += n.y < 0 ? -e.y : e.y, this.panTo(this.unproject(o), i), this._enforcingBounds = !1), this;
    },
    invalidateSize: function invalidateSize(t) {
      if (!this._loaded) return this;
      t = l({
        animate: !1,
        pan: !0
      }, !0 === t ? {
        animate: !0
      } : t);
      var i = this.getSize(),
          e = (this._sizeChanged = !0, this._lastCenter = null, this.getSize()),
          n = i.divideBy(2).round(),
          o = e.divideBy(2).round(),
          n = n.subtract(o);
      return n.x || n.y ? (t.animate && t.pan ? this.panBy(n) : (t.pan && this._rawPanBy(n), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(a(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
        oldSize: i,
        newSize: e
      })) : this;
    },
    stop: function stop() {
      return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
    },
    locate: function locate(t) {
      if (t = this._locateOptions = l({
        timeout: 1e4,
        watch: !1
      }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
        code: 0,
        message: "Geolocation not supported."
      }), this;
      var i = a(this._handleGeolocationResponse, this),
          e = a(this._handleGeolocationError, this);
      return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, e, t) : navigator.geolocation.getCurrentPosition(i, e, t), this;
    },
    stopLocate: function stopLocate() {
      return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
    },
    _handleGeolocationError: function _handleGeolocationError(t) {
      var i;
      this._container._leaflet_id && (i = t.code, t = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout"), this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
        code: i,
        message: "Geolocation error: " + t + "."
      }));
    },
    _handleGeolocationResponse: function _handleGeolocationResponse(t) {
      if (this._container._leaflet_id) {
        var i,
            e,
            n = new v(t.coords.latitude, t.coords.longitude),
            o = n.toBounds(2 * t.coords.accuracy),
            s = this._locateOptions,
            r = (s.setView && (i = this.getBoundsZoom(o), this.setView(n, s.maxZoom ? Math.min(i, s.maxZoom) : i)), {
          latlng: n,
          bounds: o,
          timestamp: t.timestamp
        });

        for (e in t.coords) {
          "number" == typeof t.coords[e] && (r[e] = t.coords[e]);
        }

        this.fire("locationfound", r);
      }
    },
    addHandler: function addHandler(t, i) {
      if (!i) return this;
      i = this[t] = new i(this);
      return this._handlers.push(i), this.options[t] && i.enable(), this;
    },
    remove: function remove() {
      if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");

      try {
        delete this._container._leaflet_id, delete this._containerId;
      } catch (t) {
        this._container._leaflet_id = void 0, this._containerId = void 0;
      }

      for (var t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), T(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (r(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) {
        this._layers[t].remove();
      }

      for (t in this._panes) {
        T(this._panes[t]);
      }

      return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
    },
    createPane: function createPane(t, i) {
      i = b("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
      return t && (this._panes[t] = i), i;
    },
    getCenter: function getCenter() {
      return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
    },
    getZoom: function getZoom() {
      return this._zoom;
    },
    getBounds: function getBounds() {
      var t = this.getPixelBounds();
      return new s(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
    },
    getMinZoom: function getMinZoom() {
      return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
    },
    getMaxZoom: function getMaxZoom() {
      return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
    },
    getBoundsZoom: function getBoundsZoom(t, i, e) {
      t = g(t), e = _(e || [0, 0]);
      var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          t = t.getSouthEast(),
          e = this.getSize().subtract(e),
          t = f(this.project(t, n), this.project(r, n)).getSize(),
          r = P.any3d ? this.options.zoomSnap : 1,
          a = e.x / t.x,
          e = e.y / t.y,
          t = i ? Math.max(a, e) : Math.min(a, e),
          n = this.getScaleZoom(t, n);
      return r && (n = Math.round(n / (r / 100)) * (r / 100), n = i ? Math.ceil(n / r) * r : Math.floor(n / r) * r), Math.max(o, Math.min(s, n));
    },
    getSize: function getSize() {
      return this._size && !this._sizeChanged || (this._size = new p(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
    },
    getPixelBounds: function getPixelBounds(t, i) {
      t = this._getTopLeftPoint(t, i);
      return new m(t, t.add(this.getSize()));
    },
    getPixelOrigin: function getPixelOrigin() {
      return this._checkIfLoaded(), this._pixelOrigin;
    },
    getPixelWorldBounds: function getPixelWorldBounds(t) {
      return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
    },
    getPane: function getPane(t) {
      return "string" == typeof t ? this._panes[t] : t;
    },
    getPanes: function getPanes() {
      return this._panes;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    getZoomScale: function getZoomScale(t, i) {
      var e = this.options.crs;
      return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i);
    },
    getScaleZoom: function getScaleZoom(t, i) {
      var e = this.options.crs,
          t = (i = void 0 === i ? this._zoom : i, e.zoom(t * e.scale(i)));
      return isNaN(t) ? 1 / 0 : t;
    },
    project: function project(t, i) {
      return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(w(t), i);
    },
    unproject: function unproject(t, i) {
      return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(_(t), i);
    },
    layerPointToLatLng: function layerPointToLatLng(t) {
      t = _(t).add(this.getPixelOrigin());
      return this.unproject(t);
    },
    latLngToLayerPoint: function latLngToLayerPoint(t) {
      return this.project(w(t))._round()._subtract(this.getPixelOrigin());
    },
    wrapLatLng: function wrapLatLng(t) {
      return this.options.crs.wrapLatLng(w(t));
    },
    wrapLatLngBounds: function wrapLatLngBounds(t) {
      return this.options.crs.wrapLatLngBounds(g(t));
    },
    distance: function distance(t, i) {
      return this.options.crs.distance(w(t), w(i));
    },
    containerPointToLayerPoint: function containerPointToLayerPoint(t) {
      return _(t).subtract(this._getMapPanePos());
    },
    layerPointToContainerPoint: function layerPointToContainerPoint(t) {
      return _(t).add(this._getMapPanePos());
    },
    containerPointToLatLng: function containerPointToLatLng(t) {
      t = this.containerPointToLayerPoint(_(t));
      return this.layerPointToLatLng(t);
    },
    latLngToContainerPoint: function latLngToContainerPoint(t) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(w(t)));
    },
    mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
      return Ni(t, this._container);
    },
    mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
    },
    mouseEventToLatLng: function mouseEventToLatLng(t) {
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
    },
    _initContainer: function _initContainer(t) {
      t = this._container = _i(t);
      if (!t) throw new Error("Map container not found.");
      if (t._leaflet_id) throw new Error("Map container is already initialized.");
      S(t, "scroll", this._onScroll, this), this._containerId = h(t);
    },
    _initLayout: function _initLayout() {
      var t = this._container,
          i = (this._fadeAnimated = this.options.fadeAnimation && P.any3d, z(t, "leaflet-container" + (P.touch ? " leaflet-touch" : "") + (P.retina ? " leaflet-retina" : "") + (P.ielt9 ? " leaflet-oldie" : "") + (P.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")), pi(t, "position"));
      "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
    },
    _initPanes: function _initPanes() {
      var t = this._panes = {};
      this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Z(this._mapPane, new p(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (z(t.markerPane, "leaflet-zoom-hide"), z(t.shadowPane, "leaflet-zoom-hide"));
    },
    _resetView: function _resetView(t, i) {
      Z(this._mapPane, new p(0, 0));
      var e = !this._loaded,
          n = (this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset"), this._zoom !== i);
      this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load");
    },
    _moveStart: function _moveStart(t, i) {
      return t && this.fire("zoomstart"), i || this.fire("movestart"), this;
    },
    _move: function _move(t, i, e, n) {
      void 0 === i && (i = this._zoom);
      var o = this._zoom !== i;
      return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? e && e.pinch && this.fire("zoom", e) : ((o || e && e.pinch) && this.fire("zoom", e), this.fire("move", e)), this;
    },
    _moveEnd: function _moveEnd(t) {
      return t && this.fire("zoomend"), this.fire("moveend");
    },
    _stop: function _stop() {
      return r(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
    },
    _rawPanBy: function _rawPanBy(t) {
      Z(this._mapPane, this._getMapPanePos().subtract(t));
    },
    _getZoomSpan: function _getZoomSpan() {
      return this.getMaxZoom() - this.getMinZoom();
    },
    _panInsideMaxBounds: function _panInsideMaxBounds() {
      this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
    },
    _checkIfLoaded: function _checkIfLoaded() {
      if (!this._loaded) throw new Error("Set map center and zoom first.");
    },
    _initEvents: function _initEvents(t) {
      this._targets = {};
      var i = t ? E : S;
      i((this._targets[h(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), P.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
    },
    _onResize: function _onResize() {
      r(this._resizeRequest), this._resizeRequest = x(function () {
        this.invalidateSize({
          debounceMoveend: !0
        });
      }, this);
    },
    _onScroll: function _onScroll() {
      this._container.scrollTop = 0, this._container.scrollLeft = 0;
    },
    _onMoveEnd: function _onMoveEnd() {
      var t = this._getMapPanePos();

      Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
    },
    _findEventTargets: function _findEventTargets(t, i) {
      for (var e, n = [], o = "mouseout" === i || "mouseover" === i, s = t.target || t.srcElement, r = !1; s;) {
        if ((e = this._targets[h(s)]) && ("click" === i || "preclick" === i) && this._draggableMoved(e)) {
          r = !0;
          break;
        }

        if (e && e.listens(i, !0)) {
          if (o && !Hi(s, t)) break;
          if (n.push(e), o) break;
        }

        if (s === this._container) break;
        s = s.parentNode;
      }

      return n = n.length || r || o || !this.listens(i, !0) ? n : [this];
    },
    _isClickDisabled: function _isClickDisabled(t) {
      for (; t !== this._container;) {
        if (t._leaflet_disable_click) return !0;
        t = t.parentNode;
      }
    },
    _handleDOMEvent: function _handleDOMEvent(t) {
      var i,
          e = t.target || t.srcElement;
      !this._loaded || e._leaflet_disable_events || "click" === t.type && this._isClickDisabled(e) || ("mousedown" === (i = t.type) && zi(e), this._fireDOMEvent(t, i));
    },
    _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
    _fireDOMEvent: function _fireDOMEvent(t, i, e) {
      "click" === t.type && ((a = l({}, t)).type = "preclick", this._fireDOMEvent(a, a.type, e));

      var n = this._findEventTargets(t, i);

      if (e) {
        for (var o = [], s = 0; s < e.length; s++) {
          e[s].listens(i, !0) && o.push(e[s]);
        }

        n = o.concat(n);
      }

      if (n.length) {
        "contextmenu" === i && B(t);
        var r,
            a = n[0],
            h = {
          originalEvent: t
        };

        for ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type && (r = a.getLatLng && (!a._radius || a._radius <= 10), h.containerPoint = r ? this.latLngToContainerPoint(a.getLatLng()) : this.mouseEventToContainerPoint(t), h.layerPoint = this.containerPointToLayerPoint(h.containerPoint), h.latlng = r ? a.getLatLng() : this.layerPointToLatLng(h.layerPoint)), s = 0; s < n.length; s++) {
          if (n[s].fire(i, h, !0), h.originalEvent._stopped || !1 === n[s].options.bubblingMouseEvents && -1 !== G(this._mouseEvents, i)) return;
        }
      }
    },
    _draggableMoved: function _draggableMoved(t) {
      return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
    },
    _clearHandlers: function _clearHandlers() {
      for (var t = 0, i = this._handlers.length; t < i; t++) {
        this._handlers[t].disable();
      }
    },
    whenReady: function whenReady(t, i) {
      return this._loaded ? t.call(i || this, {
        target: this
      }) : this.on("load", t, i), this;
    },
    _getMapPanePos: function _getMapPanePos() {
      return bi(this._mapPane) || new p(0, 0);
    },
    _moved: function _moved() {
      var t = this._getMapPanePos();

      return t && !t.equals([0, 0]);
    },
    _getTopLeftPoint: function _getTopLeftPoint(t, i) {
      return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos());
    },
    _getNewPixelOrigin: function _getNewPixelOrigin(t, i) {
      var e = this.getSize()._divideBy(2);

      return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round();
    },
    _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, i, e) {
      e = this._getNewPixelOrigin(e, i);
      return this.project(t, i)._subtract(e);
    },
    _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(t, i, e) {
      e = this._getNewPixelOrigin(e, i);
      return f([this.project(t.getSouthWest(), i)._subtract(e), this.project(t.getNorthWest(), i)._subtract(e), this.project(t.getSouthEast(), i)._subtract(e), this.project(t.getNorthEast(), i)._subtract(e)]);
    },
    _getCenterLayerPoint: function _getCenterLayerPoint() {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    },
    _getCenterOffset: function _getCenterOffset(t) {
      return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
    },
    _limitCenter: function _limitCenter(t, i, e) {
      if (!e) return t;

      var n = this.project(t, i),
          o = this.getSize().divideBy(2),
          o = new m(n.subtract(o), n.add(o)),
          o = this._getBoundsOffset(o, e, i);

      return o.round().equals([0, 0]) ? t : this.unproject(n.add(o), i);
    },
    _limitOffset: function _limitOffset(t, i) {
      if (!i) return t;
      var e = this.getPixelBounds(),
          e = new m(e.min.add(t), e.max.add(t));
      return t.add(this._getBoundsOffset(e, i));
    },
    _getBoundsOffset: function _getBoundsOffset(t, i, e) {
      i = f(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)), e = i.min.subtract(t.min), i = i.max.subtract(t.max);
      return new p(this._rebound(e.x, -i.x), this._rebound(e.y, -i.y));
    },
    _rebound: function _rebound(t, i) {
      return 0 < t + i ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
    },
    _limitZoom: function _limitZoom(t) {
      var i = this.getMinZoom(),
          e = this.getMaxZoom(),
          n = P.any3d ? this.options.zoomSnap : 1;
      return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
    },
    _onPanTransitionStep: function _onPanTransitionStep() {
      this.fire("move");
    },
    _onPanTransitionEnd: function _onPanTransitionEnd() {
      M(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
    },
    _tryAnimatedPan: function _tryAnimatedPan(t, i) {
      t = this._getCenterOffset(t)._trunc();
      return !(!0 !== (i && i.animate) && !this.getSize().contains(t)) && (this.panBy(t, i), !0);
    },
    _createAnimProxy: function _createAnimProxy() {
      var t = this._proxy = b("div", "leaflet-proxy leaflet-zoom-animated");
      this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
        var i = ui,
            e = this._proxy.style[i];
        Pi(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
      }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
    },
    _destroyAnimProxy: function _destroyAnimProxy() {
      T(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
    },
    _animMoveEnd: function _animMoveEnd() {
      var t = this.getCenter(),
          i = this.getZoom();
      Pi(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
    },
    _catchTransitionEnd: function _catchTransitionEnd(t) {
      this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd();
    },
    _nothingToAnimate: function _nothingToAnimate() {
      return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
    },
    _tryAnimatedZoom: function _tryAnimatedZoom(t, i, e) {
      if (this._animatingZoom) return !0;
      if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;

      var n = this.getZoomScale(i),
          n = this._getCenterOffset(t)._divideBy(1 - 1 / n);

      return !(!0 !== e.animate && !this.getSize().contains(n)) && (x(function () {
        this._moveStart(!0, !1)._animateZoom(t, i, !0);
      }, this), !0);
    },
    _animateZoom: function _animateZoom(t, i, e, n) {
      this._mapPane && (e && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, z(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
        center: t,
        zoom: i,
        noUpdate: n
      }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(a(this._onZoomTransitionEnd, this), 250));
    },
    _onZoomTransitionEnd: function _onZoomTransitionEnd() {
      this._animatingZoom && (this._mapPane && M(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
    }
  });

  function Fi(t) {
    return new I(t);
  }

  var Ui,
      I = it.extend({
    options: {
      position: "topright"
    },
    initialize: function initialize(t) {
      c(this, t);
    },
    getPosition: function getPosition() {
      return this.options.position;
    },
    setPosition: function setPosition(t) {
      var i = this._map;
      return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    addTo: function addTo(t) {
      this.remove(), this._map = t;
      var i = this._container = this.onAdd(t),
          e = this.getPosition(),
          t = t._controlCorners[e];
      return z(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? t.insertBefore(i, t.firstChild) : t.appendChild(i), this._map.on("unload", this.remove, this), this;
    },
    remove: function remove() {
      return this._map && (T(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this;
    },
    _refocusOnMap: function _refocusOnMap(t) {
      this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus();
    }
  }),
      Vi = (A.include({
    addControl: function addControl(t) {
      return t.addTo(this), this;
    },
    removeControl: function removeControl(t) {
      return t.remove(), this;
    },
    _initControlPos: function _initControlPos() {
      var e = this._controlCorners = {},
          n = "leaflet-",
          o = this._controlContainer = b("div", n + "control-container", this._container);

      function t(t, i) {
        e[t + i] = b("div", n + t + " " + n + i, o);
      }

      t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
    },
    _clearControlPos: function _clearControlPos() {
      for (var t in this._controlCorners) {
        T(this._controlCorners[t]);
      }

      T(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
    }
  }), I.extend({
    options: {
      collapsed: !0,
      position: "topright",
      autoZIndex: !0,
      hideSingleBase: !1,
      sortLayers: !1,
      sortFunction: function sortFunction(t, i, e, n) {
        return e < n ? -1 : n < e ? 1 : 0;
      }
    },
    initialize: function initialize(t, i, e) {
      for (var n in c(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) {
        this._addLayer(t[n], n);
      }

      for (n in i) {
        this._addLayer(i[n], n, !0);
      }
    },
    onAdd: function onAdd(t) {
      this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);

      for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.on("add remove", this._onLayerChange, this);
      }

      return this._container;
    },
    addTo: function addTo(t) {
      return I.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
    },
    onRemove: function onRemove() {
      this._map.off("zoomend", this._checkDisabledLayers, this);

      for (var t = 0; t < this._layers.length; t++) {
        this._layers[t].layer.off("add remove", this._onLayerChange, this);
      }
    },
    addBaseLayer: function addBaseLayer(t, i) {
      return this._addLayer(t, i), this._map ? this._update() : this;
    },
    addOverlay: function addOverlay(t, i) {
      return this._addLayer(t, i, !0), this._map ? this._update() : this;
    },
    removeLayer: function removeLayer(t) {
      t.off("add remove", this._onLayerChange, this);
      t = this._getLayer(h(t));
      return t && this._layers.splice(this._layers.indexOf(t), 1), this._map ? this._update() : this;
    },
    expand: function expand() {
      z(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
      var t = this._map.getSize().y - (this._container.offsetTop + 50);
      return t < this._section.clientHeight ? (z(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : M(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
    },
    collapse: function collapse() {
      return M(this._container, "leaflet-control-layers-expanded"), this;
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-control-layers",
          i = this._container = b("div", t),
          e = this.options.collapsed,
          n = (i.setAttribute("aria-haspopup", !0), Oi(i), Ii(i), this._section = b("section", t + "-list")),
          o = (e && (this._map.on("click", this.collapse, this), S(i, {
        mouseenter: function mouseenter() {
          S(n, "click", B), this.expand(), setTimeout(function () {
            E(n, "click", B);
          });
        },
        mouseleave: this.collapse
      }, this)), this._layersLink = b("a", t + "-toggle", i));
      o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), S(o, "click", B), S(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = b("div", t + "-base", n), this._separator = b("div", t + "-separator", n), this._overlaysList = b("div", t + "-overlays", n), i.appendChild(n);
    },
    _getLayer: function _getLayer(t) {
      for (var i = 0; i < this._layers.length; i++) {
        if (this._layers[i] && h(this._layers[i].layer) === t) return this._layers[i];
      }
    },
    _addLayer: function _addLayer(t, i, e) {
      this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
        layer: t,
        name: i,
        overlay: e
      }), this.options.sortLayers && this._layers.sort(a(function (t, i) {
        return this.options.sortFunction(t.layer, i.layer, t.name, i.name);
      }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
    },
    _update: function _update() {
      if (!this._container) return this;
      mi(this._baseLayersList), mi(this._overlaysList), this._layerControlInputs = [];

      for (var t, i, e, n = 0, o = 0; o < this._layers.length; o++) {
        e = this._layers[o], this._addItem(e), i = i || e.overlay, t = t || !e.overlay, n += e.overlay ? 0 : 1;
      }

      return this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && 1 < n) ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this;
    },
    _onLayerChange: function _onLayerChange(t) {
      this._handlingClick || this._update();

      var i = this._getLayer(h(t.target)),
          t = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;

      t && this._map.fire(t, i);
    },
    _createRadioElement: function _createRadioElement(t, i) {
      t = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>", i = document.createElement("div");
      return i.innerHTML = t, i.firstChild;
    },
    _addItem: function _addItem(t) {
      var i,
          e = document.createElement("label"),
          n = this._map.hasLayer(t.layer),
          n = (t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = n) : i = this._createRadioElement("leaflet-base-layers_" + h(this), n), this._layerControlInputs.push(i), i.layerId = h(t.layer), S(i, "click", this._onInputClick, this), document.createElement("span")),
          o = (n.innerHTML = " " + t.name, document.createElement("span"));

      return e.appendChild(o), o.appendChild(i), o.appendChild(n), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e;
    },
    _onInputClick: function _onInputClick() {
      var t,
          i,
          e = this._layerControlInputs,
          n = [],
          o = [];
      this._handlingClick = !0;

      for (var s = e.length - 1; 0 <= s; s--) {
        t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
      }

      for (s = 0; s < o.length; s++) {
        this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
      }

      for (s = 0; s < n.length; s++) {
        this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
      }

      this._handlingClick = !1, this._refocusOnMap();
    },
    _checkDisabledLayers: function _checkDisabledLayers() {
      for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; 0 <= o; o--) {
        t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom;
      }
    },
    _expandIfNotCollapsed: function _expandIfNotCollapsed() {
      return this._map && !this.options.collapsed && this.expand(), this;
    }
  })),
      qi = I.extend({
    options: {
      position: "topleft",
      zoomInText: '<span aria-hidden="true">+</span>',
      zoomInTitle: "Zoom in",
      zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
      zoomOutTitle: "Zoom out"
    },
    onAdd: function onAdd(t) {
      var i = "leaflet-control-zoom",
          e = b("div", i + " leaflet-bar"),
          n = this.options;
      return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e;
    },
    onRemove: function onRemove(t) {
      t.off("zoomend zoomlevelschange", this._updateDisabled, this);
    },
    disable: function disable() {
      return this._disabled = !0, this._updateDisabled(), this;
    },
    enable: function enable() {
      return this._disabled = !1, this._updateDisabled(), this;
    },
    _zoomIn: function _zoomIn(t) {
      !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    },
    _zoomOut: function _zoomOut(t) {
      !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    },
    _createButton: function _createButton(t, i, e, n, o) {
      e = b("a", e, n);
      return e.innerHTML = t, e.href = "#", e.title = i, e.setAttribute("role", "button"), e.setAttribute("aria-label", i), Oi(e), S(e, "click", Ri), S(e, "click", o, this), S(e, "click", this._refocusOnMap, this), e;
    },
    _updateDisabled: function _updateDisabled() {
      var t = this._map,
          i = "leaflet-disabled";
      M(this._zoomInButton, i), M(this._zoomOutButton, i), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), !this._disabled && t._zoom !== t.getMinZoom() || (z(this._zoomOutButton, i), this._zoomOutButton.setAttribute("aria-disabled", "true")), !this._disabled && t._zoom !== t.getMaxZoom() || (z(this._zoomInButton, i), this._zoomInButton.setAttribute("aria-disabled", "true"));
    }
  }),
      Gi = (A.mergeOptions({
    zoomControl: !0
  }), A.addInitHook(function () {
    this.options.zoomControl && (this.zoomControl = new qi(), this.addControl(this.zoomControl));
  }), I.extend({
    options: {
      position: "bottomleft",
      maxWidth: 100,
      metric: !0,
      imperial: !0
    },
    onAdd: function onAdd(t) {
      var i = "leaflet-control-scale",
          e = b("div", i),
          n = this.options;
      return this._addScales(n, i + "-line", e), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e;
    },
    onRemove: function onRemove(t) {
      t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
    },
    _addScales: function _addScales(t, i, e) {
      t.metric && (this._mScale = b("div", i, e)), t.imperial && (this._iScale = b("div", i, e));
    },
    _update: function _update() {
      var t = this._map,
          i = t.getSize().y / 2,
          t = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));

      this._updateScales(t);
    },
    _updateScales: function _updateScales(t) {
      this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
    },
    _updateMetric: function _updateMetric(t) {
      var i = this._getRoundNum(t);

      this._updateScale(this._mScale, i < 1e3 ? i + " m" : i / 1e3 + " km", i / t);
    },
    _updateImperial: function _updateImperial(t) {
      var i,
          e,
          t = 3.2808399 * t;
      5280 < t ? (e = this._getRoundNum(i = t / 5280), this._updateScale(this._iScale, e + " mi", e / i)) : (e = this._getRoundNum(t), this._updateScale(this._iScale, e + " ft", e / t));
    },
    _updateScale: function _updateScale(t, i, e) {
      t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i;
    },
    _getRoundNum: function _getRoundNum(t) {
      var i = Math.pow(10, (Math.floor(t) + "").length - 1),
          t = t / i;
      return i * (t = 10 <= t ? 10 : 5 <= t ? 5 : 3 <= t ? 3 : 2 <= t ? 2 : 1);
    }
  })),
      Ki = I.extend({
    options: {
      position: "bottomright",
      prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (P.inlineSvg ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ' : "") + "Leaflet</a>"
    },
    initialize: function initialize(t) {
      c(this, t), this._attributions = {};
    },
    onAdd: function onAdd(t) {
      for (var i in (t.attributionControl = this)._container = b("div", "leaflet-control-attribution"), Oi(this._container), t._layers) {
        t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
      }

      return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
    },
    onRemove: function onRemove(t) {
      t.off("layeradd", this._addAttribution, this);
    },
    _addAttribution: function _addAttribution(t) {
      t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function () {
        this.removeAttribution(t.layer.getAttribution());
      }, this));
    },
    setPrefix: function setPrefix(t) {
      return this.options.prefix = t, this._update(), this;
    },
    addAttribution: function addAttribution(t) {
      return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this;
    },
    removeAttribution: function removeAttribution(t) {
      return t && this._attributions[t] && (this._attributions[t]--, this._update()), this;
    },
    _update: function _update() {
      if (this._map) {
        var t,
            i = [];

        for (t in this._attributions) {
          this._attributions[t] && i.push(t);
        }

        var e = [];
        this.options.prefix && e.push(this.options.prefix), i.length && e.push(i.join(", ")), this._container.innerHTML = e.join(' <span aria-hidden="true">|</span> ');
      }
    }
  }),
      n = (A.mergeOptions({
    attributionControl: !0
  }), A.addInitHook(function () {
    this.options.attributionControl && new Ki().addTo(this);
  }), I.Layers = Vi, I.Zoom = qi, I.Scale = Gi, I.Attribution = Ki, Fi.layers = function (t, i, e) {
    return new Vi(t, i, e);
  }, Fi.zoom = function (t) {
    return new qi(t);
  }, Fi.scale = function (t) {
    return new Gi(t);
  }, Fi.attribution = function (t) {
    return new Ki(t);
  }, it.extend({
    initialize: function initialize(t) {
      this._map = t;
    },
    enable: function enable() {
      return this._enabled || (this._enabled = !0, this.addHooks()), this;
    },
    disable: function disable() {
      return this._enabled && (this._enabled = !1, this.removeHooks()), this;
    },
    enabled: function enabled() {
      return !!this._enabled;
    }
  })),
      ft = (n.addTo = function (t, i) {
    return t.addHandler(i, this), this;
  }, {
    Events: i
  }),
      Yi = P.touch ? "touchstart mousedown" : "mousedown",
      Xi = et.extend({
    options: {
      clickTolerance: 3
    },
    initialize: function initialize(t, i, e, n) {
      c(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e;
    },
    enable: function enable() {
      this._enabled || (S(this._dragStartTarget, Yi, this._onDown, this), this._enabled = !0);
    },
    disable: function disable() {
      this._enabled && (Xi._dragging === this && this.finishDrag(!0), E(this._dragStartTarget, Yi, this._onDown, this), this._enabled = !1, this._moved = !1);
    },
    _onDown: function _onDown(t) {
      var i, e;
      this._enabled && (this._moved = !1, vi(this._element, "leaflet-zoom-anim") || (t.touches && 1 !== t.touches.length ? Xi._dragging === this && this.finishDrag() : Xi._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((Xi._dragging = this)._preventOutline && zi(this._element), Li(), ri(), this._moving || (this.fire("down"), e = t.touches ? t.touches[0] : t, i = Ci(this._element), this._startPoint = new p(e.clientX, e.clientY), this._startPos = bi(this._element), this._parentScale = Zi(i), e = "mousedown" === t.type, S(document, e ? "mousemove" : "touchmove", this._onMove, this), S(document, e ? "mouseup" : "touchend touchcancel", this._onUp, this)))));
    },
    _onMove: function _onMove(t) {
      var i;
      this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : !(i = new p((i = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX, i.clientY)._subtract(this._startPoint)).x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, B(t), this._moved || (this.fire("dragstart"), this._moved = !0, z(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), z(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition()));
    },
    _updatePosition: function _updatePosition() {
      var t = {
        originalEvent: this._lastEvent
      };
      this.fire("predrag", t), Z(this._element, this._newPos), this.fire("drag", t);
    },
    _onUp: function _onUp() {
      this._enabled && this.finishDrag();
    },
    finishDrag: function finishDrag(t) {
      M(document.body, "leaflet-dragging"), this._lastTarget && (M(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), E(document, "mousemove touchmove", this._onMove, this), E(document, "mouseup touchend touchcancel", this._onUp, this), Ti(), ai(), this._moved && this._moving && this.fire("dragend", {
        noInertia: t,
        distance: this._newPos.distanceTo(this._startPos)
      }), this._moving = !1, Xi._dragging = !1;
    }
  });

  function Ji(t, i) {
    if (!i || !t.length) return t.slice();
    i *= i;
    return t = function (t, i) {
      var e = t.length,
          n = new ((typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) != void 0 + "" ? Uint8Array : Array)(e);
      n[0] = n[e - 1] = 1, function t(i, e, n, o, s) {
        var r,
            a,
            h,
            l = 0;

        for (a = o + 1; a <= s - 1; a++) {
          h = ee(i[a], i[o], i[s], !0), l < h && (r = a, l = h);
        }

        n < l && (e[r] = 1, t(i, e, n, o, r), t(i, e, n, r, s));
      }(t, n, i, 0, e - 1);
      var o,
          s = [];

      for (o = 0; o < e; o++) {
        n[o] && s.push(t[o]);
      }

      return s;
    }(t = function (t, i) {
      for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) {
        (function (t, i) {
          var e = i.x - t.x,
              i = i.y - t.y;
          return e * e + i * i;
        })(t[n], t[o]) > i && (e.push(t[n]), o = n);
      }

      o < s - 1 && e.push(t[s - 1]);
      return e;
    }(t, i), i);
  }

  function $i(t, i, e) {
    return Math.sqrt(ee(t, i, e, !0));
  }

  function Qi(t, i, e, n, o) {
    var s,
        r,
        a,
        h = n ? Ui : ie(t, e),
        l = ie(i, e);

    for (Ui = l;;) {
      if (!(h | l)) return [t, i];
      if (h & l) return !1;
      a = ie(r = te(t, i, s = h || l, e, o), e), s === h ? (t = r, h = a) : (i = r, l = a);
    }
  }

  function te(t, i, e, n, o) {
    var s,
        r,
        a = i.x - t.x,
        i = i.y - t.y,
        h = n.min,
        n = n.max;
    return 8 & e ? (s = t.x + a * (n.y - t.y) / i, r = n.y) : 4 & e ? (s = t.x + a * (h.y - t.y) / i, r = h.y) : 2 & e ? (s = n.x, r = t.y + i * (n.x - t.x) / a) : 1 & e && (s = h.x, r = t.y + i * (h.x - t.x) / a), new p(s, r, o);
  }

  function ie(t, i) {
    var e = 0;
    return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e;
  }

  function ee(t, i, e, n) {
    var o = i.x,
        i = i.y,
        s = e.x - o,
        r = e.y - i,
        a = s * s + r * r;
    return 0 < a && (1 < (a = ((t.x - o) * s + (t.y - i) * r) / a) ? (o = e.x, i = e.y) : 0 < a && (o += s * a, i += r * a)), s = t.x - o, r = t.y - i, n ? s * s + r * r : new p(o, i);
  }

  function ne(t) {
    return !d(t[0]) || "object" != _typeof(t[0][0]) && void 0 !== t[0][0];
  }

  function oe(t) {
    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ne(t);
  }

  gt = {
    __proto__: null,
    simplify: Ji,
    pointToSegmentDistance: $i,
    closestPointOnSegment: function closestPointOnSegment(t, i, e) {
      return ee(t, i, e);
    },
    clipSegment: Qi,
    _getEdgeIntersection: te,
    _getBitCode: ie,
    _sqClosestPointOnSegment: ee,
    isFlat: ne,
    _flat: oe
  };

  function se(t, i, e) {
    for (var n, o, s, r, a, h, l, u = [1, 4, 2, 8], c = 0, d = t.length; c < d; c++) {
      t[c]._code = ie(t[c], i);
    }

    for (s = 0; s < 4; s++) {
      for (h = u[s], n = [], c = 0, o = (d = t.length) - 1; c < d; o = c++) {
        r = t[c], a = t[o], r._code & h ? a._code & h || ((l = te(a, r, h, i, e))._code = ie(l, i), n.push(l)) : (a._code & h && ((l = te(a, r, h, i, e))._code = ie(l, i), n.push(l)), n.push(r));
      }

      t = n;
    }

    return t;
  }

  var vt = {
    __proto__: null,
    clipPolygon: se
  },
      yt = {
    project: function project(t) {
      return new p(t.lng, t.lat);
    },
    unproject: function unproject(t) {
      return new v(t.y, t.x);
    },
    bounds: new m([-180, -90], [180, 90])
  },
      xt = {
    R: 6378137,
    R_MINOR: 6356752.314245179,
    bounds: new m([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
    project: function project(t) {
      var i = Math.PI / 180,
          e = this.R,
          n = t.lat * i,
          o = this.R_MINOR / e,
          o = Math.sqrt(1 - o * o),
          s = o * Math.sin(n),
          s = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - s) / (1 + s), o / 2),
          n = -e * Math.log(Math.max(s, 1e-10));
      return new p(t.lng * i * e, n);
    },
    unproject: function unproject(t) {
      for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, l = .1; h < 15 && 1e-7 < Math.abs(l); h++) {
        i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += l = Math.PI / 2 - 2 * Math.atan(r * i) - a;
      }

      return new v(a * e, t.x * e / n);
    }
  },
      wt = {
    __proto__: null,
    LonLat: yt,
    Mercator: xt,
    SphericalMercator: rt
  },
      bt = l({}, st, {
    code: "EPSG:3395",
    projection: xt,
    transformation: ht(Pt = .5 / (Math.PI * xt.R), .5, -Pt, .5)
  }),
      re = l({}, st, {
    code: "EPSG:4326",
    projection: yt,
    transformation: ht(1 / 180, 1, -1 / 180, .5)
  }),
      Lt = l({}, ot, {
    projection: yt,
    transformation: ht(1, 0, -1, 0),
    scale: function scale(t) {
      return Math.pow(2, t);
    },
    zoom: function zoom(t) {
      return Math.log(t) / Math.LN2;
    },
    distance: function distance(t, i) {
      var e = i.lng - t.lng,
          i = i.lat - t.lat;
      return Math.sqrt(e * e + i * i);
    },
    infinite: !0
  }),
      o = (ot.Earth = st, ot.EPSG3395 = bt, ot.EPSG3857 = lt, ot.EPSG900913 = ut, ot.EPSG4326 = re, ot.Simple = Lt, et.extend({
    options: {
      pane: "overlayPane",
      attribution: null,
      bubblingMouseEvents: !0
    },
    addTo: function addTo(t) {
      return t.addLayer(this), this;
    },
    remove: function remove() {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function removeFrom(t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function getPane(t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function addInteractiveTarget(t) {
      return this._map._targets[h(t)] = this;
    },
    removeInteractiveTarget: function removeInteractiveTarget(t) {
      return delete this._map._targets[h(t)], this;
    },
    getAttribution: function getAttribution() {
      return this.options.attribution;
    },
    _layerAdd: function _layerAdd(t) {
      var i,
          e = t.target;
      e.hasLayer(this) && (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents && (i = this.getEvents(), e.on(i, this), this.once("remove", function () {
        e.off(i, this);
      }, this)), this.onAdd(e), this.fire("add"), e.fire("layeradd", {
        layer: this
      }));
    }
  })),
      ae = (A.include({
    addLayer: function addLayer(t) {
      if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
      var i = h(t);
      return this._layers[i] || ((this._layers[i] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this;
    },
    removeLayer: function removeLayer(t) {
      var i = h(t);
      return this._layers[i] && (this._loaded && t.onRemove(this), delete this._layers[i], this._loaded && (this.fire("layerremove", {
        layer: t
      }), t.fire("remove")), t._map = t._mapToAdd = null), this;
    },
    hasLayer: function hasLayer(t) {
      return h(t) in this._layers;
    },
    eachLayer: function eachLayer(t, i) {
      for (var e in this._layers) {
        t.call(i, this._layers[e]);
      }

      return this;
    },
    _addLayers: function _addLayers(t) {
      for (var i = 0, e = (t = t ? d(t) ? t : [t] : []).length; i < e; i++) {
        this.addLayer(t[i]);
      }
    },
    _addZoomLimit: function _addZoomLimit(t) {
      isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[h(t)] = t, this._updateZoomLevels());
    },
    _removeZoomLimit: function _removeZoomLimit(t) {
      t = h(t);
      this._zoomBoundLayers[t] && (delete this._zoomBoundLayers[t], this._updateZoomLevels());
    },
    _updateZoomLevels: function _updateZoomLevels() {
      var t,
          i = 1 / 0,
          e = -1 / 0,
          n = this._getZoomSpan();

      for (t in this._zoomBoundLayers) {
        var o = this._zoomBoundLayers[t].options,
            i = void 0 === o.minZoom ? i : Math.min(i, o.minZoom),
            e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom);
      }

      this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = i === 1 / 0 ? void 0 : i, n !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
    }
  }), o.extend({
    initialize: function initialize(t, i) {
      var e, n;
      if (c(this, i), this._layers = {}, t) for (e = 0, n = t.length; e < n; e++) {
        this.addLayer(t[e]);
      }
    },
    addLayer: function addLayer(t) {
      var i = this.getLayerId(t);
      return this._layers[i] = t, this._map && this._map.addLayer(t), this;
    },
    removeLayer: function removeLayer(t) {
      t = t in this._layers ? t : this.getLayerId(t);
      return this._map && this._layers[t] && this._map.removeLayer(this._layers[t]), delete this._layers[t], this;
    },
    hasLayer: function hasLayer(t) {
      return ("number" == typeof t ? t : this.getLayerId(t)) in this._layers;
    },
    clearLayers: function clearLayers() {
      return this.eachLayer(this.removeLayer, this);
    },
    invoke: function invoke(t) {
      var i,
          e,
          n = Array.prototype.slice.call(arguments, 1);

      for (i in this._layers) {
        (e = this._layers[i])[t] && e[t].apply(e, n);
      }

      return this;
    },
    onAdd: function onAdd(t) {
      this.eachLayer(t.addLayer, t);
    },
    onRemove: function onRemove(t) {
      this.eachLayer(t.removeLayer, t);
    },
    eachLayer: function eachLayer(t, i) {
      for (var e in this._layers) {
        t.call(i, this._layers[e]);
      }

      return this;
    },
    getLayer: function getLayer(t) {
      return this._layers[t];
    },
    getLayers: function getLayers() {
      var t = [];
      return this.eachLayer(t.push, t), t;
    },
    setZIndex: function setZIndex(t) {
      return this.invoke("setZIndex", t);
    },
    getLayerId: h
  })),
      he = ae.extend({
    addLayer: function addLayer(t) {
      return this.hasLayer(t) ? this : (t.addEventParent(this), ae.prototype.addLayer.call(this, t), this.fire("layeradd", {
        layer: t
      }));
    },
    removeLayer: function removeLayer(t) {
      return this.hasLayer(t) ? ((t = t in this._layers ? this._layers[t] : t).removeEventParent(this), ae.prototype.removeLayer.call(this, t), this.fire("layerremove", {
        layer: t
      })) : this;
    },
    setStyle: function setStyle(t) {
      return this.invoke("setStyle", t);
    },
    bringToFront: function bringToFront() {
      return this.invoke("bringToFront");
    },
    bringToBack: function bringToBack() {
      return this.invoke("bringToBack");
    },
    getBounds: function getBounds() {
      var t,
          i = new s();

      for (t in this._layers) {
        var e = this._layers[t];
        i.extend(e.getBounds ? e.getBounds() : e.getLatLng());
      }

      return i;
    }
  }),
      le = it.extend({
    options: {
      popupAnchor: [0, 0],
      tooltipAnchor: [0, 0],
      crossOrigin: !1
    },
    initialize: function initialize(t) {
      c(this, t);
    },
    createIcon: function createIcon(t) {
      return this._createIcon("icon", t);
    },
    createShadow: function createShadow(t) {
      return this._createIcon("shadow", t);
    },
    _createIcon: function _createIcon(t, i) {
      var e = this._getIconUrl(t);

      if (!e) {
        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
        return null;
      }

      e = this._createImg(e, i && "IMG" === i.tagName ? i : null);
      return this._setIconStyles(e, t), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), e;
    },
    _setIconStyles: function _setIconStyles(t, i) {
      var e = this.options,
          n = e[i + "Size"],
          n = _(n = "number" == typeof n ? [n, n] : n),
          o = _("shadow" === i && e.shadowAnchor || e.iconAnchor || n && n.divideBy(2, !0));

      t.className = "leaflet-marker-" + i + " " + (e.className || ""), o && (t.style.marginLeft = -o.x + "px", t.style.marginTop = -o.y + "px"), n && (t.style.width = n.x + "px", t.style.height = n.y + "px");
    },
    _createImg: function _createImg(t, i) {
      return (i = i || document.createElement("img")).src = t, i;
    },
    _getIconUrl: function _getIconUrl(t) {
      return P.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
    }
  });
  var ue = le.extend({
    options: {
      iconUrl: "marker-icon.png",
      iconRetinaUrl: "marker-icon-2x.png",
      shadowUrl: "marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    },
    _getIconUrl: function _getIconUrl(t) {
      return "string" != typeof ue.imagePath && (ue.imagePath = this._detectIconPath()), (this.options.imagePath || ue.imagePath) + le.prototype._getIconUrl.call(this, t);
    },
    _stripUrl: function _stripUrl(t) {
      function i(t, i, e) {
        return (i = i.exec(t)) && i[e];
      }

      return (t = i(t, /^url\((['"])?(.+)\1\)$/, 2)) && i(t, /^(.*)marker-icon\.png$/, 1);
    },
    _detectIconPath: function _detectIconPath() {
      var t = b("div", "leaflet-default-icon-path", document.body),
          i = pi(t, "background-image") || pi(t, "backgroundImage");
      if (document.body.removeChild(t), i = this._stripUrl(i)) return i;
      t = document.querySelector('link[href$="leaflet.css"]');
      return t ? t.href.substring(0, t.href.length - "leaflet.css".length - 1) : "";
    }
  }),
      ce = n.extend({
    initialize: function initialize(t) {
      this._marker = t;
    },
    addHooks: function addHooks() {
      var t = this._marker._icon;
      this._draggable || (this._draggable = new Xi(t, t, !0)), this._draggable.on({
        dragstart: this._onDragStart,
        predrag: this._onPreDrag,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).enable(), z(t, "leaflet-marker-draggable");
    },
    removeHooks: function removeHooks() {
      this._draggable.off({
        dragstart: this._onDragStart,
        predrag: this._onPreDrag,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this).disable(), this._marker._icon && M(this._marker._icon, "leaflet-marker-draggable");
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    _adjustPan: function _adjustPan(t) {
      var i = this._marker,
          e = i._map,
          n = this._marker.options.autoPanSpeed,
          o = this._marker.options.autoPanPadding,
          s = bi(i._icon),
          r = e.getPixelBounds(),
          a = e.getPixelOrigin(),
          a = f(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
      a.contains(s) || (o = _((Math.max(a.max.x, s.x) - a.max.x) / (r.max.x - a.max.x) - (Math.min(a.min.x, s.x) - a.min.x) / (r.min.x - a.min.x), (Math.max(a.max.y, s.y) - a.max.y) / (r.max.y - a.max.y) - (Math.min(a.min.y, s.y) - a.min.y) / (r.min.y - a.min.y)).multiplyBy(n), e.panBy(o, {
        animate: !1
      }), this._draggable._newPos._add(o), this._draggable._startPos._add(o), Z(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = x(this._adjustPan.bind(this, t)));
    },
    _onDragStart: function _onDragStart() {
      this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
    },
    _onPreDrag: function _onPreDrag(t) {
      this._marker.options.autoPan && (r(this._panRequest), this._panRequest = x(this._adjustPan.bind(this, t)));
    },
    _onDrag: function _onDrag(t) {
      var i = this._marker,
          e = i._shadow,
          n = bi(i._icon),
          o = i._map.layerPointToLatLng(n);

      e && Z(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t);
    },
    _onDragEnd: function _onDragEnd(t) {
      r(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
    }
  }),
      de = o.extend({
    options: {
      icon: new ue(),
      interactive: !0,
      keyboard: !0,
      title: "",
      alt: "Marker",
      zIndexOffset: 0,
      opacity: 1,
      riseOnHover: !1,
      riseOffset: 250,
      pane: "markerPane",
      shadowPane: "shadowPane",
      bubblingMouseEvents: !1,
      autoPanOnFocus: !0,
      draggable: !1,
      autoPan: !1,
      autoPanPadding: [50, 50],
      autoPanSpeed: 10
    },
    initialize: function initialize(t, i) {
      c(this, i), this._latlng = w(t);
    },
    onAdd: function onAdd(t) {
      this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
    },
    onRemove: function onRemove(t) {
      this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
    },
    getEvents: function getEvents() {
      return {
        zoom: this.update,
        viewreset: this.update
      };
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(t) {
      var i = this._latlng;
      return this._latlng = w(t), this.update(), this.fire("move", {
        oldLatLng: i,
        latlng: this._latlng
      });
    },
    setZIndexOffset: function setZIndexOffset(t) {
      return this.options.zIndexOffset = t, this.update();
    },
    getIcon: function getIcon() {
      return this.options.icon;
    },
    setIcon: function setIcon(t) {
      return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
    },
    getElement: function getElement() {
      return this._icon;
    },
    update: function update() {
      var t;
      return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(), this._setPos(t)), this;
    },
    _initIcon: function _initIcon() {
      var t = this.options,
          i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          e = t.icon.createIcon(this._icon),
          n = !1,
          e = (e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), z(e, i), t.keyboard && (e.tabIndex = "0", e.setAttribute("role", "button")), this._icon = e, t.riseOnHover && this.on({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      }), this.options.autoPanOnFocus && S(e, "focus", this._panOnFocus, this), t.icon.createShadow(this._shadow)),
          o = !1;
      e !== this._shadow && (this._removeShadow(), o = !0), e && (z(e, i), e.alt = ""), this._shadow = e, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), e && o && this.getPane(t.shadowPane).appendChild(this._shadow);
    },
    _removeIcon: function _removeIcon() {
      this.options.riseOnHover && this.off({
        mouseover: this._bringToFront,
        mouseout: this._resetZIndex
      }), this.options.autoPanOnFocus && E(this._icon, "focus", this._panOnFocus, this), T(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
    },
    _removeShadow: function _removeShadow() {
      this._shadow && T(this._shadow), this._shadow = null;
    },
    _setPos: function _setPos(t) {
      this._icon && Z(this._icon, t), this._shadow && Z(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
    },
    _updateZIndex: function _updateZIndex(t) {
      this._icon && (this._icon.style.zIndex = this._zIndex + t);
    },
    _animateZoom: function _animateZoom(t) {
      t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();

      this._setPos(t);
    },
    _initInteraction: function _initInteraction() {
      var t;
      this.options.interactive && (z(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), ce && (t = this.options.draggable, this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new ce(this), t && this.dragging.enable()));
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._map && this._updateOpacity(), this;
    },
    _updateOpacity: function _updateOpacity() {
      var t = this.options.opacity;
      this._icon && C(this._icon, t), this._shadow && C(this._shadow, t);
    },
    _bringToFront: function _bringToFront() {
      this._updateZIndex(this.options.riseOffset);
    },
    _resetZIndex: function _resetZIndex() {
      this._updateZIndex(0);
    },
    _panOnFocus: function _panOnFocus() {
      var t,
          i,
          e = this._map;
      e && (t = (i = this.options.icon.options).iconSize ? _(i.iconSize) : _(0, 0), i = i.iconAnchor ? _(i.iconAnchor) : _(0, 0), e.panInside(this._latlng, {
        paddingTopLeft: i,
        paddingBottomRight: t.subtract(i)
      }));
    },
    _getPopupAnchor: function _getPopupAnchor() {
      return this.options.icon.options.popupAnchor;
    },
    _getTooltipAnchor: function _getTooltipAnchor() {
      return this.options.icon.options.tooltipAnchor;
    }
  });

  var _e = o.extend({
    options: {
      stroke: !0,
      color: "#3388ff",
      weight: 3,
      opacity: 1,
      lineCap: "round",
      lineJoin: "round",
      dashArray: null,
      dashOffset: null,
      fill: !1,
      fillColor: null,
      fillOpacity: .2,
      fillRule: "evenodd",
      interactive: !0,
      bubblingMouseEvents: !0
    },
    beforeAdd: function beforeAdd(t) {
      this._renderer = t.getRenderer(this);
    },
    onAdd: function onAdd() {
      this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
    },
    onRemove: function onRemove() {
      this._renderer._removePath(this);
    },
    redraw: function redraw() {
      return this._map && this._renderer._updatePath(this), this;
    },
    setStyle: function setStyle(t) {
      return c(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
    },
    bringToFront: function bringToFront() {
      return this._renderer && this._renderer._bringToFront(this), this;
    },
    bringToBack: function bringToBack() {
      return this._renderer && this._renderer._bringToBack(this), this;
    },
    getElement: function getElement() {
      return this._path;
    },
    _reset: function _reset() {
      this._project(), this._update();
    },
    _clickTolerance: function _clickTolerance() {
      return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
    }
  }),
      pe = _e.extend({
    options: {
      fill: !0,
      radius: 10
    },
    initialize: function initialize(t, i) {
      c(this, i), this._latlng = w(t), this._radius = this.options.radius;
    },
    setLatLng: function setLatLng(t) {
      var i = this._latlng;
      return this._latlng = w(t), this.redraw(), this.fire("move", {
        oldLatLng: i,
        latlng: this._latlng
      });
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setRadius: function setRadius(t) {
      return this.options.radius = this._radius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._radius;
    },
    setStyle: function setStyle(t) {
      var i = t && t.radius || this._radius;
      return _e.prototype.setStyle.call(this, t), this.setRadius(i), this;
    },
    _project: function _project() {
      this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
    },
    _updateBounds: function _updateBounds() {
      var t = this._radius,
          i = this._radiusY || t,
          e = this._clickTolerance(),
          t = [t + e, i + e];

      this._pxBounds = new m(this._point.subtract(t), this._point.add(t));
    },
    _update: function _update() {
      this._map && this._updatePath();
    },
    _updatePath: function _updatePath() {
      this._renderer._updateCircle(this);
    },
    _empty: function _empty() {
      return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
    },
    _containsPoint: function _containsPoint(t) {
      return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
    }
  });

  var me = pe.extend({
    initialize: function initialize(t, i, e) {
      if (c(this, i = "number" == typeof i ? l({}, e, {
        radius: i
      }) : i), this._latlng = w(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
      this._mRadius = this.options.radius;
    },
    setRadius: function setRadius(t) {
      return this._mRadius = t, this.redraw();
    },
    getRadius: function getRadius() {
      return this._mRadius;
    },
    getBounds: function getBounds() {
      var t = [this._radius, this._radiusY || this._radius];
      return new s(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
    },
    setStyle: _e.prototype.setStyle,
    _project: function _project() {
      var t,
          i,
          e,
          n,
          o,
          s = this._latlng.lng,
          r = this._latlng.lat,
          a = this._map,
          h = a.options.crs;
      h.distance === st.distance ? (n = Math.PI / 180, o = this._mRadius / st.R / n, t = a.project([r + o, s]), i = a.project([r - o, s]), i = t.add(i).divideBy(2), e = a.unproject(i).lat, n = Math.acos((Math.cos(o * n) - Math.sin(r * n) * Math.sin(e * n)) / (Math.cos(r * n) * Math.cos(e * n))) / n, !isNaN(n) && 0 !== n || (n = o / Math.cos(Math.PI / 180 * r)), this._point = i.subtract(a.getPixelOrigin()), this._radius = isNaN(n) ? 0 : i.x - a.project([e, s - n]).x, this._radiusY = i.y - t.y) : (o = h.unproject(h.project(this._latlng).subtract([this._mRadius, 0])), this._point = a.latLngToLayerPoint(this._latlng), this._radius = this._point.x - a.latLngToLayerPoint(o).x), this._updateBounds();
    }
  });

  var fe = _e.extend({
    options: {
      smoothFactor: 1,
      noClip: !1
    },
    initialize: function initialize(t, i) {
      c(this, i), this._setLatLngs(t);
    },
    getLatLngs: function getLatLngs() {
      return this._latlngs;
    },
    setLatLngs: function setLatLngs(t) {
      return this._setLatLngs(t), this.redraw();
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length;
    },
    closestLayerPoint: function closestLayerPoint(t) {
      for (var i = 1 / 0, e = null, n = ee, o = 0, s = this._parts.length; o < s; o++) {
        for (var r = this._parts[o], a = 1, h = r.length; a < h; a++) {
          var l,
              u,
              c = n(t, l = r[a - 1], u = r[a], !0);
          c < i && (i = c, e = n(t, l, u));
        }
      }

      return e && (e.distance = Math.sqrt(i)), e;
    },
    getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");
      var t,
          i,
          e,
          n,
          o,
          s,
          r = this._rings[0],
          a = r.length;
      if (!a) return null;

      for (i = t = 0; t < a - 1; t++) {
        i += r[t].distanceTo(r[t + 1]) / 2;
      }

      if (0 === i) return this._map.layerPointToLatLng(r[0]);

      for (e = t = 0; t < a - 1; t++) {
        if (n = r[t], o = r[t + 1], i < (e += s = n.distanceTo(o))) return this._map.layerPointToLatLng([o.x - (s = (e - i) / s) * (o.x - n.x), o.y - s * (o.y - n.y)]);
      }
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    addLatLng: function addLatLng(t, i) {
      return i = i || this._defaultShape(), t = w(t), i.push(t), this._bounds.extend(t), this.redraw();
    },
    _setLatLngs: function _setLatLngs(t) {
      this._bounds = new s(), this._latlngs = this._convertLatLngs(t);
    },
    _defaultShape: function _defaultShape() {
      return ne(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function _convertLatLngs(t) {
      for (var i = [], e = ne(t), n = 0, o = t.length; n < o; n++) {
        e ? (i[n] = w(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
      }

      return i;
    },
    _project: function _project() {
      var t = new m();
      this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
    },
    _updateBounds: function _updateBounds() {
      var t = this._clickTolerance(),
          t = new p(t, t);

      this._rawPxBounds && (this._pxBounds = new m([this._rawPxBounds.min.subtract(t), this._rawPxBounds.max.add(t)]));
    },
    _projectLatlngs: function _projectLatlngs(t, i, e) {
      var n,
          o,
          s = t[0] instanceof v,
          r = t.length;

      if (s) {
        for (o = [], n = 0; n < r; n++) {
          o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
        }

        i.push(o);
      } else for (n = 0; n < r; n++) {
        this._projectLatlngs(t[n], i, e);
      }
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds;
      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var i, e, n, o, s = this._parts, r = 0, a = 0, h = this._rings.length; r < h; r++) {
        for (i = 0, e = (o = this._rings[r]).length; i < e - 1; i++) {
          (n = Qi(o[i], o[i + 1], t, i, !0)) && (s[a] = s[a] || [], s[a].push(n[0]), n[1] === o[i + 1] && i !== e - 2 || (s[a].push(n[1]), a++));
        }
      }
    },
    _simplifyPoints: function _simplifyPoints() {
      for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) {
        t[e] = Ji(t[e], i);
      }
    },
    _update: function _update() {
      this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this);
    },
    _containsPoint: function _containsPoint(t, i) {
      var e,
          n,
          o,
          s,
          r,
          a,
          h = this._clickTolerance();

      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;

      for (e = 0, s = this._parts.length; e < s; e++) {
        for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++) {
          if ((i || 0 !== n) && $i(t, a[o], a[n]) <= h) return !0;
        }
      }

      return !1;
    }
  });

  fe._flat = oe;
  var ge = fe.extend({
    options: {
      fill: !0
    },
    isEmpty: function isEmpty() {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");
      var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          l = this._rings[0],
          u = l.length;
      if (!u) return null;

      for (t = s = r = a = 0, i = u - 1; t < u; i = t++) {
        e = l[t], n = l[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
      }

      return h = 0 === s ? l[0] : [r / s, a / s], this._map.layerPointToLatLng(h);
    },
    _convertLatLngs: function _convertLatLngs(t) {
      var t = fe.prototype._convertLatLngs.call(this, t),
          i = t.length;

      return 2 <= i && t[0] instanceof v && t[0].equals(t[i - 1]) && t.pop(), t;
    },
    _setLatLngs: function _setLatLngs(t) {
      fe.prototype._setLatLngs.call(this, t), ne(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function _defaultShape() {
      return (ne(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0];
    },
    _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds,
          i = this.options.weight,
          i = new p(i, i),
          t = new m(t.min.subtract(i), t.max.add(i));
      if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var e, n = 0, o = this._rings.length; n < o; n++) {
        (e = se(this._rings[n], t, !0)).length && this._parts.push(e);
      }
    },
    _updatePath: function _updatePath() {
      this._renderer._updatePoly(this, !0);
    },
    _containsPoint: function _containsPoint(t) {
      var i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          l = !1;
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;

      for (o = 0, a = this._parts.length; o < a; o++) {
        for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) {
          e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (l = !l);
        }
      }

      return l || fe.prototype._containsPoint.call(this, t, !0);
    }
  });
  var ve = he.extend({
    initialize: function initialize(t, i) {
      c(this, i), this._layers = {}, t && this.addData(t);
    },
    addData: function addData(t) {
      var i,
          e,
          n,
          o = d(t) ? t : t.features;

      if (o) {
        for (i = 0, e = o.length; i < e; i++) {
          ((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
        }

        return this;
      }

      var s = this.options;
      if (s.filter && !s.filter(t)) return this;
      var r = ye(t, s);
      return r ? (r.feature = ze(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this;
    },
    resetStyle: function resetStyle(t) {
      return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = l({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
    },
    setStyle: function setStyle(i) {
      return this.eachLayer(function (t) {
        this._setLayerStyle(t, i);
      }, this);
    },
    _setLayerStyle: function _setLayerStyle(t, i) {
      t.setStyle && ("function" == typeof i && (i = i(t.feature)), t.setStyle(i));
    }
  });

  function ye(t, i) {
    var e,
        n,
        o,
        s,
        r = "Feature" === t.type ? t.geometry : t,
        a = r ? r.coordinates : null,
        h = [],
        l = i && i.pointToLayer,
        u = i && i.coordsToLatLng || we;
    if (!a && !r) return null;

    switch (r.type) {
      case "Point":
        return xe(l, t, e = u(a), i);

      case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++) {
          e = u(a[o]), h.push(xe(l, t, e, i));
        }

        return new he(h);

      case "LineString":
      case "MultiLineString":
        return n = Pe(a, "LineString" === r.type ? 0 : 1, u), new fe(n, i);

      case "Polygon":
      case "MultiPolygon":
        return n = Pe(a, "Polygon" === r.type ? 1 : 2, u), new ge(n, i);

      case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = ye({
            geometry: r.geometries[o],
            type: "Feature",
            properties: t.properties
          }, i);
          c && h.push(c);
        }

        return new he(h);

      default:
        throw new Error("Invalid GeoJSON object.");
    }
  }

  function xe(t, i, e, n) {
    return t ? t(i, e) : new de(e, n && n.markersInheritOptions && n);
  }

  function we(t) {
    return new v(t[1], t[0], t[2]);
  }

  function Pe(t, i, e) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++) {
      n = i ? Pe(t[s], i - 1, e) : (e || we)(t[s]), o.push(n);
    }

    return o;
  }

  function be(t, i) {
    return void 0 !== (t = w(t)).alt ? [e(t.lng, i), e(t.lat, i), e(t.alt, i)] : [e(t.lng, i), e(t.lat, i)];
  }

  function Le(t, i, e, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++) {
      o.push(i ? Le(t[s], i - 1, e, n) : be(t[s], n));
    }

    return !i && e && o.push(o[0]), o;
  }

  function Te(t, i) {
    return t.feature ? l({}, t.feature, {
      geometry: i
    }) : ze(i);
  }

  function ze(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
      type: "Feature",
      properties: {},
      geometry: t
    };
  }

  Tt = {
    toGeoJSON: function toGeoJSON(t) {
      return Te(this, {
        type: "Point",
        coordinates: be(this.getLatLng(), t)
      });
    }
  };

  function Me(t, i) {
    return new ve(t, i);
  }

  de.include(Tt), me.include(Tt), pe.include(Tt), fe.include({
    toGeoJSON: function toGeoJSON(t) {
      var i = !ne(this._latlngs);
      return Te(this, {
        type: (i ? "Multi" : "") + "LineString",
        coordinates: Le(this._latlngs, i ? 1 : 0, !1, t)
      });
    }
  }), ge.include({
    toGeoJSON: function toGeoJSON(t) {
      var i = !ne(this._latlngs),
          e = i && !ne(this._latlngs[0]),
          t = Le(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
      return Te(this, {
        type: (e ? "Multi" : "") + "Polygon",
        coordinates: t = i ? t : [t]
      });
    }
  }), ae.include({
    toMultiPoint: function toMultiPoint(i) {
      var e = [];
      return this.eachLayer(function (t) {
        e.push(t.toGeoJSON(i).geometry.coordinates);
      }), Te(this, {
        type: "MultiPoint",
        coordinates: e
      });
    },
    toGeoJSON: function toGeoJSON(i) {
      var t = this.feature && this.feature.geometry && this.feature.geometry.type;
      if ("MultiPoint" === t) return this.toMultiPoint(i);
      var e = "GeometryCollection" === t,
          n = [];
      return this.eachLayer(function (t) {
        t.toGeoJSON && (t = t.toGeoJSON(i), e ? n.push(t.geometry) : "FeatureCollection" === (t = ze(t)).type ? n.push.apply(n, t.features) : n.push(t));
      }), e ? Te(this, {
        geometries: n,
        type: "GeometryCollection"
      }) : {
        type: "FeatureCollection",
        features: n
      };
    }
  });
  var zt = Me,
      Ce = o.extend({
    options: {
      opacity: 1,
      alt: "",
      interactive: !1,
      crossOrigin: !1,
      errorOverlayUrl: "",
      zIndex: 1,
      className: ""
    },
    initialize: function initialize(t, i, e) {
      this._url = t, this._bounds = g(i), c(this, e);
    },
    onAdd: function onAdd() {
      this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (z(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
    },
    onRemove: function onRemove() {
      T(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._image && this._updateOpacity(), this;
    },
    setStyle: function setStyle(t) {
      return t.opacity && this.setOpacity(t.opacity), this;
    },
    bringToFront: function bringToFront() {
      return this._map && fi(this._image), this;
    },
    bringToBack: function bringToBack() {
      return this._map && gi(this._image), this;
    },
    setUrl: function setUrl(t) {
      return this._url = t, this._image && (this._image.src = t), this;
    },
    setBounds: function setBounds(t) {
      return this._bounds = g(t), this._map && this._reset(), this;
    },
    getEvents: function getEvents() {
      var t = {
        zoom: this._reset,
        viewreset: this._reset
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    },
    getBounds: function getBounds() {
      return this._bounds;
    },
    getElement: function getElement() {
      return this._image;
    },
    _initImage: function _initImage() {
      var t = "IMG" === this._url.tagName,
          i = this._image = t ? this._url : b("img");
      z(i, "leaflet-image-layer"), this._zoomAnimated && z(i, "leaflet-zoom-animated"), this.options.className && z(i, this.options.className), i.onselectstart = u, i.onmousemove = u, i.onload = a(this.fire, this, "load"), i.onerror = a(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt);
    },
    _animateZoom: function _animateZoom(t) {
      var i = this._map.getZoomScale(t.zoom),
          t = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;

      Pi(this._image, t, i);
    },
    _reset: function _reset() {
      var t = this._image,
          i = new m(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          e = i.getSize();
      Z(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px";
    },
    _updateOpacity: function _updateOpacity() {
      C(this._image, this.options.opacity);
    },
    _updateZIndex: function _updateZIndex() {
      this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
    },
    _overlayOnError: function _overlayOnError() {
      this.fire("error");
      var t = this.options.errorOverlayUrl;
      t && this._url !== t && (this._url = t, this._image.src = t);
    },
    getCenter: function getCenter() {
      return this._bounds.getCenter();
    }
  }),
      Ze = Ce.extend({
    options: {
      autoplay: !0,
      loop: !0,
      keepAspectRatio: !0,
      muted: !1,
      playsInline: !0
    },
    _initImage: function _initImage() {
      var t = "VIDEO" === this._url.tagName,
          i = this._image = t ? this._url : b("video");

      if (z(i, "leaflet-image-layer"), this._zoomAnimated && z(i, "leaflet-zoom-animated"), this.options.className && z(i, this.options.className), i.onselectstart = u, i.onmousemove = u, i.onloadeddata = a(this.fire, this, "load"), t) {
        for (var e = i.getElementsByTagName("source"), n = [], o = 0; o < e.length; o++) {
          n.push(e[o].src);
        }

        this._url = 0 < e.length ? n : [i.src];
      } else {
        d(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(i.style, "objectFit") && (i.style.objectFit = "fill"), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop, i.muted = !!this.options.muted, i.playsInline = !!this.options.playsInline;

        for (var s = 0; s < this._url.length; s++) {
          var r = b("source");
          r.src = this._url[s], i.appendChild(r);
        }
      }
    }
  });
  var Se = Ce.extend({
    _initImage: function _initImage() {
      var t = this._image = this._url;
      z(t, "leaflet-image-layer"), this._zoomAnimated && z(t, "leaflet-zoom-animated"), this.options.className && z(t, this.options.className), t.onselectstart = u, t.onmousemove = u;
    }
  });
  var O = o.extend({
    options: {
      interactive: !1,
      offset: [0, 0],
      className: "",
      pane: void 0
    },
    initialize: function initialize(t, i) {
      c(this, t), this._source = i;
    },
    openOn: function openOn(t) {
      return (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this), this;
    },
    close: function close() {
      return this._map && this._map.removeLayer(this), this;
    },
    toggle: function toggle(t) {
      return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
    },
    onAdd: function onAdd(t) {
      this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && C(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && C(this._container, 1), this.bringToFront(), this.options.interactive && (z(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
    },
    onRemove: function onRemove(t) {
      t._fadeAnimated ? (C(this._container, 0), this._removeTimeout = setTimeout(a(T, void 0, this._container), 200)) : T(this._container), this.options.interactive && (M(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
    },
    getLatLng: function getLatLng() {
      return this._latlng;
    },
    setLatLng: function setLatLng(t) {
      return this._latlng = w(t), this._map && (this._updatePosition(), this._adjustPan()), this;
    },
    getContent: function getContent() {
      return this._content;
    },
    setContent: function setContent(t) {
      return this._content = t, this.update(), this;
    },
    getElement: function getElement() {
      return this._container;
    },
    update: function update() {
      this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
    },
    getEvents: function getEvents() {
      var t = {
        zoom: this._updatePosition,
        viewreset: this._updatePosition
      };
      return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    isOpen: function isOpen() {
      return !!this._map && this._map.hasLayer(this);
    },
    bringToFront: function bringToFront() {
      return this._map && fi(this._container), this;
    },
    bringToBack: function bringToBack() {
      return this._map && gi(this._container), this;
    },
    _prepareOpen: function _prepareOpen(t) {
      if (!(e = this._source)._map) return !1;

      if (e instanceof he) {
        var i,
            e = null,
            n = this._source._layers;

        for (i in n) {
          if (n[i]._map) {
            e = n[i];
            break;
          }
        }

        if (!e) return !1;
        this._source = e;
      }

      if (!t) if (e.getCenter) t = e.getCenter();else if (e.getLatLng) t = e.getLatLng();else {
        if (!e.getBounds) throw new Error("Unable to get source layer LatLng.");
        t = e.getBounds().getCenter();
      }
      return this.setLatLng(t), this._map && this.update(), !0;
    },
    _updateContent: function _updateContent() {
      if (this._content) {
        var t = this._contentNode,
            i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
        if ("string" == typeof i) t.innerHTML = i;else {
          for (; t.hasChildNodes();) {
            t.removeChild(t.firstChild);
          }

          t.appendChild(i);
        }
        this.fire("contentupdate");
      }
    },
    _updatePosition: function _updatePosition() {
      var t, i, e;
      this._map && (i = this._map.latLngToLayerPoint(this._latlng), t = _(this.options.offset), e = this._getAnchor(), this._zoomAnimated ? Z(this._container, i.add(e)) : t = t.add(i).add(e), i = this._containerBottom = -t.y, e = this._containerLeft = -Math.round(this._containerWidth / 2) + t.x, this._container.style.bottom = i + "px", this._container.style.left = e + "px");
    },
    _getAnchor: function _getAnchor() {
      return [0, 0];
    }
  }),
      ke = (A.include({
    _initOverlay: function _initOverlay(t, i, e, n) {
      var o = i;
      return o instanceof t || (o = new t(n).setContent(i)), e && o.setLatLng(e), o;
    }
  }), o.include({
    _initOverlay: function _initOverlay(t, i, e, n) {
      var o = e;
      return o instanceof t ? (c(o, n), o._source = this) : (o = i && !n ? i : new t(n, this)).setContent(e), o;
    }
  }), O.extend({
    options: {
      pane: "popupPane",
      offset: [0, 7],
      maxWidth: 300,
      minWidth: 50,
      maxHeight: null,
      autoPan: !0,
      autoPanPaddingTopLeft: null,
      autoPanPaddingBottomRight: null,
      autoPanPadding: [5, 5],
      keepInView: !1,
      closeButton: !0,
      autoClose: !0,
      closeOnEscapeKey: !0,
      className: ""
    },
    openOn: function openOn(t) {
      return !(t = arguments.length ? t : this._source._map).hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, O.prototype.openOn.call(this, t);
    },
    onAdd: function onAdd(t) {
      O.prototype.onAdd.call(this, t), t.fire("popupopen", {
        popup: this
      }), this._source && (this._source.fire("popupopen", {
        popup: this
      }, !0), this._source instanceof _e || this._source.on("preclick", Ai));
    },
    onRemove: function onRemove(t) {
      O.prototype.onRemove.call(this, t), t.fire("popupclose", {
        popup: this
      }), this._source && (this._source.fire("popupclose", {
        popup: this
      }, !0), this._source instanceof _e || this._source.off("preclick", Ai));
    },
    getEvents: function getEvents() {
      var t = O.prototype.getEvents.call(this);
      return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-popup",
          i = this._container = b("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
          e = this._wrapper = b("div", t + "-content-wrapper", i);
      this._contentNode = b("div", t + "-content", e), Oi(i), Ii(this._contentNode), S(i, "contextmenu", Ai), this._tipContainer = b("div", t + "-tip-container", i), this._tip = b("div", t + "-tip", this._tipContainer), this.options.closeButton && ((e = this._closeButton = b("a", t + "-close-button", i)).setAttribute("role", "button"), e.setAttribute("aria-label", "Close popup"), e.href = "#close", e.innerHTML = '<span aria-hidden="true">&#215;</span>', S(e, "click", this.close, this));
    },
    _updateLayout: function _updateLayout() {
      var t = this._contentNode,
          i = t.style,
          e = (i.width = "", i.whiteSpace = "nowrap", t.offsetWidth),
          e = Math.min(e, this.options.maxWidth),
          e = (e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "", t.offsetHeight),
          n = this.options.maxHeight,
          o = "leaflet-popup-scrolled";
      n && n < e ? (i.height = n + "px", z(t, o)) : M(t, o), this._containerWidth = this._container.offsetWidth;
    },
    _animateZoom: function _animateZoom(t) {
      var t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
          i = this._getAnchor();

      Z(this._container, t.add(i));
    },
    _adjustPan: function _adjustPan(t) {
      var i, e, n, o, s, r, a, h;
      this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(), i = this._map, e = parseInt(pi(this._container, "marginBottom"), 10) || 0, e = this._container.offsetHeight + e, h = this._containerWidth, (n = new p(this._containerLeft, -e - this._containerBottom))._add(bi(this._container)), n = i.layerPointToContainerPoint(n), s = _(this.options.autoPanPadding), o = _(this.options.autoPanPaddingTopLeft || s), s = _(this.options.autoPanPaddingBottomRight || s), r = i.getSize(), a = 0, n.x + h + s.x > r.x && (a = n.x + h - r.x + s.x), n.x - a - o.x < (h = 0) && (a = n.x - o.x), n.y + e + s.y > r.y && (h = n.y + e - r.y + s.y), n.y - h - o.y < 0 && (h = n.y - o.y), (a || h) && i.fire("autopanstart").panBy([a, h], {
        animate: t && "moveend" === t.type
      }));
    },
    _getAnchor: function _getAnchor() {
      return _(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
    }
  })),
      Ee = (A.mergeOptions({
    closePopupOnClick: !0
  }), A.include({
    openPopup: function openPopup(t, i, e) {
      return this._initOverlay(ke, t, i, e).openOn(this), this;
    },
    closePopup: function closePopup(t) {
      return (t = arguments.length ? t : this._popup) && t.close(), this;
    }
  }), o.include({
    bindPopup: function bindPopup(t, i) {
      return this._popup = this._initOverlay(ke, this._popup, t, i), this._popupHandlersAdded || (this.on({
        click: this._openPopup,
        keypress: this._onKeyPress,
        remove: this.closePopup,
        move: this._movePopup
      }), this._popupHandlersAdded = !0), this;
    },
    unbindPopup: function unbindPopup() {
      return this._popup && (this.off({
        click: this._openPopup,
        keypress: this._onKeyPress,
        remove: this.closePopup,
        move: this._movePopup
      }), this._popupHandlersAdded = !1, this._popup = null), this;
    },
    openPopup: function openPopup(t) {
      return this._popup && this._popup._prepareOpen(t) && this._popup.openOn(this._map), this;
    },
    closePopup: function closePopup() {
      return this._popup && this._popup.close(), this;
    },
    togglePopup: function togglePopup() {
      return this._popup && this._popup.toggle(this), this;
    },
    isPopupOpen: function isPopupOpen() {
      return !!this._popup && this._popup.isOpen();
    },
    setPopupContent: function setPopupContent(t) {
      return this._popup && this._popup.setContent(t), this;
    },
    getPopup: function getPopup() {
      return this._popup;
    },
    _openPopup: function _openPopup(t) {
      var i;
      this._popup && this._map && (Ri(t), i = t.layer || t.target, this._popup._source !== i || i instanceof _e ? (this._popup._source = i, this.openPopup(t.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng));
    },
    _movePopup: function _movePopup(t) {
      this._popup.setLatLng(t.latlng);
    },
    _onKeyPress: function _onKeyPress(t) {
      13 === t.originalEvent.keyCode && this._openPopup(t);
    }
  }), O.extend({
    options: {
      pane: "tooltipPane",
      offset: [0, 0],
      direction: "auto",
      permanent: !1,
      sticky: !1,
      opacity: .9
    },
    onAdd: function onAdd(t) {
      O.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
        tooltip: this
      }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", {
        tooltip: this
      }, !0));
    },
    onRemove: function onRemove(t) {
      O.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
        tooltip: this
      }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", {
        tooltip: this
      }, !0));
    },
    getEvents: function getEvents() {
      var t = O.prototype.getEvents.call(this);
      return this.options.permanent || (t.preclick = this.close), t;
    },
    _initLayout: function _initLayout() {
      var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
      this._contentNode = this._container = b("div", t);
    },
    _updateLayout: function _updateLayout() {},
    _adjustPan: function _adjustPan() {},
    _setPosition: function _setPosition(t) {
      var i,
          e = this._map,
          n = this._container,
          o = e.latLngToContainerPoint(e.getCenter()),
          e = e.layerPointToContainerPoint(t),
          s = this.options.direction,
          r = n.offsetWidth,
          a = n.offsetHeight,
          h = _(this.options.offset),
          l = this._getAnchor(),
          e = "top" === s ? (i = r / 2, a) : "bottom" === s ? (i = r / 2, 0) : (i = "center" === s ? r / 2 : "right" === s ? 0 : "left" === s ? r : e.x < o.x ? (s = "right", 0) : (s = "left", r + 2 * (h.x + l.x)), a / 2);

      t = t.subtract(_(i, e, !0)).add(h).add(l), M(n, "leaflet-tooltip-right"), M(n, "leaflet-tooltip-left"), M(n, "leaflet-tooltip-top"), M(n, "leaflet-tooltip-bottom"), z(n, "leaflet-tooltip-" + s), Z(n, t);
    },
    _updatePosition: function _updatePosition() {
      var t = this._map.latLngToLayerPoint(this._latlng);

      this._setPosition(t);
    },
    setOpacity: function setOpacity(t) {
      this.options.opacity = t, this._container && C(this._container, t);
    },
    _animateZoom: function _animateZoom(t) {
      t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);

      this._setPosition(t);
    },
    _getAnchor: function _getAnchor() {
      return _(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
    }
  })),
      Be = (A.include({
    openTooltip: function openTooltip(t, i, e) {
      return this._initOverlay(Ee, t, i, e).openOn(this), this;
    },
    closeTooltip: function closeTooltip(t) {
      return t.close(), this;
    }
  }), o.include({
    bindTooltip: function bindTooltip(t, i) {
      return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ee, this._tooltip, t, i), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
    },
    unbindTooltip: function unbindTooltip() {
      return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
    },
    _initTooltipInteractions: function _initTooltipInteractions(t) {
      var i, e;
      !t && this._tooltipHandlersAdded || (i = t ? "off" : "on", e = {
        remove: this.closeTooltip,
        move: this._moveTooltip
      }, this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, e.click = this._openTooltip), this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), this[i](e), this._tooltipHandlersAdded = !t);
    },
    openTooltip: function openTooltip(t) {
      return this._tooltip && this._tooltip._prepareOpen(t) && this._tooltip.openOn(this._map), this;
    },
    closeTooltip: function closeTooltip() {
      if (this._tooltip) return this._tooltip.close();
    },
    toggleTooltip: function toggleTooltip() {
      return this._tooltip && this._tooltip.toggle(this), this;
    },
    isTooltipOpen: function isTooltipOpen() {
      return this._tooltip.isOpen();
    },
    setTooltipContent: function setTooltipContent(t) {
      return this._tooltip && this._tooltip.setContent(t), this;
    },
    getTooltip: function getTooltip() {
      return this._tooltip;
    },
    _openTooltip: function _openTooltip(t) {
      !this._tooltip || !this._map || this._map.dragging && this._map.dragging.moving() || (this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0));
    },
    _moveTooltip: function _moveTooltip(t) {
      var i = t.latlng;
      this._tooltip.options.sticky && t.originalEvent && (t = this._map.mouseEventToContainerPoint(t.originalEvent), t = this._map.containerPointToLayerPoint(t), i = this._map.layerPointToLatLng(t)), this._tooltip.setLatLng(i);
    }
  }), le.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: "leaflet-div-icon"
    },
    createIcon: function createIcon(t) {
      var t = t && "DIV" === t.tagName ? t : document.createElement("div"),
          i = this.options;
      return i.html instanceof Element ? (mi(t), t.appendChild(i.html)) : t.innerHTML = !1 !== i.html ? i.html : "", i.bgPos && (i = _(i.bgPos), t.style.backgroundPosition = -i.x + "px " + -i.y + "px"), this._setIconStyles(t, "icon"), t;
    },
    createShadow: function createShadow() {
      return null;
    }
  }));
  le.Default = ue;
  var Ae = o.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: P.mobile,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: void 0,
      maxNativeZoom: void 0,
      minNativeZoom: void 0,
      noWrap: !1,
      pane: "tilePane",
      className: "",
      keepBuffer: 2
    },
    initialize: function initialize(t) {
      c(this, t);
    },
    onAdd: function onAdd() {
      this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
    },
    beforeAdd: function beforeAdd(t) {
      t._addZoomLimit(this);
    },
    onRemove: function onRemove(t) {
      this._removeAllTiles(), T(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
    },
    bringToFront: function bringToFront() {
      return this._map && (fi(this._container), this._setAutoZIndex(Math.max)), this;
    },
    bringToBack: function bringToBack() {
      return this._map && (gi(this._container), this._setAutoZIndex(Math.min)), this;
    },
    getContainer: function getContainer() {
      return this._container;
    },
    setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._updateOpacity(), this;
    },
    setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    },
    isLoading: function isLoading() {
      return this._loading;
    },
    redraw: function redraw() {
      var t;
      return this._map && (this._removeAllTiles(), (t = this._clampZoom(this._map.getZoom())) !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update()), this;
    },
    getEvents: function getEvents() {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };
      return this.options.updateWhenIdle || (this._onMove || (this._onMove = j(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    },
    createTile: function createTile() {
      return document.createElement("div");
    },
    getTileSize: function getTileSize() {
      var t = this.options.tileSize;
      return t instanceof p ? t : new p(t, t);
    },
    _updateZIndex: function _updateZIndex() {
      this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function _setAutoZIndex(t) {
      for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) {
        i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
      }

      isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
    },
    _updateOpacity: function _updateOpacity() {
      if (this._map && !P.ielt9) {
        C(this._container, this.options.opacity);
        var t,
            i = +new Date(),
            e = !1,
            n = !1;

        for (t in this._tiles) {
          var o,
              s = this._tiles[t];
          s.current && s.loaded && (o = Math.min(1, (i - s.loaded) / 200), C(s.el, o), o < 1 ? e = !0 : (s.active ? n = !0 : this._onOpaqueTile(s), s.active = !0));
        }

        n && !this._noPrune && this._pruneTiles(), e && (r(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this));
      }
    },
    _onOpaqueTile: u,
    _initContainer: function _initContainer() {
      this._container || (this._container = b("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
    },
    _updateLevels: function _updateLevels() {
      var t = this._tileZoom,
          i = this.options.maxZoom;

      if (void 0 !== t) {
        for (var e in this._levels) {
          e = Number(e), this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (T(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
        }

        var n = this._levels[t],
            o = this._map;
        return n || ((n = this._levels[t] = {}).el = b("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), u(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n;
      }
    },
    _onUpdateLevel: u,
    _onRemoveLevel: u,
    _onCreateLevel: u,
    _pruneTiles: function _pruneTiles() {
      if (this._map) {
        var t,
            i,
            e,
            n = this._map.getZoom();

        if (n > this.options.maxZoom || n < this.options.minZoom) this._removeAllTiles();else {
          for (t in this._tiles) {
            (e = this._tiles[t]).retain = e.current;
          }

          for (t in this._tiles) {
            (e = this._tiles[t]).current && !e.active && (i = e.coords, this._retainParent(i.x, i.y, i.z, i.z - 5) || this._retainChildren(i.x, i.y, i.z, i.z + 2));
          }

          for (t in this._tiles) {
            this._tiles[t].retain || this._removeTile(t);
          }
        }
      }
    },
    _removeTilesAtZoom: function _removeTilesAtZoom(t) {
      for (var i in this._tiles) {
        this._tiles[i].coords.z === t && this._removeTile(i);
      }
    },
    _removeAllTiles: function _removeAllTiles() {
      for (var t in this._tiles) {
        this._removeTile(t);
      }
    },
    _invalidateAll: function _invalidateAll() {
      for (var t in this._levels) {
        T(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
      }

      this._removeAllTiles(), this._tileZoom = void 0;
    },
    _retainParent: function _retainParent(t, i, e, n) {
      var t = Math.floor(t / 2),
          i = Math.floor(i / 2),
          e = e - 1,
          o = new p(+t, +i),
          o = (o.z = e, this._tileCoordsToKey(o)),
          o = this._tiles[o];
      return o && o.active ? o.retain = !0 : (o && o.loaded && (o.retain = !0), n < e && this._retainParent(t, i, e, n));
    },
    _retainChildren: function _retainChildren(t, i, e, n) {
      for (var o = 2 * t; o < 2 * t + 2; o++) {
        for (var s = 2 * i; s < 2 * i + 2; s++) {
          var r = new p(o, s),
              r = (r.z = e + 1, this._tileCoordsToKey(r)),
              r = this._tiles[r];
          r && r.active ? r.retain = !0 : (r && r.loaded && (r.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n));
        }
      }
    },
    _resetView: function _resetView(t) {
      t = t && (t.pinch || t.flyTo);

      this._setView(this._map.getCenter(), this._map.getZoom(), t, t);
    },
    _animateZoom: function _animateZoom(t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    },
    _clampZoom: function _clampZoom(t) {
      var i = this.options;
      return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t;
    },
    _setView: function _setView(t, i, e, n) {
      var o = Math.round(i),
          o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o),
          s = this.options.updateWhenZooming && o !== this._tileZoom;
      n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i);
    },
    _setZoomTransforms: function _setZoomTransforms(t, i) {
      for (var e in this._levels) {
        this._setZoomTransform(this._levels[e], t, i);
      }
    },
    _setZoomTransform: function _setZoomTransform(t, i, e) {
      var n = this._map.getZoomScale(e, t.zoom),
          i = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();

      P.any3d ? Pi(t.el, i, n) : Z(t.el, i);
    },
    _resetGrid: function _resetGrid() {
      var t = this._map,
          i = t.options.crs,
          e = this._tileSize = this.getTileSize(),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);

      o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)];
    },
    _onMoveEnd: function _onMoveEnd() {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function _getTiledPixelBounds(t) {
      var i = this._map,
          e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
          e = i.getZoomScale(e, this._tileZoom),
          t = i.project(t, this._tileZoom).floor(),
          i = i.getSize().divideBy(2 * e);
      return new m(t.subtract(i), t.add(i));
    },
    _update: function _update(t) {
      var i = this._map;

      if (i) {
        var e = this._clampZoom(i.getZoom());

        if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
          var n,
              i = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(i),
              s = o.getCenter(),
              r = [],
              i = this.options.keepBuffer,
              a = new m(o.getBottomLeft().subtract([i, -i]), o.getTopRight().add([i, -i]));

          if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");

          for (n in this._tiles) {
            var h = this._tiles[n].coords;
            h.z === this._tileZoom && a.contains(new p(h.x, h.y)) || (this._tiles[n].current = !1);
          }

          if (1 < Math.abs(e - this._tileZoom)) this._setView(t, e);else {
            for (var l = o.min.y; l <= o.max.y; l++) {
              for (var u = o.min.x; u <= o.max.x; u++) {
                var c,
                    d = new p(u, l);
                d.z = this._tileZoom, this._isValidTile(d) && ((c = this._tiles[this._tileCoordsToKey(d)]) ? c.current = !0 : r.push(d));
              }
            }

            if (r.sort(function (t, i) {
              return t.distanceTo(s) - i.distanceTo(s);
            }), 0 !== r.length) {
              this._loading || (this._loading = !0, this.fire("loading"));

              for (var _ = document.createDocumentFragment(), u = 0; u < r.length; u++) {
                this._addTile(r[u], _);
              }

              this._level.el.appendChild(_);
            }
          }
        }
      }
    },
    _isValidTile: function _isValidTile(t) {
      var i = this._map.options.crs;

      if (!i.infinite) {
        var e = this._globalTileRange;
        if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1;
      }

      if (!this.options.bounds) return !0;
      i = this._tileCoordsToBounds(t);
      return g(this.options.bounds).overlaps(i);
    },
    _keyToBounds: function _keyToBounds(t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    },
    _tileCoordsToNwSe: function _tileCoordsToNwSe(t) {
      var i = this._map,
          e = this.getTileSize(),
          n = t.scaleBy(e),
          e = n.add(e);
      return [i.unproject(n, t.z), i.unproject(e, t.z)];
    },
    _tileCoordsToBounds: function _tileCoordsToBounds(t) {
      t = this._tileCoordsToNwSe(t), t = new s(t[0], t[1]);
      return t = this.options.noWrap ? t : this._map.wrapLatLngBounds(t);
    },
    _tileCoordsToKey: function _tileCoordsToKey(t) {
      return t.x + ":" + t.y + ":" + t.z;
    },
    _keyToTileCoords: function _keyToTileCoords(t) {
      var t = t.split(":"),
          i = new p(+t[0], +t[1]);
      return i.z = +t[2], i;
    },
    _removeTile: function _removeTile(t) {
      var i = this._tiles[t];
      i && (T(i.el), delete this._tiles[t], this.fire("tileunload", {
        tile: i.el,
        coords: this._keyToTileCoords(t)
      }));
    },
    _initTile: function _initTile(t) {
      z(t, "leaflet-tile");
      var i = this.getTileSize();
      t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = u, t.onmousemove = u, P.ielt9 && this.options.opacity < 1 && C(t, this.options.opacity);
    },
    _addTile: function _addTile(t, i) {
      var e = this._getTilePos(t),
          n = this._tileCoordsToKey(t),
          o = this.createTile(this._wrapCoords(t), a(this._tileReady, this, t));

      this._initTile(o), this.createTile.length < 2 && x(a(this._tileReady, this, t, null, o)), Z(o, e), this._tiles[n] = {
        el: o,
        coords: t,
        current: !0
      }, i.appendChild(o), this.fire("tileloadstart", {
        tile: o,
        coords: t
      });
    },
    _tileReady: function _tileReady(t, i, e) {
      i && this.fire("tileerror", {
        error: i,
        tile: e,
        coords: t
      });

      var n = this._tileCoordsToKey(t);

      (e = this._tiles[n]) && (e.loaded = +new Date(), this._map._fadeAnimated ? (C(e.el, 0), r(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this)) : (e.active = !0, this._pruneTiles()), i || (z(e.el, "leaflet-tile-loaded"), this.fire("tileload", {
        tile: e.el,
        coords: t
      })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), P.ielt9 || !this._map._fadeAnimated ? x(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250)));
    },
    _getTilePos: function _getTilePos(t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function _wrapCoords(t) {
      var i = new p(this._wrapX ? H(t.x, this._wrapX) : t.x, this._wrapY ? H(t.y, this._wrapY) : t.y);
      return i.z = t.z, i;
    },
    _pxBoundsToTileRange: function _pxBoundsToTileRange(t) {
      var i = this.getTileSize();
      return new m(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]));
    },
    _noTilesToLoad: function _noTilesToLoad() {
      for (var t in this._tiles) {
        if (!this._tiles[t].loaded) return !1;
      }

      return !0;
    }
  });
  var Ie = Ae.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: "abc",
      errorTileUrl: "",
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1,
      referrerPolicy: !1
    },
    initialize: function initialize(t, i) {
      this._url = t, (i = c(this, i)).detectRetina && P.retina && 0 < i.maxZoom && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), this.on("tileunload", this._onTileRemove);
    },
    setUrl: function setUrl(t, i) {
      return this._url === t && void 0 === i && (i = !0), this._url = t, i || this.redraw(), this;
    },
    createTile: function createTile(t, i) {
      var e = document.createElement("img");
      return S(e, "load", a(this._tileOnLoad, this, i, e)), S(e, "error", a(this._tileOnError, this, i, e)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), "string" == typeof this.options.referrerPolicy && (e.referrerPolicy = this.options.referrerPolicy), e.alt = "", e.setAttribute("role", "presentation"), e.src = this.getTileUrl(t), e;
    },
    getTileUrl: function getTileUrl(t) {
      var i = {
        r: P.retina ? "@2x" : "",
        s: this._getSubdomain(t),
        x: t.x,
        y: t.y,
        z: this._getZoomForUrl()
      };
      return this._map && !this._map.options.crs.infinite && (t = this._globalTileRange.max.y - t.y, this.options.tms && (i.y = t), i["-y"] = t), q(this._url, l(i, this.options));
    },
    _tileOnLoad: function _tileOnLoad(t, i) {
      P.ielt9 ? setTimeout(a(t, this, null, i), 0) : t(null, i);
    },
    _tileOnError: function _tileOnError(t, i, e) {
      var n = this.options.errorTileUrl;
      n && i.getAttribute("src") !== n && (i.src = n), t(e, i);
    },
    _onTileRemove: function _onTileRemove(t) {
      t.tile.onload = null;
    },
    _getZoomForUrl: function _getZoomForUrl() {
      var t = this._tileZoom,
          i = this.options.maxZoom;
      return (t = this.options.zoomReverse ? i - t : t) + this.options.zoomOffset;
    },
    _getSubdomain: function _getSubdomain(t) {
      t = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[t];
    },
    _abortLoading: function _abortLoading() {
      var t, i, e;

      for (t in this._tiles) {
        this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = u, e.onerror = u, e.complete || (e.src = K, i = this._tiles[t].coords, T(e), delete this._tiles[t], this.fire("tileabort", {
          tile: e,
          coords: i
        })));
      }
    },
    _removeTile: function _removeTile(t) {
      var i = this._tiles[t];
      if (i) return i.el.setAttribute("src", K), Ae.prototype._removeTile.call(this, t);
    },
    _tileReady: function _tileReady(t, i, e) {
      if (this._map && (!e || e.getAttribute("src") !== K)) return Ae.prototype._tileReady.call(this, t, i, e);
    }
  });

  function Oe(t, i) {
    return new Ie(t, i);
  }

  var Re = Ie.extend({
    defaultWmsParams: {
      service: "WMS",
      request: "GetMap",
      layers: "",
      styles: "",
      format: "image/jpeg",
      transparent: !1,
      version: "1.1.1"
    },
    options: {
      crs: null,
      uppercase: !1
    },
    initialize: function initialize(t, i) {
      this._url = t;
      var e,
          n = l({}, this.defaultWmsParams);

      for (e in i) {
        e in this.options || (n[e] = i[e]);
      }

      var t = (i = c(this, i)).detectRetina && P.retina ? 2 : 1,
          o = this.getTileSize();
      n.width = o.x * t, n.height = o.y * t, this.wmsParams = n;
    },
    onAdd: function onAdd(t) {
      this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
      var i = 1.3 <= this._wmsVersion ? "crs" : "srs";
      this.wmsParams[i] = this._crs.code, Ie.prototype.onAdd.call(this, t);
    },
    getTileUrl: function getTileUrl(t) {
      var i = this._tileCoordsToNwSe(t),
          e = this._crs,
          e = f(e.project(i[0]), e.project(i[1])),
          i = e.min,
          e = e.max,
          i = (1.3 <= this._wmsVersion && this._crs === re ? [i.y, i.x, e.y, e.x] : [i.x, i.y, e.x, e.y]).join(","),
          e = Ie.prototype.getTileUrl.call(this, t);

      return e + U(this.wmsParams, e, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + i;
    },
    setParams: function setParams(t, i) {
      return l(this.wmsParams, t), i || this.redraw(), this;
    }
  });
  Ie.WMS = Re, Oe.wms = function (t, i) {
    return new Re(t, i);
  };
  var Ne = o.extend({
    options: {
      padding: .1
    },
    initialize: function initialize(t) {
      c(this, t), h(this), this._layers = this._layers || {};
    },
    onAdd: function onAdd() {
      this._container || (this._initContainer(), this._zoomAnimated && z(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
    },
    onRemove: function onRemove() {
      this.off("update", this._updatePaths, this), this._destroyContainer();
    },
    getEvents: function getEvents() {
      var t = {
        viewreset: this._reset,
        zoom: this._onZoom,
        moveend: this._update,
        zoomend: this._onZoomEnd
      };
      return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
    },
    _onAnimZoom: function _onAnimZoom(t) {
      this._updateTransform(t.center, t.zoom);
    },
    _onZoom: function _onZoom() {
      this._updateTransform(this._map.getCenter(), this._map.getZoom());
    },
    _updateTransform: function _updateTransform(t, i) {
      var e = this._map.getZoomScale(i, this._zoom),
          n = this._map.getSize().multiplyBy(.5 + this.options.padding),
          o = this._map.project(this._center, i),
          n = n.multiplyBy(-e).add(o).subtract(this._map._getNewPixelOrigin(t, i));

      P.any3d ? Pi(this._container, n, e) : Z(this._container, n);
    },
    _reset: function _reset() {
      for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) {
        this._layers[t]._reset();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      for (var t in this._layers) {
        this._layers[t]._project();
      }
    },
    _updatePaths: function _updatePaths() {
      for (var t in this._layers) {
        this._layers[t]._update();
      }
    },
    _update: function _update() {
      var t = this.options.padding,
          i = this._map.getSize(),
          e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();

      this._bounds = new m(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
    }
  }),
      De = Ne.extend({
    options: {
      tolerance: 0
    },
    getEvents: function getEvents() {
      var t = Ne.prototype.getEvents.call(this);
      return t.viewprereset = this._onViewPreReset, t;
    },
    _onViewPreReset: function _onViewPreReset() {
      this._postponeUpdatePaths = !0;
    },
    onAdd: function onAdd() {
      Ne.prototype.onAdd.call(this), this._draw();
    },
    _initContainer: function _initContainer() {
      var t = this._container = document.createElement("canvas");
      S(t, "mousemove", this._onMouseMove, this), S(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), S(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
    },
    _destroyContainer: function _destroyContainer() {
      r(this._redrawRequest), delete this._ctx, T(this._container), E(this._container), delete this._container;
    },
    _updatePaths: function _updatePaths() {
      if (!this._postponeUpdatePaths) {
        for (var t in this._redrawBounds = null, this._layers) {
          this._layers[t]._update();
        }

        this._redraw();
      }
    },
    _update: function _update() {
      var t, i, e, n;
      this._map._animatingZoom && this._bounds || (Ne.prototype._update.call(this), t = this._bounds, i = this._container, e = t.getSize(), n = P.retina ? 2 : 1, Z(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", P.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update"));
    },
    _reset: function _reset() {
      Ne.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
    },
    _initPath: function _initPath(t) {
      this._updateDashArray(t);

      t = (this._layers[h(t)] = t)._order = {
        layer: t,
        prev: this._drawLast,
        next: null
      };
      this._drawLast && (this._drawLast.next = t), this._drawLast = t, this._drawFirst = this._drawFirst || this._drawLast;
    },
    _addPath: function _addPath(t) {
      this._requestRedraw(t);
    },
    _removePath: function _removePath(t) {
      var i = t._order,
          e = i.next,
          i = i.prev;
      e ? e.prev = i : this._drawLast = i, i ? i.next = e : this._drawFirst = e, delete t._order, delete this._layers[h(t)], this._requestRedraw(t);
    },
    _updatePath: function _updatePath(t) {
      this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
    },
    _updateStyle: function _updateStyle(t) {
      this._updateDashArray(t), this._requestRedraw(t);
    },
    _updateDashArray: function _updateDashArray(t) {
      if ("string" == typeof t.options.dashArray) {
        for (var i, e = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < e.length; o++) {
          if (i = Number(e[o]), isNaN(i)) return;
          n.push(i);
        }

        t.options._dashArray = n;
      } else t.options._dashArray = t.options.dashArray;
    },
    _requestRedraw: function _requestRedraw(t) {
      this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || x(this._redraw, this));
    },
    _extendRedrawBounds: function _extendRedrawBounds(t) {
      var i;
      t._pxBounds && (i = (t.options.weight || 0) + 1, this._redrawBounds = this._redrawBounds || new m(), this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i])));
    },
    _redraw: function _redraw() {
      this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
    },
    _clear: function _clear() {
      var t,
          i = this._redrawBounds;
      i ? (t = i.getSize(), this._ctx.clearRect(i.min.x, i.min.y, t.x, t.y)) : (this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore());
    },
    _draw: function _draw() {
      var t,
          i,
          e = this._redrawBounds;
      this._ctx.save(), e && (i = e.getSize(), this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip()), this._drawing = !0;

      for (var n = this._drawFirst; n; n = n.next) {
        t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
      }

      this._drawing = !1, this._ctx.restore();
    },
    _updatePoly: function _updatePoly(t, i) {
      if (this._drawing) {
        var e,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;

        if (a) {
          for (h.beginPath(), e = 0; e < a; e++) {
            for (n = 0, o = r[e].length; n < o; n++) {
              s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
            }

            i && h.closePath();
          }

          this._fillStroke(h, t);
        }
      }
    },
    _updateCircle: function _updateCircle(t) {
      var i, e, n, o;
      this._drawing && !t._empty() && (i = t._point, e = this._ctx, n = Math.max(Math.round(t._radius), 1), 1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 != o && e.restore(), this._fillStroke(e, t));
    },
    _fillStroke: function _fillStroke(t, i) {
      var e = i.options;
      e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke());
    },
    _onClick: function _onClick(t) {
      for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) {
        (i = o.layer).options.interactive && i._containsPoint(n) && (("click" === t.type || "preclick" === t.type) && this._map._draggableMoved(i) || (e = i));
      }

      this._fireEvent(!!e && [e], t);
    },
    _onMouseMove: function _onMouseMove(t) {
      var i;
      !this._map || this._map.dragging.moving() || this._map._animatingZoom || (i = this._map.mouseEventToLayerPoint(t), this._handleMouseHover(t, i));
    },
    _handleMouseOut: function _handleMouseOut(t) {
      var i = this._hoveredLayer;
      i && (M(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
    },
    _handleMouseHover: function _handleMouseHover(t, i) {
      if (!this._mouseHoverThrottled) {
        for (var e, n, o = this._drawFirst; o; o = o.next) {
          (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
        }

        n !== this._hoveredLayer && (this._handleMouseOut(t), n && (z(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t), this._mouseHoverThrottled = !0, setTimeout(a(function () {
          this._mouseHoverThrottled = !1;
        }, this), 32);
      }
    },
    _fireEvent: function _fireEvent(t, i, e) {
      this._map._fireDOMEvent(i, e || i.type, t);
    },
    _bringToFront: function _bringToFront(t) {
      var i,
          e,
          n = t._order;
      n && (i = n.next, e = n.prev, i && ((i.prev = e) ? e.next = i : i && (this._drawFirst = i), n.prev = this._drawLast, (this._drawLast.next = n).next = null, this._drawLast = n, this._requestRedraw(t)));
    },
    _bringToBack: function _bringToBack(t) {
      var i,
          e,
          n = t._order;
      n && (i = n.next, (e = n.prev) && ((e.next = i) ? i.prev = e : e && (this._drawLast = e), n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, this._requestRedraw(t)));
    }
  });

  function je(t) {
    return P.canvas ? new De(t) : null;
  }

  var He = function () {
    try {
      return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
        return document.createElement("<lvml:" + t + ' class="lvml">');
      };
    } catch (t) {}

    return function (t) {
      return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
    };
  }(),
      Mt = {
    _initContainer: function _initContainer() {
      this._container = b("div", "leaflet-vml-container");
    },
    _update: function _update() {
      this._map._animatingZoom || (Ne.prototype._update.call(this), this.fire("update"));
    },
    _initPath: function _initPath(t) {
      var i = t._container = He("shape");
      z(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = He("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[h(t)] = t;
    },
    _addPath: function _addPath(t) {
      var i = t._container;
      this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i);
    },
    _removePath: function _removePath(t) {
      var i = t._container;
      T(i), t.removeInteractiveTarget(i), delete this._layers[h(t)];
    },
    _updateStyle: function _updateStyle(t) {
      var i = t._stroke,
          e = t._fill,
          n = t.options,
          o = t._container;
      o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i = i || (t._stroke = He("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = d(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e = e || (t._fill = He("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null);
    },
    _updateCircle: function _updateCircle(t) {
      var i = t._point.round(),
          e = Math.round(t._radius),
          n = Math.round(t._radiusY || e);

      this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600");
    },
    _setPath: function _setPath(t, i) {
      t._path.v = i;
    },
    _bringToFront: function _bringToFront(t) {
      fi(t._container);
    },
    _bringToBack: function _bringToBack(t) {
      gi(t._container);
    }
  },
      We = P.vml ? He : ct,
      Fe = Ne.extend({
    _initContainer: function _initContainer() {
      this._container = We("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = We("g"), this._container.appendChild(this._rootGroup);
    },
    _destroyContainer: function _destroyContainer() {
      T(this._container), E(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
    },
    _update: function _update() {
      var t, i, e;
      this._map._animatingZoom && this._bounds || (Ne.prototype._update.call(this), i = (t = this._bounds).getSize(), e = this._container, this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), Z(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update"));
    },
    _initPath: function _initPath(t) {
      var i = t._path = We("path");
      t.options.className && z(i, t.options.className), t.options.interactive && z(i, "leaflet-interactive"), this._updateStyle(t), this._layers[h(t)] = t;
    },
    _addPath: function _addPath(t) {
      this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
    },
    _removePath: function _removePath(t) {
      T(t._path), t.removeInteractiveTarget(t._path), delete this._layers[h(t)];
    },
    _updatePath: function _updatePath(t) {
      t._project(), t._update();
    },
    _updateStyle: function _updateStyle(t) {
      var i = t._path,
          t = t.options;
      i && (t.stroke ? (i.setAttribute("stroke", t.color), i.setAttribute("stroke-opacity", t.opacity), i.setAttribute("stroke-width", t.weight), i.setAttribute("stroke-linecap", t.lineCap), i.setAttribute("stroke-linejoin", t.lineJoin), t.dashArray ? i.setAttribute("stroke-dasharray", t.dashArray) : i.removeAttribute("stroke-dasharray"), t.dashOffset ? i.setAttribute("stroke-dashoffset", t.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), t.fill ? (i.setAttribute("fill", t.fillColor || t.color), i.setAttribute("fill-opacity", t.fillOpacity), i.setAttribute("fill-rule", t.fillRule || "evenodd")) : i.setAttribute("fill", "none"));
    },
    _updatePoly: function _updatePoly(t, i) {
      this._setPath(t, dt(t._parts, i));
    },
    _updateCircle: function _updateCircle(t) {
      var i = t._point,
          e = Math.max(Math.round(t._radius), 1),
          n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
          i = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";

      this._setPath(t, i);
    },
    _setPath: function _setPath(t, i) {
      t._path.setAttribute("d", i);
    },
    _bringToFront: function _bringToFront(t) {
      fi(t._path);
    },
    _bringToBack: function _bringToBack(t) {
      gi(t._path);
    }
  });

  function Ue(t) {
    return P.svg || P.vml ? new Fe(t) : null;
  }

  P.vml && Fe.include(Mt), A.include({
    getRenderer: function getRenderer(t) {
      t = (t = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer());
      return this.hasLayer(t) || this.addLayer(t), t;
    },
    _getPaneRenderer: function _getPaneRenderer(t) {
      if ("overlayPane" === t || void 0 === t) return !1;
      var i = this._paneRenderers[t];
      return void 0 === i && (i = this._createRenderer({
        pane: t
      }), this._paneRenderers[t] = i), i;
    },
    _createRenderer: function _createRenderer(t) {
      return this.options.preferCanvas && je(t) || Ue(t);
    }
  });
  var Ve = ge.extend({
    initialize: function initialize(t, i) {
      ge.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
    },
    setBounds: function setBounds(t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function _boundsToLatLngs(t) {
      return [(t = g(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
    }
  });
  Fe.create = We, Fe.pointsToPath = dt, ve.geometryToLayer = ye, ve.coordsToLatLng = we, ve.coordsToLatLngs = Pe, ve.latLngToCoords = be, ve.latLngsToCoords = Le, ve.getFeature = Te, ve.asFeature = ze, A.mergeOptions({
    boxZoom: !0
  });

  var _t = n.extend({
    initialize: function initialize(t) {
      this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
    },
    addHooks: function addHooks() {
      S(this._container, "mousedown", this._onMouseDown, this);
    },
    removeHooks: function removeHooks() {
      E(this._container, "mousedown", this._onMouseDown, this);
    },
    moved: function moved() {
      return this._moved;
    },
    _destroy: function _destroy() {
      T(this._pane), delete this._pane;
    },
    _resetState: function _resetState() {
      this._resetStateTimeout = 0, this._moved = !1;
    },
    _clearDeferredResetState: function _clearDeferredResetState() {
      0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
    },
    _onMouseDown: function _onMouseDown(t) {
      if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
      this._clearDeferredResetState(), this._resetState(), ri(), Li(), this._startPoint = this._map.mouseEventToContainerPoint(t), S(document, {
        contextmenu: Ri,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseMove: function _onMouseMove(t) {
      this._moved || (this._moved = !0, this._box = b("div", "leaflet-zoom-box", this._container), z(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
      var t = new m(this._point, this._startPoint),
          i = t.getSize();
      Z(this._box, t.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
    },
    _finish: function _finish() {
      this._moved && (T(this._box), M(this._container, "leaflet-crosshair")), ai(), Ti(), E(document, {
        contextmenu: Ri,
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp,
        keydown: this._onKeyDown
      }, this);
    },
    _onMouseUp: function _onMouseUp(t) {
      1 !== t.which && 1 !== t.button || (this._finish(), this._moved && (this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(a(this._resetState, this), 0), t = new s(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point)), this._map.fitBounds(t).fire("boxzoomend", {
        boxZoomBounds: t
      })));
    },
    _onKeyDown: function _onKeyDown(t) {
      27 === t.keyCode && (this._finish(), this._clearDeferredResetState(), this._resetState());
    }
  }),
      Ct = (A.addInitHook("addHandler", "boxZoom", _t), A.mergeOptions({
    doubleClickZoom: !0
  }), n.extend({
    addHooks: function addHooks() {
      this._map.on("dblclick", this._onDoubleClick, this);
    },
    removeHooks: function removeHooks() {
      this._map.off("dblclick", this._onDoubleClick, this);
    },
    _onDoubleClick: function _onDoubleClick(t) {
      var i = this._map,
          e = i.getZoom(),
          n = i.options.zoomDelta,
          e = t.originalEvent.shiftKey ? e - n : e + n;
      "center" === i.options.doubleClickZoom ? i.setZoom(e) : i.setZoomAround(t.containerPoint, e);
    }
  })),
      Zt = (A.addInitHook("addHandler", "doubleClickZoom", Ct), A.mergeOptions({
    dragging: !0,
    inertia: !0,
    inertiaDeceleration: 3400,
    inertiaMaxSpeed: 1 / 0,
    easeLinearity: .2,
    worldCopyJump: !1,
    maxBoundsViscosity: 0
  }), n.extend({
    addHooks: function addHooks() {
      var t;
      this._draggable || (t = this._map, this._draggable = new Xi(t._mapPane, t._container), this._draggable.on({
        dragstart: this._onDragStart,
        drag: this._onDrag,
        dragend: this._onDragEnd
      }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))), z(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
    },
    removeHooks: function removeHooks() {
      M(this._map._container, "leaflet-grab"), M(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
    },
    moved: function moved() {
      return this._draggable && this._draggable._moved;
    },
    moving: function moving() {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function _onDragStart() {
      var t,
          i = this._map;
      i._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = g(this._map.options.maxBounds), this._offsetLimit = f(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null, i.fire("movestart").fire("dragstart"), i.options.inertia && (this._positions = [], this._times = []);
    },
    _onDrag: function _onDrag(t) {
      var i, e;
      this._map.options.inertia && (i = this._lastTime = +new Date(), e = this._lastPos = this._draggable._absPos || this._draggable._newPos, this._positions.push(e), this._times.push(i), this._prunePositions(i)), this._map.fire("move", t).fire("drag", t);
    },
    _prunePositions: function _prunePositions(t) {
      for (; 1 < this._positions.length && 50 < t - this._times[0];) {
        this._positions.shift(), this._times.shift();
      }
    },
    _onZoomEnd: function _onZoomEnd() {
      var t = this._map.getSize().divideBy(2),
          i = this._map.latLngToLayerPoint([0, 0]);

      this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
    },
    _viscousLimit: function _viscousLimit(t, i) {
      return t - (t - i) * this._viscosity;
    },
    _onPreDragLimit: function _onPreDragLimit() {
      var t, i;
      this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos), i = this._offsetLimit, t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t));
    },
    _onPreDragWrap: function _onPreDragWrap() {
      var t = this._worldWidth,
          i = Math.round(t / 2),
          e = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = (n - i + e) % t + i - e,
          n = (n + i + e) % t - i - e,
          t = Math.abs(o + e) < Math.abs(n + e) ? o : n;
      this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = t;
    },
    _onDragEnd: function _onDragEnd(t) {
      var i,
          e,
          n,
          o,
          s = this._map,
          r = s.options,
          a = !r.inertia || t.noInertia || this._times.length < 2;
      s.fire("dragend", t), a ? s.fire("moveend") : (this._prunePositions(+new Date()), t = this._lastPos.subtract(this._positions[0]), a = (this._lastTime - this._times[0]) / 1e3, i = r.easeLinearity, a = (t = t.multiplyBy(i / a)).distanceTo([0, 0]), e = Math.min(r.inertiaMaxSpeed, a), t = t.multiplyBy(e / a), n = e / (r.inertiaDeceleration * i), (o = t.multiplyBy(-n / 2).round()).x || o.y ? (o = s._limitOffset(o, s.options.maxBounds), x(function () {
        s.panBy(o, {
          duration: n,
          easeLinearity: i,
          noMoveStart: !0,
          animate: !0
        });
      })) : s.fire("moveend"));
    }
  })),
      St = (A.addInitHook("addHandler", "dragging", Zt), A.mergeOptions({
    keyboard: !0,
    keyboardPanDelta: 80
  }), n.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173]
    },
    initialize: function initialize(t) {
      this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function addHooks() {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = "0"), S(t, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this), this._map.on({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    removeHooks: function removeHooks() {
      this._removeHooks(), E(this._map._container, {
        focus: this._onFocus,
        blur: this._onBlur,
        mousedown: this._onMouseDown
      }, this), this._map.off({
        focus: this._addHooks,
        blur: this._removeHooks
      }, this);
    },
    _onMouseDown: function _onMouseDown() {
      var t, i, e;
      this._focused || (e = document.body, t = document.documentElement, i = e.scrollTop || t.scrollTop, e = e.scrollLeft || t.scrollLeft, this._map._container.focus(), window.scrollTo(e, i));
    },
    _onFocus: function _onFocus() {
      this._focused = !0, this._map.fire("focus");
    },
    _onBlur: function _onBlur() {
      this._focused = !1, this._map.fire("blur");
    },
    _setPanDelta: function _setPanDelta(t) {
      for (var i = this._panKeys = {}, e = this.keyCodes, n = 0, o = e.left.length; n < o; n++) {
        i[e.left[n]] = [-1 * t, 0];
      }

      for (n = 0, o = e.right.length; n < o; n++) {
        i[e.right[n]] = [t, 0];
      }

      for (n = 0, o = e.down.length; n < o; n++) {
        i[e.down[n]] = [0, t];
      }

      for (n = 0, o = e.up.length; n < o; n++) {
        i[e.up[n]] = [0, -1 * t];
      }
    },
    _setZoomDelta: function _setZoomDelta(t) {
      for (var i = this._zoomKeys = {}, e = this.keyCodes, n = 0, o = e.zoomIn.length; n < o; n++) {
        i[e.zoomIn[n]] = t;
      }

      for (n = 0, o = e.zoomOut.length; n < o; n++) {
        i[e.zoomOut[n]] = -t;
      }
    },
    _addHooks: function _addHooks() {
      S(document, "keydown", this._onKeyDown, this);
    },
    _removeHooks: function _removeHooks() {
      E(document, "keydown", this._onKeyDown, this);
    },
    _onKeyDown: function _onKeyDown(t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var i,
            e = t.keyCode,
            n = this._map;
        if (e in this._panKeys) n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e], t.shiftKey && (i = _(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);else {
          if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
          n.closePopup();
        }
        Ri(t);
      }
    }
  })),
      kt = (A.addInitHook("addHandler", "keyboard", St), A.mergeOptions({
    scrollWheelZoom: !0,
    wheelDebounceTime: 40,
    wheelPxPerZoomLevel: 60
  }), n.extend({
    addHooks: function addHooks() {
      S(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
    },
    removeHooks: function removeHooks() {
      E(this._map._container, "wheel", this._onWheelScroll, this);
    },
    _onWheelScroll: function _onWheelScroll(t) {
      var i = ji(t),
          e = this._map.options.wheelDebounceTime,
          i = (this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date()), Math.max(e - (+new Date() - this._startTime), 0));
      clearTimeout(this._timer), this._timer = setTimeout(a(this._performZoom, this), i), Ri(t);
    },
    _performZoom: function _performZoom() {
      var t = this._map,
          i = t.getZoom(),
          e = this._map.options.zoomSnap || 0,
          n = (t._stop(), this._delta / (4 * this._map.options.wheelPxPerZoomLevel)),
          n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
          e = e ? Math.ceil(n / e) * e : n,
          n = t._limitZoom(i + (0 < this._delta ? e : -e)) - i;
      this._delta = 0, this._startTime = null, n && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + n) : t.setZoomAround(this._lastMousePos, i + n));
    }
  })),
      Et = (A.addInitHook("addHandler", "scrollWheelZoom", kt), A.mergeOptions({
    tapHold: P.touchNative && P.safari && P.mobile,
    tapTolerance: 15
  }), n.extend({
    addHooks: function addHooks() {
      S(this._map._container, "touchstart", this._onDown, this);
    },
    removeHooks: function removeHooks() {
      E(this._map._container, "touchstart", this._onDown, this);
    },
    _onDown: function _onDown(t) {
      var i;
      clearTimeout(this._holdTimeout), 1 === t.touches.length && (i = t.touches[0], this._startPos = this._newPos = new p(i.clientX, i.clientY), this._holdTimeout = setTimeout(a(function () {
        this._cancel(), this._isTapValid() && (S(document, "touchend", B), S(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", i));
      }, this), 600), S(document, "touchend touchcancel contextmenu", this._cancel, this), S(document, "touchmove", this._onMove, this));
    },
    _cancelClickPrevent: function t() {
      E(document, "touchend", B), E(document, "touchend touchcancel", t);
    },
    _cancel: function _cancel() {
      clearTimeout(this._holdTimeout), E(document, "touchend touchcancel contextmenu", this._cancel, this), E(document, "touchmove", this._onMove, this);
    },
    _onMove: function _onMove(t) {
      t = t.touches[0];
      this._newPos = new p(t.clientX, t.clientY);
    },
    _isTapValid: function _isTapValid() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    },
    _simulateEvent: function _simulateEvent(t, i) {
      t = new MouseEvent(t, {
        bubbles: !0,
        cancelable: !0,
        view: window,
        screenX: i.screenX,
        screenY: i.screenY,
        clientX: i.clientX,
        clientY: i.clientY
      });
      t._simulated = !0, i.target.dispatchEvent(t);
    }
  })),
      Bt = (A.addInitHook("addHandler", "tapHold", Et), A.mergeOptions({
    touchZoom: P.touch,
    bounceAtZoomLimits: !0
  }), n.extend({
    addHooks: function addHooks() {
      z(this._map._container, "leaflet-touch-zoom"), S(this._map._container, "touchstart", this._onTouchStart, this);
    },
    removeHooks: function removeHooks() {
      M(this._map._container, "leaflet-touch-zoom"), E(this._map._container, "touchstart", this._onTouchStart, this);
    },
    _onTouchStart: function _onTouchStart(t) {
      var i,
          e,
          n = this._map;
      !t.touches || 2 !== t.touches.length || n._animatingZoom || this._zooming || (i = n.mouseEventToContainerPoint(t.touches[0]), e = n.mouseEventToContainerPoint(t.touches[1]), this._centerPoint = n.getSize()._divideBy(2), this._startLatLng = n.containerPointToLatLng(this._centerPoint), "center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(i.add(e)._divideBy(2))), this._startDist = i.distanceTo(e), this._startZoom = n.getZoom(), this._moved = !1, this._zooming = !0, n._stop(), S(document, "touchmove", this._onTouchMove, this), S(document, "touchend touchcancel", this._onTouchEnd, this), B(t));
    },
    _onTouchMove: function _onTouchMove(t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var i = this._map,
            e = i.mouseEventToContainerPoint(t.touches[0]),
            n = i.mouseEventToContainerPoint(t.touches[1]),
            o = e.distanceTo(n) / this._startDist;

        if (this._zoom = i.getScaleZoom(o, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && o < 1 || this._zoom > i.getMaxZoom() && 1 < o) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
          if (this._center = this._startLatLng, 1 == o) return;
        } else {
          e = e._add(n)._divideBy(2)._subtract(this._centerPoint);
          if (1 == o && 0 === e.x && 0 === e.y) return;
          this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(e), this._zoom);
        }

        this._moved || (i._moveStart(!0, !1), this._moved = !0), r(this._animRequest);
        n = a(i._move, i, this._center, this._zoom, {
          pinch: !0,
          round: !1
        });
        this._animRequest = x(n, this, !0), B(t);
      }
    },
    _onTouchEnd: function _onTouchEnd() {
      this._moved && this._zooming ? (this._zooming = !1, r(this._animRequest), E(document, "touchmove", this._onTouchMove, this), E(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1;
    }
  })),
      qe = (A.addInitHook("addHandler", "touchZoom", Bt), A.BoxZoom = _t, A.DoubleClickZoom = Ct, A.Drag = Zt, A.Keyboard = St, A.ScrollWheelZoom = kt, A.TapHold = Et, A.TouchZoom = Bt, t.Bounds = m, t.Browser = P, t.CRS = ot, t.Canvas = De, t.Circle = me, t.CircleMarker = pe, t.Class = it, t.Control = I, t.DivIcon = Be, t.DivOverlay = O, t.DomEvent = mt, t.DomUtil = pt, t.Draggable = Xi, t.Evented = et, t.FeatureGroup = he, t.GeoJSON = ve, t.GridLayer = Ae, t.Handler = n, t.Icon = le, t.ImageOverlay = Ce, t.LatLng = v, t.LatLngBounds = s, t.Layer = o, t.LayerGroup = ae, t.LineUtil = gt, t.Map = A, t.Marker = de, t.Mixin = ft, t.Path = _e, t.Point = p, t.PolyUtil = vt, t.Polygon = ge, t.Polyline = fe, t.Popup = ke, t.PosAnimation = Wi, t.Projection = wt, t.Rectangle = Ve, t.Renderer = Ne, t.SVG = Fe, t.SVGOverlay = Se, t.TileLayer = Ie, t.Tooltip = Ee, t.Transformation = at, t.Util = tt, t.VideoOverlay = Ze, t.bind = a, t.bounds = f, t.canvas = je, t.circle = function (t, i, e) {
    return new me(t, i, e);
  }, t.circleMarker = function (t, i) {
    return new pe(t, i);
  }, t.control = Fi, t.divIcon = function (t) {
    return new Be(t);
  }, t.extend = l, t.featureGroup = function (t, i) {
    return new he(t, i);
  }, t.geoJSON = Me, t.geoJson = zt, t.gridLayer = function (t) {
    return new Ae(t);
  }, t.icon = function (t) {
    return new le(t);
  }, t.imageOverlay = function (t, i, e) {
    return new Ce(t, i, e);
  }, t.latLng = w, t.latLngBounds = g, t.layerGroup = function (t, i) {
    return new ae(t, i);
  }, t.map = function (t, i) {
    return new A(t, i);
  }, t.marker = function (t, i) {
    return new de(t, i);
  }, t.point = _, t.polygon = function (t, i) {
    return new ge(t, i);
  }, t.polyline = function (t, i) {
    return new fe(t, i);
  }, t.popup = function (t, i) {
    return new ke(t, i);
  }, t.rectangle = function (t, i) {
    return new Ve(t, i);
  }, t.setOptions = c, t.stamp = h, t.svg = Ue, t.svgOverlay = function (t, i, e) {
    return new Se(t, i, e);
  }, t.tileLayer = Oe, t.tooltip = function (t, i) {
    return new Ee(t, i);
  }, t.transformation = ht, t.version = "1.8.0", t.videoOverlay = function (t, i, e) {
    return new Ze(t, i, e);
  }, window.L);

  t.noConflict = function () {
    return window.L = qe, this;
  }, window.L = t;
});

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js":
/*!********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js ***!
  \********************************************************************************************/
/***/ (() => {

(function (global, doc, React, ReactDOM, ibexa) {
  var contentTreeContainer = doc.querySelector('.ibexa-content-tree-container');

  if (!contentTreeContainer) {
    return;
  }

  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var contentTreeRootElement = doc.querySelector('.ibexa-content-tree-container__root');
  var _contentTreeContainer = contentTreeContainer.dataset,
      currentLocationPath = _contentTreeContainer.currentLocationPath,
      treeRootLocationId = _contentTreeContainer.treeRootLocationId;
  var userId = window.ibexa.helpers.user.getId();

  var removeContentTreeContainerWidth = function removeContentTreeContainerWidth(event) {
    if (event.detail.id !== 'ibexa-content-tree') {
      return;
    }

    contentTreeContainer.style.width = null;
  };

  var renderTree = function renderTree() {
    var contentTreeRoot = ReactDOM.createRoot(contentTreeRootElement);
    contentTreeRoot.render(React.createElement(ibexa.modules.ContentTree, {
      userId: userId,
      currentLocationPath: currentLocationPath,
      rootLocationId: parseInt(treeRootLocationId, 10),
      restInfo: {
        token: token,
        siteaccess: siteaccess
      }
    }));
  };

  doc.body.addEventListener('ibexa-tb-rendered', removeContentTreeContainerWidth);
  renderTree();
})(window, window.document, window.React, window.ReactDOM, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.add.custom_url.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.add.custom_url.js ***!
  \*******************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var modal = doc.querySelector('#ibexa-modal--custom-url-alias');

  if (modal) {
    var discardBtns = modal.querySelectorAll('[data-bs-dismiss="modal"]');
    var submitBtn = modal.querySelector('#custom_url_add_add');
    var input = modal.querySelector('[required="required"]');
    var siteRootCheckbox = modal.querySelector('[name="custom_url_add[site_root]"]');

    var toggleButtonState = function toggleButtonState() {
      var hasValue = input.value.trim().length !== 0;
      var methodName = hasValue ? 'removeAttribute' : 'setAttribute';
      submitBtn[methodName]('disabled', true);
    };

    var clearValues = function clearValues() {
      input.value = '';
      toggleButtonState();
    };

    var toggleSiteAccessSelect = function toggleSiteAccessSelect(event) {
      var isChecked = event.target.checked;
      var siteAccessSelect = modal.querySelector('.ibexa-custom-url-from__item--siteacces .ibexa-dropdown');
      siteAccessSelect.classList.toggle('ibexa-dropdown--is-disabled', isChecked);
    };

    input.addEventListener('input', toggleButtonState, false);
    siteRootCheckbox.addEventListener('change', toggleSiteAccessSelect, false);
    discardBtns.forEach(function (btn) {
      return btn.addEventListener('click', clearValues, false);
    });
  }
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.bookmark.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.bookmark.js ***!
  \*************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var ENDPOINT_BOOKMARK = '/api/ibexa/v2/bookmark';
  var SELECTOR_BOOKMARK_WRAPPER = '.ibexa-add-to-bookmarks';
  var CLASS_BOOKMARK_CHECKED = 'ibexa-add-to-bookmarks--checked';
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var bookmarkWrapper = doc.querySelector(SELECTOR_BOOKMARK_WRAPPER);

  if (!bookmarkWrapper) {
    return;
  }

  var currentLocationId = parseInt(bookmarkWrapper.getAttribute('data-location-id'), 10);
  var handleUpdateError = ibexa.helpers.notification.showErrorNotification;
  var isUpdatingBookmark = false;

  var getResponseStatus = function getResponseStatus(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response.status;
  };

  var onBookmarkUpdated = function onBookmarkUpdated(isBookmarked) {
    ibexa.helpers.tooltips.hideAll();
    toggleBookmarkIconState(isBookmarked);
    isUpdatingBookmark = false;
  };

  var updateBookmark = function updateBookmark(addBookmark) {
    if (isUpdatingBookmark) {
      return;
    }

    isUpdatingBookmark = true;
    var method = addBookmark ? 'POST' : 'DELETE';
    var request = new Request("".concat(ENDPOINT_BOOKMARK, "/").concat(currentLocationId), {
      method: method,
      headers: {
        'X-Siteaccess': siteaccess,
        'X-CSRF-Token': token
      },
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(getResponseStatus).then(onBookmarkUpdated.bind(null, addBookmark))["catch"](handleUpdateError);
  };

  var isCurrentLocation = function isCurrentLocation(locationId) {
    return parseInt(locationId, 10) === currentLocationId;
  };

  var toggleBookmarkIconState = function toggleBookmarkIconState(isBookmarked) {
    bookmarkWrapper.classList.toggle(CLASS_BOOKMARK_CHECKED, isBookmarked);
  };

  var updateBookmarkIconState = function updateBookmarkIconState(_ref) {
    var detail = _ref.detail;
    var bookmarked = detail.bookmarked,
        locationId = detail.locationId;

    if (isCurrentLocation(locationId)) {
      toggleBookmarkIconState(bookmarked);
    }
  };

  var checkIsBookmarked = function checkIsBookmarked() {
    return bookmarkWrapper.classList.contains(CLASS_BOOKMARK_CHECKED);
  };

  var onBookmarkChange = function onBookmarkChange() {
    var addBookmark = !checkIsBookmarked();
    updateBookmark(addBookmark);
  };

  doc.body.addEventListener('ibexa-bookmark-change', updateBookmarkIconState, false);

  if (bookmarkWrapper) {
    bookmarkWrapper.addEventListener('click', onBookmarkChange, false);
  }
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js":
/*!********************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js ***!
  \********************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var changeLocationLanguage = function changeLocationLanguage(event) {
    global.location = event.currentTarget.value;
  };

  var locationLanguageSwitchers = doc.querySelectorAll('.ibexa-location-language-change');
  locationLanguageSwitchers.forEach(function (locationLanguageSwitcher) {
    locationLanguageSwitcher.addEventListener('change', changeLocationLanguage, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.load.map.js":
/*!*************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.load.map.js ***!
  \*************************************************************************************************/
/***/ (() => {

(function (global, doc, Leaflet) {
  doc.querySelectorAll('.ibexa-gmaplocation__map').forEach(function (mapLocation) {
    var latitude = parseFloat(mapLocation.dataset.latitude);
    var longitude = parseFloat(mapLocation.dataset.longitude);
    var map = Leaflet.map(mapLocation, {
      zoom: 15,
      zoomControl: false,
      scrollWheelZoom: false,
      dragging: false,
      tap: false,
      center: [latitude, longitude]
    });
    Leaflet.marker([latitude, longitude], {
      icon: new Leaflet.Icon.Default({
        imagePath: '/bundles/ibexaadminuiassets/vendors/leaflet/dist/images/'
      })
    }).addTo(map);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  });
})(window, window.document, window.L);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tooglecontentpreview.js":
/*!*************************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tooglecontentpreview.js ***!
  \*************************************************************************************************************/
/***/ (() => {

(function (global, doc, localStorage, bootstrap) {
  var CONTENT_PREVIEW_COLLAPSE_SELECTOR = '.ibexa-content-preview-collapse';
  var DEFAULT_CONTENT_PREVIEW_TOGGLE_STATE_KEY = 'ibexa-content-preview-collapsed';

  var getStateKey = function getStateKey(collapseTarget) {
    return collapseTarget.dataset.collapseStateKey || DEFAULT_CONTENT_PREVIEW_TOGGLE_STATE_KEY;
  };

  var getContentPreviewToggleState = function getContentPreviewToggleState(collapsable) {
    var stateKey = getStateKey(collapsable);
    var value = localStorage.getItem(stateKey);
    return !!JSON.parse(value);
  };

  var setContentPreviewToggleState = function setContentPreviewToggleState(event, value) {
    var stateKey = getStateKey(event.target);
    localStorage.setItem(stateKey, value);
  };

  doc.querySelectorAll(CONTENT_PREVIEW_COLLAPSE_SELECTOR).forEach(function (collapsable) {
    new bootstrap.Collapse(collapsable, {
      toggle: getContentPreviewToggleState(collapsable)
    });
    collapsable.addEventListener('hide.bs.collapse', function (event) {
      return setContentPreviewToggleState(event, true);
    });
    collapsable.addEventListener('show.bs.collapse', function (event) {
      return setContentPreviewToggleState(event, false);
    });
  });
})(window, window.document, window.localStorage, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.update.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.update.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var updateMainLocation = function updateMainLocation(event) {
    doc.querySelector('#content_main_location_update_location').value = event.target.value;
    doc.querySelector('form[name="content_main_location_update"]').submit();
  };

  doc.querySelectorAll('input[name="updateMainLocation"]').forEach(function (input) {
    return input.addEventListener('change', updateMainLocation, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.view.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.view.js ***!
  \*********************************************************************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, localStorage, bootstrap, React, ReactDOM, ibexa, Routing, Translator) {
  var SELECTOR_MODAL_BULK_ACTION_FAIL = '#bulk-action-failed-modal';
  var listContainers = doc.querySelectorAll('.ibexa-sil');
  var mfuContainer = doc.querySelector('#ibexa-mfu');
  var token = doc.querySelector('meta[name="CSRF-Token"]').content;
  var siteaccess = doc.querySelector('meta[name="SiteAccess"]').content;
  var sortContainer = doc.querySelector('[data-sort-field][data-sort-order]');
  var sortField = sortContainer.getAttribute('data-sort-field');
  var sortOrder = sortContainer.getAttribute('data-sort-order');

  var handleEditItem = function handleEditItem(content, location) {
    var contentId = content._id;
    var locationId = location._id;
    var languageCode = content.mainLanguageCode;
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode,
      locationId: locationId
    });

    var submitVersionEditForm = function submitVersionEditForm() {
      doc.querySelector('#form_subitems_content_edit_content_info').value = contentId;
      doc.querySelector("#form_subitems_content_edit_language_".concat(languageCode)).checked = true;
      doc.querySelector('#form_subitems_content_edit_create').click();
    };

    var addDraft = function addDraft() {
      submitVersionEditForm();
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
    };

    var attachModalListeners = function attachModalListeners(wrapper) {
      var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');
      var conflictModal = doc.querySelector('#version-draft-conflict-modal');

      if (addDraftButton) {
        addDraftButton.addEventListener('click', addDraft, false);
      }

      wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
        return btn.addEventListener('click', function (event) {
          return event.preventDefault();
        }, false);
      });

      if (conflictModal) {
        bootstrap.Modal.getOrCreateInstance(conflictModal).show();
        conflictModal.addEventListener('shown.bs.modal', function () {
          return ibexa.helpers.tooltips.parse();
        });
      }
    };

    var showModal = function showModal(modalHtml) {
      var wrapper = doc.querySelector('.ibexa-modal-wrapper');
      wrapper.innerHTML = modalHtml;
      attachModalListeners(wrapper);
    };

    var checkEditPermissionLink = Routing.generate('ibexa.content.check_edit_permission', {
      contentId: contentId,
      languageCode: content.mainLanguageCode
    });
    var errorMessage = Translator.trans(
    /*@Desc("You don't have permission to edit this Content item")*/
    'content.edit.permission.error', {}, 'content');

    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(checkVersionDraftLink, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }

      throw new Error(errorMessage);
    };

    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(ibexa.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(function (response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        response.text().then(showModal);
      } else if (response.status === 200) {
        submitVersionEditForm();
      }
    })["catch"](ibexa.helpers.notification.showErrorNotification);
  };

  var generateLink = function generateLink(locationId, contentId) {
    return Routing.generate('ibexa.content.view', {
      contentId: contentId,
      locationId: locationId
    });
  };

  var setModalTableTitle = function setModalTableTitle(title) {
    var modalTableTitleNode = doc.querySelector("".concat(SELECTOR_MODAL_BULK_ACTION_FAIL, " .ibexa-table-header__headline"));
    modalTableTitleNode.innerHTML = title;
    modalTableTitleNode.setAttribute('title', title);
    modalTableTitleNode.dataset.originalTitle = title;
  };

  var setModalTableBody = function setModalTableBody(failedItemsData) {
    var modal = doc.querySelector(SELECTOR_MODAL_BULK_ACTION_FAIL);
    var table = modal.querySelector('.ibexa-bulk-action-failed-modal__table');
    var tableBody = table.querySelector('.ibexa-bulk-action-failed-modal__table-body');
    var rowTemplate = table.dataset.rowTemplate;
    var fragment = doc.createDocumentFragment();
    failedItemsData.forEach(function (_ref) {
      var contentName = _ref.contentName,
          contentTypeName = _ref.contentTypeName;
      var container = doc.createElement('tbody');
      var renderedItem = rowTemplate.replace('{{ content_name }}', contentName).replace('{{ content_type_name }}', contentTypeName);
      container.insertAdjacentHTML('beforeend', renderedItem);
      var tableRowNode = container.querySelector('tr');
      fragment.append(tableRowNode);
    });
    removeNodeChildren(tableBody);
    tableBody.append(fragment);
  };

  var removeNodeChildren = function removeNodeChildren(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };

  var showBulkActionFailedModal = function showBulkActionFailedModal(tableTitle, failedItemsData) {
    setModalTableBody(failedItemsData);
    setModalTableTitle(tableTitle);
    bootstrap.Modal.getOrCreateInstance(doc.querySelector(SELECTOR_MODAL_BULK_ACTION_FAIL)).show();
  };

  var getLocationActiveView = function getLocationActiveView(parentLocationId) {
    var mediaLocationId = ibexa.adminUiConfig.locations.media;
    var defaultActiveView = parentLocationId === mediaLocationId ? 'grid' : 'table';
    var activeView = localStorage.getItem("ibexa-subitems-active-view-location-".concat(parentLocationId));
    return activeView || defaultActiveView;
  };

  listContainers.forEach(function (container) {
    var subitemsRoot = ReactDOM.createRoot(container);
    var parentLocationId = parseInt(container.dataset.location, 10);
    var activeView = getLocationActiveView(parentLocationId);
    var subItemsList = JSON.parse(container.dataset.items).SubitemsList;
    var items = subItemsList.SubitemsRow.map(function (item) {
      return {
        content: item.Content,
        location: item.Location
      };
    });
    var contentTypes = JSON.parse(container.dataset.contentTypes).ContentTypeInfoList.ContentType;
    var contentTypesMap = contentTypes.reduce(function (total, item) {
      total[item._href] = item;
      return total;
    }, {});
    var udwConfigBulkMoveItems = JSON.parse(container.dataset.udwConfigBulkMoveItems);
    var udwConfigBulkAddLocation = JSON.parse(container.dataset.udwConfigBulkAddLocation);
    var mfuContentTypesMap = Object.values(ibexa.adminUiConfig.contentTypes).reduce(function (contentTypeDataMap, contentTypeGroup) {
      var _iterator = _createForOfIteratorHelper(contentTypeGroup),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var contentTypeData = _step.value;
          contentTypeDataMap[contentTypeData.href] = contentTypeData;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return contentTypeDataMap;
    }, {});
    var mfuAttrs = {
      adminUiConfig: _objectSpread(_objectSpread({}, ibexa.adminUiConfig), {}, {
        token: token,
        siteaccess: siteaccess
      }),
      parentInfo: {
        contentTypeIdentifier: mfuContainer.dataset.parentContentTypeIdentifier,
        contentTypeId: parseInt(mfuContainer.dataset.parentContentTypeId, 10),
        locationPath: mfuContainer.dataset.parentLocationPath,
        language: mfuContainer.dataset.parentContentLanguage
      },
      currentLanguage: mfuContainer.dataset.currentLanguage
    };
    subitemsRoot.render(React.createElement(ibexa.modules.SubItems, {
      handleEditItem: handleEditItem,
      generateLink: generateLink,
      activeView: activeView,
      parentLocationId: parentLocationId,
      sortClauses: _defineProperty({}, sortField, sortOrder),
      restInfo: {
        token: token,
        siteaccess: siteaccess
      },
      extraActions: [{
        component: ibexa.modules.MultiFileUpload,
        attrs: _objectSpread(_objectSpread({}, mfuAttrs), {}, {
          onPopupClose: function onPopupClose(itemsUploaded) {
            return itemsUploaded.length && global.location.reload(true);
          },
          contentCreatePermissionsConfig: JSON.parse(container.dataset.mfuCreatePermissionsConfig),
          contentTypesMap: mfuContentTypesMap
        })
      }],
      items: items,
      contentTypesMap: contentTypesMap,
      totalCount: subItemsList.ChildrenCount,
      udwConfigBulkMoveItems: udwConfigBulkMoveItems,
      udwConfigBulkAddLocation: udwConfigBulkAddLocation,
      showBulkActionFailedModal: showBulkActionFailedModal
    }));
  });
})(window, window.document, window.localStorage, window.bootstrap, window.React, window.ReactDOM, window.ibexa, window.Routing, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.visibility.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.visibility.js ***!
  \***************************************************************************************************/
/***/ (() => {

(function (global, doc, ibexa) {
  var SELECTOR_VISIBILITY_CHECKBOXES = '#ibexa-tab-location-view-locations .ibexa-content-locations__visibility-checkbox';
  var SELECTOR_VISIBILITY_FORM = 'form[name="location_update_visibility_data"]';
  var form = doc.querySelector(SELECTOR_VISIBILITY_FORM);
  var visibilityCheckboxes = doc.querySelectorAll(SELECTOR_VISIBILITY_CHECKBOXES);

  var refreshContentTree = function refreshContentTree() {
    doc.body.dispatchEvent(new CustomEvent('ibexa-content-tree-refresh'));
  };

  var onVisibilityUpdated = function onVisibilityUpdated(_ref) {
    var target = _ref.target;
    var toggleLabel = target.closest('.ibexa-content-locations__visibility-toggler').querySelector('.ibexa-content-locations__visibility-toggler-label');
    toggleLabel.classList.toggle('ibexa-content-locations__visibility-toggler-label--hidden');
  };

  var handleUpdateError = ibexa.helpers.notification.showErrorNotification;

  var handleUpdateSuccess = function handleUpdateSuccess(event, _ref2) {
    var message = _ref2.message;
    onVisibilityUpdated(event);
    ibexa.helpers.notification.showSuccessNotification(message);
    refreshContentTree();
  };

  var handleUpdateResponse = function handleUpdateResponse(response) {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.json();
  };

  var updateVisibility = function updateVisibility(event) {
    form.querySelector('#location_update_visibility_data_location').value = event.target.value;
    form.querySelector('#location_update_visibility_data_hidden').checked = !event.target.checked;
    var request = new Request(form.action, {
      method: 'POST',
      body: new FormData(form),
      mode: 'same-origin',
      credentials: 'same-origin'
    });
    fetch(request).then(handleUpdateResponse).then(handleUpdateSuccess.bind(null, event))["catch"](handleUpdateError);
  };

  visibilityCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', updateVisibility, false);
  });
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.main.translation.update.js":
/*!*******************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.main.translation.update.js ***!
  \*******************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var updateMainTranslation = function updateMainTranslation(event) {
    doc.querySelector('#main_translation_update_language_code').value = event.target.value;
    doc.querySelector('form[name="main_translation_update"]').submit();
  };

  var inputs = doc.querySelectorAll('input[name="main_translation_update"]');
  inputs.forEach(function (input) {
    return input.addEventListener('change', updateMainTranslation, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js ***!
  \*****************************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap, ibexa, Translator, Routing) {
  var editVersion = function editVersion(event) {
    var showErrorNotification = ibexa.helpers.notification.showErrorNotification;
    var _event$currentTarget$ = event.currentTarget.dataset,
        contentDraftEditUrl = _event$currentTarget$.contentDraftEditUrl,
        versionHasConflictUrl = _event$currentTarget$.versionHasConflictUrl,
        contentId = _event$currentTarget$.contentId,
        languageCode = _event$currentTarget$.languageCode;
    var checkEditPermissionLink = Routing.generate('ibexa.content.check_edit_permission', {
      contentId: contentId,
      languageCode: languageCode
    });
    var errorMessage = Translator.trans(
    /*@Desc("You don't have permission to edit this Content item")*/
    'content.edit.permission.error', {}, 'content');

    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(versionHasConflictUrl, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }

      throw new Error(errorMessage);
    };

    var handleVersionDraftConflict = function handleVersionDraftConflict(response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        doc.querySelector('#edit-conflicted-draft').href = contentDraftEditUrl;
        bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-conflict-modal')).show();
      }

      if (response.status === 403) {
        response.text().then(showErrorNotification);
      }

      if (response.status === 200) {
        global.location.href = contentDraftEditUrl;
      }
    };

    event.preventDefault();
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(ibexa.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(handleVersionDraftConflict)["catch"](showErrorNotification);
  };

  doc.querySelectorAll('.ibexa-btn--content-draft-edit').forEach(function (button) {
    return button.addEventListener('click', editVersion, false);
  });
})(window, window.document, window.bootstrap, window.ibexa, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js ***!
  \*********************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap, ibexa, Translator, Routing) {
  var FORM_EDIT = 'form.ibexa-edit-content-form';
  var showErrorNotification = ibexa.helpers.notification.showErrorNotification;

  var editVersion = function editVersion(event) {
    var versionEditForm = doc.querySelector(FORM_EDIT);
    var versionEditFormName = versionEditForm.name;
    var _event$currentTarget$ = event.currentTarget.dataset,
        contentId = _event$currentTarget$.contentId,
        versionNo = _event$currentTarget$.versionNo,
        languageCode = _event$currentTarget$.languageCode;
    var contentInfoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[content_info]\"]"));
    var versionInfoContentInfoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[version_info][content_info]\"]"));
    var versionInfoVersionNoInput = versionEditForm.querySelector("input[name=\"".concat(versionEditFormName, "[version_info][version_no]\"]"));
    var languageInput = versionEditForm.querySelector("#".concat(versionEditFormName, "_language_").concat(languageCode));
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode
    });
    var checkEditPermissionLink = Routing.generate('ibexa.content.check_edit_permission', {
      contentId: contentId,
      languageCode: languageCode
    });
    var errorMessage = Translator.trans(
    /*@Desc("You don't have permission to edit this Content item")*/
    'content.edit.permission.error', {}, 'content');

    var submitVersionEditForm = function submitVersionEditForm() {
      contentInfoInput.value = contentId;
      versionInfoContentInfoInput.value = contentId;
      versionInfoVersionNoInput.value = versionNo !== undefined ? versionNo : null;
      languageInput.checked = true;
      versionEditForm.submit();
    };

    var addDraft = function addDraft() {
      submitVersionEditForm();
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
    };

    var showModal = function showModal(modalHtml) {
      var wrapper = doc.querySelector('.ibexa-modal-wrapper');
      wrapper.innerHTML = modalHtml;
      var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');

      if (addDraftButton) {
        addDraftButton.addEventListener('click', addDraft, false);
      }

      wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
        return btn.addEventListener('click', function (wrapperBtnEvent) {
          return wrapperBtnEvent.preventDefault();
        }, false);
      });
      bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).show();
    };

    var handleCanEditCheck = function handleCanEditCheck(response) {
      if (response.canEdit) {
        return fetch(checkVersionDraftLink, {
          mode: 'same-origin',
          credentials: 'same-origin'
        });
      }

      throw new Error(errorMessage);
    };

    var handleDraftConflict = function handleDraftConflict(response) {
      // Status 409 means that a draft conflict has occurred and the modal must be displayed.
      // Otherwise we can go to Content Item edit page.
      if (response.status === 409) {
        response.text().then(showModal);
      } else if (response.status === 403) {
        response.text().then(showErrorNotification);
      } else if (response.status === 200) {
        submitVersionEditForm();
      }
    };

    event.preventDefault();
    fetch(checkEditPermissionLink, {
      mode: 'same-origin',
      credentials: 'same-origin'
    }).then(ibexa.helpers.request.getJsonFromResponse).then(handleCanEditCheck).then(handleDraftConflict)["catch"](showErrorNotification);
  };

  doc.querySelectorAll('.ibexa-btn--content-edit').forEach(function (button) {
    return button.addEventListener('click', editVersion, false);
  });
})(window, window.document, window.bootstrap, window.ibexa, window.Translator, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js":
/*!*********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js ***!
  \*********************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var toggleForms = doc.querySelectorAll('.ibexa-toggle-btn-state');
  toggleForms.forEach(function (toggleForm) {
    var checkboxes = _toConsumableArray(toggleForm.querySelectorAll('.ibexa-table__cell--has-checkbox .ibexa-input--checkbox'));

    var buttonRemove = doc.querySelector(toggleForm.dataset.toggleButtonId);

    if (!buttonRemove) {
      return;
    }

    var toggleButtonState = function toggleButtonState() {
      var isAnythingSelected = checkboxes.some(function (el) {
        return el.checked;
      });
      buttonRemove.disabled = !isAnythingSelected;
    };

    toggleButtonState();
    checkboxes.forEach(function (checkbox) {
      return checkbox.addEventListener('change', toggleButtonState, false);
    });
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var editButton = doc.querySelector('.ibexa-btn--edit');
  var languageRadioOption = doc.querySelector('.ibexa-content-menu-wrapper .ibexa-extra-actions--edit.ibexa-extra-actions--prevent-show .ibexa-input--radio');

  if (!languageRadioOption) {
    return;
  }

  editButton.addEventListener('click', function () {
    languageRadioOption.checked = true;
    languageRadioOption.dispatchEvent(new CustomEvent('change'));
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.hide.js":
/*!**************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.hide.js ***!
  \**************************************************************************************************/
/***/ (() => {

(function (global, doc, bootstrap) {
  var hideButton = doc.querySelector('.ibexa-btn--hide');
  var modal = doc.querySelector('#hide-content-modal');
  var form = doc.querySelector('form[name="content_visibility_update"]');
  var visiblity = doc.querySelector('#content_visibility_update_visible');

  if (!hideButton) {
    return;
  }

  if (modal) {
    modal.querySelector('.ibexa-btn--confirm').addEventListener('click', function () {
      visiblity.value = 0;
      form.submit();
    });
  }

  hideButton.addEventListener('click', function () {
    if (modal) {
      bootstrap.Modal.getOrCreateInstance(modal).show();
    } else {
      visiblity.value = 0;
      form.submit();
    }
  }, false);
})(window, window.document, window.bootstrap);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.reveal.js":
/*!****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.reveal.js ***!
  \****************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var revealButton = doc.querySelector('.ibexa-btn--reveal');
  var form = doc.querySelector('form[name="content_visibility_update"]');
  var visiblity = doc.querySelector('#content_visibility_update_visible');

  if (!revealButton) {
    return;
  }

  revealButton.addEventListener('click', function () {
    visiblity.value = 1;
    form.submit();
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js":
/*!*****************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js ***!
  \*****************************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var createActions = doc.querySelectorAll('.ibexa-extra-actions--create');

  if (!createActions.length) {
    return;
  }

  createActions.forEach(function (container) {
    var radioInputs = container.querySelectorAll('.form-check [type="radio"]');
    var form = container.querySelector('form');
    radioInputs.forEach(function (radioInput) {
      return radioInput.addEventListener('change', function () {
        return form.submit();
      }, false);
    });
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js":
/*!***************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js ***!
  \***************************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc, ibexa, bootstrap, Routing) {
  var editActions = doc.querySelectorAll('.ibexa-extra-actions--edit, .ibexa-extra-actions--edit-user');

  var resetRadioButtons = function resetRadioButtons(btns) {
    return btns.forEach(function (btn) {
      btn.checked = false;
    });
  };

  var addDraft = function addDraft(form) {
    form.submit();
    bootstrap.Modal.getOrCreateInstance(doc.querySelector('#version-draft-conflict-modal')).hide();
  };

  var redirectToUserEdit = function redirectToUserEdit(languageCode, contentId, form) {
    var versionNo = form.querySelector('#user_edit_version_info_version_no').value;
    window.location.href = Routing.generate('ibexa.user.update', {
      contentId: contentId,
      versionNo: versionNo,
      language: languageCode
    });
  };

  var onModalHidden = function onModalHidden(btns) {
    resetRadioButtons(btns);
    var event = new CustomEvent('ibexa-draft-conflict-modal-hidden');
    doc.body.dispatchEvent(event);
  };

  var attachModalListeners = function attachModalListeners(wrapper, form, btns) {
    var addDraftButton = wrapper.querySelector('.ibexa-btn--add-draft');
    var conflictModal = doc.querySelector('#version-draft-conflict-modal');

    if (addDraftButton) {
      addDraftButton.addEventListener('click', addDraft.bind(null, form), false);
    }

    wrapper.querySelectorAll('.ibexa-btn--prevented').forEach(function (btn) {
      return btn.addEventListener('click', function (event) {
        return event.preventDefault();
      }, false);
    });

    if (conflictModal) {
      bootstrap.Modal.getOrCreateInstance(conflictModal).show();
      conflictModal.addEventListener('hidden.bs.modal', onModalHidden.bind(null, btns));
      conflictModal.addEventListener('shown.bs.modal', function () {
        return ibexa.helpers.tooltips.parse();
      });
    }
  };

  var showModal = function showModal(form, btns, modalHtml) {
    var wrapper = doc.querySelector('.ibexa-modal-wrapper');
    wrapper.innerHTML = modalHtml;
    attachModalListeners(wrapper, form, btns);
  };

  var changeHandler = function changeHandler(form, btns, event) {
    var contentIdInput = form.querySelector('.ibexa-extra-actions__form-field--content-info');
    var locationInput = form.querySelector('.ibexa-extra-actions__form-field--location');
    var contentId = contentIdInput.value;
    var locationId = locationInput.value;
    var checkedBtn = event.currentTarget;
    var languageCode = checkedBtn.value;
    var checkVersionDraftLink = Routing.generate('ibexa.version_draft.has_no_conflict', {
      contentId: contentId,
      languageCode: languageCode,
      locationId: locationId
    });
    fetch(checkVersionDraftLink, {
      credentials: 'same-origin'
    }).then(function (response) {
      if (response.status === 409) {
        response.text().then(showModal.bind(null, form, btns));
      } else if (response.status === 200) {
        if (form.querySelector('#user_edit_version_info')) {
          redirectToUserEdit(languageCode, contentId, form);
          return;
        }

        form.submit();
      }
    });
  };

  var attachEventsToEditActionsWidget = function attachEventsToEditActionsWidget(container) {
    var btns = _toConsumableArray(container.querySelectorAll('.form-check [type="radio"]'));

    var form = container.querySelector('form');
    btns.forEach(function (btn) {
      return btn.addEventListener('change', changeHandler.bind(null, form, btns), false);
    });
  };

  _toConsumableArray(editActions).forEach(attachEventsToEditActionsWidget);
})(window, window.document, window.ibexa, window.bootstrap, window.Routing);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js ***!
  \***********************************************************************************************/
/***/ (() => {

(function (global, doc) {
  var editButton = doc.querySelector('.ibexa-btn--edit-user');
  var languageRadioOption = doc.querySelector('.ibexa-extra-actions--edit-user.ibexa-extra-actions--prevent-show .ibexa-input--radio');
  var editActions = doc.querySelector('.ibexa-extra-actions--edit-user');

  if (!editActions || !languageRadioOption) {
    return;
  }

  editButton.addEventListener('click', function () {
    languageRadioOption.checked = true;
    languageRadioOption.dispatchEvent(new CustomEvent('change'));
  }, false);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js ***!
  \***********************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var CLASS_HIDDEN = 'ibexa-extra-actions--hidden';
  var CLASS_EXPANDED = 'ibexa-context-menu--expanded';
  var CLASS_PREVENT_SHOW = 'ibexa-extra-actions--prevent-show';

  var btns = _toConsumableArray(doc.querySelectorAll('.ibexa-btn--extra-actions'));

  var menu = doc.querySelector('.ibexa-context-menu');

  var haveHiddenPart = function haveHiddenPart(element) {
    return element.classList.contains(CLASS_HIDDEN) && !element.classList.contains(CLASS_PREVENT_SHOW);
  };

  var removeBackdrop = function removeBackdrop() {
    var backdrop = doc.querySelector('.ibexa-backdrop');

    if (backdrop) {
      backdrop.remove();
      doc.body.classList.remove('ibexa-scroll-disabled');
    }
  };

  var closeExtraActions = function closeExtraActions(actions) {
    actions.classList.add(CLASS_HIDDEN);

    if (menu) {
      menu.classList.remove(CLASS_EXPANDED);
    }

    doc.body.dispatchEvent(new CustomEvent('ibexa-extra-actions:after-close'));
    removeBackdrop();
  };

  var toggleExtraActionsWidget = function toggleExtraActionsWidget(widgetData) {
    var actions = doc.querySelector(".ibexa-extra-actions[data-actions=\"".concat(widgetData.actions, "\"]"));

    if (widgetData.validate && !parseInt(widgetData.isFormValid, 10)) {
      return;
    }

    var isHidden = haveHiddenPart(actions);
    var focusElement = actions.querySelector(widgetData.focusElement);

    var detectClickOutside = function detectClickOutside(event) {
      if (event.target.classList.contains('ibexa-backdrop')) {
        closeExtraActions(actions);
        doc.body.removeEventListener('click', detectClickOutside, false);
      }
    };

    actions.classList.toggle(CLASS_HIDDEN, !isHidden);

    if (menu) {
      menu.classList.toggle(CLASS_EXPANDED, isHidden);
    }

    if (!actions.classList.contains(CLASS_HIDDEN)) {
      var backdrop = doc.createElement('div');
      backdrop.classList.add('ibexa-backdrop');
      doc.body.addEventListener('click', detectClickOutside, false);
      doc.body.appendChild(backdrop);
      doc.body.classList.add('ibexa-scroll-disabled');
    } else {
      doc.body.removeEventListener('click', detectClickOutside);
      removeBackdrop();
    }

    if (focusElement) {
      focusElement.focus();
    }
  };

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggleExtraActionsWidget(btn.dataset);
    }, false);
  });
  doc.body.addEventListener('ibexa-extra-actions:toggle-widget', function (event) {
    return toggleExtraActionsWidget(event.detail);
  }, false);
  doc.querySelectorAll('.ibexa-extra-actions .ibexa-btn--close').forEach(function (closeBtn) {
    return closeBtn.addEventListener('click', function (event) {
      closeExtraActions(event.currentTarget.closest('.ibexa-extra-actions'));
    }, false);
  });
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js":
/*!************************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js ***!
  \************************************************************************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function (global, doc) {
  var filterTimeout;
  var SELECTOR_ITEM = '.ibexa-instant-filter__group-item';
  var timeout = 200;
  var filters = doc.querySelectorAll('.ibexa-instant-filter');

  var toggleGroupDisplay = function toggleGroupDisplay(group) {
    var areChildrenHidden = _toConsumableArray(group.querySelectorAll(SELECTOR_ITEM)).every(function (item) {
      return item.hasAttribute('hidden');
    });

    group.toggleAttribute('hidden', areChildrenHidden);
  };

  var filterItems = function filterItems(itemsMap, groups, event) {
    window.clearTimeout(filterTimeout);
    filterTimeout = window.setTimeout(function () {
      var query = event.target.value.toLowerCase();
      var results = itemsMap.filter(function (item) {
        return item.label.includes(query);
      });
      itemsMap.forEach(function (item) {
        return item.element.setAttribute('hidden', true);
      });
      results.forEach(function (item) {
        return item.element.removeAttribute('hidden');
      });
      groups.forEach(toggleGroupDisplay);
    }, timeout);
  };

  var initFilter = function initFilter(filter) {
    var filterInput = filter.querySelector('.ibexa-instant-filter__input');

    var groups = _toConsumableArray(filter.querySelectorAll('.ibexa-instant-filter__group'));

    var items = _toConsumableArray(filter.querySelectorAll(SELECTOR_ITEM));

    var itemsMap = items.reduce(function (total, item) {
      return [].concat(_toConsumableArray(total), [{
        label: item.textContent.toLowerCase(),
        element: item
      }]);
    }, []);
    filterInput.addEventListener('change', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('blur', filterItems.bind(filter, itemsMap, groups), false);
    filterInput.addEventListener('keyup', filterItems.bind(filter, itemsMap, groups), false);
  };

  filters.forEach(initFilter);
})(window, window.document);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy.js ***!
  \**********************************************************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-copy');
  var form = doc.querySelector('form[name="location_copy"]');
  var input = form.querySelector('#location_copy_new_parent_location');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;

  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };

  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    form.submit();
  };

  var onCancel = function onCancel() {
    return closeUDW();
  };

  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(
    /*@Desc("Select Location")*/
    'copy.title', {}, 'universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false,
      containersOnly: true
    }, config)));
  };

  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy_subtree.js":
/*!******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy_subtree.js ***!
  \******************************************************************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-copy-subtree');
  var form = doc.querySelector('form[name="location_copy_subtree"]');
  var input = form.querySelector('#location_copy_subtree_new_parent_location');
  var udwContainer = doc.querySelector('#react-udw');
  var udwRoot = null;

  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };

  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    form.submit();
  };

  var onCancel = function onCancel() {
    return closeUDW();
  };

  var openUDW = function openUDW(event) {
    event.preventDefault();
    var title = Translator.trans(
    /*@Desc("Select Location")*/
    'subtree.title', {}, 'universal_discovery_widget');
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false,
      containersOnly: true
    }, config)));
  };

  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/locations.tab.js":
/*!*******************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/locations.tab.js ***!
  \*******************************************************************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-add');
  var submitButton = doc.querySelector('#content_location_add_add');
  var form = doc.querySelector('form[name="content_location_add"]');

  if (!form) {
    return;
  }

  var input = form.querySelector('#content_location_add_new_locations');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;

  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };

  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    submitButton.click();
  };

  var onCancel = function onCancel() {
    return closeUDW();
  };

  var openUDW = function openUDW(event) {
    event.preventDefault();
    event.stopPropagation();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(
    /*@Desc("Select Location")*/
    'add_location.title', {}, 'universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      containersOnly: true,
      title: title,
      multiple: false
    }, config)));
  };

  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/move.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/move.js ***!
  \**********************************************************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-move');
  var form = doc.querySelector('form[name="location_move"]');

  if (!form) {
    return;
  }

  var input = form.querySelector('#location_move_new_parent_location');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;

  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };

  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    form.submit();
  };

  var onCancel = function onCancel() {
    return closeUDW();
  };

  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(
    /*@Desc("Select destination")*/
    'move.title', {}, 'universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false,
      containersOnly: true
    }, config)));
  };

  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/swap.js":
/*!**********************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/swap.js ***!
  \**********************************************************************************/
/***/ (() => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function (global, doc, ibexa, React, ReactDOM, Translator) {
  var btns = doc.querySelectorAll('.ibexa-btn--udw-swap');
  var form = doc.querySelector('form[name="location_swap"]');

  if (!form) {
    return;
  }

  var input = form.querySelector('#location_swap_new_location');
  var udwContainer = doc.getElementById('react-udw');
  var udwRoot = null;

  var closeUDW = function closeUDW() {
    return udwRoot.unmount();
  };

  var onConfirm = function onConfirm(items) {
    closeUDW();
    input.value = items[0].id;
    form.submit();
  };

  var onCancel = function onCancel() {
    return closeUDW();
  };

  var openUDW = function openUDW(event) {
    event.preventDefault();
    var config = JSON.parse(event.currentTarget.dataset.udwConfig);
    var title = Translator.trans(
    /*@Desc("Select Location to swap with")*/
    'swap.title', {}, 'universal_discovery_widget');
    udwRoot = ReactDOM.createRoot(udwContainer);
    udwRoot.render(React.createElement(ibexa.modules.UniversalDiscovery, _objectSpread({
      onConfirm: onConfirm,
      onCancel: onCancel,
      title: title,
      multiple: false
    }, config)));
  };

  btns.forEach(function (btn) {
    return btn.addEventListener('click', openUDW, false);
  });
})(window, window.document, window.ibexa, window.React, window.ReactDOM, window.Translator);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.group.invitation.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.group.invitation.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_invitation_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.invitation.modal */ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



(function (global, doc) {
  var modal = doc.querySelector('.ibexa-user-group-invitation');

  if (!modal) {
    return;
  }

  var UserGroupInvitationModal = /*#__PURE__*/function (_UserInvitationModal) {
    _inherits(UserGroupInvitationModal, _UserInvitationModal);

    var _super = _createSuper(UserGroupInvitationModal);

    function UserGroupInvitationModal() {
      _classCallCheck(this, UserGroupInvitationModal);

      return _super.apply(this, arguments);
    }

    _createClass(UserGroupInvitationModal, [{
      key: "processCSVInvitationFile",
      value: function processCSVInvitationFile(file) {
        return file.text().then(function (text) {
          var lineRegexp = /^([^;\r\n]+)$/gm;

          var matchedData = _toConsumableArray(text.matchAll(lineRegexp));

          var invitationsData = matchedData.map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
                email = _ref2[0];

            return {
              email: email
            };
          });
          return invitationsData;
        });
      }
    }, {
      key: "resetEntry",
      value: function resetEntry(entry) {
        _get(_getPrototypeOf(UserGroupInvitationModal.prototype), "resetEntry", this).call(this, entry);

        var emailInput = entry.querySelector('.ibexa-user-group-invitation__entry-email');
        emailInput.value = null;
      }
    }, {
      key: "isEntryEmpty",
      value: function isEntryEmpty(entry) {
        var emailInput = entry.querySelector('.ibexa-user-group-invitation__entry-email');
        return !emailInput.value;
      }
    }, {
      key: "addEntry",
      value: function addEntry() {
        var _invitationData$email;

        var isFileRelated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var invitationData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        var addEntryData = _get(_getPrototypeOf(UserGroupInvitationModal.prototype), "addEntry", this).call(this, isFileRelated, invitationData);

        var insertedEntry = addEntryData.insertedEntry;
        var email = (_invitationData$email = invitationData === null || invitationData === void 0 ? void 0 : invitationData.email) !== null && _invitationData$email !== void 0 ? _invitationData$email : null;
        var emailInput = insertedEntry.querySelector('.ibexa-user-group-invitation__entry-email');
        emailInput.value = email;
        return addEntryData;
      }
    }, {
      key: "checkEntryMatchesSearch",
      value: function checkEntryMatchesSearch(entry, searchText) {
        var emailInput = entry.querySelector('.ibexa-user-group-invitation__entry-email');
        var email = emailInput.value;
        return email.includes(searchText);
      }
    }, {
      key: "checkIsEntryDuplicate",
      value: function checkIsEntryDuplicate(invitationData, entryToCompare) {
        var entryToCompareEmailInput = entryToCompare.querySelector('.ibexa-user-group-invitation__entry-email');
        return invitationData.email === entryToCompareEmailInput.value;
      }
    }]);

    return UserGroupInvitationModal;
  }(_user_invitation_modal__WEBPACK_IMPORTED_MODULE_0__.UserInvitationModal);

  var userInvitationModal = new UserGroupInvitationModal({
    modal: modal
  });
  userInvitationModal.init();
})(window, window.document, window.ibexa);

/***/ }),

/***/ "./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js":
/*!***********************************************************************************************!*\
  !*** ./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.invitation.modal.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInvitationModal": () => (/* binding */ UserInvitationModal)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var _window = window,
    ibexa = _window.ibexa,
    Translator = _window.Translator;
var UserInvitationModal = /*#__PURE__*/function () {
  function UserInvitationModal() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, UserInvitationModal);

    if (!options.modal) {
      throw new Error('No valid modal option provided');
    }

    this.modal = options.modal;
    this.stickyTopContainer = this.modal.querySelector('.ibexa-user-invitation-modal__sticky-top');
    this.searchInput = this.modal.querySelector('.ibexa-user-invitation-modal__search-input');
    this.searchBtn = this.modal.querySelector('.ibexa-input-text-wrapper__action-btn--search');
    this.searchNoEntries = this.modal.querySelector('.ibexa-user-invitation-modal__search-no-entries');
    this.badFileAlert = this.modal.querySelector('.ibexa-user-invitation-modal__bad-file-alert');
    this.badFileAlertCloseBtn = this.badFileAlert.querySelector('.ibexa-alert__close-btn');
    this.issuesAlert = this.modal.querySelector('.ibexa-user-invitation-modal__issues-alert');
    this.issuesAlertIssuesContainer = this.modal.querySelector('.ibexa-user-invitation-modal__issues-alert-issues');
    this.issuesAlertCloseBtn = this.issuesAlert.querySelector('.ibexa-alert__close-btn');
    this.goToNextIssueBtn = this.issuesAlert.querySelector('.ibexa-user-invitation-modal__next-issue-btn');
    this.addNextBtn = this.modal.querySelector('.ibexa-user-invitation-modal__add-next-btn');
    this.entriesContainer = this.modal.querySelector('.ibexa-user-invitation-modal__entries');
    this.entryPrototype = this.entriesContainer.dataset.prototype;
    this.fileUploadMessage = this.modal.querySelector('.ibexa-user-invitation-modal__upload-file-message');
    this.dropZone = this.modal.querySelector('.ibexa-user-invitation-modal__drop');
    this.uploadLocalFileBtn = this.modal.querySelector('.ibexa-user-invitation-modal__file-select');
    this.fileInput = this.modal.querySelector('.ibexa-user-invitation-modal__file-input');
    this.fakeSubmitBtn = this.modal.querySelector('.ibexa-user-invitation-modal__fake-submit-btn');
    this.realSubmitBtn = this.modal.querySelector('.ibexa-user-invitation-modal__real-submit-btn');
    this.lastScrolledToEntryWithIssue = null;
    this.attachEntryListeners = this.attachEntryListeners.bind(this);
    this.preventDefaultAction = this.preventDefaultAction.bind(this);
    this.handleEntryAdd = this.handleEntryAdd.bind(this);
    this.handleEntryDelete = this.handleEntryDelete.bind(this);
    this.handleDropUpload = this.handleDropUpload.bind(this);
    this.handleInputUpload = this.handleInputUpload.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEmailValidation = this.handleEmailValidation.bind(this);
    this.scrollToNextIssue = this.scrollToNextIssue.bind(this);
  } // eslint-disable-next-line no-unused-vars


  _createClass(UserInvitationModal, [{
    key: "processCSVInvitationFile",
    value: function processCSVInvitationFile(file) {
      throw new Error('processCSVInvitationFile should be overridden in subclass.');
    }
  }, {
    key: "countFilledLinesInFile",
    value: function countFilledLinesInFile(file) {
      return file.text().then(function (text) {
        var nonEmptyLineRegexp = /^([^\r\n]+)$/gm;

        var matchedData = _toConsumableArray(text.matchAll(nonEmptyLineRegexp));

        return matchedData.length;
      });
    }
  }, {
    key: "resetEntry",
    value: function resetEntry(entry) {
      this.toggleInvalidEmailState(entry, {
        isEmptyError: false,
        isInvalidFormatError: false
      });
      this.toggleDuplicateEntryState(entry, false);
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "isEntryEmpty",
    value: function isEntryEmpty(entry) {
      throw new Error('isEntryEmpty should be overridden in subclass.');
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "checkEntryMatchesSearch",
    value: function checkEntryMatchesSearch(entry, searchText) {
      throw new Error('checkEntryMatchesSearch should be overridden in subclass.');
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "checkIsEntryDuplicate",
    value: function checkIsEntryDuplicate(invitationData, entryToCompare) {
      throw new Error('checkIsEntryDuplicate should be overridden in subclass.');
    }
  }, {
    key: "checkHasEntryIssue",
    value: function checkHasEntryIssue(entry) {
      var hasEmptyEmailIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-email-empty');
      var hasInvalidEmailIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-email-invalid-format');
      var hasDuplicateIssue = !!entry.querySelector('.ibexa-user-invitation-modal__issue-duplicate');
      return hasEmptyEmailIssue || hasInvalidEmailIssue || hasDuplicateIssue;
    }
  }, {
    key: "findDuplicateEntry",
    value: function findDuplicateEntry(invitationData, entriesToCompare) {
      var _iterator = _createForOfIteratorHelper(entriesToCompare),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entryToCompare = _step.value;

          if (this.checkIsEntryDuplicate(invitationData, entryToCompare)) {
            return entryToCompare;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    }
  }, {
    key: "toggleIssueNode",
    value: function toggleIssueNode(entry, issueNode, show, position, template) {
      var entryIssuesContainer = entry.querySelector('.ibexa-user-invitation-modal__entry-issues');

      if (show) {
        if (!issueNode) {
          entryIssuesContainer.insertAdjacentHTML(position, template);
        }
      } else {
        if (issueNode) {
          issueNode.remove();
        }
      }
    }
  }, {
    key: "toggleDuplicateEntryState",
    value: function toggleDuplicateEntryState(entry, isDuplicate) {
      var duplicateEntryIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-duplicate');
      var issueDuplicateInfoTemplate = this.entriesContainer.dataset.issueDuplicateInfoTemplate;
      this.toggleIssueNode(entry, duplicateEntryIssueNode, isDuplicate, 'beforeend', issueDuplicateInfoTemplate);
    }
  }, {
    key: "toggleInvalidEmailState",
    value: function toggleInvalidEmailState(entry, _ref) {
      var isEmptyError = _ref.isEmptyError,
          isInvalidFormatError = _ref.isInvalidFormatError;
      var emptyEmailIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-email-empty');
      var invalidEmailIssueNode = entry.querySelector('.ibexa-user-invitation-modal__issue-email-invalid-format');
      var _this$entriesContaine = this.entriesContainer.dataset,
          issueInvalidEmailTemplate = _this$entriesContaine.issueInvalidEmailTemplate,
          issueEmptyEmailTemplate = _this$entriesContaine.issueEmptyEmailTemplate;
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      emailInput.classList.toggle('is-invalid', isEmptyError || isInvalidFormatError);
      this.toggleIssueNode(entry, emptyEmailIssueNode, isEmptyError, 'afterbegin', issueEmptyEmailTemplate);
      this.toggleIssueNode(entry, invalidEmailIssueNode, isInvalidFormatError, 'afterbegin', issueInvalidEmailTemplate);
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(emailInput) {
      var isEmpty = !emailInput.value.trim();

      if (isEmpty) {
        return {
          isEmptyError: isEmpty,
          isInvalidFormatError: false
        };
      }

      var isValid = ibexa.errors.emailRegexp.test(emailInput.value);
      return {
        isEmptyError: false,
        isInvalidFormatError: !isValid
      };
    }
  }, {
    key: "validateEntryEmail",
    value: function validateEntryEmail(entry) {
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      var errors = this.validateEmail(emailInput);
      this.toggleInvalidEmailState(entry, errors);
      this.manageIssuesAlert();
      return errors.isEmptyError || errors.isInvalidFormatError;
    }
  }, {
    key: "handleEmailValidation",
    value: function handleEmailValidation(event) {
      var emailInput = event.currentTarget;
      var entry = emailInput.closest('.ibexa-user-invitation-modal__entry');
      this.validateEntryEmail(entry);
    }
  }, {
    key: "prepareIssuesAlert",
    value: function prepareIssuesAlert(emptyEmailsCount, invalidEmailsCount, duplicateEntryCount) {
      var messages = [];

      if (emptyEmailsCount) {
        var emptyEmailsMessage = Translator.trans(
        /*@Desc("Empty emails (%count%)")*/
        'modal.entry_issues.alert.empty_emails', {
          count: emptyEmailsCount
        }, 'user_invitation');
        messages.push(emptyEmailsMessage);
      }

      if (invalidEmailsCount) {
        var invalidEmailsMessage = Translator.trans(
        /*@Desc("Invalid emails (%count%)")*/
        'modal.entry_issues.alert.invalid_emails', {
          count: invalidEmailsCount
        }, 'user_invitation');
        messages.push(invalidEmailsMessage);
      }

      if (duplicateEntryCount) {
        var duplicatedEmailsMessage = Translator.trans(
        /*@Desc("Duplicated emails (%count%)")*/
        'modal.entry_issues.alert.duplicate_emails', {
          count: duplicateEntryCount
        }, 'user_invitation');
        messages.push(duplicatedEmailsMessage);
      }

      this.issuesAlertIssuesContainer.innerText = messages.join(' | ');
    }
  }, {
    key: "manageIssuesAlert",
    value: function manageIssuesAlert() {
      var emptyEmailsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-email-empty').length;
      var invalidEmailsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-email-invalid-format').length;
      var duplicateEntryCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__issue-duplicate').length;
      var isAnyIssue = emptyEmailsCount || invalidEmailsCount || duplicateEntryCount;

      if (isAnyIssue) {
        this.prepareIssuesAlert(emptyEmailsCount, invalidEmailsCount, duplicateEntryCount);
      }

      this.toggleIssuesAlert(isAnyIssue);
    }
  }, {
    key: "toggleIssuesAlert",
    value: function toggleIssuesAlert(show) {
      this.issuesAlert.classList.toggle('ibexa-user-invitation-modal__issues-alert--hidden', !show);
    }
  }, {
    key: "toggleBadFileAlert",
    value: function toggleBadFileAlert(show) {
      this.badFileAlert.classList.toggle('ibexa-user-invitation-modal__bad-file-alert--hidden', !show);
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "addEntry",
    value: function addEntry() {
      var isFileRelated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var invitationData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var entryPrototypeRendered = this.entryPrototype.replaceAll('__name__', this.entryCounter);
      this.entryCounter = this.entryCounter + 1;
      this.entriesContainer.insertAdjacentHTML('beforeend', entryPrototypeRendered);
      var insertedEntry = this.entriesContainer.querySelector(':scope > :last-child');

      if (isFileRelated) {
        insertedEntry.classList.add('ibexa-user-invitation-modal__entry--file-related');
      }

      this.attachEntryListeners(insertedEntry);
      document.body.dispatchEvent(new CustomEvent('ibexa-inputs:added'));
      return {
        insertedEntry: insertedEntry
      };
    }
  }, {
    key: "deleteEntry",
    value: function deleteEntry(entry) {
      var isForceRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var entryNodes = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      var isLastEntry = entryNodes.length === 1;

      if (isLastEntry && !isForceRemove) {
        this.resetEntry(entry);
      } else {
        if (entry === this.lastScrolledToEntryWithIssue) {
          this.lastScrolledToEntryWithIssue = this.lastScrolledToEntryWithIssue.previousElementSibling;
        }

        entry.remove();
      }
    }
  }, {
    key: "deleteTrailingEntriesIfEmpty",
    value: function deleteTrailingEntriesIfEmpty() {
      var lastEntry = this.entriesContainer.querySelector(':scope > :last-child');

      if (!lastEntry) {
        return;
      }

      if (this.isEntryEmpty(lastEntry)) {
        this.deleteEntry(lastEntry, true);
        this.deleteTrailingEntriesIfEmpty();
        this.manageIssuesAlert();
        this.updateModalTitle();
      }
    }
  }, {
    key: "handleEntryAdd",
    value: function handleEntryAdd() {
      this.addEntry();
      this.manageIssuesAlert();
      this.updateModalTitle();
    }
  }, {
    key: "handleEntryDelete",
    value: function handleEntryDelete(event) {
      var deleteBtn = event.currentTarget;
      var entry = deleteBtn.closest('.ibexa-user-invitation-modal__entry');
      this.deleteEntry(entry);
      this.manageIssuesAlert();
      this.updateModalTitle();
    }
  }, {
    key: "attachEntryListeners",
    value: function attachEntryListeners(entry) {
      var deleteEntryBtn = entry.querySelector('.ibexa-user-invitation-modal__entry-delete-btn');
      var emailInput = entry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
      deleteEntryBtn.addEventListener('click', this.handleEntryDelete, false);
      emailInput.addEventListener('blur', this.handleEmailValidation, false);
    }
  }, {
    key: "getNextEntryWithIssue",
    value: function getNextEntryWithIssue() {
      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');

      var firstEntryWithIssue = _toConsumableArray(entries).find(this.checkHasEntryIssue);

      if (!firstEntryWithIssue) {
        return;
      }

      var nextEntryWithIssue = null;

      if (!this.lastScrolledToEntryWithIssue) {
        nextEntryWithIssue = firstEntryWithIssue;
      } else {
        var currentlyCheckedEntry = this.lastScrolledToEntryWithIssue;

        while (currentlyCheckedEntry.nextElementSibling) {
          currentlyCheckedEntry = currentlyCheckedEntry.nextElementSibling;

          if (this.checkHasEntryIssue(currentlyCheckedEntry)) {
            nextEntryWithIssue = currentlyCheckedEntry;
            break;
          }
        }

        if (!nextEntryWithIssue) {
          nextEntryWithIssue = firstEntryWithIssue;
        }
      }

      return nextEntryWithIssue;
    }
  }, {
    key: "scrollToNextIssue",
    value: function scrollToNextIssue() {
      var nextEntryWithIssue = this.getNextEntryWithIssue();
      var scrollTopOffset = this.stickyTopContainer.offsetHeight;
      var entryScrollPosition = nextEntryWithIssue.getBoundingClientRect().top + window.pageYOffset - scrollTopOffset;
      this.modal.scrollTo({
        top: entryScrollPosition,
        behavior: 'smooth'
      });
      this.lastScrolledToEntryWithIssue = nextEntryWithIssue;
    }
  }, {
    key: "searchEntries",
    value: function searchEntries(searchText) {
      var _this = this;

      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      entries.forEach(function (entry) {
        var doesEntryMatchSearch = _this.checkEntryMatchesSearch(entry, searchText);

        entry.classList.toggle('ibexa-user-invitation-modal__entry--not-matching-search', !doesEntryMatchSearch);
      });
    }
  }, {
    key: "toggleSearchNoEntriesBasedOnSearch",
    value: function toggleSearchNoEntriesBasedOnSearch() {
      var isAnyEntryShowed = !!this.modal.querySelectorAll('.ibexa-user-invitation-modal__entry:not(.ibexa-user-invitation-modal__entry--not-matching-search)').length;
      this.searchNoEntries.classList.toggle('ibexa-user-invitation-modal__search-no-entries--hidden', isAnyEntryShowed);
    }
  }, {
    key: "toggleUpload",
    value: function toggleUpload(isForceHide) {
      this.fileUploadMessage.classList.toggle('ibexa-user-invitation-modal__upload-file-message--hidden', isForceHide);
      this.dropZone.classList.toggle('ibexa-user-invitation-modal__drop--hidden', isForceHide);
    }
  }, {
    key: "showUploadedFileNotification",
    value: function showUploadedFileNotification(fileName) {
      var message = Translator.trans(
      /*@Desc("File %fileName% was uploaded")*/
      'modal.file_uploaded.message', {
        fileName: fileName
      }, 'user_invitation');
      ibexa.helpers.notification.showInfoNotification(message);
    }
  }, {
    key: "clearForm",
    value: function clearForm() {
      var _this2 = this;

      var entries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      entries.forEach(function (entry) {
        return _this2.deleteEntry(entry);
      });
      this.manageIssuesAlert();
      this.updateModalTitle();
      this.toggleUpload(false);
    }
  }, {
    key: "preventDefaultAction",
    value: function preventDefaultAction(event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, {
    key: "handleInvitationFile",
    value: function () {
      var _handleInvitationFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
        var _this3 = this;

        var numberOfNonEmptyLines, invitationsData, entriesBeforeFileAdded;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.toggleUpload(true);
                this.showUploadedFileNotification(file.name);
                _context.next = 4;
                return this.countFilledLinesInFile(file);

              case 4:
                numberOfNonEmptyLines = _context.sent;
                _context.next = 7;
                return this.processCSVInvitationFile(file);

              case 7:
                invitationsData = _context.sent;

                if (!(numberOfNonEmptyLines === 0 || numberOfNonEmptyLines !== invitationsData.length)) {
                  _context.next = 12;
                  break;
                }

                this.toggleBadFileAlert(true);
                this.toggleUpload(false);
                return _context.abrupt("return");

              case 12:
                this.toggleBadFileAlert(false);
                this.deleteTrailingEntriesIfEmpty();
                entriesBeforeFileAdded = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
                invitationsData.forEach(function (invitationData) {
                  var duplicateEntry = _this3.findDuplicateEntry(invitationData, entriesBeforeFileAdded);

                  if (duplicateEntry) {
                    _this3.toggleDuplicateEntryState(duplicateEntry, true);

                    _this3.manageIssuesAlert();
                  } else {
                    var _this3$addEntry = _this3.addEntry(true, invitationData),
                        insertedEntry = _this3$addEntry.insertedEntry;

                    _this3.validateEntryEmail(insertedEntry);
                  }
                });
                this.updateModalTitle();

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleInvitationFile(_x) {
        return _handleInvitationFile.apply(this, arguments);
      }

      return handleInvitationFile;
    }()
  }, {
    key: "handleInputUpload",
    value: function handleInputUpload(event) {
      this.preventDefaultAction(event);
      var file = this.fileInput.files[0];

      if (file) {
        this.handleInvitationFile(file);
      }
    }
  }, {
    key: "handleDropUpload",
    value: function handleDropUpload(event) {
      this.preventDefaultAction(event);
      var file = event.dataTransfer.files[0];

      if (file) {
        this.handleInvitationFile(file);
      }
    }
  }, {
    key: "handleSearch",
    value: function handleSearch() {
      this.searchEntries(this.searchInput.value);
      this.toggleSearchNoEntriesBasedOnSearch();
    }
  }, {
    key: "updateModalTitle",
    value: function updateModalTitle() {
      var titleNode = this.modal.querySelector('.modal-title');
      var invitationsCount = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry').length;
      titleNode.innerText = Translator.trans(
      /*@Desc("Invite members (%invitations_count%)")*/
      'modal.title', {
        invitations_count: invitationsCount
      }, 'user_invitation');
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;

      this.initialEntries = this.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry');
      this.entryCounter = this.initialEntries.length;
      this.initialEntries.forEach(function (initialEntry) {
        _this4.attachEntryListeners(initialEntry);

        var emailInput = initialEntry.querySelector('.ibexa-user-invitation-modal__email-wrapper .ibexa-input--text');
        var isEmailEmpty = !emailInput.value;

        if (!isEmailEmpty) {
          _this4.validateEntryEmail(initialEntry);
        }
      });
      this.modal.addEventListener('shown.bs.modal', function () {
        window.addEventListener('drop', _this4.preventDefaultAction, false);
        window.addEventListener('dragover', _this4.preventDefaultAction, false);
      });
      this.modal.addEventListener('hidden.bs.modal', function () {
        window.removeEventListener('drop', _this4.preventDefaultAction, false);
        window.removeEventListener('dragover', _this4.preventDefaultAction, false);

        _this4.clearForm();
      });
      this.addNextBtn.addEventListener('click', this.handleEntryAdd, false);
      this.dropZone.addEventListener('drop', this.handleDropUpload, false);
      this.uploadLocalFileBtn.addEventListener('click', function (event) {
        event.preventDefault();
        _this4.fileInput.value = '';

        _this4.fileInput.click();
      }, false);
      this.fileInput.addEventListener('change', this.handleInputUpload, false);
      this.badFileAlertCloseBtn.addEventListener('click', function () {
        return _this4.toggleBadFileAlert(false);
      }, false);
      this.issuesAlertCloseBtn.addEventListener('click', function () {
        return _this4.toggleIssuesAlert(false);
      }, false);
      this.goToNextIssueBtn.addEventListener('click', this.scrollToNextIssue, false);
      this.searchInput.addEventListener('keyup', this.handleSearch, false);
      this.searchBtn.addEventListener('keyup', this.handleSearch, false);
      this.fakeSubmitBtn.addEventListener('click', function () {
        var allEntries = _toConsumableArray(_this4.entriesContainer.querySelectorAll('.ibexa-user-invitation-modal__entry'));

        var isFormValid = allEntries.map(function (entry) {
          return _this4.validateEntryEmail(entry);
        }).every(function (isError) {
          return !isError;
        });

        if (isFormValid) {
          _this4.realSubmitBtn.click();
        }
      }, false);
      this.updateModalTitle();
    }
  }]);

  return UserInvitationModal;
}();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.change.language.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.content.tree.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.view.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.visibility.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.update.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.tooglecontentpreview.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.content.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/move.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/swap.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/copy_subtree.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/udw/locations.tab.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/extra.actions.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/user.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/location.create.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/instant.filter.js"), __webpack_exec__("./vendor/ibexa/admin-ui-assets/src/bundle/Resources/public/vendors/leaflet/dist/leaflet.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.load.map.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.edit.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.hide.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/sidebar/btn/content.reveal.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.add.custom_url.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/button.state.toggle.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.version.edit.conflict.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.location.bookmark.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/admin.main.translation.update.js"), __webpack_exec__("./vendor/ibexa/admin-ui/src/bundle/Resources/public/js/scripts/user.group.invitation.js"));
/******/ }
]);