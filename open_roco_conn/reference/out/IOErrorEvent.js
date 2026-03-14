System.register("chunks:///_virtual/IOErrorEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(r) {
        var t, e, n;
        return {
            setters: [function(r) {
                t = r.inheritsLoose
            }
                , function(r) {
                    e = r.cclegacy,
                        n = r.Event
                }
            ],
            execute: function() {
                e._RF.push({}, "83904f5k1hHSrPTV9W98JQa", "IOErrorEvent", void 0),
                    r("IOErrorEvent", function(r) {
                        function e(t, e, n) {
                            var o;
                            return void 0 === e && (e = !1),
                                (o = r.call(this, t, e) || this).text = "",
                                o
                        }
                        return t(e, r),
                            e
                    }(n)).IO_ERROR = "IOErrorEvent.IO_ERROR",
                    e._RF.pop()
            }
        }
    }
));
