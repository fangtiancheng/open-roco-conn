System.register("chunks:///_virtual/FrameEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
        var e, n, r;
        return {
            setters: [function(t) {
                e = t.inheritsLoose
            }
                , function(t) {
                    n = t.cclegacy,
                        r = t.Event
                }
            ],
            execute: function() {
                n._RF.push({}, "56537tY+m1OnKXsOQpiJkqB", "FrameEvent", void 0),
                    t("default", function(t) {
                        function n(e, n) {
                            return void 0 === n && (n = !1),
                            t.call(this, e, n) || this
                        }
                        return e(n, t),
                            n.prototype.clone = function() {
                                return new n(this.type,this.bubbles)
                            }
                            ,
                            n
                    }(r)).ENTER_FRAME = "FrameEvent.ENTER_FRAME",
                    n._RF.pop()
            }
        }
    }
));
