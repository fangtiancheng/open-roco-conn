System.register("chunks:///_virtual/URLLoaderEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
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
                n._RF.push({}, "8b65bXeQ0pONKCaFJtPd//W", "URLLoaderEvent", void 0);
                var o = e("URLLoaderEvent", function(e) {
                    function n(t, n, r, o) {
                        return void 0 === r && (r = !1),
                        e.call(this, t, r) || this
                    }
                    return t(n, e),
                        n
                }(r));
                o.COMPLETE = "URLLoaderEvent.COMPLETE",
                    o.ERROR = "URLLoaderEvent.Error",
                    n._RF.pop()
            }
        }
    }
));
