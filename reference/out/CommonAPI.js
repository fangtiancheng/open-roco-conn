System.register("chunks:///_virtual/CommonAPI.ts", ["cc", "./global.ts", "./OpenCombatDes.ts", "./OpenAsWinDes.ts", "./CFunction.ts", "./Constants.ts", "./NetResult.ts", "./ShowItemAwards.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./Config.ts"], (function(t) {
        var e, n, i, o, s, r, a, u, c, l, h, m;
        return {
            setters: [function(t) {
                e = t.cclegacy,
                    n = t.Vec2
            }
                , function(t) {
                    i = t.__global
                }
                , function(t) {
                    o = t.OpenCombatDes
                }
                , function(t) {
                    s = t.OpenAsWinDes
                }
                , function(t) {
                    r = t.CFunction
                }
                , function(t) {
                    a = t.Constants
                }
                , function(t) {
                    u = t.NetResult
                }
                , function(t) {
                    c = t.ShowItemAwards
                }
                , function(t) {
                    l = t.PureNotificationCenter
                }
                , function(t) {
                    h = t.AppConstDef
                }
                , function(t) {
                    m = t.Config
                }
            ],
            execute: function() {
                e._RF.push({}, "c907eDv2r5FR5kcmkNG/JJt", "CommonAPI", void 0),
                    t("CommonAPI", function() {
                        function t() {}
                        return t.getItemUrl = function(t) {
                            var e;
                            return null == (e = i.SysAPI.getGDataAPI().getDataProxy(a.ITEM_DATA).select(t)) ? (this.showAlert("普通道具:" + t + "找不到配置信息."),
                                "") : e.url
                        }
                            ,
                            t.getItemName = function(t) {
                                return i.SysAPI.getGDataAPI().getDataProxy(a.ITEM_DATA).select(t).name
                            }
                            ,
                            t.openSpiritBag = function() {
                                l.sendNotification(h.NN_V_SHOW_SPIRIT_BAG_VIEW)
                            }
                            ,
                            t.openStorage = function() {
                                var t = new s;
                                t.winPos = new n(190,46),
                                    t.name = "",
                                    t.src = "SpiritStorageApp",
                                    t.cache = !1,
                                    t.isModal = !0,
                                    i.openAsWin(t)
                            }
                            ,
                            t.getCgiXmlRewardList = function(t, e, n) {
                                if (void 0 === n && (n = null),
                                    !t)
                                    return [];
                                var i, o = new Array;
                                o && 0 != o.length || t && t.Item && o.push(t.Item);
                                for (var s = new Array, r = 0; r < o.length; ++r) {
                                    i = o[r];
                                    var a = new A;
                                    a.id = Number(i.id),
                                        a.count = Number(i.count),
                                    i.hasOwnProperty("type") && (a.type = Number(i.type)),
                                    n && n.indexOf(a.id) >= 0 || s.push(a)
                                }
                                return s
                            }
                            ,
                            t.showCgiXmlRewardList = function(e, n, i) {
                                void 0 === n && (n = null),
                                void 0 === i && (i = !1);
                                var o = t.getCgiXmlRewardList(e, !0, [1e3])
                                    , s = new u(e);
                                if (i && s.value > 0)
                                    n ? t.showAlert(s.msg, n.invoke) : t.showAlert(s.msg);
                                else {
                                    if (o && o.length > 0)
                                        return new c(o,n),
                                            !0;
                                    n && n.invoke()
                                }
                                return !1
                            }
                            ,
                            t.getSpiritName = function(t) {
                                var e = i.SysAPI.getGDataAPI().getDataProxy(a.SPIRIT_DATA).select(Number(t));
                                return null == e ? (this.showAlert("宠物:" + t + "找不到配置信息."),
                                    "") : e.name
                            }
                            ,
                            t.getSpiritSrc = function(t) {
                                var e = i.SysAPI.getGDataAPI().getDataProxy(a.SPIRIT_DATA).select(Number(t));
                                return null == e ? (this.showAlert("宠物:" + t + "找不到配置信息."),
                                    "") : e.iconSrc
                            }
                            ,
                            t.showPushData = function() {
                                for (; m.PUSH_DATA.length > 0; ) {
                                    var e = m.PUSH_DATA.shift();
                                    if (0 != e.dreamPoint && null != e.dreamPoint && this.showAlert("获得梦想积分*" + e.dreamPoint),
                                    e.finishAchivement && e.finishAchivement.length > 0) {
                                        t.items = e.items;
                                        for (var n = 0; n < e.finishAchivement.length; n++)
                                            0 == n ? this.showAlert("恭喜你完成了" + m.getAchiveDes(e.finishAchivement[n]).desc + "，获得了" + m.getAchiveDes(e.finishAchivement[n]).name + "成就！", (function(e) {
                                                    null != t.items && (i.showItemPanel(t.items),
                                                        t.items = null)
                                                }
                                            )) : this.showAlert("恭喜你完成了" + m.getAchiveDes(e.finishAchivement[n]).desc + "，获得了" + m.getAchiveDes(e.finishAchivement[n]).name + "成就！")
                                    } else
                                        null != e.items && i.showItemPanel(e.items)
                                }
                                m.PUSH_DATA = []
                            }
                            ,
                            t.showAlert = function(t, e) {
                                void 0 === e && (e = null);
                                var n = i.SysAPI.getUISysAPI().commUIManager;
                                null != e ? n.alert("", t, 1, new r(e)) : n.alert("", t)
                            }
                            ,
                            t.showConfirmAlert = function(t, e, n) {
                                return void 0 === e && (e = null),
                                void 0 === n && (n = null),
                                    i.showMsgBox(t, 2, new r((function(t) {
                                            1 == t ? e && e() : n && n()
                                        }
                                    )))
                            }
                            ,
                            t.startNpcCombat = function(t, e, n) {
                                var s = new o;
                                s.combatType = e,
                                    s.opponentID = t,
                                    s.oppoentName = "",
                                    s.handler = n,
                                    i.openCombat(s)
                            }
                            ,
                            t.byteToString = function(t, e) {
                                return void 0 === e && (e = "gb2312"),
                                    t.position = 0,
                                    t.readMultiByte(t.length, e)
                            }
                            ,
                            t
                    }()).items = void 0;
                var A = t("CGIRewardItem", (function() {
                        this.id = void 0,
                            this.count = void 0,
                            this.type = void 0,
                            this.id = 0,
                            this.count = 0,
                            this.type = 0
                    }
                ));
                e._RF.pop()
            }
        }
    }
));
