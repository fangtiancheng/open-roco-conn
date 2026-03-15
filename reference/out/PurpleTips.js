System.register("chunks:///_virtual/PurpleTips.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var t, i, r, n, a, l, o, p, s, c, u;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    n = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy,
                        l = e._decorator,
                        o = e.Label,
                        p = e.RichText,
                        s = e.Node,
                        c = e.UITransform,
                        u = e.Component
                }
            ],
            execute: function() {
                var h, b, d, g, T, f, L, v, x;
                a._RF.push({}, "043b7UqDQFJNoKTb0bdYley", "PurpleTips", void 0);
                var y = l.ccclass
                    , m = l.property;
                e("PurpleTips", (h = y("PurpleTips"),
                    b = m(o),
                    d = m(p),
                    g = m(s),
                h((L = t((f = function(e) {
                    function t() {
                        for (var t, i = arguments.length, a = new Array(i), l = 0; l < i; l++)
                            a[l] = arguments[l];
                        return t = e.call.apply(e, [this].concat(a)) || this,
                            r(t, "tipsLabel", L, n(t)),
                            r(t, "richTextLabel", v, n(t)),
                            r(t, "border", x, n(t)),
                            t
                    }
                    i(t, e);
                    var a = t.prototype;
                    return a.updateTips = function(e) {
                        this.richTextLabel.node.active = !1,
                            this.tipsLabel.node.active = !0,
                            this.tipsLabel.string = e,
                            this.updateSize()
                    }
                        ,
                        a.updateRichTextTips = function(e) {
                            this.tipsLabel.node.active = !1,
                                this.richTextLabel.node.active = !0,
                                this.richTextLabel.string = e,
                                this.updateRichTextSize()
                        }
                        ,
                        a.updateSize = function() {
                            var e = this.tipsLabel.string.length;
                            this.tipsLabel.getComponent(c).width = 20 * e,
                                this.border.getComponent(c).width = 20 * e + 20
                        }
                        ,
                        a.updateRichTextSize = function() {
                            var e = this.richTextLabel.string.split("<br/>")
                                , t = e && e[0] ? e[0] : ""
                                , i = e && e[1] ? e[1] : ""
                                , r = t.replace(/<\/?[^>]+(>|$)/g, "")
                                , n = i.replace(/<\/?[^>]+(>|$)/g, "")
                                , a = r.length > n.length ? r.length : n.length;
                            this.richTextLabel.getComponent(c).width = 18 * a,
                                this.border.getComponent(c).width = 18 * a + 20
                        }
                        ,
                        t
                }(u)).prototype, "tipsLabel", [b], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    v = t(f.prototype, "richTextLabel", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = t(f.prototype, "border", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    T = f)) || T));
                a._RF.pop()
            }
        }
    }
));
