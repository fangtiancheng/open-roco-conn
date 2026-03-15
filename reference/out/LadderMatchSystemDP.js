System.register("chunks:///_virtual/LadderMatchSystemDP.ts", ["cc", "./global.ts", "./NetManager.ts", "./LadderMatchNetCmdsType2.ts", "./PTB_0x0B0519_LadderFightMatchResult_C2S.ts", "./RetInfo.ts", "./Config.ts", "./ReqRecuperate.ts", "./P_FreeRequest.ts", "./CommFunction.ts", "./PTB_0x0B0521_LadderFightPushReward_S2C.ts", "./PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C2.ts", "./PTB_0x0B064D_LadderFightQuestCancel_C2S.ts", "./PTB_0x0B064E_LadderFightQuestCancel_C2S.ts", "./PTB_0x0B064E_LadderFightQuestCancel_S2C.ts", "./PTB_0x0B064D_LadderFightQuestCancel_S2C.ts", "./PTB_0x0B0515_LadderFightQueryRankMessage_S2C.ts", "./PTB_0x0B0516_LadderFightQueryRewardMessage_S2C.ts", "./PTB_0x0B0518_LadderFightGainReward_S2C.ts", "./PTB_0x0B0518_LadderFightGainReward_C2S.ts", "./PTB_0x0B0520_LadderFightQueryPicResult_S2C.ts", "./PTB_0x0B0520_LadderFightQueryPicResult_C2S.ts", "./PTB_0x0B0519_LadderFightMatchResult_S2C.ts"], (function(e) {
        var t, n, a, r, s, i, _, u, d, o, c, P, h, g, B, T, R, f, C, l, S, y, F;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.__global
                }
                , function(e) {
                    a = e.NetManager
                }
                , function(e) {
                    r = e.LadderMatchNetCmdsType
                }
                , function(e) {
                    s = e.PTB_0x0B0519_LadderFightMatchResult_C2S
                }
                , function(e) {
                    i = e.RetInfo
                }
                , function(e) {
                    _ = e.Config
                }
                , function(e) {
                    u = e.ReqRecuperate
                }
                , function(e) {
                    d = e.P_FreeRequest
                }
                , function(e) {
                    o = e.CommFunction
                }
                , function(e) {
                    c = e.PTB_0x0B0521_LadderFightPushReward_S2C
                }
                , function(e) {
                    P = e.PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C
                }
                , function(e) {
                    h = e.PTB_0x0B064D_LadderFightQuestCancel_C2S
                }
                , function(e) {
                    g = e.PTB_0x0B064E_LadderFightQuestCancel_C2S
                }
                , function(e) {
                    B = e.PTB_0x0B064E_LadderFightQuestCancel_S2C
                }
                , function(e) {
                    T = e.PTB_0x0B064D_LadderFightQuestCancel_S2C
                }
                , function(e) {
                    R = e.PTB_0x0B0515_LadderFightQueryRankMessage_S2C
                }
                , function(e) {
                    f = e.PTB_0x0B0516_LadderFightQueryRewardMessage_S2C
                }
                , function(e) {
                    C = e.PTB_0x0B0518_LadderFightGainReward_S2C
                }
                , function(e) {
                    l = e.PTB_0x0B0518_LadderFightGainReward_C2S
                }
                , function(e) {
                    S = e.PTB_0x0B0520_LadderFightQueryPicResult_S2C
                }
                , function(e) {
                    y = e.PTB_0x0B0520_LadderFightQueryPicResult_C2S
                }
                , function(e) {
                    F = e.PTB_0x0B0519_LadderFightMatchResult_S2C
                }
            ],
            execute: function() {
                t._RF.push({}, "b2370D3Ix9AR4D3h8NXYNM2", "LadderMatchSystemDP", void 0);
                e("LadderMatchSystemDP", function() {
                    function e() {
                        this.plugin = void 0
                    }
                    return e.initial = function() {
                        a.removeDataProcessor(r.T_PUSH_REWARD),
                            a.addDataProcessor(r.T_PUSH_REWARD, c, this.processPushReward.bind(this))
                    }
                        ,
                        e.dispose = function() {
                            a.removeDataProcessor(r.T_PUSH_REWARD)
                        }
                        ,
                        e.processPushReward = function(e, t) {
                            _.PUSH_DATA.push(t)
                        }
                        ,
                        e.prototype.setPlugin = function(e) {
                            this.plugin = e
                        }
                        ,
                        e.requestMatch = function(e, t) {
                            _.isMatching = !0,
                                a.removeDataProcessor(r.T_Match),
                                a.addDataProcessor(r.T_Match, F, t);
                            var i = new s;
                            i.uin = this.generateKey(n.MainRoleData.uin, e.score, e.battleCount, e.dailyChallengeCount),
                                i.ftype = e.fType,
                                a.send(r.T_Match, i)
                        }
                        ,
                        e.generateKey = function(e, t, n, a) {
                            var r = (e ^ n << 13) + ((1023 & t) << 10) + ((15 & a) << 6);
                            return r ^= r >>> 16,
                            (r ^= r >>> 13) >>> 0
                        }
                        ,
                        e.requestQueryInfo = function(e) {
                            o.setWaiting(!0),
                                a.send(r.T_QueryInfo, null, P, e)
                        }
                        ,
                        e.requestGiveupTask = function(e, t) {
                            o.setWaiting(!0);
                            var n = new h;
                            n.reqIndex = e,
                                a.send(r.T_GiveupTask, n, T, t)
                        }
                        ,
                        e.requestSetAchive = function(e, t) {
                            o.setWaiting(!0);
                            var n = new g;
                            n.reqId = e,
                                a.send(r.T_SetAchive, n, B, t)
                        }
                        ,
                        e.requestRecoverySpirit = function(e) {
                            o.setWaiting(!0),
                                new d(r.T_RECOVERY_SPIRIT,new u,u,e).send()
                        }
                        ,
                        e.requestQueryRank = function(e) {
                            o.setWaiting(!0),
                                a.removeDataProcessor(r.T_QueryRank),
                                a.addDataProcessor(r.T_QueryRank, R, e),
                                a.send(r.T_QueryRank, null)
                        }
                        ,
                        e.requestQueryReward = function(e) {
                            o.setWaiting(!0),
                                a.send(r.T_QueryReward, null, f, e)
                        }
                        ,
                        e.requestCancelMatch = function(e) {
                            o.setWaiting(!0),
                                a.send(r.T_CancelMatch, null, i, e)
                        }
                        ,
                        e.requestGetReward = function(e, t) {
                            o.setWaiting(!0),
                                a.removeDataProcessor(r.T_GetReward),
                                a.addDataProcessor(r.T_GetReward, C, e);
                            var n = new l;
                            n.type = t,
                                a.send(r.T_GetReward, n)
                        }
                        ,
                        e.requestPlayGuideMovie = function(e, t) {
                            o.setWaiting(!0),
                                a.removeDataProcessor(r.T_Play_Guide_Movie),
                                a.addDataProcessor(r.T_Play_Guide_Movie, S, e);
                            var n = new y;
                            n.step = t,
                                a.send(r.T_Play_Guide_Movie, n)
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
