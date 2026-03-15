System.register("chunks:///_virtual/ConsumableItemCell.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./NodeExtend.ts", "./ResManager.ts", "./BagDataProxy.ts", "./CacheManager.ts", "./ToolTip.ts", "./SpiritBagCellIcon.ts"], (function(t) {
        var i, e, n, o, s, a, u, l, r, c, h, _, d;
        return {
            setters: [function(t) {
                i = t.inheritsLoose,
                    e = t.createClass,
                    n = t.assertThisInitialized
            }
                , function(t) {
                    o = t.cclegacy,
                        s = t.NodeEventType,
                        a = t.Vec2
                }
                , function(t) {
                    u = t.AgentNode
                }
                , function(t) {
                    l = t.NodeExtend
                }
                , function(t) {
                    r = t.default
                }
                , function(t) {
                    c = t.BagDataProxy
                }
                , function(t) {
                    h = t.CacheManager
                }
                , function(t) {
                    _ = t.ToolTipComponent
                }
                , function(t) {
                    d = t.SpiritBagCellIcon
                }
            ],
            execute: function() {
                o._RF.push({}, "e4f90X6tOFLJpK7rNJtiZEg", "ConsumableItemCell", void 0);
                var m = t("ConsumableItemCell", function(t) {
                    function o(i, e, o, a) {
                        var u;
                        (u = t.call(this) || this)._data = void 0,
                            u._onClick = void 0,
                            u._tooltip = void 0,
                            u._icon = void 0,
                            u._numberText = void 0,
                            u._ui = void 0,
                            u._idx = "",
                            u._idx = a;
                        var l = r.Instance.getPrefabByName("SpiritBag_1600/cellIcon_1600");
                        return u._ui = new C(l),
                        u._ui.getComponent(_) || u._ui.addComponent(_),
                            u._ui.width = 96,
                            u._ui.height = 96,
                            u.addChild(u._ui.target),
                            u._onClick = o,
                            u.mouseChildren = !1,
                            u.initImage(),
                            u.initNumber(),
                            u._ui.on(s.TOUCH_END, u.onCellClick, n(u)),
                            u.reset(),
                            u.x = i,
                            u.y = e,
                            u
                    }
                    i(o, t);
                    var u = o.prototype;
                    return u.dispose = function() {
                        this.disposeImage(),
                            this.off(s.TOUCH_END, this.onCellClick, this)
                    }
                        ,
                        u.reset = function() {
                            this.mouseEnabled = !1,
                                this.buttonMode = !1,
                                this.useHandCursor = !1,
                                this._tooltip = null,
                                this._ui.tooltip = this._tooltip,
                                this._numberText.text = "",
                                this._icon.reset()
                        }
                        ,
                        u.initImage = function() {
                            this._icon = new d(o.IMG_WIDTH,o.IMG_HEIGHT),
                                this._icon.setImageCache(h.getInstance().cache),
                                this._ui.container.addChild(this._icon)
                        }
                        ,
                        u.disposeImage = function() {
                            this._icon.unload()
                        }
                        ,
                        u.initNumber = function() {
                            this._numberText = this._ui.numberText
                        }
                        ,
                        u.onCellClick = function(t) {
                            null != this._onClick && null != this._data && this._onClick(this._data, c.selectedSpirit)
                        }
                        ,
                        u.getCellTooltipText = function(t) {
                            return null == t ? null : t.name + "\n" + t.description
                        }
                        ,
                        e(o, [{
                            key: "data",
                            set: function(t) {
                                this._data = t,
                                    null != this._data && null != this._data.itemDes ? (this.mouseEnabled = !0,
                                        this.buttonMode = !0,
                                        this.useHandCursor = !0,
                                        this._tooltip = this.getCellTooltipText(this._data.itemDes),
                                        this._ui.tooltip = this._tooltip,
                                        this._ui.tooltipPos = new a(0,-30),
                                        this._numberText.text = this._data.count.toString(),
                                        this._icon.setPath(this._data.itemDes.url)) : this.reset()
                            }
                        }, {
                            key: "display",
                            get: function() {
                                return this
                            }
                        }, {
                            key: "tooltip",
                            get: function() {
                                return this._tooltip
                            }
                        }]),
                        o
                }(l));
                m.CELL_WIDTH = 60,
                    m.CELL_HEIGHT = 60,
                    m.IMG_WIDTH = 72,
                    m.IMG_HEIGHT = 72;
                var C = function(t) {
                    function n() {
                        for (var i, e = arguments.length, n = new Array(e), o = 0; o < e; o++)
                            n[o] = arguments[o];
                        return (i = t.call.apply(t, [this].concat(n)) || this)._numberText = void 0,
                            i._container = void 0,
                            i
                    }
                    return i(n, t),
                        e(n, [{
                            key: "numberText",
                            get: function() {
                                return this._numberText || (this._numberText = new u(this.getChildByName("numberText"))),
                                    this._numberText
                            }
                        }, {
                            key: "container",
                            get: function() {
                                return this._container || (this._container = new u(this.getChildByName("container"))),
                                    this._container
                            }
                        }]),
                        n
                }(u);
                o._RF.pop()
            }
        }
    }
));
