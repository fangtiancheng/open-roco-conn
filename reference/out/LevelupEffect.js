System.register("chunks:///_virtual/LevelupEffect.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts"], (function(t) {
        var i, e, n, s, o, a;
        return {
            setters: [function(t) {
                i = t.createClass,
                    e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        s = t.Event,
                        o = t.Animation
                }
                , function(t) {
                    a = t.AgentNode
                }
            ],
            execute: function() {
                n._RF.push({}, "7ae0dEXJJlK3I5W1mnJq8op", "LevelupEffect", void 0);
                t("LevelupEffect", function() {
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
                    var e = t.prototype;
                    return e.init = function() {
                        this.res.visible = !0,
                            this.res.gotoAndStop(1),
                            this.animation.node.active = !1
                    }
                        ,
                        e.onEffectComplete = function(t) {
                            this.res.removeEventListener("complete", this.onEffectComplete, this),
                            null != this._callback && this._callback.call(null, this._params)
                        }
                        ,
                        e.play = function() {
                            for (var t = arguments.length, i = new Array(t), e = 0; e < t; e++)
                                i[e] = arguments[e];
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
                        e.dispose = function() {
                            this.container && this.res && this.container.removeChild(this.res.target),
                            this.res && this.res.removeEventListener("complete", this.onEffectComplete, this)
                        }
                        ,
                        e.onAnimationFinished = function(t) {
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
                    return e(i, t),
                        i
                }(a);
                n._RF.pop()
            }
        }
    }
));
