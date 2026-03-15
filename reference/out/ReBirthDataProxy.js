System.register("chunks:///_virtual/ReBirthDataProxy.ts", ["cc", "./Constants.ts", "./ActivityAPI.ts", "./CGI2.ts", "./global.ts", "./RebirthConfig.ts", "./NetResult.ts", "./XML.ts", "./FixTemperDataProxy.ts"], (function(t) {
        var e, i, r, n, a, o, s, c, u;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    i = t.Constants
                }
                , function(t) {
                    r = t.ActivityAPI
                }
                , function(t) {
                    n = t.CGI2
                }
                , function(t) {
                    a = t.__global
                }
                , function(t) {
                    o = t.RebirthConfig
                }
                , function(t) {
                    s = t.NetResult
                }
                , function(t) {
                    c = t.XML
                }
                , function(t) {
                    u = t.FixTemperDataProxy
                }
            ],
            execute: function() {
                e._RF.push({}, "43ddae2fy9Bf4Md218CxCJ2", "ReBirthDataProxy", void 0);
                var l = t("ReBirthDataProxy", function() {
                    function t(t) {
                        throw new Error("BagDataProxy is static class and can not be instantiated.")
                    }
                    return t.initialize = function() {}
                        ,
                        t.query = function() {
                            t.initSpList(),
                                n.call("three_color_rebirth?cmd=0" + r.getSkeyStr() + r.getPlatfromStr(), r.delegateFunc(t.onDataReceived.bind(this), null), 0, !1)
                        }
                        ,
                        t.onDataReceived = function(e, i, r) {
                            var n = e;
                            if (new s(e).value >= 0)
                                switch (i) {
                                    case 0:
                                        t._rebirth = n.rebirth,
                                            t.createMergedMap()
                                }
                            u.query()
                        }
                        ,
                        t.createMergedMap = function() {
                            if (null != t._rebirth && null != t._rebirth && null != t._spList && null != t._spList) {
                                if (t._rebirth.length !== t._spList.length)
                                    throw new Error("两个数组的长度必须相同");
                                t._mergedMap = new Map;
                                for (var e = 0; e < t._spList.length; e++) {
                                    var i = t._spList[e]
                                        , r = t._rebirth[e];
                                    t._mergedMap.set(i.id, {
                                        data: i,
                                        rebirth: r
                                    })
                                }
                            }
                        }
                        ,
                        t.initSpList = function() {
                            if (null == t._spList || null == t._spList) {
                                var e = a.SysAPI.getGDataAPI().getGlobalVal(i.CONFS);
                                if (e) {
                                    for (var r = new c(e[o.CONF_NAME]).data, n = 0; n < r.SpiritBook.length; n++)
                                        "12" == r.SpiritBook[n].id && (t._spList = r.SpiritBook[n].groups.group.spirit);
                                    t.createMergedMap()
                                }
                            }
                        }
                        ,
                        t.checkRebirthById = function(e) {
                            if (null == t._mergedMap || null == t._mergedMap)
                                return !1;
                            var i = t._mergedMap.get(e.toString());
                            return null != i && null != i && !(!i || 0 != Number(i.rebirth))
                        }
                        ,
                        t.checkRebirth = function(e, i) {
                            return t.initSpList(),
                                !!t.checkRebirthById(e)
                        }
                        ,
                        t.dispose = function() {
                            t.initialize()
                        }
                        ,
                        t
                }());
                l._rebirth = void 0,
                    l._spList = void 0,
                    l._mergedMap = new Map,
                    e._RF.pop()
            }
        }
    }
));
