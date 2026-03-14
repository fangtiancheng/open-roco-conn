System.register("chunks:///_virtual/SentinelIntelligenceConfig.ts", ["cc"], (function(E) {
        var e;
        return {
            setters: [function(E) {
                e = E.cclegacy
            }
            ],
            execute: function() {
                e._RF.push({}, "e5365BeFIpKnIr5t5t0Goz0", "SentinelIntelligenceConfig", void 0);
                var n = E("SentinelIntelligenceConfig", (function() {}
                ));
                n.CGI_NAME = "sentinel_intelligence_new",
                    n.CMD = {
                        QUERY: 0,
                        START_FIGHT: 1,
                        FIGHT: 2,
                        REFRESH: 3,
                        GET_GIFT: 4,
                        QUERY_ALL: 5,
                        GET_PRIZE: 6,
                        QUERY_BAG: 7
                    },
                    n.REFRESH_TYPE = {
                        EXCHANGE: 1,
                        BOSS: 2
                    },
                    n.GIFT_TYPE = {
                        EXCHANGE: 1,
                        BOSS_REWARD: 2,
                        SPIRIT_EVOLVE: 3
                    },
                    n.FIGHT_STATUS = {
                        NOT_FIGHT: 0,
                        DEFEATED: 1
                    },
                    n.EXCHANGE_STATUS = {
                        NOT_EXCHANGED: 0,
                        EXCHANGED: 1
                    },
                    n.BUTTON_FRAME = {
                        DISABLED: 1,
                        ENABLED: 2,
                        COMPLETED: 3
                    },
                    n.LIMITS = {
                        DAILY_FIGHT_TIMES: 5,
                        BOSS_REFRESH_LIMIT: 5,
                        EXCHANGE_REFRESH_LIMIT: 8
                    },
                    n.REFRESH_COST = {
                        BOSS: 10,
                        EXCHANGE: [{
                            cost: 0,
                            type: "free"
                        }, {
                            cost: 1e4,
                            type: "coin"
                        }, {
                            cost: 10,
                            type: "diamond"
                        }, {
                            cost: 20,
                            type: "diamond"
                        }, {
                            cost: 40,
                            type: "diamond"
                        }]
                    },
                    n.SCENE_CONFIG = {
                        SCENE_ID: 141,
                        NPC_POSITION: {
                            x: 300,
                            y: 250
                        }
                    },
                    e._RF.pop()
            }
        }
    }
));
