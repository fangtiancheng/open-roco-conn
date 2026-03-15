System.register("chunks:///_virtual/ArgumentError.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(r) {
        var e, t, n;
        return {
            setters: [function(r) {
                e = r.inheritsLoose,
                    t = r.wrapNativeSuper
            }
                , function(r) {
                    n = r.cclegacy
                }
            ],
            execute: function() {
                n._RF.push({}, "61575bea3lG85smfddr+WZN", "ArgumentError", void 0);
                r("ArgumentError", function(r) {
                    function t() {
                        return r.apply(this, arguments) || this
                    }
                    return e(t, r),
                        t
                }(t(Error)));
                n._RF.pop()
            }
        }
    }
));
