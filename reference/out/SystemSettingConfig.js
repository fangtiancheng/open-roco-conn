System.register("chunks:///_virtual/SystemSettingConfig.ts", ["cc", "./ActivityAPI.ts", "./XML.ts"], (function(t) {
        var c, n, i;
        return {
            setters: [function(t) {
                c = t.cclegacy
            }
                , function(t) {
                    n = t.ActivityAPI
                }
                , function(t) {
                    i = t.XML
                }
            ],
            execute: function() {
                c._RF.push({}, "c5f80oqJKhGTI12or/8EKpj", "SystemSettingConfig", void 0);
                var e = t("SystemSettingConfig", function() {
                    function t() {}
                    return t.initConfig = function() {
                        t.configData = new i(String(n.getGlobalValue(t.ActId.toString())))
                    }
                        ,
                        t.init = function() {
                            t.ActId = Number("0"),
                                t.ActMainApp = "ui" + t.ActId,
                                t.ActMainNpc = "npc" + t.ActId,
                                t.ActTaskNpc = t.ActMainNpc + "_task",
                                t.EVENT_FIND_TASK_NPC = t.ActId + "_find_task_npc";
                            var c = n.getActivityInfo(t.ActId);
                            0 != c.npcX && (t.ActNpcX = c.npcX),
                            0 != c.npcY && (t.ActNpcY = c.npcY),
                            0 != c.sceneID && (t.ActMainScene = c.sceneID),
                            "" != c.actTime && (t.ActTime = c.actTime),
                            null != c.actContents && c.actContents.length > 0 && (t.ActContents = c.actContents),
                            t.hasConfig && t.initConfig()
                        }
                        ,
                        t
                }());
                e.ActMainScene = 0,
                    e.ActNpcX = 310,
                    e.ActNpcY = 350,
                    e.ActTime = "",
                    e.ActTimePrefix = "活动时间：",
                    e.ActTimeSuffix = "",
                    e.ActContents = [],
                    e.CMD_QUERY = 0,
                    e.CMD_SETCODE = 1,
                    e.CMD_CHANGECODE = 2,
                    e.CMD_NOCODE = 3,
                    e.FORGETCODE = 4,
                    e.CMD_FORCECLOSE = 6,
                    e.CMD_CANCELNOCODE = 5,
                    e.CMD_UPREPORT = 7,
                    e.CMD_SUBMIT = 1,
                    e.CMD_GETGIFT = 2,
                    e.CMD_NOTIFY = 0,
                    e.CMD_COMBAT = 0,
                    e.CGI = "warehouse_security_code",
                    e.ActMiniGame = 0,
                    e.COMBAT_NPCID = 3,
                    e.COMBAT_NPCName = "",
                    e.STARMAGIC_ID = 1027,
                    e.ActLink = "https://17roco.gamebbs.qq.com/forum.php?mod=viewthread&tid=126253",
                    e.ActLink1 = "http://res.17roco.qq.com/download/LKWG_latest.exe",
                    e.ListItemData = [[17170439, 1, 2], [17563652, 1, 5], [17367045, 1, 20], [211, 1, 40], [841, 1, 80]],
                    e.SCENES = [{
                        id: 141,
                        x: 300,
                        y: 250
                    }],
                    e.hasConfig = !1,
                    e.configData = void 0,
                    e.ActId = 0,
                    e.ActMainApp = "ui0",
                    e.ActMainNpc = "npc0",
                    e.ActTaskNpc = "npc0_task",
                    e.EVENT_FIND_TASK_NPC = "",
                    c._RF.pop()
            }
        }
    }
));
