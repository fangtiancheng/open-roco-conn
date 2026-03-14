System.register("chunks:///_virtual/SimpleTips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemIconTips.ts"], (function(e) {
        var i, t, r, n, c, o, l, s;
        return {
            setters: [function(e) {
                i = e.applyDecoratedDescriptor,
                    t = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    n = e.assertThisInitialized
            }
                , function(e) {
                    c = e.cclegacy,
                        o = e._decorator,
                        l = e.Label
                }
                , function(e) {
                    s = e.ItemIconTips
                }
            ],
            execute: function() {
                var a, p, u, f;
                c._RF.push({}, "8dc68AUhwhCv6J5SgIkIu6K", "SimpleTips", void 0);
                var h = o.ccclass
                    , d = o.property;
                e("SimpleTips", (a = d(l),
                h((f = i((u = function(e) {
                    function i() {
                        for (var i, t = arguments.length, c = new Array(t), o = 0; o < t; o++)
                            c[o] = arguments[o];
                        return i = e.call.apply(e, [this].concat(c)) || this,
                            r(i, "descLabel", f, n(i)),
                            i
                    }
                    return t(i, e),
                        i
                }(s)).prototype, "descLabel", [a], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    p = u)) || p));
                c._RF.pop()
            }
        }
    }
));
