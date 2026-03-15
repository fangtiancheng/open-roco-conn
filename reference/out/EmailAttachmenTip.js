System.register("chunks:///_virtual/EmailAttachmenTip.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemIconTips.ts"], (function(e) {
        var t, i, n, r, a, c, o, l;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    r = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy,
                        c = e._decorator,
                        o = e.Label
                }
                , function(e) {
                    l = e.ItemIconTips
                }
            ],
            execute: function() {
                var s, u, p, f;
                a._RF.push({}, "d523fva7/BAoqJXCLciDG3h", "EmailAttachmenTip", void 0);
                var m = c.ccclass
                    , h = c.property;
                e("EmailAttachmenTip", (s = h(o),
                m((f = t((p = function(e) {
                    function t() {
                        for (var t, i = arguments.length, a = new Array(i), c = 0; c < i; c++)
                            a[c] = arguments[c];
                        return t = e.call.apply(e, [this].concat(a)) || this,
                            n(t, "nameLabel", f, r(t)),
                            t
                    }
                    return i(t, e),
                        t
                }(l)).prototype, "nameLabel", [s], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    u = p)) || u));
                a._RF.pop()
            }
        }
    }
));
