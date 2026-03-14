System.register("chunks:///_virtual/ResultWin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./AgentNode.ts", "./CommFunction.ts", "./CommonAPI.ts", "./Config.ts", "./LadderMatchSystemDP.ts", "./UICtlBase.ts", "./LevelChangeAlert.ts"], (function(t) {
        var e, i, s, n, o, r, l, u, h, c, a, g;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        n = t.NodeEventType
                }
                , function(t) {
                    o = t.__global
                }
                , function(t) {
                    r = t.AgentNode
                }
                , function(t) {
                    l = t.CommFunction
                }
                , function(t) {
                    u = t.CommonAPI
                }
                , function(t) {
                    h = t.Config
                }
                , function(t) {
                    c = t.LadderMatchSystemDP
                }
                , function(t) {
                    a = t.UICtlBase
                }
                , function(t) {
                    g = t.LevelChangeAlert
                }
            ],
            execute: function() {
                s._RF.push({}, "01c062R8LlKGa4cdsvpNK8J", "ResultWin", void 0);
                t("ResultWin", function(t) {
                    function i(e, i) {
                        var s;
                        return (s = t.call(this, e) || this)._ui = void 0,
                            s._alert = void 0,
                            s.fType = 0,
                            s._ui = new _(e.target),
                            s.init(),
                            s
                    }
                    e(i, t);
                    var s = i.prototype;
                    return s.dispose = function() {
                        this._ui && this._ui.btnClose.off(n.TOUCH_END, this.onUIClick, this)
                    }
                        ,
                        s.init = function() {
                            this._ui.btnClose.on(n.TOUCH_END, this.onUIClick, this),
                                this._ui.mcResult.gotoAndStop(1),
                                this._alert = new g(this._ui.levelAlert),
                                this._alert.visible = !1
                        }
                        ,
                        s.getTextDes = function(t) {
                            return t > 0 ? "<outline color=#006C00 width=3>+" + t + "</outline>" : "<outline color=Red width=3>" + t + "</outline>"
                        }
                        ,
                        s.processFunc = function(t) {
                            if (l.setWaiting(!1),
                            0 == t.retInfo.retCode)
                                if (0 == this.fType) {
                                    var e = h.getBigLevel(t.rankLevel) - h.getBigLevel(h.oldCurLevel);
                                    e > 0 ? this._alert.show(1, t.rankLevel) : e < 0 && this._alert.show(-1, t.rankLevel),
                                        h.curLevel = t.rankLevel;
                                    var i = h.getPecentageByWinPoint(t.winPoint);
                                    this._ui.progressTxt.text = t.winPoint + "/" + h.getNextLevelWinPoint(t.winPoint),
                                        this._ui.progressBar.gotoAndStop(0 == i ? 1 : i),
                                        (n = h.getWinPointDifference(t.winPoint)) > 0 || n < 0 ? this._ui.txt.htmlText = this.getTextDes(n) : this._ui.txt.text = ""
                                } else {
                                    for (; h.PUSH_DATA.length > 0; ) {
                                        var s = h.PUSH_DATA.shift();
                                        i = Math.floor(t.winPointDf / 100);
                                        if (this._ui.progressTxt.text = t.winPointDf + "/100",
                                            this._ui.progressBar.gotoAndStop(0 == i ? 1 : i),
                                        s.ftype > 0)
                                            var n = s.ftype * (1 == this._ui.mcResult.currentFrame ? 1 : -1);
                                        n > 0 || n < 0 ? this._ui.txt.htmlText = this.getTextDes(n) : this._ui.txt.text = ""
                                    }
                                    h.PUSH_DATA = []
                                }
                            else
                                o.showMsgBox(u.byteToString(t.retInfo.retMsg))
                        }
                        ,
                        s.showResult = function(t, e) {
                            this.fType = e,
                                this._ui.resultTitle.text = 0 == e ? "当前胜点" : "当前星数",
                                this._ui.mcResult.gotoAndStop(2 == t ? 1 : 2),
                                c.requestQueryInfo(this.processFunc.bind(this))
                        }
                        ,
                        s.onUIClick = function(t) {
                            switch (t.target.name) {
                                case "btnContinue":
                                    break;
                                case "btnClose":
                                    this.visible = !1,
                                        u.showPushData()
                            }
                        }
                        ,
                        i
                }(a));
                var _ = function(t) {
                    function s() {
                        for (var e, i = arguments.length, s = new Array(i), n = 0; n < i; n++)
                            s[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(s)) || this)._btnClose = void 0,
                            e._mcResult = void 0,
                            e._resultTitle = void 0,
                            e._txt = void 0,
                            e._progressBar = void 0,
                            e._progressTxt = void 0,
                            e._levelAlert = void 0,
                            e
                    }
                    return e(s, t),
                        i(s, [{
                            key: "btnClose",
                            get: function() {
                                return this._btnClose || (this._btnClose = new r(this.getChildByName("btnClose"))),
                                    this._btnClose
                            }
                        }, {
                            key: "mcResult",
                            get: function() {
                                return this._mcResult || (this._mcResult = new r(this.getChildByName("mcResult"))),
                                    this._mcResult
                            }
                        }, {
                            key: "resultTitle",
                            get: function() {
                                return this._resultTitle || (this._resultTitle = new r(this.getChildByName("resultTitle"))),
                                    this._resultTitle
                            }
                        }, {
                            key: "txt",
                            get: function() {
                                return this._txt || (this._txt = new r(this.getChildByName("txt"))),
                                    this._txt
                            }
                        }, {
                            key: "progressBar",
                            get: function() {
                                return this._progressBar || (this._progressBar = new r(this.getChildByName("progressBar"))),
                                    this._progressBar
                            }
                        }, {
                            key: "progressTxt",
                            get: function() {
                                return this._progressTxt || (this._progressTxt = new r(this.getChildByName("progressTxt"))),
                                    this._progressTxt
                            }
                        }, {
                            key: "levelAlert",
                            get: function() {
                                return this._levelAlert || (this._levelAlert = new r(this.getChildByName("levelAlert"))),
                                    this._levelAlert
                            }
                        }]),
                        s
                }(r);
                s._RF.pop()
            }
        }
    }
));
