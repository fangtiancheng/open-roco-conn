System.register("chunks:///_virtual/RewardIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./ToolTip.ts", "./BubbleSkinType.ts", "./TooltipIcon.ts", "./global.ts", "./Constants.ts", "./DEFINE.ts", "./UICtlBase.ts"], (function(t) {
        var o, i, n, e, s, l, a, c, u, r, p;
        return {
            setters: [function(t) {
                o = t.inheritsLoose,
                    i = t.createClass
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    e = t.AgentNode
                }
                , function(t) {
                    s = t.ToolTipComponent
                }
                , function(t) {
                    l = t.BubbleSkinType
                }
                , function(t) {
                    a = t.TooltipIcon
                }
                , function(t) {
                    c = t.__global
                }
                , function(t) {
                    u = t.Constants
                }
                , function(t) {
                    r = t.DEFINE
                }
                , function(t) {
                    p = t.UICtlBase
                }
            ],
            execute: function() {
                n._RF.push({}, "a444f0xPfFEA7UCQbwPKXvM", "RewardIcon", void 0);
                t("RewardIcon", function(t) {
                    function n(o, i, n) {
                        var e;
                        return (e = t.call(this, o) || this)._ui = void 0,
                            e.tooltipIcon = void 0,
                            e._data = void 0,
                            e._ui = new d(o.target),
                            e.tooltipIcon = new a(60,60),
                            e._ui.mcContainer.addChild(e.tooltipIcon),
                            e._ui.txtNum.text = "",
                        null == e._ui.toolTipNode.getComponent(s) && (e._ui.toolTipNode.addComponent(s),
                            e._ui.toolTipNode.tooltipType = l.COMBAT_ITEMS),
                            e
                    }
                    o(n, t);
                    var e = n.prototype;
                    return e.dispose = function() {
                        this.disposeIcon()
                    }
                        ,
                        e.disposeIcon = function() {
                            this.tooltipIcon && this.tooltipIcon.reset(),
                            this.tooltipIcon && this.tooltipIcon.parent && this.tooltipIcon.parent.removeChild(this.tooltipIcon),
                                this.tooltipIcon = null
                        }
                        ,
                        i(n, [{
                            key: "data",
                            set: function(t) {
                                if (this._data = t,
                                    this._data) {
                                    var o, i, n, e, s;
                                    this.tooltipIcon = this.tooltipIcon || new a(60,60),
                                    this.tooltipIcon.parent || this._ui.mcContainer.addChild(this.tooltipIcon);
                                    var l = c.SysAPI.getGDataAPI().getDataProxy(u.ITEM_DATA);
                                    null != (o = l.select(Number(t.id))) && (e = t.num,
                                        i = o.url,
                                        n = o.name),
                                    null != (o = (l = c.SysAPI.getGDataAPI().getDataProxy(u.SPIRIT_DATA)).select(Number(t.id))) && (s = o,
                                        e = t.num,
                                        i = s.iconSrc,
                                        n = s.name),
                                    null != (o = (l = c.SysAPI.getGDataAPI().getDataProxy(u.DAZZLE_DRESS_DATA)) && l.select(Number(t.id))) && (e = t.num,
                                        i = r.DAZZLE_DRESS_RES_ROOT + o.type + "/" + o.id + "_bag.png",
                                        n = o.name),
                                        this._ui.txtNum.text = "x" + e,
                                        this.tooltipIcon.setPath(i),
                                        this._ui.toolTipNode.tooltip = n
                                } else
                                    this.disposeIcon(),
                                        this._ui.txtNum.text = ""
                            }
                        }]),
                        n
                }(p));
                var d = function(t) {
                    function n() {
                        for (var o, i = arguments.length, n = new Array(i), e = 0; e < i; e++)
                            n[e] = arguments[e];
                        return (o = t.call.apply(t, [this].concat(n)) || this)._mcContainer = void 0,
                            o._txtMission1 = void 0,
                            o._toolTipNode = void 0,
                            o
                    }
                    return o(n, t),
                        i(n, [{
                            key: "mcContainer",
                            get: function() {
                                return this._mcContainer || (this._mcContainer = new e(this.getChildByName("mcContainer"))),
                                    this._mcContainer
                            }
                        }, {
                            key: "txtNum",
                            get: function() {
                                return this._txtMission1 || (this._txtMission1 = new e(this.getChildByName("txtMission1"))),
                                    this._txtMission1
                            }
                        }, {
                            key: "toolTipNode",
                            get: function() {
                                return this._toolTipNode || (this._toolTipNode = new e(this.getChildByName("toolTipNode"))),
                                    this._toolTipNode
                            }
                        }]),
                        n
                }(e);
                n._RF.pop()
            }
        }
    }
));
