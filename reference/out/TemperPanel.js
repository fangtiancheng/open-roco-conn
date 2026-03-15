System.register("chunks:///_virtual/TemperPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowBase.ts"], (function(e) {
        var n, t, o;
        return {
            setters: [function(e) {
                n = e.inheritsLoose
            }
                , function(e) {
                    t = e.cclegacy
                }
                , function(e) {
                    o = e.WindowBase
                }
            ],
            execute: function() {
                t._RF.push({}, "87e1cvjoLxP1r/s+8LaFzH6", "TemperPanel", void 0);
                e("TemperPanel", function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return n(t, e),
                        t.prototype.ishow = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        t
                }(o));
                t._RF.pop()
            }
        }
    }
));
