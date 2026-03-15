System.register("chunks:///_virtual/AniEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(n) {
        var t, e, r, o, i;
        return {
            setters: [function(n) {
                t = n.inheritsLoose
            }
                , function(n) {
                    e = n.cclegacy,
                        r = n._decorator,
                        o = n.Event,
                        i = n.Component
                }
            ],
            execute: function() {
                var c;
                e._RF.push({}, "5538b9SJuJBtansSbRbm3Sy", "AniEvent", void 0);
                var u = r.ccclass;
                r.property,
                    n("AniEvent", u("AniEvent")(c = function(n) {
                        function e() {
                            return n.apply(this, arguments) || this
                        }
                        t(e, n);
                        var r = e.prototype;
                        return r.start = function() {}
                            ,
                            r.update = function(n) {}
                            ,
                            r.FrameEvent1111 = function() {
                                var n = new o("11111111111",!0);
                                this.node.dispatchEvent(n)
                            }
                            ,
                            e
                    }(i)) || c);
                e._RF.pop()
            }
        }
    }
));
