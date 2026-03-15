System.register("chunks:///_virtual/GiftCenterLuoKeGiftUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameUI.ts", "./CGILoader.ts", "./global.ts", "./CGIEvent.ts", "./NetResult.ts", "./GiftCenterLuoKeConfig.ts", "./ActivityAPI.ts", "./DEFINE.ts", "./GiftCenterMessage.ts", "./GiftCenterCommonTips.ts", "./NotifyDef.ts", "./NotificationCenter.ts"], (function(t) {
        var n, i, e, o, r, s, a, c, u, l, h, f, p, b, d, g, _, C, E, I, T, v, m, G;
        return {
            setters: [function(t) {
                n = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    e = t.initializerDefineProperty,
                    o = t.assertThisInitialized
            }
                , function(t) {
                    r = t.cclegacy,
                        s = t._decorator,
                        a = t.Node,
                        c = t.Button,
                        u = t.ProgressBar,
                        l = t.Label,
                        h = t.NodeEventType,
                        f = t.sys
                }
                , function(t) {
                    p = t.GameSubUI
                }
                , function(t) {
                    b = t.CGILoader
                }
                , function(t) {
                    d = t.__global
                }
                , function(t) {
                    g = t.CGIEvent
                }
                , function(t) {
                    _ = t.NetResult
                }
                , function(t) {
                    C = t.GiftCenterLuoKeConfig
                }
                , function(t) {
                    E = t.ActivityAPI
                }
                , function(t) {
                    I = t.DEFINE
                }
                , function(t) {
                    T = t.GiftCenterMessage
                }
                , function(t) {
                    v = t.GiftCenterCommonTips
                }
                , function(t) {
                    m = t.NotifyDef
                }
                , function(t) {
                    G = t.NotificationCenter
                }
            ],
            execute: function() {
                var R, S, y, N, L, U, O, A, M, D, w, P, B, z, F, V, W, H, K, x, j, Y;
                r._RF.push({}, "8158apZ34xNhIhXo1Y4wEBn", "GiftCenterLuoKeGiftUI", void 0);
                var k = s.ccclass
                    , Q = s.property;
                t("GiftCenterLuoKeGiftUI", (R = Q(a),
                    S = Q(c),
                    y = Q(a),
                    N = Q(a),
                    L = Q(u),
                    U = Q(l),
                    O = Q(c),
                    A = Q(a),
                    M = Q(v),
                    D = Q(a),
                k((B = n((P = function(t) {
                    function n() {
                        for (var n, i = arguments.length, r = new Array(i), s = 0; s < i; s++)
                            r[s] = arguments[s];
                        return n = t.call.apply(t, [this].concat(r)) || this,
                            e(n, "closeBtn", B, o(n)),
                            e(n, "btnGet", z, o(n)),
                            e(n, "getFlags", F, o(n)),
                            e(n, "btnGetGray", V, o(n)),
                            e(n, "progress", W, o(n)),
                            e(n, "txtNum", H, o(n)),
                            e(n, "btnSign", K, o(n)),
                            e(n, "tips", x, o(n)),
                            e(n, "iconTips", j, o(n)),
                            e(n, "icons", Y, o(n)),
                            n.m_vip = 0,
                            n._loader = void 0,
                            n
                    }
                    i(n, t);
                    var r = n.prototype;
                    return r.onLoad = function() {
                        this.progress.progress = 0,
                            this.tips.active = !1,
                            this.addEvents(),
                            this.refresh()
                    }
                        ,
                        r.refresh = function() {
                            this._loader = new b(I.CGI_ROOT + "consumption_gift",d.SysAPI.getNetSysAPI().createURLLoader(!0)),
                                this._loader.addEventListener(g.COMPLETE, this.onRecieveData, this),
                                this._loader.addEventListener(g.GOT_ERROR, this.onNetError, this)
                        }
                        ,
                        r.updateInfo = function(t) {
                            this._loader.sendData("?cmd=" + C.CMD_QUERY, this._loader.getSendObj())
                        }
                        ,
                        r.onNetError = function(t) {
                            d.UI.alert("", t.msg)
                        }
                        ,
                        r.onRecieveData = function(t) {
                            var n = new _(t.data)
                                , i = t.data;
                            t.data;
                            if (n.value >= 0)
                                switch (t.sendType) {
                                    case "?cmd=" + C.CMD_QUERY:
                                        this.m_vip = Number(i.VIP),
                                            this.updateUI(i);
                                        break;
                                    case "?cmd=" + C.CMD_SUBMIT:
                                        this.updateUI(i),
                                        E.showCgiXmlRewardList(i, null, !1, !0) || d.UI.alert("", n.msg),
                                            G.sendNotification(m.MAIN_UI_UPDATE_DIAMOND)
                                }
                            else
                                d.UI.alert("", n.msg)
                        }
                        ,
                        r.updateUI = function(t) {
                            for (var n = 0, i = 0; i < C.GIFT_TOTAL_NUM; i++) {
                                if (i < t.button.length) {
                                    var e = Number(t.button[i]);
                                    this.btnGet[i].node.active = 1 == e,
                                        this.getFlags[i].active = 2 == e,
                                        this.btnGetGray[i].active = 2 == e
                                }
                                0 != t.button[i] && n++
                            }
                            this.progress.progress = C.PROGRESS_ARR[n],
                                this.txtNum.string = String(t.cost) + "/720"
                        }
                        ,
                        r.addEvents = function() {
                            this.closeBtn.on(h.TOUCH_END, this.onCloseBtn, this);
                            for (var t = 0; t < this.btnGet.length; t++)
                                this.btnGet[t].node.on(c.EventType.CLICK, this.onGetGift.bind(this, t), this);
                            f.platform === f.Platform.MOBILE_BROWSER ? (this.btnSign.node.on(h.TOUCH_START, this.onTouchStart, this, !0),
                                this.btnSign.node.on(h.TOUCH_CANCEL, this.onTouchCancel, this, !0)) : (this.btnSign.node.on(h.MOUSE_ENTER, this.onTouchStart, this),
                                this.btnSign.node.on(h.MOUSE_LEAVE, this.onTouchCancel, this));
                            for (var n = 0; n < this.icons.length; n++) {
                                f.platform === f.Platform.MOBILE_BROWSER ? (this.icons[n].on(h.TOUCH_START, this.onTouchIconStart.bind(this, n), this, !0),
                                    this.icons[n].on(h.TOUCH_CANCEL, this.onTouchIconCancel.bind(this, n), this, !0)) : (this.icons[n].on(h.MOUSE_ENTER, this.onTouchIconStart.bind(this, n), this),
                                    this.icons[n].on(h.MOUSE_LEAVE, this.onTouchIconCancel.bind(this, n), this));
                                var i = n < 4 ? C.REWARD_NORMAL[n] : C.REWARD_VIP[n % 4 + 1]
                                    , e = i.split("\n").length - 1;
                                this.iconTips[n].setTips(i, e)
                            }
                        }
                        ,
                        r.onTouchStart = function() {
                            this.tips.active = !0
                        }
                        ,
                        r.onTouchCancel = function() {
                            this.tips.active = !1
                        }
                        ,
                        r.onTouchIconStart = function(t) {
                            this.iconTips[t].node.active = !0
                        }
                        ,
                        r.onTouchIconCancel = function(t) {
                            this.iconTips[t].node.active = !1
                        }
                        ,
                        r.onGetGift = function(t) {
                            var n = this;
                            E.showConfirmAlert("您当前是" + (0 == this.m_vip ? "非VIP" : "VIP") + "用户，可领取奖励：\n" + (0 == this.m_vip ? C.REWARD_NORMAL_MSG[t] : C.REWARD_VIP_MSG[t]) + "是否确认并领取？", (function() {
                                    var i = new Object;
                                    i.id = t,
                                        n._loader.sendData("?cmd=" + C.CMD_SUBMIT, n._loader.getSendObj(i))
                                }
                            ))
                        }
                        ,
                        r.onCloseBtn = function() {
                            this.notify(T.CLOSE_MAIN_VIEW)
                        }
                        ,
                        n
                }(p)).prototype, "closeBtn", [R], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    z = n(P.prototype, "btnGet", [S], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    F = n(P.prototype, "getFlags", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    V = n(P.prototype, "btnGetGray", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    W = n(P.prototype, "progress", [L], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    H = n(P.prototype, "txtNum", [U], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    K = n(P.prototype, "btnSign", [O], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = n(P.prototype, "tips", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    j = n(P.prototype, "iconTips", [M], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    Y = n(P.prototype, "icons", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return []
                        }
                    }),
                    w = P)) || w));
                r._RF.pop()
            }
        }
    }
));
