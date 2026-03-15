System.register("chunks:///_virtual/RankListItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./UICtlBase.ts", "./global.ts", "./CommonAPI.ts", "./Config.ts", "./TextHelper.ts"], (function(t) {
        var i, e, n, s, a, o, u, h, r, x;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        s = t.Label
                }
                , function(t) {
                    a = t.AgentNode
                }
                , function(t) {
                    o = t.UICtlBase
                }
                , function(t) {
                    u = t.__global
                }
                , function(t) {
                    h = t.CommonAPI
                }
                , function(t) {
                    r = t.Config
                }
                , function(t) {
                    x = t.TextHelper
                }
            ],
            execute: function() {
                n._RF.push({}, "bdf36TTbulBgaFhmO3rTZSt", "RankListItem", void 0);
                t("RankListItem", function(t) {
                    function n(i, e, n) {
                        var s;
                        return void 0 === e && (e = 0),
                        void 0 === n && (n = ""),
                            (s = t.call(this, i, e, n) || this)._data = void 0,
                            s._ui = void 0,
                            s._ui = new l(i.target),
                            s
                    }
                    return i(n, t),
                        n.prototype.dispose = function() {
                            this.res && this.res.parent && this.res.parent.removeChild(this.res.target),
                                t.prototype.dispose.call(this)
                        }
                        ,
                        e(n, [{
                            key: "data",
                            set: function(t) {
                                if (this._data = t,
                                    this._data) {
                                    this._ui.txtRank.text = this._data.rankNum + "";
                                    var i = this._ui.txtName.target.getComponent(s);
                                    this._data.uin == u.MainRoleData.uin ? x.setTextColor(i, 16711680) : x.setTextColor(i, 11466239),
                                        this._ui.txtName.text = h.byteToString(this._data.name),
                                        this._ui.txtWinNum.text = this._data.winNums + "",
                                        this._ui.txtWinPoint.text = this._data.winPoint + "",
                                        this._ui.txtTitle.text = r.getTitle(this._data.rankLevel) + r.getSmallLevel(this._data.rankLevel) + "段"
                                } else
                                    this._ui.txtRank.text = "",
                                        this._ui.txtName.text = "",
                                        this._ui.txtWinNum.text = "",
                                        this._ui.txtWinPoint.text = "",
                                        this._ui.txtTitle.text = ""
                            }
                        }, {
                            key: "visible",
                            set: function(t) {
                                this._ui.visible = t
                            }
                        }]),
                        n
                }(o));
                var l = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), s = 0; s < e; s++)
                            n[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._txtWinNum = void 0,
                            i._txtWinPoint = void 0,
                            i._txtTitle = void 0,
                            i._txtName = void 0,
                            i._txtRank = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "txtWinNum",
                            get: function() {
                                return this._txtWinNum || (this._txtWinNum = new a(this.getChildByName("txtWinNum"))),
                                    this._txtWinNum
                            }
                        }, {
                            key: "txtWinPoint",
                            get: function() {
                                return this._txtWinPoint || (this._txtWinPoint = new a(this.getChildByName("txtWinPoint"))),
                                    this._txtWinPoint
                            }
                        }, {
                            key: "txtTitle",
                            get: function() {
                                return this._txtTitle || (this._txtTitle = new a(this.getChildByName("txtTitle"))),
                                    this._txtTitle
                            }
                        }, {
                            key: "txtName",
                            get: function() {
                                return this._txtName || (this._txtName = new a(this.getChildByName("txtName"))),
                                    this._txtName
                            }
                        }, {
                            key: "txtRank",
                            get: function() {
                                return this._txtRank || (this._txtRank = new a(this.getChildByName("txtRank"))),
                                    this._txtRank
                            }
                        }]),
                        n
                }(a);
                n._RF.pop()
            }
        }
    }
));
