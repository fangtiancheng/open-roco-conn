System.register("chunks:///_virtual/CatchSuccessPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowBase.ts"], (function(e) {
        var n, t, c;
        return {
            setters: [function(e) {
                n = e.inheritsLoose
            }
                , function(e) {
                    t = e.cclegacy
                }
                , function(e) {
                    c = e.WindowBase
                }
            ],
            execute: function() {
                t._RF.push({}, "c6e8b+XPcFGOpdndfcIgAWp", "CatchSuccessPanel", void 0);
                e("CatchSuccessPanel", function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    return n(t, e),
                        t.prototype.ishow = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        t
                }(c));
                t._RF.pop()
            }
        }
    }
));
