System.register("chunks:///_virtual/VideoEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(n) {
        var e, t, o;
        return {
            setters: [function(n) {
                e = n.inheritsLoose
            }
                , function(n) {
                    t = n.cclegacy,
                        o = n.Event
                }
            ],
            execute: function() {
                t._RF.push({}, "c05f9YwUYBDuLJj/NdbTmGD", "VideoEvent", void 0);
                var i = n("VideoEvent", function(n) {
                    function t(e, t, o) {
                        return void 0 === t && (t = !1),
                        n.call(this, e, t) || this
                    }
                    return e(t, n),
                        t
                }(o));
                i.ON_SEG_END = "onSegEnd",
                    i.ON_SVP_END = "onSVPEnd",
                    t._RF.pop()
            }
        }
    }
));
