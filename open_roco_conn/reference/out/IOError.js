System.register("chunks:///_virtual/IOError.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(r) {
        var o, t, e;
        return {
            setters: [function(r) {
                o = r.inheritsLoose,
                    t = r.wrapNativeSuper
            }
                , function(r) {
                    e = r.cclegacy
                }
            ],
            execute: function() {
                e._RF.push({}, "0be71mCizZLjIP3quvorTAH", "IOError", void 0);
                r("IOError", function(r) {
                    function t(o, t) {
                        void 0 === t && (t = null);
                        var e = "";
                        return t && (e = t.constructor.name),
                            o = e.length > 0 ? "[IOError][" + e + "]发生了一个错误:" + o : "[IOError]发生了一个错误:" + o,
                        r.call(this, o) || this
                    }
                    return o(t, r),
                        t
                }(t(Error)));
                e._RF.pop()
            }
        }
    }
));
