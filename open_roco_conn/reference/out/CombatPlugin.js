System.register("chunks:///_virtual/CombatPlugin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CALLBACK.ts", "./CallbackCenter.ts", "./AngelSysEvent.ts", "./ObjCombatInfo.ts", "./CombatResType.ts", "./EventDispatcher.ts", "./CombatControlBarCommands.ts", "./CombatSystemDP.ts", "./CombatResModule.ts", "./Successor.ts", "./StateEvent.ts", "./StateTask.ts", "./CWaitingFightState.ts", "./AngelCombatVideo.ts", "./CombatData.ts", "./CombatDefault.ts", "./CombatResultInfo.ts", "./CombatStates.ts", "./CombatConfig.ts", "./CombatControlBar.ts", "./CombatStateUtil.ts", "./CombatImage.ts", "./UIManager.ts", "./CombatResLoadPipeLine.ts", "./CombatPluginPipeLine.ts", "./UseSkillType.ts", "./CombatUtils.ts"], (function(t) {
        var e, o, i, n, s, a, r, l, c, u, h, m, d, C, f, b, _, p, I, A, S, g, T, E, y, v, P, M, D, B, N, k, L;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    i = t.cclegacy,
                        n = t._decorator,
                        s = t.Node,
                        a = t.assert
                }
                , function(t) {
                    r = t.CALLBACK
                }
                , function(t) {
                    l = t.CallbackCenter
                }
                , function(t) {
                    c = t.AngelSysEvent
                }
                , function(t) {
                    u = t.ObjCombatInfo
                }
                , function(t) {
                    h = t.CombatResType
                }
                , function(t) {
                    m = t.EventDispatcher
                }
                , function(t) {
                    d = t.CombatControlBarCommands
                }
                , function(t) {
                    C = t.default
                }
                , function(t) {
                    f = t.CombatResModule
                }
                , function(t) {
                    b = t.Successor
                }
                , function(t) {
                    _ = t.StateEvent
                }
                , function(t) {
                    p = t.StateTask
                }
                , function(t) {
                    I = t.CWaitingFightState
                }
                , function(t) {
                    A = t.AngelCombatVideo
                }
                , function(t) {
                    S = t.CombatData
                }
                , function(t) {
                    g = t.CombatDefault
                }
                , function(t) {
                    T = t.CombatResultInfo
                }
                , function(t) {
                    E = t.CombatStates
                }
                , function(t) {
                    y = t.CombatConfig
                }
                , function(t) {
                    v = t.CombatControlBar
                }
                , function(t) {
                    P = t.CombatStateUtil
                }
                , function(t) {
                    M = t.CombatImage
                }
                , function(t) {
                    D = t.default
                }
                , function(t) {
                    B = t.CombatResLoadPipeLine
                }
                , function(t) {
                    N = t.CombatPluginPipeLine
                }
                , function(t) {
                    k = t.UseSkillType
                }
                , function(t) {
                    L = t.CombatUtils
                }
            ],
            execute: function() {
                var R, O;
                i._RF.push({}, "8be30irLJRIE5VNvj+nTJqB", "CombatPlugin", void 0);
                var G = n.ccclass;
                n.property,
                    t("default", G("CombatPlugin")(((O = function(t) {
                        function i() {
                            var e;
                            return (e = t.call(this) || this).sysApi = void 0,
                                e.commUI = void 0,
                                e.plugName = "",
                                e.ird = void 0,
                                e.audioPlayer = void 0,
                                e.dpModule = void 0,
                                e.resMModule = void 0,
                                e.videoModule = void 0,
                                e.controllBar = void 0,
                                e.successorModule = void 0,
                                e.stageContainer = void 0,
                                e.combatStage = void 0,
                                e._combatData = void 0,
                                e._state = E.WAITING_CALL,
                                e._openCombatData = void 0,
                                e._stateTask = void 0,
                                e.tempState = "",
                                e.skillBackFun = void 0,
                                e.resultInfo = void 0,
                                N.combatSys = o(e),
                                N.start(),
                                e
                        }
                        e(i, t);
                        var n = i.prototype;
                        return n.getEDispatcher = function() {
                            return this
                        }
                            ,
                            n.setPlugName = function(t) {
                                this.plugName = t
                            }
                            ,
                            n.getPlugName = function() {
                                return this.plugName
                            }
                            ,
                            n.setAngelSysAPI = function(t) {
                                this.sysApi = t
                            }
                            ,
                            n.getStageContainer = function() {
                                return this.stageContainer
                            }
                            ,
                            n.getCombatStage = function() {
                                return this.combatStage
                            }
                            ,
                            n.getOpenCombatData = function() {
                                return this._openCombatData
                            }
                            ,
                            n.setOpenCombatData = function(t) {
                                this._openCombatData = t
                            }
                            ,
                            n.callHandler = function(t) {
                                if (this.resultInfo = t,
                                null == this.resultInfo && (this.resultInfo = new T,
                                    this.resultInfo.finished = -1),
                                this.resultInfo.obtainItems && this.resultInfo.obtainItems.length > 0)
                                    for (var e, o = [], i = 0; i < this.resultInfo.obtainItems.length; i++)
                                        e = this.resultInfo.obtainItems[i],
                                            o.push({
                                                equipItemId: e.id,
                                                count: e.count
                                            });
                                else
                                    this.combatCallHandler()
                            }
                            ,
                            n.combatCallHandler = function() {
                                var t = [this.resultInfo.finished, this._openCombatData, this._openCombatData ? this._openCombatData.handler : null, this.resultInfo];
                                l.notifyEvent(r.ANGEL_COMBAT_ON_A_COMBAT_ENDING, t),
                                null != this._openCombatData && null != this._openCombatData.handler && this._openCombatData.handler.call(this.resultInfo.finished),
                                    l.notifyEvent(r.ANGEL_COMBAT_ON_A_COMBAT_END, t)
                            }
                            ,
                            n.getSysApi = function() {
                                return this.sysApi
                            }
                            ,
                            n.getIrd = function() {
                                return this.ird
                            }
                            ,
                            n.getCommUI = function() {
                                return this.commUI
                            }
                            ,
                            n.getResModule = function() {
                                return this.resMModule
                            }
                            ,
                            n.getAudioPlayer = function() {
                                return this.audioPlayer
                            }
                            ,
                            n.getDpModule = function() {
                                return this.dpModule
                            }
                            ,
                            n.getVideoModule = function() {
                                return this.videoModule
                            }
                            ,
                            n.getControllBar = function() {
                                return this.controllBar
                            }
                            ,
                            n.getSucessorModule = function() {
                                return this.successorModule
                            }
                            ,
                            n.getState = function() {
                                return this._state
                            }
                            ,
                            n.setState = function(t) {
                                this._state = t
                            }
                            ,
                            n.getStateTask = function() {
                                return this._stateTask
                            }
                            ,
                            n.getCurrCombatData = function() {
                                return this._combatData
                            }
                            ,
                            n.checkDisplayID = function(t) {
                                if (void 0 === t && (t = 0),
                                t >= 2e3)
                                    return t;
                                var e = L.DISPLAYID_MAPPING.find((function(e) {
                                        return e == t
                                    }
                                ));
                                return e || L.DEFAULT_DISPLAYID
                            }
                            ,
                            n.setCurrCombatData = function(t) {
                                this._combatData = t;
                                for (var e = 0; e < this._combatData.myInfo.spirits.length; e++) {
                                    (i = this._combatData.myInfo.spirits[e]).displayID = this.checkDisplayID(i.resID)
                                }
                                for (var o = 0; o < this._combatData.rivalInfo.spirits.length; o++) {
                                    var i;
                                    (i = this._combatData.rivalInfo.spirits[o]).displayID = this.checkDisplayID(i.resID)
                                }
                            }
                            ,
                            n.pipeline = function() {}
                            ,
                            n.initialize = function() {
                                return this.commUI = this.sysApi.getUISysAPI().commUIManager,
                                    this.sysApi.getGEventAPI().addCmdListener(c.ON_OPEN_COMBAT, this),
                                    this.combatStage = new s,
                                    this.stageContainer = D.gRootCombat,
                                    this.resMModule = new f,
                                    this.ird = this.sysApi.getResSysAPI().getResAdapter("combatResAdapter"),
                                CONFIG.ASSERT && a(null != this.ird, "error!!!"),
                                    this.resMModule.resAdapter = this.ird,
                                    M.setResManager(this.resMModule),
                                    this.dpModule = new C,
                                    this.dpModule.setPlugin(this),
                                    this.dpModule.initialize(),
                                    this.videoModule = new A,
                                    this.videoModule.setPlugin(this),
                                    this.videoModule.initialize(),
                                    this.successorModule = new b,
                                    this.successorModule.setPlugin(this),
                                    this.successorModule.initialize(),
                                    this.controllBar = new v,
                                    this.controllBar.setPlugin(this),
                                    this.controllBar.initialize(),
                                    this.controllBar.setHandlerEnabled(!1),
                                    this.videoModule.getUIContainer().insertChild(this.controllBar, 0),
                                    this.controllBar.setPosition(0, 0, 0),
                                    this.audioPlayer = this.sysApi.getMediaSysAPI().createAudioPlayer(),
                                    this._stateTask = new p,
                                    this._stateTask.combatSys = this,
                                    y.getInstance().init(["CombatConfig"]),
                                    B.combatSys = this,
                                    B.init(),
                                    !0
                            }
                            ,
                            n.finalize = function() {
                                return !1
                            }
                            ,
                            n.call = function(t) {
                                console.log("CombatPlugin execute call!!!!!!");
                                var e = t;
                                null !== e.combatServerType && void 0 !== e.combatServerType && (i.combatServerType = e.combatServerType,
                                    C.combatServerType = e.combatServerType),
                                CONFIG.ASSERT && a(e.combatType >= 0, "error combatType"),
                                    l.notifyEvent(r.ANGEL_COMBAT_ON_A_COMBAT_STARTING, e),
                                    e.combatType < 0 ? console.log("被屏蔽或者错误的combatType:" + e.combatType) : (this._openCombatData = e,
                                        this._state = E.WAITING_CALL,
                                    null != this._openCombatData && this._state == E.WAITING_CALL && (this._stateTask.rest(),
                                        this._stateTask.init(),
                                        l.notifyEvent(r.ANGEL_COMBAT_ON_A_COMBAT_STARTED, this._openCombatData)))
                            }
                            ,
                            n.getSkillName = function(t) {
                                switch (t) {
                                    case k.SKILL:
                                        return "使用技能";
                                    case k.CHANGESPIRIT:
                                        return "更换宠物";
                                    case k.USEITEM:
                                        return "使用道具";
                                    case k.ESCAPE:
                                        return "逃跑"
                                }
                                return "未知"
                            }
                            ,
                            n.onUseSkill = function(t, e, o) {
                                t == k.ESCAPE && console.error("请求逃跑"),
                                    console.error("[CombatPlugin]-onUseSkill-" + this.getSkillName(t)),
                                    console.error("[CombatPlugin]-onUseSkill-CWaitingFightState已加入队列}");
                                var i = new I
                                    , n = {};
                                n.type = t,
                                    n.index = e,
                                    n.id = o,
                                    i.data = n,
                                    this._stateTask.pushTask(i)
                            }
                            ,
                            n.onVideoPlayEnd = function() {
                                CONFIG.DEBUG && console.log("[AngelCombatSystem] ", "所有的动画播放完毕！！！", this._combatData),
                                    this.controllBar.update(),
                                    this.controllBar.setHandlerEnabled(!0),
                                    console.error(this.constructor.name + " == setHandleGray1--" + h.IS_ESCAPE),
                                    this.controllBar.setHandleGray(d.ESCAPE, h.IS_ESCAPE),
                                    this.dispatchEvent(new _(_.ALL_VIDEO_END)),
                                    this.statesPlayChangeSpirite()
                            }
                            ,
                            n.timeEndHandler = function() {
                                console.error("CombatPlugin-timeEndHandler-等待对方出招"),
                                    console.error(this.constructor.name + " == showTimeBarTxt1==" + g.COMBAT_INFO_TXT1),
                                    this.videoModule.showTimeBarTxt(g.COMBAT_INFO_TXT1),
                                    console.error(this.constructor.name + " == setHandleGray2--true"),
                                    this.controllBar.setHandleGray(d.ESCAPE, !0),
                                    this.controllBar.setHandlerEnabled(!1),
                                    this.controllBar.onTimeUp()
                            }
                            ,
                            n.onChangePet = function(t) {
                                var e = t;
                                e.id == this._combatData.myInfo.id ? (h.BAR_CAN_COMBAT = e.canCombat,
                                    this._combatData.changeMySpririt = this._combatData.myInfo.spirits[e.newIndex - 1],
                                    console.error(this.constructor.name + " == showTimeBarTxt2==空"),
                                    this.videoModule.showTimeBarTxt(""),
                                    this._state = E.PLAY_MY_CHANGE_SPIRITE) : (this._combatData.changeRivalSpirit = this._combatData.rivalInfo.spirits[e.newIndex - 1],
                                    this.tempState = this._state,
                                    this._state = E.PLAY_OTHER_CHANGE_SPIRITE),
                                    console.error(this.constructor.name + " == setHandleGray3--true"),
                                    this.controllBar.setHandleGray(d.ESCAPE, !0),
                                    this.videoModule.playCombatRecord(e, A.VIDEO_COMBAT_CHANGE)
                            }
                            ,
                            n.statesPlayChangeSpirite = function() {
                                this._state != E.PLAY_MY_CHANGE_SPIRITE && this._state != E.PLAY_OTHER_CHANGE_SPIRITE || (this._state == E.PLAY_MY_CHANGE_SPIRITE ? (this.controllBar.select(d.ATTACK),
                                    this.controllBar.setHandlerEnabled(!0),
                                    console.info("statesPlayChangeSpirite==controllCombatBar==" + h.BAR_CAN_COMBAT),
                                    P.controllCombatBar(h.BAR_CAN_COMBAT, this.controllBar),
                                    this.videoModule.addTimerBar(this.timeEndHandler.bind(this), g.COUNT_TIMES)) : this._state == E.PLAY_OTHER_CHANGE_SPIRITE && this.tempState != E.WAITING_RESULT && (this.controllBar.setHandlerEnabled(!0),
                                    this.tempState = ""),
                                    console.error(this.constructor.name + " == setHandleGray4--" + h.IS_ESCAPE),
                                    this.controllBar.setHandleGray(d.ESCAPE, h.IS_ESCAPE),
                                    this._state = E.WAITING_FIGHT)
                            }
                            ,
                            n.onChangeSkill = function(t, e) {
                                this.dpModule.requestSkillExchange(t),
                                    this.skillBackFun = e
                            }
                            ,
                            n.onChangeSkillCheck = function(t) {
                                null != this.skillBackFun && (0 != t.code.code ? this.skillBackFun(!1) : (this.skillBackFun(t),
                                    this.skillBackFun = null))
                            }
                            ,
                            n.reqUseItems = function(t) {
                                this.dpModule.reqUseItems(t)
                            }
                            ,
                            n.onSpiritUpgrade = function(t) {
                                if (null != t) {
                                    var e = t
                                        , o = new T;
                                    o.type = 1,
                                        o.finished = 2,
                                        o.version = e.version,
                                        o.spiritPropsVar = [],
                                        o.spiritPropsVar.push(e.spiritPropsVar),
                                        o.obtainItems = [],
                                        o.spiritInfos = [],
                                        this._combatData = new S,
                                        this._combatData.myInfo = new u,
                                        this._combatData.myInfo.spirits = [];
                                    for (var i = 0; i < e.spiritInfo.index - 1; i++)
                                        this._combatData.myInfo.spirits.push(null);
                                    this._combatData.myInfo.spirits.push(e.spiritInfo),
                                        this.successorModule.data = o
                                }
                            }
                            ,
                            i
                    }(m)).combatServerType = 0,
                        R = O)) || R);
                i._RF.pop()
            }
        }
    }
));
