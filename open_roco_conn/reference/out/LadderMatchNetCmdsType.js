System.register("chunks:///_virtual/LadderMatchNetCmdsType.ts", ["cc"], (function(e) {
        var t;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
            ],
            execute: function() {
                t._RF.push({}, "eba280wzSZGeIQR9u+Tb3JA", "LadderMatchNetCmdsType", void 0);
                var a = e("LadderMatchNetCmdsType", function() {
                    function e() {}
                    return e.getName = function(t) {
                        var a = "";
                        switch (t) {
                            case e.T_Match:
                                a = "PTB_0x0B0519_LadderFightMatchResult_C2S";
                                break;
                            default:
                                a = ""
                        }
                        return a
                    }
                        ,
                        e
                }());
                a.T_GiveupTask = 722509,
                    a.T_SetAchive = 722510,
                    a.T_QueryInfo = 722196,
                    a.T_QueryRank = 722197,
                    a.T_QueryReward = 722198,
                    a.T_CancelMatch = 722199,
                    a.T_GetReward = 722200,
                    a.T_Match = 722201,
                    a.T_Play_Guide_Movie = 722208,
                    a.T_PUSH_REWARD = 722209,
                    a.T_RECOVERY_SPIRIT = 722210,
                    t._RF.pop()
            }
        }
    }
));
