System.register("chunks:///_virtual/CGIEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(n) {
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
                t._RF.push({}, "e202cswgKBDxKtnvHPnrAy6", "CGIEvent", void 0);
                var i = n("CGIEvent", function(n) {
                    function t(e, t, o) {
                        var i;
                        return void 0 === t && (t = null),
                        void 0 === o && (o = null),
                            (i = n.call(this, e, !1) || this).msg = void 0,
                            i.data = void 0,
                            i.sendData = void 0,
                            i.sendType = void 0,
                            i.sendType = t,
                            i.sendData = o,
                            i
                    }
                    return e(t, n),
                        t
                }(o));
                i.GOT_ERROR = "CGIEvent.goterror",
                    i.COMPLETE = "CGIEvent.COMPLETE",
                    t._RF.pop()
            }
        }
    }
));
