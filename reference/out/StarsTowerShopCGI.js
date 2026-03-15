System.register("chunks:///_virtual/StarsTowerShopCGI.ts", ["cc", "./Constants.ts", "./global.ts", "./CGI.ts", "./Xml2Json.ts", "./SpiritStorageApp.ts"], (function(t) {
        var n, o, e, s, r, c;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    o = t.Constants
                }
                , function(t) {
                    e = t.__global
                }
                , function(t) {
                    s = t.CGI
                }
                , function(t) {
                    r = t.Xml2Json
                }
                , function(t) {
                    c = t.SpiritStorageApp
                }
            ],
            execute: function() {
                n._RF.push({}, "69949lnTzNK8J/GdzBjY/qY", "StarsTowerShopCGI", void 0);
                var i = function(t, n, i, u, a) {
                    var f = e.SysAPI.getGDataAPI().getGlobalVal(o.CUR_SERVER_INFO);
                    n.unkown = f.pskey ? f.pskey : f.skey,
                        n.skey = f.skey,
                        n.angel_uin = f.uin,
                        n.angel_key = f.sessionKey,
                        n.platfrom = c.platformValue,
                        n.time = Date.now(),
                        s.Get(t, n, i, (function(t) {
                                var n = r.getJson(t);
                                u(n)
                            }
                        ), (function(t) {
                                e.showMsgBox("网络繁忙，请稍后再试！"),
                                a && a(t)
                            }
                        ))
                };
                t("GetStarsShopData", (function(t, n) {
                        i("star_tower_exch_shop", {
                            cmd: 0
                        }, "text", (function(n) {
                                return t(n)
                            }
                        ), n)
                    }
                )),
                    t("Buy", (function(t, n, o, e) {
                            i("star_tower_exch_shop", {
                                cmd: 1,
                                tower: t,
                                id: n
                            }, "text", (function(t) {
                                    return o(t)
                                }
                            ), e)
                        }
                    )),
                    t("Disintegrate", (function(t, n, o, e, s) {
                            i("star_tower_exch_shop", {
                                cmd: 2,
                                tower: t,
                                id: n,
                                num: o
                            }, "text", (function(t) {
                                    return e(t)
                                }
                            ), s)
                        }
                    )),
                    t("Lottery", (function(t, n) {
                            i("star_tower_exch_shop", {
                                cmd: 3
                            }, "text", (function(n) {
                                    return t(n)
                                }
                            ), n)
                        }
                    ));
                n._RF.pop()
            }
        }
    }
));
