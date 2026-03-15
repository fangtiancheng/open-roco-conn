System.register("chunks:///_virtual/LadderMatchSystemDP2.ts", ["cc", "./NetManager.ts", "./LadderMatchNetCmdsType.ts", "./Timer.ts", "./TimerEvent.ts", "./LadderMatchConfig.ts", "./PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C.ts", "./PTB_0x0B0519_LadderFightMatchResult_C2S2.ts", "./PTB_0x0B0519_LadderFightMatchResult_S2C2.ts", "./FightSvrProtoRetInfo.ts", "./global.ts"], (function(t) {
        var e, n, a, o, c, i, r, s, u, d, h;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    n = t.NetManager
                }
                , function(t) {
                    a = t.LadderMatchNetCmdsType
                }
                , function(t) {
                    o = t.Timer
                }
                , function(t) {
                    c = t.default
                }
                , function(t) {
                    i = t.LadderMatchConfig
                }
                , function(t) {
                    r = t.PTB_0x0B0514_LadderFightQueryPersonalMessage_S2C
                }
                , function(t) {
                    s = t.PTB_0x0B0519_LadderFightMatchResult_C2S
                }
                , function(t) {
                    u = t.PTB_0x0B0519_LadderFightMatchResult_S2C
                }
                , function(t) {
                    d = t.FightSvrProto_RetInfo
                }
                , function(t) {
                    h = t.__global
                }
            ],
            execute: function() {
                e._RF.push({}, "2112arXPL9PaL01DfpwSShU", "LadderMatchSystemDP", void 0),
                    t("LadderMatchSystemDP", function() {
                        function t() {
                            this.plugin = void 0
                        }
                        return t.onTimer = function() {
                            i.isMatching ? console.log("天梯赛持续匹配中") : t.TIMER.stop()
                        }
                            ,
                            t.initial = function() {
                                t.TIMER = new o(1e3),
                                    t.TIMER.addEventListener(c.TIMER, t.onTimer)
                            }
                            ,
                            t.requestMatch = function(e) {
                                t.TIMER.start(),
                                    console.log("开始匹配天梯赛，发送匹配数据!"),
                                    i.isMatching = !0,
                                    n.removeDataProcessor(a.T_Match),
                                    n.addDataProcessor(a.T_Match, u, e);
                                var o = new s;
                                o.uin = h.MainRoleData.uin,
                                    n.send(a.T_Match, o)
                            }
                            ,
                            t.requestCancelMatch = function(t) {
                                console.log("取消天梯赛!"),
                                    n.send(a.T_CancelMatch, null, d, t)
                            }
                            ,
                            t.requestQueryInfo = function(t) {
                                n.send(a.T_QueryInfo, null, r, t)
                            }
                            ,
                            t
                    }()).TIMER = void 0,
                    e._RF.pop()
            }
        }
    }
));
