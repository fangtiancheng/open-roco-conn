System.register("chunks:///_virtual/CommFunction.ts", ["cc", "./AngelSysEvent.ts", "./OpenAsWinDes.ts", "./global.ts", "./Constants.ts", "./OpenCombatDes.ts"], (function(n) {
        var t, e, o, a, i, c, s;
        return {
            setters: [function(n) {
                t = n.cclegacy,
                    e = n.Vec2
            }
                , function(n) {
                    o = n.AngelSysEvent
                }
                , function(n) {
                    a = n.OpenAsWinDes
                }
                , function(n) {
                    i = n.__global
                }
                , function(n) {
                    c = n.Constants
                }
                , function(n) {
                    s = n.OpenCombatDes
                }
            ],
            execute: function() {
                t._RF.push({}, "3caf5wgnYpIO6yUSWciIGE8", "CommFunction", void 0);
                n("CommFunction", function() {
                    function n() {}
                    return n.callApp = function(n, t, c, s, r) {
                        void 0 === t && (t = ""),
                        void 0 === c && (c = null),
                        void 0 === s && (s = !0),
                        void 0 === r && (r = !0);
                        var u = new a;
                        u.event = o.ON_OPEN_ASWIN,
                            u.src = n,
                            u.name = t,
                            u.isModal = s,
                            u.params = c,
                            u.cache = r,
                            u.winPos = new e(0,0),
                            i.openAsWin(u)
                    }
                        ,
                        n.showItems = function(n) {}
                        ,
                        n.setWaiting = function(n) {
                            var t = i.SysAPI.getUISysAPI().commUIManager;
                            n ? t.createMiniLoading() : t.closeMiniLoading()
                        }
                        ,
                        n.alert = function(n) {
                            i.SysAPI.getUISysAPI().commUIManager.alert("", n)
                        }
                        ,
                        n.getItemName = function(n) {
                            var t;
                            return null == (t = i.SysAPI.getGDataAPI().getDataProxy(c.ITEM_DATA).select(n)) ? (alert("普通道具:" + n + "找不到配置信息."),
                                "") : t.name
                        }
                        ,
                        n.getSpiritName = function(n) {
                            var t = i.SysAPI.getGDataAPI().getDataProxy(c.SPIRIT_DATA).select(Number(n));
                            return null == t ? (alert("宠物:" + n + "找不到配置信息."),
                                "") : t.name
                        }
                        ,
                        n.startNpcCombat = function(n, t, e) {
                            var o = new s;
                            o.combatType = 2,
                                o.opponentID = n,
                                o.oppoentName = t,
                                o.handler = e,
                                i.openCombat(o)
                        }
                        ,
                        n.startMultiCombat = function(n, t, e) {}
                        ,
                        n
                }());
                t._RF.pop()
            }
        }
    }
));
