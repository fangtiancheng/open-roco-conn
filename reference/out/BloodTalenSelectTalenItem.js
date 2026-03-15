System.register("chunks:///_virtual/BloodTalenSelectTalenItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./TalenIcon.ts"], (function(t) {
        var e, n, a, i, o, r, s, l, c, u, p;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    n = t.inheritsLoose,
                    a = t.initializerDefineProperty,
                    i = t.assertThisInitialized,
                    o = t.createClass
            }
                , function(t) {
                    r = t.cclegacy,
                        s = t._decorator,
                        l = t.Button,
                        c = t.NodeEventType,
                        u = t.Component
                }
                , function(t) {
                    p = t.TalenIcon
                }
            ],
            execute: function() {
                var d, h, f, B, y, v, I, m;
                r._RF.push({}, "7de72F2hCpAMICVuXtbZV5Q", "BloodTalenSelectTalenItem", void 0);
                var b = s.ccclass
                    , g = s.property;
                t("BloodTalenSelectTalenItem", (d = g(p),
                    h = g(l),
                    f = g(l),
                b((v = e((y = function(t) {
                    function e() {
                        for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
                            o[r] = arguments[r];
                        return e = t.call.apply(t, [this].concat(o)) || this,
                            a(e, "talenIcon", v, i(e)),
                            a(e, "stateBtn", I, i(e)),
                            a(e, "awakenedBtn", m, i(e)),
                            e.params = void 0,
                            e
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.onLoad = function() {
                        this.stateBtn.node.on(c.TOUCH_END, this.onStateBtn, this)
                    }
                        ,
                        r.start = function() {
                            this.talenIcon.params = {
                                showTips: !0
                            }
                        }
                        ,
                        r.onStateBtn = function() {
                            this.params.onClick(this)
                        }
                        ,
                        o(e, [{
                            key: "icon",
                            get: function() {
                                return this.talenIcon
                            }
                        }, {
                            key: "button",
                            get: function() {
                                return this.stateBtn
                            }
                        }, {
                            key: "data",
                            get: function() {
                                return this.params
                            },
                            set: function(t) {
                                this.params = t;
                                var e = {
                                    id: t.type,
                                    talenState: parseInt(t.gift) > 0 ? 1 : 0
                                };
                                this.talenIcon.data = e,
                                    "200" == t.type && "4" == t.dressInfo || "200" == t.type ? (this.stateBtn.node.active = !1,
                                        this.awakenedBtn.node.active = !0) : "0" == t.gift ? (this.stateBtn.node.active = !0,
                                        this.awakenedBtn.node.active = !1) : (this.stateBtn.node.active = !1,
                                        this.awakenedBtn.node.active = !0)
                            }
                        }]),
                        e
                }(u)).prototype, "talenIcon", [d], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    I = e(y.prototype, "stateBtn", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    m = e(y.prototype, "awakenedBtn", [f], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: null
                    }),
                    B = y)) || B));
                r._RF.pop()
            }
        }
    }
));
