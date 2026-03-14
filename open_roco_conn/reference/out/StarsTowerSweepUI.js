System.register("chunks:///_virtual/StarsTowerSweepUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./StarsTowerMessage.ts", "./StarsTowerCGI.ts", "./ActivityAPI.ts", "./StarsTowerConfig.ts", "./global.ts", "./ToolTip.ts", "./BubbleSkinType.ts"], (function(e) {
        var t, i, n, o, l, r, s, a, u, c, p, h, f, v, g, d, w, b, S, L, y, T;
        return {
            setters: [function(e) {
                t = e.applyDecoratedDescriptor,
                    i = e.inheritsLoose,
                    n = e.initializerDefineProperty,
                    o = e.assertThisInitialized,
                    l = e.createClass
            }
                , function(e) {
                    r = e.cclegacy,
                        s = e._decorator,
                        a = e.Node,
                        u = e.Toggle,
                        c = e.Label,
                        p = e.NodeEventType
                }
                , function(e) {
                    h = e.GameUI
                }
                , function(e) {
                    f = e.StarsTowerMessage
                }
                , function(e) {
                    v = e.GetStarsTowerConfig,
                        g = e.QuickFight,
                        d = e.GetAutoSelt
                }
                , function(e) {
                    w = e.ActivityAPI
                }
                , function(e) {
                    b = e.FLOOR_INDEX_ARR,
                        S = e.CLIP_ARR
                }
                , function(e) {
                    L = e.__global
                }
                , function(e) {
                    y = e.TipUtils
                }
                , function(e) {
                    T = e.BubbleSkinType
                }
            ],
            execute: function() {
                var E, A, m, C, B, I, _, U, R, q, N, O, D, k, z, P, M, H, V, W;
                r._RF.push({}, "4b23b+yumJNeYD0uVVT0lL+", "StarsTowerSweepUI", void 0);
                var G = s.ccclass
                    , F = s.property;
                e("StarsTowerSweepUI", (E = F(a),
                    A = F(a),
                    m = F(a),
                    C = F(a),
                    B = F(u),
                    I = F(a),
                    _ = F(a),
                    U = F(c),
                    R = F(a),
                G((O = t((N = function(e) {
                    function t() {
                        for (var t, i = arguments.length, l = new Array(i), r = 0; r < i; r++)
                            l[r] = arguments[r];
                        return t = e.call.apply(e, [this].concat(l)) || this,
                            n(t, "closeBtn", O, o(t)),
                            n(t, "ruleButton", D, o(t)),
                            n(t, "confirmButton", k, o(t)),
                            n(t, "autoSellButton", z, o(t)),
                            n(t, "autoSellToggle", P, o(t)),
                            n(t, "levelRoot", M, o(t)),
                            n(t, "LevelDisabledRoot", H, o(t)),
                            n(t, "previewAwardLabel", V, o(t)),
                            n(t, "tipsNode", W, o(t)),
                            t.selectedLevel = {},
                            t.params = void 0,
                            t
                    }
                    i(t, e);
                    var r = t.prototype;
                    return r.start = function() {
                        this.closeBtn.on(p.TOUCH_END, this.onCloseBtn, this),
                            this.ruleButton.on(p.TOUCH_END, this.onRuleBtn, this),
                            this.confirmButton.on(p.TOUCH_END, this.onConfirmBtn, this),
                            this.autoSellButton.on(p.TOUCH_END, this.onAutoSellBtn, this),
                            y.CreateTip(this.tipsNode, "勾选后仅保留7层掉落的史诗级装备，其余装备自动出售为等价洛克贝。", T.COMMON_TOOLTIP),
                            this.onInitLevelToggle()
                    }
                        ,
                        r.refresh = function(e) {
                            this.params = e,
                                this.updateView()
                        }
                        ,
                        r.onInitLevelToggle = function() {
                            for (var e = this.levelRoot.children, t = 0; t < e.length; t++) {
                                e[t].on(p.TOUCH_END, this.onSelectLevel, this)
                            }
                        }
                        ,
                        r.updateView = function() {
                            this.onUpdateLevel(this.params),
                                this.onUpdateAutoSell(this.params),
                                this.onUpdatePreviewAward()
                        }
                        ,
                        r.onUpdateLevel = function(e) {
                            for (var t = e.storey, i = this.LevelDisabledRoot.children, n = this.levelRoot.children, o = 0; o < i.length; o++) {
                                var l = i[o]
                                    , r = n[o];
                                l.active = "0" === t[o].can,
                                    r.active = !l.active
                            }
                        }
                        ,
                        r.onUpdatePreviewAward = function() {
                            var e = this.selectedLevelList;
                            if (0 === e.length)
                                this.previewAwardLabel.string = "";
                            else {
                                var t = v();
                                if (2 == e.length) {
                                    var i = t.Storey[e[0]].Mop
                                        , n = t.Storey[e[1]].Mop;
                                    this.previewAwardLabel.string = "物攻武器：" + i.Equip[0] + " * 1、" + n.Equip[0] + " * 1\n魔攻武器：" + i.Equip[2] + " * 1、" + n.Equip[2] + " * 1\n物防防具：" + i.Equip[1] + " * 1、" + n.Equip[1] + " * 1\n魔防防具：" + i.Equip[3] + " * 1、" + n.Equip[3] + " * 1\n精力饰品：" + i.Equip[4] + " * 1、" + n.Equip[4] + " * 1\n宠物碎片：" + b[e[0]] + "层宠物碎片 * 5、" + b[e[1]] + "层宠物碎片 * 5\n"
                                } else {
                                    var o = t.Storey[e[0]].Mop;
                                    this.previewAwardLabel.string = "物攻武器：" + o.Equip[0] + " * 1\n魔攻武器：" + o.Equip[2] + " * 1\n物防防具：" + o.Equip[1] + " * 1\n魔防防具：" + o.Equip[3] + " * 1\n精力饰品：" + o.Equip[4] + " * 1\n宠物碎片：" + b[e[0]] + "层宠物碎片 * 5\n"
                                }
                            }
                        }
                        ,
                        r.onUpdateAutoSell = function(e) {
                            var t = e.sell;
                            this.autoSellToggle.isChecked = "1" === t
                        }
                        ,
                        r.onCloseBtn = function() {
                            this.notify(f.CLOSE_SWEEP_VIEW)
                        }
                        ,
                        r.onRuleBtn = function() {
                            this.notify(f.SHOW_SWEEP_RULE_VIEW)
                        }
                        ,
                        r.onConfirmBtn = function() {
                            var e = this
                                , t = this.selectedLevelList;
                            if (0 !== t.length) {
                                var i = function(t) {
                                    if (t.result.code < 0)
                                        L.showMsgBox(t.result.msg);
                                    else {
                                        var i = t.clip;
                                        "string" == typeof i ? w.showAlert("获得" + S[parseInt(i)] + "碎片*5") : 2 == i.length ? w.showAlert("获得" + S[parseInt(i[0])] + "碎片*5和" + S[parseInt(i[1])] + "碎片*5") : w.showAlert("获得" + S[parseInt(i[0])] + "碎片*5"),
                                            w.showAlert("扫荡完成，获得的奖励已发送至邮箱"),
                                            e.onCloseBtn(),
                                            e.notify(f.SHOW_MAIN_VIEW)
                                    }
                                };
                                1 !== t.length ? 2 !== t.length || g(t[0] + 1, t[1] + 1, this.autoSellToggle.isChecked ? 1 : 0, i) : w.showConfirmAlert("当前只选择了1层，是否确定要开始扫荡？", (function() {
                                        g(t[0] + 1, 0, e.autoSellToggle.isChecked ? 1 : 0, i)
                                    }
                                ))
                            } else
                                w.showAlert("请选择要扫荡的层数")
                        }
                        ,
                        r.onAutoSellBtn = function() {
                            var e = this;
                            d((function(t) {
                                    t.result.code < 0 ? w.showAlert(t.result.msg) : e.onUpdateAutoSell(t)
                                }
                            ))
                        }
                        ,
                        r.onSelectLevel = function(e) {
                            var t = e.target
                                , i = t.getComponent(u)
                                , n = t.getSiblingIndex();
                            i.isChecked ? (i.isChecked = !1,
                                this.selectedLevel[n] = void 0) : 2 == this.selectedLevelList.length ? w.showAlert("最多只能选择2层！") : (i.isChecked = !0,
                                this.selectedLevel[n] = n),
                                this.onUpdatePreviewAward()
                        }
                        ,
                        l(t, [{
                            key: "selectedLevelList",
                            get: function() {
                                var e = [];
                                for (var t in this.selectedLevel) {
                                    var i = this.selectedLevel[t];
                                    void 0 !== i && e.push(i)
                                }
                                return e
                            }
                        }]),
                        t
                }(h)).prototype, "closeBtn", [E], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    D = t(N.prototype, "ruleButton", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    k = t(N.prototype, "confirmButton", [m], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    z = t(N.prototype, "autoSellButton", [C], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    P = t(N.prototype, "autoSellToggle", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    M = t(N.prototype, "levelRoot", [I], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    H = t(N.prototype, "LevelDisabledRoot", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    V = t(N.prototype, "previewAwardLabel", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    W = t(N.prototype, "tipsNode", [R], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    q = N)) || q));
                r._RF.pop()
            }
        }
    }
));
