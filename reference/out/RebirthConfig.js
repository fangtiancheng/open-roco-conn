System.register("chunks:///_virtual/RebirthConfig.ts", ["cc", "./ActivityAPI.ts", "./XML.ts"], (function(n) {
        var e, i, d;
        return {
            setters: [function(n) {
                e = n.cclegacy
            }
                , function(n) {
                    i = n.ActivityAPI
                }
                , function(n) {
                    d = n.XML
                }
            ],
            execute: function() {
                e._RF.push({}, "67821GwuvxE0KLxK4mHENFR", "RebirthConfig", void 0);
                var l = n("RebirthConfig", function() {
                    function n() {}
                    return n.initConfig = function() {
                        n.configData = new d(String(i.getGlobalValue(n.ActId.toString())))
                    }
                        ,
                        n.init = function() {
                            n.ActId = Number("0"),
                                n.ActMainApp = "ui" + n.ActId,
                                n.ActMainNpc = "npc" + n.ActId,
                                n.ActTaskNpc = n.ActMainNpc + "_task",
                                n.EVENT_FIND_TASK_NPC = n.ActId + "_find_task_npc";
                            var e = i.getActivityInfo(n.ActId);
                            0 != e.npcX && (n.ActNpcX = e.npcX),
                            0 != e.npcY && (n.ActNpcY = e.npcY),
                            0 != e.sceneID && (n.ActMainScene = e.sceneID),
                            "" != e.actTime && (n.ActTime = e.actTime),
                            null != e.actContents && e.actContents.length > 0 && (n.ActContents = e.actContents),
                            n.hasConfig && n.initConfig()
                        }
                        ,
                        n
                }());
                l.ActMainScene = 0,
                    l.ActNpcX = 310,
                    l.ActNpcY = 350,
                    l.ActTime = "",
                    l.ActTimePrefix = "活动时间：",
                    l.ActTimeSuffix = "",
                    l.ActContents = [],
                    l.CMD_QUERY = 0,
                    l.CMD_SUBMIT = 1,
                    l.CMD_SYN = 2,
                    l.CMD_QUERY_BAG = 3,
                    l.CMD_UP = 4,
                    l.CGI = "three_color_rebirth",
                    l.ActMiniGame = 0,
                    l.COMBAT_NPCID = 3,
                    l.COMBAT_NPCName = "",
                    l.STARMAGIC_ID = 1027,
                    l.PetMsgArr = [{
                        id: 966,
                        oldName: "先锋君主",
                        newName: "极丶先锋君主",
                        newid: 2374,
                        skill: "白与黑\n魔与道\n因与果"
                    }, {
                        id: 891,
                        oldName: "岩铠领主",
                        newName: "极丶岩铠领主",
                        newid: 2375,
                        skill: "流沙古墓千岩万壑"
                    }, {
                        id: 802,
                        oldName: "冰龙王",
                        newName: "傲凌冰龙王",
                        newid: 2383,
                        skill: "冰霜龙颜"
                    }, {
                        id: 808,
                        oldName: "永夜战龙",
                        newName: "极丶永夜战龙",
                        newid: 2386,
                        skill: "永夜幻境\n幻化重影\n紫宸龙息"
                    }, {
                        id: 888,
                        oldName: "萌之王者",
                        newName: "圣萌王者",
                        newid: 2396,
                        skill: "王者之威\n怒冲凌霄\n决胜千里\n绝境逢生"
                    }, {
                        id: 1715,
                        oldName: "觉醒大天使",
                        newName: "神圣大天使",
                        newid: 2399,
                        skill: "纵翼凌风\n天界辉光\n霜翎玉羽"
                    }, {
                        id: 78,
                        oldName: "小恶魔洛基",
                        newName: "洛基",
                        newid: 2428,
                        skill: "戏弄众神\n天使之恋\n捣蛋鬼"
                    }, {
                        id: 984,
                        oldName: "小天使安琪",
                        newName: "安琪",
                        newid: 2429,
                        skill: "善恶彼岸\n天使之镜\n浮梦旋涡"
                    }, {
                        id: 1266,
                        oldName: "深渊黑迪斯",
                        newName: "深渊制裁者",
                        newid: 2446,
                        skill: "暗夜冥思\n公正审判\n制裁之刃"
                    }, {
                        id: 1831,
                        oldName: "风暴酷拉",
                        newName: "疾电酷拉",
                        newid: 2541,
                        skill: "能量守护\n疾电轰击\n电能效应"
                    }, {
                        id: 918,
                        oldName: "金翼螳螂",
                        newName: "匿林螳螂",
                        newid: 2550,
                        skill: "林间伪装\n伺机而动\n利刃闪袭"
                    }, {
                        id: 780,
                        oldName: "水灵兽",
                        newName: "碧水灵兽",
                        newid: 2552,
                        skill: "水灵动\n雨飘摇\n趁势击"
                    }, {
                        id: 951,
                        oldName: "红莲兽",
                        newName: "炽红莲兽",
                        newid: 2553,
                        skill: "火护壁\n炽热击\n烈焰焚"
                    }, {
                        id: 852,
                        oldName: "魔尾战猫",
                        newName: "极丶魔尾战猫",
                        newid: 2588,
                        skill: "魔尾焰\n引风舞\n云铃彻"
                    }, {
                        id: 1934,
                        oldName: "圣电雷王",
                        newName: "天极圣雷王",
                        newid: 2549,
                        skill: "势崩江河\n轻雷霁光\n罅云揽星\n青霜流虹"
                    }, {
                        id: 805,
                        oldName: "紫冥狐",
                        newName: "幽冥紫狐",
                        newid: 2625,
                        skill: "幽冥毒瘴\n追杀诡阵\n百毒不侵"
                    }, {
                        id: 894,
                        oldName: "幽蝠王子",
                        newName: "幽蝠公爵",
                        newid: 2633,
                        skill: "炽热魔血\n死灵寄生\n回声音波"
                    }, {
                        id: 1960,
                        oldName: "齐天大圣",
                        newName: "斗战胜佛",
                        newid: 2655,
                        skill: "七十二变\n法天象地\n救命毫毛"
                    }, {
                        id: 2193,
                        oldName: "九天女王",
                        newName: "揽月圣女",
                        newid: 2675,
                        skill: "九天揽月\n幻火月象\n月影圣火"
                    }, {
                        id: 921,
                        oldName: "钻头先生",
                        newName: "钻头大亨",
                        newid: 2658,
                        skill: "机械之躯\n合金钻头\n巨力飞爪"
                    }, {
                        id: 620,
                        oldName: "冰晶古齿虎",
                        newName: "冰晶风暴虎",
                        newid: 2692,
                        skill: "冰晶之力\n獠牙击\n风暴天爪"
                    }, {
                        id: 2050,
                        oldName: "禁魂收割者",
                        newName: "禁魂终结者",
                        newid: 2684,
                        skill: "死灵替生\n引魂飞镰\n禁灵裁决"
                    }, {
                        id: 2120,
                        oldName: "阡陌蓝莲",
                        newName: "缄默蓝莲",
                        newid: 2710,
                        skill: "寒霜冰莲\n冰莲原力"
                    }, {
                        id: 2125,
                        oldName: "冰域之心",
                        newName: "极丶冰域之心",
                        newid: 2712,
                        skill: "墨色极寒\n玄冰遁梭"
                    }, {
                        id: 2118,
                        oldName: "薛定谔的猫",
                        newName: "薛定量子猫",
                        newid: 2711,
                        skill: "叠加态\n本征态"
                    }, {
                        id: 1771,
                        oldName: "海盈水王",
                        newName: "汐纱水王",
                        newid: 2696,
                        skill: "碧天清晓\n湍玉漱石\n烟波长静"
                    }, {
                        id: 768,
                        oldName: "欢悦吉他",
                        newName: "疯狂吉他",
                        newid: 2732,
                        skill: "狂舞乐曲\n无畏咏叹\n摄魂魔音"
                    }, {
                        id: 1393,
                        oldName: "永恒冈尼尔",
                        newName: "圣迹冈尼尔",
                        newid: 2738,
                        skill: "圣迹领域\n冰冷之风\n圣枪追击"
                    }, {
                        id: 1839,
                        oldName: "伊莎贝拉",
                        newName: "噬魂蛛后",
                        newid: 2750,
                        skill: "网布窥天\n萦丝缚魂\n横罗经纬"
                    }, {
                        id: 1389,
                        oldName: "雷霆妙尔尼",
                        newName: "苍雷妙尔尼",
                        newid: 2749,
                        skill: "黄金铠甲\n雷惊电绕\n雷暴一击"
                    }, {
                        id: 2106,
                        oldName: "九天龙尊",
                        newName: "炽阳龙尊",
                        newid: 2755,
                        skill: "白龙微服\n游龙归海\n龙吟九天"
                    }, {
                        id: 1525,
                        oldName: "魔晶凤凰",
                        newName: "涅冰凤凰",
                        newid: 2758,
                        skill: "破冰涅槃\n冰翼风暴\n凛冬回响"
                    }, {
                        id: 1404,
                        oldName: "不败雷瓦汀",
                        newName: "英魂雷瓦汀",
                        newid: 2756,
                        skill: "守护之心\n踏崩\n剑指"
                    }, {
                        id: 1731,
                        oldName: "镇狱修罗王",
                        newName: "神煜修罗王",
                        newid: 2791,
                        skill: "镇狱之力\n无边业火\n哀鸣四起"
                    }, {
                        id: 996,
                        oldName: "银翼狮王",
                        newName: "圣翼狮王",
                        newid: 2793,
                        skill: "圣力共鸣\n狮王狩猎\n翼刃"
                    }, {
                        id: 1958,
                        oldName: "超级冰翼邪神",
                        newName: "戾冰邪神",
                        newid: 2764,
                        skill: "冰冻时刻\n碎冰矛\n冰封大葬"
                    }, {
                        id: 1467,
                        oldName: "冥暗幽王",
                        newName: "破启幽王",
                        newid: 2806,
                        skill: "凝灵击\n堕魂咒\n永夜临"
                    }, {
                        id: 1400,
                        oldName: "圣羽翼王",
                        newName: "凌羽圣翼王",
                        newid: 2889,
                        skill: "行空驭气\n虹起烟霄\n驰光绝景"
                    }, {
                        id: 1799,
                        oldName: "恶魔男爵",
                        newName: "恶魔伯爵",
                        newid: 2941,
                        skill: "厄镜坠月\n双龙淬火\n月龙轮尾"
                    }, {
                        id: 2179,
                        oldName: "暗夜魔王",
                        newName: "寂夜魔王",
                        newid: 2980,
                        skill: "寂愁不寐\n堕魂冥焰\n漆骨生花"
                    }, {
                        id: 2089,
                        oldName: "灾炎",
                        newName: "怒影灾炎",
                        newid: 3012,
                        skill: "碎骨斩击\n破败龙啸\n天灾地灭"
                    }, {
                        id: 2080,
                        oldName: "超威狮鹫",
                        newName: "天威狮鹫",
                        newid: 3043,
                        skill: "荣耀之心\n振羽威慑\n净化罡风"
                    }, {
                        id: 2290,
                        oldName: "灭却战龙王",
                        newName: "圣裁战龙王",
                        newid: 3039,
                        skill: "武震寰宇\n唤魂龙谕\n圣怒逆鳞\n衔烛移星\n踏绛龙行"
                    }, {
                        id: 1822,
                        oldName: "劫影龙皇",
                        newName: "戮影龙皇",
                        newid: 3019,
                        skill: "月盈则亏\n武震寰宇\n化险为夷\n杀戮律动\n迅影狩猎"
                    }, {
                        id: 1832,
                        oldName: "鹿角金刚",
                        newName: "鹿角豪侠",
                        newid: 3106,
                        skill: "能量汲取\nDc53冲击\n紧急冷却"
                    }, {
                        id: 1943,
                        oldName: "兽王塔尔",
                        newName: "兽神塔尔",
                        newid: 3119,
                        skill: "怒火蓄炎\n燃焰灭却\n烈焰轰拳"
                    }, {
                        id: 2072,
                        oldName: "机甲女王",
                        newName: "御械女帝",
                        newid: 3124,
                        skill: "屏障缔造\n力场庇护\n能源倾泻\n程序入侵\n格式化进程"
                    }, {
                        id: 1849,
                        oldName: "紫魅迪娜",
                        newName: "滟媚迪娜",
                        newid: 3142,
                        skill: "积水成渊\n夜涌狂澜\n沧溟凌空"
                    }, {
                        id: 1483,
                        oldName: "暗夜骑士",
                        newName: "冥铠战士",
                        newid: 3147,
                        skill: "交换法则\n亡灵赐福\n恶魔契约\n焚血庇佑"
                    }, {
                        id: 1853,
                        oldName: "暴走奎因",
                        newName: "激斗奎因",
                        newid: 3167,
                        skill: "炮弹装载\n炮无虚发\n精准连击"
                    }, {
                        id: 1985,
                        oldName: "蓝波弗沃",
                        newName: "蓝波法芙",
                        newid: 3193,
                        skill: "雾雨空濛\n浮光映月\n怒水重涛"
                    }, {
                        id: 1845,
                        oldName: "辉煌雷诺",
                        newName: "炜煌雷诺",
                        newid: 3225,
                        skill: "煌荧灼天\n霞阳突\n聚点阳炎\n赤焱环"
                    }, {
                        id: 1860,
                        oldName: "太鼓雷鸣",
                        newName: "轰鼓元帅",
                        newid: 3249,
                        skill: "平阵掣电\n雷杼\n擘山轰鼓"
                    }, {
                        id: 2366,
                        oldName: "圣尊武王",
                        newName: "乾坤武圣",
                        newid: 3316,
                        skill: "涤尘净心\n威光赫奕\n万象云何\n般若澄明\n一默如雷"
                    }],
                    l.CONF_NAME = "SpiritBooks",
                    l.ActLink = "http://pay.qq.com/ipay/index.shtml?c=lkwg&aid=17roco.vip",
                    l.ListItemData = [[17170439, 1, 2], [17563652, 1, 5], [17367045, 1, 20], [211, 1, 40], [841, 1, 80]],
                    l.SCENES = [{
                        id: 141,
                        x: 300,
                        y: 250
                    }],
                    l.hasConfig = !1,
                    l.configData = void 0,
                    l.ActId = 0,
                    l.ActMainApp = "ui0",
                    l.ActMainNpc = "npc0",
                    l.ActTaskNpc = "npc0_task",
                    l.EVENT_FIND_TASK_NPC = "",
                    e._RF.pop()
            }
        }
    }
));
