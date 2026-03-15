System.register("chunks:///_virtual/RankPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./UICtlBase.ts", "./global.ts", "./AgentNode.ts", "./LadderMatchSystemDP.ts", "./CommFunction.ts", "./CommonAPI.ts", "./CtlPageList.ts", "./RankListItem.ts", "./PTB_0x0B0515_LadderFightQueryRankMessage_S2C.ts", "./Config.ts"], (function(t) {
        var n, e, i, s, o, a, r, u, l, c, h, _, f, d, g;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.assertThisInitialized,
                    i = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        o = t.NodeEventType
                }
                , function(t) {
                    a = t.UICtlBase
                }
                , function(t) {
                    r = t.__global
                }
                , function(t) {
                    u = t.AgentNode
                }
                , function(t) {
                    l = t.LadderMatchSystemDP
                }
                , function(t) {
                    c = t.CommFunction
                }
                , function(t) {
                    h = t.CommonAPI
                }
                , function(t) {
                    _ = t.CtlPageList
                }
                , function(t) {
                    f = t.RankListItem
                }
                , function(t) {
                    d = t.PTB_0x0B0515_LadderFightQueryRankMessage_S2C
                }
                , function(t) {
                    g = t.Config
                }
            ],
            execute: function() {
                s._RF.push({}, "66765ilGnxMo6siewTkcMWT", "RankPanel", void 0);
                t("RankPanel", function(t) {
                    function i(n, i, s, a, u) {
                        var l;
                        void 0 === s && (s = 0),
                        void 0 === a && (a = ""),
                        void 0 === u && (u = null),
                            (l = t.call(this, n, s, a, u) || this).topOwener = void 0,
                            l._ui = void 0,
                            l._rankList = void 0,
                            l.topOwener = i,
                            l._ui = new k(n.target),
                            l._rankList = new _(l._ui.content,9,f,!1);
                        for (var c = [], h = 0; h < 9; h++)
                            c[c.length] = null;
                        return l._rankList.setListData(c),
                            l._ui.btn_close.on(o.TOUCH_END, l.onUIClick, e(l)),
                            l._ui.btn_rule.on(o.TOUCH_END, l.onUIClick, e(l)),
                            l._ui.txtName.text = r.MainRoleData.nickName,
                            l._ui.txtTitle.text = "",
                            l
                    }
                    n(i, t);
                    var s = i.prototype;
                    return s.dispose = function() {
                        this._ui && (this._ui.btn_close.off(o.TOUCH_END, this.onUIClick, this),
                            this._ui.btn_rule.off(o.TOUCH_END, this.onUIClick, this)),
                        this._rankList && this._rankList.dispose(),
                            this._rankList = null,
                            t.prototype.dispose.call(this)
                    }
                        ,
                        s.update = function() {
                            this.reqRankInfo()
                        }
                        ,
                        s.reqRankInfo = function() {
                            l.requestQueryRank(this.processFunc.bind(this))
                        }
                        ,
                        s.onUIClick = function(t) {
                            switch (t.target.name) {
                                case "btn_close":
                                    this.visible = !1;
                                    break;
                                case "btn_rule":
                                    this.topOwener && this.topOwener.showDesPanel()
                            }
                        }
                        ,
                        s.processFunc = function(t, n) {
                            if (c.setWaiting(!1),
                            n instanceof d) {
                                var e = n;
                                this.handleLadderFightQueryRankMessage(e)
                            }
                        }
                        ,
                        s.handleLadderFightQueryRankMessage = function(t) {
                            var n;
                            0 === (null == (n = t.retInfo) ? void 0 : n.retCode) ? this.processSuccessResponse(t) : r.showMsgBox(h.byteToString(t.retInfo.retMsg))
                        }
                        ,
                        s.processSuccessResponse = function(t) {
                            if (t && t.userInfo) {
                                g.winPointChange = t.rankChange,
                                    g.rankNum = -1,
                                    this._rankList.setListData(t.userInfo),
                                    this._ui.txtTitle.text = g.getTitle(t.rankLevel) + g.getSmallLevel() + "段",
                                    this._ui.txtWinPoint.text = g.info.winPoint.toString(),
                                    this._ui.txtWinTimes.text = g.info.winNums.toString();
                                var n = t.userInfo.find((function(t) {
                                        return t.uin === r.MainRoleData.uin
                                    }
                                ));
                                n && (g.rankNum = n.rankNum),
                                    this._ui.txtRank.text = -1 !== g.rankNum ? g.rankNum.toString() : "未上榜"
                            } else
                                console.error("Invalid response or userInfo")
                        }
                        ,
                        i
                }(a));
                var k = function(t) {
                    function e() {
                        for (var n, e = arguments.length, i = new Array(e), s = 0; s < e; s++)
                            i[s] = arguments[s];
                        return (n = t.call.apply(t, [this].concat(i)) || this)._btn_rule = void 0,
                            n._btn_close = void 0,
                            n._txtName = void 0,
                            n._txtRank = void 0,
                            n._txtWinTimes = void 0,
                            n._txtWinPoint = void 0,
                            n._txtTitle = void 0,
                            n._content = void 0,
                            n
                    }
                    return n(e, t),
                        i(e, [{
                            key: "btn_rule",
                            get: function() {
                                return this._btn_rule || (this._btn_rule = new u(this.getChildByName("btn_rule"))),
                                    this._btn_rule
                            }
                        }, {
                            key: "btn_close",
                            get: function() {
                                return this._btn_close || (this._btn_close = new u(this.getChildByName("btn_close"))),
                                    this._btn_close
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this._txtName || (this._txtName = new u(this.getChildByName("txtName"))),
                                    this._txtName
                            }
                        }, {
                            key: "txtRank",
                            get: function() {
                                return this._txtRank || (this._txtRank = new u(this.getChildByName("txtRank"))),
                                    this._txtRank
                            }
                        }, {
                            key: "txtWinTimes",
                            get: function() {
                                return this._txtWinTimes || (this._txtWinTimes = new u(this.getChildByName("txtWinTimes"))),
                                    this._txtWinTimes
                            }
                        }, {
                            key: "txtWinPoint",
                            get: function() {
                                return this._txtWinPoint || (this._txtWinPoint = new u(this.getChildByName("txtWinPoint"))),
                                    this._txtWinPoint
                            }
                        }, {
                            key: "txtTitle",
                            get: function() {
                                return this._txtTitle || (this._txtTitle = new u(this.getChildByName("txtTitle"))),
                                    this._txtTitle
                            }
                        }, {
                            key: "content",
                            get: function() {
                                return this._content || (this._content = new u(this.getChildByName("content"))),
                                    this._content
                            }
                        }]),
                        e
                }(u);
                s._RF.pop()
            }
        }
    }
));
