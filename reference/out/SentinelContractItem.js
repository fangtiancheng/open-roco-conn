System.register("chunks:///_virtual/SentinelContractItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SentinelIntelligenceDataProcessor.ts", "./SentinelContractItemIcon.ts", "./Icon.ts", "./SentinelIntelligenceProtocol.ts", "./ActivityAPI.ts", "./global.ts"], (function(t) {
        var n, e, i, o, l, r, a, c, s, u, I, v, g, p, f, d, S;
        return {
            setters: [function(t) {
                n = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    i = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    l = t.cclegacy,
                        r = t._decorator,
                        a = t.Label,
                        c = t.Sprite,
                        s = t.Node,
                        u = t.NodeEventType,
                        I = t.Component
                }
                , function(t) {
                    v = t.sentinelIntelligenceDataProcessor
                }
                , function(t) {
                    g = t.SentinelContractItemIcon
                }
                , function(t) {
                    p = t.IconType
                }
                , function(t) {
                    f = t.sentinelIntelligenceProtocol
                }
                , function(t) {
                    d = t.ActivityAPI
                }
                , function(t) {
                    S = t.__global
                }
            ],
            execute: function() {
                var y, m, h, C, b, B, E, P, N, _, w, O, A, D;
                l._RF.push({}, "a676a5JMtJIt6xLX962KHBf", "SentinelContractItem", void 0);
                var G = r.ccclass
                    , x = r.property;
                t("SentinelContractItem", (y = G("SentinelContractItem"),
                    m = x(a),
                    h = x(c),
                    C = x(a),
                    b = x(s),
                    B = x(s),
                y(((D = function(t) {
                    function n() {
                        for (var n, e = arguments.length, l = new Array(e), r = 0; r < e; r++)
                            l[r] = arguments[r];
                        return n = t.call.apply(t, [this].concat(l)) || this,
                            i(n, "petName", N, o(n)),
                            i(n, "petIcon", _, o(n)),
                            i(n, "contractCount", w, o(n)),
                            i(n, "signBtn", O, o(n)),
                            i(n, "signBtnGray", A, o(n)),
                            n.evolveId = 0,
                            n.index = 0,
                            n.backupContractCountFormat = "",
                            n
                    }
                    e(n, t);
                    var l = n.prototype;
                    return l.onLoad = function() {
                        this.signBtn.on(u.TOUCH_END, this.onSignBtn, this),
                            this.signBtnGray.on(u.TOUCH_END, this.onSignBtnGray, this),
                            this.backupContractCountFormat = this.contractCount.string
                    }
                        ,
                        l.onSignBtn = function() {
                            var t = this;
                            0 == this.evolveId ? f.getGift({
                                type: 2,
                                index: this.index + 1
                            }, (function(e) {
                                    var i, o;
                                    if (console.log("[jinlong] [sentinel-Intelligence] [onSignBtn] evolveId " + t.evolveId + " " + JSON.stringify(e || "")),
                                    "0" === (null == e || null == (i = e.result) ? void 0 : i.value)) {
                                        if (v.processActivityData(e),
                                            e.Item) {
                                            var l = {
                                                id: parseInt(e.Item.id),
                                                count: parseInt(e.Item.count),
                                                type: parseInt(e.Item.type),
                                                equipItemId: parseInt(e.Item.equipItemId)
                                            };
                                            S.showItemPanelBySingle([l]),
                                                t.node.emit(n.SIGN_SUCCESS)
                                        }
                                    } else
                                        d.showAlert((null == e || null == (o = e.result) ? void 0 : o.msg) || "签订失败")
                                }
                            ), (function(n) {
                                    console.log("[jinlong] [sentinel-Intelligence] [onSignBtn] evolveId " + t.evolveId + " " + JSON.stringify(n || ""))
                                }
                            )) : f.queryBag({
                                evolveId: this.evolveId
                            }, (function(e) {
                                    var i;
                                    if (console.log("[jinlong] [sentinel-Intelligence] [onSignBtn] evolveId " + t.evolveId + " " + JSON.stringify(e || "")),
                                    "0" === (null == e || null == (i = e.result) ? void 0 : i.value)) {
                                        var o = [];
                                        Array.isArray(e.PetInfo) ? o = e.PetInfo : e.PetInfo && o.push(e.PetInfo),
                                            t.node.emit(n.SHOW_EVOLVE_VIEW, {
                                                pets: o,
                                                index: t.index,
                                                petid: t.evolveId.toString()
                                            })
                                    }
                                }
                            ), (function(n) {
                                    console.log("[jinlong] [sentinel-Intelligence] [onSignBtn] evolveId " + t.evolveId + " " + JSON.stringify(n || ""))
                                }
                            ))
                        }
                        ,
                        l.onSignBtnGray = function() {}
                        ,
                        l.setContractData = function(t, n) {
                            this.evolveId = t.evolveId,
                                this.index = n,
                                this.petName.string = t.spiritName,
                                this.contractCount.string = this.backupContractCountFormat.replace("{0}", t.needPages.toString()),
                                this.signBtn.active = t.canEvolve,
                                this.signBtnGray.active = !t.canEvolve;
                            var e = {
                                id: t.spiritId
                            }
                                , i = {
                                type: p.PET
                            }
                                , o = this.petIcon.getComponent(g);
                            o.params = i,
                                o.data = e
                        }
                        ,
                        n
                }(I)).SIGN_SUCCESS = "signSuccess@SentinelContractItem",
                    D.SHOW_EVOLVE_VIEW = "showEvolveView@SentinelContractItem",
                    N = n((P = D).prototype, "petName", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    _ = n(P.prototype, "petIcon", [h], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = n(P.prototype, "contractCount", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    O = n(P.prototype, "signBtn", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    A = n(P.prototype, "signBtnGray", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    E = P)) || E));
                l._RF.pop()
            }
        }
    }
));
