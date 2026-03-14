System.register("chunks:///_virtual/RectEffect.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts"], (function(t) {
        var e, n, c, o;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        c = t.Node
                }
                , function(t) {
                    o = t.EventDispatcher
                }
            ],
            execute: function() {
                n._RF.push({}, "d4c51VdO1BLSosnGGCqCWpr", "RectEffect", void 0);
                t("RectEffect", function(t) {
                    function n() {
                        var e;
                        return (e = t.call(this) || this).maskMc = void 0,
                            e.w = 8,
                            e.len = 0,
                            e.num = 0,
                            e
                    }
                    e(n, t);
                    var o = n.prototype;
                    return o.createEffect = function(t) {}
                        ,
                        o.getRect = function(t, e) {
                            return new c
                        }
                        ,
                        o.slowactionEffect = function(t) {}
                        ,
                        o.enterFrame = function(t) {}
                        ,
                        o.allEffectEnd = function() {}
                        ,
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
