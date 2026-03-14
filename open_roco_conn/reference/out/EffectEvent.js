System.register("chunks:///_virtual/EffectEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, n, c;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy,
                        c = e.Event
                }
            ],
            execute: function() {
                n._RF.push({}, "f5e4fc3aLVEEr3miKJ2e+U0", "EffectEvent", void 0),
                    e("EffectEvent", function(e) {
                        function n(t, n, c) {
                            return void 0 === n && (n = !1),
                            e.call(this, t, n) || this
                        }
                        return t(n, e),
                            n
                    }(c)).EFFECT_ALL_END = "EFFECT_ALL_END",
                    n._RF.pop()
            }
        }
    }
));
