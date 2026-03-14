System.register("chunks:///_virtual/StarsTowerDisintegrateItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PetIcon.ts"], (function(e) {
        var t, n, i, r, a, o, c, l, s, u, p;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    r = e.assertThisInitialized,
                    a = e.createClass
            }
                , function(e) {
                    o = e.cclegacy,
                        c = e._decorator,
                        l = e.Label,
                        s = e.Node,
                        u = e.Component
                }
                , function(e) {
                    p = e.PetIcon
                }
            ],
            execute: function() {
                var f, d, b, h, m, g, y, v, w, I;
                o._RF.push({}, "5f49fXkJKJHPKnJwW6H4ygw", "StarsTowerDisintegrateItem", void 0);
                var L = c.ccclass
                    , z = c.property;
                e("StarsTowerDisintegrateItem", (f = z(p),
                    d = z(l),
                    b = z(l),
                    h = z(s),
                L((y = t((g = function(e) {
                    function t() {
                        for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++)
                            a[o] = arguments[o];
                        return t = e.call.apply(e, [this].concat(a)) || this,
                            i(t, "petIcon", y, r(t)),
                            i(t, "nameLabel", v, r(t)),
                            i(t, "countLabel", w, r(t)),
                            i(t, "selectedNode", I, r(t)),
                            t.params = void 0,
                            t
                    }
                    return n(t, e),
                        t.prototype.refresh = function(e) {
                            this.params = e,
                                e ? (this.petIcon.data = {
                                    id: e.id
                                },
                                    this.countLabel.string = e.count + "个",
                                    this.nameLabel.string = this.petIcon.data.name + "碎片",
                                    this.node.active = !0) : this.node.active = !1
                        }
                        ,
                        a(t, [{
                            key: "selected",
                            set: function(e) {
                                this.selectedNode.active = e
                            }
                        }, {
                            key: "data",
                            get: function() {
                                return this.params
                            }
                        }]),
                        t
                }(u)).prototype, "petIcon", [f], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    v = t(g.prototype, "nameLabel", [d], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = t(g.prototype, "countLabel", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    I = t(g.prototype, "selectedNode", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    m = g)) || m));
                o._RF.pop()
            }
        }
    }
));
