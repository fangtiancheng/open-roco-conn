System.register("chunks:///_virtual/FilterFactory.ts", ["cc", "./AgentNode.ts"], (function(e) {
        var t, n;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.AgentNode
                }
            ],
            execute: function() {
                t._RF.push({}, "fa976K9NypLXbvUUYTZ7/LV", "FilterFactory", void 0);
                e("FilterFactory", function() {
                    function e() {}
                    return e.createGrayFilter = function(e, t, n, r) {}
                        ,
                        e.setAshingFilter = function(t, r) {
                            null != t && (r ? (t.filters = [],
                                t.grayscale = !1) : (t.filters = [e.createGrayFilter()],
                                t.grayscale = !0),
                                t.enableTag = r,
                            t instanceof n && (t.mouseEnabled = r,
                                t.enabled = r))
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
