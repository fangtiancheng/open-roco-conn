System.register("chunks:///_virtual/StriveItemDataProxy.ts", ["cc", "./global.ts", "./AddStriveItemData.ts", "./Constants.ts", "./XML.ts"], (function(t) {
        var e, n, r, i, o;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    n = t.__global
                }
                , function(t) {
                    r = t.AddStriveItemData
                }
                , function(t) {
                    i = t.Constants
                }
                , function(t) {
                    o = t.XML
                }
            ],
            execute: function() {
                e._RF.push({}, "eac0dff59tCZLgslFrJhiWT", "StriveItemDataProxy", void 0);
                var s = t("StriveItemDataProxy", function() {
                    function t() {}
                    t.getInstance = function() {
                        return null == t.singleton && (t.key = !0,
                            t.singleton = new t,
                            t.init()),
                            t.singleton
                    }
                    ;
                    var e = t.prototype;
                    return e.singleton = function() {
                        if (!t.key)
                            throw new Error("单例,请用 getInstance() 取实例。");
                        t.key = !1
                    }
                        ,
                        t.init = function() {
                            var e, s, a = n.SysAPI.getGDataAPI().getGlobalVal(i.CONFS), u = new o(a[t.CONFIG_NAME]).data;
                            t._dic = new Map;
                            for (var c = 0; c < u.StriveItemDes.length; c++)
                                e = Number(u.StriveItemDes[c].id),
                                    (s = new r).GPA = Number(u.StriveItemDes[c].GPA),
                                    s.GPD = Number(u.StriveItemDes[c].GPD),
                                    s.GMA = Number(u.StriveItemDes[c].GMA),
                                    s.GMD = Number(u.StriveItemDes[c].GMD),
                                    s.GSP = Number(u.StriveItemDes[c].GSP),
                                    s.GHP = Number(u.StriveItemDes[c].GHP),
                                    s.type = Number(u.StriveItemDes[c].type),
                                    t._dic[e] = s
                        }
                        ,
                        e.makeStriveItem = function(e) {
                            return t._dic[e]
                        }
                        ,
                        t
                }());
                s.CONFIG_NAME = "striveItem_conf",
                    s.singleton = void 0,
                    s.key = !1,
                    s._dic = void 0,
                    e._RF.pop()
            }
        }
    }
));
