System.register("chunks:///_virtual/SpiritBagView.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./global.ts", "./BasePanel.ts", "./SpiritBagPlugin.ts", "./BuildLogHelper.ts"], (function(i) {
        var t, n, e, r, a, p, s, l;
        return {
            setters: [function(i) {
                t = i.inheritsLoose,
                    n = i.createClass
            }
                , function(i) {
                    e = i.cclegacy,
                        r = i.Prefab
                }
                , function(i) {
                    a = i.__global
                }
                , function(i) {
                    p = i.BasePanel
                }
                , function(i) {
                    s = i.SpiritBagPlugin
                }
                , function(i) {
                    l = i.default
                }
            ],
            execute: function() {
                e._RF.push({}, "3f05b/WQqtC4aGnKHKVPlFe", "SpiritBagView", void 0);
                i("default", function(i) {
                    function e() {
                        for (var t, n = arguments.length, e = new Array(n), r = 0; r < n; r++)
                            e[r] = arguments[r];
                        return (t = i.call.apply(i, [this].concat(e)) || this)._plugin = void 0,
                            t
                    }
                    t(e, i);
                    var p = e.prototype;
                    return p.afterConstructor = function() {
                        this.__name = "SpiritBagView"
                    }
                        ,
                        p.onInit = function() {
                            this.initLog()
                        }
                        ,
                        p.onShow = function() {
                            1 == l.IS_LOCAL && console.log("SpiritBagView==onShow"),
                                a.UI.closeMiniLoading(),
                                s.target = this._view,
                            null == this._plugin && (this._plugin = new s),
                                this._plugin.start()
                        }
                        ,
                        p.onUpdate = function(i) {}
                        ,
                        p.onClose = function() {
                            this._plugin && this._plugin.finalize(),
                                this._plugin = null
                        }
                        ,
                        p.onDestroy = function() {
                            this._plugin && this._plugin.finalize(),
                                this._plugin = null
                        }
                        ,
                        n(e, [{
                            key: "resBundleKey",
                            get: function() {
                                return "gui"
                            }
                        }, {
                            key: "exportLink",
                            get: function() {
                                return "prefabs/SpiritBag_1600/SpiritBagUI_1600"
                            }
                        }, {
                            key: "preLoadArr",
                            get: function() {
                                return {
                                    gui: {
                                        assetType: r,
                                        urls: ["prefabs/common/EquipTipsRes_0", "prefabs/common/EquipTipsRes_1", "prefabs/SpiritBag_1600/cellIcon_1600", "prefabs/SpiritBag_1600/SkillWindow_1600", "prefabs/SpiritBag_1600/AlertWindow_1600", "prefabs/SpiritBag_1600/EqItemStateRes_1600", "prefabs/SpiritBag_1600/SpiritEquipList_1600", "prefabs/SpiritBag_1600/SpiritEquipBagList_1600", "prefabs/SpiritBag_1600/SpiritSkillInfoMC1_1600", "prefabs/SpiritBag_1600/SpiritSkillInfoMC2_1600", "prefabs/SpiritBag_1600/SpiritSkillSwitchWindow_1600", "prefabs/SpiritBag_1600/UIres_1600", "prefabs/SpiritBag_1600/SpiritBagGetNewSkillPanel", "prefabs/SpiritBag_1600/RefreshTalentResultPanelUI", "prefabs/SpiritBag_1600/IntimacyUI"]
                                    }
                                }
                            }
                        }]),
                        e
                }(p));
                e._RF.pop()
            }
        }
    }
));
