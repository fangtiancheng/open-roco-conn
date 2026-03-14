System.register("chunks:///_virtual/SecurityErrorEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ErrorEvent.ts"], (function(r) {
        var t, e, n;
        return {
            setters: [function(r) {
                t = r.inheritsLoose
            }
                , function(r) {
                    e = r.cclegacy
                }
                , function(r) {
                    n = r.ErrorEvent
                }
            ],
            execute: function() {
                e._RF.push({}, "f4a07dXuGtHlKbpLjmv+h5/", "SecurityErrorEvent", void 0),
                    r("SecurityErrorEvent", function(r) {
                        function e(t, e, n, o) {
                            return void 0 === n && (n = !1),
                            void 0 === o && (o = !1),
                            r.call(this, t, n, o) || this
                        }
                        return t(e, r),
                            e
                    }(n)).SECURITY_ERROR = "SecurityErrorEvent.SECURITY_ERROR",
                    e._RF.pop()
            }
        }
    }
));
