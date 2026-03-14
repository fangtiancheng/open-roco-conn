System.register("chunks:///_virtual/AdvanceEffect.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts"], (function(t) {
        var i, n, e, s, o, a;
        return {
            setters: [function(t) {
                i = t.createClass,
                    n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy,
                        s = t.Event,
                        o = t.Animation
                }
                , function(t) {
                    a = t.AgentNode
                }
            ],
            execute: function() {
                e._RF.push({}, "2207cPmZPhPSYFGRBKBipN0", "AdvanceEffect", void 0);
                t("AdvanceEffect", function() {
                    function t(t, i) {
                        this.res = void 0,
                            this.container = void 0,
                            this._callback = void 0,
                            this._params = void 0,
                            this._animation = void 0,
                            this.res = new h(t),
                            this.container = i,
                            this.container.addChild(this.res.target)
                    }
                    var n = t.prototype;
                    return n.init = function() {
                        this.res.visible = !1,
                            this.res.gotoAndStop(1),
                            this.animation.node.active = !1
                    }
                        ,
                        n.play = function() {
                            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                                i[n] = arguments[n];
                            this._callback = i[0],
                                this._params = i[1],
                                this.res.addEventListener("complete", this.onEffectComplete, this),
                                this.res.visible = !0,
                                this.animation.node.active = !0,
                                this.animation.stop(),
                                this.animation.resume(),
                                this.animation.play()
                        }
                        ,
                        n.onEffectComplete = function(t) {
                            this.res.removeEventListener("complete", this.onEffectComplete, this),
                            null != this._callback && this._callback.call(null, this._params)
                        }
                        ,
                        n.dispose = function() {
                            this.container && this.res && this.container.removeChild(this.res.target),
                            this.res && this.res.removeEventListener("complete", this.onEffectComplete, this)
                        }
                        ,
                        n.onAnimationFinished = function(t) {
                            this._animation.node.active = !1,
                                this.animation.stop(),
                                this.res.dispatchEvent(new s("complete"))
                        }
                        ,
                        i(t, [{
                            key: "animation",
                            get: function() {
                                return this._animation || (this._animation = this.res.getChildByName("animation").getComponent(o),
                                    this._animation.on(o.EventType.FINISHED, this.onAnimationFinished, this)),
                                    this._animation
                            }
                        }]),
                        t
                }());
                var h = function(t) {
                    function i() {
                        return t.apply(this, arguments) || this
                    }
                    return n(i, t),
                        i
                }(a);
                e._RF.pop()
            }
        }
    }
));
