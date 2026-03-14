System.register("chunks:///_virtual/ControlButtonPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./WindowCloseAction.ts", "./ResManager.ts", "./CombatActionProxy.ts", "./CombatControlBarCommands.ts", "./CombatDataProxy.ts", "./EscapeConfirmationDialog.ts", "./GrayDetail.ts", "./ControlButton.ts"], (function(t) {
        var n, i, o, s, e, a, l, c, h, u, r;
        return {
            setters: [function(t) {
                n = t.createClass
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    o = t.__global
                }
                , function(t) {
                    s = t.WindowCloseAction
                }
                , function(t) {
                    e = t.default
                }
                , function(t) {
                    a = t.CombatActionProxy
                }
                , function(t) {
                    l = t.CombatControlBarCommands
                }
                , function(t) {
                    c = t.CombatDataProxy
                }
                , function(t) {
                    h = t.EscapeConfirmationDialog
                }
                , function(t) {
                    u = t.GrayDetail
                }
                , function(t) {
                    r = t.ControlButton
                }
            ],
            execute: function() {
                i._RF.push({}, "dc624dXxCNA3oePNFfafLRv", "ControlButtonPanel", void 0);
                t("ControlButtonPanel", function() {
                    function t() {
                        this._controlBar = void 0,
                            this._onCommand = void 0,
                            this._selected = 0,
                            this._enabled = !1,
                            this._stuck = !1,
                            this._escapeConfirmationDialog = void 0,
                            this._buttons = void 0,
                            this._target = void 0,
                            this._target = e.Instance.getPrefabByName("combatSys_1600/content/ControlButtonPanelUI_1600"),
                            this.initButtons(),
                            this.selected = l.ATTACK,
                            this.enabled = !0,
                            this.stuck = !1
                    }
                    var i = t.prototype;
                    return i.dispose = function() {
                        this.disposeButtons()
                    }
                        ,
                        i.reset = function() {
                            this.closeDialog(this._escapeConfirmationDialog)
                        }
                        ,
                        i.lock = function(t) {
                            if (void 0 === t && (t = 0),
                            null != this._buttons)
                                for (var n, i = this._buttons.length, o = 0; o < i; ++o)
                                    null != (n = this._buttons[o]) && (0 != t && n.id != t || (n.enabled = !1,
                                        n.gray = !n.enabled,
                                        u.setGrayTooltip(n, c.getCombatData())))
                        }
                        ,
                        i.unlock = function(t) {
                            if (void 0 === t && (t = 0),
                            null != this._buttons)
                                for (var n, i = this._buttons.length, o = 0; o < i; ++o)
                                    null != (n = this._buttons[o]) && (0 != t && n.id != t || (n.enabled = !0,
                                        n.gray = !n.enabled,
                                        u.setGrayTooltip(n, c.getCombatData())))
                        }
                        ,
                        i.initButtons = function() {
                            var t = [this._target.getChildByName("attackButton"), this._target.getChildByName("itemButton"), this._target.getChildByName("spiritButton"), this._target.getChildByName("catchButton"), this._target.getChildByName("escapeButton")]
                                , n = ["btn_atk", "btn_recover", "btn_pet", "btn_catch", ""]
                                , i = ["攻击", "恢复", "宠物", "捕捉", "逃跑"]
                                , o = [l.ATTACK, l.ITEM, l.SPIRIT, l.CATCH, l.ESCAPE]
                                , s = [this.onAttackClick.bind(this), this.onItemClick.bind(this), this.onSpiritClick.bind(this), this.onCatchClick.bind(this), this.onEscapeClick.bind(this)];
                            this._buttons = [];
                            for (var e, a = t.length, c = 0; c < a; ++c)
                                e = new r(t[c],o[c],s[c],n[c],i[c]),
                                    this._buttons.push(e)
                        }
                        ,
                        i.disposeButtons = function() {
                            if (null != this._buttons) {
                                for (var t, n = this._buttons.length, i = 0; i < n; ++i)
                                    null != (t = this._buttons[i]) && (t.dispose(),
                                        t = null);
                                this._buttons = null
                            }
                        }
                        ,
                        i.onAttackClick = function(t) {
                            this.selected == l.ATTACK || this._stuck || (this.selected = l.ATTACK,
                            null != this._onCommand && this._onCommand(this.selected))
                        }
                        ,
                        i.onItemClick = function(t) {
                            this.selected == l.ITEM || this._stuck || (this.selected = l.ITEM,
                            null != this._onCommand && this._onCommand(this.selected))
                        }
                        ,
                        i.onSpiritClick = function(t) {
                            this.selected == l.SPIRIT || this._stuck || (this.selected = l.SPIRIT,
                            null != this._onCommand && this._onCommand(this.selected))
                        }
                        ,
                        i.onCatchClick = function(t) {
                            this.selected == l.CATCH || this._stuck || (this.selected = l.CATCH,
                            null != this._onCommand && this._onCommand(this.selected))
                        }
                        ,
                        i.onEscapeClick = function(t) {
                            this.openEscapeDialog()
                        }
                        ,
                        i.openEscapeDialog = function() {
                            null == this._escapeConfirmationDialog ? (this._escapeConfirmationDialog = o.UI.createWindow(h, !0),
                            null != this._escapeConfirmationDialog && (this._escapeConfirmationDialog.closeAction = s.HIDE,
                                this._escapeConfirmationDialog.onOK = this.onEscape.bind(this),
                                this._escapeConfirmationDialog.onCancel = this.closeDialog.bind(this),
                                this._escapeConfirmationDialog.center())) : this._escapeConfirmationDialog.show()
                        }
                        ,
                        i.closeDialog = function(t) {
                            null != t && t.close()
                        }
                        ,
                        i.onEscape = function(t) {
                            this.closeDialog(t),
                                a.escape()
                        }
                        ,
                        n(t, [{
                            key: "controlBar",
                            set: function(t) {
                                this._controlBar = t
                            }
                        }, {
                            key: "display",
                            get: function() {
                                return this._target
                            }
                        }, {
                            key: "onCommand",
                            set: function(t) {
                                this._onCommand = t
                            }
                        }, {
                            key: "selected",
                            get: function() {
                                return this._selected
                            },
                            set: function(t) {
                                if (null != this._buttons) {
                                    for (var n, i = this._buttons.length, o = 0; o < i; ++o)
                                        null != (n = this._buttons[o]) && (n.selected = t == n.id);
                                    this._selected = t
                                }
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this._enabled
                            },
                            set: function(t) {
                                if (null != this._buttons) {
                                    for (var n, i = this._buttons.length, o = 0; o < i; ++o)
                                        null != (n = this._buttons[o]) && (n.enabled = t);
                                    this._enabled = t
                                }
                            }
                        }, {
                            key: "stuck",
                            get: function() {
                                return this._stuck
                            },
                            set: function(t) {
                                this._stuck = t
                            }
                        }]),
                        t
                }());
                i._RF.pop()
            }
        }
    }
));
