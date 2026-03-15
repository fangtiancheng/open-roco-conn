System.register("chunks:///_virtual/global.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AngelSysEvent.ts", "./OpenCombatDes.ts", "./CFunction.ts", "./CommonDataAPI.ts", "./Constants.ts"], (function(exports) {
        var _createClass, cclegacy, Event, AngelSysEvent, OpenCombatDes, CFunction, CommonDataAPI, Constants;
        return {
            setters: [function(o) {
                _createClass = o.createClass
            }
                , function(o) {
                    cclegacy = o.cclegacy,
                        Event = o.Event
                }
                , function(o) {
                    AngelSysEvent = o.AngelSysEvent
                }
                , function(o) {
                    OpenCombatDes = o.OpenCombatDes
                }
                , function(o) {
                    CFunction = o.CFunction
                }
                , function(o) {
                    CommonDataAPI = o.CommonDataAPI
                }
                , function(o) {
                    Constants = o.Constants
                }
            ],
            execute: function() {
                cclegacy._RF.push({}, "168824xc95FyppiQuDfyHoW", "global", void 0);
                var __global = exports("__global", function() {
                    function __global() {}
                    return __global.heroClosedExec = function(o, n, l) {
                        throw new Error("Method not implemented.")
                    }
                        ,
                        __global.initialize = function(o) {
                            __global.__sysApi = o,
                                __global.__GEventAPI = __global.__sysApi.getGEventAPI(),
                            __global.__dataAPI || (__global.__dataAPI = new CommonDataAPI(o))
                        }
                        ,
                        __global.openCombat = function(o, n, l, a, e) {
                            void 0 === n && (n = 0),
                            void 0 === l && (l = 0),
                            void 0 === a && (a = ""),
                            void 0 === e && (e = null),
                            null == o && ((o = new OpenCombatDes).combatType = n,
                                o.opponentID = l,
                            null != a && "" != a && (o.oppoentName = a),
                                o.handler = e),
                                console.info("开始call=>>CombatPlugin"),
                                __global.__GEventAPI.cmdExecuted(AngelSysEvent.ON_OPEN_COMBAT, o)
                        }
                        ,
                        __global.openAsWin = function(o, n) {
                            void 0 === n && (n = null),
                                null != o ? this.__sysApi.getExternalAPI().openASWindow(o.src, o.name, o.isModal, o.winPos, null, o.params, !0, o.cache) : null != n && this.__sysApi.getExternalAPI().openASWindow(n.id, n.name, n.isModal, n.pos, n.created, n.params, !0, n.cache)
                        }
                        ,
                        __global.showMsgBox = function(o, n, l) {
                            void 0 === n && (n = 1),
                            void 0 === l && (l = null);
                            var a = this.UI;
                            if (null == a)
                                return 0;
                            var e = "";
                            return "string" == typeof o ? e = o : null != o && (e = o.msg,
                                n = o.hasOwnProperty("mode") ? o.mode : 1,
                                l = o.hasOwnProperty("handler") ? o.handler : null),
                                a.alert("", e, n, l)
                        }
                        ,
                        __global.showMAlert = function(o, n, l, a, e) {
                            return void 0 === n && (n = ""),
                            void 0 === l && (l = ""),
                            void 0 === a && (a = null),
                            void 0 === e && (e = null),
                                this.UI.mAlert(o, n, l, a, e)
                        }
                        ,
                        __global.showItemPanel = function(o, n) {
                            void 0 === n && (n = null),
                                __global.UI.showRewardArray(o, n)
                        }
                        ,
                        __global.showItemPanelBySingle = function(o, n) {
                            void 0 === n && (n = null),
                                __global.UI.showRewardArrayBySingle(o, n)
                        }
                        ,
                        __global.setMute = function(o) {
                            __global.__sysApi.getMediaSysAPI().setMute(o)
                        }
                        ,
                        __global.linkToVipPayPage = function(o) {
                            void 0 === o && (o = null);
                            var n = "https://pay.qq.com/ipay/index.shtml?c=lkwg";
                            if (this.platformValue,
                                2,
                                n += "&aid=guangwang",
                                console.log(285),
                                o)
                                for (var l in o)
                                    n += "&" + l + "=" + o[l];
                            window.open(n);
                            var a = __global.GEventAPI.angelEventDispatcher
                                , e = new Event("vipPay");
                            return a.dispatchEvent(e),
                                2
                        }
                        ,
                        __global.linkToRocoDiamondPayPage = function(o) {
                            void 0 === o && (o = 100),
                                __global.navigateToPayment(0, o)
                        }
                        ,
                        __global.navigateToPayment = function(o, n) {
                            void 0 === n && (n = 100);
                            var l = __global.SysAPI.getGDataAPI().getGlobalVal(Constants.CUR_SERVER_INFO)
                                , a = {
                                type: o,
                                num: n,
                                access_token: l.pskey,
                                openid: l.skey,
                                uin: l.uin,
                                angel_key: l.sessionKey
                            };
                            __global.openPaymentPage(a)
                        }
                        ,
                        __global.openPaymentPage = function openPaymentPage(params) {
                            var jsonStr = __global.objectToJsonString(params)
                                , fn = "top.startPay();";
                            eval(fn)
                        }
                        ,
                        __global.objectToJsonString = function(o) {
                            var n = "{"
                                , l = !0;
                            for (var a in o) {
                                l || (n += ",");
                                var e = o[a];
                                "string" == typeof e ? n += '"' + a + '":"' + e + '"' : "number" == typeof e || "boolean" == typeof e ? n += '"' + a + '":' + e : e instanceof Object && (n += '"' + a + '":' + __global.objectToJsonString(e)),
                                    l = !1
                            }
                            return n += "}"
                        }
                        ,
                        __global.showVipConfirm = function() {
                            __global.showMsgBox("充值VIP才能享有特权，是否前往开通？", 2, new CFunction((function(o) {
                                    1 == o && __global.linkToVipPayPage()
                                }
                            )))
                        }
                        ,
                        __global.showVipConfirm1 = function() {
                            __global.showMsgBox("仅VIP用户可以在PVE战斗后自动恢复状态，您还不是VIP哦！", 1)
                        }
                        ,
                        __global.showRocoDiamondConfirm = function(o) {
                            void 0 === o && (o = 100),
                                __global.showMsgBox("当前洛克钻数量不足，是否前往充值？", 2, new CFunction((function(n) {
                                        1 == n && __global.linkToVipPayPage(o)
                                    }
                                )))
                        }
                        ,
                        _createClass(__global, null, [{
                            key: "UI",
                            get: function() {
                                return null == __global.__ui && null != __global.__sysApi && (__global.__ui = __global.__sysApi.getUISysAPI().commUIManager),
                                    __global.__ui
                            }
                        }, {
                            key: "MainRoleData",
                            get: function() {
                                return __global.__dataAPI.MainRoleData
                            }
                        }, {
                            key: "SysAPI",
                            get: function() {
                                return __global.__sysApi
                            }
                        }, {
                            key: "GEventAPI",
                            get: function() {
                                return __global.__GEventAPI
                            }
                        }, {
                            key: "DataAPI",
                            get: function() {
                                return __global.__dataAPI
                            }
                        }, {
                            key: "platformValue",
                            get: function() {
                                return 1e4
                            }
                        }]),
                        __global
                }());
                __global.isDevelopment = !1,
                    __global.isMainRoleVipInto = !1,
                    __global.NPCCDesClsMap = void 0,
                    __global.__inited = !1,
                    __global.__sysApi = void 0,
                    __global.__ui = void 0,
                    __global.__GEventAPI = void 0,
                    __global.__dataAPI = void 0,
                    cclegacy._RF.pop()
            }
        }
    }
));
