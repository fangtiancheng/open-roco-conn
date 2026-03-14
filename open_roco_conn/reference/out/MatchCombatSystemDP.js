System.register("chunks:///_virtual/MatchCombatSystemDP.ts", ["cc", "./NetManager.ts", "./Timer.ts", "./TimerEvent.ts", "./FightSvrProtoRetInfo.ts", "./PTB_0x0B0519_LadderFightMatchResult_S2C2.ts", "./MatchCombatConfig.ts", "./MatchCombatNetCmdsType.ts"], (function(t) {
        var n, e, o, c, i, a, s, u;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    e = t.NetManager
                }
                , function(t) {
                    o = t.Timer
                }
                , function(t) {
                    c = t.default
                }
                , function(t) {
                    i = t.FightSvrProto_RetInfo
                }
                , function(t) {
                    a = t.PTB_0x0B0519_LadderFightMatchResult_S2C
                }
                , function(t) {
                    s = t.MatchCombatConfig
                }
                , function(t) {
                    u = t.MatchCombatNetCmdsType
                }
            ],
            execute: function() {
                n._RF.push({}, "bfe715NIThAaKwPf54VFu+U", "MatchCombatSystemDP", void 0),
                    t("MatchCombatSystemDP", function() {
                        function t() {
                            this.plugin = void 0
                        }
                        return t.onTimer = function() {
                            s.isMatching ? console.log("匹配对战持续匹配中") : t.TIMER.stop()
                        }
                            ,
                            t.initial = function() {
                                t.TIMER = new o(1e3),
                                    t.TIMER.addEventListener(c.TIMER, t.onTimer)
                            }
                            ,
                            t.dispose = function() {}
                            ,
                            t.prototype.setPlugin = function(t) {
                                this.plugin = t
                            }
                            ,
                            t.requestMatch = function(n) {
                                t.TIMER.start(),
                                    console.log("开始进行匹配对战，发送匹配数据!"),
                                    s.isMatching = !0,
                                    e.removeDataProcessor(u.T_Match),
                                    e.addDataProcessor(u.T_Match, a, n),
                                    e.send(u.T_Match, null)
                            }
                            ,
                            t.requestCancelMatch = function(t) {
                                console.log("请求取消匹配对战!"),
                                    e.send(u.T_CancelMatch, null, i, t)
                            }
                            ,
                            t.requestQueryInfo = function(t) {}
                            ,
                            t
                    }()).TIMER = void 0,
                    n._RF.pop()
            }
        }
    }
));
