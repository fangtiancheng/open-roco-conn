System.register("chunks:///_virtual/CombatControlBar.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatActionProxy.ts", "./CombatControlBarCommands.ts", "./ControlButtonPanel.ts", "./ControlContentPanel.ts", "./CombatDataProxy.ts"], (function(t) {
        var n, o, e, i, l, s, a, u, c;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    o = t.createClass
            }
                , function(t) {
                    e = t.cclegacy,
                        i = t.Node
                }
                , function(t) {
                    l = t.CombatActionProxy
                }
                , function(t) {
                    s = t.CombatControlBarCommands
                }
                , function(t) {
                    a = t.ControlButtonPanel
                }
                , function(t) {
                    u = t.ControlContentPanel
                }
                , function(t) {
                    c = t.CombatDataProxy
                }
            ],
            execute: function() {
                e._RF.push({}, "04978+Gm8BAa48S12/8A6/t", "CombatControlBar", void 0);
                var _ = t("CombatControlBar", function(t) {
                    function e() {
                        var n;
                        return (n = t.call(this) || this)._plugin = void 0,
                            n._data = void 0,
                            n._contentPanel = void 0,
                            n._buttonPanel = void 0,
                            n._stuck = !1,
                            n
                    }
                    n(e, t);
                    var i = e.prototype;
                    return i.dispose = function() {
                        null != this._contentPanel && (this._contentPanel.dispose(),
                            this._contentPanel = null),
                        null != this._buttonPanel && (this._buttonPanel.dispose(),
                            this._buttonPanel = null)
                    }
                        ,
                        i.reset = function() {
                            null != this._contentPanel && this._contentPanel.reset(),
                            null != this._buttonPanel && this._buttonPanel.reset()
                        }
                        ,
                        i.select = function(t) {
                            null != this._buttonPanel && (this._buttonPanel.selected = t),
                            null != this._contentPanel && this._contentPanel.switchView(t)
                        }
                        ,
                        i.backToDefault = function() {
                            this.stuck = !1,
                                this.select(s.ATTACK)
                        }
                        ,
                        i.lock = function(t) {
                            void 0 === t && (t = 0),
                            null != this._buttonPanel && this._buttonPanel.lock(t)
                        }
                        ,
                        i.unlock = function(t) {
                            void 0 === t && (t = 0),
                            null != this._buttonPanel && this._buttonPanel.unlock(t)
                        }
                        ,
                        i.setPlugin = function(t) {
                            this._plugin = t
                        }
                        ,
                        i.initialize = function() {
                            c.initialize(this._plugin),
                                l.initialize(this._plugin),
                                this._contentPanel = new u,
                                this._contentPanel.controlBar = this,
                                this._contentPanel.display.setPosition(e.CONTENT_PANEL_X, e.CONTENT_PANEL_Y),
                                this._buttonPanel = new a,
                                this._buttonPanel.controlBar = this,
                                this._buttonPanel.display.setPosition(e.BUTTON_PANEL_X, e.BUTTON_PANEL_Y),
                                this._buttonPanel.onCommand = this._contentPanel.switchView.bind(this._contentPanel),
                                this.select(s.ATTACK),
                                this.addChild(this._buttonPanel.display),
                                this.addChild(this._contentPanel.display)
                        }
                        ,
                        i.update = function() {
                            null != this._plugin && null != this._contentPanel && null != this._buttonPanel && (this._contentPanel.currentViewData = this._plugin.getCurrCombatData())
                        }
                        ,
                        i.setHandlerEnabled = function(t) {
                            null != this._contentPanel && (this._contentPanel.enabled = t)
                        }
                        ,
                        i.setHandleStuck = function(t) {
                            this.stuck = t
                        }
                        ,
                        i.setHandleGray = function(t, n) {
                            null != this._buttonPanel && (n ? this._buttonPanel.lock(t) : this._buttonPanel.unlock(t))
                        }
                        ,
                        i.onTimeUp = function() {
                            null != this._buttonPanel && this._buttonPanel.reset()
                        }
                        ,
                        o(e, [{
                            key: "data",
                            set: function(t) {
                                this._data = t,
                                null != this._contentPanel && (this._contentPanel.data = this._data)
                            }
                        }, {
                            key: "display",
                            get: function() {
                                return this
                            }
                        }, {
                            key: "stuck",
                            get: function() {
                                return this._stuck
                            },
                            set: function(t) {
                                this._stuck = t,
                                null != this._buttonPanel && (this._buttonPanel.stuck = t),
                                null != this._contentPanel && (this._contentPanel.stuck = t)
                            }
                        }]),
                        e
                }(i));
                _.CONTENT_PANEL_X = 0,
                    _.CONTENT_PANEL_Y = -300,
                    _.BUTTON_PANEL_X = 0,
                    _.BUTTON_PANEL_Y = -150,
                    e._RF.pop()
            }
        }
    }
));
