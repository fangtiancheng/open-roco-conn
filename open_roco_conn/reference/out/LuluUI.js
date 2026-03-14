System.register("chunks:///_virtual/LuluUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./global.ts", "./NetManager.ts", "./LuluConfig.ts", "./NetResult.ts", "./ActivityAPI.ts", "./CFunction.ts", "./NotifyDef.ts", "./NotificationCenter.ts"], (function(t) {
        var e, i, n, o, r, s, u, a, c, l, p, f, d, h, m, I, T, v, C, y, N, b, g;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        s = t._decorator,
                        u = t.Node,
                        a = t.Button,
                        c = t.Label,
                        l = t.NodeEventType,
                        p = t.UITransform,
                        f = t.Sprite,
                        d = t.Component
                }
                , function(t) {
                    h = t.PureNotificationCenter
                }
                , function(t) {
                    m = t.AppConstDef
                }
                , function(t) {
                    I = t.__global
                }
                , function(t) {
                    T = t.NetManager
                }
                , function(t) {
                    v = t.LuluConfig
                }
                , function(t) {
                    C = t.NetResult
                }
                , function(t) {
                    y = t.ActivityAPI
                }
                , function(t) {
                    N = t.CFunction
                }
                , function(t) {
                    b = t.NotifyDef
                }
                , function(t) {
                    g = t.NotificationCenter
                }
            ],
            execute: function() {
                var U, S, D, k, _, w, M, A, O, B, L, E, R, z, P, x, H, G, V, F, q, K, W, Y, j;
                r._RF.push({}, "471975yXlhGtL3AjP1WU/KJ", "LuluUI", void 0);
                var Q = s.ccclass
                    , X = s.property
                    , J = s.menu;
                t("default", (U = J("AUI/LuluUI"),
                    S = X(u),
                    D = X(u),
                    k = X(u),
                    _ = X(u),
                    w = X(u),
                    M = X(a),
                    A = X(c),
                    O = X(c),
                    B = X(a),
                    L = X(a),
                    E = X(a),
                Q(R = U((P = e((z = function(t) {
                    function e() {
                        for (var e, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                            r[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(r)) || this,
                            n(e, "ItemNodes", P, o(e)),
                            n(e, "ItemSelectNodes", x, o(e)),
                            n(e, "ItemCompNodes", H, o(e)),
                            n(e, "ruleTips", G, o(e)),
                            n(e, "itemTips", V, o(e)),
                            n(e, "TipMask", F, o(e)),
                            n(e, "itemTipStr", q, o(e)),
                            n(e, "txtCount", K, o(e)),
                            n(e, "closeBtn", W, o(e)),
                            n(e, "OkBtn", Y, o(e)),
                            n(e, "ruleBtn", j, o(e)),
                            e
                    }
                    i(e, t);
                    var r = e.prototype;
                    return r.onLoad = function() {
                        this.onInit(),
                            this.addEvents(),
                            this.updateInfo()
                    }
                        ,
                        r.onDestroy = function() {}
                        ,
                        r.updateInfo = function() {
                            this.query()
                        }
                        ,
                        r.query = function() {
                            T.tcpCGISend(v.CGI, v.CMD_QUERY, null, null, null, this.onDataReceived.bind(this), !0, !0)
                        }
                        ,
                        r.onInit = function() {
                            this.ruleTips.active = !1,
                                this.itemTips.active = !1,
                                this.TipMask.node.active = !1,
                                this.OnUpdateUI()
                        }
                        ,
                        r.addEvents = function() {
                            this.closeBtn.node.on(l.TOUCH_END, this.onClose, this),
                                this.OkBtn.node.on(u.EventType.TOUCH_END, this.onOKClick, this),
                                this.ruleBtn.node.on(l.TOUCH_END, this.onTouchTipsStart, this),
                                this.TipMask.node.on(l.TOUCH_END, this.onTouchItemTipsCancel, this);
                            for (var t = 0; t < this.ItemNodes.length; t++)
                                this.ItemNodes[t] && this.ItemNodes[t].on(l.TOUCH_END, this.onTouchItemTipsStart, this)
                        }
                        ,
                        r.onTouchItemTipsStart = function(t) {
                            var e = Number(t.currentTarget.name.substring(4))
                                , i = v.info;
                            if (i) {
                                var n = i.itemList;
                                if (1 == i.taskStatusList[e - 1])
                                    return;
                                if (n[e - 1]) {
                                    this.itemTipStr.string = n[e - 1].tips;
                                    var o = this.node.parent.getComponent(p).convertToWorldSpaceAR(t.currentTarget.position);
                                    o = t.currentTarget.parent.getComponent(p).convertToNodeSpaceAR(o),
                                        this.itemTips.setPosition(o.x, 260),
                                        this.itemTips.active = !0,
                                        this.ItemSelectNodes[e - 1].active = !0,
                                        this.TipMask.node.active = !0
                                }
                            }
                        }
                        ,
                        r.onTouchItemTipsCancel = function() {
                            this.TipMask.node.active = !1,
                                this.itemTips.active = !1,
                                this.ruleTips.active = !1;
                            for (var t = 0; t < this.ItemSelectNodes.length; t++)
                                this.ItemSelectNodes[t] && (this.ItemSelectNodes[t].active = !1)
                        }
                        ,
                        r.onTouchTipsStart = function() {
                            this.ruleTips.active = !0,
                                this.TipMask.node.active = !0
                        }
                        ,
                        r.onOKClick = function() {
                            var t = this
                                , e = v.info;
                            if (e) {
                                if (this.OkBtn.getComponent(f).grayscale)
                                    return;
                                if (0 == e.vip)
                                    return void y.showConfirmAlert("仅限 VIP 用户使用哦,要去开通 VIP 吗?", (function() {
                                            I.linkToVipPayPage()
                                        }
                                    ));
                                0 == e.times ? y.showConfirmAlert("是否消耗10洛克钻直接完成清单内任务获取奖励？（奖励可点击对应任务窗口查看）", (function() {
                                        t.refreshTask()
                                    }
                                )) : y.showConfirmAlert("是否消耗1次次数直接完成清单内任务获取奖励？（奖励可点击对应任务窗口查看）", (function() {
                                        t.refreshTask()
                                    }
                                ))
                            }
                        }
                        ,
                        r.refreshTask = function() {
                            T.tcpCGISend(v.CGI, v.CMD_SUBMIT, "&index=0", null, null, this.onDataReceived.bind(this), !0, !0)
                        }
                        ,
                        r.onClose = function() {
                            h.sendNotification(m.NN_V_DESTORY_LULU_VIEW)
                        }
                        ,
                        r.OnUpdateUI = function() {
                            var t = v.info;
                            if (t) {
                                this.txtCount.string = "拥有次数：" + t.times + "/8";
                                for (var e = 0; e < this.ItemSelectNodes.length; e++)
                                    this.ItemSelectNodes[e] && (this.ItemSelectNodes[e].active = !1);
                                for (var i = !0, n = t.taskStatusList, o = 0; o < this.ItemCompNodes.length; o++)
                                    this.ItemCompNodes[o] && (1 == n[o] ? this.ItemCompNodes[o].active = !0 : (this.ItemCompNodes[o].active = !1,
                                        i = !1));
                                this.OkBtn.getComponent(f).grayscale = i
                            }
                        }
                        ,
                        r.onDataReceived = function(t, e, i) {
                            var n = this
                                , o = new C(t)
                                , r = t;
                            if (o.value >= 0 && this.node)
                                switch (e) {
                                    case v.CMD_QUERY:
                                        v.InitInfo(r),
                                            this.OnUpdateUI();
                                        break;
                                    case v.CMD_SUBMIT:
                                        g.sendNotification(b.MAIN_UI_UPDATE_DIAMOND),
                                            v.UpdateInfo(r),
                                        0 != Number(r.add) && y.showAlert("获得" + Number(r.add) + "点暗黑城声望"),
                                            this.OnUpdateUI(),
                                            y.showCgiXmlRewardList(r, new N((function() {
                                                    n.query()
                                                }
                                            )))
                                }
                            else
                                -2 == o.value && e == v.CMD_SUBMIT && I.showRocoDiamondConfirm()
                        }
                        ,
                        r.TestData = function() {
                            return {
                                result: {
                                    value: "0",
                                    msg: "ok"
                                },
                                Item: [{
                                    id: "17563651",
                                    count: "75",
                                    type: "2"
                                }, {
                                    id: "17629187",
                                    count: "1",
                                    type: "2"
                                }, {
                                    id: "17367045",
                                    count: "10",
                                    type: "2"
                                }, {
                                    id: "17367044",
                                    count: "5",
                                    type: "2"
                                }, {
                                    id: "67372953",
                                    count: "1",
                                    type: "2"
                                }, {
                                    id: "67372954",
                                    count: "1",
                                    type: "2"
                                }, {
                                    id: "67372956",
                                    count: "1",
                                    type: "2"
                                }, {
                                    id: "67372953",
                                    count: "1",
                                    type: "2"
                                }, {
                                    id: "67372956",
                                    count: "1",
                                    type: "2"
                                }, {
                                    id: "67372952",
                                    count: "1",
                                    type: "2"
                                }, {
                                    id: "67372953",
                                    count: "1",
                                    type: "2"
                                }, {
                                    id: "67372954",
                                    count: "1",
                                    type: "2"
                                }, {
                                    id: "67372958",
                                    count: "1",
                                    type: "2"
                                }, {
                                    id: "67372954",
                                    count: "1",
                                    type: "2"
                                }, {
                                    id: "67372128",
                                    count: "50000",
                                    type: "5"
                                }],
                                add: "100",
                                vip: "5",
                                status: ["3", "1", "1200000", "3"],
                                max: ["3", "1", "1200000", "3"],
                                times: "0"
                            }
                        }
                        ,
                        e
                }(d)).prototype, "ItemNodes", [S], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }),
                    x = e(z.prototype, "ItemSelectNodes", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    H = e(z.prototype, "ItemCompNodes", [k], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    G = e(z.prototype, "ruleTips", [_], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    V = e(z.prototype, "itemTips", [w], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = e(z.prototype, "TipMask", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    q = e(z.prototype, "itemTipStr", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    K = e(z.prototype, "txtCount", [O], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    W = e(z.prototype, "closeBtn", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    Y = e(z.prototype, "OkBtn", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = e(z.prototype, "ruleBtn", [E], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    R = z)) || R) || R));
                r._RF.pop()
            }
        }
    }
));
