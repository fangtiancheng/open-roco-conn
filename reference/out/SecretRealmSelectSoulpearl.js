System.register("chunks:///_virtual/SecretRealmSelectSoulpearl.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./ActivityAPI.ts", "./SecretRealmMessage.ts", "./SecretRealmDataProcessor.ts", "./SecretRealmProtocol.ts", "./SecretRealmConfig.ts", "./SecretRealmSoulpearltem.ts"], (function(e) {
        var t, l, n, o, r, i, s, u, c, a, S, h, f, m, C, p, b, d, E, g;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    l = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    r = e.cclegacy,
                        i = e._decorator,
                        s = e.Button,
                        u = e.Label,
                        c = e.Node,
                        a = e.ScrollView,
                        S = e.Prefab,
                        h = e.NodeEventType,
                        f = e.instantiate
                }
                , function(e) {
                    m = e.GameUI
                }
                , function(e) {
                    C = e.ActivityAPI
                }
                , function(e) {
                    p = e.SecretRealmMessage
                }
                , function(e) {
                    b = e.SecretRealmDataProcessor
                }
                , function(e) {
                    d = e.SecretRealmProtocol
                }
                , function(e) {
                    E = e.SecretRealmConfig
                }
                , function(e) {
                    g = e.SecretRealmSoulpearltem
                }
            ],
            execute: function() {
                var P, N, y, L, I, R, _, v, A, D, T, k, O, x, M, w, U, B;
                r._RF.push({}, "acc80aPh9NLbIyqFW3pXJ/E", "SecretRealmSelectSoulpearl", void 0);
                var z = i.ccclass
                    , H = i.property;
                e("SecretRealmSelectSoulpearl", (P = H(s),
                    N = H(u),
                    y = H(c),
                    L = H(c),
                    I = H(c),
                    R = H(a),
                    _ = H(S),
                    v = H(u),
                z((T = t((D = function(e) {
                    function t() {
                        for (var t, l = arguments.length, r = new Array(l), i = 0; i < l; i++)
                            r[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(r)) || this,
                            n(t, "btnClose", T, o(t)),
                            n(t, "selectCount", k, o(t)),
                            n(t, "addBtn", O, o(t)),
                            n(t, "subBtn", x, o(t)),
                            n(t, "confirmBtn", M, o(t)),
                            n(t, "soulpearlList", w, o(t)),
                            n(t, "soulpearlItem", U, o(t)),
                            n(t, "soulpearlEffectDesc", B, o(t)),
                            t.protocol = void 0,
                            t.dataProcessor = void 0,
                            t.currentSoulPearls = [],
                            t.selectCountNumber = 0,
                            t.maxSelectCount = 0,
                            t.currentSelectSoulPearl = null,
                            t.probabilityTextFormat = "",
                            t.body = null,
                            t
                    }
                    l(t, e);
                    var r = t.prototype;
                    return r.onLoad = function() {
                        this.probabilityTextFormat = this.soulpearlEffectDesc.string,
                            this.initArchitectureComponents(),
                            this.bindEventListeners()
                    }
                        ,
                        r.initArchitectureComponents = function() {
                            this.protocol = d.getInstance(),
                                this.dataProcessor = b.getInstance();
                            var e = this.dataProcessor.getCurrentData();
                            this.currentSoulPearls = e.soulPearls,
                                this.selectCountNumber = 0
                        }
                        ,
                        r.bindEventListeners = function() {
                            this.btnClose.node.on(h.TOUCH_END, this.onCloseClick, this),
                                this.confirmBtn.on(h.TOUCH_END, this.onConfirmClick, this),
                                this.addBtn.on(h.TOUCH_END, this.onAddClick, this),
                                this.subBtn.on(h.TOUCH_END, this.onSubClick, this)
                        }
                        ,
                        r.refreshAwakePage = function(e) {
                            console.info("SecretRealmSelectSoulpearl: refreshAwakePage", e),
                                this.body = e,
                                this.currentSelectSoulPearl = null,
                                this.selectCountNumber = 0,
                                this.maxSelectCount = 0,
                                this.selectCount.string = this.selectCountNumber.toString(),
                                this.soulpearlList.content.removeAllChildren();
                            for (var t = e.page, l = e.soulPearl, n = E.getPageCapacity(t - 1), o = E.getPageStartIndex(t - 1), r = o + n, i = this.currentSoulPearls.slice(o, r), s = 0; s < i.length; s++) {
                                var u = i[s]
                                    , c = f(this.soulpearlItem);
                                this.soulpearlList.content.addChild(c),
                                    this.setupSoulpearlItemData(c, u)
                            }
                            if (l) {
                                var a = this.soulpearlList.content.children.find((function(e) {
                                        return e.getComponent(g).soulpearlInfo.monsterId === l.monsterId
                                    }
                                ))
                                    , S = null;
                                if (a && (S = a.getComponent(g).soulpearlInfo),
                                    S) {
                                    var h = E.getMaxProbabilityCount();
                                    this.maxSelectCount = Math.min(S.count, h),
                                        this.selectCountNumber = Math.min(l.count, this.maxSelectCount),
                                        this.selectCount.string = this.selectCountNumber.toString(),
                                        this.onSoulpearlClick(S, null)
                                }
                            } else
                                this.updateSoulpearlEffectDesc()
                        }
                        ,
                        r.setupSoulpearlItemData = function(e, t) {
                            e.getComponent(g).setData(t),
                                e.on(h.TOUCH_END, this.onSoulpearlClick.bind(this, t), this)
                        }
                        ,
                        r.onSoulpearlClick = function(e, t) {
                            if (console.info("SecretRealmSelectSoulpearl: onSoulpearlClick", e),
                            this.currentSelectSoulPearl && this.currentSelectSoulPearl.monsterId == e.monsterId)
                                return this.currentSelectSoulPearl = null,
                                    this.selectCountNumber = 0,
                                    this.maxSelectCount = 0,
                                    this.selectCount.string = this.selectCountNumber.toString(),
                                    this.updateSoulpearlEffectDesc(),
                                    void this.soulpearlList.content.children.forEach((function(e) {
                                            e.getComponent(g).setSelected(!1)
                                        }
                                    ));
                            this.currentSelectSoulPearl = e,
                            t && (this.selectCountNumber = 0),
                                this.maxSelectCount = e.count,
                                this.selectCount.string = Math.min(this.selectCountNumber, this.maxSelectCount).toString(),
                                this.updateSoulpearlEffectDesc(),
                                this.soulpearlList.content.children.forEach((function(t) {
                                        var l = t.getComponent(g);
                                        l.setSelected(l.soulpearlInfo.monsterId === e.monsterId)
                                    }
                                ))
                        }
                        ,
                        r.updateSoulpearlEffectDesc = function() {
                            if (this.currentSelectSoulPearl) {
                                var e = E.getMonsterName(this.currentSelectSoulPearl.monsterId)
                                    , t = E.getItemRateText(this.selectCountNumber);
                                this.soulpearlEffectDesc.node.active = this.selectCountNumber > 0,
                                    this.soulpearlEffectDesc.string = this.probabilityTextFormat.replace("{0}", e).replace("{1}", t),
                                "100%" === t && (this.maxSelectCount = this.selectCountNumber)
                            } else
                                this.soulpearlEffectDesc.node.active = !1
                        }
                        ,
                        r.onCloseClick = function() {
                            var e, t;
                            if (this.currentSelectSoulPearl && this.currentSelectSoulPearl.monsterId === (null == (e = this.body) || null == (t = e.soulPearl) ? void 0 : t.monsterId))
                                return this.selectCountNumber = Math.min(this.selectCountNumber, this.currentSelectSoulPearl.count),
                                    this.selectCount.string = this.selectCountNumber.toString(),
                                    this.notify(p.SELECT_SOULPEARL, {
                                        soulPearl: this.currentSelectSoulPearl,
                                        count: this.selectCountNumber
                                    }),
                                    void this.notify(p.CLOSE_SELECT_STAMPS_VIEW);
                            this.notify(p.CLOSE_SELECT_STAMPS_VIEW)
                        }
                        ,
                        r.onAddClick = function() {
                            console.info("SecretRealmSelectSoulpearl: onAddClick"),
                            this.selectCountNumber < this.maxSelectCount && (this.selectCountNumber++,
                                this.selectCount.string = this.selectCountNumber.toString(),
                                this.updateSoulpearlEffectDesc())
                        }
                        ,
                        r.onSubClick = function() {
                            console.info("SecretRealmSelectSoulpearl: onSubClick"),
                            this.selectCountNumber > 0 && (this.selectCountNumber--,
                                this.selectCount.string = this.selectCountNumber.toString(),
                                this.updateSoulpearlEffectDesc())
                        }
                        ,
                        r.onConfirmClick = function() {
                            if (console.info("SecretRealmSelectSoulpearl: onConfirmClick"),
                                !this.currentSelectSoulPearl)
                                return this.notify(p.SELECT_SOULPEARL, {
                                    soulPearl: null,
                                    count: 0
                                }),
                                    void this.notify(p.CLOSE_SELECT_STAMPS_VIEW);
                            0 != this.selectCountNumber ? this.selectCountNumber > this.maxSelectCount ? C.showAlert(E.ERROR_MESSAGES.SOUL_PEARL_NOT_ENOUGH) : (this.notify(p.SELECT_SOULPEARL, {
                                soulPearl: this.currentSelectSoulPearl,
                                count: this.selectCountNumber
                            }),
                                this.notify(p.CLOSE_SELECT_STAMPS_VIEW)) : C.showAlert(E.ERROR_MESSAGES.PLEASE_SELECT_AMOUNT)
                        }
                        ,
                        t
                }(m)).prototype, "btnClose", [P], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    k = t(D.prototype, "selectCount", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    O = t(D.prototype, "addBtn", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = t(D.prototype, "subBtn", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = t(D.prototype, "confirmBtn", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = t(D.prototype, "soulpearlList", [R], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    U = t(D.prototype, "soulpearlItem", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    B = t(D.prototype, "soulpearlEffectDesc", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    A = D)) || A));
                r._RF.pop()
            }
        }
    }
));
