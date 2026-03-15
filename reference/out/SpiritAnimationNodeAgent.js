System.register("chunks:///_virtual/SpiritAnimationNodeAgent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./SpiritAnimationLoader.ts"], (function(t) {
        var n, i, o, e;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    o = t.AgentNode
                }
                , function(t) {
                    e = t.SpiritAnimationLoader
                }
            ],
            execute: function() {
                i._RF.push({}, "52ecacI2itNE6zJ7dHzsk4r", "SpiritAnimationNodeAgent", void 0);
                t("SpiritAnimationNodeAgent", function(t) {
                    function i() {
                        return t.apply(this, arguments) || this
                    }
                    n(i, t);
                    var o = i.prototype;
                    return o.load = function(t) {
                        (this.getComponent(e) || this.addComponent(e)).load(t)
                    }
                        ,
                        o.clear = function() {
                            var t;
                            null == (t = this.getComponent(e)) || t.clear()
                        }
                        ,
                        i
                }(o));
                i._RF.pop()
            }
        }
    }
));
