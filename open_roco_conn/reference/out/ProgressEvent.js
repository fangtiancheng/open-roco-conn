System.register("chunks:///_virtual/ProgressEvent.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, n, r;
        return {
            setters: [function(e) {
                t = e.inheritsLoose
            }
                , function(e) {
                    n = e.cclegacy,
                        r = e.Event
                }
            ],
            execute: function() {
                n._RF.push({}, "f47fe2MVoJIuryhB+0tJNFa", "ProgressEvent", void 0),
                    e("ProgressEvent", function(e) {
                        function n(t, n, r, s) {
                            return void 0 === r && (r = !1),
                            e.call(this, t, r) || this
                        }
                        return t(n, e),
                            n
                    }(r)).PROGRESS = "ProgressEvent.PROGRESS",
                    n._RF.pop()
            }
        }
    }
));
