System.register("chunks:///_virtual/HistoryListItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AImage.ts", "./AgentNode.ts", "./CommonAPI.ts", "./UICtlBase.ts"], (function(t) {
        var i, e, n, s, o, r, h;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    s = t.AImage
                }
                , function(t) {
                    o = t.AgentNode
                }
                , function(t) {
                    r = t.CommonAPI
                }
                , function(t) {
                    h = t.UICtlBase
                }
            ],
            execute: function() {
                n._RF.push({}, "4d10bYIDFNDdoMce7I65nV/", "HistoryListItem", void 0);
                t("HistoryListItem", function(t) {
                    function n(i, e, n) {
                        var s;
                        return void 0 === e && (e = 0),
                        void 0 === n && (n = ""),
                            (s = t.call(this, i, e, n) || this)._data = void 0,
                            s._ui = void 0,
                            s._img = void 0,
                            s._ui = new u(i.target),
                            s
                    }
                    i(n, t);
                    var o = n.prototype;
                    return o.dispose = function() {
                        this.res && this.res.parent && this.res.parent.removeChild(this.res.target),
                        this._img && this._img.reset(),
                        this._img && this._img.parent && this._img.parent.removeChild(this._img),
                            this._img = null,
                            t.prototype.dispose.call(this)
                    }
                        ,
                        o.cleanContainer = function(t) {
                            this._img && this._img.reset();
                            for (var i = t.children, e = 0; e < i.length; e++)
                                t.removeChild(i[e])
                        }
                        ,
                        o.updateSpiritContainers = function(t, i) {
                            for (var e = 0; e < 6; e++) {
                                var n = e < i.length;
                                this.updateSpiritContainer(t.getCtlItem(e), n, i[e])
                            }
                        }
                        ,
                        o.updateSpiritContainer = function(t, i, e) {
                            t.visible = i,
                                this.cleanContainer(t.getChildByName("c")),
                            i && void 0 !== e && (this._img = new s(65,65),
                                this._img.setPath(r.getSpiritSrc(e)),
                                t.getChildByName("c").addChild(this._img))
                        }
                        ,
                        o.setScore = function(t, i) {
                            this._ui.txt1.visible = 1 === t,
                                this._ui.txt2.visible = 2 === t;
                            var e = i.length > 0 && 2 === t ? "+" + i : i.length > 0 && 1 === t ? "-" + i : "";
                            this._ui.txt1.text = 1 === t ? e : "",
                                this._ui.txt2.text = 2 === t ? e : ""
                        }
                        ,
                        e(n, [{
                            key: "data",
                            set: function(t) {
                                if (this._data = t,
                                    this._data)
                                    this._ui.txtRound.text = this._data.round + "回合",
                                        this._ui.txtMWinPoint.text = this._data.myPoint.toString(),
                                        this._ui.txtRWinPoint.text = this._data.otherPoint.toString(),
                                        this.setScore(0 === this._data.win ? 2 : 1, this._data.score.toString()),
                                        this.updateSpiritContainers(this._ui.mSp, this._data.mySpirit),
                                        this.updateSpiritContainers(this._ui.rSp, this._data.otherSpirit);
                                else {
                                    this._ui.txtRound.text = "",
                                        this._ui.txtMWinPoint.text = "",
                                        this._ui.txtRWinPoint.text = "",
                                        this.setScore(1, "");
                                    for (var i = 0; i < 6; i++)
                                        this.updateSpiritContainer(this._ui.mSp.getCtlItem(i), !1),
                                            this.updateSpiritContainer(this._ui.rSp.getCtlItem(i), !1)
                                }
                            }
                        }]),
                        n
                }(h));
                var a = function(t) {
                    function e() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._ctlItems = [],
                            i
                    }
                    return i(e, t),
                        e.prototype.getCtlItem = function(t) {
                            return this._ctlItems[t] || (this._ctlItems[t] = new o(this.getChildByName("c" + t))),
                                this._ctlItems[t]
                        }
                        ,
                        e
                }(o)
                    , u = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._txtRound = void 0,
                            i._txtMWinPoint = void 0,
                            i._txtRWinPoint = void 0,
                            i._txt1 = void 0,
                            i._txt2 = void 0,
                            i._msp = void 0,
                            i._rsp = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "txtRound",
                            get: function() {
                                return this._txtRound || (this._txtRound = new o(this.getChildByName("txtRound"))),
                                    this._txtRound
                            }
                        }, {
                            key: "txtMWinPoint",
                            get: function() {
                                return this._txtMWinPoint || (this._txtMWinPoint = new o(this.getChildByName("txtMWinPoint"))),
                                    this._txtMWinPoint
                            }
                        }, {
                            key: "txtRWinPoint",
                            get: function() {
                                return this._txtRWinPoint || (this._txtRWinPoint = new o(this.getChildByName("txtRWinPoint"))),
                                    this._txtRWinPoint
                            }
                        }, {
                            key: "txt1",
                            get: function() {
                                return this._txt1 || (this._txt1 = new o(this.getChildByName("txt1"))),
                                    this._txt1
                            }
                        }, {
                            key: "txt2",
                            get: function() {
                                return this._txt2 || (this._txt2 = new o(this.getChildByName("txt2"))),
                                    this._txt2
                            }
                        }, {
                            key: "mSp",
                            get: function() {
                                return this._msp || (this._msp = new a(this.getChildByName("msp"))),
                                    this._msp
                            }
                        }, {
                            key: "rSp",
                            get: function() {
                                return this._rsp || (this._rsp = new a(this.getChildByName("rsp"))),
                                    this._rsp
                            }
                        }]),
                        n
                }(o);
                n._RF.pop()
            }
        }
    }
));
