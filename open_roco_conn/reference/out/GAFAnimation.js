System.register("chunks:///_virtual/GAFAnimation.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./BuildLogHelper.ts", "./GAFAsset.ts", "./GAFMacros.ts"], (function(t) {
        var n, e, i, s, a, o, l, r, A, c, f;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy,
                        i = t._decorator,
                        s = t.Event,
                        a = t.resources,
                        o = t.isValid,
                        l = t.Component
                }
                , function(t) {
                    r = t.DEFINE
                }
                , function(t) {
                    A = t.default
                }
                , function(t) {
                    c = t.GAFAsset
                }
                , function(t) {
                    f = t.GAFMacros
                }
            ],
            execute: function() {
                var u, h;
                e._RF.push({}, "6d24aeNAgZMN5tbioOG+EA7", "GAFAnimation", void 0);
                var _ = i.ccclass;
                i.property,
                    t("SpiritAnimationEventConfig", (function() {
                            this.name = void 0,
                                this.frame = void 0,
                                this.params = void 0
                        }
                    )),
                    t("SpiritAnimationEvent", function(t) {
                        function e() {
                            for (var n, e = arguments.length, i = new Array(e), s = 0; s < e; s++)
                                i[s] = arguments[s];
                            return (n = t.call.apply(t, [this].concat(i)) || this).eventName = "",
                                n.eventFrame = 0,
                                n.eventData = [],
                                n
                        }
                        return n(e, t),
                            e
                    }(s)),
                    t("GAFAnimation", _("GAFAnimation")(((h = function(t) {
                        function e() {
                            for (var n, i = arguments.length, s = new Array(i), a = 0; a < i; a++)
                                s[a] = arguments[a];
                            return (n = t.call.apply(t, [this].concat(s)) || this)._successGaf = !1,
                                n.mode = e.SPIRITANIMATION_MODE_COMBAT,
                                n._success = null,
                                n._fail = null,
                                n.gafAsset = null,
                                n.anim = null,
                                n._filePath = "",
                                n._offsetX = 0,
                                n._offsetY = 0,
                                n
                        }
                        n(e, t);
                        var i = e.prototype;
                        return i.loadWithAnyPlist = function(t, n, i, s, a, o, l, r) {
                            this._success = o,
                                this._fail = l,
                                this._filePath = n[0],
                                e.FRAMEANIMATION_MATERIAL_COMPLETE ? this.loadGaf() : this.loadMaterial()
                        }
                            ,
                            i.syncLoadWithAnyPlist = function(t, n, e, i, s) {
                                var a = this;
                                return void 0 === i && (i = 24),
                                    new Promise((function(o) {
                                            a.loadWithAnyPlist(t, n, e, i, s, (function(t) {
                                                    o({
                                                        err: null,
                                                        node: t
                                                    })
                                                }
                                            ), (function(t, n) {
                                                    o({
                                                        err: t,
                                                        node: n
                                                    })
                                                }
                                            ), a)
                                        }
                                    ))
                            }
                            ,
                            i.loadMaterial = function() {
                                var t = this;
                                a.loadDir("materials", (function(n, i) {
                                        n ? console.error(n) : (1 == A.IS_LOCAL && console.log("GAF材质加载完成", i),
                                            e.FRAMEANIMATION_MATERIAL_COMPLETE = !0,
                                            t.loadGaf())
                                    }
                                ))
                            }
                            ,
                            i.loadGaf = function() {
                                var t = this;
                                if (this.release(),
                                null == this.gafAsset) {
                                    var n = "" + r.CDN + this._filePath;
                                    this.gafAsset = new c(n,(function(t) {
                                            var e = n.substring(0, n.lastIndexOf("/") + 1) + t;
                                            return 1 == A.IS_LOCAL && console.log("[gaf] load remote File success. " + e),
                                                e
                                        }
                                    ),(function() {
                                            0 != t.isValid && t._success && (1 == A.IS_LOCAL && console.log("loadGaf==success"),
                                                t._successGaf = !0,
                                                t._success(t.node))
                                        }
                                    ))
                                }
                            }
                            ,
                            i.createAniNode = function(t, n) {
                                var e = this
                                    , i = function() {
                                    e.gafAsset._loadedCall = function() {
                                        var i = e.gafAsset.createObjectWithName(t);
                                        i.setPosition(0, 0),
                                            i.parent = e.node,
                                            i.setAnimationStartedNextLoopDelegate((function(t) {}
                                            )),
                                            i.setFramePlayedDelegate((function(t, n) {}
                                            )),
                                            i.setSequenceDelegate((function(t, n) {}
                                            )),
                                            i.setAnimationFinishedPlayDelegate((function(t) {}
                                            )),
                                            i.on(f.DISPATCH_FRAME_EVENT, (function(t) {
                                                    var n = t.tag
                                                        , i = new s(n);
                                                    1 == A.IS_LOCAL && console.log("GAFAnimation=>" + n + "==>" + e.node.name),
                                                        e.node.dispatchEvent(i)
                                                }
                                            )),
                                            e.anim = i,
                                            n()
                                    }
                                        ,
                                        e.gafAsset.initWithGAFFile(e.gafAsset._gafName, e.gafAsset._textureLoadDelegate)
                                };
                                if (null == this.gafAsset) {
                                    var a = "" + r.CDN + this._filePath;
                                    this.gafAsset = new c(a,(function(t) {
                                            var n = a.substring(0, a.lastIndexOf("/") + 1) + t;
                                            return 1 == A.IS_LOCAL && console.log("[gaf] load remote File success. " + n),
                                                n
                                        }
                                    ),(function() {
                                            0 != e.isValid && i()
                                        }
                                    ))
                                } else
                                    i()
                            }
                            ,
                            i.play = function(t, n) {
                                var e = this;
                                this._successGaf || (console.error("GAFAnimation==play==" + t + "==" + n + "==非法play,gaf未初始化完成！"),
                                    A.IS_LOCAL),
                                    this.anim ? (this.anim.stop(),
                                    1 == A.IS_LOCAL && console.log("GAFAnimation==play==" + t + "==" + n),
                                        this.anim.setLooped(!0, !0),
                                        this.anim.start(n)) : this.createAniNode(t, (function() {
                                            1 == A.IS_LOCAL && console.log("GAFAnimation==play==" + t + "==" + n),
                                                e.anim.setLooped(!0, !0),
                                                e.anim.start(n)
                                        }
                                    ))
                            }
                            ,
                            i.stop = function() {
                                this.anim && this.anim.stop()
                            }
                            ,
                            i.gotoAndStop = function(t, n) {
                                var e = this;
                                if (this._successGaf && this.gafAsset)
                                    return this.anim ? this.anim.stop() : this.createAniNode(t, (function() {
                                            if (e.anim)
                                                return e.anim.gotoAndStop(n)
                                        }
                                    )),
                                        !1
                            }
                            ,
                            i.onDestroy = function() {
                                this.release()
                            }
                            ,
                            i.release = function() {
                                1 == A.IS_LOCAL && console.info("GAFAnimation==release==" + this.node.name),
                                this.anim && o(this.anim) && (this.anim.remove(),
                                    this.anim = null),
                                this.gafAsset && o(this.gafAsset) && (this.gafAsset.release(),
                                    this.gafAsset = null)
                            }
                            ,
                            e
                    }(l)).FRAMEANIMATION_MATERIAL_COMPLETE = !1,
                        h.FRAMEANIMATION_FRAME_EVENT = "FRAMEANIMATION_FRAME_EVENT",
                        h.SPIRITANIMATION_MODE_BUNDLE = 0,
                        h.SPIRITANIMATION_MODE_COMBAT = 1,
                        h.SPIRITANIMATION_MODE_REMOTE = 2,
                        h.RES = new Map,
                        u = h)) || u);
                e._RF.pop()
            }
        }
    }
));
