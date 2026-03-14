System.register("chunks:///_virtual/SentinelRewardShopItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SentinelIntelligenceDataProcessor.ts", "./SentinelRewardShopItemIcon.ts", "./Icon.ts", "./SentinelIntelligenceProtocol.ts", "./ActivityAPI.ts", "./global.ts"], (function(t) {
        var e, n, i, o, r, a, l, u, c, s, p, y, d, m, I, f, b;
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
                        l = t.Label,
                        u = t.Sprite,
                        c = t.Node,
                        s = t.NodeEventType,
                        p = t.Component
                }
                , function(t) {
                    y = t.sentinelIntelligenceDataProcessor
                }
                , function(t) {
                    d = t.SentinelRewardShopItemIcon
                }
                , function(t) {
                    m = t.IconType
                }
                , function(t) {
                    I = t.sentinelIntelligenceProtocol
                }
                , function(t) {
                    f = t.ActivityAPI
                }
                , function(t) {
                    b = t.__global
                }
            ],
            execute: function() {
                var h, S, g, v, B, P, w, G, D, N, R, _, z, A, C, T;
                r._RF.push({}, "b83d8nDOolM54ETWnSQNUHV", "SentinelRewardShopItem", void 0);
                var U = a.ccclass
                    , x = a.property;
                t("SentinelRewardShopItem", (h = U("SentinelRewardShopItem"),
                    S = x(l),
                    g = x(u),
                    v = x(l),
                    B = x(c),
                    P = x(c),
                    w = x(u),
                h(((T = function(t) {
                    function e() {
                        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
                            r[a] = arguments[a];
                        return e = t.call.apply(t, [this].concat(r)) || this,
                            i(e, "itemName", N, o(e)),
                            i(e, "itemIcon", R, o(e)),
                            i(e, "needGold", _, o(e)),
                            i(e, "buyBtn", z, o(e)),
                            i(e, "buyBtnGray", A, o(e)),
                            i(e, "stampIcon", C, o(e)),
                            e.backupGoldFormat = "",
                            e.index = 0,
                            e
                    }
                    n(e, t);
                    var r = e.prototype;
                    return r.onLoad = function() {
                        this.buyBtn.on(s.TOUCH_END, this.onBuyBtn, this),
                            this.buyBtnGray.on(s.TOUCH_END, this.onBuyBtnGray, this),
                            this.backupGoldFormat = this.needGold.string
                    }
                        ,
                        r.onBuyBtn = function() {
                            var t = this;
                            I.getGift({
                                type: 1,
                                index: this.index + 1
                            }, (function(n) {
                                    var i;
                                    if (console.log("[jinlong] [sentinel-Intelligence] [onBuyBtn] " + JSON.stringify(n || "")),
                                    "0" === (null == n || null == (i = n.result) ? void 0 : i.value)) {
                                        y.processActivityData(n),
                                            t.node.emit(e.BUY_SUCCESS);
                                        var o = n.Item;
                                        if (o) {
                                            var r = {
                                                id: parseInt(o.id),
                                                equipItemId: parseInt(o.equipItemId),
                                                count: parseInt(o.count),
                                                type: parseInt(o.type)
                                            };
                                            b.showItemPanelBySingle([r])
                                        }
                                    } else {
                                        var a;
                                        f.showAlert((null == n || null == (a = n.result) ? void 0 : a.msg) || "购买失败")
                                    }
                                }
                            ))
                        }
                        ,
                        r.onBuyBtnGray = function() {}
                        ,
                        r.setItemData = function(t, e) {
                            this.index = e,
                                this.itemName.string = t.itemName,
                                this.needGold.string = y.getPointText(t.needPoint);
                            var n = {
                                id: t.itemId
                            }
                                , i = {
                                type: m.PROPS
                            }
                                , o = this.itemIcon.getComponent(d);
                            o.params = i,
                                o.data = n;
                            var r = y.processedActivityData.activityInfo;
                            this.buyBtn.active = t.needPoint <= r.currentPoint && 0 == t.status,
                                this.buyBtnGray.active = t.needPoint > r.currentPoint || 1 == t.status,
                                this.stampIcon.node.active = 1 == t.status
                        }
                        ,
                        e
                }(p)).BUY_SUCCESS = "buySuccess@SentinelRewardShopItem",
                    N = e((D = T).prototype, "itemName", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    R = e(D.prototype, "itemIcon", [g], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    _ = e(D.prototype, "needGold", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    z = e(D.prototype, "buyBtn", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    A = e(D.prototype, "buyBtnGray", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    C = e(D.prototype, "stampIcon", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    G = D)) || G));
                r._RF.pop()
            }
        }
    }
));
