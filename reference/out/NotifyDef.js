System.register("chunks:///_virtual/NotifyDef.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseEvent.ts"], (function(_) {
        var D, A, N;
        return {
            setters: [function(_) {
                D = _.inheritsLoose
            }
                , function(_) {
                    A = _.cclegacy
                }
                , function(_) {
                    N = _.default
                }
            ],
            execute: function() {
                A._RF.push({}, "24fa8P0hR5GrKmoV8zi/OZW", "NotifyDef", void 0);
                _("NotifyEvent", function(_) {
                    function A() {
                        return _.apply(this, arguments) || this
                    }
                    return D(A, _),
                        A
                }(N));
                var t = _("NotifyDef", (function() {}
                ));
                t.NN_V_PRELOAD = "NotifyDef.PreloadRes",
                    t.ON_COMBAT_RES_PRELOAD_DONE = "NotifyDef.ON_COMBAT_RES_PRELOAD_DONE",
                    t.MAIN_UI_SPIRIT_DISPLAY_CHANGED = "NotifyDef.MAIN_UI_SPIRIT_DISPLAY_CHANGED",
                    t.MAIN_UI_DIAMOND_CHANGED = "NotifyDef.MAIN_UI_DIAMOND_CHANGED",
                    t.MAIN_UI_UPDATE_DIAMOND = "NotifyDef.MAIN_UI_UPDATE_DIAMOND",
                    t.MAIN_UI_GUARDIANPET_DISPLAY_CHANGED = "NotifyDef.MAIN_UI_GUARDIANPET_DISPLAY_CHANGED",
                    t.SPIRIT_BAG_UPDATE = "NotifyDef.SPIRIT_BAG_UPDATE",
                    A._RF.pop()
            }
        }
    }
));
