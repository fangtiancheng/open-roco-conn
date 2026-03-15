System.register("chunks:///_virtual/SpiritAnimationNode.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./NodeExtend.ts", "./SpiritAnimationLoader.ts"], (function(t) {
        var n, i, o, e;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    i = t.cclegacy
                }
                , function(t) {
                    o = t.NodeExtend
                }
                , function(t) {
                    e = t.SpiritAnimationLoader
                }
            ],
            execute: function() {
                i._RF.push({}, "ccb7eyeNgZG1IhgEu+u+4Tj", "SpiritAnimationNode", void 0);
                t("SpiritAnimationNode", function(t) {
                    function i(n) {
                        var i;
                        return void 0 === n && (n = 0),
                            i = t.call(this) || this,
                        null != n && null != n && "number" == typeof n && n > 0 && i.load(n),
                            i
                    }
                    return n(i, t),
                        i.prototype.load = function(t) {
                            (this.getComponent(e) || this.addComponent(e)).load(t)
                        }
                        ,
                        i
                }(o));
                i._RF.pop()
            }
        }
    }
));
