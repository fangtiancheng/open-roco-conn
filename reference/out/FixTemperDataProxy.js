System.register("chunks:///_virtual/FixTemperDataProxy.ts", ["cc", "./ActivityAPI.ts", "./CGI2.ts", "./global.ts", "./NetResult.ts"], (function(i) {
        var n, t, e, a, r;
        return {
            setters: [function(i) {
                n = i.cclegacy
            }
                , function(i) {
                    t = i.ActivityAPI
                }
                , function(i) {
                    e = i.CGI2
                }
                , function(i) {
                    a = i.__global
                }
                , function(i) {
                    r = i.NetResult
                }
            ],
            execute: function() {
                n._RF.push({}, "e1465z8xCxBXYmXtOYCeXNF", "FixTemperDataProxy", void 0);
                var s = i("FixTemperDataProxy", function() {
                    function i(i) {
                        throw new Error("BagDataProxy is static class and can not be instantiated.")
                    }
                    return i.initialize = function() {}
                        ,
                        i.query = function() {
                            e.call("amend_nature?cmd=2" + t.getSkeyStr() + t.getPlatfromStr(), t.delegateFunc(i.onDataReceived.bind(this), null), 2, !1)
                        }
                        ,
                        i.initSpList = function() {
                            null != i._spids && null != i._spids && (i._idIndex.clear(),
                                i._spids.forEach((function(n) {
                                        i._idIndex.set(n, 1)
                                    }
                                )))
                        }
                        ,
                        i.findFixTemperById = function(n) {
                            if (null == i._idIndex || null == i._idIndex)
                                return !1;
                            var t = i._idIndex.get(n);
                            return null != t && null != t
                        }
                        ,
                        i.checkFixTemper = function(n) {
                            return i.initSpList(),
                            0 != a.MainRoleData.isVip && 0 == i.findFixTemperById(n)
                        }
                        ,
                        i.onDataReceived = function(n, t, e) {
                            var a = n;
                            if (new r(n).value >= 0)
                                switch (t) {
                                    case 2:
                                        i._spids = [];
                                        for (var s = 0; s < a.id.length; s++)
                                            i._spids.push(Number(a.id[s]));
                                        i.initSpList()
                                }
                        }
                        ,
                        i.dispose = function() {
                            i.initialize()
                        }
                        ,
                        i
                }());
                s._spids = void 0,
                    s._idIndex = new Map,
                    n._RF.pop()
            }
        }
    }
));
