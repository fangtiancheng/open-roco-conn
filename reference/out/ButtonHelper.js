System.register("chunks:///_virtual/ButtonHelper.ts", ["cc", "./AgentNode.ts", "./FilterFactory.ts"], (function(e) {
        var t, n, c;
        return {
            setters: [function(e) {
                t = e.cclegacy
            }
                , function(e) {
                    n = e.AgentNode
                }
                , function(e) {
                    c = e.FilterFactory
                }
            ],
            execute: function() {
                t._RF.push({}, "5a02cCg+lREyJdy4etb6g6O", "ButtonHelper", void 0);
                e("ButtonHelper", function() {
                    function e() {}
                    return e.setButtonGray = function(e) {
                        null != e && (e.filters = [c.createGrayFilter()],
                            e.grayscale = !0,
                            e.enableTag = !1,
                        e instanceof n && (e.mouseEnabled = !1,
                            e.enabled = !1))
                    }
                        ,
                        e.setButton = function(e) {
                            null != e && (e.filters = [],
                                e.grayscale = !1,
                                e.enableTag = !0,
                            e instanceof n && (e.mouseEnabled = !0,
                                e.enabled = !0))
                        }
                        ,
                        e
                }());
                t._RF.pop()
            }
        }
    }
));
