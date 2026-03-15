System.register("chunks:///_virtual/IconQualityRes.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n, o, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        u = t.Node
                }
            ],
            execute: function() {
                o._RF.push({}, "049a3uJnL9GLL0qM5mlSN7k", "IconQualityRes", void 0);
                t("IconQualityRes", function(t) {
                    function o() {
                        return t.apply(this, arguments) || this
                    }
                    return e(o, t),
                        o.prototype.gotoAndStop = function(t) {}
                        ,
                        n(o, [{
                            key: "width",
                            set: function(t) {}
                        }, {
                            key: "height",
                            set: function(t) {}
                        }, {
                            key: "totalFrames",
                            get: function() {
                                return 1
                            }
                        }]),
                        o
                }(u));
                o._RF.pop()
            }
        }
    }
));
