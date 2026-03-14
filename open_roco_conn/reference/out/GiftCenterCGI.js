System.register("chunks:///_virtual/GiftCenterCGI.ts", ["cc", "./Constants.ts", "./global.ts", "./CGI.ts", "./Xml2Json.ts", "./SpiritStorageApp.ts"], (function(t) {
        var n, e, o, s, i, u;
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
                n._RF.push({}, "8fe8ccC0FlJn49zfcm26/KR", "GiftCenterCGI", void 0);
                t("GetGiftCenterLuokeData", (function(t, n) {
                        !function(t, n, a, c, r) {
                            var l = o.SysAPI.getGDataAPI().getGlobalVal(e.CUR_SERVER_INFO);
                            n.unkown = l.pskey ? l.pskey : l.skey,
                                n.skey = l.skey,
                                n.angel_uin = l.uin,
                                n.angel_key = l.sessionKey,
                                n.platfrom = u.platformValue,
                                n.time = Date.now(),
                                s.Get(t, n, a, (function(t) {
                                        var n = i.getJson(t);
                                        "0" !== n.result.value && o.showMsgBox(n.result.msg),
                                            c(n)
                                    }
                                ), (function(t) {
                                        o.showMsgBox("网络繁忙，请稍后再试！"),
                                        r && r(t)
                                    }
                                ))
                        }("blood_spirit_book", {
                            cmd: 1
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
