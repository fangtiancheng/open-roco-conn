System.register("chunks:///_virtual/SimpleIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemIcon.ts", "./Icon.ts"], (function(t) {
        var e, n, i, r, o, c, s, a;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    r = t.assertThisInitialized
            }
                , function(t) {
                    o = t.cclegacy,
                        c = t._decorator
                }
                , function(t) {
                    s = t.ItemIcon
                }
                , function(t) {
                    a = t.IconType
                }
            ],
            execute: function() {
                var u, l, p, f;
                o._RF.push({}, "78db6SxMLVJ1pujuOIGhI+y", "SimpleIcon", void 0);
                var I = c.ccclass
                    , y = c.property;
                t("SimpleIcon", (u = y({
                    multiline: !0
                }),
                I((f = e((p = function(t) {
                    function e() {
                        for (var e, n = arguments.length, o = new Array(n), c = 0; c < n; c++)
                            o[c] = arguments[c];
                        return e = t.call.apply(t, [this].concat(o)) || this,
                            i(e, "desc", f, r(e)),
                            e
                    }
                    n(e, t);
                    var o = e.prototype;
                    return o.start = function() {
                        this.data = {
                            desc: this.desc
                        }
                    }
                        ,
                        o.onInitParams = function(t) {
                            t.type = a.SIMPLE,
                                t.showTips = !0
                        }
                        ,
                        e
                }(s)).prototype, "desc", [u], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return ""
                    }
                }),
                    l = p)) || l));
                o._RF.pop()
            }
        }
    }
));
