System.register("chunks:///_virtual/ResEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n, s, u;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    s = t.cclegacy,
                        u = t.Event
                }
            ],
            execute: function() {
                s._RF.push({}, "f457fHuxNFMgK3tQxc/Buwk", "ResEvent", void 0);
                var i = t("ResEvent", function(t) {
                    function s(e, n, s, u) {
                        var i;
                        return void 0 === n && (n = null),
                        void 0 === s && (s = !1),
                            (i = t.call(this, e, s) || this)._data = void 0,
                            i._data = n,
                            i
                    }
                    return e(s, t),
                        n(s, [{
                            key: "data",
                            get: function() {
                                return this._data
                            }
                        }]),
                        s
                }(u));
                i.CONFIG_DONE = "ResEvent.CONFIG_DONE",
                    i.GAME_RES_PKG_DONE = "ResEvent.GAME_RES_PKG_DONE",
                    i.ALL_RES_DONE = "ResEvent.ALL_RES_DONE",
                    s._RF.pop()
            }
        }
    }
));
