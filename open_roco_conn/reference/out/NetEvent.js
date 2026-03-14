System.register("chunks:///_virtual/NetEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(_) {
        var S, t, E;
        return {
            setters: [function(_) {
                S = _.inheritsLoose
            }
                , function(_) {
                    t = _.cclegacy,
                        E = _.Event
                }
            ],
            execute: function() {
                t._RF.push({}, "c109et+1IJMjqxG6DpZX+x4", "NetEvent", void 0);
                var e = _("NetEvent", function(_) {
                    function t(S, t, E, e) {
                        var I;
                        return void 0 === E && (E = !1),
                            (I = _.call(this, S, E) || this).data = void 0,
                            I.data = t,
                            I
                    }
                    return S(t, _),
                        t
                }(E));
                e.RET_GET_SPIRITS_INFO = "RET_GET_SPIRITS_INFO",
                    e.RET_SWITCH_SKILL_CHECK = "RET_SWITCH_SKILL_CHECK",
                    e.RET_WAKEUP_SKILLS = "RET_WAKEUP_SKILLS",
                    e.SEND_GET_SPIRITS_INFO = "SEND_GET_SPIRITS_INFO",
                    e.SEND_SWITCH_SKILL = "SEND_SWITCH_SKILL",
                    e.SEND_GET_WAKEUP_SKILLS = "SEND_GET_WAKEUP_SKILLS",
                    t._RF.pop()
            }
        }
    }
));
