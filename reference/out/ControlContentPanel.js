System.register("chunks:///_virtual/ControlContentPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./CombatDataProxy.ts", "./AttackContent.ts", "./CatchItemContent.ts", "./ItemContent.ts", "./SpiritContent.ts"], (function(t) {
        var n, e, s, o, i, a, l, c;
        return {
            setters: [function(t) {
                n = t.createClass
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    s = t.default
                }
                , function(t) {
                    o = t.CombatDataProxy
                }
                , function(t) {
                    i = t.AttackContent
                }
                , function(t) {
                    a = t.CatchItemContent
                }
                , function(t) {
                    l = t.ItemContent
                }
                , function(t) {
                    c = t.SpiritContent
                }
            ],
            execute: function() {
                e._RF.push({}, "b2075Ru1/BH56eKszWmZDW1", "ControlContentPanel", void 0);
                t("ControlContentPanel", function() {
                    function t() {
                        this._controlBar = void 0,
                            this._contents = void 0,
                            this._enabled = !1,
                            this._stuck = !1,
                            this._target = void 0,
                            this._target = s.Instance.getPrefabByName("combatSys_1600/content/ControlContentPanelUI_1600"),
                            this.initContents(),
                            this.data = null,
                            this.enabled = !0,
                            this.stuck = !1
                    }
                    var e = t.prototype;
                    return e.dispose = function() {
                        if (null != this._contents) {
                            for (var t = this._contents.length, n = 0; n < t; ++n)
                                this._contents[n].dispose(),
                                    this._contents[n] = null;
                            this._contents = null
                        }
                    }
                        ,
                        e.reset = function() {
                            this.data = null
                        }
                        ,
                        e.switchView = function(t) {
                            if (CONFIG.DEBUG && console.log("[AngelCombatSystem->ControlContentPanel] Swtich view to " + t + ", Panel stuck = " + this._stuck),
                            null != this._contents && !this._stuck)
                                for (var n, e = this._contents.length, s = 0; s < e; ++s)
                                    null != (n = this._contents[s]) && (n.id != t ? n.display.active = !1 : (n.data = o.getCombatData(),
                                        n.display.active = !0))
                        }
                        ,
                        e.initContents = function() {
                            this._contents = [new i, new l, new c, new a];
                            for (var t, n = this._contents.length, e = 0; e < n; ++e)
                                null != (t = this._contents[e]) && (t.controlBar = null,
                                    null == t.display.parent ? this._target.addChild(t.display) : t.display.parent != this._target && (t.display.parent.removeFromParent(),
                                        this._target.addChild(t.display)))
                        }
                        ,
                        n(t, [{
                            key: "controlBar",
                            set: function(t) {
                                var n;
                                this._controlBar = t;
                                for (var e = this._contents.length, s = 0; s < e; ++s)
                                    null != (n = this._contents[s]) && (n.controlBar = this._controlBar)
                            }
                        }, {
                            key: "data",
                            set: function(t) {
                                for (var n = this._contents.length, e = 0; e < n; ++e)
                                    this._contents[e].data = t
                            }
                        }, {
                            key: "display",
                            get: function() {
                                return this._target
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return this._enabled
                            },
                            set: function(t) {
                                if (!(null == this._contents || this._contents.length <= 0)) {
                                    for (var n, e = this._contents.length, s = 0; s < e; ++s)
                                        null != (n = this._contents[s]) && (n.enabled = t);
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
                        }, {
                            key: "currentViewData",
                            set: function(t) {
                                var n = this.currentView;
                                null != n && (n.data = t)
                            }
                        }, {
                            key: "currentView",
                            get: function() {
                                for (var t, n = this._contents.length, e = 0; e < n; ++e)
                                    if (null != (t = this._contents[e]) && null != t.display && t.display.active)
                                        return t;
                                return null
                            }
                        }]),
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
