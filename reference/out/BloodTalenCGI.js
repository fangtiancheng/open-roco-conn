System.register("chunks:///_virtual/BloodTalenCGI.ts", ["cc", "./Constants.ts", "./global.ts", "./CGI.ts", "./Xml2Json.ts", "./SpiritStorageApp.ts"], (function(t) {
        var n, e, o, i, u, a;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    e = t.Constants
                }
                , function(t) {
                    o = t.__global
                }
                , function(t) {
                    i = t.CGI
                }
                , function(t) {
                    u = t.Xml2Json
                }
                , function(t) {
                    a = t.SpiritStorageApp
                }
            ],
            execute: function() {
                n._RF.push({}, "6260f0PRZpIQI7HoNMbipnP", "BloodTalenCGI", void 0);
                var r = function(t, n, r, c, d) {
                    var l = o.SysAPI.getGDataAPI().getGlobalVal(e.CUR_SERVER_INFO);
                    n.unkown = l.pskey ? l.pskey : l.skey,
                        n.skey = l.skey,
                        n.angel_uin = l.uin,
                        n.angel_key = l.sessionKey,
                        n.platfrom = a.platformValue,
                        n.time = Date.now(),
                        i.Get(t, n, r, (function(t) {
                                var n = u.getJson(t);
                                c(n)
                            }
                        ), (function(t) {
                                o.showMsgBox("网络繁忙，请稍后再试！"),
                                d && d(t)
                            }
                        ))
                };
                t("GetBloodTalenData", (function(t, n) {
                        r("blood_spirit_book", {
                            cmd: 1
                        }, "text", (function(n) {
                                return t(n)
                            }
                        ), n)
                    }
                )),
                    t("GetTalenAwakePetData", (function(t, n) {
                            r("blood_gift", {
                                cmd: 5
                            }, "text", (function(n) {
                                    return t(n)
                                }
                            ), n)
                        }
                    )),
                    t("GetTalenAwakeData", (function(t, n, e) {
                            var o = {
                                cmd: 0,
                                index: t.index
                            };
                            r("blood_gift", o, "text", (function(t) {
                                    return n(t)
                                }
                            ), e)
                        }
                    )),
                    t("ReqTalenAwake", (function(t, n, e) {
                            var o = {
                                cmd: 1,
                                index: t.index,
                                bloodindex: t.bloodindex
                            };
                            r("blood_gift", o, "text", (function(t) {
                                    return n(t)
                                }
                            ), e)
                        }
                    )),
                    t("GetQuartermasterData", (function(t, n) {
                            r("repu_get", {
                                cmd: 0
                            }, "text", (function(n) {
                                    return t(n)
                                }
                            ), n)
                        }
                    )),
                    t("ReqBuyItem", (function(t, n, e) {
                            var o = {
                                cmd: 1,
                                index: t.index,
                                num: t.num
                            };
                            r("repu_get", o, "text", (function(t) {
                                    return n(t)
                                }
                            ), e)
                        }
                    )),
                    t("GetExpeditionData", (function(t, n) {
                            r("darkly_expedition", {
                                cmd: 0
                            }, "text", (function(n) {
                                    return t(n)
                                }
                            ), n)
                        }
                    )),
                    t("ReqChallenge", (function(t, n, e) {
                            var o = {
                                cmd: 1,
                                id: t.id,
                                type: t.vipSkip ? 2 : 1
                            };
                            r("darkly_expedition", o, "text", (function(t) {
                                    return n(t)
                                }
                            ), e)
                        }
                    )),
                    t("ReqChallengeAward", (function(t, n) {
                            r("darkly_expedition", {
                                cmd: 2
                            }, "text", (function(n) {
                                    return t(n)
                                }
                            ), n)
                        }
                    )),
                    t("ReqVipSkip", (function(t, n, e) {
                            var o = {
                                cmd: 3,
                                type: t.vipSkip ? 2 : 1
                            };
                            r("darkly_expedition", o, "text", (function(t) {
                                    return n(t)
                                }
                            ), e)
                        }
                    ));
                n._RF.pop()
            }
        }
    }
));
