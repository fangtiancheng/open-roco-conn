System.register("chunks:///_virtual/CombatEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseEvent.ts"], (function(t) {
        var n, e, o;
        return {
            setters: [function(t) {
                n = t.inheritsLoose
            }
                , function(t) {
                    e = t.cclegacy
                }
                , function(t) {
                    o = t.default
                }
            ],
            execute: function() {
                e._RF.push({}, "db81dVro0VASaS355dUeKU8", "CombatEvent", void 0);
                var i = t("CombatEvent", function(t) {
                    function e(n, e, o) {
                        return void 0 === e && (e = !1),
                        t.call(this, n, e) || this
                    }
                    return n(e, t),
                        e
                }(o));
                i.ON_STATE_END = "onStateEnd",
                    i.ON_SERVER_DATA = "onServerData",
                    i.ON_USE_SKILL = "onUseSkill",
                    i.ON_VIDEO_END = "onVideoEnd",
                    i.ON_RESULT_END = "onResultEnd",
                    e._RF.pop()
            }
        }
    }
));
