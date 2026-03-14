System.register("chunks:///_virtual/SpiritAnimation.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, i, n, o, r, a, s, l, h, p, u, d, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        n = t._decorator,
                        o = t.Event,
                        r = t.Sprite,
                        a = t.Animation,
                        s = t.AnimationClip,
                        l = t.assetManager,
                        h = t.resources,
                        p = t.SpriteAtlas,
                        u = t.Component
                }
                , function(t) {
                    d = t.DEFINE
                }
                , function(t) {
                    c = t.default
                }
            ],
            execute: function() {
                var m, f;
                i._RF.push({}, "1a0d8aA8X9LGJvDFqwmk+uS", "SpiritAnimation", void 0);
                var v = n.ccclass
                    , A = (n.property,
                    function(t) {
                        return t[t.NONE = 0] = "NONE",
                            t[t.COMPLETE = 1] = "COMPLETE",
                            t[t.FAIL = 2] = "FAIL",
                            t
                    }(A || {}))
                    , _ = (t("SpiritAnimationEventConfig", (function() {
                            this.name = void 0,
                                this.frame = void 0,
                                this.params = void 0
                        }
                    )),
                        function() {
                            this.frame = void 0,
                                this.func = void 0,
                                this.params = void 0
                        }
                )
                    , C = t("SpiritAnimationEvent", function(t) {
                    function i() {
                        for (var e, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                            n[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(n)) || this).eventName = "",
                            e.eventFrame = 0,
                            e.eventData = [],
                            e
                    }
                    return e(i, t),
                        i
                }(o));
                t("SpiritAnimation", v("SpiritAnimation")(((f = function(t) {
                    function i() {
                        for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                            o[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(o)) || this).mode = i.SPIRITANIMATION_MODE_COMBAT,
                            e._target = null,
                            e.simple = 24,
                            e.mvClip = null,
                            e._success = null,
                            e._fail = null,
                            e.eventConfig = [],
                            e.wrapMode = void 0,
                            e.maxRetryCount = 3,
                            e.resComplete = new Map,
                            e.loaderStatus = A.NONE,
                            e.sprites = [],
                            e._url = "",
                            e._isLoading = !1,
                            e
                    }
                    e(i, t);
                    var n = i.prototype;
                    return n.chekcComponent = function() {
                        var t = this.node.addComponent(r);
                        t.sizeMode = r.SizeMode.RAW,
                            t.trim = !1,
                            this.node.addComponent(a)
                    }
                        ,
                        n.loadWithAnyPlist = function(t, e, n, o, r, a, l, h) {
                            void 0 === o && (o = 24);
                            for (var p = t, u = 0; u < e.length; u++) {
                                p += "&",
                                    p += e[u]
                            }
                            if (this._url != p) {
                                if (this._url = p,
                                    this.chekcComponent(),
                                    this.clearContent(),
                                    this._success = a,
                                    this._fail = l,
                                    this._target = h,
                                    this.eventConfig = n || [],
                                    this.simple = o || 24,
                                    this.wrapMode = r || s.WrapMode.Normal,
                                null == e || !e.length)
                                    throw new Error("path is empty");
                                for (var d = 0; d < e.length; d++) {
                                    var m = e[d];
                                    this.resComplete.set(m, [A.NONE, 0, null])
                                }
                                switch (this.mode) {
                                    case i.SPIRITANIMATION_MODE_BUNDLE:
                                        this.loadAll(t, e);
                                        break;
                                    case i.SPIRITANIMATION_MODE_COMBAT:
                                        this.loadAllWithCombat(t, e);
                                        break;
                                    case i.SPIRITANIMATION_MODE_REMOTE:
                                        this.loadAllWithRemote(t, e);
                                        break;
                                    default:
                                        c.IS_LOCAL
                                }
                            } else
                                a && a.apply(this._target, [this.node])
                        }
                        ,
                        n.loadAllWithCombat = function(t, e) {
                            this._isLoading = !0;
                            for (var n = 0; n < e.length; n++) {
                                var o = e[n]
                                    , r = i.RES[o];
                                this.onAssetLoadComplete(o, null, null, r)
                            }
                        }
                        ,
                        n.loadAllWithRemote = function(t, e) {
                            var i = this;
                            this._isLoading = !0;
                            for (var n = 0; n < e.length; n++) {
                                var o = e[n]
                                    , r = "" + d.CDN + o;
                                l.loadRemote(r, null, (function(t, e, n) {
                                        t ? (console.error("loadAllWithRemote--error==" + n),
                                            c.IS_LOCAL) : i.onAssetLoadComplete(n, null, null, e)
                                    }
                                ))
                            }
                        }
                        ,
                        n.loadAll = function(t, e) {
                            var i = this;
                            if (this._isLoading = !0,
                            "resources" == t)
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    this.loadFromBundle(h, o)
                                }
                            else {
                                var r = this._url;
                                l.loadBundle(t, (function(t, n) {
                                        if (t && (console.error("assetManager.loadBundle failed1.==" + e),
                                            c.IS_LOCAL,
                                        1 == c.IS_LOCAL))
                                            throw new Error("assetManager.loadBundle failed.");
                                        if (r == i._url)
                                            if (t) {
                                                if (console.error("assetManager.loadBundle failed2.==" + e),
                                                    c.IS_LOCAL,
                                                1 == c.IS_LOCAL)
                                                    throw new Error("assetManager.loadBundle failed.");
                                                i._fail.apply(i._target, [t])
                                            } else
                                                for (var o = 0; o < e.length; o++) {
                                                    var a = e[o];
                                                    i.loadFromBundle(n, a)
                                                }
                                    }
                                ))
                            }
                        }
                        ,
                        n.loadFromBundle = function(t, e) {
                            var i = this
                                , n = this._url;
                            t.load(e, p, (function(o, r) {
                                    o && (console.error("assetManager.loadBundle failed.==" + e),
                                        c.IS_LOCAL),
                                    n == i._url && i.onAssetLoadComplete(e, t, o, r)
                                }
                            ))
                        }
                        ,
                        n.onAssetLoadComplete = function(t, e, i, n) {
                            var o = this;
                            if (null != this.node && null != this.node) {
                                var r = this.resComplete.get(t);
                                if (i)
                                    r[1] < this.maxRetryCount ? (r[1] += 1,
                                        this.resComplete.set(t, r),
                                        this.loadFromBundle(e, t)) : this.loaderStatus = A.FAIL;
                                else {
                                    var a = n;
                                    this.resComplete.set(t, [A.COMPLETE, 0, a])
                                }
                                var s = 0;
                                this.resComplete.forEach((function(t, e) {
                                        t[0] == A.COMPLETE && (s += 1)
                                    }
                                )),
                                    this.loaderStatus != A.FAIL ? s == this.resComplete.size && (this.loaderStatus = A.COMPLETE,
                                        this.resComplete.forEach((function(t, e) {
                                                o.expandAtlas(t[2])
                                            }
                                        )),
                                        this.sortSprites(),
                                        this.createClio()) : this._fail.apply(this._target, [new Error("load fail , " + t + " retry count is " + this.maxRetryCount)])
                            }
                        }
                        ,
                        n.expandAtlas = function(t) {
                            t instanceof p || c.IS_LOCAL;
                            for (var e = t.getSpriteFrames(), i = 0; i < e.length; i++) {
                                var n = e[i];
                                this.sprites.push(n)
                            }
                        }
                        ,
                        n.sortSprites = function() {
                            this.sprites.sort((function(t, e) {
                                    var i = t.name
                                        , n = e.name;
                                    return parseInt(i) - parseInt(n)
                                }
                            ))
                        }
                        ,
                        n.createClio = function() {
                            this.mvClip = s.createWithSpriteFrames(this.sprites, this.simple),
                                this.mvClip.wrapMode = this.wrapMode;
                            for (var t = [], e = 0; e < this.eventConfig.length; e++) {
                                var i = this.eventConfig[e]
                                    , n = new _;
                                n.frame = i.frame * (1 / this.simple),
                                    n.func = "SpiritAnimationFireEvent",
                                    n.params = [i.name, i.frame.toString()].concat(i.params),
                                    t.push(n)
                            }
                            this.mvClip.events = t;
                            var o = this.getComponent(a);
                            o.__name__ = this._url,
                                this.mvClip.__name__ = this._url,
                                o.addClip(this.mvClip),
                                o.defaultClip = this.mvClip,
                                this._success.apply(this._target, [this.node]),
                                console.log("SpiritAnimation==>>>>finished"),
                                this._isLoading = !1
                        }
                        ,
                        n.SpiritAnimationFireEvent = function(t, e) {
                            for (var n = new C(i.FRAMEANIMATION_FRAME_EVENT,!0), r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
                                a[s - 2] = arguments[s];
                            n.eventData = [].concat(a),
                                n.eventName = t,
                                n.eventFrame = parseInt(e);
                            var l = new o(t);
                            console.log("SpiritAnimationFireEvent=>" + t + "==>" + this.node.parent.name),
                                this.node.parent.dispatchEvent(l)
                        }
                        ,
                        n.play = function() {
                            var t = this.getComponent(a);
                            t && t.play()
                        }
                        ,
                        n.stop = function() {
                            var t = this.getComponent(a);
                            t && t.stop()
                        }
                        ,
                        n.onDestroy = function() {}
                        ,
                        n.clearContent = function() {
                            this.mvClip = null,
                                this.resComplete.clear(),
                                this.resComplete = new Map;
                            for (var t = 0; t < this.sprites.length; t++)
                                this.sprites[t] = null;
                            this.sprites = []
                        }
                        ,
                        i
                }(u)).FRAMEANIMATION_FRAME_EVENT = "FRAMEANIMATION_FRAME_EVENT",
                    f.SPIRITANIMATION_MODE_BUNDLE = 0,
                    f.SPIRITANIMATION_MODE_COMBAT = 1,
                    f.SPIRITANIMATION_MODE_REMOTE = 2,
                    f.RES = new Map,
                    m = f)) || m);
                i._RF.pop()
            }
        }
    }
));
