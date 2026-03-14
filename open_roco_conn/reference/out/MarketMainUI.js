System.register("chunks:///_virtual/MarketMainUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./MarketMessage.ts", "./MarketNoticeUI.ts", "./CtlUISuit.ts", "./ActivityAPI.ts", "./MarketConfig.ts", "./CGILoader.ts", "./CGIEvent.ts", "./global.ts", "./DEFINE.ts", "./NetResult.ts", "./CtlUISonBar.ts", "./ConfirmSuitPanel.ts", "./ItemLogic.ts", "./NotificationCenter.ts", "./NotifyDef.ts", "./SpriteFrameSelector.ts"], (function(t) {
        var e, i, n, a, r, o, s, l, c, u, m, h, d, p, g, _, b, f, I, v, x, C, N, y, B, T, P, S;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    a = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        o = t._decorator,
                        s = t.Node,
                        l = t.ToggleComponent,
                        c = t.Label,
                        u = t.Button,
                        m = t.NodeEventType
                }
                , function(t) {
                    h = t.GameUI
                }
                , function(t) {
                    d = t.MarketMessage
                }
                , function(t) {
                    p = t.MarketNoticeUI
                }
                , function(t) {
                    g = t.CtlUISuit
                }
                , function(t) {
                    _ = t.ActivityAPI
                }
                , function(t) {
                    b = t.MarketConfig
                }
                , function(t) {
                    f = t.CGILoader
                }
                , function(t) {
                    I = t.CGIEvent
                }
                , function(t) {
                    v = t.__global
                }
                , function(t) {
                    x = t.DEFINE
                }
                , function(t) {
                    C = t.NetResult
                }
                , function(t) {
                    N = t.CtlUISonBar
                }
                , function(t) {
                    y = t.ConfirmSuitPanel
                }
                , function(t) {
                    B = t.ItemLogic
                }
                , function(t) {
                    T = t.NotificationCenter
                }
                , function(t) {
                    P = t.NotifyDef
                }
                , function(t) {
                    S = t.default
                }
            ],
            execute: function() {
                var M, w, D, L, U, k, E, A, O, z, R, F, V, G, j, H, X, Y, Q, q, J, W, Z, K, $, tt, et, it, nt, at, rt, ot, st, lt, ct, ut, mt, ht, dt, pt, gt;
                r._RF.push({}, "f432235lFRHD7BtoZfgJ5q8", "MarketMainUI", void 0);
                var _t = o.ccclass
                    , bt = o.property;
                t("MarketMainUI", (M = _t("MarketMainUI"),
                    w = bt(s),
                    D = bt(p),
                    L = bt(g),
                    U = bt(N),
                    k = bt(N),
                    E = bt(l),
                    A = bt(l),
                    O = bt(c),
                    z = bt(S),
                    R = bt(y),
                    F = bt(s),
                    V = bt(B),
                    G = bt(s),
                    j = bt(c),
                    H = bt(u),
                    X = bt(u),
                    Y = bt(u),
                    Q = bt(u),
                    q = bt(u),
                M((Z = e((W = function(t) {
                    function e() {
                        for (var e, i = arguments.length, r = new Array(i), o = 0; o < i; o++)
                            r[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(r)) || this,
                            n(e, "closeBtn", Z, a(e)),
                            n(e, "ctlCharge", K, a(e)),
                            n(e, "m_ctlSuit", $, a(e)),
                            n(e, "m_ctlBarAvatar", tt, a(e)),
                            n(e, "m_ctlBarBag", et, a(e)),
                            n(e, "btnTopIndex_0", it, a(e)),
                            n(e, "btnTopIndex_1", nt, a(e)),
                            n(e, "txtDiamondNum", at, a(e)),
                            n(e, "m_vip", rt, a(e)),
                            n(e, "m_confirmSuit", ot, a(e)),
                            n(e, "ctl_Items", st, a(e)),
                            n(e, "itemsList", lt, a(e)),
                            n(e, "emptyFlag", ct, a(e)),
                            n(e, "txtPage", ut, a(e)),
                            n(e, "btnTrueLinkVip", mt, a(e)),
                            n(e, "btnCloseCharge", ht, a(e)),
                            n(e, "btnPrePage", dt, a(e)),
                            n(e, "btnNextPage", pt, a(e)),
                            n(e, "btnLinkVip", gt, a(e)),
                            e.m_vipLevel = void 0,
                            e.m_topIndex = void 0,
                            e.m_tagIndex = void 0,
                            e.m_pageMaxNum = void 0,
                            e._loader = void 0,
                            e._needTotalPrice = void 0,
                            e._needCount = void 0,
                            e._buyItem = void 0,
                            e.m_args = void 0,
                            e
                    }
                    i(e, t);
                    var r = e.prototype;
                    return r.onLoad = function() {
                        this.addEvents(),
                            this.ctlCharge.node.active = !1,
                            this.ctlCharge.node.active = !1,
                            this.m_ctlSuit.node.active = !1,
                            this.m_ctlBarAvatar.length = 2,
                            this.m_ctlBarAvatar.handler = this.onBarAvatarTick.bind(this),
                            this.m_ctlBarBag.length = 2,
                            this.m_ctlBarBag.handler = this.onBarBag.bind(this),
                            this.btnTopIndex_0.isChecked = !0,
                            this.setBarIndex(0, 0),
                            this.m_confirmSuit.handler = this.confirmSuit.bind(this)
                    }
                        ,
                        r.addEvents = function() {
                            this._loader = new f(x.CGI_ROOT + b.CGI,v.SysAPI.getNetSysAPI().createURLLoader(!0)),
                                this._loader.addEventListener(I.COMPLETE, this.onRecieveData, this),
                                this._loader.addEventListener(I.GOT_ERROR, this.onNetError, this),
                                this.closeBtn.on(m.TOUCH_END, this.onCloseBtn, this),
                                this.btnTopIndex_0.node.on("toggle", this.topIndexCallBack, this),
                                this.btnTrueLinkVip.node.on(m.TOUCH_END, this.onTrueLinkVip, this),
                                this.btnCloseCharge.node.on(m.TOUCH_END, this.onCloseCharge, this),
                                this.btnPrePage.node.on(m.TOUCH_END, this.onPrePage, this),
                                this.btnNextPage.node.on(m.TOUCH_END, this.onNextPage, this),
                                this.btnLinkVip.node.on(m.TOUCH_END, this.onLinkVip, this)
                        }
                        ,
                        r.onNetError = function(t) {
                            v.UI.alert("", t.msg)
                        }
                        ,
                        r.onCloseBtn = function() {
                            this.notify(d.CLOSE_MAIN_VIEW)
                        }
                        ,
                        r.onTrueLinkVip = function() {
                            _.navigateToVipPay(),
                                this.ctlCharge.node.active = !1
                        }
                        ,
                        r.onLinkVip = function() {
                            _.navigateToVipPay()
                        }
                        ,
                        r.onCloseCharge = function() {
                            this.ctlCharge.node.active = !1
                        }
                        ,
                        r.onPrePage = function() {
                            b.pageIndex = Math.max(0, b.pageIndex - 1),
                                this.updateUI()
                        }
                        ,
                        r.onNextPage = function() {
                            var t = Math.max(0, Math.ceil(b.itemData.length / this.m_pageMaxNum) - 1);
                            b.pageIndex = Math.min(t, b.pageIndex + 1),
                                this.updateUI()
                        }
                        ,
                        r.topIndexCallBack = function(t) {
                            this.btnTopIndex_0.isChecked && this.setBarIndex(0, 0),
                            this.btnTopIndex_1.isChecked && this.setBarIndex(1, 0)
                        }
                        ,
                        r.updateBuyItemBack = function(t) {
                            var e, i = this, n = t.item, a = t.count;
                            e = 0 != this.m_vipLevel && -1 != n.vipPrice ? n.vipPrice * a : n.discountPrice * a,
                                b.rocoShell < e ? _.showAlert("洛克贝数量不足~") : n.hotFlag >= 3 && 0 == this.m_vipLevel ? _.showVipConfirm() : (this._needTotalPrice = e,
                                    this._needCount = a,
                                    this._buyItem = n,
                                    _.showConfirmAlert("是否确认消耗" + e + "洛克贝购买？", (function() {
                                            var t = new Object;
                                            t.index = n.index,
                                                t.num = a,
                                                i._loader.sendData("?cmd=" + b.CMD_SUBMIT, i._loader.getSendObj(t))
                                        }
                                    )))
                        }
                        ,
                        r.confirmSuit = function(t, e, i, n, a) {
                            var r, o = this;
                            if (r = this.m_vipLevel > 0 && a >= 0 ? a : n,
                            b.rocoShell < r)
                                _.showAlert("洛克贝数量不足~");
                            else if (t.hotFlag >= 3 && 0 == this.m_vipLevel)
                                _.showVipConfirm();
                            else {
                                for (var s = "", l = 0; l < e.length; l++)
                                    0 != l && (s += "|"),
                                        s += (e[l] + 1).toString();
                                _.showConfirmAlert("是否确认消耗" + r + "洛克贝购买？", (function() {
                                        var e = new Object;
                                        e.index = t.index,
                                            e.sub_index = s,
                                            o._loader.sendData("?cmd=" + b.CMD_SUBMIT, o._loader.getSendObj(e))
                                    }
                                ))
                            }
                        }
                        ,
                        r.updateInfo = function(t) {
                            void 0 === t && (t = null),
                                this.m_args = t,
                                this.setBarIndex(0, 0)
                        }
                        ,
                        r.onBarAvatarTick = function(t) {
                            this.setBarIndex(this.m_topIndex, t)
                        }
                        ,
                        r.onBarBag = function(t) {
                            this.setBarIndex(this.m_topIndex, t)
                        }
                        ,
                        r.setBarIndex = function(t, e) {
                            switch (b.pageIndex = 0,
                                this.m_topIndex = t,
                                this.m_tagIndex = e,
                                t) {
                                case 1:
                                    this.m_ctlBarBag.node.active = !0,
                                        this.m_ctlBarAvatar.node.active = !1,
                                        this.m_ctlBarBag.gotoAndStop = e + 1;
                                    break;
                                case 0:
                                    this.m_ctlBarBag.node.active = !1,
                                        this.m_ctlBarAvatar.node.active = !0,
                                        this.m_ctlBarAvatar.gotoAndStop = e + 1
                            }
                            var i = new Object;
                            i.tab = t + 1,
                                i.page = e + 1,
                                this._loader.sendData("?cmd=" + b.CMD_QUERY, this._loader.getSendObj(i))
                        }
                        ,
                        r.dataTrans = function(t) {
                            b.itemData = [];
                            for (var e = !1, i = 0; i < t.gift.length; i++) {
                                var n = new Object
                                    , a = t.gift[i];
                                n.id = Number(a.id),
                                    n.index = Number(a.index),
                                    n.price = Number(a.price),
                                    n.discountPrice = Number(a.price),
                                    n.vipPrice = Number(a.vip_price),
                                    n.month_limit = Number(a.month_limit),
                                    n.week_limit = Number(a.week_limit),
                                    n.sold = Number(a.cur),
                                    n.hotFlag = Number(a.hot),
                                    n.itemType = Number(a.type),
                                    n.beginTime = Number(a.begin_time),
                                    n.endTime = Number(a.end_time),
                                    n.name = _.getAnyItemName(this.typeTrans(n.itemType), n.id),
                                    n.tips = _.getItemDesc(n.id),
                                    n.onlyOne = 0,
                                    n.items = [],
                                n.hotFlag >= 1 && !e && (e = !0);
                                for (var r = a.item ? a.item.length : 0, o = 0; o < r; o++) {
                                    var s = new Object
                                        , l = a.item[o];
                                    s.id = Number(l.id),
                                        s.price = Number(l.price),
                                        s.discountPrice = Number(l.price),
                                        s.vipPrice = Number(l.vip_price),
                                        s.itemType = Number(l.type),
                                        n.items[o] = s
                                }
                                b.itemData[i] = n
                            }
                            e && b.itemData.sort((function(t, e) {
                                    var i = {
                                        2: 0,
                                        3: 1,
                                        1: 2
                                    };
                                    return i[t.hotFlag] - i[e.hotFlag]
                                }
                            ))
                        }
                        ,
                        r.typeTrans = function(t) {
                            switch (t) {
                                case 1:
                                    return 4;
                                case 6:
                                case 7:
                                case 2:
                                    return 2;
                                case 3:
                                    return 6;
                                case 4:
                                    return 3;
                                case 5:
                                default:
                                    return 2
                            }
                        }
                        ,
                        r.updateUI = function() {
                            switch (this.emptyFlag.active = !1,
                                this.ctl_Items.active = !1,
                                this.m_ctlSuit.node.active = !1,
                                this.m_topIndex) {
                                case 1:
                                    this.m_pageMaxNum = 6,
                                        this.updataItem(b.getItemsByPage(6)),
                                        this.ctl_Items.active = !0;
                                    break;
                                case 0:
                                    0 == this.m_tagIndex ? (this.m_pageMaxNum = b.SUIT_MAX_NUM_PERPAGE,
                                        this.m_ctlSuit.setData(b.getItemsByPage(b.SUIT_MAX_NUM_PERPAGE)),
                                        this.m_ctlSuit.node.active = !0) : (this.m_pageMaxNum = 6,
                                        this.updataItem(b.getItemsByPage(6)),
                                        this.ctl_Items.active = !0)
                            }
                            0 == b.itemData.length && (this.emptyFlag.active = !0),
                                this.txtPage.string = b.pageIndex + 1 + "/" + Math.ceil(b.itemData.length / this.m_pageMaxNum)
                        }
                        ,
                        r.updataItem = function(t) {
                            for (var e = 0; e < this.itemsList.length; e++)
                                this.itemsList[e].data = null,
                                t.length > e && (this.itemsList[e].data = t[e],
                                    this.itemsList[e].topIndex = this.m_topIndex,
                                    this.itemsList[e].tagIndex = this.m_tagIndex)
                        }
                        ,
                        r.onRecieveData = function(t) {
                            var e = new C(t.data)
                                , i = t.data;
                            t.data;
                            if (e.value >= 0 && this.node)
                                switch (t.sendType) {
                                    case "?cmd=" + b.CMD_QUERY:
                                        this.m_vipLevel = Number(i.vip),
                                            b.vipLevel = this.m_vipLevel,
                                            b.currentServerTime = Number(i.server_time),
                                            b.rocoShell = Number(i.coin),
                                            this.txtDiamondNum.string = i.coin,
                                            this.m_vip.gotoAndStop(this.m_vipLevel > 0 ? 1 : 2),
                                            this.dataTrans(i),
                                            this.updateUI();
                                        break;
                                    case "?cmd=" + b.CMD_NOTIFY:
                                        break;
                                    case "?cmd=" + b.CMD_SUBMIT:
                                        if (T.sendNotification(P.MAIN_UI_UPDATE_DIAMOND),
                                            this.m_confirmSuit.hide(),
                                            _.showCgiXmlRewardList(i),
                                        1 == this.m_tagIndex)
                                            b.rocoShell -= this._needTotalPrice,
                                            0 == this._buyItem.week_limit && 0 == this._buyItem.month_limit || b.changeItemDataByID(this._buyItem.id, this._needCount),
                                                this._needTotalPrice = 0,
                                                this._needCount = 0,
                                                this.txtDiamondNum.string = b.rocoShell.toString(),
                                                this.updateUI();
                                        else {
                                            var n = new Object;
                                            n.tab = this.m_topIndex + 1,
                                                n.page = this.m_tagIndex + 1,
                                                this._loader.sendData("?cmd=" + b.CMD_QUERY, this._loader.getSendObj(n))
                                        }
                                        break;
                                    case "?cmd=" + b.CMD_GETGIFT:
                                        _.showCgiXmlRewardList(i)
                                }
                            else
                                e.msg.length > 0 && v.UI.alert("", e.msg)
                        }
                        ,
                        r.updateSuitBuyPrice = function(t) {
                            this.m_confirmSuit.updatePrice(t)
                        }
                        ,
                        r.openBuySuitUI = function(t) {
                            this.m_confirmSuit.node.active = !0,
                                this.m_confirmSuit.showSuit(t)
                        }
                        ,
                        e
                }(h)).prototype, "closeBtn", [w], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    K = e(W.prototype, "ctlCharge", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    $ = e(W.prototype, "m_ctlSuit", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    tt = e(W.prototype, "m_ctlBarAvatar", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    et = e(W.prototype, "m_ctlBarBag", [k], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    it = e(W.prototype, "btnTopIndex_0", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    nt = e(W.prototype, "btnTopIndex_1", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    at = e(W.prototype, "txtDiamondNum", [O], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    rt = e(W.prototype, "m_vip", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ot = e(W.prototype, "m_confirmSuit", [R], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    st = e(W.prototype, "ctl_Items", [F], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    lt = e(W.prototype, "itemsList", [V], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    ct = e(W.prototype, "emptyFlag", [G], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ut = e(W.prototype, "txtPage", [j], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    mt = e(W.prototype, "btnTrueLinkVip", [H], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ht = e(W.prototype, "btnCloseCharge", [X], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    dt = e(W.prototype, "btnPrePage", [Y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    pt = e(W.prototype, "btnNextPage", [Q], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    gt = e(W.prototype, "btnLinkVip", [q], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    J = W)) || J));
                r._RF.pop()
            }
        }
    }
));
