System.register("chunks:///_virtual/IllegalOperationError.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(r) {
        var e, t, l;
        return {
            setters: [function(r) {
                e = r.inheritsLoose,
                    t = r.wrapNativeSuper
            }
                , function(r) {
                    l = r.cclegacy
                }
            ],
            execute: function() {
                l._RF.push({}, "23408+3x0NLXYwNBkQpC0Cq", "IllegalOperationError", void 0);
                r("IllegalOperationError", function(r) {
                    function t(e, t) {
                        void 0 === t && (t = null);
                        var l = "";
                        return t && (l = t.constructor.name),
                            e = l.length > 0 ? "[IllegalOperationError][" + l + "]发生了一个错误:" + e : "[IllegalOperationError]发生了一个错误:" + e,
                        r.call(this, e) || this
                    }
                    return e(t, r),
                        t
                }(t(Error)));
                l._RF.pop()
            }
        }
    }
));
