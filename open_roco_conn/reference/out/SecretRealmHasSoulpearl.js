System.register("chunks:///_virtual/SecretRealmHasSoulpearl.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./SecretRealmMessage.ts", "./SecretRealmConfig.ts", "./SecretRealmDataProcessor.ts", "./SecretRealmSoulpearltem.ts"], (function(e) {
        var t, a, o, l, r, n, i, s, u, c, p, S, g, h, f, P, m, d, R;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    a = e.inheritsLoose,
                    o = e.initializerDefineProperty,
                    l = e.assertThisInitialized
            }
                , function(e) {
                    r = e.cclegacy,
                        n = e._decorator,
                        i = e.Button,
                        s = e.Node,
                        u = e.Prefab,
                        c = e.ScrollView,
                        p = e.NodeEventType,
                        S = e.instantiate,
                        g = e.Sprite,
                        h = e.Label
                }
                , function(e) {
                    f = e.GameUI
                }
                , function(e) {
                    P = e.SecretRealmMessage
                }
                , function(e) {
                    m = e.SecretRealmConfig
                }
                , function(e) {
                    d = e.SecretRealmDataProcessor
                }
                , function(e) {
                    R = e.SecretRealmSoulpearltem
                }
            ],
            execute: function() {
                var I, C, b, v, H, L, y, B, D, N, w, x;
                r._RF.push({}, "16aa2YRIVVLNLuNg3QvThGI", "SecretRealmHasSoulpearl", void 0);
                var U = n.ccclass
                    , A = n.property;
                e("SecretRealmHasSoulpearl", (I = A(i),
                    C = A(s),
                    b = A(s),
                    v = A(u),
                    H = A(c),
                U((B = t((y = function(e) {
                    function t() {
                        for (var t, a = arguments.length, r = new Array(a), n = 0; n < a; n++)
                            r[n] = arguments[n];
                        return t = e.call.apply(e, [this].concat(r)) || this,
                            o(t, "btnClose", B, l(t)),
                            o(t, "pageLeftBtn", D, l(t)),
                            o(t, "pageRightBtn", N, l(t)),
                            o(t, "soulPearlItemPrefab", w, l(t)),
                            o(t, "soulPearlScrollView", x, l(t)),
                            t.dataProcessor = void 0,
                            t.currentPageIndex = 0,
                            t.currentSoulPearls = [],
                            t.soulPearlItemNodes = [],
                            t
                    }
                    a(t, e);
                    var r = t.prototype;
                    return r.onLoad = function() {
                        this.initArchitectureComponents(),
                            this.bindEventListeners()
                    }
                        ,
                        r.initArchitectureComponents = function() {
                            this.dataProcessor = d.getInstance(),
                                console.info("SecretRealmHasSoulpearl: Architecture components initialized")
                        }
                        ,
                        r.bindEventListeners = function() {
                            this.btnClose.node.on(p.TOUCH_END, this.onCloseClick, this),
                            this.pageLeftBtn && this.pageLeftBtn.on(p.TOUCH_END, this.onPageLeftClick, this),
                            this.pageRightBtn && this.pageRightBtn.on(p.TOUCH_END, this.onPageRightClick, this)
                        }
                        ,
                        r.refreshAwakePage = function() {
                            console.info("SecretRealmHasSoulpearl: Starting to refresh soul pearl page");
                            var e = this.dataProcessor.getCurrentData();
                            if (!e)
                                return console.warn("SecretRealmHasSoulpearl: No data available"),
                                    void this.closeSoulPearl();
                            this.currentSoulPearls = e.soulPearls,
                                this.updateSoulPearlUI()
                        }
                        ,
                        r.updateSoulPearlUI = function() {
                            console.info("SecretRealmHasSoulpearl: Updating soul pearl UI"),
                                this.updateSoulPearlList(),
                                this.updatePageButtonState()
                        }
                        ,
                        r.updateSoulPearlList = function() {
                            if (this.currentSoulPearls) {
                                this.soulPearlScrollView.content.removeAllChildren();
                                for (var e = this.getPageSoulPearlData(this.currentPageIndex), t = 0; t < e.length; t++) {
                                    var a = e[t];
                                    this.createSoulPearlItem(a, t)
                                }
                                console.info("SecretRealmHasSoulpearl: Displayed " + e.length + " soul pearls on page " + this.currentPageIndex)
                            } else
                                console.warn("SecretRealmHasSoulpearl: No soul pearl data")
                        }
                        ,
                        r.getPageSoulPearlData = function(e) {
                            for (var t = m.getPageStartIndex(e), a = m.getPageCapacity(e), o = [], l = 0; l < a && t + l < this.currentSoulPearls.length; l++)
                                o.push(this.currentSoulPearls[t + l]);
                            return o
                        }
                        ,
                        r.createSoulPearlItem = function(e, t) {
                            if (this.soulPearlItemPrefab) {
                                var a = S(this.soulPearlItemPrefab);
                                if (a) {
                                    this.setupSoulPearlItemData(a, e, t);
                                    var o = this.soulPearlScrollView.content;
                                    o && (o.addChild(a),
                                        this.soulPearlItemNodes.push(a))
                                } else
                                    console.error("SecretRealmHasSoulpearl: Failed to instantiate soul pearl item")
                            } else
                                console.warn("SecretRealmHasSoulpearl: Soul pearl item prefab not found")
                        }
                        ,
                        r.setupSoulPearlItemData = function(e, t, a) {
                            var o = e.getComponent(R);
                            o ? (o.setData(t),
                                console.info("SecretRealmHasSoulpearl: Soul pearl item created - " + t.monsterName + "魂珠 x" + t.count)) : console.error("SecretRealmHasSoulpearl: Failed to get soul pearl item component")
                        }
                        ,
                        r.setupSoulPearlIcon = function(e, t) {
                            var a;
                            (null == (a = e.getChildByName("icon")) ? void 0 : a.getComponent(g)) && console.info("SecretRealmHasSoulpearl: TODO - Load soul pearl icon for " + t.monsterName)
                        }
                        ,
                        r.setupSoulPearlName = function(e, t) {
                            var a, o = null == (a = e.getChildByName("nameLabel")) ? void 0 : a.getComponent(h);
                            o && (o.string = t.monsterName + "魂珠")
                        }
                        ,
                        r.setupSoulPearlCount = function(e, t) {
                            var a, o = null == (a = e.getChildByName("countLabel")) ? void 0 : a.getComponent(h);
                            o && (o.string = t.count.toString())
                        }
                        ,
                        r.updatePageButtonState = function() {
                            if (this.pageLeftBtn) {
                                var e = this.pageLeftBtn.getComponent(i);
                                e && (e.interactable = this.currentPageIndex > 0)
                            }
                            if (this.pageRightBtn) {
                                var t = this.pageRightBtn.getComponent(i);
                                t && (t.interactable = this.currentPageIndex < m.MAX_PAGE)
                            }
                        }
                        ,
                        r.showSoulPearl = function() {
                            this.node.active = !0,
                                console.info("SecretRealmHasSoulpearl: Soul pearl UI shown")
                        }
                        ,
                        r.closeSoulPearl = function() {
                            console.info("SecretRealmHasSoulpearl: Soul pearl UI closed")
                        }
                        ,
                        r.onPageLeftClick = function() {
                            console.info("SecretRealmHasSoulpearl: Page left button clicked"),
                            this.currentPageIndex > 0 && (this.currentPageIndex--,
                                this.updateSoulPearlUI())
                        }
                        ,
                        r.onPageRightClick = function() {
                            console.info("SecretRealmHasSoulpearl: Page right button clicked"),
                            this.currentPageIndex < m.MAX_PAGE && (this.currentPageIndex++,
                                this.updateSoulPearlUI())
                        }
                        ,
                        r.onCloseClick = function() {
                            console.info("SecretRealmHasSoulpearl: Close button clicked"),
                                this.notify(P.CLOSE_HAS_STAMPS_VIEW)
                        }
                        ,
                        r.setPage = function(e) {
                            m.isValidPageIndex(e) && (this.currentPageIndex = e,
                                this.updateSoulPearlUI(),
                                console.info("SecretRealmHasSoulpearl: Page set to", e))
                        }
                        ,
                        r.getCurrentPage = function() {
                            return this.currentPageIndex
                        }
                        ,
                        r.getSoulPearlCount = function(e) {
                            return !this.currentSoulPearls || e < 0 || e >= this.currentSoulPearls.length ? 0 : this.currentSoulPearls[e].count
                        }
                        ,
                        r.refreshSoulPearlData = function() {
                            console.info("SecretRealmHasSoulpearl: Refreshing soul pearl data");
                            var e = this.dataProcessor.getCurrentData();
                            e && (this.currentSoulPearls = e.soulPearls,
                                this.updateSoulPearlList())
                        }
                        ,
                        r.onDestroy = function() {
                            console.info("SecretRealmHasSoulpearl: Component destroyed")
                        }
                        ,
                        t
                }(f)).prototype, "btnClose", [I], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    D = t(y.prototype, "pageLeftBtn", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    N = t(y.prototype, "pageRightBtn", [b], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    w = t(y.prototype, "soulPearlItemPrefab", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = t(y.prototype, "soulPearlScrollView", [H], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    L = y)) || L));
                r._RF.pop()
            }
        }
    }
));
