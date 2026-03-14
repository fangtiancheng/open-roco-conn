System.register("chunks:///_virtual/SecretRealmchallenge.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./CFunction.ts", "./CommonAPI.ts", "./ActivityAPI.ts", "./SecretRealmMessage.ts", "./SecretRealmConfig.ts", "./SecretRealmProtocol.ts", "./SecretRealmDataProcessor.ts", "./CombatType.ts", "./ResManager.ts", "./PureNotificationCenter.ts"], (function(e) {
        var t, n, a, r, o, i, l, s, c, h, u, g, m, f, d, p, I, R, C, b, S, w, N;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    n = e.inheritsLoose,
                    a = e.initializerDefineProperty,
                    r = e.assertThisInitialized
            }
                , function(e) {
                    o = e.cclegacy,
                        i = e._decorator,
                        l = e.Button,
                        s = e.Sprite,
                        c = e.Label,
                        h = e.Node,
                        u = e.NodeEventType,
                        g = e.SpriteFrame
                }
                , function(e) {
                    m = e.GameUI
                }
                , function(e) {
                    f = e.CFunction
                }
                , function(e) {
                    d = e.CommonAPI
                }
                , function(e) {
                    p = e.ActivityAPI
                }
                , function(e) {
                    I = e.SecretRealmMessage
                }
                , function(e) {
                    R = e.SecretRealmConfig
                }
                , function(e) {
                    C = e.SecretRealmProtocol
                }
                , function(e) {
                    b = e.SecretRealmDataProcessor
                }
                , function(e) {
                    S = e.CombatType
                }
                , function(e) {
                    w = e.default
                }
                , function(e) {
                    N = e.PureNotificationCenter
                }
            ],
            execute: function() {
                var k, E, v, B, T, A, L, y, W, M, _, F, P, x, H, O, D, U, z, G, V, j, J, q;
                o._RF.push({}, "8f775vGyJpCwoHDujnbS5kU", "SecretRealmchallenge", void 0);
                var K = i.ccclass
                    , Q = i.property;
                e("SecretRealmchallenge", (k = Q(l),
                    E = Q(s),
                    v = Q(s),
                    B = Q(c),
                    T = Q(c),
                    A = Q(c),
                    L = Q(c),
                    y = Q(c),
                    W = Q(s),
                    M = Q(s),
                    _ = Q(h),
                K((x = t((P = function(e) {
                    function t() {
                        for (var t, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
                            o[i] = arguments[i];
                        return t = e.call.apply(e, [this].concat(o)) || this,
                            a(t, "btnClose", x, r(t)),
                            a(t, "bg", H, r(t)),
                            a(t, "monsterIcon", O, r(t)),
                            a(t, "monsterName", D, r(t)),
                            a(t, "taskLimit", U, r(t)),
                            a(t, "taskChallengeName", z, r(t)),
                            a(t, "taskWinReward", G, r(t)),
                            a(t, "taskWinReward2", V, r(t)),
                            a(t, "dropItemIcon1", j, r(t)),
                            a(t, "dropItemIcon2", J, r(t)),
                            a(t, "challengeBtn", q, r(t)),
                            t.protocol = void 0,
                            t.dataProcessor = void 0,
                            t.currentChallengeInfo = null,
                            t.currentMonsterInfo = null,
                            t.isBattling = !1,
                            t.monsterNameTextFormat = "",
                            t.taskLimitTextFormat = "",
                            t.taskChallengeNameTextFormat = "",
                            t.taskWinRewardTextFormat = "",
                            t.taskWinReward2TextFormat = "",
                            t
                    }
                    n(t, e);
                    var o = t.prototype;
                    return o.onLoad = function() {
                        this.monsterNameTextFormat = this.monsterName.string,
                            this.taskLimitTextFormat = this.taskLimit.string,
                            this.taskChallengeNameTextFormat = this.taskChallengeName.string,
                            this.taskWinRewardTextFormat = this.taskWinReward.string,
                            this.taskWinReward2TextFormat = this.taskWinReward2.string,
                            this.initArchitectureComponents(),
                            this.bindEventListeners()
                    }
                        ,
                        o.initArchitectureComponents = function() {
                            this.protocol = C.getInstance(),
                                this.dataProcessor = b.getInstance(),
                                console.info("SecretRealmchallenge: Architecture components initialized")
                        }
                        ,
                        o.bindEventListeners = function() {
                            this.btnClose.node.on(u.TOUCH_END, this.onCloseClick, this),
                            this.challengeBtn && this.challengeBtn.on(u.TOUCH_END, this.onChallengeClick, this)
                        }
                        ,
                        o.refreshAwakePage = function(e) {
                            if (console.info("SecretRealmchallenge: Starting to refresh challenge page"),
                                !e)
                                return console.warn("SecretRealmchallenge: No challenge data available"),
                                    void this.closeChallenge();
                            this.currentChallengeInfo = e,
                                this.currentMonsterInfo = this.findMonsterInfo(this.currentChallengeInfo.monsterId),
                                this.updateChallengeUI(),
                                this.showChallenge()
                        }
                        ,
                        o.findMonsterInfo = function(e) {
                            var t = this.dataProcessor.getCurrentData();
                            if (!t)
                                return null;
                            for (var n = 0; n < t.monsters.length; n++)
                                if (t.monsters[n].id === e)
                                    return t.monsters[n];
                            return null
                        }
                        ,
                        o.updateChallengeUI = function() {
                            this.currentChallengeInfo && this.currentMonsterInfo ? (console.info("SecretRealmchallenge: Updating challenge UI for", this.currentChallengeInfo.monsterName),
                                this.updateMonsterBasicInfo(),
                                this.updateChallengeRestrictions(),
                                this.updateRewardInfo(),
                                this.updateChallengeButtonState()) : console.warn("SecretRealmchallenge: Missing challenge or monster info")
                        }
                        ,
                        o.updateMonsterBasicInfo = function() {
                            this.monsterName && (this.monsterName.string = this.monsterNameTextFormat.replace("{0}", this.currentChallengeInfo.monsterName)),
                            this.taskChallengeName && (this.taskChallengeName.string = this.taskChallengeNameTextFormat.replace("{0}", this.currentChallengeInfo.monsterName)),
                                this.updateMonsterIcon(),
                                this.updateBg()
                        }
                        ,
                        o.updateMonsterIcon = function() {
                            var e = this;
                            if (this.monsterIcon && this.currentMonsterInfo) {
                                console.info("SecretRealmchallenge: TODO - Load monster icon for", this.currentMonsterInfo.name);
                                var t = "prefabs/secret-realm/imgs/monster-avatar/山海异兽-" + this.currentMonsterInfo.name + "-" + (this.currentMonsterInfo.id + 1);
                                w.Instance.loadingRes("gui", t, (function(t, n) {
                                        if (t)
                                            console.error("[jinlong] [SecretRealmchallenge] loadingRes error: " + t.message);
                                        else {
                                            var a = g.createWithImage(n);
                                            e.monsterIcon.spriteFrame = a
                                        }
                                    }
                                ))
                            }
                        }
                        ,
                        o.updateBg = function() {
                            var e = this;
                            if (this.bg) {
                                var t = "prefabs/secret-realm/imgs/img-bg/秘境挑战-底图-" + (this.currentMonsterInfo.id + 1);
                                w.Instance.loadingRes("gui", t, (function(t, n) {
                                        if (t)
                                            console.error("[jinlong] [SecretRealmchallenge] loadingRes error: " + t.message);
                                        else {
                                            var a = g.createWithImage(n);
                                            e.bg.spriteFrame = a
                                        }
                                    }
                                ))
                            }
                        }
                        ,
                        o.updateChallengeRestrictions = function() {
                            this.taskLimit && (this.taskLimit.string = this.taskLimitTextFormat.replace("{0}", this.currentChallengeInfo.allowedAttrText).replace("仅可携带", "").replace("宠物进入秘境", ""))
                        }
                        ,
                        o.updateRewardInfo = function() {
                            if (this.taskWinReward && (this.taskWinReward.string = this.taskWinRewardTextFormat.replace("{0}", "祥云印记")),
                                this.taskWinReward2) {
                                var e = this.currentChallengeInfo.monsterName + "魂珠"
                                    , t = R.CHALLENGE_SOUL_PEARL_RATE[this.currentChallengeInfo.monsterId];
                                this.taskWinReward2.string = this.taskWinReward2TextFormat.replace("{1}", e).replace("{0}", t.toString())
                            }
                            this.updateDropItemIcons()
                        }
                        ,
                        o.updateDropItemIcons = function() {
                            var e = this;
                            if (this.dropItemIcon1) {
                                w.Instance.loadingRes("gui", "prefabs/secret-realm/imgs/item-icon/icon-印记", (function(t, n) {
                                        if (t)
                                            console.error("[jinlong] [SecretRealmchallenge] loadingRes error: " + t.message);
                                        else {
                                            var a = g.createWithImage(n);
                                            e.dropItemIcon1.spriteFrame = a
                                        }
                                    }
                                ))
                            }
                            if (this.dropItemIcon2) {
                                var t = "prefabs/secret-realm/imgs/soulpearl-icon/icon-魂珠-" + (this.currentMonsterInfo.id + 1);
                                w.Instance.loadingRes("gui", t, (function(t, n) {
                                        if (t)
                                            console.error("[jinlong] [SecretRealmchallenge] loadingRes error: " + t.message);
                                        else {
                                            var a = g.createWithImage(n);
                                            e.dropItemIcon2.spriteFrame = a
                                        }
                                    }
                                ))
                            }
                        }
                        ,
                        o.updateChallengeButtonState = function() {
                            if (this.challengeBtn) {
                                var e = this.challengeBtn.getComponent(l);
                                if (e) {
                                    var t = this.currentChallengeInfo.canChallenge && !this.isBattling;
                                    e.interactable = t
                                }
                            }
                        }
                        ,
                        o.showChallenge = function() {
                            this.node.active = !0,
                                console.info("SecretRealmchallenge: Challenge UI shown")
                        }
                        ,
                        o.closeChallenge = function() {
                            this.node.active = !1,
                                this.currentChallengeInfo = null,
                                this.currentMonsterInfo = null,
                                this.isBattling = !1,
                                console.info("SecretRealmchallenge: Challenge UI closed")
                        }
                        ,
                        o.onChallengeClick = function() {
                            console.info("SecretRealmchallenge: Challenge button clicked"),
                                this.currentChallengeInfo && this.currentMonsterInfo ? this.isBattling ? console.warn("SecretRealmchallenge: Already in battle") : this.currentChallengeInfo.canChallenge ? this.startBattle() : console.warn("SecretRealmchallenge: Challenge not available") : console.warn("SecretRealmchallenge: No challenge info available")
                        }
                        ,
                        o.startBattle = function() {
                            this.isBattling = !0,
                                this.updateChallengeButtonState(),
                                console.info("SecretRealmchallenge: Starting battle with", this.currentChallengeInfo.monsterName);
                            var e = this.currentChallengeInfo.combatId
                                , n = new f(t.onBattleResult,t);
                            try {
                                d.startNpcCombat(e, S.PVB, n),
                                    console.info("SecretRealmchallenge: Battle started successfully"),
                                    this.notify(I.CLOSE_MASTER_VIEW)
                            } catch (e) {
                                console.error("SecretRealmchallenge: Failed to start battle", e),
                                    p.showAlert("战斗启动失败")
                            }
                        }
                        ,
                        t.onBattleResult = function(e) {
                            switch (console.info("SecretRealmchallenge: Battle result received", e),
                                e) {
                                case R.BATTLE_RESULT.WIN:
                                    t.handleBattleWin();
                                    break;
                                case R.BATTLE_RESULT.HP_NOT_ENOUGH:
                                    t.handleBattleHpNotEnough();
                                    break;
                                default:
                                    t.handleBattleLose()
                            }
                        }
                        ,
                        t.handleBattleWin = function() {
                            console.info("SecretRealmchallenge: Battle won!"),
                                C.getInstance().submitBattleResult((function(e, t, n) {
                                        if (console.info("SecretRealmchallenge: submitBattleResult success: " + e + " data: " + JSON.stringify(t) + " error: " + n),
                                            e) {
                                            var a = "挑战胜利！恭喜获得1个祥云印记。";
                                            if (t.succ && t.succ > 0) {
                                                var r = t.succ - 1;
                                                a += "恭喜获得1个" + R.getMonsterName(r) + "魂珠。"
                                            }
                                            p.showAlert(a),
                                                N.sendNotification(I.SHOW_MASTER_VIEW)
                                        } else
                                            console.error("SecretRealmchallenge: Failed to submit battle result", n),
                                                p.showAlert(n || "提交战斗结果失败"),
                                                N.sendNotification(I.SHOW_MASTER_VIEW)
                                    }
                                ))
                        }
                        ,
                        t.handleBattleHpNotEnough = function() {
                            console.warn("SecretRealmchallenge: Battle failed - HP not enough"),
                                N.sendNotification(I.SHOW_MASTER_VIEW),
                                p.showAlert(R.ERROR_MESSAGES.CHALLENGE_FAILED)
                        }
                        ,
                        t.handleBattleLose = function() {
                            N.sendNotification(I.SHOW_MASTER_VIEW),
                                p.showAlert(R.ERROR_MESSAGES.CHALLENGE_FAILED)
                        }
                        ,
                        o.onCloseClick = function() {
                            console.info("SecretRealmchallenge: Close button clicked"),
                                this.notify(I.CLOSE_CHALLENGE_VIEW)
                        }
                        ,
                        o.onDestroy = function() {
                            console.info("SecretRealmchallenge: Component destroyed")
                        }
                        ,
                        t
                }(m)).prototype, "btnClose", [k], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }),
                    H = t(P.prototype, "bg", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    O = t(P.prototype, "monsterIcon", [v], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    D = t(P.prototype, "monsterName", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    U = t(P.prototype, "taskLimit", [T], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    z = t(P.prototype, "taskChallengeName", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    G = t(P.prototype, "taskWinReward", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    V = t(P.prototype, "taskWinReward2", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = t(P.prototype, "dropItemIcon1", [W], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    J = t(P.prototype, "dropItemIcon2", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    q = t(P.prototype, "challengeBtn", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = P)) || F));
                o._RF.pop()
            }
        }
    }
));
