System.register("chunks:///_virtual/RichTextClickEventHandler.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var n, t, c, o;
        return {
            setters: [function(e) {
                n = e.inheritsLoose
            }
                , function(e) {
                    t = e.cclegacy,
                        c = e._decorator,
                        o = e.Component
                }
            ],
            execute: function() {
                var r;
                t._RF.push({}, "6bca802yqBCc7jEW7v56hz7", "RichTextClickEventHandler", void 0);
                var i = c.ccclass;
                c.property,
                    e("default", i("RichTextClickEventHandler")(r = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }
                        return n(t, e),
                            t.prototype.openUrl = function(e, n) {
                                console.log("RichText==openUrl==event=" + e + "==param==" + n),
                                null != n && window.open(n, "_blank")
                            }
                            ,
                            t
                    }(o)) || r);
                t._RF.pop()
            }
        }
    }
));
