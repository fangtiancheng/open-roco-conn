System.register("chunks:///_virtual/ConsumeItemProxy.ts", ["cc", "./BagDataProxy.ts", "./NetActionProxy.ts"], (function(t) {
        var e, n, o;
        return {
            setters: [function(t) {
                e = t.cclegacy
            }
                , function(t) {
                    n = t.BagDataProxy
                }
                , function(t) {
                    o = t.NetActionProxy
                }
            ],
            execute: function() {
                e._RF.push({}, "00912rzJexBu48q+TqQj6a9", "ConsumeItemProxy", void 0);
                t("ConsumeItemProxy", function() {
                    function t() {}
                    var e = t.prototype;
                    return e.dispose = function() {}
                        ,
                        e.consume = function(t, e, c) {
                            var r = n.selectedSpirit.id
                                , u = n.selectedIndex + 1;
                            o.useItem(r, u, t, e, c)
                        }
                        ,
                        t
                }());
                e._RF.pop()
            }
        }
    }
));
