System.register("chunks:///_virtual/SimpleCommand.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./Notifier.ts"], (function(t) {
        var e, n, i;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    i = t.Notifier
                }
            ],
            execute: function() {
                n._RF.push({}, "58c3264NRhDrKcIXVzS9FR4", "SimpleCommand", void 0);
                t("SimpleCommand", function(t) {
                    function n() {
                        return t.apply(this, arguments) || this
                    }
                    return e(n, t),
                        n.prototype.execute = function(t) {}
                        ,
                        n
                }(i));
                n._RF.pop()
            }
        }
    }
));
