System.register("chunks:///_virtual/CrateRoleCatEffect.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimationGAF.ts"], (function(t) {
        var n, o, i, a, e, r, s, c, l, u;
        return {
            setters: [function(t) {
                n = t.applyDecoratedDescriptor,
                    o = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    a = t.assertThisInitialized,
                    e = t.createClass
            }
                , function(t) {
                    r = t.cclegacy,
                        s = t._decorator,
                        c = t.UITransform,
                        l = t.Component
                }
                , function(t) {
                    u = t.AnimationGAF
                }
            ],
            execute: function() {
                var p, f, h, d;
                r._RF.push({}, "a38c7MYfO9N4pacOCBpz4am", "CrateRoleCatEffect", void 0);
                var g = s.ccclass
                    , A = s.property;
                t("CrateRoleCatEffect", (p = A(u),
                g((d = n((h = function(t) {
                    function n() {
                        for (var n, o = arguments.length, e = new Array(o), r = 0; r < o; r++)
                            e[r] = arguments[r];
                        return n = t.call.apply(t, [this].concat(e)) || this,
                            i(n, "animation", d, a(n)),
                            n
                    }
                    o(n, t);
                    var r = n.prototype;
                    return r.createCat = function() {
                        this.animation.create("cat"),
                            this.animation.fps = 24
                    }
                        ,
                        r.warnNoName = function() {
                            this.animation.gotoAndStop(4),
                                this.wot.gotoAndPlay(0),
                                this.tips.gotoAndStop(8),
                                this.delayWarnDefault(3)
                        }
                        ,
                        r.warnAgree = function() {}
                        ,
                        r.warnNoAgree = function() {}
                        ,
                        r.warnCreating = function() {
                            this.animation.gotoAndStop(4),
                                this.wot.gotoAndPlay(0),
                                this.tips.gotoAndStop(11)
                        }
                        ,
                        r.warnCreateSucc = function() {
                            this.animation.gotoAndStop(4),
                                this.wot.gotoAndPlay(0),
                                this.tips.gotoAndStop(9)
                        }
                        ,
                        r.warnCreateFail = function() {
                            this.animation.gotoAndStop(4),
                                this.wot.gotoAndPlay(0),
                                this.tips.gotoAndStop(13),
                                this.delayWarnDefault(3)
                        }
                        ,
                        r.warnTooManyWords = function() {
                            this.animation.gotoAndStop(4),
                                this.wot.gotoAndPlay(5),
                                this.tips.gotoAndStop(4),
                                this.delayWarnDefault(3)
                        }
                        ,
                        r.delayWarnDefault = function(t) {
                            var n = this
                                , o = this.getComponent(c);
                            o.unscheduleAllCallbacks(),
                                o.scheduleOnce((function() {
                                        n.warnDefault(),
                                            n.delayWarnDefault(--t)
                                    }
                                ), 2)
                        }
                        ,
                        r.warnDefault = function() {
                            this.animation.gotoAndStop(4),
                                this.tips.gotoAndStop(5)
                        }
                        ,
                        e(n, [{
                            key: "wot",
                            get: function() {
                                return this.animation.getChildByName("wot")
                            }
                        }, {
                            key: "tips",
                            get: function() {
                                return this.wot.getChildByName("wot")
                            }
                        }]),
                        n
                }(l)).prototype, "animation", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    f = h)) || f));
                r._RF.pop()
            }
        }
    }
));
