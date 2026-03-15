System.register("chunks:///_virtual/MatchingPopUp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./Config.ts", "./UICtlBase.ts", "./TimerHelper.ts", "./CommFunction.ts", "./LadderMatchSystemDP.ts", "./RetInfo.ts"], (function(t) {
        var i, n, e, s, c, o, h, u, a, _, r, m, g;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    n = t.assertThisInitialized,
                    e = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        c = t.NodeEventType,
                        o = t.Animation
                }
                , function(t) {
                    h = t.AgentNode
                }
                , function(t) {
                    u = t.Config
                }
                , function(t) {
                    a = t.UICtlBase
                }
                , function(t) {
                    _ = t.TimerHelper
                }
                , function(t) {
                    r = t.CommFunction
                }
                , function(t) {
                    m = t.LadderMatchSystemDP
                }
                , function(t) {
                    g = t.RetInfo
                }
            ],
            execute: function() {
                s._RF.push({}, "eae1bBmxulHq5vJsdfHPIrs", "MatchingPopUp", void 0);
                t("MatchingPopUp", function(t) {
                    function e(i, e, s, o, h) {
                        var a;
                        return void 0 === s && (s = 0),
                        void 0 === o && (o = ""),
                        void 0 === h && (h = null),
                            (a = t.call(this, i, s, o, h) || this)._ui = void 0,
                            a._topOwner = void 0,
                            a._count = void 0,
                            a.setTimeoutIndex = void 0,
                            a._topOwner = e,
                            a._ui = new l(i.target),
                            a._ui.txtTime_0.text = u.MATCHING_TIME + "",
                            a._ui.btnQuitMatching.on(c.TOUCH_END, a.onUIClick, n(a)),
                            a
                    }
                    i(e, t);
                    var s = e.prototype;
                    return s.dispose = function() {
                        this._ui.btnQuitMatching.off(c.TOUCH_END, this.onUIClick, this),
                            t.prototype.dispose.call(this)
                    }
                        ,
                        s.show = function() {
                            this._count = 0,
                                this._ui.txtTime_1.text = this._count + "",
                                _.disposeTimer("matching"),
                                _.startTimer("matching", 1e3, 999, function() {
                                    this._count++,
                                        this._ui.txtTime_1.text = this._count + "S"
                                }
                                    .bind(this)),
                                r.setWaiting(!0),
                                this.setTimeoutIndex = setTimeout(this.toShow, 500)
                        }
                        ,
                        s.toShow = function() {
                            this._ui && this._ui.mcMactching.play(),
                                this.visible = !0,
                                r.setWaiting(!1)
                        }
                        ,
                        s.close = function() {
                            this._ui.mcMactching.stop(),
                                clearTimeout(this.setTimeoutIndex),
                                r.setWaiting(!1),
                                this._ui.txtTime_1.text = "",
                                _.disposeTimer("matching"),
                                this.visible = !1
                        }
                        ,
                        s.onUIClick = function(t) {
                            switch (t.target.name) {
                                case "btnQuitMatching":
                                    m.requestCancelMatch(this.processFunc.bind(this))
                            }
                        }
                        ,
                        s.processFunc = function(t) {
                            this._topOwner.closeMatching(),
                                r.setWaiting(!1),
                            t instanceof g && (u.isMatching = !1)
                        }
                        ,
                        e
                }(a));
                var l = function(t) {
                    function n() {
                        for (var i, n = arguments.length, e = new Array(n), s = 0; s < n; s++)
                            e[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(e)) || this)._btnQuitMatching = void 0,
                            i._txtTime_0 = void 0,
                            i._txtTime_1 = void 0,
                            i._mcMactching = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "btnQuitMatching",
                            get: function() {
                                return this._btnQuitMatching || (this._btnQuitMatching = new h(this.getChildByName("btnQuitMatching"))),
                                    this._btnQuitMatching
                            }
                        }, {
                            key: "txtTime_0",
                            get: function() {
                                return this._txtTime_0 || (this._txtTime_0 = new h(this.getChildByName("txtTime_0"))),
                                    this._txtTime_0
                            }
                        }, {
                            key: "txtTime_1",
                            get: function() {
                                return this._txtTime_1 || (this._txtTime_1 = new h(this.getChildByName("txtTime_1"))),
                                    this._txtTime_1
                            }
                        }, {
                            key: "mcMactching",
                            get: function() {
                                return this._mcMactching || (this._mcMactching = this.getChildByName("img_mactching").getComponent(o)),
                                    this._mcMactching
                            }
                        }]),
                        n
                }(h);
                s._RF.pop()
            }
        }
    }
));
