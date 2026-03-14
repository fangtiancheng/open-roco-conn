System.register("chunks:///_virtual/GameApp.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ResManager.ts", "./GlobalGameInfo.ts", "./ResEvent.ts", "./AppConstDef.ts", "./HttpRequest.ts", "./Xml2Json.ts", "./PureNotificationCenter.ts", "./BuildLogHelper.ts", "./UserData.ts", "./GUIUtils.ts"], (function(e) {
        var t, n, i, s, o, r, a, c, _, p, f, l, S, g, h, u;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy,
                        i = e._decorator,
                        s = e.assetManager,
                        o = e.Component,
                        r = e.Prefab
                }
                , function(e) {
                    a = e.default
                }
                , function(e) {
                    c = e.default
                }
                , function(e) {
                    _ = e.ResEvent
                }
                , function(e) {
                    p = e.AppConstDef
                }
                , function(e) {
                    f = e.HttpRequest
                }
                , function(e) {
                    l = e.Xml2Json
                }
                , function(e) {
                    S = e.PureNotificationCenter
                }
                , function(e) {
                    g = e.default
                }
                , function(e) {
                    h = e.UserData
                }
                , function(e) {
                    u = e.GUI
                }
            ],
            execute: function() {
                var b, m;
                n._RF.push({}, "821339EiHxN4aa0oTcepcxt", "GameApp", void 0);
                var I = i.ccclass
                    , d = (i.property,
                    {
                        gui: {
                            assetType: r,
                            urls: ["prefabs/common/CommonTooltipSkin_1", "prefabs/common/CommonBubbleNode_1600", "prefabs/combatSys_1600/BubbleCombatTooltipSkin_1600", "prefabs/combatSys_1600/BubbleNode_1600", "prefabs/common/seriseTips_1600", "prefabs/base/simpleLoadingUI", "prefabs/base/simpleLoadingUI1", "prefabs/base/ItemRewardPanel", "prefabs/base/IConItem", "prefabs/common/Alert_1600", "prefabs/common/AlertContent_1600", "prefabs/common/CellLoadingImageUI", "prefabs/SpiritBag_1600/SpiritBagUI_1600", "prefabs/guardianPet/GuardianPetUI_1600", "prefabs/guardianPet/ResVipAvatarUI_1600", "prefabs/guardianPet/effect/levelUp", "prefabs/guardianPet/effect/advance", "prefabs/systemSetting/UIResMain_1600", "prefabs/summon_1600/UIResMain_1600", "prefabs/summon_1600/prefabs/CtlItemChooseItem", "prefabs/summon_1600/prefabs/RecordMenuItem", "prefabs/fixTemper/UIResMain_1600", "prefabs/rebirth/UIResMain_1600"]
                        }
                    })
                    , L = {
                    gui: {
                        assetType: r,
                        urls: ["prefabs/NightUI_1600"]
                    }
                }
                    , N = {
                    assetType: r,
                    urls: ["prefabs/common/EquipTipsRes_0", "prefabs/common/EquipTipsRes_1", "prefabs/match/MatchCombatUI_1600", "prefabs/SpiritBag_1600/SpiritBagUI_1600", "prefabs/SpiritBag_1600/cellIcon_1600", "prefabs/SpiritBag_1600/SkillWindow_1600", "prefabs/SpiritBag_1600/AlertWindow_1600", "prefabs/SpiritBag_1600/EqItemStateRes_1600", "prefabs/SpiritBag_1600/SpiritEquipList_1600", "prefabs/SpiritBag_1600/SpiritEquipBagList_1600", "prefabs/SpiritBag_1600/SpiritSkillInfoMC1_1600", "prefabs/SpiritBag_1600/SpiritSkillInfoMC2_1600", "prefabs/SpiritBag_1600/SpiritSkillSwitchWindow_1600", "prefabs/SpiritBag_1600/UIres_1600", "prefabs/SpiritBag_1600/SpiritBagGetNewSkillPanel", "prefabs/SpiritBag_1600/RefreshTalentResultPanelUI", "prefabs/SpiritBag_1600/IntimacyUI", "prefabs/spriteStore/SpiritStorageAppUI_1600", "prefabs/spriteStore/SpiritContainerUI_1600", "prefabs/spriteStore/SpiritInformationBarUI_1600", "prefabs/spriteStore/SearchBarSpriteUI_1600", "prefabs/spriteStore/UIResAlertNotDiamond_1600", "prefabs/combatSys_1600/Mask_1600", "prefabs/combatSys_1600/CombatSysUI_1600", "prefabs/combatSys_1600/content/ControlButtonPanelUI_1600", "prefabs/combatSys_1600/content/ControlContentPanelUI_1600", "prefabs/combatSys_1600/content/AttackContentUI_1600", "prefabs/combatSys_1600/content/ItemContentUI_1600", "prefabs/combatSys_1600/content/SpiritContentUI_1600", "prefabs/combatSys_1600/content/NewStyleSprite_1600", "prefabs/combatSys_1600/LoadingResUILogic_1600", "prefabs/combatSys_1600/escapeUI_1600", "prefabs/combatSys_1600/LosePanelUI_1600"]
                };
                e("default", I("GameApp")(((m = function(e) {
                    function n() {
                        for (var t, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
                            i[s] = arguments[s];
                        return (t = e.call.apply(e, [this].concat(i)) || this)._splashDone = !1,
                            t._loadingDone = !1,
                            t._resBeginTimer1 = 0,
                            t._resBeginTimer2 = 0,
                            t
                    }
                    t(n, e);
                    var i = n.prototype;
                    return i.onLoad = function() {
                        1 == g.IS_LOCAL ? n.SPLASH_TIME = 100 : (s.downloader.maxConcurrency = 10,
                            s.downloader.maxRequestsPerFrame = 10),
                            null === n.Instance ? n.Instance = this : this.destroy()
                    }
                        ,
                        i.start = function() {
                            this.node.on(_.ALL_RES_DONE, this.onAllResDone, this)
                        }
                        ,
                        i.onAllResDone = function() {
                            this._loadingDone = !0,
                                0 == c.IsLoginIn ? this.checkAndGoToLogin() : this.checkAndGoToServerList()
                        }
                        ,
                        i.CheckNight = function() {
                            if (1 == c.IsLoginIn)
                                return 1 == g.IS_LOCAL && console.log("CheckNight--enterServerListLogic"),
                                    void this.enterServerListLogic();
                            if (1 != g.IS_LOCAL)
                                if (h.isWhite(h.uin))
                                    this.enterGame();
                                else {
                                    var e = "https://web2.17roco.qq.com/fcgi-bin/check_night2?id=";
                                    e += Math.random(),
                                        f.Instance.get(e, this.onCheckNightComplete.bind(this), this.onCheckNightError.bind(this))
                                }
                            else
                                this.enterGame()
                        }
                        ,
                        i.onCheckNightComplete = function(e) {
                            var t = l.getJson(e);
                            t && t.result && t.result.hasOwnProperty("msg") && t.result.hasOwnProperty("value") && "1" == t.result.value ? this.EnterNight() : this.enterGame()
                        }
                        ,
                        i.onCheckNightError = function(e) {
                            console.error("onCheckNightError================" + e),
                                this.enterGame()
                        }
                        ,
                        i.enterGame = function() {
                            1 == g.IS_LOCAL && console.log("enterGame"),
                                0 == c.IsLoginIn ? (1 == g.IS_LOCAL && console.log("enterLoginLogic"),
                                    this.enterLoginLogic()) : (1 == g.IS_LOCAL && console.log("enterServerListLogic"),
                                    this.enterServerListLogic())
                        }
                        ,
                        i.EnterNight = function() {
                            a.Instance.preloadResPackage(L, this.onResLoadProgress.bind(this), function() {
                                S.sendNotification(p.NN_V_SHOW_NIGHT_VIEW),
                                    S.sendNotification(p.NN_V_CLOSE_SPLASH_VIEW)
                            }
                                .bind(this))
                        }
                        ,
                        i.checkAndGoToServerList = function() {
                            this._splashDone && this._loadingDone && this.scheduleOnce((function() {
                                    S.sendNotification(p.NN_V_CLOSE_SPLASH_VIEW),
                                        u.instance.gotoServerListView()
                                }
                            ), .5)
                        }
                        ,
                        i.checkAndGoToLogin = function() {
                            this._splashDone && this._loadingDone && (this._resBeginTimer2 = (new Date).getTime(),
                            1 == g.IS_LOCAL && console.info("加载资源进度完成cza==>" + this._resBeginTimer1 + "==" + this._resBeginTimer2 + "==" + (this._resBeginTimer2 - this._resBeginTimer1) + "ms"),
                                this.scheduleOnce((function() {
                                        S.sendNotification(p.NN_V_CLOSE_SPLASH_VIEW),
                                            S.sendNotification(p.NN_V_SHOW_LOGIN_VIEW)
                                    }
                                ), .5))
                        }
                        ,
                        i.enterLogin = function() {
                            S.sendNotification(p.NN_V_CLOSE_SPLASH_VIEW),
                                S.sendNotification(p.NN_V_SHOW_LOGIN_VIEW)
                        }
                        ,
                        i.enterLoginLogic = function() {
                            var e = this;
                            this._splashDone = !1,
                                this._loadingDone = !1,
                                this._resBeginTimer1 = (new Date).getTime(),
                                S.sendNotification(p.NN_V_SHOW_SPLASH_VIEW),
                                a.Instance.preloadResPackage(d, this.onResLoadProgress.bind(this), function() {
                                    this.node.dispatchEvent(new _(_.GAME_RES_PKG_DONE)),
                                        this.onPreloadRes()
                                }
                                    .bind(this)),
                                setTimeout((function() {
                                        e._splashDone = !0,
                                            e.checkAndGoToLogin()
                                    }
                                ), n.SPLASH_TIME)
                        }
                        ,
                        i.enterServerListLogic = function() {
                            var e = this;
                            this._splashDone = !1,
                                this._loadingDone = !1,
                                0 == c.IsLoginIn ? S.sendNotification(p.NN_V_SHOW_SPLASH_VIEW) : n.SPLASH_TIME = 20,
                                a.Instance.preloadResPackage(d, this.onResLoadProgress.bind(this), function() {
                                    this.node.dispatchEvent(new _(_.GAME_RES_PKG_DONE)),
                                        this.onPreloadRes()
                                }
                                    .bind(this)),
                                setTimeout((function() {
                                        e._splashDone = !0,
                                            e.checkAndGoToServerList()
                                    }
                                ), n.SPLASH_TIME)
                        }
                        ,
                        i.onResLoadProgress = function(e, t) {}
                        ,
                        i.onPreloadRes = function() {
                            1 == g.IS_LOCAL && console.log("[预加载]=>开始"),
                                s.getBundle("gui").preload(N.urls, (function(e) {
                                        e ? console.log("[预加载]=> err: " + e) : 1 == g.IS_LOCAL && console.log("[预加载]=> success")
                                    }
                                ))
                        }
                        ,
                        n
                }(o)).Instance = null,
                    m.SPLASH_TIME = 5e3,
                    b = m)) || b);
                n._RF.pop()
            }
        }
    }
));
