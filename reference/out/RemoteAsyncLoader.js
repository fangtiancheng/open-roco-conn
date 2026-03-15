System.register("chunks:///_virtual/RemoteAsyncLoader.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, r, n, o, u;
        return {
            setters: [function(e) {
                t = e.asyncToGenerator,
                    r = e.regeneratorRuntime
            }
                , function(e) {
                    n = e.cclegacy,
                        o = e.assetManager,
                        u = e.error
                }
            ],
            execute: function() {
                n._RF.push({}, "e56af0plAFIIKcj6p6kq6p3", "RemoteAsyncLoader", void 0);
                e("RemoteAsyncLoader", function() {
                    function e() {}
                    return e.loadRemoteAsset = function() {
                        var e = t(r().mark((function e(t, n) {
                                return r().wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                                case 0:
                                                    return e.abrupt("return", new Promise((function(e, r) {
                                                            var a;
                                                            o.loadRemote(t, {
                                                                ext: null == n || null == (a = n.name) ? void 0 : a.toLowerCase()
                                                            }, (function(n, o) {
                                                                    if (n)
                                                                        return u("加载远程资源失败: " + t, n),
                                                                            void r(n);
                                                                    e(o)
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
                        return function(t, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                        e.loadRemoteAssets = function() {
                            var e = t(r().mark((function e(t, n) {
                                    var o, a = this;
                                    return r().wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0,
                                                            o = t.map((function(e) {
                                                                    return a.loadRemoteAsset(e, n)
                                                                }
                                                            )),
                                                            e.next = 4,
                                                            Promise.all(o);
                                                    case 4:
                                                        return e.abrupt("return", e.sent);
                                                    case 7:
                                                        throw e.prev = 7,
                                                            e.t0 = e.catch(0),
                                                            u("批量加载远程资源失败", e.t0),
                                                            e.t0;
                                                    case 11:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }
                                    ), e, null, [[0, 7]])
                                }
                            )));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        e
                }());
                n._RF.pop()
            }
        }
    }
));
