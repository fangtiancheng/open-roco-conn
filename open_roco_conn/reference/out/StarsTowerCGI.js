System.register("chunks:///_virtual/StarsTowerCGI.ts", ["cc", "./Constants.ts", "./ActivityAPI.ts", "./global.ts", "./CGI.ts", "./Xml2Json.ts", "./SpiritStorageApp.ts"], (function(t) {
        var n, e, r, o, s, i, u;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    e = t.Constants
                }
                , function(t) {
                    r = t.ActivityAPI
                }
                , function(t) {
                    o = t.__global
                }
                , function(t) {
                    s = t.CGI
                }
                , function(t) {
                    i = t.Xml2Json
                }
                , function(t) {
                    u = t.SpiritStorageApp
                }
            ],
            execute: function() {
                n._RF.push({}, "716a9jgWERPYJDfrdUW24Ph", "StarsTowerCGI", void 0);
                var c = function(t, n, r, c, a) {
                    var f = o.SysAPI.getGDataAPI().getGlobalVal(e.CUR_SERVER_INFO);
                    n.unkown = f.pskey ? f.pskey : f.skey,
                        n.skey = f.skey,
                        n.angel_uin = f.uin,
                        n.angel_key = f.sessionKey,
                        n.platfrom = u.platformValue,
                        n.time = Date.now(),
                        s.Get(t, n, r, (function(t) {
                                var n = i.getJson(t);
                                s.GenerateResult(n),
                                    c(n)
                            }
                        ), (function(t) {
                                o.showMsgBox("网络繁忙，请稍后再试！"),
                                a && a(t)
                            }
                        ))
                };
                t("GetStarsTowerConfig", (function() {
                        return r.getGlobalValue("1989")
                    }
                )),
                    t("GetStarsTowerData", (function(t, n) {
                            c("star_tower_new", {
                                cmd: 0
                            }, "text", (function(n) {
                                    return t(n)
                                }
                            ), n)
                        }
                    )),
                    t("GetFightAward", (function(t, n, e, r) {
                            c("star_tower_new", {
                                cmd: 1,
                                type: 0,
                                storey: t,
                                index: n
                            }, "text", (function(t) {
                                    return e(t)
                                }
                            ), r)
                        }
                    )),
                    t("GetStarsTowerFirstAward", (function(t, n, e) {
                            c("star_tower_new", {
                                cmd: 2,
                                storey: t
                            }, "text", (function(t) {
                                    return n(t)
                                }
                            ), e)
                        }
                    )),
                    t("QuickFight", (function(t, n, e, r, o) {
                            c("star_tower_new", {
                                cmd: 4,
                                storey: t,
                                storey1: n,
                                sell: e
                            }, "text", (function(t) {
                                    return r(t)
                                }
                            ), o)
                        }
                    )),
                    t("GetAutoSelt", (function(t, n) {
                            c("star_tower_new", {
                                cmd: 5
                            }, "text", (function(n) {
                                    return t(n)
                                }
                            ), n)
                        }
                    )),
                    t("GetBossFightAward", (function(t, n) {
                            c("star_tower_new", {
                                cmd: 6
                            }, "text", (function(n) {
                                    return t(n)
                                }
                            ), n)
                        }
                    )),
                    t("GetBossProgressAward", (function(t, n, e) {
                            c("star_tower_new", {
                                cmd: 8,
                                index: t
                            }, "text", (function(t) {
                                    return n(t)
                                }
                            ), e)
                        }
                    )),
                    t("GetBagData", (function(t, n) {
                            c("star_tower_new", {
                                cmd: 9
                            }, "text", (function(n) {
                                    return t(n)
                                }
                            ), n)
                        }
                    )),
                    t("FullLevel", (function(t, n, e, r) {
                            c("star_tower_new", {
                                cmd: 10,
                                id: t,
                                catch_time: n
                            }, "text", (function(t) {
                                    return e(t)
                                }
                            ), r)
                        }
                    ));
                n._RF.pop()
            }
        }
    }
));
