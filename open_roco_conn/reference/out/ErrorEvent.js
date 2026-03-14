System.register("chunks:///_virtual/ErrorEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseEvent.ts"], (function(r) {
        var t, e, n;
        return {
            setters: [function(r) {
                t = r.inheritsLoose
            }
                , function(r) {
                    e = r.cclegacy
                }
                , function(r) {
                    n = r.default
                }
            ],
            execute: function() {
                e._RF.push({}, "1cdaaOrvr5Hz7sJ/G4ebMPV", "ErrorEvent", void 0),
                    r("ErrorEvent", function(r) {
                        function e(t, e, n) {
                            var o;
                            return void 0 === e && (e = !1),
                                (o = r.call(this, t, e) || this).text = "",
                                o
                        }
                        return t(e, r),
                            e
                    }(n)).ERROR = "ErrorEvent.ERROR",
                    e._RF.pop()
            }
        }
    }
));
