System.register("chunks:///_virtual/CommonEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseEvent.ts"], (function(n) {
        var t, e, o;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    e = n.cclegacy
                }
                , function(n) {
                    o = n.default
                }
            ],
            execute: function() {
                e._RF.push({}, "677fcdVmi5Hw5CTj4r4Adra", "CommonEvent", void 0);
                n("CommonEvent", function(n) {
                    function e(t, e, o, i) {
                        var u;
                        return void 0 === e && (e = null),
                        void 0 === o && (o = !1),
                            (u = n.call(this, t, o) || this).data = void 0,
                            u.data = e,
                            u
                    }
                    return t(e, n),
                        e
                }(o));
                e._RF.pop()
            }
        }
    }
));
