System.register("chunks:///_virtual/BloodTalenExpeditionItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PetAnimation.ts"], (function(e) {
        var t, n, i, o, r, a, l, c, s, u, p;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    o = e.assertThisInitialized,
                    r = e.createClass
            }
                , function(e) {
                    a = e.cclegacy,
                        l = e._decorator,
                        c = e.Node,
                        s = e.Component
                }
                , function(e) {
                    u = e.PetAnimation,
                        p = e.PetAction
                }
            ],
            execute: function() {
                var d, f, b, m, y, h, g, v;
                a._RF.push({}, "be92bRtbgxHsbayRa3Z8bk/", "BloodTalenExpeditionItem", void 0);
                var N = l.ccclass
                    , A = l.property;
                e("BloodTalenExpeditionItem", (d = A(c),
                    f = A(c),
                    b = A(u),
                N((h = t((y = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                            r[a] = arguments[a];
                        return t = e.call.apply(e, [this].concat(r)) || this,
                            i(t, "stateNode", h, o(t)),
                            i(t, "selectedNode", g, o(t)),
                            i(t, "petAnimation", v, o(t)),
                            t
                    }
                    return n(t, e),
                        r(t, [{
                            key: "selected",
                            set: function(e) {
                                this.selectedNode.active = e
                            }
                        }, {
                            key: "state",
                            set: function(e) {
                                for (var t = this.stateNode.children, n = 0; n < t.length; n++)
                                    t[n].active = n == e
                            }
                        }, {
                            key: "petId",
                            set: function(e) {
                                this.petAnimation.data = {
                                    id: e,
                                    actionName: p.IDLE
                                }
                            }
                        }]),
                        t
                }(s)).prototype, "stateNode", [d], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    g = t(y.prototype, "selectedNode", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    v = t(y.prototype, "petAnimation", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    m = y)) || m));
                a._RF.pop()
            }
        }
    }
));
