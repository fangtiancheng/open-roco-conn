System.register("chunks:///_virtual/SecretRealmRewardPoolCall.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./ActivityAPI.ts", "./SecretRealmMessage.ts", "./SecretRealmSoulpearltem.ts", "./SecretRealmDataProcessor.ts", "./SecretRealmProtocol.ts", "./SecretRealmConfig.ts"], (function(e) {
        var t, r, l, a, n, i, o, u, s, c, p, h, d, f, S, g, m;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    r = e.inheritsLoose,
                    l = e.initializerDefineProperty,
                    a = e.assertThisInitialized
            }
                , function(e) {
                    n = e.cclegacy,
                        i = e._decorator,
                        o = e.Button,
                        u = e.Node,
                        s = e.Label,
                        c = e.NodeEventType
                }
                , function(e) {
                    p = e.GameUI
                }
                , function(e) {
                    h = e.ActivityAPI
                }
                , function(e) {
                    d = e.SecretRealmMessage
                }
                , function(e) {
                    f = e.SecretRealmSoulpearltem
                }
                , function(e) {
                    S = e.SecretRealmDataProcessor
                }
                , function(e) {
                    g = e.SecretRealmProtocol
                }
                , function(e) {
                    m = e.SecretRealmConfig
                }
            ],
            execute: function() {
                var C, P, b, R, v, y, w, _, N, E, I, A, T, L, k, D, M, O, Y, B, H, z, W, x, U, F, V, G;
                n._RF.push({}, "db4bbSUP7ZCNbodxke1RUTH", "SecretRealmRewardPoolCall", void 0);
                var J = i.ccclass
                    , j = i.property;
                e("SecretRealmRewardPoolCall", (C = j(o),
                    P = j(u),
                    b = j(u),
                    R = j(u),
                    v = j(u),
                    y = j(u),
                    w = j(u),
                    _ = j(u),
                    N = j(u),
                    E = j(u),
                    I = j(f),
                    A = j(s),
                    T = j(s),
                J((D = t((k = function(e) {
                    function t() {
                        for (var t, r = arguments.length, n = new Array(r), i = 0; i < r; i++)
                            n[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(n)) || this,
                            l(t, "btnClose", D, a(t)),
                            l(t, "callRuleBtn", M, a(t)),
                            l(t, "pageLeftBtn", O, a(t)),
                            l(t, "pageRightBtn", Y, a(t)),
                            l(t, "firstPage", B, a(t)),
                            l(t, "secondPage", H, a(t)),
                            l(t, "thirdPage", z, a(t)),
                            l(t, "callBtn", W, a(t)),
                            l(t, "selectSoulpearlBtn", x, a(t)),
                            l(t, "soulpearlTipNode", U, a(t)),
                            l(t, "selectedSoulpearl", F, a(t)),
                            l(t, "soulpearlCallMonsterName", V, a(t)),
                            l(t, "haveYunYinCount", G, a(t)),
                            t.haveYunYinCountTextFormat = "",
                            t.soulpearlCallMonsterNameProbabilityTextFormat = "",
                            t.currentPage = 1,
                            t.protocol = void 0,
                            t.dataProcessor = void 0,
                            t.currentSelectSoulpearl = null,
                            t
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.onLoad = function() {
                        this.haveYunYinCountTextFormat = this.haveYunYinCount.string,
                            this.soulpearlCallMonsterNameProbabilityTextFormat = this.soulpearlCallMonsterName.string,
                            this.initArchitectureComponents(),
                            this.bindEventListeners()
                    }
                        ,
                        n.initArchitectureComponents = function() {
                            this.protocol = g.getInstance(),
                                this.dataProcessor = S.getInstance(),
                                console.info("SecretRealmchallenge: Architecture components initialized")
                        }
                        ,
                        n.bindEventListeners = function() {
                            this.btnClose.node.on(c.TOUCH_END, this.onCloseClick, this),
                                this.pageLeftBtn.on(c.TOUCH_END, this.onPageLeftClick, this),
                                this.pageRightBtn.on(c.TOUCH_END, this.onPageRightClick, this),
                                this.selectSoulpearlBtn.on(c.TOUCH_END, this.onSelectSoulpearlClick, this),
                                this.callRuleBtn.on(c.TOUCH_END, this.onCallRuleClick, this),
                                this.selectedSoulpearl.node.on(c.TOUCH_END, this.onSelectSoulpearlClick, this),
                                this.callBtn.on(c.TOUCH_END, this.onCallClick, this)
                        }
                        ,
                        n.refreshAwakePage = function() {
                            this.currentPage = 1,
                                this.refreshPage(),
                                this.updateHaveYunYinCount(),
                                this.updateAddSoulpearlStatus(this.currentSelectSoulpearl, 0)
                        }
                        ,
                        n.updateSelectSoulpearlEffect = function(e, t) {
                            var r = m.getMonsterName(e)
                                , l = m.getItemRateText(t);
                            this.soulpearlCallMonsterName.string = this.soulpearlCallMonsterNameProbabilityTextFormat.replace("{0}", r).replace("{1}", l)
                        }
                        ,
                        n.onCloseClick = function() {
                            this.notify(d.SHOW_MAIN_VIEW),
                                this.notify(d.CLOSE_CALL_MONSTER_VIEW)
                        }
                        ,
                        n.refreshPage = function() {
                            this.firstPage.active = 1 === this.currentPage,
                                this.secondPage.active = 2 === this.currentPage,
                                this.thirdPage.active = 3 === this.currentPage,
                                this.updateAddSoulpearlStatus(null, 0)
                        }
                        ,
                        n.onPageLeftClick = function() {
                            this.currentPage--,
                            this.currentPage < 1 && (this.currentPage = 1),
                                this.refreshPage()
                        }
                        ,
                        n.onPageRightClick = function() {
                            this.currentPage++,
                            this.currentPage > 3 && (this.currentPage = 3),
                                this.refreshPage()
                        }
                        ,
                        n.updateHaveYunYinCount = function() {
                            var e = this.dataProcessor.getCurrentData();
                            e ? this.haveYunYinCount.string = this.haveYunYinCountTextFormat.replace("{0}", e.userProgress.cloudMarks.toString()) : console.warn("SecretRealmRewardPoolCall: No data available")
                        }
                        ,
                        n.updateAddSoulpearlStatus = function(e, t) {
                            if (!e)
                                return this.currentSelectSoulpearl = null,
                                    this.selectSoulpearlBtn.active = !0,
                                    this.selectedSoulpearl.setData(null),
                                    void (this.soulpearlTipNode.active = !1);
                            this.soulpearlTipNode.active = !0,
                                this.selectedSoulpearl.node.active = !0,
                                this.selectSoulpearlBtn.active = !1;
                            var r = {
                                monsterId: null == e ? void 0 : e.monsterId,
                                monsterName: null == e ? void 0 : e.monsterName,
                                iconFrame: null == e ? void 0 : e.iconFrame,
                                count: t || 0
                            };
                            this.currentSelectSoulpearl = r,
                                this.selectedSoulpearl.setData(r),
                                this.updateSelectSoulpearlEffect(r.monsterId, r.count)
                        }
                        ,
                        n.onSelectSoulpearlClick = function() {
                            this.notify(d.SHOW_SELECT_STAMPS_VIEW, {
                                page: this.currentPage,
                                soulPearl: this.currentSelectSoulpearl
                            })
                        }
                        ,
                        n.updateSelectSoulpearl = function(e) {
                            if (console.info("SecretRealmRewardPoolCall: updateSelectSoulpearl", e),
                            !e || !e.soulPearl || !e.count)
                                return console.warn("SecretRealmRewardPoolCall: updateSelectSoulpearl body is invalid"),
                                    void this.updateAddSoulpearlStatus(null, 0);
                            this.updateAddSoulpearlStatus(e.soulPearl, e.count)
                        }
                        ,
                        n.onCallClick = function() {
                            var e, t = this;
                            console.info("SecretRealmRewardPoolCall: onCallClick");
                            var r = this.dataProcessor.getCurrentData();
                            if (r)
                                if (r.userProgress.cloudMarks < 10)
                                    h.showAlert("祥云印记数量不足");
                                else {
                                    var l = this.currentSelectSoulpearl ? this.currentSelectSoulpearl.monsterId + 1 : 0;
                                    if (l > 0)
                                        l -= m.getPageStartIndex(this.currentPage - 1);
                                    var a = (null == (e = this.currentSelectSoulpearl) ? void 0 : e.count) || 0
                                        , n = this.currentPage;
                                    this.protocol.getSummonReward(l, a, n, (function(e, r, l) {
                                            if (!e)
                                                return console.error("SecretRealmRewardPoolCall: getSummonReward error data: " + JSON.stringify(r)),
                                                    void h.showAlert(l);
                                            if (console.info("SecretRealmRewardPoolCall: getSummonReward success data: " + JSON.stringify(r)),
                                                t.dataProcessor.processServerData(r),
                                                t.updateHaveYunYinCount(),
                                                r.Item) {
                                                var a = [];
                                                if (Array.isArray(r.Item))
                                                    for (var n = 0; n < r.Item.length; n++) {
                                                        var i = {
                                                            id: parseInt(r.Item[n].id) || 0,
                                                            count: parseInt(r.Item[n].count) || 0,
                                                            type: parseInt(r.Item[n].type) || 0
                                                        };
                                                        a.push(i)
                                                    }
                                                for (var o = parseInt((null == r ? void 0 : r.succ) || "0"), u = t.currentPage, s = [[1, 1, 6, 12], [2, 1, 5, 11], [3, 1, 5, 11]], c = 1, p = 0; p < s.length; p++) {
                                                    if (u === s[p][0] && o >= s[p][1] && o < s[p][2]) {
                                                        c = 1;
                                                        break
                                                    }
                                                    if (u === s[p][0] && o >= s[p][2] && o < s[p][3]) {
                                                        c = 2;
                                                        break
                                                    }
                                                    if (u === s[p][0] && o >= s[p][3]) {
                                                        c = 3;
                                                        break
                                                    }
                                                }
                                                1 === c ? t.notify(d.SHOW_CALL_MONSTER_REWARD_VIEW, {
                                                    page: u,
                                                    index: o - 1,
                                                    rewards: a
                                                }) : 2 === c ? t.notify(d.SHOW_CALL_MONSTER_REWARD_EGG_VIEW, {
                                                    page: u,
                                                    index: o - 1,
                                                    rewards: a
                                                }) : 3 === c && t.notify(d.SHOW_CALL_MONSTER_REWARD_ITEM_VIEW, {
                                                    page: u,
                                                    index: o - 1,
                                                    rewards: a
                                                })
                                            }
                                        }
                                    ))
                                }
                            else
                                console.warn("SecretRealmRewardPoolCall: No data available")
                        }
                        ,
                        n.onCallRuleClick = function() {
                            this.notify(d.SHOW_CALL_RULE_VIEW)
                        }
                        ,
                        t
                }(p)).prototype, "btnClose", [C], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    M = t(k.prototype, "callRuleBtn", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    O = t(k.prototype, "pageLeftBtn", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Y = t(k.prototype, "pageRightBtn", [R], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    B = t(k.prototype, "firstPage", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    H = t(k.prototype, "secondPage", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    z = t(k.prototype, "thirdPage", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    W = t(k.prototype, "callBtn", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = t(k.prototype, "selectSoulpearlBtn", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    U = t(k.prototype, "soulpearlTipNode", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = t(k.prototype, "selectedSoulpearl", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    V = t(k.prototype, "soulpearlCallMonsterName", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    G = t(k.prototype, "haveYunYinCount", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = k)) || L));
                n._RF.pop()
            }
        }
    }
));
