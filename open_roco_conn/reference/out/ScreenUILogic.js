System.register("chunks:///_virtual/ScreenUILogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AngelTcpHelper.ts", "./AgentNode.ts", "./ToolTip.ts", "./PrefabSelector.ts", "./SpriteFrameSelector.ts", "./UserData.ts", "./FightData.ts", "./CombatInfoTxtLogic.ts", "./PKAnimationLogic.ts", "./PromptTxtLogic.ts", "./ScrollBarLogic.ts", "./SpiritUILogic.ts", "./WeatherUILogic.ts", "./ScreenUILogicStaticNode.ts"], (function(t) {
        var i, o, s, e, r, n, c, l, h, a, g, _, u, p, f, d, m, B, T, C, M;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    o = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        e = t.ScrollView,
                        r = t.NodeEventType,
                        n = t.Slider,
                        c = t.Label
                }
                , function(t) {
                    l = t.AngelTcpHelper
                }
                , function(t) {
                    h = t.AgentNode
                }
                , function(t) {
                    a = t.ToolTipComponent
                }
                , function(t) {
                    g = t.default
                }
                , function(t) {
                    _ = t.default
                }
                , function(t) {
                    u = t.UserData
                }
                , function(t) {
                    p = t.FightData
                }
                , function(t) {
                    f = t.CombatInfoTxtLogic
                }
                , function(t) {
                    d = t.default
                }
                , function(t) {
                    m = t.PromptTxtLogic
                }
                , function(t) {
                    B = t.ScrollBarLogic
                }
                , function(t) {
                    T = t.SpiritUILogic
                }
                , function(t) {
                    C = t.WeatherUILogic
                }
                , function(t) {
                    M = t.ScreenUILogicStaticNode
                }
            ],
            execute: function() {
                s._RF.push({}, "ba3d8Ar9wxMbphSg0GtaGuV", "ScreenUILogic", void 0),
                    t("ScreenUILogic", function() {
                        function t(t) {
                            var i = this;
                            this._ui = void 0,
                                this._target = void 0,
                                this._roundMC = void 0,
                                this._roundLabel = void 0,
                                this._fightMsgBg = void 0,
                                this._btnHide = void 0,
                                this._btnShow = void 0,
                                this.spiritUILogin_1 = void 0,
                                this.spiritUILogin_2 = void 0,
                                this._combatInfoTxt = void 0,
                                this._combatInfoTxt1 = void 0,
                                this.promptTxt = void 0,
                                this._scrollBarMc = void 0,
                                this._scrollBarMc1 = void 0,
                                this.scrollFBeChoosed = !1,
                                this.scrollBarTempText = "",
                                this.weatherUI = void 0,
                                this.scrollBarLength = 16,
                                this.curChooseShow = !1,
                                this._curProg = 1,
                                this._curProg1 = 1,
                                this._ui = new I(t),
                                this._target = t,
                                this._roundMC = this._target.getChildByName("roundMC"),
                                this._roundMC.getComponent(d).init(),
                                this._roundLabel = this._target.getChildByName("roundTxt").getComponent(c),
                            this._roundLabel && (this._roundLabel.node.active = u.isWhite(u.uin)),
                                M.EquipBarRes1 = this._target.getChildByName("equipBar1"),
                                M.EquipBarRes2 = this._target.getChildByName("equipBar2"),
                                M.EquipBarRes1.active = !1,
                                M.EquipBarRes2.active = !1,
                                M.EquipBarRes1.getChildByName("infoTips").active = !1,
                                M.EquipBarRes2.getChildByName("infoTips").active = !1,
                                M.EquipBarRes1.getChildByName("equipTips").active = !1,
                                M.EquipBarRes2.getChildByName("equipTips").active = !1,
                                M.IntimacyRes1 = this._target.getChildByName("intimacy1"),
                                M.IntimacyRes2 = this._target.getChildByName("intimacy2"),
                                M.IntimacyRes1.active = !0,
                                M.IntimacyRes2.active = !0,
                                M.IntimacyTips1 = this._target.getChildByName("overTips1"),
                                M.IntimacyTips2 = this._target.getChildByName("overTips2"),
                                M.IntimacyTips1.active = !0,
                                M.IntimacyTips2.active = !0,
                            M.IntimacyTips1.getComponent(a) || M.IntimacyTips1.addComponent(a),
                            M.IntimacyTips2.getComponent(a) || M.IntimacyTips2.addComponent(a),
                                M.PropertyTips = t.getChildByName("propertTip"),
                                M.PropertyTips.getComponent(g).gotoAndStop(1),
                                M.PropertyTips.active = !1,
                                this.spiritUILogin_1 = new T(this._target,1),
                                this.spiritUILogin_2 = new T(this._target,2);
                            var o = this._target.getChildByName("fightMsgMc").getChildByName("scroll").getChildByName("combat_info_txt");
                            this._combatInfoTxt1 = new f(o),
                                this._combatInfoTxt1.setVisible(!0);
                            var s = this._target.getChildByName("scroll").getChildByName("combat_info_txt");
                            this._combatInfoTxt = new f(s),
                                this._combatInfoTxt.setVisible(!1),
                                this._fightMsgBg = this._target.getChildByName("fightMsgBg"),
                                this._fightMsgBg.active = !1,
                                this.promptTxt = new m(this._target),
                                this._scrollBarMc1 = new B(this._target.getChildByName("fightMsgMc")),
                                this._scrollBarMc1.setVisible(!0),
                                this._scrollBarMc1.slider.getComponent(n).progress = 1,
                                this._scrollBarMc1.slider.on("slide", this.onSlider, this),
                                this._scrollBarMc = new B(this._target),
                                this._scrollBarMc.setVisible(!1),
                                this._scrollBarMc.slider.getComponent(n).progress = 1,
                                this._scrollBarMc.slider.on("slide", this.onSlider1, this),
                                this.weatherUI = new C(this._target),
                                this._scrollBarMc.upButton.on(r.TOUCH_END, this.scrollactionUp1, this),
                                this._scrollBarMc.downButton.on(r.TOUCH_END, this.scrollactionDown1, this),
                                this._scrollBarMc1.upButton.on(r.TOUCH_END, this.scrollactionUp, this),
                                this._scrollBarMc1.downButton.on(r.TOUCH_END, this.scrollactionDown, this),
                                this._ui.fightMsgMc.scroll.target.on("scroll-ended", (function(t) {
                                        var o = 0
                                            , s = t.getScrollOffset().y
                                            , e = t.getMaxScrollOffset().y;
                                        o = 0 == e ? 1 : s / e,
                                            i._scrollBarMc1.slider.getComponent(n).progress = 1 - o,
                                            i._curProg = 1 - o
                                    }
                                )),
                                this._ui.scroll.target.on("scroll-ended", (function(t) {
                                        var o = 0
                                            , s = t.getScrollOffset().y
                                            , e = t.getMaxScrollOffset().y;
                                        o = 0 == e ? 1 : s / e,
                                            i._scrollBarMc.slider.getComponent(n).progress = 1 - o,
                                            i._curProg1 = 1 - o
                                    }
                                )),
                                this._btnShow = this._target.getChildByName("btnShow"),
                                this._btnShow.getComponent(_).gotoAndStop(1),
                                this._btnShow.on(r.TOUCH_END, this.clickShowFightMsg, this)
                        }
                        var i = t.prototype;
                        return i.onSlider = function(t) {
                            var i = t.progress;
                            this._curProg = i,
                                this._ui.fightMsgMc.scroll.getComponent(e).scrollToPercentVertical(i, .01)
                        }
                            ,
                            i.onSlider1 = function(t) {
                                var i = t.progress;
                                this._curProg1 = i,
                                    this._ui.scroll.getComponent(e).scrollToPercentVertical(i, .01)
                            }
                            ,
                            i.clickHideFightMsg = function(t) {}
                            ,
                            i.clickShowFightMsg = function(t) {
                                this._combatInfoTxt.getVisible() ? (this._btnShow.getComponent(_).gotoAndStop(1),
                                    this.curChooseShow = !1,
                                    this._combatInfoTxt.setVisible(!1),
                                    this._fightMsgBg.active = !1,
                                    this._scrollBarMc.setVisible(!1),
                                    this._combatInfoTxt1.setVisible(!0),
                                    this._scrollBarMc1.setVisible(!0)) : (this._btnShow.getComponent(_).gotoAndStop(2),
                                    this.curChooseShow = !0,
                                    this._combatInfoTxt.setVisible(!0),
                                    this._fightMsgBg.active = !0,
                                    this._scrollBarMc.setVisible(!0),
                                    this._combatInfoTxt1.setVisible(!0),
                                    this._scrollBarMc1.setVisible(!1))
                            }
                            ,
                            i.mouseactionDown = function(t) {
                                this.scrollFBeChoosed = !0,
                                    this.curChooseShow ? this._scrollBarMc.scrollF.on(r.MOUSE_UP, this.mouseactionUp, this) : this._scrollBarMc1.scrollF.on(r.MOUSE_UP, this.mouseactionUp, this)
                            }
                            ,
                            i.mouseactionUp = function(t) {
                                this.scrollFBeChoosed = !1,
                                    this.curChooseShow ? this._scrollBarMc.scrollF.off(r.MOUSE_UP, this.mouseactionUp, this) : this._scrollBarMc1.scrollF.off(r.MOUSE_UP, this.mouseactionUp, this)
                            }
                            ,
                            i.scrollFaction = function(t) {}
                            ,
                            i.scrollactionUp = function(i) {
                                this._curProg = Math.min(1, this._curProg + t.SCROLL_ONCE_PROGRESS),
                                    this._scrollBarMc1.slider.getComponent(n).progress = this._curProg,
                                    this._ui.fightMsgMc.scroll.getComponent(e).scrollToPercentVertical(this._curProg, .01)
                            }
                            ,
                            i.scrollactionDown = function(i) {
                                this._curProg = Math.max(0, this._curProg - t.SCROLL_ONCE_PROGRESS),
                                    this._scrollBarMc1.slider.getComponent(n).progress = this._curProg,
                                    this._ui.fightMsgMc.scroll.getComponent(e).scrollToPercentVertical(this._curProg, .01)
                            }
                            ,
                            i.scrollactionUp1 = function(i) {
                                this._curProg1 = Math.min(1, this._curProg1 + t.SCROLL_ONCE_PROGRESS),
                                    this._scrollBarMc.slider.getComponent(n).progress = this._curProg1,
                                    this._ui.scroll.getComponent(e).scrollToPercentVertical(this._curProg1, .01)
                            }
                            ,
                            i.scrollactionDown1 = function(i) {
                                this._curProg1 = Math.max(0, this._curProg1 - t.SCROLL_ONCE_PROGRESS),
                                    this._scrollBarMc.slider.getComponent(n).progress = this._curProg1,
                                    this._ui.scroll.getComponent(e).scrollToPercentVertical(this._curProg1, .01)
                            }
                            ,
                            i.setData = function(t, i, o) {
                                this.spiritUILogin_1.setSpiritInfo(t),
                                    this.spiritUILogin_2.setSpiritInfo(i, t.level)
                            }
                            ,
                            i.upateSpiritsBall = function(t, i, o) {
                                void 0 === t && (t = -1),
                                void 0 === i && (i = null),
                                void 0 === o && (o = null),
                                    this.spiritUILogin_1.upateSpiritsState(t, i),
                                    this.spiritUILogin_2.upateSpiritsState(t, o)
                            }
                            ,
                            i.update = function(t) {}
                            ,
                            i.getSpiritUI = function(t) {
                                return t == p.POS_LEFT ? this.spiritUILogin_1 : this.spiritUILogin_2
                            }
                            ,
                            i.getTarget = function() {
                                return this._target
                            }
                            ,
                            i.setWeather = function(t) {
                                this.weatherUI.id = t
                            }
                            ,
                            i.setWeatherRound = function(t) {
                                this.weatherUI.round = t
                            }
                            ,
                            i.refreshWeatherRound = function(t) {
                                this.weatherUI.refreshWeatherRound(t)
                            }
                            ,
                            i.showRound = function(t) {
                                t > 0 && t < 1e3 && (this._roundMC.getComponent(d).playRoundAni(t),
                                this._roundLabel && (this._roundLabel.string = "预加载时长：" + (l.resEndTimer - l.resBeginTimer) + "ms"))
                            }
                            ,
                            i.getCombatInfoTxt = function() {
                                var t = this._combatInfoTxt.getTarget().htmlText.split("回合————")
                                    , i = this._combatInfoTxt.getTarget().htmlText.split("————第")[this._combatInfoTxt.getTarget().htmlText.split("————第").length - 1].split("回合————")[0]
                                    , o = Number(i);
                                return o > 1 ? this._combatInfoTxt1.getTarget().htmlText = "————第" + (o - 1) + "回合————\n" + t[t.length - 2].split("————第")[0] + "\n————第" + o + "回合————\n" + t[t.length - 1] : null == t[t.length - 1] && "" == t[t.length - 1] || (this._combatInfoTxt1.getTarget().htmlText = "————第" + o + "回合————\n" + t[t.length - 1]),
                                    this._combatInfoTxt1.getTarget().scrollV = this._combatInfoTxt1.getTarget().maxScrollV,
                                    this._combatInfoTxt
                            }
                            ,
                            i.getPrompTxt = function() {
                                return this.promptTxt
                            }
                            ,
                            i.getScrollBar = function() {
                                return this.curChooseShow ? this._scrollBarMc : this._scrollBarMc1
                            }
                            ,
                            i.reset = function() {
                                this.spiritUILogin_1.reset(),
                                    this.spiritUILogin_2.reset(),
                                    this._combatInfoTxt.reset(),
                                    this._combatInfoTxt1.reset(),
                                    this.promptTxt.reset(),
                                    this._scrollBarMc.reset(),
                                    this._scrollBarMc1.reset(),
                                    this.weatherUI.reset(),
                                    this._scrollBarMc.upButton.on(r.TOUCH_END, this.scrollactionUp1, this),
                                    this._scrollBarMc.downButton.on(r.TOUCH_END, this.scrollactionDown1, this),
                                    this._scrollBarMc1.upButton.on(r.TOUCH_END, this.scrollactionUp, this),
                                    this._scrollBarMc1.downButton.on(r.TOUCH_END, this.scrollactionDown, this)
                            }
                            ,
                            i.delEventListener = function() {
                                this._scrollBarMc.upButton.off(r.TOUCH_END, this.scrollactionUp1),
                                    this._scrollBarMc.downButton.off(r.TOUCH_END, this.scrollactionDown1, this),
                                    this._scrollBarMc1.upButton.off(r.TOUCH_END, this.scrollactionUp, this),
                                    this._scrollBarMc1.downButton.off(r.TOUCH_END, this.scrollactionDown, this),
                                    this._btnHide.off(r.TOUCH_END, this.clickHideFightMsg, this),
                                    this._btnShow.off(r.TOUCH_END, this.clickShowFightMsg, this)
                            }
                            ,
                            t
                    }()).SCROLL_ONCE_PROGRESS = .1;
                var S = function(t) {
                    function s() {
                        for (var i, o = arguments.length, s = new Array(o), e = 0; e < o; e++)
                            s[e] = arguments[e];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._scroll = void 0,
                            i
                    }
                    return i(s, t),
                        o(s, [{
                            key: "scroll",
                            get: function() {
                                return this._scroll || (this._scroll = new h(this.getChildByName("scroll"))),
                                    this._scroll
                            }
                        }]),
                        s
                }(h)
                    , I = function(t) {
                    function s() {
                        for (var i, o = arguments.length, s = new Array(o), e = 0; e < o; e++)
                            s[e] = arguments[e];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._fightMsgMc = void 0,
                            i._scroll = void 0,
                            i
                    }
                    return i(s, t),
                        o(s, [{
                            key: "fightMsgMc",
                            get: function() {
                                return this._fightMsgMc || (this._fightMsgMc = new S(this.getChildByName("fightMsgMc"))),
                                    this._fightMsgMc
                            }
                        }, {
                            key: "scroll",
                            get: function() {
                                return this._scroll || (this._scroll = new h(this.getChildByName("scroll"))),
                                    this._scroll
                            }
                        }]),
                        s
                }(h);
                s._RF.pop()
            }
        }
    }
));
