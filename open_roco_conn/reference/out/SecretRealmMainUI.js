System.register("chunks:///_virtual/SecretRealmMainUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./ActivityAPI.ts", "./SecretRealmMessage.ts", "./SecretRealmConfig.ts", "./SecretRealmProtocol.ts", "./SecretRealmDataProcessor.ts", "./SecretRealmMainMonsterItem.ts", "./SecretRealmMainScrollItem.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts"], (function(e) {
        var t, n, i, o, a, r, l, c, s, u, h, f, p, m, d, g, S, I, C, b, M, R, U;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    i = e.initializerDefineProperty,
                    o = e.assertThisInitialized
            }
                , function(e) {
                    a = e.cclegacy,
                        r = e._decorator,
                        l = e.Node,
                        c = e.ScrollView,
                        s = e.Label,
                        u = e.Prefab,
                        h = e.NodeEventType,
                        f = e.instantiate,
                        p = e.Vec2
                }
                , function(e) {
                    m = e.GameUI
                }
                , function(e) {
                    d = e.ActivityAPI
                }
                , function(e) {
                    g = e.SecretRealmMessage
                }
                , function(e) {
                    S = e.SecretRealmConfig
                }
                , function(e) {
                    I = e.SecretRealmProtocol
                }
                , function(e) {
                    C = e.SecretRealmDataProcessor
                }
                , function(e) {
                    b = e.SecretRealmMainMonsterItem
                }
                , function(e) {
                    M = e.SecretRealmMainScrollItem
                }
                , function(e) {
                    R = e.PureNotificationCenter
                }
                , function(e) {
                    U = e.AppConstDef
                }
            ],
            execute: function() {
                var v, D, y, k, P, L, E, w, N, _, A, T, O, B, H, z, V, W, x, F, G, q, j, J, Q, K, X, Y, Z, $, ee, te, ne, ie, oe, ae, re, le, ce, se;
                a._RF.push({}, "c86baUCFbpKFJTWQiDD7goQ", "SecretRealmMainUI", void 0);
                var ue = r.ccclass
                    , he = r.property;
                e("SecretRealmMainUI", (v = he(l),
                    D = he(l),
                    y = he(l),
                    k = he(c),
                    P = he(l),
                    L = he(l),
                    E = he(l),
                    w = he(l),
                    N = he(l),
                    _ = he(l),
                    A = he(s),
                    T = he(s),
                    O = he(s),
                    B = he(l),
                    H = he(l),
                    z = he(s),
                    V = he(c),
                    W = he(u),
                    x = he(u),
                ue((q = t((G = function(e) {
                    function t() {
                        for (var t, n = arguments.length, a = new Array(n), r = 0; r < n; r++)
                            a[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(a)) || this,
                            i(t, "ruleBtn", q, o(t)),
                            i(t, "openedNode", j, o(t)),
                            i(t, "unopenedNode", J, o(t)),
                            i(t, "lockedList", Q, o(t)),
                            i(t, "lookHasBtn", K, o(t)),
                            i(t, "pageUpBtn", X, o(t)),
                            i(t, "pageDownBtn", Y, o(t)),
                            i(t, "pageLeftBtn", Z, o(t)),
                            i(t, "pageRightBtn", $, o(t)),
                            i(t, "petBtn", ee, o(t)),
                            i(t, "stampCount", te, o(t)),
                            i(t, "callCount", ne, o(t)),
                            i(t, "hasStampCount", ie, o(t)),
                            i(t, "callBtn", oe, o(t)),
                            i(t, "openChallengeBtn", ae, o(t)),
                            i(t, "challengeRuleDesc", re, o(t)),
                            i(t, "monsterList", le, o(t)),
                            i(t, "monsterItem", ce, o(t)),
                            i(t, "scrollItem", se, o(t)),
                            t.protocol = void 0,
                            t.dataProcessor = void 0,
                            t.currentData = null,
                            t.currentPageIndex = 0,
                            t.scrollIncrement = .1,
                            t.uiState = {
                                mainUI: {
                                    isVisible: !0,
                                    currentFrame: 1,
                                    animationState: "normal"
                                },
                                popups: {
                                    combat: !1,
                                    spirit: !1,
                                    summon: !1,
                                    choose: !1,
                                    reward: !1,
                                    rule: !1,
                                    summonTip: !1
                                },
                                pagination: {
                                    spiritPage: 0,
                                    combatPage: 0,
                                    mainPage: 0
                                }
                            },
                            t
                    }
                    n(t, e);
                    var a = t.prototype;
                    return a.onLoad = function() {
                        this.initArchitectureComponents(),
                            this.bindEventListeners(),
                            this.initScrollControl(),
                            this.initUIState()
                    }
                        ,
                        a.initArchitectureComponents = function() {
                            this.protocol = I.getInstance(),
                                this.dataProcessor = C.getInstance(),
                                console.info("SecretRealmMainUI: Architecture components initialized")
                        }
                        ,
                        a.bindEventListeners = function() {
                            this.ruleBtn.on(h.TOUCH_END, this.onRuleClick, this),
                                this.lookHasBtn.on(h.TOUCH_END, this.onLookHasClick, this),
                                this.pageUpBtn.on(h.TOUCH_END, this.onPageUpClick, this),
                                this.pageDownBtn.on(h.TOUCH_END, this.onPageDownClick, this),
                                this.pageLeftBtn.on(h.TOUCH_END, this.onPageLeftClick, this),
                                this.pageRightBtn.on(h.TOUCH_END, this.onPageRightClick, this),
                                this.petBtn.on(h.TOUCH_END, this.onPetClick, this),
                                this.callBtn.on(h.TOUCH_END, this.onCallClick, this),
                                this.openChallengeBtn.on(h.TOUCH_END, this.onOpenChallengeClick, this)
                        }
                        ,
                        a.initScrollControl = function() {
                            if (this.lockedList) {
                                this.lockedList.content.removeAllChildren();
                                for (var e = 0; e < S.COMBAT_IDS.length; e++) {
                                    var t = S.COMBAT_IDS[e]
                                        , n = S.COMBAT_NAMES[e]
                                        , i = f(this.scrollItem);
                                    i.getComponent(M).setScrollData(t, n, !0),
                                        this.lockedList.content.addChild(i)
                                }
                            }
                        }
                        ,
                        a.initUIState = function() {
                            this.updatePopupStates()
                        }
                        ,
                        a.refreshAwakePage = function() {
                            console.info("SecretRealmMainUI: Starting to refresh awake page"),
                                this.requestServerData()
                        }
                        ,
                        a.requestServerData = function() {
                            var e = this;
                            console.info("SecretRealmMainUI: Requesting server data"),
                                this.protocol.querySecretRealmData((function(t, n, i) {
                                        t ? (console.info("[jinlong] [SecretRealmMainUI] requestServerData success , data: " + JSON.stringify(n)),
                                            e.handleServerDataReceived(n)) : e.handleServerError(i || "数据请求失败")
                                    }
                                ))
                        }
                        ,
                        a.handleServerDataReceived = function(e) {
                            console.info("SecretRealmMainUI: Server data received", e);
                            try {
                                if (this.currentData = this.dataProcessor.processServerData(e),
                                    !this.dataProcessor.validateData(this.currentData))
                                    throw new Error("Invalid data structure");
                                this.updateMainUI()
                            } catch (e) {
                                console.error("SecretRealmMainUI: Failed to process server data", e),
                                    this.handleServerError("数据处理失败")
                            }
                        }
                        ,
                        a.handleServerError = function(e) {
                            console.error("SecretRealmMainUI: Server error", e)
                        }
                        ,
                        a.updateMainUI = function() {
                            this.currentData ? (console.info("SecretRealmMainUI: Updating main UI"),
                                this.updateActivityStatus(),
                                this.updateMonsterList(),
                                this.updateCountDisplays(),
                                this.updateChallengeRuleDesc()) : console.warn("SecretRealmMainUI: No current data available")
                        }
                        ,
                        a.updateActivityStatus = function() {
                            var e = this.currentData.activityStatus;
                            switch (e.uiState) {
                                case S.UI_STATE.CLOSED:
                                    this.openedNode.active = !1,
                                        this.unopenedNode.active = !0;
                                    break;
                                case S.UI_STATE.COMPLETED:
                                default:
                                    this.openedNode.active = !0,
                                        this.unopenedNode.active = !1
                            }
                            this.uiState.mainUI.currentFrame = e.uiState
                        }
                        ,
                        a.updateMonsterList = function() {
                            if (this.currentData && this.monsterList) {
                                console.info("SecretRealmMainUI: Updating monster list");
                                var e = this.currentData.monsters.filter((function(e) {
                                        return 0 !== e.dayValue
                                    }
                                ));
                                if (!(0 === e.length || 3 * this.currentPageIndex >= e.length)) {
                                    this.monsterList.content.removeAllChildren();
                                    for (var t = 0; t < 3; t++) {
                                        var n = e[3 * this.currentPageIndex + t];
                                        this.createMonsterItem(n, 3 * this.currentPageIndex + t)
                                    }
                                    console.info("[jinlong] [SecretRealmMainUI] updateMonsterList: " + this.currentPageIndex)
                                }
                            }
                        }
                        ,
                        a.createMonsterItem = function(e, t) {
                            if (this.monsterItem) {
                                var n = f(this.monsterItem);
                                n ? (this.setupMonsterItemData(n, e, e.id),
                                    this.monsterList.content.addChild(n)) : console.error("SecretRealmMainUI: Failed to instantiate monster item")
                            } else
                                console.warn("SecretRealmMainUI: Monster item prefab not found")
                        }
                        ,
                        a.setupMonsterItemData = function(e, t, n) {
                            var i = e.getComponent(b);
                            i.setMonsterData(t),
                                i.node.on(b.SHOW_CHALLENGE_VIEW, this.onMonsterItemClick, this),
                                console.info("SecretRealmMainUI: Monster item created - " + t.name + " (" + t.id + ")")
                        }
                        ,
                        a.setupMonsterItemStatus = function(e, t) {
                            switch (t.status) {
                                case S.MONSTER_STATUS.NOT_CHALLENGED:
                                case S.MONSTER_STATUS.CHALLENGED:
                                case S.MONSTER_STATUS.CAN_CHALLENGE:
                            }
                            if (0 === t.dayValue) {
                                var n = e.getChildByName("lockFlag");
                                n && (n.active = !0)
                            }
                        }
                        ,
                        a.updateCountDisplays = function() {
                            if (this.currentData) {
                                var e = this.currentData.userProgress;
                                this.stampCount && (this.stampCount.string = "10"),
                                this.hasStampCount && (this.hasStampCount.string = "" + e.cloudMarks),
                                this.callCount && (this.callCount.string = "1")
                            }
                        }
                        ,
                        a.updateChallengeRuleDesc = function() {
                            if (this.currentData && this.challengeRuleDesc) {
                                for (var e = this.currentData.userProgress, t = "仅可携带", n = 0; n < e.allowedAttrNames.length; n++)
                                    n > 0 && (t += "、"),
                                        t += e.allowedAttrNames[n];
                                t += "宠物进入秘境",
                                    this.challengeRuleDesc.string = t
                            }
                        }
                        ,
                        a.updatePopupStates = function() {}
                        ,
                        a.setUIVisible = function(e) {
                            this.node.active = e,
                                this.uiState.mainUI.isVisible = e
                        }
                        ,
                        a.onMonsterItemClick = function(e) {
                            var t = this;
                            console.info("SecretRealmMainUI: Monster item clicked", e.name),
                                0 !== e.dayValue ? this.protocol.viewMonsterDetail(e.index + 1, (function(n, i, o) {
                                        console.info("[jinlong] [SecretRealmMainUI] onMonsterItemClick: " + e.name + " , success: " + n + " , data: " + JSON.stringify(i)),
                                            n ? t.showChallengeUI(e, i) : (console.error("SecretRealmMainUI: Failed to get monster detail", o),
                                                d.showAlert(o))
                                    }
                                )) : console.warn("SecretRealmMainUI: Monster not opened yet")
                        }
                        ,
                        a.showChallengeUI = function(e, t) {
                            var n = this.dataProcessor.processChallengeData(e.id, t);
                            this.currentData.challengeInfo = n,
                                this.notify(g.SHOW_CHALLENGE_VIEW, n)
                        }
                        ,
                        a.onRuleClick = function() {
                            console.info("SecretRealmMainUI: Rule button clicked"),
                                this.notify(g.SHOW_MAIN_RULE_VIEW)
                        }
                        ,
                        a.onLookHasClick = function() {
                            console.info("SecretRealmMainUI: Look has button clicked"),
                                this.notify(g.SHOW_HAS_STAMPS_VIEW)
                        }
                        ,
                        a.onPageUpClick = function() {
                            console.info("SecretRealmMainUI: Page up button clicked");
                            var e = this.lockedList.getScrollOffset()
                                , t = this.lockedList.getMaxScrollOffset()
                                , n = 1 - e.y / t.y + this.scrollIncrement;
                            n > 1 && (n = 1),
                                this.lockedList.scrollTo(new p(0,n), .3)
                        }
                        ,
                        a.onPageDownClick = function() {
                            console.info("SecretRealmMainUI: Page down button clicked");
                            var e = this.lockedList.getScrollOffset()
                                , t = this.lockedList.getMaxScrollOffset()
                                , n = 1 - e.y / t.y - this.scrollIncrement;
                            n < 0 && (n = 0),
                                this.lockedList.scrollTo(new p(0,n), .3)
                        }
                        ,
                        a.onPageLeftClick = function() {
                            console.info("SecretRealmMainUI: Page left button clicked"),
                            this.currentPageIndex > 0 && (this.currentPageIndex--,
                                this.updateMonsterList())
                        }
                        ,
                        a.onPageRightClick = function() {
                            console.info("SecretRealmMainUI: Page right button clicked"),
                            this.currentPageIndex < S.MAX_PAGE - 1 && (this.currentPageIndex++,
                                this.updateMonsterList())
                        }
                        ,
                        a.onPetClick = function() {
                            console.info("SecretRealmMainUI: Pet button clicked"),
                                this.notify(g.CLOSE_MASTER_VIEW),
                                R.sendNotification(U.NN_V_SHOW_SPIRIT_BAG_VIEW)
                        }
                        ,
                        a.onCallClick = function() {
                            console.info("SecretRealmMainUI: Call button clicked"),
                                this.currentData ? this.notify(g.SHOW_CALL_MONSTER_VIEW) : console.warn("SecretRealmMainUI: No data available for summon")
                        }
                        ,
                        a.onOpenChallengeClick = function() {
                            var e = this;
                            console.info("SecretRealmMainUI: Open challenge button clicked"),
                                this.protocol.openActivity((function(t, n, i) {
                                        t ? e.handleServerDataReceived(n) : console.error("SecretRealmMainUI: Failed to open activity", i)
                                    }
                                ))
                        }
                        ,
                        t
                }(m)).prototype, "ruleBtn", [v], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    j = t(G.prototype, "openedNode", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    J = t(G.prototype, "unopenedNode", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Q = t(G.prototype, "lockedList", [k], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    K = t(G.prototype, "lookHasBtn", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    X = t(G.prototype, "pageUpBtn", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Y = t(G.prototype, "pageDownBtn", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Z = t(G.prototype, "pageLeftBtn", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    $ = t(G.prototype, "pageRightBtn", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ee = t(G.prototype, "petBtn", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    te = t(G.prototype, "stampCount", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ne = t(G.prototype, "callCount", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ie = t(G.prototype, "hasStampCount", [O], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    oe = t(G.prototype, "callBtn", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ae = t(G.prototype, "openChallengeBtn", [H], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    re = t(G.prototype, "challengeRuleDesc", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    le = t(G.prototype, "monsterList", [V], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ce = t(G.prototype, "monsterItem", [W], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    se = t(G.prototype, "scrollItem", [x], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = G)) || F));
                a._RF.pop()
            }
        }
    }
));
