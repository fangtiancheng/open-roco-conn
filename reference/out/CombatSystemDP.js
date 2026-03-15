System.register("chunks:///_virtual/CombatSystemDP.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PReadHelp.ts", "./CombatNetCmdsType.ts", "./P_ReqFight.ts", "./P_ReqStart.ts", "./ItemTypes.ts", "./AbstractDataReceiver.ts", "./CFunction.ts", "./ReqCombatStartP.ts", "./CrossServerReqCombatStartP.ts", "./WarReqCombatStartP.ts", "./SCombatStartState.ts", "./ResLoadedP.ts", "./CrossServerResLoadedP.ts", "./WarResLoadedP.ts", "./ReqFightP.ts", "./CrossServerReqFightP.ts", "./WarReqFightP.ts", "./Constants.ts", "./CombatType.ts", "./CombatPlayFightState.ts", "./SCombatResFight.ts", "./SCombatResLoadedState.ts", "./SCombatResultState.ts", "./CombatStates.ts", "./CrossServerCSpiritP.ts", "./CrossServerFightResultP.ts", "./CrossServerReqAllMovieEndP.ts", "./CrossServerReqCSiritSkillP.ts", "./CrossSeverReqCombatMVEnd.ts", "./CSpiritP.ts", "./FightResultP.ts", "./ReqAllMovieEndP.ts", "./ReqCombatMVEnd.ts", "./ReqCSiritSkillP.ts", "./WarCSpiritP.ts", "./WarFightResultP.ts", "./WarReqAllMovieEndP.ts", "./WarReqCombatMVEnd.ts", "./SCombatMovieEndState.ts", "./P_ItemType.ts", "./P_UInt.ts", "./ADFCmdsType.ts", "./CombatStateBase.ts", "./GetItemsByTypeP.ts", "./BuildLogHelper.ts"], (function(t) {
        var e, a, n, s, o, r, i, _, T, S, D, R, c, d, C, l, h, u, P, A, I, E, p, L, v, m, g, f, F, H, M, O, b, y, G, W, w, q, N, U, k, Q, x, B, V, Y, K, z;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    a = t.cclegacy,
                        n = t._decorator
                }
                , function(t) {
                    s = t.PReadHelp
                }
                , function(t) {
                    o = t.CombatNetCmdsType
                }
                , function(t) {
                    r = t.P_ReqFight
                }
                , function(t) {
                    i = t.P_ReqStart
                }
                , function(t) {
                    _ = t.ItemTypes
                }
                , function(t) {
                    T = t.AbstractDataReceiver
                }
                , function(t) {
                    S = t.CFunction
                }
                , function(t) {
                    D = t.ReqCombatStartP
                }
                , function(t) {
                    R = t.CrossServerReqCombatStartP
                }
                , function(t) {
                    c = t.WarReqCombatStartP
                }
                , function(t) {
                    d = t.SCombatStartState
                }
                , function(t) {
                    C = t.ResLoadedP
                }
                , function(t) {
                    l = t.CrossServerResLoadedP
                }
                , function(t) {
                    h = t.WarResLoadedP
                }
                , function(t) {
                    u = t.ReqFightP
                }
                , function(t) {
                    P = t.CrossServerReqFightP
                }
                , function(t) {
                    A = t.WarReqFightP
                }
                , function(t) {
                    I = t.Constants
                }
                , function(t) {
                    E = t.CombatType
                }
                , function(t) {
                    p = t.CombatPlayFightState
                }
                , function(t) {
                    L = t.SCombatResFight
                }
                , function(t) {
                    v = t.SCombatResLoadedState
                }
                , function(t) {
                    m = t.SCombatResultState
                }
                , function(t) {
                    g = t.CombatStates
                }
                , function(t) {
                    f = t.CrossServerCSpiritP
                }
                , function(t) {
                    F = t.CrossServerFightResultP
                }
                , function(t) {
                    H = t.CrossServerReqAllMovieEndP
                }
                , function(t) {
                    M = t.CrossServerReqCSiritSkillP
                }
                , function(t) {
                    O = t.CrossSeverReqCombatMVEnd
                }
                , function(t) {
                    b = t.CSpiritP
                }
                , function(t) {
                    y = t.FightResultP
                }
                , function(t) {
                    G = t.ReqAllMovieEndP
                }
                , function(t) {
                    W = t.ReqCombatMVEnd
                }
                , function(t) {
                    w = t.ReqCSiritSkillP
                }
                , function(t) {
                    q = t.WarCSpiritP
                }
                , function(t) {
                    N = t.WarFightResultP
                }
                , function(t) {
                    U = t.WarReqAllMovieEndP
                }
                , function(t) {
                    k = t.WarReqCombatMVEnd
                }
                , function(t) {
                    Q = t.SCombatMovieEndState
                }
                , function(t) {
                    x = t.P_ItemType
                }
                , function(t) {
                    B = t.P_UInt
                }
                , function(t) {
                    V = t.ADFCmdsType
                }
                , function(t) {
                    Y = t.CombatStateBase
                }
                , function(t) {
                    K = t.GetItemsByTypeP
                }
                , function(t) {
                    z = t.default
                }
            ],
            execute: function() {
                var j, J;
                a._RF.push({}, "a1e2eVrltlLVKgLxb1U2ocz", "CombatSystemDP", void 0);
                var X = n.ccclass;
                n.property,
                    t("default", X("CombatSystemDP")(((J = function(t) {
                        function a() {
                            for (var e, a = arguments.length, n = new Array(a), s = 0; s < a; s++)
                                n[s] = arguments[s];
                            return (e = t.call.apply(t, [this].concat(n)) || this).plugin = void 0,
                                e.onDatahandlers = void 0,
                                e.combatEnd = !0,
                                e
                        }
                        e(a, t);
                        var n = a.prototype;
                        return n.sendUseSkill = function(t, e, n) {
                            var s = new r;
                            s.skillType = t,
                                s.spiritIndex = e,
                                s.skillID = n,
                                0 == a.combatServerType ? this.sendDataToServer(o.T_REQ_FIGHT, s) : 1 == a.combatServerType ? this.sendDataToServer(o.CMD_WORLD_FIGHT_SHOOT, s) : 2 == a.combatServerType && this.sendDataToServer(o.CMD_WAR_FIGHT_SHOOT, s)
                        }
                            ,
                            n.requestStart = function(t, e, n) {
                                void 0 === e && (e = 1),
                                void 0 === n && (n = 0);
                                var s = new i;
                                s.combatType = e,
                                    s.rivalID = t,
                                    s.catchTime = n,
                                    0 == a.combatServerType ? this.sendDataToServer(o.T_REQ_START, s) : 1 == a.combatServerType ? this.sendDataToServer(o.CMD_WORLD_FIGHT_REQUEST_START, s) : 2 == a.combatServerType && this.sendDataToServer(o.CMD_WAR_FIGHT_REQUEST_START, s)
                            }
                            ,
                            n.requestSkillExchange = function() {
                                0 == a.combatServerType ? this.sendDataToServer(o.T_REQ_CSSKILL, arguments.length <= 0 ? void 0 : arguments[0]) : 1 == a.combatServerType && this.sendDataToServer(o.CMD_WORLD_FIGHT_CHANGE_SPIRIT_SKILL, arguments.length <= 0 ? void 0 : arguments[0])
                            }
                            ,
                            n.updateLoadProgress = function(t) {}
                            ,
                            n.sendRessComplete = function(t) {
                                0 == a.combatServerType ? this.sendDataToServer(o.T_RESLOAD, t ? 0 : 1) : 1 == a.combatServerType ? this.sendDataToServer(o.CMD_WORLD_FIGHT_LOAD_SRC_RESULT, t ? 0 : 1) : 2 == a.combatServerType && this.sendDataToServer(o.CMD_WAR_FIGHT_LOAD_SRC_RESULT, t ? 0 : 1)
                            }
                            ,
                            n.sendVideoPlayEnd = function() {
                                var t = new B;
                                t.num = 0,
                                    0 == a.combatServerType ? (1 == z.IS_LOCAL && console.log("告诉服务器动画已经播放完毕0=0x0B0006"),
                                        this.sendDataToServer(o.T_REQ_MVEND, t)) : 1 == a.combatServerType ? (1 == z.IS_LOCAL && console.log("告诉服务器动画已经播放完毕1=0x00200006"),
                                        this.sendDataToServer(o.CMD_WORLD_FIGHT_FLASH_ANIMATE_DONE, t)) : 2 == a.combatServerType && (1 == z.IS_LOCAL && console.log("告诉服务器动画已经播放完毕2=0x00220006"),
                                        this.sendDataToServer(o.CMD_WAR_FIGHT_FLASH_ANIMATE_DONE, t))
                            }
                            ,
                            n.setPlugin = function(t) {
                                this.plugin = t,
                                    this.setCombatStart()
                            }
                            ,
                            n.setCombatStart = function() {
                                this.combatEnd = !1
                            }
                            ,
                            n.update = function() {}
                            ,
                            n.reqUseItems = function(t) {
                                1 == z.IS_LOCAL && console.log("cza==>reqUseItems");
                                var e = new x;
                                e.itemType = _.COMBAT,
                                    e.itemSubType = 0,
                                    this.onDatahandlers[V.T_GETITEMSBYTYPE] = t,
                                    this.sendDataToServer(V.T_GETITEMSBYTYPE, e)
                            }
                            ,
                            n.initialize = function() {
                                if (null != this.plugin) {
                                    var t = this.plugin.getSysApi().getNetSysAPI();
                                    this.onDatahandlers = new Map,
                                        t.addDataProcessor(new K),
                                        t.addDataProcessor(new D),
                                        t.addDataProcessor(new R),
                                        t.addDataProcessor(new c);
                                    var e = new d;
                                    this.onDatahandlers[o.T_REQ_START] = e,
                                        this.onDatahandlers[o.CMD_WORLD_FIGHT_REQUEST_START] = e,
                                        this.onDatahandlers[o.CMD_WAR_FIGHT_REQUEST_START] = e,
                                        t.addDataProcessor(new C),
                                        t.addDataProcessor(new l),
                                        t.addDataProcessor(new h);
                                    var a = new v;
                                    this.onDatahandlers[o.T_RESLOAD] = a,
                                        this.onDatahandlers[o.CMD_WORLD_FIGHT_LOAD_SRC_RESULT] = a,
                                        this.onDatahandlers[o.CMD_WAR_FIGHT_LOAD_SRC_RESULT] = a,
                                        t.addDataProcessor(new u),
                                        t.addDataProcessor(new P),
                                        t.addDataProcessor(new A);
                                    var n = new L;
                                    this.onDatahandlers[o.T_REQ_FIGHT] = n,
                                        this.onDatahandlers[o.CMD_WORLD_FIGHT_SHOOT] = n,
                                        this.onDatahandlers[o.CMD_WAR_FIGHT_SHOOT] = n,
                                        t.addDataProcessor(new G),
                                        t.addDataProcessor(new H),
                                        t.addDataProcessor(new U);
                                    var r = new Q;
                                    this.onDatahandlers[o.T_REQ_ALL_MVEND] = r,
                                        this.onDatahandlers[o.CMD_WORLD_FIGHT_SHOW_ATTACK_NOTIFY] = r,
                                        this.onDatahandlers[o.CMD_WAR_FIGHT_SHOW_ATTACK_NOTIFY] = r,
                                        t.addDataProcessor(new y),
                                        t.addDataProcessor(new F),
                                        t.addDataProcessor(new N);
                                    var i = new m;
                                    this.onDatahandlers[o.T_RES_FIGHT] = i,
                                        this.onDatahandlers[o.CMD_WORLD_FIGHT_RESULT_BROADCAST] = i,
                                        this.onDatahandlers[o.CMD_WAR_FIGHT_RESULT_BROADCAST] = i,
                                        t.addDataProcessor(new b),
                                        t.addDataProcessor(new f),
                                        t.addDataProcessor(new q),
                                        this.onDatahandlers[o.T_RES_CS] = new S(this.plugin.onChangePet,this.plugin),
                                        this.onDatahandlers[o.CMD_WORLD_FIGHT_CHANGE_SPIRIT_NOTIFY] = new S(this.plugin.onChangePet,this.plugin),
                                        this.onDatahandlers[o.CMD_WAR_FIGHT_CHANGE_SPIRIT_NOTIFY] = new S(this.plugin.onChangePet,this.plugin),
                                        t.addDataProcessor(new w),
                                        t.addDataProcessor(new M),
                                        this.onDatahandlers[o.T_REQ_CSSKILL] = new S(this.plugin.onChangeSkillCheck,this.plugin),
                                        this.onDatahandlers[o.CMD_WORLD_FIGHT_CHANGE_SPIRIT_SKILL] = new S(this.plugin.onChangeSkillCheck,this.plugin),
                                        t.addDataProcessor(new W),
                                        t.addDataProcessor(new O),
                                        t.addDataProcessor(new k),
                                        t.addDataReceiver(this);
                                    var _ = this.plugin.getSysApi().getGDataAPI();
                                    K.itemDataProxy = _.getDataProxy(I.ITEM_DATA),
                                        s.itemProxy = _.getDataProxy(I.ITEM_DATA),
                                        s.spiritProxy = _.getDataProxy(I.SPIRIT_DATA),
                                        s.sskillProxy = _.getDataProxy(I.SSKILL_DATA)
                                }
                            }
                            ,
                            n.onDataReceive = function(t, e) {
                                if (null != this.plugin)
                                    if (1 == z.IS_LOCAL && console.info("onDataReceive==type==" + t),
                                    this.onDatahandlers[t]instanceof Y) {
                                        1 == z.IS_LOCAL && console.info("onDataReceive==CombatStateBase");
                                        var a = this.onDatahandlers[t];
                                        if (a.data = e,
                                        a instanceof d && e.combatType == E.PVT && (this.plugin.getStateTask().currentState instanceof p && this.plugin.getStateTask().currentState.readyToExitCombat(),
                                            this.plugin.getStateTask().rest()),
                                        a instanceof Q) {
                                            this.plugin.getStateTask().currentState;
                                            this.plugin.getStateTask().currentState instanceof m && (this.plugin.setState(g.PLAY_RESULT_END),
                                                this.plugin.getVideoModule().cancel(),
                                                this.plugin.getStateTask().currentState.allVideoEndHandler())
                                        }
                                        this.plugin.getStateTask().pushTask(a)
                                    } else {
                                        var n = this.onDatahandlers[t];
                                        null != n && n.call(e)
                                    }
                            }
                            ,
                            n.getAcceptTypes = function() {
                                return [o.T_REQ_START, o.T_RESLOAD, o.T_REQ_CSSKILL, o.T_REQ_FIGHT, o.T_REQ_MVEND, o.T_RES_FIGHT, o.T_RES_CS, V.T_GETITEMSBYTYPE, o.SPIRIT_UPGRADE, o.T_REQ_ALL_MVEND, o.CMD_WORLD_FIGHT_REQUEST_START, o.CMD_WORLD_FIGHT_LOAD_SRC_RESULT, o.CMD_WORLD_FIGHT_SHOOT, o.CMD_WORLD_FIGHT_RESULT_BROADCAST, o.CMD_WORLD_FIGHT_CHANGE_SPIRIT_SKILL, o.CMD_WORLD_FIGHT_FLASH_ANIMATE_DONE, o.CMD_WORLD_FIGHT_CHANGE_SPIRIT_NOTIFY, o.CMD_WORLD_FIGHT_SHOW_ATTACK_NOTIFY, o.CMD_WAR_FIGHT_REQUEST_START, o.CMD_WAR_FIGHT_LOAD_SRC_RESULT, o.CMD_WAR_FIGHT_SHOOT, o.CMD_WAR_FIGHT_RESULT_BROADCAST, o.CMD_WAR_FIGHT_FLASH_ANIMATE_DONE, o.CMD_WAR_FIGHT_CHANGE_SPIRIT_NOTIFY, o.CMD_WAR_FIGHT_SHOW_ATTACK_NOTIFY]
                            }
                            ,
                            n.reset = function() {
                                this.combatEnd = !0
                            }
                            ,
                            a
                    }(T)).combatServerType = 0,
                        j = J)) || j);
                a._RF.pop()
            }
        }
    }
));
