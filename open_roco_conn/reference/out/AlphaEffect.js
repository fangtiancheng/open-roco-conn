System.register("chunks:///_virtual/AlphaEffect.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts"], (function(t) {
        var e, n, c;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    c = t.EventDispatcher
                }
            ],
            execute: function() {
                n._RF.push({}, "36096z2aQtAGrxcZTwDh8hy", "AlphaEffect", void 0);
                t("AlphaEffect", function(t) {
                    function n() {
                        var e;
                        return (e = t.call(this) || this).type = 0,
                            e
                    }
                    e(n, t);
                    var c = n.prototype;
                    return c.createEffect = function(t, e) {}
                        ,
                        c.enterFrame = function(t) {}
                        ,
                        c.allEffectEnd = function() {}
                        ,
                        n
                }(c));
                n._RF.pop()
            }
        }
    }
));
