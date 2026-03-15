System.register("chunks:///_virtual/HttpRequest.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, n, r, s, a, u, o;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    n = e.asyncToGenerator,
                    r = e.regeneratorRuntime
            }
                , function(e) {
                    s = e.cclegacy,
                        a = e.error,
                        u = e.warn,
                        o = e.Component
                }
            ],
            execute: function() {
                s._RF.push({}, "7a8c9FTmUdDCbMymKSi36Rj", "HttpRequest", void 0);
                var i = {}
                    , c = {}
                    , f = e("HttpEvent", function(e) {
                    return e.NO_NETWORK = "http_request_no_network",
                        e.UNKNOWN_ERROR = "http_request_unknown_error",
                        e.TIMEOUT = "http_request_timout",
                        e
                }({}));
                e("HttpRequest", function(e) {
                    function s() {
                        for (var t, n = arguments.length, r = new Array(n), s = 0; s < n; s++)
                            r[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(r)) || this).server = "http://127.0.0.1/",
                            t.timeout = 2e3,
                            t
                    }
                    t(s, e);
                    var o = s.prototype;
                    return o.onLoad = function() {
                        null === s.Instance ? s.Instance = this : this.destroy()
                    }
                        ,
                        o.get = function(e, t, n, r, s, a) {
                            void 0 === s && (s = !0),
                            void 0 === a && (a = this.timeout),
                                this.sendRequest(e, null, !1, t, n, r, s, a)
                        }
                        ,
                        o.getSync = function() {
                            var e = n(r().mark((function e(t, n, s) {
                                    return r().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        this.sendRequest(t, null, !1, n, s, "txt");
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e, this)
                                }
                            )));
                            return function(t, n, r) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        o.getWithParams = function(e, t, n, r) {
                            this.sendRequest(e, t, !1, n, r)
                        }
                        ,
                        o.getByArraybuffer = function(e, t, n) {
                            this.sendRequest(e, null, !1, t, n, "arraybuffer", !1)
                        }
                        ,
                        o.getWithParamsByArraybuffer = function(e, t, n, r) {
                            this.sendRequest(e, t, !1, n, r, "arraybuffer", !1)
                        }
                        ,
                        o.getWithParamsByTxt = function(e, t, n, r) {
                            this.sendRequest(e, t, !1, n, r, "txt", !1)
                        }
                        ,
                        o.post = function(e, t, n, r) {
                            this.sendRequest(e, t, !0, n, r)
                        }
                        ,
                        o.abort = function(e) {
                            var t = i[this.server + e];
                            t && t.abort()
                        }
                        ,
                        o.getParamString = function(e) {
                            var t = "";
                            for (var n in e) {
                                var r = e[n];
                                if (r instanceof Object)
                                    for (var s in r)
                                        t += s + "=" + r[s] + "&";
                                else
                                    t += n + "=" + r + "&"
                            }
                            return t.substr(0, t.length - 1)
                        }
                        ,
                        o.sendRequest = function(e, t, n, r, s, o, l, h) {
                            var d, p, v, R = this;
                            if (void 0 === l && (l = !0),
                            void 0 === h && (h = this.timeout),
                            null != e && "" != e)
                                if (d = 0 == e.toLocaleLowerCase().indexOf("http") ? e : this.server + e,
                                    t ? (v = this.getParamString(t),
                                        p = d.indexOf("?") > -1 ? d + "&" + v : d + "?" + v) : p = d,
                                null == i[p] || c[p] != v) {
                                    var y = new XMLHttpRequest;
                                    i[p] = y,
                                        c[p] = v,
                                        n ? y.open("POST", d) : y.open("GET", p),
                                    o && "arraybuffer" == o && (y.responseType = "arraybuffer"),
                                        y.setRequestHeader("pragma", "no-cache");
                                    var g = {};
                                    g.url = d,
                                        g.params = t,
                                    l && (y.timeout = h,
                                            y.ontimeout = function() {
                                                R.deleteCache(p),
                                                    g.event = f.TIMEOUT,
                                                s && s(g)
                                            }
                                    ),
                                        y.onloadend = function(e) {
                                            if (500 == y.status) {
                                                if (R.deleteCache(p),
                                                null == s)
                                                    return;
                                                g.event = f.NO_NETWORK,
                                                s && s(g)
                                            }
                                        }
                                        ,
                                        y.onerror = function() {
                                            R.deleteCache(p),
                                            null != s && (0 == y.readyState || 1 == y.readyState || 0 == y.status ? g.event = f.NO_NETWORK : g.event = f.UNKNOWN_ERROR,
                                            s && s(g))
                                        }
                                        ,
                                        y.onreadystatechange = function() {
                                            if (4 == y.readyState && (R.deleteCache(p),
                                            200 == y.status && r))
                                                if ("txt" == o)
                                                    r && r(y.response);
                                                else if ("arraybuffer" == o)
                                                    r && r(y.response);
                                                else if ("json" == o) {
                                                    var e = JSON.parse(y.response);
                                                    null != e.code ? 0 == e.code ? r && r(e.data) : s && s(e) : r && r(e)
                                                } else
                                                    r && r(y.response)
                                        }
                                        ,
                                        null == t || "" == t ? y.send() : y.send(v)
                                } else
                                    u("地址【" + d + "】已正在请求中，不能重复请求");
                            else
                                a("请求地址不能为空")
                        }
                        ,
                        o.deleteCache = function(e) {
                            delete i[e],
                                delete c[e]
                        }
                        ,
                        o.getUrl = function(e, t) {
                            var n = ""
                                , r = "";
                            return t ? (r = this.getParamString(t),
                                n = e.indexOf("?") > -1 ? e + "&" + r : e + "?" + r) : n = e,
                                n
                        }
                        ,
                        s
                }(o)).Instance = null,
                    s._RF.pop()
            }
        }
    }
));
