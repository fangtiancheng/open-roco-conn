System.register("chunks:///_virtual/WindowEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseEvent.ts"], (function(n) {
        var i, t, o;
        return {
            setters: [function(n) {
                i = n.inheritsLoose
            }
                , function(n) {
                    t = n.cclegacy
                }
                , function(n) {
                    o = n.default
                }
            ],
            execute: function() {
                t._RF.push({}, "448b2U1/T1IWJZIhSnzh02w", "WindowEvent", void 0);
                var e = n("WindowEvent", function(n) {
                    function t(i, t, o) {
                        return void 0 === t && (t = !1),
                        n.call(this, i, t) || this
                    }
                    return i(t, n),
                        t
                }(o));
                e.INITIALIZING = "WindowInitializing",
                    e.INITIALIZED = "WindowInitialized",
                    e.CLOSING = "WindowClosing",
                    e.CLOSED = "WindowClosed",
                    e.SHOW = "WindowShow",
                    e.HIDE = "WindowHide",
                    t._RF.pop()
            }
        }
    }
));
