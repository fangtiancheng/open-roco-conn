System.register("chunks:///_virtual/GetSpiritBagAction.ts", ["cc", "./global.ts", "./P_FreeRequest.ts", "./P_UInt.ts", "./WindowMode.ts", "./BagDataProxy.ts", "./BagDataProcessor.ts", "./ServerKeywords.ts"], (function(t) {
        var n, e, i, o, r, a, c, s;
        return {
            setters: [function(t) {
                n = t.cclegacy
            }
                , function(t) {
                    e = t.__global
                }
                , function(t) {
                    i = t.P_FreeRequest
                }
                , function(t) {
                    o = t.P_UInt
                }
                , function(t) {
                    r = t.WindowMode
                }
                , function(t) {
                    a = t.BagDataProxy
                }
                , function(t) {
                    c = t.BagDataProcessor
                }
                , function(t) {
                    s = t.ServerKeywords
                }
            ],
            execute: function() {
                n._RF.push({}, "2e597yiLS5BgLD/ViEXEle+", "GetSpiritBagAction", void 0);
                t("GetSpiritBagAction", function() {
                    function t() {}
                    var n = t.prototype;
                    return n.send = function(t) {
                        e.UI.createMiniLoading(),
                            new i(s.SEND_SPIRIT_BAG,new o,null,this.onReceive.bind(this)).send()
                    }
                        ,
                        n.onReceive = function(t) {
                            e.UI.closeMiniLoading(),
                                "string" == typeof (t = c.parse(t)) ? e.UI.alert("", t, r.OK, null) : Array.isArray(t) && (a.data = t)
                        }
                        ,
                        t
                }());
                n._RF.pop()
            }
        }
    }
));
