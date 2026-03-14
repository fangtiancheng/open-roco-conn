System.register("chunks:///_virtual/SpiritBall.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./SpiritImage.ts"], (function(t) {
        var i, e, s, n, h, r;
        return {
            setters: [function(t) {
                i = t.createClass,
                    e = t.inheritsLoose
            }
                , function(t) {
                    s = t.cclegacy,
                        n = t.NodeEventType
                }
                , function(t) {
                    h = t.AgentNode
                }
                , function(t) {
                    r = t.SpiritImage
                }
            ],
            execute: function() {
                s._RF.push({}, "ef45fHa2O1Jl4dgmoIcnFee", "SpiritBall", void 0);
                var _ = t("SpiritBall", function() {
                    function t(t) {
                        this.onSelect = void 0,
                            this.onDeselect = void 0,
                            this._ui = void 0,
                            this._data = void 0,
                            this._index = void 0,
                            this._selectable = void 0,
                            this._selected = void 0,
                            this._spiritImage = void 0,
                            this._spiritImageClose = void 0,
                            this._ui = new o(t),
                        null != this._ui && (this._ui.txtSpiritName.text = "",
                            this._ui.txtSpiritLv.text = "",
                            this._ui.txtSpiritHp.text = "",
                            this._ui.mcSpiritBg.gotoAndStop(1),
                            this._ui.mcSpiritHpBar.gotoAndStop(1),
                            this._ui.buttonMode = !0,
                            this._ui.mouseChildren = !1,
                            this.initBallItems(),
                            this.closeComplete()),
                            this.index = 1,
                            this.selected = !1
                    }
                    var e = t.prototype;
                    return e.dispose = function() {
                        null != this._ui && (this._ui.off(n.MOUSE_ENTER, this.onMouseOver, this),
                            this._ui.off(n.MOUSE_LEAVE, this.onMouseOut, this),
                            this._ui.off(n.TOUCH_END, this.onClick, this))
                    }
                        ,
                        e.transition = function(i) {
                            if (this._selectable)
                                switch (i) {
                                    case t.TRANSITION_EXPAND:
                                        this._ui.mcSpiritBg.gotoAndStop(2),
                                            this.expandComplete();
                                        break;
                                    case t.TRANSITION_CLOSE:
                                        this._ui.x = t.EXPAND_X,
                                            this._ui.mcSpiritBg.gotoAndStop(1)
                                }
                        }
                        ,
                        e.closeComplete = function() {
                            this._ui.x = t.EXPAND_X,
                                this._ui.visible = !0
                        }
                        ,
                        e.expandComplete = function() {
                            this._ui.x = t.EXPAND_X,
                                this._ui.visible = !0,
                                this.onSelect(this)
                        }
                        ,
                        e.setSpiritImage = function(t) {
                            this._spiritImage.load(t)
                        }
                        ,
                        e.initBallItems = function() {
                            this._spiritImage = new r,
                                this._spiritImage.ui = this._ui.target,
                                this._spiritImage.display.x = t.SPIRIT_X,
                                this._spiritImage.display.y = t.SPIRIT_Y,
                                this._spiritImage.width = t.SPIRIT_WIDTH,
                                this._spiritImage.height = t.SPIRIT_HEIGHT,
                                this._spiritImage.setMask(t.SPIRIT_WIDTH, t.SPIRIT_HEIGHT)
                        }
                        ,
                        e.onMouseOver = function(t) {
                            this.selectable && (this.selected,
                                this._ui)
                        }
                        ,
                        e.onMouseOut = function(t) {
                            this.selectable && (this.selected,
                                this._ui)
                        }
                        ,
                        e.onClick = function(t) {
                            this.selectable && (this.selected ? null != this.onDeselect && this.onDeselect(this) : null != this.onSelect && this.onSelect(this))
                        }
                        ,
                        i(t, [{
                            key: "display",
                            get: function() {
                                return this._ui
                            }
                        }, {
                            key: "data",
                            set: function(t) {
                                if (this._data = t,
                                null != this._data) {
                                    if (this.selectable = !0,
                                    null != this._ui) {
                                        t.isHire ? this._ui.flagHire.visible = !0 : this._ui.flagHire.visible = !1,
                                            this._ui.txtSpiritName.text = t.name,
                                            this._ui.txtSpiritLv.text = "LV." + t.level,
                                            this._ui.txtSpiritHp.text = t.HP + "/" + t.maxHP;
                                        var i = Math.floor(t.HP / t.maxHP * 100);
                                        this._ui.mcSpiritHpBar.gotoAndStop(i),
                                            this._ui.buttonMode = !0,
                                            this._ui.mcSpiritBg.gotoAndStop(1),
                                            0 != t.skinID ? this.setSpiritImage(t.skinID) : this.setSpiritImage(t.id)
                                    }
                                } else
                                    this.selectable = !1,
                                        this.selected = !1,
                                    null != this._ui && (this._ui.flagHire.visible = !1,
                                        this._ui.buttonMode = !1,
                                        this._ui.txtSpiritName.text = "",
                                        this._ui.txtSpiritLv.text = "",
                                        this._ui.txtSpiritHp.text = "",
                                        this._ui.mcSpiritHpBar.gotoAndStop(1),
                                        this._ui.mcSpiritBg.gotoAndStop(2),
                                        this.setSpiritImage(0))
                            }
                        }, {
                            key: "index",
                            get: function() {
                                return this._index
                            },
                            set: function(t) {
                                this._index = t
                            }
                        }, {
                            key: "selectable",
                            get: function() {
                                return this._selectable
                            },
                            set: function(t) {
                                this._selectable = t
                            }
                        }, {
                            key: "selected",
                            get: function() {
                                return this._selected
                            },
                            set: function(i) {
                                this._selected = i,
                                    this._selected && null != this._data ? null != this._ui && (this._ui.x = t.EXPAND_X,
                                        this._ui.visible = !0) : null != this._ui && (this._ui.x = t.CLOSE_X,
                                        this._ui.visible = !0)
                            }
                        }, {
                            key: "spiritID",
                            get: function() {
                                return null != this._data ? this._data.id : 0
                            }
                        }]),
                        t
                }());
                _.SPIRIT_CONTAINER_X = 34,
                    _.SPIRIT_CONTAINER_Y = 4,
                    _.SPIRIT_X = 54,
                    _.SPIRIT_Y = 54,
                    _.SPIRIT_WIDTH = 48,
                    _.SPIRIT_HEIGHT = 48,
                    _.CLOSE_X = -526,
                    _.EXPAND_X = -776,
                    _.TRANSITION_CLOSE = 0,
                    _.TRANSITION_EXPAND = 1;
                var o = function(t) {
                    function s() {
                        for (var i, e = arguments.length, s = new Array(e), n = 0; n < e; n++)
                            s[n] = arguments[n];
                        return (i = t.call.apply(t, [this].concat(s)) || this)._txtSpiritName = void 0,
                            i._txtSpiritLv = void 0,
                            i._txtSpiritHp = void 0,
                            i._mcSpiritBg = void 0,
                            i._mcSpiritHpBar = void 0,
                            i._flagHire = void 0,
                            i
                    }
                    return e(s, t),
                        i(s, [{
                            key: "txtSpiritName",
                            get: function() {
                                return this._txtSpiritName || (this._txtSpiritName = new h(this.getChildByName("txtSpiritName"))),
                                    this._txtSpiritName
                            }
                        }, {
                            key: "txtSpiritLv",
                            get: function() {
                                return this._txtSpiritLv || (this._txtSpiritLv = new h(this.getChildByName("txtSpiritLv"))),
                                    this._txtSpiritLv
                            }
                        }, {
                            key: "txtSpiritHp",
                            get: function() {
                                return this._txtSpiritHp || (this._txtSpiritHp = new h(this.getChildByName("txtSpiritHp"))),
                                    this._txtSpiritHp
                            }
                        }, {
                            key: "mcSpiritBg",
                            get: function() {
                                return this._mcSpiritBg || (this._mcSpiritBg = new h(this.getChildByName("mcSpiritBg"))),
                                    this._mcSpiritBg
                            }
                        }, {
                            key: "mcSpiritHpBar",
                            get: function() {
                                return this._mcSpiritHpBar || (this._mcSpiritHpBar = new h(this.getChildByName("mcSpiritHpBar"))),
                                    this._mcSpiritHpBar
                            }
                        }, {
                            key: "flagHire",
                            get: function() {
                                return this._flagHire || (this._flagHire = new h(this.getChildByName("flagHire"))),
                                    this._flagHire
                            }
                        }]),
                        s
                }(h);
                s._RF.pop()
            }
        }
    }
));
