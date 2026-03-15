System.register("chunks:///_virtual/GameStoryAnimation.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimationGAF.ts"], (function(t) {
        var n, i, o, a, e, r, c, s, u;
        return {
            setters: [function(t) {
                n = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    o = t.initializerDefineProperty,
                    a = t.assertThisInitialized,
                    e = t.createClass
            }
                , function(t) {
                    r = t.cclegacy,
                        c = t._decorator,
                        s = t.Component
                }
                , function(t) {
                    u = t.AnimationGAF
                }
            ],
            execute: function() {
                var l, m, p, y, f;
                r._RF.push({}, "ca761/GynBJU6/tVb8TJe3x", "GameStoryAnimation", void 0);
                var h = c.ccclass
                    , g = c.property;
                t("GameStoryAnimation", (l = h("GameStoryAnimation"),
                    m = g(u),
                l((f = n((y = function(t) {
                    function n() {
                        for (var n, i = arguments.length, e = new Array(i), r = 0; r < i; r++)
                            e[r] = arguments[r];
                        return n = t.call.apply(t, [this].concat(e)) || this,
                            o(n, "animation", f, a(n)),
                            n
                    }
                    i(n, t);
                    var r = n.prototype;
                    return r.create = function(t) {
                        this.animation.create(t)
                    }
                        ,
                        r.play = function() {
                            this.animation.play()
                        }
                        ,
                        r.stop = function() {
                            this.animation.stop()
                        }
                        ,
                        r.gotoAndPlay = function(t) {
                            this.animation.gotoAndPlay(t)
                        }
                        ,
                        r.gotoAndStop = function(t) {
                            this.animation.gotoAndStop(t)
                        }
                        ,
                        r.getChildByName = function(t) {
                            return this.animation.getChildByName(t)
                        }
                        ,
                        e(n, [{
                            key: "gafTimeLine",
                            get: function() {
                                return this.animation.gafTimeLine
                            }
                        }]),
                        n
                }(s)).prototype, "animation", [m], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    p = y)) || p));
                r._RF.pop()
            }
        }
    }
));
