System.register("chunks:///_virtual/GiftCenterOnlineConfig.ts", ["cc"], (function(n) {
        var e;
        return {
            setters: [function(n) {
                e = n.cclegacy
            }
            ],
            execute: function() {
                e._RF.push({}, "b400cuawBRF3IQGvIymsOkn", "GiftCenterOnlineConfig", void 0);
                var t = n("GiftCenterOnlineConfig", (function() {}
                ));
                t.CMD_QUERY = 1,
                    t.CMD_GETGIFT = 0,
                    t.CGI = "online_present",
                    t.REWARD_ARR = ["速度之果", "物防之果", "精力之果", "魔防之果", "物攻之果", "魔攻之果", "遗忘果实"],
                    t.REWARD_COUNT_ARR = ["15", "15", "15", "15", "15", "15", "1"],
                    e._RF.pop()
            }
        }
    }
));
