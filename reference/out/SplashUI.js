System.register("chunks:///_virtual/SplashUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n, r, o;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        r = t._decorator,
                        o = t.Component
                }
            ],
            execute: function() {
                var s;
                n._RF.push({}, "3c4dbeTrVdMa4yyv7sHnXDT", "SplashUI", void 0);
                var c = r.ccclass
                    , u = (r.property,
                    r.menu);
                t("default", c(s = u("AUI/SplashUI")(s = function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    return e(n, t),
                        n.prototype.start = function() {}
                        ,
                        n
                }(o)) || s) || s);
                n._RF.pop()
            }
        }
    }
));
