System.register("chunks:///_virtual/RemoteResourceLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var r, n, t, o, u, a;
        return {
            setters: [function(e) {
                r = e.asyncToGenerator,
                    n = e.regeneratorRuntime,
                    t = e.createForOfIteratorHelperLoose
            }
                , function(e) {
                    o = e.cclegacy,
                        u = e.assetManager,
                        a = e.Asset
                }
            ],
            execute: function() {
                o._RF.push({}, "eed2dgif2dClLijQ5QPzGo4", "RemoteResourceLoader", void 0);
                e("RemoteResourceLoader", function() {
                    function e() {}
                    return e.loadTexts = function() {
                        var e = r(n().mark((function e(r, o) {
                                var c, s, i, l, f, p, d, m, v, R;
                                return n().wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return c = r.length,
                                                        s = 0,
                                                        i = r.map((function(e) {
                                                                return new Promise((function(r, n) {
                                                                        u.loadRemote(e, {
                                                                            type: a
                                                                        }, (function(t, u) {
                                                                                t ? n({
                                                                                    url: e,
                                                                                    error: t
                                                                                }) : (s++,
                                                                                o && o(s / c, u),
                                                                                    r({
                                                                                        url: e,
                                                                                        content: u
                                                                                    }))
                                                                            }
                                                                        ))
                                                                    }
                                                                ))
                                                            }
                                                        )),
                                                        e.next = 5,
                                                        Promise.allSettled(i);
                                                case 5:
                                                    for (l = e.sent,
                                                             f = {},
                                                             p = {},
                                                             d = t(l); !(m = d()).done; )
                                                        "fulfilled" === (v = m.value).status ? f[v.value.url] = v.value.content : (R = v.reason,
                                                            p[R.url] = R.error);
                                                    return e.abrupt("return", {
                                                        successes: f,
                                                        errors: p
                                                    });
                                                case 10:
                                                case "end":
                                                    return e.stop()
                                            }
                                    }
                                ), e)
                            }
                        )));
                        return function(r, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                        e.loadRemote1 = function() {
                            var e = r(n().mark((function e(r, t) {
                                    return n().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.abrupt("return", new Promise((function(e, n) {
                                                                u.loadRemote(r, {
                                                                    ext: null == t ? void 0 : t.name.toLowerCase()
                                                                }, (function(t, o) {
                                                                        t ? (console.error("加载远程资源失败: " + r, t),
                                                                            n(t)) : (console.log("加载远程资源成功: " + r),
                                                                            e(o))
                                                                    }
                                                                ))
                                                            }
                                                        )));
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e)
                                }
                            )));
                            return function(r, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        e.loadRemote = function() {
                            var e = r(n().mark((function e(r) {
                                    return n().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.abrupt("return", new Promise((function(e, n) {
                                                                u.loadRemote(r, {
                                                                    type: a
                                                                }, (function(r, t) {
                                                                        r ? n(r) : e(t)
                                                                    }
                                                                ))
                                                            }
                                                        )));
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e)
                                }
                            )));
                            return function(r) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        e
                }());
                o._RF.pop()
            }
        }
    }
));
