System.register("chunks:///_virtual/FixTemperConfig.ts", ["cc", "./ActivityAPI.ts"], (function(t) {
        var c, n;
        return {
            setters: [function(t) {
                c = t.cclegacy
            }
                , function(t) {
                    n = t.ActivityAPI
                }
            ],
            execute: function() {
                c._RF.push({}, "7d43dQ6GoBLgb9diK84OR/l", "FixTemperConfig", void 0);
                var e = t("FixTemperConfig", function() {
                    function t() {}
                    return t.init = function() {
                        t.ActId = Number("0"),
                            t.ActMainApp = "ui" + t.ActId,
                            t.ActMainNpc = "npc" + t.ActId;
                        var c = n.getActivityInfo(t.ActId);
                        0 != c.npcX && (t.ActNpcX = c.npcX),
                        0 != c.npcY && (t.ActNpcY = c.npcY),
                        0 != c.sceneID && (t.ActMainScene = c.sceneID),
                        "" != c.actTime && (t.ActTime = c.actTime),
                        null != c.actContents && c.actContents.length > 0 && (t.ActContents = c.actContents)
                    }
                        ,
                        t
                }());
                e.ActMainScene = 13,
                    e.ActNpcX = 310,
                    e.ActNpcY = 350,
                    e.ActTime = "",
                    e.ActTimePrefix = "活动时间：",
                    e.ActTimeSuffix = "",
                    e.ActContents = [],
                    e.CMD_QUERY = 0,
                    e.CMD_SUBMIT = 1,
                    e.CMD_QUERY_LIST = 2,
                    e.CGI = "amend_nature",
                    e.ActId = 0,
                    e.ActMainApp = "ui0",
                    e.ActMainNpc = "npc0",
                    c._RF.pop()
            }
        }
    }
));
