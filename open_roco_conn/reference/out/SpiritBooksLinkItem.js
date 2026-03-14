System.register("chunks:///_virtual/SpiritBooksLinkItem.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./DEFINE.ts", "./ConstSpiritBooks.ts", "./PetIcon.ts", "./SpiritBooksDataProxy.ts", "./Icon.ts", "./ToolTip.ts", "./BubbleSkinType.ts", "./PureNotificationCenter.ts", "./SpiritBooksMessage.ts"], (function(t) {
        var e, i, o, n, s, c, r, l, a, u, h, p, T, d, f, _, m, E, I, b, C, S;
        return {
            setters: [function(t) {
                e = t.applyDecoratedDescriptor,
                    i = t.inheritsLoose,
                    o = t.initializerDefineProperty,
                    n = t.assertThisInitialized,
                    s = t.createClass
            }
                , function(t) {
                    c = t.cclegacy,
                        r = t._decorator,
                        l = t.Node,
                        a = t.NodeEventType,
                        u = t.sys,
                        h = t.Vec3,
                        p = t.Component
                }
                , function(t) {
                    T = t.DEFINE
                }
                , function(t) {
                    d = t.ConstSpiritBooks
                }
                , function(t) {
                    f = t.PetIcon
                }
                , function(t) {
                    _ = t.SpiritBooksDataProxy
                }
                , function(t) {
                    m = t.IconType
                }
                , function(t) {
                    E = t.ToolTipComponent,
                        I = t.TipUtils
                }
                , function(t) {
                    b = t.BubbleSkinType
                }
                , function(t) {
                    C = t.PureNotificationCenter
                }
                , function(t) {
                    S = t.SpiritBooksMessage
                }
            ],
            execute: function() {
                var k, v, B, y, D, N, A, g, L, w, O, U, F, P, x;
                c._RF.push({}, "d39ef6ELsRFN7GuJ8jcey1p", "SpiritBooksLinkItem", void 0);
                var R = r.ccclass
                    , z = r.property;
                t("SpiritBooksLinkItem", (k = R("SpiritBooksLinkItem"),
                    v = z(l),
                    B = z(f),
                    y = z(l),
                    D = z(l),
                    N = z(l),
                    A = z(l),
                k((w = e((L = function(t) {
                    function e() {
                        for (var e, i = arguments.length, s = new Array(i), c = 0; c < i; c++)
                            s[c] = arguments[c];
                        return e = t.call.apply(t, [this].concat(s)) || this,
                            o(e, "mcUnknowBg", w, n(e)),
                            o(e, "mcIcon", O, n(e)),
                            o(e, "spiritBallIcon", U, n(e)),
                            o(e, "selected", F, n(e)),
                            o(e, "selectedBall", P, n(e)),
                            o(e, "touchNode", x, n(e)),
                            e.commonTips = null,
                            e._currentDes = null,
                            e._url = T.COMM_ROOT + "res/combat/icons/",
                            e._select = void 0,
                            e._state = void 0,
                            e._tooltip = void 0,
                            e
                    }
                    i(e, t);
                    var c = e.prototype;
                    return c.onLoad = function() {
                        this.addEvents()
                    }
                        ,
                        c.addEvents = function() {
                            this.touchNode.on(a.TOUCH_END, this.onClickLinkItem, this),
                                this.touchNode.addComponent(E),
                                u.platform === u.Platform.MOBILE_BROWSER ? (this.touchNode.on(a.TOUCH_START, this.onTouchTipsStart, this, !0),
                                    this.touchNode.on(a.TOUCH_CANCEL, this.onTouchTipsCancel, this, !0)) : (this.touchNode.on(a.MOUSE_ENTER, this.onTouchTipsStart, this),
                                    this.touchNode.on(a.MOUSE_LEAVE, this.onTouchTipsCancel, this))
                        }
                        ,
                        c.onClickLinkItem = function() {
                            this.select = !0;
                            var t = {
                                id: this.des.id,
                                linkItem: this
                            };
                            C.sendNotification(S.UPDATE_SELECT_STATE, t)
                        }
                        ,
                        c.onTouchTipsStart = function() {
                            this.node.scale = new h(1.1,1.1,1.1)
                        }
                        ,
                        c.onTouchTipsCancel = function() {
                            this.node.scale = new h(1,1,1)
                        }
                        ,
                        c.updateInfo = function(t) {
                            this._currentDes = t,
                                this._state = _.getStateByID(t.id),
                                this._state == d.STATE_UNKONW ? (this.mcUnknowBg.active = !0,
                                    this.mcIcon.node.active = !1) : (this.select = this.select,
                                    this.mcUnknowBg.active = !1,
                                    this.mcIcon.node.active = !0,
                                    this.mcIcon.params = {
                                        type: m.PET
                                    },
                                    this.mcIcon.data = {
                                        id: t.id
                                    });
                            var e = _.getSpiritDesbyID(t.EvolutionFormID);
                            switch (e ? 0 != e.evolutionLevel ? this._tooltip = this.setDefaultColorAndText(this._currentDes.name + " " + e.evolutionLevel + "级进化") : this._tooltip = this.setDefaultColorAndText(this._currentDes.name + " 超进化") : this._tooltip = this.setDefaultColorAndText(this._currentDes.name),
                                this.spiritBallIcon.active = !1,
                                this._state) {
                                case d.STATE_FIND:
                                    this._tooltip += "<br/><color=#FF0000>尚未拥有</color>";
                                    break;
                                case d.STATE_UNKONW:
                                    this._tooltip += "<br/><color=#FF0000>尚未遇见</color>";
                                    break;
                                case d.STATE_CATCH:
                                    this._tooltip += "<br/>" + this.setDefaultColorAndText("已拥有"),
                                        this.spiritBallIcon.active = !0;
                                    break;
                                case d.STATE_RELEASE:
                                    this._tooltip += "<br/>" + this.setDefaultColorAndText("曾经拥有")
                            }
                            I.CreateTip(this.touchNode, this._tooltip, b.BLACK_TOOLTIP)
                        }
                        ,
                        c.setDefaultColorAndText = function(t) {
                            return "<color=#000000>" + t + "</color>"
                        }
                        ,
                        s(e, [{
                            key: "des",
                            get: function() {
                                return this._currentDes
                            }
                        }, {
                            key: "select",
                            get: function() {
                                return this._select
                            },
                            set: function(t) {
                                this._select = t,
                                    this.mcIcon.icon.grayscale = this._state == d.STATE_FIND,
                                    t ? (this.selected.active = this._state != d.STATE_CATCH,
                                        this.selectedBall.active = !this.selected.active) : (this.selected.active = !1,
                                        this.selectedBall.active = !1)
                            }
                        }]),
                        e
                }(p)).prototype, "mcUnknowBg", [v], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: function() {
                        return null
                    }
                }),
                    O = e(L.prototype, "mcIcon", [B], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    U = e(L.prototype, "spiritBallIcon", [y], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    F = e(L.prototype, "selected", [D], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    P = e(L.prototype, "selectedBall", [N], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    x = e(L.prototype, "touchNode", [A], {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        initializer: function() {
                            return null
                        }
                    }),
                    g = L)) || g));
                c._RF.pop()
            }
        }
    }
));
