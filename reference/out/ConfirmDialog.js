System.register("chunks:///_virtual/ConfirmDialog.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(e) {
        var n, i, t, r, o, l, a, c, u, s;
        return {
            setters: [function(e) {
                n = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    t = e.initializerDefineProperty,
                    r = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        l = e._decorator,
                        a = e.Label,
                        c = e.Node,
                        u = e.NodeEventType,
                        s = e.Component
                }
            ],
            execute: function() {
                var f, p, m, b, h, g, v, y, d;
                o._RF.push({}, "199f4Hj/1RHLbQYU4cH7zkr", "ConfirmDialog", void 0);
                var B = l.ccclass
                    , D = l.property;
                e("ConfirmDialog", (f = B("ConfirmDialog"),
                    p = D(a),
                    m = D(c),
                    b = D(c),
                f((v = n((g = function(e) {
                    function n() {
                        for (var n, i = arguments.length, o = new Array(i), l = 0; l < i; l++)
                            o[l] = arguments[l];
                        return n = e.call.apply(e, [this].concat(o)) || this,
                            t(n, "label", v, r(n)),
                            t(n, "confirmBtn", y, r(n)),
                            t(n, "cancelBtn", d, r(n)),
                            n
                    }
                    return i(n, e),
                        n.prototype.onRefreshView = function(e, n, i) {
                            var t = this;
                            this.label.string = e,
                                this.confirmBtn.active = null != n,
                            n && this.confirmBtn.once(u.TOUCH_END, (function() {
                                    t.node.removeFromParent(),
                                        n()
                                }
                            )),
                                this.cancelBtn.active = null != i,
                            i && this.cancelBtn.once(u.TOUCH_END, (function() {
                                    t.node.removeFromParent(),
                                        i()
                                }
                            ))
                        }
                        ,
                        n
                }(s)).prototype, "label", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    y = n(g.prototype, "confirmBtn", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    d = n(g.prototype, "cancelBtn", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    h = g)) || h));
                o._RF.pop()
            }
        }
    }
));
