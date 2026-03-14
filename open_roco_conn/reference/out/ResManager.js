System.register("chunks:///_virtual/ResManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts"], (function(n) {
        var e, o, t, s, a, r, l, u, i;
        return {
            setters: [function(n) {
                e = n.inheritsLoose
            }
                , function(n) {
                    o = n.cclegacy,
                        t = n._decorator,
                        s = n.assetManager,
                        a = n.Asset,
                        r = n.instantiate,
                        l = n.resources,
                        u = n.Component
                }
                , function(n) {
                    i = n.default
                }
            ],
            execute: function() {
                var d, c;
                o._RF.push({}, "36a0aFb06RESo4mDym5I3zs", "ResManager", void 0);
                var f = t.ccclass;
                t.property,
                    n("default", f("ResManager")(((c = function(n) {
                        function o() {
                            for (var e, o = arguments.length, t = new Array(o), s = 0; s < o; s++)
                                t[s] = arguments[s];
                            return (e = n.call.apply(n, [this].concat(t)) || this)._abBunds = {},
                                e._total = 0,
                                e._now = 0,
                                e._progressFunc = null,
                                e._endFunc = null,
                                e._nowAb = 0,
                                e._totalAb = 0,
                                e
                        }
                        e(o, n);
                        var t = o.prototype;
                        return t.onLoad = function() {
                            null === o.Instance ? o.Instance = this : this.destroy()
                        }
                            ,
                            t.loadAssetsBundle = function(n, e) {
                                var o = this;
                                s.loadBundle(n, (function(t, s) {
                                        if (null !== t) {
                                            if (i.IS_LOCAL,
                                            1 == i.IS_LOCAL)
                                                throw new Error("assetManager.loadBundle failed.");
                                            console.error("[ResManager]:Load AssetsBundle Error: " + n),
                                                o._abBunds[n] = null
                                        } else
                                            1 == i.IS_LOCAL && console.debug("[ResManager]:Load AssetsBundle Success: " + n),
                                                o._abBunds[n] = s;
                                        e && e(n)
                                    }
                                ))
                            }
                            ,
                            t.loadRes = function(n, e, o) {
                                var t = this;
                                n.load(e, o, (function(o, s) {
                                        if (t._now++,
                                        o && (i.IS_LOCAL,
                                        1 == i.IS_LOCAL))
                                            throw new Error("assetManager.loadBundle [" + n + "] failed.");
                                        o ? console.error("[ResManager]:load Res==>" + e + " error: " + o) : 1 == i.IS_LOCAL && console.debug("[ResManager]:load Res==>" + e + " success!"),
                                        t._progressFunc && t._progressFunc(t._now, t._total),
                                        t._now >= t._total && null !== t._endFunc && t._endFunc()
                                    }
                                ))
                            }
                            ,
                            t.loadAssetsInAssetsBundle = function(n) {
                                for (var e in n)
                                    for (var o = n[e].urls, t = n[e].assetType, s = 0; s < o.length; s++)
                                        this.loadRes(this._abBunds[e], o[s], t)
                            }
                            ,
                            t.onLoading = function(n, e, o) {
                                var t = n.get(e);
                                t ? o(null, t, e) : n.load(e, a, (function(n, t) {
                                        if (n && (i.IS_LOCAL,
                                        1 == i.IS_LOCAL))
                                            throw new Error("assetManager.loadBundle failed.");
                                        o(n, n ? null : t, e)
                                    }
                                ))
                            }
                            ,
                            t.onLoadingDir = function(n, e, o) {
                                n.loadDir(e, (function(n, e, t) {
                                        o(n, n ? null : e, t)
                                    }
                                ))
                            }
                            ,
                            t.loadingDir = function(n, e, o) {
                                var t = this
                                    , a = s.getBundle(n);
                                a ? this.onLoadingDir(a, e, (function(n, e, t) {
                                        o(n, e, t)
                                    }
                                )) : s.loadBundle(n, (function(n, s) {
                                        if (n) {
                                            if (i.IS_LOCAL,
                                            1 == i.IS_LOCAL)
                                                throw new Error("assetManager.loadBundle failed.");
                                            o(n, null, e)
                                        }
                                        t.onLoadingDir(s, e, (function(n, e, t) {
                                                if (n && (i.IS_LOCAL,
                                                1 == i.IS_LOCAL))
                                                    throw new Error("assetManager.loadBundle failed.");
                                                o(n, e, t)
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            t.loadingRes = function(n, e, o) {
                                var t = this
                                    , a = s.getBundle(n);
                                a ? this.onLoading(a, e, (function(n, e, t) {
                                        o(n, e, t)
                                    }
                                )) : s.loadBundle(n, (function(n, s) {
                                        if (n) {
                                            if (i.IS_LOCAL,
                                            1 == i.IS_LOCAL)
                                                throw new Error("assetManager.loadBundle failed.");
                                            o(n, null, e)
                                        }
                                        t.onLoading(s, e, (function(n, e, t) {
                                                if (n && (i.IS_LOCAL,
                                                1 == i.IS_LOCAL))
                                                    throw new Error("assetManager.loadBundle failed.");
                                                o(n, e, t)
                                            }
                                        ))
                                    }
                                ))
                            }
                            ,
                            t.getPrefab = function(n, e) {
                                var t = o.Instance.getAsset(n, e)
                                    , s = null;
                                return t && (s = r(t)),
                                    s
                            }
                            ,
                            t.getPrefabByName = function(n) {
                                var e = o.Instance.getAsset("gui", "prefabs/" + n)
                                    , t = null;
                                return e && (t = r(e)),
                                    t
                            }
                            ,
                            t.preloadResPackage = function(n, e, o) {
                                var t = this;
                                for (var s in this._total = 0,
                                    this._now = 0,
                                    this._totalAb = 0,
                                    this._nowAb = 0,
                                    this._progressFunc = e,
                                    this._endFunc = o,
                                    n)
                                    this._totalAb++,
                                        this._total += n[s].urls.length;
                                for (var s in n)
                                    this.loadAssetsBundle(s, (function(e) {
                                            t._nowAb++,
                                            t._nowAb === t._totalAb && t.loadAssetsInAssetsBundle(n)
                                        }
                                    ))
                            }
                            ,
                            t.getAsset = function(n, e) {
                                var o = s.getBundle(n);
                                return null === o ? (console.error("[error]: " + n + " AssetsBundle not loaded !!!"),
                                    l.get(e)) : o.get(e)
                            }
                            ,
                            t.releaseResPackage = function(n) {
                                for (var e in n)
                                    for (var o = n[e].urls, t = 0; t < o.length; t++) {
                                        var a = s.getBundle(e);
                                        if (null !== a) {
                                            var r = a.get(o[t]);
                                            s.releaseAsset(r)
                                        } else
                                            console.error("[error]: " + e + " AssetsBundle not loaded !!!")
                                    }
                            }
                            ,
                            o
                    }(u)).Instance = null,
                        c.combatRes = new Map,
                        d = c)) || d);
                o._RF.pop()
            }
        }
    }
));
