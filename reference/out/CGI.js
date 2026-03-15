System.register("chunks:///_virtual/CGI.ts", ["cc", "./DEFINE.ts", "./Xml2Json.ts", "./global.ts", "./Constants.ts", "./SpiritStorageApp.ts", "./StringUtil.ts"], (function(t) {
        var e, n, o, s, i, a, r;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    n = t.DEFINE
                }
                , function(t) {
                    o = t.Xml2Json
                }
                , function(t) {
                    s = t.__global
                }
                , function(t) {
                    i = t.Constants
                }
                , function(t) {
                    a = t.SpiritStorageApp
                }
                , function(t) {
                    r = t.StringUtil
                }
            ],
            execute: function() {
                e._RF.push({}, "060ebea48FPt5meGc+yfqeE", "CGI", void 0);
                t("CGI", function() {
                    function t() {}
                    return t.Get = function(t, e, o, s, i, a) {
                        void 0 === a && (a = {
                            method: "GET"
                        });
                        var r = "" + n.CGI_ROOT + t;
                        if (e) {
                            var c = "";
                            for (var u in e)
                                c += u + "=" + e[u] + "&";
                            r += "?" + (c = c.substring(0, c.length - 1))
                        }
                        this.Request(r, a, o, s, i)
                    }
                        ,
                        t.GenerateResult = function(t) {
                            t.result.code = parseInt(t.result.value)
                        }
                        ,
                        t.Request = function(t, e, n, o, i) {
                            var a = s.SysAPI.getUISysAPI().commUIManager;
                            a.createMiniLoading(),
                                fetch(t, e).then((function(t) {
                                        if (a.closeMiniLoading(),
                                            t.ok)
                                            switch (n) {
                                                case "json":
                                                    return t.json();
                                                case "blob":
                                                    return t.blob();
                                                case "text":
                                                    return t.text();
                                                default:
                                                    return t
                                            }
                                        else
                                            a.closeMiniLoading(),
                                                i(t)
                                    }
                                )).then((function(t) {
                                        o(t)
                                    }
                                ))
                        }
                        ,
                        t.CreateRole = function(t, e, n, s, i) {
                            var c = {
                                openId: r.getCookie("openId"),
                                accessToken: r.getCookie("accessToken"),
                                random: 1e3 * Math.random(),
                                angel_name: t,
                                angel_skin: e,
                                angel_sex: n,
                                platfrom_src: a.platformValue
                            };
                            this.Get("regist_new", c, "text", (function(t) {
                                    var e = o.getJson(t);
                                    s(e)
                                }
                            ), i)
                        }
                        ,
                        t.GameStroy = function(t, e, n) {
                            var r = s.SysAPI.getGDataAPI().getGlobalVal(i.CUR_SERVER_INFO)
                                , c = {
                                cmd: t,
                                unkown: r.pskey ? r.pskey : r.skey,
                                skey: r.skey,
                                platfrom: a.platformValue,
                                angel_uin: r.uin,
                                angel_key: r.sessionKey,
                                time: Date.now()
                            };
                            this.Get("light_demo", c, "text", (function(t) {
                                    var n = o.getJson(t);
                                    e(n)
                                }
                            ), n)
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
