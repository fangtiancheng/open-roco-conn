System.register("chunks:///_virtual/BloodTalenQuartermasterPage.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./BloodTalenQuartermasterItem.ts", "./BloodTalenCGI.ts", "./CommonMessage.ts", "./Icon.ts", "./ActivityAPI.ts", "./global.ts", "./WindowMode.ts"], (function(e) {
        var t, n, i, o, r, s, a, l, u, c, d, h, f, m, p, I, b, y, g, v;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    r = e.cclegacy,
                        s = e._decorator,
                        a = e.Node,
                        l = e.Label,
                        u = e.Button,
                        c = e.NodeEventType,
                        d = e.Sprite
                }
                , function(e) {
                    h = e.GameSubUI
                }
                , function(e) {
                    f = e.BloodTalenQuartermasterItem
                }
                , function(e) {
                    m = e.GetQuartermasterData,
                        p = e.ReqBuyItem
                }
                , function(e) {
                    I = e.CommonMessage
                }
                , function(e) {
                    b = e.IconType
                }
                , function(e) {
                    y = e.ActivityAPI
                }
                , function(e) {
                    g = e.__global
                }
                , function(e) {
                    v = e.WindowMode
                }
            ],
            execute: function() {
                var B, L, C, T, R, _, w, P, S, U;
                r._RF.push({}, "f1a7eMV4EpAkKG/3UPFTU7C", "BloodTalenQuartermasterPage", void 0);
                var E = s.ccclass
                    , N = s.property;
                e("BloodTalenQuartermasterPage", (B = N(a),
                    L = N(l),
                    C = N(u),
                    T = N(u),
                E((w = t((_ = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), s = 0; s < n; s++)
                            r[s] = arguments[s];
                        return t = e.call.apply(e, [this].concat(r)) || this,
                            i(t, "itemNode", w, o(t)),
                            i(t, "prestigeLabel", P, o(t)),
                            i(t, "buyBtn", S, o(t)),
                            i(t, "shopBtn", U, o(t)),
                            t.itemList = void 0,
                            t.selectedItem = void 0,
                            t.prestigeCount = void 0,
                            t
                    }
                    n(t, e);
                    var r = t.prototype;
                    return r.onLoad = function() {
                        this.buyBtn.node.on(c.TOUCH_END, this.onBuyBtn, this),
                            this.shopBtn.node.on(c.TOUCH_END, this.onShopBtn, this),
                            this.onInitItemList(),
                            this.refresh()
                    }
                        ,
                        r.onInitItemList = function() {
                            var e = this.itemNode.children;
                            this.itemList = new Array(e.length);
                            for (var t = 0; t < e.length; t++) {
                                var n = e[t].getComponent(f);
                                n.data = {
                                    selected: !1,
                                    onSelected: this.onSelectedItem.bind(this)
                                },
                                    this.itemList[t] = n
                            }
                        }
                        ,
                        r.refresh = function() {
                            var e = this;
                            m((function(t) {
                                    "0" === t.result.value ? e.onRefresh(t) : e.onRefresh({
                                        disabled: !0,
                                        value: "0",
                                        ExInfo: {
                                            Info: []
                                        }
                                    })
                                }
                            ))
                        }
                        ,
                        r.onRefresh = function(e) {
                            this.prestigeCount = parseInt(e.value),
                                this.prestigeLabel.string = "我的声望：" + e.value,
                                this.onRefreshItemList(e.ExInfo.Info),
                                this.onRefreshBuyBtn(e)
                        }
                        ,
                        r.onRefreshItemList = function(e) {
                            for (var t = 0; t < this.itemList.length; t++) {
                                var n = this.itemList[t]
                                    , i = e[t];
                                n.data = i ? {
                                    index: t,
                                    data: {
                                        id: i.Id,
                                        price: i.cost
                                    }
                                } : {
                                    data: null
                                }
                            }
                        }
                        ,
                        r.onRefreshBuyBtn = function(e) {
                            var t = e.disabled;
                            this.buyBtn.interactable = !t,
                                this.buyBtn.getComponent(d).grayscale = t
                        }
                        ,
                        r.onSelectedItem = function(e) {
                            this.selectedItem && (this.selectedItem.data = {
                                selected: !1
                            }),
                                this.selectedItem = e,
                                this.selectedItem.data = {
                                    selected: !0
                                },
                                this.buyBtn.node.active = !0
                        }
                        ,
                        r.onBuyBtn = function() {
                            var e = this;
                            if (this.buyBtn.interactable)
                                if (this.selectedItem) {
                                    var t = {
                                        itemId: this.selectedItem.id,
                                        itemType: b.PROPS,
                                        maxCount: 99,
                                        buyDesc: "兑换数量",
                                        costName: "需求声望：",
                                        costCount: parseInt(this.selectedItem.price),
                                        haveCount: this.prestigeCount,
                                        describe: "声望不足,先去暗黑城远征军获取声望吧",
                                        confirmCallback: function(t) {
                                            var n = t.count;
                                            p({
                                                index: e.selectedItem.index,
                                                num: n
                                            }, (function(t) {
                                                    "0" === t.result.value && (e.prestigeLabel.string = "我的声望：" + t.value,
                                                        y.showCgiXmlRewardList(t))
                                                }
                                            ))
                                        }
                                    };
                                    this.notify(I.SHOW_BUY_ITEM_VIEW, t)
                                } else
                                    g.UI.alert("", "请先选择要兑换的材料~", v.OK)
                        }
                        ,
                        r.onShopBtn = function() {
                            g.UI.alert("", "商城尚未实装，敬请期待！", v.OK)
                        }
                        ,
                        t
                }(h)).prototype, "itemNode", [B], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    P = t(_.prototype, "prestigeLabel", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    S = t(_.prototype, "buyBtn", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    U = t(_.prototype, "shopBtn", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    R = _)) || R));
                r._RF.pop()
            }
        }
    }
));
