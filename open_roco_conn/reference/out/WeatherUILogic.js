System.register("chunks:///_virtual/WeatherUILogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimationLoader.ts", "./ToolTip.ts", "./SpriteFrameSelector.ts", "./CombatConfig.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, o, i, n, a, s, h, r;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        i = t.Vec2
                }
                , function(t) {
                    n = t.AnimationLoader
                }
                , function(t) {
                    a = t.ToolTipComponent
                }
                , function(t) {
                    s = t.default
                }
                , function(t) {
                    h = t.CombatConfig
                }
                , function(t) {
                    r = t.default
                }
            ],
            execute: function() {
                o._RF.push({}, "4d064IrD0ZGpplY53IMQU8N", "WeatherUILogic", void 0),
                    t("WeatherUILogic", function() {
                        function t(t) {
                            this._container = void 0,
                                this._target = void 0,
                                this._animation = void 0,
                                this.curWeatherRound = 0,
                                this.curGameRound = 0,
                                this._weatherRoundCount = void 0,
                                this._id = 0,
                                this._target = t,
                                this._container = this._target.getChildByName("weatherTipsNode"),
                                this._container.tooltip = "",
                                this._container.tooltipPos = new i(0,-70),
                            this._container.getComponent(a) || this._container.addComponent(a),
                                this._weatherRoundCount = this._target.getChildByName("weatherRoundCount").getComponent(s),
                                this._weatherRoundCount.node.active = !1,
                                this._weatherRoundCount.gotoAndStop(1),
                                this._animation = this._target.getChildByName("weatherLoader").addComponent(n),
                                this._animation.node.active = !0,
                                this._animation.success = this.onSucc.bind(this)
                        }
                        var o = t.prototype;
                        return o.onSucc = function() {
                            this.showWeatherLoader(),
                            1 == r.IS_LOCAL && console.debug("WeatherUILogic==onSucc==" + this._id),
                                this._container.tooltip = h.getInstance().getWeatherTips(this._id),
                            this._container.getComponent(a) && this._container.getComponent(a).hide(),
                                this._animation.node.active = !0
                        }
                            ,
                            o.refreshWeatherRound = function(t) {
                                this.curGameRound = t;
                                var e = 0;
                                this.curWeatherRound - t > 0 && (e = this.curWeatherRound - t),
                                    e > 0 ? (this._weatherRoundCount.node.active = !0,
                                        e > 8 ? this._weatherRoundCount.gotoAndStop(8) : this._weatherRoundCount.gotoAndStop(e)) : (this._weatherRoundCount.node.active = !1,
                                        this._animation.reset(),
                                    1 == r.IS_LOCAL && console.debug("WeatherUILogic--reset"))
                            }
                            ,
                            o.reset = function() {
                                this.curWeatherRound = 0,
                                    this._container.tooltip = "",
                                    this._animation.reset(),
                                1 == r.IS_LOCAL && console.debug("WeatherUILogic--reset"),
                                    this._weatherRoundCount.node.active = !1,
                                    this._weatherRoundCount.gotoAndStop(1),
                                    this.hideWeatherLoader()
                            }
                            ,
                            o.hideWeatherLoader = function() {
                                this._animation.node.setPosition(this._animation.node.getPosition().x, 1e3),
                                1 == r.IS_LOCAL && console.error("hideWeatherLoader=" + this._animation.node.getPosition().x + "==" + this._animation.node.getPosition().y)
                            }
                            ,
                            o.showWeatherLoader = function() {
                                this._animation.node.setPosition(this._animation.node.getPosition().x, t.WEATHER_LOADER_POS_Y),
                                1 == r.IS_LOCAL && console.error("showWeatherLoader=" + this._animation.node.getPosition().x + "==" + this._animation.node.getPosition().y)
                            }
                            ,
                            e(t, [{
                                key: "id",
                                set: function(t) {
                                    if (this._id = t,
                                    100 != this._id && 21 != this._id) {
                                        1 == r.IS_LOCAL && console.debug("WeatherUILogic==id==" + this._id),
                                            24 == this._id ? this._animation.node.setPosition(-20, this._animation.node.getPosition().y) : this._animation.node.setPosition(0, this._animation.node.getPosition().y),
                                            this.hideWeatherLoader();
                                        var e = "weather/" + t + "/Normal-0";
                                        this._animation.setPath("dynamic", e),
                                        1 == r.IS_LOCAL && console.debug("WeatherUILogic--set--id--" + e)
                                    } else
                                        this.hideWeatherLoader()
                                }
                            }, {
                                key: "round",
                                set: function(t) {
                                    this.curWeatherRound = t + this.curGameRound,
                                    1 == r.IS_LOCAL && console.debug("WeatherUILogic--round"),
                                        t > 0 ? (this._weatherRoundCount.node.active = !0,
                                            t > 8 ? this._weatherRoundCount.gotoAndStop(8) : this._weatherRoundCount.gotoAndStop(t)) : (this._weatherRoundCount.node.active = !1,
                                            this._animation.reset(),
                                        1 == r.IS_LOCAL && console.debug("WeatherUILogic--reset"))
                                }
                            }]),
                            t
                    }()).WEATHER_LOADER_POS_Y = 306,
                    o._RF.pop()
            }
        }
    }
));
