System.register("chunks:///_virtual/PreLoader.ts", ["cc", "./BuildLogHelper.ts"], (function(s) {
        var n, e, o;
        return {
            setters: [function(s) {
                n = s.cclegacy,
                    e = s.assetManager
            }
                , function(s) {
                    o = s.default
                }
            ],
            execute: function() {
                n._RF.push({}, "33dd5IsSKxPaolR7DO37MSF", "PreLoader", void 0);
                s("PreLoader", function() {
                    function s() {
                        this._abBunds = {},
                            this._total = 0,
                            this._now = 0,
                            this._progressFunc = null,
                            this._endFunc = null,
                            this._nowAb = 0,
                            this._totalAb = 0
                    }
                    var n = s.prototype;
                    return n.loadAssetsBundle = function(s, n) {
                        var t = this;
                        e.loadBundle(s, (function(e, r) {
                                if (null !== e) {
                                    if (console.error("[PreLoader]:Load AssetsBundle Error: " + s),
                                        o.IS_LOCAL,
                                    1 == o.IS_LOCAL)
                                        throw new Error("assetManager.loadBundle failed.");
                                    t._abBunds[s] = null
                                } else
                                    1 == o.IS_LOCAL && console.log("[ResManager]:Load AssetsBundle Success: " + s),
                                        t._abBunds[s] = r;
                                n && n()
                            }
                        ))
                    }
                        ,
                        n.loadRes = function(s, n, e) {
                            var t = this;
                            s.load(n, e, (function(e, r) {
                                    if (t._now++,
                                    e && (o.IS_LOCAL,
                                    1 == o.IS_LOCAL))
                                        throw new Error("assetManager.loadBundle [" + s + "] failed.");
                                    e ? console.error("[ResManager]:load Res==>" + n + " error: " + e) : 1 == o.IS_LOCAL && console.log("[ResManager]:load Res==>" + n + " success!"),
                                    t._progressFunc && t._progressFunc(t._now, t._total),
                                        console.log(t._now, t._total),
                                    t._now >= t._total && null !== t._endFunc && t._endFunc()
                                }
                            ))
                        }
                        ,
                        n.loadAssetsInAssetsBundle = function(s) {
                            for (var n in s)
                                for (var e = s[n].urls, o = s[n].assetType, t = 0; t < e.length; t++)
                                    this.loadRes(this._abBunds[n], e[t], o)
                        }
                        ,
                        n.preLoadResPackage = function(s, n, e) {
                            var o = this;
                            for (var t in this._total = 0,
                                this._now = 0,
                                this._totalAb = 0,
                                this._nowAb = 0,
                                this._progressFunc = n,
                                this._endFunc = e,
                                s)
                                this._totalAb++,
                                    this._total += s[t].urls.length;
                            for (var t in s)
                                this.loadAssetsBundle(t, (function() {
                                        o._nowAb++,
                                        o._nowAb === o._totalAb && o.loadAssetsInAssetsBundle(s)
                                    }
                                ))
                        }
                        ,
                        s
                }());
                n._RF.pop()
            }
        }
    }
));
