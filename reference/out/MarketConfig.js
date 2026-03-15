System.register("chunks:///_virtual/MarketConfig.ts", ["cc", "./ActivityAPI.ts", "./XML.ts", "./ClassUtil.ts"], (function(t) {
        var i, n, c, e;
        return {
            setters: [function(t) {
                i = t.cclegacy
            }
                , function(t) {
                    n = t.ActivityAPI
                }
                , function(t) {
                    c = t.XML
                }
                , function(t) {
                    e = t.ClassUtil
                }
            ],
            execute: function() {
                i._RF.push({}, "a34f4X/kqtDIbcu5+5h1/7N", "MarketConfig", void 0);
                var a = t("MarketConfig", function() {
                    function t() {}
                    return t.initConfig = function() {
                        this.configData = new c(String(n.getGlobalValue(t.ActId.toString())))
                    }
                        ,
                        t.init = function() {
                            var i = e.getQualifiedClassName(t)
                                , c = i.lastIndexOf(".")
                                , a = i.lastIndexOf("::")
                                , s = i.substring(c + 1, a);
                            c = s.lastIndexOf("_");
                            var o = s.substr(c + 1);
                            this.ActId = Number(o),
                                this.ActMainApp = "ui" + this.ActId,
                                this.ActMainNpc = "npc" + this.ActId,
                                this.ActTaskNpc = this.ActMainNpc + "_task",
                                this.EVENT_FIND_TASK_NPC = this.ActId + "_find_task_npc";
                            var A = n.getActivityInfo(this.ActId);
                            0 != A.npcX && (t.ActNpcX = A.npcX),
                            0 != A.npcY && (t.ActNpcY = A.npcY),
                            0 != A.sceneID && (t.ActMainScene = A.sceneID),
                            "" != A.actTime && (t.ActTime = A.actTime),
                            null != A.actContents && A.actContents.length > 0 && (t.ActContents = A.actContents),
                            this.hasConfig && this.initConfig()
                        }
                        ,
                        t.getItemsByPage = function(t) {
                            for (var i = [], n = 0; n < t; n++)
                                this.itemData[this.pageIndex * t + n] && (i[n] = this.itemData[this.pageIndex * t + n]);
                            return i
                        }
                        ,
                        t.changeItemDataByID = function(t, i) {
                            for (var n = 0; n < this.itemData.length; n++) {
                                var c = this.itemData[n];
                                if (c.id == t) {
                                    c.sold += i;
                                    break
                                }
                            }
                        }
                        ,
                        t
                }());
                a.ActMainScene = 0,
                    a.ActNpcX = 310,
                    a.ActNpcY = 350,
                    a.ActTime = "",
                    a.ActTimePrefix = "活动时间：",
                    a.ActTimeSuffix = "",
                    a.ActContents = [],
                    a.CMD_QUERY = 0,
                    a.CMD_SUBMIT = 1,
                    a.CMD_GETGIFT = 2,
                    a.CMD_NOTIFY = 0,
                    a.CMD_COMBAT_OVER = 0,
                    a.CGI = "coin_shop_hot_sale",
                    a.ActMiniGame = 0,
                    a.COMBAT_NPCID = 8e5,
                    a.COMBAT_NPCName = "",
                    a.STARMAGIC_ID = 1027,
                    a.ActLink = "http://pay.qq.com/ipay/index.shtml?c=lkwg&aid=17roco.vip",
                    a.ListItemData = [[17170439, 1, 2], [17563652, 1, 5], [17367045, 1, 20], [211, 1, 40], [841, 1, 80]],
                    a.rocoShell = void 0,
                    a.vipLevel = void 0,
                    a.pageIndex = 0,
                    a.itemData = void 0,
                    a.currentServerTime = void 0,
                    a.SUIT_MAX_NUM_PERPAGE = 2,
                    a.SCENES = [{
                        id: 141,
                        x: 300,
                        y: 250
                    }],
                    a.hasConfig = !1,
                    a.configData = void 0,
                    a.ActId = 0,
                    a.ActMainApp = "ui0",
                    a.ActMainNpc = "npc0",
                    a.ActTaskNpc = "npc0_task",
                    a.EVENT_FIND_TASK_NPC = "",
                    i._RF.pop()
            }
        }
    }
));
