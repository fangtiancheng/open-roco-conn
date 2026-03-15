System.register("chunks:///_virtual/AngelLoginUI2.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(n) {
        var e, t, o;
        return {
            setters: [function(n) {
                e = n.inheritsLoose
            }
                , function(n) {
                    t = n.cclegacy,
                        o = n.Component
                }
            ],
            execute: function() {
                t._RF.push({}, "e3298CF5cBGl5xnQ0nal3e5", "AngelLoginUI2", void 0);
                var i = n("AngelLoginUI2", function(n) {
                    function t() {
                        return n.apply(this, arguments) || this
                    }
                    e(t, n);
                    var o = t.prototype;
                    return o.setWaiting = function(n) {}
                        ,
                        o.setErroMsg = function(n) {}
                        ,
                        t
                }(o));
                i.RECOMMEND_TYPE = "recommend",
                    i.RANGE_TYPE = "rangeList",
                    t._RF.pop()
            }
        }
    }
));
