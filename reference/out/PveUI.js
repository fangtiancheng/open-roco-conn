System.register("chunks:///_virtual/PveUI.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./AgentNode.ts", "./PureNotificationCenter.ts", "./AppConstDef.ts", "./global.ts", "./StarsTowerMessage.ts", "./SevenHolyLandMessage.ts", "./BraveTrainingMessage.ts", "./SentinelIntelligenceMessage.ts", "./SecretRealmMessage.ts", "./BloodTalenMessage.ts"], (function(t) {
        var e, i, n, s, o, r, a, c, h, u, l, _, d, f, g, v, p, m, N, I, C, y, B;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    n = t.initializerDefineProperty,
                    s = t.assertThisInitialized,
                    o = t.createClass
            }
                , function(t) {
                    r = t.cclegacy,
                        a = t._decorator,
                        c = t.Node,
                        h = t.NodeEventType,
                        u = t.UIOpacity,
                        l = t.tween,
                        _ = t.Vec3,
                        d = t.Component
                }
                , function(t) {
                    f = t.AgentNode
                }
                , function(t) {
                    g = t.PureNotificationCenter
                }
                , function(t) {
                    v = t.AppConstDef
                }
                , function(t) {
                    p = t.__global
                }
                , function(t) {
                    m = t.StarsTowerMessage
                }
                , function(t) {
                    N = t.SevenHolyLandMessage
                }
                , function(t) {
                    I = t.BraveTrainingMessage
                }
                , function(t) {
                    C = t.SentinelIntelligenceMessage
                }
                , function(t) {
                    y = t.SecretRealmMessage
                }
                , function(t) {
                    B = t.BloodTalenMessage
                }
            ],
            execute: function() {
                var b, M, S, E, T;
                r._RF.push({}, "c3844pRN+NMoou8EczQRAyg", "PveUI", void 0);
                var w = a.ccclass
                    , W = a.property
                    , k = a.menu
                    , x = (t("default", (b = k("AUI/PveUI"),
                    M = W(c),
                w(S = b((T = e((E = function(t) {
                    function e() {
                        for (var e, i = arguments.length, o = new Array(i), r = 0; r < i; r++)
                            o[r] = arguments[r];
                        return (e = t.call.apply(t, [this].concat(o)) || this)._ui = void 0,
                            e._itemWidth = 270,
                            e._duration = .3,
                            e._currentIndex = 0,
                            e._visibleCount = 5,
                            n(e, "pveNodes", T, s(e)),
                            e
                    }
                    i(e, t);
                    var r = e.prototype;
                    return r.onLoad = function() {}
                        ,
                        r.start = function() {
                            this._ui || (this._ui = new x(this.node)),
                                this._ui.closeBtn.on(h.TOUCH_END, this.onClose, this),
                                this._ui.leftBtn.on(c.EventType.TOUCH_END, this.onLeftClick, this),
                                this._ui.rightBtn.on(c.EventType.TOUCH_END, this.onRightClick, this),
                                this._ui.leftBtn.visible = this.items.length > this._visibleCount,
                                this._ui.rightBtn.visible = this.items.length > this._visibleCount;
                            for (var t = 0; t < this.pveNodes.length; t++)
                                if (this.pveNodes[t]) {
                                    this.pveNodes[t].on(h.TOUCH_END, this.onOpenPve, this);
                                    var e = t - this._currentIndex;
                                    this.pveNodes[t].active = e >= 0 && e < this._visibleCount
                                }
                        }
                        ,
                        r.onDestroy = function() {}
                        ,
                        r.onLeftClick = function() {
                            this._currentIndex <= 0 || (this._currentIndex--,
                                this.moveItems(!1))
                        }
                        ,
                        r.onRightClick = function() {
                            this._currentIndex >= this.items.length - this._visibleCount || (this._currentIndex++,
                                this.moveItems(!0))
                        }
                        ,
                        r.moveItems = function(t) {
                            for (var e = this._currentIndex * -this._itemWidth - 540, i = 0; i < this.items.length; i++) {
                                var n = this.items[i]
                                    , s = t ? i - this._currentIndex + 1 : i - this._currentIndex;
                                n.active = s >= 0 && s <= this._visibleCount,
                                    n.setScale(1, 1, 1),
                                    n.getComponent(u).opacity = 255,
                                    l(n).to(this._duration, {
                                        position: new _(i * this._itemWidth + e,0)
                                    }).start()
                            }
                            if (t) {
                                var o = this._currentIndex + this._visibleCount - 1;
                                if (o >= 0 && o < this.items.length) {
                                    var r = this.items[o];
                                    r.getComponent(u).opacity = 0,
                                        r.setScale(.5, .5, 1),
                                        l(r.getComponent(u)).to(this._duration, {
                                            opacity: 255
                                        }).start(),
                                        l(r).to(this._duration, {
                                            scale: new _(1,1,1)
                                        }).start()
                                }
                                var a = this._currentIndex - 1;
                                a >= 0 && a < this.items.length && (l(this.items[a].getComponent(u)).to(this._duration, {
                                    opacity: 0
                                }).start(),
                                    l(this.items[a]).to(this._duration, {
                                        scale: new _(.5,.5,1)
                                    }).start())
                            } else {
                                var c = this._currentIndex;
                                if (console.error("isRight渐现==" + c),
                                c >= 0 && c < this.items.length) {
                                    var h = this.items[c];
                                    h.getComponent(u).opacity = 0,
                                        h.setScale(.5, .5, 1),
                                        l(h.getComponent(u)).to(this._duration, {
                                            opacity: 255
                                        }).start(),
                                        l(h).to(this._duration, {
                                            scale: new _(1,1,1)
                                        }).start()
                                }
                                var d = this._currentIndex + this._visibleCount;
                                d >= 0 && d < this.items.length && (l(this.items[d].getComponent(u)).to(this._duration, {
                                    opacity: 0
                                }).start(),
                                    l(this.items[d]).to(this._duration, {
                                        scale: new _(.5,.5,1)
                                    }).start())
                            }
                        }
                        ,
                        r.onClose = function() {
                            g.sendNotification(v.NN_V_DESTORY_PVE_VIEW)
                        }
                        ,
                        r.onOpenPve = function(t) {
                            switch (Number(t.currentTarget.name.substring(3))) {
                                case 1:
                                    g.sendNotification(m.SHOW_MAIN_VIEW);
                                    break;
                                case 2:
                                    g.sendNotification(N.SHOW_MAIN_VIEW);
                                    break;
                                case 3:
                                    g.sendNotification(I.SHOW_MAIN_VIEW);
                                    break;
                                case 4:
                                    g.sendNotification(C.SHOW_MASTER_VIEW);
                                    break;
                                case 5:
                                    g.sendNotification(y.SHOW_MASTER_VIEW);
                                    break;
                                case 6:
                                    g.sendNotification(B.SHOW_MAIN_VIEW);
                                    break;
                                default:
                                    p.showMsgBox("暂未开通，敬请期待！")
                            }
                        }
                        ,
                        o(e, [{
                            key: "items",
                            get: function() {
                                return this.pveNodes
                            }
                        }]),
                        e
                }(d)).prototype, "pveNodes", [M], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return []
                    }
                }),
                    S = E)) || S) || S)),
                    function(t) {
                        function e() {
                            for (var e, i = arguments.length, n = new Array(i), s = 0; s < i; s++)
                                n[s] = arguments[s];
                            return (e = t.call.apply(t, [this].concat(n)) || this)._closeBtn = void 0,
                                e._leftBtn = void 0,
                                e._rightBtn = void 0,
                                e
                        }
                        return i(e, t),
                            o(e, [{
                                key: "closeBtn",
                                get: function() {
                                    return this._closeBtn || (this._closeBtn = new f(this.getChildByName("closeBtn"))),
                                        this._closeBtn
                                }
                            }, {
                                key: "leftBtn",
                                get: function() {
                                    return this._leftBtn || (this._leftBtn = new f(this.getChildByName("leftBtn"))),
                                        this._leftBtn
                                }
                            }, {
                                key: "rightBtn",
                                get: function() {
                                    return this._rightBtn || (this._rightBtn = new f(this.getChildByName("rightBtn"))),
                                        this._rightBtn
                                }
                            }]),
                            e
                    }(f));
                r._RF.pop()
            }
        }
    }
));
