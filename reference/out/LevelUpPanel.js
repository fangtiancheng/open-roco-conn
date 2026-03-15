System.register("chunks:///_virtual/LevelUpPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowBase.ts"], (function(e) {
        var n, t, o, u;
        return {
            setters: [function(e) {
                n = e.inheritsLoose,
                    t = e.createClass
            }
                , function(e) {
                    o = e.cclegacy
                }
                , function(e) {
                    u = e.WindowBase
                }
            ],
            execute: function() {
                o._RF.push({}, "9c7bcMos5RJY5wabBwegll9", "LevelUpPanel", void 0);
                e("LevelUpPanel", function(e) {
                    function o() {
                        return e.apply(this, arguments) || this
                    }
                    n(o, e);
                    var u = o.prototype;
                    return u.onSure = function(e) {}
                        ,
                        u.ishow = function() {}
                        ,
                        u.getGuideTarget = function(e) {
                            return null
                        }
                        ,
                        t(o, [{
                            key: "data",
                            set: function(e) {}
                        }]),
                        o
                }(u));
                o._RF.pop()
            }
        }
    }
));
