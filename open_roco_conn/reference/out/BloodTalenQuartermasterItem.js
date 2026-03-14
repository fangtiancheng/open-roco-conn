System.register("chunks:///_virtual/BloodTalenQuartermasterItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PropsIcon.ts"], (function(e) {
        var t, i, r, a, n, o, s, c, d, l, u;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    r = e.initializerDefineProperty,
                    a = e.assertThisInitialized,
                    n = e.createClass
            }
                , function(e) {
                    o = e.cclegacy,
                        s = e._decorator,
                        c = e.Node,
                        d = e.NodeEventType,
                        l = e.Component
                }
                , function(e) {
                    u = e.PropsIcon
                }
            ],
            execute: function() {
                var p, h, m, f, y, v;
                o._RF.push({}, "be423Bd0blIP5VXF8uQEJrC", "BloodTalenQuartermasterItem", void 0);
                var g = s.ccclass
                    , b = s.property;
                e("BloodTalenQuartermasterItem", (p = b(u),
                    h = b(c),
                g((y = t((f = function(e) {
                    function t() {
                        for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                            n[o] = arguments[o];
                        return t = e.call.apply(e, [this].concat(n)) || this,
                            r(t, "icon", y, a(t)),
                            r(t, "selectedNode", v, a(t)),
                            t.params = {},
                            t
                    }
                    i(t, e);
                    var o = t.prototype;
                    return o.onLoad = function() {
                        this.icon.tipsTarget.on(d.TOUCH_END, this.onSelected, this)
                    }
                        ,
                        o.onSelected = function() {
                            this.params.onSelected && this.params.onSelected(this)
                        }
                        ,
                        n(t, [{
                            key: "data",
                            set: function(e) {
                                void 0 !== e.data && (this.params.data = e.data,
                                    this.icon.data = e.data ? {
                                        id: e.data.id,
                                        price: "所需声望：" + e.data.price
                                    } : {
                                        id: null,
                                        price: ""
                                    }),
                                void 0 !== e.index && (this.params.index = e.index),
                                void 0 !== e.selected && (this.params.selected = e.selected,
                                    this.selectedNode.active = this.params.selected),
                                void 0 !== e.onSelected && (this.params.onSelected = e.onSelected)
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return this.params.data.id
                            }
                        }, {
                            key: "price",
                            get: function() {
                                return this.params.data.price
                            }
                        }, {
                            key: "selected",
                            get: function() {
                                return this.params.selected
                            }
                        }, {
                            key: "index",
                            get: function() {
                                return this.params.index
                            }
                        }]),
                        t
                }(l)).prototype, "icon", [p], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    v = t(f.prototype, "selectedNode", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    m = f)) || m));
                o._RF.pop()
            }
        }
    }
));
