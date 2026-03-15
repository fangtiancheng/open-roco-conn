System.register("chunks:///_virtual/BloodTalentSelectPetItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PetIcon.ts"], (function(e) {
        var t, i, n, r, a, o, l, c, s, u;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    r = e.assertThisInitialized,
                    a = e.createClass
            }
                , function(e) {
                    o = e.cclegacy,
                        l = e._decorator,
                        c = e.Node,
                        s = e.Component
                }
                , function(e) {
                    u = e.PetIcon
                }
            ],
            execute: function() {
                var d, p, f, h, v, m;
                o._RF.push({}, "4fdcdTPBuFN0rAubhZNDEqP", "BloodTalentSelectPetItem", void 0);
                var y = l.ccclass
                    , g = l.property;
                e("BloodTalentSelectPetItem", (d = g(u),
                    p = g(c),
                y((v = t((h = function(e) {
                    function t() {
                        for (var t, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                            a[o] = arguments[o];
                        return t = e.call.apply(e, [this].concat(a)) || this,
                            n(t, "icon", v, r(t)),
                            n(t, "selectNode", m, r(t)),
                            t.params = {},
                            t
                    }
                    return i(t, e),
                        a(t, [{
                            key: "data",
                            get: function() {
                                return this.params
                            },
                            set: function(e) {
                                if (null === e)
                                    return this.params = {},
                                        this.icon.data = {
                                            id: null,
                                            level: null
                                        },
                                        void (this.selectNode.active = !1);
                                void 0 !== e.petData && (this.params.petData = e.petData,
                                    this.icon.data = e.petData),
                                void 0 !== e.selected && (this.params.selected = e.selected,
                                    this.selectNode.active = e.selected)
                            }
                        }, {
                            key: "id",
                            get: function() {
                                return this.icon.id
                            }
                        }, {
                            key: "selected",
                            get: function() {
                                var e;
                                return (null == (e = this.params) ? void 0 : e.selected) || !1
                            }
                        }]),
                        t
                }(s)).prototype, "icon", [d], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    m = t(h.prototype, "selectNode", [p], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    f = h)) || f));
                o._RF.pop()
            }
        }
    }
));
