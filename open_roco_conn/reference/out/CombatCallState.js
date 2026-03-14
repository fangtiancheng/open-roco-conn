System.register("chunks:///_virtual/CombatCallState.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./CombatStateBase.ts", "./StateEvent.ts"], (function(t) {
        var e, n, o, a;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy
                }
                , function(t) {
                    o = t.CombatStateBase
                }
                , function(t) {
                    a = t.StateEvent
                }
            ],
            execute: function() {
                n._RF.push({}, "a510cOhAWFANZGn2eakUy6t", "CombatCallState", void 0);
                t("CombatCallState", function(t) {
                    function n() {
                        return t.call(this) || this
                    }
                    return e(n, t),
                        n.prototype.execute = function() {
                            console.info(this.constructor.name + " == execute"),
                                CONFIG.DEBUG,
                                console.log("state [CombatCallState] ", "*触发战斗！"),
                                this.dispatchEvent(new a(a.STATE_EVENT_END))
                        }
                        ,
                        n
                }(o));
                n._RF.pop()
            }
        }
    }
));
