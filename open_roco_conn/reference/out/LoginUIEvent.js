System.register("chunks:///_virtual/LoginUIEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var n, t, i;
        return {
            setters: [function(e) {
                n = e.inheritsLoose
            }
                , function(e) {
                    t = e.cclegacy,
                        i = e.Event
                }
            ],
            execute: function() {
                t._RF.push({}, "8aaabRSMFJIYbHpaDR3rJxZ", "LoginUIEvent", void 0);
                var o = e("LoginUIEvent", function(e) {
                    function t(n, t, i, o) {
                        var r;
                        return void 0 === t && (t = null),
                        void 0 === i && (i = !1),
                            (r = e.call(this, n, i) || this).data = void 0,
                            r.data = t,
                            r
                    }
                    return n(t, e),
                        t
                }(i));
                o.RECOMMAND_REQ = "recommandRequest",
                    o.RANGE_REQ = "rangeRequest",
                    o.LOGIN_REQ = "loginRequest",
                    o.SPEED_IN = "speedIn",
                    o.FAST_LOGIN = "fastLogin",
                    t._RF.pop()
            }
        }
    }
));
