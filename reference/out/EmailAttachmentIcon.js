System.register("chunks:///_virtual/EmailAttachmentIcon.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./ItemIcon.ts"], (function(t) {
        var e, n, i, o, r, a, c, l, u;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        a = t._decorator,
                        c = t.Label,
                        l = t.Node
                }
                , function(t) {
                    u = t.ItemIcon
                }
            ],
            execute: function() {
                var s, p, f, b, h, m;
                r._RF.push({}, "5b903WXfOxMKps6x6qQHc04", "EmailAttachmentIcon", void 0);
                var g = a.ccclass
                    , y = a.property;
                t("EmailAttachmentIcon", (s = y(c),
                    p = y(l),
                g((h = e((b = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                            r[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(r)) || this,
                            i(e, "countLabel", h, o(e)),
                            i(e, "gotMask", m, o(e)),
                            e
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.onInitParams = function(t) {}
                        ,
                        r.setGotStatus = function(t) {
                            this.gotMask.active = t
                        }
                        ,
                        r.setCount = function(t) {
                            this.countLabel.string = t,
                                this.countLabel.node.active = "0" != t
                        }
                        ,
                        e
                }(u)).prototype, "countLabel", [s], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    m = e(b.prototype, "gotMask", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    f = b)) || f));
                r._RF.pop()
            }
        }
    }
));
