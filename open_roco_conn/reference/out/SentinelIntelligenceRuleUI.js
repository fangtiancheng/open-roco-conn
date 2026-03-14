System.register("chunks:///_virtual/SentinelIntelligenceRuleUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts"], (function(e) {
        var n, t, i, o, r, l, c, s, a;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    r = e.cclegacy,
                        l = e._decorator,
                        c = e.Node,
                        s = e.NodeEventType
                }
                , function(e) {
                    a = e.GameUI
                }
            ],
            execute: function() {
                var u, p, f, h;
                r._RF.push({}, "354e0O4UmdNd4tUyJTDh+Ti", "SentinelIntelligenceRuleUI", void 0);
                var d = l.ccclass
                    , y = l.property;
                e("SentinelIntelligenceRuleUI", (u = y(c),
                d((h = n((f = function(e) {
                    function n() {
                        for (var n, t = arguments.length, r = new Array(t), l = 0; l < t; l++)
                            r[l] = arguments[l];
                        return n = e.call.apply(e, [this].concat(r)) || this,
                            i(n, "closeBtn", h, o(n)),
                            n
                    }
                    t(n, e);
                    var r = n.prototype;
                    return r.onLoad = function() {
                        this.closeBtn.on(s.TOUCH_END, this.onCloseBtn, this)
                    }
                        ,
                        r.onCloseBtn = function() {
                            this.node.active = !1
                        }
                        ,
                        n
                }(a)).prototype, "closeBtn", [u], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    p = f)) || p));
                r._RF.pop()
            }
        }
    }
));
