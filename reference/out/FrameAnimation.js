System.register("chunks:///_virtual/FrameAnimation.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BuildLogHelper.ts"], (function(t) {
        var e, n, r, i, a, s, o, l, h, p, u, m;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        r = t._decorator,
                        i = t.Event,
                        a = t.Sprite,
                        s = t.Animation,
                        o = t.AnimationClip,
                        l = t.resources,
                        h = t.assetManager,
                        p = t.SpriteAtlas,
                        u = t.Component
                }
                , function(t) {
                    m = t.default
                }
            ],
            execute: function() {
                var c, d;
                n._RF.push({}, "60a1ei9O4hIHq/8ft2OAmmw", "FrameAnimation", void 0);
                var f = r.ccclass
                    , v = (r.property,
                    function(t) {
                        return t[t.NONE = 0] = "NONE",
                            t[t.COMPLETE = 1] = "COMPLETE",
                            t[t.FAIL = 2] = "FAIL",
                            t
                    }(v || {}))
                    , A = function() {
                    this.frame = void 0,
                        this.func = void 0,
                        this.params = void 0
                }
                    , C = t("FrameAnimationEvent", function(t) {
                    function n() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                            r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this).eventName = "",
                            e.eventFrame = 0,
                            e.eventData = [],
                            e
                    }
                    return e(n, t),
                        n
                }(i));
                t("FrameAnimation", f("FrameAnimation")(((d = function(t) {
                    function n() {
                        for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
                            r[i] = arguments[i];
                        return (e = t.call.apply(t, [this].concat(r)) || this).mvClip = null,
                            e.simple = 24,
                            e._success = null,
                            e._fail = null,
                            e._target = null,
                            e.eventConfig = [],
                            e.wrapMode = void 0,
                            e.maxRetryCount = 3,
                            e.resComplete = new Map,
                            e.loaderStatus = v.NONE,
                            e.sprites = [],
                            e
                    }
                    e(n, t);
                    var r = n.prototype;
                    return r.loadWithAnyPlist = function(t, e, n, r, i, l, h, p) {
                        void 0 === r && (r = 24);
                        var u = this.node.addComponent(a);
                        if (u.sizeMode = a.SizeMode.RAW,
                            u.trim = !1,
                            this.node.addComponent(s),
                            this._success = l,
                            this._fail = h,
                            this._target = p,
                            this.eventConfig = n || [],
                            this.simple = r || 24,
                            this.wrapMode = i || o.WrapMode.Normal,
                        null == e || !e.length)
                            throw new Error("path is empty");
                        for (var m = 0; m < e.length; m++) {
                            var c = e[m];
                            this.resComplete.set(c, [v.NONE, 0, null])
                        }
                        this.loadAll(t, e)
                    }
                        ,
                        r.loadAll = function(t, e) {
                            var n = this;
                            if ("resources" == t)
                                for (var r = 0; r < e.length; r++) {
                                    var i = e[r];
                                    this.loadFromBundle(l, i)
                                }
                            else
                                h.loadBundle(t, (function(t, r) {
                                        if (t)
                                            throw m.IS_LOCAL,
                                                new Error("assetManager.loadBundle failed.");
                                        for (var i = 0; i < e.length; i++) {
                                            var a = e[i];
                                            n.loadFromBundle(r, a)
                                        }
                                    }
                                ))
                        }
                        ,
                        r.loadFromBundle = function(t, e) {
                            var n = this;
                            t.load(e, p, (function(r, i) {
                                    if (r && (m.IS_LOCAL,
                                    1 == m.IS_LOCAL))
                                        throw new Error("assetManager.loadBundle failed.");
                                    n.onAssetLoadComplete(e, t, r, i)
                                }
                            ))
                        }
                        ,
                        r.onAssetLoadComplete = function(t, e, n, r) {
                            var i = this
                                , a = this.resComplete.get(t);
                            if (n) {
                                if (m.IS_LOCAL,
                                1 == m.IS_LOCAL)
                                    throw new Error("assetManager.loadBundle failed.");
                                a[1] < this.maxRetryCount ? (a[1] += 1,
                                    this.resComplete.set(t, a),
                                    this.loadFromBundle(e, t)) : this.loaderStatus = v.FAIL
                            } else {
                                var s = r;
                                this.resComplete.set(t, [v.COMPLETE, 0, s])
                            }
                            var o = 0;
                            this.resComplete.forEach((function(t, e) {
                                    t[0] == v.COMPLETE && (o += 1)
                                }
                            )),
                                this.loaderStatus != v.FAIL ? o == this.resComplete.size && (this.loaderStatus = v.COMPLETE,
                                    this.resComplete.forEach((function(t, e) {
                                            i.expandAtlas(t[2])
                                        }
                                    )),
                                    this.sortSprites(),
                                    this.createClio()) : this._fail.apply(this._target, [new Error("load fail , " + t + " retry count is " + this.maxRetryCount)])
                        }
                        ,
                        r.expandAtlas = function(t) {
                            for (var e = t.getSpriteFrames(), n = 0; n < e.length; n++) {
                                var r = e[n];
                                this.sprites.push(r)
                            }
                        }
                        ,
                        r.sortSprites = function() {
                            this.sprites.sort((function(t, e) {
                                    var n = t.name
                                        , r = e.name;
                                    return parseInt(n) - parseInt(r)
                                }
                            ))
                        }
                        ,
                        r.createClio = function() {
                            this.mvClip = o.createWithSpriteFrames(this.sprites, this.simple),
                                this.mvClip.wrapMode = this.wrapMode;
                            for (var t = [], e = 0; e < this.eventConfig.length; e++) {
                                var n = this.eventConfig[e]
                                    , r = new A;
                                r.frame = n.frame * (1 / this.simple),
                                    r.func = "FrameAnimationFireEvent",
                                    r.params = [n.name, n.frame.toString()].concat(n.params),
                                    t.push(r)
                            }
                            this.mvClip.events = t;
                            var i = this.getComponent(s);
                            i.addClip(this.mvClip),
                                i.defaultClip = this.mvClip,
                                this._success.apply(this._target, [this.node])
                        }
                        ,
                        r.FrameAnimationFireEvent = function(t, e) {
                            for (var r = new C(n.FRAMEANIMATION_FRAME_EVENT,!0), i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++)
                                a[s - 2] = arguments[s];
                            r.eventData = [].concat(a),
                                r.eventName = t,
                                r.eventFrame = parseInt(e),
                                this.node.dispatchEvent(r)
                        }
                        ,
                        n
                }(u)).FRAMEANIMATION_FRAME_EVENT = "FRAMEANIMATION_FRAME_EVENT",
                    c = d)) || c);
                n._RF.pop()
            }
        }
    }
));
