System.register("chunks:///_virtual/PKAnimationLogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var n, o, i, e, a, s, l, c, r, u;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    o = t.cclegacy,
                        i = t._decorator,
                        e = t.Label,
                        a = t.Animation,
                        s = t.UIOpacity,
                        l = t.Tween,
                        c = t.tween,
                        r = t.v3,
                        u = t.Component
                }
            ],
            execute: function() {
                var p;
                o._RF.push({}, "01f24qN7fBK25gwyjdSlVpw", "PKAnimationLogic", void 0);
                var d = i.ccclass;
                i.property,
                    t("default", d("PKAnimationLogic")(p = function(t) {
                        function o() {
                            for (var n, o = arguments.length, i = new Array(o), e = 0; e < o; e++)
                                i[e] = arguments[e];
                            return (n = t.call.apply(t, [this].concat(i)) || this)._aniRound = null,
                                n._label = null,
                                n
                        }
                        n(o, t);
                        var i = o.prototype;
                        return i.init = function() {
                            this.node.active = !1,
                                this._label = this.node.getChildByName("num0").getComponent(e),
                                this._aniRound = this.node.getChildByName("anim").getComponent(a),
                                this._aniRound.stop()
                        }
                            ,
                            i.playRoundAni = function(t) {
                                var n = this;
                                this._label.string = t + "",
                                    this.node.active = !0,
                                    this.node.setPosition(-1200, 120),
                                    this.node.getComponent(s).opacity = 255,
                                    this._aniRound.play(),
                                    l.stopAllByTarget(this.node),
                                    c(this.node).to(.3, {
                                        position: r(0, 120)
                                    }).delay(1).call((function() {
                                            c(n.node).to(.3, {
                                                position: r(0, 340)
                                            }).start()
                                        }
                                    )).to(.3, {}).call((function() {
                                            n.node.active = !1
                                        }
                                    )).start()
                            }
                            ,
                            o
                    }(u)) || p);
                o._RF.pop()
            }
        }
    }
));
