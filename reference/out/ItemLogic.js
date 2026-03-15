System.register("chunks:///_virtual/ItemLogic.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpriteFrameSelector.ts", "./MarketConfig.ts", "./ActivityAPI.ts", "./CommonMessage.ts", "./GameUI.ts", "./global.ts", "./MarketMessage.ts", "./PropsIcon.ts"], (function(t) {
        var i, e, n, r, a, o, c, u, s, l, m, h, _, p, f, g, d, b, v;
        return {
            setters: [function(t) {
                i = t.applyDecoratedDescriptor,
                    e = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    r = t.assertThisInitialized,
                    a = t.createClass
            }
                , function(t) {
                    o = t.cclegacy,
                        c = t._decorator,
                        u = t.Node,
                        s = t.Label,
                        l = t.Button,
                        m = t.NodeEventType
                }
                , function(t) {
                    h = t.default
                }
                , function(t) {
                    _ = t.MarketConfig
                }
                , function(t) {
                    p = t.ActivityAPI
                }
                , function(t) {
                    f = t.CommonMessage
                }
                , function(t) {
                    g = t.GameSubUI
                }
                , function(t) {
                    d = t.__global
                }
                , function(t) {
                    b = t.MarketMessage
                }
                , function(t) {
                    v = t.PropsIcon
                }
            ],
            execute: function() {
                var y, x, D, I, T, P, w, M, S, k, C, z, A, B, N, L, U, E, F, Y, O, j, H;
                o._RF.push({}, "6062fv+BpNKfZZXTaYAfbuU", "ItemLogic", void 0);
                var K = c.ccclass
                    , R = c.property;
                t("ItemLogic", (y = K("ItemLogic"),
                    x = R(h),
                    D = R(v),
                    I = R(u),
                    T = R(s),
                    P = R(l),
                    w = R(s),
                    M = R(s),
                    S = R(s),
                    k = R(s),
                    C = R(u),
                y((B = i((A = function(t) {
                    function i() {
                        for (var i, e = arguments.length, a = new Array(e), o = 0; o < e; o++)
                            a[o] = arguments[o];
                        return i = t.call.apply(t, [this].concat(a)) || this,
                            n(i, "mc_hotNew", B, r(i)),
                            n(i, "mc_icon", N, r(i)),
                            n(i, "mc_flag", L, r(i)),
                            n(i, "txt_limit", U, r(i)),
                            n(i, "btn_buy", E, r(i)),
                            n(i, "txt_name", F, r(i)),
                            n(i, "txt_vipPrice", Y, r(i)),
                            n(i, "txt_price", O, r(i)),
                            n(i, "txt_endTime", j, r(i)),
                            n(i, "diamond0", H, r(i)),
                            i._currentData = void 0,
                            i._topIndex = void 0,
                            i._tagIndex = void 0,
                            i
                    }
                    e(i, t);
                    var o = i.prototype;
                    return o.onLoad = function() {
                        this.btn_buy.node.on(m.TOUCH_END, this.onBuy, this)
                    }
                        ,
                        o.onBuy = function(t) {
                            var i = this;
                            if (0 == this._topIndex && 1 == this._tagIndex)
                                this.notify(b.UPDATE_BUY_ITEM_BACK, {
                                    item: this._currentData,
                                    count: 1
                                });
                            else {
                                var e = this._currentData.price == this._currentData.discountPrice ? this._currentData.price : this._currentData.discountPrice
                                    , n = this._currentData.vipPrice
                                    , r = this.getCanBuyMax()
                                    , a = {
                                    itemId: this._currentData.id,
                                    itemType: this._currentData.itemType,
                                    costName: "需要洛克贝：",
                                    costCount: _.vipLevel > 0 ? n : e,
                                    haveCount: _.rocoShell,
                                    maxCount: r > 99 ? 99 : r,
                                    describe: "洛克币不足",
                                    confirmCallback: function(t) {
                                        t.itemID;
                                        var e = t.count;
                                        i.notify(b.UPDATE_BUY_ITEM_BACK, {
                                            item: i._currentData,
                                            count: e
                                        })
                                    }
                                };
                                this.notify(f.SHOW_BUY_ITEM_VIEW, a)
                            }
                        }
                        ,
                        o.getCanBuyMax = function() {
                            return 1 == this._currentData.itemType || 3 == this._currentData.itemType || 1 == this._currentData.onlyOne || this.isSpItem() ? 1 : d.MainRoleData.isVip && -1 != this._currentData.vipPrice ? Math.floor(_.rocoShell / this._currentData.vipPrice) : Math.floor(_.rocoShell / this._currentData.discountPrice)
                        }
                        ,
                        o.isSpItem = function() {
                            for (var t = [33816862, 33620285, 34013409, 33947775, 33882195, 33751351, 34340866, 34340867, 34340868], i = 0; i < t.length; i++)
                                if (this._currentData.id == t[i])
                                    return !0;
                            return !1
                        }
                        ,
                        a(i, [{
                            key: "data",
                            get: function() {
                                return this._currentData
                            },
                            set: function(t) {
                                var i;
                                if (i = t,
                                    this._currentData = i,
                                null != this._currentData) {
                                    var e = i.itemType
                                        , n = "";
                                    if (n = 7 == e || 2 == e ? p.getSrcPath(2, i.id) : p.getSrcPath(e, i.id),
                                        this.mc_flag.active = !1,
                                        this.txt_limit.string = "",
                                    0 != i.week_limit || 0 != i.month_limit) {
                                        0 != i.week_limit ? this.txt_limit.string = "（周限购:" + i.sold + "/" + i.week_limit + "）" : 0 != i.month_limit && (this.txt_limit.string = "（月限购:" + i.sold + "/" + i.month_limit + "）");
                                        var r = Math.max(i.week_limit, i.month_limit);
                                        i.sold >= r && (this.mc_flag.active = !0)
                                    }
                                    this.txt_name && (this.txt_name.string = i.name),
                                        i.vipPrice >= 0 ? this.txt_vipPrice.string = "VIP:" + i.vipPrice.toString() : this.txt_vipPrice.string = "",
                                        i.price == i.discountPrice ? this.txt_price && (this.txt_price.string = "售价:" + i.price.toString()) : this.txt_price && (this.txt_price.string = "售价:" + i.discountPrice.toString()),
                                        i.hotFlag >= 3 ? (this.txt_price && (this.txt_price.string = ""),
                                        this.diamond0 && (this.diamond0.active = !1)) : this.diamond0 && (this.diamond0.active = !0);
                                    var a = "" == i.tips || "[object Object]" == i.tips ? i.name : i.tips;
                                    switch (i.hotFlag) {
                                        case 0:
                                            this.mc_hotNew && this.mc_hotNew.gotoAndStop(8);
                                            break;
                                        default:
                                            this.mc_hotNew.gotoAndStop(i.hotFlag)
                                    }
                                    var o, c, u = "", s = new Date;
                                    if (i.endTime - i.beginTime >= 7776e3)
                                        u = "暂不下架",
                                            this.txt_endTime.string = "";
                                    else {
                                        o = i.beginTime,
                                            s.setTime(1e3 * o),
                                            c = s.getFullYear() + "年" + (s.getMonth() + 1) + "月" + s.getDay() + "日至\n",
                                            o = i.endTime,
                                            s.setTime(1e3 * o),
                                            u = c += s.getFullYear() + "年" + (s.getMonth() + 1) + "月" + s.getDay() + "日",
                                            o = i.endTime - _.currentServerTime;
                                        var l = Math.floor(o / 86400)
                                            , m = Math.floor(o % 86400 / 3600);
                                        this.txt_endTime.string = "距离结束：" + l + "天" + m + "小时"
                                    }
                                    var h = {
                                        dataSource: i,
                                        id: i.id,
                                        name: i.name,
                                        url: n,
                                        timeStr: u,
                                        desc: a
                                    };
                                    this.mc_icon.data = h,
                                        this.node.active = !0
                                } else
                                    this.node.active = !1
                            }
                        }, {
                            key: "suit",
                            get: function() {
                                return this._currentData
                            }
                        }, {
                            key: "topIndex",
                            set: function(t) {
                                this._topIndex = t
                            }
                        }, {
                            key: "tagIndex",
                            set: function(t) {
                                this._tagIndex = t
                            }
                        }]),
                        i
                }(g)).prototype, "mc_hotNew", [x], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    N = i(A.prototype, "mc_icon", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = i(A.prototype, "mc_flag", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    U = i(A.prototype, "txt_limit", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    E = i(A.prototype, "btn_buy", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = i(A.prototype, "txt_name", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Y = i(A.prototype, "txt_vipPrice", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    O = i(A.prototype, "txt_price", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = i(A.prototype, "txt_endTime", [k], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    H = i(A.prototype, "diamond0", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    z = A)) || z));
                o._RF.pop()
            }
        }
    }
));
