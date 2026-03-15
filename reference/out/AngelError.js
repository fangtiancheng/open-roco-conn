System.register("chunks:///_virtual/AngelError.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(r) {
        var n, e, t;
        return {
            setters: [function(r) {
                n = r.inheritsLoose,
                    e = r.wrapNativeSuper
            }
                , function(r) {
                    t = r.cclegacy
                }
            ],
            execute: function() {
                t._RF.push({}, "3b568czzfNAvJ4Cu6yMYYLy", "AngelError", void 0);
                var o = r("AngelError", function(r) {
                    function e(n, e) {
                        void 0 === e && (e = null);
                        var t = "";
                        return e && (t = e.constructor.name),
                            n = "[" + t + "]发生了一个错误:" + n,
                        r.call(this, n) || this
                    }
                    return n(e, r),
                        e
                }(e(Error)));
                o.SYSAPI_IS_NULL = "系统API为NULL",
                    o.METHOD_NOT_IMPL = "方法没有实现",
                    t._RF.pop()
            }
        }
    }
));
