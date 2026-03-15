System.register("chunks:///_virtual/MatchCombatUIResMain.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatType.ts", "./BasePanel.ts", "./CFunction.ts", "./GlobalAPI.ts", "./BuildLogHelper.ts", "./Timer.ts", "./TimerEvent.ts", "./LadderCommonAPI.ts", "./MatchCombatConfig.ts", "./MatchCombatSystemDP.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./AgentNode.ts"], (function(t) {
        var e, i, n, s, o, c, a, h, r, l, f, C, m, d, g, _, u, v, T;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        s = t.Label,
                        o = t.Button,
                        c = t.Sprite
                }
                , function(t) {
                    a = t.CombatType
                }
                , function(t) {
                    h = t.BasePanel
                }
                , function(t) {
                    r = t.CFunction
                }
                , function(t) {
                    l = t.GlobalAPI
                }
                , function(t) {
                    f = t.default
                }
                , function(t) {
                    C = t.Timer
                }
                , function(t) {
                    m = t.default
                }
                , function(t) {
                    d = t.LadderCommonAPI
                }
                , function(t) {
                    g = t.MatchCombatConfig
                }
                , function(t) {
                    _ = t.MatchCombatSystemDP
                }
                , function(t) {
                    u = t.PureNotificationCenter
                }
                , function(t) {
                    v = t.AppConstDef
                }
                , function(t) {
                    T = t.AgentNode
                }
            ],
            execute: function() {
                n._RF.push({}, "e3a8355qFxDy7Hb5zcUBbtH", "MatchCombatUIResMain", void 0);
                var B = t("MatchCombatUIResMain", function(t) {
                    function n() {
                        for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                            n[s] = arguments[s];
                        return (e = t.call.apply(t, [this].concat(n)) || this)._ui = void 0,
                            e._topOwner = void 0,
                            e._matchBtn = void 0,
                            e._cancelBtn = void 0,
                            e._closeBtn = void 0,
                            e.tfRate = void 0,
                            e.tfTimes = void 0,
                            e.tfTotalRate = void 0,
                            e.tfTotalTimes = void 0,
                            e.tfTitle = void 0,
                            e.tfTitle1 = void 0,
                            e.tfTime1 = void 0,
                            e.tfTime2 = void 0,
                            e._isOnCancel = !1,
                            e._timer1 = void 0,
                            e
                    }
                    e(n, t);
                    var h = n.prototype;
                    return h.onInit = function() {
                        this._ui || (this._ui = new T(this._view)),
                            this.initLog(),
                            this._timer1 = new C(500,0),
                            this._timer1.addEventListener(m.TIMER, this.timerHandler.bind(this)),
                            this.tfTitle = this._view.getChildByName("tfTitle").getComponent(s),
                            this.tfTitle1 = this._view.getChildByName("tfTitle1").getComponent(s),
                            this.resetTitle(),
                            this.tfTime1 = this._view.getChildByName("tfTime1").getComponent(s),
                            this.tfTime1.string = g.MATCHING_TIME + "s",
                            this.tfTime2 = this._view.getChildByName("tfTime2").getComponent(s),
                            this.tfTime2.string = "0s",
                            this.tfRate = this._view.getChildByName("tfRate").getComponent(s),
                            this.tfTimes = this._view.getChildByName("tfTimes").getComponent(s),
                            this.tfTotalRate = this._view.getChildByName("tfTotalRate").getComponent(s),
                            this.tfTotalTimes = this._view.getChildByName("tfTotalTimes").getComponent(s),
                            this._matchBtn = this._view.getChildByName("matchBtn").getComponent(o),
                            this._matchBtn.node.on(o.EventType.CLICK, this.onClickMatch, this),
                            this._matchBtn.node.active = !0,
                            this._cancelBtn = this._view.getChildByName("cancelBtn").getComponent(o),
                            this._cancelBtn.node.on(o.EventType.CLICK, this.onClickCancelMatch, this),
                            this._cancelBtn.node.active = !1,
                            this._closeBtn = this._view.getChildByName("closeBtn").getComponent(o),
                            this._closeBtn.node.on(o.EventType.CLICK, this.onClickClose, this),
                            this.grayCloseBtn(!1),
                            _.initial(),
                            _.requestQueryInfo(this.processFuncMessage.bind(this))
                    }
                        ,
                        h.onShow = function() {
                            this._root && this._root.addChild(this._view)
                        }
                        ,
                        h.onUpdate = function(t) {}
                        ,
                        h.onClose = function() {}
                        ,
                        h.onDestroy = function() {}
                        ,
                        h.processFuncMessage = function(t) {
                            this.tfRate.string = t.winPoint + "/" + t.nextWinPoint,
                                this.tfTimes.string = t.winNums + ""
                        }
                        ,
                        h.processFunc = function(t) {
                            console.error("取消对战回包"),
                                this._timer1.reset(),
                                this.resetTitle(),
                                this.grayCloseBtn(!1),
                                this._isOnCancel = !1,
                                this._matchBtn.node.active = !0,
                                this._cancelBtn.node.active = !1,
                                g.isMatching = !1,
                                this.tfTime2.string = "0s";
                            var e = this.byteToString(t.retMsg);
                            console.log("MatchCombat error code = " + t.retCode + " = message = " + e)
                        }
                        ,
                        h.resetTitle = function() {
                            this.tfTitle.string = "匹配对战",
                                this.tfTitle.node.active = !0,
                                this.tfTitle1.string = "",
                                this.tfTitle1.node.active = !1
                        }
                        ,
                        h.grayCloseBtn = function(t) {
                            this._closeBtn && (this._closeBtn.enabled = !t,
                                this._closeBtn.getComponent(c).grayscale = t)
                        }
                        ,
                        h.onClickClose = function(t) {
                            this._topOwner.close()
                        }
                        ,
                        h.timerHandler = function(t) {
                            t -= 1,
                                this.tfTime2.string = Math.floor(500 * t / 1e3) + "s",
                                t %= 3;
                            for (var e = "匹配中·", i = 0; i < t; i++)
                                e += "·";
                            this.tfTitle1.string = e,
                                this.tfTitle1.node.active = !0,
                                this.tfTitle.node.active = !1
                        }
                        ,
                        h.onClickMatch = function(t) {
                            this.startMatch()
                        }
                        ,
                        h.onClickCancelMatch = function(t) {
                            this.cancelMatch()
                        }
                        ,
                        h.byteToString = function(t, e) {
                            return void 0 === e && (e = "gb2312"),
                                t.position = 0,
                                t.readMultiByte(t.length, e)
                        }
                        ,
                        h.processMatch = function(t, e) {
                            if (console.log("processMatch==>" + e.retInfo),
                                this.closeMatch(),
                            0 == e.retInfo.retCode)
                                d.startNpcCombat(e.npcId, 1 == e.type ? a.PVB : a.MATCH_PVP, new r(this.onNpcCombatCallBack,this)),
                                    u.sendNotification(v.NN_V_CLOSE_MATCH_COMBAT_VIEW);
                            else if (2 == e.retInfo.retCode) {
                                var i = this.byteToString(e.retInfo.retMsg);
                                this._topOwner.showAlert(i),
                                    console.log("processMatch==>message==>" + i)
                            } else {
                                i = this.byteToString(e.retInfo.retMsg);
                                console.log("MatchCombat error code = " + e.retInfo.retCode + " = message = " + i),
                                    this._topOwner.showAlert(i),
                                    console.log("processMatch==>message==>" + i)
                            }
                        }
                        ,
                        h.startMatch = function() {
                            if (0 != l.isLogin) {
                                if (1 == g.isMatching)
                                    return this._matchBtn.node.active = !1,
                                        this._cancelBtn.node.active = !0,
                                        void f.IS_LOCAL;
                                this._matchBtn.node.active = !1,
                                    this._cancelBtn.node.active = !0,
                                0 == g.isMatching && (this._timer1.start(),
                                    this.grayCloseBtn(!0),
                                    g.isMatching = !0,
                                    _.requestMatch(this.processMatch.bind(this)))
                            }
                        }
                        ,
                        h.cancelMatch = function() {
                            if (0 != l.isLogin)
                                return 0 == g.isMatching ? (this._matchBtn.node.active = !0,
                                    this._cancelBtn.node.active = !1,
                                    void f.IS_LOCAL) : void (1 != this._isOnCancel && 1 == g.isMatching && (this._isOnCancel = !0,
                                    _.requestCancelMatch(this.processFunc.bind(this))))
                        }
                        ,
                        h.closeMatch = function() {
                            if (0 != l.isLogin)
                                return 0 == g.isMatching ? (this._matchBtn.node.active = !0,
                                    this._cancelBtn.node.active = !1,
                                    void f.IS_LOCAL) : void (1 != this._isOnCancel && 1 == g.isMatching && (this._isOnCancel = !0,
                                    this._timer1.reset(),
                                    this.resetTitle(),
                                    this.grayCloseBtn(!1),
                                    this._isOnCancel = !1,
                                    this._matchBtn.node.active = !0,
                                    this._cancelBtn.node.active = !1,
                                    g.isMatching = !1,
                                    this.tfTime2.string = "0s"))
                        }
                        ,
                        h.onNpcCombatCallBack = function(t) {}
                        ,
                        i(n, [{
                            key: "topOwner",
                            set: function(t) {
                                this._topOwner = t
                            }
                        }, {
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/match/MatchCombatUI_1600"
                            }
                        }]),
                        n
                }(h));
                B.ON_CLOSE = "MatchCombatUIResMain.ON_CLOSE",
                    B.ON_SHOW_POP_UI = "MatchCombatUIResMain.ON_SHOW_POP_UI",
                    n._RF.pop()
            }
        }
    }
));
