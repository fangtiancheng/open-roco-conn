System.register("chunks:///_virtual/AngelSysEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseEvent.ts"], (function(n) {
        var e, _, N;
        return {
            setters: [function(n) {
                e = n.inheritsLoose
            }
                , function(n) {
                    _ = n.cclegacy
                }
                , function(n) {
                    N = n.default
                }
            ],
            execute: function() {
                _._RF.push({}, "dc4f9SEt3dHXZkekUDL595B", "AngelSysEvent", void 0);
                var o = n("AngelSysEvent", function(n) {
                    function _(e, _, N) {
                        return void 0 === _ && (_ = !1),
                        n.call(this, e, _) || this
                    }
                    return e(_, n),
                        _
                }(N));
                o.ON_SYS_EVENT = "onSystemEvent",
                    o.LOGIN_OK = "loginOk",
                    o.ON_SCENE_BUILT = "onSceneBuilt",
                    o.ON_SCENE_DESTROY = "onSceneDestroy",
                    o.ON_SCENEDATA_INIT = "onSceneDataInit",
                    o.ON_CHANGE_SCENE = "onChangeScene",
                    o.ON_SCENECMD_CALL = "onSceneCMDCall",
                    o.ON_OPEN_WORLDMAP = "onWorldMap",
                    o.ON_OPEN_GAME = "onExternalGame",
                    o.ON_USER_INFO = "onUserInfo",
                    o.ON_SPIRIT_BAG = "onSpiritBag",
                    o.ON_PURCHASE = "onPurchase",
                    o.ON_TASK_CALL = "onTaskV5",
                    o.ON_OWL_CALL = "onOwl",
                    o.ON_MAGIC_CALL = "onMagic",
                    o.ON_OPEN_ASWIN = "onOpenAsWin",
                    o.ON_OPEN_COMBAT = "onCombat",
                    o.ON_OPEN_MULTI_COMBAT = "onMultiCombat",
                    o.ON_RUN_SCRIPT = "onRunScript",
                    o.ON_DISPLAY_EMBLEMS = "onEmblemsBoard",
                    o.ON_TIMES_PAPER = "onTimesPaper",
                    o.ON_BOSS_PANEL = "onBossPanel",
                    o.ON_LOGIN_HOMESTEAD = "onHome",
                    o.ON_INVITE_FRIEND = "onInviteFriend",
                    o.ON_RIDDLEIS_LAND = "onRiddleIsland",
                    o.ON_CHRISTMAS_TREE = "onChristmasTree",
                    o.CMDLIS_NOT_FOUND = "cmdListenerNotFound",
                    o.ON_LOGIN_MANOR = "onManor",
                    o.ON_MOVIE_AD_TEMP = "onMovieAdTemp",
                    o.ON_ACHIEVE_PANEL = "onAchievePanel",
                    o.ON_GUARDIANPET = "onGuardianPet",
                    _._RF.pop()
            }
        }
    }
));
