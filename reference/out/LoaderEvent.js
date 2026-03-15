System.register("chunks:///_virtual/LoaderEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, n, r;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy,
                        r = e.Event
                }
            ],
            execute: function() {
                n._RF.push({}, "29cc0R/CWFBZbAmdULJGrHQ", "LoaderEvent", void 0);
                var o = e("LoaderEvent", function(e) {
                    function n(t, n, r, o) {
                        return void 0 === r && (r = !1),
                        e.call(this, t, r) || this
                    }
                    return t(n, e),
                        n
                }(r));
                o.OPEN = "LoaderEvent.OPEN",
                    o.COMPLETE = "LoaderEvent.COMPLETE",
                    n._RF.pop()
            }
        }
    }
));
