System.register("chunks:///_virtual/NodeAdapter.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, i, o, n, h, s, d;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy,
                        o = t._decorator,
                        n = t.view,
                        h = t.screen,
                        s = t.UITransform,
                        d = t.Component
                }
            ],
            execute: function() {
                var r;
                i._RF.push({}, "b1da3FgtvpMq4v90h+7axOS", "NodeAdapter", void 0);
                var w = o.ccclass;
                o.property,
                    t("NodeAdapter", w("NodeAdapter")(r = function(t) {
                        function i() {
                            return t.apply(this, arguments) || this
                        }
                        return e(i, t),
                            i.prototype.setAdapter = function() {
                                var t = n.getDesignResolutionSize()
                                    , e = Math.min(h.windowSize.width / t.width, h.windowSize.height / t.height)
                                    , i = t.width * e
                                    , o = t.height * e
                                    , d = (Math.max(h.windowSize.width / i, h.windowSize.height / o),
                                h.windowSize.width / i)
                                    , r = h.windowSize.height / o
                                    , w = (t.width,
                                t.height * r);
                                this.node.setPosition(this.node.getPosition().x, w);
                                var a = h.windowSize.height / h.windowSize.width
                                    , c = t.width * a;
                                this.node.setPosition(this.node.getPosition().x, c / 2 - this.node.getComponent(s).height / 2),
                                    console.error("setPosition=" + this.node.getPosition().y)
                            }
                            ,
                            i
                    }(d)) || r);
                i._RF.pop()
            }
        }
    }
));
