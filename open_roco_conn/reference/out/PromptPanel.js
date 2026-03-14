System.register("chunks:///_virtual/PromptPanel.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./WindowBase.ts"], (function(t) {
        var n, e, o;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    o = t.WindowBase
                }
            ],
            execute: function() {
                e._RF.push({}, "3cb1557jxlBiaiiDA7fhhyS", "PromptPanel", void 0);
                t("PromptPanel", function(t) {
                    function e() {
                        return t.apply(this, arguments) || this
                    }
                    return n(e, t),
                        e.prototype.ishow = function() {
                            throw new Error("Method not implemented.")
                        }
                        ,
                        e
                }(o));
                e._RF.pop()
            }
        }
    }
));
