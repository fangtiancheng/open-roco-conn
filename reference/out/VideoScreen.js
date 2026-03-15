System.register("chunks:///_virtual/VideoScreen.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatType.ts", "./CombatResType.ts", "./AngelTcpHelper.ts", "./NodeUtils.ts", "./ResManager.ts", "./BuildLogHelper.ts", "./BgLayer.ts", "./EffectsLayer.ts", "./PVPLoadingResUILogic.ts", "./ScreenUILogic.ts", "./VideoStage.ts", "./BaseMCProxy.ts", "./EffectNormal.ts", "./FightData.ts", "./SpiritNormal.ts", "./SpiritSuper.ts", "./CombatUtils.ts", "./GAFAnimation.ts"], (function(e) {
        var t, i, n, s, r, o, a, u, c, d, l, f, p, h, g, L, S, y, v, m, _;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    i = e.cclegacy,
                        n = e.Node
                }
                , function(e) {
                    s = e.CombatType
                }
                , function(e) {
                    r = e.CombatResType
                }
                , function(e) {
                    o = e.AngelTcpHelper
                }
                , function(e) {
                    a = e.NodeUtils
                }
                , function(e) {
                    u = e.default
                }
                , function(e) {
                    c = e.default
                }
                , function(e) {
                    d = e.BgLayer
                }
                , function(e) {
                    l = e.EffectsLayer
                }
                , function(e) {
                    f = e.PVPLoadingResUILogic
                }
                , function(e) {
                    p = e.ScreenUILogic
                }
                , function(e) {
                    h = e.VideoStage
                }
                , function(e) {
                    g = e.BaseMCProxy
                }
                , function(e) {
                    L = e.EffectNormal
                }
                , function(e) {
                    S = e.FightData
                }
                , function(e) {
                    y = e.SpiritNormal
                }
                , function(e) {
                    v = e.SpiritSuper
                }
                , function(e) {
                    m = e.CombatUtils
                }
                , function(e) {
                    _ = e.GAFAnimation
                }
            ],
            execute: function() {
                i._RF.push({}, "9f732bZLsdBM6lbUEWUqtWU", "VideoScreen", void 0);
                e("VideoScreen", function(e) {
                    function i(t, i) {
                        var s;
                        (s = e.call(this) || this).spirits = void 0,
                            s.stage = void 0,
                            s.resModule = void 0,
                            s.videoStage = void 0,
                            s.spiritsLayer = void 0,
                            s.effectsLayer = void 0,
                            s.uiLayer = void 0,
                            s.loadingResUI = void 0,
                            s._pkLoadingResUI = void 0,
                            s._commonLoadingResUI = void 0,
                            s.uiContainer = void 0,
                            s.bgLayer = void 0,
                            s.stage = t,
                            s.resModule = i,
                            s.spirits = new Map;
                        var r = u.Instance.getPrefabByName("combatSys_1600/Mask_1600");
                        s.stage.addChild(r),
                            s.videoStage = new h(new n),
                            s.stage.addChild(s.videoStage.getTarget()),
                            s.bgLayer = new d(i),
                            s.stage.addChild(s.bgLayer),
                            s.spiritsLayer = new n,
                            s.stage.addChild(s.spiritsLayer),
                            s.effectsLayer = new l,
                            s.stage.addChild(s.effectsLayer);
                        var o = u.Instance.getPrefabByName("combatSys_1600/CombatSysUI_1600");
                        s.uiLayer = new p(o),
                            s.uiContainer = new n,
                            s.uiContainer.addChild(s.uiLayer.getTarget()),
                            s.stage.addChild(s.uiContainer);
                        var a = u.Instance.getPrefabByName("combatSys_1600/LoadingResUILogic_1600");
                        return s._pkLoadingResUI = new f(a,t),
                            s
                    }
                    t(i, e);
                    var g = i.prototype;
                    return g.showRound = function(e) {
                        this.uiLayer.showRound(e),
                            this.refreshWeatherRound(e)
                    }
                        ,
                        g.setWeather = function(e) {
                            this.uiLayer.setWeather(e)
                        }
                        ,
                        g.setWeatherRound = function(e) {
                            this.uiLayer.setWeatherRound(e)
                        }
                        ,
                        g.refreshWeatherRound = function(e) {
                            this.uiLayer.refreshWeatherRound(e)
                        }
                        ,
                        g.getUIContainer = function() {
                            return this.uiContainer
                        }
                        ,
                        g.setLoading = function(e) {
                            null == e ? (this.uiContainer.active = !1,
                                this.loadingResUI.hidden(),
                                this.loadingResUI = null) : (this.setLoadingResUI(e.combatType),
                                this.uiContainer.active = !1,
                                this.loadingResUI.show(e),
                                this.uiLayer.upateSpiritsBall(e.combatType, e.myInfo.spirits, e.rivalInfo.spirits))
                        }
                        ,
                        g.update = function(e) {
                            this.uiLayer.setData(e.myCurSpirit, e.rivalCurSpirit, e.combatType)
                        }
                        ,
                        g.updateSpiritsState = function() {
                            this.uiLayer.upateSpiritsBall()
                        }
                        ,
                        g.updateProgress = function() {
                            this.loadingResUI.updateProgress()
                        }
                        ,
                        g.setNpcIcon = function(e) {
                            this.loadingResUI.setNpcIcon(e)
                        }
                        ,
                        g.getVSpirit = function(e) {
                            return this.spirits[e]
                        }
                        ,
                        g.getVideoStage = function() {
                            return this.videoStage
                        }
                        ,
                        g.getEffectsLayer = function() {
                            return this.effectsLayer
                        }
                        ,
                        g.getUiContainer = function() {
                            return this.uiContainer
                        }
                        ,
                        g.showUI = function(e) {
                            this.uiContainer.active = !!e
                        }
                        ,
                        g.removeVSpirit = function(e) {
                            var t = this.spirits[e];
                            return null == t ? (console.info("VideoScreen_removeVSpirit1==" + e),
                                null) : (console.info("VideoScreen_removeVSpirit2==" + e),
                                this.spiritsLayer.removeChild(t.getDisplayObject()),
                                this.resModule.giveBackSpiritMC(t.getDisplayObject().resName),
                                t.stopNull(),
                                delete this.spirits[e],
                                t.getDisplayObject().getComponent(_).release(),
                                t)
                        }
                        ,
                        g.hasVSpirit = function(e) {
                            return null != this.spirits[e]
                        }
                        ,
                        g.removeVEffect = function(e) {
                            var t = e.getDisplayObject();
                            this.effectsLayer.removeChild(t),
                                e.stopNull(),
                                e.getDisplayObject().getComponent(_).release(),
                                e.setBody(null),
                                this.resModule.giveBackSkillMC(t.resName)
                        }
                        ,
                        g.bringVSpiritToFront = function(e) {
                            if (null != e) {
                                var t = e.getDisplayObject();
                                null != t && a.contains(this.spiritsLayer, t) && a.setChildIndex(this.spiritsLayer, t, this.spiritsLayer.children.length - 1)
                            }
                        }
                        ,
                        g.createSuperSkillBg = function(e, t) {}
                        ,
                        g.removeSuperSkillBg = function(e) {}
                        ,
                        g.createVSpirit = function(e, t, i, n) {
                            void 0 === n && (n = 0);
                            var s = "宠物=> " + e.toString() + "_" + (i == S.POS_LEFT ? "POS_LEFT" : "POS_RIGHT")
                                , a = i == S.POS_LEFT ? this.resModule.borrowSpiritMCLeft(e) : this.resModule.borrowSpiritMCRight(e);
                            a || (console.error("createVSpirit失败==" + e + "==uin==" + e + "==posType==" + i + "==type==" + n),
                                a = i == S.POS_LEFT ? this.resModule.borrowSpiritMCByType(m.DISPLAYID_MAPPING[i], r.TYPE_SPIRIT_BAODI_LEFT) : this.resModule.borrowSpiritMCByType(m.DISPLAYID_MAPPING[i], r.TYPE_SPIRIT_BAODI_RIGHT)),
                            a || c.IS_LOCAL,
                                console.info("createVSpirit成功==spiritID==" + e + "==uin==" + t + "==posType==" + i + "==type==" + n),
                                a.name = s,
                                a.___name___ = s;
                            var u = i == S.POS_LEFT ? -1 : 1;
                            a.setScale(u, 1),
                                console.info("创建了一个宠物=>spiritID=>" + e + "=>方位=>" + (i == S.POS_LEFT ? "左侧" : "右侧"));
                            var d, l = e + "=>方位=>" + (i == S.POS_LEFT ? "左侧" : "右侧");
                            switch (n) {
                                case 0:
                                    d = new y;
                                    break;
                                case 1:
                                    d = new v
                            }
                            return 1 == o.isUseGaf && a.setPosition(i == S.POS_LEFT ? 760 : -760, 450),
                                d.setBody(a),
                                d.setPosType(i),
                                d.nameLog = l,
                                this.spirits[t] = d,
                                this.spiritsLayer.addChild(a),
                                d
                        }
                        ,
                        g.createVEffect = function(e, t, i) {
                            var n = "特效=> " + e.toString() + "_" + (t == S.POS_LEFT ? "POS_LEFT" : "POS_RIGHT")
                                , s = this.resModule.borrowSkillMC(e);
                            s || c.IS_LOCAL,
                                s.name = n,
                                s.___name___ = n;
                            var r = t == S.POS_LEFT ? -1 : 1
                                , a = t == S.POS_LEFT ? 790 : -790;
                            1 == o.isUseGaf && s.setPosition(a, 450),
                                s.setScale(r, 1),
                                console.log("创建了一个特效=>effectID=>" + e + "=>方位=>" + (t == S.POS_LEFT ? "左侧" : "右侧"));
                            var u = new L;
                            return u.setBody(s, !1),
                                this.effectsLayer.addChild(s),
                                u
                        }
                        ,
                        g.getSpiritUI = function(e) {
                            return this.uiLayer.getSpiritUI(e)
                        }
                        ,
                        g.hidePetsHandler = function() {
                            console.info("VideoScreen_hidePetsHandler");
                            var e = [];
                            for (var t in this.spirits)
                                e.push(Number(t));
                            for (var i = 0; i < e.length; i++)
                                this.removeVSpirit(e[i])
                        }
                        ,
                        g.reset = function() {
                            console.info("VideoScreen_reset");
                            var e = [];
                            for (var t in this.spirits)
                                e.push(Number(t));
                            for (var i = 0; i < e.length; i++)
                                this.removeVSpirit(e[i]);
                            this.bgLayer.reset(),
                                this.uiLayer.reset(),
                                this.dumpAllMessage(),
                                this.effectsLayer.deleteAllNm()
                        }
                        ,
                        g.dumpAllMessage = function() {}
                        ,
                        g.getCombatInfo = function() {
                            return this.uiLayer.getCombatInfoTxt()
                        }
                        ,
                        g.printCombatInfo = function(e) {
                            this.uiLayer.getCombatInfoTxt().add(e)
                        }
                        ,
                        g.getPrompTxt = function() {
                            return this.uiLayer.getPrompTxt()
                        }
                        ,
                        g.addActionListener = function(e, t, i) {
                            this.effectsLayer.addEventListener(e, t, i)
                        }
                        ,
                        g.removeActionListener = function(e, t, i) {
                            this.effectsLayer.removeEventListener(e, t, i)
                        }
                        ,
                        g.setLoadingResUI = function(e) {
                            switch (e) {
                                case s.PVP:
                                case s.PVT:
                                case s.D_PVP:
                                case s.L_PVP:
                                default:
                                    this.loadingResUI = this._pkLoadingResUI
                            }
                        }
                        ,
                        i
                }(g));
                i._RF.pop()
            }
        }
    }
));
