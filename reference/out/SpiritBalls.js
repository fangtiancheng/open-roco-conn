System.register("chunks:///_virtual/SpiritBalls.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./SpiritBagRefProxy.ts", "./SpiritBall.ts"], (function(t) {
        var i, s, l, e, n, r, o;
        return {
            setters: [function(t) {
                i = t.createClass,
                    s = t.inheritsLoose
            }
                , function(t) {
                    l = t.cclegacy,
                        e = t.NodeEventType
                }
                , function(t) {
                    n = t.AgentNode
                }
                , function(t) {
                    r = t.SpiritBagRefProxy
                }
                , function(t) {
                    o = t.SpiritBall
                }
            ],
            execute: function() {
                l._RF.push({}, "44a61klolxPEr+6L5IjvuMP", "SpiritBalls", void 0),
                    t("SpiritBalls", function() {
                        function t(t) {
                            this._ui = void 0,
                                this._balls = void 0,
                                this._ballsLength = 0,
                                this._curChoose = 0,
                                this._curSelectSpirit = void 0,
                                this._ui = new a(t),
                            this._ui && this.addListeners(),
                                this.initBalls(),
                                this.data = null
                        }
                        var s = t.prototype;
                        return s.addListeners = function() {}
                            ,
                            s.onUIRollOut = function(t) {}
                            ,
                            s.onUIRollOver = function(t) {
                                t.propagationImmediateStopped = !0;
                                for (var i = 0; i < this._ballsLength; i++)
                                    this._balls[i].transition(o.TRANSITION_CLOSE);
                                if (-1 != t.target.name.indexOf("ball")) {
                                    var s = Number(t.target.name.substr(4));
                                    this.setCurSelectSpirit(this._balls[s]),
                                        this._curChoose = s
                                }
                            }
                            ,
                            s.initCurrentChoose = function() {
                                this._curChoose = 0
                            }
                            ,
                            s.setCurSelectSpirit = function(t) {
                                t.selectable && (null != this._curSelectSpirit && this._curSelectSpirit.transition(o.TRANSITION_CLOSE),
                                    t.transition(o.TRANSITION_EXPAND),
                                    this._curSelectSpirit = t)
                            }
                            ,
                            s.removeListeners = function() {
                                this._ui
                            }
                            ,
                            s.dispose = function() {
                                this.removeListeners(),
                                    this.disposeBalls()
                            }
                            ,
                            s.select = function(t) {
                                var i, s = this._balls.length;
                                this._ballsLength = s;
                                for (var l = 0; l < s; ++l)
                                    null != (i = this._balls[l]) && (i.selected = !0)
                            }
                            ,
                            s.initBalls = function() {
                                this._balls = [];
                                for (var i = 0; i < t.SPIRIT_BALL_NUM; ++i) {
                                    var s = this._ui.getChildByName("ball" + i);
                                    s.hasEventListener(e.TOUCH_END, this.onUIRollOver, this) || s.on(e.TOUCH_END, this.onUIRollOver, this),
                                        this._balls[i] = new o(s),
                                        this._balls[i].index = i,
                                        this._balls[i].onSelect = this.onSelectBall.bind(this)
                                }
                            }
                            ,
                            s.disposeBalls = function() {
                                var t, i = this._balls.length;
                                this._ballsLength = i;
                                for (var s = 0; s < i; ++s)
                                    null != (t = this._balls[s]) && t.dispose()
                            }
                            ,
                            s.onSelectBall = function(t) {
                                null != t && r.spiritBagPanel.select(t.index)
                            }
                            ,
                            i(t, [{
                                key: "data",
                                set: function(t) {
                                    var i = this._balls.length;
                                    this._ballsLength = i;
                                    for (var s = 0; s < i; s++)
                                        null != this._balls[s] && (this._balls[s].data = null != t ? t[s] : null,
                                            this._balls[s].selected = !0);
                                    this.setCurSelectSpirit(this._balls[this._curChoose])
                                }
                            }]),
                            t
                    }()).SPIRIT_BALL_NUM = 6;
                var a = function(t) {
                    function i() {
                        return t.apply(this, arguments) || this
                    }
                    return s(i, t),
                        i
                }(n);
                l._RF.pop()
            }
        }
    }
));
