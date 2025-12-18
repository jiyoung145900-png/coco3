!function() {
    var e = {
        343: function(e) {
            "use strict";
            for (var t = [], n = 0; n < 256; ++n)
                t[n] = (n + 256).toString(16).substr(1);
            e.exports = function(e, n) {
                var r = n || 0
                  , i = t;
                return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("")
            }
        },
        944: function(e) {
            "use strict";
            var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (t) {
                var n = new Uint8Array(16);
                e.exports = function() {
                    return t(n),
                    n
                }
            } else {
                var r = new Array(16);
                e.exports = function() {
                    for (var e, t = 0; t < 16; t++)
                        0 == (3 & t) && (e = 4294967296 * Math.random()),
                        r[t] = e >>> ((3 & t) << 3) & 255;
                    return r
                }
            }
        },
        508: function(e, t, n) {
            "use strict";
            var r = n(944)
              , i = n(343);
            e.exports = function(e, t, n) {
                var o = t && n || 0;
                "string" == typeof e && (t = "binary" === e ? new Array(16) : null,
                e = null);
                var a = (e = e || {}).random || (e.rng || r)();
                if (a[6] = 15 & a[6] | 64,
                a[8] = 63 & a[8] | 128,
                t)
                    for (var c = 0; c < 16; ++c)
                        t[o + c] = a[c];
                return t || i(a)
            }
        },
        168: function(e, t, n) {
            "use strict";
            var r = this && this.__assign || function() {
                return r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                ,
                r.apply(this, arguments)
            }
            ;
            t.__esModule = !0;
            var i = n(699)
              , o = n(752)
              , a = n(104)
              , c = n(508);
            !function() {
                function e(e) {
                    var t = "";
                    if (t = window.location.origin ? window.location.origin : "".concat(window.location.protocol, "://").concat(window.location.host),
                    e && "string" == typeof e)
                        if (0 === e.indexOf("/"))
                            t += e;
                        else
                            try {
                                var n = new URL(e);
                                return "".concat(n.protocol, "://").concat(n.host).concat(n.pathname)
                            } catch (e) {}
                    else {
                        var r = window.location.pathname;
                        r && r.length > 0 && (t += r)
                    }
                    return t
                }
                function t(e, t) {
                    for (var n in e) {
                        var r = e[n];
                        void 0 !== t && ("number" != typeof r && "string" != typeof r || (t[n] = r))
                    }
                }
                !function() {
                    var n, u, s = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance, f = "data-cf-beacon", d = document.currentScript || ("function" == typeof document.querySelector ? document.querySelector("script[".concat(f, "]")) : void 0), l = c(), v = [], p = window.__cfBeacon ? window.__cfBeacon : {};
                    if (!p || "single" !== p.load) {
                        if (d) {
                            var m = d.getAttribute(f);
                            if (m)
                                try {
                                    p = r(r({}, p), JSON.parse(m))
                                } catch (e) {}
                            else {
                                var g = d.getAttribute("src");
                                if (g && "function" == typeof URLSearchParams) {
                                    var y = new URLSearchParams(g.replace(/^[^\?]+\??/, ""))
                                      , h = y.get("token");
                                    h && (p.token = h);
                                    var T = y.get("spa");
                                    p.spa = null === T || "true" === T
                                }
                            }
                            p && "multi" !== p.load && (p.load = "single"),
                            window.__cfBeacon = p
                        }
                        if (s && p && p.token) {
                            var w, S, b = !1;
                            document.addEventListener("visibilitychange", (function() {
                                if ("hidden" === document.visibilityState) {
                                    if (L && A()) {
                                        var t = e();
                                        (null == w ? void 0 : w.url) == t && (null == w ? void 0 : w.triggered) || P(),
                                        _(t)
                                    }
                                    !b && w && (b = !0,
                                    B())
                                } else
                                    "visible" === document.visibilityState && (new Date).getTime()
                            }
                            ));
                            var E = {};
                            "function" == typeof PerformanceObserver && ((0,
                            a.onLCP)(x),
                            (0,
                            a.onFID)(x),
                            (0,
                            a.onFCP)(x),
                            (0,
                            a.onINP)(x),
                            (0,
                            a.onTTFB)(x),
                            PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("layout-shift") && (0,
                            a.onCLS)(x));
                            var L = p && (void 0 === p.spa || !0 === p.spa)
                              , C = p.send && p.send.to ? p.send.to : void 0 === p.version ? "https://cloudflareinsights.com/cdn-cgi/rum" : null
                              , P = function(r) {
                                var a = function(r) {
                                    var o, a, c = s.timing, u = s.memory, f = r || e(), d = {
                                        memory: {},
                                        timings: {},
                                        resources: [],
                                        referrer: (o = document.referrer || "",
                                        a = v[v.length - 1],
                                        L && w && a ? a.url : o),
                                        eventType: i.EventType.Load,
                                        firstPaint: 0,
                                        firstContentfulPaint: 0,
                                        startTime: F(),
                                        versions: {
                                            fl: p ? p.version : "",
                                            js: "2024.6.1",
                                            timings: 1
                                        },
                                        pageloadId: l,
                                        location: f,
                                        nt: S,
                                        serverTimings: I()
                                    };
                                    if (null == n) {
                                        if ("function" == typeof s.getEntriesByType) {
                                            var m = s.getEntriesByType("navigation");
                                            m && Array.isArray(m) && m.length > 0 && (d.timingsV2 = {},
                                            d.versions.timings = 2,
                                            d.dt = m[0].deliveryType,
                                            delete d.timings,
                                            t(m[0], d.timingsV2))
                                        }
                                        1 === d.versions.timings && t(c, d.timings),
                                        t(u, d.memory)
                                    } else
                                        O(d);
                                    return d.firstPaint = k("first-paint"),
                                    d.firstContentfulPaint = k("first-contentful-paint"),
                                    p && (p.icTag && (d.icTag = p.icTag),
                                    d.siteToken = p.token),
                                    void 0 !== n && (delete d.timings,
                                    delete d.memory),
                                    d
                                }(r);
                                a && p && (a.resources = [],
                                p && ((0,
                                o.sendObjectBeacon)("", a, (function() {}
                                ), !1, C),
                                void 0 !== p.forward && void 0 !== p.forward.url && (0,
                                o.sendObjectBeacon)("", a, (function() {}
                                ), !1, p.forward.url)))
                            }
                              , B = function() {
                                var t = function() {
                                    var t = s.getEntriesByType("navigation")[0]
                                      , n = "";
                                    try {
                                        n = "function" == typeof s.getEntriesByType ? new URL(null == t ? void 0 : t.name).pathname : u ? new URL(u).pathname : window.location.pathname
                                    } catch (e) {}
                                    var r = {
                                        referrer: document.referrer || "",
                                        eventType: i.EventType.WebVitalsV2,
                                        versions: {
                                            js: "2024.6.1"
                                        },
                                        pageloadId: l,
                                        location: e(),
                                        landingPath: n,
                                        startTime: F(),
                                        nt: S,
                                        serverTimings: I()
                                    };
                                    return p && (p.version && (r.versions.fl = p.version),
                                    p.icTag && (r.icTag = p.icTag),
                                    r.siteToken = p.token),
                                    E && ["lcp", "fid", "cls", "fcp", "ttfb", "inp"].forEach((function(e) {
                                        r[e] = {
                                            value: -1,
                                            path: void 0
                                        },
                                        E[e] && void 0 !== E[e].value && (r[e] = E[e])
                                    }
                                    )),
                                    O(r),
                                    r
                                }();
                                p && (0,
                                o.sendObjectBeacon)("", t, (function() {}
                                ), !0, C)
                            }
                              , R = function() {
                                var t = window.__cfRl && window.__cfRl.done || window.__cfQR && window.__cfQR.done;
                                t ? t.then(P) : P(),
                                w = {
                                    id: l,
                                    url: e(),
                                    ts: (new Date).getTime(),
                                    triggered: !0
                                }
                            };
                            "complete" === window.document.readyState ? R() : window.addEventListener("load", (function() {
                                window.setTimeout(R)
                            }
                            ));
                            var A = function() {
                                return L && 0 === v.filter((function(e) {
                                    return e.id === l
                                }
                                )).length
                            }
                              , _ = function(e) {
                                v.push({
                                    id: l,
                                    url: e,
                                    ts: (new Date).getTime()
                                }),
                                v.length > 3 && v.shift()
                            };
                            L && (u = e(),
                            function(t) {
                                var r = t.pushState;
                                if (r) {
                                    var i = function() {
                                        l = c()
                                    };
                                    t.pushState = function(o, a, c) {
                                        n = e(c);
                                        var u = e()
                                          , s = !0;
                                        return n == u && (s = !1),
                                        s && (A() && ((null == w ? void 0 : w.url) == u && (null == w ? void 0 : w.triggered) || P(u),
                                        _(u)),
                                        i()),
                                        r.apply(t, [o, a, c])
                                    }
                                    ,
                                    window.addEventListener("popstate", (function(t) {
                                        A() && ((null == w ? void 0 : w.url) == n && (null == w ? void 0 : w.triggered) || P(n),
                                        _(n)),
                                        n = e(),
                                        i()
                                    }
                                    ))
                                }
                            }(window.history))
                        }
                    }
                    function x(e) {
                        var t, n, r, i, o, a, c, u = window.location.pathname;
                        switch (S || (S = e.navigationType),
                        "INP" !== e.name && (E[e.name.toLowerCase()] = {
                            value: e.value,
                            path: u
                        }),
                        e.name) {
                        case "CLS":
                            (c = e.attribution) && E.cls && (E.cls.element = c.largestShiftTarget,
                            E.cls.currentRect = null === (t = c.largestShiftSource) || void 0 === t ? void 0 : t.currentRect,
                            E.cls.previousRect = null === (n = c.largestShiftSource) || void 0 === n ? void 0 : n.previousRect);
                            break;
                        case "FID":
                            (c = e.attribution) && E.fid && (E.fid.element = c.eventTarget,
                            E.fid.name = c.eventType);
                            break;
                        case "LCP":
                            (c = e.attribution) && E.lcp && (E.lcp.element = c.element,
                            E.lcp.size = null === (r = c.lcpEntry) || void 0 === r ? void 0 : r.size,
                            E.lcp.url = c.url,
                            E.lcp.rld = c.resourceLoadDelay,
                            E.lcp.rlt = c.resourceLoadTime,
                            E.lcp.erd = c.elementRenderDelay,
                            E.lcp.it = null === (i = c.lcpResourceEntry) || void 0 === i ? void 0 : i.initiatorType,
                            E.lcp.fp = null === (a = null === (o = c.lcpEntry) || void 0 === o ? void 0 : o.element) || void 0 === a ? void 0 : a.getAttribute("fetchpriority"));
                            break;
                        case "INP":
                            (null == E.inp || Number(E.inp.value) < Number(e.value)) && (E.inp = {
                                value: Number(e.value),
                                path: u
                            },
                            (c = e.attribution) && E.inp && (E.inp.element = c.eventTarget,
                            E.inp.name = c.eventType))
                        }
                    }
                    function F() {
                        return s.timeOrigin
                    }
                    function I() {
                        if (p && p.serverTiming) {
                            for (var e = [], t = 0, n = ["navigation", "resource"]; t < n.length; t++)
                                for (var r = n[t], i = 0, o = s.getEntriesByType(r); i < o.length; i++) {
                                    var a = o[i]
                                      , c = a.name
                                      , u = a.serverTiming;
                                    if (u) {
                                        if ("resource" === r) {
                                            var f = p.serverTiming.location_startswith;
                                            if (!f || !Array.isArray(f))
                                                continue;
                                            for (var d = !1, l = 0, v = f; l < v.length; l++) {
                                                var m = v[l];
                                                if (c.startsWith(m)) {
                                                    d = !0;
                                                    break
                                                }
                                            }
                                            if (!d)
                                                continue
                                        }
                                        for (var g = 0, y = u; g < y.length; g++) {
                                            var h = y[g]
                                              , T = h.name
                                              , w = h.description
                                              , S = h.duration;
                                            if (p.serverTiming.name && p.serverTiming.name[T])
                                                try {
                                                    var b = new URL(c);
                                                    e.push({
                                                        location: "resource" === r ? "".concat(b.origin).concat(b.pathname) : void 0,
                                                        name: T,
                                                        dur: S,
                                                        desc: w
                                                    })
                                                } catch (e) {}
                                        }
                                    }
                                }
                            return e
                        }
                    }
                    function O(e) {
                        if ("function" == typeof s.getEntriesByType) {
                            var n = s.getEntriesByType("navigation")
                              , r = {};
                            e.timingsV2 = {},
                            n && n[0] && (n[0].nextHopProtocol && (r.nextHopProtocol = n[0].nextHopProtocol),
                            n[0].transferSize && (r.transferSize = n[0].transferSize),
                            n[0].decodedBodySize && (r.decodedBodySize = n[0].decodedBodySize),
                            e.dt = n[0].deliveryType),
                            t(r, e.timingsV2)
                        }
                    }
                    function k(e) {
                        var t;
                        if ("first-contentful-paint" === e && E.fcp && E.fcp.value)
                            return E.fcp.value;
                        if ("function" == typeof s.getEntriesByType) {
                            var n = null === (t = s.getEntriesByType("paint")) || void 0 === t ? void 0 : t.filter((function(t) {
                                return t.name === e
                            }
                            ))[0];
                            return n ? n.startTime : 0
                        }
                        return 0
                    }
                }()
            }()
        },
        752: function(e, t) {
            "use strict";
            t.__esModule = !0,
            t.sendObjectBeacon = void 0,
            t.sendObjectBeacon = function(e, t, n, r, i) {
                void 0 === r && (r = !1),
                void 0 === i && (i = null);
                var o = i || (t.siteToken && t.versions.fl ? "/cdn-cgi/rum?".concat(e) : "/cdn-cgi/beacon/performance?".concat(e))
                  , a = !0;
                if (navigator && "string" == typeof navigator.userAgent)
                    try {
                        var c = navigator.userAgent.match(/Chrome\/([0-9]+)/);
                        c && c[0].toLowerCase().indexOf("chrome") > -1 && parseInt(c[1]) < 81 && (a = !1)
                    } catch (e) {}
                if (navigator && "function" == typeof navigator.sendBeacon && a && r) {
                    t.st = 1;
                    var u = JSON.stringify(t)
                      , s = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
                    null == s || s(o, new Blob([u],{
                        type: "application/json"
                    }))
                } else {
                    t.st = 2,
                    u = JSON.stringify(t);
                    var f = new XMLHttpRequest;
                    n && (f.onreadystatechange = function() {
                        4 == this.readyState && 204 == this.status && n()
                    }
                    ),
                    f.open("POST", o, !0),
                    f.setRequestHeader("content-type", "application/json"),
                    f.send(u)
                }
            }
        },
        699: function(e, t) {
            "use strict";
            var n, r;
            t.__esModule = !0,
            t.FetchPriority = t.EventType = void 0,
            (r = t.EventType || (t.EventType = {}))[r.Load = 1] = "Load",
            r[r.Additional = 2] = "Additional",
            r[r.WebVitalsV2 = 3] = "WebVitalsV2",
            (n = t.FetchPriority || (t.FetchPriority = {})).High = "high",
            n.Low = "low",
            n.Auto = "auto"
        },
        104: function(e, t) {
            !function(e) {
                "use strict";
                var t, n, r, i, o, a = function() {
                    return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
                }, c = function(e) {
                    if ("loading" === document.readyState)
                        return "loading";
                    var t = a();
                    if (t) {
                        if (e < t.domInteractive)
                            return "loading";
                        if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart)
                            return "dom-interactive";
                        if (0 === t.domComplete || e < t.domComplete)
                            return "dom-content-loaded"
                    }
                    return "complete"
                }, u = function(e) {
                    var t = e.nodeName;
                    return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, "")
                }, s = function(e, t) {
                    var n = "";
                    try {
                        for (; e && 9 !== e.nodeType; ) {
                            var r = e
                              , i = r.id ? "#" + r.id : u(r) + (r.classList && r.classList.value && r.classList.value.trim() && r.classList.value.trim().length ? "." + r.classList.value.trim().replace(/\s+/g, ".") : "");
                            if (n.length + i.length > (t || 100) - 1)
                                return n || i;
                            if (n = n ? i + ">" + n : i,
                            r.id)
                                break;
                            e = r.parentNode
                        }
                    } catch (e) {}
                    return n
                }, f = -1, d = function() {
                    return f
                }, l = function(e) {
                    addEventListener("pageshow", (function(t) {
                        t.persisted && (f = t.timeStamp,
                        e(t))
                    }
                    ), !0)
                }, v = function() {
                    var e = a();
                    return e && e.activationStart || 0
                }, p = function(e, t) {
                    var n = a()
                      , r = "navigate";
                    return d() >= 0 ? r = "back-forward-cache" : n && (document.prerendering || v() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))),
                    {
                        name: e,
                        value: void 0 === t ? -1 : t,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                        navigationType: r
                    }
                }, m = function(e, t, n) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                            var r = new PerformanceObserver((function(e) {
                                Promise.resolve().then((function() {
                                    t(e.getEntries())
                                }
                                ))
                            }
                            ));
                            return r.observe(Object.assign({
                                type: e,
                                buffered: !0
                            }, n || {})),
                            r
                        }
                    } catch (e) {}
                }, g = function(e, t, n, r) {
                    var i, o;
                    return function(a) {
                        t.value >= 0 && (a || r) && ((o = t.value - (i || 0)) || void 0 === i) && (i = t.value,
                        t.delta = o,
                        t.rating = function(e, t) {
                            return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
                        }(t.value, n),
                        e(t))
                    }
                }, y = function(e) {
                    requestAnimationFrame((function() {
                        return requestAnimationFrame((function() {
                            return e()
                        }
                        ))
                    }
                    ))
                }, h = function(e) {
                    var t = function(t) {
                        "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
                    };
                    addEventListener("visibilitychange", t, !0),
                    addEventListener("pagehide", t, !0)
                }, T = function(e) {
                    var t = !1;
                    return function(n) {
                        t || (e(n),
                        t = !0)
                    }
                }, w = -1, S = function() {
                    return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
                }, b = function(e) {
                    "hidden" === document.visibilityState && w > -1 && (w = "visibilitychange" === e.type ? e.timeStamp : 0,
                    L())
                }, E = function() {
                    addEventListener("visibilitychange", b, !0),
                    addEventListener("prerenderingchange", b, !0)
                }, L = function() {
                    removeEventListener("visibilitychange", b, !0),
                    removeEventListener("prerenderingchange", b, !0)
                }, C = function() {
                    return w < 0 && (w = S(),
                    E(),
                    l((function() {
                        setTimeout((function() {
                            w = S(),
                            E()
                        }
                        ), 0)
                    }
                    ))),
                    {
                        get firstHiddenTime() {
                            return w
                        }
                    }
                }, P = function(e) {
                    document.prerendering ? addEventListener("prerenderingchange", (function() {
                        return e()
                    }
                    ), !0) : e()
                }, B = [1800, 3e3], R = function(e, t) {
                    t = t || {},
                    P((function() {
                        var n, r = C(), i = p("FCP"), o = m("paint", (function(e) {
                            e.forEach((function(e) {
                                "first-contentful-paint" === e.name && (o.disconnect(),
                                e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - v(), 0),
                                i.entries.push(e),
                                n(!0)))
                            }
                            ))
                        }
                        ));
                        o && (n = g(e, i, B, t.reportAllChanges),
                        l((function(r) {
                            i = p("FCP"),
                            n = g(e, i, B, t.reportAllChanges),
                            y((function() {
                                i.value = performance.now() - r.timeStamp,
                                n(!0)
                            }
                            ))
                        }
                        )))
                    }
                    ))
                }, A = [.1, .25], _ = {
                    passive: !0,
                    capture: !0
                }, x = new Date, F = function(e, i) {
                    t || (t = i,
                    n = e,
                    r = new Date,
                    k(removeEventListener),
                    I())
                }, I = function() {
                    if (n >= 0 && n < r - x) {
                        var e = {
                            entryType: "first-input",
                            name: t.type,
                            target: t.target,
                            cancelable: t.cancelable,
                            startTime: t.timeStamp,
                            processingStart: t.timeStamp + n
                        };
                        i.forEach((function(t) {
                            t(e)
                        }
                        )),
                        i = []
                    }
                }, O = function(e) {
                    if (e.cancelable) {
                        var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                        "pointerdown" == e.type ? function(e, t) {
                            var n = function() {
                                F(e, t),
                                i()
                            }
                              , r = function() {
                                i()
                            }
                              , i = function() {
                                removeEventListener("pointerup", n, _),
                                removeEventListener("pointercancel", r, _)
                            };
                            addEventListener("pointerup", n, _),
                            addEventListener("pointercancel", r, _)
                        }(t, e) : F(t, e)
                    }
                }, k = function(e) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                        return e(t, O, _)
                    }
                    ))
                }, M = [100, 300], D = function(e, r) {
                    r = r || {},
                    P((function() {
                        var o, a = C(), c = p("FID"), u = function(e) {
                            e.startTime < a.firstHiddenTime && (c.value = e.processingStart - e.startTime,
                            c.entries.push(e),
                            o(!0))
                        }, s = function(e) {
                            e.forEach(u)
                        }, f = m("first-input", s);
                        o = g(e, c, M, r.reportAllChanges),
                        f && h(T((function() {
                            s(f.takeRecords()),
                            f.disconnect()
                        }
                        ))),
                        f && l((function() {
                            var a;
                            c = p("FID"),
                            o = g(e, c, M, r.reportAllChanges),
                            i = [],
                            n = -1,
                            t = null,
                            k(addEventListener),
                            a = u,
                            i.push(a),
                            I()
                        }
                        ))
                    }
                    ))
                }, N = 0, V = 1 / 0, j = 0, q = function(e) {
                    e.forEach((function(e) {
                        e.interactionId && (V = Math.min(V, e.interactionId),
                        j = Math.max(j, e.interactionId),
                        N = j ? (j - V) / 7 + 1 : 0)
                    }
                    ))
                }, H = function() {
                    return o ? N : performance.interactionCount || 0
                }, z = function() {
                    "interactionCount"in performance || o || (o = m("event", q, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }))
                }, U = [200, 500], J = 0, W = function() {
                    return H() - J
                }, Q = [], X = {}, G = function(e) {
                    var t = Q[Q.length - 1]
                      , n = X[e.interactionId];
                    if (n || Q.length < 10 || e.duration > t.latency) {
                        if (n)
                            n.entries.push(e),
                            n.latency = Math.max(n.latency, e.duration);
                        else {
                            var r = {
                                id: e.interactionId,
                                latency: e.duration,
                                entries: [e]
                            };
                            X[r.id] = r,
                            Q.push(r)
                        }
                        Q.sort((function(e, t) {
                            return t.latency - e.latency
                        }
                        )),
                        Q.splice(10).forEach((function(e) {
                            delete X[e.id]
                        }
                        ))
                    }
                }, K = [2500, 4e3], Y = {}, Z = [800, 1800], $ = function e(t) {
                    document.prerendering ? P((function() {
                        return e(t)
                    }
                    )) : "complete" !== document.readyState ? addEventListener("load", (function() {
                        return e(t)
                    }
                    ), !0) : setTimeout(t, 0)
                }, ee = function(e, t) {
                    t = t || {};
                    var n = p("TTFB")
                      , r = g(e, n, Z, t.reportAllChanges);
                    $((function() {
                        var i = a();
                        if (i) {
                            var o = i.responseStart;
                            if (o <= 0 || o > performance.now())
                                return;
                            n.value = Math.max(o - v(), 0),
                            n.entries = [i],
                            r(!0),
                            l((function() {
                                n = p("TTFB", 0),
                                (r = g(e, n, Z, t.reportAllChanges))(!0)
                            }
                            ))
                        }
                    }
                    ))
                };
                e.CLSThresholds = A,
                e.FCPThresholds = B,
                e.FIDThresholds = M,
                e.INPThresholds = U,
                e.LCPThresholds = K,
                e.TTFBThresholds = Z,
                e.onCLS = function(e, t) {
                    !function(e, t) {
                        t = t || {},
                        R(T((function() {
                            var n, r = p("CLS", 0), i = 0, o = [], a = function(e) {
                                e.forEach((function(e) {
                                    if (!e.hadRecentInput) {
                                        var t = o[0]
                                          , n = o[o.length - 1];
                                        i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value,
                                        o.push(e)) : (i = e.value,
                                        o = [e])
                                    }
                                }
                                )),
                                i > r.value && (r.value = i,
                                r.entries = o,
                                n())
                            }, c = m("layout-shift", a);
                            c && (n = g(e, r, A, t.reportAllChanges),
                            h((function() {
                                a(c.takeRecords()),
                                n(!0)
                            }
                            )),
                            l((function() {
                                i = 0,
                                r = p("CLS", 0),
                                n = g(e, r, A, t.reportAllChanges),
                                y((function() {
                                    return n()
                                }
                                ))
                            }
                            )),
                            setTimeout(n, 0))
                        }
                        )))
                    }((function(t) {
                        !function(e) {
                            if (e.entries.length) {
                                var t = e.entries.reduce((function(e, t) {
                                    return e && e.value > t.value ? e : t
                                }
                                ));
                                if (t && t.sources && t.sources.length) {
                                    var n = (r = t.sources).find((function(e) {
                                        return e.node && 1 === e.node.nodeType
                                    }
                                    )) || r[0];
                                    if (n)
                                        return void (e.attribution = {
                                            largestShiftTarget: s(n.node),
                                            largestShiftTime: t.startTime,
                                            largestShiftValue: t.value,
                                            largestShiftSource: n,
                                            largestShiftEntry: t,
                                            loadState: c(t.startTime)
                                        })
                                }
                            }
                            var r;
                            e.attribution = {}
                        }(t),
                        e(t)
                    }
                    ), t)
                }
                ,
                e.onFCP = function(e, t) {
                    R((function(t) {
                        !function(e) {
                            if (e.entries.length) {
                                var t = a()
                                  , n = e.entries[e.entries.length - 1];
                                if (t) {
                                    var r = t.activationStart || 0
                                      , i = Math.max(0, t.responseStart - r);
                                    return void (e.attribution = {
                                        timeToFirstByte: i,
                                        firstByteToFCP: e.value - i,
                                        loadState: c(e.entries[0].startTime),
                                        navigationEntry: t,
                                        fcpEntry: n
                                    })
                                }
                            }
                            e.attribution = {
                                timeToFirstByte: 0,
                                firstByteToFCP: e.value,
                                loadState: c(d())
                            }
                        }(t),
                        e(t)
                    }
                    ), t)
                }
                ,
                e.onFID = function(e, t) {
                    D((function(t) {
                        !function(e) {
                            var t = e.entries[0];
                            e.attribution = {
                                eventTarget: s(t.target),
                                eventType: t.name,
                                eventTime: t.startTime,
                                eventEntry: t,
                                loadState: c(t.startTime)
                            }
                        }(t),
                        e(t)
                    }
                    ), t)
                }
                ,
                e.onINP = function(e, t) {
                    !function(e, t) {
                        t = t || {},
                        P((function() {
                            var n;
                            z();
                            var r, i = p("INP"), o = function(e) {
                                e.forEach((function(e) {
                                    e.interactionId && G(e),
                                    "first-input" === e.entryType && !Q.some((function(t) {
                                        return t.entries.some((function(t) {
                                            return e.duration === t.duration && e.startTime === t.startTime
                                        }
                                        ))
                                    }
                                    )) && G(e)
                                }
                                ));
                                var t, n = (t = Math.min(Q.length - 1, Math.floor(W() / 50)),
                                Q[t]);
                                n && n.latency !== i.value && (i.value = n.latency,
                                i.entries = n.entries,
                                r())
                            }, a = m("event", o, {
                                durationThreshold: null !== (n = t.durationThreshold) && void 0 !== n ? n : 40
                            });
                            r = g(e, i, U, t.reportAllChanges),
                            a && ("PerformanceEventTiming"in window && "interactionId"in PerformanceEventTiming.prototype && a.observe({
                                type: "first-input",
                                buffered: !0
                            }),
                            h((function() {
                                o(a.takeRecords()),
                                i.value < 0 && W() > 0 && (i.value = 0,
                                i.entries = []),
                                r(!0)
                            }
                            )),
                            l((function() {
                                Q = [],
                                J = H(),
                                i = p("INP"),
                                r = g(e, i, U, t.reportAllChanges)
                            }
                            )))
                        }
                        ))
                    }((function(t) {
                        !function(e) {
                            if (e.entries.length) {
                                var t = e.entries.sort((function(e, t) {
                                    return t.duration - e.duration || t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart)
                                }
                                ))[0]
                                  , n = e.entries.find((function(e) {
                                    return e.target
                                }
                                ));
                                e.attribution = {
                                    eventTarget: s(n && n.target),
                                    eventType: t.name,
                                    eventTime: t.startTime,
                                    eventEntry: t,
                                    loadState: c(t.startTime)
                                }
                            } else
                                e.attribution = {}
                        }(t),
                        e(t)
                    }
                    ), t)
                }
                ,
                e.onLCP = function(e, t) {
                    !function(e, t) {
                        t = t || {},
                        P((function() {
                            var n, r = C(), i = p("LCP"), o = function(e) {
                                var t = e[e.length - 1];
                                t && t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - v(), 0),
                                i.entries = [t],
                                n())
                            }, a = m("largest-contentful-paint", o);
                            if (a) {
                                n = g(e, i, K, t.reportAllChanges);
                                var c = T((function() {
                                    Y[i.id] || (o(a.takeRecords()),
                                    a.disconnect(),
                                    Y[i.id] = !0,
                                    n(!0))
                                }
                                ));
                                ["keydown", "click"].forEach((function(e) {
                                    addEventListener(e, (function() {
                                        return setTimeout(c, 0)
                                    }
                                    ), !0)
                                }
                                )),
                                h(c),
                                l((function(r) {
                                    i = p("LCP"),
                                    n = g(e, i, K, t.reportAllChanges),
                                    y((function() {
                                        i.value = performance.now() - r.timeStamp,
                                        Y[i.id] = !0,
                                        n(!0)
                                    }
                                    ))
                                }
                                ))
                            }
                        }
                        ))
                    }((function(t) {
                        !function(e) {
                            if (e.entries.length) {
                                var t = a();
                                if (t) {
                                    var n = t.activationStart || 0
                                      , r = e.entries[e.entries.length - 1]
                                      , i = r.url && performance.getEntriesByType("resource").filter((function(e) {
                                        return e.name === r.url
                                    }
                                    ))[0]
                                      , o = Math.max(0, t.responseStart - n)
                                      , c = Math.max(o, i ? (i.requestStart || i.startTime) - n : 0)
                                      , u = Math.max(c, i ? i.responseEnd - n : 0)
                                      , f = Math.max(u, r ? r.startTime - n : 0)
                                      , d = {
                                        element: s(r.element),
                                        timeToFirstByte: o,
                                        resourceLoadDelay: c - o,
                                        resourceLoadTime: u - c,
                                        elementRenderDelay: f - u,
                                        navigationEntry: t,
                                        lcpEntry: r
                                    };
                                    return r.url && (d.url = r.url),
                                    i && (d.lcpResourceEntry = i),
                                    void (e.attribution = d)
                                }
                            }
                            e.attribution = {
                                timeToFirstByte: 0,
                                resourceLoadDelay: 0,
                                resourceLoadTime: 0,
                                elementRenderDelay: e.value
                            }
                        }(t),
                        e(t)
                    }
                    ), t)
                }
                ,
                e.onTTFB = function(e, t) {
                    ee((function(t) {
                        !function(e) {
                            if (e.entries.length) {
                                var t = e.entries[0]
                                  , n = t.activationStart || 0
                                  , r = Math.max(t.domainLookupStart - n, 0)
                                  , i = Math.max(t.connectStart - n, 0)
                                  , o = Math.max(t.requestStart - n, 0);
                                e.attribution = {
                                    waitingTime: r,
                                    dnsTime: i - r,
                                    connectionTime: o - i,
                                    requestTime: e.value - o,
                                    navigationEntry: t
                                }
                            } else
                                e.attribution = {
                                    waitingTime: 0,
                                    dnsTime: 0,
                                    connectionTime: 0,
                                    requestTime: 0
                                }
                        }(t),
                        e(t)
                    }
                    ), t)
                }
            }(t)
        }
    }
      , t = {};
    !function n(r) {
        var i = t[r];
        if (void 0 !== i)
            return i.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
        o.exports
    }(168)
}();

//自动计算到帐金额
function Gtnum(S){
	var V = parseFloat($('#money').val());
	if(isNaN(V)) V = 0;
	V = V.toFixed(2);
	var P = 0;
	if(V > 0){
		if(S.indexOf('%') > 0){
			S = parseFloat(S.replace('%',''));
			P = (V * S / 100).toFixed(2);
		} else {
			P = parseFloat(S).toFixed(2);
		}
	}
	var H = (V - P).toFixed(2);
	$('#Gtnum').text(H);
	$('#Gsnum').text(P);
}

//货币格式化
function Gsnum(s){
	var v = parseFloat(s);
	if(isNaN(v)) v = 0;
	var n = parseFloat(v.toFixed(2));
	return n;
}

//根据语言格式化数字01
function GformatNum(amount) {
    // 从cookie中获取用户选择的语言
    const language = getCookie('zh_choose'); // 假设有一个获取cookie的函数

    // 根据语言格式化金额
    switch (language) {
        case 'k': // 韩语
            return numberFormat(amount, 0); // 去掉小数部分并使用千位分隔符
            
        case 'e': // 英文
            return numberFormat(amount, 2); // 使用千位分隔符并保留小数点后两位
            
        case 'j': // 日本
            return numberFormat(amount, 0); // 日元符号 + 格式化
            
        case 'v': // 越南
            return numberFormat(amount, 2) + ' ₫'; // 格式化 + 越南盾符号
            
        case 's': // 简体中文
            
        default:
            return amount.toString(); // 不做任何格式化，直接返回原始数据
    }
}

//根据语言格式化数字02---辅助函数，用于格式化数字
function numberFormat(amount, decimalPlaces) {
    // 确保amount是数字
    amount = parseFloat(amount);
    if (isNaN(amount)) {
        return '';
    }

    // 根据需要设置小数位数，并将其转换为字符串
    const fixedAmount = amount.toFixed(decimalPlaces);
    let parts = fixedAmount.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 添加千位分隔符

    return parts.join('.'); // 返回格式化后的字符串
}

//根据语言格式化数字02--- 示例：获取cookie的函数
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}


//秒格式化
function getTime(nS) {
	return (Math.floor(nS/3600) ? Math.floor(nS/3600)+':'+Math.floor(nS%3600/60) : Math.floor(nS/60))+':'+(nS%60/100).toFixed(2).slice(-2);
}
//时间格式化
function getLocalTime1(nS) {
	return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,'');
}

//时间格式化
function getLocalTime(nS, type) {
	var newDate = new Date();
	newDate.setTime(nS * 1000);
	Date.prototype.format = function(format) {
		var date = {
			"M+": this.getMonth() + 1,
			"d+": this.getDate(),
			"h+": this.getHours(),
			"m+": this.getMinutes(),
			"s+": this.getSeconds(),
			"q+": Math.floor((this.getMonth() + 3) / 3),
			"S+": this.getMilliseconds()
		};
		if (/(y+)/i.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		for (var k in date) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
			}
		}
		return format;
	}
	type = type ? type : 'yyyy-MM-dd hh:mm:ss';
	return newDate.format(type);
}

//播放开奖音乐
function playSound() {
	var a = $('#SOUND');
	if (a.length == 0) {
		a = $('<audio id="SOUND"><source src="statics/images/kaijiang.mp3" type="audio/mpeg"/></audio>').appendTo($('body'))[0];
		if (a.load) {
			a.load()
		}
	} else {
		a = a[0]
	}
	if (a.play) {
		a.play()
	}
}

//播放倒计时音乐
function playSound_Djs() {
	var a = $('#DAOJISHI');
	if (a.length == 0) {
		a = $('<audio id="DAOJISHI"><source src="statics/images/daojishi.mp3" type="audio/mpeg"/></audio>').appendTo($('body'))[0];
		if (a.load) {
			a.load()
		}
	} else {
		a = a[0]
	}
	if (a.play) {
		a.play()
	}
}

//隐藏部分字符串
//frontLen: 前面需要保留几位    endLen: 后面需要保留几位
function hiddenStr(str, frontLen, endLen) {
	var len = str.length - frontLen - endLen;
	if (len <= 0) {
		return str.substring(0, 1) + '***';
	} else if (len <= 2) {
		frontLen = 1;
		endLen = 1;
	}
	var xing = '';
	for(var i = 0; i < len; i++) {
		xing += '*';
	}
	return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
}

//生成随机字符串
function randomStr(len) {
	len = len || 6;
	var chars = 'abcdefhijkmnprstwxyz123456789';
	var maxPos = chars.length;
	var Str = '';
	for(i = 0; i < len; i++) {
		Str += chars.charAt(Math.floor(Math.random() * maxPos));
	}
	return Str;
}

$(function(){
	//TOP效果
	$(window).scroll(function(){
		if ($(window).scrollTop()>200){
			$('#s_top').fadeIn(500);
		}else{
			$('#s_top').fadeOut(500);
		}
	});
	$('#s_top').click(function(){
		$('body,html').animate({scrollTop:0},500);
		return false;
	});

	//客服
	var button_toggle = true;
	$(".show_box").live("mouseover", function(){
		var tip_top;
		var show= $(this).attr('show');
		var hide= $(this).attr('hide');
		tip_top = show == 'tel' ?  42 :  -18;
		button_toggle = false;
		$("#show_box").css("top" , tip_top).show().find(".flag_"+show).show();
		$(".flag_"+hide).hide();
	}).live("mouseout", function(){
		button_toggle = true;
		hideRightTip();
	});
	$("#show_box").live("mouseover", function(){
		button_toggle = false;
		$(this).show();
	}).live("mouseout", function(){
		button_toggle = true;
		hideRightTip();
	});
	function hideRightTip(){
		setTimeout(function(){
			if( button_toggle ) $("#show_box").hide();
		}, 500);
	}

});
//layer图标 0:警告1:正确2:错误3:询问4:锁5:苦脸6:笑脸
/**
 * layer 函数封装，无确认提示AJAX操作
 * url 地址
 * types 无id=无动作,1=AJAX删除,2=AJAX替换
*/
function showmin(url, types, fun) {
	var loading = layer.load(2);
	$.get(url, '', function(sdata) {
		var data = $.parseJSON(sdata);
		layer.close(loading);
		if (data.status == 'y') {
			if (data.id) {
				if (types == 1) { //AJAX删除ID
					$('#' + data.id).detach();
				} else if (types == 2) { //AJAX替换ID,数组
					var len = data.id.length;
					for (var i = 0; i < len; i++) {
						$('#' + data.id[i].id).html(data.id[i].htm);
					}
				}
			}
			if (data.info) {
				layer.msg(data.info, {
					icon: 6
				});
			}
			if (fun) {
				fun(data.rid);
			}
		} else {
			layer.msg(data.info, {
				icon: 5
			});
		}
	});
}
/**
 * 确认窗口 API
 * url 地址
 * msg 消息提示信息
 * type 类型0=AJAX删除,1=AJAX替换,2=确认跳转,3=表单提交
 * load 显示等待
 * re 成功是否刷新页面
 * 返回：run=失败成功,loading=关闭等待,msg=操作状态,id=操作信息ID
*/
function showwindow(url, msg, type, load, re) {
	layer.confirm(msg, {
		title: '信息',
		btn: ['确认', '取消'] //按钮
	}, function() {
		if (type == 3) { //表单提交
			$('#' + url).submit(); //提交
		} else if (type == 2) { //确认跳转
			location.href = url;
		} else { //AJAX
			if (load == 1) var loading = layer.load(2);
			$.get(url, '', function(sdata) {
				var data = $.parseJSON(sdata);
				if (load == 1) layer.close(loading);
				if (data.run == 'yes') {
					if (data.id) {
						if (!type) { //AJAX删除ID
							$('#' + data.id).detach();
						} else if (type == 1) { //AJAX替换ID,数组
							var len = data.id.length;
							for (var i = 0; i < len; i++) {
								$('#' + data.id[i].id).html(data.id[i].htm);
							}
						}
					}
					layer.msg(data.msg, {
						icon: 6
					});
					if (re) {
						setTimeout(function() {
							location.reload();
						}, 1000);
					}
				} else {
					layer.msg(data.msg, {
						icon: 5
					});
				}
			});
		}
	}, function() {

	});
}

/**
 * tips触发层
 * id 触发#id或.class
 * msg 消息提示信息
 * time 消失时间，毫秒
 * btn 0不显示关闭按钮
 * color 颜色
*/
function showtips(id, msg, time, btn, color) {
	layer.tips(msg, id, {
		tips: [1, color ? color : '#333C59'], //配置颜色
		time: time ? time : 3000,
		closeBtn: btn ? btn : 0 //显示关闭按钮
	});
}

/**
 * layer 弹出窗口函数封装
 * type 弹窗类型 0默认信息框 1页面层 2iframe层 3加载层 4tips层
 * data 对应弹窗类型的数据 1页面层元素 2URL 3html
 * title 窗口标题
 * w 窗口宽度
 * h 窗口高度
 * mm 最大化最小化按钮
 * shade 遮罩层
 * mw 最大宽度
 * mh 最大高度
 * index 自定义层
 * full 是否全屏
 * anim 0默认平滑放大 1从上掉落 2从最底部往上滑入 3从左滑入 4从左翻滚 5渐显 6抖动
 */
var win;
function showlayer(type, title, data, w, h, mm, shade, mw, mh, index, full, anim) {
	win = layer.open({
		type: type,
		content: data, //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
		title: title ? title : false, //不显示标题
		area: w && h ? [w, h] : 'auto',
		maxmin: mm ? false : true, //默认开启最大化最小化按钮
		shade: shade ? shade : false, //显示遮罩层shade: 0.2 | shade: [0.2, '#000']
		shadeClose: true, //是否点击遮罩关闭
		maxWidth: mw ? mw : 800,
		maxHeight: mh ? mh : 500,
		zIndex: index ? index : layer.zIndex, //窗口层
		anim: anim ? anim : 0, //显示方式
		success: function(layero){ //层弹出后的成功回调方法
			if (!index) layer.setTop(layero); //窗口置顶
		}
	});
	if (full) layer.full(win);
}

function placeholder(obj) {
	//浏览器不支持 placeholder 时才执行
	if (!('placeholder' in document.createElement('input'))) {
		if (obj) {
			var DOM = $(obj);
		} else {
			var DOM = $('body');
		}
		DOM.find('[placeholder]').each(function() {
			var tag = $(this); //当前 input
			tag.unbind('focus blur');// 解绑focus blur事件
			var placeholder = tag.attr('placeholder'); //当前 placeholder
			if (tag.val() == '') {
				tag.css('color', '#999');
				tag.val(placeholder);
			}
			tag.focus(function() {
				if (this.value == placeholder) {
					this.value = '';
					this.style.color = '#444';
				}
			});
			tag.blur(function() {
				if (this.value == '') {
					this.value = placeholder;
					this.style.color = '#999';
				}
			});
		});
	}
}

function setLang(lan){
	//document.setCookie('lang', lan);
	zh_tran(lan);
	location.reload();
}

//COOKIE
document.getCookie = function(sName) {
	var aCookie = document.cookie.split("; ");
	for (var i = 0; i < aCookie.length; i++) {
		var aCrumb = aCookie[i].split("=");
		if (sName == aCrumb[0]) return decodeURIComponent(aCrumb[1]);
	}
	return null;
}

document.setCookie = function(sName, sValue, sExpires) {
	var sCookie = sName + "=" + encodeURIComponent(sValue);
	if (sExpires != null) {
		sCookie += "; expires=" + sExpires;
	}
	document.cookie = sCookie;
}

document.removeCookie = function(sName, sValue) {
	document.cookie = sName + "=; expires=Fri, 31 Dec 1999 23:59:59 GMT;";
}



//s = simplified 简体中文 t = traditional 繁体中文 n = normal 正常显示
var zh_default = 'k'; //默认语言，请不要改变
var zh_choose = 'k'; //当前选择
var zh_expires = 7; //cookie过期天数
var zh_class = 'zh_click'; //链接的class名，id为class + s/t/n 之一
var zh_style_active = ' color:red;'; //当前选择的链接式样
var zh_style_inactive = 'color:blue;'; //非当前选择的链接式样
var zh_browserLang = ''; //浏览器语言
var zh_autoLang_t = true; //浏览器语言为繁体时自动进行操作
var zh_autoLang_s = false; //浏览器语言为简体时自动进行操作
var zh_autoLang_alert = true; //自动操作后是否显示提示消息
var zh_autoLang_checked = 0; //次检测浏览器次数,第一次写cookie为1,提示后为2,今后将不再提示
 
 
//判断浏览器语言的正则,ie为小写,ff为大写
var zh_langReg_t = /^zh-tw|zh-hk$/i;
var zh_langReg_s = /^zh-cn$/i;
 
//简体繁体对照字表,可以自行替换
var zh_s = '皑蔼碍爱翱袄奥坝罢摆败颁办绊帮绑镑谤剥饱宝报鲍辈贝钡狈备惫绷笔毕毙币闭边编贬变辩辫标鳖别瘪濒滨宾摈饼并拨钵铂驳卜补财参蚕残惭惨灿苍舱仓沧厕侧册测层诧搀掺蝉馋谗缠铲产阐颤场尝长偿肠厂畅钞车彻尘沉陈衬撑称惩诚骋痴迟驰耻齿炽冲虫宠畴踌筹绸丑橱厨锄雏础储触处传疮闯创锤纯绰辞词赐聪葱囱从丛凑蹿窜错达带贷担单郸掸胆惮诞弹当挡党荡档捣岛祷导盗灯邓敌涤递缔颠点垫电淀钓调迭谍叠钉顶锭订丢东动栋冻斗犊独读赌镀锻断缎兑队对吨顿钝夺堕鹅额讹恶饿儿尔饵贰发罚阀珐矾钒烦范贩饭访纺飞诽废费纷坟奋愤粪丰枫锋风疯冯缝讽凤肤辐抚辅赋复负讣妇缚该钙盖干赶秆赣冈刚钢纲岗皋镐搁鸽阁铬个给龚宫巩贡钩沟构购够蛊顾剐关观馆惯贯广规硅归龟闺轨诡柜贵刽辊滚锅国过骇韩汉号阂鹤贺横轰鸿红后壶护沪户哗华画划话怀坏欢环还缓换唤痪焕涣黄谎挥辉毁贿秽会烩汇讳诲绘荤浑伙获货祸击机积饥讥鸡绩缉极辑级挤几蓟剂济计记际继纪夹荚颊贾钾价驾歼监坚笺间艰缄茧检碱硷拣捡简俭减荐槛鉴践贱见键舰剑饯渐溅涧将浆蒋桨奖讲酱胶浇骄娇搅铰矫侥脚饺缴绞轿较秸阶节茎鲸惊经颈静镜径痉竞净纠厩旧驹举据锯惧剧鹃绢杰洁结诫届紧锦仅谨进晋烬尽劲荆觉决诀绝钧军骏开凯颗壳课垦恳抠库裤夸块侩宽矿旷况亏岿窥馈溃扩阔蜡腊莱来赖蓝栏拦篮阑兰澜谰揽览懒缆烂滥捞劳涝乐镭垒类泪篱离里鲤礼丽厉励砾历沥隶俩联莲连镰怜涟帘敛脸链恋炼练粮凉两辆谅疗辽镣猎临邻鳞凛赁龄铃凌灵岭领馏刘龙聋咙笼垄拢陇楼娄搂篓芦卢颅庐炉掳卤虏鲁赂禄录陆驴吕铝侣屡缕虑滤绿峦挛孪滦乱抡轮伦仑沦纶论萝罗逻锣箩骡骆络妈玛码蚂马骂吗买麦卖迈脉瞒馒蛮满谩猫锚铆贸么霉没镁门闷们锰梦谜弥觅幂绵缅庙灭悯闽鸣铭谬谋亩钠纳难挠脑恼闹馁内拟腻撵捻酿鸟聂啮镊镍柠狞宁拧泞钮纽脓浓农疟诺欧鸥殴呕沤盘庞赔喷鹏骗飘频贫苹凭评泼颇扑铺朴谱栖凄脐齐骑岂启气弃讫牵扦钎铅迁签谦钱钳潜浅谴堑枪呛墙蔷强抢锹桥乔侨翘窍窃钦亲寝轻氢倾顷请庆琼穷趋区躯驱龋颧权劝却鹊确让饶扰绕热韧认纫荣绒软锐闰润洒萨鳃赛三伞丧骚扫涩杀纱筛晒删闪陕赡缮伤赏烧绍赊摄慑设绅审婶肾渗声绳胜圣师狮湿诗尸时蚀实识驶势适释饰视试寿兽枢输书赎属术树竖数帅双谁税顺说硕烁丝饲耸怂颂讼诵擞苏诉肃虽随绥岁孙损笋缩琐锁獭挞抬态摊贪瘫滩坛谭谈叹汤烫涛绦讨腾誊锑题体屉条贴铁厅听烃铜统头秃图涂团颓蜕脱鸵驮驼椭洼袜弯湾顽万网韦违围为潍维苇伟伪纬谓卫温闻纹稳问瓮挝蜗涡窝卧呜钨乌污诬无芜吴坞雾务误锡牺袭习铣戏细虾辖峡侠狭厦吓锨鲜纤咸贤衔闲显险现献县馅羡宪线厢镶乡详响项萧嚣销晓啸蝎协挟携胁谐写泻谢锌衅兴汹锈绣虚嘘须许叙绪续轩悬选癣绚学勋询寻驯训讯逊压鸦鸭哑亚讶阉烟盐严颜阎艳厌砚彦谚验鸯杨扬疡阳痒养样瑶摇尧遥窑谣药爷页业叶医铱颐遗仪彝蚁艺亿忆义诣议谊译异绎荫阴银饮隐樱婴鹰应缨莹萤营荧蝇赢颖哟拥佣痈踊咏涌优忧邮铀犹游诱舆鱼渔娱与屿语吁御狱誉预驭鸳渊辕园员圆缘远愿约跃钥岳粤悦阅云郧匀陨运蕴酝晕韵杂灾载攒暂赞赃脏凿枣灶责择则泽贼赠扎札轧铡闸栅诈斋债毡盏斩辗崭栈战绽张涨帐账胀赵蛰辙锗这贞针侦诊镇阵挣睁狰争帧郑证织职执纸挚掷帜质滞钟终种肿众诌轴皱昼骤猪诸诛烛瞩嘱贮铸筑驻专砖转赚桩庄装妆壮状锥赘坠缀谆着浊兹资渍踪综总纵邹诅组钻';
var zh_t = '皚藹礙愛翺襖奧壩罷擺敗頒辦絆幫綁鎊謗剝飽寶報鮑輩貝鋇狽備憊繃筆畢斃幣閉邊編貶變辯辮標鼈別癟瀕濱賓擯餅並撥缽鉑駁蔔補財參蠶殘慚慘燦蒼艙倉滄廁側冊測層詫攙摻蟬饞讒纏鏟産闡顫場嘗長償腸廠暢鈔車徹塵沈陳襯撐稱懲誠騁癡遲馳恥齒熾沖蟲寵疇躊籌綢醜櫥廚鋤雛礎儲觸處傳瘡闖創錘純綽辭詞賜聰蔥囪從叢湊躥竄錯達帶貸擔單鄲撣膽憚誕彈當擋黨蕩檔搗島禱導盜燈鄧敵滌遞締顛點墊電澱釣調叠諜疊釘頂錠訂丟東動棟凍鬥犢獨讀賭鍍鍛斷緞兌隊對噸頓鈍奪墮鵝額訛惡餓兒爾餌貳發罰閥琺礬釩煩範販飯訪紡飛誹廢費紛墳奮憤糞豐楓鋒風瘋馮縫諷鳳膚輻撫輔賦複負訃婦縛該鈣蓋幹趕稈贛岡剛鋼綱崗臯鎬擱鴿閣鉻個給龔宮鞏貢鈎溝構購夠蠱顧剮關觀館慣貫廣規矽歸龜閨軌詭櫃貴劊輥滾鍋國過駭韓漢號閡鶴賀橫轟鴻紅後壺護滬戶嘩華畫劃話懷壞歡環還緩換喚瘓煥渙黃謊揮輝毀賄穢會燴彙諱誨繪葷渾夥獲貨禍擊機積饑譏雞績緝極輯級擠幾薊劑濟計記際繼紀夾莢頰賈鉀價駕殲監堅箋間艱緘繭檢堿鹼揀撿簡儉減薦檻鑒踐賤見鍵艦劍餞漸濺澗將漿蔣槳獎講醬膠澆驕嬌攪鉸矯僥腳餃繳絞轎較稭階節莖鯨驚經頸靜鏡徑痙競淨糾廄舊駒舉據鋸懼劇鵑絹傑潔結誡屆緊錦僅謹進晉燼盡勁荊覺決訣絕鈞軍駿開凱顆殼課墾懇摳庫褲誇塊儈寬礦曠況虧巋窺饋潰擴闊蠟臘萊來賴藍欄攔籃闌蘭瀾讕攬覽懶纜爛濫撈勞澇樂鐳壘類淚籬離裏鯉禮麗厲勵礫曆瀝隸倆聯蓮連鐮憐漣簾斂臉鏈戀煉練糧涼兩輛諒療遼鐐獵臨鄰鱗凜賃齡鈴淩靈嶺領餾劉龍聾嚨籠壟攏隴樓婁摟簍蘆盧顱廬爐擄鹵虜魯賂祿錄陸驢呂鋁侶屢縷慮濾綠巒攣孿灤亂掄輪倫侖淪綸論蘿羅邏鑼籮騾駱絡媽瑪碼螞馬罵嗎買麥賣邁脈瞞饅蠻滿謾貓錨鉚貿麽黴沒鎂門悶們錳夢謎彌覓冪綿緬廟滅憫閩鳴銘謬謀畝鈉納難撓腦惱鬧餒內擬膩攆撚釀鳥聶齧鑷鎳檸獰甯擰濘鈕紐膿濃農瘧諾歐鷗毆嘔漚盤龐賠噴鵬騙飄頻貧蘋憑評潑頗撲鋪樸譜棲淒臍齊騎豈啓氣棄訖牽扡釺鉛遷簽謙錢鉗潛淺譴塹槍嗆牆薔強搶鍬橋喬僑翹竅竊欽親寢輕氫傾頃請慶瓊窮趨區軀驅齲顴權勸卻鵲確讓饒擾繞熱韌認紉榮絨軟銳閏潤灑薩鰓賽叁傘喪騷掃澀殺紗篩曬刪閃陝贍繕傷賞燒紹賒攝懾設紳審嬸腎滲聲繩勝聖師獅濕詩屍時蝕實識駛勢適釋飾視試壽獸樞輸書贖屬術樹豎數帥雙誰稅順說碩爍絲飼聳慫頌訟誦擻蘇訴肅雖隨綏歲孫損筍縮瑣鎖獺撻擡態攤貪癱灘壇譚談歎湯燙濤縧討騰謄銻題體屜條貼鐵廳聽烴銅統頭禿圖塗團頹蛻脫鴕馱駝橢窪襪彎灣頑萬網韋違圍爲濰維葦偉僞緯謂衛溫聞紋穩問甕撾蝸渦窩臥嗚鎢烏汙誣無蕪吳塢霧務誤錫犧襲習銑戲細蝦轄峽俠狹廈嚇鍁鮮纖鹹賢銜閑顯險現獻縣餡羨憲線廂鑲鄉詳響項蕭囂銷曉嘯蠍協挾攜脅諧寫瀉謝鋅釁興洶鏽繡虛噓須許敘緒續軒懸選癬絢學勳詢尋馴訓訊遜壓鴉鴨啞亞訝閹煙鹽嚴顔閻豔厭硯彥諺驗鴦楊揚瘍陽癢養樣瑤搖堯遙窯謠藥爺頁業葉醫銥頤遺儀彜蟻藝億憶義詣議誼譯異繹蔭陰銀飲隱櫻嬰鷹應纓瑩螢營熒蠅贏穎喲擁傭癰踴詠湧優憂郵鈾猶遊誘輿魚漁娛與嶼語籲禦獄譽預馭鴛淵轅園員圓緣遠願約躍鑰嶽粵悅閱雲鄖勻隕運蘊醞暈韻雜災載攢暫贊贓髒鑿棗竈責擇則澤賊贈紮劄軋鍘閘柵詐齋債氈盞斬輾嶄棧戰綻張漲帳賬脹趙蟄轍鍺這貞針偵診鎮陣掙睜猙爭幀鄭證織職執紙摯擲幟質滯鍾終種腫衆謅軸皺晝驟豬諸誅燭矚囑貯鑄築駐專磚轉賺樁莊裝妝壯狀錐贅墜綴諄著濁茲資漬蹤綜總縱鄒詛組鑽';
String.prototype.tran = function() {
	var s1,s2;
	if (zh_choose == 't') {
	   s1 = zh_s;
	   s2 = zh_t;
	}else if(zh_choose == 's') {
	   s1 = zh_t;
	   s2 = zh_s;
	}else {
	   return this;
	}
	var a = '';
	var l = this.length;
	for(var i=0;i<this.length;i++){
			var c = this.charAt(i);
			var p = s1.indexOf(c)
			a += p < 0 ? c : s2.charAt(p);
		}
	return a;
}
function setCookie(name, value) {
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	if (expires != null) {
	   var LargeExpDate = new Date ();
	   LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));
	}
	document.cookie = name + "=" + escape (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()));
}
function getCookie(Name) {
	var search = Name + "="
	if (document.cookie.length > 0) {
	   offset = document.cookie.indexOf(search);
	   if(offset != -1) {
		offset += search.length;
		end = document.cookie.indexOf(";", offset);
		if(end == -1) end = document.cookie.length;
		return unescape(document.cookie.substring(offset, end));
	   }else {
		return '';
	   }
	}
}
 
 
function zh_tranBody(obj) { 
	var o = (typeof(obj) == "object") ? obj.childNodes : document.body.childNodes;
	for (var i = 0; i < o.length; i++) {
	   var c = o.item(i);
	   if ('||BR|HR|TEXTAREA|SCRIPT|'.indexOf("|"+c.tagName+"|") > 0) continue;
	   if (c.className == zh_class) {
		if (c.id == zh_class + '_' + zh_choose) {
		 c.setAttribute('style', zh_style_active);
		 c.style.cssText = zh_style_active;
		}else {
		 c.setAttribute('style', zh_style_inactive);
		 c.style.cssText = zh_style_inactive;
		}
		continue;   
	   }
	   if (c.title != '' && c.title != null) c.title = c.title.tran();
	   if (c.alt != '' && c.alt != null) c.alt = c.alt.tran();
	   if (c.tagName == "INPUT" && c.value != '' && c.type != 'text' && c.type != 'hidden' && c.type != 'password') c.value = c.value.tran();
	   if (c.nodeType == 3) {
		    c.data = c.data.tran();  
	   }else{
		    zh_tranBody(c);
	   }
	}
}
 
function zh_tran(go) {
	if (go) zh_choose = go;
	setCookie('zh_choose', zh_choose, zh_expires);
	if (go == 'n') {
	   window.location.reload();
	}else {
	   zh_tranBody();
	}
}
function zh_init() {
	zh_getLang(); 
	c = document.getElementById(zh_class + '_' + zh_choose);
	if (zh_choose != zh_default) {
	   if (window.onload) {
		window.onload_before_zh_init = window.onload;
		window.onload = function() {
		 zh_tran(zh_choose);
		 if (getCookie('zh_autoLang_check')) {alert(zh_autoLang_msg);};
		 window.onload_before_zh_init();
		 };
	   }else {
		window.onload = function() {
		 zh_tran(zh_choose);
		 if (getCookie('zh_autoLang_check')) {alert(zh_autoLang_msg);};
		 };
	   }
	}
 
}
$(function(){
	zh_init()
})
 
function zh_getLang() {
	if (getCookie('zh_choose')) {
	   zh_choose = getCookie('zh_choose');
	   return true;
	} 
	if (!zh_autoLang_t && !zh_autoLang_s) return false;
	if (getCookie('zh_autoLang_checked')) return false;
	if (navigator.language) {
	   zh_browserLang = navigator.language;
	}else if (navigator.browserLanguage) {
	   zh_browserLang = navigator.browserLanguage;
	}
	if (zh_autoLang_t && zh_langReg_t.test(zh_browserLang)) {
	   zh_choose = 't';
	}else if (zh_autoLang_s && zh_langReg_s.test(zh_browserLang)) {
	   zh_choose = 's';
	}
	zh_autoLang_checked = 1;
	setCookie('zh_choose', zh_choose, zh_expires);
	if (zh_choose == zh_default) return false;
	return true;
}
 
