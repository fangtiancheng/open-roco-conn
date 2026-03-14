System.register("chunks:///_virtual/StateEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n, a, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose,
                    n = t.createClass
            }
                , function(t) {
                    a = t.cclegacy,
                        r = t.Event
                }
            ],
            execute: function() {
                a._RF.push({}, "1f8fcplCIVMAou9r3A1JkE5", "StateEvent", void 0);
                var i = t("StateEvent", function(t) {
                    function a(e, n, a, r) {
                        var i;
                        return void 0 === n && (n = null),
                        void 0 === a && (a = !1),
                            (i = t.call(this, e, a) || this)._data = void 0,
                            i._data = n,
                            i
                    }
                    return e(a, t),
                        n(a, [{
                            key: "data",
                            get: function() {
                                return this._data
                            }
                        }]),
                        a
                }(r));
                i.ALL_VIDEO_END = "ALL_VIDEO_END",
                    i.STATE_EVENT_END = "STATE_EVENT_END",
                    a._RF.pop()
            }
        }
    }
));
