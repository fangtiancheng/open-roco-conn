System.register("chunks:///_virtual/CombatPluginPipeLine.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NotifyDef.ts", "./NotificationCenter.ts", "./ResManager.ts", "./BuildLogHelper.ts"], (function(e) {
        var t, n, i, o, s, a, r;
        return {
            setters: [function(e) {
                t = e.createClass
            }
                , function(e) {
                    n = e.cclegacy,
                        i = e.Prefab
                }
                , function(e) {
                    o = e.NotifyDef
                }
                , function(e) {
                    s = e.NotificationCenter
                }
                , function(e) {
                    a = e.default
                }
                , function(e) {
                    r = e.default
                }
            ],
            execute: function() {
                n._RF.push({}, "c6f302hDTtJ6pEjOUimQ0kO", "CombatPluginPipeLine", void 0);
                var c = {
                    gui: {
                        assetType: i,
                        urls: ["prefabs/combatSys_1600/Mask_1600", "prefabs/combatSys_1600/CombatSysUI_1600", "prefabs/combatSys_1600/content/ControlButtonPanelUI_1600", "prefabs/combatSys_1600/content/ControlContentPanelUI_1600", "prefabs/combatSys_1600/content/AttackContentUI_1600", "prefabs/combatSys_1600/content/ItemContentUI_1600", "prefabs/combatSys_1600/content/SpiritContentUI_1600", "prefabs/combatSys_1600/content/NewStyleSprite_1600", "prefabs/combatSys_1600/LoadingResUILogic_1600", "prefabs/combatSys_1600/escapeUI_1600", "prefabs/combatSys_1600/LosePanelUI_1600", "prefabs/combatSys_1600/PKLosePanelUI_1600"]
                    }
                }
                    , _ = e("CombatPluginPipeLine", function() {
                    function e() {}
                    return e.start = function() {
                        e.beginTimer(),
                            e.STATE = e.STATE_LOADING,
                            a.Instance.preloadResPackage(c, null, function() {
                                e.endTimer(),
                                    e._combatSys.initialize(),
                                    e.STATE = e.STATE_DONE,
                                    s.sendNotification(o.ON_COMBAT_RES_PRELOAD_DONE)
                            }
                                .bind(this))
                    }
                        ,
                        e.beginTimer = function() {
                            e._resBeginTimer = (new Date).getTime(),
                            1 == r.IS_LOCAL && console.info("加载资源进度开始===>CombatPluginPipeLine===>" + e._resBeginTimer + "ms")
                        }
                        ,
                        e.endTimer = function() {
                            e._resEndTimer = (new Date).getTime(),
                            1 == r.IS_LOCAL && console.info("加载资源进度完成===>CombatPluginPipeLine===>" + e._resBeginTimer + "==" + e._resEndTimer + "==" + (e._resEndTimer - e._resBeginTimer) + "ms")
                        }
                        ,
                        t(e, null, [{
                            key: "combatSys",
                            set: function(t) {
                                e._combatSys = t
                            }
                        }]),
                        e
                }());
                _.STATE_NONE = 0,
                    _.STATE_LOADING = 1,
                    _.STATE_DONE = 2,
                    _.STATE = 0,
                    _._combatSys = void 0,
                    _._resBeginTimer = 0,
                    _._resEndTimer = 0,
                    n._RF.pop()
            }
        }
    }
));
