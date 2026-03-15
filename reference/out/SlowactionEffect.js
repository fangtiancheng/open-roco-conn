System.register("chunks:///_virtual/SlowactionEffect.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventDispatcher.ts", "./EffectEvent.ts"], (function(t) {
        var n, e, c, i, o;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy,
                        c = t.Event
                }
                , function(t) {
                    i = t.EventDispatcher
                }
                , function(t) {
                    o = t.EffectEvent
                }
            ],
            execute: function() {
                e._RF.push({}, "05934mn2n5BCLiErtdQs8lt", "SlowactionEffect", void 0);
                t("SlowactionEffect", function(t) {
                    function e() {
                        var n;
                        return (n = t.call(this) || this).type = 0,
                            n.endY = 0,
                            n
                    }
                    n(e, t);
                    var i = e.prototype;
                    return i.createEffect = function(t, n) {}
                        ,
                        i.enterFrame = function(t) {}
                        ,
                        i.allEffectEnd = function() {
                            this.dispatchEvent(new c(o.EFFECT_ALL_END))
                        }
                        ,
                        e
                }(i));
                e._RF.pop()
            }
        }
    }
));
