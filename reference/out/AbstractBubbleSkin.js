System.register("chunks:///_virtual/AbstractBubbleSkin.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts"], (function(t) {
        var n, e, i, r, o;
        return {
            setters: [function(t) {
                n = t.inheritsLoose,
                    e = t.createClass
            }
                , function(t) {
                    i = t.cclegacy,
                        r = t.Rect
                }
                , function(t) {
                    o = t.AgentNode
                }
            ],
            execute: function() {
                i._RF.push({}, "f92a1FHzppJOoH/2j+IvY0F", "AbstractBubbleSkin", void 0);
                t("AbstractBubbleSkin", function(t) {
                    function i() {
                        var n;
                        return (n = t.call(this) || this)._bg = void 0,
                            n._arrow = void 0,
                            n.init(),
                            n
                    }
                    n(i, t);
                    var o = i.prototype;
                    return o.init = function() {}
                        ,
                        o.setSize = function(t, n) {
                            this.width = t,
                                this.height = n
                        }
                        ,
                        o.onRender = function(t) {}
                        ,
                        o.hasRender = function() {
                            return !1
                        }
                        ,
                        o.unload = function() {}
                        ,
                        e(i, [{
                            key: "contentRect",
                            get: function() {
                                return new r(this.x,this.y,this.x + this.width,this.y + this.height)
                            }
                        }, {
                            key: "borderWidth",
                            get: function() {
                                return 0
                            }
                        }, {
                            key: "borderHeight",
                            get: function() {
                                return 0
                            }
                        }]),
                        i
                }(o));
                i._RF.pop()
            }
        }
    }
));
