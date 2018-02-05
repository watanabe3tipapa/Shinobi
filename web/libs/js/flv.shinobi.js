! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.flvjs = e()
    }
}(function() {
    var e;
    return function e(t, n, i) {
        function r(a, o) {
            if (!n[a]) {
                if (!t[a]) {
                    var u = "function" == typeof require && require;
                    if (!o && u) return u(a, !0);
                    if (s) return s(a, !0);
                    var l = new Error("Cannot find module '" + a + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var d = n[a] = {
                    exports: {}
                };
                t[a][0].call(d.exports, function(e) {
                    var n = t[a][1][e];
                    return r(n || e)
                }, d, d.exports, e, t, n, i)
            }
            return n[a].exports
        }
        for (var s = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
        return r
    }({
        1: [function(t, n, i) {
            (function(r, s) {
                ! function(t, r) {
                    "object" == typeof i && void 0 !== n ? n.exports = r() : "function" == typeof e && e.amd ? e(r) : t.ES6Promise = r()
                }(this, function() {
                    "use strict";

                    function e(e) {
                        return "function" == typeof e || "object" == typeof e && null !== e
                    }

                    function n(e) {
                        return "function" == typeof e
                    }

                    function i(e) {
                        K = e
                    }

                    function a(e) {
                        q = e
                    }

                    function o() {
                        return void 0 !== H ? function() {
                            H(l)
                        } : u()
                    }

                    function u() {
                        var e = setTimeout;
                        return function() {
                            return e(l, 1)
                        }
                    }

                    function l() {
                        for (var e = 0; e < z; e += 2) {
                            (0, J[e])(J[e + 1]), J[e] = void 0, J[e + 1] = void 0
                        }
                        z = 0
                    }

                    function d(e, t) {
                        var n = arguments,
                            i = this,
                            r = new this.constructor(f);
                        void 0 === r[ee] && I(r);
                        var s = i._state;
                        return s ? function() {
                            var e = n[s - 1];
                            q(function() {
                                return O(s, r, e, i._result)
                            })
                        }() : L(i, r, e, t), r
                    }

                    function h(e) {
                        var t = this;
                        if (e && "object" == typeof e && e.constructor === t) return e;
                        var n = new t(f);
                        return E(n, e), n
                    }

                    function f() {}

                    function c() {
                        return new TypeError("You cannot resolve a promise with itself")
                    }

                    function _() {
                        return new TypeError("A promises callback cannot return that same promise.")
                    }

                    function m(e) {
                        try {
                            return e.then
                        } catch (e) {
                            return re.error = e, re
                        }
                    }

                    function p(e, t, n, i) {
                        try {
                            e.call(t, n, i)
                        } catch (e) {
                            return e
                        }
                    }

                    function v(e, t, n) {
                        q(function(e) {
                            var i = !1,
                                r = p(n, t, function(n) {
                                    i || (i = !0, t !== n ? E(e, n) : S(e, n))
                                }, function(t) {
                                    i || (i = !0, k(e, t))
                                }, "Settle: " + (e._label || " unknown promise"));
                            !i && r && (i = !0, k(e, r))
                        }, e)
                    }

                    function g(e, t) {
                        t._state === ne ? S(e, t._result) : t._state === ie ? k(e, t._result) : L(t, void 0, function(t) {
                            return E(e, t)
                        }, function(t) {
                            return k(e, t)
                        })
                    }

                    function y(e, t, i) {
                        t.constructor === e.constructor && i === d && t.constructor.resolve === h ? g(e, t) : i === re ? (k(e, re.error), re.error = null) : void 0 === i ? S(e, t) : n(i) ? v(e, t, i) : S(e, t)
                    }

                    function E(t, n) {
                        t === n ? k(t, c()) : e(n) ? y(t, n, m(n)) : S(t, n)
                    }

                    function b(e) {
                        e._onerror && e._onerror(e._result), w(e)
                    }

                    function S(e, t) {
                        e._state === te && (e._result = t, e._state = ne, 0 !== e._subscribers.length && q(w, e))
                    }

                    function k(e, t) {
                        e._state === te && (e._state = ie, e._result = t, q(b, e))
                    }

                    function L(e, t, n, i) {
                        var r = e._subscribers,
                            s = r.length;
                        e._onerror = null, r[s] = t, r[s + ne] = n, r[s + ie] = i, 0 === s && e._state && q(w, e)
                    }

                    function w(e) {
                        var t = e._subscribers,
                            n = e._state;
                        if (0 !== t.length) {
                            for (var i = void 0, r = void 0, s = e._result, a = 0; a < t.length; a += 3) i = t[a], r = t[a + n], i ? O(n, i, r, s) : r(s);
                            e._subscribers.length = 0
                        }
                    }

                    function R() {
                        this.error = null
                    }

                    function A(e, t) {
                        try {
                            return e(t)
                        } catch (e) {
                            return se.error = e, se
                        }
                    }

                    function O(e, t, i, r) {
                        var s = n(i),
                            a = void 0,
                            o = void 0,
                            u = void 0,
                            l = void 0;
                        if (s) {
                            if (a = A(i, r), a === se ? (l = !0, o = a.error, a.error = null) : u = !0, t === a) return void k(t, _())
                        } else a = r, u = !0;
                        t._state !== te || (s && u ? E(t, a) : l ? k(t, o) : e === ne ? S(t, a) : e === ie && k(t, a))
                    }

                    function T(e, t) {
                        try {
                            t(function(t) {
                                E(e, t)
                            }, function(t) {
                                k(e, t)
                            })
                        } catch (t) {
                            k(e, t)
                        }
                    }

                    function C() {
                        return ae++
                    }

                    function I(e) {
                        e[ee] = ae++, e._state = void 0, e._result = void 0, e._subscribers = []
                    }

                    function x(e, t) {
                        this._instanceConstructor = e, this.promise = new e(f), this.promise[ee] || I(this.promise), V(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : k(this.promise, M())
                    }

                    function M() {
                        return new Error("Array Methods must be provided an Array")
                    }

                    function D(e) {
                        return new x(this, e).promise
                    }

                    function B(e) {
                        var t = this;
                        return new t(V(e) ? function(n, i) {
                            for (var r = e.length, s = 0; s < r; s++) t.resolve(e[s]).then(n, i)
                        } : function(e, t) {
                            return t(new TypeError("You must pass an array to race."))
                        })
                    }

                    function j(e) {
                        var t = this,
                            n = new t(f);
                        return k(n, e), n
                    }

                    function P() {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }

                    function U() {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }

                    function N(e) {
                        this[ee] = C(), this._result = this._state = void 0, this._subscribers = [], f !== e && ("function" != typeof e && P(), this instanceof N ? T(this, e) : U())
                    }

                    function F() {
                        var e = void 0;
                        if (void 0 !== s) e = s;
                        else if ("undefined" != typeof self) e = self;
                        else try {
                            e = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var t = e.Promise;
                        if (t) {
                            var n = null;
                            try {
                                n = Object.prototype.toString.call(t.resolve())
                            } catch (e) {}
                            if ("[object Promise]" === n && !t.cast) return
                        }
                        e.Promise = N
                    }
                    var G = void 0;
                    G = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    };
                    var V = G,
                        z = 0,
                        H = void 0,
                        K = void 0,
                        q = function(e, t) {
                            J[z] = e, J[z + 1] = t, 2 === (z += 2) && (K ? K(l) : $())
                        },
                        W = "undefined" != typeof window ? window : void 0,
                        X = W || {},
                        Y = X.MutationObserver || X.WebKitMutationObserver,
                        Z = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r),
                        Q = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                        J = new Array(1e3),
                        $ = void 0;
                    $ = Z ? function() {
                        return function() {
                            return r.nextTick(l)
                        }
                    }() : Y ? function() {
                        var e = 0,
                            t = new Y(l),
                            n = document.createTextNode("");
                        return t.observe(n, {
                                characterData: !0
                            }),
                            function() {
                                n.data = e = ++e % 2
                            }
                    }() : Q ? function() {
                        var e = new MessageChannel;
                        return e.port1.onmessage = l,
                            function() {
                                return e.port2.postMessage(0)
                            }
                    }() : void 0 === W && "function" == typeof t ? function() {
                        try {
                            var e = t,
                                n = e("vertx");
                            return H = n.runOnLoop || n.runOnContext, o()
                        } catch (e) {
                            return u()
                        }
                    }() : u();
                    var ee = Math.random().toString(36).substring(16),
                        te = void 0,
                        ne = 1,
                        ie = 2,
                        re = new R,
                        se = new R,
                        ae = 0;
                    return x.prototype._enumerate = function() {
                        for (var e = this.length, t = this._input, n = 0; this._state === te && n < e; n++) this._eachEntry(t[n], n)
                    }, x.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor,
                            i = n.resolve;
                        if (i === h) {
                            var r = m(e);
                            if (r === d && e._state !== te) this._settledAt(e._state, t, e._result);
                            else if ("function" != typeof r) this._remaining--, this._result[t] = e;
                            else if (n === N) {
                                var s = new n(f);
                                y(s, e, r), this._willSettleAt(s, t)
                            } else this._willSettleAt(new n(function(t) {
                                return t(e)
                            }), t)
                        } else this._willSettleAt(i(e), t)
                    }, x.prototype._settledAt = function(e, t, n) {
                        var i = this.promise;
                        i._state === te && (this._remaining--, e === ie ? k(i, n) : this._result[t] = n), 0 === this._remaining && S(i, this._result)
                    }, x.prototype._willSettleAt = function(e, t) {
                        var n = this;
                        L(e, void 0, function(e) {
                            return n._settledAt(ne, t, e)
                        }, function(e) {
                            return n._settledAt(ie, t, e)
                        })
                    }, N.all = D, N.race = B, N.resolve = h, N.reject = j, N._setScheduler = i, N._setAsap = a, N._asap = q, N.prototype = {
                        constructor: N,
                        then: d,
                        catch: function(e) {
                            return this.then(null, e)
                        }
                    }, N.polyfill = F, N.Promise = N, N
                })
            }).call(this, t("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            _process: 3
        }],
        2: [function(e, t, n) {
            function i() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function r(e) {
                return "function" == typeof e
            }

            function s(e) {
                return "number" == typeof e
            }

            function a(e) {
                return "object" == typeof e && null !== e
            }

            function o(e) {
                return void 0 === e
            }
            t.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(e) {
                if (!s(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, i.prototype.emit = function(e) {
                var t, n, i, s, u, l;
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
                    if ((t = arguments[1]) instanceof Error) throw t;
                    var d = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw d.context = t, d
                }
                if (n = this._events[e], o(n)) return !1;
                if (r(n)) switch (arguments.length) {
                    case 1:
                        n.call(this);
                        break;
                    case 2:
                        n.call(this, arguments[1]);
                        break;
                    case 3:
                        n.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        s = Array.prototype.slice.call(arguments, 1), n.apply(this, s)
                } else if (a(n))
                    for (s = Array.prototype.slice.call(arguments, 1), l = n.slice(), i = l.length, u = 0; u < i; u++) l[u].apply(this, s);
                return !0
            }, i.prototype.addListener = function(e, t) {
                var n;
                if (!r(t)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned && (n = o(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
            }, i.prototype.on = i.prototype.addListener, i.prototype.once = function(e, t) {
                function n() {
                    this.removeListener(e, n), i || (i = !0, t.apply(this, arguments))
                }
                if (!r(t)) throw TypeError("listener must be a function");
                var i = !1;
                return n.listener = t, this.on(e, n), this
            }, i.prototype.removeListener = function(e, t) {
                var n, i, s, o;
                if (!r(t)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[e]) return this;
                if (n = this._events[e], s = n.length, i = -1, n === t || r(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                else if (a(n)) {
                    for (o = s; o-- > 0;)
                        if (n[o] === t || n[o].listener && n[o].listener === t) {
                            i = o;
                            break
                        }
                    if (i < 0) return this;
                    1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }, i.prototype.removeAllListeners = function(e) {
                var t, n;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                if (0 === arguments.length) {
                    for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (n = this._events[e], r(n)) this.removeListener(e, n);
                else if (n)
                    for (; n.length;) this.removeListener(e, n[n.length - 1]);
                return delete this._events[e], this
            }, i.prototype.listeners = function(e) {
                return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, i.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (r(t)) return 1;
                    if (t) return t.length
                }
                return 0
            }, i.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
        }, {}],
        3: [function(e, t, n) {
            function i() {
                throw new Error("setTimeout has not been defined")
            }

            function r() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(e) {
                if (h === setTimeout) return setTimeout(e, 0);
                if ((h === i || !h) && setTimeout) return h = setTimeout, setTimeout(e, 0);
                try {
                    return h(e, 0)
                } catch (t) {
                    try {
                        return h.call(null, e, 0)
                    } catch (t) {
                        return h.call(this, e, 0)
                    }
                }
            }

            function a(e) {
                if (f === clearTimeout) return clearTimeout(e);
                if ((f === r || !f) && clearTimeout) return f = clearTimeout, clearTimeout(e);
                try {
                    return f(e)
                } catch (t) {
                    try {
                        return f.call(null, e)
                    } catch (t) {
                        return f.call(this, e)
                    }
                }
            }

            function o() {
                p && _ && (p = !1, _.length ? m = _.concat(m) : v = -1, m.length && u())
            }

            function u() {
                if (!p) {
                    var e = s(o);
                    p = !0;
                    for (var t = m.length; t;) {
                        for (_ = m, m = []; ++v < t;) _ && _[v].run();
                        v = -1, t = m.length
                    }
                    _ = null, p = !1, a(e)
                }
            }

            function l(e, t) {
                this.fun = e, this.array = t
            }

            function d() {}
            var h, f, c = t.exports = {};
            ! function() {
                try {
                    h = "function" == typeof setTimeout ? setTimeout : i
                } catch (e) {
                    h = i
                }
                try {
                    f = "function" == typeof clearTimeout ? clearTimeout : r
                } catch (e) {
                    f = r
                }
            }();
            var _, m = [],
                p = !1,
                v = -1;
            c.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                m.push(new l(e, t)), 1 !== m.length || p || s(u)
            }, l.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, c.title = "browser", c.browser = !0, c.env = {}, c.argv = [], c.version = "", c.versions = {}, c.on = d, c.addListener = d, c.once = d, c.off = d, c.removeListener = d, c.removeAllListeners = d, c.emit = d, c.prependListener = d, c.prependOnceListener = d, c.listeners = function(e) {
                return []
            }, c.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, c.cwd = function() {
                return "/"
            }, c.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, c.umask = function() {
                return 0
            }
        }, {}],
        4: [function(e, t, n) {
            var i = arguments[3],
                r = arguments[4],
                s = arguments[5],
                a = JSON.stringify;
            t.exports = function(e, t) {
                function n(e) {
                    p[e] = !0;
                    for (var t in r[e][1]) {
                        var i = r[e][1][t];
                        p[i] || n(i)
                    }
                }
                for (var o, u = Object.keys(s), l = 0, d = u.length; l < d; l++) {
                    var h = u[l],
                        f = s[h].exports;
                    if (f === e || f && f.default === e) {
                        o = h;
                        break
                    }
                }
                if (!o) {
                    o = Math.floor(Math.pow(16, 8) * Math.random()).toString(16);
                    for (var c = {}, l = 0, d = u.length; l < d; l++) {
                        var h = u[l];
                        c[h] = h
                    }
                    r[o] = [Function(["require", "module", "exports"], "(" + e + ")(self)"), c]
                }
                var _ = Math.floor(Math.pow(16, 8) * Math.random()).toString(16),
                    m = {};
                m[o] = o, r[_] = [Function(["require"], "var f = require(" + a(o) + ");(f.default ? f.default : f)(self);"), m];
                var p = {};
                n(_);
                var v = "(" + i + ")({" + Object.keys(p).map(function(e) {
                        return a(e) + ":[" + r[e][0] + "," + a(r[e][1]) + "]"
                    }).join(",") + "},{},[" + a(_) + "])",
                    g = window.URL || window.webkitURL || window.mozURL || window.msURL,
                    y = new Blob([v], {
                        type: "text/javascript"
                    });
                if (t && t.bare) return y;
                var E = g.createObjectURL(y),
                    b = new Worker(E);
                return b.objectURL = E, b
            }
        }, {}],
        5: [function(e, t, n) {
            "use strict";

            function i() {
                return Object.assign({}, r)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.createDefaultConfig = i;
            var r = n.defaultConfig = {
                enableWorker: !1,
                enableStashBuffer: !0,
                stashInitialSize: void 0,
                isLive: !1,
                lazyLoad: !0,
                lazyLoadMaxDuration: 180,
                lazyLoadRecoverDuration: 30,
                deferLoadAfterSourceOpen: !0,
                autoCleanupMaxBackwardDuration: 180,
                autoCleanupMinBackwardDuration: 120,
                statisticsInfoReportInterval: 600,
                fixAudioTimestampGap: !0,
                accurateSeek: !1,
                seekType: "range",
                seekParamStart: "bstart",
                seekParamEnd: "bend",
                rangeLoadZeroStart: !1,
                customSeekHandler: void 0,
                reuseRedirectedURL: !1
            }
        }, {}],
        6: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = e("../io/io-controller.js"),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(s),
                o = e("../config.js"),
                u = function() {
                    function e() {
                        i(this, e)
                    }
                    return r(e, null, [{
                        key: "supportMSEH264Playback",
                        value: function() {
                            return window.MediaSource && window.MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
                        }
                    }, {
                        key: "supportNetworkStreamIO",
                        value: function() {
                            var e = new a.default({}, (0, o.createDefaultConfig)()),
                                t = e.loaderType;
                            return e.destroy(), "fetch-stream-loader" == t || "xhr-moz-chunked-loader" == t
                        }
                    }, {
                        key: "getNetworkLoaderTypeName",
                        value: function() {
                            var e = new a.default({}, (0, o.createDefaultConfig)()),
                                t = e.loaderType;
                            return e.destroy(), t
                        }
                    }, {
                        key: "supportNativeMediaPlayback",
                        value: function(t) {
                            void 0 == e.videoElement && (e.videoElement = window.document.createElement("video"));
                            var n = e.videoElement.canPlayType(t);
                            return "probably" === n || "maybe" == n
                        }
                    }, {
                        key: "getFeatureList",
                        value: function() {
                            var t = {
                                mseFlvPlayback: !1,
                                mseLiveFlvPlayback: !1,
                                networkStreamIO: !1,
                                networkLoaderName: "",
                                nativeMP4H264Playback: !1,
                                nativeWebmVP8Playback: !1,
                                nativeWebmVP9Playback: !1
                            };
                            return t.mseFlvPlayback = e.supportMSEH264Playback(), t.networkStreamIO = e.supportNetworkStreamIO(), t.networkLoaderName = e.getNetworkLoaderTypeName(), t.mseLiveFlvPlayback = t.mseFlvPlayback && t.networkStreamIO, t.nativeMP4H264Playback = e.supportNativeMediaPlayback('video/mp4; codecs="avc1.42001E, mp4a.40.2"'), t.nativeWebmVP8Playback = e.supportNativeMediaPlayback('video/webm; codecs="vp8.0, vorbis"'), t.nativeWebmVP9Playback = e.supportNativeMediaPlayback('video/webm; codecs="vp9"'), t
                        }
                    }]), e
                }();
            n.default = u
        }, {
            "../config.js": 5,
            "../io/io-controller.js": 23
        }],
        7: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function() {
                    function e() {
                        i(this, e), this.mimeType = null, this.duration = null, this.hasAudio = null, this.hasVideo = null, this.audioCodec = null, this.videoCodec = null, this.audioDataRate = null, this.videoDataRate = null, this.audioSampleRate = null, this.audioChannelCount = null, this.width = null, this.height = null, this.fps = null, this.profile = null, this.level = null, this.chromaFormat = null, this.sarNum = null, this.sarDen = null, this.metadata = null, this.segments = null, this.segmentCount = null, this.hasKeyframesIndex = null, this.keyframesIndex = null
                    }
                    return r(e, [{
                        key: "isComplete",
                        value: function() {
                            var e = !1 === this.hasAudio || !0 === this.hasAudio && null != this.audioCodec && null != this.audioSampleRate && null != this.audioChannelCount,
                                t = !1 === this.hasVideo || !0 === this.hasVideo && null != this.videoCodec && null != this.width && null != this.height && null != this.fps && null != this.profile && null != this.level && null != this.chromaFormat && null != this.sarNum && null != this.sarDen;
                            return null != this.mimeType && null != this.duration && null != this.metadata && null != this.hasKeyframesIndex && e && t
                        }
                    }, {
                        key: "isSeekable",
                        value: function() {
                            return !0 === this.hasKeyframesIndex
                        }
                    }, {
                        key: "getNearestKeyframe",
                        value: function(e) {
                            if (null == this.keyframesIndex) return null;
                            var t = this.keyframesIndex,
                                n = this._search(t.times, e);
                            return {
                                index: n,
                                milliseconds: t.times[n],
                                fileposition: t.filepositions[n]
                            }
                        }
                    }, {
                        key: "_search",
                        value: function(e, t) {
                            var n = 0,
                                i = e.length - 1,
                                r = 0,
                                s = 0,
                                a = i;
                            for (t < e[0] && (n = 0, s = a + 1); s <= a;) {
                                if ((r = s + Math.floor((a - s) / 2)) === i || t >= e[r] && t < e[r + 1]) {
                                    n = r;
                                    break
                                }
                                e[r] < t ? s = r + 1 : a = r - 1
                            }
                            return n
                        }
                    }]), e
                }();
            n.default = s
        }, {}],
        8: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }();
            n.SampleInfo = function e(t, n, r, s, a) {
                i(this, e), this.dts = t, this.pts = n, this.duration = r, this.originalDts = s, this.isSyncPoint = a, this.fileposition = null
            }, n.MediaSegmentInfo = function() {
                function e() {
                    i(this, e), this.beginDts = 0, this.endDts = 0, this.beginPts = 0, this.endPts = 0, this.originalBeginDts = 0, this.originalEndDts = 0, this.syncPoints = [], this.firstSample = null, this.lastSample = null
                }
                return r(e, [{
                    key: "appendSyncPoint",
                    value: function(e) {
                        e.isSyncPoint = !0, this.syncPoints.push(e)
                    }
                }]), e
            }(), n.IDRSampleList = function() {
                function e() {
                    i(this, e), this._list = []
                }
                return r(e, [{
                    key: "clear",
                    value: function() {
                        this._list = []
                    }
                }, {
                    key: "appendArray",
                    value: function(e) {
                        var t = this._list;
                        0 !== e.length && (t.length > 0 && e[0].originalDts < t[t.length - 1].originalDts && this.clear(), Array.prototype.push.apply(t, e))
                    }
                }, {
                    key: "getLastSyncPointBeforeDts",
                    value: function(e) {
                        if (0 == this._list.length) return null;
                        var t = this._list,
                            n = 0,
                            i = t.length - 1,
                            r = 0,
                            s = 0,
                            a = i;
                        for (e < t[0].dts && (n = 0, s = a + 1); s <= a;) {
                            if ((r = s + Math.floor((a - s) / 2)) === i || e >= t[r].dts && e < t[r + 1].dts) {
                                n = r;
                                break
                            }
                            t[r].dts < e ? s = r + 1 : a = r - 1
                        }
                        return this._list[n]
                    }
                }]), e
            }(), n.MediaSegmentInfoList = function() {
                function e(t) {
                    i(this, e), this._type = t, this._list = [], this._lastAppendLocation = -1
                }
                return r(e, [{
                    key: "isEmpty",
                    value: function() {
                        return 0 === this._list.length
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this._list = [], this._lastAppendLocation = -1
                    }
                }, {
                    key: "_searchNearestSegmentBefore",
                    value: function(e) {
                        var t = this._list;
                        if (0 === t.length) return -2;
                        var n = t.length - 1,
                            i = 0,
                            r = 0,
                            s = n,
                            a = 0;
                        if (e < t[0].originalBeginDts) return a = -1;
                        for (; r <= s;) {
                            if ((i = r + Math.floor((s - r) / 2)) === n || e > t[i].lastSample.originalDts && e < t[i + 1].originalBeginDts) {
                                a = i;
                                break
                            }
                            t[i].originalBeginDts < e ? r = i + 1 : s = i - 1
                        }
                        return a
                    }
                }, {
                    key: "_searchNearestSegmentAfter",
                    value: function(e) {
                        return this._searchNearestSegmentBefore(e) + 1
                    }
                }, {
                    key: "append",
                    value: function(e) {
                        var t = this._list,
                            n = e,
                            i = this._lastAppendLocation,
                            r = 0; - 1 !== i && i < t.length && n.originalBeginDts >= t[i].lastSample.originalDts && (i === t.length - 1 || i < t.length - 1 && n.originalBeginDts < t[i + 1].originalBeginDts) ? r = i + 1 : t.length > 0 && (r = this._searchNearestSegmentBefore(n.originalBeginDts) + 1), this._lastAppendLocation = r, this._list.splice(r, 0, n)
                    }
                }, {
                    key: "getLastSegmentBefore",
                    value: function(e) {
                        var t = this._searchNearestSegmentBefore(e);
                        return t >= 0 ? this._list[t] : null
                    }
                }, {
                    key: "getLastSampleBefore",
                    value: function(e) {
                        var t = this.getLastSegmentBefore(e);
                        return null != t ? t.lastSample : null
                    }
                }, {
                    key: "getLastSyncPointBefore",
                    value: function(e) {
                        for (var t = this._searchNearestSegmentBefore(e), n = this._list[t].syncPoints; 0 === n.length && t > 0;) t--, n = this._list[t].syncPoints;
                        return n.length > 0 ? n[n.length - 1] : null
                    }
                }, {
                    key: "type",
                    get: function() {
                        return this._type
                    }
                }, {
                    key: "length",
                    get: function() {
                        return this._list.length
                    }
                }]), e
            }()
        }, {}],
        9: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                a = e("events"),
                o = i(a),
                u = e("../utils/logger.js"),
                l = i(u),
                d = e("../utils/browser.js"),
                h = i(d),
                f = e("./mse-events.js"),
                c = i(f),
                _ = e("./media-segment-info.js"),
                m = e("../utils/exception.js"),
                p = function() {
                    function e(t) {
                        r(this, e), this.TAG = "MSEController", this._config = t, this._emitter = new o.default, this._config.isLive && void 0 == this._config.autoCleanupSourceBuffer && (this._config.autoCleanupSourceBuffer = !0), this.e = {
                            onSourceOpen: this._onSourceOpen.bind(this),
                            onSourceEnded: this._onSourceEnded.bind(this),
                            onSourceClose: this._onSourceClose.bind(this),
                            onSourceBufferError: this._onSourceBufferError.bind(this),
                            onSourceBufferUpdateEnd: this._onSourceBufferUpdateEnd.bind(this)
                        }, this._mediaSource = null, this._mediaSourceObjectURL = null, this._mediaElement = null, this._isBufferFull = !1, this._hasPendingEos = !1, this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0, this._pendingSourceBufferInit = [], this._mimeTypes = {
                            video: null,
                            audio: null
                        }, this._sourceBuffers = {
                            video: null,
                            audio: null
                        }, this._lastInitSegments = {
                            video: null,
                            audio: null
                        }, this._pendingSegments = {
                            video: [],
                            audio: []
                        }, this._pendingRemoveRanges = {
                            video: [],
                            audio: []
                        }, this._idrList = new _.IDRSampleList
                    }
                    return s(e, [{
                        key: "destroy",
                        value: function() {
                            (this._mediaElement || this._mediaSource) && this.detachMediaElement(), this.e = null, this._emitter.removeAllListeners(), this._emitter = null
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            this._emitter.addListener(e, t)
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            this._emitter.removeListener(e, t)
                        }
                    }, {
                        key: "attachMediaElement",
                        value: function(e) {
                            if (this._mediaSource) throw new m.IllegalStateException("MediaSource has been attached to an HTMLMediaElement!");
                            var t = this._mediaSource = new window.MediaSource;
                            t.addEventListener("sourceopen", this.e.onSourceOpen), t.addEventListener("sourceended", this.e.onSourceEnded), t.addEventListener("sourceclose", this.e.onSourceClose), this._mediaElement = e, this._mediaSourceObjectURL = window.URL.createObjectURL(this._mediaSource), e.src = this._mediaSourceObjectURL
                        }
                    }, {
                        key: "detachMediaElement",
                        value: function() {
                            if (this._mediaSource) {
                                var e = this._mediaSource;
                                for (var t in this._sourceBuffers) {
                                    var n = this._pendingSegments[t];
                                    n.splice(0, n.length), this._pendingSegments[t] = null, this._pendingRemoveRanges[t] = null, this._lastInitSegments[t] = null;
                                    var i = this._sourceBuffers[t];
                                    i && ("closed" !== e.readyState && (e.removeSourceBuffer(i), i.removeEventListener("error", this.e.onSourceBufferError), i.removeEventListener("updateend", this.e.onSourceBufferUpdateEnd)), this._mimeTypes[t] = null, this._sourceBuffers[t] = null)
                                }
                                if ("open" === e.readyState) try {
                                    e.endOfStream()
                                } catch (e) {
                                    l.default.e(this.TAG, e.message)
                                }
                                e.removeEventListener("sourceopen", this.e.onSourceOpen), e.removeEventListener("sourceended", this.e.onSourceEnded), e.removeEventListener("sourceclose", this.e.onSourceClose), this._pendingSourceBufferInit = [], this._isBufferFull = !1, this._idrList.clear(), this._mediaSource = null
                            }
                            this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement = null), this._mediaSourceObjectURL && (window.URL.revokeObjectURL(this._mediaSourceObjectURL), this._mediaSourceObjectURL = null)
                        }
                    }, {
                        key: "appendInitSegment",
                        value: function(e, t) {
                            if (!this._mediaSource || "open" !== this._mediaSource.readyState) return this._pendingSourceBufferInit.push(e), void this._pendingSegments[e.type].push(e);
                            var n = e,
                                i = "" + n.container;
                            n.codec && n.codec.length > 0 && (i += ";codecs=" + n.codec);
                            var r = !1;
                            if (l.default.v(this.TAG, "Received Initialization Segment, mimeType: " + i), this._lastInitSegments[n.type] = n, i !== this._mimeTypes[n.type]) {
                                if (this._mimeTypes[n.type]) l.default.v(this.TAG, "Notice: " + n.type + " mimeType changed, origin: " + this._mimeTypes[n.type] + ", target: " + i);
                                else {
                                    r = !0;
                                    try {
                                        var s = this._sourceBuffers[n.type] = this._mediaSource.addSourceBuffer(i);
                                        s.addEventListener("error", this.e.onSourceBufferError), s.addEventListener("updateend", this.e.onSourceBufferUpdateEnd)
                                    } catch (e) {
                                        return l.default.e(this.TAG, e.message), void this._emitter.emit(c.default.ERROR, {
                                            code: e.code,
                                            msg: e.message
                                        })
                                    }
                                }
                                this._mimeTypes[n.type] = i
                            }
                            t || this._pendingSegments[n.type].push(n), r || this._sourceBuffers[n.type] && !this._sourceBuffers[n.type].updating && this._doAppendSegments(), h.default.safari && "audio/mpeg" === n.container && n.mediaDuration > 0 && (this._requireSetMediaDuration = !0, this._pendingMediaDuration = n.mediaDuration / 1e3, this._updateMediaSourceDuration())
                        }
                    }, {
                        key: "appendMediaSegment",
                        value: function(e) {
                            var t = e;
                            this._pendingSegments[t.type].push(t), this._config.autoCleanupSourceBuffer && this._needCleanupSourceBuffer() && this._doCleanupSourceBuffer();
                            var n = this._sourceBuffers[t.type];
                            !n || n.updating || this._hasPendingRemoveRanges() || this._doAppendSegments()
                        }
                    }, {
                        key: "seek",
                        value: function(e) {
                            for (var t in this._sourceBuffers)
                                if (this._sourceBuffers[t]) {
                                    var n = this._sourceBuffers[t];
                                    if ("open" === this._mediaSource.readyState) try {
                                        n.abort()
                                    } catch (e) {
                                        l.default.e(this.TAG, e.message)
                                    }
                                    this._idrList.clear();
                                    var i = this._pendingSegments[t];
                                    if (i.splice(0, i.length), "closed" !== this._mediaSource.readyState) {
                                        for (var r = 0; r < n.buffered.length; r++) {
                                            var s = n.buffered.start(r),
                                                a = n.buffered.end(r);
                                            this._pendingRemoveRanges[t].push({
                                                start: s,
                                                end: a
                                            })
                                        }
                                        if (n.updating || this._doRemoveRanges(), h.default.safari) {
                                            var o = this._lastInitSegments[t];
                                            o && (this._pendingSegments[t].push(o), n.updating || this._doAppendSegments())
                                        }
                                    }
                                }
                        }
                    }, {
                        key: "endOfStream",
                        value: function() {
                            var e = this._mediaSource,
                                t = this._sourceBuffers;
                            if (!e || "open" !== e.readyState) return void(e && "closed" === e.readyState && this._hasPendingSegments() && (this._hasPendingEos = !0));
                            t.video && t.video.updating || t.audio && t.audio.updating ? this._hasPendingEos = !0 : (this._hasPendingEos = !1, e.endOfStream())
                        }
                    }, {
                        key: "getNearestKeyframe",
                        value: function(e) {
                            return this._idrList.getLastSyncPointBeforeDts(e)
                        }
                    }, {
                        key: "_needCleanupSourceBuffer",
                        value: function() {
                            if (!this._config.autoCleanupSourceBuffer) return !1;
                            var e = this._mediaElement.currentTime;
                            for (var t in this._sourceBuffers) {
                                var n = this._sourceBuffers[t];
                                if (n) {
                                    var i = n.buffered;
                                    if (i.length >= 1 && e - i.start(0) >= this._config.autoCleanupMaxBackwardDuration) return !0
                                }
                            }
                            return !1
                        }
                    }, {
                        key: "_doCleanupSourceBuffer",
                        value: function() {
                            var e = this._mediaElement.currentTime;
                            for (var t in this._sourceBuffers) {
                                var n = this._sourceBuffers[t];
                                if (n) {
                                    for (var i = n.buffered, r = !1, s = 0; s < i.length; s++) {
                                        var a = i.start(s),
                                            o = i.end(s);
                                        if (a <= e && e < o + 3) {
                                            if (e - a >= this._config.autoCleanupMaxBackwardDuration) {
                                                r = !0;
                                                var u = e - this._config.autoCleanupMinBackwardDuration;
                                                this._pendingRemoveRanges[t].push({
                                                    start: a,
                                                    end: u
                                                })
                                            }
                                        } else o < e && (r = !0, this._pendingRemoveRanges[t].push({
                                            start: a,
                                            end: o
                                        }))
                                    }
                                    r && !n.updating && this._doRemoveRanges()
                                }
                            }
                        }
                    }, {
                        key: "_updateMediaSourceDuration",
                        value: function() {
                            var e = this._sourceBuffers;
                            if (0 !== this._mediaElement.readyState && "open" === this._mediaSource.readyState && !(e.video && e.video.updating || e.audio && e.audio.updating)) {
                                var t = this._mediaSource.duration,
                                    n = this._pendingMediaDuration;
                                n > 0 && (isNaN(t) || n > t) && (l.default.v(this.TAG, "Update MediaSource duration from " + t + " to " + n), this._mediaSource.duration = n), this._requireSetMediaDuration = !1, this._pendingMediaDuration = 0
                            }
                        }
                    }, {
                        key: "_doRemoveRanges",
                        value: function() {
                            for (var e in this._pendingRemoveRanges)
                                if (this._sourceBuffers[e] && !this._sourceBuffers[e].updating)
                                    for (var t = this._sourceBuffers[e], n = this._pendingRemoveRanges[e]; n.length && !t.updating;) {
                                        var i = n.shift();
                                        t.remove(i.start, i.end)
                                    }
                        }
                    }, {
                        key: "_doAppendSegments",
                        value: function() {
                            var e = this._pendingSegments;
                            for (var t in e)
                                if (this._sourceBuffers[t] && !this._sourceBuffers[t].updating && e[t].length > 0) {
                                    var n = e[t].shift();
                                    if (n.timestampOffset) {
                                        var i = this._sourceBuffers[t].timestampOffset,
                                            r = n.timestampOffset / 1e3,
                                            s = Math.abs(i - r);
                                        s > .1 && (l.default.v(this.TAG, "Update MPEG audio timestampOffset from " + i + " to " + r), this._sourceBuffers[t].timestampOffset = r), delete n.timestampOffset
                                    }
                                    if (!n.data || 0 === n.data.byteLength) continue;
                                    try {
                                        this._sourceBuffers[t].appendBuffer(n.data), this._isBufferFull = !1, "video" === t && n.hasOwnProperty("info") && this._idrList.appendArray(n.info.syncPoints)
                                    } catch (e) {
                                        this._pendingSegments[t].unshift(n), 22 === e.code ? (this._isBufferFull || this._emitter.emit(c.default.BUFFER_FULL), this._isBufferFull = !0) : (l.default.e(this.TAG, e.message), this._emitter.emit(c.default.ERROR, {
                                            code: e.code,
                                            msg: e.message
                                        }))
                                    }
                                }
                        }
                    }, {
                        key: "_onSourceOpen",
                        value: function() {
                            if (l.default.v(this.TAG, "MediaSource onSourceOpen"), this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._pendingSourceBufferInit.length > 0)
                                for (var e = this._pendingSourceBufferInit; e.length;) {
                                    var t = e.shift();
                                    this.appendInitSegment(t, !0)
                                }
                            this._hasPendingSegments() && this._doAppendSegments(), this._emitter.emit(c.default.SOURCE_OPEN)
                        }
                    }, {
                        key: "_onSourceEnded",
                        value: function() {
                            l.default.v(this.TAG, "MediaSource onSourceEnded")
                        }
                    }, {
                        key: "_onSourceClose",
                        value: function() {
                            l.default.v(this.TAG, "MediaSource onSourceClose"), this._mediaSource && null != this.e && (this._mediaSource.removeEventListener("sourceopen", this.e.onSourceOpen), this._mediaSource.removeEventListener("sourceended", this.e.onSourceEnded), this._mediaSource.removeEventListener("sourceclose", this.e.onSourceClose))
                        }
                    }, {
                        key: "_hasPendingSegments",
                        value: function() {
                            var e = this._pendingSegments;
                            return e.video.length > 0 || e.audio.length > 0
                        }
                    }, {
                        key: "_hasPendingRemoveRanges",
                        value: function() {
                            var e = this._pendingRemoveRanges;
                            return e.video.length > 0 || e.audio.length > 0
                        }
                    }, {
                        key: "_onSourceBufferUpdateEnd",
                        value: function() {
                            this._requireSetMediaDuration ? this._updateMediaSourceDuration() : this._hasPendingRemoveRanges() ? this._doRemoveRanges() : this._hasPendingSegments() ? this._doAppendSegments() : this._hasPendingEos && this.endOfStream(), this._emitter.emit(c.default.UPDATE_END)
                        }
                    }, {
                        key: "_onSourceBufferError",
                        value: function(e) {
                            l.default.e(this.TAG, "SourceBuffer Error: " + e)
                        }
                    }]), e
                }();
            n.default = p
        }, {
            "../utils/browser.js": 39,
            "../utils/exception.js": 40,
            "../utils/logger.js": 41,
            "./media-segment-info.js": 8,
            "./mse-events.js": 10,
            events: 2
        }],
        10: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = {
                ERROR: "error",
                SOURCE_OPEN: "source_open",
                UPDATE_END: "update_end",
                BUFFER_FULL: "buffer_full"
            };
            n.default = i
        }, {}],
        11: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                a = e("events"),
                o = i(a),
                u = e("../utils/logger.js"),
                l = i(u),
                d = e("../utils/logging-control.js"),
                h = i(d),
                f = e("./transmuxing-controller.js"),
                c = i(f),
                _ = e("./transmuxing-events.js"),
                m = i(_),
                p = e("./transmuxing-worker.js"),
                v = i(p),
                g = e("./media-info.js"),
                y = i(g),
                E = function() {
                    function t(n, i) {
                        if (r(this, t), this.TAG = "Transmuxer", this._emitter = new o.default, i.enableWorker && "undefined" != typeof Worker) try {
                            var s = e("webworkify");
                            this._worker = s(v.default), this._workerDestroying = !1, this._worker.addEventListener("message", this._onWorkerMessage.bind(this)), this._worker.postMessage({
                                cmd: "init",
                                param: [n, i]
                            }), this.e = {
                                onLoggingConfigChanged: this._onLoggingConfigChanged.bind(this)
                            }, h.default.registerListener(this.e.onLoggingConfigChanged), this._worker.postMessage({
                                cmd: "logging_config",
                                param: h.default.getConfig()
                            })
                        } catch (e) {
                            l.default.e(this.TAG, "Error while initialize transmuxing worker, fallback to inline transmuxing"), this._worker = null, this._controller = new c.default(n, i)
                        } else this._controller = new c.default(n, i);
                        if (this._controller) {
                            var a = this._controller;
                            a.on(m.default.IO_ERROR, this._onIOError.bind(this)), a.on(m.default.DEMUX_ERROR, this._onDemuxError.bind(this)), a.on(m.default.INIT_SEGMENT, this._onInitSegment.bind(this)), a.on(m.default.MEDIA_SEGMENT, this._onMediaSegment.bind(this)), a.on(m.default.LOADING_COMPLETE, this._onLoadingComplete.bind(this)), a.on(m.default.RECOVERED_EARLY_EOF, this._onRecoveredEarlyEof.bind(this)), a.on(m.default.MEDIA_INFO, this._onMediaInfo.bind(this)), a.on(m.default.STATISTICS_INFO, this._onStatisticsInfo.bind(this)), a.on(m.default.RECOMMEND_SEEKPOINT, this._onRecommendSeekpoint.bind(this))
                        }
                    }
                    return s(t, [{
                        key: "destroy",
                        value: function() {
                            this._worker ? this._workerDestroying || (this._workerDestroying = !0, this._worker.postMessage({
                                cmd: "destroy"
                            }), h.default.removeListener(this.e.onLoggingConfigChanged), this.e = null) : (this._controller.destroy(), this._controller = null), this._emitter.removeAllListeners(), this._emitter = null
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            this._emitter.addListener(e, t)
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            this._emitter.removeListener(e, t)
                        }
                    }, {
                        key: "hasWorker",
                        value: function() {
                            return null != this._worker
                        }
                    }, {
                        key: "open",
                        value: function() {
                            this._worker ? this._worker.postMessage({
                                cmd: "start"
                            }) : this._controller.start()
                        }
                    }, {
                        key: "close",
                        value: function() {
                            this._worker ? this._worker.postMessage({
                                cmd: "stop"
                            }) : this._controller.stop()
                        }
                    }, {
                        key: "seek",
                        value: function(e) {
                            this._worker ? this._worker.postMessage({
                                cmd: "seek",
                                param: e
                            }) : this._controller.seek(e)
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this._worker ? this._worker.postMessage({
                                cmd: "pause"
                            }) : this._controller.pause()
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            this._worker ? this._worker.postMessage({
                                cmd: "resume"
                            }) : this._controller.resume()
                        }
                    }, {
                        key: "_onInitSegment",
                        value: function(e, t) {
                            var n = this;
                            Promise.resolve().then(function() {
                                n._emitter.emit(m.default.INIT_SEGMENT, e, t)
                            })
                        }
                    }, {
                        key: "_onMediaSegment",
                        value: function(e, t) {
                            var n = this;
                            Promise.resolve().then(function() {
                                n._emitter.emit(m.default.MEDIA_SEGMENT, e, t)
                            })
                        }
                    }, {
                        key: "_onLoadingComplete",
                        value: function() {
                            var e = this;
                            Promise.resolve().then(function() {
                                e._emitter.emit(m.default.LOADING_COMPLETE)
                            })
                        }
                    }, {
                        key: "_onRecoveredEarlyEof",
                        value: function() {
                            var e = this;
                            Promise.resolve().then(function() {
                                e._emitter.emit(m.default.RECOVERED_EARLY_EOF)
                            })
                        }
                    }, {
                        key: "_onMediaInfo",
                        value: function(e) {
                            var t = this;
                            Promise.resolve().then(function() {
                                t._emitter.emit(m.default.MEDIA_INFO, e)
                            })
                        }
                    }, {
                        key: "_onStatisticsInfo",
                        value: function(e) {
                            var t = this;
                            Promise.resolve().then(function() {
                                t._emitter.emit(m.default.STATISTICS_INFO, e)
                            })
                        }
                    }, {
                        key: "_onIOError",
                        value: function(e, t) {
                            var n = this;
                            Promise.resolve().then(function() {
                                n._emitter.emit(m.default.IO_ERROR, e, t)
                            })
                        }
                    }, {
                        key: "_onDemuxError",
                        value: function(e, t) {
                            var n = this;
                            Promise.resolve().then(function() {
                                n._emitter.emit(m.default.DEMUX_ERROR, e, t)
                            })
                        }
                    }, {
                        key: "_onRecommendSeekpoint",
                        value: function(e) {
                            var t = this;
                            Promise.resolve().then(function() {
                                t._emitter.emit(m.default.RECOMMEND_SEEKPOINT, e)
                            })
                        }
                    }, {
                        key: "_onLoggingConfigChanged",
                        value: function(e) {
                            this._worker && this._worker.postMessage({
                                cmd: "logging_config",
                                param: e
                            })
                        }
                    }, {
                        key: "_onWorkerMessage",
                        value: function(e) {
                            var t = e.data,
                                n = t.data;
                            if ("destroyed" === t.msg || this._workerDestroying) return this._workerDestroying = !1, this._worker.terminate(), void(this._worker = null);
                            switch (t.msg) {
                                case m.default.INIT_SEGMENT:
                                case m.default.MEDIA_SEGMENT:
                                    this._emitter.emit(t.msg, n.type, n.data);
                                    break;
                                case m.default.LOADING_COMPLETE:
                                case m.default.RECOVERED_EARLY_EOF:
                                    this._emitter.emit(t.msg);
                                    break;
                                case m.default.MEDIA_INFO:
                                    Object.setPrototypeOf(n, y.default.prototype), this._emitter.emit(t.msg, n);
                                    break;
                                case m.default.STATISTICS_INFO:
                                    this._emitter.emit(t.msg, n);
                                    break;
                                case m.default.IO_ERROR:
                                case m.default.DEMUX_ERROR:
                                    this._emitter.emit(t.msg, n.type, n.info);
                                    break;
                                case m.default.RECOMMEND_SEEKPOINT:
                                    this._emitter.emit(t.msg, n);
                                    break;
                                case "logcat_callback":
                                    l.default.emitter.emit("log", n.type, n.logcat)
                            }
                        }
                    }]), t
                }();
            n.default = E
        }, {
            "../utils/logger.js": 41,
            "../utils/logging-control.js": 42,
            "./media-info.js": 7,
            "./transmuxing-controller.js": 12,
            "./transmuxing-events.js": 13,
            "./transmuxing-worker.js": 14,
            events: 2,
            webworkify: 4
        }],
        12: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                a = e("events"),
                o = i(a),
                u = e("../utils/logger.js"),
                l = i(u),
                d = e("../utils/browser.js"),
                h = i(d),
                f = e("./media-info.js"),
                c = i(f),
                _ = e("../demux/flv-demuxer.js"),
                m = i(_),
                p = e("../remux/mp4-remuxer.js"),
                v = i(p),
                g = e("../demux/demux-errors.js"),
                y = i(g),
                E = e("../io/io-controller.js"),
                b = i(E),
                S = e("./transmuxing-events.js"),
                k = i(S),
                L = (e("../io/loader.js"), function() {
                    function e(t, n) {
                        r(this, e), this.TAG = "TransmuxingController", this._emitter = new o.default, this._config = n, t.segments || (t.segments = [{
                            duration: t.duration,
                            filesize: t.filesize,
                            url: t.url,
                            config:t
                        }]), "boolean" != typeof t.cors && (t.cors = !0), "boolean" != typeof t.withCredentials && (t.withCredentials = !1), this._mediaDataSource = t, this._currentSegmentIndex = 0;
                        var i = 0;
                        this._mediaDataSource.segments.forEach(function(e) {
                            e.timestampBase = i, i += e.duration, e.cors = t.cors, e.withCredentials = t.withCredentials, n.referrerPolicy && (e.referrerPolicy = n.referrerPolicy)
                        }), isNaN(i) || this._mediaDataSource.duration === i || (this._mediaDataSource.duration = i), this._mediaInfo = null, this._demuxer = null, this._remuxer = null, this._ioctl = null, this._pendingSeekTime = null, this._pendingResolveSeekPoint = null, this._statisticsReporter = null
                    }
                    return s(e, [{
                        key: "destroy",
                        value: function() {
                            this._mediaInfo = null, this._mediaDataSource = null, this._statisticsReporter && this._disableStatisticsReporter(), this._ioctl && (this._ioctl.destroy(), this._ioctl = null), this._demuxer && (this._demuxer.destroy(), this._demuxer = null), this._remuxer && (this._remuxer.destroy(), this._remuxer = null), this._emitter.removeAllListeners(), this._emitter = null
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            this._emitter.addListener(e, t)
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            this._emitter.removeListener(e, t)
                        }
                    }, {
                        key: "start",
                        value: function() {
                            this._loadSegment(0), this._enableStatisticsReporter()
                        }
                    }, {
                        key: "_loadSegment",
                        value: function(e, t) {
                            this._currentSegmentIndex = e;
                            var n = this._mediaDataSource.segments[e],
                                i = this._ioctl = new b.default(n, this._config, e);
                            i.onError = this._onIOException.bind(this), i.onSeeked = this._onIOSeeked.bind(this), i.onComplete = this._onIOComplete.bind(this), i.onRedirect = this._onIORedirect.bind(this), i.onRecoveredEarlyEof = this._onIORecoveredEarlyEof.bind(this), t ? this._demuxer.bindDataSource(this._ioctl) : i.onDataArrival = this._onInitChunkArrival.bind(this), i.open(t)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this._internalAbort(), this._disableStatisticsReporter()
                        }
                    }, {
                        key: "_internalAbort",
                        value: function() {
                            this._ioctl && (this._ioctl.destroy(), this._ioctl = null)
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this._ioctl && this._ioctl.isWorking() && (this._ioctl.pause(), this._disableStatisticsReporter())
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            this._ioctl && this._ioctl.isPaused() && (this._ioctl.resume(), this._enableStatisticsReporter())
                        }
                    }, {
                        key: "seek",
                        value: function(e) {
                            if (null != this._mediaInfo && this._mediaInfo.isSeekable()) {
                                var t = this._searchSegmentIndexContains(e);
                                if (t === this._currentSegmentIndex) {
                                    var n = this._mediaInfo.segments[t];
                                    if (void 0 == n) this._pendingSeekTime = e;
                                    else {
                                        var i = n.getNearestKeyframe(e);
                                        this._remuxer.seek(i.milliseconds), this._ioctl.seek(i.fileposition), this._pendingResolveSeekPoint = i.milliseconds
                                    }
                                } else {
                                    var r = this._mediaInfo.segments[t];
                                    if (void 0 == r) this._pendingSeekTime = e, this._internalAbort(), this._remuxer.seek(), this._remuxer.insertDiscontinuity(), this._loadSegment(t);
                                    else {
                                        var s = r.getNearestKeyframe(e);
                                        this._internalAbort(), this._remuxer.seek(e), this._remuxer.insertDiscontinuity(), this._demuxer.resetMediaInfo(), this._demuxer.timestampBase = this._mediaDataSource.segments[t].timestampBase, this._loadSegment(t, s.fileposition), this._pendingResolveSeekPoint = s.milliseconds, this._reportSegmentMediaInfo(t)
                                    }
                                }
                                this._enableStatisticsReporter()
                            }
                        }
                    }, {
                        key: "_searchSegmentIndexContains",
                        value: function(e) {
                            for (var t = this._mediaDataSource.segments, n = t.length - 1, i = 0; i < t.length; i++)
                                if (e < t[i].timestampBase) {
                                    n = i - 1;
                                    break
                                }
                            return n
                        }
                    }, {
                        key: "_onInitChunkArrival",
                        value: function(e, t) {
                            var n = this,
                                i = null,
                                r = 0;
                            if (t > 0) this._demuxer.bindDataSource(this._ioctl), this._demuxer.timestampBase = this._mediaDataSource.segments[this._currentSegmentIndex].timestampBase, r = this._demuxer.parseChunks(e, t);
                            else if ((i = m.default.probe(e)).match) {
                                this._demuxer = new m.default(i, this._config), this._remuxer || (this._remuxer = new v.default(this._config));
                                var s = this._mediaDataSource;
                                void 0 == s.duration || isNaN(s.duration) || (this._demuxer.overridedDuration = s.duration), "boolean" == typeof s.hasAudio && (this._demuxer.overridedHasAudio = s.hasAudio), "boolean" == typeof s.hasVideo && (this._demuxer.overridedHasVideo = s.hasVideo), this._demuxer.timestampBase = s.segments[this._currentSegmentIndex].timestampBase, this._demuxer.onError = this._onDemuxException.bind(this), this._demuxer.onMediaInfo = this._onMediaInfo.bind(this), this._remuxer.bindDataSource(this._demuxer.bindDataSource(this._ioctl)), this._remuxer.onInitSegment = this._onRemuxerInitSegmentArrival.bind(this), this._remuxer.onMediaSegment = this._onRemuxerMediaSegmentArrival.bind(this), r = this._demuxer.parseChunks(e, t)
                            } else i = null, l.default.e(this.TAG, "Non-FLV, Unsupported media type!"), Promise.resolve().then(function() {
                                n._internalAbort()
                            }), this._emitter.emit(k.default.DEMUX_ERROR, y.default.FORMAT_UNSUPPORTED, "Non-FLV, Unsupported media type"), r = 0;
                            return r
                        }
                    }, {
                        key: "_onMediaInfo",
                        value: function(e) {
                            var t = this;
                            null == this._mediaInfo && (this._mediaInfo = Object.assign({}, e), this._mediaInfo.keyframesIndex = null, this._mediaInfo.segments = [], this._mediaInfo.segmentCount = this._mediaDataSource.segments.length, Object.setPrototypeOf(this._mediaInfo, c.default.prototype));
                            var n = Object.assign({}, e);
                            Object.setPrototypeOf(n, c.default.prototype), this._mediaInfo.segments[this._currentSegmentIndex] = n, this._reportSegmentMediaInfo(this._currentSegmentIndex), null != this._pendingSeekTime && Promise.resolve().then(function() {
                                var e = t._pendingSeekTime;
                                t._pendingSeekTime = null, t.seek(e)
                            })
                        }
                    }, {
                        key: "_onIOSeeked",
                        value: function() {
                            this._remuxer.insertDiscontinuity()
                        }
                    }, {
                        key: "_onIOComplete",
                        value: function(e) {
                            var t = e,
                                n = t + 1;
                            n < this._mediaDataSource.segments.length ? (this._internalAbort(), this._loadSegment(n)) : (this._emitter.emit(k.default.LOADING_COMPLETE), this._disableStatisticsReporter())
                        }
                    }, {
                        key: "_onIORedirect",
                        value: function(e) {
                            var t = this._ioctl.extraData;
                            this._mediaDataSource.segments[t].redirectedURL = e
                        }
                    }, {
                        key: "_onIORecoveredEarlyEof",
                        value: function() {
                            this._emitter.emit(k.default.RECOVERED_EARLY_EOF)
                        }
                    }, {
                        key: "_onIOException",
                        value: function(e, t) {
                            l.default.e(this.TAG, "IOException: type = " + e + ", code = " + t.code + ", msg = " + t.msg), this._emitter.emit(k.default.IO_ERROR, e, t), this._disableStatisticsReporter()
                        }
                    }, {
                        key: "_onDemuxException",
                        value: function(e, t) {
                            l.default.e(this.TAG, "DemuxException: type = " + e + ", info = " + t), this._emitter.emit(k.default.DEMUX_ERROR, e, t)
                        }
                    }, {
                        key: "_onRemuxerInitSegmentArrival",
                        value: function(e, t) {
                            this._emitter.emit(k.default.INIT_SEGMENT, e, t)
                        }
                    }, {
                        key: "_onRemuxerMediaSegmentArrival",
                        value: function(e, t) {
                            if (null == this._pendingSeekTime && (this._emitter.emit(k.default.MEDIA_SEGMENT, e, t), null != this._pendingResolveSeekPoint && "video" === e)) {
                                var n = t.info.syncPoints,
                                    i = this._pendingResolveSeekPoint;
                                this._pendingResolveSeekPoint = null, h.default.safari && n.length > 0 && n[0].originalDts === i && (i = n[0].pts), this._emitter.emit(k.default.RECOMMEND_SEEKPOINT, i)
                            }
                        }
                    }, {
                        key: "_enableStatisticsReporter",
                        value: function() {
                            null == this._statisticsReporter && (this._statisticsReporter = self.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval))
                        }
                    }, {
                        key: "_disableStatisticsReporter",
                        value: function() {
                            this._statisticsReporter && (self.clearInterval(this._statisticsReporter), this._statisticsReporter = null)
                        }
                    }, {
                        key: "_reportSegmentMediaInfo",
                        value: function(e) {
                            var t = this._mediaInfo.segments[e],
                                n = Object.assign({}, t);
                            n.duration = this._mediaInfo.duration, n.segmentCount = this._mediaInfo.segmentCount, delete n.segments, delete n.keyframesIndex, this._emitter.emit(k.default.MEDIA_INFO, n)
                        }
                    }, {
                        key: "_reportStatisticsInfo",
                        value: function() {
                            var e = {};
                            e.url = this._ioctl.currentURL, e.hasRedirect = this._ioctl.hasRedirect, e.hasRedirect && (e.redirectedURL = this._ioctl.currentRedirectedURL), e.speed = this._ioctl.currentSpeed, e.loaderType = this._ioctl.loaderType, e.currentSegmentIndex = this._currentSegmentIndex, e.totalSegmentCount = this._mediaDataSource.segments.length, this._emitter.emit(k.default.STATISTICS_INFO, e)
                        }
                    }]), e
                }());
            n.default = L
        }, {
            "../demux/demux-errors.js": 16,
            "../demux/flv-demuxer.js": 18,
            "../io/io-controller.js": 23,
            "../io/loader.js": 24,
            "../remux/mp4-remuxer.js": 38,
            "../utils/browser.js": 39,
            "../utils/logger.js": 41,
            "./media-info.js": 7,
            "./transmuxing-events.js": 13,
            events: 2
        }],
        13: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = {
                IO_ERROR: "io_error",
                DEMUX_ERROR: "demux_error",
                INIT_SEGMENT: "init_segment",
                MEDIA_SEGMENT: "media_segment",
                LOADING_COMPLETE: "loading_complete",
                RECOVERED_EARLY_EOF: "recovered_early_eof",
                MEDIA_INFO: "media_info",
                STATISTICS_INFO: "statistics_info",
                RECOMMEND_SEEKPOINT: "recommend_seekpoint"
            };
            n.default = i
        }, {}],
        14: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = e("../utils/logger.js"),
                s = (i(r), e("../utils/logging-control.js")),
                a = i(s),
                o = e("../utils/polyfill.js"),
                u = i(o),
                l = e("./transmuxing-controller.js"),
                d = i(l),
                h = e("./transmuxing-events.js"),
                f = i(h),
                c = function(e) {
                    function t(t, n) {
                        var i = {
                            msg: f.default.INIT_SEGMENT,
                            data: {
                                type: t,
                                data: n
                            }
                        };
                        e.postMessage(i, [n.data])
                    }

                    function n(t, n) {
                        var i = {
                            msg: f.default.MEDIA_SEGMENT,
                            data: {
                                type: t,
                                data: n
                            }
                        };
                        e.postMessage(i, [n.data])
                    }

                    function i() {
                        var t = {
                            msg: f.default.LOADING_COMPLETE
                        };
                        e.postMessage(t)
                    }

                    function r() {
                        var t = {
                            msg: f.default.RECOVERED_EARLY_EOF
                        };
                        e.postMessage(t)
                    }

                    function s(t) {
                        var n = {
                            msg: f.default.MEDIA_INFO,
                            data: t
                        };
                        e.postMessage(n)
                    }

                    function o(t) {
                        var n = {
                            msg: f.default.STATISTICS_INFO,
                            data: t
                        };
                        e.postMessage(n)
                    }

                    function l(t, n) {
                        e.postMessage({
                            msg: f.default.IO_ERROR,
                            data: {
                                type: t,
                                info: n
                            }
                        })
                    }

                    function h(t, n) {
                        e.postMessage({
                            msg: f.default.DEMUX_ERROR,
                            data: {
                                type: t,
                                info: n
                            }
                        })
                    }

                    function c(t) {
                        e.postMessage({
                            msg: f.default.RECOMMEND_SEEKPOINT,
                            data: t
                        })
                    }

                    function _(t, n) {
                        e.postMessage({
                            msg: "logcat_callback",
                            data: {
                                type: t,
                                logcat: n
                            }
                        })
                    }
                    var m = null,
                        p = _.bind(this);
                    u.default.install(), e.addEventListener("message", function(u) {
                        switch (u.data.cmd) {
                            case "init":
                                m = new d.default(u.data.param[0], u.data.param[1]), m.on(f.default.IO_ERROR, l.bind(this)), m.on(f.default.DEMUX_ERROR, h.bind(this)), m.on(f.default.INIT_SEGMENT, t.bind(this)), m.on(f.default.MEDIA_SEGMENT, n.bind(this)), m.on(f.default.LOADING_COMPLETE, i.bind(this)), m.on(f.default.RECOVERED_EARLY_EOF, r.bind(this)), m.on(f.default.MEDIA_INFO, s.bind(this)), m.on(f.default.STATISTICS_INFO, o.bind(this)), m.on(f.default.RECOMMEND_SEEKPOINT, c.bind(this));
                                break;
                            case "destroy":
                                m && (m.destroy(), m = null), e.postMessage({
                                    msg: "destroyed"
                                });
                                break;
                            case "start":
                                m.start();
                                break;
                            case "stop":
                                m.stop();
                                break;
                            case "seek":
                                m.seek(u.data.param);
                                break;
                            case "pause":
                                m.pause();
                                break;
                            case "resume":
                                m.resume();
                                break;
                            case "logging_config":
                                var _ = u.data.param;
                                a.default.applyConfig(_), !0 === _.enableCallback ? a.default.addLogListener(p) : a.default.removeLogListener(p)
                        }
                    })
                };
            n.default = c
        }, {
            "../utils/logger.js": 41,
            "../utils/logging-control.js": 42,
            "../utils/polyfill.js": 43,
            "./transmuxing-controller.js": 12,
            "./transmuxing-events.js": 13
        }],
        15: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                a = e("../utils/logger.js"),
                o = i(a),
                u = e("../utils/utf8-conv.js"),
                l = i(u),
                d = e("../utils/exception.js"),
                h = function() {
                    var e = new ArrayBuffer(2);
                    return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0]
                }(),
                f = function() {
                    function e() {
                        r(this, e)
                    }
                    return s(e, null, [{
                        key: "parseScriptData",
                        value: function(t, n, i) {
                            var r = {};
                            try {
                                var s = e.parseValue(t, n, i),
                                    a = e.parseValue(t, n + s.size, i - s.size);
                                r[s.data] = a.data
                            } catch (e) {
                                o.default.e("AMF", e.toString())
                            }
                            return r
                        }
                    }, {
                        key: "parseObject",
                        value: function(t, n, i) {
                            if (i < 3) throw new d.IllegalStateException("Data not enough when parse ScriptDataObject");
                            var r = e.parseString(t, n, i),
                                s = e.parseValue(t, n + r.size, i - r.size),
                                a = s.objectEnd;
                            return {
                                data: {
                                    name: r.data,
                                    value: s.data
                                },
                                size: r.size + s.size,
                                objectEnd: a
                            }
                        }
                    }, {
                        key: "parseVariable",
                        value: function(t, n, i) {
                            return e.parseObject(t, n, i)
                        }
                    }, {
                        key: "parseString",
                        value: function(e, t, n) {
                            if (n < 2) throw new d.IllegalStateException("Data not enough when parse String");
                            var i = new DataView(e, t, n),
                                r = i.getUint16(0, !h),
                                s = void 0;
                            return s = r > 0 ? (0, l.default)(new Uint8Array(e, t + 2, r)) : "", {
                                data: s,
                                size: 2 + r
                            }
                        }
                    }, {
                        key: "parseLongString",
                        value: function(e, t, n) {
                            if (n < 4) throw new d.IllegalStateException("Data not enough when parse LongString");
                            var i = new DataView(e, t, n),
                                r = i.getUint32(0, !h),
                                s = void 0;
                            return s = r > 0 ? (0, l.default)(new Uint8Array(e, t + 4, r)) : "", {
                                data: s,
                                size: 4 + r
                            }
                        }
                    }, {
                        key: "parseDate",
                        value: function(e, t, n) {
                            if (n < 10) throw new d.IllegalStateException("Data size invalid when parse Date");
                            var i = new DataView(e, t, n),
                                r = i.getFloat64(0, !h);
                            return r += 60 * i.getInt16(8, !h) * 1e3, {
                                data: new Date(r),
                                size: 10
                            }
                        }
                    }, {
                        key: "parseValue",
                        value: function(t, n, i) {
                            if (i < 1) throw new d.IllegalStateException("Data not enough when parse Value");
                            var r = new DataView(t, n, i),
                                s = 1,
                                a = r.getUint8(0),
                                u = void 0,
                                l = !1;
                            try {
                                switch (a) {
                                    case 0:
                                        u = r.getFloat64(1, !h), s += 8;
                                        break;
                                    case 1:
                                        u = !!r.getUint8(1), s += 1;
                                        break;
                                    case 2:
                                        var f = e.parseString(t, n + 1, i - 1);
                                        u = f.data, s += f.size;
                                        break;
                                    case 3:
                                        u = {};
                                        var c = 0;
                                        for (9 == (16777215 & r.getUint32(i - 4, !h)) && (c = 3); s < i - 4;) {
                                            var _ = e.parseObject(t, n + s, i - s - c);
                                            if (_.objectEnd) break;
                                            u[_.data.name] = _.data.value, s += _.size
                                        }
                                        if (s <= i - 3) {
                                            9 === (16777215 & r.getUint32(s - 1, !h)) && (s += 3)
                                        }
                                        break;
                                    case 8:
                                        u = {}, s += 4;
                                        var m = 0;
                                        for (9 == (16777215 & r.getUint32(i - 4, !h)) && (m = 3); s < i - 8;) {
                                            var p = e.parseVariable(t, n + s, i - s - m);
                                            if (p.objectEnd) break;
                                            u[p.data.name] = p.data.value, s += p.size
                                        }
                                        if (s <= i - 3) {
                                            9 === (16777215 & r.getUint32(s - 1, !h)) && (s += 3)
                                        }
                                        break;
                                    case 9:
                                        u = void 0, s = 1, l = !0;
                                        break;
                                    case 10:
                                        u = [];
                                        var v = r.getUint32(1, !h);
                                        s += 4;
                                        for (var g = 0; g < v; g++) {
                                            var y = e.parseValue(t, n + s, i - s);
                                            u.push(y.data), s += y.size
                                        }
                                        break;
                                    case 11:
                                        var E = e.parseDate(t, n + 1, i - 1);
                                        u = E.data, s += E.size;
                                        break;
                                    case 12:
                                        var b = e.parseString(t, n + 1, i - 1);
                                        u = b.data, s += b.size;
                                        break;
                                    default:
                                        s = i, o.default.w("AMF", "Unsupported AMF value type " + a)
                                }
                            } catch (e) {
                                o.default.e("AMF", e.toString())
                            }
                            return {
                                data: u,
                                size: s,
                                objectEnd: l
                            }
                        }
                    }]), e
                }();
            n.default = f
        }, {
            "../utils/exception.js": 40,
            "../utils/logger.js": 41,
            "../utils/utf8-conv.js": 44
        }],
        16: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = {
                OK: "OK",
                FORMAT_ERROR: "FormatError",
                FORMAT_UNSUPPORTED: "FormatUnsupported",
                CODEC_UNSUPPORTED: "CodecUnsupported"
            };
            n.default = i
        }, {}],
        17: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = e("../utils/exception.js"),
                a = function() {
                    function e(t) {
                        i(this, e), this.TAG = "ExpGolomb", this._buffer = t, this._buffer_index = 0, this._total_bytes = t.byteLength, this._total_bits = 8 * t.byteLength, this._current_word = 0, this._current_word_bits_left = 0
                    }
                    return r(e, [{
                        key: "destroy",
                        value: function() {
                            this._buffer = null
                        }
                    }, {
                        key: "_fillCurrentWord",
                        value: function() {
                            var e = this._total_bytes - this._buffer_index;
                            if (e <= 0) throw new s.IllegalStateException("ExpGolomb: _fillCurrentWord() but no bytes available");
                            var t = Math.min(4, e),
                                n = new Uint8Array(4);
                            n.set(this._buffer.subarray(this._buffer_index, this._buffer_index + t)), this._current_word = new DataView(n.buffer).getUint32(0, !1), this._buffer_index += t, this._current_word_bits_left = 8 * t
                        }
                    }, {
                        key: "readBits",
                        value: function(e) {
                            if (e > 32) throw new s.InvalidArgumentException("ExpGolomb: readBits() bits exceeded max 32bits!");
                            if (e <= this._current_word_bits_left) {
                                var t = this._current_word >>> 32 - e;
                                return this._current_word <<= e, this._current_word_bits_left -= e, t
                            }
                            var n = this._current_word_bits_left ? this._current_word : 0;
                            n >>>= 32 - this._current_word_bits_left;
                            var i = e - this._current_word_bits_left;
                            this._fillCurrentWord();
                            var r = Math.min(i, this._current_word_bits_left),
                                a = this._current_word >>> 32 - r;
                            return this._current_word <<= r, this._current_word_bits_left -= r, n = n << r | a
                        }
                    }, {
                        key: "readBool",
                        value: function() {
                            return 1 === this.readBits(1)
                        }
                    }, {
                        key: "readByte",
                        value: function() {
                            return this.readBits(8)
                        }
                    }, {
                        key: "_skipLeadingZero",
                        value: function() {
                            var e = void 0;
                            for (e = 0; e < this._current_word_bits_left; e++)
                                if (0 != (this._current_word & 2147483648 >>> e)) return this._current_word <<= e, this._current_word_bits_left -= e, e;
                            return this._fillCurrentWord(), e + this._skipLeadingZero()
                        }
                    }, {
                        key: "readUEG",
                        value: function() {
                            var e = this._skipLeadingZero();
                            return this.readBits(e + 1) - 1
                        }
                    }, {
                        key: "readSEG",
                        value: function() {
                            var e = this.readUEG();
                            return 1 & e ? e + 1 >>> 1 : -1 * (e >>> 1)
                        }
                    }]), e
                }();
            n.default = a
        }, {
            "../utils/exception.js": 40
        }],
        18: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                return e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                u = e("../utils/logger.js"),
                l = i(u),
                d = e("./amf-parser.js"),
                h = i(d),
                f = e("./sps-parser.js"),
                c = i(f),
                _ = e("./demux-errors.js"),
                m = i(_),
                p = e("../core/media-info.js"),
                v = i(p),
                g = e("../utils/exception.js"),
                y = function() {
                    function e(t, n) {
                        r(this, e), this.TAG = "FLVDemuxer", this._config = n, this._onError = null, this._onMediaInfo = null, this._onTrackMetadata = null, this._onDataAvailable = null, this._dataOffset = t.dataOffset, this._firstParse = !0, this._dispatch = !1, this._hasAudio = t.hasAudioTrack, this._hasVideo = t.hasVideoTrack, this._hasAudioFlagOverrided = !1, this._hasVideoFlagOverrided = !1, this._audioInitialMetadataDispatched = !1, this._videoInitialMetadataDispatched = !1, this._mediaInfo = new v.default, this._mediaInfo.hasAudio = this._hasAudio, this._mediaInfo.hasVideo = this._hasVideo, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._naluLengthSize = 4, this._timestampBase = 0, this._timescale = 1e3, this._duration = 0, this._durationOverrided = !1, this._referenceFrameRate = {
                            fixed: !0,
                            fps: 23.976,
                            fps_num: 23976,
                            fps_den: 1e3
                        }, this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3], this._mpegSamplingRates = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0], this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0], this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0], this._mpegAudioL1BitRateTable = [0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1], this._mpegAudioL2BitRateTable = [0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1], this._mpegAudioL3BitRateTable = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1], this._videoTrack = {
                            type: "video",
                            id: 1,
                            sequenceNumber: 0,
                            samples: [],
                            length: 0
                        }, this._audioTrack = {
                            type: "audio",
                            id: 2,
                            sequenceNumber: 0,
                            samples: [],
                            length: 0
                        }, this._littleEndian = function() {
                            var e = new ArrayBuffer(2);
                            return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0]
                        }()
                    }
                    return o(e, [{
                        key: "destroy",
                        value: function() {
                            this._mediaInfo = null, this._metadata = null, this._audioMetadata = null, this._videoMetadata = null, this._videoTrack = null, this._audioTrack = null, this._onError = null, this._onMediaInfo = null, this._onTrackMetadata = null, this._onDataAvailable = null
                        }
                    }, {
                        key: "bindDataSource",
                        value: function(e) {
                            return e.onDataArrival = this.parseChunks.bind(this), this
                        }
                    }, {
                        key: "resetMediaInfo",
                        value: function() {
                            this._mediaInfo = new v.default
                        }
                    }, {
                        key: "_isInitialMetadataDispatched",
                        value: function() {
                            return this._hasAudio && this._hasVideo ? this._audioInitialMetadataDispatched && this._videoInitialMetadataDispatched : this._hasAudio && !this._hasVideo ? this._audioInitialMetadataDispatched : !(this._hasAudio || !this._hasVideo) && this._videoInitialMetadataDispatched
                        }
                    }, {
                        key: "parseChunks",
                        value: function(t, n) {
                            if (!(this._onError && this._onMediaInfo && this._onTrackMetadata && this._onDataAvailable)) throw new g.IllegalStateException("Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified");
                            var i = 0,
                                r = this._littleEndian;
                            if (0 === n) {
                                if (!(t.byteLength > 13)) return 0;
                                i = e.probe(t).dataOffset
                            }
                            if (this._firstParse) {
                                this._firstParse = !1, n + i !== this._dataOffset && l.default.w(this.TAG, "First time parsing but chunk byteStart invalid!");
                                0 !== new DataView(t, i).getUint32(0, !r) && l.default.w(this.TAG, "PrevTagSize0 !== 0 !!!"), i += 4
                            }
                            for (; i < t.byteLength;) {
                                this._dispatch = !0;
                                var s = new DataView(t, i);
                                if (i + 11 + 4 > t.byteLength) break;
                                var a = s.getUint8(0),
                                    o = 16777215 & s.getUint32(0, !r);
                                if (i + 11 + o + 4 > t.byteLength) break;
                                if (8 === a || 9 === a || 18 === a) {
                                    var u = s.getUint8(4),
                                        d = s.getUint8(5),
                                        h = s.getUint8(6),
                                        f = s.getUint8(7),
                                        c = h | d << 8 | u << 16 | f << 24;
                                    0 !== (16777215 & s.getUint32(7, !r)) && l.default.w(this.TAG, "Meet tag which has StreamID != 0!");
                                    var _ = i + 11;
                                    switch (a) {
                                        case 8:
                                            this._parseAudioData(t, _, o, c);
                                            break;
                                        case 9:
                                            this._parseVideoData(t, _, o, c, n + i);
                                            break;
                                        case 18:
                                            this._parseScriptData(t, _, o)
                                    }
                                    var m = s.getUint32(11 + o, !r);
                                    m !== 11 + o && l.default.w(this.TAG, "Invalid PrevTagSize " + m), i += 11 + o + 4
                                } else l.default.w(this.TAG, "Unsupported tag type " + a + ", skipped"), i += 11 + o + 4
                            }
                            return this._isInitialMetadataDispatched() && this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack), i
                        }
                    }, {
                        key: "_parseScriptData",
                        value: function(e, t, n) {
                            var i = h.default.parseScriptData(e, t, n);
                            if (i.hasOwnProperty("onMetaData")) {
                                if (null == i.onMetaData || "object" !== a(i.onMetaData)) return void l.default.w(this.TAG, "Invalid onMetaData structure!");
                                this._metadata && l.default.w(this.TAG, "Found another onMetaData tag!"), this._metadata = i;
                                var r = this._metadata.onMetaData;
                                if ("boolean" == typeof r.hasAudio && !1 === this._hasAudioFlagOverrided && (this._hasAudio = r.hasAudio, this._mediaInfo.hasAudio = this._hasAudio), "boolean" == typeof r.hasVideo && !1 === this._hasVideoFlagOverrided && (this._hasVideo = r.hasVideo, this._mediaInfo.hasVideo = this._hasVideo), "number" == typeof r.audiodatarate && (this._mediaInfo.audioDataRate = r.audiodatarate), "number" == typeof r.videodatarate && (this._mediaInfo.videoDataRate = r.videodatarate), "number" == typeof r.width && (this._mediaInfo.width = r.width), "number" == typeof r.height && (this._mediaInfo.height = r.height), "number" == typeof r.duration) {
                                    if (!this._durationOverrided) {
                                        var s = Math.floor(r.duration * this._timescale);
                                        this._duration = s, this._mediaInfo.duration = s
                                    }
                                } else this._mediaInfo.duration = 0;
                                if ("number" == typeof r.framerate) {
                                    var o = Math.floor(1e3 * r.framerate);
                                    if (o > 0) {
                                        var u = o / 1e3;
                                        this._referenceFrameRate.fixed = !0, this._referenceFrameRate.fps = u, this._referenceFrameRate.fps_num = o, this._referenceFrameRate.fps_den = 1e3, this._mediaInfo.fps = u
                                    }
                                }
                                if ("object" === a(r.keyframes)) {
                                    this._mediaInfo.hasKeyframesIndex = !0;
                                    var d = r.keyframes;
                                    this._mediaInfo.keyframesIndex = this._parseKeyframesIndex(d), r.keyframes = null
                                } else this._mediaInfo.hasKeyframesIndex = !1;
                                this._dispatch = !1, this._mediaInfo.metadata = r, l.default.v(this.TAG, "Parsed onMetaData"), this._mediaInfo.isComplete() && this._onMediaInfo(this._mediaInfo)
                            }
                        }
                    }, {
                        key: "_parseKeyframesIndex",
                        value: function(e) {
                            for (var t = [], n = [], i = 1; i < e.times.length; i++) {
                                var r = this._timestampBase + Math.floor(1e3 * e.times[i]);
                                t.push(r), n.push(e.filepositions[i])
                            }
                            return {
                                times: t,
                                filepositions: n
                            }
                        }
                    }, {
                        key: "_parseAudioData",
                        value: function(e, t, n, i) {
                            if (n <= 1) return void l.default.w(this.TAG, "Flv: Invalid audio packet, missing SoundData payload!");
                            if (!0 !== this._hasAudioFlagOverrided || !1 !== this._hasAudio) {
                                var r = (this._littleEndian, new DataView(e, t, n)),
                                    s = r.getUint8(0),
                                    a = s >>> 4;
                                if (2 !== a && 10 !== a) return void this._onError(m.default.CODEC_UNSUPPORTED, "Flv: Unsupported audio codec idx: " + a);
                                var o = 0,
                                    u = (12 & s) >>> 2;
                                if (!(u >= 0 && u <= 4)) return void this._onError(m.default.FORMAT_ERROR, "Flv: Invalid audio sample rate idx: " + u);
                                o = this._flvSoundRateTable[u];
                                var d = 1 & s,
                                    h = this._audioMetadata,
                                    f = this._audioTrack;
                                if (h || (!1 === this._hasAudio && !1 === this._hasAudioFlagOverrided && (this._hasAudio = !0, this._mediaInfo.hasAudio = !0), h = this._audioMetadata = {}, h.type = "audio", h.id = f.id, h.timescale = this._timescale, h.duration = this._duration, h.audioSampleRate = o, h.channelCount = 0 === d ? 1 : 2), 10 === a) {
                                    var c = this._parseAACAudioData(e, t + 1, n - 1);
                                    if (void 0 == c) return;
                                    if (0 === c.packetType) {
                                        h.config && l.default.w(this.TAG, "Found another AudioSpecificConfig!");
                                        var _ = c.data;
                                        h.audioSampleRate = _.samplingRate, h.channelCount = _.channelCount, h.codec = _.codec, h.originalCodec = _.originalCodec, h.config = _.config, h.refSampleDuration = 1024 / h.audioSampleRate * h.timescale, l.default.v(this.TAG, "Parsed AudioSpecificConfig"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._audioInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("audio", h);
                                        var p = this._mediaInfo;
                                        p.audioCodec = h.originalCodec, p.audioSampleRate = h.audioSampleRate, p.audioChannelCount = h.channelCount, p.hasVideo ? null != p.videoCodec && (p.mimeType = 'video/x-flv; codecs="' + p.videoCodec + "," + p.audioCodec + '"') : p.mimeType = 'video/x-flv; codecs="' + p.audioCodec + '"', p.isComplete() && this._onMediaInfo(p)
                                    } else if (1 === c.packetType) {
                                        var v = this._timestampBase + i,
                                            g = {
                                                unit: c.data,
                                                dts: v,
                                                pts: v
                                            };
                                        f.samples.push(g), f.length += c.data.length
                                    } else l.default.e(this.TAG, "Flv: Unsupported AAC data type " + c.packetType)
                                } else if (2 === a) {
                                    if (!h.codec) {
                                        var y = this._parseMP3AudioData(e, t + 1, n - 1, !0);
                                        if (void 0 == y) return;
                                        h.audioSampleRate = y.samplingRate, h.channelCount = y.channelCount, h.codec = y.codec, h.originalCodec = y.originalCodec, h.refSampleDuration = 1152 / h.audioSampleRate * h.timescale, l.default.v(this.TAG, "Parsed MPEG Audio Frame Header"), this._audioInitialMetadataDispatched = !0, this._onTrackMetadata("audio", h);
                                        var E = this._mediaInfo;
                                        E.audioCodec = h.codec, E.audioSampleRate = h.audioSampleRate, E.audioChannelCount = h.channelCount, E.audioDataRate = y.bitRate, E.hasVideo ? null != E.videoCodec && (E.mimeType = 'video/x-flv; codecs="' + E.videoCodec + "," + E.audioCodec + '"') : E.mimeType = 'video/x-flv; codecs="' + E.audioCodec + '"', E.isComplete() && this._onMediaInfo(E)
                                    }
                                    var b = this._parseMP3AudioData(e, t + 1, n - 1, !1);
                                    if (void 0 == b) return;
                                    var S = this._timestampBase + i,
                                        k = {
                                            unit: b,
                                            dts: S,
                                            pts: S
                                        };
                                    f.samples.push(k), f.length += b.length
                                }
                            }
                        }
                    }, {
                        key: "_parseAACAudioData",
                        value: function(e, t, n) {
                            if (n <= 1) return void l.default.w(this.TAG, "Flv: Invalid AAC packet, missing AACPacketType or/and Data!");
                            var i = {},
                                r = new Uint8Array(e, t, n);
                            return i.packetType = r[0], 0 === r[0] ? i.data = this._parseAACAudioSpecificConfig(e, t + 1, n - 1) : i.data = r.subarray(1), i
                        }
                    }, {
                        key: "_parseAACAudioSpecificConfig",
                        value: function(e, t, n) {
                            var i = new Uint8Array(e, t, n),
                                r = null,
                                s = 0,
                                a = 0,
                                o = 0,
                                u = null;
                            if (s = a = i[0] >>> 3, (o = (7 & i[0]) << 1 | i[1] >>> 7) < 0 || o >= this._mpegSamplingRates.length) return void this._onError(m.default.FORMAT_ERROR, "Flv: AAC invalid sampling frequency index!");
                            var l = this._mpegSamplingRates[o],
                                d = (120 & i[1]) >>> 3;
                            if (d < 0 || d >= 8) return void this._onError(m.default.FORMAT_ERROR, "Flv: AAC invalid channel configuration");
                            5 === s && (u = (7 & i[1]) << 1 | i[2] >>> 7, i[2]);
                            var h = self.navigator.userAgent.toLowerCase();
                            return -1 !== h.indexOf("firefox") ? o >= 6 ? (s = 5, r = new Array(4), u = o - 3) : (s = 2, r = new Array(2), u = o) : -1 !== h.indexOf("android") ? (s = 2, r = new Array(2), u = o) : (s = 5, u = o, r = new Array(4), o >= 6 ? u = o - 3 : 1 === d && (s = 2, r = new Array(2), u = o)), r[0] = s << 3, r[0] |= (15 & o) >>> 1, r[1] = (15 & o) << 7, r[1] |= (15 & d) << 3, 5 === s && (r[1] |= (15 & u) >>> 1, r[2] = (1 & u) << 7, r[2] |= 8, r[3] = 0), {
                                config: r,
                                samplingRate: l,
                                channelCount: d,
                                codec: "mp4a.40." + s,
                                originalCodec: "mp4a.40." + a
                            }
                        }
                    }, {
                        key: "_parseMP3AudioData",
                        value: function(e, t, n, i) {
                            if (n < 4) return void l.default.w(this.TAG, "Flv: Invalid MP3 packet, header missing!");
                            var r = (this._littleEndian, new Uint8Array(e, t, n)),
                                s = null;
                            if (i) {
                                if (255 !== r[0]) return;
                                var a = r[1] >>> 3 & 3,
                                    o = (6 & r[1]) >> 1,
                                    u = (240 & r[2]) >>> 4,
                                    d = (12 & r[2]) >>> 2,
                                    h = r[3] >>> 6 & 3,
                                    f = 3 !== h ? 2 : 1,
                                    c = 0,
                                    _ = 0;
                                switch (a) {
                                    case 0:
                                        c = this._mpegAudioV25SampleRateTable[d];
                                        break;
                                    case 2:
                                        c = this._mpegAudioV20SampleRateTable[d];
                                        break;
                                    case 3:
                                        c = this._mpegAudioV10SampleRateTable[d]
                                }
                                switch (o) {
                                    case 1:
                                        34, u < this._mpegAudioL3BitRateTable.length && (_ = this._mpegAudioL3BitRateTable[u]);
                                        break;
                                    case 2:
                                        33, u < this._mpegAudioL2BitRateTable.length && (_ = this._mpegAudioL2BitRateTable[u]);
                                        break;
                                    case 3:
                                        32, u < this._mpegAudioL1BitRateTable.length && (_ = this._mpegAudioL1BitRateTable[u])
                                }
                                s = {
                                    bitRate: _,
                                    samplingRate: c,
                                    channelCount: f,
                                    codec: "mp3",
                                    originalCodec: "mp3"
                                }
                            } else s = r;
                            return s
                        }
                    }, {
                        key: "_parseVideoData",
                        value: function(e, t, n, i, r) {
                            if (n <= 1) return void l.default.w(this.TAG, "Flv: Invalid video packet, missing VideoData payload!");
                            if (!0 !== this._hasVideoFlagOverrided || !1 !== this._hasVideo) {
                                var s = new Uint8Array(e, t, n)[0],
                                    a = (240 & s) >>> 4,
                                    o = 15 & s;
                                if (7 !== o) return void this._onError(m.default.CODEC_UNSUPPORTED, "Flv: Unsupported codec in video frame: " + o);
                                this._parseAVCVideoPacket(e, t + 1, n - 1, i, r, a)
                            }
                        }
                    }, {
                        key: "_parseAVCVideoPacket",
                        value: function(e, t, n, i, r, s) {
                            if (n < 4) return void l.default.w(this.TAG, "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime");
                            var a = this._littleEndian,
                                o = new DataView(e, t, n),
                                u = o.getUint8(0),
                                d = 16777215 & o.getUint32(0, !a);
                            if (0 === u) this._parseAVCDecoderConfigurationRecord(e, t + 4, n - 4);
                            else if (1 === u) this._parseAVCVideoData(e, t + 4, n - 4, i, r, s, d);
                            else if (2 !== u) return void this._onError(m.default.FORMAT_ERROR, "Flv: Invalid video packet type " + u)
                        }
                    }, {
                        key: "_parseAVCDecoderConfigurationRecord",
                        value: function(e, t, n) {
                            if (n < 7) return void l.default.w(this.TAG, "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!");
                            var i = this._videoMetadata,
                                r = this._videoTrack,
                                s = this._littleEndian,
                                a = new DataView(e, t, n);
                            i ? void 0 !== i.avcc && l.default.w(this.TAG, "Found another AVCDecoderConfigurationRecord!") : (!1 === this._hasVideo && !1 === this._hasVideoFlagOverrided && (this._hasVideo = !0, this._mediaInfo.hasVideo = !0), i = this._videoMetadata = {}, i.type = "video", i.id = r.id, i.timescale = this._timescale, i.duration = this._duration);
                            var o = a.getUint8(0),
                                u = a.getUint8(1);
                            a.getUint8(2), a.getUint8(3);
                            if (1 !== o || 0 === u) return void this._onError(m.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord");
                            if (this._naluLengthSize = 1 + (3 & a.getUint8(4)), 3 !== this._naluLengthSize && 4 !== this._naluLengthSize) return void this._onError(m.default.FORMAT_ERROR, "Flv: Strange NaluLengthSizeMinusOne: " + (this._naluLengthSize - 1));
                            var d = 31 & a.getUint8(5);
                            if (0 === d) return void this._onError(m.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No SPS");
                            d > 1 && l.default.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " + d);
                            for (var h = 6, f = 0; f < d; f++) {
                                var _ = a.getUint16(h, !s);
                                if (h += 2, 0 !== _) {
                                    var p = new Uint8Array(e, t + h, _);
                                    h += _;
                                    var v = c.default.parseSPS(p);
                                    if (0 === f) {
                                        i.codecWidth = v.codec_size.width, i.codecHeight = v.codec_size.height, i.presentWidth = v.present_size.width, i.presentHeight = v.present_size.height, i.profile = v.profile_string, i.level = v.level_string, i.bitDepth = v.bit_depth, i.chromaFormat = v.chroma_format, i.sarRatio = v.sar_ratio, i.frameRate = v.frame_rate, !1 !== v.frame_rate.fixed && 0 !== v.frame_rate.fps_num && 0 !== v.frame_rate.fps_den || (i.frameRate = this._referenceFrameRate);
                                        var g = i.frameRate.fps_den,
                                            y = i.frameRate.fps_num;
                                        i.refSampleDuration = i.timescale * (g / y);
                                        for (var E = p.subarray(1, 4), b = "avc1.", S = 0; S < 3; S++) {
                                            var k = E[S].toString(16);
                                            k.length < 2 && (k = "0" + k), b += k
                                        }
                                        i.codec = b;
                                        var L = this._mediaInfo;
                                        L.width = i.codecWidth, L.height = i.codecHeight, L.fps = i.frameRate.fps, L.profile = i.profile, L.level = i.level, L.chromaFormat = v.chroma_format_string, L.sarNum = i.sarRatio.width, L.sarDen = i.sarRatio.height, L.videoCodec = b, L.hasAudio ? null != L.audioCodec && (L.mimeType = 'video/x-flv; codecs="' + L.videoCodec + "," + L.audioCodec + '"') : L.mimeType = 'video/x-flv; codecs="' + L.videoCodec + '"', L.isComplete() && this._onMediaInfo(L)
                                    }
                                }
                            }
                            var w = a.getUint8(h);
                            if (0 === w) return void this._onError(m.default.FORMAT_ERROR, "Flv: Invalid AVCDecoderConfigurationRecord: No PPS");
                            w > 1 && l.default.w(this.TAG, "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " + w), h++;
                            for (var R = 0; R < w; R++) {
                                var A = a.getUint16(h, !s);
                                h += 2, 0 !== A && (h += A)
                            }
                            i.avcc = new Uint8Array(n), i.avcc.set(new Uint8Array(e, t, n), 0), l.default.v(this.TAG, "Parsed AVCDecoderConfigurationRecord"), this._isInitialMetadataDispatched() ? this._dispatch && (this._audioTrack.length || this._videoTrack.length) && this._onDataAvailable(this._audioTrack, this._videoTrack) : this._videoInitialMetadataDispatched = !0, this._dispatch = !1, this._onTrackMetadata("video", i)
                        }
                    }, {
                        key: "_parseAVCVideoData",
                        value: function(e, t, n, i, r, s, a) {
                            for (var o = this._littleEndian, u = new DataView(e, t, n), d = [], h = 0, f = 0, c = this._naluLengthSize, _ = this._timestampBase + i, m = 1 === s; f < n;) {
                                if (f + 4 >= n) {
                                    l.default.w(this.TAG, "Malformed Nalu near timestamp " + _ + ", offset = " + f + ", dataSize = " + n);
                                    break
                                }
                                var p = u.getUint32(f, !o);
                                if (3 === c && (p >>>= 8), p > n - c) return void l.default.w(this.TAG, "Malformed Nalus near timestamp " + _ + ", NaluSize > DataSize!");
                                var v = 31 & u.getUint8(f + c);
                                5 === v && (m = !0);
                                var g = new Uint8Array(e, t + f, c + p),
                                    y = {
                                        type: v,
                                        data: g
                                    };
                                d.push(y), h += g.byteLength, f += c + p
                            }
                            if (d.length) {
                                var E = this._videoTrack,
                                    b = {
                                        units: d,
                                        length: h,
                                        isKeyframe: m,
                                        dts: _,
                                        cts: a,
                                        pts: _ + a
                                    };
                                m && (b.fileposition = r), E.samples.push(b), E.length += h
                            }
                        }
                    }, {
                        key: "onTrackMetadata",
                        get: function() {
                            return this._onTrackMetadata
                        },
                        set: function(e) {
                            this._onTrackMetadata = e
                        }
                    }, {
                        key: "onMediaInfo",
                        get: function() {
                            return this._onMediaInfo
                        },
                        set: function(e) {
                            this._onMediaInfo = e
                        }
                    }, {
                        key: "onError",
                        get: function() {
                            return this._onError
                        },
                        set: function(e) {
                            this._onError = e
                        }
                    }, {
                        key: "onDataAvailable",
                        get: function() {
                            return this._onDataAvailable
                        },
                        set: function(e) {
                            this._onDataAvailable = e
                        }
                    }, {
                        key: "timestampBase",
                        get: function() {
                            return this._timestampBase
                        },
                        set: function(e) {
                            this._timestampBase = e
                        }
                    }, {
                        key: "overridedDuration",
                        get: function() {
                            return this._duration
                        },
                        set: function(e) {
                            this._durationOverrided = !0, this._duration = e, this._mediaInfo.duration = e
                        }
                    }, {
                        key: "overridedHasAudio",
                        set: function(e) {
                            this._hasAudioFlagOverrided = !0, this._hasAudio = e, this._mediaInfo.hasAudio = e
                        }
                    }, {
                        key: "overridedHasVideo",
                        set: function(e) {
                            this._hasVideoFlagOverrided = !0, this._hasVideo = e, this._mediaInfo.hasVideo = e
                        }
                    }], [{
                        key: "probe",
                        value: function(e) {
                            var t = new Uint8Array(e),
                                n = {
                                    match: !1
                                };
                            if (70 !== t[0] || 76 !== t[1] || 86 !== t[2] || 1 !== t[3]) return n;
                            var i = (4 & t[4]) >>> 2 != 0,
                                r = 0 != (1 & t[4]),
                                a = s(t, 5);
                            return a < 9 ? n : {
                                match: !0,
                                consumed: a,
                                dataOffset: a,
                                hasAudioTrack: i,
                                hasVideoTrack: r
                            }
                        }
                    }]), e
                }();
            n.default = y
        }, {
            "../core/media-info.js": 7,
            "../utils/exception.js": 40,
            "../utils/logger.js": 41,
            "./amf-parser.js": 15,
            "./demux-errors.js": 16,
            "./sps-parser.js": 19
        }],
        19: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = e("./exp-golomb.js"),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(s),
                o = function() {
                    function e() {
                        i(this, e)
                    }
                    return r(e, null, [{
                        key: "_ebsp2rbsp",
                        value: function(e) {
                            for (var t = e, n = t.byteLength, i = new Uint8Array(n), r = 0, s = 0; s < n; s++) s >= 2 && 3 === t[s] && 0 === t[s - 1] && 0 === t[s - 2] || (i[r] = t[s], r++);
                            return new Uint8Array(i.buffer, 0, r)
                        }
                    }, {
                        key: "parseSPS",
                        value: function(t) {
                            var n = e._ebsp2rbsp(t),
                                i = new a.default(n);
                            i.readByte();
                            var r = i.readByte();
                            i.readByte();
                            var s = i.readByte();
                            i.readUEG();
                            var o = e.getProfileString(r),
                                u = e.getLevelString(s),
                                l = 1,
                                d = 420,
                                h = [0, 420, 422, 444],
                                f = 8;
                            if ((100 === r || 110 === r || 122 === r || 244 === r || 44 === r || 83 === r || 86 === r || 118 === r || 128 === r || 138 === r || 144 === r) && (l = i.readUEG(), 3 === l && i.readBits(1), l <= 3 && (d = h[l]), f = i.readUEG() + 8, i.readUEG(), i.readBits(1), i.readBool()))
                                for (var c = 3 !== l ? 8 : 12, _ = 0; _ < c; _++) i.readBool() && (_ < 6 ? e._skipScalingList(i, 16) : e._skipScalingList(i, 64));
                            i.readUEG();
                            var m = i.readUEG();
                            if (0 === m) i.readUEG();
                            else if (1 === m) {
                                i.readBits(1), i.readSEG(), i.readSEG();
                                for (var p = i.readUEG(), v = 0; v < p; v++) i.readSEG()
                            }
                            i.readUEG(), i.readBits(1);
                            var g = i.readUEG(),
                                y = i.readUEG(),
                                E = i.readBits(1);
                            0 === E && i.readBits(1), i.readBits(1);
                            var b = 0,
                                S = 0,
                                k = 0,
                                L = 0;
                            i.readBool() && (b = i.readUEG(), S = i.readUEG(), k = i.readUEG(), L = i.readUEG());
                            var w = 1,
                                R = 1,
                                A = 0,
                                O = !0,
                                T = 0,
                                C = 0;
                            if (i.readBool()) {
                                if (i.readBool()) {
                                    var I = i.readByte(),
                                        x = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2],
                                        M = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
                                    I > 0 && I < 16 ? (w = x[I - 1], R = M[I - 1]) : 255 === I && (w = i.readByte() << 8 | i.readByte(), R = i.readByte() << 8 | i.readByte())
                                }
                                if (i.readBool() && i.readBool(), i.readBool() && (i.readBits(4), i.readBool() && i.readBits(24)), i.readBool() && (i.readUEG(), i.readUEG()), i.readBool()) {
                                    var D = i.readBits(32),
                                        B = i.readBits(32);
                                    O = i.readBool(), T = B, C = 2 * D, A = T / C
                                }
                            }
                            var j = 1;
                            1 === w && 1 === R || (j = w / R);
                            var P = 0,
                                U = 0;
                            if (0 === l) P = 1, U = 2 - E;
                            else {
                                var N = 3 === l ? 1 : 2,
                                    F = 1 === l ? 2 : 1;
                                P = N, U = F * (2 - E)
                            }
                            var G = 16 * (g + 1),
                                V = 16 * (y + 1) * (2 - E);
                            G -= (b + S) * P, V -= (k + L) * U;
                            var z = Math.ceil(G * j);
                            return i.destroy(), i = null, {
                                profile_string: o,
                                level_string: u,
                                bit_depth: f,
                                chroma_format: d,
                                chroma_format_string: e.getChromaFormatString(d),
                                frame_rate: {
                                    fixed: O,
                                    fps: A,
                                    fps_den: C,
                                    fps_num: T
                                },
                                sar_ratio: {
                                    width: w,
                                    height: R
                                },
                                codec_size: {
                                    width: G,
                                    height: V
                                },
                                present_size: {
                                    width: z,
                                    height: V
                                }
                            }
                        }
                    }, {
                        key: "_skipScalingList",
                        value: function(e, t) {
                            for (var n = 8, i = 8, r = 0, s = 0; s < t; s++) 0 !== i && (r = e.readSEG(), i = (n + r + 256) % 256), n = 0 === i ? n : i
                        }
                    }, {
                        key: "getProfileString",
                        value: function(e) {
                            switch (e) {
                                case 66:
                                    return "Baseline";
                                case 77:
                                    return "Main";
                                case 88:
                                    return "Extended";
                                case 100:
                                    return "High";
                                case 110:
                                    return "High10";
                                case 122:
                                    return "High422";
                                case 244:
                                    return "High444";
                                default:
                                    return "Unknown"
                            }
                        }
                    }, {
                        key: "getLevelString",
                        value: function(e) {
                            return (e / 10).toFixed(1)
                        }
                    }, {
                        key: "getChromaFormatString",
                        value: function(e) {
                            switch (e) {
                                case 420:
                                    return "4:2:0";
                                case 422:
                                    return "4:2:2";
                                case 444:
                                    return "4:4:4";
                                default:
                                    return "Unknown"
                            }
                        }
                    }]), e
                }();
            n.default = o
        }, {
            "./exp-golomb.js": 17
        }],
        20: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                var n = e;
                if (null == n || "object" !== (void 0 === n ? "undefined" : o(n))) throw new b.InvalidArgumentException("MediaDataSource must be an javascript object!");
                if (!n.hasOwnProperty("type")) throw new b.InvalidArgumentException("MediaDataSource must has type field to indicate video file type!");
                switch (n.type) {
                    case "flv":
                        return new c.default(n, t);
                    default:
                        return new m.default(n, t)
                }
            }

            function s() {
                return h.default.supportMSEH264Playback()
            }

            function a() {
                return h.default.getFeatureList()
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                u = e("./utils/polyfill.js"),
                l = i(u),
                d = e("./core/features.js"),
                h = i(d),
                f = e("./player/flv-player.js"),
                c = i(f),
                _ = e("./player/native-player.js"),
                m = i(_),
                p = e("./player/player-events.js"),
                v = i(p),
                g = e("./player/player-errors.js"),
                y = e("./utils/logging-control.js"),
                E = i(y),
                b = e("./utils/exception.js");
            l.default.install();
            var S = {};
            S.createPlayer = r, S.isSupported = s, S.getFeatureList = a, S.Events = v.default, S.ErrorTypes = g.ErrorTypes, S.ErrorDetails = g.ErrorDetails, S.FlvPlayer = c.default, S.NativePlayer = m.default, S.LoggingControl = E.default, Object.defineProperty(S, "version", {
                enumerable: !0,
                get: function() {
                    return "1.3.3"
                }
            }), n.default = S
        }, {
            "./core/features.js": 6,
            "./player/flv-player.js": 32,
            "./player/native-player.js": 33,
            "./player/player-errors.js": 34,
            "./player/player-events.js": 35,
            "./utils/exception.js": 40,
            "./utils/logging-control.js": 42,
            "./utils/polyfill.js": 43
        }],
        21: [function(e, t, n) {
            "use strict";
            t.exports = e("./flv.js").default
        }, {
            "./flv.js": 20
        }],
        22: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                u = function e(t, n, i) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === r) {
                        var s = Object.getPrototypeOf(t);
                        return null === s ? void 0 : e(s, n, i)
                    }
                    if ("value" in r) return r.value;
                    var a = r.get;
                    if (void 0 !== a) return a.call(i)
                },
                l = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                d = e("../utils/logger.js"),
                h = (i(d), e("../utils/browser.js")),
                f = i(h),
                c = e("./loader.js"),
                _ = e("../utils/exception.js"),
                m = function(e) {
                    function t(e, n) {
                        r(this, t);
                        var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "fetch-stream-loader"));
                        return i.TAG = "FetchStreamLoader", i._seekHandler = e, i._config = n, i._needStash = !0, i._requestAbort = !1, i._contentLength = null, i._receivedLength = 0, i
                    }
                    return a(t, e), l(t, null, [{
                        key: "isSupported",
                        value: function() {
                            try {
                                var e = f.default.msedge && f.default.version.minor >= 15048,
                                    t = !f.default.msedge || e;
                                return self.fetch && self.ReadableStream && t
                            } catch (e) {
                                return !1
                            }
                        }
                    }]), l(t, [{
                        key: "destroy",
                        value: function() {
                            this.isWorking() && this.abort(), u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "open",
                        value: function(e, t) {
                            var n = this;
                            this._dataSource = e, this._range = t;
                            var i = e.url;
                            this._config.reuseRedirectedURL && void 0 != e.redirectedURL && (i = e.redirectedURL);
                            var r = this._seekHandler.getConfig(i, t),
                                s = new self.Headers;
                            if ("object" === o(r.headers)) {
                                var a = r.headers;
                                for (var u in a) a.hasOwnProperty(u) && s.append(u, a[u])
                            }
                            var l = {
                                method: "GET",
                                headers: s,
                                mode: "cors",
                                cache: "default",
                                referrerPolicy: "no-referrer-when-downgrade"
                            };
                            !1 === e.cors && (l.mode = "same-origin"), e.withCredentials && (l.credentials = "include"), e.referrerPolicy && (l.referrerPolicy = e.referrerPolicy), this._status = c.LoaderStatus.kConnecting, self.fetch(r.url, l).then(function(e) {
                                if (n._requestAbort) return n._requestAbort = !1, void(n._status = c.LoaderStatus.kIdle);
                                if (e.ok && e.status >= 200 && e.status <= 299) {
                                    if (e.url !== r.url && n._onURLRedirect) {
                                        var t = n._seekHandler.removeURLParameters(e.url);
                                        n._onURLRedirect(t)
                                    }
                                    var i = e.headers.get("Content-Length");
                                    return null != i && (n._contentLength = parseInt(i), 0 !== n._contentLength && n._onContentLengthKnown && n._onContentLengthKnown(n._contentLength)), n._pump.call(n, e.body.getReader())
                                }
                                if (n._status = c.LoaderStatus.kError, !n._onError) throw new _.RuntimeException("FetchStreamLoader: Http code invalid, " + e.status + " " + e.statusText);
                                n._onError(c.LoaderErrors.HTTP_STATUS_CODE_INVALID, {
                                    code: e.status,
                                    msg: e.statusText
                                })
                            }).catch(function(e) {
                                if (n._status = c.LoaderStatus.kError, !n._onError) throw e;
                                n._onError(c.LoaderErrors.EXCEPTION, {
                                    code: -1,
                                    msg: e.message
                                })
                            })
                        }
                    }, {
                        key: "abort",
                        value: function() {
                            this._requestAbort = !0
                        }
                    }, {
                        key: "_pump",
                        value: function(e) {
                            var t = this;
                            return e.read().then(function(n) {
                                if (n.done) t._status = c.LoaderStatus.kComplete, t._onComplete && t._onComplete(t._range.from, t._range.from + t._receivedLength - 1);
                                else {
                                    if (!0 === t._requestAbort) return t._requestAbort = !1, t._status = c.LoaderStatus.kComplete, e.cancel();
                                    t._status = c.LoaderStatus.kBuffering;
                                    var i = n.value.buffer,
                                        r = t._range.from + t._receivedLength;
                                    t._receivedLength += i.byteLength, t._onDataArrival && t._onDataArrival(i, r, t._receivedLength), t._pump(e)
                                }
                            }).catch(function(e) {
                                if (11 !== e.code || !f.default.msedge) {
                                    t._status = c.LoaderStatus.kError;
                                    var n = 0,
                                        i = null;
                                    if (19 !== e.code && "network error" !== e.message || !(null === t._contentLength || null !== t._contentLength && t._receivedLength < t._contentLength) ? (n = c.LoaderErrors.EXCEPTION, i = {
                                            code: e.code,
                                            msg: e.message
                                        }) : (n = c.LoaderErrors.EARLY_EOF, i = {
                                            code: e.code,
                                            msg: "Fetch stream meet Early-EOF"
                                        }), !t._onError) throw new _.RuntimeException(i.msg);
                                    t._onError(n, i)
                                }
                            })
                        }
                    }]), t
                }(c.BaseLoader);
            n.default = m
        }, {
            "../utils/browser.js": 39,
            "../utils/exception.js": 40,
            "../utils/logger.js": 41,
            "./loader.js": 24
        }],
        23: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                a = e("../utils/logger.js"),
                o = i(a),
                u = e("./speed-sampler.js"),
                l = i(u),
                d = e("./loader.js"),
                h = e("./fetch-stream-loader.js"),
                f = i(h),
                c = e("./xhr-moz-chunked-loader.js"),
                _ = i(c),
                m = e("./xhr-msstream-loader.js"),
                p = (i(m), e("./xhr-range-loader.js")),
                v = i(p),
                g = e("./websocket-loader.js"),
                y = i(g),
                E = e("./range-seek-handler.js"),
                b = i(E),
                S = e("./param-seek-handler.js"),
                k = i(S),
                L = e("../utils/exception.js"),
                w = function() {
                    function e(t, n, i) {
                        r(this, e), this.TAG = "IOController", this._config = n, this._extraData = i, this._stashInitialSize = 393216, void 0 != n.stashInitialSize && n.stashInitialSize > 0 && (this._stashInitialSize = n.stashInitialSize), this._stashUsed = 0, this._stashSize = this._stashInitialSize, this._bufferSize = 3145728, this._stashBuffer = new ArrayBuffer(this._bufferSize), this._stashByteStart = 0, this._enableStash = !0, !1 === n.enableStashBuffer && (this._enableStash = !1), this._loader = null, this._loaderClass = null, this._seekHandler = null, this._dataSource = t, this._isWebSocketURL = /wss?:\/\/(.+?)/.test(t.url), this._refTotalLength = t.filesize ? t.filesize : null, this._totalLength = this._refTotalLength, this._fullRequestFlag = !1, this._currentRange = null, this._redirectedURL = null, this._speedNormalized = 0, this._speedSampler = new l.default, this._speedNormalizeList = [64, 128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096], this._isEarlyEofReconnecting = !1, this._paused = !1, this._resumeFrom = 0, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._selectSeekHandler(), this._selectLoader(), this._createLoader()
                    }
                    return s(e, [{
                        key: "destroy",
                        value: function() {
                            this._loader.isWorking() && this._loader.abort(), this._loader.destroy(), this._loader = null, this._loaderClass = null, this._dataSource = null, this._stashBuffer = null, this._stashUsed = this._stashSize = this._bufferSize = this._stashByteStart = 0, this._currentRange = null, this._speedSampler = null, this._isEarlyEofReconnecting = !1, this._onDataArrival = null, this._onSeeked = null, this._onError = null, this._onComplete = null, this._onRedirect = null, this._onRecoveredEarlyEof = null, this._extraData = null
                        }
                    }, {
                        key: "isWorking",
                        value: function() {
                            return this._loader && this._loader.isWorking() && !this._paused
                        }
                    }, {
                        key: "isPaused",
                        value: function() {
                            return this._paused
                        }
                    }, {
                        key: "_selectSeekHandler",
                        value: function() {
                            var e = this._config;
                            if ("range" === e.seekType) this._seekHandler = new b.default(this._config.rangeLoadZeroStart);
                            else if ("param" === e.seekType) {
                                var t = e.seekParamStart || "bstart",
                                    n = e.seekParamEnd || "bend";
                                this._seekHandler = new k.default(t, n)
                            } else {
                                if ("custom" !== e.seekType) throw new L.InvalidArgumentException("Invalid seekType in config: " + e.seekType);
                                if ("function" != typeof e.customSeekHandler) throw new L.InvalidArgumentException("Custom seekType specified in config but invalid customSeekHandler!");
                                this._seekHandler = new e.customSeekHandler
                            }
                        }
                    }, {
                        key: "_selectLoader",
                        value: function() {
                            if (this._isWebSocketURL) this._loaderClass = y.default;
                            else if (f.default.isSupported()) this._loaderClass = f.default;
                            else if (_.default.isSupported()) this._loaderClass = _.default;
                            else {
                                if (!v.default.isSupported()) throw new L.RuntimeException("Your browser doesn't support xhr with arraybuffer responseType!");
                                this._loaderClass = v.default
                            }
                        }
                    }, {
                        key: "_createLoader",
                        value: function() {
                            this._loader = new this._loaderClass(this._seekHandler, this._config), !1 === this._loader.needStashBuffer && (this._enableStash = !1), this._loader.onContentLengthKnown = this._onContentLengthKnown.bind(this), this._loader.onURLRedirect = this._onURLRedirect.bind(this), this._loader.onDataArrival = this._onLoaderChunkArrival.bind(this), this._loader.onComplete = this._onLoaderComplete.bind(this), this._loader.onError = this._onLoaderError.bind(this)
                        }
                    }, {
                        key: "open",
                        value: function(e) {
                            this._currentRange = {
                                from: 0,
                                to: -1
                            }, e && (this._currentRange.from = e), this._speedSampler.reset(), e || (this._fullRequestFlag = !0), this._loader.open(this._dataSource, Object.assign({}, this._currentRange))
                        }
                    }, {
                        key: "abort",
                        value: function() {
                            this._loader.abort(), this._paused && (this._paused = !1, this._resumeFrom = 0)
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.isWorking() && (this._loader.abort(), 0 !== this._stashUsed ? (this._resumeFrom = this._stashByteStart, this._currentRange.to = this._stashByteStart - 1) : this._resumeFrom = this._currentRange.to + 1, this._stashUsed = 0, this._stashByteStart = 0, this._paused = !0)
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            if (this._paused) {
                                this._paused = !1;
                                var e = this._resumeFrom;
                                this._resumeFrom = 0, this._internalSeek(e, !0)
                            }
                        }
                    }, {
                        key: "seek",
                        value: function(e) {
                            this._paused = !1, this._stashUsed = 0, this._stashByteStart = 0, this._internalSeek(e, !0)
                        }
                    }, {
                        key: "_internalSeek",
                        value: function(e, t) {
                            this._loader.isWorking() && this._loader.abort(), this._flushStashBuffer(t), this._loader.destroy(), this._loader = null;
                            var n = {
                                from: e,
                                to: -1
                            };
                            this._currentRange = {
                                from: n.from,
                                to: -1
                            }, this._speedSampler.reset(), this._stashSize = this._stashInitialSize, this._createLoader(), this._loader.open(this._dataSource, n), this._onSeeked && this._onSeeked()
                        }
                    }, {
                        key: "updateUrl",
                        value: function(e) {
                            if (!e || "string" != typeof e || 0 === e.length) throw new L.InvalidArgumentException("Url must be a non-empty string!");
                            this._dataSource.url = e
                        }
                    }, {
                        key: "_expandBuffer",
                        value: function(e) {
                            for (var t = this._stashSize; t + 1048576 < e;) t *= 2;
                            if ((t += 1048576) !== this._bufferSize) {
                                var n = new ArrayBuffer(t);
                                if (this._stashUsed > 0) {
                                    var i = new Uint8Array(this._stashBuffer, 0, this._stashUsed);
                                    new Uint8Array(n, 0, t).set(i, 0)
                                }
                                this._stashBuffer = n, this._bufferSize = t
                            }
                        }
                    }, {
                        key: "_normalizeSpeed",
                        value: function(e) {
                            var t = this._speedNormalizeList,
                                n = t.length - 1,
                                i = 0,
                                r = 0,
                                s = n;
                            if (e < t[0]) return t[0];
                            for (; r <= s;) {
                                if ((i = r + Math.floor((s - r) / 2)) === n || e >= t[i] && e < t[i + 1]) return t[i];
                                t[i] < e ? r = i + 1 : s = i - 1
                            }
                        }
                    }, {
                        key: "_adjustStashSize",
                        value: function(e) {
                            var t = 0;
                            (t = this._config.isLive ? e : e < 512 ? e : e >= 512 && e <= 1024 ? Math.floor(1.5 * e) : 2 * e) > 8192 && (t = 8192);
                            var n = 1024 * t + 1048576;
                            this._bufferSize < n && this._expandBuffer(n), this._stashSize = 1024 * t
                        }
                    }, {
                        key: "_dispatchChunks",
                        value: function(e, t) {
                            return this._currentRange.to = t + e.byteLength - 1, this._onDataArrival(e, t)
                        }
                    }, {
                        key: "_onURLRedirect",
                        value: function(e) {
                            this._redirectedURL = e, this._onRedirect && this._onRedirect(e)
                        }
                    }, {
                        key: "_onContentLengthKnown",
                        value: function(e) {
                            e && this._fullRequestFlag && (this._totalLength = e, this._fullRequestFlag = !1)
                        }
                    }, {
                        key: "_onLoaderChunkArrival",
                        value: function(e, t, n) {
                            if (!this._onDataArrival) throw new L.IllegalStateException("IOController: No existing consumer (onDataArrival) callback!");
                            if (!this._paused) {
                                this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()), this._speedSampler.addBytes(e.byteLength);
                                var i = this._speedSampler.lastSecondKBps;
                                if (0 !== i) {
                                    var r = this._normalizeSpeed(i);
                                    this._speedNormalized !== r && (this._speedNormalized = r, this._adjustStashSize(r))
                                }
                                if (this._enableStash)
                                    if (0 === this._stashUsed && 0 === this._stashByteStart && (this._stashByteStart = t), this._stashUsed + e.byteLength <= this._stashSize) {
                                        var s = new Uint8Array(this._stashBuffer, 0, this._stashSize);
                                        s.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength
                                    } else {
                                        var a = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                                        if (this._stashUsed > 0) {
                                            var o = this._stashBuffer.slice(0, this._stashUsed),
                                                u = this._dispatchChunks(o, this._stashByteStart);
                                            if (u < o.byteLength) {
                                                if (u > 0) {
                                                    var l = new Uint8Array(o, u);
                                                    a.set(l, 0), this._stashUsed = l.byteLength, this._stashByteStart += u
                                                }
                                            } else this._stashUsed = 0, this._stashByteStart += u;
                                            this._stashUsed + e.byteLength > this._bufferSize && (this._expandBuffer(this._stashUsed + e.byteLength), a = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), a.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength
                                        } else {
                                            var d = this._dispatchChunks(e, t);
                                            if (d < e.byteLength) {
                                                var h = e.byteLength - d;
                                                h > this._bufferSize && (this._expandBuffer(h), a = new Uint8Array(this._stashBuffer, 0, this._bufferSize)), a.set(new Uint8Array(e, d), 0), this._stashUsed += h, this._stashByteStart = t + d
                                            }
                                        }
                                    } else if (0 === this._stashUsed) {
                                    var f = this._dispatchChunks(e, t);
                                    if (f < e.byteLength) {
                                        var c = e.byteLength - f;
                                        c > this._bufferSize && this._expandBuffer(c);
                                        var _ = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                                        _.set(new Uint8Array(e, f), 0), this._stashUsed += c, this._stashByteStart = t + f
                                    }
                                } else {
                                    this._stashUsed + e.byteLength > this._bufferSize && this._expandBuffer(this._stashUsed + e.byteLength);
                                    var m = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                                    m.set(new Uint8Array(e), this._stashUsed), this._stashUsed += e.byteLength;
                                    var p = this._dispatchChunks(this._stashBuffer.slice(0, this._stashUsed), this._stashByteStart);
                                    if (p < this._stashUsed && p > 0) {
                                        var v = new Uint8Array(this._stashBuffer, p);
                                        m.set(v, 0)
                                    }
                                    this._stashUsed -= p, this._stashByteStart += p
                                }
                            }
                        }
                    }, {
                        key: "_flushStashBuffer",
                        value: function(e) {
                            if (this._stashUsed > 0) {
                                var t = this._stashBuffer.slice(0, this._stashUsed),
                                    n = this._dispatchChunks(t, this._stashByteStart),
                                    i = t.byteLength - n;
                                if (n < t.byteLength) {
                                    if (!e) {
                                        if (n > 0) {
                                            var r = new Uint8Array(this._stashBuffer, 0, this._bufferSize),
                                                s = new Uint8Array(t, n);
                                            r.set(s, 0), this._stashUsed = s.byteLength, this._stashByteStart += n
                                        }
                                        return 0
                                    }
                                    o.default.w(this.TAG, i + " bytes unconsumed data remain when flush buffer, dropped")
                                }
                                return this._stashUsed = 0, this._stashByteStart = 0, i
                            }
                            return 0
                        }
                    }, {
                        key: "_onLoaderComplete",
                        value: function(e, t) {
                            this._flushStashBuffer(!0), this._onComplete && this._onComplete(this._extraData)
                        }
                    }, {
                        key: "_onLoaderError",
                        value: function(e, t) {
                            switch (o.default.e(this.TAG, "Loader error, code = " + t.code + ", msg = " + t.msg), this._flushStashBuffer(!1), this._isEarlyEofReconnecting && (this._isEarlyEofReconnecting = !1, e = d.LoaderErrors.UNRECOVERABLE_EARLY_EOF), e) {
                                case d.LoaderErrors.EARLY_EOF:
                                    if (!this._config.isLive && this._totalLength) {
                                        var n = this._currentRange.to + 1;
                                        return void(n < this._totalLength && (o.default.w(this.TAG, "Connection lost, trying reconnect..."), this._isEarlyEofReconnecting = !0, this._internalSeek(n, !1)))
                                    }
                                    e = d.LoaderErrors.UNRECOVERABLE_EARLY_EOF;
                                    break;
                                case d.LoaderErrors.UNRECOVERABLE_EARLY_EOF:
                                case d.LoaderErrors.CONNECTING_TIMEOUT:
                                case d.LoaderErrors.HTTP_STATUS_CODE_INVALID:
                                case d.LoaderErrors.EXCEPTION:
                            }
                            if (!this._onError) throw new L.RuntimeException("IOException: " + t.msg);
                            this._onError(e, t)
                        }
                    }, {
                        key: "status",
                        get: function() {
                            return this._loader.status
                        }
                    }, {
                        key: "extraData",
                        get: function() {
                            return this._extraData
                        },
                        set: function(e) {
                            this._extraData = e
                        }
                    }, {
                        key: "onDataArrival",
                        get: function() {
                            return this._onDataArrival
                        },
                        set: function(e) {
                            this._onDataArrival = e
                        }
                    }, {
                        key: "onSeeked",
                        get: function() {
                            return this._onSeeked
                        },
                        set: function(e) {
                            this._onSeeked = e
                        }
                    }, {
                        key: "onError",
                        get: function() {
                            return this._onError
                        },
                        set: function(e) {
                            this._onError = e
                        }
                    }, {
                        key: "onComplete",
                        get: function() {
                            return this._onComplete
                        },
                        set: function(e) {
                            this._onComplete = e
                        }
                    }, {
                        key: "onRedirect",
                        get: function() {
                            return this._onRedirect
                        },
                        set: function(e) {
                            this._onRedirect = e
                        }
                    }, {
                        key: "onRecoveredEarlyEof",
                        get: function() {
                            return this._onRecoveredEarlyEof
                        },
                        set: function(e) {
                            this._onRecoveredEarlyEof = e
                        }
                    }, {
                        key: "currentURL",
                        get: function() {
                            return this._dataSource.url
                        }
                    }, {
                        key: "hasRedirect",
                        get: function() {
                            return null != this._redirectedURL || void 0 != this._dataSource.redirectedURL
                        }
                    }, {
                        key: "currentRedirectedURL",
                        get: function() {
                            return this._redirectedURL || this._dataSource.redirectedURL
                        }
                    }, {
                        key: "currentSpeed",
                        get: function() {
                            return this._loaderClass === v.default ? this._loader.currentSpeed : this._speedSampler.lastSecondKBps
                        }
                    }, {
                        key: "loaderType",
                        get: function() {
                            return this._loader.type
                        }
                    }]), e
                }();
            n.default = w
        }, {
            "../utils/exception.js": 40,
            "../utils/logger.js": 41,
            "./fetch-stream-loader.js": 22,
            "./loader.js": 24,
            "./param-seek-handler.js": 25,
            "./range-seek-handler.js": 26,
            "./speed-sampler.js": 27,
            "./websocket-loader.js": 28,
            "./xhr-moz-chunked-loader.js": 29,
            "./xhr-msstream-loader.js": 30,
            "./xhr-range-loader.js": 31
        }],
        24: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.BaseLoader = n.LoaderErrors = n.LoaderStatus = void 0;
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = e("../utils/exception.js"),
                a = n.LoaderStatus = {
                    kIdle: 0,
                    kConnecting: 1,
                    kBuffering: 2,
                    kError: 3,
                    kComplete: 4
                };
            n.LoaderErrors = {
                OK: "OK",
                EXCEPTION: "Exception",
                HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid",
                CONNECTING_TIMEOUT: "ConnectingTimeout",
                EARLY_EOF: "EarlyEof",
                UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof"
            }, n.BaseLoader = function() {
                function e(t) {
                    i(this, e), this._type = t || "undefined", this._status = a.kIdle, this._needStash = !1, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null
                }
                return r(e, [{
                    key: "destroy",
                    value: function() {
                        this._status = a.kIdle, this._onContentLengthKnown = null, this._onURLRedirect = null, this._onDataArrival = null, this._onError = null, this._onComplete = null
                    }
                }, {
                    key: "isWorking",
                    value: function() {
                        return this._status === a.kConnecting || this._status === a.kBuffering
                    }
                }, {
                    key: "open",
                    value: function(e, t) {
                        throw new s.NotImplementedException("Unimplemented abstract function!")
                    }
                }, {
                    key: "abort",
                    value: function() {
                        throw new s.NotImplementedException("Unimplemented abstract function!")
                    }
                }, {
                    key: "type",
                    get: function() {
                        return this._type
                    }
                }, {
                    key: "status",
                    get: function() {
                        return this._status
                    }
                }, {
                    key: "needStashBuffer",
                    get: function() {
                        return this._needStash
                    }
                }, {
                    key: "onContentLengthKnown",
                    get: function() {
                        return this._onContentLengthKnown
                    },
                    set: function(e) {
                        this._onContentLengthKnown = e
                    }
                }, {
                    key: "onURLRedirect",
                    get: function() {
                        return this._onURLRedirect
                    },
                    set: function(e) {
                        this._onURLRedirect = e
                    }
                }, {
                    key: "onDataArrival",
                    get: function() {
                        return this._onDataArrival
                    },
                    set: function(e) {
                        this._onDataArrival = e
                    }
                }, {
                    key: "onError",
                    get: function() {
                        return this._onError
                    },
                    set: function(e) {
                        this._onError = e
                    }
                }, {
                    key: "onComplete",
                    get: function() {
                        return this._onComplete
                    },
                    set: function(e) {
                        this._onComplete = e
                    }
                }]), e
            }()
        }, {
            "../utils/exception.js": 40
        }],
        25: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function() {
                    function e(t, n) {
                        i(this, e), this._startName = t, this._endName = n
                    }
                    return r(e, [{
                        key: "getConfig",
                        value: function(e, t) {
                            var n = e;
                            if (0 !== t.from || -1 !== t.to) {
                                var i = !0; - 1 === n.indexOf("?") && (n += "?", i = !1), i && (n += "&"), n += this._startName + "=" + t.from.toString(), -1 !== t.to && (n += "&" + this._endName + "=" + t.to.toString())
                            }
                            return {
                                url: n,
                                headers: {}
                            }
                        }
                    }, {
                        key: "removeURLParameters",
                        value: function(e) {
                            var t = e.split("?")[0],
                                n = void 0,
                                i = e.indexOf("?"); - 1 !== i && (n = e.substring(i + 1));
                            var r = "";
                            if (void 0 != n && n.length > 0)
                                for (var s = n.split("&"), a = 0; a < s.length; a++) {
                                    var o = s[a].split("="),
                                        u = a > 0;
                                    o[0] !== this._startName && o[0] !== this._endName && (u && (r += "&"), r += s[a])
                                }
                            return 0 === r.length ? t : t + "?" + r
                        }
                    }]), e
                }();
            n.default = s
        }, {}],
        26: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function() {
                    function e(t) {
                        i(this, e), this._zeroStart = t || !1
                    }
                    return r(e, [{
                        key: "getConfig",
                        value: function(e, t) {
                            var n = {};
                            if (0 !== t.from || -1 !== t.to) {
                                var i = void 0;
                                i = -1 !== t.to ? "bytes=" + t.from.toString() + "-" + t.to.toString() : "bytes=" + t.from.toString() + "-", n.Range = i
                            } else this._zeroStart && (n.Range = "bytes=0-");
                            return {
                                url: e,
                                headers: n
                            }
                        }
                    }, {
                        key: "removeURLParameters",
                        value: function(e) {
                            return e
                        }
                    }]), e
                }();
            n.default = s
        }, {}],
        27: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function() {
                    function e() {
                        i(this, e), this._firstCheckpoint = 0, this._lastCheckpoint = 0, this._intervalBytes = 0, this._totalBytes = 0, this._lastSecondBytes = 0, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now
                    }
                    return r(e, [{
                        key: "reset",
                        value: function() {
                            this._firstCheckpoint = this._lastCheckpoint = 0, this._totalBytes = this._intervalBytes = 0, this._lastSecondBytes = 0
                        }
                    }, {
                        key: "addBytes",
                        value: function(e) {
                            0 === this._firstCheckpoint ? (this._firstCheckpoint = this._now(), this._lastCheckpoint = this._firstCheckpoint, this._intervalBytes += e, this._totalBytes += e) : this._now() - this._lastCheckpoint < 1e3 ? (this._intervalBytes += e, this._totalBytes += e) : (this._lastSecondBytes = this._intervalBytes, this._intervalBytes = e, this._totalBytes += e, this._lastCheckpoint = this._now())
                        }
                    }, {
                        key: "currentKBps",
                        get: function() {
                            this.addBytes(0);
                            var e = (this._now() - this._lastCheckpoint) / 1e3;
                            return 0 == e && (e = 1), this._intervalBytes / e / 1024
                        }
                    }, {
                        key: "lastSecondKBps",
                        get: function() {
                            return this.addBytes(0), 0 !== this._lastSecondBytes ? this._lastSecondBytes / 1024 : this._now() - this._lastCheckpoint >= 500 ? this.currentKBps : 0
                        }
                    }, {
                        key: "averageKBps",
                        get: function() {
                            var e = (this._now() - this._firstCheckpoint) / 1e3;
                            return this._totalBytes / e / 1024
                        }
                    }]), e
                }();
            n.default = s
        }, {}],
        28: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function r(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = function e(t, n, i) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === r) {
                        var s = Object.getPrototypeOf(t);
                        return null === s ? void 0 : e(s, n, i)
                    }
                    if ("value" in r) return r.value;
                    var a = r.get;
                    if (void 0 !== a) return a.call(i)
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                u = e("../utils/logger.js"),
                l = (function(e) {
                    e && e.__esModule
                }(u), e("./loader.js")),
                d = e("../utils/exception.js"),
                h = function(e) {
                    function t() {
                        i(this, t);
                        var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "websocket-loader"));
                        return e.TAG = "WebSocketLoader", e._needStash = !0, e._ws = null, e._requestAbort = !1, e._receivedLength = 0, e
                    }
                    return s(t, e), o(t, null, [{
                        key: "isSupported",
                        value: function() {
                            try {
                                return void 0 !== self.WebSocket
                            } catch (e) {
                                return !1
                            }
                        }
                    }]), o(t, [{
                        key: "destroy",
                        value: function() {
                            this._ws && this.abort(), a(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "open",
                        value: function(e) {
                            try {
                                l._toUTC = function(){
                                    var now = new Date();
                                    return (new Date(now.getTime() + now.getTimezoneOffset() * 60000));
                                }
                                var _this = this;
                                var t = _this._ws = io(e.url,{
                                    transports:['websocket']
                                });
                                l._ws = t;
                                if(!e.config.maxLatency){
                                    l._maxLatency = 1000;
                                }else{
                                    l._maxLatency = parseFloat(e.config.maxLatency);
                                }
                                t.on('connect',function(res){
                                    t.emit('FLV',{
                                        ke:e.config.ke,
                                        id:e.config.id,
                                        auth:e.config.auth_token,
                                        uid:e.config.uid,
                                        channel:e.config.channel,
                                    });
                                    _this._status = l.LoaderStatus.kBuffering;
                                });
                                t.on('disconnect',function(){
                                    if (!0 === this._requestAbort) return void(this._requestAbort = !1);
                                    this._status = l.LoaderStatus.kComplete, this._onComplete && this._onComplete(0, this._receivedLength - 1)
                                    l._ws.connect()
                                });
                                t.on('data',_this._onWebSocketMessage.bind(_this));
                                t.on('error',_this._onWebSocketError.bind(_this));
                                _this._status = l.LoaderStatus.kConnecting;
                                l.averageCreate = true;
                                l.averageArray = [];
                            } catch (e) {
                                this._status = l.LoaderStatus.kError;
                                var n = {
                                    code: e.code,
                                    msg: e.message
                                };
                                if (!this._onError) throw new d.RuntimeException(n.msg);
                                this._onError(l.LoaderErrors.EXCEPTION, n)
                            }
                        }
                    }, {
                        key: "abort",
                        value: function() {
                            var e = this._ws;
                            e.disconnect()
                        }
                    }, {
                        key: "_onWebSocketMessage",
                        value: function(e) {
                            //check date
                            var latency = new Date() - new Date(e.time)
                            if(l.averageCreate){
                                if(l.averageArray.length<5){
                                    l.averageArray.push(latency)
                                }else{
                                    l.averageCreate = false;
                                    var maxLatency = 0;
                                    l.averageArray.forEach(function(v,n){
                                        maxLatency += v;
                                    })
                                    l._maxLatency = (maxLatency / l.averageArray.length) + 500;
                                }
                            }
//                            if(latency < l._maxLatency){
                                ///process frame
                                var t = this;
                                if (e.buffer instanceof ArrayBuffer) this._dispatchArrayBuffer(e.buffer);
                                else if (e.buffer instanceof Blob) {
                                    var n = new FileReader;
                                    n.onload = function() {
                                        t._dispatchArrayBuffer(n.result)
                                    }, n.readAsArrayBuffer(e.buffer)
                                } else {
                                    this._status = l.LoaderStatus.kError;
                                    var i = {
                                        code: -1,
                                        msg: "Unsupported WebSocket message type: " + e.buffer.constructor.name
                                    };
                                    if (!this._onError) throw new d.RuntimeException(i.msg);
                                    this._onError(l.LoaderErrors.EXCEPTION, i)
                                }
//                            }else{
                                if(latency > l._maxLatency){
                                    l._ws.disconnect()
                                }
//                            }
                        }
                    }, {
                        key: "_dispatchArrayBuffer",
                        value: function(e) {
                            var t = e,
                                n = this._receivedLength;
                            this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, n, this._receivedLength)
                        }
                    }, {
                        key: "_onWebSocketError",
                        value: function(e) {
                            this._status = l.LoaderStatus.kError;
                            var t = {
                                code: e.code,
                                msg: e.message
                            };
                            if (!this._onError) throw new d.RuntimeException(t.msg);
                            this._onError(l.LoaderErrors.EXCEPTION, t)
                        }
                    }]), t
                }(l.BaseLoader);
            n.default = h
        }, {
            "../utils/exception.js": 40,
            "../utils/logger.js": 41,
            "./loader.js": 24
        }],
        29: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function r(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = function e(t, n, i) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === r) {
                        var s = Object.getPrototypeOf(t);
                        return null === s ? void 0 : e(s, n, i)
                    }
                    if ("value" in r) return r.value;
                    var a = r.get;
                    if (void 0 !== a) return a.call(i)
                },
                u = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                l = e("../utils/logger.js"),
                d = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(l),
                h = e("./loader.js"),
                f = e("../utils/exception.js"),
                c = function(e) {
                    function t(e, n) {
                        i(this, t);
                        var s = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "xhr-moz-chunked-loader"));
                        return s.TAG = "MozChunkedLoader", s._seekHandler = e, s._config = n, s._needStash = !0, s._xhr = null, s._requestAbort = !1, s._contentLength = null, s._receivedLength = 0, s
                    }
                    return s(t, e), u(t, null, [{
                        key: "isSupported",
                        value: function() {
                            try {
                                var e = new XMLHttpRequest;
                                return e.open("GET", "https://example.com", !0), e.responseType = "moz-chunked-arraybuffer", "moz-chunked-arraybuffer" === e.responseType
                            } catch (e) {
                                return d.default.w("MozChunkedLoader", e.message), !1
                            }
                        }
                    }]), u(t, [{
                        key: "destroy",
                        value: function() {
                            this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onloadend = null, this._xhr.onerror = null, this._xhr = null), o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "open",
                        value: function(e, t) {
                            this._dataSource = e, this._range = t;
                            var n = e.url;
                            this._config.reuseRedirectedURL && void 0 != e.redirectedURL && (n = e.redirectedURL);
                            var i = this._seekHandler.getConfig(n, t);
                            this._requestURL = i.url;
                            var r = this._xhr = new XMLHttpRequest;
                            if (r.open("GET", i.url, !0), r.responseType = "moz-chunked-arraybuffer", r.onreadystatechange = this._onReadyStateChange.bind(this), r.onprogress = this._onProgress.bind(this), r.onloadend = this._onLoadEnd.bind(this), r.onerror = this._onXhrError.bind(this), e.withCredentials && r.withCredentials && (r.withCredentials = !0), "object" === a(i.headers)) {
                                var s = i.headers;
                                for (var o in s) s.hasOwnProperty(o) && r.setRequestHeader(o, s[o])
                            }
                            this._status = h.LoaderStatus.kConnecting, r.send()
                        }
                    }, {
                        key: "abort",
                        value: function() {
                            this._requestAbort = !0, this._xhr && this._xhr.abort(), this._status = h.LoaderStatus.kComplete
                        }
                    }, {
                        key: "_onReadyStateChange",
                        value: function(e) {
                            var t = e.target;
                            if (2 === t.readyState) {
                                if (void 0 != t.responseURL && t.responseURL !== this._requestURL && this._onURLRedirect) {
                                    var n = this._seekHandler.removeURLParameters(t.responseURL);
                                    this._onURLRedirect(n)
                                }
                                if (0 !== t.status && (t.status < 200 || t.status > 299)) {
                                    if (this._status = h.LoaderStatus.kError, !this._onError) throw new f.RuntimeException("MozChunkedLoader: Http code invalid, " + t.status + " " + t.statusText);
                                    this._onError(h.LoaderErrors.HTTP_STATUS_CODE_INVALID, {
                                        code: t.status,
                                        msg: t.statusText
                                    })
                                } else this._status = h.LoaderStatus.kBuffering
                            }
                        }
                    }, {
                        key: "_onProgress",
                        value: function(e) {
                            if (this._status !== h.LoaderStatus.kError) {
                                null === this._contentLength && null !== e.total && 0 !== e.total && (this._contentLength = e.total, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength));
                                var t = e.target.response,
                                    n = this._range.from + this._receivedLength;
                                this._receivedLength += t.byteLength, this._onDataArrival && this._onDataArrival(t, n, this._receivedLength)
                            }
                        }
                    }, {
                        key: "_onLoadEnd",
                        value: function(e) {
                            if (!0 === this._requestAbort) return void(this._requestAbort = !1);
                            this._status !== h.LoaderStatus.kError && (this._status = h.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1))
                        }
                    }, {
                        key: "_onXhrError",
                        value: function(e) {
                            this._status = h.LoaderStatus.kError;
                            var t = 0,
                                n = null;
                            if (this._contentLength && e.loaded < this._contentLength ? (t = h.LoaderErrors.EARLY_EOF, n = {
                                    code: -1,
                                    msg: "Moz-Chunked stream meet Early-Eof"
                                }) : (t = h.LoaderErrors.EXCEPTION, n = {
                                    code: -1,
                                    msg: e.constructor.name + " " + e.type
                                }), !this._onError) throw new f.RuntimeException(n.msg);
                            this._onError(t, n)
                        }
                    }]), t
                }(h.BaseLoader);
            n.default = c
        }, {
            "../utils/exception.js": 40,
            "../utils/logger.js": 41,
            "./loader.js": 24
        }],
        30: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function r(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = function e(t, n, i) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === r) {
                        var s = Object.getPrototypeOf(t);
                        return null === s ? void 0 : e(s, n, i)
                    }
                    if ("value" in r) return r.value;
                    var a = r.get;
                    if (void 0 !== a) return a.call(i)
                },
                u = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                l = e("../utils/logger.js"),
                d = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(l),
                h = e("./loader.js"),
                f = e("../utils/exception.js"),
                c = function(e) {
                    function t(e, n) {
                        i(this, t);
                        var s = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "xhr-msstream-loader"));
                        return s.TAG = "MSStreamLoader", s._seekHandler = e, s._config = n, s._needStash = !0, s._xhr = null, s._reader = null, s._totalRange = null, s._currentRange = null, s._currentRequestURL = null, s._currentRedirectedURL = null, s._contentLength = null, s._receivedLength = 0, s._bufferLimit = 16777216, s._lastTimeBufferSize = 0, s._isReconnecting = !1, s
                    }
                    return s(t, e), u(t, null, [{
                        key: "isSupported",
                        value: function() {
                            try {
                                if (void 0 === self.MSStream || void 0 === self.MSStreamReader) return !1;
                                var e = new XMLHttpRequest;
                                return e.open("GET", "https://example.com", !0), e.responseType = "ms-stream", "ms-stream" === e.responseType
                            } catch (e) {
                                return d.default.w("MSStreamLoader", e.message), !1
                            }
                        }
                    }]), u(t, [{
                        key: "destroy",
                        value: function() {
                            this.isWorking() && this.abort(), this._reader && (this._reader.onprogress = null, this._reader.onload = null, this._reader.onerror = null, this._reader = null), this._xhr && (this._xhr.onreadystatechange = null, this._xhr = null), o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "open",
                        value: function(e, t) {
                            this._internalOpen(e, t, !1)
                        }
                    }, {
                        key: "_internalOpen",
                        value: function(e, t, n) {
                            this._dataSource = e, n ? this._currentRange = t : this._totalRange = t;
                            var i = e.url;
                            this._config.reuseRedirectedURL && (void 0 != this._currentRedirectedURL ? i = this._currentRedirectedURL : void 0 != e.redirectedURL && (i = e.redirectedURL));
                            var r = this._seekHandler.getConfig(i, t);
                            this._currentRequestURL = r.url;
                            var s = this._reader = new self.MSStreamReader;
                            s.onprogress = this._msrOnProgress.bind(this), s.onload = this._msrOnLoad.bind(this), s.onerror = this._msrOnError.bind(this);
                            var o = this._xhr = new XMLHttpRequest;
                            if (o.open("GET", r.url, !0), o.responseType = "ms-stream", o.onreadystatechange = this._xhrOnReadyStateChange.bind(this), o.onerror = this._xhrOnError.bind(this), e.withCredentials && (o.withCredentials = !0), "object" === a(r.headers)) {
                                var u = r.headers;
                                for (var l in u) u.hasOwnProperty(l) && o.setRequestHeader(l, u[l])
                            }
                            this._isReconnecting ? this._isReconnecting = !1 : this._status = h.LoaderStatus.kConnecting, o.send()
                        }
                    }, {
                        key: "abort",
                        value: function() {
                            this._internalAbort(), this._status = h.LoaderStatus.kComplete
                        }
                    }, {
                        key: "_internalAbort",
                        value: function() {
                            this._reader && (1 === this._reader.readyState && this._reader.abort(), this._reader.onprogress = null, this._reader.onload = null, this._reader.onerror = null, this._reader = null), this._xhr && (this._xhr.abort(), this._xhr.onreadystatechange = null, this._xhr = null)
                        }
                    }, {
                        key: "_xhrOnReadyStateChange",
                        value: function(e) {
                            var t = e.target;
                            if (2 === t.readyState)
                                if (t.status >= 200 && t.status <= 299) {
                                    if (this._status = h.LoaderStatus.kBuffering, void 0 != t.responseURL) {
                                        var n = this._seekHandler.removeURLParameters(t.responseURL);
                                        t.responseURL !== this._currentRequestURL && n !== this._currentRedirectedURL && (this._currentRedirectedURL = n, this._onURLRedirect && this._onURLRedirect(n))
                                    }
                                    var i = t.getResponseHeader("Content-Length");
                                    if (null != i && null == this._contentLength) {
                                        var r = parseInt(i);
                                        r > 0 && (this._contentLength = r, this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength))
                                    }
                                } else {
                                    if (this._status = h.LoaderStatus.kError, !this._onError) throw new f.RuntimeException("MSStreamLoader: Http code invalid, " + t.status + " " + t.statusText);
                                    this._onError(h.LoaderErrors.HTTP_STATUS_CODE_INVALID, {
                                        code: t.status,
                                        msg: t.statusText
                                    })
                                } else if (3 === t.readyState && t.status >= 200 && t.status <= 299) {
                                this._status = h.LoaderStatus.kBuffering;
                                var s = t.response;
                                this._reader.readAsArrayBuffer(s)
                            }
                        }
                    }, {
                        key: "_xhrOnError",
                        value: function(e) {
                            this._status = h.LoaderStatus.kError;
                            var t = h.LoaderErrors.EXCEPTION,
                                n = {
                                    code: -1,
                                    msg: e.constructor.name + " " + e.type
                                };
                            if (!this._onError) throw new f.RuntimeException(n.msg);
                            this._onError(t, n)
                        }
                    }, {
                        key: "_msrOnProgress",
                        value: function(e) {
                            var t = e.target,
                                n = t.result;
                            if (null == n) return void this._doReconnectIfNeeded();
                            var i = n.slice(this._lastTimeBufferSize);
                            this._lastTimeBufferSize = n.byteLength;
                            var r = this._totalRange.from + this._receivedLength;
                            this._receivedLength += i.byteLength, this._onDataArrival && this._onDataArrival(i, r, this._receivedLength), n.byteLength >= this._bufferLimit && (d.default.v(this.TAG, "MSStream buffer exceeded max size near " + (r + i.byteLength) + ", reconnecting..."), this._doReconnectIfNeeded())
                        }
                    }, {
                        key: "_doReconnectIfNeeded",
                        value: function() {
                            if (null == this._contentLength || this._receivedLength < this._contentLength) {
                                this._isReconnecting = !0, this._lastTimeBufferSize = 0, this._internalAbort();
                                var e = {
                                    from: this._totalRange.from + this._receivedLength,
                                    to: -1
                                };
                                this._internalOpen(this._dataSource, e, !0)
                            }
                        }
                    }, {
                        key: "_msrOnLoad",
                        value: function(e) {
                            this._status = h.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._totalRange.from, this._totalRange.from + this._receivedLength - 1)
                        }
                    }, {
                        key: "_msrOnError",
                        value: function(e) {
                            this._status = h.LoaderStatus.kError;
                            var t = 0,
                                n = null;
                            if (this._contentLength && this._receivedLength < this._contentLength ? (t = h.LoaderErrors.EARLY_EOF, n = {
                                    code: -1,
                                    msg: "MSStream meet Early-Eof"
                                }) : (t = h.LoaderErrors.EARLY_EOF, n = {
                                    code: -1,
                                    msg: e.constructor.name + " " + e.type
                                }), !this._onError) throw new f.RuntimeException(n.msg);
                            this._onError(t, n)
                        }
                    }]), t
                }(h.BaseLoader);
            n.default = c
        }, {
            "../utils/exception.js": 40,
            "../utils/logger.js": 41,
            "./loader.js": 24
        }],
        31: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                u = function e(t, n, i) {
                    null === t && (t = Function.prototype);
                    var r = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === r) {
                        var s = Object.getPrototypeOf(t);
                        return null === s ? void 0 : e(s, n, i)
                    }
                    if ("value" in r) return r.value;
                    var a = r.get;
                    if (void 0 !== a) return a.call(i)
                },
                l = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                d = e("../utils/logger.js"),
                h = i(d),
                f = e("./speed-sampler.js"),
                c = i(f),
                _ = e("./loader.js"),
                m = e("../utils/exception.js"),
                p = function(e) {
                    function t(e, n) {
                        r(this, t);
                        var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, "xhr-range-loader"));
                        return i.TAG = "RangeLoader", i._seekHandler = e, i._config = n, i._needStash = !1, i._chunkSizeKBList = [128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 5120, 6144, 7168, 8192], i._currentChunkSizeKB = 384, i._currentSpeedNormalized = 0, i._zeroSpeedChunkCount = 0, i._xhr = null, i._speedSampler = new c.default, i._requestAbort = !1, i._waitForTotalLength = !1, i._totalLengthReceived = !1, i._currentRequestURL = null, i._currentRedirectedURL = null, i._currentRequestRange = null, i._totalLength = null, i._contentLength = null, i._receivedLength = 0, i._lastTimeLoaded = 0, i
                    }
                    return a(t, e), l(t, null, [{
                        key: "isSupported",
                        value: function() {
                            try {
                                var e = new XMLHttpRequest;
                                return e.open("GET", "https://example.com", !0), e.responseType = "arraybuffer", "arraybuffer" === e.responseType
                            } catch (e) {
                                return h.default.w("RangeLoader", e.message), !1
                            }
                        }
                    }]), l(t, [{
                        key: "destroy",
                        value: function() {
                            this.isWorking() && this.abort(), this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr = null), u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "open",
                        value: function(e, t) {
                            this._dataSource = e, this._range = t, this._status = _.LoaderStatus.kConnecting;
                            var n = !1;
                            void 0 != this._dataSource.filesize && 0 !== this._dataSource.filesize && (n = !0, this._totalLength = this._dataSource.filesize), this._totalLengthReceived || n ? this._openSubRange() : (this._waitForTotalLength = !0, this._internalOpen(this._dataSource, {
                                from: 0,
                                to: -1
                            }))
                        }
                    }, {
                        key: "_openSubRange",
                        value: function() {
                            var e = 1024 * this._currentChunkSizeKB,
                                t = this._range.from + this._receivedLength,
                                n = t + e;
                            null != this._contentLength && n - this._range.from >= this._contentLength && (n = this._range.from + this._contentLength - 1), this._currentRequestRange = {
                                from: t,
                                to: n
                            }, this._internalOpen(this._dataSource, this._currentRequestRange)
                        }
                    }, {
                        key: "_internalOpen",
                        value: function(e, t) {
                            this._lastTimeLoaded = 0;
                            var n = e.url;
                            this._config.reuseRedirectedURL && (void 0 != this._currentRedirectedURL ? n = this._currentRedirectedURL : void 0 != e.redirectedURL && (n = e.redirectedURL));
                            var i = this._seekHandler.getConfig(n, t);
                            this._currentRequestURL = i.url;
                            var r = this._xhr = new XMLHttpRequest;
                            if (r.open("GET", i.url, !0), r.responseType = "arraybuffer", r.onreadystatechange = this._onReadyStateChange.bind(this), r.onprogress = this._onProgress.bind(this), r.onload = this._onLoad.bind(this), r.onerror = this._onXhrError.bind(this), e.withCredentials && r.withCredentials && (r.withCredentials = !0), "object" === o(i.headers)) {
                                var s = i.headers;
                                for (var a in s) s.hasOwnProperty(a) && r.setRequestHeader(a, s[a])
                            }
                            r.send()
                        }
                    }, {
                        key: "abort",
                        value: function() {
                            this._requestAbort = !0, this._internalAbort(), this._status = _.LoaderStatus.kComplete
                        }
                    }, {
                        key: "_internalAbort",
                        value: function() {
                            this._xhr && (this._xhr.onreadystatechange = null, this._xhr.onprogress = null, this._xhr.onload = null, this._xhr.onerror = null, this._xhr.abort(), this._xhr = null)
                        }
                    }, {
                        key: "_onReadyStateChange",
                        value: function(e) {
                            var t = e.target;
                            if (2 === t.readyState) {
                                if (void 0 != t.responseURL) {
                                    var n = this._seekHandler.removeURLParameters(t.responseURL);
                                    t.responseURL !== this._currentRequestURL && n !== this._currentRedirectedURL && (this._currentRedirectedURL = n, this._onURLRedirect && this._onURLRedirect(n))
                                }
                                if (t.status >= 200 && t.status <= 299) {
                                    if (this._waitForTotalLength) return;
                                    this._status = _.LoaderStatus.kBuffering
                                } else {
                                    if (this._status = _.LoaderStatus.kError, !this._onError) throw new m.RuntimeException("RangeLoader: Http code invalid, " + t.status + " " + t.statusText);
                                    this._onError(_.LoaderErrors.HTTP_STATUS_CODE_INVALID, {
                                        code: t.status,
                                        msg: t.statusText
                                    })
                                }
                            }
                        }
                    }, {
                        key: "_onProgress",
                        value: function(e) {
                            if (this._status !== _.LoaderStatus.kError) {
                                if (null === this._contentLength) {
                                    var t = !1;
                                    if (this._waitForTotalLength) {
                                        this._waitForTotalLength = !1, this._totalLengthReceived = !0, t = !0;
                                        var n = e.total;
                                        this._internalAbort(), null != n & 0 !== n && (this._totalLength = n)
                                    }
                                    if (-1 === this._range.to ? this._contentLength = this._totalLength - this._range.from : this._contentLength = this._range.to - this._range.from + 1, t) return void this._openSubRange();
                                    this._onContentLengthKnown && this._onContentLengthKnown(this._contentLength)
                                }
                                var i = e.loaded - this._lastTimeLoaded;
                                this._lastTimeLoaded = e.loaded, this._speedSampler.addBytes(i)
                            }
                        }
                    }, {
                        key: "_normalizeSpeed",
                        value: function(e) {
                            var t = this._chunkSizeKBList,
                                n = t.length - 1,
                                i = 0,
                                r = 0,
                                s = n;
                            if (e < t[0]) return t[0];
                            for (; r <= s;) {
                                if ((i = r + Math.floor((s - r) / 2)) === n || e >= t[i] && e < t[i + 1]) return t[i];
                                t[i] < e ? r = i + 1 : s = i - 1
                            }
                        }
                    }, {
                        key: "_onLoad",
                        value: function(e) {
                            if (this._status !== _.LoaderStatus.kError) {
                                if (this._waitForTotalLength) return void(this._waitForTotalLength = !1);
                                this._lastTimeLoaded = 0;
                                var t = this._speedSampler.lastSecondKBps;
                                if (0 === t && ++this._zeroSpeedChunkCount >= 3 && (t = this._speedSampler.currentKBps), 0 !== t) {
                                    var n = this._normalizeSpeed(t);
                                    this._currentSpeedNormalized !== n && (this._currentSpeedNormalized = n, this._currentChunkSizeKB = n)
                                }
                                var i = e.target.response,
                                    r = this._range.from + this._receivedLength;
                                this._receivedLength += i.byteLength;
                                var s = !1;
                                null != this._contentLength && this._receivedLength < this._contentLength ? this._openSubRange() : s = !0, this._onDataArrival && this._onDataArrival(i, r, this._receivedLength), s && (this._status = _.LoaderStatus.kComplete, this._onComplete && this._onComplete(this._range.from, this._range.from + this._receivedLength - 1))
                            }
                        }
                    }, {
                        key: "_onXhrError",
                        value: function(e) {
                            this._status = _.LoaderStatus.kError;
                            var t = 0,
                                n = null;
                            if (this._contentLength && this._receivedLength > 0 && this._receivedLength < this._contentLength ? (t = _.LoaderErrors.EARLY_EOF, n = {
                                    code: -1,
                                    msg: "RangeLoader meet Early-Eof"
                                }) : (t = _.LoaderErrors.EXCEPTION, n = {
                                    code: -1,
                                    msg: e.constructor.name + " " + e.type
                                }), !this._onError) throw new m.RuntimeException(n.msg);
                            this._onError(t, n)
                        }
                    }, {
                        key: "currentSpeed",
                        get: function() {
                            return this._speedSampler.lastSecondKBps
                        }
                    }]), t
                }(_.BaseLoader);
            n.default = p
        }, {
            "../utils/exception.js": 40,
            "../utils/logger.js": 41,
            "./loader.js": 24,
            "./speed-sampler.js": 27
        }],
        32: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = e("events"),
                u = i(o),
                l = e("../utils/logger.js"),
                d = i(l),
                h = e("../utils/browser.js"),
                f = i(h),
                c = e("./player-events.js"),
                _ = i(c),
                m = e("../core/transmuxer.js"),
                p = i(m),
                v = e("../core/transmuxing-events.js"),
                g = i(v),
                y = e("../core/mse-controller.js"),
                E = i(y),
                b = e("../core/mse-events.js"),
                S = i(b),
                k = e("./player-errors.js"),
                L = e("../config.js"),
                w = e("../utils/exception.js"),
                R = function() {
                    function e(t, n) {
                        if (r(this, e), this.TAG = "FlvPlayer", this._type = "FlvPlayer", this._emitter = new u.default, this._config = (0, L.createDefaultConfig)(), "object" === (void 0 === n ? "undefined" : s(n)) && Object.assign(this._config, n), "flv" !== t.type.toLowerCase()) throw new w.InvalidArgumentException("FlvPlayer requires an flv MediaDataSource input!");
                        !0 === t.isLive && (this._config.isLive = !0), this.e = {
                            onvLoadedMetadata: this._onvLoadedMetadata.bind(this),
                            onvSeeking: this._onvSeeking.bind(this),
                            onvCanPlay: this._onvCanPlay.bind(this),
                            onvStalled: this._onvStalled.bind(this),
                            onvProgress: this._onvProgress.bind(this)
                        }, self.performance && self.performance.now ? this._now = self.performance.now.bind(self.performance) : this._now = Date.now, this._pendingSeekTime = null, this._requestSetTime = !1, this._seekpointRecord = null, this._progressChecker = null, this._mediaDataSource = t, this._mediaElement = null, this._msectl = null, this._transmuxer = null, this._mseSourceOpened = !1, this._hasPendingLoad = !1, this._receivedCanPlay = !1, this._mediaInfo = null, this._statisticsInfo = null;
                        var i = f.default.chrome && (f.default.version.major < 50 || 50 === f.default.version.major && f.default.version.build < 2661);
                        this._alwaysSeekKeyframe = !!(i || f.default.msedge || f.default.msie), this._alwaysSeekKeyframe && (this._config.accurateSeek = !1)
                    }
                    return a(e, [{
                        key: "destroy",
                        value: function() {
                            null != this._progressChecker && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._transmuxer && this.unload(), this._mediaElement && this.detachMediaElement(), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            var n = this;
                            e === _.default.MEDIA_INFO ? null != this._mediaInfo && Promise.resolve().then(function() {
                                n._emitter.emit(_.default.MEDIA_INFO, n.mediaInfo)
                            }) : e === _.default.STATISTICS_INFO && null != this._statisticsInfo && Promise.resolve().then(function() {
                                n._emitter.emit(_.default.STATISTICS_INFO, n.statisticsInfo)
                            }), this._emitter.addListener(e, t)
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            this._emitter.removeListener(e, t)
                        }
                    }, {
                        key: "attachMediaElement",
                        value: function(e) {
                            var t = this;
                            if (this._mediaElement = e, e.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), e.addEventListener("seeking", this.e.onvSeeking), e.addEventListener("canplay", this.e.onvCanPlay), e.addEventListener("stalled", this.e.onvStalled), e.addEventListener("progress", this.e.onvProgress), this._msectl = new E.default(this._config), this._msectl.on(S.default.UPDATE_END, this._onmseUpdateEnd.bind(this)), this._msectl.on(S.default.BUFFER_FULL, this._onmseBufferFull.bind(this)), this._msectl.on(S.default.SOURCE_OPEN, function() {
                                    t._mseSourceOpened = !0, t._hasPendingLoad && (t._hasPendingLoad = !1, t.load())
                                }), this._msectl.on(S.default.ERROR, function(e) {
                                    t._emitter.emit(_.default.ERROR, k.ErrorTypes.MEDIA_ERROR, k.ErrorDetails.MEDIA_MSE_ERROR, e)
                                }), this._msectl.attachMediaElement(e), null != this._pendingSeekTime) try {
                                e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null
                            } catch (e) {}
                        }
                    }, {
                        key: "detachMediaElement",
                        value: function() {
                            this._mediaElement && (this._msectl.detachMediaElement(), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement.removeEventListener("seeking", this.e.onvSeeking), this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay), this._mediaElement.removeEventListener("stalled", this.e.onvStalled), this._mediaElement.removeEventListener("progress", this.e.onvProgress), this._mediaElement = null), this._msectl && (this._msectl.destroy(), this._msectl = null)
                        }
                    }, {
                        key: "load",
                        value: function() {
                            var e = this;
                            if (!this._mediaElement) throw new w.IllegalStateException("HTMLMediaElement must be attached before load()!");
                            if (this._transmuxer) throw new w.IllegalStateException("FlvPlayer.load() has been called, please call unload() first!");
                            if (!this._hasPendingLoad) {
                                if (this._config.deferLoadAfterSourceOpen && !1 === this._mseSourceOpened) return void(this._hasPendingLoad = !0);
                                this._mediaElement.readyState > 0 && (this._requestSetTime = !0, this._mediaElement.currentTime = 0), this._transmuxer = new p.default(this._mediaDataSource, this._config), this._transmuxer.on(g.default.INIT_SEGMENT, function(t, n) {
                                        e._msectl.appendInitSegment(n)
                                    }), this._transmuxer.on(g.default.MEDIA_SEGMENT, function(t, n) {
                                        if (e._msectl.appendMediaSegment(n), e._config.lazyLoad && !e._config.isLive) {
                                            var i = e._mediaElement.currentTime;
                                            n.info.endDts >= 1e3 * (i + e._config.lazyLoadMaxDuration) && null == e._progressChecker && (d.default.v(e.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), e._suspendTransmuxer())
                                        }
                                    }), this._transmuxer.on(g.default.LOADING_COMPLETE, function() {
                                        e._msectl.endOfStream(), e._emitter.emit(_.default.LOADING_COMPLETE)
                                    }), this._transmuxer.on(g.default.RECOVERED_EARLY_EOF, function() {
                                        e._emitter.emit(_.default.RECOVERED_EARLY_EOF)
                                    }), this._transmuxer.on(g.default.IO_ERROR, function(t, n) {
                                        e._emitter.emit(_.default.ERROR, k.ErrorTypes.NETWORK_ERROR, t, n)
                                    }), this._transmuxer.on(g.default.DEMUX_ERROR, function(t, n) {
                                        e._emitter.emit(_.default.ERROR, k.ErrorTypes.MEDIA_ERROR, t, {
                                            code: -1,
                                            msg: n
                                        })
                                    }),
                                    this._transmuxer.on(g.default.MEDIA_INFO, function(t) {
                                        e._mediaInfo = t, e._emitter.emit(_.default.MEDIA_INFO, Object.assign({}, t))
                                    }), this._transmuxer.on(g.default.STATISTICS_INFO, function(t) {
                                        e._statisticsInfo = e._fillStatisticsInfo(t), e._emitter.emit(_.default.STATISTICS_INFO, Object.assign({}, e._statisticsInfo))
                                    }), this._transmuxer.on(g.default.RECOMMEND_SEEKPOINT, function(t) {
                                        e._mediaElement && !e._config.accurateSeek && (e._requestSetTime = !0, e._mediaElement.currentTime = t / 1e3)
                                    }), this._transmuxer.open()
                            }
                        }
                    }, {
                        key: "unload",
                        value: function() {
                            this._mediaElement && this._mediaElement.pause(), this._msectl && this._msectl.seek(0), this._transmuxer && (this._transmuxer.close(), this._transmuxer.destroy(), this._transmuxer = null)
                        }
                    }, {
                        key: "play",
                        value: function() {
                            return this._mediaElement.play()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this._mediaElement.pause()
                        }
                    }, {
                        key: "_fillStatisticsInfo",
                        value: function(e) {
                            if (e.playerType = this._type, !(this._mediaElement instanceof HTMLVideoElement)) return e;
                            var t = !0,
                                n = 0,
                                i = 0;
                            if (this._mediaElement.getVideoPlaybackQuality) {
                                var r = this._mediaElement.getVideoPlaybackQuality();
                                n = r.totalVideoFrames, i = r.droppedVideoFrames
                            } else void 0 != this._mediaElement.webkitDecodedFrameCount ? (n = this._mediaElement.webkitDecodedFrameCount, i = this._mediaElement.webkitDroppedFrameCount) : t = !1;
                            return t && (e.decodedFrames = n, e.droppedFrames = i), e
                        }
                    }, {
                        key: "_onmseUpdateEnd",
                        value: function() {
                            if (this._config.lazyLoad && !this._config.isLive) {
                                for (var e = this._mediaElement.buffered, t = this._mediaElement.currentTime, n = 0, i = 0; i < e.length; i++) {
                                    var r = e.start(i),
                                        s = e.end(i);
                                    if (r <= t && t < s) {
                                        r, n = s;
                                        break
                                    }
                                }
                                n >= t + this._config.lazyLoadMaxDuration && null == this._progressChecker && (d.default.v(this.TAG, "Maximum buffering duration exceeded, suspend transmuxing task"), this._suspendTransmuxer())
                            }
                        }
                    }, {
                        key: "_onmseBufferFull",
                        value: function() {
                            d.default.v(this.TAG, "MSE SourceBuffer is full, suspend transmuxing task"), null == this._progressChecker && this._suspendTransmuxer()
                        }
                    }, {
                        key: "_suspendTransmuxer",
                        value: function() {
                            this._transmuxer && (this._transmuxer.pause(), null == this._progressChecker && (this._progressChecker = window.setInterval(this._checkProgressAndResume.bind(this), 1e3)))
                        }
                    }, {
                        key: "_checkProgressAndResume",
                        value: function() {
                            for (var e = this._mediaElement.currentTime, t = this._mediaElement.buffered, n = !1, i = 0; i < t.length; i++) {
                                var r = t.start(i),
                                    s = t.end(i);
                                if (e >= r && e < s) {
                                    e >= s - this._config.lazyLoadRecoverDuration && (n = !0);
                                    break
                                }
                            }
                            n && (window.clearInterval(this._progressChecker), this._progressChecker = null, n && (d.default.v(this.TAG, "Continue loading from paused position"), this._transmuxer.resume()))
                        }
                    }, {
                        key: "_isTimepointBuffered",
                        value: function(e) {
                            for (var t = this._mediaElement.buffered, n = 0; n < t.length; n++) {
                                var i = t.start(n),
                                    r = t.end(n);
                                if (e >= i && e < r) return !0
                            }
                            return !1
                        }
                    }, {
                        key: "_internalSeek",
                        value: function(e) {
                            var t = this._isTimepointBuffered(e),
                                n = !1,
                                i = 0;
                            if (e < 1 && this._mediaElement.buffered.length > 0) {
                                var r = this._mediaElement.buffered.start(0);
                                (r < 1 && e < r || f.default.safari) && (n = !0, i = f.default.safari ? .1 : r)
                            }
                            if (n) this._requestSetTime = !0, this._mediaElement.currentTime = i;
                            else if (t) {
                                if (this._alwaysSeekKeyframe) {
                                    var s = this._msectl.getNearestKeyframe(Math.floor(1e3 * e));
                                    this._requestSetTime = !0, this._mediaElement.currentTime = null != s ? s.dts / 1e3 : e
                                } else this._requestSetTime = !0, this._mediaElement.currentTime = e;
                                null != this._progressChecker && this._checkProgressAndResume()
                            } else null != this._progressChecker && (window.clearInterval(this._progressChecker), this._progressChecker = null), this._msectl.seek(e), this._transmuxer.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = e)
                        }
                    }, {
                        key: "_checkAndApplyUnbufferedSeekpoint",
                        value: function() {
                            if (this._seekpointRecord)
                                if (this._seekpointRecord.recordTime <= this._now() - 100) {
                                    var e = this._mediaElement.currentTime;
                                    this._seekpointRecord = null, this._isTimepointBuffered(e) || (null != this._progressChecker && (window.clearTimeout(this._progressChecker), this._progressChecker = null), this._msectl.seek(e), this._transmuxer.seek(Math.floor(1e3 * e)), this._config.accurateSeek && (this._requestSetTime = !0, this._mediaElement.currentTime = e))
                                } else window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50)
                        }
                    }, {
                        key: "_checkAndResumeStuckPlayback",
                        value: function(e) {
                            var t = this._mediaElement;
                            if (e || !this._receivedCanPlay || t.readyState < 2) {
                                var n = t.buffered;
                                n.length > 0 && t.currentTime < n.start(0) && (d.default.w(this.TAG, "Playback seems stuck at " + t.currentTime + ", seek to " + n.start(0)), this._requestSetTime = !0, this._mediaElement.currentTime = n.start(0), this._mediaElement.removeEventListener("progress", this.e.onvProgress))
                            } else this._mediaElement.removeEventListener("progress", this.e.onvProgress)
                        }
                    }, {
                        key: "_onvLoadedMetadata",
                        value: function(e) {
                            null != this._pendingSeekTime && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null)
                        }
                    }, {
                        key: "_onvSeeking",
                        value: function(e) {
                            var t = this._mediaElement.currentTime,
                                n = this._mediaElement.buffered;
                            if (this._requestSetTime) return void(this._requestSetTime = !1);
                            if (t < 1 && n.length > 0) {
                                var i = n.start(0);
                                if (i < 1 && t < i || f.default.safari) return this._requestSetTime = !0, void(this._mediaElement.currentTime = f.default.safari ? .1 : i)
                            }
                            if (this._isTimepointBuffered(t)) {
                                if (this._alwaysSeekKeyframe) {
                                    var r = this._msectl.getNearestKeyframe(Math.floor(1e3 * t));
                                    null != r && (this._requestSetTime = !0, this._mediaElement.currentTime = r.dts / 1e3)
                                }
                                return void(null != this._progressChecker && this._checkProgressAndResume())
                            }
                            this._seekpointRecord = {
                                seekPoint: t,
                                recordTime: this._now()
                            }, window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50)
                        }
                    }, {
                        key: "_onvCanPlay",
                        value: function(e) {
                            this._receivedCanPlay = !0, this._mediaElement.removeEventListener("canplay", this.e.onvCanPlay)
                        }
                    }, {
                        key: "_onvStalled",
                        value: function(e) {
                            this._checkAndResumeStuckPlayback(!0)
                        }
                    }, {
                        key: "_onvProgress",
                        value: function(e) {
                            this._checkAndResumeStuckPlayback()
                        }
                    }, {
                        key: "type",
                        get: function() {
                            return this._type
                        }
                    }, {
                        key: "buffered",
                        get: function() {
                            return this._mediaElement.buffered
                        }
                    }, {
                        key: "duration",
                        get: function() {
                            return this._mediaElement.duration
                        }
                    }, {
                        key: "volume",
                        get: function() {
                            return this._mediaElement.volume
                        },
                        set: function(e) {
                            this._mediaElement.volume = e
                        }
                    }, {
                        key: "muted",
                        get: function() {
                            return this._mediaElement.muted
                        },
                        set: function(e) {
                            this._mediaElement.muted = e
                        }
                    }, {
                        key: "currentTime",
                        get: function() {
                            return this._mediaElement ? this._mediaElement.currentTime : 0
                        },
                        set: function(e) {
                            this._mediaElement ? this._internalSeek(e) : this._pendingSeekTime = e
                        }
                    }, {
                        key: "mediaInfo",
                        get: function() {
                            return Object.assign({}, this._mediaInfo)
                        }
                    }, {
                        key: "statisticsInfo",
                        get: function() {
                            return null == this._statisticsInfo && (this._statisticsInfo = {}), this._statisticsInfo = this._fillStatisticsInfo(this._statisticsInfo), Object.assign({}, this._statisticsInfo)
                        }
                    }]), e
                }();
            n.default = R
        }, {
            "../config.js": 5,
            "../core/mse-controller.js": 9,
            "../core/mse-events.js": 10,
            "../core/transmuxer.js": 11,
            "../core/transmuxing-events.js": 13,
            "../utils/browser.js": 39,
            "../utils/exception.js": 40,
            "../utils/logger.js": 41,
            "./player-errors.js": 34,
            "./player-events.js": 35,
            events: 2
        }],
        33: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = e("events"),
                u = i(o),
                l = e("./player-events.js"),
                d = i(l),
                h = e("../config.js"),
                f = e("../utils/exception.js"),
                c = function() {
                    function e(t, n) {
                        if (r(this, e), this.TAG = "NativePlayer", this._type = "NativePlayer", this._emitter = new u.default, this._config = (0, h.createDefaultConfig)(), "object" === (void 0 === n ? "undefined" : s(n)) && Object.assign(this._config, n), "flv" === t.type.toLowerCase()) throw new f.InvalidArgumentException("NativePlayer does't support flv MediaDataSource input!");
                        if (t.hasOwnProperty("segments")) throw new f.InvalidArgumentException("NativePlayer(" + t.type + ") doesn't support multipart playback!");
                        this.e = {
                            onvLoadedMetadata: this._onvLoadedMetadata.bind(this)
                        }, this._pendingSeekTime = null, this._statisticsReporter = null, this._mediaDataSource = t, this._mediaElement = null
                    }
                    return a(e, [{
                        key: "destroy",
                        value: function() {
                            this._mediaElement && (this.unload(), this.detachMediaElement()), this.e = null, this._mediaDataSource = null, this._emitter.removeAllListeners(), this._emitter = null
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            var n = this;
                            e === d.default.MEDIA_INFO ? null != this._mediaElement && 0 !== this._mediaElement.readyState && Promise.resolve().then(function() {
                                n._emitter.emit(d.default.MEDIA_INFO, n.mediaInfo)
                            }) : e === d.default.STATISTICS_INFO && null != this._mediaElement && 0 !== this._mediaElement.readyState && Promise.resolve().then(function() {
                                n._emitter.emit(d.default.STATISTICS_INFO, n.statisticsInfo)
                            }), this._emitter.addListener(e, t)
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            this._emitter.removeListener(e, t)
                        }
                    }, {
                        key: "attachMediaElement",
                        value: function(e) {
                            if (this._mediaElement = e, e.addEventListener("loadedmetadata", this.e.onvLoadedMetadata), null != this._pendingSeekTime) try {
                                e.currentTime = this._pendingSeekTime, this._pendingSeekTime = null
                            } catch (e) {}
                        }
                    }, {
                        key: "detachMediaElement",
                        value: function() {
                            this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src"), this._mediaElement.removeEventListener("loadedmetadata", this.e.onvLoadedMetadata), this._mediaElement = null), null != this._statisticsReporter && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null)
                        }
                    }, {
                        key: "load",
                        value: function() {
                            if (!this._mediaElement) throw new f.IllegalStateException("HTMLMediaElement must be attached before load()!");
                            this._mediaElement.src = this._mediaDataSource.url, this._mediaElement.readyState > 0 && (this._mediaElement.currentTime = 0), this._mediaElement.preload = "auto", this._mediaElement.load(), this._statisticsReporter = window.setInterval(this._reportStatisticsInfo.bind(this), this._config.statisticsInfoReportInterval)
                        }
                    }, {
                        key: "unload",
                        value: function() {
                            this._mediaElement && (this._mediaElement.src = "", this._mediaElement.removeAttribute("src")), null != this._statisticsReporter && (window.clearInterval(this._statisticsReporter), this._statisticsReporter = null)
                        }
                    }, {
                        key: "play",
                        value: function() {
                            return this._mediaElement.play()
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this._mediaElement.pause()
                        }
                    }, {
                        key: "_onvLoadedMetadata",
                        value: function(e) {
                            null != this._pendingSeekTime && (this._mediaElement.currentTime = this._pendingSeekTime, this._pendingSeekTime = null), this._emitter.emit(d.default.MEDIA_INFO, this.mediaInfo)
                        }
                    }, {
                        key: "_reportStatisticsInfo",
                        value: function() {
                            this._emitter.emit(d.default.STATISTICS_INFO, this.statisticsInfo)
                        }
                    }, {
                        key: "type",
                        get: function() {
                            return this._type
                        }
                    }, {
                        key: "buffered",
                        get: function() {
                            return this._mediaElement.buffered
                        }
                    }, {
                        key: "duration",
                        get: function() {
                            return this._mediaElement.duration
                        }
                    }, {
                        key: "volume",
                        get: function() {
                            return this._mediaElement.volume
                        },
                        set: function(e) {
                            this._mediaElement.volume = e
                        }
                    }, {
                        key: "muted",
                        get: function() {
                            return this._mediaElement.muted
                        },
                        set: function(e) {
                            this._mediaElement.muted = e
                        }
                    }, {
                        key: "currentTime",
                        get: function() {
                            return this._mediaElement ? this._mediaElement.currentTime : 0
                        },
                        set: function(e) {
                            this._mediaElement ? this._mediaElement.currentTime = e : this._pendingSeekTime = e
                        }
                    }, {
                        key: "mediaInfo",
                        get: function() {
                            var e = this._mediaElement instanceof HTMLAudioElement ? "audio/" : "video/",
                                t = {
                                    mimeType: e + this._mediaDataSource.type
                                };
                            return this._mediaElement && (t.duration = Math.floor(1e3 * this._mediaElement.duration), this._mediaElement instanceof HTMLVideoElement && (t.width = this._mediaElement.videoWidth, t.height = this._mediaElement.videoHeight)), t
                        }
                    }, {
                        key: "statisticsInfo",
                        get: function() {
                            var e = {
                                playerType: this._type,
                                url: this._mediaDataSource.url
                            };
                            if (!(this._mediaElement instanceof HTMLVideoElement)) return e;
                            var t = !0,
                                n = 0,
                                i = 0;
                            if (this._mediaElement.getVideoPlaybackQuality) {
                                var r = this._mediaElement.getVideoPlaybackQuality();
                                n = r.totalVideoFrames, i = r.droppedVideoFrames
                            } else void 0 != this._mediaElement.webkitDecodedFrameCount ? (n = this._mediaElement.webkitDecodedFrameCount, i = this._mediaElement.webkitDroppedFrameCount) : t = !1;
                            return t && (e.decodedFrames = n, e.droppedFrames = i), e
                        }
                    }]), e
                }();
            n.default = c
        }, {
            "../config.js": 5,
            "../utils/exception.js": 40,
            "./player-events.js": 35,
            events: 2
        }],
        34: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.ErrorDetails = n.ErrorTypes = void 0;
            var i = e("../io/loader.js"),
                r = e("../demux/demux-errors.js"),
                s = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(r);
            n.ErrorTypes = {
                NETWORK_ERROR: "NetworkError",
                MEDIA_ERROR: "MediaError",
                OTHER_ERROR: "OtherError"
            }, n.ErrorDetails = {
                NETWORK_EXCEPTION: i.LoaderErrors.EXCEPTION,
                NETWORK_STATUS_CODE_INVALID: i.LoaderErrors.HTTP_STATUS_CODE_INVALID,
                NETWORK_TIMEOUT: i.LoaderErrors.CONNECTING_TIMEOUT,
                NETWORK_UNRECOVERABLE_EARLY_EOF: i.LoaderErrors.UNRECOVERABLE_EARLY_EOF,
                MEDIA_MSE_ERROR: "MediaMSEError",
                MEDIA_FORMAT_ERROR: s.default.FORMAT_ERROR,
                MEDIA_FORMAT_UNSUPPORTED: s.default.FORMAT_UNSUPPORTED,
                MEDIA_CODEC_UNSUPPORTED: s.default.CODEC_UNSUPPORTED
            }
        }, {
            "../demux/demux-errors.js": 16,
            "../io/loader.js": 24
        }],
        35: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = {
                ERROR: "error",
                LOADING_COMPLETE: "loading_complete",
                RECOVERED_EARLY_EOF: "recovered_early_eof",
                MEDIA_INFO: "media_info",
                STATISTICS_INFO: "statistics_info"
            };
            n.default = i
        }, {}],
        36: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function() {
                    function e() {
                        i(this, e)
                    }
                    return r(e, null, [{
                        key: "getSilentFrame",
                        value: function(e, t) {
                            if ("mp4a.40.2" === e) {
                                if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                                if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                                if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                                if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                                if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                                if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
                            } else {
                                if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                            }
                            return null
                        }
                    }]), e
                }();
            n.default = s
        }, {}],
        37: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function() {
                    function e() {
                        i(this, e)
                    }
                    return r(e, null, [{
                        key: "init",
                        value: function() {
                            e.types = {
                                avc1: [],
                                avcC: [],
                                btrt: [],
                                dinf: [],
                                dref: [],
                                esds: [],
                                ftyp: [],
                                hdlr: [],
                                mdat: [],
                                mdhd: [],
                                mdia: [],
                                mfhd: [],
                                minf: [],
                                moof: [],
                                moov: [],
                                mp4a: [],
                                mvex: [],
                                mvhd: [],
                                sdtp: [],
                                stbl: [],
                                stco: [],
                                stsc: [],
                                stsd: [],
                                stsz: [],
                                stts: [],
                                tfdt: [],
                                tfhd: [],
                                traf: [],
                                trak: [],
                                trun: [],
                                trex: [],
                                tkhd: [],
                                vmhd: [],
                                smhd: [],
                                ".mp3": []
                            };
                            for (var t in e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                            var n = e.constants = {};
                            n.FTYP = new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49]), n.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), n.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), n.STSC = n.STCO = n.STTS, n.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), n.HDLR_VIDEO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), n.HDLR_AUDIO = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), n.DREF = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), n.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), n.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
                        }
                    }, {
                        key: "box",
                        value: function(e) {
                            for (var t = 8, n = null, i = Array.prototype.slice.call(arguments, 1), r = i.length, s = 0; s < r; s++) t += i[s].byteLength;
                            n = new Uint8Array(t), n[0] = t >>> 24 & 255, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n.set(e, 4);
                            for (var a = 8, o = 0; o < r; o++) n.set(i[o], a), a += i[o].byteLength;
                            return n
                        }
                    }, {
                        key: "generateInitSegment",
                        value: function(t) {
                            var n = e.box(e.types.ftyp, e.constants.FTYP),
                                i = e.moov(t),
                                r = new Uint8Array(n.byteLength + i.byteLength);
                            return r.set(n, 0), r.set(i, n.byteLength), r
                        }
                    }, {
                        key: "moov",
                        value: function(t) {
                            var n = e.mvhd(t.timescale, t.duration),
                                i = e.trak(t),
                                r = e.mvex(t);
                            return e.box(e.types.moov, n, i, r)
                        }
                    }, {
                        key: "mvhd",
                        value: function(t, n) {
                            return e.box(e.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]))
                        }
                    }, {
                        key: "trak",
                        value: function(t) {
                            return e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                        }
                    }, {
                        key: "tkhd",
                        value: function(t) {
                            var n = t.id,
                                i = t.duration,
                                r = t.presentWidth,
                                s = t.presentHeight;
                            return e.box(e.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, 0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >>> 8 & 255, 255 & r, 0, 0, s >>> 8 & 255, 255 & s, 0, 0]))
                        }
                    }, {
                        key: "mdia",
                        value: function(t) {
                            return e.box(e.types.mdia, e.mdhd(t), e.hdlr(t), e.minf(t))
                        }
                    }, {
                        key: "mdhd",
                        value: function(t) {
                            var n = t.timescale,
                                i = t.duration;
                            return e.box(e.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, 85, 196, 0, 0]))
                        }
                    }, {
                        key: "hdlr",
                        value: function(t) {
                            var n = null;
                            return n = "audio" === t.type ? e.constants.HDLR_AUDIO : e.constants.HDLR_VIDEO, e.box(e.types.hdlr, n)
                        }
                    }, {
                        key: "minf",
                        value: function(t) {
                            var n = null;
                            return n = "audio" === t.type ? e.box(e.types.smhd, e.constants.SMHD) : e.box(e.types.vmhd, e.constants.VMHD), e.box(e.types.minf, n, e.dinf(), e.stbl(t))
                        }
                    }, {
                        key: "dinf",
                        value: function() {
                            return e.box(e.types.dinf, e.box(e.types.dref, e.constants.DREF))
                        }
                    }, {
                        key: "stbl",
                        value: function(t) {
                            return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.constants.STTS), e.box(e.types.stsc, e.constants.STSC), e.box(e.types.stsz, e.constants.STSZ), e.box(e.types.stco, e.constants.STCO))
                        }
                    }, {
                        key: "stsd",
                        value: function(t) {
                            return "audio" === t.type ? "mp3" === t.codec ? e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp3(t)) : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp4a(t)) : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.avc1(t))
                        }
                    }, {
                        key: "mp3",
                        value: function(t) {
                            var n = t.channelCount,
                                i = t.audioSampleRate,
                                r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, n, 0, 16, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, 0, 0]);
                            return e.box(e.types[".mp3"], r)
                        }
                    }, {
                        key: "mp4a",
                        value: function(t) {
                            var n = t.channelCount,
                                i = t.audioSampleRate,
                                r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, n, 0, 16, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, 0, 0]);
                            return e.box(e.types.mp4a, r, e.esds(t))
                        }
                    }, {
                        key: "esds",
                        value: function(t) {
                            var n = t.config || [],
                                i = n.length,
                                r = new Uint8Array([0, 0, 0, 0, 3, 23 + i, 0, 1, 0, 4, 15 + i, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([i]).concat(n).concat([6, 1, 2]));
                            return e.box(e.types.esds, r)
                        }
                    }, {
                        key: "avc1",
                        value: function(t) {
                            var n = t.avcc,
                                i = t.codecWidth,
                                r = t.codecHeight,
                                s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >>> 8 & 255, 255 & i, r >>> 8 & 255, 255 & r, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 10, 120, 113, 113, 47, 102, 108, 118, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 255, 255]);
                            return e.box(e.types.avc1, s, e.box(e.types.avcC, n))
                        }
                    }, {
                        key: "mvex",
                        value: function(t) {
                            return e.box(e.types.mvex, e.trex(t))
                        }
                    }, {
                        key: "trex",
                        value: function(t) {
                            var n = t.id,
                                i = new Uint8Array([0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
                            return e.box(e.types.trex, i)
                        }
                    }, {
                        key: "moof",
                        value: function(t, n) {
                            return e.box(e.types.moof, e.mfhd(t.sequenceNumber), e.traf(t, n))
                        }
                    }, {
                        key: "mfhd",
                        value: function(t) {
                            var n = new Uint8Array([0, 0, 0, 0, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]);
                            return e.box(e.types.mfhd, n)
                        }
                    }, {
                        key: "traf",
                        value: function(t, n) {
                            var i = t.id,
                                r = e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i])),
                                s = e.box(e.types.tfdt, new Uint8Array([0, 0, 0, 0, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n])),
                                a = e.sdtp(t),
                                o = e.trun(t, a.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
                            return e.box(e.types.traf, r, s, o, a)
                        }
                    }, {
                        key: "sdtp",
                        value: function(t) {
                            for (var n = t.samples || [], i = n.length, r = new Uint8Array(4 + i), s = 0; s < i; s++) {
                                var a = n[s].flags;
                                r[s + 4] = a.isLeading << 6 | a.dependsOn << 4 | a.isDependedOn << 2 | a.hasRedundancy
                            }
                            return e.box(e.types.sdtp, r)
                        }
                    }, {
                        key: "trun",
                        value: function(t, n) {
                            var i = t.samples || [],
                                r = i.length,
                                s = 12 + 16 * r,
                                a = new Uint8Array(s);
                            n += 8 + s, a.set([0, 0, 15, 1, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n], 0);
                            for (var o = 0; o < r; o++) {
                                var u = i[o].duration,
                                    l = i[o].size,
                                    d = i[o].flags,
                                    h = i[o].cts;
                                a.set([u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l, d.isLeading << 2 | d.dependsOn, d.isDependedOn << 6 | d.hasRedundancy << 4 | d.isNonSync, 0, 0, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, 255 & h], 12 + 16 * o)
                            }
                            return e.box(e.types.trun, a)
                        }
                    }, {
                        key: "mdat",
                        value: function(t) {
                            return e.box(e.types.mdat, t)
                        }
                    }]), e
                }();
            s.init(), n.default = s
        }, {}],
        38: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                a = e("../utils/logger.js"),
                o = i(a),
                u = e("./mp4-generator.js"),
                l = i(u),
                d = e("./aac-silent.js"),
                h = i(d),
                f = e("../utils/browser.js"),
                c = i(f),
                _ = e("../core/media-segment-info.js"),
                m = e("../utils/exception.js"),
                p = function() {
                    function e(t) {
                        r(this, e), this.TAG = "MP4Remuxer", this._config = t, this._isLive = !0 === t.isLive, this._dtsBase = -1, this._dtsBaseInited = !1, this._audioDtsBase = 1 / 0, this._videoDtsBase = 1 / 0, this._audioNextDts = void 0, this._videoNextDts = void 0, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList = new _.MediaSegmentInfoList("audio"), this._videoSegmentInfoList = new _.MediaSegmentInfoList("video"), this._onInitSegment = null, this._onMediaSegment = null, this._forceFirstIDR = !(!c.default.chrome || !(c.default.version.major < 50 || 50 === c.default.version.major && c.default.version.build < 2661)), this._fillSilentAfterSeek = c.default.msedge || c.default.msie, this._mp3UseMpegAudio = !c.default.firefox, this._fillAudioTimestampGap = this._config.fixAudioTimestampGap
                    }
                    return s(e, [{
                        key: "destroy",
                        value: function() {
                            this._dtsBase = -1, this._dtsBaseInited = !1, this._audioMeta = null, this._videoMeta = null, this._audioSegmentInfoList.clear(), this._audioSegmentInfoList = null, this._videoSegmentInfoList.clear(), this._videoSegmentInfoList = null, this._onInitSegment = null, this._onMediaSegment = null
                        }
                    }, {
                        key: "bindDataSource",
                        value: function(e) {
                            return e.onDataAvailable = this.remux.bind(this), e.onTrackMetadata = this._onTrackMetadataReceived.bind(this), this
                        }
                    }, {
                        key: "insertDiscontinuity",
                        value: function() {
                            this._audioNextDts = this._videoNextDts = void 0
                        }
                    }, {
                        key: "seek",
                        value: function(e) {
                            this._videoSegmentInfoList.clear(), this._audioSegmentInfoList.clear()
                        }
                    }, {
                        key: "remux",
                        value: function(e, t) {
                            if (!this._onMediaSegment) throw new m.IllegalStateException("MP4Remuxer: onMediaSegment callback must be specificed!");
                            this._dtsBaseInited || this._calculateDtsBase(e, t), this._remuxVideo(t), this._remuxAudio(e)
                        }
                    }, {
                        key: "_onTrackMetadataReceived",
                        value: function(e, t) {
                            var n = null,
                                i = "mp4",
                                r = t.codec;
                            if ("audio" === e) this._audioMeta = t, "mp3" === t.codec && this._mp3UseMpegAudio ? (i = "mpeg", r = "", n = new Uint8Array) : n = l.default.generateInitSegment(t);
                            else {
                                if ("video" !== e) return;
                                this._videoMeta = t, n = l.default.generateInitSegment(t)
                            }
                            if (!this._onInitSegment) throw new m.IllegalStateException("MP4Remuxer: onInitSegment callback must be specified!");
                            this._onInitSegment(e, {
                                type: e,
                                data: n.buffer,
                                codec: r,
                                container: e + "/" + i,
                                mediaDuration: t.duration
                            })
                        }
                    }, {
                        key: "_calculateDtsBase",
                        value: function(e, t) {
                            this._dtsBaseInited || (e.samples && e.samples.length && (this._audioDtsBase = e.samples[0].dts), t.samples && t.samples.length && (this._videoDtsBase = t.samples[0].dts), this._dtsBase = Math.min(this._audioDtsBase, this._videoDtsBase), this._dtsBaseInited = !0)
                        }
                    }, {
                        key: "_remuxAudio",
                        value: function(e) {
                            if (null != this._audioMeta) {
                                var t = e,
                                    n = t.samples,
                                    i = void 0,
                                    r = -1,
                                    s = -1,
                                    a = this._audioMeta.refSampleDuration,
                                    u = "mp3" === this._audioMeta.codec && this._mp3UseMpegAudio,
                                    d = this._dtsBaseInited && void 0 === this._audioNextDts,
                                    f = !1;
                                if (n && 0 !== n.length) {
                                    var m = 0,
                                        p = null,
                                        v = 0;
                                    u ? (m = 0, v = t.length) : (m = 8, v = 8 + t.length);
                                    var g = n[0].dts - this._dtsBase;
                                    if (this._audioNextDts) i = g - this._audioNextDts;
                                    else if (this._audioSegmentInfoList.isEmpty()) i = 0, this._fillSilentAfterSeek && !this._videoSegmentInfoList.isEmpty() && "mp3" !== this._audioMeta.originalCodec && (f = !0);
                                    else {
                                        var y = this._audioSegmentInfoList.getLastSampleBefore(g);
                                        if (null != y) {
                                            var E = g - (y.originalDts + y.duration);
                                            E <= 3 && (E = 0);
                                            var b = y.dts + y.duration + E;
                                            i = g - b
                                        } else i = 0
                                    }
                                    if (f) {
                                        var S = g - i,
                                            k = this._videoSegmentInfoList.getLastSegmentBefore(g);
                                        if (null != k && k.beginDts < S) {
                                            var L = h.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                                            if (L) {
                                                var w = k.beginDts,
                                                    R = S - k.beginDts;
                                                o.default.v(this.TAG, "InsertPrefixSilentAudio: dts: " + w + ", duration: " + R), n.unshift({
                                                    unit: L,
                                                    dts: w,
                                                    pts: w
                                                }), v += L.byteLength
                                            }
                                        } else f = !1
                                    }
                                    for (var A = [], O = 0; O < n.length; O++) {
                                        var T = n[O],
                                            C = T.unit,
                                            I = T.dts - this._dtsBase,
                                            x = I - i; - 1 === r && (r = x);
                                        var M = 0;
                                        if (O !== n.length - 1) {
                                            M = n[O + 1].dts - this._dtsBase - i - x
                                        } else M = A.length >= 1 ? A[A.length - 1].duration : Math.floor(a);
                                        var D = !1,
                                            B = null;
                                        if (M > 1.5 * a && "mp3" !== this._audioMeta.codec && this._fillAudioTimestampGap && !c.default.safari) {
                                            D = !0;
                                            var j = Math.abs(M - a),
                                                P = Math.ceil(j / a),
                                                U = x + a;
                                            o.default.w(this.TAG, "Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\ndts: " + (x + M) + " ms, expected: " + (x + Math.round(a)) + " ms, delta: " + Math.round(j) + " ms, generate: " + P + " frames");
                                            var N = h.default.getSilentFrame(this._audioMeta.originalCodec, this._audioMeta.channelCount);
                                            null == N && (o.default.w(this.TAG, "Unable to generate silent frame for " + this._audioMeta.originalCodec + " with " + this._audioMeta.channelCount + " channels, repeat last frame"), N = C), B = [];
                                            for (var F = 0; F < P; F++) {
                                                var G = Math.round(U);
                                                if (B.length > 0) {
                                                    var V = B[B.length - 1];
                                                    V.duration = G - V.dts
                                                }
                                                var z = {
                                                    dts: G,
                                                    pts: G,
                                                    cts: 0,
                                                    unit: N,
                                                    size: N.byteLength,
                                                    duration: 0,
                                                    originalDts: I,
                                                    flags: {
                                                        isLeading: 0,
                                                        dependsOn: 1,
                                                        isDependedOn: 0,
                                                        hasRedundancy: 0
                                                    }
                                                };
                                                B.push(z), v += C.byteLength, U += a
                                            }
                                            var H = B[B.length - 1];
                                            H.duration = x + M - H.dts, M = Math.round(a)
                                        }
                                        A.push({
                                            dts: x,
                                            pts: x,
                                            cts: 0,
                                            unit: T.unit,
                                            size: T.unit.byteLength,
                                            duration: M,
                                            originalDts: I,
                                            flags: {
                                                isLeading: 0,
                                                dependsOn: 1,
                                                isDependedOn: 0,
                                                hasRedundancy: 0
                                            }
                                        }), D && A.push.apply(A, B)
                                    }
                                    u ? p = new Uint8Array(v) : (p = new Uint8Array(v), p[0] = v >>> 24 & 255, p[1] = v >>> 16 & 255, p[2] = v >>> 8 & 255, p[3] = 255 & v, p.set(l.default.types.mdat, 4));
                                    for (var K = 0; K < A.length; K++) {
                                        var q = A[K].unit;
                                        p.set(q, m), m += q.byteLength
                                    }
                                    var W = A[A.length - 1];
                                    s = W.dts + W.duration, this._audioNextDts = s;
                                    var X = new _.MediaSegmentInfo;
                                    X.beginDts = r, X.endDts = s, X.beginPts = r, X.endPts = s, X.originalBeginDts = A[0].originalDts, X.originalEndDts = W.originalDts + W.duration, X.firstSample = new _.SampleInfo(A[0].dts, A[0].pts, A[0].duration, A[0].originalDts, !1), X.lastSample = new _.SampleInfo(W.dts, W.pts, W.duration, W.originalDts, !1), this._isLive || this._audioSegmentInfoList.append(X), t.samples = A, t.sequenceNumber++;
                                    var Y = null;
                                    Y = u ? new Uint8Array : l.default.moof(t, r), t.samples = [], t.length = 0;
                                    var Z = {
                                        type: "audio",
                                        data: this._mergeBoxes(Y, p).buffer,
                                        sampleCount: A.length,
                                        info: X
                                    };
                                    u && d && (Z.timestampOffset = r), this._onMediaSegment("audio", Z)
                                }
                            }
                        }
                    }, {
                        key: "_remuxVideo",
                        value: function(e) {
                            if (null != this._videoMeta) {
                                var t = e,
                                    n = t.samples,
                                    i = void 0,
                                    r = -1,
                                    s = -1,
                                    a = -1,
                                    o = -1;
                                if (n && 0 !== n.length) {
                                    var u = 8,
                                        d = 8 + e.length,
                                        h = new Uint8Array(d);
                                    h[0] = d >>> 24 & 255, h[1] = d >>> 16 & 255, h[2] = d >>> 8 & 255, h[3] = 255 & d, h.set(l.default.types.mdat, 4);
                                    var f = n[0].dts - this._dtsBase;
                                    if (this._videoNextDts) i = f - this._videoNextDts;
                                    else if (this._videoSegmentInfoList.isEmpty()) i = 0;
                                    else {
                                        var c = this._videoSegmentInfoList.getLastSampleBefore(f);
                                        if (null != c) {
                                            var m = f - (c.originalDts + c.duration);
                                            m <= 3 && (m = 0);
                                            var p = c.dts + c.duration + m;
                                            i = f - p
                                        } else i = 0
                                    }
                                    for (var v = new _.MediaSegmentInfo, g = [], y = 0; y < n.length; y++) {
                                        var E = n[y],
                                            b = E.dts - this._dtsBase,
                                            S = E.isKeyframe,
                                            k = b - i,
                                            L = E.cts,
                                            w = k + L; - 1 === r && (r = k, a = w);
                                        var R = 0;
                                        if (y !== n.length - 1) {
                                            R = n[y + 1].dts - this._dtsBase - i - k
                                        } else R = g.length >= 1 ? g[g.length - 1].duration : Math.floor(this._videoMeta.refSampleDuration);
                                        if (S) {
                                            var A = new _.SampleInfo(k, w, R, E.dts, !0);
                                            A.fileposition = E.fileposition, v.appendSyncPoint(A)
                                        }
                                        g.push({
                                            dts: k,
                                            pts: w,
                                            cts: L,
                                            units: E.units,
                                            size: E.length,
                                            isKeyframe: S,
                                            duration: R,
                                            originalDts: b,
                                            flags: {
                                                isLeading: 0,
                                                dependsOn: S ? 2 : 1,
                                                isDependedOn: S ? 1 : 0,
                                                hasRedundancy: 0,
                                                isNonSync: S ? 0 : 1
                                            }
                                        })
                                    }
                                    for (var O = 0; O < g.length; O++)
                                        for (var T = g[O].units; T.length;) {
                                            var C = T.shift(),
                                                I = C.data;
                                            h.set(I, u), u += I.byteLength
                                        }
                                    var x = g[g.length - 1];
                                    if (s = x.dts + x.duration, o = x.pts + x.duration, this._videoNextDts = s, v.beginDts = r, v.endDts = s, v.beginPts = a, v.endPts = o, v.originalBeginDts = g[0].originalDts, v.originalEndDts = x.originalDts + x.duration, v.firstSample = new _.SampleInfo(g[0].dts, g[0].pts, g[0].duration, g[0].originalDts, g[0].isKeyframe), v.lastSample = new _.SampleInfo(x.dts, x.pts, x.duration, x.originalDts, x.isKeyframe), this._isLive || this._videoSegmentInfoList.append(v), t.samples = g, t.sequenceNumber++, this._forceFirstIDR) {
                                        var M = g[0].flags;
                                        M.dependsOn = 2, M.isNonSync = 0
                                    }
                                    var D = l.default.moof(t, r);
                                    t.samples = [], t.length = 0, this._onMediaSegment("video", {
                                        type: "video",
                                        data: this._mergeBoxes(D, h).buffer,
                                        sampleCount: g.length,
                                        info: v
                                    })
                                }
                            }
                        }
                    }, {
                        key: "_mergeBoxes",
                        value: function(e, t) {
                            var n = new Uint8Array(e.byteLength + t.byteLength);
                            return n.set(e, 0), n.set(t, e.byteLength), n
                        }
                    }, {
                        key: "onInitSegment",
                        get: function() {
                            return this._onInitSegment
                        },
                        set: function(e) {
                            this._onInitSegment = e
                        }
                    }, {
                        key: "onMediaSegment",
                        get: function() {
                            return this._onMediaSegment
                        },
                        set: function(e) {
                            this._onMediaSegment = e
                        }
                    }]), e
                }();
            n.default = p
        }, {
            "../core/media-segment-info.js": 8,
            "../utils/browser.js": 39,
            "../utils/exception.js": 40,
            "../utils/logger.js": 41,
            "./aac-silent.js": 36,
            "./mp4-generator.js": 37
        }],
        39: [function(e, t, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = {};
            ! function() {
                var e = self.navigator.userAgent.toLowerCase(),
                    t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(e) || [],
                    n = /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(android)/.exec(e) || /(windows)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || [],
                    r = {
                        browser: t[5] || t[3] || t[1] || "",
                        version: t[2] || t[4] || "0",
                        majorVersion: t[4] || t[2] || "0",
                        platform: n[0] || ""
                    },
                    s = {};
                if (r.browser) {
                    s[r.browser] = !0;
                    var a = r.majorVersion.split(".");
                    s.version = {
                        major: parseInt(r.majorVersion, 10),
                        string: r.version
                    }, a.length > 1 && (s.version.minor = parseInt(a[1], 10)), a.length > 2 && (s.version.build = parseInt(a[2], 10))
                }
                r.platform && (s[r.platform] = !0), (s.chrome || s.opr || s.safari) && (s.webkit = !0), (s.rv || s.iemobile) && (s.rv && delete s.rv, r.browser = "msie", s.msie = !0), s.edge && (delete s.edge, r.browser = "msedge", s.msedge = !0), s.opr && (r.browser = "opera", s.opera = !0), s.safari && s.android && (r.browser = "android", s.android = !0), s.name = r.browser, s.platform = r.platform;
                for (var o in i) i.hasOwnProperty(o) && delete i[o];
                Object.assign(i, s)
            }(), n.default = i
        }, {}],
        40: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function r(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = n.RuntimeException = function() {
                    function e(t) {
                        s(this, e), this._message = t
                    }
                    return a(e, [{
                        key: "toString",
                        value: function() {
                            return this.name + ": " + this.message
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return "RuntimeException"
                        }
                    }, {
                        key: "message",
                        get: function() {
                            return this._message
                        }
                    }]), e
                }();
            n.IllegalStateException = function(e) {
                function t(e) {
                    return s(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                }
                return r(t, e), a(t, [{
                    key: "name",
                    get: function() {
                        return "IllegalStateException"
                    }
                }]), t
            }(o), n.InvalidArgumentException = function(e) {
                function t(e) {
                    return s(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                }
                return r(t, e), a(t, [{
                    key: "name",
                    get: function() {
                        return "InvalidArgumentException"
                    }
                }]), t
            }(o), n.NotImplementedException = function(e) {
                function t(e) {
                    return s(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                }
                return r(t, e), a(t, [{
                    key: "name",
                    get: function() {
                        return "NotImplementedException"
                    }
                }]), t
            }(o)
        }, {}],
        41: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = e("events"),
                a = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(s),
                o = function() {
                    function e() {
                        i(this, e)
                    }
                    return r(e, null, [{
                        key: "e",
                        value: function(t, n) {
                            t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
                            var i = "[" + t + "] > " + n;
                            e.ENABLE_CALLBACK && e.emitter.emit("log", "error", i), e.ENABLE_ERROR && (console.error ? console.error(i) : console.warn ? console.warn(i) : console.log(i))
                        }
                    }, {
                        key: "i",
                        value: function(t, n) {
                            t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
                            var i = "[" + t + "] > " + n;
                            e.ENABLE_CALLBACK && e.emitter.emit("log", "info", i), e.ENABLE_INFO && (console.info ? console.info(i) : console.log(i))
                        }
                    }, {
                        key: "w",
                        value: function(t, n) {
                            t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
                            var i = "[" + t + "] > " + n;
                            e.ENABLE_CALLBACK && e.emitter.emit("log", "warn", i), e.ENABLE_WARN && (console.warn ? console.warn(i) : console.log(i))
                        }
                    }, {
                        key: "d",
                        value: function(t, n) {
                            t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
                            var i = "[" + t + "] > " + n;
                            e.ENABLE_CALLBACK && e.emitter.emit("log", "debug", i), e.ENABLE_DEBUG && (console.debug ? console.debug(i) : console.log(i))
                        }
                    }, {
                        key: "v",
                        value: function(t, n) {
                            t && !e.FORCE_GLOBAL_TAG || (t = e.GLOBAL_TAG);
                            var i = "[" + t + "] > " + n;
                            e.ENABLE_CALLBACK && e.emitter.emit("log", "verbose", i), e.ENABLE_VERBOSE && console.log(i)
                        }
                    }]), e
                }();
            o.GLOBAL_TAG = "flv.js", o.FORCE_GLOBAL_TAG = !1, o.ENABLE_ERROR = !0, o.ENABLE_INFO = !0, o.ENABLE_WARN = !0, o.ENABLE_DEBUG = !0, o.ENABLE_VERBOSE = !0, o.ENABLE_CALLBACK = !1, o.emitter = new a.default, n.default = o
        }, {
            events: 2
        }],
        42: [function(e, t, n) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                a = e("events"),
                o = i(a),
                u = e("./logger.js"),
                l = i(u),
                d = function() {
                    function e() {
                        r(this, e)
                    }
                    return s(e, null, [{
                        key: "getConfig",
                        value: function() {
                            return {
                                globalTag: l.default.GLOBAL_TAG,
                                forceGlobalTag: l.default.FORCE_GLOBAL_TAG,
                                enableVerbose: l.default.ENABLE_VERBOSE,
                                enableDebug: l.default.ENABLE_DEBUG,
                                enableInfo: l.default.ENABLE_INFO,
                                enableWarn: l.default.ENABLE_WARN,
                                enableError: l.default.ENABLE_ERROR,
                                enableCallback: l.default.ENABLE_CALLBACK
                            }
                        }
                    }, {
                        key: "applyConfig",
                        value: function(e) {
                            l.default.GLOBAL_TAG = e.globalTag, l.default.FORCE_GLOBAL_TAG = e.forceGlobalTag, l.default.ENABLE_VERBOSE = e.enableVerbose, l.default.ENABLE_DEBUG = e.enableDebug, l.default.ENABLE_INFO = e.enableInfo, l.default.ENABLE_WARN = e.enableWarn, l.default.ENABLE_ERROR = e.enableError, l.default.ENABLE_CALLBACK = e.enableCallback
                        }
                    }, {
                        key: "_notifyChange",
                        value: function() {
                            var t = e.emitter;
                            if (t.listenerCount("change") > 0) {
                                var n = e.getConfig();
                                t.emit("change", n)
                            }
                        }
                    }, {
                        key: "registerListener",
                        value: function(t) {
                            e.emitter.addListener("change", t)
                        }
                    }, {
                        key: "removeListener",
                        value: function(t) {
                            e.emitter.removeListener("change", t)
                        }
                    }, {
                        key: "addLogListener",
                        value: function(t) {
                            l.default.emitter.addListener("log", t), l.default.emitter.listenerCount("log") > 0 && (l.default.ENABLE_CALLBACK = !0, e._notifyChange())
                        }
                    }, {
                        key: "removeLogListener",
                        value: function(t) {
                            l.default.emitter.removeListener("log", t), 0 === l.default.emitter.listenerCount("log") && (l.default.ENABLE_CALLBACK = !1, e._notifyChange())
                        }
                    }, {
                        key: "forceGlobalTag",
                        get: function() {
                            return l.default.FORCE_GLOBAL_TAG
                        },
                        set: function(t) {
                            l.default.FORCE_GLOBAL_TAG = t, e._notifyChange()
                        }
                    }, {
                        key: "globalTag",
                        get: function() {
                            return l.default.GLOBAL_TAG
                        },
                        set: function(t) {
                            l.default.GLOBAL_TAG = t, e._notifyChange()
                        }
                    }, {
                        key: "enableAll",
                        get: function() {
                            return l.default.ENABLE_VERBOSE && l.default.ENABLE_DEBUG && l.default.ENABLE_INFO && l.default.ENABLE_WARN && l.default.ENABLE_ERROR
                        },
                        set: function(t) {
                            l.default.ENABLE_VERBOSE = t, l.default.ENABLE_DEBUG = t, l.default.ENABLE_INFO = t, l.default.ENABLE_WARN = t, l.default.ENABLE_ERROR = t, e._notifyChange()
                        }
                    }, {
                        key: "enableDebug",
                        get: function() {
                            return l.default.ENABLE_DEBUG
                        },
                        set: function(t) {
                            l.default.ENABLE_DEBUG = t, e._notifyChange()
                        }
                    }, {
                        key: "enableVerbose",
                        get: function() {
                            return l.default.ENABLE_VERBOSE
                        },
                        set: function(t) {
                            l.default.ENABLE_VERBOSE = t, e._notifyChange()
                        }
                    }, {
                        key: "enableInfo",
                        get: function() {
                            return l.default.ENABLE_INFO
                        },
                        set: function(t) {
                            l.default.ENABLE_INFO = t, e._notifyChange()
                        }
                    }, {
                        key: "enableWarn",
                        get: function() {
                            return l.default.ENABLE_WARN
                        },
                        set: function(t) {
                            l.default.ENABLE_WARN = t, e._notifyChange()
                        }
                    }, {
                        key: "enableError",
                        get: function() {
                            return l.default.ENABLE_ERROR
                        },
                        set: function(t) {
                            l.default.ENABLE_ERROR = t, e._notifyChange()
                        }
                    }]), e
                }();
            d.emitter = new o.default, n.default = d
        }, {
            "./logger.js": 41,
            events: 2
        }],
        43: [function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = function() {
                    function t() {
                        i(this, t)
                    }
                    return r(t, null, [{
                        key: "install",
                        value: function() {
                            Object.setPrototypeOf = Object.setPrototypeOf || function(e, t) {
                                return e.__proto__ = t, e
                            }, Object.assign = Object.assign || function(e) {
                                if (void 0 === e || null === e) throw new TypeError("Cannot convert undefined or null to object");
                                for (var t = Object(e), n = 1; n < arguments.length; n++) {
                                    var i = arguments[n];
                                    if (void 0 !== i && null !== i)
                                        for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r])
                                }
                                return t
                            }, "function" != typeof self.Promise && e("es6-promise").polyfill()
                        }
                    }]), t
                }();
            s.install(), n.default = s
        }, {
            "es6-promise": 1
        }],
        44: [function(e, t, n) {
            "use strict";

            function i(e, t, n) {
                var i = e;
                if (t + n < i.length) {
                    for (; n--;)
                        if (128 != (192 & i[++t])) return !1;
                    return !0
                }
                return !1
            }

            function r(e) {
                for (var t = [], n = e, r = 0, s = e.length; r < s;)
                    if (n[r] < 128) t.push(String.fromCharCode(n[r])), ++r;
                    else {
                        if (n[r] < 192);
                        else if (n[r] < 224) {
                            if (i(n, r, 1)) {
                                var a = (31 & n[r]) << 6 | 63 & n[r + 1];
                                if (a >= 128) {
                                    t.push(String.fromCharCode(65535 & a)), r += 2;
                                    continue
                                }
                            }
                        } else if (n[r] < 240) {
                            if (i(n, r, 2)) {
                                var o = (15 & n[r]) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2];
                                if (o >= 2048 && 55296 != (63488 & o)) {
                                    t.push(String.fromCharCode(65535 & o)), r += 3;
                                    continue
                                }
                            }
                        } else if (n[r] < 248 && i(n, r, 3)) {
                            var u = (7 & n[r]) << 18 | (63 & n[r + 1]) << 12 | (63 & n[r + 2]) << 6 | 63 & n[r + 3];
                            if (u > 65536 && u < 1114112) {
                                u -= 65536, t.push(String.fromCharCode(u >>> 10 | 55296)), t.push(String.fromCharCode(1023 & u | 56320)), r += 4;
                                continue
                            }
                        }
                        t.push(String.fromCharCode(65533)), ++r
                    }
                return t.join("")
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = r
        }, {}]
    }, {}, [21])(21)
});
//# sourceMappingURL=flv.min.js.map