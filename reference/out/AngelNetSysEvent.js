System.register("chunks:///_virtual/AngelNetSysEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseEvent.ts"], (function(t) {
        var e, n, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    r = t.default
                }
            ],
            execute: function() {
                n._RF.push({}, "1f84fmw07JKq5sLdWVZVECG", "AngelNetSysEvent", void 0);
                var s = t("AngelNetSysEvent", function(t) {
                    function n(e, n, r) {
                        var s;
                        return void 0 === n && (n = !1),
                            (s = t.call(this, e, n) || this).currState = "",
                            s
                    }
                    return e(n, t),
                        n.prototype.getTcpID = function() {
                            return this.data
                        }
                        ,
                        n
                }(r));
                s.ON_STATE_CHANGE = "onStateChange",
                    s.NS_CONNETED = "nsConneted",
                    s.NS_CLOSED = "nsClosed",
                    s.NS_ERROR = "nsError",
                    n._RF.pop()
            }
        }
    }
));
