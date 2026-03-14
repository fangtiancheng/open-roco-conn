System.register("chunks:///_virtual/AnimationGAF.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GAFAsset.ts", "./GAFMacros.ts"], (function(e) {
        var t, i, n, s, a, r, o, f, c, u, h, l, m, A;
        return {
            setters: [function(e) {
                t = e.inheritsLoose,
                    i = e.applyDecoratedDescriptor,
                    n = e.initializerDefineProperty,
                    s = e.assertThisInitialized,
                    a = e.createClass
            }
                , function(e) {
                    r = e.cclegacy,
                        o = e._decorator,
                        f = e.Enum,
                        c = e.BufferAsset,
                        u = e.SpriteFrame,
                        h = e.Event,
                        l = e.Component
                }
                , function(e) {
                    m = e.GAFAsset
                }
                , function(e) {
                    A = e.GAFMacros
                }
            ],
            execute: function() {
                var p, g, G, E, T, d, v, F;
                r._RF.push({}, "41750oU/ZdEoqqDVdG6jtTT", "AnimationGAF", void 0);
                var L = o.ccclass
                    , y = o.property
                    , _ = o.executeInEditMode
                    , N = e("AnimationGAFEvent", function(e) {
                    function i(t, i, n, s, a) {
                        var r;
                        return (r = e.call(this, t) || this).timeLine = void 0,
                            r.currentFrame = void 0,
                            r.tag = null,
                            r.action = null,
                            r.timeLine = i,
                            r.currentFrame = n,
                            r.tag = s,
                            r.action = a,
                            r
                    }
                    return t(i, e),
                        i.Create = function(e, t, n, s, a) {
                            return void 0 === n ? new i(e,t) : "number" == typeof n ? new i(e,t,n) : new i(e,t,0,n,s)
                        }
                        ,
                        i
                }(h));
                N.COMPLETE = "complete@AnimationGAFEvent",
                    N.STARTED_NEXT_LOOP = "startedNextLoop@AnimationGAFEvent",
                    N.ENTER_FRAME = "ENTER_FRAME@AnimationGAFEvent",
                    N.FRAME_EVENT = "FRAME_EVENT@AnimationGAFEvent";
                var R = function(e) {
                    return e[e.NONE = 0] = "NONE",
                        e
                }(R || {});
                f(R);
                e("AnimationGAF", (p = L("AnimationGAF"),
                    g = y(c),
                    G = y(u),
                    E = y({
                        type: R
                    }),
                p(T = _((v = i((d = function(e) {
                    function i() {
                        for (var t, i = arguments.length, a = new Array(i), r = 0; r < i; r++)
                            a[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(a)) || this,
                            n(t, "gafResAsset", v, s(t)),
                            n(t, "spriteFrames", F, s(t)),
                            t._actionName = R.NONE,
                            t._frame = 0,
                            t.gafAsset = void 0,
                            t.curGafTimeLine = void 0,
                            t
                    }
                    t(i, e);
                    var r = i.prototype;
                    return r.onLoad = function() {
                        this.onInit()
                    }
                        ,
                        r.onEnable = function() {}
                        ,
                        r.onDestroy = function() {
                            this.release()
                        }
                        ,
                        r.onInitGafAsset = function() {
                            if (this.gafResAsset && !this.gafAsset) {
                                this.gafAsset = new m;
                                var e = this.gafAsset.createGAFFile(this.gafResAsset);
                                this.gafAsset.createGAFAsset(e, this.spriteFrames);
                                for (var t = 1, i = this.gafAsset._timeLines, n = 0; n < i.length; n++) {
                                    var s = i[n];
                                    if (s) {
                                        var a = s.getLinkageName();
                                        a && a.length > 0 && (R.__enums__.push({
                                            name: a,
                                            value: t
                                        }),
                                            R[a] = t,
                                            R[t] = a,
                                            t++)
                                    }
                                }
                            }
                        }
                        ,
                        r.create = function(e) {
                            var t = this;
                            this.gafResAsset || 0 !== this.spriteFrames.length || this.remove(),
                            this.gafAsset && (this.curGafTimeLine = this.gafAsset.createObjectWithName(e),
                                this.curGafTimeLine.setPosition(0, 0),
                                this.curGafTimeLine.parent = this.node,
                                this.curGafTimeLine.setAnimationFinishedPlayDelegate((function(e) {
                                        var i = N.Create(N.COMPLETE, e);
                                        t.node.dispatchEvent(i)
                                    }
                                )),
                                this.curGafTimeLine.setAnimationStartedNextLoopDelegate((function(e) {
                                        var i = N.Create(N.STARTED_NEXT_LOOP, e);
                                        t.node.dispatchEvent(i)
                                    }
                                )),
                                this.curGafTimeLine.setFramePlayedDelegate((function(e, i) {
                                        var n = N.Create(N.ENTER_FRAME, e, i);
                                        t.node.dispatchEvent(n)
                                    }
                                )),
                                this.curGafTimeLine.on(A.DISPATCH_FRAME_EVENT, this.onFrameEvent, this),
                                this.curGafTimeLine.flashStart())
                        }
                        ,
                        r.remove = function() {
                            this.curGafTimeLine && (this.curGafTimeLine.stop(),
                                this.node.removeChild(this.curGafTimeLine),
                                this.curGafTimeLine.setAnimationFinishedPlayDelegate = null,
                                this.curGafTimeLine = null)
                        }
                        ,
                        r.play = function() {
                            this.curGafTimeLine && this.curGafTimeLine.flashPlay()
                        }
                        ,
                        r.stop = function(e) {
                            void 0 === e && (e = !1),
                            this.curGafTimeLine && this.curGafTimeLine.flashStop(e)
                        }
                        ,
                        r.gotoAndPlay = function(e) {
                            this.curGafTimeLine && this.curGafTimeLine.flashGotoAndPlay(e)
                        }
                        ,
                        r.gotoAndStop = function(e) {
                            this.curGafTimeLine && this.curGafTimeLine.flashGotoAndStop(e)
                        }
                        ,
                        r.getChildByName = function(e) {
                            return this.curGafTimeLine ? this.curGafTimeLine.getChildByName(e) : null
                        }
                        ,
                        r.onInit = function() {
                            if (this.gafResAsset && 0 !== this.spriteFrames.length) {
                                this.gafAsset = new m;
                                var e = this.gafAsset.createGAFFile(this.gafResAsset);
                                this.gafAsset.createGAFAsset(e, this.spriteFrames)
                            }
                        }
                        ,
                        r.onFrameEvent = function(e) {
                            var t = N.Create(N.FRAME_EVENT, this.curGafTimeLine, e.tag, e.action);
                            this.node.dispatchEvent(t)
                        }
                        ,
                        r.url = function(e, t) {
                            var i = this;
                            this.release();
                            var n = "" + e;
                            this.gafAsset = new m,
                                this.gafAsset._loadedCall = function() {
                                    i.gafAsset._loadedCall = null,
                                        i.node.isValid ? t() : (i.gafAsset.release(),
                                            i.gafAsset = null)
                                }
                                ,
                                this.gafAsset.initWithGAFFile(n, (function(e) {
                                        return n.substring(0, n.lastIndexOf("/") + 1) + e
                                    }
                                ))
                        }
                        ,
                        r.syncUrl = function(e) {
                            var t = this;
                            return new Promise((function(i, n) {
                                    t.url(e, (function() {
                                            i()
                                        }
                                    ))
                                }
                            ))
                        }
                        ,
                        r.release = function() {
                            this.remove(),
                            this.gafAsset && (this.gafAsset.release(),
                                this.gafAsset = null)
                        }
                        ,
                        a(i, [{
                            key: "actionName",
                            get: function() {
                                return this._actionName
                            },
                            set: function(e) {}
                        }, {
                            key: "frame",
                            get: function() {
                                return this._frame
                            },
                            set: function(e) {}
                        }, {
                            key: "fps",
                            set: function(e) {
                                this.curGafTimeLine.setFps(e)
                            }
                        }, {
                            key: "gafTimeLine",
                            get: function() {
                                return this.curGafTimeLine
                            }
                        }]),
                        i
                }(l)).prototype, "gafResAsset", [g], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    F = i(d.prototype, "spriteFrames", [G], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    i(d.prototype, "actionName", [E], Object.getOwnPropertyDescriptor(d.prototype, "actionName"), d.prototype),
                    i(d.prototype, "frame", [y], Object.getOwnPropertyDescriptor(d.prototype, "frame"), d.prototype),
                    T = d)) || T) || T));
                r._RF.pop()
            }
        }
    }
));
