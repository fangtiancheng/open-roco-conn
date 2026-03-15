System.register("chunks:///_virtual/SpiritItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AImage.ts", "./AgentNode.ts", "./Config.ts", "./DEFINE.ts", "./CommonAPI.ts", "./UICtlBase.ts", "./ToolTip.ts", "./BubbleSkinType.ts"], (function(t) {
        var i, e, o, s, n, h, l, _, c, u, a;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    o = t.cclegacy
                }
                , function(t) {
                    s = t.AImage
                }
                , function(t) {
                    n = t.AgentNode
                }
                , function(t) {
                    h = t.Config
                }
                , function(t) {
                    l = t.DEFINE
                }
                , function(t) {
                    _ = t.CommonAPI
                }
                , function(t) {
                    c = t.UICtlBase
                }
                , function(t) {
                    u = t.ToolTipComponent
                }
                , function(t) {
                    a = t.BubbleSkinType
                }
            ],
            execute: function() {
                o._RF.push({}, "11836S+t1VJT693//eDttV7", "SpiritItem", void 0);
                t("SpiritItem", function(t) {
                    function o(i, e, o) {
                        var s;
                        return void 0 === e && (e = 0),
                        void 0 === o && (o = ""),
                            (s = t.call(this, i, e, o) || this)._ui = void 0,
                            s.img = void 0,
                            s._data = void 0,
                            s._ui = new r(i.target),
                        null == s._ui.toolTipNode.getComponent(u) && (s._ui.toolTipNode.addComponent(u),
                            s._ui.toolTipNode.tooltipType = a.COMBAT_ITEMS),
                            s._ui.txtLevel.htmlText = "",
                            s._ui.x_mc.mouseEnabled = !1,
                            s._ui.x_mc.mouseChildren = !1,
                            s.setCostShow(!1),
                            s.visible_mcX = !1,
                            s
                    }
                    i(o, t);
                    var n = o.prototype;
                    return n.dispose = function() {
                        t.prototype.dispose.call(this),
                            this.disposeIcon()
                    }
                        ,
                        n.disposeIcon = function() {
                            this.img && this.img.reset(),
                            this.img && this.img.parent && this.img.parent.removeChild(this.img),
                                this.img = null
                        }
                        ,
                        n.setRepeatSpiritState = function() {
                            this.visible_mcX = !0,
                                this._ui.toolTipNode.tooltip = h.WORDS_SPIRIT_REPEAT
                        }
                        ,
                        n.setSpiritCostVisible = function(t) {
                            this.setCostShow(t)
                        }
                        ,
                        n.getTextDes = function(t, i) {
                            return "<color=" + i + "><outline color=black width=2>Lv." + t + "</outline></color>"
                        }
                        ,
                        n.setCostShow = function(t) {
                            this._ui.costShow.active = t,
                                this._ui.txtCostShow.visible = t
                        }
                        ,
                        e(o, [{
                            key: "visible_mcX",
                            get: function() {
                                return this._ui.x_mc.visible
                            },
                            set: function(t) {
                                this._ui.x_mc.visible = t
                            }
                        }, {
                            key: "data",
                            get: function() {
                                return this._data
                            },
                            set: function(t) {
                                if (this._data = t,
                                null != this._data) {
                                    this.img || (this.img = new s(100,100)),
                                        this._data.skin > 0 ? this.img.setPath(l.COMM_ROOT + "res/combat/icons/" + (1e5 + 10 * this._data.petId + this._data.skin - 1) + "-.png") : this.img.setPath(_.getSpiritSrc(this._data.petId)),
                                        this.setCostShow(!0),
                                        this._ui.txtCostShow.text = "1";
                                    for (var i = 0; i < h.SPIRIT_COST.length; i++)
                                        this._data.petId == h.SPIRIT_COST[i].id && (this._ui.txtCostShow.text = h.SPIRIT_COST[i].cost + "");
                                    if (this.img.y = -3,
                                        this._ui.mcContainer.addChild(this.img),
                                        this._ui.toolTipNode.tooltip = "",
                                        this._ui.txtLevel.htmlText = this.getTextDes(this._data.petLevel, "#FFFFFF"),
                                        this.visible_mcX = !1,
                                    this._data.petLevel < h.MIN_LEVEL)
                                        this._ui.toolTipNode.tooltip = h.WORDS_UNDER_LEVEL,
                                            this._ui.txtLevel.htmlText = this.getTextDes(this._data.petLevel, "#FF0000"),
                                            this.visible_mcX = !0;
                                    else if (h.LIMIT_SPIRIT.length > 0)
                                        for (i = 0; i < h.LIMIT_SPIRIT.length; i++)
                                            if (this._data.petId == h.LIMIT_SPIRIT[i]) {
                                                this._ui.toolTipNode.tooltip = h.WORDS_SPIRIT_BAN,
                                                    this.visible_mcX = !0;
                                                break
                                            }
                                } else
                                    this._ui.txtLevel.htmlText = "",
                                        this.visible_mcX = !1,
                                        this.setCostShow(!1),
                                        this.disposeIcon()
                            }
                        }, {
                            key: "spiritData",
                            get: function() {
                                return this._data
                            }
                        }, {
                            key: "selected",
                            set: function(t) {}
                        }]),
                        o
                }(c));
                var r = function(t) {
                    function o() {
                        for (var i, e = arguments.length, o = new Array(e), s = 0; s < e; s++)
                            o[s] = arguments[s];
                        return (i = t.call.apply(t, [this].concat(o)) || this)._x_mc = void 0,
                            i._txtLevel = void 0,
                            i._mcContainer = void 0,
                            i._costShow = void 0,
                            i._txtCostShow = void 0,
                            i._toolTipNode = void 0,
                            i
                    }
                    return i(o, t),
                        e(o, [{
                            key: "x_mc",
                            get: function() {
                                return this._x_mc || (this._x_mc = new n(this.getChildByName("x_mc"))),
                                    this._x_mc
                            }
                        }, {
                            key: "txtLevel",
                            get: function() {
                                return this._txtLevel || (this._txtLevel = new n(this.getChildByName("txtLevel"))),
                                    this._txtLevel
                            }
                        }, {
                            key: "mcContainer",
                            get: function() {
                                return this._mcContainer || (this._mcContainer = this.getChildByName("mcContainer")),
                                    this._mcContainer
                            }
                        }, {
                            key: "costShow",
                            get: function() {
                                return this._costShow || (this._costShow = this.getChildByName("costShow")),
                                    this._costShow
                            }
                        }, {
                            key: "txtCostShow",
                            get: function() {
                                return this._txtCostShow || (this._txtCostShow = new n(this.getChildByName("txtCostShow"))),
                                    this._txtCostShow
                            }
                        }, {
                            key: "toolTipNode",
                            get: function() {
                                return this._toolTipNode || (this._toolTipNode = this.getChildByName("toolTipNode")),
                                    this._toolTipNode
                            }
                        }]),
                        o
                }(n);
                o._RF.pop()
            }
        }
    }
));
