System.register("chunks:///_virtual/ActivityAPI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Constants.ts", "./OpenAsWinDes.ts", "./CFunction.ts", "./CommonEvent.ts", "./global.ts", "./ActivityInfo.ts", "./NetResult.ts", "./ShowItemAwards.ts", "./CommonAPI.ts", "./PropertyDes.ts", "./SpiritEquipmentInfo.ts", "./DEFINE.ts", "./Icon.ts", "./StringUtil.ts", "./BaseConfig.ts", "./OpenCombatDes.ts", "./NetManager.ts", "./PTB_0x0B0641_FixupBeforeFightReqMessage_C2S.ts", "./PTB_0x0B0641_FixupBeforeFightReqMessage_S2C.ts", "./SpiritIcon.ts", "./CellIcon.ts"], (function(t) {
        var e, n, r, a, i, o, s, u, c, l, g, I, p, A, f, m, P, S, y, D, h, v, d, _;
        return {
            setters: [function(t) {
                e = t.createClass
            }
                , function(t) {
                    n = t.cclegacy,
                        r = t.Vec2
                }
                , function(t) {
                    a = t.Constants
                }
                , function(t) {
                    i = t.OpenAsWinDes
                }
                , function(t) {
                    o = t.CFunction
                }
                , function(t) {
                    s = t.CommonEvent
                }
                , function(t) {
                    u = t.__global
                }
                , function(t) {
                    c = t.ActivityInfo
                }
                , function(t) {
                    l = t.NetResult
                }
                , function(t) {
                    g = t.ShowItemAwards
                }
                , function(t) {
                    I = t.CGIRewardItem
                }
                , function(t) {
                    p = t.PropertyDes
                }
                , function(t) {
                    A = t.SpiritEquipmentInfo
                }
                , function(t) {
                    f = t.DEFINE
                }
                , function(t) {
                    m = t.IconType
                }
                , function(t) {
                    P = t.StringUtil
                }
                , function(t) {
                    S = t.BaseConfig
                }
                , function(t) {
                    y = t.OpenCombatDes
                }
                , function(t) {
                    D = t.NetManager
                }
                , function(t) {
                    h = t.PTB_0x0B0641_FixupBeforeFightReqMessage_C2S
                }
                , function(t) {
                    v = t.PTB_0x0B0641_FixupBeforeFightReqMessage_S2C
                }
                , function(t) {
                    d = t.SpiritIcon
                }
                , function(t) {
                    _ = t.CellIcon
                }
            ],
            execute: function() {
                n._RF.push({}, "01016+xMWRGBLuUDV2KdmTp", "ActivityAPI", void 0);
                t("ActivityAPI", function() {
                    function t() {}
                    return t.getSkillPropertyIcon = function(t) {
                        return u.SysAPI.getResSysAPI().getResAdapter("combatResAdapter").iconCombatResPool.getResPool(t).display
                    }
                        ,
                        t.dispatchGlobalEvent = function(t, e) {
                            void 0 === e && (e = null),
                                u.SysAPI.getGEventAPI().angelEventDispatcher.dispatchEvent(new s("Activity_" + t,e))
                        }
                        ,
                        t.timeFormat = function(t) {
                            var e = {};
                            e.day = Math.trunc(Number(t / 86400)),
                                e.hour = Math.trunc(Number(t % 86400 / 3600)),
                                e.min = Math.trunc(Number(t % 86400 % 3600 / 60)),
                                e.sec = Math.trunc(Number(t % 60));
                            var n = e.day <= 0 ? "" : e.day + "天"
                                , r = e.day <= 0 && e.hour <= 0 ? "" : e.hour + "时"
                                , a = "" == r && e.min <= 0 ? "" : e.min + "分"
                                , i = e.sec + "秒";
                            return e.timeStr = String(n + r + a + i),
                                e
                        }
                        ,
                        t.setGlobalValue = function(t, e) {
                            u.SysAPI.getGDataAPI().addGlobalVal("Activity_" + t, e)
                        }
                        ,
                        t.getGlobalValue = function(t) {
                            return u.SysAPI.getGDataAPI().getGlobalVal("Activity_" + t)
                        }
                        ,
                        t.delegateFunc = function(t) {
                            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                                n[r - 1] = arguments[r];
                            return function() {
                                for (var e, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
                                    a[i] = arguments[i];
                                e = t.length == a.length ? a : t.length == n.length ? n : a.concat(n),
                                    t.apply(this, e)
                            }
                        }
                        ,
                        t.showConfirmAlert = function(t, e, n) {
                            return void 0 === e && (e = null),
                            void 0 === n && (n = null),
                                u.showMsgBox(t, 2, new o((function(t) {
                                        1 == t ? e && e() : n && n()
                                    }
                                )))
                        }
                        ,
                        t.getActURLRoot = function(t) {
                            return f.COMM_ROOT + "activity/" + t + "/"
                        }
                        ,
                        t.openActivityAppWithParams = function(t, e, n, a, o) {
                            void 0 === a && (a = !1),
                            void 0 === o && (o = !0);
                            var s = new i;
                            s.winPos = new r(0,0),
                                s.name = "",
                                s.src = "activityApp://" + t + "/" + e,
                                s.params = n,
                                s.isModal = o,
                                s.cache = a,
                                u.openAsWin(s)
                        }
                        ,
                        t.openApp_DiamondShop = function(t) {
                            void 0 === t && (t = "");
                            var e = new i;
                            e.winPos = new r(0,0),
                                e.name = "",
                                e.src = "rocoShop/RocoShopApp",
                                e.params = t,
                                e.isModal = !0,
                                e.cache = !1
                        }
                        ,
                        t.getCgiXmlRewardList = function(t, e, n) {
                            if (void 0 === n && (n = null),
                                !t)
                                return [];
                            var r, a = new Array;
                            if (t && t.Item)
                                if (t.Item.length)
                                    for (var i = 0; i < t.Item.length; ++i)
                                        a.push(t.Item[i]);
                                else
                                    a.push(t.Item);
                            if (t && t.item)
                                if (t.item.length)
                                    for (i = 0; i < t.item.length; ++i)
                                        a.push(t.item[i]);
                                else
                                    a.push(t.item);
                            a && 0 != a.length || t && t.Item && a.push(t.Item),
                            a && 0 != a.length || t && t.item && a.push(t.item);
                            var o = new Array;
                            for (i = 0; i < a.length; ++i) {
                                r = a[i];
                                var s = new I;
                                s.id = Number(r.id),
                                    s.count = Number(r.count),
                                r.hasOwnProperty("type") && (s.type = Number(r.type)),
                                n && n.indexOf(s.id) >= 0 || o.push(s)
                            }
                            return o
                        }
                        ,
                        t.showCgiXmlRewardList = function(e, n, r, a) {
                            void 0 === n && (n = null),
                            void 0 === r && (r = !1),
                            void 0 === a && (a = !1);
                            var i = t.getCgiXmlRewardList(e, !0, [1e3])
                                , o = new l(e);
                            if (a && i && i.length > 0) {
                                for (var s = {}, u = 0; u < i.length; ++u) {
                                    var c = i[u];
                                    s[c.id] ? s[c.id].count += c.count : s[c.id] = {
                                        id: c.id,
                                        count: c.count
                                    }
                                }
                                i = Object.values(s)
                            }
                            if (r && o.value > 0)
                                n ? t.showAlert(o.msg, n.invoke) : t.showAlert(o.msg);
                            else {
                                if (i && i.length > 0)
                                    return new g(i,n),
                                        !0;
                                n && n.invoke()
                            }
                            return !1
                        }
                        ,
                        t.byteToString = function(t, e) {
                            return void 0 === e && (e = "gb2312"),
                                t.position = 0,
                                t.readMultiByte(t.length, e)
                        }
                        ,
                        t.enterScene = function(t, e, n) {}
                        ,
                        t.showAlert = function(t, e) {
                            void 0 === e && (e = null);
                            var n = u.SysAPI.getUISysAPI().commUIManager;
                            return null != e ? n.alert("", t, 1, new o(e)) : n.alert("", t)
                        }
                        ,
                        t.getItemName = function(t) {
                            var e;
                            return null == (e = u.SysAPI.getGDataAPI().getDataProxy(a.ITEM_DATA).select(t)) ? (this.showAlert("普通道具:" + t + "找不到配置信息."),
                                "") : e.name
                        }
                        ,
                        t.getItemUrl = function(t) {
                            var e;
                            return null == (e = u.SysAPI.getGDataAPI().getDataProxy(a.ITEM_DATA).select(t)) ? (this.showAlert("普通道具:" + t + "找不到配置信息."),
                                "") : e.url
                        }
                        ,
                        t.getItemDesc = function(t) {
                            var e;
                            return null == (e = u.SysAPI.getGDataAPI().getDataProxy(a.ITEM_DATA).select(t)) ? (this.showAlert("普通道具:" + t + "找不到配置信息."),
                                "") : e.description
                        }
                        ,
                        t.getItemIcon = function(e) {
                            var n = new _;
                            return n.setPath(t.getItemUrl(e)),
                                n
                        }
                        ,
                        t.getEquipmentName = function(t) {
                            var e = new A;
                            return e.serverID = t,
                                u.SysAPI.getGDataAPI().getDataProxy(a.SEQUIP_DES_DATA).select(e.type, e.id).name
                        }
                        ,
                        t.getEquipmentDes = function(t) {
                            var e = new A;
                            return e.serverID = t,
                                u.SysAPI.getGDataAPI().getDataProxy(a.SEQUIP_DES_DATA).select(e.type, e.id)
                        }
                        ,
                        t.getDazzleDressSrc = function(t) {
                            var e = u.SysAPI.getGDataAPI().getDataProxy(a.DAZZLE_DRESS_DATA).select(Number(t));
                            return null == e ? (this.showAlert("炫装:" + t + "找不到配置信息."),
                                "") : f.DAZZLE_DRESS_RES_ROOT + e.type + "/" + t + "_bag.png"
                        }
                        ,
                        t.getDazzleDressName = function(t) {
                            var e = u.SysAPI.getGDataAPI().getDataProxy(a.DAZZLE_DRESS_DATA).select(Number(t));
                            return null == e ? (this.showAlert("炫装:" + t + "找不到配置信息."),
                                "") : e.name
                        }
                        ,
                        t.getSpiritName = function(e) {
                            var n = u.SysAPI.getGDataAPI().getDataProxy(a.SPIRIT_DATA).select(Number(e));
                            return null == n ? (t.showAlert("宠物:" + e + "找不到配置信息."),
                                "") : n.name
                        }
                        ,
                        t.getSpiritSrc = function(t) {
                            var e = u.SysAPI.getGDataAPI().getDataProxy(a.SPIRIT_DATA).select(Number(t));
                            return null == e ? (this.showAlert("宠物:" + t + "找不到配置信息."),
                                "") : e.iconSrc
                        }
                        ,
                        t.getSpiritIcon = function(t) {
                            return d.icon(t)
                        }
                        ,
                        t.getFurnitureSrc = function(t) {
                            return f.PLUGIN_ROOT + "/Home/furniture/" + t + "/" + t + "_icon.png"
                        }
                        ,
                        t.getFurnitureName = function(t) {
                            var e = u.SysAPI.getGDataAPI().getDataProxy(a.FURNITURE_LIST_DATA).select(t);
                            return null == e ? (this.showAlert("家具:" + t + "找不到配置信息."),
                                "") : e.name
                        }
                        ,
                        t.getSrcPath = function(e, n) {
                            switch (e) {
                                case m.ROCO_SHELL:
                                case m.ROCO_DIAMOND:
                                case m.PROPS:
                                    return t.getItemUrl(n);
                                case m.FURNITURE:
                                    return t.getFurnitureSrc(n);
                                case m.PET:
                                    return t.getSpiritSrc(n);
                                case m.EXP:
                                    return t.getItemUrl(n);
                                case m.SPIRIT_EQUIPMENT:
                                    return t.getEquipmentDes(n).src;
                                case m.DAZZLE_DRESS:
                                    return t.getDazzleDressSrc(n);
                                case m.PROPERTY:
                                    return P.substitute(f.COMM_ROOT + "/res/combat/property/{0}.png", n)
                            }
                            return null
                        }
                        ,
                        t.getAnyItemName = function(e, n) {
                            switch (e) {
                                case m.ROCO_SHELL:
                                case m.ROCO_DIAMOND:
                                case m.PROPS:
                                    return t.getItemName(n);
                                case m.FURNITURE:
                                    return t.getFurnitureName(n);
                                case m.PET:
                                    return t.getSpiritName(n.toString());
                                case m.EXP:
                                    return t.getItemName(n);
                                case m.SPIRIT_EQUIPMENT:
                                    return t.getEquipmentName(n);
                                case m.DAZZLE_DRESS:
                                    return t.getDazzleDressName(n);
                                case m.PROPERTY:
                                    return p.FEATURES[n].name
                            }
                            return ""
                        }
                        ,
                        t.startNpcCombat = function(t, e, n) {
                            var r = new y;
                            r.combatType = 2,
                                r.opponentID = t,
                                r.oppoentName = e,
                                r.handler = n,
                                u.openCombat(r)
                        }
                        ,
                        t.startLineupCombat = function(e, n, r) {
                            var a = new h;
                            a.type = 0,
                                D.send(722497, a, v, null),
                                D.addDataProcessor(722497, v, (function(a, i) {
                                        if (0 == i.retInfo.retCode) {
                                            var o = new y;
                                            o.combatServerType = 2,
                                                o.combatType = 2,
                                                o.opponentID = e,
                                                o.oppoentName = n,
                                                o.handler = r,
                                                u.openCombat(o)
                                        } else
                                            u.showMsgBox(t.byteToString(i.retInfo.retMsg))
                                    }
                                ), !0)
                        }
                        ,
                        t.getPlatfromStr = function() {
                            return "&platfrom=" + t.platformValue.toString()
                        }
                        ,
                        t.getSkeyStr = function() {
                            var t = u.SysAPI.getGDataAPI().getGlobalVal(a.CUR_SERVER_INFO)
                                , e = "";
                            return t && (e = "&unkown=" + (t.pskey ? t.pskey : t.skey) + "&skey=" + t.skey),
                                e
                        }
                        ,
                        t.getActivityInfo = function(t) {
                            var e = u.SysAPI.getGDataAPI().getGlobalVal("ActiveSystem_activeConfig")
                                , n = new c;
                            if (n.id = t,
                            e && e.Item) {
                                var r = e.Item(t == t)[0];
                                r && (0 != parseInt(r.npcX) && (n.npcX = parseInt(r.npcX)),
                                0 != parseInt(r.npcY) && (n.npcY = parseInt(r.npcY)),
                                0 != parseInt(r.sceneID) && (n.sceneID = parseInt(r.sceneID)),
                                "" != r.time && (n.actTime = String(r.time)),
                                "" != r.content && (n.actContents = String(r.content).split(",")))
                            }
                            return n
                        }
                        ,
                        t.navigateToURL = function(t, e) {
                            void 0 === e && (e = "_blank"),
                            "string" == typeof t && (t.startsWith("http://") || t.startsWith("https://")) && window.open(t, e)
                        }
                        ,
                        t.showVipConfirm = function() {
                            u.showVipConfirm()
                        }
                        ,
                        t.navigateToVipPay = function(t) {
                            void 0 === t && (t = null),
                                u.linkToVipPayPage(t)
                        }
                        ,
                        t.setActGlobalValue = function(t, e, n) {
                            u.SysAPI.getGDataAPI().addGlobalVal("ActGlobalData_" + t + "_" + e, n)
                        }
                        ,
                        t.getActGlobalValue = function(t, e) {
                            return u.SysAPI.getGDataAPI().getGlobalVal("ActGlobalData_" + t + "_" + e)
                        }
                        ,
                        t.getSpiriteDes = function(t) {
                            return u.SysAPI.getGDataAPI().getDataProxy(a.SPIRIT_DATA).select(t)
                        }
                        ,
                        t.parseConfig = function(t, e, n) {
                            return void 0 === n && (n = null),
                                (new S).init(t, e, n)
                        }
                        ,
                        t.getSpiritFullAvatar = function(t, e) {
                            var n = "Big" === e ? "big" : "720";
                            return f.CDN + "sprite-full-avatar/" + t + "/" + t + "-" + n + ".png"
                        }
                        ,
                        t.getSpiritDes = function(t) {
                            return u.SysAPI.getGDataAPI().getDataProxy(a.SPIRIT_DATA).select(Number(t))
                        }
                        ,
                        e(t, null, [{
                            key: "platformValue",
                            get: function() {
                                return 1e4
                            }
                        }, {
                            key: "SysAPI",
                            get: function() {
                                return u.SysAPI
                            }
                        }]),
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
