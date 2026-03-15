System.register("chunks:///_virtual/SentinelContractSigningUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SentinelIntelligenceMessage.ts", "./SentinelIntelligenceProtocol.ts", "./SentinelContractSigningPet.ts", "./ActivityAPI.ts", "./SentinelIntelligenceDataProcessor.ts"], (function(e) {
        var t, n, i, o, l, r, c, a, s, u, g, f, h, p, m, d;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    l = e.cclegacy,
                        r = e._decorator,
                        c = e.Node,
                        a = e.Label,
                        s = e.NodeEventType,
                        u = e.Toggle
                }
                , function(e) {
                    g = e.GameUI
                }
                , function(e) {
                    f = e.SentinelIntelligenceMessage
                }
                , function(e) {
                    h = e.sentinelIntelligenceProtocol
                }
                , function(e) {
                    p = e.SentinelContractSigningPet
                }
                , function(e) {
                    m = e.ActivityAPI
                }
                , function(e) {
                    d = e.sentinelIntelligenceDataProcessor
                }
            ],
            execute: function() {
                var C, v, y, S, I, b, N, P, B, L, T, A;
                l._RF.push({}, "cf6a7NJ/7dDQZ2ZPNIbbNmc", "SentinelContractSigningUI", void 0);
                var D = r.ccclass
                    , E = r.property;
                e("SentinelContractSigningUI", (C = E(c),
                    v = E(c),
                    y = E(c),
                    S = E(c),
                    I = E(a),
                D((P = t((N = function(e) {
                    function t() {
                        for (var t, n = arguments.length, l = new Array(n), r = 0; r < n; r++)
                            l[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(l)) || this,
                            i(t, "closeBtn", P, o(t)),
                            i(t, "petList", B, o(t)),
                            i(t, "confirmBtn", L, o(t)),
                            i(t, "cancelBtn", T, o(t)),
                            i(t, "petName", A, o(t)),
                            t.petNameFormat = "",
                            t
                    }
                    n(t, e);
                    var l = t.prototype;
                    return l.onLoad = function() {
                        this.closeBtn.on(s.TOUCH_END, this.onCloseBtn, this),
                            this.confirmBtn.on(s.TOUCH_END, this.onConfirmBtn, this),
                            this.cancelBtn.on(s.TOUCH_END, this.onCancelBtn, this),
                            this.petNameFormat = this.petName.string
                    }
                        ,
                        l.onCloseBtn = function() {
                            this.node.active = !1
                        }
                        ,
                        l.onConfirmBtn = function() {
                            var e = this
                                , t = this.petList.children.filter((function(e) {
                                    return e.getComponent(u).isChecked
                                }
                            ));
                            if (0 !== t.length) {
                                var n = t[0].getComponent(p);
                                h.getGift({
                                    type: 3,
                                    index: n.index,
                                    catch_time: n.data.catch_time
                                }, (function(t) {
                                        var n, i;
                                        (console.log("[jinlong] [sentinel-Intelligence] [SentinelContractSigningUI] [onConfirmBtn] success " + JSON.stringify(t || "")),
                                        "0" === (null == t || null == (n = t.result) ? void 0 : n.value)) ? (m.showAlert("恭喜，进化成功，新宠物已经放入宠物背包"),
                                            e.node.active = !1,
                                            d.processActivityData(t),
                                            e.notify(f.SHOW_CONTRACT_VIEW)) : m.showAlert((null == t || null == (i = t.result) ? void 0 : i.msg) || "进化失败")
                                    }
                                ))
                            } else
                                m.showAlert("请选择宠物")
                        }
                        ,
                        l.onCancelBtn = function() {
                            this.node.active = !1
                        }
                        ,
                        l.refreshAwakePage = function(e) {
                            if (e && Array.isArray(e.pets)) {
                                var t = m.getSpiritName(e.petid);
                                this.petName.string = this.petNameFormat.replace("{0}", t);
                                var n = e.pets;
                                if (n && 0 !== n.length) {
                                    var i = e.index + 1;
                                    this.petList.children.forEach((function(e) {
                                            e.getComponent(u).isChecked = !1,
                                                e.off(p.TOGGLE),
                                                e.getComponent(p).setPetData(null, 0)
                                        }
                                    ));
                                    for (var o = 0; o < n.length && o < this.petList.children.length; o++) {
                                        var l = n[o]
                                            , r = this.petList.children[o].getComponent(p);
                                        r.setPetData(l, i),
                                            r.node.active = !0,
                                            r.node.on(p.TOGGLE, this.onPetToggleChange, this)
                                    }
                                } else
                                    this.petList.children.forEach((function(e) {
                                            e.active = !0,
                                                e.getComponent(u).isChecked = !1,
                                                e.off(p.TOGGLE),
                                                e.getComponent(p).setPetData(null, 0)
                                        }
                                    ))
                            }
                        }
                        ,
                        l.onPetToggleChange = function(e, t) {
                            console.log("[jinlong] [SentinelContractSigningUI] [onPetToggleChange] petitem: " + e.index + " " + e.data.id + " " + t),
                                this.petList.children.forEach((function(t) {
                                        t.getComponent(p).index !== e.index && t.getComponent(u).setIsCheckedWithoutNotify(!1)
                                    }
                                ))
                        }
                        ,
                        t
                }(g)).prototype, "closeBtn", [C], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    B = t(N.prototype, "petList", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = t(N.prototype, "confirmBtn", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    T = t(N.prototype, "cancelBtn", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    A = t(N.prototype, "petName", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    b = N)) || b));
                l._RF.pop()
            }
        }
    }
));
