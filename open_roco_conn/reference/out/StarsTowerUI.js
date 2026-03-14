System.register("chunks:///_virtual/StarsTowerUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./StarsTowerMessage.ts", "./StarsTowerCGI.ts", "./PetAnimation.ts", "./StarsTowerPetItem.ts", "./StarsTowerConfig.ts", "./ActivityAPI.ts", "./AppConstDef.ts", "./ToolTip.ts", "./BubbleSkinType.ts"], (function(t) {
        var e, i, n, r, s, o, a, u, l, p, h, c, f, d, B, g, b, m, w, v, y, I, S, C, R, T, _, A, x, E;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    r = t.assertThisInitialized
            }
                , function(t) {
                    s = t.cclegacy,
                        o = t._decorator,
                        a = t.Node,
                        u = t.Label,
                        l = t.ProgressBar,
                        p = t.Sprite,
                        h = t.NodeEventType,
                        c = t.Button
                }
                , function(t) {
                    f = t.GameUI
                }
                , function(t) {
                    d = t.StarsTowerMessage
                }
                , function(t) {
                    B = t.GetStarsTowerConfig,
                        g = t.GetStarsTowerFirstAward,
                        b = t.GetBossProgressAward
                }
                , function(t) {
                    m = t.PetAnimation,
                        w = t.PetAction
                }
                , function(t) {
                    v = t.StarsTowerPetItem
                }
                , function(t) {
                    y = t.TOP_BOSS_REWARD_TIPS,
                        I = t.FLOOR_INDEX_ARR,
                        S = t.UPBOSS_MAX_STAR,
                        C = t.UPBOSS_STAR_PROGRESS,
                        R = t.UPBOSS_STAR_CONDITION
                }
                , function(t) {
                    T = t.ActivityAPI
                }
                , function(t) {
                    _ = t.AppConstDef
                }
                , function(t) {
                    A = t.ToolTipComponent,
                        x = t.TipUtils
                }
                , function(t) {
                    E = t.BubbleSkinType
                }
            ],
            execute: function() {
                var O, U, N, D, L, P, z, H, F, W, V, k, G, M, X, J, j, q, K, Q, Y, Z, $, tt, et, it, nt, rt, st, ot, at, ut, lt, pt, ht, ct, ft, dt, Bt, gt, bt, mt, wt, vt, yt, It, St, Ct, Rt, Tt;
                s._RF.push({}, "b291bCJlHNOzJh1U89v/43e", "StarsTowerUI", void 0);
                var _t = o.ccclass
                    , At = o.property;
                t("StarsTowerUI", (O = At(a),
                    U = At(a),
                    N = At(a),
                    D = At(a),
                    L = At(a),
                    P = At(a),
                    z = At(a),
                    H = At(a),
                    F = At(a),
                    W = At(a),
                    V = At(u),
                    k = At(m),
                    G = At(a),
                    M = At(a),
                    X = At(u),
                    J = At(u),
                    j = At(u),
                    q = At(l),
                    K = At(u),
                    Q = At(a),
                    Y = At(a),
                    Z = At(p),
                    $ = At(a),
                    tt = At(v),
                _t((nt = e((it = function(t) {
                    function e() {
                        for (var e, i = arguments.length, s = new Array(i), o = 0; o < i; o++)
                            s[o] = arguments[o];
                        return e = t.call.apply(t, [this].concat(s)) || this,
                            n(e, "closeBtn", nt, r(e)),
                            n(e, "ruleButton", rt, r(e)),
                            n(e, "upRuleButton", st, r(e)),
                            n(e, "challengeButton", ot, r(e)),
                            n(e, "lastButton", at, r(e)),
                            n(e, "nextButton", ut, r(e)),
                            n(e, "firstAwardButton", lt, r(e)),
                            n(e, "shopButton", pt, r(e)),
                            n(e, "cleanButton", ht, r(e)),
                            n(e, "petButton", ct, r(e)),
                            n(e, "levelName", ft, r(e)),
                            n(e, "petAnimation", dt, r(e)),
                            n(e, "bottomRoot", Bt, r(e)),
                            n(e, "upRoot", gt, r(e)),
                            n(e, "upBossSkillDesc", bt, r(e)),
                            n(e, "upBossConditionLabel", mt, r(e)),
                            n(e, "upBossCDLabel", wt, r(e)),
                            n(e, "upBossProgressBar", vt, r(e)),
                            n(e, "upBossEnergyCount", yt, r(e)),
                            n(e, "upBossStars", It, r(e)),
                            n(e, "upBossConditionFlagList", St, r(e)),
                            n(e, "upBossRewards", Ct, r(e)),
                            n(e, "stars", Rt, r(e)),
                            n(e, "bossList", Tt, r(e)),
                            e.params = void 0,
                            e.config = void 0,
                            e.currIndex = 0,
                            e.upBossRefreshTime = 0,
                            e
                    }
                    i(e, t);
                    var s = e.prototype;
                    return s.start = function() {
                        var t = this;
                        this.closeBtn.on(h.TOUCH_END, this.onCloseBtn, this),
                            this.ruleButton.on(h.TOUCH_END, this.onRuleBtn, this),
                            this.upRuleButton.on(h.TOUCH_END, this.onRuleBtn, this),
                            this.challengeButton.on(h.TOUCH_END, this.onChallengeBtn, this),
                            this.lastButton.on(h.TOUCH_END, this.onLastBtn, this),
                            this.nextButton.on(h.TOUCH_END, this.onNextBtn, this),
                            this.firstAwardButton.on(h.TOUCH_END, this.onFirstAwardBtn, this),
                            this.shopButton.on(h.TOUCH_END, this.onShopBtn, this),
                            this.cleanButton.on(h.TOUCH_END, this.onCleanBtn, this),
                            this.petButton.on(h.TOUCH_END, this.onPetBtn, this);
                        for (var e = 0; e < this.upBossRewards.length; e++) {
                            var i = this.upBossRewards[e];
                            i.node.on(h.TOUCH_END, this.onBoosReward, this),
                                i.node.addComponent(A),
                                x.CreateTip(i.node, y[e], E.COMMON_TOOLTIP)
                        }
                        this.schedule((function() {
                                t.upBossRefreshTime > 0 && (t.upBossRefreshTime--,
                                    t.upBossRefreshTime > 0 ? 7 === t.currIndex && t.updateUpBossCD(t.upBossRefreshTime) : t.notify(d.SHOW_MAIN_VIEW))
                            }
                        ), 1)
                    }
                        ,
                        s.refresh = function(t, e) {
                            if (this.params = t,
                                this.upBossRefreshTime = parseInt(this.params.countdown),
                                this.config = B(),
                            void 0 !== e)
                                this.currIndex = e;
                            else
                                for (var i = this.params.storey, n = i.length - 1; n >= 0; n--) {
                                    var r = i[n];
                                    if ("1" === r.can && "1" === r.first) {
                                        this.currIndex = n + 1;
                                        break
                                    }
                                }
                            this.updateView(this.currIndex)
                        }
                        ,
                        s.updateView = function(t) {
                            var e = this.config.Storey[t];
                            if (7 === t)
                                this.bottomRoot.active = !1,
                                    this.upRoot.active = !0,
                                    this.updateUpBoss(this.params.bossid),
                                    this.updateUpBossSkillDesc(this.params.top),
                                    this.updateUpBossCondition(this.params.top),
                                    this.updateUpBossCD(this.upBossRefreshTime),
                                    this.updateUpBossProgress(this.params.top),
                                    this.updateUpBossRewards(this.params.top),
                                    this.updateFirstAwardState({
                                        first: "0",
                                        node: void 0
                                    });
                            else {
                                this.bottomRoot.active = !0,
                                    this.upRoot.active = !1;
                                var i = this.params.storey[t];
                                this.updateBossList(e, i),
                                    this.updateFinalBoss(i),
                                    this.updateFirstAwardState(i)
                            }
                            this.updatePageBtnState(t),
                                this.updateLevelName(e)
                        }
                        ,
                        s.updateBossList = function(t, e) {
                            for (var i = e.node, n = "1", r = 0; r < this.bossList.length; r++) {
                                var s = i[r];
                                0 == r ? 0 != this.currIndex && (n = this.params.storey[this.currIndex - 1].node[5].star) : n = i[r - 1].star;
                                var o = t.Node[r]
                                    , a = this.bossList[r]
                                    , u = void 0;
                                u = o.Fight instanceof Array ? o.Fight : [o.Fight];
                                for (var l = 0; l < u.length; l++) {
                                    var p = u[l];
                                    if (p.SpiritId === s.spiritid) {
                                        a.refresh({
                                            spiritid: s.spiritid,
                                            fightid: s.fightid,
                                            star: s.star,
                                            rewards: o.Reward,
                                            desc: p.Desc,
                                            lastStar: n,
                                            pageIndex: this.currIndex,
                                            nodeIndex: r
                                        });
                                        break
                                    }
                                }
                            }
                        }
                        ,
                        s.updateFinalBoss = function(t) {
                            var e = t.node
                                , i = e[5]
                                , n = e[4];
                            this.petAnimation.data = {
                                id: i.spiritid,
                                actionName: w.IDLE
                            };
                            for (var r = 0; r < this.stars.length; r++) {
                                this.stars[r].active = r < parseInt(i.star)
                            }
                            this.challengeButton.active = parseInt(n.star) > 0
                        }
                        ,
                        s.updateFirstAwardState = function(t) {
                            var e = t.first
                                , i = t.node;
                            "1" !== e ? void 0 === i || "0" === i[i.length - 1].star ? this.firstAwardButton.active = !1 : this.firstAwardButton.active = !0 : this.firstAwardButton.active = !1
                        }
                        ,
                        s.updateLevelName = function(t) {
                            var e;
                            e = "第" + I[this.currIndex] + "层 " + t.Name,
                                this.levelName.string = e
                        }
                        ,
                        s.updateUpBoss = function(t) {
                            this.petAnimation.data = {
                                id: t,
                                actionName: w.IDLE
                            };
                            var e = this.params.storey[this.currIndex - 1].node[5];
                            this.challengeButton.active = parseInt(e.star) > 0
                        }
                        ,
                        s.updateUpBossSkillDesc = function(t) {
                            var e = t.fdesc
                                , i = t.token;
                            this.upBossSkillDesc.string = e;
                            for (var n = 0; n < this.upBossStars.length; n++) {
                                var r = this.upBossStars[n]
                                    , s = this.upBossConditionFlagList[n]
                                    , o = this.stars[n]
                                    , a = "1" === i[n];
                                r.active = a,
                                    s.active = a,
                                    o.active = a
                            }
                        }
                        ,
                        s.updateUpBossCondition = function(t) {
                            var e = t.tdesc;
                            this.upBossConditionLabel.string = e
                        }
                        ,
                        s.updateUpBossCD = function(t) {
                            this.upBossCDLabel.string = "刷新时间：" + T.timeFormat(t).timeStr
                        }
                        ,
                        s.updateUpBossProgress = function(t) {
                            var e = t.star
                                , i = parseInt(e);
                            this.upBossEnergyCount.string = i + "/" + S;
                            for (var n = C.length, r = 0, s = 0; s < n; s++) {
                                var o = 0 == s ? R[s] : R[s] - R[s - 1];
                                if (i <= o) {
                                    r += i / o * (C[s] - r);
                                    break
                                }
                                i -= o,
                                    r = C[s]
                            }
                            this.upBossProgressBar.progress = r
                        }
                        ,
                        s.updateUpBossRewards = function(t) {
                            for (var e = t.exch, i = 0; i < this.upBossRewards.length; i++) {
                                var n = e[i]
                                    , r = this.upBossRewards[i]
                                    , s = r.node.getChildByName("flag");
                                "0" === n ? (s.active = !1,
                                    r.grayscale = !0) : "1" === n ? (s.active = !1,
                                    r.grayscale = !1) : (s.active = !0,
                                    r.grayscale = !1)
                            }
                        }
                        ,
                        s.updatePageBtnState = function(t) {
                            t > 0 ? (this.lastButton.getComponent(c).interactable = !0,
                                this.lastButton.getComponent(p).grayscale = !1) : (this.lastButton.getComponent(c).interactable = !1,
                                this.lastButton.getComponent(p).grayscale = !0),
                                t < this.params.storey.length ? (this.nextButton.getComponent(c).interactable = !0,
                                    this.nextButton.getComponent(p).grayscale = !1) : (this.nextButton.getComponent(c).interactable = !1,
                                    this.nextButton.getComponent(p).grayscale = !0)
                        }
                        ,
                        s.onCloseBtn = function() {
                            this.notify(d.CLOSE_MAIN_VIEW)
                        }
                        ,
                        s.onRuleBtn = function() {
                            7 !== this.currIndex ? this.notify(d.SHOW_RULE_VIEW) : this.notify(d.SHOW_UPBOSS_RULE_VIEW)
                        }
                        ,
                        s.onChallengeBtn = function() {
                            if (7 !== this.currIndex) {
                                var t, e = this.params.storey[this.currIndex], i = this.config.Storey[this.currIndex], n = e.node[5], r = i.Node[5];
                                t = r.Fight instanceof Array ? r.Fight : [r.Fight];
                                for (var s = 0; s < t.length; s++) {
                                    var o = t[s];
                                    if (o.SpiritId === n.spiritid) {
                                        this.notify(d.SHOW_CHALLENGE_VIEW, {
                                            spiritid: n.spiritid,
                                            fightid: n.fightid,
                                            star: n.star,
                                            rewards: r.Reward,
                                            desc: o.Desc,
                                            pageIndex: this.currIndex,
                                            nodeIndex: 5
                                        });
                                        break
                                    }
                                }
                            } else
                                this.notify(d.BATTLE_START, {
                                    fightid: this.params.top.fid,
                                    pageIndex: this.currIndex
                                })
                        }
                        ,
                        s.onLastBtn = function() {
                            this.currIndex <= 0 || (this.currIndex--,
                                this.updateView(this.currIndex))
                        }
                        ,
                        s.onNextBtn = function() {
                            if (!(this.currIndex >= this.params.storey.length)) {
                                var t = this.params.storey[this.currIndex];
                                "0" !== t.node[t.node.length - 1].star ? "0" !== t.first ? (this.currIndex++,
                                    this.updateView(this.currIndex)) : T.showAlert("请先领取本层首通奖励吧！") : T.showAlert("当前所有关卡通关才可以挑战下一层哦")
                            }
                        }
                        ,
                        s.onFirstAwardBtn = function() {
                            var t = this;
                            g(this.currIndex, (function(e) {
                                    var i = e.result.code;
                                    if (i < 0)
                                        T.showAlert(e.result.msg);
                                    else {
                                        var n = ""
                                            , r = i % 10
                                            , s = i / 10 % 10
                                            , o = i / 100 % 10;
                                        1 == o ? (n += "宠物",
                                            1 == s ? (n += "、装备",
                                            1 == r && (n += "、道具")) : 1 == r && (n += "、道具")) : 1 == s ? (n += "装备",
                                        1 == r && (n += "、道具")) : 1 == r && (n += "道具"),
                                        1 != o && 1 != s && 1 != r || T.showAlert("你获得的部分" + n + "奖励已发送至邮箱。"),
                                            T.showCgiXmlRewardList(e),
                                        e.money && "0" !== e.money && T.showAlert("恭喜你~首次通关，获得" + e.money + "洛克钻！"),
                                            t.notify(d.SHOW_MAIN_VIEW)
                                    }
                                }
                            ))
                        }
                        ,
                        s.onShopBtn = function() {
                            this.notify(d.SHOW_SHOP_VIEW)
                        }
                        ,
                        s.onCleanBtn = function() {
                            "0" === this.params.mop ? this.notify(d.SHOW_SWEEP_VIEW, this.params) : T.showAlert("今日扫荡已完成，请明天再来吧！")
                        }
                        ,
                        s.onPetBtn = function() {
                            this.notify(_.NN_V_SHOW_SPIRIT_BAG_VIEW)
                        }
                        ,
                        s.onBoosReward = function(t) {
                            var e = this
                                , i = t.target.getComponent(p);
                            if (i) {
                                var n = this.upBossRewards.indexOf(i);
                                if (!(n < 0))
                                    if ("1" === this.params.top.exch[n]) {
                                        if (4 == n)
                                            return void this.notify(d.SHOW_UPGRADE_PET_VIEW);
                                        b(n, (function(t) {
                                                var i = t.result.code;
                                                i < 0 ? T.showAlert(t.result.msg) : (2 === i ? T.showAlert("你的经验瓶已满，多余的经验奖励已下发到邮箱！请注意及时使用和领取哦！") : T.showCgiXmlRewardList(t),
                                                    e.params.top.exch[n] = "2",
                                                    e.updateUpBossRewards(e.params.top))
                                            }
                                        ))
                                    }
                            }
                        }
                        ,
                        e
                }(f)).prototype, "closeBtn", [O], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    rt = e(it.prototype, "ruleButton", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    st = e(it.prototype, "upRuleButton", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ot = e(it.prototype, "challengeButton", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    at = e(it.prototype, "lastButton", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ut = e(it.prototype, "nextButton", [P], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    lt = e(it.prototype, "firstAwardButton", [z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    pt = e(it.prototype, "shopButton", [H], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ht = e(it.prototype, "cleanButton", [F], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ct = e(it.prototype, "petButton", [W], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    ft = e(it.prototype, "levelName", [V], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    dt = e(it.prototype, "petAnimation", [k], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Bt = e(it.prototype, "bottomRoot", [G], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    gt = e(it.prototype, "upRoot", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    bt = e(it.prototype, "upBossSkillDesc", [X], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    mt = e(it.prototype, "upBossConditionLabel", [J], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    wt = e(it.prototype, "upBossCDLabel", [j], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    vt = e(it.prototype, "upBossProgressBar", [q], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    yt = e(it.prototype, "upBossEnergyCount", [K], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    It = e(it.prototype, "upBossStars", [Q], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    St = e(it.prototype, "upBossConditionFlagList", [Y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    Ct = e(it.prototype, "upBossRewards", [Z], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    Rt = e(it.prototype, "stars", [$], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    Tt = e(it.prototype, "bossList", [tt], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    et = it)) || et));
                s._RF.pop()
            }
        }
    }
));
